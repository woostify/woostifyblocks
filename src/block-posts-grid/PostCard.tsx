import { sprintf, __ } from "@wordpress/i18n";
import { dateI18n, format, getSettings } from "@wordpress/date";
import React, { FC } from "react";
import { AuthorRoot } from "./AuthorType";
import { CategoryRoot } from "./CategoryType";
import { getFeaturedImageDetails } from "./getFeaturedImageDetails";
import { PostRoot } from "./types";
import { WCB_POST_GRID_PANEL_POST_CONTENT } from "./WcbPostGridPanelPostContent";
import { WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE } from "./WcbPostGridPanelPostFeaturedImage";
import { WCB_POST_GRID_PANEL_POST_META } from "./WcbPostGridPanelPostMeta";
import { WCB_POST_GRID_PANEL_READMORE_LINK } from "./WcbPostGridPanelReadMoreLink";
import useRedirectionPreventedNotice from "../hooks/useRedirectionPreventedNotice";

export const getCategoriesOfPost = (
	post: PostRoot,
	categories: CategoryRoot[]
) => {
	const catIds = post.categories || [];
	return categories.filter((cat) => catIds.includes(cat.id));
};
export const getAuthorOfPost = (post: PostRoot, authors: AuthorRoot[]) => {
	const authorId = post.author;
	return authors.filter((author) => author.id === authorId)[0];
};

interface Props {
	postData: PostRoot;
	categories: CategoryRoot[];
	authors: AuthorRoot[];
	postMetaSettings: WCB_POST_GRID_PANEL_POST_META;
	postContentSettings: WCB_POST_GRID_PANEL_POST_CONTENT;
	featuredImageSettings: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE;
	general_readmoreLink: WCB_POST_GRID_PANEL_READMORE_LINK;
}

const PostCard: FC<Props> = ({
	postData,
	authors,
	categories,
	postMetaSettings,
	featuredImageSettings,
	postContentSettings,
	general_readmoreLink,
}) => {
	const {
		titleHtmlTag: TitleTag,
		isShowAuthor,
		isShowComment,
		isShowDate,
		isShowMetaIcon,
		isShowTaxonomy,
		isShowTitle,
		taxonomyDivider,
		taxonomyPosition,
		taxonomyStyle,
	} = postMetaSettings;

	const freaturedImage = getFeaturedImageDetails(
		postData,
		featuredImageSettings.featuredImageSize || "medium"
	);

	const { date, content, excerpt, link, title, date_gmt } = postData;

	//
	// If a user clicks to a link prevent redirection and show a warning.
	const { showRedirectionPreventedNotice } = useRedirectionPreventedNotice({
		ComponentName: PostCard,
		uniqueNoticeId: "wcb/posts-grid/PostCard/redirection-prevented",
	});
	//

	const cats = getCategoriesOfPost(postData, categories);
	const author = getAuthorOfPost(postData, authors);

	const renderExcerpt = () => {
		let excerptText = excerpt.rendered;
		const excerptLength = postContentSettings.excerptWordsNumber;
		const excerptElement = document.createElement("div");
		excerptElement.innerHTML = excerptText;

		excerptText = excerptElement.textContent || excerptElement.innerText || "";
		const needsReadMore =
			excerptLength < excerptText.trim().split(" ").length &&
			excerpt.raw === "";

		const postExcerpt = needsReadMore ? (
			<>
				{excerptText.trim().split(" ", excerptLength).join(" ")}
				{__(" … ")}
			</>
		) : (
			excerptText
		);

		return <p className="wcbPostCard__excerpt">{postExcerpt}</p>;
	};

	const renderDate = () => {
		const dateFormat = getSettings().formats.date;
		return isShowDate && date_gmt ? (
			<>
				<span className="wcbPostCard__meta-date">
					<time
						dateTime={format("c", date_gmt)}
						className="wp-block-latest-posts__post-date"
					>
						{dateI18n(dateFormat, date_gmt)}
					</time>
				</span>
				<span className="wcbPostCard__meta-dot">·</span>
			</>
		) : null;
	};

	const renderTaxonomies = () => {
		return (
			<div className="wcbPostCard__taxonomies">
				{cats.map((cat, index) => (
					<>
						<a
							onClick={showRedirectionPreventedNotice}
							key={cat.id}
							className={`wcbPostCard__taxonomy ${
								taxonomyStyle === "Highlighted"
									? "wcbPostCard__taxonomy--highlighted"
									: ""
							} `}
							href={cat.link}
						>
							{cat.name}
						</a>
						{index < cats.length - 1 && taxonomyStyle === "Normal" ? (
							<span>
								{taxonomyDivider}
								{` `}
							</span>
						) : null}
					</>
				))}
			</div>
		);
	};

	return (
		<div className="wcbPostCard">
			<a
				onClick={showRedirectionPreventedNotice}
				className="wcbPostCard__completeLink"
				href={link}
			></a>
			<div className="wcbPostCard__featuredImage">
				{featuredImageSettings.isShowFeaturedImage ? (
					<img
						src={freaturedImage?.url || ""}
						alt={freaturedImage?.alt || ""}
					/>
				) : null}
			</div>

			{isShowTaxonomy ? renderTaxonomies() : null}

			<div className="wcbPostCard__content">
				{isShowTitle ? (
					<TitleTag className="wcbPostCard__title">
						<a
							href={link}
							onClick={showRedirectionPreventedNotice}
							dangerouslySetInnerHTML={{ __html: title?.rendered }}
						></a>
					</TitleTag>
				) : null}

				<div className="wcbPostCard__meta">
					{isShowAuthor ? (
						<div className="wcbPostCard__meta-author">
							<span className="wcbPostCard__meta-author-by">by {` `}</span>
							<a
								onClick={showRedirectionPreventedNotice}
								className="wcbPostCard__meta-author-name"
								href={author.link}
							>
								{author.name}
							</a>
						</div>
					) : null}
					<div>
						{renderDate()}

						{isShowComment ? (
							<span className="wcbPostCard__meta-comment">{10} comments</span>
						) : null}
					</div>
				</div>

				{postContentSettings.contentType === "Full post" ? (
					<div
						className="wcbPostCard__fullContent"
						dangerouslySetInnerHTML={{ __html: content.raw.trim() }}
					></div>
				) : null}
				{postContentSettings.contentType === "excerpt" ? renderExcerpt() : null}

				{general_readmoreLink.isShowReadmore ? (
					<a
						className="wcbPostCard__readmoreLink"
						href={link}
						rel="noopener noreferrer"
						target={general_readmoreLink.isOpenInNewTab ? "_blank" : undefined}
						onClick={showRedirectionPreventedNotice}
					>
						{sprintf(__("%s"), general_readmoreLink.text || "")}
					</a>
				) : null}
			</div>
		</div>
	);
};

export default PostCard;

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
import {
	CalendarIcon,
	ChatBubbleBottomCenterTextIcon,
	ClockIcon,
	TagIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";

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

const WcbPostCard: FC<Props> = ({
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
	const isEnableMetaIcon = postMetaSettings.isShowMetaIcon;

	//
	// If a user clicks to a link prevent redirection and show a warning.
	const { showRedirectionPreventedNotice } = useRedirectionPreventedNotice({
		ComponentName: WcbPostCard,
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
					{isEnableMetaIcon && (
						<span className="wcbPostCard__meta-icon">
							<ClockIcon className="w-3.5 h-3.5" />
						</span>
					)}
					<time dateTime={format("c", date_gmt)}>
						{/* @ts-ignore */}
						{dateI18n(dateFormat, date_gmt)}
					</time>
				</span>
			</>
		) : null;
	};

	const renderTaxonomies = (modified = "") => {
		return (
			<div
				className={`wcbPostCard__taxonomies wcbPostCard__taxonomies--${modified} ${
					taxonomyStyle === "Highlighted"
						? "wcbPostCard__taxonomies--highlighted"
						: ""
				}`}
			>
				{postMetaSettings.isShowTaxonomyIcon && (
					<span className="wcbPostCard__meta-icon">
						<TagIcon className="w-4 h-4" />
					</span>
				)}
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
							{index < cats.length - 1 && taxonomyStyle === "Normal" ? (
								<span>{taxonomyDivider}</span>
							) : null}
						</a>
					</>
				))}
			</div>
		);
	};

	const hasFeaturedImage =
		featuredImageSettings.isShowFeaturedImage && !!freaturedImage?.url;
	const renderFeaturedImage = () => {
		const showTaxnomy =
			isShowTaxonomy &&
			taxonomyPosition === "Inside featured image" &&
			featuredImageSettings.featuredImagePosition !== "background";

		return hasFeaturedImage ? (
			<div className="wcbPostCard__featuredImage">
				<img src={freaturedImage?.url || ""} alt={freaturedImage?.alt || ""} />
				{/* TAXONOMY */}
				{showTaxnomy ? renderTaxonomies("Insidefeaturedimage") : null}
			</div>
		) : null;
	};

	return (
		<div
			className={`wcbPostCard wcbPostCard--image-${featuredImageSettings.featuredImagePosition}`}
		>
			{/* LINK COMPLETE BOX */}
			<a
				onClick={showRedirectionPreventedNotice}
				className="wcbPostCard__completeLink"
				href={link}
			></a>

			{/* FEATURED IMAGE */}
			{renderFeaturedImage()}
			<div className="wcbPostCard__featuredImage-overlay"></div>

			<div className="wcbPostCard__content">
				{/* TAXONOMY */}
				{isShowTaxonomy &&
				(taxonomyPosition === "Below featured image" ||
					!hasFeaturedImage ||
					featuredImageSettings.featuredImagePosition === "background")
					? renderTaxonomies()
					: null}

				{/* TITLE */}
				{isShowTitle ? (
					<TitleTag className="wcbPostCard__title">
						<a
							href={link}
							onClick={showRedirectionPreventedNotice}
							dangerouslySetInnerHTML={{ __html: title?.rendered }}
						></a>
					</TitleTag>
				) : null}

				{postContentSettings.isShowPostContent && (
					<>
						{/* CONTENT */}
						{postContentSettings.contentType === "Full post" ? (
							<div
								className="wcbPostCard__fullContent wcbPostCard__excerpt"
								dangerouslySetInnerHTML={{ __html: content.raw.trim() }}
							></div>
						) : null}

						{/* EXCERPT */}
						{postContentSettings.contentType === "excerpt"
							? renderExcerpt()
							: null}
					</>
				)}

				<div className="wcbPostCard__meta">
					{/* AUTHOR */}
					{isShowAuthor ? (
						<div className="wcbPostCard__meta-author">
							{isEnableMetaIcon && (
								<span className="wcbPostCard__meta-icon">
									<UserCircleIcon className="w-4 h-4" />
								</span>
							)}
							<a
								onClick={showRedirectionPreventedNotice}
								className="wcbPostCard__meta-author-name"
								href={author.link}
							>
								{author.name}
							</a>
						</div>
					) : null}
					{/* DATE AND COMMENT */}
					<div className="wcbPostCard__meta-date-and-comments">
						{renderDate()}

						{isShowComment && isShowDate ? (
							<span className="wcbPostCard__meta-dot">{` / `}</span>
						) : null}

						{isShowComment ? (
							<span className="wcbPostCard__meta-comment">
								<span className="wcbPostCard__meta-icon">
									<ChatBubbleBottomCenterTextIcon className="w-3.5 h-3.5" />
								</span>
								10
							</span>
						) : null}
					</div>
				</div>

				{/* READMORE BUTTON */}
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

export default WcbPostCard;

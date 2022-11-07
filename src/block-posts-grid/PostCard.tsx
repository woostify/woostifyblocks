import React, { FC } from "react";
import { AuthorRoot } from "./AuthorType";
import { CategoryRoot } from "./CategoryType";
import { getFeaturedImageDetails } from "./getFeaturedImageDetails";
import { PostRoot } from "./types";

interface Props {
	postData: PostRoot;
	categories: CategoryRoot[];
	authors: AuthorRoot[];
}

const PostCard: FC<Props> = ({ postData, authors, categories }) => {
	const freaturedImage = getFeaturedImageDetails(postData, "medium");

	return (
		<div className="wcbPostCard">
			<div className="wcbPostCard__featuredImage">
				<img src={freaturedImage?.url || ""} alt={freaturedImage?.alt || ""} />
				<div className="wcbPostCard__taxonomies">
					<a className="wcbPostCard__taxonomy" href="">
						Education
					</a>
					<a className="wcbPostCard__taxonomy" href="">
						Javascript
					</a>
					<a className="wcbPostCard__taxonomy" href="">
						Music
					</a>
				</div>
			</div>
			<div className="wcbPostCard__content">
				<div className="wcbPostCard__meta">
					<div className="wcbPostCard__meta-author">
						<span className="wcbPostCard__meta-author-by">by</span>
						<a className="wcbPostCard__meta-author-name" href="">
							Blaze Lauter
						</a>
					</div>
					<div>
						<span className="wcbPostCard__meta-date">Sep 18, 2022</span>
						<span className="wcbPostCard__meta-dot">·</span>
						<span className="wcbPostCard__meta-comment">117 comments</span>
					</div>
				</div>
				<h2
					className="wcbPostCard__title"
					dangerouslySetInnerHTML={{ __html: postData.title?.rendered }}
				></h2>
				<p
					className="wcbPostCard__excerpt"
					dangerouslySetInnerHTML={{ __html: postData.excerpt?.rendered }}
				></p>
			</div>
		</div>
	);
};

export default PostCard;

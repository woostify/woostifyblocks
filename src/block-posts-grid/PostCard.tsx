import React from "react";

const PostCard = () => {
	return (
		<div className="wcbPostCard">
			<div className="wcbPostCard__featuredImage">
				<img
					src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-268533-2-500x333.jpeg"
					alt=""
				/>
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
				<h2 className="wcbPostCard__title">This is title of the article</h2>
				<p className="wcbPostCard__excerpt">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eius
					esse fugit optio eveniet perferendis?
				</p>
			</div>
		</div>
	);
};

export default PostCard;

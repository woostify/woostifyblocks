import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { TestimonialItem, WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import { TESTIMONIAL_ITEM_DEMO } from "./Edit";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import getImageUrlBySize from "../utils/getImageUrlBySize";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "testimonials"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		general_images,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_image,
		style_name,
		testimonials,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		general_images,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_image,
		style_name,
	};
	//
	const blockProps = useBlockProps.save({
		className: "wcb-testimonials__wrap",
	});

	let CURRENT_DATA = [
		...Array(general_general.numberofTestimonials || 3).keys(),
	].map((_, index) => testimonials[index] || TESTIMONIAL_ITEM_DEMO);

	const renderTestimonialItemContent = (
		item: TestimonialItem,
		index: number
	) => {
		return (
			<RichText.Content
				tagName="div"
				className="wcb-testimonials__item-content"
				value={item.content}
			/>
		);
	};

	const renderTestimonialItemName = (item: TestimonialItem, index: number) => {
		return (
			<RichText.Content
				tagName="div"
				className="wcb-testimonials__item-name"
				value={item.name}
			/>
		);
	};

	const renderTestimonialItemCompany = (
		item: TestimonialItem,
		index: number
	) => {
		return (
			<RichText.Content
				tagName="div"
				className="wcb-testimonials__item-company"
				value={item.companyName}
			/>
		);
	};

	const renderTestimonialItemImage = (item: TestimonialItem, index: number) => {
		const { images, isShowImage, imageSize } = general_images;
		const { imageSize: imageSizeAttr } = style_image;
		const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;
		const { mediaId, mediaSrcSet } = images[index] || {};
		if (!isShowImage || !mediaId) {
			return null;
		}
		const { value_Desktop, value_Mobile, value_Tablet } =
			getValueFromAttrsResponsives(imageSizeAttr);
		const url = getImageUrlBySize(images[index], imageSize);
		return (
			<div className="wcb-testimonials__item-image">
				<img
					src={url}
					alt=""
					srcSet={mediaSrcSet}
					sizes={`(max-width: ${media_tablet}) ${value_Mobile}, (max-width: ${media_desktop}) ${value_Tablet}, ${value_Desktop}`}
				/>
			</div>
		);
	};

	const renderTestimonialItem = (item: TestimonialItem, index: number) => {
		const { imagePosition } = general_images;
		return (
			<li
				className="glide__slide wcb-testimonials__item"
				key={index + "-" + item.name}
			>
				<div className=""></div>
				<VideoBackgroundByBgControl
					bgType={style_backgroundAndBorder.background.bgType}
					videoData={style_backgroundAndBorder.background.videoData}
				/>
				<OverlayBackgroundByBgControl
					bgType={style_backgroundAndBorder.background.bgType}
					overlayType={style_backgroundAndBorder.background.overlayType}
				/>
				{/* IMAGE */}
				{imagePosition === "left" && renderTestimonialItemImage(item, index)}

				<div className="wcb-testimonials__item-inner">
					{/* IMAGE */}
					{imagePosition === "top" && renderTestimonialItemImage(item, index)}

					{/* CONTENT */}
					{renderTestimonialItemContent(item, index)}

					<div className="wcb-testimonials__item-user">
						{/* IMAGE */}
						{imagePosition === "bottom" &&
							renderTestimonialItemImage(item, index)}

						<div className="wcb-testimonials__item-nameandcompany">
							{/* NAME */}
							{renderTestimonialItemName(item, index)}

							{/* COMPANY */}
							{renderTestimonialItemCompany(item, index)}
						</div>
					</div>
				</div>

				{/* IMAGE */}
				{imagePosition === "right" && renderTestimonialItemImage(item, index)}
			</li>
		);
	};

	const renderEditContent = () => {
		return (
			<div className="glide">
				{/* CONTENT */}
				<div className="glide__track-wrap">
					<div className="glide__track" data-glide-el="track">
						<ul className="glide__slides">
							{CURRENT_DATA.map(renderTestimonialItem)}
						</ul>
					</div>
				</div>

				{/* ARROW */}
				{(general_carousel.showArrowsDots === "Both" ||
					general_carousel.showArrowsDots === "Arrow") && (
					<div className="glide__arrows" data-glide-el="controls">
						<button
							className="glide__arrow glide__arrow--left"
							data-glide-dir="<"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5L8.25 12l7.5-7.5"
								/>
							</svg>
						</button>
						<button
							className="glide__arrow glide__arrow--right"
							data-glide-dir=">"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>
				)}

				{/* DOTS */}
				{(general_carousel.showArrowsDots === "Both" ||
					general_carousel.showArrowsDots === "Dot") && (
					<div className="glide__bullets" data-glide-el="controls[nav]">
						{CURRENT_DATA.map((item, index) => {
							return (
								<button
									className="glide__bullet"
									key={index + "-" + item.name}
									data-glide-dir={`=${index}`}
								></button>
							);
						})}
					</div>
				)}
			</div>
		);
	};

	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-testimonials__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			{renderEditContent()}
		</SaveCommon>
	);
}

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
		advance_motionEffect,
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
		advance_motionEffect,
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
			<div className="wcb-testimonials__item" key={index}>
				<div className=""></div>
				<VideoBackgroundByBgControl
					bgType={style_backgroundAndBorder.background.bgType}
					videoData={style_backgroundAndBorder.background.videoData}
				/>
				<OverlayBackgroundByBgControl
					bgType={style_backgroundAndBorder.background.bgType}
					overlayType={style_backgroundAndBorder.background.overlayType}
				/>

				<div className="wcb-testimonials__item-wrap-inner">
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
				</div>
			</div>
		);
	};

	const renderEditContent = () => {
		return (
			<div className="wcb-testimonials__wrap-items">
				{CURRENT_DATA.map(renderTestimonialItem)}
			</div>
		);
	};

	return (
		<SaveCommon attributes={newAttrForSave} uniqueId={uniqueId} {...blockProps}>
			{renderEditContent()}
		</SaveCommon>
	);
}

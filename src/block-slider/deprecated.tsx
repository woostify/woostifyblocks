import React from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import SaveCommon from "../components/SaveCommon";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import getImageUrlBySize from "../utils/getImageUrlBySize";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

// Old SliderItem interface for backward compatibility
interface OldSliderItem {
	name: string;
	companyName: string;
	content: string;
	rating: number;
}

// Old attributes structure with testimonials array
interface OldWcbAttrs {
	uniqueId: string;
	testimonials: OldSliderItem[];
	general_general: any;
	general_images: any;
	general_carousel: any;
	style_name: any;
	style_content: any;
	style_company: any;
	style_image: any;
	style_arrowAndDots: any;
	style_backgroundAndBorder: any;
	style_dimension: any;
	advance_responsiveCondition: any;
	advance_zIndex: any;
	advance_motionEffect: any;
}

// Old save function for backward compatibility
const oldSave = ({ attributes }: { attributes: OldWcbAttrs }) => {
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

	const newAttrForSave = {
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

	const blockProps = useBlockProps.save({
		className: "wcb-slider__wrap",
	});

	const SLIDER_ITEM_DEMO = {
		name: "John Doe",
		companyName: "Company",
		content: "This is a testimonial content",
		rating: 5,
	};

	let CURRENT_DATA = [
		...Array(general_general?.numberofTestimonials || 3).keys(),
	].map((_, index) => testimonials?.[index] || SLIDER_ITEM_DEMO);

	const renderTestimonialItemContent = (item: OldSliderItem, index: number) => {
		return (
			<RichText.Content
				tagName="div"
				className="wcb-slider__item-content"
				value={item.content}
			/>
		);
	};

	const renderTestimonialItemName = (item: OldSliderItem, index: number) => {
		return (
			<RichText.Content
				tagName="div"
				className="wcb-slider__item-name"
				value={item.name}
			/>
		);
	};

	const renderTestimonialItemCompany = (item: OldSliderItem, index: number) => {
		return (
			<RichText.Content
				tagName="div"
				className="wcb-slider__item-company"
				value={item.companyName}
			/>
		);
	};

	const renderTestimonialItemImage = (item: OldSliderItem, index: number) => {
		const { images, isShowImage, imageSize } = general_images || {};
		const { imageSize: imageSizeAttr } = style_image || {};
		const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES || {};
		const { mediaId, mediaSrcSet } = images?.[index] || {};
		
		if (!isShowImage || !mediaId) {
			return null;
		}
		
		const { value_Desktop, value_Mobile, value_Tablet } =
			getValueFromAttrsResponsives(imageSizeAttr) || {};
		const url = getImageUrlBySize(images[index], imageSize);
		
		return (
			<div className="wcb-slider__item-image">
				<img
					src={url}
					alt=""
					srcSet={mediaSrcSet}
					sizes={`(max-width: ${media_tablet}) ${value_Mobile}, (max-width: ${media_desktop}) ${value_Tablet}, ${value_Desktop}`}
				/>
			</div>
		);
	};

	const renderTestimonialItem = (item: OldSliderItem, index: number) => {
		const { imagePosition } = general_images || {};
		return (
			<div className="wcb-slider__item" key={index}>
				<div className="wcb-slider__item-background">
					<div className=""></div>
					<VideoBackgroundByBgControl
						bgType={style_backgroundAndBorder?.background?.bgType}
						videoData={style_backgroundAndBorder?.background?.videoData}
					/>
					<OverlayBackgroundByBgControl
						bgType={style_backgroundAndBorder?.background?.bgType}
						overlayType={style_backgroundAndBorder?.background?.overlayType}
					/>

					<div className="wcb-slider__item-wrap-inner">
						{/* IMAGE */}
						{imagePosition === "left" && renderTestimonialItemImage(item, index)}

						<div className="wcb-slider__item-inner">
							{/* IMAGE */}
							{imagePosition === "top" && renderTestimonialItemImage(item, index)}

							{/* CONTENT */}
							{renderTestimonialItemContent(item, index)}

							<div className="wcb-slider__item-user">
								{/* IMAGE */}
								{imagePosition === "bottom" && renderTestimonialItemImage(item, index)}

								<div className="wcb-slider__item-nameandcompany">
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
			</div>
		);
	};

	return (
		<SaveCommon attributes={newAttrForSave} uniqueId={uniqueId} {...blockProps}>
			<div className="wcb-slider__wrap-items">
				{CURRENT_DATA.map(renderTestimonialItem)}
			</div>
		</SaveCommon>
	);
};

const deprecated = [
	{
		attributes: {
			// Old attributes structure that included testimonials array
			uniqueId: {
				type: "string",
				default: "",
			},
			testimonials: {
				type: "array",
				default: [],
			},
			general_general: {
				type: "object",
				default: {},
			},
			general_images: {
				type: "object",
				default: {},
			},
			general_carousel: {
				type: "object",
				default: {},
			},
			style_name: {
				type: "object",
				default: {},
			},
			style_content: {
				type: "object",
				default: {},
			},
			style_company: {
				type: "object",
				default: {},
			},
			style_image: {
				type: "object",
				default: {},
			},
			style_arrowAndDots: {
				type: "object",
				default: {},
			},
			style_backgroundAndBorder: {
				type: "object",
				default: {},
			},
			style_dimension: {
				type: "object",
				default: {},
			},
			advance_responsiveCondition: {
				type: "object",
				default: {},
			},
			advance_zIndex: {
				type: "object",
				default: {},
			},
			advance_motionEffect: {
				type: "object",
				default: {},
			},
		},
		save: oldSave,
	},
];

export default deprecated;

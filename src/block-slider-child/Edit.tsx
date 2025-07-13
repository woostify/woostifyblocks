import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import React, { useEffect, FC, useState, useRef } from "react";
import { useSelect } from "@wordpress/data";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import MyMediaUploadCheck from "../components/controls/MyMediaUploadCheck";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import GlobalCss from "./GlobalCss";
// Import style panels
import WcbTestimonialsPanel_StyleName, { WCB_SLIDER_PANEL_STYLE_NAME_DEMO } from "./WcbSliderPanel_StyleName";
import WcbTestimonialsPanel_StyleContent, { WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO } from "./WcbSliderPanel_StyleContent";
import WcbTestimonialsPanel_StyleCompany, { WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO } from "./WcbSliderPanel_StyleCompany";
import WcbTestimonialsPanel_StyleImage, { WCB_SLIDER_PANEL_STYLE_IMAGE_DEMO } from "./WcbSliderPanel_StyleImage";
import WcbTestimonialsPanel_StyleBackground, { WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO } from "./WcbSliderPanel_StyleBackground";
import WcbTestimonialsPanel_StyleDimension, { WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO } from "./WcbSliderPanel_StyleDimension";
import AdvancePanelCommon from "../components/AdvancePanelCommon";

// Export the panel components and demos for parent component to use
export {
	WcbTestimonialsPanel_StyleName,
	WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	WcbTestimonialsPanel_StyleContent,
	WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	WcbTestimonialsPanel_StyleCompany,
	WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
	WcbTestimonialsPanel_StyleImage,
	WCB_SLIDER_PANEL_STYLE_IMAGE_DEMO,
	WcbTestimonialsPanel_StyleBackground,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	WcbTestimonialsPanel_StyleDimension,
	WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
	AdvancePanelCommon
};

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected, index } = props;
	const {
		uniqueId,
		content,
		name,
		callToAction,
		image,
		style_name,
		style_content,
		style_company,
		style_image,
		style_backgroundAndBorder,
		style_dimension,
		advance_motionEffect,
	} = attributes;
	
	//  COMMON HOOKS
	const wrapBlockProps = useBlockProps();
	
	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	// Child components don't need Inspector Controls anymore
	// Parent component will handle all Inspector Controls

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-slider-child__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>

				{/* CSS in JS - Only render styles once for each unique instance */}
				<GlobalCss {...attributes} />
				
				<div className="wcb-slider-child__item">
					<div className="wcb-slider-child__item-background">
						<div className="wcb-slider-child__item-wrap-inner">
							<div className="wcb-slider-child__item-inner">

								{/* Image */}
								{image?.mediaUrl && (
									<div className="wcb-slider-child__item-image">
										<MyMediaUploadCheck
											onChange={(data) => {
												const newImage = data?.[0] || { url: "", alt: "" };
												setAttributes({ image: newImage });
											}}
											imageData={image}
										/>
									</div>
								)}

								{/* Name */}
								<div className="wcb-slider-child__name">
									<RichText
										tagName="h4"
										placeholder={__("Enter name...", "wcb")}
										value={`${name}` + " " + `${index}`} // Append index to ensure unique names
										onChange={(value) => setAttributes({ name: value })}
									/>
								</div>

								{/* Content */}
								<div className="wcb-slider-child__content">
									<RichText
										tagName="p"
										placeholder={__("Enter content...", "wcb")}
										value={content}
										onChange={(value) => setAttributes({ content: value })}
									/>
								</div>

								{/* Call to Action */}
								<div className="wcb-slider-child__btn">
									<div className="wcb-slider-child__btn-inner">
										<RichText
											tagName="span"
											placeholder={__("Enter call to action...", "wcb")}
											value={callToAction}
											onChange={(value) => setAttributes({ callToAction: value })}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
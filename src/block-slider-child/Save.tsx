import React from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import MyIcon from "../components/controls/MyIcon";
import GlobalCss from "./GlobalCss";
import { converClientIdToUniqueClass } from "../utils/converUniqueIdToAnphaKey";
import _ from "lodash";

// Import default values from style panels
import { WCB_SLIDER_PANEL_STYLE_NAME_DEMO } from "./WcbSliderPanel_StyleName";
import { WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO } from "./WcbSliderPanel_StyleContent";
import { WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO } from "./WcbSliderPanel_StyleCompany";
import { WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO } from "./WcbSliderPanel_StyleBackground";
import { WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO } from "./WcbSliderPanel_StyleDimension";
import { WCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO, DEFAULT_MY_TOP_ICON } from "./WcbSliderPanel_StyleImage";
import { WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO } from "./WcbSliderPanel_ButtonPreset";
import { WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO } from "./WcbSliderPanel_LayoutPreset";
import { RESPONSIVE_CONDITON_DEMO } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { Z_INDEX_DEMO } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { MY_MOTION_EFFECT_DEMO } from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import { INIT_IMAGE_DATA_UPLOAD_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import MyIconFull from "../components/controls/MyIconFull";

export interface WcbAttrsForSave extends WcbAttrs {
	clientID?: string;
}

export default function save({ attributes, context }: { attributes: WcbAttrs, context?: any }) {
	const {
		uniqueId,
		content,
		name,
		callToAction,
		image,
		rating,
		style_image,
		style_buttonPreset,
		style_layoutPreset,
		clientID,
		// Include all other attributes for complete styling
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_name,
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attributes;

	// Generate unique CSS class from clientID or fallback to uniqueId
	const uniqueCssClass = clientID ? converClientIdToUniqueClass(clientID) : uniqueId;
	
	// Create complete attributes object for frontend CSS system
	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		content,
		name,
		callToAction,
		image: image || INIT_IMAGE_DATA_UPLOAD_DEMO,
		rating: rating || 5,
		style_image: style_image || WCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO,
		style_buttonPreset: style_buttonPreset || WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO,
		style_layoutPreset: style_layoutPreset || WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO,
		style_backgroundAndBorder: style_backgroundAndBorder || WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
		style_company: style_company || WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
		style_content: style_content || WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
		style_dimension: style_dimension || WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
		style_name: style_name || WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
		advance_responsiveCondition: advance_responsiveCondition || RESPONSIVE_CONDITON_DEMO,
		advance_zIndex: advance_zIndex || Z_INDEX_DEMO,
		advance_motionEffect: advance_motionEffect || MY_MOTION_EFFECT_DEMO,
		clientID,
	};

	const renderImage = () => {
		return style_image && style_image.isShowImage && style_image.image?.mediaId ? (
			<div className="wcb-slider-child__content-image">
				<img
					className="wcb-slider-child__image"
					src={style_image.image.mediaUrl}
					alt=""
				/>
			</div>
		) : null;
	};

	const renderIconButton = () => {
		return <MyIcon icon={"lni-arrow-right"} className="wcb-button__icon" />;
	};

	const renderIconTop = () => {
		return (
			<div className="wcb-top__icon-wrap flex justify-center">
				<div className="wcb-top__icon">
					<MyIconFull icon={style_image?.enableIcon && style_image?.icon ? style_image.icon : DEFAULT_MY_TOP_ICON} />
				</div>
			</div>
		);
	}

	// Helper functions to determine icon rendering
	const shouldRenderIconTop = () => {
		const isStandardLayout = ["wcb-layout-1", "wcb-layout-2", "wcb-layout-3"].includes(style_layoutPreset?.preset || "");
		const isCustomLayout = !style_layoutPreset?.preset;
		
		if (isStandardLayout) {
			// Standard layouts: show icon top when disabled OR when enabled with top position
			return !style_image?.enableIcon || (style_image?.enableIcon && (style_image?.iconPosition === "top" || style_image?.iconPosition === "left" || style_image?.iconPosition === "right"));
		}
		
		if (isCustomLayout) {
			// Custom layout: show icon top only when enabled with top position
			return style_image?.enableIcon && (style_image?.iconPosition === "top" || style_image?.iconPosition === "left" || style_image?.iconPosition === "right");
		}
		
		return false;
	};

	const shouldRenderIconBelowTitle = () => {
		const isStandardLayout = ["wcb-layout-1", "wcb-layout-2", "wcb-layout-3"].includes(style_layoutPreset?.preset || "");
		const isCustomLayout = !style_layoutPreset?.preset;
		
		// Both standard and custom layouts: show below title when enabled with bellowTitle position
		return (isStandardLayout || isCustomLayout) && 
			   style_image?.enableIcon && 
			   (style_image?.iconPosition === "bellowTitle");
	};

	// Clean structure for slick + frontend CSS system with correct timing
	return (
		<div className="wcb-slider__item">
			<div className="wcb-slider__item-background">
				<div className="wcb-slider__item-wrap-inner">
					<div className="wcb-slider__item-inner">
						{/* Child content wrapper with frontend CSS system - timing is now fixed */}
						<div 
							className={`wcb-slider-child__wrap ${uniqueId} ${uniqueCssClass} wcb-update-div`}
							data-uniqueid={uniqueId}
							data-clientid={clientID || 'not-available'}
						>
							{/* Frontend CSS injection elements */}
							<div data-wcb-global-styles={uniqueId}></div>
							<pre data-wcb-block-attrs={uniqueId} style={{ display: "none" }}>
								{_.escape(JSON.stringify(newAttrForSave))}
							</pre>
							
							{/* Child CSS styles for both edit and save mode */}
							<GlobalCss {...newAttrForSave} clientID={clientID} />
							
							<div className="wcb-slider-child__item">
								<div className="wcb-slider-child__item-background">
									<div className="wcb-slider-child__item-wrap-inner">
										{/* Image */}	
										{
											(style_image && 
											style_image.imagePosition === "left") &&
											renderImage()
										}
										<div className="wcb-slider-child__item-inner">
											{/* Image */}	
											{
												(style_image && 
												style_image.imagePosition === "above-title") &&
												renderImage()
											}

											<div className={`${style_image?.iconPosition === "left" || style_image?.iconPosition === "right" ? "flex gap-4" : ""}`}>
												{/* Icon Top */}
												{shouldRenderIconTop() && renderIconTop()}
												{/* Name */}
												<div className={`wcb-slider-child__name`}>
													<RichText.Content
														tagName="div"
														value={name}
													/>
												</div>
												{/* Icon Below Title */}
												{shouldRenderIconBelowTitle() && renderIconTop()}
											</div>
											
											{/* Image */}	
											{
												(style_image && 
												style_image.imagePosition === "blow-title") &&
												renderImage()
											}

											{/* Content */}
											<div className={`wcb-slider-child__content ${
													(
														style_layoutPreset?.preset === "wcb-layout-2" ||
														style_layoutPreset?.preset === "wcb-layout-3" ||
														style_layoutPreset?.preset === "wcb-layout-5" ||
														style_image?.iconPosition === "left"
													)
														? "text-start"
														: style_image?.iconPosition === "right"
														? "text-end"
														: "text-center"
												}`}>
												<RichText.Content
													tagName="div"
													value={content}
												/>
											</div>

											{/* Call to Action */}
											{
												style_layoutPreset?.preset === "wcb-layout-3" ?
												null : 								
												<div className="wcb-slider-child__btn">
													<div className="wcb-slider-child__btn-inner">
														<RichText.Content
															tagName="div"
															value={callToAction}
														/>
														{
															style_buttonPreset?.preset === 'wcb-button-4' || style_buttonPreset?.preset === 'wcb-button-8' ?
															renderIconButton() : null
														}
													</div>
												</div>
											}

											{/* Image */}	
											{
												(style_image &&
												style_image.imagePosition === "bottom") &&
												renderImage()
											}

										</div>
										{/* Image */}	
										{
											(style_image && 
											style_image.imagePosition === "right") &&
											renderImage()
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 
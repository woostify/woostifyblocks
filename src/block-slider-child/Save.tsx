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
import { WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO } from "./WcbSliderPanel_StyleBackground";
import { WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO } from "./WcbSliderPanel_StyleDimension";
import { WCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO, DEFAULT_MY_TOP_ICON } from "./WcbSliderPanel_StyleImage";
import { WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO } from "./WcbSliderPanel_ButtonPreset";
import { WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO } from "./WcbSliderPanel_LayoutPreset";
import { RESPONSIVE_CONDITON_DEMO } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { Z_INDEX_DEMO } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { MY_MOTION_EFFECT_DEMO } from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import { INIT_IMAGE_DATA_UPLOAD_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import { WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO } from "./WcbSliderPanel_StyleCallToActionButton";
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
		style_callToActionButton,
		style_buttonPreset,
		style_layoutPreset,
		clientID,
		// Include all other attributes for complete styling
		style_backgroundAndBorder,
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
		style_callToActionButton: style_callToActionButton || WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO,
		style_buttonPreset: style_buttonPreset || WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO,
		style_layoutPreset: style_layoutPreset || WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO,
		style_backgroundAndBorder: style_backgroundAndBorder || WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
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
		return (
			<MyIcon
				icon={style_buttonPreset?.enableIcon ? (style_buttonPreset?.icon?.iconName ?? "lni-arrow-right") : "lni-arrow-right"}
				className="wcb-slider-child__btn-text ml-2"
			/>
		);
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

	const renderCallToAction = (preset: any, enableIcon: any, iconPosition: any) => {
		return (
			<div className="wcb-slider-child__btn-inner">
				{
					iconPosition === 'beforeTitle' && 
					(
						preset === 'wcb-button-4' || 
						preset === 'wcb-button-8' || 
						enableIcon
					) ? renderIconButton() : null
				}
				<RichText.Content
					tagName="div"
					value={callToAction}
					className="wcb-slider-child__btn-text wcb-slider-child__btn_spacing"
				/>
				{
					iconPosition === 'afterTitle' && 
					(
						preset === 'wcb-button-4' || 
						preset === 'wcb-button-8' || 
						enableIcon
					) ? renderIconButton() : null
				}
			</div>
		)
	}

	const renderCallToActionLink = (preset: any, enableIcon: any, iconPosition: any, link: any, openInNewWindow: any) => {
		return (
			<div className="wcb-slider-child__btn-inner">
				<a
					className="wcb-slider-child__btn-inner__link"
					href={link}
					target={openInNewWindow ? "_blank" : "_self"}
				>
					{
						iconPosition === 'beforeTitle' && 
						(
							preset === 'wcb-button-4' || 
							preset === 'wcb-button-8' || 
							enableIcon
						) ? renderIconButton() : null
					}
					<RichText.Content
						tagName="div"
						value={callToAction}
						className="wcb-slider-child__btn-text wcb-slider-child__btn_spacing"
					/>
					{
						iconPosition === 'afterTitle' && 
						(
							preset === 'wcb-button-4' || 
							preset === 'wcb-button-8' || 
							enableIcon
						) ? renderIconButton() : null
					}
					{/* {
						preset === 'wcb-button-4' || preset === 'wcb-button-8' || enableIcon ?
						renderIconButton() : null
					} */}
				</a>
			</div>
		)
	}

	// Helper functions to determine icon rendering
	const shouldRenderIconTop = () => {
		const isStandardLayout = ["wcb-layout-1", "wcb-layout-2", "wcb-layout-3"].includes(style_layoutPreset?.preset || "");
		const isCustomLayout = !style_layoutPreset?.preset;
		
		if (isStandardLayout) {
			// Standard layouts: show icon top when disabled OR when enabled with top position
			return !style_image?.enableIcon || (style_image?.enableIcon && style_image?.iconPosition === "top");
		}
		
		if (isCustomLayout) {
			// Custom layout: show icon top only when enabled with top position
			return style_image?.enableIcon && (style_image?.iconPosition === "top");
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
		<div 
			// className="wcb-slider__item"
		>
			{/* <div className="wcb-slider__item-background"> */}
				{/* <div className="wcb-slider__item-wrap-inner"> */}
					{/* <div className="wcb-slider__item-inner"> */}
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
										<div className={`${
											style_image?.iconPosition === "left" || style_image?.iconPosition === "right"
											? "flex gap-4"
											: ""
										}`}>
										{/* Image */}	
										{
											(style_image && 
											style_image.imagePosition === "left") &&
											renderImage()
										}
										{ style_image?.iconPosition === "left" && renderIconTop() }
										<div className="wcb-slider-child__item-inner">
											{/* Image */}	
											{
												(style_image && 
												style_image.imagePosition === "above-title") &&
												renderImage()
											}

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
											
											{/* Image */}	
											{
												(style_image && 
												style_image.imagePosition === "blow-title") &&
												renderImage()
											}

											{/* Content */}
											<div className={`wcb-slider-child__content ${
													(() => {
														// Check for layout presets and icon positions first (these override text alignment)
														if (style_layoutPreset?.preset === "wcb-layout-2" ||
															style_layoutPreset?.preset === "wcb-layout-3" ||
															style_layoutPreset?.preset === "wcb-layout-5" ||
															style_image?.iconPosition === "left") {
															return "wcb-slider-child__content_start";
														}
														
														if (style_image?.iconPosition === "right") {
															return "wcb-slider-child__content_end";
														}
													})()
												}`}>
												<RichText.Content
													tagName="div"
													value={content}
												/>
											</div>

											{/* Call to Action */}
											{
												style_layoutPreset?.preset === "wcb-layout-3" ? null : (
													style_buttonPreset?.link ? (
														// <a
														// 	style={{
														// 		display: "inline-block",
														// 	}}
														// 	href={style_buttonPreset.link}
														// 	target={style_buttonPreset.openInNewWindow ? "_blank" : "_self"}
														// >
														// 	{renderCallToAction(style_buttonPreset.preset, style_buttonPreset.enableIcon)}
														// </a>
														renderCallToActionLink(style_buttonPreset.preset, style_buttonPreset.enableIcon, style_buttonPreset.iconPosition, style_buttonPreset.link, style_buttonPreset.openInNewWindow)
													) : (
														renderCallToAction(style_buttonPreset?.preset, style_buttonPreset?.enableIcon, style_buttonPreset?.iconPosition)
													)
												)
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
					{/* </div>
				</div>
			</div> */}
		</div>
	);
} 
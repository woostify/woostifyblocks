import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import React, { useEffect, FC } from "react";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey, { converClientIdToUniqueClass } from "../utils/converUniqueIdToAnphaKey";
import GlobalCss from "./GlobalCss";
// Import style panels
import WcbSlidersPanel_StyleName, { WCB_SLIDER_PANEL_STYLE_NAME_DEMO } from "./WcbSliderPanel_StyleName";
import WcbSlidersPanel_StyleContent, { WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO } from "./WcbSliderPanel_StyleContent";
import WcbSlidersPanel_StyleImage, { WCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO , DEFAULT_MY_TOP_ICON} from "./WcbSliderPanel_StyleImage";
import WcbSlidersPanel_StyleBackground, { WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO } from "./WcbSliderPanel_StyleBackground";
import WcbSlidersPanel_StyleDimension, { WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO } from "./WcbSliderPanel_StyleDimension";
import WcbSliderButtonPanelPreset, { WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO } from "./WcbSliderPanel_ButtonPreset";
import WcbSliderLayoutPanelPreset, { WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO } from "./WcbSliderPanel_LayoutPreset";
import WcbSlidersPanel_StyleSeparator, { WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_DEMO } from "./WcbSliderPanel_StyleSeparator";
import MyIcon from "../components/controls/MyIcon";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import MyIconFull from "../components/controls/MyIconFull";

// Export the panel components and demos for parent component to use
export {
	WcbSlidersPanel_StyleName,
	WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	WcbSlidersPanel_StyleContent,
	WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	WcbSlidersPanel_StyleImage,
	WCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO,
	WcbSlidersPanel_StyleBackground,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	WcbSlidersPanel_StyleDimension,
	WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
	WcbSliderButtonPanelPreset,
	WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO,
	WcbSliderLayoutPanelPreset,
	WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO,
	WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_DEMO,
	WcbSlidersPanel_StyleSeparator,
	AdvancePanelCommon
};

const Edit: FC<EditProps<WcbAttrs> & { index?: number }> = (props) => {
	const { attributes, setAttributes, clientId, isSelected, index } = props;
	const {
		uniqueId,
		content,
		name,
		callToAction,
		style_image,
		style_buttonPreset,
		style_layoutPreset,
		clientID, // Get existing clientID from attributes
	} = attributes;
	
	//  COMMON HOOKS
	const wrapBlockProps = useBlockProps();
	
	// Generate unique CSS class from clientId
	const uniqueClientClass = converClientIdToUniqueClass(clientId);
	
	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	// Save clientId to attributes so Save component can use it
	useEffect(() => {
		if (clientId && clientId !== clientID) {
			setAttributes({
				clientID: clientId,
			});
		}
	}, [clientId, clientID, setAttributes]);

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
			return !style_image?.enableIcon || (style_image?.enableIcon && style_image?.iconPosition === "top" || style_image?.iconPosition === "left" || style_image?.iconPosition === "right");
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

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-slider-child__wrap ${uniqueId} ${uniqueClientClass}`}
				data-uniqueid={uniqueId}
				data-clientid={clientId}
			>

				{/* CSS in JS - Use clientID for unique styling */}
				<GlobalCss {...attributes} clientID={clientId}/>
				
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
										<RichText
											tagName="div"
											placeholder={__("Enter name...", "wcb")}
											value={name} // + " " + `${index}`} // Append index to ensure unique names
											onChange={(value) => setAttributes({ name: value })}
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
									<RichText
										tagName="div"
										placeholder={__("Enter content...", "wcb")}
										value={content}
										onChange={(value) => setAttributes({ content: value })}
									/>
								</div>

								{/* Call to Action */}
								{
									style_layoutPreset?.preset === "wcb-layout-3" ?
									null : 								
										<div className="wcb-slider-child__btn">
											<div className="wcb-slider-child__btn-inner">
												<RichText
													tagName="div"
													placeholder={__("Enter call to action...", "wcb")}
													value={callToAction}
													onChange={(value) => setAttributes({ callToAction: value })}
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
		</MyCacheProvider>
	);
};

export default Edit;

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
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import GlobalCss from "./GlobalCss";
// Import style panels
import WcbSlidersPanel_StyleName, { WCB_SLIDER_PANEL_STYLE_NAME_DEMO } from "./WcbSliderPanel_StyleName";
import WcbSlidersPanel_StyleContent, { WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO } from "./WcbSliderPanel_StyleContent";
import WcbTestimonialsPanel_StyleCompany, { WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO } from "./WcbSliderPanel_StyleCompany";
import WcbTestimonialsPanel_StyleImage, { WCB_SLIDER_PANEL_IMAGE_DEMO } from "./WcbSliderPanel_StyleImage";
import WcbTestimonialsPanel_StyleBackground, { WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO } from "./WcbSliderPanel_StyleBackground";
import WcbTestimonialsPanel_StyleDimension, { WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO } from "./WcbSliderPanel_StyleDimension";
import WcbSliderButtonPanelPreset, { WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO } from "./WcbSliderPanel_ButtonPreset";
import WcbSliderLayoutPanelPreset, { WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO } from "./WcbSliderPanel_LayoutPreset";
import WcbSlidersPanel_StyleSeparator, { WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_DEMO } from "./WcbSliderPanel_StyleSeparator";
import MyIcon from "../components/controls/MyIcon";
import AdvancePanelCommon from "../components/AdvancePanelCommon";

// Export the panel components and demos for parent component to use
export {
	WcbSlidersPanel_StyleName,
	WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	WcbSlidersPanel_StyleContent,
	WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	WcbTestimonialsPanel_StyleCompany,
	WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
	WcbTestimonialsPanel_StyleImage,
	WCB_SLIDER_PANEL_IMAGE_DEMO,
	WcbTestimonialsPanel_StyleBackground,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	WcbTestimonialsPanel_StyleDimension,
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
	debugger
	const { attributes, setAttributes, clientId, isSelected, index } = props;
	const {
		uniqueId,
		content,
		name,
		callToAction,
		style_image,
		style_buttonPreset,
		style_layoutPreset
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
		return <MyIcon icon={"lni-checkmark-circle"} className="wcb-button__icon" />
	}

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
							{/* Image */}	
							{
								(style_image && 
								style_image.imagePosition === "left") &&
								renderImage()
							}
							<div className={`wcb-slider-child__item-inner 
								${
									// style_layoutPreset?.preset === "wcb-layout-2" ||
									// style_layoutPreset?.preset === "wcb-layout-3" ||
									// style_layoutPreset?.preset === "wcb-layout-5" ?
									// "justify-items-start" : "justify-items-center"
									""
								}
							`}
							>
								{/* Image */}	
								{
									(style_image && 
									style_image.imagePosition === "above-title") &&
									renderImage()
								}

								{/* Name */}
								<div className="wcb-slider-child__name">
									{
										style_layoutPreset?.preset === "wcb-layout-1" || 
										style_layoutPreset?.preset === "wcb-layout-2" ||
										style_layoutPreset?.preset === "wcb-layout-3" ?
										renderIconTop() : null
									}
									<RichText
										tagName="h4"
										placeholder={__("Enter name...", "wcb")}
										value={name}
										onChange={(value) => setAttributes({ name: value })}
									/>
								</div>

								{/* Image */}	
								{
									(style_image && 
									style_image.imagePosition === "blow-title") &&
									renderImage()
								}

								{/* Content */}
								<div className={`wcb-slider-child__content ${
										style_layoutPreset?.preset === "wcb-layout-2" ||
										style_layoutPreset?.preset === "wcb-layout-3" ||
										style_layoutPreset?.preset === "wcb-layout-5" ?
										"text-start" : "text-center"
									}
								`}>
									<RichText
										tagName="p"
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
													tagName="span"
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
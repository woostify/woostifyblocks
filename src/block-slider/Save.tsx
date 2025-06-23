import React from "react";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import GlobalCss from "./GlobalCss";
import { WCB_SLIDER_PANEL_GENERAL_DEMO } from "./WcbSliderPanelGeneral";
import { WCB_SLIDER_PANEL_CAROUSEL_DEMO } from "./WcbSliderPanelCarousel";
import { WCB_SLIDER_PANEL_STYLE_ARROW_DOTS_DEMO } from "./WcbSliderPanel_StyleArrowDots";
import { WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO } from "./WcbSliderPanel_StyleBackground";
import { WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO } from "./WcbSliderPanel_StyleDimension";
import { WCB_SLIDER_PANEL_STYLE_NAME_DEMO } from "./WcbSliderPanel_StyleName";
import { WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO } from "./WcbSliderPanel_StyleContent";
import { WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO } from "./WcbSliderPanel_StyleCompany";
import { WCB_SLIDER_PANEL_STYLE_BOXSHADOW_DEMO } from "./WcbSliderPanel_StyleBoxshadow";
import { WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO } from "./WcbSlidersPanel_StyleVerticalAlignment";
import { RESPONSIVE_CONDITON_DEMO } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { Z_INDEX_DEMO } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { MY_MOTION_EFFECT_DEMO } from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import "./style.scss";

export interface WcbAttrsForSave extends WcbAttrs {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		sliders,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_dimension,
		style_name,
		style_content,
		style_company,
		style_boxshadow,
		advance_motionEffect,
		style_verticalAlignment,
	} = attributes;

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		sliders,
		advance_responsiveCondition: advance_responsiveCondition || RESPONSIVE_CONDITON_DEMO,
		advance_zIndex: advance_zIndex || Z_INDEX_DEMO,
		general_general: general_general || WCB_SLIDER_PANEL_GENERAL_DEMO,
		general_carousel: general_carousel || WCB_SLIDER_PANEL_CAROUSEL_DEMO,
		style_arrowAndDots: style_arrowAndDots || WCB_SLIDER_PANEL_STYLE_ARROW_DOTS_DEMO,
		style_backgroundAndBorder: style_backgroundAndBorder || WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
		style_dimension: style_dimension || WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
		style_name: style_name || WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
		style_content: style_content || WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
		style_company: style_company || WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
		style_boxshadow: style_boxshadow || WCB_SLIDER_PANEL_STYLE_BOXSHADOW_DEMO,
		advance_motionEffect: advance_motionEffect || MY_MOTION_EFFECT_DEMO,
		style_verticalAlignment: style_verticalAlignment || WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO,
	};

	const blockProps = useBlockProps.save({
		className: `wcb-slider__wrap ${uniqueId} wcb-update-div`,
		"data-uniqueid": uniqueId,
	});

	return (
		<div {...blockProps}>
			{/* Frontend CSS injection elements */}
			<div data-wcb-global-styles={uniqueId}></div>
			<pre data-wcb-block-attrs={uniqueId} style={{ display: "none" }}>
				{JSON.stringify(newAttrForSave, null, 2)}
			</pre>
			
			{/* Parent CSS styles for edit mode */}
			<GlobalCss {...newAttrForSave} />
			
			{/* Slider structure matching frontend expectations */}
			<div className="wcb-slider__wrap-items">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}

import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
// SLIDER_ITEM_DEMO moved to child component
import {
	WCB_SLIDER_PANEL_CAROUSEL,
	WCB_SLIDER_PANEL_CAROUSEL_DEMO,
} from "./WcbSliderPanelCarousel";
import {
	WCB_SLIDER_PANEL_GENERAL,
	WCB_SLIDER_PANEL_GENERAL_DEMO,
} from "./WcbSliderPanelGeneral";

import {
	WCB_SLIDER_PANEL_STYLE_ARROW_DOTS,
	WCB_SLIDER_PANEL_STYLE_ARROW_DOTS_DEMO,
} from "./WcbSliderPanel_StyleArrowDots";
import {
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
} from "./WcbSliderPanel_StyleBackground";
import {
	WCB_SLIDER_PANEL_STYLE_COMPANY,
	WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
} from "./WcbSliderPanel_StyleCompany";
import { 
	WCB_SLIDER_PANEL_STYLE_CONTENT,
	WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO 
} from "./WcbSliderPanel_StyleContent";
import {
	WCB_SLIDER_PANEL_STYLE_DIMENSION,
	WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbSliderPanel_StyleDimension";

import {
	WCB_SLIDER_PANEL_STYLE_NAME,
	WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
} from "./WcbSliderPanel_StyleName";
import {
	WCB_SLIDER_PANEL_STYLE_BOXSHADOW,
	WCB_SLIDER_PANEL_STYLE_BOXSHADOW_DEMO,
} from "./WcbSliderPanel_StyleBoxshadow"
import {
	WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT,
	WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO,
} from "./WcbSlidersPanel_StyleVerticalAlignment";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	sliders: string[][];
	//
	general_general: WCB_SLIDER_PANEL_GENERAL;
	general_carousel: WCB_SLIDER_PANEL_CAROUSEL;
	//
	style_name: WCB_SLIDER_PANEL_STYLE_NAME;
	style_content: WCB_SLIDER_PANEL_STYLE_CONTENT;
	style_company: WCB_SLIDER_PANEL_STYLE_COMPANY;
	style_verticalAlignment?: WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT;
	style_arrowAndDots: WCB_SLIDER_PANEL_STYLE_ARROW_DOTS;
	style_backgroundAndBorder: WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER;
	style_boxshadow: WCB_SLIDER_PANEL_STYLE_BOXSHADOW; // New box shadow style
	style_dimension: WCB_SLIDER_PANEL_STYLE_DIMENSION;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	sliders: {
		type: "array",
		default: [
			["wcb/slider-child"],
			["wcb/slider-child"],
			["wcb/slider-child"]
		]
	},

	// THE ATTRS OF BLOCK HERE
	general_general: {
		type: "object",
		default: WCB_SLIDER_PANEL_GENERAL_DEMO,
	},
	general_carousel: {
		type: "object",
		default: WCB_SLIDER_PANEL_CAROUSEL_DEMO,
	},
	//
	style_name: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	},
	style_content: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	},
	style_company: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
	},
	style_verticalAlignment: {
		type: "object",
		default: WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO,
	},
	style_arrowAndDots: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_ARROW_DOTS_DEMO,
	},
	style_backgroundAndBorder: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	},
	style_dimension: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
	},
	style_boxshadow: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_BOXSHADOW_DEMO,
	},
	// ADVANCE
	advance_responsiveCondition: {
		type: "object",
		default: RESPONSIVE_CONDITON_DEMO,
	},
	advance_zIndex: {
		type: "object",
		default: Z_INDEX_DEMO,
	},
	advance_motionEffect: {
		type: "object",
		default: MY_MOTION_EFFECT_DEMO,
	},
};

export default blokc1Attrs;

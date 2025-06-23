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
import { SLIDER_ITEM_DEMO } from "./Edit";
import {
	WCB_SLIDER_PANEL_CAROUSEL,
	WCB_SLIDER_PANEL_CAROUSEL_DEMO,
} from "./WcbSliderPanelCarousel";
import {
	WCB_SLIDER_PANEL_GENERAL,
	WCB_SLIDER_PANEL_GENERAL_DEMO,
} from "./WcbSliderPanelGeneral";
import {
	WCB_SLIDER_PANEL_IMAGES,
	WCB_SLIDER_PANEL_IMAGES_DEMO,
} from "./WcbSliderPanelImages";
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
import { WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO } from "./WcbSliderPanel_StyleContent";
import {
	WCB_SLIDER_PANEL_STYLE_DIMENSION,
	WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbSliderPanel_StyleDimension";
import {
	WCB_SLIDER_PANEL_STYLE_IMAGE,
	WCB_SLIDER_PANEL_STYLE_IMAGE_DEMO,
} from "./WcbSliderPanel_StyleImage";
import {
	WCB_SLIDER_PANEL_STYLE_NAME,
	WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
} from "./WcbSliderPanel_StyleName";

export interface SliderItem {
	content: string;
	name: string;
	companyName: string;
}

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	testimonials: SliderItem[];
	//
	general_general: WCB_SLIDER_PANEL_GENERAL;
	general_images: WCB_SLIDER_PANEL_IMAGES;
	general_carousel: WCB_SLIDER_PANEL_CAROUSEL;
	//
	style_name: WCB_SLIDER_PANEL_STYLE_NAME;
	style_content: WCB_SLIDER_PANEL_STYLE_NAME;
	style_company: WCB_SLIDER_PANEL_STYLE_COMPANY;
	style_image: WCB_SLIDER_PANEL_STYLE_IMAGE;
	style_arrowAndDots: WCB_SLIDER_PANEL_STYLE_ARROW_DOTS;
	style_backgroundAndBorder: WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER;
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

	testimonials: {
		type: "array",
		default: [
			SLIDER_ITEM_DEMO,
			SLIDER_ITEM_DEMO,
			SLIDER_ITEM_DEMO,
		],
	},

	// THE ATTRS OF BLOCK HERE
	general_general: {
		type: "object",
		default: WCB_SLIDER_PANEL_GENERAL_DEMO,
	},
	general_images: {
		type: "object",
		default: WCB_SLIDER_PANEL_IMAGES_DEMO,
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
	style_image: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_IMAGE_DEMO,
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

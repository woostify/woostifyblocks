import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import { MediaUploadData } from "../components/controls/MyMediaUploadCheck";
import { INIT_IMAGE_DATA_UPLOAD_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
// Import style types from parent slider
import {
	WCB_SLIDER_PANEL_STYLE_NAME,
	WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
} from "../block-slider/WcbSliderPanel_StyleName";
import { WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO } from "../block-slider/WcbSliderPanel_StyleContent";
import {
	WCB_SLIDER_PANEL_STYLE_COMPANY,
	WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
} from "../block-slider/WcbSliderPanel_StyleCompany";
import {
	WCB_SLIDER_PANEL_STYLE_IMAGE,
	WCB_SLIDER_PANEL_STYLE_IMAGE_DEMO,
} from "../block-slider/WcbSliderPanel_StyleImage";
import {
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
} from "../block-slider/WcbSliderPanel_StyleBackground";
import {
	WCB_SLIDER_PANEL_STYLE_DIMENSION,
	WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
} from "../block-slider/WcbSliderPanel_StyleDimension";
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

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	content: string;
	name: string;
	callToAction: string;
	//
	image: MediaUploadData;
	rating: number;
	//
	// Style attributes that can be inherited from parent
	style_name?: WCB_SLIDER_PANEL_STYLE_NAME;
	style_content?: WCB_SLIDER_PANEL_STYLE_NAME;
	style_company?: WCB_SLIDER_PANEL_STYLE_COMPANY;
	style_image?: WCB_SLIDER_PANEL_STYLE_IMAGE;
	style_backgroundAndBorder?: WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER;
	style_dimension: WCB_SLIDER_PANEL_STYLE_DIMENSION;
	// Advance attributes
	advance_zIndex: MyZIndexControlData;
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_motionEffect: MyMotionEffectData;
}

const blockAttrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF SLIDER CHILD CONTENT HERE
	content: {
		type: "string",
		source: "html",
		selector: ".wcb-slider-child__content",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	name: {
		type: "string",
		source: "html",
		selector: ".wcb-slider-child__name",
		default: "Slider",
	},
	callToAction: {
		type: "string",
		source: "html",
		selector: ".wcb-slider-child__company",
		default: "Read More",
	},
	image: {
		type: "object",
		default: INIT_IMAGE_DATA_UPLOAD_DEMO,
	},

	// Style attributes (optional - only used when not inheriting from parent)
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
	advance_motionEffect: {
		type: "object",
		default: MY_MOTION_EFFECT_DEMO,
	},
	advance_zIndex: {
		type: "object",
		default: Z_INDEX_DEMO,
	},
};

export default blockAttrs; 
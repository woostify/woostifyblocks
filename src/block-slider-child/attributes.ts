import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import { MediaUploadData } from "../components/controls/MyMediaUploadCheck";
import { INIT_IMAGE_DATA_UPLOAD_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
// Import style types from shared types to avoid circular dependency
import {
	WCB_SLIDER_PANEL_STYLE_NAME,
	WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	WCB_SLIDER_PANEL_STYLE_COMPANY,
	WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	WCB_SLIDER_PANEL_STYLE_DIMENSION,
	WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
} from "../block-slider/types";
import {
	WCB_SLIDER_PANEL_IMAGE,
	WCB_SLIDER_PANEL_IMAGE_DEMO,
} from "./WcbSliderPanel_StyleImage";
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
import { WCB_SLIDER_BUTTON_PANEL_PRESET, WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO } from "./WcbSliderPanel_ButtonPreset";
import { WCB_SLIDER_LAYOUT_PANEL_PRESET, WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO } from "./WcbSliderPanel_LayoutPreset";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	clientID?: string; // Add clientID for Save component
	content: string;
	name: string;
	callToAction: string;
	//
	image: MediaUploadData;
	rating: number;
	//
	// Style attributes that can be inherited from parent
	style_name?: WCB_SLIDER_PANEL_STYLE_NAME;
	style_content?: WCB_SLIDER_PANEL_STYLE_NAME; // Keep as NAME type for now to match parent
	style_company?: WCB_SLIDER_PANEL_STYLE_COMPANY;
	style_image?: WCB_SLIDER_PANEL_IMAGE;
	style_backgroundAndBorder?: WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER;
	style_dimension: WCB_SLIDER_PANEL_STYLE_DIMENSION;
	style_buttonPreset?: WCB_SLIDER_BUTTON_PANEL_PRESET;
	style_layoutPreset?: WCB_SLIDER_LAYOUT_PANEL_PRESET;
	// style_sparator?: WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR;
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

	clientID: {
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
		selector: ".wcb-slider-child__btn",
		default: "Read More",
	},

	// Image and rating attributes
	image: {
		type: "object",
		default: INIT_IMAGE_DATA_UPLOAD_DEMO,
	},
	rating: {
		type: "number",
		default: 5,
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
		default: WCB_SLIDER_PANEL_IMAGE_DEMO,
	},

	style_backgroundAndBorder: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	},

	style_dimension: {
		type: "object",
		default: WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
	},

	style_buttonPreset: {
		type: "object",
		default: {
			preset: "wcb-button-1",
		},
	},

	style_layoutPreset: {
		type: "object",
		default: WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO
	},

	// style_sparator: {
	// 	type: "object",
	// 	default: WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_DEMO,
	// },

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
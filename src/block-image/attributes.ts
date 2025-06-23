import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import {
	WCB_IMAGE_PANEL_SETTINGS,
	WCB_IMAGE_PANEL_SETTINGS_DEMO,
} from "./WcbImagePanelSettings";
import {
	WCB_IMAGE_PANEL_STYLE_CAPTION,
	WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO,
} from "./WcbImagePanel_StyleCaption";
import {
	WCB_IMAGE_PANEL_STYLE_IMAGE,
	WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO,
} from "./WcbImagePanel_StyleImage";
import {
	WCB_IMAGE_PANEL_STYLE_OVERLAY,
	WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO,
} from "./WcbImagePanel_StyleOverlay";
import {
	WCB_IMAGE_PANEL_IMAGES,
	WCB_IMAGE_PANEL_IMAGES_DEMO,
} from "./WcbImagePanelImages";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	//
	general_settings: WCB_IMAGE_PANEL_SETTINGS;
	general_image: WCB_IMAGE_PANEL_IMAGES;
	style_image: WCB_IMAGE_PANEL_STYLE_IMAGE;
	style_overlay: WCB_IMAGE_PANEL_STYLE_OVERLAY;
	style_caption: WCB_IMAGE_PANEL_STYLE_CAPTION;
	//
	//
	url: string;
	alt: string;
	title: string;
	caption: string;
	id: string;
	href: string;
	rel: string;
	linkClass: string;
	linkDestination: string;
	linkTarget: string;
	//
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	//
	general_settings: {
		type: "object",
		default: WCB_IMAGE_PANEL_SETTINGS_DEMO,
	},
	general_image:{
		type: "object",
		default: WCB_IMAGE_PANEL_IMAGES_DEMO,
	},
	style_image: {
		type: "object",
		default: WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO,
	},
	style_overlay: {
		type: "object",
		default: WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO,
	},
	style_caption: {
		type: "object",
		default: WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO,
	},
	//

	url: {
		type: "string",
		source: "attribute",
		selector: "img",
		attribute: "src",
		__experimentalRole: "content",
	},
	alt: {
		type: "string",
		source: "attribute",
		selector: "img",
		attribute: "alt",
		default: "",
		__experimentalRole: "content",
	},
	caption: {
		type: "string",
		source: "html",
		selector: "figcaption",
		default: "",
		__experimentalRole: "content",
	},
	title: {
		type: "string",
		source: "attribute",
		selector: "img",
		attribute: "title",
		__experimentalRole: "content",
	},
	href: {
		type: "string",
		source: "attribute",
		selector: "figure > a",
		attribute: "href",
		__experimentalRole: "content",
	},
	rel: {
		type: "string",
		source: "attribute",
		selector: "figure > a",
		attribute: "rel",
	},
	linkClass: {
		type: "string",
		source: "attribute",
		selector: "figure > a",
		attribute: "class",
	},
	id: {
		type: "number",
		__experimentalRole: "content",
	},

	linkDestination: {
		type: "string",
	},
	linkTarget: {
		type: "string",
		source: "attribute",
		selector: "figure > a",
		attribute: "target",
	},

	// THE ATTRS OF BLOCK HERE

	// ADVANCE
	advance_responsiveCondition: {
		type: "object",
		default: RESPONSIVE_CONDITON_DEMO,
	},
	advance_zIndex: {
		type: "object",
		default: Z_INDEX_DEMO,
	},
};

export default blokc1Attrs;

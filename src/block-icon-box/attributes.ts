import { AttrsGenericType } from "../block-container/attributes";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import {
	WCB_ICON_BOX_PANEL_IMAGES,
	WCB_ICON_BOX_PANEL_IMAGES_DEMO,
} from "./WcbTeamPanelImages";
import {
	WCB_ICON_BOX_PANEL_LAYOUT,
	WCB_ICON_BOX_PANEL_LAYOUT_DEMO,
} from "./WcbTeamPanelLayout";

import {
	WCB_ICON_BOX_PANEL_STYLE_DESIGNATION,
	WCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO,
} from "./WcbTeamPanel_StyleDesignation";
import {
	WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION,
	WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO,
} from "./WcbTeamPanel_StyleDescription";
import {
	WCB_ICON_BOX_PANEL_STYLE_TITLE,
	WCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO,
} from "./WcbTeamPanel_StyleTitle";
import {
	WCB_ICON_BOX_PANEL_STYLE_SOCIALICONS,
	WCB_ICON_BOX_PANEL_STYLE_SOCIALICONS_DEMO,
} from "./WcbTeamPanel_StyleSocialIcons";
import {
	WCB_ICON_BOX_PANEL_STYLE_IMAGE,
	WCB_ICON_BOX_PANEL_STYLE_IMAGE_DEMO,
} from "./WcbTeamPanel_StyleImage";
export interface WcbAttrs {
	uniqueId: string;
	heading: string;
	designation: string;
	description: string;
	//
	general_layout: WCB_ICON_BOX_PANEL_LAYOUT;
	general_image: WCB_ICON_BOX_PANEL_IMAGES;
	style_title: WCB_ICON_BOX_PANEL_STYLE_TITLE;
	style_desination: WCB_ICON_BOX_PANEL_STYLE_DESIGNATION;
	style_description: WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION;
	style_socialIcons: WCB_ICON_BOX_PANEL_STYLE_SOCIALICONS;
	style_image: WCB_ICON_BOX_PANEL_STYLE_IMAGE;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF BLOCK HERE
	heading: {
		type: "string",
		source: "html",
		selector: ".wcb-icon-box__heading",
		default: "John Doe",
	},
	designation: {
		type: "string",
		source: "html",
		selector: ".wcb-icon-box__designation",
		default: "Designation",
	},
	description: {
		type: "string",
		source: "html",
		selector: ".wcb-icon-box__description",
		default:
			"Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	//

	general_layout: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_LAYOUT_DEMO,
	},
	general_image: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_IMAGES_DEMO,
	},

	style_title: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO,
	},
	style_desination: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO,
	},
	style_description: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO,
	},
	style_socialIcons: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_STYLE_SOCIALICONS_DEMO,
	},
	style_image: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_STYLE_IMAGE_DEMO,
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
};

export default blokc1Attrs;

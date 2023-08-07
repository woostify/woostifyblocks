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
	WCB_TEAM_PANEL_IMAGES,
	WCB_TEAM_PANEL_IMAGES_DEMO,
} from "./WcbTeamPanelImages";
import {
	WCB_TEAM_PANEL_LAYOUT,
	WCB_TEAM_PANEL_LAYOUT_DEMO,
} from "./WcbTeamPanelLayout";
import {
	WCB_TEAM_PANEL_SOCIALS,
	WCB_TEAM_PANEL_SOCIALS_DEMO,
} from "./WcbTeamPanelSocials";
import {
	WCB_TEAM_PANEL_STYLE_DESIGNATION,
	WCB_TEAM_PANEL_STYLE_DESIGNATION_DEMO,
} from "./WcbTeamPanel_StyleDesignation";
import {
	WCB_TEAM_PANEL_STYLE_DESCRIPTION,
	WCB_TEAM_PANEL_STYLE_DESCRIPTION_DEMO,
} from "./WcbTeamPanel_StyleDescription";
import {
	WCB_TEAM_PANEL_STYLE_TITLE,
	WCB_TEAM_PANEL_STYLE_TITLE_DEMO,
} from "./WcbTeamPanel_StyleTitle";
import {
	WCB_TEAM_PANEL_STYLE_SOCIALICONS,
	WCB_TEAM_PANEL_STYLE_SOCIALICONS_DEMO,
} from "./WcbTeamPanel_StyleSocialIcons";
import {
	WCB_TEAM_PANEL_STYLE_IMAGE,
	WCB_TEAM_PANEL_STYLE_IMAGE_DEMO,
} from "./WcbTeamPanel_StyleImage";
import {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	heading: string;
	designation: string;
	description: string;
	//
	general_layout: WCB_TEAM_PANEL_LAYOUT;
	general_image: WCB_TEAM_PANEL_IMAGES;
	general_socials: WCB_TEAM_PANEL_SOCIALS;
	style_title: WCB_TEAM_PANEL_STYLE_TITLE;
	style_desination: WCB_TEAM_PANEL_STYLE_DESIGNATION;
	style_description: WCB_TEAM_PANEL_STYLE_DESCRIPTION;
	style_socialIcons: WCB_TEAM_PANEL_STYLE_SOCIALICONS;
	style_image: WCB_TEAM_PANEL_STYLE_IMAGE;
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

	// THE ATTRS OF BLOCK HERE
	heading: {
		type: "string",
		source: "html",
		selector: ".wcb-team__heading",
		default: "John Doe",
	},
	designation: {
		type: "string",
		source: "html",
		selector: ".wcb-team__designation",
		default: "Designation",
	},
	description: {
		type: "string",
		source: "html",
		selector: ".wcb-team__description",
		default:
			"Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	//

	general_layout: {
		type: "object",
		default: WCB_TEAM_PANEL_LAYOUT_DEMO,
	},
	general_image: {
		type: "object",
		default: WCB_TEAM_PANEL_IMAGES_DEMO,
	},
	general_socials: {
		type: "object",
		default: WCB_TEAM_PANEL_SOCIALS_DEMO,
	},
	style_title: {
		type: "object",
		default: WCB_TEAM_PANEL_STYLE_TITLE_DEMO,
	},
	style_desination: {
		type: "object",
		default: WCB_TEAM_PANEL_STYLE_DESIGNATION_DEMO,
	},
	style_description: {
		type: "object",
		default: WCB_TEAM_PANEL_STYLE_DESCRIPTION_DEMO,
	},
	style_socialIcons: {
		type: "object",
		default: WCB_TEAM_PANEL_STYLE_SOCIALICONS_DEMO,
	},
	style_image: {
		type: "object",
		default: WCB_TEAM_PANEL_STYLE_IMAGE_DEMO,
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

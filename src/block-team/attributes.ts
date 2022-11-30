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
export interface WcbAttrs {
	uniqueId: string;
	heading: string;
	//
	general_layout: WCB_TEAM_PANEL_LAYOUT;
	general_image: WCB_TEAM_PANEL_IMAGES;
	general_socials: WCB_TEAM_PANEL_SOCIALS;
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
		selector: ".wcb-heading__heading",
		default: "Clik to edit HEADING",
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

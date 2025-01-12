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
	WCB_ICON_BOX_PANEL_ICON,
	WCB_ICON_BOX_PANEL_ICON_DEMO,
} from "./WcbIconBoxPanelIcon";
import {
	WCB_ICON_BOX_PANEL_LAYOUT,
	WCB_ICON_BOX_PANEL_LAYOUT_DEMO,
} from "./WcbIconBoxPanelLayout";

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
	WCB_ICON_BOX_PANEL_STYLE_ICON,
	WCB_ICON_BOX_PANEL_STYLE_ICON_DEMO,
} from "./WcbIconBoxPanel_StyleIcons";

import {
	WCB_ICON_BOX_PANEL_STYLE_DIMENSION,
	WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbIconBoxPanel_StyleDimension";

import {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	heading: string;
	endNumber: string;
	designation: string;
	description: string;
	//
	general_layout: WCB_ICON_BOX_PANEL_LAYOUT;
	general_icon: WCB_ICON_BOX_PANEL_ICON;
	style_title: WCB_ICON_BOX_PANEL_STYLE_TITLE;
	style_desination: WCB_ICON_BOX_PANEL_STYLE_DESIGNATION;
	style_description: WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION;
	style_Icon: WCB_ICON_BOX_PANEL_STYLE_ICON;
	style_dimension: WCB_ICON_BOX_PANEL_STYLE_DIMENSION;
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
	endNumber: {
		type: "string",
		source: "html",
		selector: ".wcb-icon-box__heading",
		default: "80",
	},
	designation: {
		type: "string",
		source: "html",
		selector: ".wcb-icon-box__designation",
		default: "Write a Prefix",
	},
	description: {
		type: "string",
		source: "html",
		selector: ".wcb-icon-box__description",
		default: "Add Your Title Here…",
	},
	//

	general_layout: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_LAYOUT_DEMO,
	},
	general_icon: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_ICON_DEMO,
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
	style_Icon: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_STYLE_ICON_DEMO,
	},

	style_dimension: {
		type: "object",
		default: WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO,
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

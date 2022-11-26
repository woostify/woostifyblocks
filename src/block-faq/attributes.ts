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
	WCB_FAQ_PANEL_GENERAL,
	WCB_FAQ_PANEL_GENERAL_DEMO,
} from "./WcbFaqPanelGeneral";
import { WCB_FAQ_PANEL_ICON, WCB_FAQ_PANEL_ICON_DEMO } from "./WcbFaqPanelIcon";
export interface WcbAttrs {
	uniqueId: string;
	general_general: WCB_FAQ_PANEL_GENERAL;
	general_icon: WCB_FAQ_PANEL_ICON;
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
	general_general: {
		type: "string",
		default: WCB_FAQ_PANEL_GENERAL_DEMO,
	},
	general_icon: {
		type: "string",
		default: WCB_FAQ_PANEL_ICON_DEMO,
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

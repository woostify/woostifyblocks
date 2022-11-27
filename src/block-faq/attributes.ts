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
import {
	WCB_FAQ_PANEL_STYLE_ANSWER,
	WCB_FAQ_PANEL_STYLE_ANSWER_DEMO,
} from "./WcbFaqPanel_StyleAnswer";
import {
	WCB_FAQ_PANEL_STYLE_CONTAINER,
	WCB_FAQ_PANEL_STYLE_CONTAINER_DEMO,
} from "./WcbFaqPanel_StyleContainer";
import {
	WCB_FAQ_PANEL_STYLE_QUESTION,
	WCB_FAQ_PANEL_STYLE_QUESTION_DEMO,
} from "./WcbFaqPanel_StyleQuestion";
export interface WcbAttrs {
	uniqueId: string;
	general_general: WCB_FAQ_PANEL_GENERAL;
	general_icon: WCB_FAQ_PANEL_ICON;
	style_container: WCB_FAQ_PANEL_STYLE_CONTAINER;
	style_question: WCB_FAQ_PANEL_STYLE_QUESTION;
	style_answer: WCB_FAQ_PANEL_STYLE_ANSWER;
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
		type: "object",
		default: WCB_FAQ_PANEL_GENERAL_DEMO,
	},
	general_icon: {
		type: "object",
		default: WCB_FAQ_PANEL_ICON_DEMO,
	},
	style_container: {
		type: "object",
		default: WCB_FAQ_PANEL_STYLE_CONTAINER_DEMO,
	},
	style_question: {
		type: "object",
		default: WCB_FAQ_PANEL_STYLE_QUESTION_DEMO,
	},
	style_answer: {
		type: "object",
		default: WCB_FAQ_PANEL_STYLE_ANSWER_DEMO,
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

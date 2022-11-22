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
	WCB_BUTTON_PANEL_CONTENT,
	WCB_BUTTON_PANEL_CONTENT_DEMO,
} from "./WcbButtonPanelContent";
import {
	WCB_BUTTON_PANEL_PRESET,
	WCB_BUTTON_PANEL_PRESET_DEMO,
} from "./WcbButtonPanelPreset";
export interface WcbAttrs {
	uniqueId: string;
	content: string;
	//
	general_preset: WCB_BUTTON_PANEL_PRESET;
	general_content: WCB_BUTTON_PANEL_CONTENT;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	content: {
		type: "string",
		source: "html",
		selector: ".wcb-button__main",
		default: "Click here",
	},
	// THE ATTRS OF BLOCK HERE
	general_preset: {
		type: "object",
		default: WCB_BUTTON_PANEL_PRESET_DEMO,
	},
	general_content: {
		type: "object",
		default: WCB_BUTTON_PANEL_CONTENT_DEMO,
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

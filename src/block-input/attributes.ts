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
	WCB_INPUT_PANEL_GENERAL,
	WCB_INPUT_PANEL_GENERAL_DEMO,
} from "./WcbInputPanelGeneral";
export interface WcbAttrs {
	uniqueId: string;
	label: string;
	//
	general_general: WCB_INPUT_PANEL_GENERAL;
	//
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	label: {
		type: "string",
		source: "html",
		selector: ".wcb-form__label",
		default: "Label",
	},
	//
	general_general: {
		type: "object",
		default: WCB_INPUT_PANEL_GENERAL_DEMO,
	},
	// ADVANCE
};

export default blokc1Attrs;

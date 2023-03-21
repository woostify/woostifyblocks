import { AttrsGenericType } from "../block-container/attributes";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import { MyCheckboxOption, MY_CHECK_BOX_OPTIONS_DEMO } from "./Edit";
import {
	WCB_CHECKBOX_PANEL_GENERAL,
	WCB_CHECKBOX_PANEL_GENERAL_DEMO,
} from "./WcbCheckboxPanelGeneral";
export interface WcbAttrs {
	uniqueId: string;
	label: string;
	//
	options: MyCheckboxOption[];
	general_general: WCB_CHECKBOX_PANEL_GENERAL;
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
	options: {
		type: "array",
		default: MY_CHECK_BOX_OPTIONS_DEMO,
	},
	//
	general_general: {
		type: "object",
		default: WCB_CHECKBOX_PANEL_GENERAL_DEMO,
	},
	// ADVANCE
};

export default blokc1Attrs;

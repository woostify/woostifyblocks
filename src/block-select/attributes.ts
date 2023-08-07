import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import { MySelectOption, MY_RADIO_OPTIONS_DEMO } from "./Edit";
import {
	WCB_SELECT_PANEL_GENERAL,
	WCB_SELECT_PANEL_GENERAL_DEMO,
} from "./WcbSelectPanelGeneral";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	label: string;
	//
	options: MySelectOption[];
	general_general: WCB_SELECT_PANEL_GENERAL;
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
		default: MY_RADIO_OPTIONS_DEMO,
	},
	//
	general_general: {
		type: "object",
		default: WCB_SELECT_PANEL_GENERAL_DEMO,
	},
	// ADVANCE
};

export default blokc1Attrs;

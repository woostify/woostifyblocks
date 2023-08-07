import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import { MyRadioOption, MY_RADIO_OPTIONS_DEMO } from "./Edit";
import {
	WCB_RADIO_PANEL_GENERAL,
	WCB_RADIO_PANEL_GENERAL_DEMO,
} from "./WcbRadioPanelGeneral";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	label: string;
	//
	options: MyRadioOption[];
	general_general: WCB_RADIO_PANEL_GENERAL;
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
		default: WCB_RADIO_PANEL_GENERAL_DEMO,
	},
	// ADVANCE
};

export default blokc1Attrs;

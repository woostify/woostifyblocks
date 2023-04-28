import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	WCB_PHONE_PANEL_GENERAL,
	WCB_PHONE_PANEL_GENERAL_DEMO,
} from "./WcbPhonePanelGeneral";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	label: string;
	countryCode: string;
	pattern: string;
	//
	general_general: WCB_PHONE_PANEL_GENERAL;
	//
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	countryCode: {
		type: "string",
		default: "",
	},
	pattern: {
		type: "string",
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
		default: WCB_PHONE_PANEL_GENERAL_DEMO,
	},
};

export default blokc1Attrs;

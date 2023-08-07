import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	WCB_HIDDEN_PANEL_GENERAL,
	WCB_HIDDEN_PANEL_GENERAL_DEMO,
} from "./WcbHiddenPanelGeneral";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	//
	general_general: WCB_HIDDEN_PANEL_GENERAL;
	//
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	//
	general_general: {
		type: "object",
		default: WCB_HIDDEN_PANEL_GENERAL_DEMO,
	},
};

export default blokc1Attrs;

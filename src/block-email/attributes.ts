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
	WCB_EMAIL_PANEL_GENERAL,
	WCB_EMAIL_PANEL_GENERAL_DEMO,
} from "./WcbEmailPanelGeneral";
export interface WcbAttrs {
	uniqueId: string;
	label: string;
	//
	general_general: WCB_EMAIL_PANEL_GENERAL;
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
		default: WCB_EMAIL_PANEL_GENERAL_DEMO,
	},
};

export default blokc1Attrs;

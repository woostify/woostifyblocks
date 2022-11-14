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
	WCB_FORM_PANEL_ACTION,
	WCB_FORM_PANEL_ACTION_DEMO,
} from "./WcbFormPanelAction";
import {
	WCB_FORM_PANEL_GENERAL,
	WCB_FORM_PANEL_GENERAL_DEMO,
} from "./WcbFormPanelGeneral";
import {
	WCB_FORM_PANEL_GOOGLE_RECAPTCHA,
	WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO,
} from "./WcbFormPanelGoogleRecaptcha";
import {
	WCB_FORM_PANEL_SUBMIT_BUTTON,
	WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO,
} from "./WcbFormPanelSubmitButton";
import {
	WCB_FORM_PANEL_STYLE_INPUT,
	WCB_FORM_PANEL_STYLE_INPUT_DEMO,
} from "./WcbFormPanel_StyleInput";
import {
	WCB_FORM_PANEL_STYLE_LABEL,
	WCB_FORM_PANEL_STYLE_LABEL_DEMO,
} from "./WcbFormPanel_StyleLabel";
export interface WcbAttrs {
	uniqueId: string;
	//
	general_general: WCB_FORM_PANEL_GENERAL;
	general_submit_button: WCB_FORM_PANEL_SUBMIT_BUTTON;
	general_action: WCB_FORM_PANEL_ACTION;
	general_gg_recaptcha: WCB_FORM_PANEL_GOOGLE_RECAPTCHA;
	//
	style_label: WCB_FORM_PANEL_STYLE_LABEL;
	style_input: WCB_FORM_PANEL_STYLE_INPUT;
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
		default: WCB_FORM_PANEL_GENERAL_DEMO,
	},
	general_submit_button: {
		type: "object",
		default: WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO,
	},
	general_action: {
		type: "object",
		default: WCB_FORM_PANEL_ACTION_DEMO,
	},
	general_gg_recaptcha: {
		type: "object",
		default: WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO,
	},
	//
	style_label: {
		type: "object",
		default: WCB_FORM_PANEL_STYLE_LABEL_DEMO,
	},
	style_input: {
		type: "object",
		default: WCB_FORM_PANEL_STYLE_INPUT_DEMO,
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

import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import {
	WCB_BUTTONS_PANEL_GENERAL,
	WCB_BUTTONS_PANEL_GENERAL_DEMO,
} from "./WcbButtonsPanelGeneral";
import {
	WCB_BUTTONS_PANEL_STYLE_DIMENSION,
	WCB_BUTTONS_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbButtonsPanel_StyleDimension";
import {
	WCB_BUTTONS_PANEL_STYLE_TEXT,
	WCB_BUTTONS_PANEL_STYLE_TEXT_DEMO,
} from "./WcbButtonsPanel_StyleText";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	//
	general_general: WCB_BUTTONS_PANEL_GENERAL;
	style_text: WCB_BUTTONS_PANEL_STYLE_TEXT;
	style_dimension: WCB_BUTTONS_PANEL_STYLE_DIMENSION;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF BLOCK HERE
	general_general: {
		type: "object",
		default: WCB_BUTTONS_PANEL_GENERAL_DEMO,
	},
	style_text: {
		type: "object",
		default: WCB_BUTTONS_PANEL_STYLE_TEXT_DEMO,
	},
	style_dimension: {
		type: "object",
		default: WCB_BUTTONS_PANEL_STYLE_DIMENSION_DEMO,
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
	advance_motionEffect: {
		type: "object",
		default: MY_MOTION_EFFECT_DEMO,
	},
};

export default blokc1Attrs;

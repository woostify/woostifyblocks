import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
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
import {
	WCB_BUTTON_PANEL_STYLE_BACKGROUND,
	WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO,
} from "./WcbButtonPanel_StyleBackground";
import {
	WCB_BUTTON_PANEL_STYLE_BORDER,
	WCB_BUTTON_PANEL_STYLE_BORDER_DEMO,
} from "./WcbButtonPanel_StyleBorder";
import {
	WCB_BUTTON_PANEL_STYLE_BOXSHADOW,
	WCB_BUTTON_PANEL_STYLE_BOXSHADOW_DEMO,
} from "./WcbButtonPanel_StyleBoxshadow";
import {
	WCB_BUTTON_PANEL_STYLE_DIMENSION,
	WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbButtonPanel_StyleDimension";
import {
	WCB_BUTTON_PANEL_STYLE_ICON,
	WCB_BUTTON_PANEL_STYLE_ICON_DEMO,
} from "./WcbButtonPanel_StyleIcon";
import {
	WCB_BUTTON_PANEL_STYLE_TEXT,
	WCB_BUTTON_PANEL_STYLE_TEXT_DEMO,
} from "./WcbButtonPanel_StyleText";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	content: string;
	//
	general_preset: WCB_BUTTON_PANEL_PRESET;
	general_content: WCB_BUTTON_PANEL_CONTENT;
	style_text: WCB_BUTTON_PANEL_STYLE_TEXT;
	style_icon: WCB_BUTTON_PANEL_STYLE_ICON;
	style_background: WCB_BUTTON_PANEL_STYLE_BACKGROUND;
	style_border: WCB_BUTTON_PANEL_STYLE_BORDER;
	style_boxshadow: WCB_BUTTON_PANEL_STYLE_BOXSHADOW;
	style_dimension: WCB_BUTTON_PANEL_STYLE_DIMENSION;
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
		selector: ".wcb-button__text",
		default: "Button",
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
	style_text: {
		type: "object",
		default: WCB_BUTTON_PANEL_STYLE_TEXT_DEMO,
	},
	style_icon: {
		type: "object",
		default: WCB_BUTTON_PANEL_STYLE_ICON_DEMO,
	},
	style_background: {
		type: "object",
		default: WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO,
	},
	style_border: {
		type: "object",
		default: WCB_BUTTON_PANEL_STYLE_BORDER_DEMO,
	},
	style_boxshadow: {
		type: "object",
		default: WCB_BUTTON_PANEL_STYLE_BOXSHADOW_DEMO,
	},
	style_dimension: {
		type: "object",
		default: WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO,
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

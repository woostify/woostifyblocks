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
	WCB_FAQ_PANEL_PRESET,
	WCB_FAQ_PANEL_PRESET_DEMO,
} from "./WcbFaqPanelPreset";

import {
	WCB_TABS_PANEL_STYLE_ICON,
	WCB_TABS_PANEL_STYLE_ICON_DEMO,
} from "./WcbTabsPanel_StyleIcon";
import {
	WCB_TABS_PANEL_STYLE_TITLE,
	WCB_TABS_PANEL_STYLE_TITLE_DEMO,
} from "./WcbTabsPanel_StyleTitle";
import {
	WCB_TABS_PANEL_TAB_TITLE,
	WCB_TABS_PANEL_TAB_TITLE_DEMO,
} from "./WcbTabsPanelTabTitle";
import { BlockTabTitleItem } from "./types";
import {
	WCB_TABS_PANEL_STYLE_BODY,
	WCB_TABS_PANEL_STYLE_BODY_DEMO,
} from "./WcbTabsPanel_StyleBody";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	titles: BlockTabTitleItem[];
	general_tabTitle: WCB_TABS_PANEL_TAB_TITLE;
	style_title: WCB_TABS_PANEL_STYLE_TITLE;
	style_body: WCB_TABS_PANEL_STYLE_BODY;
	general_preset: WCB_FAQ_PANEL_PRESET;
	style_icon: WCB_TABS_PANEL_STYLE_ICON;
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
	titles: {
		type: "array",
		default: [
			{ id: "1", title: "Title 1" },
			{ id: "2", title: "Title 2" },
			{ id: "3", title: "Title 3" },
		],
	},
	general_tabTitle: {
		type: "object",
		default: WCB_TABS_PANEL_TAB_TITLE_DEMO,
	},
	style_title: {
		type: "object",
		default: WCB_TABS_PANEL_STYLE_TITLE_DEMO,
	},
	style_body: {
		type: "object",
		default: WCB_TABS_PANEL_STYLE_BODY_DEMO,
	},
	// THE ATTRS OF BLOCK HERE
	general_preset: {
		type: "object",
		default: WCB_FAQ_PANEL_PRESET_DEMO,
	},

	style_icon: {
		type: "object",
		default: WCB_TABS_PANEL_STYLE_ICON_DEMO,
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

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
    WCB_ICON_BOX_PANEL_ICON,
    WCB_ICON_BOX_PANEL_ICON_DEMO,
} from "./WcbIconPanelIcon";
import {
    WCB_ICON_PANEL_PRESET,
    WCB_ICON_PANEL_PRESET_DEMO,
} from "./WcbIconPanelPreset";

import {
    WCB_ICON_PANEL_STYLE_ICON,
    WCB_ICON_PANEL_STYLE_ICON_DEMO,
} from "./WcbIconPanel_StyleIcon";

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

export interface WcbAttrs extends WcbAttrsCommonFromWp {
    cover: string;
    uniqueId: string;
    daylabel: string;
    hrslabel: string;
    minlabel: string;
    seclabel: string;
    //
    general_preset: WCB_ICON_PANEL_PRESET;
    general_icon: WCB_ICON_BOX_PANEL_ICON;
    style_background: WCB_BUTTON_PANEL_STYLE_BACKGROUND;
    style_icon: WCB_ICON_PANEL_STYLE_ICON;
    style_border: WCB_BUTTON_PANEL_STYLE_BORDER;
    style_boxshadow: WCB_BUTTON_PANEL_STYLE_BOXSHADOW;
    //
    advance_responsiveCondition: MyResponsiveConditionControlData;
    advance_zIndex: MyZIndexControlData;
    advance_motionEffect: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	cover: {
        type: 'string',
        default: '',
    },

    uniqueId: {
        type: "string",
        default: "",
    },
    //

    general_icon: {
        type: "object",
        default: WCB_ICON_BOX_PANEL_ICON_DEMO,
    },
    general_preset: {
        type: "object",
        default: WCB_ICON_PANEL_PRESET_DEMO,
    },
    style_icon: {
        type: "object",
        default: WCB_ICON_PANEL_STYLE_ICON_DEMO,
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

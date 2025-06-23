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
    WCB_COUNTDOWN_PANEL_LAYOUT,
    WCB_COUNTDOWN_PANEL_LAYOUT_DEMO,
} from "./WcbCountdownPanelLayout";
import {
    WCB_COUNTDOWN_PANEL_PRESET,
    WCB_COUNTDOWN_PANEL_PRESET_DEMO,
} from "./WcbCountdownPanelPreset";
import {
    WCB_COUNTDOWN_PANEL_STYLE_DIMENSION,
    WCB_COUNTDOWN_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbCountdownPanel_StyleDimension";

import {
    WCB_COUNTDOWN_PANEL_DATE,
    WCB_COUNTDOWN_PANEL_DATE_DEMO,
} from "./WcbCountdownPanelDate";

import {
    WCB_COUNTDOWN_PANEL_STYLE_TITLE,
    WCB_COUNTDOWN_PANEL_STYLE_TITLE_DEMO,
} from "./WcbCountdownPanel_StyleTitle";

import {
    WCB_COUNTDOWN_PANEL_STYLE_NUMBER,
    WCB_COUNTDOWN_PANEL_STYLE_NUMBER_DEMO,
} from "./WcbCountdownPanel_StyleNumber";

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
    general_layout: WCB_COUNTDOWN_PANEL_LAYOUT;
    general_preset: WCB_COUNTDOWN_PANEL_PRESET;
    general_date: WCB_COUNTDOWN_PANEL_DATE;
    style_label: WCB_COUNTDOWN_PANEL_STYLE_TITLE;
    style_background: WCB_BUTTON_PANEL_STYLE_BACKGROUND;
    style_number: WCB_COUNTDOWN_PANEL_STYLE_NUMBER;
    style_border: WCB_BUTTON_PANEL_STYLE_BORDER;
    style_boxshadow: WCB_BUTTON_PANEL_STYLE_BOXSHADOW;
    style_dimension: WCB_COUNTDOWN_PANEL_STYLE_DIMENSION;
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

    // THE ATTRS OF BLOCK HERE
    daylabel: {
        type: "string",
        source: "html",
        selector: ".wcb-countdown__daylabel",
        default: "DAYS",
    },
    hrslabel: {
        type: "string",
        source: "html",
        selector: ".wcb-countdown__hrslabel",
        default: "HOURS",
    },
    minlabel: {
        type: "string",
        source: "html",
        selector: ".wcb-countdown__minlabel",
        default: "MINUTES",
    },
    seclabel: {
        type: "string",
        source: "html",
        selector: ".wcb-countdown__seclabel",
        default: "SECONDS",
    },
    //

    general_layout: {
        type: "object",
        default: WCB_COUNTDOWN_PANEL_LAYOUT_DEMO,
    },
    general_preset: {
        type: "object",
        default: WCB_COUNTDOWN_PANEL_PRESET_DEMO,
    },
    general_date: {
        type: "object",
        default: WCB_COUNTDOWN_PANEL_DATE_DEMO,
    },
    style_label: {
        type: "object",
        default: WCB_COUNTDOWN_PANEL_STYLE_TITLE_DEMO,
    },
    style_number: {
        type: "object",
        default: WCB_COUNTDOWN_PANEL_STYLE_NUMBER_DEMO,
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
        default: WCB_COUNTDOWN_PANEL_STYLE_DIMENSION_DEMO,
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

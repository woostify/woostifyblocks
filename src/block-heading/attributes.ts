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
	WCB_HEADING_PANEL_BACKGROUND,
	WCB_HEADING_PANEL_BACKGROUND_DEMO,
} from "./WcbHeadingPanelBackground";
import {
	WCB_HEADING_PANEL_CONTENT,
	WCB_HEADING_PANEL_CONTENT_DEMO,
} from "./WcbHeadingPanelContent";
import {
	WCB_HEADING_PANEL_DIMENSION,
	WCB_HEADING_PANEL_DIMENSION_DEMO,
} from "./WcbHeadingPanelDimension";
import {
	WCB_HEADING_PANEL_HEADING,
	WCB_HEADING_PANEL_HEADING_DEMO,
} from "./WcbHeadingPanelHeading";
import {
	WCB_HEADING_PANEL_HIGHLIGHT,
	WCB_HEADING_PANEL_HIGHLIGHT_DEMO,
} from "./WcbHeadingPanelHighlight";
import {
	WCB_HEADING_PANEL_LINK,
	WCB_HEADING_PANEL_LINK_DEMO,
} from "./WcbHeadingPanelLink";
import {
	WCB_HEADING_PANEL_SEPARATOR,
	WCB_HEADING_PANEL_SEPARATOR_DEMO,
} from "./WcbHeadingPanelSeparator";
import {
	WCB_HEADING_PANEL_SUB_HEADING,
	WCB_HEADING_PANEL_SUB_HEADING_DEMO,
} from "./WcbHeadingPanelSubHeading";
import {
	WCB_HEADING_PANEL_STYLE_BORDER,
	WCB_HEADING_PANEL_STYLE_BORDER_DEMO,
} from "./WcbHeadingPanel_StyleBorder";

export interface WcbBlockHeadingAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	heading: string;
	subHeading: string;
	general_content: WCB_HEADING_PANEL_CONTENT;
	//
	styles_heading: WCB_HEADING_PANEL_HEADING;
	styles_separator: WCB_HEADING_PANEL_SEPARATOR;
	styles_subHeading: WCB_HEADING_PANEL_SUB_HEADING;
	styles_link: WCB_HEADING_PANEL_LINK;
	styles_highlight: WCB_HEADING_PANEL_HIGHLIGHT;
	styles_background: WCB_HEADING_PANEL_BACKGROUND;
	styles_border: WCB_HEADING_PANEL_STYLE_BORDER;
	styles_dimensions: WCB_HEADING_PANEL_DIMENSION;
	//

	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbBlockHeadingAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	heading: {
		type: "string",
		source: "html",
		selector: ".wcb-heading__heading",
		default: "",
	},
	subHeading: {
		type: "string",
		source: "html",
		selector: ".wcb-heading__subHeading",
		default: "",
	},
	//
	general_content: {
		type: "object",
		default: WCB_HEADING_PANEL_CONTENT_DEMO,
	},
	//
	styles_heading: {
		type: "object",
		default: WCB_HEADING_PANEL_HEADING_DEMO,
	},
	styles_separator: {
		type: "object",
		default: WCB_HEADING_PANEL_SEPARATOR_DEMO,
	},
	styles_subHeading: {
		type: "object",
		default: WCB_HEADING_PANEL_SUB_HEADING_DEMO,
	},
	styles_link: {
		type: "object",
		default: WCB_HEADING_PANEL_LINK_DEMO,
	},
	styles_highlight: {
		type: "object",
		default: WCB_HEADING_PANEL_HIGHLIGHT_DEMO,
	},
	styles_background: {
		type: "object",
		default: WCB_HEADING_PANEL_BACKGROUND_DEMO,
	},
	styles_border: {
		type: "object",
		default: WCB_HEADING_PANEL_STYLE_BORDER_DEMO,
	},
	styles_dimensions: {
		type: "object",
		default: WCB_HEADING_PANEL_DIMENSION_DEMO,
	},
	//
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

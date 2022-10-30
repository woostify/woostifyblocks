import { AttrsGenericType } from "../block-container/attributes";
import {
	BackgroundControlData,
	STYLES_BG_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";

import {
	MyDimensionsControlData,
	MY_DIMENSIONS_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import {
	MyLinkColorControlData,
	MY_LINK_COLOR_CONTROL_DEMO,
} from "../components/controls/MyLinkColorControl/MyLinkColorControl";

import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { TextAlignment } from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import {
	TextColorControlData,
	TEXT_COLOR_CONTROL_DEMO,
} from "../components/controls/MyTextColorControl/MyTextColorControl";
import {
	MyTextShadowControlData,
	MY_TEXT_SHADOW_CONTROL_DEMO,
} from "../components/controls/MyTextShadowControl/MyTextShadowControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";

export interface WcbBlokcHeadingAttrs {
	uniqueId: string;
	content: string;
	general_content: {
		textAlignment: HasResponsive<TextAlignment>;
	};
	//
	styles_typography: MyTypographyControlData;
	styles_textColor: TextColorControlData;
	styles_typography_subHeading: MyTypographyControlData;
	styles_textColor_subHeading: TextColorControlData;
	styles_textShadow: MyTextShadowControlData;
	styles_separatorBorder: MyBorderControlData;
	styles_linkColor: MyLinkColorControlData;
	// styles_color: string;
	// styles_background: BackgroundControlData;
	// styles_dimensions: MyDimensionsControlData;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
}

const blokc1Attrs: AttrsGenericType<WcbBlokcHeadingAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	content: {
		type: "string",
		source: "text",
		selector: "div",
		default: "Clik to edit heading here!",
	},
	general_content: {
		type: "object",
		default: {
			textAlignment: {
				Desktop: "left",
			},
		},
	},
	styles_typography: {
		type: "object",
		default: TYPOGRAPHY_CONTROL_DEMO,
	},
	styles_textColor: {
		type: "object",
		default: TEXT_COLOR_CONTROL_DEMO,
	},
	styles_typography_subHeading: {
		type: "object",
		default: TYPOGRAPHY_CONTROL_DEMO,
	},
	styles_textColor_subHeading: {
		type: "object",
		default: TEXT_COLOR_CONTROL_DEMO,
	},
	styles_textShadow: {
		type: "object",
		default: MY_TEXT_SHADOW_CONTROL_DEMO,
	},
	styles_separatorBorder: {
		type: "object",
		default: MY_BORDER_CONTROL_DEMO,
	},
	styles_linkColor: {
		type: "object",
		default: MY_LINK_COLOR_CONTROL_DEMO,
	},
	// styles_color: {
	// 	type: "string",
	// 	default: "#000",
	// },
	// styles_background: {
	// 	type: "object",
	// 	default: STYLES_BG_DEMO,
	// },

	// styles_dimensions: {
	// 	type: "object",
	// 	default: MY_DIMENSIONS_CONTROL_DEMO,
	// },
	//
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

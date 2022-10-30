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
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { TextAlignment } from "../components/controls/MyTextAlignControl/MyTextAlignControl";
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
	general_typography: MyTypographyControlData;
	general_content: {
		textAlignment: HasResponsive<TextAlignment>;
	};
	//
	// styles_color: string;
	// styles_background: BackgroundControlData;
	// styles_border: MyBorderControlData;
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
	general_typography: {
		type: "object",
		default: TYPOGRAPHY_CONTROL_DEMO,
	},
	// styles_color: {
	// 	type: "string",
	// 	default: "#000",
	// },
	// styles_background: {
	// 	type: "object",
	// 	default: STYLES_BG_DEMO,
	// },
	// styles_border: {
	// 	type: "object",
	// 	default: MY_BORDER_CONTROL_DEMO,
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

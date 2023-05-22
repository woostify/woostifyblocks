import {
	BackgroundControlData,
	STYLES_BG_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import { MyBoxShadowControlData } from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import { MY_BOX_SHADOW_CONTROL_DEMO } from "../components/controls/MyBoxShadowControl/types";
import {
	CONTAINER_CONTROL_DEMO,
	MyContainerControlData,
} from "./MyContainerControl";
import {
	MyDimensionsControlData,
	MY_DIMENSIONS_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import {
	FLEX_PROPERTIES_CONTROL_DEMO,
	MyFlexPropertiesControlData,
} from "../components/controls/MyFlexPropertiesControl/types";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";

import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";

export interface WcbAttrsCommonFromWp {
	className?: string;
	anchor?: string;
	align?: "" | "wide" | "full";
}

export interface BlockWCBContainerAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	containerClassName: string;
	isShowVariations: boolean;
	general_container: MyContainerControlData;
	general_flexProperties: MyFlexPropertiesControlData;
	styles_color: string;
	styles_background: BackgroundControlData;
	styles_border: MyBorderControlData;
	styles_boxShadow: MyBoxShadowControlData;
	styles_dimensions: MyDimensionsControlData;
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect: MyMotionEffectData;
}

export type AttrsGenericType<T> = {
	[k in keyof T]: {
		type: string;
		default?: T[k];
		source?: string;
		selector?: string;
		attribute?: string;
		__experimentalRole?: string;
	};
};

export const blokcContainerAttrs: AttrsGenericType<BlockWCBContainerAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	containerClassName: {
		type: "string",
		default: "",
	},
	isShowVariations: {
		type: "bool",
		default: true,
	},

	general_container: {
		type: "object",
		default: CONTAINER_CONTROL_DEMO,
	},
	general_flexProperties: {
		type: "object",
		default: {
			...FLEX_PROPERTIES_CONTROL_DEMO,
			alignItems: { Desktop: "stretch" },
			justifyContent: { Desktop: "start" },
			flexWrap: { Desktop: "wrap" },
		},
	},
	styles_color: {
		type: "string",
		default: "#000",
	},
	styles_background: {
		type: "object",
		default: STYLES_BG_DEMO,
	},
	styles_border: {
		type: "object",
		default: MY_BORDER_CONTROL_DEMO,
	},
	styles_boxShadow: {
		type: "object",
		default: MY_BOX_SHADOW_CONTROL_DEMO,
	},
	styles_dimensions: {
		type: "object",
		default: {
			...MY_DIMENSIONS_CONTROL_DEMO,
			colunmGap: { Desktop: "" },
			rowGap: { Desktop: "" },
			margin: {
				Desktop: {
					bottom: "",
					left: "",
					right: "",
					top: "",
				},
			},
			padding: {
				Desktop: {
					bottom: "",
					left: "",
					right: "",
					top: "",
				},
			},
		},
	},
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

export default blokcContainerAttrs;

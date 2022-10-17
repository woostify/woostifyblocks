import {
	BackgroundControlData,
	STYLES_BG_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import { MyBoxShadowControlData } from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import { MY_BOX_SHADOW_CONTROL_DEMO } from "../components/controls/MyBoxShadowControl/types";
import {
	CONTAINER_CONTROL_DEMO,
	MyContainerControlData,
} from "../components/controls/MyContainerControl/MyContainerControl";
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
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";

export interface Blokc1Attrs {
	uniqueId: string;
	message: string;
	general_container: MyContainerControlData;
	general_flexProperties: MyFlexPropertiesControlData;
	general_typography: MyTypographyControlData;
	styles_color: string;
	styles_background: BackgroundControlData;
	styles_border: MyBorderControlData;
	styles_boxShadow: MyBoxShadowControlData;
	styles_dimensions: MyDimensionsControlData;
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
}

type AttrsGenericType<T> = {
	[k in keyof T]: {
		type: string;
		default?: T[k];
		source?: string;
		selector?: string;
	};
};

const blokc1Attrs: AttrsGenericType<Blokc1Attrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	message: {
		type: "string",
		source: "text",
		selector: "div",
		default: "Clik to edit heading here!",
	},
	general_container: {
		type: "object",
		default: CONTAINER_CONTROL_DEMO,
	},
	general_flexProperties: {
		type: "object",
		default: FLEX_PROPERTIES_CONTROL_DEMO,
	},
	general_typography: {
		type: "object",
		default: TYPOGRAPHY_CONTROL_DEMO,
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
		default: MY_DIMENSIONS_CONTROL_DEMO,
	},
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

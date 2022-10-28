import { AttrsGenericType } from "../block-container/attributes";
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
import {
	ContainerBox_Container_Control,
	CONTAINER_BOX_CONTAINER_CONTROL_DEMO,
} from "./ContainerControl";

export interface BlockWCBContainerBoxAttrs {
	uniqueId: string;
	general_container: ContainerBox_Container_Control;
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

export const blokcContainerBoxAttrs: AttrsGenericType<BlockWCBContainerBoxAttrs> =
	{
		uniqueId: {
			type: "string",
			default: "",
		},
		general_container: {
			type: "object",
			default: CONTAINER_BOX_CONTAINER_CONTROL_DEMO,
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

export default blokcContainerBoxAttrs;

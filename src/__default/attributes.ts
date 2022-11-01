import { AttrsGenericType } from "../block-container/attributes";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
export interface WcbBlockHeadingAttrs {
	uniqueId: string;
	heading: string;
	//

	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
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
		default: "Clik to edit HEADING",
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
};

export default blokc1Attrs;

import { AttrsGenericType } from "../block-container/attributes";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import { DEFAULT_PRODUCT_LIST_LAYOUT } from "./base-utils";
import {
	WCB_PRODUCTS_PANEL_SORTINGANDFILTERING,
	WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
} from "./WcbProductPanelSortingAndFiltering";
export interface WcbAttrs {
	uniqueId: string;
	layoutConfig: string[][];
	//
	general_sortingAndFiltering: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	layoutConfig: {
		type: "array",
		default: DEFAULT_PRODUCT_LIST_LAYOUT,
	},

	// THE ATTRS OF BLOCK HERE
	general_sortingAndFiltering: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
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
};

export default blokc1Attrs;

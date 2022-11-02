import { AttrsGenericType } from "../block-container/attributes";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import {
	WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING,
	WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
} from "./WcbPostsGridPanelSortingAndFiltering";
export interface WcbBlockPostsGridAttrs {
	uniqueId: string;
	//
	general_sortingAndFiltering: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
}

const blokc1Attrs: AttrsGenericType<WcbBlockPostsGridAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF BLOCK HERE
	general_sortingAndFiltering: {
		type: "object",
		default: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
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

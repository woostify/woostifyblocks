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
	WCB_POST_GRID_PANEL_POST_CONTENT,
	WCB_POST_GRID_PANEL_POST_CONTENT_DEMO,
} from "./WcbPostGridPanelPostContent";
import {
	WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE,
	WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
} from "./WcbPostGridPanelPostFeaturedImage";
import {
	WCB_POST_GRID_PANEL_POST_META,
	WCB_POST_GRID_PANEL_POST_META_DEMO,
} from "./WcbPostGridPanelPostMeta";
import {
	WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING,
	WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
} from "./WcbPostsGridPanelSortingAndFiltering";
export interface WcbBlockPostsGridAttrs {
	uniqueId: string;
	//
	general_sortingAndFiltering: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING;
	general_postContent: WCB_POST_GRID_PANEL_POST_CONTENT;
	general_postMeta: WCB_POST_GRID_PANEL_POST_META;
	general_postFeaturedImage: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE;
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
	general_postContent: {
		type: "object",
		default: WCB_POST_GRID_PANEL_POST_CONTENT_DEMO,
	},
	general_postMeta: {
		type: "object",
		default: WCB_POST_GRID_PANEL_POST_META_DEMO,
	},
	general_postFeaturedImage: {
		type: "object",
		default: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
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

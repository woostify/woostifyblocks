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
} from "./WcbProducstPanelSortingAndFiltering";
import {
	WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN,
	WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
} from "./WcbProductsPanelButton";
import {
	WCB_PRODUCTS_PANEL_COTENT,
	WCB_PRODUCTS_PANEL_COTENT_DEMO,
} from "./WcbProductsPanelContent";
import {
	WCB_PRODUCTS_PANEL_FEATURED_IMAGE,
	WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
} from "./WcbProductsPanelFeaturedImage";
import {
	WCB_PRODUCTS_PANEL_PAGINATION,
	WCB_PRODUCTS_PANEL_PAGINATION_DEMO,
} from "./WcbProductsPanelPagination";
import {
	WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN,
	WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
} from "./WcbProductsPanel_StyleAddToCartBtn";
import {
	WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE,
	WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
} from "./WcbProductsPanel_StyleFeaturedImage";
import {
	WCB_PRODUCTS_PANEL_STYLE_LAYOUT,
	WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
} from "./WcbProductsPanel_StyleLayout";
import {
	WCB_PRODUCTS_PANEL_STYLE_PAGINATION,
	WCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO,
} from "./WcbProductsPanel_StylePagination";
import {
	WCB_PRODUCTS_PANEL_STYLE_TITLE,
	WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
} from "./WcbProductsPanel_StyleTitle";
export interface WcbAttrs {
	uniqueId: string;

	//
	general_sortingAndFiltering: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING;
	general_content: WCB_PRODUCTS_PANEL_COTENT;
	general_featuredImage: WCB_PRODUCTS_PANEL_FEATURED_IMAGE;
	general_addToCartBtn: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN;
	general_pagination: WCB_PRODUCTS_PANEL_PAGINATION;
	//
	style_title: WCB_PRODUCTS_PANEL_STYLE_TITLE;
	style_featuredImage: WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE;
	style_layout: WCB_PRODUCTS_PANEL_STYLE_LAYOUT;
	style_addToCardBtn: WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN;
	style_pagiantion: WCB_PRODUCTS_PANEL_STYLE_PAGINATION;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF BLOCK HERE
	general_sortingAndFiltering: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
	},
	general_content: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_COTENT_DEMO,
	},
	general_featuredImage: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
	},
	general_addToCartBtn: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
	},
	general_pagination: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_PAGINATION_DEMO,
	},
	//
	style_title: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
	},
	style_featuredImage: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
	},
	style_layout: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
	},
	style_addToCardBtn: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
	},
	style_pagiantion: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO,
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

import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MY_BORDER_CONTROL_DEMO,
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";
import {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
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
	WCB_PRODUCTS_PANEL_STYLE_CATEGORY,
	WCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO,
} from "./WcbProductsPanel_StyleCategory";
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
	WCB_PRODUCTS_PANEL_STYLE_PRICE,
	WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
} from "./WcbProductsPanel_StylePrice";
import {
	WCB_PRODUCTS_PANEL_STYLE_RATING,
	WCB_PRODUCTS_PANEL_STYLE_RATING_DEMO,
} from "./WcbProductsPanel_StyleRating";
import {
	WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE,
	WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
} from "./WcbProductsPanel_StyleSaleBadge";
import {
	WCB_PRODUCTS_PANEL_STYLE_TITLE,
	WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
} from "./WcbProductsPanel_StyleTitle";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;

	//
	general_sortingAndFiltering?: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING;
	general_content?: WCB_PRODUCTS_PANEL_COTENT;
	general_featuredImage?: WCB_PRODUCTS_PANEL_FEATURED_IMAGE;
	general_addToCartBtn?: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN;
	general_pagination?: WCB_PRODUCTS_PANEL_PAGINATION;
	//
	style_category?: WCB_PRODUCTS_PANEL_STYLE_CATEGORY;
	style_title?: WCB_PRODUCTS_PANEL_STYLE_TITLE;
	style_featuredImage?: WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE;
	style_layout?: WCB_PRODUCTS_PANEL_STYLE_LAYOUT;
	style_addToCardBtn?: WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN;
	style_pagination?: WCB_PRODUCTS_PANEL_STYLE_PAGINATION;
	style_saleBadge?: WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE;
	style_border?: MyBorderControlData;
	style_price?: WCB_PRODUCTS_PANEL_STYLE_PRICE;
	style_rating?: WCB_PRODUCTS_PANEL_STYLE_RATING;
	//
	advance_responsiveCondition?: MyResponsiveConditionControlData;
	advance_zIndex?: MyZIndexControlData;
	advance_motionEffect?: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF BLOCK HERE
	general_sortingAndFiltering: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
	},
	general_content: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_COTENT_DEMO,
	},
	general_featuredImage: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
	},
	general_addToCartBtn: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
	},
	general_pagination: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_PAGINATION_DEMO,
	},
	//
	style_title: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
	},
	style_category: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO,
	},
	style_featuredImage: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
	},
	style_layout: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
	},
	style_addToCardBtn: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
	},
	style_pagination: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO,
	},
	style_saleBadge: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
	},
	style_border: {
		type: "object",
		// default: MY_BORDER_CONTROL_DEMO,
	},
	style_price: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
	},
	style_rating: {
		type: "object",
		// default: WCB_PRODUCTS_PANEL_STYLE_RATING_DEMO,
	},

	// ADVANCE
	advance_responsiveCondition: {
		type: "object",
		// default: RESPONSIVE_CONDITON_DEMO,
	},
	advance_zIndex: {
		type: "object",
		// default: Z_INDEX_DEMO,
	},
	advance_motionEffect: {
		type: "object",
		// default: MY_MOTION_EFFECT_DEMO,
	},
};

export default blokc1Attrs;

import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";
import {
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import {
	MyResponsiveConditionControlData,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import {
	WCB_PRODUCTS_PANEL_SORTINGANDFILTERING,
} from "./WcbProducstPanelSortingAndFiltering";
import {
	WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN,
} from "./WcbProductsPanelButton";
import {
	WCB_PRODUCTS_PANEL_COTENT,
} from "./WcbProductsPanelContent";
import {
	WCB_PRODUCTS_PANEL_FEATURED_IMAGE,
} from "./WcbProductsPanelFeaturedImage";
import {
	WCB_PRODUCTS_PANEL_PAGINATION,
} from "./WcbProductsPanelPagination";
import {
	WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN,
} from "./WcbProductsPanel_StyleAddToCartBtn";
import {
	WCB_PRODUCTS_PANEL_STYLE_CATEGORY,
} from "./WcbProductsPanel_StyleCategory";
import {
	WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE,
} from "./WcbProductsPanel_StyleFeaturedImage";
import {
	WCB_PRODUCTS_PANEL_STYLE_LAYOUT,
} from "./WcbProductsPanel_StyleLayout";
import {
	WCB_PRODUCTS_PANEL_STYLE_PAGINATION,
} from "./WcbProductsPanel_StylePagination";
import {
	WCB_PRODUCTS_PANEL_STYLE_PRICE,
} from "./WcbProductsPanel_StylePrice";
import {
	WCB_PRODUCTS_PANEL_STYLE_RATING,
} from "./WcbProductsPanel_StyleRating";
import {
	WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE,
} from "./WcbProductsPanel_StyleSaleBadge";
import {
	WCB_PRODUCTS_PANEL_STYLE_TITLE,
} from "./WcbProductsPanel_StyleTitle";
import {
	WCB_PRODUCTS_PANEL_GENERAL_LAYOUT,
	WCB_PRODUCTS_PANEL_GENERAL_LAYOUT_DEMO
} from "./WcbProducstPanel_GeneralLayout";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;

	//
	general_sortingAndFiltering?: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING;
	general_layout?: WCB_PRODUCTS_PANEL_GENERAL_LAYOUT;
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
	general_layout: {
		type: "object",
		default: WCB_PRODUCTS_PANEL_GENERAL_LAYOUT_DEMO,
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

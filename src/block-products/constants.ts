/**
 * External dependencies
 */

import type { InnerBlockTemplate } from "@wordpress/blocks";
import { getAllWcSettings } from "./settings-init";
/**
 * Internal dependencies
 */
import { QueryBlockAttributes } from "./types";

// console.log(999, { allSettings: getAllWcSettings() });

//
export const PRODUCT_TITLE_ID = "WCB_PRODUCT_TITLE_ID";
export const PRODUCT_TEMPLATE_ID = "WCB_PRODUCT_TEMPLATE_ID";

// export function getSetting<T>(
// 	name: string,
// 	fallback: unknown = false,
// 	filter = (val: unknown, fb: unknown) =>
// 		typeof val !== "undefined" ? val : fb
// ) {
// 	console.log(1);
// 	const allSettings = getAllWcSettings();
// 	const value = name in allSettings ? allSettings[name] : fallback;
// 	return filter(value, fallback) as T;
// }

/**
 * Returns an object without a key.
 */
function objectOmit<T, K extends keyof T>(obj: T, key: K) {
	const { [key]: omit, ...rest } = obj;

	return rest;
}

export const QUERY_LOOP_ID = "core/query";

export const DEFAULT_CORE_ALLOWED_CONTROLS = ["taxQuery", "search"];

export const ALL_PRODUCT_QUERY_CONTROLS = [
	"attributes",
	"presets",
	"onSale",
	"stockStatus",
	"wooInherit",
];

export const DEFAULT_ALLOWED_CONTROLS = [
	...DEFAULT_CORE_ALLOWED_CONTROLS,
	...ALL_PRODUCT_QUERY_CONTROLS,
];
export const get_STOCK_STATUS_OPTIONS = () =>
	window.wcSettings?.stockStatusOptions || {};

export const get_GLOBAL_HIDE_OUT_OF_STOCK = () =>
	!!window.wcSettings?.hideOutOfStockItems;

export const QUERY_DEFAULT_ATTRIBUTES: QueryBlockAttributes = {
	allowedControls: DEFAULT_ALLOWED_CONTROLS,
	displayLayout: {
		type: "flex",
		columns: 3,
	},
	query: {
		perPage: 9,
		pages: 0,
		offset: 0,
		postType: "product",
		order: "asc",
		orderBy: "title",
		author: "",
		search: "",
		exclude: [],
		sticky: "",
		inherit: false,
		__woocommerceAttributes: [],
		__woocommerceStockStatus: get_GLOBAL_HIDE_OUT_OF_STOCK()
			? Object.keys(objectOmit(get_STOCK_STATUS_OPTIONS(), "outofstock"))
			: Object.keys(get_STOCK_STATUS_OPTIONS()),
	},
};

export const INNER_BLOCKS_TEMPLATE: InnerBlockTemplate[] = [
	[
		"core/post-template",
		{ __woocommerceNamespace: PRODUCT_TEMPLATE_ID },
		[
			["woocommerce/product-image"],
			[
				"core/post-title",
				{
					textAlign: "center",
					level: 3,
					fontSize: "medium",
					__woocommerceNamespace: PRODUCT_TITLE_ID,
				},
				[],
			],
			[
				"woocommerce/product-price",
				{ textAlign: "center", fontSize: "small" },
				[],
			],
			[
				"woocommerce/product-button",
				{ textAlign: "center", fontSize: "small" },
				[],
			],
		],
	],
	[
		"core/query-pagination",
		{
			layout: {
				type: "flex",
				justifyContent: "center",
			},
		},
		[],
	],
	["core/query-no-results"],
];

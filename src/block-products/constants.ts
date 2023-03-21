/**
 * External dependencies
 */

import type { InnerBlockTemplate } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
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

export const WC_BLOCKS_IMAGE_URL =
	// @ts-ignore
	window.wcSettings?.wcBlocksConfig?.pluginUrl + "images/";
export const ADMIN_URL = window.wcSettings?.adminUrl as string;

export const previewProducts = [
	{
		id: 1,
		name: "WordPress Pennant",
		variation: "",
		permalink: "https://example.org",
		sku: "wp-pennant",
		short_description:
			"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
		description:
			"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
		price: "7.99",
		price_html:
			'<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>7.99</span>',
		images: [
			{
				id: 1,
				src: WC_BLOCKS_IMAGE_URL + "previews/pennant.jpg",
				thumbnail: WC_BLOCKS_IMAGE_URL + "previews/pennant.jpg",
				name: "pennant-1.jpg",
				alt: "WordPress Pennant",
				srcset: "",
				sizes: "",
			},
		],
		average_rating: 5,
		categories: [
			{
				id: 1,
				name: "Decor",
				slug: "decor",
				link: "https://example.org",
			},
		],
		review_count: 1,
		prices: {
			currency_code: "GBP",
			decimal_separator: ".",
			thousand_separator: ",",
			decimals: 2,
			price_prefix: "£",
			price_suffix: "",
			price: "7.99",
			regular_price: "9.99",
			sale_price: "7.99",
			price_range: null,
		},
		add_to_cart: {
			text: __("Add to cart", "woocommerce"),
			description: __("Add to cart", "woocommerce"),
		},
		has_options: false,
		is_purchasable: true,
		is_in_stock: true,
		on_sale: true,
	},
];

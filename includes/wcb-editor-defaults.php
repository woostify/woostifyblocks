<?php

if (!function_exists('wcb_get_theme_defaults_data')) {
	/**
	 * Build theme defaults for both editor and frontend.
	 */
	function wcb_get_theme_defaults_data() {
		$woostify = get_option('woostify_setting') ?: [];
		$woostify_pro = get_option('woostify_pro_options') ?: [];

		$add_to_cart_position = $woostify['shop_page_add_to_cart_button_position'] ?? null;
		if ($add_to_cart_position === 'image') {
			$add_to_cart_position = 'inside image';
		}

		// Wishlist defaults (Woostify supports multiple plugins).
		$wishlist_support_plugin = $woostify['shop_page_wishlist_support_plugin'] ?? null;
		if (!$wishlist_support_plugin) {
			if (defined('TINVWL_FVERSION') || class_exists('TInvWL_Public_Add_To_Wishlist') || class_exists('TInvWL_Plugin')) {
				$wishlist_support_plugin = 'ti';
			} elseif (defined('YITH_WCWL') || class_exists('YITH_WCWL')) {
				$wishlist_support_plugin = 'yith';
			} else {
				$wishlist_support_plugin = 'yith';
			}
		}

		// Quick view defaults (Woostify Pro).
		$quick_view_enabled = get_option('woostify_wc_quick_view') === 'activated' || defined('WOOSTIFY_PRO_QUICK_VIEW');
		$quick_view_position = $woostify_pro['shop_page_quick_view_position'] ?? 'top-right';
		$quick_view_radius = (int)($woostify_pro['shop_product_quick_view_radius'] ?? 0);

		return [
			'product_per_row' => [
				'desktop' => (int)($woostify['products_per_row'] ?? 3),
				'tablet'  => (int)($woostify['tablet_products_per_row'] ?? 2),
				'mobile'  => (int)($woostify['mobile_products_per_row'] ?? 2),
			],
			'product_per_page' => (int)($woostify['products_per_page'] ?? 10),
			'shop_archive_border' => [
				'style' => ($woostify['shop_page_product_card_border_style'] ?? 'none'),
				'width' => (int)($woostify['shop_page_product_card_border_width'] ?? 0),
				'color' => ($woostify['shop_page_product_card_border_color'] ?? '#000'),
			],
			'shop_archive_product_content' => [
				'title_flag'    => (bool)($woostify['shop_page_product_title'] ?? true),
				'category_flag' => $woostify['shop_page_product_category'] ?? '1',
				'rating_flag'   => $woostify['shop_page_product_rating'] ?? '1',
				'price_flag'    => $woostify['shop_page_product_price'] ?? '1',
				'quantity_flag' => $woostify['shop_page_product_quantity'] ?? '1',
				'equal_flag' => $woostify['shop_page_product_content_equal'] ?? '1',
				'align'    => $woostify['shop_page_product_alignment'] ?? 'center',
				'min_height'  => (int)($woostify['shop_page_product_content_min_height'] ?? 0),
			],
			'shop_archive_product_image' => [
				'style' => $woostify['shop_page_product_image_border_style'] ?? 'none',
				'width' => (int)($woostify['shop_page_product_image_border_width'] ?? 0),
				'color' => $woostify['shop_page_product_image_border_color'] ?? '#000',
				'hover' => $woostify['shop_page_product_image_hover'] ?? 'none',
			],
			'shop_archive_sale_tag' => [
				'bg_color'   => $woostify['shop_page_sale_bg_color'] ?? '#0c4a6e',
				'text_color' => $woostify['shop_page_sale_color'] ?? '#f0f9ff',
				'position'   => $woostify['shop_page_sale_tag_position'] ?? 'top-left',
			],
			'shop_archive_out_of_stock' => [
				'bg_color'   => $woostify['shop_page_out_of_stock_bg_color'] ?? '#0c4a6e',
				'text_color' => $woostify['shop_page_out_of_stock_color'] ?? '#f0f9ff',
				'position'   => $woostify['shop_page_out_of_stock_position'] ?? 'left',
			],
			'shop_archive_general_design' => [
				'title_color'       => $woostify['shop_page_product_title_color'] ?? '#000',
				'title_font_size'   => [
					'desktop' => (int)($woostify['shop_page_product_title_font_size'] ?? 14),
					'tablet'  => (int)($woostify['shop_page_product_title_tablet_font_size'] ?? 14),
					'mobile'  => (int)($woostify['shop_page_product_title_mobile_font_size'] ?? 14),
				],
				'price_color'      => $woostify['shop_page_product_price_color'] ?? '#000',
				'price_font_size' => [
					'desktop' => (int)($woostify['shop_page_product_price_font_size'] ?? 18),
					'tablet'  => (int)($woostify['shop_page_product_price_tablet_font_size'] ?? 14),
					'mobile'  => (int)($woostify['shop_page_product_price_mobile_font_size'] ?? 14),
				],
			],
			'shop_archive_add_to_cart_btn' => [
				'text_color' => $woostify['shop_page_button_cart_color'] ?? '#fff',
				'bg_color'   => $woostify['shop_page_button_cart_background'] ?? '#0c4a6e',
				'hover_text_color' => $woostify['shop_page_button_color_hover'] ?? '#fff',
				'hover_bg_color'   => $woostify['shop_page_button_background_hover'] ?? '#094771',
				'border_radius'    => (int)($woostify['shop_page_button_border_radius'] ?? 0),
				'position'         => $add_to_cart_position ?? 'none',
			],
			'shop_archive_wishlist_btn' => [
				'position' => $woostify['shop_page_wishlist_position'] ?? 'none',
				'style'    => $wishlist_support_plugin,
			],
			'shop_quick_view_btn' => [
				'enabled'          => $quick_view_enabled,
				'position'         => $quick_view_position,
				'show_icon'        => (bool)($woostify_pro['shop_product_quick_view_icon'] ?? true),
				'bg_color'         => $woostify_pro['shop_product_quick_view_background'] ?? '',
				'text_color'       => $woostify_pro['shop_product_quick_view_color'] ?? '',
				'hover_bg_color'   => $woostify_pro['shop_product_quick_view_bg_hover'] ?? '',
				'hover_text_color' => $woostify_pro['shop_product_quick_view_c_hover'] ?? '',
				'border_radius'    => $quick_view_radius,
			],
		];
	}
}

add_action('enqueue_block_editor_assets', function () {
	$data = wcb_get_theme_defaults_data();
	error_log('[shop_page_wishlist_position]' . print_r($data['shop_archive_wishlist_btn']['position'] ?? null, true));
	error_log('[WCB_THEME_DEFAULTS]' . print_r($data, true));
	wp_add_inline_script('wp-blocks', 'window.WCB_THEME_DEFAULTS='.wp_json_encode($data).';', 'before');
});

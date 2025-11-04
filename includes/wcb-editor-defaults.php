<?php

add_action('enqueue_block_editor_assets', function () {
	$woostify = get_option('woostify_setting') ?: [];
	$data = [
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
			'position'         => $woostify['shop_page_add_to_cart_button_position'] === 'image' ? 'inside image' : $woostify['shop_page_add_to_cart_button_position'] ?? 'none',
		]
	];
	error_log('[WCB_THEME_DEFAULTS]' . print_r($data, true));
	wp_add_inline_script('wp-blocks', 'window.WCB_THEME_DEFAULTS='.wp_json_encode($data).';', 'before');
});

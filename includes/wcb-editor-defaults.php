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
	];
	wp_add_inline_script('wp-blocks', 'window.WCB_THEME_DEFAULTS='.wp_json_encode($data).';', 'before');
});

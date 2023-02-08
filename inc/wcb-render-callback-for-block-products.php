<?php


//============================================= block 1 ===============================================================
function wcb_block_products__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_products__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-products/FrontendStyles.js', ["wp-element", "jquery"], null, true);
    }

    $a = wcb_woo___get_product_filters_no_ajax();
    $display_count = 9;
    $page = get_query_var('paged') ? get_query_var('paged') : 1;
    $offset = ($page - 1) * $display_count;
    $args = array(
        'post_type'         => 'product',
        'post_status'       => 'publish',
        'posts_per_page'    => $display_count,
        'page'              => $page,
        'offset'            => $offset,
        'orderby'           => 'menu_order',
        'order'             => 'ASC'
    );

    ob_start();
    // echo $content;
?>

    <div class="product-list-contain">

        <?php
        $loop = new WP_Query($args);
        if ($loop->have_posts()) :

            // do_action('woocommerce_before_shop_loop');
            woocommerce_product_loop_start();
        ?>

            <ul>
                <?php
                while ($loop->have_posts()) :
                    global $product;

                    $loop->the_post();
                    $x = wc_get_template_part('content', 'product');
                    // echo '<pre>';
                    // var_dump($product);
                    // echo '</pre>';
                    echo  wcb_block_products__render_product($product);
                endwhile;
                ?>

            </ul>

            <?php
            woocommerce_product_loop_end(); ?>

            <?php
            do_action('woocommerce_after_shop_loop'); ?>

        <?php
        else :

            do_action('woocommerce_no_products_found');

        endif; ?>

        <?php
        wp_reset_postdata(); ?>

    </div>
<?php
    return ob_get_clean();
}

// 
function wcb_block_products__render_product($product)
{
    $data = (object) array(
        'permalink' => esc_url($product->get_permalink()),
        'image'     => wcb_block_products__get_image_html($product),
        'title'     => wcb_block_products__get_title_html($product),
        'rating'    => wcb_block_products__get_rating_html($product),
        'price'     => wcb_block_products__get_price_html($product),
        'badge'     => wcb_block_products__get_sale_badge_html($product),
        'button'    => wcb_block_products__get_button_html($product),
    );

    return apply_filters(
        'woocommerce_blocks_product_grid_item_html',
        "<li class=\"wc-block-grid__product\">
				<a href=\"{$data->permalink}\" class=\"wc-block-grid__product-link\">
					{$data->image}
					{$data->title}
				</a>
				{$data->badge}
				{$data->price}
				{$data->rating}
				{$data->button}
			</li>",
        $data,
        $product
    );
}



//  
function wcb_block_products__get_image_html($product)
{

    $attr = array(
        'alt' => '',
    );

    if ($product->get_image_id()) {
        $image_alt = get_post_meta($product->get_image_id(), '_wp_attachment_image_alt', true);
        $attr      = array(
            'alt' => ($image_alt ? $image_alt : $product->get_name()),
        );
    }

    return '<div class="wc-block-grid__product-image">' . $product->get_image('woocommerce_thumbnail', $attr) . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}


function wcb_block_products__get_title_html($product)
{

    return '<div class="wc-block-grid__product-title">' . wp_kses_post($product->get_title()) . '</div>';
}


function wcb_block_products__get_rating_html($product)
{

    $rating_count = $product->get_rating_count();
    $review_count = $product->get_review_count();
    $average      = $product->get_average_rating();

    if ($rating_count > 0) {
        return sprintf(
            '<div class="wc-block-grid__product-rating">%s</div>',
            wc_get_rating_html($average, $rating_count) // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        );
    }
    return '';
}


function wcb_block_products__get_price_html($product)
{

    return sprintf(
        '<div class="wc-block-grid__product-price price">%s</div>',
        wp_kses_post($product->get_price_html())
    );
}


function wcb_block_products__get_sale_badge_html($product)
{
    // if (empty($this->attributes['contentVisibility']['price'])) {
    //     return '';
    // }

    if (!$product->is_on_sale()) {
        return;
    }

    return '<div class="wc-block-grid__product-onsale">
			<span aria-hidden="true">' . esc_html__('Sale', 'woocommerce') . '</span>
			<span class="screen-reader-text">' . esc_html__('Product on sale', 'woocommerce') . '</span>
		</div>';
}


function wcb_block_products__get_button_html($product)
{
    // if (empty($this->attributes['contentVisibility']['button'])) {
    //     return '';
    // }
    return '<div class="wp-block-button wc-block-grid__product-add-to-cart">' . wcb_block_products__get_add_to_cart($product) . '</div>';
}


function wcb_block_products__get_add_to_cart($product)
{
    $attributes = array(
        'aria-label'       => $product->add_to_cart_description(),
        'data-quantity'    => '1',
        'data-product_id'  => $product->get_id(),
        'data-product_sku' => $product->get_sku(),
        'rel'              => 'nofollow',
        'class'            => 'wp-block-button__link ' . (function_exists('wc_wp_theme_get_element_class_name') ? wc_wp_theme_get_element_class_name('button') : '') . ' add_to_cart_button',
    );

    if (
        $product->supports('ajax_add_to_cart') &&
        $product->is_purchasable() &&
        ($product->is_in_stock() || $product->backorders_allowed())
    ) {
        $attributes['class'] .= ' ajax_add_to_cart';
    }

    return sprintf(
        '<a href="%s" %s>%s</a>',
        esc_url($product->add_to_cart_url()),
        wc_implode_html_attributes($attributes),
        esc_html($product->add_to_cart_text())
    );
}

<?php

//============================================= block 1 ===============================================================
function wcb_block_products__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_products__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-products/FrontendStyles.js', ["wp-element", "jquery"], null, true);
    }

    $sortingAndFiltering = $attributes['general_sortingAndFiltering'] ?? [];
    $sortingAndFiltering = parse_filterAttributes($sortingAndFiltering);

    $display_count = $sortingAndFiltering["numberOfItems"] ?? 9;
    $page = get_query_var('paged') ? get_query_var('paged') : 1;
    $offset = ($page - 1) * $display_count;

    // 
    $content    = $content;
    $args = parse_query_args($sortingAndFiltering);

    ob_start();
    $loop = new WP_Query($args);

    // echo $content;

    // echo '<pre>';
    // var_export($args);
    // echo '</pre>';
    if (!$loop->have_posts()) {
        return '';
    }
?>

    <div class="wcb-products__content">

        <?php
        if ($loop->have_posts()) :

            // do_action('woocommerce_before_shop_loop');
            // woocommerce_product_loop_start();
        ?>
            <div class="wcb-products__list">
                <?php
                while ($loop->have_posts()) :
                    $loop->the_post();
                    global $product;
                    if (!empty($product)) {
                        echo wcb_block_products__render_product($product);
                    }
                endwhile;
                ?>
            </div>

            <?php
            // woocommerce_product_loop_end();
            // do_action('woocommerce_after_shop_loop');
            ?>
        <?php
        else :
            do_action('woocommerce_no_products_found');
        endif; ?>
        <?php wp_reset_postdata(); ?>
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
        "<div class=\"wcb-products__product wc-block-grid__product\">
				<a href=\"{$data->permalink}\" class=\"wcb-products__product wc-block-grid__product-link\">
					{$data->image}
					{$data->title}
				</a>
				{$data->badge}
				{$data->price}
				{$data->rating}
				{$data->button}
			</div>",
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

    return '<div class="wcb-products__product-image wc-block-grid__product-image">' . $product->get_image('woocommerce_thumbnail', $attr) . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}


function wcb_block_products__get_title_html($product)
{

    return '<div class="wcb-products__product-title wc-block-grid__product-title">' . wp_kses_post($product->get_title()) . '</div>';
}


function wcb_block_products__get_rating_html($product)
{

    $rating_count = $product->get_rating_count();
    $review_count = $product->get_review_count();
    $average      = $product->get_average_rating();

    if ($rating_count > 0) {
        return sprintf(
            '<div class="wcb-products__product-rating wc-block-grid__product-rating">%s</div>',
            wc_get_rating_html($average, $rating_count) // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        );
    }
    return '';
}


function wcb_block_products__get_price_html($product)
{

    return sprintf(
        '<div class="wcb-products__product-price wc-block-grid__product-price price">%s</div>',
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

    return '<div class="wcb-products__product-onsale wc-block-grid__product-onsale">
			<span aria-hidden="true">' . esc_html__('Sale', 'woocommerce') . '</span>
			<span class="screen-reader-text">' . esc_html__('Product on sale', 'woocommerce') . '</span>
		</div>';
}


function wcb_block_products__get_button_html($product)
{
    // if (empty($this->attributes['contentVisibility']['button'])) {
    //     return '';
    // }
    return '<div class="wcb-products__product-add-to-cart wp-block-button wc-block-grid__product-add-to-cart">' . wcb_block_products__get_add_to_cart($product) . '</div>';
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



// ===============================


function parse_filterAttributes($filterAttrs)
{
    // These should match what's set in JS `registerBlockType`.
    $defaults = array(
        'columns'           => wc_get_theme_support('product_blocks::default_columns', 3),
        'rows'              => wc_get_theme_support('product_blocks::default_rows', 3),
        'alignButtons'      => false,
        'categories'        => array(),
        'catOperator'       => 'any',
        'contentVisibility' => array(
            'image'  => true,
            'title'  => true,
            'price'  => true,
            'rating' => true,
            'button' => true,
        ),
        'stockStatus'       => array_keys(wc_get_product_stock_status_options()),
    );

    return wp_parse_args($filterAttrs, $defaults);
}




function parse_query_args($filtersAttrs)
{
    // Store the original meta query.
    $meta_query = WC()->query->get_meta_query();

    $query_args = array(
        'post_type'           => 'product',
        'post_status'         => 'publish',
        'fields'              => 'ids',
        'ignore_sticky_posts' => true,
        'no_found_rows'       => false,
        'orderby'             => '',
        'order'               => '',
        'meta_query'          => $meta_query, // phpcs:ignore WordPress.DB.SlowDBQuery
        'tax_query'           => array(), // phpcs:ignore WordPress.DB.SlowDBQuery
        'posts_per_page'      => $filtersAttrs['numberOfItems'] ?? 1,
        's'                 => $filtersAttrs['keyword'] ?? '',
    );

    set_block_query_args($query_args, $filtersAttrs);
    set_ordering_query_args($query_args, $filtersAttrs);
    set_categories_query_args($query_args, $filtersAttrs);
    set_tags_query_args($query_args, $filtersAttrs);
    set_attributes_query_args($query_args, $filtersAttrs);
    set_visibility_query_args($query_args, $filtersAttrs);
    set_stock_status_query_args($query_args, $filtersAttrs, $meta_query);
    return $query_args;
}




function set_ordering_query_args(&$query_args, $attributes)
{

    $query_args['orderby'] = $attributes['orderby'] ?? "date";
    $query_args['order'] = $attributes['order'] ?? "DESC";

    $query_args = array_merge(
        $query_args,
        WC()->query->get_catalog_ordering_args($query_args['orderby'], $query_args['order'])
    );
}

function set_block_query_args(&$query_args, $filtersAttrs)
{
    if ($filtersAttrs['isOnSale'] === true || $filtersAttrs['isOnSale'] === "true") {
        $query_args['post__in'] = array_merge(array(0), wc_get_product_ids_on_sale());
    }
}


function set_categories_query_args(&$query_args, $attributes)
{
    if (!empty($attributes['categories'])) {
        $categories = array_map('absint', $attributes['categories']);

        $query_args['tax_query'][] = array(
            'taxonomy'         => 'product_cat',
            'terms'            => $categories,
            'field'            => 'term_id',
            'operator'         => 'all' === $attributes['catOperator'] ? 'AND' : 'IN',

            /*
				 * When cat_operator is AND, the children categories should be excluded,
				 * as only products belonging to all the children categories would be selected.
				 */
            'include_children' => 'all' === $attributes['catOperator'] ? false : true,
        );
    }
}

function set_tags_query_args(&$query_args, $attributes)
{
    if (!empty($attributes['tags'])) {
        $query_args['tax_query'][] = array(
            'taxonomy' => 'product_tag',
            'terms'    => array_map('absint', $attributes['tags']),
            'field'    => 'term_id',
            'operator' => isset($attributes['tagOperator']) && 'any' === $attributes['tagOperator'] ? 'IN' : 'AND',
        );
    }
}

function set_attributes_query_args(&$query_args, $attributes)
{
    if (!empty($attributes['attributes'])) {
        $taxonomy = sanitize_title($attributes['attributes'][0]['attr_slug']);
        $terms    = wp_list_pluck($attributes['attributes'], 'id');

        $query_args['tax_query'][] = array(
            'taxonomy' => $taxonomy,
            'terms'    => array_map('absint', $terms),
            'field'    => 'term_id',
            'operator' => 'all' === $attributes['attrOperator'] ? 'AND' : 'IN',
        );
    }
}


function set_visibility_query_args(&$query_args, $attributes)
{
    $product_visibility_terms  = wc_get_product_visibility_term_ids();
    $product_visibility_not_in = array($product_visibility_terms['exclude-from-catalog']);

    if ('yes' === get_option('woocommerce_hide_out_of_stock_items')) {
        $product_visibility_not_in[] = $product_visibility_terms['outofstock'];
    }

    $query_args['tax_query'][] = array(
        'taxonomy' => 'product_visibility',
        'field'    => 'term_taxonomy_id',
        'terms'    => $product_visibility_not_in,
        'operator' => 'NOT IN',
    );
}

function set_stock_status_query_args(&$query_args, $attributes, $meta_query)
{
    $stock_statuses = array_keys(wc_get_product_stock_status_options());

    // phpcs:disable WordPress.DB.SlowDBQuery.slow_db_query_meta_query
    if (!empty($attributes['stockStatus']) && $stock_statuses !== $attributes['stockStatus']) {
        // Reset meta_query then update with our stock status.
        $query_args['meta_query']   = $meta_query;
        $query_args['meta_query'][] = array(
            'key'     => '_stock_status',
            'value'   => array_merge([''], $attributes['stockStatus']),
            'compare' => 'IN',
        );
    } else {
        $query_args['meta_query'] = $meta_query;
    }
    // phpcs:enable WordPress.DB.SlowDBQuery.slow_db_query_meta_query
}

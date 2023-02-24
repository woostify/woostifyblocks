<?php

function wcb_block_products__renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_products__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-products/FrontendStyles.js', ["wp-element", "jquery"], null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();


    $sortingAndFilteringAttrs = $attributes['general_sortingAndFiltering'] ?? [];
    $uniqueId =  $attributes['uniqueId'] ?? "";

    $queryArgs = wcb_block_products_parse_filterAttributes($sortingAndFilteringAttrs);
    // 
    $args = wcb_block_products_parse_query_args($queryArgs);

    ob_start();
    $loop = new WP_Query($args);


    if (!$loop->have_posts()) {
        return '';
    }



?>

    <?php echo $content; ?>
    <div class="wcb-products__wrap <?php echo esc_attr($uniqueId); ?> " data-uniqueid="<?php echo esc_attr($uniqueId); ?>">

        <?php
        if ($loop->have_posts()) :

            // do_action('woocommerce_before_shop_loop');
            // woocommerce_product_loop_start();
        ?>
            <div class="scroll-snap-slider -multi wcb-products__list swithToScrollSnapX--<?php echo esc_attr($sortingAndFilteringAttrs['swithToScrollSnapX'] ?? ""); ?>">
                <?php
                while ($loop->have_posts()) :
                    $loop->the_post();

                    global $product;
                    if (!empty($product)) {
                        echo wcb_block_products__render_product($product, $attributes, $loop->current_post);
                    }
                endwhile;
                ?>


            </div>
            <div class="indicators -multi">
                <button type="button" class="arrow -prev -multi">
                    <svg fill="#707070" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <title>Previous slide</title>
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                </button>

                <button type="button" class="arrow -next -multi">
                    <svg fill="#707070" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <title>Next slide</title>
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                </button>
            </div>

            <?php
            // woocommerce_product_loop_end();
            // do_action('woocommerce_after_shop_loop');
            ?>
        <?php
        else :
            do_action('woocommerce_no_products_found');
        endif; ?>

        <?php if (wcb__is_enabled($attributes['general_pagination']['isShowPagination'] ?? "false")) : ?>
            <div class="wcb-products__pagination">
                <?php wcb_pagination_bar($loop, $attributes['general_pagination']); ?>
            </div>
        <?php endif; ?>

        <?php wp_reset_postdata(); ?>
    </div>
<?php
    return ob_get_clean();
}

// 
function wcb_block_products__render_product($product, $attributes, $index)
{

    $data = (object) array(
        'permalink' => esc_url($product->get_permalink()),
        'image'     => "",
        'title'     => "",
        'rating'    => "",
        'price'     => "",
        'badge'     => "",
        'button'    => "",
    );


    if (wcb__is_enabled($attributes['general_featuredImage']['isShowFeaturedImage'] ?? "")) {
        $data->image = wcb_block_products__get_image_html($product);
    }
    if (wcb__is_enabled($attributes['general_content']['isShowTitle'] ?? "")) {
        $data->title = wcb_block_products__get_title_html($product, $attributes['general_content']['titleHtmlTag'] ?? null, $data->permalink);
    }
    if (wcb__is_enabled($attributes['general_content']['isShowRating'] ?? "")) {
        $data->rating = wcb_block_products__get_rating_html($product);
    }
    if (wcb__is_enabled($attributes['general_content']['isShowSaleBadge'] ?? "")) {
        $data->badge = wcb_block_products__get_sale_badge_html($product, $attributes['general_content']['showSaleBadgeDiscoutPercent'] ?? false);
    }
    if (wcb__is_enabled($attributes['general_content']['isShowPrice'] ?? "")) {
        $data->price = wcb_block_products__get_price_html($product);
    }
    if (wcb__is_enabled($attributes['general_addToCartBtn']['isShowButton'] ?? "")) {
        $data->button = wcb_block_products__get_button_html($product);
    }

    $btnInsideImage = ($attributes['general_addToCartBtn']['position'] ?? "") === "inside image";
    $saleInsideImage = ($attributes['general_content']['saleBadgePosition'] ?? "") === "Inside image";
    $classes = "wcb-products__product ";

    if (!wcb__is_enabled($attributes['general_featuredImage']['isShowFeaturedImage'] ?? "")) {
        $btnInsideImage = false;
        $saleInsideImage = false;
    }

    // button
    $classes .= $btnInsideImage ? " wcb-products__product--btnInsideImage" : "";
    $btn1 = $btnInsideImage ? $data->button : "";
    $btn2 = $btnInsideImage ?   "" : $data->button;
    // sale badge
    $classes .= $saleInsideImage ? " wcb-products__product--onsaleInsideImage" : "";
    $saleBadge1 = $saleInsideImage ? $data->badge : "";
    $saleBadge2 = $saleInsideImage ?   "" : $data->badge;

    return apply_filters(
        'woocommerce_blocks_product_grid_item_html',
        "<div class=\"scroll-snap-slide {$classes}\" data-index=\"{$index}\">
				<div class=\"wcb-products__product-featured \">
                    <a href=\"{$data->permalink}\" class=\"wcb-products__product-image-link\">
                        {$data->image}
                    </a>
                    {$saleBadge1}
                    {$btn1}
                </div>
                {$data->title}
				{$saleBadge2}
				{$data->rating}
				{$data->price}
               {$btn2}
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


function wcb_block_products__get_title_html($product, $headingTag = "div", $link)
{
    if (empty($headingTag)) {
        $headingTag = 'div';
    };
    return '<' . $headingTag . ' class="wcb-products__product-title wc-block-grid__product-title"> <a href=" ' . $link . ' ">' . wp_kses_post($product->get_title()) . '</a></' . $headingTag . '>';
}


function wcb_block_products__get_rating_html($product)
{

    $rating_count = $product->get_rating_count();
    // $review_count = $product->get_review_count();
    $average      = $product->get_average_rating();


    if ($rating_count > 0) {
        $label = sprintf(__('Rated %s out of 5', 'woocommerce'), $average);
        $html  = '<div class="wcb-products__product-rating wc-block-components-product-rating__stars wc-block-grid__product-rating__stars" role="img" aria-label="' . esc_attr($label) . '">' . wc_get_star_rating_html($average, $rating_count) . '</div>';
        return $html;
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

function wcb_block_products__add_percentage_to_sale_badge($product)
{
    if ($product->is_type('variable')) {
        $percentages = array();

        // Get all variation prices
        $prices = $product->get_variation_prices();

        // Loop through variation prices
        foreach ($prices['price'] as $key => $price) {
            // Only on sale variations
            if ($prices['regular_price'][$key] !== $price) {
                // Calculate and set in the array the percentage for each variation on sale
                $percentages[] = round(100 - ($prices['sale_price'][$key] / $prices['regular_price'][$key] * 100));
            }
        }
        $percentage = max($percentages) . '%';
    } else {
        $regular_price = (float) $product->get_regular_price();
        $sale_price    = (float) $product->get_sale_price();

        $percentage    = round(100 - ($sale_price / $regular_price * 100)) . '%';
    }
    return '<span class="onsale">' . esc_html__('SALE', 'wcb') . ' ' . $percentage . '</span>';
}

function wcb_block_products__get_sale_badge_html($product,  $showSaleBadgeDiscoutPercent)
{

    if (!$product->is_on_sale()) {
        return;
    }

    if (wcb__is_enabled($showSaleBadgeDiscoutPercent)) {
        return '<div class="wcb-products__product-salebadge"><div class="wcb-products__product-onsale wc-block-grid__product-onsale">
        ' . wcb_block_products__add_percentage_to_sale_badge($product) . '
        <span class="screen-reader-text">' . esc_html__('Product on sale', 'wcb') . '</span>
    </div></div>';
    }


    return '<div class="wcb-products__product-salebadge"><div class="wcb-products__product-onsale wc-block-grid__product-onsale">
			<span aria-hidden="true">' . esc_html__('Sale', 'wcb') . '</span>
			<span class="screen-reader-text">' . esc_html__('Product on sale', 'wcb') . '</span>
		</div></div>';
}


function wcb_block_products__get_button_html($product)
{

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


if (!function_exists("wcb_block_products_parse_filterAttributes")) :
    function wcb_block_products_parse_filterAttributes($filterAttrs)
    {
        // These should match what's set in JS `registerBlockType`.
        $defaults = array(
            'categories'        => array(),
            'catOperator'       => 'any',
            'stockStatus'       => array_keys(wc_get_product_stock_status_options()),
        );

        return wp_parse_args($filterAttrs, $defaults);
    }
endif;



if (!function_exists("wcb_block_products_parse_query_args")) :
    function wcb_block_products_parse_query_args($filtersAttrs)
    {
        $postsPerPage = $filtersAttrs["numberOfItems"] ?? 9;
        $paged = get_query_var('paged') ? get_query_var('paged') : 1;
        // $offset = ($paged - 1) * $postsPerPage;

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
            'posts_per_page'      => $postsPerPage,
            's'                 => $filtersAttrs['keyword'] ?? '',
            'paged'             => $paged
        );

        wcb_block_products_set_block_query_args($query_args, $filtersAttrs);
        wcb_block_products_set_ordering_query_args($query_args, $filtersAttrs);
        wcb_block_products_set_categories_query_args($query_args, $filtersAttrs);
        wcb_block_products_set_tags_query_args($query_args, $filtersAttrs);
        wcb_block_products_set_attributes_query_args($query_args, $filtersAttrs);
        wcb_block_products_set_visibility_query_args($query_args, $filtersAttrs);
        wcb_block_products_set_stock_status_query_args($query_args, $filtersAttrs, $meta_query);

        return $query_args;
    }
endif;



if (!function_exists("wcb_block_products_set_ordering_query_args")) :
    function wcb_block_products_set_ordering_query_args(&$query_args, $attributes)
    {

        $query_args['orderby'] = $attributes['orderBy'] ?? "date";
        $query_args['order'] = $attributes['order'] ?? "DESC";

        $query_args = array_merge(
            $query_args,
            WC()->query->get_catalog_ordering_args($query_args['orderby'], $query_args['order'])
        );
    }
endif;

if (!function_exists("wcb_block_products_set_block_query_args")) :
    function wcb_block_products_set_block_query_args(&$query_args, $filtersAttrs)
    {
        if (wcb__is_enabled($filtersAttrs['isOnSale'] ?? "")) {
            $query_args['post__in'] = array_merge(array(0), wc_get_product_ids_on_sale());
        }
    }
endif;


if (!function_exists("wcb_block_products_set_categories_query_args")) :
    function wcb_block_products_set_categories_query_args(&$query_args, $attributes)
    {
        if (!empty($attributes['categories'])) {
            $categories = array_map('absint', $attributes['categories']);

            $query_args['tax_query'][] = array(
                'taxonomy'         => 'product_cat',
                'terms'            => $categories,
                'field'            => 'term_id',
                'operator'         => wcb_block_products_tax_operator_mapping($attributes['catOperator'] ?? null),

                /*
				 * When cat_operator is AND, the children categories should be excluded,
				 * as only products belonging to all the children categories would be selected.
				 */
                'include_children' => 'all' === $attributes['catOperator'] ? false : true,
            );
        }
    }
endif;

if (!function_exists("wcb_block_products_set_tags_query_args")) :
    function wcb_block_products_set_tags_query_args(&$query_args, $attributes)
    {
        if (!empty($attributes['tags'])) {
            $query_args['tax_query'][] = array(
                'taxonomy' => 'product_tag',
                'terms'    => array_map('absint', $attributes['tags']),
                'field'    => 'term_id',
                'operator' => wcb_block_products_tax_operator_mapping($attributes['tagOperator'] ?? null),
            );
        }
    }
endif;

if (!function_exists("wcb_block_products_set_attributes_query_args")) :
    function wcb_block_products_set_attributes_query_args(&$query_args, $attributes)
    {
        if (!empty($attributes['attributes'])) {
            $taxonomy = sanitize_title($attributes['attributes'][0]['attr_slug']);
            $terms    = wp_list_pluck($attributes['attributes'], 'id');

            $query_args['tax_query'][] = array(
                'taxonomy' => $taxonomy,
                'terms'    => array_map('absint', $terms),
                'field'    => 'term_id',
                'operator' => wcb_block_products_tax_operator_mapping($attributes['attrOperator'] ?? null)
            );
        }
    }
endif;

if (!function_exists("wcb_block_products_set_visibility_query_args")) :
    function wcb_block_products_set_visibility_query_args(&$query_args, $attributes)
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
endif;

if (!function_exists("wcb_block_products_set_stock_status_query_args")) :
    function wcb_block_products_set_stock_status_query_args(&$query_args, $attributes, $meta_query)
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
endif;


if (!function_exists('wcb_block_products_tax_operator_mapping')) :
    function wcb_block_products_tax_operator_mapping(string $operator = "in")
    {
        $operator_mapping = [
            'in'     => 'IN',
            'not_in' => 'NOT IN',
            'all'    => 'AND',
        ];
        return $operator_mapping[$operator] ?? "IN";
    }
endif;

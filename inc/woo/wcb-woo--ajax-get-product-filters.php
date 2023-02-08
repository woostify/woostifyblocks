<?php

add_action('wp_ajax_wcb_get_product_filters', 'wcb_woo__ajax_get_product_filters');
add_action('wp_ajax_nopriv_wcb_get_product_filters', 'wcb_woo__ajax_get_product_filters');

function wcb_woo__ajax_get_product_filters()
{
    $args = array(
        'post_type'      => 'product', // product, not products
    );
    $query = new WP_Query($args);

    ob_start();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            wc_get_template_part('content', 'product'); // use WooCommerce function to get html
        }
    } else {
        // handle not found by yourself or
        do_action('woocommerce_no_products_found');
    }

    $content = ob_get_clean();
    wp_reset_postdata();

    wp_send_json_success($content);
    wp_die();
}


function wcb_woo___get_product_filters_no_ajax()
{
    $args = array(
        'post_type'      => 'product', // product, not products
    );
    $query = new WP_Query($args);

    ob_start();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            wc_get_template_part('content', 'product'); // use WooCommerce function to get html
        }
    } else {
        // handle not found by yourself or
        do_action('woocommerce_no_products_found');
    }

    $content = ob_get_clean();
    return $content;
}

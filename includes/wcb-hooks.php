<?php

function wcb__add_new_block_category($block_categories, $editor_context)
{
    if (!empty($editor_context->post)) {
        array_unshift(
            $block_categories,
            array(
                'slug'  => 'wcb-blocks',
                'title' => __('Woostify', 'wcb'),
                'icon'  => null,
            ),
        );
    }
    return $block_categories;
}

add_filter('block_categories_all', 'wcb__add_new_block_category', 9999999, 2);

// 

function wcb__add_rest_method($endpoints)
{
    if (is_wp_version_compatible('5.5')) {
        return $endpoints;
    }

    foreach ($endpoints as $route => $handler) {
        if (isset($endpoints[$route][0])) {
            $endpoints[$route][0]['methods'] = [WP_REST_Server::READABLE, WP_REST_Server::CREATABLE];
        }
    }

    return $endpoints;
}
add_filter('rest_endpoints', 'wcb__add_rest_method');

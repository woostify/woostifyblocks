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

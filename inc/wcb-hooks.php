<?php

function wcb_filter_block_categories_when_post_provided($block_categories, $editor_context)
{
    if (!empty($editor_context->post)) {
        array_push(
            $block_categories,
            array(
                'slug'  => 'wcb-blocks',
                'title' => __('WCB Blocks', 'wcb'),
                'icon'  => null,
            )
        );
    }
    return $block_categories;
}

add_filter('block_categories_all', 'wcb_filter_block_categories_when_post_provided', 10, 2);

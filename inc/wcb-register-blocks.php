<?php

//============================================================================================================================================
// START REGISTER GUTENBERG BLOCKS
//======================================================================================================================================
require WCB_PATH . 'inc/wcb-render-callback-for-block-posts-grid.php';
// 


add_action('init', 'wcb_create_blocks_gutenberg_init');
if (!function_exists("wcb_create_blocks_gutenberg_init")) {
    function wcb_create_blocks_gutenberg_init()
    {
        register_block_type(
            WCB_BUILD_PATH . '/block-common-css',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-container-box',
            [
                "render_callback"     => "wcb_block_container_box__renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-container',
            [
                "render_callback"     => "wcb_block_container__renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-heading',
            [
                "render_callback"     => "wcb_block_heading__renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-posts-grid',
            [
                "render_callback"     => "wcb_block_posts_grid__renderCallback",
            ]
        );
    }
}

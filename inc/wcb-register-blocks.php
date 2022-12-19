<?php

//============================================================================================================================================
// START REGISTER GUTENBERG BLOCKS
//======================================================================================================================================
require WCB_PATH . 'inc/wcb-render-callback-for-block-posts-grid.php';
require WCB_PATH . 'inc/wcb-ajax-for-block-form.php';
// 


add_action('init', 'wcb_create_blocks_gutenberg_init');
if (!function_exists("wcb_create_blocks_gutenberg_init")) {
    function wcb_create_blocks_gutenberg_init()
    {
        register_block_type(
            WCB_BUILD_PATH . '/block-common-css',
            []
        );
        // register_block_type(
        //     WCB_BUILD_PATH . '/block-container-box',
        //     [
        //         "render_callback"     => "wcb_block_container_box__renderCallback",
        //     ]
        // );
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
        register_block_type(
            WCB_BUILD_PATH . '/block-form',
            [
                "render_callback"     => "wcb_block_form__renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-input',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-email',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-phone',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-textarea',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-checkbox',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-radio',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-url',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-select',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-toggle',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-date',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-accept',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-hidden',
            []
        );
        // 
        register_block_type(
            WCB_BUILD_PATH . '/block-testimonials',
            [
                "render_callback"     => "wcb_block_testimonials__renderCallback",
            ]
        );
        // 
        register_block_type(
            WCB_BUILD_PATH . '/block-buttons',
            [
                "render_callback"     => "wcb_block_buttons__renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-button',
            [
                "render_callback"     => "wcb_block_button__renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-cta',
            [
                "render_callback"     => "wcb_block_cta_renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-faq',
            [
                "render_callback"     => "wcb_block_faq_renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-faq-child',
            []
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-team',
            [
                "render_callback"     => "wcb_block_team_renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-icon-box',
            [
                "render_callback"     => "wcb_block_icon_box_renderCallback",
            ]
        );
        register_block_type(
            WCB_BUILD_PATH . '/block-image',
            [
                "render_callback"     => "wcb_block_image_renderCallback",
            ]
        );
    }
}

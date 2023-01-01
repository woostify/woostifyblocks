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
        $wcb_blocks_enable_disable = get_option('wcb_blocks_enable_disable_options') ?? [];

        // common - not deactive
        register_block_type(
            WCB_BUILD_PATH . '/block-common-css',
            []
        );
        // common - not deactive

        if (($wcb_blocks_enable_disable['wcb/container'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-container',
                [
                    "render_callback"     => "wcb_block_container__renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/heading'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-heading',
                [
                    "render_callback"     => "wcb_block_heading__renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/posts-grid'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-posts-grid',
                [
                    "render_callback"     => "wcb_block_posts_grid__renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/form'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-form',
                [
                    "render_callback"     => "wcb_block_form__renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/input'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-input',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/email'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-email',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/phone'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-phone',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/textarea'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-textarea',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/checkbox'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-checkbox',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/radio'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-radio',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/url'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-url',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/select'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-select',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/toggle'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-toggle',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/date'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-date',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/accept'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-accept',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/hidden'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-hidden',
                []
            );
        endif;

        // 
        if (($wcb_blocks_enable_disable['wcb/testimonials'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-testimonials',
                [
                    "render_callback"     => "wcb_block_testimonials__renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/buttons'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-buttons',
                [
                    "render_callback"     => "wcb_block_buttons__renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/button'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-button',
                [
                    "render_callback"     => "wcb_block_button__renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/cta'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-cta',
                [
                    "render_callback"     => "wcb_block_cta_renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/faq'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-faq',
                [
                    "render_callback"     => "wcb_block_faq_renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/faq-child'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-faq-child',
                []
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/team'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-team',
                [
                    "render_callback"     => "wcb_block_team_renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/icon-box'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-icon-box',
                [
                    "render_callback"     => "wcb_block_icon_box_renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/image'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-image',
                [
                    "render_callback"     => "wcb_block_image_renderCallback",
                ]
            );
        endif;

        if (($wcb_blocks_enable_disable['wcb/map'] ?? "") !== 'disabled') :
            register_block_type(
                WCB_BUILD_PATH . '/block-map',
                [
                    "render_callback"     => "wcb_block_map_renderCallback",
                ]
            );
        endif;
    }
}

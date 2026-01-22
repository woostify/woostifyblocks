<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
//============================================================================================================================================
// START REGISTER GUTENBERG BLOCKS
//======================================================================================================================================
require BOOSTIFY_BLOCKS_PATH . 'includes/wcb-render-callback-for-block-posts-grid.php';
require BOOSTIFY_BLOCKS_PATH . 'includes/wcb-render-callback-for-block-products.php';
require BOOSTIFY_BLOCKS_PATH . 'includes/wcb-ajax-for-block-form.php';
// 

add_action('init', 'boostify_blocks_create_blocks_gutenberg_init');
if (!function_exists("boostify_blocks_create_blocks_gutenberg_init")) {
    function boostify_blocks_create_blocks_gutenberg_init()
    {
        $wcb_blocks_enable_disable = get_option('boostify_blocks_enable_disable_options') ?? [];

        // common - not deactive
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-common-css',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/____toolbar-patterns',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-container',
            [
                "render_callback"     => "boostify_blocks_block_container_render_callback",
                "ancestor"     => (($wcb_blocks_enable_disable['wcb/container'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        // common - not deactive

        if (defined('WC_PLUGIN_FILE')) :
            register_block_type(
                BOOSTIFY_BLOCKS_BUILD_PATH . '/block-products',
                [
                    'attributes'      => array(
                        'uniqueId'    => array(
                            'type'      => 'string',
                            'default'   => '',
                        ),
                        'general_sortingAndFiltering' => array(
                            'type'      => 'object',
                        ),
                        'general_content' => array(
                            'type'      => 'object',
                        ),
                        'general_featuredImage' => array(
                            'type'      => 'object',
                        ),
                        'general_addToCartBtn' => array(
                            'type'      => 'object',
                        ),
                        'general_pagination' => array(
                            'type'      => 'object',
                        ),
                        'style_title' => array(
                            'type'      => 'object',
                        ),
                        'style_featuredImage' => array(
                            'type'      => 'object',
                        ),
                        'style_price' => array(
                            'type'      => 'object',
                        ),
                        'style_layout' => array(
                            'type'      => 'object',
                        ),
                        'style_addToCardBtn' => array(
                            'type'      => 'object',
                        ),
                        'style_pagination' => array(
                            'type'      => 'object',
                        ),
                        'style_saleBadge' => array(
                            'type'      => 'object',
                        ),
                        'style_border' => array(
                            'type'      => 'object',
                        ),
                        'style_rating' => array(
                            'type'      => 'object',
                        ),
                        'style_category' => array(
                            'type'      => 'object',
                        ),
                        'advance_responsiveCondition' => array(
                            'type'      => 'object',
                        ),
                        'advance_zIndex' => array(
                            'type'      => 'object',
                        ),
                        'advance_motionEffect' => array(
                            'type'      => 'object',
                        ),

                    ),
                    "render_callback"     => "boostify_blocks_block_products_render_callback",
                    "ancestor"            => (($wcb_blocks_enable_disable['wcb/products'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                    "view_script_handles" => []
                ]
            );
        endif;

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-heading',
            [
                "render_callback"     => "boostify_blocks_block_heading_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/heading'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-posts-grid',
            [
                'attributes'      => array(
                    'uniqueId'    => array(
                        'type'      => 'string',
                        'default'   => '',
                    ),
                    'general_sortingAndFiltering' => array(
                        'type'      => 'object',
                    ),
                    'general_postContent' => array(
                        'type'      => 'object',
                    ),
                    'general_postMeta' => array(
                        'type'      => 'object',
                    ),
                    'general_postFeaturedImage' => array(
                        'type'      => 'object',
                    ),
                    'general_readmoreLink' => array(
                        'type'      => 'object',
                    ),
                    'general_pagination' => array(
                        'type'      => 'object',
                    ),
                    'style_layout' => array(
                        'type'      => 'object',
                    ),
                    'style_title' => array(
                        'type'      => 'object',
                    ),
                    'style_excerpt' => array(
                        'type'      => 'object',
                    ),
                    'style_taxonomy' => array(
                        'type'      => 'object',
                    ),
                    'style_meta' => array(
                        'type'      => 'object',
                    ),
                    'style_readmoreLink' => array(
                        'type'      => 'object',
                    ),
                    'style_pagination' => array(
                        'type'      => 'object',
                    ),
                    'style_featuredImage' => array(
                        'type'      => 'object',
                    ),
                    'style_border' => array(
                        'type'      => 'object',
                    ),
                    'style_boxShadow' => array(
                        'type'      => 'object',
                    ),
                    'advance_responsiveCondition' => array(
                        'type'      => 'object',
                    ),
                    'advance_zIndex' => array(
                        'type'      => 'object',
                    ),
                    'advance_motionEffect' => array(
                        'type'      => 'object',
                    ),

                ),
                "render_callback"     => "boostify_blocks_block_posts_grid_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/posts-grid'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []

            ]
        );

        // FORM
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-form',
            [
                "render_callback"     => "boostify_blocks_block_form_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/form'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        // FORM CHILD BLOCKS
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-input',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-email',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-phone',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-textarea',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-checkbox',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-radio',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-url',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-select',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-toggle',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-date',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-accept',
            []
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-hidden',
            []
        );
        // END FORM CHILD BLOCKS

        // 
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-testimonials',
            [
                "render_callback"     => "boostify_blocks_block_testimonials_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/testimonials'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-buttons',
            [
                "render_callback"     => "boostify_blocks_block_buttons_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/buttons'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        // BUTTON CHILD
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-button',
            [
                "render_callback"     => "boostify_blocks_block_button_render_callback",
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-cta',
            [
                "render_callback"     => "boostify_blocks_block_cta_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/cta'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-faq',
            [
                "render_callback"     => "boostify_blocks_block_faq_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/faq'] ?? "") !== 'disabled')  ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        // FAQ CHILD
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-faq-child',
            [
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-team',
            [
                "render_callback"     => "boostify_blocks_block_team_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/team'] ?? "") !== 'disabled')  ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-icon-box',
            [
                "render_callback"     => "boostify_blocks_block_icon_box_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/icon-box'] ?? "") !== 'disabled')  ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-image',
            [
                "render_callback"     => "boostify_blocks_block_image_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/image'] ?? "") !== 'disabled')  ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-map',
            [
                "render_callback"     => "boostify_blocks_block_map_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/map'] ?? "") !== 'disabled')  ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        // tabs blocks
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-tabs',
            [
                "render_callback"     => "boostify_blocks_block_tabs_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/tabs'] ?? "") !== 'disabled')  ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-tab-child',
            [
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-countdown',
            [
                "render_callback"     => "boostify_blocks_block_countdown_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/countdown'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-counter',
            [
                "render_callback"     => "boostify_blocks_block_counter_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/counter'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-icon-list',
            [
                "render_callback"     => "boostify_blocks_block_icon_list_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/icon-list'] ?? "") !== 'disabled')  ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        // ICON CHILD
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-icon-child',
            [
                "render_callback"     => "boostify_blocks_block_icon_child_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/icon'] ?? "") !== 'disabled')  ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        
        // ICON BLOCK
        register_block_type(
            BOOSTIFY_BLOCKS_BUILD_PATH . '/block-icon',
            [
                "render_callback"     => "boostify_blocks_block_icon_render_callback",
                "ancestor"              => (($wcb_blocks_enable_disable['wcb/icon'] ?? "") !== 'disabled') ? null : BOOSTIFY_BLOCKS_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
    }
}

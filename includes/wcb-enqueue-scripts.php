<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// Enqueue for Frontend
if (!function_exists("boostify_blocks_my_scripts_method")) {
    function boostify_blocks_my_scripts_method()
    {
        wp_enqueue_style('wcb-frontend-css', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-common-css/style-index.css');
        wp_localize_script(
            'jquery',
            'wcbFrontendAjaxObject',
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'homeUrl' => home_url(),
                'nonce'   => wp_create_nonce('wcb_form_action_nonce'),
            )
        );
        wp_localize_script(
            'jquery',
            'wcbLayoutGlobalSettings',
            boostify_blocks_get_layout_global_settings()
        );
        // 1 - JS Global -> Follow by typeof window.boostifyBlocksGlobalVariables
        wp_localize_script(
            'jquery',
            'wcbGlobalVariables',
            get_option('boostify_blocks_settings_options')
        );

        // can xem xet lai, vi no se enqueue khi ma testimonial co duoc goi hay khong di nua....
        wp_enqueue_script('wcb-slicklib', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/slick/slick.min.js', ['jquery'], "1.8.0", false);

        wp_enqueue_script(
            'wcb-countdown-lib',
            plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/js/countdown/wcb-countdown.js',
            array('jquery'),
            true
        );
    }
    add_action('wp_enqueue_scripts', 'boostify_blocks_my_scripts_method');
}

// Enqueue for admin
if (!function_exists("boostify_blocks_my_enqueue_scripts_for_admin_editor")) {
    function boostify_blocks_my_enqueue_scripts_for_admin_editor($hook)
    {
        wp_localize_script(
            'jquery',
            'wcbLayoutGlobalSettings',
            boostify_blocks_get_layout_global_settings()
        );
        // 1 - JS Global -> Follow by typeof window.boostifyBlocksGlobalVariables
        wp_localize_script(
            'jquery',
            'wcbBlocksGlobalVariables',
            get_option('boostify_blocks_settings_options')
        );
        wp_localize_script(
            'jquery',
            'wcbFrontendAjaxObject',
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'homeUrl' => home_url(),
                'nonce'   => wp_create_nonce('wcb_dashboard_settings_nonce'),
            )
        );
    }
    add_action('admin_enqueue_scripts', 'boostify_blocks_my_enqueue_scripts_for_admin_editor');
}


// 
if (!function_exists("boostify_blocks_enqueue_lineicons")) {
    function boostify_blocks_enqueue_lineicons()
    {
        wp_register_style('lineicons-free-basic-3.0', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/lineicons-free-basic/icon-font/lineicons.css', false, '3.0.0');
        wp_enqueue_style('lineicons-free-basic-3.0');
    }
    add_action('wp_enqueue_scripts', 'boostify_blocks_enqueue_lineicons');
    add_action('admin_enqueue_scripts', 'boostify_blocks_enqueue_lineicons');
    // 

    function boostify_blocks_enqueue_lineicons_for_gutenbeg_editor()
    {
        add_editor_style(plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/lineicons-free-basic/icon-font/lineicons.css');
        // for iframe 
        add_editor_style(plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/css/lineicons2.css');
    }
    add_action('admin_init', 'boostify_blocks_enqueue_lineicons_for_gutenbeg_editor');
}


if (!function_exists("boostify_blocks_enqueue_script_to_setting_page")) {
    // su dung trong trang wcb settings page
    function boostify_blocks_enqueue_script_to_setting_page()
    {
        $currentScrren = get_current_screen();

        if (
            !empty($currentScrren->id) && $currentScrren->id == "boostify-blocks/includes/settings-page"
        ) {
            wp_register_style('wcb-settings-page', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/____dashboard/style-index.css');
            wp_enqueue_style('wcb-settings-page');
            // 
            // wp_enqueue_script('wcb-dashboard-app-tailwind', "https://cdn.tailwindcss.com?plugins=forms", [], '3.2.6', false);
            // wp_add_inline_script('wcb-dashboard-app-tailwind', 'tailwind.config = {
            //     theme: {  important: true  } }', 'after');
            // 
            wp_enqueue_script('wcb-dashboard-app', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/____dashboard/index.js', ['wp-blocks', 'wp-element', 'jquery'], BOOSTIFY_BLOCKS_VERSION, true);
        }
    }
    add_action('admin_enqueue_scripts', 'boostify_blocks_enqueue_script_to_setting_page');
}

<?php
// 
if (!function_exists("wcb__my_scripts_method")) {
    function wcb__my_scripts_method()
    {
        wp_enqueue_style('wcb-frontend-css', plugin_dir_url(WCB_FILE) . 'build/block-common-css/style-index.css');
        wp_localize_script(
            'jquery',
            'wcbFrontendAjaxObject',
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'homeUrl' => home_url(),
            )
        );
    }
    add_action('wp_enqueue_scripts', 'wcb__my_scripts_method');
}

// 
if (!function_exists("wcb__my_enqueue_scripts_for_admin_editor")) {
    function wcb__my_enqueue_scripts_for_admin_editor($hook)
    {
        // 1 - JS Global -> Follow by typeof window.wcbGlobalVariables
        wp_localize_script(
            'jquery',
            'wcbGlobalVariables',
            get_option('wcb_blocks_settings_options')
        );

        // only for gutenberg editor page
        // if (function_exists('wcb_get_wcb_all_patterns_data') && ($hook == "post-new.php" || $hook == "post.php")) {
        //     wp_localize_script(
        //         'jquery',
        //         'wcbGlobalPatternsData',
        //         wcb_get_wcb_all_patterns_data()
        //     );
        // }
    }
    add_action('admin_enqueue_scripts', 'wcb__my_enqueue_scripts_for_admin_editor');
}


// 
if (!function_exists("wcb__enqueue_lineicons")) {
    function wcb__enqueue_lineicons()
    {
        wp_register_style('lineicons-free-basic-3.0', plugin_dir_url(WCB_FILE) . 'public/lineicons-free-basic/icon-font/lineicons.css', false, '3.0.0');
        wp_enqueue_style('lineicons-free-basic-3.0');
    }
    add_action('wp_enqueue_scripts', 'wcb__enqueue_lineicons');
    add_action('admin_enqueue_scripts', 'wcb__enqueue_lineicons');
}

// 
if (!function_exists("wcb__enqueue_googleapis")) {
    // su dung trong khoi gutenberg wcbMap block
    function wcb__enqueue_googleapis()
    {
        wp_enqueue_script('googleapis', "https://maps.googleapis.com/maps/api/js?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&libraries=places&v=weekly");
    }
    add_action('admin_enqueue_scripts', 'wcb__enqueue_googleapis');
}


if (!function_exists("wcb__enqueue_script_to_setting_page")) {
    // su dung trong trang wcb settings page
    function wcb__enqueue_script_to_setting_page()
    {
        $currentScrren = get_current_screen();
        if (!empty($currentScrren->id) && $currentScrren->id == "woostify-blocks/settings-page") {
            wp_register_style('wcb-settings-page', plugin_dir_url(WCB_FILE) . 'build/____dashboard/style-index.css');
            // wp_register_style('wcb-settings-page', plugin_dir_url(WCB_FILE) . 'build/____dashboard/index.css');
            // wp_register_style('wcb-settings-page', plugin_dir_url(WCB_FILE) . 'public/css/dashboard.css');
            wp_enqueue_style('wcb-settings-page');

            // 
            wp_enqueue_script('wcb-dashboard-app-tailwind', "https://cdn.tailwindcss.com?plugins=forms", [], '3.2.6', false);
            wp_add_inline_script('wcb-dashboard-app-tailwind', 'tailwind.config = {
                theme: {  important: true  } }', 'after');
            // 
            wp_enqueue_script('wcb-dashboard-app', plugin_dir_url(WCB_FILE) . 'build/____dashboard/index.js', ['wp-blocks', 'wp-element', 'jquery'], WCB_VERSION, true);
        }
    }
    add_action('admin_enqueue_scripts', 'wcb__enqueue_script_to_setting_page');
}

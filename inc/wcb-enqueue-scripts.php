<?php
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
if (!function_exists("wcb__enqueue_lineicons")) {
    function wcb__enqueue_lineicons()
    {
        wp_register_style('lineicons-free-basic-3.0', plugin_dir_url(WCB_FILE) . 'public/lineicons-free-basic/icon-font/lineicons.css', false, '3.0.0');
        wp_enqueue_style('lineicons-free-basic-3.0');
    }
    add_action('wp_enqueue_scripts', 'wcb__enqueue_lineicons');
    add_action('admin_enqueue_scripts', 'wcb__enqueue_lineicons');
}

function my_load_scripts()
{
    wp_enqueue_script('googleapis', "https://maps.googleapis.com/maps/api/js?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&libraries=places&v=weekly");
}
add_action('admin_enqueue_scripts', 'my_load_scripts');
// 
// if (!function_exists("wcb__enqueue_third_library_for_admin_editor")) {
//     function wcb__enqueue_third_library_for_admin_editor()
//     {
//         wp_register_script('glidejsxxx', plugin_dir_url(WCB_FILE) . 'public/js/glide.js',  ["jquery"], '3.6.0', true);
//         wp_register_script('glidejs', "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", ["jquery"], '3.6.0', true);
//         wp_enqueue_script('glidejs');
//         wp_enqueue_script('glidejsxxx');
//     }
//     add_action('admin_enqueue_scripts', 'wcb__enqueue_third_library_for_admin_editor');
// }

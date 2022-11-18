<?php
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
// 
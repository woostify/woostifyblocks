<?php

add_action('wp_ajax_wcb_dashboard_blocks_disable_enable', 'wcb_ajax_dashboard_blocks_disable_enable');
function wcb_ajax_dashboard_blocks_disable_enable()
{
    $blocksStatus = $_POST['blocksStatus'] ?? [];
    $wcbBlockStatusInit = [];
    if (function_exists('wcb_get_wcb_block_name_enable_init')) {
        $wcbBlockStatusInit = wcb_get_wcb_block_name_enable_init();
    }

    $blocksStatus = array_merge($wcbBlockStatusInit, $blocksStatus);

    update_option('wcb_blocks_enable_disable_options', $blocksStatus);
    $array_result = array(
        'data' => $blocksStatus,
        'message' => 'your message'
    );
    // 
    wp_send_json($array_result);
    wp_die();
}

// 
add_action('wp_ajax_wcb_dashboard_blocks_update_settings', 'wcb_ajax_dashboard_update_settings');
function wcb_ajax_dashboard_update_settings()
{
    $settings = $_POST['settings'] ?? [];
    $settings = array_merge(WCB_DEFAULT_BLOCKS_SETTINGS, $settings);

    update_option('wcb_blocks_settings_options', $settings);
    $array_result = array(
        'data' => $settings,
        'message' => 'your message'
    );
    // 
    wp_send_json($array_result);
    wp_die();
}

<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
add_action('wp_ajax_wcb_dashboard_blocks_disable_enable', 'boostify_blocks_ajax_dashboard_blocks_disable_enable');
function boostify_blocks_ajax_dashboard_blocks_disable_enable()
{
    // Only allow administrators (or appropriate capability) to toggle block status.
    if ( ! current_user_can('manage_options') ) {
        wp_send_json_error(array('message' => __('You are not allowed to perform this action.', 'boostify-blocks')), 403);
        wp_die();
    }

    // Verify nonce to ensure request origin.
    if (
        ! isset($_POST['nonce']) ||
        ! check_ajax_referer('wcb_dashboard_settings_nonce', 'nonce', false)
    ) {
        wp_send_json_error(array('message' => __('Invalid security token.', 'boostify-blocks')), 400);
        wp_die();
    }

    $post_data = wp_unslash( $_POST );
    $blocksStatus = isset($post_data['blocksStatus']) && is_array($post_data['blocksStatus']) ? $post_data['blocksStatus'] : array();
    $wcbBlockStatusInit = [];
    if (function_exists('boostify_blocks_get_block_name_enable_init')) {
        $wcbBlockStatusInit = boostify_blocks_get_block_name_enable_init();
    }

    // Sanitize and normalize block status values (only allow expected values).
    $sanitizedBlocksStatus = array();
    foreach ($blocksStatus as $key => $value) {
        $key = sanitize_key($key);
        $value = (string) $value;
        if ($value !== 'enabled' && $value !== 'disabled') {
            continue;
        }
        $sanitizedBlocksStatus[$key] = $value;
    }

    $newBlocksStatus = array_merge($wcbBlockStatusInit, $sanitizedBlocksStatus);

    update_option('boostify_blocks_enable_disable_options', $newBlocksStatus);
    $array_result = array(
        'data' => $newBlocksStatus,
        'message' => 'your message'
    );
    // 
    wp_send_json($array_result);
    wp_die();
}

// 
add_action('wp_ajax_wcb_dashboard_blocks_update_settings', 'boostify_blocks_ajax_dashboard_update_settings');

if ( ! function_exists( 'boostify_blocks_recursive_sanitize_text_field' ) ) {
    /**
     * Recursively sanitize an array of values using sanitize_text_field.
     *
     * @param mixed $value The value to sanitize.
     * @return mixed
     */
    function boostify_blocks_recursive_sanitize_text_field( $value ) {
        if ( is_array( $value ) ) {
            foreach ( $value as $k => $v ) {
                $value[ $k ] = boostify_blocks_recursive_sanitize_text_field( $v );
            }

            return $value;
        }

        return sanitize_text_field( (string) $value );
    }
}

function boostify_blocks_ajax_dashboard_update_settings()
{
    // Only allow administrators (or appropriate capability) to update settings.
    if ( ! current_user_can('manage_options') ) {
        wp_send_json_error(array('message' => __('You are not allowed to perform this action.', 'boostify-blocks')), 403);
        wp_die();
    }

    // Verify nonce to ensure request origin.
    if (
        ! isset($_POST['nonce']) ||
        ! check_ajax_referer('wcb_dashboard_settings_nonce', 'nonce', false)
    ) {
        wp_send_json_error(array('message' => __('Invalid security token.', 'boostify-blocks')), 400);
        wp_die();
    }

    $post_data = wp_unslash( $_POST );
    $raw_settings = isset($post_data['settings']) && is_array($post_data['settings']) ? $post_data['settings'] : array();
    $sanitized_settings = boostify_blocks_recursive_sanitize_text_field( $raw_settings );
    $settings = array_merge(boostify_blocks_get_default_blocks_settings(), $sanitized_settings);

    update_option('boostify_blocks_settings_options', $settings);
    $array_result = array(
        'data' => $settings,
        'message' => 'your message'
    );
    // 
    wp_send_json($array_result);
    wp_die();
}

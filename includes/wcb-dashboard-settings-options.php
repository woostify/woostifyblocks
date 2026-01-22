<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// wcb_blocks_settings_options
function boostify_blocks_dashboard_settings_options_init()
{
    if (!function_exists('boostify_blocks_get_block_name_enable_init') || !function_exists('boostify_blocks_get_block_type_list')) {
        return;
    }

    // add a new option -- boostify_blocks_enable_disable_options
    if (FALSE === get_option('boostify_blocks_enable_disable_options') && FALSE === update_option('boostify_blocks_enable_disable_options', FALSE)) {
        $wcbBlockStatus = boostify_blocks_get_block_name_enable_init();
        add_option('boostify_blocks_enable_disable_options', $wcbBlockStatus);
    }

    // add a new option -- boostify_blocks_settings_options
    if (FALSE === get_option('boostify_blocks_settings_options') && FALSE === update_option('boostify_blocks_settings_options', FALSE)) {
        add_option('boostify_blocks_settings_options', boostify_blocks_get_default_blocks_settings());
    } else {
        // vui long thuc hien dieu nay khi co them cac field moi'..........
        // check co new option thi merge laij.......... 
        // 01-03-2023
        $hasNewOption = !array_key_exists('customColorPallete', get_option('boostify_blocks_settings_options') ?? []);
        // 
        if ($hasNewOption) {
            update_option('boostify_blocks_settings_options', array_merge(boostify_blocks_get_default_blocks_settings(), get_option('boostify_blocks_settings_options')));
        }
    }
}

add_action('admin_init', 'boostify_blocks_dashboard_settings_options_init');

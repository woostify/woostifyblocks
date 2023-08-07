<?php
// wcb_blocks_settings_options
function wcb_dashboard_settings_options_init()
{
    if (!function_exists('wcb_get_wcb_block_name_enable_init') || !function_exists('wcb_get_wcb_block_type_list')) {
        return;
    }

    // add a new option -- wcb_blocks_enable_disable_options
    if (FALSE === get_option('wcb_blocks_enable_disable_options') && FALSE === update_option('wcb_blocks_enable_disable_options', FALSE)) {
        $wcbBlockStatus = wcb_get_wcb_block_name_enable_init();
        add_option('wcb_blocks_enable_disable_options', $wcbBlockStatus);
    }

    // add a new option -- wcb_blocks_settings_options
    if (FALSE === get_option('wcb_blocks_settings_options') && FALSE === update_option('wcb_blocks_settings_options', FALSE)) {
        add_option('wcb_blocks_settings_options', wcb_get_default_blocks_settings());
    } else {
        // vui long thuc hien dieu nay khi co them cac field moi'..........
        // check co new option thi merge laij.......... 
        // 01-03-2023
        $hasNewOption = !array_key_exists('customColorPallete', get_option('wcb_blocks_settings_options') ?? []);
        // 
        if ($hasNewOption) {
            update_option('wcb_blocks_settings_options', array_merge(wcb_get_default_blocks_settings(), get_option('wcb_blocks_settings_options')));
        }
    }
}

add_action('admin_init', 'wcb_dashboard_settings_options_init');

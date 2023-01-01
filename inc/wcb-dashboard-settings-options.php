<?php
// 
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
        add_option('wcb_blocks_settings_options', WCB_DEFAULT_BLOCKS_SETTINGS);
    }
}

add_action('admin_init', 'wcb_dashboard_settings_options_init');

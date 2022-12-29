<?php
// add a new option -- wcb_blocks_enable_disable_options
if (FALSE === get_option('wcb_blocks_enable_disable_options') && FALSE === update_option('wcb_blocks_enable_disable_options', FALSE)) {
    add_option('wcb_blocks_enable_disable_options', WCB_DEFAULT_BLOCKS_STATUS);
}

// add a new option -- wcb_blocks_settings_options
if (FALSE === get_option('wcb_blocks_settings_options') && FALSE === update_option('wcb_blocks_settings_options', FALSE)) {
    add_option('wcb_blocks_settings_options', WCB_DEFAULT_BLOCKS_SETTINGS);
}

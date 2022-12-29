<?php

/**
 * Register a custom menu page.
 */
function wpdocs_register_my_custom_menu_page()
{
    add_menu_page(
        __('Wootify blocks settings', 'wcb'),
        __('Wootify blocks', 'wcb'),
        'manage_options',
        WCB_PATH . '/settings-page.php',
        '',
        // plugins_url('myplugin/images/icon.png'),
        "dashicons-editor-paste-word",
        6
    );
}
add_action('admin_menu', 'wpdocs_register_my_custom_menu_page');

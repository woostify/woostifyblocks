<?php

/**
 * Plugin Name:       Woostify Blocks
 * Description:       Example block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.3
 * Version:           0.1.0
 * Author:            woostify-conversion-blocks
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wcb
 *
 * @package           create-block
 */

//  WCB as Woostify-Conversion-Blocks ...
defined('ABSPATH') || exit;

// Define Constants.
define('WCB_VERSION', '0.1.0');
define('WCB_FILE', __FILE__);
define('WCB_PLUGIN_BASE', plugin_basename(WCB_FILE));
define('WCB_PATH', plugin_dir_path(WCB_FILE));
define('WCB_URI', plugins_url('/', WCB_FILE));
define('WCB_BUILD_PATH', __DIR__ . '/build');
// 

require plugin_dir_path(__FILE__) . 'inc/wcb-default-global-variables.php';
require plugin_dir_path(__FILE__) . 'inc/wcb-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'inc/wcb-hooks.php';
// 
require plugin_dir_path(__FILE__) . 'inc/wcb-enqueue-scripts.php';
// 
// 
require plugin_dir_path(__FILE__) . 'inc/wcb-dashboard-settings-options.php';
require plugin_dir_path(__FILE__) . 'inc/wcb-ajax-for-dashboard-page.php';
// 
require plugin_dir_path(__FILE__) . 'inc/wcb-blocks-render-callback.php';
// 
require plugin_dir_path(__FILE__) . 'inc/wcb-register-blocks.php';
// 
require plugin_dir_path(__FILE__) . 'inc/wcb-menu-page.php';
// end

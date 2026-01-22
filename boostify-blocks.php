<?php

/**
 * Plugin Name:       Boostify Blocks
 * Description:       Boostify Blocks offers an extensive library of customizable blocks that seamlessly integrate with the Gutenberg editor
 * Requires at least: 5.8
 * Requires PHP:      7.3
 * Version:           1.0.0
 * Author:            Woostify
 * Author URI:        https://woostify.com/about/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boostify-blocks
 *
 * @package           create-block
 */

// WCB as Woostify-Conversion-Blocks ...
defined('ABSPATH') || exit;

// Define Constants.
define('BOOSTIFY_BLOCKS_UNIQUE_NAME', 'boostify-blocks');

define('BOOSTIFY_BLOCKS_VERSION', '1.1.13');

define('BOOSTIFY_BLOCKS_FILE', __FILE__);
define('BOOSTIFY_BLOCKS_PLUGIN_BASE', plugin_basename(BOOSTIFY_BLOCKS_FILE));
define('BOOSTIFY_BLOCKS_PATH', plugin_dir_path(BOOSTIFY_BLOCKS_FILE));
define('BOOSTIFY_BLOCKS_URI', plugins_url('/', BOOSTIFY_BLOCKS_FILE));
define('BOOSTIFY_BLOCKS_BUILD_PATH', __DIR__ . '/build');



require plugin_dir_path(__FILE__) . 'includes/wcb-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'includes/wcb-hooks.php';
require plugin_dir_path(__FILE__) . 'includes/wcb-all-patterns-data.php';
require plugin_dir_path(__FILE__) . 'includes/wcb-enqueue-scripts.php';
require plugin_dir_path(__FILE__) . 'includes/woo/index.php';
require plugin_dir_path(__FILE__) . 'includes/wcb-dashboard-settings-options.php';
require plugin_dir_path(__FILE__) . 'includes/wcb-ajax-for-dashboard-page.php';
require plugin_dir_path(__FILE__) . 'includes/wcb-blocks-render-callback.php';
require plugin_dir_path(__FILE__) . 'includes/wcb-register-blocks.php';
require plugin_dir_path(__FILE__) . 'includes/wcb-menu-page.php';

// end

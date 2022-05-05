<?php

/**
 * Plugin Name:       Woostify Conversion Block
 * Description:       Advanced blocks for Gutenberg editor.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Woostify
 * License:           GNU General Public License v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       woostify-block
 *
 * @package           Woostify Conversion Block
 */

defined( 'ABSPATH' ) || exit;

// Define Constants.
define( 'WOOSTIFY_BLOCK_VERSION', '0.1.0' );
define( 'WOOSTIFY_BLOCK_FILE', __FILE__ );
define( 'WOOSTIFY_BLOCK_PLUGIN_BASE', plugin_basename( WOOSTIFY_BLOCK_FILE ) );
define( 'WOOSTIFY_BLOCK_PATH', plugin_dir_path( WOOSTIFY_BLOCK_FILE ) );
define( 'WOOSTIFY_BLOCK_URI', plugins_url( '/', WOOSTIFY_BLOCK_FILE ) );

// Helper functions.
require_once WOOSTIFY_BLOCK_PATH . 'inc/helpers.php';

// Global Settings.
require_once WOOSTIFY_BLOCK_PATH . 'inc/class-wcb-global-settings.php';

// Main Woostify Block Class.
require_once WOOSTIFY_BLOCK_PATH . 'inc/class-wcb.php';

// Woostify Block Dynamic CSS Class.
require_once WOOSTIFY_BLOCK_PATH . 'inc/class-wcb-dynamic-css.php';

// Admin.
if ( is_admin() ) {
	require_once WOOSTIFY_BLOCK_PATH . 'inc/admin/class-wcb-admin.php';
}

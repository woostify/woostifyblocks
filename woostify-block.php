<?php

/**
 * Plugin Name:       Woostify Block
 * Description:       Advanced blocks for Gutenberg editor.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Woostify
 * License:           GNU General Public License v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       woostify-block
 *
 * @package           Woostify Block
 */

defined( 'ABSPATH' ) || exit;

// Define Constants.
define( 'WOOSTIFY_BLOCK_VERSION', '0.1.0' );
define( 'WOOSTIFY_BLOCK_FILE', __FILE__ );
define( 'WOOSTIFY_BLOCK_PLUGIN_BASE', plugin_basename( WOOSTIFY_BLOCK_FILE ) );
define( 'WOOSTIFY_BLOCK_PATH', plugin_dir_path( WOOSTIFY_BLOCK_FILE ) );
define( 'WOOSTIFY_BLOCK_URI', plugins_url( '/', WOOSTIFY_BLOCK_FILE ) );

// Main Woostify Block Class.
require_once WOOSTIFY_BLOCK_PATH . 'inc/class-woostify-block.php';

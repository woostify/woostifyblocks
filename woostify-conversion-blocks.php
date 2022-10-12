<?php

/**
 * Plugin Name:       Woostify Conversion Blocks
 * Description:       Example block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.3
 * Version:           0.1.0
 * Author:            woostify-conversion-blocks
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-core
 *
 * @package           create-block
 */

defined('ABSPATH') || exit;

// Define Constants.
define('WCB_VERSION', '0.1.0');
define('WCB_FILE', __FILE__);
define('WCB_PLUGIN_BASE', plugin_basename(WCB_FILE));
define('WCB_PATH', plugin_dir_path(WCB_FILE));
define('WCB_URI', plugins_url('/', WCB_FILE));
// 

require plugin_dir_path(__FILE__) . 'inc/wcb-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'inc/wcb-hooks.php';
// 
require plugin_dir_path(__FILE__) . 'inc/wcb-blocks-render-callback.php';
// end
require plugin_dir_path(__FILE__) . 'inc/wcb-enqueue-scripts.php';

//============================================================================================================================================
// START REGISTER GUTENBERG BLOCKS
//======================================================================================================================================

add_action('init', 'wcb_create_blocks_gutenberg_init');
function wcb_create_blocks_gutenberg_init()
{
	register_block_type(
		__DIR__ . '/build/block-1',
		[
			// "render_callback" 	=> "render_callback_block_1",
			// "attributes"		=> array_merge(
			// 	[],
			// ),
		]
	);
}

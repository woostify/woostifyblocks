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


// 

function __my_scripts_method()
{
	wp_enqueue_style('wcb-frontend-css', plugin_dir_url(__FILE__) . 'build/block-common-css/style-index.css');
}
add_action('wp_enqueue_scripts', '__my_scripts_method');
// 

//============================================================================================================================================
// START REGISTER GUTENBERG BLOCKS
//======================================================================================================================================

add_action('init', 'wcb_create_blocks_gutenberg_init');
function wcb_create_blocks_gutenberg_init()
{
	register_block_type(
		__DIR__ . '/build/block-common-css',
		[]
	);
	register_block_type(
		__DIR__ . '/build/block-container-box',
		[
			"render_callback" 	=> "wcb_block_container_box__renderCallback",
		]
	);
	register_block_type(
		__DIR__ . '/build/block-container',
		[
			"render_callback" 	=> "wcb_block_container__renderCallback",
		]
	);
	register_block_type(
		__DIR__ . '/build/block-heading',
		[
			"render_callback" 	=> "wcb_block_heading__renderCallback",
		]
	);
}


function wcb_block_heading__renderCallback($attributes, $content)
{
	if (!is_admin()) {
		wp_enqueue_script('wcb_block_heading__renderCallbackScript', plugin_dir_url(__FILE__) . 'build/block-heading/FrontendStyles.js', array('wp-element'), null, true);
	}
	return $content;
}

function wcb_block_container_box__renderCallback($attributes, $content)
{
	if (!is_admin()) {
		wp_enqueue_script('wcb_block_container_box__renderCallbackScript', plugin_dir_url(__FILE__) . 'build/block-container-box/FrontendStyles.js', array('wp-element'), null, true);
	}
	return $content;
}

function wcb_block_container__renderCallback($attributes, $content)
{
	if (!is_admin()) {
		wp_enqueue_script('wcb_block_container__renderCallbackScript', plugin_dir_url(__FILE__) . 'build/block-container/FrontendStyles.js', array('wp-element'), null, true);
	}
	return $content;
}

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
wp_enqueue_style('wcb-frontend-css', plugin_dir_url(__FILE__) . 'public/css/frontend.css');
// 

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
	register_block_type(
		__DIR__ . '/build/block-container-box',
		[
			// "render_callback" 	=> "render_callback_block_1",
			// "attributes"		=> array_merge(
			// 	[],
			// ),
		]
	);
	register_block_type(
		__DIR__ . '/build/block-container',
		[
			"render_callback" 	=> "renderCallback",
			// "attributes"		=> array_merge(
			// 	[],
			// ),
		]
	);
}


function renderCallback($attributes, $content)
{

	if (!is_admin()) {
		wp_enqueue_script('boilerplateFrontendScript', plugin_dir_url(__FILE__) . 'build/block-container/FrontendStyles.js', array('wp-element'), null, true);
	}

	$containerWidthTypeClass = "";
	if ($attributes['general_container']['containerWidthType'] === "Full Width") {
		$containerWidthTypeClass = "alignfull";
	}
	if ($attributes['general_container']['containerWidthType'] === "Boxed") {
		$containerWidthTypeClass = "alignwide";
	}


	ob_start(); ?>
	<div id="<?php echo esc_attr($attributes['uniqueId']); ?>" class="wcb-container__wrap wcb-update-div <?php echo esc_attr($attributes['uniqueId'] . ' ' . $containerWidthTypeClass); ?>">

		<!-- INNER BLOCK HERE -->
		<?php echo $content; ?>

		<!--  -->
		<div data-wcb-global-styles></div>
		<pre data-wcb-block-attrs style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
	</div>
<?php return ob_get_clean();
}

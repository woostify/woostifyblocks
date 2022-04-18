<?php
/**
 * Main Woostify Block Class
 *
 * @package  Woostify Block
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'Woostify_Block' ) ) {
	/**
	 * Woostify Block class
	 */
	class Woostify_Block {
		/**
		 * Instance
		 *
		 * @var instance
		 */
		private static $instance;

		private $dependencies = array(
			'wp-plugins',
			'wp-edit-post',
			'wp-element',
			'wp-components',
			'wp-data',
			'wp-dom-ready',
			'wp-hooks'
		);

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Woostify Block Constructor.
		 */
		public function __construct() {
			// Init.
			add_action( 'init', array( $this, 'setup' ) );

			// Returning false loads all core block assets, regardless of whether they are rendered in a page or not. Returning true loads core block assets only when they are rendered.
			add_filter( 'should_load_separate_core_block_assets', '__return_true' );

			// Register blocks.
			add_action( 'init', array( $this, 'register_blocks' ) );

			// Register block category.
			add_filter( 'block_categories_all', array( $this, 'register_block_category' ), 10, 2 );

			// Enqueue block editor assets.
			add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );
		}

		/**
		 * Plugin sets up.
		 */
		public function setup() {
			if ( ! defined( 'WOOSTIFY_BLOCK_VERSION' ) ) {
				return;
			}

			load_plugin_textdomain( 'woostify-block', false, WOOSTIFY_BLOCK_PATH . 'languages/' );
		}

		public function enqueue_block_editor_assets() {
			global $pagenow;

			// General editor style.
			wp_enqueue_style(
				'woostify-block-editor',
				WOOSTIFY_BLOCK_URI . 'assets/css/block-editor.css',
				array(),
				'',
				'all'
			);

			wp_enqueue_script(
				'woostify-block-editor',
				WOOSTIFY_BLOCK_URI . 'assets/js/block-editor.js',
				array(),
				'',
				false
			);

			wp_localize_script(
				'woostify-block-editor',
				'woostify_block',
				array()
			);

			// Plugin sidebar script.
			wp_register_script(
				'woostify-block-sidebar',
				WOOSTIFY_BLOCK_URI . 'assets/js/plugins/sidebar.js',
				$this->dependencies
			);

			if ( $pagenow !== 'widgets.php' ) {
				wp_enqueue_script( 'woostify-block-sidebar' );
			}

		}

		/**
		 * Register gutenberg blocks.
		 */
		public function register_blocks() {
			$blocks = array(
				'first-block',
			);

			foreach ( $blocks as $block ) {
				register_block_type( WOOSTIFY_BLOCK_PATH . 'src/blocks/' . $block );
			}
		}

		/**
		 * Register new block category
		 *
		 * @param   array                   $block_categories       Array of categories for block types.
		 * @param   WP_Block_Editor_Context $block_editor_context   The current block editor context.
		 */
		public function register_block_category( $block_categories, $block_editor_context ) {
			$new_category = array(
				'slug'  => 'woostify-block',
				'title' => __( 'Woostify Block', 'woostify-block' ),
				'icon'  => 'wordpress', // Slug of a WordPress Dashicon or custom SVG.
			);

			return array_merge(
				$block_categories,
				array( $new_category ),
			);
		}

	}

	Woostify_Block::get_instance();
}

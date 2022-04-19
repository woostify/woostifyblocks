<?php
/**
 * Woostify block helper functions.
 *
 * @package Woostify Block
 */

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'woostify_block_version' ) ) {
	/**
	 * Woostify block Version
	 *
	 * @return string Woostify Block Version.
	 */
	function woostify_block_version() {
		return esc_attr( WOOSTIFY_BLOCK_VERSION );
	}
}

if ( ! function_exists( 'woostify_block_regitser_block_type' ) ) {
	/**
	 * Register block
	 *
	 * @param string $block Block slug.
	 * @param array  $options Block options.
	 */
	function woostify_block_regitser_block_type( $block, $options = array() ) {
		register_block_type(
			'woostify-block/' . $block,
			array_merge(
				array(
					'editor_script' => 'woostify_block-blocks-scripts',
					'editor_style'  => 'woostify_block-editor-style',
					'style'         => 'woostify_block-front-end-style',
				),
				$options
			)
		);
	}
}

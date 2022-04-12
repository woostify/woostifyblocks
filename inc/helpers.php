<?php
/**
 * Woostify block helper functions.
 *
 * @package woostify-block
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
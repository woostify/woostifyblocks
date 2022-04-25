<?php
/**
 * Main Woostify Conversion Block Gloval Settings Class
 *
 * @package  Woostify Conversion Block
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WCB_Global_Settings' ) ) {
    /**
     * WCB Global Settings class
     */
    class WCB_Global_Settings {
        /**
         * Instance
         *
         * @var instance
         */
        private static $instance;

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
         * Initialize
         */
        function __construct() {
            // Register settings.
            add_action( 'init', array( $this, 'register_settings' ) );
        }

        /**
         * Register the settings we need for global settings.
         *
         * @return void
         */
        public function register_settings() {
            register_setting(
                'wcb_global_settings',
                'wcb_global_colors',
                array(
                    'type' => 'array',
                    'sanitize_callback' => array( $this, 'sanitize_array_setting' ),
                    'show_in_rest' => array(
                        'schema' => array(
                            'items' => array(
                                'type' => 'array',
                                'items' => array(
                                    'type' => 'object',
                                    'properties' => array(
                                        'name' => array(
                                            'type' => 'string',
                                        ),
                                        'slug' => array(
                                            'type' => 'string',
                                        ),
                                        'color' => array(
                                            'type' => 'string',
                                        ),
                                        'rgb' => array(
                                            'type' => 'string',
                                        ),
                                    )
                                )
                            )
                        )
                    ),
                    'default' => '',
                )
            );

            $typo_schema = array(
                'type' => 'object',
                'properties' => array(
                    "fontFamily" => array(
                        "type" => "string"
                    ),
                    "fontWeight" => array(
                        "type" => "string"
                    ),
                    "textTransform" => array(
                        "type" => "string"
                    ),
                    "fontStyle" => array(
                        "type" => "string"
                    ),
                    "lineHeight" => array(
                        "type" => "number"
                    ),
                    "lineHeightTablet" => array(
                        "type" => "number"
                    ),
                    "lineHeightMobile" => array(
                        "type" => "number"
                    ),
                    "lineHeightUnit" => array(
                        "type" => "string"
                    ),
                    "lineHeightUnitTablet" => array(
                        "type" => "string"
                    ),
                    "lineHeightUnitMobile" => array(
                        "type" => "string"
                    ),
                    "fontSize" => array(
                        "type" => "number"
                    ),
                    "fontSizeTablet" => array(
                        "type" => "number"
                    ),
                    "fontSizeMobile" => array(
                        "type" => "number"
                    ),
                    "fontSizeUnit" => array(
                        "type" => "string"
                    ),
                    "fontSizeUnitTablet" => array(
                        "type" => "string"
                    ),
                    "fontSizeUnitMobile" => array(
                        "type" => "string"
                    ),
                    "letterSpacing" => array(
                        "type" => "number"
                    ),
                    "letterSpacingTablet" => array(
                        "type" => "number"
                    ),
                    "letterSpacingMobile" => array(
                        "type" => "number"
                    )
                )
            );
            register_setting(
                'wcb_global_settings',
                'wcb_global_typography',
                array(
                    'type' => 'array',
                    'sanitize_callback' => array( $this, 'sanitize_array_setting' ),
                    'show_in_rest' => array(
                        'schema' => array(
                            'items' => array(
                                'type' => 'object',
                                'properties' => array(
                                    'h1' => $typo_schema,
                                    'h2' => $typo_schema,
                                    'h3' => $typo_schema,
                                    'h4' => $typo_schema,
                                    'h5' => $typo_schema,
                                    'h6' => $typo_schema
                                )
                            )
                        )
                    ),
                    'default' => '',
                )
            );
        }

        public function sanitize_array_setting( $input ) {
            return ! is_array( $input ) ? array( array() ) : $input;
        }
    }

    WCB_Global_Settings::get_instance();
}
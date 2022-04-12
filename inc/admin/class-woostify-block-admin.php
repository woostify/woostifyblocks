<?php
/**
 * Woostify Block Admin Class
 *
 * @package  woostify-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Woostify_Block_Admin' ) ) :
    class Woostify_Block_Admin {
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

        // Setup.
        public function __construct() {
			add_action( 'admin_menu', array( $this, 'register_menu' ) );
            add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		}

        /**
         * Enqueue admin scripts
         *
         * @return void
         */
        public function enqueue_scripts() {
            wp_enqueue_style(
                'woostify-block-general',
                WOOSTIFY_BLOCK_URI . 'assets/css/admin/general.css',
                array(),
                woostify_block_version()
            );
            wp_enqueue_style(
                'woostify-block-dashboard',
                WOOSTIFY_BLOCK_URI . 'assets/css/admin/dashboard.css',
                array(),
                woostify_block_version()
            );
        }

        /**
		 * Creates the dashboard page
		 *
		 * @see  add_theme_page()
		 */
        public function register_menu() {
            // Filter to remove Admin menu.
			$admin_menu = apply_filters( 'woostify_block_options_admin_menu', false );
			if ( true === $admin_menu ) {
				return;
			}

			add_menu_page( 'Woostify Block Dashboard', 'Woostify Block', 'manage_options', 'woostifyblock', array( $this, 'dashboard_screen' ), '', 60 );
            // Menu Dashboard.
            add_submenu_page( 'woostifyblock', 'Woostify Block Dashboard', 'Dashboard', 'manage_options', 'woostifyblock');
            // Menu Settings.
            add_submenu_page( 'woostifyblock', 'Woostify Block Settings', 'Settings', 'manage_options', 'woostifyblock-settings', array( $this, 'settings_screen' ) );
        }

        public function dashboard_header_section() {
            $plugin_url = 'https://woostify.com';
            ?>
                <section class="woostify-welcome-nav">
                    <div class="woostify-welcome-container">
                        <a class="woostify-welcome-theme-brand" href="<?php echo esc_url( $plugin_url ); ?>" target="_blank" rel="noopener">
                            <img class="woostify-welcome-theme-icon" src="<?php echo esc_url( WOOSTIFY_BLOCK_URI . 'assets/images/logo.svg' ); ?>" alt="<?php esc_attr_e( 'Woostify Block Logo', 'woostify-block' ); ?>">
                            <span class="woostify-welcome-theme-title"><?php esc_html_e( 'Woostify', 'woostify-block' ); ?></span>
                        </a>

                        <span class="woostify-welcome-theme-version"><?php echo esc_html( woostify_block_version() ); ?></span>
                    </div>
                </section>
            <?php
        }

        public function dashboard_screen() {
            ?>
            <div class="woostify-options-wrap admin-welcome-screen">
                <?php $this->dashboard_header_section(); ?>
            </div>
            <?php
        }

        public function settings_screen() {
            ?>
            <div class="woostify-options-wrap woostify-featured-setting woostify-block-setting" data-id="settings" data-nonce="<?php echo esc_attr( wp_create_nonce( 'woostify-block-setting-nonce' ) ); ?>">
                <?php $this->dashboard_header_section(); ?>
                <div class="wrap woostify-settings-box">
					<div class="woostify-welcome-container">
						<div class="woostify-notices-wrap">
							<h2 class="notices" style="display:none;"></h2>
						</div>
                        <div class="woostify-settings-content">
							<div class="woostify-settings-section-head">
								<h4 class="woostify-settings-section-title">
									<?php esc_html_e( 'Settings', 'woostify-block' ); ?>
                                </h4>
							</div>
                            <div class="woostify-settings-section-content">
                                <table class="form-table woostify-setting-tab-content">
                                    <tbody>
                                        <tr>
                                            <th>CSS Print Method</th>
                                            <td>
                                                <select name="wb_css_print_mode" id="wb_css_print_mode">
                                                    <option value="file" selected><?php esc_html_e( 'External File', 'woostify-block' ); ?></option>
                                                    <option value="inline"><?php esc_html_e( 'Inline Embedding', 'woostify-block' ); ?></option>
                                                </select>
                                                <p class="woostify-setting-description"><?php esc_html_e( 'Use external CSS files for all generated stylesheets. Choose this setting for better performance (recommended).', 'woostify-block' ); ?></p>
                                                <button type="button" class="button button-secondary button-large" style="margin-top:1em"><?php esc_html_e( 'Regenerate CSS Files', 'woostify-block' ); ?></button>
                                                <p class="woostify-setting-description"><?php esc_html_e( 'Force your external CSS files to regenerate next time their page is loaded.', 'woostify-block' ); ?></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="woostify-settings-section-footer position-sticky">
                                <span class="save-options button button-primary"><?php esc_html_e( 'Save', 'woostify-block' ); ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php
        }

    }

    Woostify_Block_Admin::get_instance();

endif;

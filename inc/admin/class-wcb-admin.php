<?php
/**
 * Woostify Conversion Block Admin Class
 *
 * @package  Woostify Conversion Block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WCB_Admin' ) ) :
	class WCB_Admin {
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

			add_action( 'wp_ajax_save_settings_options', array( $this, 'save_options' ) );
		}

		/**
		 * Enqueue admin scripts
		 *
		 * @return void
		 */
		public function enqueue_scripts() {
			wp_enqueue_style(
				'wcb-general',
				WOOSTIFY_BLOCK_URI . 'assets/css/admin/general.css',
				array(),
				wcb_version()
			);
			wp_enqueue_style(
				'wcb-dashboard',
				WOOSTIFY_BLOCK_URI . 'assets/css/admin/dashboard.css',
				array(),
				wcb_version()
			);

            wp_enqueue_script(
                'wcb-edit-screen',
                WOOSTIFY_BLOCK_URI . 'assets/js/edit-screen.js',
                array(),
                wcb_version(),
                true
            );

            $data = array(
                'save'          => __( 'Save', 'wcb' ),
                'saving'        => __( 'Saving', 'wcb' ),
                'saved'         => __( 'Saved', 'wcb' ),
                'saved_success' => __( 'Saved successfully', 'wcb' ),
            );

            wp_localize_script(
                'wcb-edit-screen',
                'wcb_edit_screen',
                $data
            );
		}

		public function save_options() {
			if ( ! current_user_can( 'edit_theme_options' ) ) {
				wp_send_json_error();
			}

			$setting_id = isset( $_POST['setting_id'] ) ? sanitize_text_field( wp_unslash( $_POST['setting_id'] ) ) : '';
			$nonce      = 'wcb-' . $setting_id . '-nonce';
			check_ajax_referer( $nonce, 'security_nonce' );

			$options = isset( $_POST['options'] ) ? json_decode( sanitize_text_field( wp_unslash( $_POST['options'] ) ), true ) : array();

			if ( ! empty( $options ) ) {
				$array = array();

				foreach ( $options as $k => $v ) {
					$value = sanitize_textarea_field( wp_unslash( $v ) );

					if ( false !== strpos( $k, '[]' ) ) {
						array_push( $array, $value );

						// Get option name.
						$name = strstr( $k, '[', true ) . '[]';

						update_option( $name, implode( '@_sn', $array ) );
					} else {
						update_option( $k, $value );
					}
				}
			}

			wp_send_json_success();
		}

		/**
		 * Creates the dashboard page
		 *
		 * @see  add_theme_page()
		 */
		public function register_menu() {
			// Filter to remove Admin menu.
			$admin_menu = apply_filters( 'woostify_conversion_block_options_admin_menu', false );
			if ( true === $admin_menu ) {
				return;
			}

			add_menu_page( 'Woostify Conversion Block Dashboard', 'Woostify Conversion Block', 'manage_options', 'wcb', array( $this, 'dashboard_screen' ), '', 60 );
			// Menu Dashboard.
			add_submenu_page( 'wcb', 'Woostify Conversion Block Dashboard', 'Dashboard', 'manage_options', 'wcb' );
			// Menu Settings.
			add_submenu_page( 'wcb', 'Woostify Conversion Block Settings', 'Settings', 'manage_options', 'wcb-settings', array( $this, 'settings_screen' ) );
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

						<span class="woostify-welcome-theme-version"><?php echo esc_html( wcb_version() ); ?></span>
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
			$print_mode = get_option( 'wcb_settings_css_print_mode', 'file' );
			?>
			<div class="woostify-options-wrap woostify-featured-setting woostify-block-setting" data-id="settings" data-nonce="<?php echo esc_attr( wp_create_nonce( 'wcb-settings-nonce' ) ); ?>">
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
												<select name="wcb_settings_css_print_mode" id="wcb_settings_css_print_mode">
													<option value="file" <?php selected( $print_mode, 'file' ); ?>><?php esc_html_e( 'External File', 'woostify-block' ); ?></option>
													<option value="inline" <?php selected( $print_mode, 'inline' ); ?>><?php esc_html_e( 'Inline Embedding', 'woostify-block' ); ?></option>
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

	WCB_Admin::get_instance();

endif;

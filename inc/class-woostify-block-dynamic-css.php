<?php
/**
 * Dynamic Css Class
 *
 * @package Woostify Block
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'Woostify_Dynamic_Css' ) ) :
	class Woostify_Block_Dynamic_Css {
		/**
		 * Instance
		 *
		 * @var instance
		 */
		private static $instance;

		public $stylesheet_id;

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		public function __construct() {
			// Replace with the ID of your own stylesheet.
			// Usually defined in your theme.
			$this->stylesheet_id = 'post';

			$this->add_options();

			add_action( 'save_post', array( $this, 'reset_post_transient' ) );
			add_action( 'save_post', array( $this, 'post_update_option' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_dynamic_css' ) );

		}

		/**
		 * get the current page ID.
		 */
		public function page_id() {

			global $post;

			$id = $post->ID;
			$id = ( ! is_singular() ) ? false : $id;
			$id = ( function_exists( 'is_shop' ) && is_shop() ) ? get_option( 'woocommerce_shop_page_id' ) : $id;
			$id = ( is_home() ) ? get_option( 'page_for_posts' ) : $id;

			return $id;

		}

        /**
         * Determine if we're using file mode or inline mode.
         */
        public function mode() {

            // Check if we're using file mode or inline mode.
            // Default to file mode and fallback to inline if file mode is not possible.
            $mode = 'file';

            // Additional checks for file mode.
            if ( 'file' == $mode && $this->needs_update() ) {
                // Only allow processing 1 file every 5 seconds.
                $current_time = (int) time();
                $last_time    = (int) get_option( 'dynamic_css_time' );
                if ( 5 <= ( $current_time - $last_time ) ) {
                    // Attempt to write to the file.
                    $mode = ( $this->can_write() && $this->make_css() ) ? 'file' : 'inline';
                    // Does again if the file exists.
                    if ( 'file' == $mode ) {
                        $mode = ( file_exists( $this->file( 'path' ) ) ) ? 'file' : 'inline';
                    }
                }
            }

            return $mode;

        }

        /**
         * Enqueue the dynamic CSS.
         */
        public function enqueue_dynamic_css() {

            if ( 'file' == $this->mode() ) {
                // Yay! we're using a file for our CSS, so enqueue it.
                wp_enqueue_style( 'dynamic-css', $this->file( 'uri' ) );
                // Bah, no file mode... add inline to the head.
            } elseif ( 'inline' == $this->mode() ) {
                wp_add_inline_style( $this->stylesheet_id, apply_filters( 'dynamic_css', '' ) );
            }

        }

        public function make_css() {

            global $wp_filesystem;
    
            // Initialize the Wordpress filesystem.
            if ( empty( $wp_filesystem ) ) {
                require_once( ABSPATH . '/wp-admin/includes/file.php' );
                WP_Filesystem();
            }
    
            $content = "/********* Compiled - Do not edit *********/\n" . apply_filters( 'dynamic_css', '' );
    
            // Take care of domain mapping
            if ( defined( 'DOMAIN_MAPPING' ) && DOMAIN_MAPPING ) {
    
                if ( function_exists( 'domain_mapping_siteurl' ) && function_exists( 'get_original_url' ) ) {
    
                    $mapped_domain   = domain_mapping_siteurl( false );
                    $mapped_domain   = str_replace( 'https://', '//', $domain_mapping );
                    $mapped_domain   = str_replace( 'http://', '//', $mapped_domain );
    
                    $original_domain = get_original_url( 'siteurl' );
                    $original_domain = str_replace( 'https://', '//', $original_domain );
                    $original_domain = str_replace( 'http://', '//', $original_domain );
    
                    $content = str_replace( $original_domain, $mapped_domain, $content );
    
                }
    
            }
    
            // Strip protocols
            $content = str_replace( 'https://', '//', $content );
            $content = str_replace( 'http://', '//', $content );
    
            if ( is_writable( $this->file( 'path' ) ) || ( ! file_exists( $this->file( 'path' ) ) && is_writable( dirname( $this->file( 'path' ) ) ) ) ) {
    
                if ( ! $wp_filesystem->put_contents( $this->file( 'path' ), $content, FS_CHMOD_FILE ) ) {
    
                    // Fail!
                    return false;
    
                } else {
    
                    // Update the opion in the db so that we know the css for this post has been successfully generated.
                    $page_id = ( $this->page_id() ) ? $this->page_id() : 'global';
                    $option  = get_option( 'dynamic_css_posts', array() );
                    $option[$page_id] = true;
                    update_option( '_dynamic_css_posts', $option );
                    // Update the 'dynamic_css_time' option.
                    $this->update_saved_time();
    
                    // Success!
                    return true;
    
                }
    
            }
    
        }

		/**
        * Determines if the CSS file is writable.
        */
        public function can_write() {

            global $blog_id;

            // Get the upload directory for this site.
            $upload_dir = wp_upload_dir();
            // If this is a multisite installation, append the blogid to the filename
            $blog_id = ( is_multisite() && $blog_id > 1 ) ? '_blog-' . $blog_id : null;
            $page_id = ( $this->page_id() ) ? $this->page_id() : 'global';

            $file_name   = '/dynamic-css' . $blog_id . '-' . $page_id . '.css';
            $folder_path = $upload_dir['basedir'] . DIRECTORY_SEPARATOR . 'dynamic-styles';

            // Does the folder exist?
            if ( file_exists( $folder_path ) ) {
                // Folder exists, but is the folder writable?
                if ( ! is_writable( $folder_path ) ) {
                    // Folder is not writable.
                    // Does the file exist?
                    if ( ! file_exists( $folder_path . $file_name ) ) {
                        // File does not exist, therefore it can't be created
                        // since the parent folder is not writable.
                        return false;
                    } else {
                        // File exists, but is it writable?
                        if ( ! is_writable( $folder_path . $file_name ) ) {
                            // Nope, it's not writable.
                            return false;
                        }
                    }
                } else {
                    // The folder is writable.
                    // Does the file exist?
                    if ( file_exists( $folder_path . $file_name ) ) {
                        // File exists.
                        // Is it writable?
                        if ( ! is_writable( $folder_path . $file_name ) ) {
                            // Nope, it's not writable
                            return false;
                        }
                    }
                }
            } else {
                // Can we create the folder?
                // returns true if yes and false if not.
                return wp_mkdir_p( $folder_path );
            }

            // all is well!
            return true;

        }


        /**
        * Gets the css path or url to the stylesheet
        *
        * @var 	string 	path/url
        *
        */
        public function file( $target = 'path' ) {

            global $blog_id;

            // Get the upload directory for this site.
            $upload_dir = wp_upload_dir();
            // If this is a multisite installation, append the blogid to the filename
            $blog_id = ( is_multisite() && $blog_id > 1 ) ? '_blog-' . $blog_id : null;
            $page_id = ( $this->page_id() ) ? $this->page_id() : 'global';

            $file_name   = 'dynamic-css' . $blog_id . '-' . $page_id . '.css';
            $folder_path = $upload_dir['basedir'] . DIRECTORY_SEPARATOR . 'dynamic-styles';

            // The complete path to the file.
            $file_path = $folder_path . DIRECTORY_SEPARATOR . $file_name;
            // Get the URL directory of the stylesheet
            $css_uri_folder = $upload_dir['baseurl'];

            $css_uri = trailingslashit( $css_uri_folder ) . 'dynamic-styles/' . $file_name;

            // Take care of domain mapping
            if ( defined( 'DOMAIN_MAPPING' ) && DOMAIN_MAPPING ) {
                if ( function_exists( 'domain_mapping_siteurl' ) && function_exists( 'get_original_url' ) ) {
                    $mapped_domain   = domain_mapping_siteurl( false );
                    $original_domain = get_original_url( 'siteurl' );
                    $css_uri = str_replace( $original_domain, $mapped_domain, $css_uri );
                }
            }
            // Strip protocols
            $css_uri = str_replace( 'https://', '//', $css_uri );
            $css_uri = str_replace( 'http://', '//', $css_uri );

            if ( 'path' == $target ) {
                return $file_path;
            } elseif ( 'url' == $target || 'uri' == $target ) {
                $timestamp = ( file_exists( $file_path ) ) ? '?timestamp=' . filemtime( $file_path ) : '';
                return $css_uri . $timestamp;
            }

        }
        /**
         * Reset ALL CSS transient caches.
         */
        public function reset_all_transients() {

            global $wpdb;
            // Build the query to delete all dynamic-css transients and execute the required SQL
            $sql = "DELETE FROM $wpdb->options WHERE option_name LIKE '_transient_dynamic_css_%'";
            $clean = $wpdb->query( $sql );

        }

        /**
         * Reset the dynamic CSS transient for a post.
         */
        public function reset_post_transient( $post_id ) {
            delete_transient( 'dynamic_css_' . $post_id );
        }

        /**
         * Create settings.
         */
        public function add_options() {
            /**
             * The 'dynamic_css_posts' option will hold an array of posts that have had their css generated.
             * We can use that to keep track of which pages need their CSS to be recreated and which don't.
             */
            add_option( 'dynamic_css_time', array(), '', 'yes' );
            /**
             * The 'dynamic_css_time' option holds the time the file writer was last used.
             */
            add_option( 'dynamic_css_time', time(), '', 'yes' );
        }

        /**
         * Update the dynamic_css_posts option when a post is saved.
         */
        public function post_update_option( $post_id ) {
            $option = get_option( 'dynamic_css_posts', array() );
            $option[$post_id] = false;
            update_option( 'dynamic_css_posts', $option );
        }

        /**
         * Update the dynemic_css_posts option when the theme options are saved.
         */
        public function global_reset_option() {
            update_option( 'dynamic_css_posts', array() );
        }

        /**
         * Do we need to update the CSS file?
         */
        public function needs_update() {
            $option  = get_option( 'dynamic_css_posts', array() );
            $page_id = ( $this->page_id() ) ? $this->page_id() : 'global';

            // If the CSS file does not exist then we definitely need to regenerate the CSS.
            if ( ! file_exists( $this->file( 'path' ) ) ) {
                return true;
            }

            return ( ! isset( $option[$page_id] ) || ! $option[$page_id] ) ? true : false;

        }

        /**
         * Update the 'dynamic_css_time' option.
         */
        public function update_saved_time() {
            update_option( 'dynamic_css_time', time() );
        }

	}

    Woostify_Block_Dynamic_Css::get_instance();
endif;

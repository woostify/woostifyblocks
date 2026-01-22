<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
//============================================= block 1 ===============================================================
function boostify_blocks_block_tabs_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_tabs_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-map/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_map_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_map_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-map/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_image_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_image_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-image/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_icon_box_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_icon_box_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-icon-box/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_counter_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_icon_box_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-icon-box/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}


//============================================= block 1 ===============================================================
function boostify_blocks_block_team_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_team_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-team/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_faq_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     // can js de chay accoirdion
    //     wp_enqueue_script('wcb_block_faq_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-faq/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}
//============================================= block 1 ===============================================================
function boostify_blocks_block_cta_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_cta_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-cta/FrontendStyles.js', array('wp-element'), null, true);
    // }

    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_buttons_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_buttons__renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-buttons/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();

    return $content;
}
//============================================= block 1 ===============================================================
function boostify_blocks_block_button_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_button__renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-button/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();

    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_icon_unused_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_button__renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-button/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();

    return $content;
}
//============================================= block 1 ===============================================================
function boostify_blocks_block_testimonials_render_callback($attributes, $content)
{
    if (!is_admin()) {
        // Can js de run Slick slider
        wp_enqueue_style('wcb-slick-main', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/slick/slick.css');
        wp_enqueue_style('wcb-slick-theme', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/slick/slick-theme.css');

        // tam thoi dong lai, di goi o day dan den no bi day xuong footeresss..., hien tai dang tam thoi goi o enqueue file
        // wp_enqueue_script('wcb-slicklib', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/slick/slick.min.js', ['jquery'], "1.8.0", false);
    }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}



//============================================= block 1 ===============================================================
function boostify_blocks_block_form_render_callback($attributes, $content)
// LƯU Ý - PHẦN NÀY CHƯA CÓ DỮ LIỆU CHO RECAPTCHA KEY, CẦN CẬP NHẬT SAU KHI CÓ DỮ LIỆU
// phan nay can js vi chay ajax va reCaptcha
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_form__renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-form/FrontendStyles.js', ["wp-element", "jquery"], null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();

    $wcb_blocks_settings_options = get_option('boostify_blocks_settings_options');
    ob_start();
    echo wp_kses_post($content);
?>
<?php
    // Register reCAPTCHA scripts
    if (boolval($attributes['general_gg_recaptcha']['enableReCaptcha'] ?? true)) {
        $recaptcha_url = 'https://www.google.com/recaptcha/api.js';
        $handle = 'google-recaptcha-v2';
        
        if (($attributes['general_gg_recaptcha']['version'] ?? 'v2') === 'v3') {
            $site_key = $wcb_blocks_settings_options['reCAPTCHA_v3_site_key'] ?? "";
            $recaptcha_url = add_query_arg('render', $site_key, 'https://www.google.com/recaptcha/api.js');
            $handle = 'google-recaptcha-v3';
        }

        wp_enqueue_script($handle, $recaptcha_url, [], null, true);
        
        // Add async defer attributes
        add_filter('script_loader_tag', function($tag, $handle_check) use ($handle) {
            if ($handle === $handle_check) {
                return str_replace(' src', ' async defer src', $tag);
            }
            return $tag;
        }, 10, 2);
    }

    return ob_get_clean();
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_heading_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_heading__renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-heading/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}


//============================================= block 1 ===============================================================
function boostify_blocks_block_container_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_container__renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-container/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}


if (!function_exists('boostify_blocks_enqueue_script_block_commoncss_frontend_styles')) :
    function boostify_blocks_enqueue_script_block_commoncss_frontend_styles($deps = ['wp-element', 'jquery'])
    {
        if (!is_admin()) {
            wp_enqueue_script('wcb_block_commoncss_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-common-css/FrontendStyles.js', $deps, BOOSTIFY_BLOCKS_VERSION, true);
        }
    }
endif;

//============================================= block 1 ===============================================================
function boostify_blocks_block_countdown_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_icon_box_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-icon-box/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_icon_list_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_icon_box_renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-icon-box/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_icon_child_render_callback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_button__renderCallbackScript', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-button/FrontendStyles.js', array('wp-element'), null, true);
    // }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

function boostify_blocks_block_icon_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

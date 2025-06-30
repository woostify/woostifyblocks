<?php
//============================================= block 1 ===============================================================
function wcb_block_tabs_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_tabs_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-map/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_map_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_map_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-map/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_image_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_image_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-image/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_icon_box_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_icon_box_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-icon-box/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_counter_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_icon_box_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-icon-box/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}


//============================================= block 1 ===============================================================
function wcb_block_team_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_team_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-team/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_faq_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     // can js de chay accoirdion
    //     wp_enqueue_script('wcb_block_faq_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-faq/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}
//============================================= block 1 ===============================================================
function wcb_block_cta_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_cta_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-cta/FrontendStyles.js', array('wp-element'), null, true);
    // }

    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_buttons__renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_buttons__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-buttons/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();

    return $content;
}
//============================================= block 1 ===============================================================
function wcb_block_button__renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_button__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-button/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();

    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_icon__renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_button__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-button/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();

    return $content;
}
//============================================= block 1 ===============================================================
function wcb_block_testimonials__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        // Can js de run Slick slider
        wp_enqueue_style('wcb-slick-main', plugin_dir_url(WCB_FILE) . 'public/slick/slick.css');
        wp_enqueue_style('wcb-slick-theme', plugin_dir_url(WCB_FILE) . 'public/slick/slick-theme.css');

        // tam thoi dong lai, di goi o day dan den no bi day xuong footeresss..., hien tai dang tam thoi goi o enqueue file
        // wp_enqueue_script('wcb-slicklib', plugin_dir_url(WCB_FILE) . 'public/slick/slick.min.js', ['jquery'], "1.8.0", false);
    }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}



//============================================= block 1 ===============================================================
function wcb_block_form__renderCallback($attributes, $content)
// LƯU Ý - PHẦN NÀY CHƯA CÓ DỮ LIỆU CHO RECAPTCHA KEY, CẦN CẬP NHẬT SAU KHI CÓ DỮ LIỆU
// phan nay can js vi chay ajax va reCaptcha
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_form__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-form/FrontendStyles.js', ["wp-element", "jquery"], null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();

    $wcb_blocks_settings_options = get_option('wcb_blocks_settings_options');
    ob_start();
    echo $content;
?>
    <!-- general_gg_recaptcha.enableReCaptcha -->
    <?php if (boolval($attributes['general_gg_recaptcha']['enableReCaptcha'] ?? true)) : ?>

        <!-- V2 -->
        <?php if (($attributes['general_gg_recaptcha']['version'] ?? 'v2') === 'v2') : ?>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        <?php endif; ?>

        <!-- V3 -->
        <?php if (($attributes['general_gg_recaptcha']['version'] ?? 'v2') === 'v3') : ?>
            <script src="https://www.google.com/recaptcha/api.js?render=<?php echo esc_attr($wcb_blocks_settings_options['reCAPTCHA_v3_site_key'] ?? ""); ?>" async defer></script>
        <?php endif; ?>

    <?php endif; ?>

<?php
    return ob_get_clean();
}

//============================================= block 1 ===============================================================
function wcb_block_heading__renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_heading__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-heading/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}


//============================================= block 1 ===============================================================
function wcb_block_container__renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_container__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-container/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}


if (!function_exists('wp_enqueue_script__block_commoncss_frontend_styles')) :
    function wp_enqueue_script__block_commoncss_frontend_styles($deps = ['wp-element', 'jquery'])
    {
        if (!is_admin()) {
            wp_enqueue_script('wcb_block_commoncss_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-common-css/FrontendStyles.js', $deps, WCB_VERSION, true);
        }
    }
endif;

//============================================= block 1 ===============================================================
function wcb_block_countdown_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_icon_box_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-icon-box/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_icon_list_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_icon_box_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-icon-box/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_icon_child_renderCallback($attributes, $content)
{
    // if (!is_admin()) {
    //     wp_enqueue_script('wcb_block_button__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-button/FrontendStyles.js', array('wp-element'), null, true);
    // }
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

function wcb_block_icon_renderCallback($attributes, $content)
{
    wp_enqueue_script__block_commoncss_frontend_styles();
    return $content;
}

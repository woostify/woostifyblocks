<?php
//============================================= block 1 ===============================================================
function wcb_block_faq_renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_faq_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-faq/FrontendStyles.js', array('wp-element'), null, true);
    }
    return $content;
}
//============================================= block 1 ===============================================================
function wcb_block_cta_renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_cta_renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-cta/FrontendStyles.js', array('wp-element'), null, true);
    }
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_buttons__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_buttons__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-buttons/FrontendStyles.js', array('wp-element'), null, true);
    }
    return $content;
}
//============================================= block 1 ===============================================================
function wcb_block_button__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_button__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-button/FrontendStyles.js', array('wp-element'), null, true);
    }
    return $content;
}
//============================================= block 1 ===============================================================
function wcb_block_testimonials__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_testimonials__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-testimonials/FrontendStyles.js', array('wp-element'), null, true);
    }
    return $content;
}


//============================================= block 1 ===============================================================
function wcb_block_form__renderCallback($attributes, $content)
// LƯU Ý - PHẦN NÀY CHƯA CÓ DỮ LIỆU CHO RECAPTCHA KEY, CẦN CẬP NHẬT SAU KHI CÓ DỮ LIỆU
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_form__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-form/FrontendStyles.js', array('wp-element'), null, true);
    }
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
            <script src="https://www.google.com/recaptcha/api.js?render=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" async defer></script>
        <?php endif; ?>

    <?php endif; ?>

<?php
    return ob_get_clean();
}

//============================================= block 1 ===============================================================
function wcb_block_heading__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_heading__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-heading/FrontendStyles.js', array('wp-element'), null, true);
    }
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_container_box__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_container_box__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-container-box/FrontendStyles.js', array('wp-element'), null, true);
    }
    return $content;
}

//============================================= block 1 ===============================================================
function wcb_block_container__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_container__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-container/FrontendStyles.js', array('wp-element'), null, true);
    }
    return $content;
}

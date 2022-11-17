<?php

//============================================= block 1 ===============================================================
function wcb_block_form__renderCallback($attributes, $content)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_form__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-form/FrontendStyles.js', array('wp-element'), null, true);
    }
    return $content;
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

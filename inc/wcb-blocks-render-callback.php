<?php

//============================================= block 1 ===============================================================
function wcb_render_callback_block_1($attributes)
{
    die;
    ob_start();
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>">
        TEST BLOCK 1
    </div>
<?php
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}

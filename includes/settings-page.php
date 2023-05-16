<?php
if (!function_exists('wcb_get_wcb_block_type_list') || !function_exists('get_option')) {
    return;
}
// 
$wcb_blocks_enable_disable_options = get_option('wcb_blocks_enable_disable_options');
$wcb_blocks_settings_options = get_option('wcb_blocks_settings_options');
$allWcbBlockList = wcb_get_wcb_block_type_list();

// 
$props = [
    'wcb_blocks_list'                   => $allWcbBlockList,
    'wcb_blocks_enable_disable_options' => $wcb_blocks_enable_disable_options,
    'wcb_blocks_settings_options'       => $wcb_blocks_settings_options,
    'wcb_layout_global_settings'        => wcb__get_layout_global_settings(),
];

?>
<div id="wcb-dasboard-root" class="" data-props="<?php echo esc_attr(json_encode($props)); ?>">
</div>
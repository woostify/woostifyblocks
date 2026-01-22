<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
if (!function_exists('boostify_blocks_get_block_type_list') || !function_exists('get_option')) {
    return;
}
// 
$boostify_blocks_enable_disable_options = get_option('wcb_blocks_enable_disable_options');
$boostify_blocks_settings_options = get_option('wcb_blocks_settings_options');
$boostify_blocks_all_block_list = boostify_blocks_get_block_type_list();

// 
$boostify_blocks_props = [
    'wcb_blocks_list'                   => $boostify_blocks_all_block_list,
    'wcb_blocks_enable_disable_options' => $boostify_blocks_enable_disable_options,
    'wcb_blocks_settings_options'       => $boostify_blocks_settings_options,
    'wcb_layout_global_settings'        => boostify_blocks_get_layout_global_settings(),
];

?>
<div id="wcb-dasboard-root" class="" data-props="<?php echo esc_attr(json_encode($boostify_blocks_props)); ?>">
</div>
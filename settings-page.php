<?php
// ./tailwindcss -o settings-page-out.css --watch  
// ./tailwindcss -o settings-page-out.css --minify  
$wcb_blocks_enable_disable_options = get_option('wcb_blocks_enable_disable_options');
$wcb_blocks_settings_options = get_option('wcb_blocks_settings_options');
$props = [
    'wcb_blocks_enable_disable_options' => $wcb_blocks_enable_disable_options,
    'wcb_blocks_settings_options'       => $wcb_blocks_settings_options,
]

?>
<div id="wcb-dasboard-root" class="" data-props="<?php echo esc_attr(json_encode($props)); ?>">

</div>
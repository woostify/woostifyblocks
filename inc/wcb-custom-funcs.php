<?php
function wcb_var_dump($value)
{
    echo '<p style="color:red; font-size: 8px; padding: 50px 200px">';
    echo ('-----------start--wcb_var_dump-----------------');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    var_dump($value);
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('-----------end--wcb_var_dump-----------------');
    echo '</p>';
};

function vcb_var_export($value)
{
    echo '<pre style="color:red; font-size: 8px"><code>';
    echo ('-----------start--wcb_var_dump-----------------');
    echo ('-----------start--vcb_var_export-----------------');
    echo ('<br />');
    var_export($value);
    echo ('<br />');
    echo ('-----------end--vcb_var_export-----------------');
    echo '</code></pre>';
};
// 
if (!function_exists('wcb_get_wcb_block_type_list')) :
    function wcb_get_wcb_block_type_list()
    {
        $blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
        $wcbBlockList = [];
        foreach ($blocks as $key => $value) {
            $pos = strpos($key, 'wcb/');
            if ($pos === 0) {
                $wcbBlockList[] = [
                    'name' => $value->name,
                    'title' => $value->title,
                    'category' => $value->category,
                    'icon' => $value->icon,
                    'parent' => $value->parent,
                ];
            }
        }
        return $wcbBlockList;
    };
endif;

// 
if (!function_exists('wcb_get_wcb_block_name_enable_init')) :
    function wcb_get_wcb_block_name_enable_init()
    {
        $blocks = wcb_get_wcb_block_type_list();
        $wcbBlockName = [];
        foreach ($blocks as $key => $value) {
            $wcbBlockName[$value['name']] = 'enabled';
        }

        return $wcbBlockName;
    };
endif;

//
if (!function_exists('wcb_get_default_blocks_settings')) :
    function wcb_get_default_blocks_settings()
    {
        return [
            'media_tablet'              => '768px',
            'media_desktop'             => '1024px',
            'reCAPTCHA_v3_site_key'     => '',
            'reCAPTCHA_v3_secret_key'   => '',
            'reCAPTCHA_v2_site_key'     => '',
            'reCAPTCHA_v2_secret_key'   => '',
            'defaultContentWidth'       => '1140px',
            'containerPadding'          => '10px',
            'enableTemplatesButton'     => true,
            'enableCopyPasteStyles'     => true,
        ];
    }
endif;

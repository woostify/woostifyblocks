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

function wcb_get_wcb_block_name_enable_init()
{
    $blocks = wcb_get_wcb_block_type_list();
    $wcbBlockName = [];
    foreach ($blocks as $key => $value) {
        $wcbBlockName[$value['name']] = 'enabled';
    }

    return $wcbBlockName;
};

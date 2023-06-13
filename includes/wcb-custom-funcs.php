<?php
function wcb_var_dump($value)
{
    echo '<p style="color:red; padding: 50px 200px">';
    echo ('-----------start--wcb_var_dump-----------------');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    var_dump($value);
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('-----------end--wcb_var_dump-----------------');
    echo '</p>';
};

function wcb_var_export($value)
{
    echo '<pre style="color:red;"><code>';
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
                    'description' => $value->description,
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
            'defaultContentWidth'       => '',
            'containerPadding'          => '10px',
            'enableTemplatesButton'     => 'true',
            'enableCopyPasteStyles'     => 'true',
            // new 1
            'customColorPallete'        => [
                ["name" => "white", "color" => "#fff"],
                ["name" => "black", "color" => "#000"],
                ["name" => "blue", "color" => "#00f"],
            ],
        ];
    }
endif;

// 
if (!function_exists("wcb_pagination_bar")) {
    function wcb_pagination_bar($the_query, $attrPagination)
    {
        $nextPreIcons =  [
            "none" => 'None',
            "arrow" => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16px" height="16px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>',
            "chevron" => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16px" height="16px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>',
            "chevron-double" => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16px" height="16px"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>',
        ];

        $icon =  $nextPreIcons[$attrPagination['iconName'] ?? "arrow"] ?? "";
        if ($icon ===  "None") {
            $icon = "";
        }

        $nextText =  $attrPagination['nextText'] ?? "";
        $previousText =  $attrPagination['previousText'] ?? "";

        $nextHtml = !empty($nextText) ? '<span>' . $nextText . '</span>' . $icon : $icon;
        $prevHtml = !empty($previousText) ?  $icon . ' <span>' . $previousText . '</span>'  : $icon;

        $max_page = $attrPagination['pageLimit'] ?? 0;
        $total         = !$max_page || $max_page > $the_query->max_num_pages ? $the_query->max_num_pages : $max_page;

        $big = 999999999; // need an unlikely integer
        $current_page = max(1, get_query_var('paged'));
        echo paginate_links(array(
            'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
            'format' => '?paged=%#%',
            'current' => $current_page,
            'total' => $total,
            'next_text' => $nextHtml,
            'prev_text' => $prevHtml
        ));
    }
}

// 
if (!function_exists("wcb__is_enabled")) :
    function wcb__is_enabled($variable)
    {
        if (!isset($variable)) return null;
        return filter_var($variable, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
    }
endif;


// 
if (!function_exists("wcb__get_layout_global_settings")) :
    function wcb__get_layout_global_settings()
    {
        $wcb_layout_global_settings = wp_get_global_settings(['layout']);
        // IF USING WOOSTIFYBLOCKS THEME
        if (class_exists('Woostify_Customizer')) {
            $customizer = new Woostify_Customizer();
            $options = $customizer->woostify_get_woostify_options();
            // container_width
            if (!empty($options['container_width'] ?? '')) {
                $wcb_layout_global_settings['contentSize'] =  $options['container_width'] . "px";
                $wcb_layout_global_settings['contentSizeOfWoostify'] =  true;
            }
        }

        return $wcb_layout_global_settings;
    }
endif;

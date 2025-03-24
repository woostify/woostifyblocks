<?php
//============================================= block 1 ===============================================================
function wcb_block_posts_grid__renderCallback($attributes, $content, $block)
{

    wp_enqueue_script__block_commoncss_frontend_styles();
    // 

    $DEFAULT_ATTRS = [
        'uniqueId' => 'xxblock-wcb_posts',
        'general_sortingAndFiltering' =>  [
            'queries' =>  [
                'postType'              => 'post',
                'taxonomySlug'          => 'category',
                'taxonomyRestbase'      => 'categories',
                'selectedAuthorId'      => 0,
                'selectedTerms'         =>  array(),
                'numberOfItems'         => 10,
                'order'                 => 'asc',
                'orderBy'               => 'date',
                'maxItems'              => 100,
                'minItems'              => 1,
                'isExcludeCurrentPost' => true,
                'isOffsetStartingPost' => false,
                'offsetPost'            => 0,
            ],
            'emptyMessage' => 'No post found!',
            'numberOfColumn' => 1,
        ],
        'general_postContent' => array(
            'isShowPostContent' => true,
            'contentType' => 'excerpt',
            'excerptWordsNumber' => 16,
        ),
        'general_postMeta' => array(
            'isShowTitle' => true,
            'titleHtmlTag' => 'h4',
            'isShowComment' => true,
            'isShowAuthor' => true,
            'isShowDate' => true,
            'isShowTaxonomy' => true,
            'isShowMetaIcon' => true,
            'isShowTaxonomyIcon' => false,
            'taxonomyPosition' => 'Below featured image',
            'taxonomyDivider' => ', ',
            'taxonomyStyle' => 'Highlighted',
        ),
        'general_postFeaturedImage' => array(
            'isShowFeaturedImage' => true,
            'featuredImageSize' => 'large',
            'featuredImagePosition' => 'top',
            'linkCompleteBox' => true,
        ),
        'general_readmoreLink' => array(
            'isShowReadmore' => true,
            'isOpenInNewTab' => false,
            'text' => 'Read more',
        ),
        'general_pagination' => array(
            'isShowPagination' => true,
            'pageLimit' => 10,
            'previousText' => '',
            'nextText' => '',
            'iconName' => 'arrow',
        ),
        'style_layout' => array(
            'colunmGap' => array(
                'Desktop' => '1.5rem',
            ),
            'rowGap' => array(
                'Desktop' => '1.5rem',
            ),
            'padding' => array(
                'Desktop' => array(
                    'bottom' => '1rem',
                    'top' => '1rem',
                    'left' => '1rem',
                    'right' => '1rem',
                ),
            ),
            'textAlignment' => 'left',
            'backgroundColor' => '',
        ),
        'style_title' => array(
            'typography' => array(
                'fontSizes' => array(
                    'Desktop' => '2rem',
                ),
                'appearance' => array(
                    'key' => 'default',
                    'name' => 'Default',
                    'style' => array(
                        'fontWeight' => '500',
                        'fontStyle' => 'normal',
                    ),
                ),
                'lineHeight' => array(),
                'letterSpacing' => array(),
            ),
            'textColor' => '#171717',
            'marginBottom' => array(
                'Desktop' => '0.5rem',
            ),
        ),
        'style_excerpt' => array(
            'typography' => array(
                'fontSizes' => array(
                    'Desktop' => '1rem',
                ),
                'appearance' => array(
                    'key' => 'default',
                    'name' => 'Default',
                    'style' => array(
                        'fontWeight' => 'normal',
                        'fontStyle' => 'normal',
                    ),
                ),
                'lineHeight' => array(),
                'letterSpacing' => array(),
            ),
            'textColor' => '#737373',
            'marginBottom' => array(
                'Desktop' => '1rem',
            ),
        ),
        'style_taxonomy' => array(
            'typography' => array(
                'fontSizes' => array(
                    'Desktop' => '12px',
                ),
                'appearance' => array(
                    'key' => 'default',
                    'name' => 'Default',
                    'style' => array(
                        'fontWeight' => '500',
                        'fontStyle' => 'normal',
                    ),
                ),
                'textDecoration' => 'none',
                'lineHeight' => array(),
                'letterSpacing' => array(),
            ),
            'textColor' => '#0c4a6e',
            'backgroundColor' => '#f0f9ff',
            'marginBottom' => array(
                'Desktop' => '0.5rem',
            ),
        ),
        'style_meta' => array(
            'authorTypography' => array(
                'fontSizes' => array(
                    'Desktop' => '14px',
                ),
                'appearance' => array(
                    'key' => 'default',
                    'name' => 'Default',
                    'style' => array(
                        'fontWeight' => '500',
                        'fontStyle' => 'normal',
                    ),
                ),
                'textDecoration' => 'none',
                'lineHeight' => array(),
                'letterSpacing' => array(),
            ),
            'dateTypography' => array(
                'fontSizes' => array(
                    'Desktop' => '14px',
                ),
                'appearance' => array(
                    'key' => 'default',
                    'name' => 'Default',
                    'style' => array(
                        'fontWeight' => 'normal',
                        'fontStyle' => 'normal',
                    ),
                ),
                'lineHeight' => array(),
                'letterSpacing' => array(),
            ),
            'authorTextColor' => '#171717',
            'dateTextColor' => '#a3a3a3',
            'marginBottom' => array(
                'Desktop' => '1.5rem',
            ),
        ),
        'style_readmoreLink' => array(
            'colorAndBackgroundColor' => array(
                'Normal' => array(
                    'color' => '#fff',
                    'backgroundColor' => '#0ea5e9',
                ),
                'Hover' => array(
                    'color' => '#fff',
                    'backgroundColor' => '#0284c7',
                ),
            ),
            'typography' => array(
                'fontSizes' => array(
                    'Desktop' => '1rem',
                ),
                'appearance' => array(
                    'key' => 'default',
                    'name' => 'Default',
                    'style' => array(
                        'fontWeight' => 'normal',
                        'fontStyle' => 'normal',
                    ),
                ),
                'lineHeight' => array(),
                'letterSpacing' => array(),
            ),
            'padding' => array(
                'Desktop' => array(
                    'top' => '10px',
                    'left' => '20px',
                    'right' => '20px',
                    'bottom' => '10px',
                ),
            ),
            'border' => array(
                'radius' => array(
                    'Desktop' => '12px',
                    'Tablet' => '12px',
                    'Mobile' => '12px',
                ),
            ),
            'marginBottom' => array(
                'Desktop' => '0px',
            ),
        ),
        'style_pagination' => array(
            'mainStyle' => array(
                'Normal' => array(
                    'color' => '#171717',
                    'backgroundColor' => '#fff',
                    'border' => array(
                        'mainSettings' => array(
                            'color' => '#cbd5e1',
                            'style' => 'solid',
                            'width' => '1px',
                        ),
                        'radius' => array(
                            'Desktop' => '8px',
                        ),
                    ),
                ),
                'Active' => array(
                    'color' => '#fff',
                    'backgroundColor' => '#0ea5e9',
                    'border' => array(
                        'mainSettings' => array(
                            'color' => '#0ea5e9',
                            'style' => 'solid',
                            'width' => '1px',
                        ),
                        'radius' => array(
                            'Desktop' => '8px',
                        ),
                    ),
                ),
            ),
            'marginTop' => array(
                'Desktop' => '2rem',
            ),
            'justifyContent' => 'left',
        ),
        'style_featuredImage' => array(
            'marginBottom' => array(
                'Desktop' => '0px',
            ),
            'backgroundOverlay' => '#FFFFFFE6',
        ),
        'style_border' => array(
            'radius' => array(
                'Desktop' => '11px',
                'Tablet' => '12px',
                'Mobile' => '12px',
            ),
        ),
    ];

    $uniqueId =  $attributes['uniqueId'] ?? "";
    $className =  $attributes['className'] ?? "";
    $align =  $attributes['align'] ?? "";
    if (!empty($align)) {
        $className .= " align" . $align;
    }


    $sortingAndFiltering = isset($attributes["general_sortingAndFiltering"]) ? $attributes["general_sortingAndFiltering"] :  $DEFAULT_ATTRS["general_sortingAndFiltering"];
    $queries =   $sortingAndFiltering["queries"] ?? $DEFAULT_ATTRS["general_sortingAndFiltering"]["queries"];


    $aTermsId = array_map(function ($item) {
        return $item['id'];
    }, $queries["selectedTerms"]);

    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    
    $posts_per_page = $queries["numberOfItems"];
    $offset = $queries["isOffsetStartingPost"] ? $queries["offsetPost"] : ($paged - 1) * $posts_per_page;

    $the_query = new WP_Query([
        'post_type'         => $queries['postType'],
        'author'            => $queries['selectedAuthorId'],
        'tax_query'         => [
            !empty($aTermsId) ? [
                'taxonomy'      => $queries["taxonomySlug"],
                'field'         => 'id',
                'terms'         =>  $aTermsId,
            ] : null
        ],
        'post__not_in'          => boolval($queries["isExcludeCurrentPost"]) ? [get_the_ID()] : [],
        'posts_per_page'        => $queries["numberOfItems"],
        'ignore_sticky_posts'   => true,
        'offset'                => $offset,
        'orderby'               => $queries["orderBy"],
        'order'                 => $queries["order"],
        'paged'                 => $paged
    ]);

    if (!function_exists("wcb_block_posts_grid__render_taxonomy")) {
        function wcb_block_posts_grid__render_taxonomy($queries, $attributes, $modifiedClass = "")
        {
            $isShow = boolval($attributes['general_postMeta']['isShowTaxonomy'] ?? false);
            if (!$isShow) {
                return "";
            }
            $post_taxs = get_the_terms(null, $queries["taxonomySlug"]);
            if (!empty($post_taxs) && !is_wp_error($post_taxs)) :

                $term_links = [];
                foreach ($post_taxs as $term) {
                    $term_links[] = '<a href="' . esc_attr(get_term_link($term->slug, $queries["taxonomySlug"])) . '">' . __($term->name) . '</a>';
                };

                $all_terms = join('', $term_links);
                if ($attributes['general_postMeta']['taxonomyStyle'] === "Normal") {
                    $all_terms = join(', ', $term_links);
                };

                echo '<div class="wcbPostCard__taxonomies wcbPostCard__taxonomies--' . esc_attr($modifiedClass) . esc_attr($attributes['general_postMeta']['taxonomyStyle'] === "Highlighted" ? " wcbPostCard__taxonomies--highlighted" : "") . '">' . __($all_terms) . '</div>';

            endif;
        }
    }

    ob_start();
?>
    <!-- CONTENT FOR RENDER CSSS @EMOTION -->
    <?php echo $content; ?>

    <!-- RENDER FOLLOW BY EDIT.TSX -->
    <div class="wcb-posts-grid__wrap <?php echo esc_attr($uniqueId); ?> <?php echo esc_attr($className); ?>" data-uniqueid="<?php echo esc_attr($uniqueId); ?>">
        <div class="wcb-posts-grid__list-posts">
            <?php if ($the_query->have_posts()) : ?>
                <!-- the loop -->
                <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>

                    <?php
                    $hasFeaturedImage = !empty(get_the_post_thumbnail_url()) && boolval($attributes['general_postFeaturedImage']['isShowFeaturedImage'] ?? true);
                    $featuredImagePosition = $attributes['general_postFeaturedImage']['featuredImagePosition'] ?? "top";
                    $isShowMetaIcon = boolval($attributes['general_postMeta']['isShowMetaIcon'] ?? true);
                    ?>

                    <div class="wcbPostCard wcbPostCard--image-<?php echo esc_attr($featuredImagePosition); ?>">

                        <!-- card - FUll link  -->
                        <a class="wcbPostCard__completeLink" href="<?php echo get_permalink(); ?>"></a>

                        <!-- Post Thumbnail -->
                        <?php if ($hasFeaturedImage) : ?>
                            <div class="wcbPostCard__featuredImage">
                                <?php echo get_the_post_thumbnail(null, $attributes['general_postFeaturedImage']['featuredImageSize'] ?? "post-thumbnail"); ?>

                                <!-- TAXONOMIES  -->
                                <?php if (($attributes['general_postMeta']["isShowTaxonomy"] ?? true) &&
                                    ($attributes['general_postMeta']["taxonomyPosition"] ?? "Inside featured image") === "Inside featured image" &&
                                    $featuredImagePosition !== "background"
                                ) {
                                    wcb_block_posts_grid__render_taxonomy($queries, $attributes, "Insidefeaturedimage");
                                }; ?>

                            </div>
                        <?php endif; ?>
                        <div class="wcbPostCard__featuredImage-overlay"></div>


                        <!-- Post content -->
                        <div class="wcbPostCard__content">

                            <!-- TAXONOMIES ON TOP -->
                            <?php

                            if (($attributes['general_postMeta']['taxonomyPosition'] ?? "Below featured image") === "Below featured image" || !$hasFeaturedImage ||  $featuredImagePosition === 'background') {
                                wcb_block_posts_grid__render_taxonomy($queries, $attributes,);
                            }; ?>

                            <!-- TITLE -->
                            <?php if ($attributes['general_postMeta']['isShowTitle'] ?? true) : ?>
                                <?php echo '<' . ($attributes['general_postMeta']['titleHtmlTag'] ?? "h4") . ' class="wcbPostCard__title" >' ?>
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_title(); ?>
                                </a>
                                <?php echo '</' . ($attributes['general_postMeta']['titleHtmlTag'] ?? "h4") . '>' ?>
                            <?php endif; ?>


                            <?php if ($attributes['general_postContent']['isShowPostContent'] ?? true) : ?>
                                <!-- FULL POST CONTENT -->
                                <?php if (($attributes['general_postContent']['contentType'] ?? "excerpt") === "Full post") {
                                    echo '<div class="wcbPostCard__fullContent">';
                                    echo the_content();
                                    echo '</div>';
                                };  ?>

                                <!-- EXCERPT -->
                                <?php if (($attributes['general_postContent']['contentType'] ?? "excerpt") === "excerpt") {
                                    $excerpt = get_the_excerpt();
                                    $split = explode(" ", $excerpt); //convert string to array
                                    $len = count($split); //get number of words
                                    $words_to_show_first = $attributes['general_postContent']['excerptWordsNumber'] ?? 15; //Word to be dsiplayed first
                                    if ($len > $words_to_show_first) { //check if it's longer the than first part
                                        $firsthalf = array_slice($split, 0, $words_to_show_first);
                                        $output = '<p class="wcbPostCard__excerpt" >';
                                        $output .= implode(' ', $firsthalf);
                                        $output .= esc_html__('...');
                                        $output .= '</p>';
                                    } else {
                                        $output = '<p class="wcbPostCard__excerpt">'  .   $excerpt . '</p>';
                                    }
                                    echo $output;
                                }; ?>
                            <?php endif; ?>




                            <!-- META -->
                            <div class="wcbPostCard__meta">

                                <!-- AUTHOR -->
                                <?php if (boolval($attributes['general_postMeta']['isShowAuthor'] ?? true)) : ?>
                                    <div class="wcbPostCard__meta-author">
                                        <?php if (boolval($attributes['general_postMeta']['isShowMetaIcon'] ?? true)) : ?>
                                            <span class="wcbPostCard__meta-icon wcbPostCard__meta-author">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16px" height="16px">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>

                                            </span>
                                        <?php endif; ?>
                                        <a class="wcbPostCard__meta-author" href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" title="<?php echo esc_attr(get_the_author()); ?>"><?php the_author(); ?></a>
                                    </div>
                                <?php endif; ?>


                                <!-- DATE AND COMMENT -->
                                <div class="wcbPostCard__meta-date-and-comments">

                                    <!-- DATE -->
                                    <?php if (boolval($attributes['general_postMeta']['isShowDate'] ?? true)) : ?>
                                        <span class="wcbPostCard__meta-date">
                                            <?php if ($isShowMetaIcon) : ?>
                                                <span class="wcbPostCard__meta-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="14px" height="14px">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </span>
                                            <?php endif; ?>
                                            <time datetime="<?php echo get_the_date('c'); ?>" itemprop="datePublished"><?php echo get_the_date(); ?></time>
                                        </span>
                                    <?php endif; ?>

                                    <?php
                                    if (($attributes['general_postMeta']['isShowComment'] ?? true) && ($attributes['general_postMeta']['isShowDate'] ?? true)) : ?>
                                        <span class="wcbPostCard__meta-dot"> / </span>
                                    <?php endif; ?>


                                    <!-- COMMENTS -->
                                    <?php if (boolval($attributes['general_postMeta']['isShowComment'] ?? true)) : ?>
                                        <span class="wcbPostCard__meta-comment">
                                            <span class="wcbPostCard__meta-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="14px" height="14px">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                                </svg>

                                            </span>
                                            <?php echo get_comments_number(); ?>
                                        </span>
                                    <?php endif; ?>
                                </div>

                            </div>

                            <!-- READMORE BUTTON -->
                            <?php if (boolval($attributes['general_readmoreLink']['isShowReadmore'] ?? true)) : ?>
                                <a class="wcbPostCard__readmoreLink" href="<?php echo esc_url(the_permalink()); ?>" rel="noopener noreferrer" target="<?php echo esc_attr(($attributes['general_readmoreLink']['isOpenInNewTab'] ?? false) ? "_blank" : "_self") ?>">
                                    <?php echo esc_html($attributes['general_readmoreLink']['text'] ?? "Read more"); ?>
                                </a>
                            <?php endif; ?>

                        </div>
                    </div>
                <?php endwhile; ?>
                <!-- end of the loop -->
        </div>

        <!-- pagination here -->
        <?php if (wcb__is_enabled($attributes['general_pagination']['isShowPagination'] ?? "false")) : ?>
            <div class="wcb-posts-grid__pagination">
                <?php wcb_pagination_bar($the_query, $attributes['general_pagination']); ?>
            </div>
        <?php endif; ?>

        <!-- reset post here -->
        <?php wp_reset_postdata(); ?>

    <?php else : ?>
        <p class="wcb-posts-grid__emptyMessage"><?php echo esc_html($sortingAndFiltering['emptyMessage'] ?? "No post found!"); ?></p>
    <?php endif; ?>
    </div>
<?php

    return ob_get_clean();
}

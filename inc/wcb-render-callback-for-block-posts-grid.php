<?php
//============================================= block 1 ===============================================================
function wcb_block_posts_grid__renderCallback($attributes, $content, $block)
{
    if (!is_admin()) {
        wp_enqueue_script('wcb_block_posts_grid__renderCallbackScript', plugin_dir_url(WCB_FILE) . 'build/block-posts-grid/FrontendStyles.js', array('wp-element'), null, true);
    }

    // wcb_var_dump($attributes);

    $DEFAULT_ATTRS = [
        'uniqueId' => 'xxblock-ea687c0d-0eda-4ebf-a7c2-cbcaca07bbe8-xx',
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
            'numberOfColumn' => 2,
        ],
    ];
    $uniqueId =  $attributes['uniqueId'];

    $sortingAndFiltering = isset($attributes["general_sortingAndFiltering"]) ? $attributes["general_sortingAndFiltering"] :  $DEFAULT_ATTRS["general_sortingAndFiltering"];
    $queries = isset($sortingAndFiltering["queries"]) ? $sortingAndFiltering["queries"] : $DEFAULT_ATTRS["general_sortingAndFiltering"]["queries"];


    $aTermsId = array_map(function ($item) {
        return $item['id'];
    }, $queries["selectedTerms"]);


    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
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
        'post__not_in'      => boolval($queries["isExcludeCurrentPost"]) ? [get_the_ID()] : [],
        'posts_per_page'    => $queries["numberOfItems"],
        'offset'            => $queries["offsetPost"],
        'orderby'           => $queries["orderBy"],
        'order'             => $queries["order"],
        'paged'             => $paged
    ]);


    if (!function_exists("wcb_block_posts_grid__render_taxonomy")) {
        function wcb_block_posts_grid__render_taxonomy($queries, $attributes)
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

                echo '<div class="wcbPostCard__taxonomies wcbPostCard__taxonomies--' . esc_attr(str_replace(' ', '', $attributes['general_postMeta']['taxonomyPosition'] ?? "")) . esc_attr($attributes['general_postMeta']['taxonomyStyle'] === "Highlighted" ? " wcbPostCard__taxonomies--highlighted" : "") . '">' . __($all_terms) . '</div>';

            endif;
        }
    }

    if (!function_exists("wcb_pagination_bar")) {
        function wcb_pagination_bar($custom_query)
        {
            $total_pages = $custom_query->max_num_pages;
            $big = 999999999; // need an unlikely integer
            if ($total_pages > 1) {
                $current_page = max(1, get_query_var('paged'));
                echo paginate_links(array(
                    'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                    'format' => '?paged=%#%',
                    'current' => $current_page,
                    'total' => $total_pages,
                ));
            }
        }
    }

    ob_start();
?>
    <!-- CONTENT FOR RENDER CSSS @EMOTION -->
    <?php echo $content; ?>

    <!-- RENDER FOLLOW BY EDIT.TSX -->
    <div class="wcb-posts-grid__wrap <?php echo esc_attr($uniqueId); ?> " data-uniqueid="<?php echo esc_attr($uniqueId); ?>">
        <?php if ($the_query->have_posts()) : ?>

            <!-- the loop -->
            <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
                <div class="wcbPostCard wcbPostCard--image-<?php echo esc_attr($attributes['general_postFeaturedImage']['featuredImagePosition'] ?? ""); ?>">

                    <!-- card - FUll link  -->
                    <a class="wcbPostCard__completeLink" href="<?php echo get_permalink(); ?>"></a>

                    <!-- Post Thumbnail -->
                    <?php if (boolval($attributes['general_postFeaturedImage']['isShowFeaturedImage'] ?? false)) : ?>
                        <div class="wcbPostCard__featuredImage">
                            <?php echo get_the_post_thumbnail(); ?>
                        </div>
                    <?php endif; ?>

                    <!-- Post content -->
                    <div class="wcbPostCard__content">

                        <!-- TAXONOMIES ON TOP -->
                        <?php if ($attributes['general_postMeta']['taxonomyPosition'] !== "With meta") {
                            wcb_block_posts_grid__render_taxonomy($queries, $attributes);
                        }; ?>

                        <!-- TITLE -->
                        <h2 class="wcbPostCard__title">
                            <a href="<?php the_permalink(); ?>">
                                <?php the_title(); ?>
                            </a>
                        </h2>

                        <!-- META -->
                        <div class="wcbPostCard__meta">

                            <!-- AUTHOR -->
                            <?php if (boolval($attributes['general_postMeta']['isShowAuthor'] ?? false)) : ?>
                                <div class="wcbPostCard__meta-author">
                                    <span class="wcbPostCard__meta-author-by"><?php echo esc_html("by "); ?></span>
                                    <a class="wcbPostCard__meta-author-name" href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" title="<?php echo esc_attr(get_the_author()); ?>"><?php the_author(); ?></a>
                                </div>
                            <?php endif; ?>

                            <!-- TAXONOMIES  -->
                            <?php if ($attributes['general_postMeta']['taxonomyPosition'] === "With meta") {
                                wcb_block_posts_grid__render_taxonomy($queries, $attributes);
                            }; ?>

                            <!-- DATE AND COMMENT -->
                            <div>

                                <!-- DATE -->
                                <?php if (boolval($attributes['general_postMeta']['isShowDate'] ?? false)) : ?>
                                    <span class="wcbPostCard__meta-date">
                                        <time datetime="<?php echo get_the_date('c'); ?>" itemprop="datePublished"><?php echo get_the_date(); ?></time>
                                    </span>
                                    <span class="wcbPostCard__meta-dot">·</span>
                                <?php endif; ?>

                                <!-- COMMENTS -->
                                <?php if (boolval($attributes['general_postMeta']['isShowComment'] ?? false)) : ?>
                                    <span class="wcbPostCard__meta-comment">
                                        <?php echo get_comments_number(); ?>
                                    </span>
                                <?php endif; ?>

                            </div>

                        </div>

                        <!-- FULL POST CONTENT -->
                        <?php if (($attributes['general_postContent']['contentType'] ?? "") === "Full post") {
                            echo '<div class="wcbPostCard__fullContent">';
                            echo the_content();
                            echo '</div>';
                        };  ?>

                        <!-- EXCERPT -->
                        <?php if (($attributes['general_postContent']['contentType'] ?? "") === "excerpt") {
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

                        <!-- READMORE BUTTON -->
                        <?php if (boolval($attributes['general_readmoreLink']['isShowReadmore'] ?? false)) : ?>
                            <a class="wcbPostCard__readmoreLink" href="<?php echo esc_url(the_permalink()); ?>" rel="noopener noreferrer" target="<?php echo esc_attr(($attributes['general_readmoreLink']['isOpenInNewTab'] ?? false) ? "_blank" : "_self") ?>">
                                <?php echo esc_html($attributes['general_readmoreLink']['text'] ?? "Read more"); ?>
                            </a>
                        <?php endif; ?>

                    </div>
                </div>
            <?php endwhile; ?>
            <!-- end of the loop -->

            <!-- pagination here -->
            <nav class="pagination">
                <?php wcb_pagination_bar($the_query); ?>
            </nav>

            <!-- reset post here -->
            <?php wp_reset_postdata(); ?>

        <?php else : ?>
            <p><?php echo esc_html($sortingAndFiltering['emptyMessage'] ?? "No post found!"); ?></p>
        <?php endif; ?>
    </div>
<?php

    return ob_get_clean();
}

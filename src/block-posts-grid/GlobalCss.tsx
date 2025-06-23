import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getBoxShadowStyles from "../utils/getBoxShadowStyles";
import getCssProperyHasResponsive from "../utils/getCssProperyHasResponsive";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbBlockPostsGridAttrs } from "./attributes";

interface Props extends Required<WcbBlockPostsGridAttrs> {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_pagination,
		general_postContent,
		general_postFeaturedImage,
		general_postMeta,
		general_readmoreLink,
		general_sortingAndFiltering,
		//
		style_border,
		style_boxShadow,
		style_excerpt,
		style_featuredImage,
		style_layout,
		style_meta,
		style_pagination,
		style_readmoreLink,
		style_title,
		style_taxonomy,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcbPostCard`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		const {
			value_desktop: rowGap_desktop,
			value_mobile: rowGap_mobile,
			value_tablet: rowGap_tablet,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_layout.rowGap,
		});
		const {
			value_desktop: colunmGap_desktop,
			value_mobile: colunmGap_mobile,
			value_tablet: colunmGap_tablet,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_layout.colunmGap,
		});

		const {
			value_desktop: numberOfColumn_desktop,
			value_tablet: numberOfColumn_tablet,
			value_mobile: numberOfColumn_mobile,
		} = getCssProperyHasResponsive({
			cssProperty: general_sortingAndFiltering.numberOfColumn,
		});

		return {
			[`${WRAP_CLASSNAME}`]: {
				".wcb-posts-grid__list-posts": {
					display: "grid",
					gridTemplateColumns: `repeat(${numberOfColumn_mobile}, minmax(0, 1fr))`,
					rowGap: rowGap_mobile,
					columnGap: colunmGap_mobile,
					[`@media (min-width: ${media_tablet})`]: {
						rowGap: rowGap_tablet,
						columnGap: colunmGap_tablet,
						gridTemplateColumns: `repeat(${numberOfColumn_tablet}, minmax(0, 1fr))`,
					},
					[`@media (min-width: ${media_desktop})`]: {
						rowGap: rowGap_desktop,
						columnGap: colunmGap_desktop,
						gridTemplateColumns: `repeat(${numberOfColumn_desktop}, minmax(0, 1fr))`,
					},
				},
			},
		};
	};

	const getDivWrapStyles_Pagination = (): CSSObject => {
		const {
			value_mobile: marginTop_mobile,
			value_tablet: marginTop_tablet,
			value_desktop: marginTop_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_pagination.marginTop,
		});
		return {
			[`${WRAP_CLASSNAME} .wcb-posts-grid__pagination`]: {
				marginTop: marginTop_mobile,
				justifyContent: style_pagination.justifyContent,
				[`.page-numbers`]: {
					color: style_pagination.mainStyle.Normal.color,
					backgroundColor: style_pagination.mainStyle.Normal.backgroundColor,
				},
				[`.page-numbers.current`]: {
					color: style_pagination.mainStyle.Active.color,
					backgroundColor: style_pagination.mainStyle.Active.backgroundColor,
				},
				[`@media (min-width: ${media_tablet})`]: {
					marginTop: marginTop_tablet,
				},
				[`@media (min-width: ${media_desktop})`]: {
					marginTop: marginTop_desktop,
				},
			},
		};
	};

	//
	const getPostCardWrapStyles = (): CSSObject[] => {
		const {
			value_mobile: titleMarginBottom_mobile,
			value_tablet: titleMarginBottom_tablet,
			value_desktop: titleMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_title.marginBottom,
		});
		const {
			value_mobile: excerptMarginBottom_mobile,
			value_tablet: excerptMarginBottom_tablet,
			value_desktop: excerptMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_excerpt.marginBottom,
		});
		const {
			value_mobile: featuredImageMarginBottom_mobile,
			value_tablet: featuredImageMarginBottom_tablet,
			value_desktop: featuredImageMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_featuredImage.marginBottom,
		});
		return [
			{
				[POST_CARD_CLASS]: {
					position: "relative",
					height: !general_sortingAndFiltering.isEqualHeight
						? "max-content"
						: undefined,
					"&--image-background": {
						".wcbPostCard__featuredImage-overlay": {
							backgroundColor: style_featuredImage.backgroundOverlay,
						},
					},
					"&--image-top": {
						".wcbPostCard__featuredImage": {
							marginBottom: featuredImageMarginBottom_mobile,
							[`@media (min-width: ${media_tablet})`]: {
								marginBottom: featuredImageMarginBottom_tablet,
							},
							[`@media (min-width: ${media_desktop})`]: {
								marginBottom: featuredImageMarginBottom_desktop,
							},
						},
					},

					textAlign: style_layout.textAlignment,
					backgroundColor: style_layout.backgroundColor,
					".wcbPostCard__content": {},

					".wcbPostCard__title": {
						marginBottom: titleMarginBottom_mobile,
						">a": {
							color: style_title.textColor,
						},
						">a:hover": {
							color: style_title.textHoverColor,
						},
					},
					".wcbPostCard__excerpt": {
						marginBottom: excerptMarginBottom_mobile,
						color: style_excerpt.textColor,
					},
					[`@media (min-width: ${media_tablet})`]: {
						".wcbPostCard__title": {
							marginBottom: titleMarginBottom_tablet,
						},
						".wcbPostCard__excerpt": {
							marginBottom: excerptMarginBottom_tablet,
						},
					},
					[`@media (min-width: ${media_desktop})`]: {
						".wcbPostCard__title": {
							marginBottom: titleMarginBottom_desktop,
						},
						".wcbPostCard__excerpt": {
							marginBottom: excerptMarginBottom_desktop,
						},
					},
				},
			},

			getBorderStyles({
				className: `${WRAP_CLASSNAME} .wcbPostCard--image-top .wcbPostCard__featuredImage img`,
				border: style_featuredImage.border,
				isWithRadius: true,
			}),
		];
	};

	const getPostCardStyles_Meta = (): CSSObject => {
		const {
			value_mobile: marginBottom_mobile,
			value_tablet: marginBottom_tablet,
			value_desktop: marginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_meta.marginBottom,
		});
		const {
			value_mobile: taxonomyMarginBottom_mobile,
			value_tablet: taxonomyMarginBottom_tablet,
			value_desktop: taxonomyMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_taxonomy.marginBottom,
		});

		return {
			[`${POST_CARD_CLASS}`]: {
				// METAS
				".wcbPostCard__meta": {
					marginBottom: marginBottom_mobile,
					".wcbPostCard__meta-author": {
						color: style_meta.authorColor,
					},
					".wcbPostCard__meta-date-and-comments": {
						color: style_meta.dateTextColor,
					},

					[`@media (min-width: ${media_tablet})`]: {
						marginBottom: marginBottom_tablet,
					},
					[`@media (min-width: ${media_desktop})`]: {
						marginBottom: marginBottom_desktop,
					},
				},
				// TAXONOMY
				".wcbPostCard__taxonomies": {
					marginBottom: taxonomyMarginBottom_mobile,
					">a": {
						color: style_taxonomy.textColor,
					},
					"&--highlighted >a": {
						backgroundColor: style_taxonomy.backgroundColor,
					},
					[`@media (min-width: ${media_tablet})`]: {
						marginBottom: taxonomyMarginBottom_tablet,
					},
					[`@media (min-width: ${media_desktop})`]: {
						marginBottom: taxonomyMarginBottom_desktop,
					},
				},
			},
		};
	};

	const getPostCardStyles_ReadmoreLink = (): CSSObject => {
		const { backgroundColor, color } =
			style_readmoreLink.colorAndBackgroundColor.Normal;
		const { backgroundColor: backgroundColor_h, color: color_h } =
			style_readmoreLink.colorAndBackgroundColor.Hover;
		const {
			value_mobile: marginBottom_mobile,
			value_tablet: marginBottom_tablet,
			value_desktop: marginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_readmoreLink.marginBottom || { Desktop: "1rem" },
		});
		return {
			[`${POST_CARD_CLASS} .wcbPostCard__readmoreLink`]: {
				color,
				backgroundColor,
				marginBottom: marginBottom_mobile,
				":hover": {
					color: color_h,
					backgroundColor: backgroundColor_h,
				},
				[`@media (min-width: ${media_tablet})`]: {
					marginBottom: marginBottom_tablet,
				},
				[`@media (min-width: ${media_desktop})`]: {
					marginBottom: marginBottom_desktop,
				},
			},
		};
	};

	if (!uniqueId) {
		return null;
	}

	console.log(22323, { advance_motionEffect });

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			{/* PAGINATION */}
			{general_pagination.isShowPagination ? (
				<>
					<Global styles={getDivWrapStyles_Pagination()} />
					<Global
						styles={getBorderStyles({
							className: `${WRAP_CLASSNAME} .wcb-posts-grid__pagination .page-numbers`,
							border: style_pagination.mainStyle.Normal.border,
							isWithRadius: true,
						})}
					/>
					<Global
						styles={getBorderStyles({
							className: `${WRAP_CLASSNAME} .wcb-posts-grid__pagination .page-numbers.current`,
							border: style_pagination.mainStyle.Active.border,
							isWithRadius: true,
						})}
					/>
				</>
			) : null}

			{/* POSTCARD */}
			<Global styles={getPostCardWrapStyles()} />
			<Global styles={getPostCardStyles_Meta()} />
			<Global
				styles={getPaddingMarginStyles({
					className:
						general_postFeaturedImage.featuredImagePosition === "background"
							? POST_CARD_CLASS
							: `${POST_CARD_CLASS} .wcbPostCard__content`,
					padding: style_layout.padding,
				})}
			/>
			<Global
				styles={getBorderStyles({
					className: `${POST_CARD_CLASS}`,
					border: style_border,
					isWithRadius: true,
				})}
			/>
			<Global
				styles={getBoxShadowStyles({
					className: `${POST_CARD_CLASS}`,
					boxShadow: style_boxShadow,
				})}
			/>

			{general_postMeta.isShowTitle ? (
				<Global
					styles={getTypographyStyles({
						className: `${POST_CARD_CLASS} .wcbPostCard__title a`,
						typography: style_title.typography,
					})}
				/>
			) : null}

			{general_postContent.isShowPostContent ? (
				<Global
					styles={getTypographyStyles({
						className: `${POST_CARD_CLASS} .wcbPostCard__excerpt`,
						typography: style_excerpt.typography,
					})}
				/>
			) : null}

			{general_postMeta.isShowAuthor && (
				<Global
					styles={getTypographyStyles({
						className: `${POST_CARD_CLASS} .wcbPostCard__meta-author-name`,
						typography: style_meta.authorTypography,
					})}
				/>
			)}

			{(general_postMeta.isShowComment || general_postMeta.isShowDate) && (
				<Global
					styles={getTypographyStyles({
						className: `${POST_CARD_CLASS} .wcbPostCard__meta-date-and-comments`,
						typography: style_meta.dateTypography,
					})}
				/>
			)}

			{general_postMeta.isShowTaxonomy ? (
				<Global
					styles={getTypographyStyles({
						className: `${POST_CARD_CLASS} .wcbPostCard__taxonomies a`,
						typography: style_taxonomy.typography,
					})}
				/>
			) : null}

			{general_readmoreLink.isShowReadmore ? (
				<>
					<Global styles={getPostCardStyles_ReadmoreLink()} />

					<Global
						styles={getTypographyStyles({
							className: `${POST_CARD_CLASS} .wcbPostCard__readmoreLink`,
							typography: style_readmoreLink.typography,
						})}
					/>
					<Global
						styles={getBorderStyles({
							className: `${POST_CARD_CLASS} .wcbPostCard__readmoreLink`,
							border: style_readmoreLink.border,
							isWithRadius: true,
						})}
					/>
					<Global
						styles={getPaddingMarginStyles({
							className: `${POST_CARD_CLASS} .wcbPostCard__readmoreLink`,
							padding: style_readmoreLink.padding,
						})}
					/>
				</>
			) : null}

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_motionEffect,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "block",
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);

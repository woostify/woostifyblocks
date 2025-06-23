import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getCssProperyHasResponsive from "../utils/getCssProperyHasResponsive";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "../utils/checkResponsiveValueForOptimizeCSS";

interface Props extends Required<WcbAttrsForSave> {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_addToCartBtn,
		general_content,
		general_pagination,
		style_addToCardBtn,
		style_featuredImage,
		style_layout,
		style_pagination,
		style_title,
		style_saleBadge,
		style_border,
		style_price,
		style_rating,
		style_category,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;

	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const LIST_CLASS = `${WRAP_CLASSNAME} .wcb-products__list`;
	const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcb-products__product`;
	const ADD_TO_CART_BTN = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart a`;

	// ------------------- WRAP DIV

	const renderDivListWrapStyle = () => {
		const {
			value_Desktop: rowGap_desktop,
			value_Mobile: rowGap_mobile,
			value_Tablet: rowGap_tablet,
		} = getValueFromAttrsResponsives(style_layout.rowGap);
		const {
			value_Desktop: colunmGap_desktop,
			value_Mobile: colunmGap_mobile,
			value_Tablet: colunmGap_tablet,
		} = getValueFromAttrsResponsives(style_layout.colunmGap);

		const { numberOfColumn, swithToScrollSnapX, peekAfter } = style_layout;
		const {
			value_Desktop: numberOfColumn_desktop,
			value_Tablet: numberOfColumn_tablet,
			value_Mobile: numberOfColumn_mobile,
		} = getValueFromAttrsResponsives(numberOfColumn);

		const {
			value_Desktop: peekAfter_desktop,
			value_Tablet: peekAfter_tablet,
			value_Mobile: peekAfter_mobile,
		} = getValueFromAttrsResponsives(peekAfter);

		const isSnapScrollDesktop = swithToScrollSnapX === "Desktop";
		const isSnapScrollTablet =
			isSnapScrollDesktop || swithToScrollSnapX === "Tablet";
		const isSnapScrollMobile =
			isSnapScrollTablet || swithToScrollSnapX === "Mobile";
		return (
			<Global
				styles={{
					[`${WRAP_CLASSNAME} .indicators`]: {
						display: isSnapScrollMobile ? "block" : "none",
						[`@media (min-width: ${media_tablet})`]: {
							display: isSnapScrollTablet ? "block" : "none",
						},
						[`@media (min-width: ${media_desktop})`]: {
							display: isSnapScrollDesktop ? "block" : "none",
						},
					},
					[LIST_CLASS]: {
						// ------ setting snap scroll x
						"> div": isSnapScrollMobile
							? {
									scrollSnapAlign: "start",
									flexShrink: 0,
									flexBasis: `calc((100% - (${
										Number(numberOfColumn_mobile) - 1
									} * ${colunmGap_mobile})) / ${Number(
										numberOfColumn_mobile
									)} - ${peekAfter_mobile})`,
							  }
							: {},

						overflowX: isSnapScrollMobile ? "auto" : undefined,
						scrollSnapType: isSnapScrollMobile ? "x proximity" : undefined,
						display: isSnapScrollMobile ? "flex" : "grid",
						gridTemplateColumns: isSnapScrollMobile
							? undefined
							: `repeat(${numberOfColumn_mobile}, minmax(0, 1fr))`,
						// ------ end setting snap scroll x
						//
						rowGap: rowGap_mobile,
						columnGap: colunmGap_mobile,
						[`@media (min-width: ${media_tablet})`]: {
							rowGap: rowGap_tablet,
							columnGap: colunmGap_tablet,
							// ------ setting snap scroll x
							"> div": isSnapScrollTablet
								? {
										scrollSnapAlign: "start",
										flexShrink: 0,
										flexBasis: `calc((100% - (${
											Number(numberOfColumn_tablet) - 1
										} * ${colunmGap_tablet})) / ${Number(
											numberOfColumn_tablet
										)} - ${peekAfter_tablet})`,
								  }
								: {},

							overflowX: isSnapScrollTablet ? "auto" : undefined,
							scrollSnapType: isSnapScrollTablet ? "x proximity" : undefined,
							display: isSnapScrollTablet ? "flex" : "grid",
							gridTemplateColumns: isSnapScrollTablet
								? undefined
								: `repeat(${numberOfColumn_tablet}, minmax(0, 1fr))`,
							// ------ end setting snap scroll x
						},
						[`@media (min-width: ${media_desktop})`]: {
							rowGap: rowGap_desktop,
							columnGap: colunmGap_desktop,
							// ------ setting snap scroll x
							"> div": isSnapScrollDesktop
								? {
										scrollSnapAlign: "start",
										flexShrink: 0,
										// tinh toan the nay de tao phan thut-tho cho slider
										flexBasis: `calc((100% - (${
											Number(numberOfColumn_desktop) - 1
										} * ${colunmGap_desktop})) / ${Number(
											numberOfColumn_desktop
										)} - ${peekAfter_desktop})`,
								  }
								: {},

							overflowX: isSnapScrollDesktop ? "auto" : undefined,
							scrollSnapType: isSnapScrollDesktop ? "x proximity" : undefined,
							display: isSnapScrollDesktop ? "flex" : "grid",
							gridTemplateColumns: isSnapScrollDesktop
								? undefined
								: `repeat(${numberOfColumn_desktop}, minmax(0, 1fr))`,
							// ------ end setting snap scroll x
						},
					},
				}}
			/>
		);
	};

	const getDivWrapStyles_Pagination = (): CSSObject => {
		const {
			value_mobile: marginTop_mobile,
			value_tablet: marginTop_tablet,
			value_desktop: marginTop_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_pagination.marginTop,
		});
		const {
			mobile_v: marginTop_mobile_new,
			tablet_v: marginTop_tablet_new,
			desktop_v: marginTop_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: marginTop_mobile,
			tablet_v: marginTop_tablet,
			desktop_v: marginTop_desktop,
		});
		return {
			[`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
				marginTop: marginTop_mobile_new,
				justifyContent: style_pagination.justifyContent,
				[`.page-numbers`]: {
					color: style_pagination.mainStyle.Normal.color,
					backgroundColor: style_pagination.mainStyle.Normal.backgroundColor,
				},
				[`.page-numbers.current`]: {
					color: style_pagination.mainStyle.Active.color,
					backgroundColor: style_pagination.mainStyle.Active.backgroundColor,
				},
				[`@media (min-width: ${media_tablet})`]: marginTop_tablet_new
					? {
							marginTop: marginTop_tablet_new,
					  }
					: undefined,
				[`@media (min-width: ${media_desktop})`]: marginTop_desktop_new
					? {
							marginTop: marginTop_desktop_new,
					  }
					: undefined,
			},
		};
	};

	const getDivWrapStyles_Rating = (): CSSObject => {
		const {
			value_mobile: marginTop_mobile,
			value_tablet: marginTop_tablet,
			value_desktop: marginTop_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_pagination.marginTop,
		});
		const {
			mobile_v: marginTop_mobile_new,
			tablet_v: marginTop_tablet_new,
			desktop_v: marginTop_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: marginTop_mobile,
			tablet_v: marginTop_tablet,
			desktop_v: marginTop_desktop,
		});
		return {
			[`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
				marginTop: marginTop_mobile_new,
				justifyContent: style_pagination.justifyContent,
				[`.page-numbers`]: {
					color: style_pagination.mainStyle.Normal.color,
					backgroundColor: style_pagination.mainStyle.Normal.backgroundColor,
				},
				[`.page-numbers.current`]: {
					color: style_pagination.mainStyle.Active.color,
					backgroundColor: style_pagination.mainStyle.Active.backgroundColor,
				},
				[`@media (min-width: ${media_tablet})`]: marginTop_tablet_new
					? {
							marginTop: marginTop_tablet_new,
					  }
					: undefined,
				[`@media (min-width: ${media_desktop})`]: marginTop_desktop_new
					? {
							marginTop: marginTop_desktop_new,
					  }
					: undefined,
			},
		};
	};
	//

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
			value_mobile: saleBadgeMarginBottom_mobile,
			value_tablet: saleBadgeMarginBottom_tablet,
			value_desktop: saleBadgeMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_saleBadge.marginBottom,
		});
		const {
			value_mobile: featuredImageMarginBottom_mobile,
			value_tablet: featuredImageMarginBottom_tablet,
			value_desktop: featuredImageMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_featuredImage.marginBottom,
		});
		const {
			value_mobile: priceMarginBottom_mobile,
			value_tablet: priceMarginBottom_tablet,
			value_desktop: priceMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_price.marginBottom,
		});
		const {
			value_mobile: ratingMarginBottom_mobile,
			value_tablet: ratingMarginBottom_tablet,
			value_desktop: ratingMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_rating.marginBottom,
		});
		const {
			value_mobile: categoryMarginBottom_mobile,
			value_tablet: categoryMarginBottom_tablet,
			value_desktop: categoryMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_category.marginBottom,
		});

		//
		const {
			mobile_v: titleMarginBottom_mobile_new,
			tablet_v: titleMarginBottom_tablet_new,
			desktop_v: titleMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: titleMarginBottom_mobile,
			tablet_v: titleMarginBottom_tablet,
			desktop_v: titleMarginBottom_desktop,
		});
		const {
			mobile_v: saleBadgeMarginBottom_mobile_new,
			tablet_v: saleBadgeMarginBottom_tablet_new,
			desktop_v: saleBadgeMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: saleBadgeMarginBottom_mobile,
			tablet_v: saleBadgeMarginBottom_tablet,
			desktop_v: saleBadgeMarginBottom_desktop,
		});
		const {
			mobile_v: featuredImageMarginBottom_mobile_new,
			tablet_v: featuredImageMarginBottom_tablet_new,
			desktop_v: featuredImageMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: featuredImageMarginBottom_mobile,
			tablet_v: featuredImageMarginBottom_tablet,
			desktop_v: featuredImageMarginBottom_desktop,
		});
		const {
			mobile_v: priceMarginBottom_mobile_new,
			tablet_v: priceMarginBottom_tablet_new,
			desktop_v: priceMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: priceMarginBottom_mobile,
			tablet_v: priceMarginBottom_tablet,
			desktop_v: priceMarginBottom_desktop,
		});
		const {
			mobile_v: ratingMarginBottom_mobile_new,
			tablet_v: ratingMarginBottom_tablet_new,
			desktop_v: ratingMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: ratingMarginBottom_mobile,
			tablet_v: ratingMarginBottom_tablet,
			desktop_v: ratingMarginBottom_desktop,
		});
		const {
			mobile_v: categoryMarginBottom_mobile_new,
			tablet_v: categoryMarginBottom_tablet_new,
			desktop_v: categoryMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: categoryMarginBottom_mobile,
			tablet_v: categoryMarginBottom_tablet,
			desktop_v: categoryMarginBottom_desktop,
		});
		//
		return [
			{
				[POST_CARD_CLASS]: {
					position: "relative",
					height: !style_layout.isEqualHeight ? "max-content" : undefined,
					textAlign: style_layout.textAlignment,
					backgroundColor: style_layout.backgroundColor,

					// ".wcb-products__product-image":
					".wcb-products__product-image-link":
						featuredImageMarginBottom_mobile_new ||
						featuredImageMarginBottom_tablet_new ||
						featuredImageMarginBottom_desktop_new
							? {
									marginBottom: featuredImageMarginBottom_mobile_new,
									[`@media (min-width: ${media_tablet})`]:
										featuredImageMarginBottom_tablet_new
											? {
													marginBottom: featuredImageMarginBottom_tablet_new,
											  }
											: undefined,
									[`@media (min-width: ${media_desktop})`]:
										featuredImageMarginBottom_desktop_new
											? {
													marginBottom: featuredImageMarginBottom_desktop_new,
											  }
											: undefined,
							  }
							: undefined,

					".wcb-products__product-title": {
						marginBottom: titleMarginBottom_mobile_new,
						color: style_title.textColor,
					},
					".wcb-products__product-categories": {
						marginBottom: categoryMarginBottom_mobile_new,
						color: style_category.textColor,
						a: {
							color: style_category.textColor,
						},
					},
					".wcb-products__product-salebadge": {
						marginBottom: saleBadgeMarginBottom_mobile_new,
						".wcb-products__product-onsale": {
							color: style_saleBadge.textColor,
							backgroundColor: style_saleBadge.backgroundColor,
						},
					},
					".wcb-products__product-price": {
						marginBottom: priceMarginBottom_mobile_new,
						color: style_price.textColor,
					},
					".wcb-products__product-rating": {
						marginBottom: ratingMarginBottom_mobile_new,
						color: style_rating.color,
					},
					[`@media (min-width: ${media_tablet})`]:
						titleMarginBottom_tablet_new ||
						saleBadgeMarginBottom_tablet_new ||
						priceMarginBottom_tablet_new ||
						ratingMarginBottom_tablet_new
							? {
									".wcb-products__product-title": titleMarginBottom_tablet_new
										? {
												marginBottom: titleMarginBottom_tablet_new,
										  }
										: undefined,
									".wcb-products__product-categories":
										categoryMarginBottom_tablet_new
											? {
													marginBottom: categoryMarginBottom_tablet_new,
											  }
											: undefined,
									".wcb-products__product-salebadge":
										saleBadgeMarginBottom_tablet_new
											? {
													marginBottom: saleBadgeMarginBottom_tablet_new,
											  }
											: undefined,
									".wcb-products__product-price": priceMarginBottom_tablet_new
										? {
												marginBottom: priceMarginBottom_tablet_new,
										  }
										: undefined,
									".wcb-products__product-rating": ratingMarginBottom_tablet_new
										? {
												marginBottom: ratingMarginBottom_tablet_new,
										  }
										: undefined,
							  }
							: undefined,
					[`@media (min-width: ${media_desktop})`]:
						titleMarginBottom_desktop_new ||
						saleBadgeMarginBottom_desktop_new ||
						priceMarginBottom_desktop_new ||
						ratingMarginBottom_desktop_new
							? {
									".wcb-products__product-title": titleMarginBottom_desktop_new
										? {
												marginBottom: titleMarginBottom_desktop_new,
										  }
										: undefined,
									".wcb-products__product-categories":
										categoryMarginBottom_desktop_new
											? {
													marginBottom: categoryMarginBottom_desktop_new,
											  }
											: undefined,
									".wcb-products__product-salebadge":
										saleBadgeMarginBottom_desktop_new
											? {
													marginBottom: saleBadgeMarginBottom_desktop_new,
											  }
											: undefined,
									".wcb-products__product-price": priceMarginBottom_desktop_new
										? {
												marginBottom: priceMarginBottom_desktop_new,
										  }
										: undefined,
									".wcb-products__product-rating":
										ratingMarginBottom_desktop_new
											? {
													marginBottom: ratingMarginBottom_desktop_new,
											  }
											: undefined,
							  }
							: undefined,
				},
			},
			getBorderStyles({
				// className: `${POST_CARD_CLASS} .wcb-products__product-image`,
				className: `${WRAP_CLASSNAME} .wcb-products__product-image-link`,
				border: style_featuredImage.border,
				isWithRadius: true,
			}),
		];
	};

	const getPostCardStyles_AddToCart = (): CSSObject => {
		const { backgroundColor, color } =
			style_addToCardBtn.colorAndBackgroundColor.Normal;
		const { backgroundColor: backgroundColor_h, color: color_h } =
			style_addToCardBtn.colorAndBackgroundColor.Hover;
		const {
			value_mobile: marginBottom_mobile,
			value_tablet: marginBottom_tablet,
			value_desktop: marginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_addToCardBtn.marginBottom || { Desktop: "1rem" },
		});

		//
		const {
			mobile_v: marginBottom_mobile_new,
			tablet_v: marginBottom_tablet_new,
			desktop_v: marginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: marginBottom_mobile,
			tablet_v: marginBottom_tablet,
			desktop_v: marginBottom_desktop,
		});
		//
		return {
			[ADD_TO_CART_BTN]: {
				color,
				backgroundColor,
				marginBottom: marginBottom_mobile_new,
				":hover": {
					color: color_h,
					backgroundColor: backgroundColor_h,
				},
				[`@media (min-width: ${media_tablet})`]: marginBottom_tablet_new
					? {
							marginBottom: marginBottom_tablet_new,
					  }
					: undefined,
				[`@media (min-width: ${media_desktop})`]: marginBottom_desktop_new
					? {
							marginBottom: marginBottom_desktop_new,
					  }
					: undefined,
			},
			[`${ADD_TO_CART_BTN}.added`]: {
				display: "none",
			}
		};
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			{renderDivListWrapStyle()}

			{/* TITLE */}
			{general_content.isShowTitle && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-title",
						typography: style_title.typography,
					})}
				/>
			)}

			{/* CATEOGRY */}
			{general_content.isShowCategory && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-categories",
						typography: style_category.typography,
					})}
				/>
			)}

			{/* RATING */}
			{general_content.isShowRating && (
				<Global styles={getDivWrapStyles_Rating()} />
			)}

			{/* PRICE */}
			{general_content.isShowPrice && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-price",
						typography: style_price.typography,
					})}
				/>
			)}

			{/* SALE BADGE */}
			{general_content.isShowSaleBadge && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-onsale",
						typography: style_saleBadge.typography,
					})}
				/>
			)}

			{/* PAGINATION */}
			{general_pagination.isShowPagination ? (
				<>
					<Global styles={getDivWrapStyles_Pagination()} />
					<Global
						styles={getBorderStyles({
							className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers`,
							border: style_pagination.mainStyle.Normal.border,
							isWithRadius: true,
						})}
					/>
					<Global
						styles={getBorderStyles({
							className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers.current`,
							border: style_pagination.mainStyle.Active.border,
							isWithRadius: true,
						})}
					/>
				</>
			) : null}

			{/* POSTCARD */}
			<Global styles={getPostCardWrapStyles()} />
			<Global
				styles={getPaddingMarginStyles({
					className: POST_CARD_CLASS,
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

			{/* ADD TO CART BUTTON */}
			{general_addToCartBtn.isShowButton ? (
				<>
					<Global styles={getPostCardStyles_AddToCart()} />

					<Global
						styles={getTypographyStyles({
							className: ADD_TO_CART_BTN,
							typography: style_addToCardBtn.typography,
						})}
					/>
					<Global
						styles={getBorderStyles({
							className: ADD_TO_CART_BTN,
							border: style_addToCardBtn.border,
							isWithRadius: true,
						})}
					/>
					<Global
						styles={getPaddingMarginStyles({
							className: ADD_TO_CART_BTN,
							padding: style_addToCardBtn.padding,
						})}
					/>
				</>
			) : null}

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "block",
				})}
			/>
			{/*  */}
			<span data-block-products-uniqueId={uniqueId}></span>
		</>
	);
};

export default React.memo(GlobalCss);

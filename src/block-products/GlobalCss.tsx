import { Global, CSSObject } from "@emotion/react";
import React, { FC, useEffect } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getCssProperyHasResponsive from "../utils/getCssProperyHasResponsive";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

interface Props extends Required<WcbAttrsForSave> {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_addToCartBtn,
		general_content,
		general_featuredImage,
		general_pagination,
		general_sortingAndFiltering,
		style_addToCardBtn,
		style_featuredImage,
		style_layout,
		style_pagination,
		style_title,
		style_saleBadge,
		style_border,
		style_price,
		style_rating,
		//
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `[data-uniqueid=${uniqueId}].${uniqueId}`;
	const LIST_CLASS = `${WRAP_CLASSNAME} .wcb-products__list`;
	const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcb-products__product`;
	const ADD_TO_CART_BTN = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart a`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {
				[`@media (min-width: ${media_tablet})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

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
		return {
			[`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
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

	const getDivWrapStyles_Rating = (): CSSObject => {
		const {
			value_mobile: marginTop_mobile,
			value_tablet: marginTop_tablet,
			value_desktop: marginTop_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_pagination.marginTop,
		});
		return {
			[`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
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
		return [
			{
				[POST_CARD_CLASS]: {
					position: "relative",
					height: !style_layout.isEqualHeight ? "max-content" : undefined,
					textAlign: style_layout.textAlignment,
					backgroundColor: style_layout.backgroundColor,

					".wcb-products__product-image": {
						marginBottom: featuredImageMarginBottom_mobile,
						[`@media (min-width: ${media_tablet})`]: {
							marginBottom: featuredImageMarginBottom_tablet,
						},
						[`@media (min-width: ${media_desktop})`]: {
							marginBottom: featuredImageMarginBottom_desktop,
						},
					},

					".wcb-products__product-title": {
						marginBottom: titleMarginBottom_mobile,
						color: style_title.textColor,
					},
					".wcb-products__product-salebadge": {
						marginBottom: saleBadgeMarginBottom_mobile,
						".wcb-products__product-onsale": {
							color: style_saleBadge.textColor,
							backgroundColor: style_saleBadge.backgroundColor,
						},
					},
					".wcb-products__product-price": {
						marginBottom: priceMarginBottom_mobile,
						color: style_price.textColor,
					},
					".wcb-products__product-rating": {
						marginBottom: ratingMarginBottom_mobile,
						color: style_rating.color,
					},
					[`@media (min-width: ${media_tablet})`]: {
						".wcb-products__product-title": {
							marginBottom: titleMarginBottom_tablet,
						},
						".wcb-products__product-salebadge": {
							marginBottom: saleBadgeMarginBottom_tablet,
						},
						".wcb-products__product-price": {
							marginBottom: priceMarginBottom_tablet,
						},
						".wcb-products__product-rating": {
							marginBottom: ratingMarginBottom_tablet,
						},
					},
					[`@media (min-width: ${media_desktop})`]: {
						".wcb-products__product-title": {
							marginBottom: titleMarginBottom_desktop,
						},
						".wcb-products__product-salebadge": {
							marginBottom: saleBadgeMarginBottom_desktop,
						},
						".wcb-products__product-price": {
							marginBottom: priceMarginBottom_desktop,
						},
						".wcb-products__product-rating": {
							marginBottom: ratingMarginBottom_desktop,
						},
					},
				},
			},
			getBorderStyles({
				className: `${POST_CARD_CLASS} .wcb-products__product-image img`,
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
		return {
			[ADD_TO_CART_BTN]: {
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

	return (
		<>
			<Global styles={getDivWrapStyles()} />
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

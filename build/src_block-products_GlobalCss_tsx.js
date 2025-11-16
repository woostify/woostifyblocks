"use strict";
(globalThis["webpackChunkwoostifyblocks"] = globalThis["webpackChunkwoostifyblocks"] || []).push([["src_block-products_GlobalCss_tsx"],{

/***/ "./src/block-products/GlobalCss.tsx":
/*!******************************************!*\
  !*** ./src/block-products/GlobalCss.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getCssProperyHasResponsive */ "./src/utils/getCssProperyHasResponsive.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base-utils */ "./src/block-products/base-utils.ts");

/* eslint-disable camelcase -- block attributes intentionally use snake_case names */











const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_addToCartBtn,
    general_content,
    general_pagination,
    general_featuredImage,
    style_addToCardBtn,
    style_featuredImage,
    style_layout,
    style_pagination,
    style_title,
    style_saleBadge,
    style_outOfStock,
    style_border,
    style_price,
    style_rating,
    style_category,
    style_wishlistBtn,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  console.log('====================================');
  console.log("style_addToCardBtn", style_addToCardBtn);
  console.log('====================================');
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const LIST_CLASS = `${WRAP_CLASSNAME} .wcb-products__list`;
  const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcb-products__product`;
  const ADD_TO_CART_BTN_BG = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart`;
  const ADD_TO_CART_BTN = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart a`;
  const ADD_TO_CART_BTN_ICON = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart-icon`;
  const PRODUCT_IMAGE_CLASS = `${WRAP_CLASSNAME} .wcb-products__product-image`;
  const PRODUCT_PRICE_CLASS = `${POST_CARD_CLASS} .wcb-products__product-price`;

  // ------------------- WRAP DIV

  const renderDivListWrapStyle = () => {
    const {
      value_Desktop: rowGap_desktop,
      value_Mobile: rowGap_mobile,
      value_Tablet: rowGap_tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(style_layout.rowGap);
    const {
      value_Desktop: colunmGap_desktop,
      value_Mobile: colunmGap_mobile,
      value_Tablet: colunmGap_tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(style_layout.colunmGap);
    const {
      numberOfColumn,
      swithToScrollSnapX,
      peekAfter
    } = style_layout;
    const {
      value_Desktop: numberOfColumn_desktop,
      value_Tablet: numberOfColumn_tablet,
      value_Mobile: numberOfColumn_mobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(numberOfColumn);
    const {
      value_Desktop: peekAfter_desktop,
      value_Tablet: peekAfter_tablet,
      value_Mobile: peekAfter_mobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(peekAfter);
    const isSnapScrollDesktop = swithToScrollSnapX === "Desktop";
    const isSnapScrollTablet = isSnapScrollDesktop || swithToScrollSnapX === "Tablet";
    const isSnapScrollMobile = isSnapScrollTablet || swithToScrollSnapX === "Mobile";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
      styles: {
        [`${WRAP_CLASSNAME} .indicators`]: {
          display: isSnapScrollMobile ? "block" : "none",
          [`@media (min-width: ${media_tablet})`]: {
            display: isSnapScrollTablet ? "block" : "none"
          },
          [`@media (min-width: ${media_desktop})`]: {
            display: isSnapScrollDesktop ? "block" : "none"
          }
        },
        [LIST_CLASS]: {
          // ------ setting snap scroll x
          "> div": isSnapScrollMobile ? {
            scrollSnapAlign: "start",
            flexShrink: 0,
            flexBasis: `calc((100% - (${Number(numberOfColumn_mobile) - 1} * ${colunmGap_mobile})) / ${Number(numberOfColumn_mobile)} - ${peekAfter_mobile})`
          } : {},
          overflowX: isSnapScrollMobile ? "auto" : undefined,
          scrollSnapType: isSnapScrollMobile ? "x proximity" : undefined,
          display: isSnapScrollMobile ? "flex" : "grid",
          gridTemplateColumns: isSnapScrollMobile ? undefined : `repeat(${numberOfColumn_mobile}, minmax(0, 1fr))`,
          // ------ end setting snap scroll x
          //
          rowGap: rowGap_mobile,
          columnGap: colunmGap_mobile,
          [`@media (min-width: ${media_tablet})`]: {
            rowGap: rowGap_tablet,
            columnGap: colunmGap_tablet,
            // ------ setting snap scroll x
            "> div": isSnapScrollTablet ? {
              scrollSnapAlign: "start",
              flexShrink: 0,
              flexBasis: `calc((100% - (${Number(numberOfColumn_tablet) - 1} * ${colunmGap_tablet})) / ${Number(numberOfColumn_tablet)} - ${peekAfter_tablet})`
            } : {},
            overflowX: isSnapScrollTablet ? "auto" : undefined,
            scrollSnapType: isSnapScrollTablet ? "x proximity" : undefined,
            display: isSnapScrollTablet ? "flex" : "grid",
            gridTemplateColumns: isSnapScrollTablet ? undefined : `repeat(${numberOfColumn_tablet}, minmax(0, 1fr))`
            // ------ end setting snap scroll x
          },
          [`@media (min-width: ${media_desktop})`]: {
            rowGap: rowGap_desktop,
            columnGap: colunmGap_desktop,
            // ------ setting snap scroll x
            "> div": isSnapScrollDesktop ? {
              scrollSnapAlign: "start",
              flexShrink: 0,
              // tinh toan the nay de tao phan thut-tho cho slider
              flexBasis: `calc((100% - (${Number(numberOfColumn_desktop) - 1} * ${colunmGap_desktop})) / ${Number(numberOfColumn_desktop)} - ${peekAfter_desktop})`
            } : {},
            overflowX: isSnapScrollDesktop ? "auto" : undefined,
            scrollSnapType: isSnapScrollDesktop ? "x proximity" : undefined,
            display: isSnapScrollDesktop ? "flex" : "grid",
            gridTemplateColumns: isSnapScrollDesktop ? undefined : `repeat(${numberOfColumn_desktop}, minmax(0, 1fr))`
            // ------ end setting snap scroll x
          },
          // SALE BADGE positioning
          ...(style_saleBadge?.position === "top-left" ? {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge": {
              position: "absolute",
              left: "0.5rem",
              // Tailwind left-2
              top: "0.5rem",
              // Tailwind top-
              zIndex: 10
            }
          } : {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge": {
              position: "absolute",
              right: "0.5rem",
              top: "0.5rem",
              zIndex: 10
            }
          }),
          // OUT OF STOCK BADGE positioning
          ...(style_outOfStock.position === "top-left" ? {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge": {
              position: "absolute",
              left: "0.5rem",
              top: "0.5rem",
              zIndex: 10
            }
          } : style_outOfStock.position === "top-right" ? {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge": {
              position: "absolute",
              right: "0.5rem",
              top: "0.5rem",
              zIndex: 10
            }
          } : {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge": {
              display: "none"
            }
          })
        }
      }
    });
  };
  const getDivWrapStyles_Pagination = () => {
    const {
      value_mobile: marginTop_mobile,
      value_tablet: marginTop_tablet,
      value_desktop: marginTop_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_pagination.marginTop
    });
    const {
      mobile_v: marginTop_mobile_new,
      tablet_v: marginTop_tablet_new,
      desktop_v: marginTop_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: marginTop_mobile,
      tablet_v: marginTop_tablet,
      desktop_v: marginTop_desktop
    });
    return {
      [`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
        marginTop: marginTop_mobile_new,
        justifyContent: style_pagination.justifyContent,
        [`.page-numbers`]: {
          color: style_pagination.mainStyle.Normal.color,
          backgroundColor: style_pagination.mainStyle.Normal.backgroundColor
        },
        [`.page-numbers.current`]: {
          color: style_pagination.mainStyle.Active.color,
          backgroundColor: style_pagination.mainStyle.Active.backgroundColor
        },
        [`@media (min-width: ${media_tablet})`]: marginTop_tablet_new ? {
          marginTop: marginTop_tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: marginTop_desktop_new ? {
          marginTop: marginTop_desktop_new
        } : undefined
      }
    };
  };
  const getDivWrapStyles_Rating = () => {
    const {
      value_mobile: marginTop_mobile,
      value_tablet: marginTop_tablet,
      value_desktop: marginTop_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_pagination.marginTop
    });
    const {
      mobile_v: marginTop_mobile_new,
      tablet_v: marginTop_tablet_new,
      desktop_v: marginTop_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: marginTop_mobile,
      tablet_v: marginTop_tablet,
      desktop_v: marginTop_desktop
    });
    return {
      [`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
        marginTop: marginTop_mobile_new,
        justifyContent: style_pagination.justifyContent,
        [`.page-numbers`]: {
          color: style_pagination.mainStyle.Normal.color,
          backgroundColor: style_pagination.mainStyle.Normal.backgroundColor
        },
        [`.page-numbers.current`]: {
          color: style_pagination.mainStyle.Active.color,
          backgroundColor: style_pagination.mainStyle.Active.backgroundColor
        },
        [`@media (min-width: ${media_tablet})`]: marginTop_tablet_new ? {
          marginTop: marginTop_tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: marginTop_desktop_new ? {
          marginTop: marginTop_desktop_new
        } : undefined
      }
    };
  };
  //

  //
  const getPostCardWrapStyles = () => {
    var _ref;
    const {
      value_mobile: titleMarginBottom_mobile,
      value_tablet: titleMarginBottom_tablet,
      value_desktop: titleMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_title.marginBottom
    });
    const {
      value_mobile: saleBadgeMarginBottom_mobile,
      value_tablet: saleBadgeMarginBottom_tablet,
      value_desktop: saleBadgeMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_saleBadge.marginBottom
    });
    const {
      value_mobile: outofstockBadgeMarginBottom_mobile,
      value_tablet: outofstockBadgeMarginBottom_tablet,
      value_desktop: outofstockBadgeMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_outOfStock.marginBottom
    });
    const {
      value_mobile: featuredImageMarginBottom_mobile,
      value_tablet: featuredImageMarginBottom_tablet,
      value_desktop: featuredImageMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_featuredImage.marginBottom
    });
    const {
      value_mobile: priceMarginBottom_mobile,
      value_tablet: priceMarginBottom_tablet,
      value_desktop: priceMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_price.marginBottom
    });
    const {
      value_mobile: ratingMarginBottom_mobile,
      value_tablet: ratingMarginBottom_tablet,
      value_desktop: ratingMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_rating.marginBottom
    });
    const {
      value_mobile: categoryMarginBottom_mobile,
      value_tablet: categoryMarginBottom_tablet,
      value_desktop: categoryMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_category.marginBottom
    });

    //
    const {
      mobile_v: titleMarginBottom_mobile_new,
      tablet_v: titleMarginBottom_tablet_new,
      desktop_v: titleMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: titleMarginBottom_mobile,
      tablet_v: titleMarginBottom_tablet,
      desktop_v: titleMarginBottom_desktop
    });
    const {
      mobile_v: saleBadgeMarginBottom_mobile_new,
      tablet_v: saleBadgeMarginBottom_tablet_new,
      desktop_v: saleBadgeMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: saleBadgeMarginBottom_mobile,
      tablet_v: saleBadgeMarginBottom_tablet,
      desktop_v: saleBadgeMarginBottom_desktop
    });
    const {
      mobile_v: outofstockBadgeMarginBottom_mobile_new,
      tablet_v: outofstockBadgeMarginBottom_tablet_new,
      desktop_v: outofstockBadgeMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: outofstockBadgeMarginBottom_mobile,
      tablet_v: outofstockBadgeMarginBottom_tablet,
      desktop_v: outofstockBadgeMarginBottom_desktop
    });
    const {
      mobile_v: featuredImageMarginBottom_mobile_new,
      tablet_v: featuredImageMarginBottom_tablet_new,
      desktop_v: featuredImageMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: featuredImageMarginBottom_mobile,
      tablet_v: featuredImageMarginBottom_tablet,
      desktop_v: featuredImageMarginBottom_desktop
    });
    const {
      mobile_v: priceMarginBottom_mobile_new,
      tablet_v: priceMarginBottom_tablet_new,
      desktop_v: priceMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: priceMarginBottom_mobile,
      tablet_v: priceMarginBottom_tablet,
      desktop_v: priceMarginBottom_desktop
    });
    const {
      mobile_v: ratingMarginBottom_mobile_new,
      tablet_v: ratingMarginBottom_tablet_new,
      desktop_v: ratingMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: ratingMarginBottom_mobile,
      tablet_v: ratingMarginBottom_tablet,
      desktop_v: ratingMarginBottom_desktop
    });
    const {
      mobile_v: categoryMarginBottom_mobile_new,
      tablet_v: categoryMarginBottom_tablet_new,
      desktop_v: categoryMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: categoryMarginBottom_mobile,
      tablet_v: categoryMarginBottom_tablet,
      desktop_v: categoryMarginBottom_desktop
    });
    //
    return [{
      [POST_CARD_CLASS]: {
        fontSize: "16px",
        height: "auto",
        display: "inline-block",
        position: "relative",
        ".wcb-products__product--topRight": {
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 3
        },
        "&.wcb-products__product--btnIconAddToCart:hover": {
          ".wcb-products__product--btnIconAddToCart--item": {
            position: "absolute",
            top: 0,
            right: 0,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor : "#ffffff",
            transformOrigin: "top right",
            transition: "transform 0.2s ease, box-shadow 0.2s",
            zIndex: 2,
            marginTop: "0px !important",
            borderRadius: (_ref = style_addToCardBtn?.border?.radius?.Desktop) !== null && _ref !== void 0 ? _ref : "0px",
            "&::after": {
              content: '""',
              width: "1.2rem",
              height: "1.2rem",
              backgroundImage: (0,_base_utils__WEBPACK_IMPORTED_MODULE_9__.svgToDataUrl)(`${(0,_base_utils__WEBPACK_IMPORTED_MODULE_9__.SHOPPING_CART_SVG)(style_addToCardBtn?.colorAndBackgroundColor?.Normal?.color)}`),
              margin: "auto",
              transformOrigin: "top right",
              zIndex: 1,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              pointerEvents: "none"
            }
          },
          ".wcb-products__product--btnIconAddToCart--item:hover": {
            position: "absolute",
            top: 0,
            right: 0,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor : "#474747",
            marginTop: "0px !important",
            "&::after": {
              content: '""',
              width: "1.2rem",
              height: "1.2rem",
              backgroundImage: `url(${(0,_base_utils__WEBPACK_IMPORTED_MODULE_9__.SHOPPING_CART_SVG)(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color)})`,
              margin: "auto",
              zIndex: 1,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              pointerEvents: "none"
            }
          }
        },
        "&.wcb-products__product--wishlistTopRight:hover": {
          ".wcb-products__product--wishlistTopRight--item": {
            position: "absolute",
            top: general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position === "top-right" ? "2.5rem" : 0,
            right: 0,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            textDecoration: "none",
            transformOrigin: "top right",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            zIndex: 2,
            "&::before": {
              content: '"\\e909"',
              //TODO: content: '"\\e908"',
              color: "#000",
              margin: "auto",
              position: "relative",
              zIndex: 1,
              display: "inline-block",
              fontFamily: "tinvwl-webfont !important",
              speak: "none",
              fontStyle: "normal",
              fontWeight: 400,
              fontVariant: "normal",
              textTransform: "none",
              lineHeight: 1,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              fontSize: "20px",
              verticalAlign: "sub"
            },
            "&.tinvwl-product-in-list::before": {
              color: "#ffffff"
            }
          },
          ".wcb-products__product--wishlistTopRight--item:hover": {
            color: "#ffffff",
            background: "#474747",
            "&::before": {
              content: '"\\e909"',
              //TODO: content: '"\\e908"',
              color: "#ffffff",
              margin: "auto",
              position: "relative",
              zIndex: 1,
              display: "inline-block",
              fontFamily: "tinvwl-webfont !important",
              speak: "none",
              fontStyle: "normal",
              fontWeight: 400,
              fontVariant: "normal",
              textTransform: "none",
              lineHeight: 1,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              fontSize: "20px",
              verticalAlign: "sub"
            }
          }
        }
      }
    }, {
      [POST_CARD_CLASS]: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: !style_layout.isEqualHeight ? "max-content" : undefined,
        textAlign: style_layout.textAlignment,
        backgroundColor: style_layout.backgroundColor,
        ".wcb-products__add-to-cart-icon": {
          display: general_addToCartBtn?.position === "bottom" ? "none" : "block"
        },
        ":hover": {
          ".wcb-products__product-price": {
            display: general_addToCartBtn?.position === "bottom" ? "none" : "block"
          },
          //TODO: handle style in edit page
          ".wcb-products__product-add-to-cart": {
            backgroundColor: general_addToCartBtn?.position === "bottom" ? "#fff" : "inherit",
            "span": {
              color: style_addToCardBtn?.colorAndBackgroundColor?.Normal.color
            },
            ".wcb-products__add-to-cart-icon": {
              display: "block"
            }
          }
        },
        // ".wcb-products__product-image":
        ".wcb-products__product-image-link": featuredImageMarginBottom_mobile_new || featuredImageMarginBottom_tablet_new || featuredImageMarginBottom_desktop_new ? {
          marginBottom: featuredImageMarginBottom_mobile_new,
          [`@media (min-width: ${media_tablet})`]: featuredImageMarginBottom_tablet_new ? {
            marginBottom: featuredImageMarginBottom_tablet_new
          } : undefined,
          [`@media (min-width: ${media_desktop})`]: featuredImageMarginBottom_desktop_new ? {
            marginBottom: featuredImageMarginBottom_desktop_new
          } : undefined
        } : undefined,
        ".wcb-products__product-title": {
          marginBottom: titleMarginBottom_mobile_new,
          color: style_title.textColor
        },
        ".wcb-products__product-categories": {
          marginBottom: categoryMarginBottom_mobile_new,
          color: style_category.textColor,
          a: {
            color: style_category.textColor
          }
        },
        ".wcb-products__product-salebadge": {
          marginBottom: saleBadgeMarginBottom_mobile_new,
          ".wcb-products__product-onsale": {
            color: style_saleBadge.textColor,
            backgroundColor: style_saleBadge.backgroundColor
          }
        },
        ".wcb-products__product-outofstock-badge": {
          marginBottom: outofstockBadgeMarginBottom_mobile_new,
          ".wcb-products__product-on-outofstock": {
            color: style_outOfStock.textColor,
            backgroundColor: style_outOfStock.backgroundColor
          }
        },
        ".wcb-products__product-price": {
          marginBottom: priceMarginBottom_mobile_new,
          color: style_price.textColor
        },
        ".wcb-products__product-rating": {
          marginBottom: ratingMarginBottom_mobile_new,
          color: style_rating.color
        },
        [`@media (min-width: ${media_tablet})`]: titleMarginBottom_tablet_new || saleBadgeMarginBottom_tablet_new || priceMarginBottom_tablet_new || ratingMarginBottom_tablet_new || outofstockBadgeMarginBottom_tablet_new ? {
          ".wcb-products__product-title": titleMarginBottom_tablet_new ? {
            marginBottom: titleMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-categories": categoryMarginBottom_tablet_new ? {
            marginBottom: categoryMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-salebadge": saleBadgeMarginBottom_tablet_new ? {
            marginBottom: saleBadgeMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-outofstock-badge": outofstockBadgeMarginBottom_tablet_new ? {
            marginBottom: outofstockBadgeMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-price": priceMarginBottom_tablet_new ? {
            marginBottom: priceMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-rating": ratingMarginBottom_tablet_new ? {
            marginBottom: ratingMarginBottom_tablet_new
          } : undefined
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: titleMarginBottom_desktop_new || saleBadgeMarginBottom_desktop_new || priceMarginBottom_desktop_new || ratingMarginBottom_desktop_new || outofstockBadgeMarginBottom_desktop_new ? {
          ".wcb-products__product-title": titleMarginBottom_desktop_new ? {
            marginBottom: titleMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-categories": categoryMarginBottom_desktop_new ? {
            marginBottom: categoryMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-salebadge": saleBadgeMarginBottom_desktop_new ? {
            marginBottom: saleBadgeMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-outofstock-badge": outofstockBadgeMarginBottom_desktop_new ? {
            marginBottom: outofstockBadgeMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-price": priceMarginBottom_desktop_new ? {
            marginBottom: priceMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-rating": ratingMarginBottom_desktop_new ? {
            marginBottom: ratingMarginBottom_desktop_new
          } : undefined
        } : undefined
      }
    }, (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      // className: `${POST_CARD_CLASS} .wcb-products__product-image`,
      className: `${WRAP_CLASSNAME} .wcb-products__product-image-link`,
      border: style_featuredImage.border,
      isWithRadius: true
    })];
  };
  const getPostCardStyles_AddToCart = position => {
    const {
      backgroundColor,
      color
    } = style_addToCardBtn.colorAndBackgroundColor.Normal;
    const {
      backgroundColor: backgroundColor_h,
      color: color_h
    } = style_addToCardBtn.colorAndBackgroundColor.Hover;
    const {
      value_mobile: marginBottom_mobile,
      value_tablet: marginBottom_tablet,
      value_desktop: marginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_addToCardBtn.marginBottom || {
        Desktop: "1rem"
      }
    });

    //
    const {
      mobile_v: marginBottom_mobile_new,
      tablet_v: marginBottom_tablet_new,
      desktop_v: marginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: marginBottom_mobile,
      tablet_v: marginBottom_tablet,
      desktop_v: marginBottom_desktop
    });
    //
    return {
      [ADD_TO_CART_BTN_BG]: {
        justifyContent: "center",
        ":hover span": {
          color: color_h ? color_h : "white"
        }
      },
      [ADD_TO_CART_BTN]: {
        display: position === "icon" ? "none" : "block",
        color,
        backgroundColor: position === "bottom visible" || position === "inside image" ? backgroundColor : "#fff",
        marginBottom: marginBottom_mobile_new,
        ":hover": {
          color: color_h,
          backgroundColor: position === "bottom visible" || position === "inside image" || position === "icon" ? backgroundColor_h : "#fff !important"
        },
        [`@media (min-width: ${media_tablet})`]: marginBottom_tablet_new ? {
          marginBottom: marginBottom_tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: marginBottom_desktop_new ? {
          marginBottom: marginBottom_desktop_new
        } : undefined
        // textTransform: "uppercase",
        // fontWeight: 600,
      },
      [`${ADD_TO_CART_BTN}.added`]: {
        display: "none"
      },
      [ADD_TO_CART_BTN_ICON]: {
        color,
        backgroundColor,
        marginBottom: marginBottom_mobile_new,
        ":hover": {
          color: color_h,
          backgroundColor: backgroundColor_h
        },
        [`@media (min-width: ${media_tablet})`]: marginBottom_tablet_new ? {
          marginBottom: marginBottom_tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: marginBottom_desktop_new ? {
          marginBottom: marginBottom_desktop_new
        } : undefined
      }
    };
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderDivListWrapStyle(), general_content.isShowTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-title",
      typography: style_title.typography
    })
  }), general_content.isShowCategory && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-categories",
      typography: style_category.typography
    })
  }), general_content.isShowRating && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles_Rating()
  }), general_content.isShowPrice && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-price",
      typography: style_price.typography
    })
  }), general_content.isShowSaleBadge && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-onsale",
      typography: style_saleBadge.typography
    })
  }), general_content.isShowOutOfStock && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-on-outofstock",
      typography: style_outOfStock.typography
    })
  }), general_pagination.isShowPagination ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles_Pagination()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers`,
      border: style_pagination.mainStyle.Normal.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers.current`,
      border: style_pagination.mainStyle.Active.border,
      isWithRadius: true
    })
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getPostCardWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: POST_CARD_CLASS,
      padding: style_layout.padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${POST_CARD_CLASS}`,
      border: style_border,
      isWithRadius: true
    })
  }), general_addToCartBtn.isShowButton ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === "bottom visible" || general_addToCartBtn?.position === "inside image" || general_addToCartBtn?.position === "icon" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getPostCardStyles_AddToCart(general_addToCartBtn?.position)
  }) : null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: ADD_TO_CART_BTN,
      typography: style_addToCardBtn.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: ADD_TO_CART_BTN,
      border: style_addToCardBtn.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: ADD_TO_CART_BTN,
      padding: style_addToCardBtn.padding
    })
  })) : null, general_featuredImage?.hoverType !== "none" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: {
      [`${PRODUCT_IMAGE_CLASS}`]: {
        ":hover": {
          transition: `all 0.3s ease-in-out`
        }
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "block"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-block-products-uniqueId": uniqueId
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/block-products/base-utils.ts":
/*!******************************************!*\
  !*** ./src/block-products/base-utils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_PRODUCT_LIST_LAYOUT: () => (/* binding */ DEFAULT_PRODUCT_LIST_LAYOUT),
/* harmony export */   SHOPPING_CART_SVG: () => (/* binding */ SHOPPING_CART_SVG),
/* harmony export */   getProductLayoutConfig: () => (/* binding */ getProductLayoutConfig),
/* harmony export */   svgToDataUrl: () => (/* binding */ svgToDataUrl)
/* harmony export */ });
/**
 * The default layout built from the default template.
 */
const DEFAULT_PRODUCT_LIST_LAYOUT = [["core/paragraph"], ["core/heading"], ["core/buttons"]
//
// ['core/paragraph', { imageSizing: 'cropped' }],
// [ 'woocommerce/product-title' ],
// [ 'woocommerce/product-price' ],
// [ 'woocommerce/product-rating' ],
// [ 'woocommerce/product-button' ],
];

/**
 * Converts innerblocks to a list of layout configs.
 *
 * @param {Object[]} innerBlocks Inner block components.
 */
const getProductLayoutConfig = innerBlocks => {
  if (!innerBlocks || innerBlocks.length === 0) {
    return [];
  }
  return innerBlocks.map(block => {
    return [block.name, {
      ...block.attributes,
      product: undefined,
      children: block.innerBlocks.length > 0 ? getProductLayoutConfig(block.innerBlocks) : []
    }];
  });
};
const SHOPPING_CART_SVG = color => {
  return `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" width="17" height="17" viewBox="0 0 17 17" id="svg50" sodipodi:docname="shopping-cart-2.svg" inkscape:version="1.0.2-2 (e86c870879, 2021-01-15)">
				<metadata id="metadata56">
					<rdf:rdf>
					<cc:work rdf:about="">
						<dc:format>image/svg+xml</dc:format>
						<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
						<dc:title></dc:title>
					</cc:work>
					</rdf:rdf>
				</metadata>
				<defs id="defs54"></defs>
				<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="2400" inkscape:window-height="1271" id="namedview52" showgrid="false" inkscape:zoom="48.823529" inkscape:cx="8.5" inkscape:cy="8.5" inkscape:window-x="2391" inkscape:window-y="-9" inkscape:window-maximized="1" inkscape:current-layer="svg50"></sodipodi:namedview>
				<g id="g46" transform="matrix(-1,0,0,1,16.926,0)"></g>
				<path d="m 14.176,12.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z m -8.5,-2.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z M 3.555,2 3.857,4 H 17 l -1.118,8.036 H 3.969 L 2.931,4.573 2.695,3 H -0.074 V 2 Z M 4,5 4.139,6 H 15.713 L 15.852,5 Z M 15.012,11.036 15.573,7 H 4.278 l 0.561,4.036 z" 
				fill="${color}"
				id="path48"></path>
			</svg>`;
};
const svgToDataUrl = svgString => {
  const encoded = encodeURIComponent(svgString).replace(/'/g, '%27').replace(/"/g, '%22');
  return `url("data:image/svg+xml,${encoded}")`;
};

/***/ }),

/***/ "./src/utils/getCssProperyHasResponsive.ts":
/*!*************************************************!*\
  !*** ./src/utils/getCssProperyHasResponsive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");

function getCssProperyHasResponsive({
  cssProperty
}) {
  const {
    value_Desktop: value_desktop,
    value_Tablet: value_tablet,
    value_Mobile: value_mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__["default"])(cssProperty);
  // const value_desktop = cssProperty.Desktop;
  // const value_tablet = cssProperty.Tablet || value_desktop;
  // const value_mobile = cssProperty.Mobile || value_tablet;
  return {
    value_desktop,
    value_tablet,
    value_mobile
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCssProperyHasResponsive);

/***/ })

}]);
//# sourceMappingURL=src_block-products_GlobalCss_tsx.js.map
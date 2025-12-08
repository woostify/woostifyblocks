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
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getCssProperyHasResponsive */ "./src/utils/getCssProperyHasResponsive.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base-utils */ "./src/block-products/base-utils.ts");
/* harmony import */ var _WcbThemeDefaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WcbThemeDefaults */ "./src/block-products/WcbThemeDefaults.ts");

/* eslint-disable camelcase -- block attributes intentionally use snake_case names */












const GlobalCss = attrs => {
  const mergedAttrs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_WcbThemeDefaults__WEBPACK_IMPORTED_MODULE_10__.mergeProductAttrsWithThemeDefaults)(attrs), [attrs]);
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
  } = mergedAttrs;
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
  const ADD_TO_CART_BTN_VIEW_CARD_BG = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart added_to_cart`;
  const ADD_TO_CART_VIEW_CARD_BTN = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart a.added_to_cart`;
  const ADD_TO_CART_BTN_VIEW_CARD_ICON = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart-icon`;
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
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
        overflow: "hidden",
        // Style Add to cart button - position: top right - icon
        ".wcb-products__product--topRight": {
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 3
        },
        "&.wcb-products__product--btnIconAddToCart .added_to_cart": {
          position: "relative",
          top: "-2rem",
          right: "-84px",
          transform: "translateY(2.5rem)",
          transition: "transform 0.2s ease-in-out",
          zIndex: 2,
          marginTop: "0px !important",
          background: "#3a3a3a"
        },
        "&.wcb-products__product--btnIconAddToCart:hover": {
          ".added_to_cart span:not(.woostify-svg-icon)": {
            display: "none"
          },
          ".added_to_cart .woostify-svg-icon": {
            position: "relative",
            top: "-7px",
            right: "9.6px",
            transform: "translateY(2.5rem)",
            transition: "transform 0.2s ease-in-out",
            width: "2.5rem",
            height: "2.5rem",
            alignItems: "center",
            justifyContent: "center",
            background: "#3a3a3a"
          },
          ".added_to_cart .woostify-svg-icon svg": {
            color: "#ffffff"
          },
          ".wcb-products__product--btnIconAddToCart--item": {
            position: "relative",
            top: "-2.5rem",
            right: 0,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor : "#ffffff",
            // transformOrigin: "top right",
            // transition: "transform 0.2s ease, box-shadow 0.2s",
            /* ===  Animation === */
            transform: "translateY(2.5rem)",
            transition: "transform 0.2s ease-in-out",
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
          ".wcb-products__product--btnIconAddToCart--item.added": {
            display: "none",
            content: "none"
          },
          ".wcb-products__product--btnIconAddToCart--item.added::after": {
            display: "none",
            content: "none"
          },
          ".wcb-products__product--btnIconAddToCart--item:hover": {
            background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor : "#474747",
            marginTop: "0px !important",
            "&::after": {
              content: '""',
              width: "1.2rem",
              height: "1.2rem",
              backgroundImage: (0,_base_utils__WEBPACK_IMPORTED_MODULE_9__.svgToDataUrl)(`${(0,_base_utils__WEBPACK_IMPORTED_MODULE_9__.SHOPPING_CART_SVG)(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color)}`),
              margin: "auto",
              zIndex: 1,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              pointerEvents: "none"
            }
          },
          // Style loading display is none for top right icon add to cart button
          ".add_to_cart_button--loading.wcb-products__product--btnIconAddToCart--item:hover": {
            background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor : "#474747",
            marginTop: "0px !important",
            "&::after": {
              display: "none"
            }
          }
        },
        "&.wcb-products__product--wishlistTopRight:hover": {
          ".wcb-products__product--wishlistTopRight--item": {
            position: general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position === "top-right" ? "absolute" : "relative",
            top: general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position === "top-right" ? "0" : "-2.5rem",
            right: 0,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            textDecoration: "none",
            // transformOrigin: "top bottom",
            // transition: "transform 2s ease",
            /* ===  Animation === */
            transform: "translateY(2.5rem)",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            zIndex: 2,
            border: "none",
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
            "&.is-in-wishlist::before": {
              content: '"\\e908"',
              color: "#000"
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
            },
            "&.is-in-wishlist::before": {
              content: '"\\e908"',
              color: "#ffffff"
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
        ".wcb-products__price-button-wrapper": {
          height: "40px",
          lineHeight: "36px",
          overflow: "hidden"
        },
        // Style layout bottom add to cart button
        ".wcb-products__product-style-hidden-btn-add-to-cart": {
          display: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === "inside image" ? "none !important" : "unset",
          alignItems: "center"
        },
        ".wcb-products__add-to-cart-icon, .wcb-products__add-to-cart-label": {
          display: general_addToCartBtn?.position === "icon" ? "none" : "block",
          // opacity: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? 0 : "unset",
          transform: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon' ? "translateY(0px)" : "unset",
          transition: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon' ? "all 0.3s ease-in-out" : "unset"
        },
        ".wcb-products__product-price": {
          // opacity: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? 1 : "unset",
          transform: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon' ? "translateY(0px)" : "unset",
          transition: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon' ? "all 0.3s ease-in-out" : "unset"
        },
        ".added_to_cart": {
          transform: general_addToCartBtn?.position === "bottom" ? "translateY(92px)" : "unset",
          opacity: general_addToCartBtn?.position === "bottom" ? 0 : "unset",
          transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset"
        },
        ":hover": {
          ".wcb-products__product-price": {
            // opacity: general_addToCartBtn?.position === "bottom" ? 0 : "unset",
            transform: general_addToCartBtn?.position === "bottom" ? "translateY(-30px)" : "unset",
            transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset"
            // display: general_addToCartBtn?.position === "bottom" ? "none" : "block",
          },
          //TODO: handle style in edit page
          ".wcb-products__product-add-to-cart": {
            backgroundColor: general_addToCartBtn?.position === "bottom" ? "#fff" : "inherit",
            "span": {
              color: style_addToCardBtn?.colorAndBackgroundColor?.Normal.color
            },
            ".wcb-products__add-to-cart-icon, .wcb-products__add-to-cart-label": {
              // display: general_addToCartBtn?.position === "icon" ? "none" : "block",
              transform: general_addToCartBtn?.position === "bottom" ? "translateY(-60px)" : "unset",
              opacity: general_addToCartBtn?.position === "bottom" ? 1 : general_addToCartBtn?.position === "icon" ? 0 : "unset",
              transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset"
              // clipPath: general_addToCartBtn?.position === "bottom" ? "inset(0 0 0 0)" : general_addToCartBtn?.position === "icon" ? "inset(100% 0 0 0)" : "unset",
            },
            ".added_to_cart": {
              transform: general_addToCartBtn?.position === "bottom" ? "translateY(60px)" : "unset",
              opacity: general_addToCartBtn?.position === "bottom" ? 1 : "unset",
              transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset"
            }
          },
          ".wcb-products__product-add-to-cart .add_to_cart_button--loading": {
            ".wcb-products__add-to-cart-icon": {
              display: "none !important"
            }
          },
          ".wcb-products__product-add-to-cart:hover": {
            ".add_to_cart_button span": {
              color: style_addToCardBtn?.colorAndBackgroundColor?.Hover.color
            },
            "span.woostify-svg-icon svg": {
              color: general_addToCartBtn?.position === "bottom" ? "#2b2b2b !important" : "#FFFFFF !important"
            }
          },
          "span.woostify-svg-icon svg": {
            color: general_addToCartBtn?.position === "bottom" ? "#2b2b2b !important" : "#FFFFFF !important"
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ":hover span": {
          color: color_h ? color_h : "white"
        }
      },
      [ADD_TO_CART_BTN]: {
        display: position === "icon" || position === "bottom" ? "none" : "block",
        color,
        backgroundColor: position === "bottom visible" || position === "inside image" ? backgroundColor : "#fff",
        marginBottom: marginBottom_mobile_new,
        ":hover": {
          color: color_h ? `${color_h} !important` : undefined,
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
      // Style layout 2 - Add to cart button at bottom
      [ADD_TO_CART_VIEW_CARD_BTN]: {
        position: position === "bottom" ? "relative" : "unset",
        top: position === "bottom" ? "-112px !important" : "unset",
        backgroundColor: position === "bottom" ? "unset" : "#1346AF !important",
        color: position === "bottom" ? "#2b2b2b !important" : "#FFFFFF !important",
        borderRadius: "20px !important",
        padding: "4px !important",
        width: "9rem !important",
        ":hover": {
          backgroundColor: position === "bottom" ? "unset" : "#3a3a3a !important",
          color: position === "bottom" ? "#1346AF !important" : "#FFFFFF !important",
          borderRadius: "20px !important",
          padding: "4px !important",
          "svg path": {
            fill: position === "bottom" ? "#1346AF !important" : "#FFFFFF !important"
          }
        }
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderDivListWrapStyle(), general_content.isShowTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-title",
      typography: style_title.typography
    })
  }), general_content.isShowCategory && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-categories",
      typography: style_category.typography
    })
  }), general_content.isShowRating && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles_Rating()
  }), general_content.isShowPrice && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-price",
      typography: style_price.typography
    })
  }), general_content.isShowSaleBadge && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-onsale",
      typography: style_saleBadge.typography
    })
  }), general_content.isShowOutOfStock && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-on-outofstock",
      typography: style_outOfStock.typography
    })
  }), general_pagination.isShowPagination ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles_Pagination()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers`,
      border: style_pagination.mainStyle.Normal.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers.current`,
      border: style_pagination.mainStyle.Active.border,
      isWithRadius: true
    })
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getPostCardWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: POST_CARD_CLASS,
      padding: style_layout.padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${POST_CARD_CLASS}`,
      border: style_border,
      isWithRadius: true
    })
  }), general_addToCartBtn.isShowButton ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === "bottom visible" || general_addToCartBtn?.position === "inside image" || general_addToCartBtn?.position === "icon" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getPostCardStyles_AddToCart(general_addToCartBtn?.position)
  }) : null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: ADD_TO_CART_BTN,
      typography: style_addToCardBtn.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: ADD_TO_CART_BTN,
      border: style_addToCardBtn.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: ADD_TO_CART_BTN,
      padding: style_addToCardBtn.padding
    })
  })) : null, general_featuredImage?.hoverType !== "none" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: {
      [`${PRODUCT_IMAGE_CLASS}`]: {
        ":hover": {
          transition: `all 0.3s ease-in-out`
        }
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
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

/***/ "./src/block-products/WcbProducstPanelSortingAndFiltering.tsx":
/*!********************************************************************!*\
  !*** ./src/block-products/WcbProducstPanelSortingAndFiltering.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/block-products/constants.ts");
/* harmony import */ var _product_category_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-category-control */ "./src/block-products/product-category-control/index.tsx");
/* harmony import */ var _product_tag_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-tag-control */ "./src/block-products/product-tag-control/index.tsx");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _product_attribute_term_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-attribute-term-control */ "./src/block-products/product-attribute-term-control/index.tsx");





// @ts-ignore








const WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO = {
  emptyMessage: "No post found!",
  numberOfItems: 10,
  isOnSale: false,
  stockStatus: [],
  categories: [],
  tags: [],
  attributes: [],
  keyword: "",
  catOperator: "any",
  tagOperator: "any",
  attrOperator: "any",
  order: "DESC",
  orderBy: "date ID"
};
function getStockStatusIdByLabel(statusLabel) {
  const label = typeof statusLabel === "string" ? statusLabel : statusLabel.value;
  return Object.entries((0,_constants__WEBPACK_IMPORTED_MODULE_5__.get_STOCK_STATUS_OPTIONS)()).find(([, value]) => value === label)?.[0];
}
const WcbProducstPanelSortingAndFiltering = ({
  panelData = WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  const STOCK_STATUS_OPTIONS = (0,_constants__WEBPACK_IMPORTED_MODULE_5__.get_STOCK_STATUS_OPTIONS)();
  const renderSelectOrderBy = () => {
    const OPTIONS = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("ID", "wcb"),
      value: "ID"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Date", "wcb"),
      value: "date ID"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "wcb"),
      value: "title"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Menu order", "wcb"),
      value: "menu_order title"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Popularity", "wcb"),
      value: "popularity"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Price", "wcb"),
      value: "price"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Rating", "wcb"),
      value: "rating"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Relevance", "wcb"),
      value: "relevance"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Random", "wcb"),
      value: "rand"
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Order products by", "wcb"),
      value: panelData.orderBy,
      options: OPTIONS,
      onChange: orderby => setAttr__({
        ...panelData,
        orderBy: orderby
      })
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    className: "space-y-5",
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Sorting and filtering", "wcb")
  }, renderSelectOrderBy(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Order", "wcb"),
    value: panelData.order,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("DESC", "wcb"),
      value: "DESC"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("ASC", "wcb"),
      value: "ASC"
    }],
    onChange: order => setAttr__({
      ...panelData,
      order
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show only products on sale", "wcb"),
    checked: !!panelData.isOnSale,
    onChange: isOnSale => {
      setAttr__({
        ...panelData,
        isOnSale
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "PRODUCT CATEGORIES"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_category_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selected: panelData.categories,
    operator: panelData.catOperator,
    onOperatorChange: operator => {
      setAttr__({
        ...panelData,
        catOperator: operator
      });
    },
    onChange: value => {
      const ids = value.map(({
        id
      }) => String(id));
      setAttr__({
        ...panelData,
        categories: ids
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "PRODUCT TAGS"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_tag_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selected: panelData.tags,
    operator: panelData.tagOperator,
    onOperatorChange: operator => {
      setAttr__({
        ...panelData,
        tagOperator: operator
      });
    },
    onChange: value => {
      const ids = value.map(({
        id
      }) => String(id));
      setAttr__({
        ...panelData,
        tags: ids
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "PRODUCT ATTRIBUTES"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_attribute_term_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selected: panelData.attributes,
    onChange: (value = []) => {
      const result = value.map(({
        id,
        attr_slug: attributeSlug
      }) => ({
        id,
        attr_slug: attributeSlug
      }));
      setAttr__({
        ...panelData,
        attributes: result
      });
    },
    operator: panelData.attrOperator,
    onOperatorChange: (value = "any") => setAttr__({
      ...panelData,
      attrOperator: value
    }),
    isCompact: true
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    value: panelData.keyword,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("KEYWORD", "wcb"),
    onChange: nextValue => setAttr__({
      ...panelData,
      keyword: nextValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Stock status", "wcb"),
    onChange: statusLabels => {
      const __woocommerceStockStatus = statusLabels.map(getStockStatusIdByLabel).filter(Boolean);
      setAttr__({
        ...panelData,
        stockStatus: __woocommerceStockStatus
      });
    },
    suggestions: Object.values(STOCK_STATUS_OPTIONS)
    // @ts-ignore
    ,
    validateInput: value => Object.values(STOCK_STATUS_OPTIONS).includes(value),
    value: panelData.stockStatus.map(key => STOCK_STATUS_OPTIONS[key]) || [],
    __experimentalExpandOnFocus: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Number of items", "wcb")),
    value: panelData.numberOfItems,
    onChange: (numberOfItems = 10) => {
      setAttr__({
        ...panelData,
        numberOfItems
      });
    },
    min: 1,
    max: 40,
    required: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    value: panelData.emptyMessage,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Message when Posts Not Found", "wcb"),
    onChange: nextValue => setAttr__({
      ...panelData,
      emptyMessage: nextValue
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProducstPanelSortingAndFiltering);

/***/ }),

/***/ "./src/block-products/WcbProductsPanelButton.tsx":
/*!*******************************************************!*\
  !*** ./src/block-products/WcbProductsPanelButton.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");





const WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO = {
  isShowButton: true,
  position: "bottom"
};
const WcbProductsPanelButton = ({
  panelData = WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    position,
    isShowButton
  } = panelData;
  const POSTION_PLANS = [{
    name: "inside image",
    icon: "Inside image"
  }, {
    name: "bottom",
    icon: "Bottom"
  }, {
    name: "bottom visible",
    icon: "Bottom visible"
  }, {
    name: "icon",
    icon: "Icon"
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add to Cart button", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add to Cart button", "wcb"),
    onChange: checked => setAttr__({
      ...panelData,
      isShowButton: checked
    }),
    checked: isShowButton
  }), isShowButton ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Position",
    onChange: selected => setAttr__({
      ...panelData,
      position: selected
    }),
    value: position,
    plans: POSTION_PLANS,
    hasResponsive: false,
    isWrap: true
  }) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanelButton);

/***/ }),

/***/ "./src/block-products/WcbProductsPanelContent.tsx":
/*!********************************************************!*\
  !*** ./src/block-products/WcbProductsPanelContent.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_COTENT_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_COTENT_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyHeadingTagControl_MyHeadingTagControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyHeadingTagControl/MyHeadingTagControl */ "./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx");
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");







// @ts-ignore


const SALE_POSITION_OPTIONS = [{
  name: "Inside image",
  icon: "Inside image"
}, {
  name: "bottom",
  icon: "Bottom"
}];
const WCB_PRODUCTS_PANEL_COTENT_DEMO = {
  // isShowAddToCartBtn: true,
  isShowPrice: true,
  isShowRating: true,
  isShowSaleBadge: true,
  isShowOutOfStock: true,
  isShowSKU: true,
  isShowCategory: true,
  showSaleBadgeDiscoutPercent: false,
  //
  isShowTitle: true,
  titleHtmlTag: "h4",
  saleBadgePosition: "Inside image",
  taxonomyStyle: "Highlighted"
};
const WcbProductsPanelContent = ({
  panelData = WCB_PRODUCTS_PANEL_COTENT_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    isShowTitle,
    titleHtmlTag,
    taxonomyStyle,
    showSaleBadgeDiscoutPercent,
    isShowPrice,
    isShowRating,
    isShowSKU,
    isShowSaleBadge,
    saleBadgePosition,
    isShowCategory
  } = panelData;
  const renderSaleDisclosure = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Sale badge",
      defaultOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Sale badge", "wcb"),
      onChange: checked => setAttr__({
        ...panelData,
        isShowSaleBadge: checked
      }),
      checked: isShowSaleBadge
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show discount percentage", "wcb"),
      onChange: checked => setAttr__({
        ...panelData,
        showSaleBadgeDiscoutPercent: checked
      }),
      checked: showSaleBadgeDiscoutPercent
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "Position",
      onChange: selected => setAttr__({
        ...panelData,
        saleBadgePosition: selected
      }),
      value: saleBadgePosition,
      plans: SALE_POSITION_OPTIONS,
      hasResponsive: false
    }));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Content", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Product category", "wcb"),
    onChange: checked => setAttr__({
      ...panelData,
      isShowCategory: checked
    }),
    checked: isShowCategory
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Product title", "wcb"),
    onChange: checked => setAttr__({
      ...panelData,
      isShowTitle: checked
    }),
    checked: isShowTitle
  }), isShowTitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyHeadingTagControl_MyHeadingTagControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tag: titleHtmlTag,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title HTML tag", "wcb"),
    onChange: tag => setAttr__({
      ...panelData,
      titleHtmlTag: tag
    })
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Product price", "wcb"),
    onChange: checked => setAttr__({
      ...panelData,
      isShowPrice: checked
    }),
    checked: isShowPrice
  }), isShowSaleBadge ? renderSaleDisclosure() : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Sale badge", "wcb"),
    onChange: checked => setAttr__({
      ...panelData,
      isShowSaleBadge: checked
    }),
    checked: isShowSaleBadge
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Product rating", "wcb"),
    onChange: checked => setAttr__({
      ...panelData,
      isShowRating: checked
    }),
    checked: isShowRating
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanelContent);

/***/ }),

/***/ "./src/block-products/WcbProductsPanelFeaturedImage.tsx":
/*!**************************************************************!*\
  !*** ./src/block-products/WcbProductsPanelFeaturedImage.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");





const WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO = {
  isShowFeaturedImage: true,
  featuredImageSize: "large",
  featuredImagePosition: "top",
  linkCompleteBox: false,
  hoverType: "none"
};
const WcbProductsPanelFeaturedImage = ({
  panelData = WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    isShowFeaturedImage,
    featuredImageSize,
    featuredImagePosition,
    linkCompleteBox,
    hoverType
  } = panelData;
  const POSTION_PLANS = [{
    name: "top",
    icon: "Top"
  }, {
    name: "background",
    icon: "Background"
  }];
  const HOVER_PLANS = [{
    name: "none",
    icon: "None"
  }, {
    name: "swap",
    icon: "Swap"
  }, {
    name: "zoom",
    icon: "Zoom"
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Product image settings", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5 "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Product image", "wcb"),
    onChange: checked => setAttr__({
      ...panelData,
      isShowFeaturedImage: checked
    }),
    checked: isShowFeaturedImage
  }), isShowFeaturedImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link to Product Page", "wcb"),
    onChange: checked => setAttr__({
      ...panelData,
      linkCompleteBox: checked
    }),
    checked: linkCompleteBox,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Links the image to the single product listing", "wcb")
  }) : null, isShowFeaturedImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Hover",
    onChange: selected => setAttr__({
      ...panelData,
      hoverType: selected
    }),
    value: hoverType,
    plans: HOVER_PLANS,
    hasResponsive: false,
    isWrap: true
  }) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanelFeaturedImage);

/***/ }),

/***/ "./src/block-products/WcbProductsPanel_StyleAddToCartBtn.tsx":
/*!*******************************************************************!*\
  !*** ./src/block-products/WcbProductsPanel_StyleAddToCartBtn.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorBackgroundColorControl_MyColorBackgroundColorControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl */ "./src/components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl.tsx");
/* harmony import */ var _components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/controls/MyUnitControl */ "./src/components/controls/MyUnitControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");















const WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO = {
  colorAndBackgroundColor: _components_controls_MyColorBackgroundColorControl_MyColorBackgroundColorControl__WEBPACK_IMPORTED_MODULE_10__.MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
  typography: {
    ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_8__.TYPOGRAPHY_CONTROL_DEMO
  },
  padding: {
    Desktop: {
      top: "8px",
      left: "16px",
      right: "16px",
      bottom: "8px"
    }
  },
  border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_BORDER_CONTROL_DEMO,
  marginBottom: {
    Desktop: "0"
  }
};
const WcbProductsPanel_StyleAddToCartBtn = ({
  panelData = WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_9__["default"])() || "Desktop";
  const {
    typography,
    padding: paddingProps,
    border,
    colorAndBackgroundColor,
    marginBottom = {
      Desktop: "1rem"
    }
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_13__["default"])(marginBottom, deviceType);
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_13__["default"])(paddingProps, deviceType);
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add to cart button", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    typographyControl: typography,
    setAttrs__typography: typography => setAttr__({
      ...panelData,
      typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    defaultOpen: true,
    label: "Color & Background"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorBackgroundColorControl_MyColorBackgroundColorControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    controlData: colorAndBackgroundColor,
    setAttrs__control: data => {
      setAttr__({
        ...panelData,
        colorAndBackgroundColor: data
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Border & Dimensions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    borderControl: border,
    setAttrs__border: border => {
      setAttr__({
        ...panelData,
        border
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Padding", "wcb")),
    values: padding,
    onChange: value => {
      setAttr__({
        ...panelData,
        padding: {
          ...paddingProps,
          [deviceType]: value
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    units: _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_12__.MY_GAP_UNITS,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Margin bottom", "wcb"),
    hasResponsive: true
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanel_StyleAddToCartBtn);

/***/ }),

/***/ "./src/block-products/WcbProductsPanel_StyleFeaturedImage.tsx":
/*!********************************************************************!*\
  !*** ./src/block-products/WcbProductsPanel_StyleFeaturedImage.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyUnitControl */ "./src/components/controls/MyUnitControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");











const WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO = {
  marginBottom: {
    Desktop: "0.75rem"
  },
  backgroundOverlay: "#FFFFFFE6",
  border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_6__.MY_BORDER_CONTROL_DEMO
};
const WcbProductsPanel_StyleFeaturedImage = ({
  panelData = WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened,
  imagePosition = ""
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__["default"])() || "Desktop";
  const {
    marginBottom,
    backgroundOverlay
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__["default"])(marginBottom, deviceType);
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Product image", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, imagePosition !== "background" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_7__["default"], {
    defaultOpen: true,
    label: "Border"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    borderControl: panelData.border,
    setAttrs__border: value => {
      setAttr__({
        ...panelData,
        border: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    units: _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_4__.MY_GAP_UNITS,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "wcb"),
    hasResponsive: true,
    className: "flex-col space-y-2"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanel_StyleFeaturedImage);

/***/ }),

/***/ "./src/block-products/WcbProductsPanel_StyleLayout.tsx":
/*!*************************************************************!*\
  !*** ./src/block-products/WcbProductsPanel_StyleLayout.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyTextAlignControl/MyTextAlignControl */ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsNoMarginControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsNoMarginControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsNoMarginControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/types */ "./src/components/controls/MyDimensionsControl/types.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _components_controls_HelpText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/controls/HelpText */ "./src/components/controls/HelpText.tsx");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");















const WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO = {
  ..._components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_7__.MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
  textAlignment: "center",
  backgroundColor: "",
  padding: {
    Desktop: {
      bottom: "",
      top: "",
      left: "",
      right: ""
    }
  },
  numberOfColumn: {
    Desktop: 3,
    Mobile: 2,
    Tablet: 2
  },
  peekAfter: {
    Desktop: "2rem",
    Tablet: "2rem",
    Mobile: "2rem"
  },
  swithToScrollSnapX: "None",
  isEqualHeight: true
};
const WcbProductsPanel_StyleLayout = ({
  panelData = WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__["default"])() || "Desktop";
  const {
    currentDeviceValue: currentNumberOfColumn
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(panelData.numberOfColumn, deviceType);
  const {
    currentDeviceValue: currentPeekAfter
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(panelData.peekAfter, deviceType);
  const {
    textAlignment,
    backgroundColor,
    colunmGap,
    padding,
    rowGap
  } = panelData;
  const SNAPX_POSTION_PLANS = [{
    name: "Desktop",
    icon: "Desktop"
  }, {
    name: "Tablet",
    icon: "Tablet"
  }, {
    name: "Mobile",
    icon: "Mobile"
  }, {
    name: "None",
    icon: "None"
  }];
  //
  const handleChangeTextAlignment = selected => {
    setAttr__({
      ...panelData,
      textAlignment: selected
    });
  };
  const handleChangeBgColor = color => {
    setAttr__({
      ...panelData,
      backgroundColor: color
    });
  };
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    textAlignment: textAlignment,
    onChange: handleChangeTextAlignment,
    hasResponsive: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background color", "wcb"),
    onChange: handleChangeBgColor,
    color: backgroundColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns", "wcb")),
    value: currentNumberOfColumn || 1,
    onChange: number => {
      setAttr__({
        ...panelData,
        numberOfColumn: {
          ...panelData.numberOfColumn,
          [deviceType]: number || 2
        }
      });
    },
    min: 1,
    max: 6,
    required: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Swith to scroll-snap-x",
    defaultOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Swith to scroll-snap-x",
    onChange: selected => setAttr__({
      ...panelData,
      swithToScrollSnapX: selected
    }),
    value: panelData.swithToScrollSnapX,
    plans: SNAPX_POSTION_PLANS,
    hasResponsive: false,
    isWrap: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_HelpText__WEBPACK_IMPORTED_MODULE_11__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Device selection to start switching from layout GRID to layout is a scroll able row.", "wcb"))), panelData.swithToScrollSnapX !== "None" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
    hasResponsive: true,
    onChange: value => {
      setAttr__({
        ...panelData,
        peekAfter: {
          ...panelData.peekAfter,
          [deviceType]: value
        }
      });
    },
    value: currentPeekAfter || "0",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Peek After", "wcb")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_HelpText__WEBPACK_IMPORTED_MODULE_11__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The value of the future viewports which have to be visible in the current view.", "wcb")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDimensionsControl_MyDimensionsNoMarginControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dimensionControl: {
      colunmGap,
      padding,
      rowGap
    },
    setAttrs__dimensions: data => {
      setAttr__({
        ...panelData,
        ...data
      });
    },
    paddingLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding content", "wcb")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Equal height", "wcb"),
    checked: panelData.isEqualHeight,
    onChange: checked => {
      setAttr__({
        ...panelData,
        isEqualHeight: checked
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The product cards will have the same height, suitable when you set the border or background", "wcb")
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanel_StyleLayout);

/***/ }),

/***/ "./src/block-products/WcbProductsPanel_StyleOutOfStock.tsx":
/*!*****************************************************************!*\
  !*** ./src/block-products/WcbProductsPanel_StyleOutOfStock.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyUnitControl */ "./src/components/controls/MyUnitControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");












const WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO = {
  typography: {
    ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO,
    fontSizes: {
      Desktop: "12px"
    },
    textDecoration: "none",
    appearance: {
      ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO.appearance,
      style: {
        ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO.appearance.style,
        fontWeight: "500"
      }
    }
  },
  backgroundColor: "#cf2e2e",
  textColor: "#f0f9ff",
  marginBottom: {
    Desktop: "0.65rem"
  },
  position: "top-left"
};
const WcbProductsPanel_StyleOutOfStock = ({
  panelData = WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__["default"])() || "Desktop";
  const {
    typography,
    textColor,
    marginBottom,
    backgroundColor
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__["default"])(marginBottom, deviceType);
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Out of Stock", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    typographyControl: typography,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_9__["default"], {
    defaultOpen: true,
    label: "More styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "wcb"),
    onChange: color => {
      setAttr__({
        ...panelData,
        textColor: color
      });
    },
    color: textColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "wcb"),
    onChange: color => {
      setAttr__({
        ...panelData,
        backgroundColor: color
      });
    },
    color: backgroundColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    units: _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_6__.MY_GAP_UNITS,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "wcb"),
    hasResponsive: true,
    className: "flex-col space-y-2"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanel_StyleOutOfStock);

/***/ }),

/***/ "./src/block-products/WcbProductsPanel_StylePrice.tsx":
/*!************************************************************!*\
  !*** ./src/block-products/WcbProductsPanel_StylePrice.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyUnitControl */ "./src/components/controls/MyUnitControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");












const WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO = {
  typography: {
    ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO
  },
  textColor: "#737373",
  marginBottom: {
    Desktop: "0.75rem"
  }
};
const WcbProductsPanel_StylePrice = ({
  panelData = WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_8__["default"])() || "Desktop";
  const {
    typography,
    textColor,
    marginBottom
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__["default"])(marginBottom, deviceType);
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Price", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    typographyControl: typography,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    defaultOpen: true,
    label: "More styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onChange: color => {
      setAttr__({
        ...panelData,
        textColor: color
      });
    },
    color: textColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    units: _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_7__.MY_GAP_UNITS,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "wcb"),
    hasResponsive: true,
    className: "flex-col space-y-2"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanel_StylePrice);

/***/ }),

/***/ "./src/block-products/WcbProductsPanel_StyleSaleBadge.tsx":
/*!****************************************************************!*\
  !*** ./src/block-products/WcbProductsPanel_StyleSaleBadge.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyUnitControl */ "./src/components/controls/MyUnitControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");












const WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO = {
  typography: {
    ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO,
    fontSizes: {
      Desktop: "12px"
    },
    textDecoration: "none",
    appearance: {
      ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO.appearance,
      style: {
        ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO.appearance.style,
        fontWeight: "500"
      }
    }
  },
  backgroundColor: "#0c4a6e",
  textColor: "#f0f9ff",
  marginBottom: {
    Desktop: "0.65rem"
  },
  position: "top-left"
};
const WcbProductsPanel_StyleSaleBadge = ({
  panelData = WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__["default"])() || "Desktop";
  const {
    typography,
    textColor,
    marginBottom,
    backgroundColor
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__["default"])(marginBottom, deviceType);
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sale badge", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    typographyControl: typography,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_9__["default"], {
    defaultOpen: true,
    label: "More styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "wcb"),
    onChange: color => {
      setAttr__({
        ...panelData,
        textColor: color
      });
    },
    color: textColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "wcb"),
    onChange: color => {
      setAttr__({
        ...panelData,
        backgroundColor: color
      });
    },
    color: backgroundColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    units: _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_6__.MY_GAP_UNITS,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "wcb"),
    hasResponsive: true,
    className: "flex-col space-y-2"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanel_StyleSaleBadge);

/***/ }),

/***/ "./src/block-products/WcbProductsPanel_StyleTitle.tsx":
/*!************************************************************!*\
  !*** ./src/block-products/WcbProductsPanel_StyleTitle.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyUnitControl */ "./src/components/controls/MyUnitControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");












const WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO = {
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_PRODUCT_DEMO,
  textColor: "#171717",
  marginBottom: {
    Desktop: "0.75rem"
  }
};
const WcbProductsPanel_StyleTitle = ({
  panelData = WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_8__["default"])() || "Desktop";
  const {
    typography,
    textColor,
    marginBottom
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__["default"])(marginBottom, deviceType);
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "wcb")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    typographyControl: typography,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    defaultOpen: true,
    label: "More styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onChange: color => {
      setAttr__({
        ...panelData,
        textColor: color
      });
    },
    color: textColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyUnitControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    units: _components_controls_MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_7__.MY_GAP_UNITS,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "wcb"),
    hasResponsive: true,
    className: "flex-col space-y-2"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbProductsPanel_StyleTitle);

/***/ }),

/***/ "./src/block-products/WcbProductsPanel_StyleWishListButton.tsx":
/*!*********************************************************************!*\
  !*** ./src/block-products/WcbProductsPanel_StyleWishListButton.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO: () => (/* binding */ WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO)
/* harmony export */ });
const WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO = {
  position: "top-right",
  style: "yith"
};

/***/ }),

/***/ "./src/block-products/WcbThemeDefaults.ts":
/*!************************************************!*\
  !*** ./src/block-products/WcbThemeDefaults.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildGeneralAddToCartBtnDefault: () => (/* binding */ buildGeneralAddToCartBtnDefault),
/* harmony export */   buildGeneralContractDefault: () => (/* binding */ buildGeneralContractDefault),
/* harmony export */   buildGeneralFeaturedImageDefault: () => (/* binding */ buildGeneralFeaturedImageDefault),
/* harmony export */   buildSortingAndFilteringDefault: () => (/* binding */ buildSortingAndFilteringDefault),
/* harmony export */   buildStyleAddToCartBtnDefault: () => (/* binding */ buildStyleAddToCartBtnDefault),
/* harmony export */   buildStyleBorderDefault: () => (/* binding */ buildStyleBorderDefault),
/* harmony export */   buildStyleFeaturedImageDefault: () => (/* binding */ buildStyleFeaturedImageDefault),
/* harmony export */   buildStyleLayoutDefault: () => (/* binding */ buildStyleLayoutDefault),
/* harmony export */   buildStyleOutOfStockDefault: () => (/* binding */ buildStyleOutOfStockDefault),
/* harmony export */   buildStylePriceDefault: () => (/* binding */ buildStylePriceDefault),
/* harmony export */   buildStyleSaleBadgeDefault: () => (/* binding */ buildStyleSaleBadgeDefault),
/* harmony export */   buildStyleTitleDefault: () => (/* binding */ buildStyleTitleDefault),
/* harmony export */   buildStyleWishlistButtonDefault: () => (/* binding */ buildStyleWishlistButtonDefault),
/* harmony export */   mergeProductAttrsWithThemeDefaults: () => (/* binding */ mergeProductAttrsWithThemeDefaults)
/* harmony export */ });
/* harmony import */ var _block_products_WcbProductsPanel_StyleLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-products/WcbProductsPanel_StyleLayout */ "./src/block-products/WcbProductsPanel_StyleLayout.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/themeDefaults */ "./src/utils/themeDefaults.ts");
/* harmony import */ var _WcbProducstPanelSortingAndFiltering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WcbProducstPanelSortingAndFiltering */ "./src/block-products/WcbProducstPanelSortingAndFiltering.tsx");
/* harmony import */ var _WcbProductsPanelContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WcbProductsPanelContent */ "./src/block-products/WcbProductsPanelContent.tsx");
/* harmony import */ var _WcbProductsPanelFeaturedImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WcbProductsPanelFeaturedImage */ "./src/block-products/WcbProductsPanelFeaturedImage.tsx");
/* harmony import */ var _WcbProductsPanel_StyleFeaturedImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WcbProductsPanel_StyleFeaturedImage */ "./src/block-products/WcbProductsPanel_StyleFeaturedImage.tsx");
/* harmony import */ var _WcbProductsPanel_StyleSaleBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WcbProductsPanel_StyleSaleBadge */ "./src/block-products/WcbProductsPanel_StyleSaleBadge.tsx");
/* harmony import */ var _WcbProductsPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WcbProductsPanel_StyleTitle */ "./src/block-products/WcbProductsPanel_StyleTitle.tsx");
/* harmony import */ var _WcbProductsPanel_StylePrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WcbProductsPanel_StylePrice */ "./src/block-products/WcbProductsPanel_StylePrice.tsx");
/* harmony import */ var _WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WcbProductsPanel_StyleAddToCartBtn */ "./src/block-products/WcbProductsPanel_StyleAddToCartBtn.tsx");
/* harmony import */ var _WcbProductsPanelButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WcbProductsPanelButton */ "./src/block-products/WcbProductsPanelButton.tsx");
/* harmony import */ var _WcbProductsPanel_StyleOutOfStock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WcbProductsPanel_StyleOutOfStock */ "./src/block-products/WcbProductsPanel_StyleOutOfStock.tsx");
/* harmony import */ var _WcbProductsPanel_StyleWishListButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WcbProductsPanel_StyleWishListButton */ "./src/block-products/WcbProductsPanel_StyleWishListButton.tsx");














function buildStyleLayoutDefault(attr) {
  var _ref, _theme$product_per_ro, _ref2, _theme$product_per_ro2, _ref3, _theme$product_per_ro3, _ref4, _theme$shop_archive_p;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  return {
    ..._block_products_WcbProductsPanel_StyleLayout__WEBPACK_IMPORTED_MODULE_0__.WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
    ...(attr || {}),
    numberOfColumn: {
      Desktop: (_ref = (_theme$product_per_ro = theme.product_per_row?.desktop) !== null && _theme$product_per_ro !== void 0 ? _theme$product_per_ro : attr?.numberOfColumn?.Desktop) !== null && _ref !== void 0 ? _ref : _block_products_WcbProductsPanel_StyleLayout__WEBPACK_IMPORTED_MODULE_0__.WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Desktop,
      Tablet: (_ref2 = (_theme$product_per_ro2 = theme.product_per_row?.tablet) !== null && _theme$product_per_ro2 !== void 0 ? _theme$product_per_ro2 : attr?.numberOfColumn?.Tablet) !== null && _ref2 !== void 0 ? _ref2 : _block_products_WcbProductsPanel_StyleLayout__WEBPACK_IMPORTED_MODULE_0__.WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Tablet,
      Mobile: (_ref3 = (_theme$product_per_ro3 = theme.product_per_row?.mobile) !== null && _theme$product_per_ro3 !== void 0 ? _theme$product_per_ro3 : attr?.numberOfColumn?.Mobile) !== null && _ref3 !== void 0 ? _ref3 : _block_products_WcbProductsPanel_StyleLayout__WEBPACK_IMPORTED_MODULE_0__.WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Mobile
    },
    textAlignment: (_ref4 = (_theme$shop_archive_p = theme.shop_archive_product_content?.align) !== null && _theme$shop_archive_p !== void 0 ? _theme$shop_archive_p : attr?.textAlignment) !== null && _ref4 !== void 0 ? _ref4 : _block_products_WcbProductsPanel_StyleLayout__WEBPACK_IMPORTED_MODULE_0__.WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.textAlignment
  };
}
function buildStyleBorderDefault(attr) {
  var _attr$mainSettings;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const style = theme.shop_archive_border?.style;
  const color = theme.shop_archive_border?.color;
  const widthPx = theme.shop_archive_border?.width != null ? `${theme.shop_archive_border.width}px` : undefined;
  const base = (_attr$mainSettings = attr?.mainSettings) !== null && _attr$mainSettings !== void 0 ? _attr$mainSettings : _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_1__.MY_BORDER_CONTROL_DEMO.mainSettings;
  const resolved = style && style !== "none" ? {
    color: color !== null && color !== void 0 ? color : base.color,
    style: style !== null && style !== void 0 ? style : base.style,
    width: widthPx !== null && widthPx !== void 0 ? widthPx : base.width
  } : base;
  return {
    ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_1__.MY_BORDER_CONTROL_DEMO,
    ...(attr || {}),
    mainSettings: resolved
  };
}

// Build general_sortingAndFiltering with theme numberOfItems
function buildSortingAndFilteringDefault(attr) {
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  return {
    ..._WcbProducstPanelSortingAndFiltering__WEBPACK_IMPORTED_MODULE_3__.WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
    ...(attr || {}),
    numberOfItems: theme.product_per_page || attr?.numberOfItems || _WcbProducstPanelSortingAndFiltering__WEBPACK_IMPORTED_MODULE_3__.WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO.numberOfItems
  };
}
function buildGeneralContractDefault(attr) {
  var _attr$isShowTitle, _attr$isShowCategory, _attr$isShowRating, _attr$isShowPrice;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const content = theme.shop_archive_product_content;
  const toBool = (v, def) => v === undefined ? def : v === true || v === '1' || v === 1;
  return {
    ..._WcbProductsPanelContent__WEBPACK_IMPORTED_MODULE_4__.WCB_PRODUCTS_PANEL_COTENT_DEMO,
    ...(attr || {}),
    isShowTitle: toBool(content?.title_flag, (_attr$isShowTitle = attr?.isShowTitle) !== null && _attr$isShowTitle !== void 0 ? _attr$isShowTitle : _WcbProductsPanelContent__WEBPACK_IMPORTED_MODULE_4__.WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowTitle),
    isShowCategory: toBool(content?.category_flag, (_attr$isShowCategory = attr?.isShowCategory) !== null && _attr$isShowCategory !== void 0 ? _attr$isShowCategory : _WcbProductsPanelContent__WEBPACK_IMPORTED_MODULE_4__.WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowCategory),
    isShowRating: toBool(content?.rating_flag, (_attr$isShowRating = attr?.isShowRating) !== null && _attr$isShowRating !== void 0 ? _attr$isShowRating : _WcbProductsPanelContent__WEBPACK_IMPORTED_MODULE_4__.WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowRating),
    isShowPrice: toBool(content?.price_flag, (_attr$isShowPrice = attr?.isShowPrice) !== null && _attr$isShowPrice !== void 0 ? _attr$isShowPrice : _WcbProductsPanelContent__WEBPACK_IMPORTED_MODULE_4__.WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowPrice)
  };
}
function buildGeneralFeaturedImageDefault(attr) {
  var _ref5, _content$hover;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const content = theme.shop_archive_product_image;
  return {
    ..._WcbProductsPanelFeaturedImage__WEBPACK_IMPORTED_MODULE_5__.WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
    ...(attr || {}),
    hoverType: (_ref5 = (_content$hover = content?.hover) !== null && _content$hover !== void 0 ? _content$hover : attr?.hoverType) !== null && _ref5 !== void 0 ? _ref5 : _WcbProductsPanelFeaturedImage__WEBPACK_IMPORTED_MODULE_5__.WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO.hoverType
  };
}
function buildStyleFeaturedImageDefault(attr) {
  var _attr$border$mainSett;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const style = theme.shop_archive_product_image?.style;
  const color = theme.shop_archive_product_image?.color;
  const widthPx = theme.shop_archive_product_image?.width != null ? `${theme.shop_archive_product_image.width}px` : undefined;
  const base = (_attr$border$mainSett = attr?.border?.mainSettings) !== null && _attr$border$mainSett !== void 0 ? _attr$border$mainSett : _WcbProductsPanel_StyleFeaturedImage__WEBPACK_IMPORTED_MODULE_6__.WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO.border.mainSettings;
  const resolved = style && style !== "none" ? {
    color: color !== null && color !== void 0 ? color : base.color,
    style: style !== null && style !== void 0 ? style : base.style,
    width: widthPx !== null && widthPx !== void 0 ? widthPx : base.width
  } : base;
  return {
    ..._WcbProductsPanel_StyleFeaturedImage__WEBPACK_IMPORTED_MODULE_6__.WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
    ...(attr || {}),
    border: {
      ..._WcbProductsPanel_StyleFeaturedImage__WEBPACK_IMPORTED_MODULE_6__.WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO.border,
      ...(attr?.border || {}),
      mainSettings: resolved
    }
  };
}
function buildStyleSaleBadgeDefault(attr) {
  var _ref6, _saleTag$position, _ref7, _saleTag$bg_color, _ref8, _saleTag$text_color;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const saleTag = theme.shop_archive_sale_tag;

  // Get the base position value from theme or attr
  const rawPosition = (_ref6 = (_saleTag$position = saleTag?.position) !== null && _saleTag$position !== void 0 ? _saleTag$position : attr?.position) !== null && _ref6 !== void 0 ? _ref6 : _WcbProductsPanel_StyleSaleBadge__WEBPACK_IMPORTED_MODULE_7__.WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.position;

  // Convert to standardized values
  const convertedPosition = rawPosition === "left" ? "top-left" : "top-right";
  return {
    ..._WcbProductsPanel_StyleSaleBadge__WEBPACK_IMPORTED_MODULE_7__.WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
    ...(attr || {}),
    backgroundColor: (_ref7 = (_saleTag$bg_color = saleTag?.bg_color) !== null && _saleTag$bg_color !== void 0 ? _saleTag$bg_color : attr?.backgroundColor) !== null && _ref7 !== void 0 ? _ref7 : _WcbProductsPanel_StyleSaleBadge__WEBPACK_IMPORTED_MODULE_7__.WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.backgroundColor,
    textColor: (_ref8 = (_saleTag$text_color = saleTag?.text_color) !== null && _saleTag$text_color !== void 0 ? _saleTag$text_color : attr?.textColor) !== null && _ref8 !== void 0 ? _ref8 : _WcbProductsPanel_StyleSaleBadge__WEBPACK_IMPORTED_MODULE_7__.WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.textColor,
    position: convertedPosition
  };
}
function buildStyleOutOfStockDefault(attr) {
  var _ref9, _outOfStock$position, _ref0, _outOfStock$bg_color, _ref1, _outOfStock$text_colo;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const outOfStock = theme.shop_archive_out_of_stock;

  // Get the base position value from theme or attr
  const rawPosition = (_ref9 = (_outOfStock$position = outOfStock?.position) !== null && _outOfStock$position !== void 0 ? _outOfStock$position : attr?.position) !== null && _ref9 !== void 0 ? _ref9 : _WcbProductsPanel_StyleOutOfStock__WEBPACK_IMPORTED_MODULE_12__.WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO.position;

  // Convert to standardized values while keeping the literal union type
  const convertedPosition = rawPosition === "left" ? "top-left" : rawPosition === "right" ? "top-right" : "none";
  return {
    ..._WcbProductsPanel_StyleOutOfStock__WEBPACK_IMPORTED_MODULE_12__.WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO,
    ...(attr || {}),
    backgroundColor: (_ref0 = (_outOfStock$bg_color = outOfStock?.bg_color) !== null && _outOfStock$bg_color !== void 0 ? _outOfStock$bg_color : attr?.backgroundColor) !== null && _ref0 !== void 0 ? _ref0 : _WcbProductsPanel_StyleOutOfStock__WEBPACK_IMPORTED_MODULE_12__.WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO.backgroundColor,
    textColor: (_ref1 = (_outOfStock$text_colo = outOfStock?.text_color) !== null && _outOfStock$text_colo !== void 0 ? _outOfStock$text_colo : attr?.textColor) !== null && _ref1 !== void 0 ? _ref1 : _WcbProductsPanel_StyleOutOfStock__WEBPACK_IMPORTED_MODULE_12__.WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO.textColor,
    postion: convertedPosition // Use the mapped value
  };
}
function buildStyleTitleDefault(attr) {
  var _ref10, _general$title_color, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const general = theme.shop_archive_general_design;
  return {
    ..._WcbProductsPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_8__.WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
    ...(attr || {}),
    textColor: (_ref10 = (_general$title_color = general?.title_color) !== null && _general$title_color !== void 0 ? _general$title_color : attr?.textColor) !== null && _ref10 !== void 0 ? _ref10 : _WcbProductsPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_8__.WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.textColor,
    typography: {
      ..._WcbProductsPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_8__.WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography,
      ...(attr?.typography || {}),
      fontSizes: {
        Desktop: (_ref11 = (_ref12 = general?.title_font_size != null ? `${general.title_font_size.desktop}px` : undefined) !== null && _ref12 !== void 0 ? _ref12 : attr?.typography?.fontSizes?.Desktop) !== null && _ref11 !== void 0 ? _ref11 : _WcbProductsPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_8__.WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography.fontSizes.Desktop,
        Tablet: (_ref13 = (_ref14 = general?.title_font_size != null ? `${general.title_font_size.tablet}px` : undefined) !== null && _ref14 !== void 0 ? _ref14 : attr?.typography?.fontSizes?.Tablet) !== null && _ref13 !== void 0 ? _ref13 : _WcbProductsPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_8__.WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography.fontSizes.Tablet,
        Mobile: (_ref15 = (_ref16 = general?.title_font_size != null ? `${general.title_font_size.mobile}px` : undefined) !== null && _ref16 !== void 0 ? _ref16 : attr?.typography?.fontSizes?.Mobile) !== null && _ref15 !== void 0 ? _ref15 : _WcbProductsPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_8__.WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography.fontSizes.Mobile
      }
    }
  };
}
function buildStylePriceDefault(attr) {
  var _ref17, _general$price_color, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const general = theme.shop_archive_general_design;
  return {
    ..._WcbProductsPanel_StylePrice__WEBPACK_IMPORTED_MODULE_9__.WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
    ...(attr || {}),
    textColor: (_ref17 = (_general$price_color = general?.price_color) !== null && _general$price_color !== void 0 ? _general$price_color : attr?.textColor) !== null && _ref17 !== void 0 ? _ref17 : _WcbProductsPanel_StylePrice__WEBPACK_IMPORTED_MODULE_9__.WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.textColor,
    typography: {
      ..._WcbProductsPanel_StylePrice__WEBPACK_IMPORTED_MODULE_9__.WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography,
      ...(attr?.typography || {}),
      fontSizes: {
        Desktop: (_ref18 = (_ref19 = general?.price_font_size != null ? `${general.price_font_size.desktop}px` : undefined) !== null && _ref19 !== void 0 ? _ref19 : attr?.typography?.fontSizes?.Desktop) !== null && _ref18 !== void 0 ? _ref18 : _WcbProductsPanel_StylePrice__WEBPACK_IMPORTED_MODULE_9__.WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography.fontSizes.Desktop,
        Tablet: (_ref20 = (_ref21 = general?.price_font_size != null ? `${general.price_font_size.tablet}px` : undefined) !== null && _ref21 !== void 0 ? _ref21 : attr?.typography?.fontSizes?.Tablet) !== null && _ref20 !== void 0 ? _ref20 : _WcbProductsPanel_StylePrice__WEBPACK_IMPORTED_MODULE_9__.WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography.fontSizes.Tablet,
        Mobile: (_ref22 = (_ref23 = general?.price_font_size != null ? `${general.price_font_size.mobile}px` : undefined) !== null && _ref23 !== void 0 ? _ref23 : attr?.typography?.fontSizes?.Mobile) !== null && _ref22 !== void 0 ? _ref22 : _WcbProductsPanel_StylePrice__WEBPACK_IMPORTED_MODULE_9__.WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography.fontSizes.Mobile
      }
    }
  };
}
function buildStyleAddToCartBtnDefault(attr) {
  var _ref24, _addToCartBtn$text_co, _ref25, _addToCartBtn$bg_colo, _ref26, _addToCartBtn$hover_t, _ref27, _addToCartBtn$hover_b, _ref28, _ref29, _ref30, _ref31, _ref32, _ref33;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const addToCartBtn = theme.shop_archive_add_to_cart_btn;
  return {
    ..._WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
    ...(attr || {}),
    colorAndBackgroundColor: {
      ..._WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor,
      ...(attr?.colorAndBackgroundColor || {}),
      Normal: {
        color: (_ref24 = (_addToCartBtn$text_co = addToCartBtn?.text_color) !== null && _addToCartBtn$text_co !== void 0 ? _addToCartBtn$text_co : attr?.colorAndBackgroundColor?.Normal?.color) !== null && _ref24 !== void 0 ? _ref24 : _WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Normal?.color,
        backgroundColor: (_ref25 = (_addToCartBtn$bg_colo = addToCartBtn?.bg_color) !== null && _addToCartBtn$bg_colo !== void 0 ? _addToCartBtn$bg_colo : attr?.colorAndBackgroundColor?.Normal?.backgroundColor) !== null && _ref25 !== void 0 ? _ref25 : _WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Normal?.backgroundColor
      },
      Hover: {
        color: (_ref26 = (_addToCartBtn$hover_t = addToCartBtn?.hover_text_color) !== null && _addToCartBtn$hover_t !== void 0 ? _addToCartBtn$hover_t : attr?.colorAndBackgroundColor?.Hover?.color) !== null && _ref26 !== void 0 ? _ref26 : _WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Hover?.color,
        backgroundColor: (_ref27 = (_addToCartBtn$hover_b = addToCartBtn?.hover_bg_color) !== null && _addToCartBtn$hover_b !== void 0 ? _addToCartBtn$hover_b : attr?.colorAndBackgroundColor?.Hover?.backgroundColor) !== null && _ref27 !== void 0 ? _ref27 : _WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Hover?.backgroundColor
      }
    },
    border: {
      ..._WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.border,
      ...(attr?.border || {}),
      radius: {
        Desktop: (_ref28 = (_ref29 = addToCartBtn?.border_radius != null ? `${addToCartBtn.border_radius}px` : undefined) !== null && _ref29 !== void 0 ? _ref29 : attr?.border?.radius?.Desktop) !== null && _ref28 !== void 0 ? _ref28 : _WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.border.radius.Desktop,
        Tablet: (_ref30 = (_ref31 = addToCartBtn?.border_radius != null ? `${addToCartBtn.border_radius}px` : undefined) !== null && _ref31 !== void 0 ? _ref31 : attr?.border?.radius?.Tablet) !== null && _ref30 !== void 0 ? _ref30 : _WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.border.radius.Tablet,
        Mobile: (_ref32 = (_ref33 = addToCartBtn?.border_radius != null ? `${addToCartBtn.border_radius}px` : undefined) !== null && _ref33 !== void 0 ? _ref33 : attr?.border?.radius?.Mobile) !== null && _ref32 !== void 0 ? _ref32 : _WcbProductsPanel_StyleAddToCartBtn__WEBPACK_IMPORTED_MODULE_10__.WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.border.radius.Mobile
      }
    }
  };
}
function buildGeneralAddToCartBtnDefault(attr) {
  var _attr$isShowButton, _ref34, _addToCartBtn$positio;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const addToCartBtn = theme.shop_archive_add_to_cart_btn;
  return {
    ..._WcbProductsPanelButton__WEBPACK_IMPORTED_MODULE_11__.WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
    ...(attr || {}),
    isShowButton: addToCartBtn?.position === 'none' ? false : (_attr$isShowButton = attr?.isShowButton) !== null && _attr$isShowButton !== void 0 ? _attr$isShowButton : _WcbProductsPanelButton__WEBPACK_IMPORTED_MODULE_11__.WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO.isShowButton,
    position: addToCartBtn?.position === 'bottom-visible' ? 'bottom visible' : addToCartBtn?.position === 'image' ? 'inside image' : addToCartBtn?.position === 'icon' ? 'icon' : addToCartBtn?.position === 'bottom' ? 'bottom' : // Default to 'bottom' if no position is specified
    // This is consistent with the default in WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO
    (_ref34 = (_addToCartBtn$positio = addToCartBtn?.position) !== null && _addToCartBtn$positio !== void 0 ? _addToCartBtn$positio : attr?.position) !== null && _ref34 !== void 0 ? _ref34 : _WcbProductsPanelButton__WEBPACK_IMPORTED_MODULE_11__.WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO.position
  };
}
function buildStyleWishlistButtonDefault(attr) {
  var _ref35, _wishlistBtn$position, _ref36, _wishlistBtn$style;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_2__.getThemeDefaults)();
  const wishlistBtn = theme.shop_archive_wishlist_btn;
  return {
    ..._WcbProductsPanel_StyleWishListButton__WEBPACK_IMPORTED_MODULE_13__.WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO,
    ...(attr || {}),
    position: (_ref35 = (_wishlistBtn$position = wishlistBtn?.position) !== null && _wishlistBtn$position !== void 0 ? _wishlistBtn$position : attr?.position) !== null && _ref35 !== void 0 ? _ref35 : _WcbProductsPanel_StyleWishListButton__WEBPACK_IMPORTED_MODULE_13__.WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO.position,
    style: (_ref36 = (_wishlistBtn$style = wishlistBtn?.style) !== null && _wishlistBtn$style !== void 0 ? _wishlistBtn$style : attr?.style) !== null && _ref36 !== void 0 ? _ref36 : _WcbProductsPanel_StyleWishListButton__WEBPACK_IMPORTED_MODULE_13__.WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO.style
  };
}

/**
 * Re-apply the latest theme defaults to an attributes object.
 * This lets already-saved blocks pick up Customizer changes on view render.
 */
function mergeProductAttrsWithThemeDefaults(attr) {
  const base = attr || {};
  return {
    ...base,
    // General
    general_sortingAndFiltering: buildSortingAndFilteringDefault(base.general_sortingAndFiltering),
    general_content: buildGeneralContractDefault(base.general_content),
    general_featuredImage: buildGeneralFeaturedImageDefault(base.general_featuredImage),
    general_addToCartBtn: buildGeneralAddToCartBtnDefault(base.general_addToCartBtn),
    // Styles
    style_layout: buildStyleLayoutDefault(base.style_layout),
    style_border: buildStyleBorderDefault(base.style_border),
    style_featuredImage: buildStyleFeaturedImageDefault(base.style_featuredImage),
    style_saleBadge: buildStyleSaleBadgeDefault(base.style_saleBadge),
    style_outOfStock: buildStyleOutOfStockDefault(base.style_outOfStock),
    style_title: buildStyleTitleDefault(base.style_title),
    style_price: buildStylePriceDefault(base.style_price),
    style_addToCardBtn: buildStyleAddToCartBtnDefault(base.style_addToCardBtn),
    style_wishlistBtn: buildStyleWishlistButtonDefault(base.style_wishlistBtn)
  };
}

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

/***/ "./src/block-products/constants.ts":
/*!*****************************************!*\
  !*** ./src/block-products/constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_URL: () => (/* binding */ ADMIN_URL),
/* harmony export */   ALL_PRODUCT_QUERY_CONTROLS: () => (/* binding */ ALL_PRODUCT_QUERY_CONTROLS),
/* harmony export */   DEFAULT_ALLOWED_CONTROLS: () => (/* binding */ DEFAULT_ALLOWED_CONTROLS),
/* harmony export */   DEFAULT_CORE_ALLOWED_CONTROLS: () => (/* binding */ DEFAULT_CORE_ALLOWED_CONTROLS),
/* harmony export */   INNER_BLOCKS_TEMPLATE: () => (/* binding */ INNER_BLOCKS_TEMPLATE),
/* harmony export */   PRODUCT_TEMPLATE_ID: () => (/* binding */ PRODUCT_TEMPLATE_ID),
/* harmony export */   PRODUCT_TITLE_ID: () => (/* binding */ PRODUCT_TITLE_ID),
/* harmony export */   QUERY_LOOP_ID: () => (/* binding */ QUERY_LOOP_ID),
/* harmony export */   WC_BLOCKS_IMAGE_URL: () => (/* binding */ WC_BLOCKS_IMAGE_URL),
/* harmony export */   get_GLOBAL_HIDE_OUT_OF_STOCK: () => (/* binding */ get_GLOBAL_HIDE_OUT_OF_STOCK),
/* harmony export */   get_STOCK_STATUS_OPTIONS: () => (/* binding */ get_STOCK_STATUS_OPTIONS),
/* harmony export */   previewProducts: () => (/* binding */ previewProducts)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

// console.log(999, { allSettings: getAllWcSettings() });

//
const PRODUCT_TITLE_ID = "WCB_PRODUCT_TITLE_ID";
const PRODUCT_TEMPLATE_ID = "WCB_PRODUCT_TEMPLATE_ID";

// export function getSetting<T>(
// 	name: string,
// 	fallback: unknown = false,
// 	filter = (val: unknown, fb: unknown) =>
// 		typeof val !== "undefined" ? val : fb
// ) {
// 	console.log(1);
// 	const allSettings = getAllWcSettings();
// 	const value = name in allSettings ? allSettings[name] : fallback;
// 	return filter(value, fallback) as T;
// }

/**
 * Returns an object without a key.
 */
function objectOmit(obj, key) {
  const {
    [key]: omit,
    ...rest
  } = obj;
  return rest;
}
const QUERY_LOOP_ID = "core/query";
const DEFAULT_CORE_ALLOWED_CONTROLS = ["taxQuery", "search"];
const ALL_PRODUCT_QUERY_CONTROLS = ["attributes", "presets", "onSale", "stockStatus", "wooInherit"];
const DEFAULT_ALLOWED_CONTROLS = [...DEFAULT_CORE_ALLOWED_CONTROLS, ...ALL_PRODUCT_QUERY_CONTROLS];
const get_STOCK_STATUS_OPTIONS = () => window.wcSettings?.stockStatusOptions || {};
const get_GLOBAL_HIDE_OUT_OF_STOCK = () => !!window.wcSettings?.hideOutOfStockItems;
const INNER_BLOCKS_TEMPLATE = [["core/post-template", {
  __woocommerceNamespace: PRODUCT_TEMPLATE_ID
}, [["woocommerce/product-image"], ["core/post-title", {
  textAlign: "center",
  level: 3,
  fontSize: "medium",
  __woocommerceNamespace: PRODUCT_TITLE_ID
}, []], ["woocommerce/product-price", {
  textAlign: "center",
  fontSize: "small"
}, []], ["woocommerce/product-button", {
  textAlign: "center",
  fontSize: "small"
}, []]]], ["core/query-pagination", {
  layout: {
    type: "flex",
    justifyContent: "center"
  }
}, []], ["core/query-no-results"]];
const WC_BLOCKS_IMAGE_URL =
// @ts-ignore
window.wcSettings?.wcBlocksConfig?.pluginUrl + "images/";
const ADMIN_URL = window.wcSettings?.adminUrl;
const previewProducts = [{
  id: 1,
  name: "WordPress Pennant",
  variation: "",
  permalink: "https://example.org",
  sku: "wp-pennant",
  short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
  description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  price: "7.99",
  price_html: '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>7.99</span>',
  images: [{
    id: 1,
    src: WC_BLOCKS_IMAGE_URL + "previews/pennant.jpg",
    thumbnail: WC_BLOCKS_IMAGE_URL + "previews/pennant.jpg",
    name: "pennant-1.jpg",
    alt: "WordPress Pennant",
    srcset: "",
    sizes: ""
  }],
  average_rating: 5,
  categories: [{
    id: 1,
    name: "Decor",
    slug: "decor",
    link: "https://example.org"
  }],
  review_count: 1,
  prices: {
    currency_code: "GBP",
    decimal_separator: ".",
    thousand_separator: ",",
    decimals: 2,
    price_prefix: "£",
    price_suffix: "",
    price: "7.99",
    regular_price: "9.99",
    sale_price: "7.99",
    price_range: null
  },
  add_to_cart: {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add to cart", "woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add to cart", "woocommerce")
  },
  has_options: false,
  is_purchasable: true,
  is_in_stock: true,
  on_sale: true
}];

/***/ }),

/***/ "./src/block-products/expandable-search-list-item/expandable-search-list-item.tsx":
/*!****************************************************************************************!*\
  !*** ./src/block-products/expandable-search-list-item/expandable-search-list-item.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_list_control_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-list-control/item */ "./src/block-products/search-list-control/item.tsx");

/**
 * External dependencies
 */




const ExpandableSearchListItem = ({
  className,
  item,
  isSelected,
  isLoading,
  onSelect,
  disabled,
  ...rest
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_list_control_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...rest,
    key: item.id,
    className: className,
    isSelected: isSelected,
    item: item,
    onSelect: onSelect,
    isSingle: true,
    disabled: disabled
  }), isSelected && isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: "loading",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("woocommerce-search-list__item", "woocommerce-product-attributes__item", "depth-1", "is-loading", "is-not-active")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandableSearchListItem);

/***/ }),

/***/ "./src/block-products/hocs/with-attributes.tsx":
/*!*****************************************************!*\
  !*** ./src/block-products/hocs/with-attributes.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/block-products/utils.ts");

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

/**
 * Get attribute data (name, taxonomy etc) from server data.
 *
 * @param {number}     attributeId   Attribute ID to look for.
 * @param {Array|null} attributeList List of attributes.
 * @param {string}     matchField    Field to match on. e.g. id or slug.
 */
const getAttributeData = (attributeId, attributeList, matchField = "id") => {
  return Array.isArray(attributeList) ? attributeList.find(attr => attr[matchField] === attributeId) : null;
};

/**
 * HOC that calls the useAttributes hook.
 *
 * @param {Function} OriginalComponent Component being wrapped.
 */
const withAttributes = OriginalComponent => {
  return props => {
    const {
      selected = []
    } = props;
    const selectedSlug = selected.length ? selected[0].attr_slug : null;
    const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [expandedAttribute, setExpandedAttribute] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [termsList, setTermsList] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [termsLoading, setTermsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      if (attributes === null) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getAttributes)().then(newAttributes => {
          newAttributes = newAttributes.map(attribute => ({
            ...attribute,
            parent: 0
          }));
          setAttributes(newAttributes);
          if (selectedSlug) {
            const selectedAttributeFromTerm = getAttributeData(selectedSlug, newAttributes, "taxonomy");
            if (selectedAttributeFromTerm) {
              setExpandedAttribute(selectedAttributeFromTerm.id);
            }
          }
        }).catch(async e => {
          setError(await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.formatError)(e));
        }).finally(() => {
          setLoading(false);
        });
      }
    }, [attributes, selectedSlug]);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      const attributeData = getAttributeData(expandedAttribute, attributes);
      if (!attributeData) {
        return;
      }
      setTermsLoading(true);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getTerms)(expandedAttribute).then(newTerms => {
        newTerms = newTerms.map(term => ({
          ...term,
          parent: expandedAttribute,
          attr_slug: attributeData.taxonomy
        }));
        setTermsList(previousTermsList => ({
          ...previousTermsList,
          [expandedAttribute]: newTerms
        }));
      }).catch(async e => {
        setError(await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.formatError)(e));
      }).finally(() => {
        setTermsLoading(false);
      });
    }, [expandedAttribute, attributes]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(OriginalComponent, {
      ...props,
      attributes: attributes || [],
      error: error,
      expandedAttribute: expandedAttribute,
      onExpandAttribute: setExpandedAttribute,
      isLoading: loading,
      termsAreLoading: termsLoading,
      termsList: termsList
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAttributes);

/***/ }),

/***/ "./src/block-products/product-attribute-term-control/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/block-products/product-attribute-term-control/index.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_ATTRS_OPERATOR_OPTIONS: () => (/* binding */ PRODUCT_ATTRS_OPERATOR_OPTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _search_list_control_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-list-control/item */ "./src/block-products/search-list-control/item.tsx");
/* harmony import */ var _expandable_search_list_item_expandable_search_list_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../expandable-search-list-item/expandable-search-list-item */ "./src/block-products/expandable-search-list-item/expandable-search-list-item.tsx");
/* harmony import */ var _search_list_control_search_list_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-list-control/search-list-control */ "./src/block-products/search-list-control/search-list-control.tsx");
/* harmony import */ var _hocs_with_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hocs/with-attributes */ "./src/block-products/hocs/with-attributes.tsx");

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */




const PRODUCT_ATTRS_OPERATOR_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Any selected attributes", "wcb"),
  value: "any"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("All selected attributes", "wcb"),
  value: "all"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not in all selected attributes", "wcb"),
  value: "not_in"
}];
const ProductAttributeTermControl = ({
  attributes,
  error,
  expandedAttribute,
  onChange,
  onExpandAttribute,
  onOperatorChange,
  instanceId,
  isCompact,
  isLoading,
  operator,
  selected = [],
  termsAreLoading,
  termsList
}) => {
  const renderItem = args => {
    const {
      item,
      search,
      depth = 0
    } = args;
    const classes = ["woocommerce-product-attributes__item", "woocommerce-search-list__item", {
      "is-searching": search.length > 0,
      "is-skip-level": depth === 0 && item.parent !== 0
    }];
    if (!item.breadcrumbs.length) {
      const isSelected = expandedAttribute === item.id;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_expandable_search_list_item_expandable_search_list_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ...args,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(...classes, {
          "is-selected": isSelected
        }),
        isSelected: isSelected,
        item: item,
        isLoading: termsAreLoading,
        disabled: item.count === "0",
        onSelect: ({
          id
        }) => {
          return () => {
            onChange([]);
            onExpandAttribute(id);
          };
        },
        name: `attributes-${instanceId}`,
        countLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d is the count of terms. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d term", "%d terms", item.count, "wcb"), item.count),
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the item name, %2$d is the count of terms for the item. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%1$s, has %2$d term", "%1$s, has %2$d terms", item.count, "wcb"), item.name, item.count)
      });
    }
    const itemName = `${item.breadcrumbs[0]}: ${item.name}`;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_list_control_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ...args,
      name: `terms-${instanceId}`,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(...classes, "has-count"),
      countLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d is the count of products. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d product", "%d products", item.count, "wcb"), item.count),
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%1$s, has %2$d product", "%1$s, has %2$d products", item.count, "wcb"), itemName, item.count)
    });
  };
  const currentTerms = termsList[expandedAttribute] || [];
  const currentList = [...attributes, ...currentTerms];
  const messages = {
    clear: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clear all product attributes", "wcb"),
    list: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Product Attributes", "wcb"),
    noItems: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Your store doesn't have any product attributes.", "wcb"),
    search: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search for product attributes", "wcb"),
    selected: n => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d is the count of attributes selected. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d attribute selected", "%d attributes selected", n, "wcb"), n),
    updated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Product attribute search results updated.", "wcb")
  };
  if (error) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, JSON.stringify(error));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_list_control_search_list_control__WEBPACK_IMPORTED_MODULE_7__.SearchListControl, {
    className: "woocommerce-product-attributes",
    list: currentList,
    isLoading: isLoading,
    selected: selected.map(({
      id
    }) => currentList.find(currentListItem => currentListItem.id === id)).filter(Boolean),
    onChange: onChange,
    renderItem: renderItem,
    messages: messages,
    isCompact: isCompact,
    isHierarchical: true,
    isSingle: false
  }), !!onOperatorChange && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    hidden: selected.length < 1
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    className: "woocommerce-product-attributes__operator",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display products matching", "wcb"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select the operator of the attribute items.", "wcb"),
    value: operator,
    onChange: onOperatorChange,
    options: PRODUCT_ATTRS_OPERATOR_OPTIONS
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hocs_with_attributes__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.withInstanceId)(ProductAttributeTermControl)));

/***/ }),

/***/ "./src/block-products/product-category-control/index.tsx":
/*!***************************************************************!*\
  !*** ./src/block-products/product-category-control/index.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_CATS_OPERATOR_OPTIONS: () => (/* binding */ PRODUCT_CATS_OPERATOR_OPTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-products/product-category-control/style.scss");
/* harmony import */ var _search_list_control_search_list_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-list-control/search-list-control */ "./src/block-products/search-list-control/search-list-control.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/block-products/utils.ts");
/* harmony import */ var _search_list_control_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-list-control/item */ "./src/block-products/search-list-control/item.tsx");

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




const PRODUCT_CATS_OPERATOR_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Any selected categories", "wcb"),
  value: "any"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("All selected categories", "wcb"),
  value: "all"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not in all selected categories", "wcb"),
  value: "not_in"
}];
const ProductCategoryControl = ({
  onChange = () => {},
  selected = [],
  isCompact = true,
  isSingle = false,
  showReviewCount = false,
  onOperatorChange,
  operator
}) => {
  const [categories, setcategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsLoading(true);
    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getCategories)().then(categories => {
      setcategories(categories);
      setIsLoading(false);
      setError(null);
    }).catch(async e => {
      const error = await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.formatError)(e);
      setcategories([]);
      setIsLoading(false);
      setError(error);
    });
  }, []);
  const renderItem = args => {
    const {
      item,
      search,
      depth = 0
    } = args;
    const accessibleName = !item.breadcrumbs.length ? item.name : `${item.breadcrumbs.join(", ")}, ${item.name}`;
    const listItemAriaLabel = showReviewCount ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%1$s, has %2$d review", "%1$s, has %2$d reviews", item.review_count, "wcb"), accessibleName, item.review_count) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the item name, %2$d is the count of products for the item. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%1$s, has %2$d product", "%1$s, has %2$d products", item.count, "wcb"), accessibleName, item.count);
    const listItemCountLabel = showReviewCount ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d is the count of reviews. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d review", "%d reviews", item.review_count, "wcb"), item.review_count) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d is the count of products. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d product", "%d products", item.count, "wcb"), item.count);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_list_control_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("woocommerce-product-categories__item", "has-count", {
        "is-searching": search.length > 0,
        "is-skip-level": depth === 0 && item.parent !== 0
      }),
      ...args,
      countLabel: listItemCountLabel,
      "aria-label": listItemAriaLabel
    });
  };
  const messages = {
    clear: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clear all product categories", "wcb"),
    list: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Product Categories", "wcb"),
    noItems: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Your store doesn't have any product categories.", "wcb"),
    search: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search for product categories", "wcb"),
    selected: n => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d is the count of selected categories. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d category selected", "%d categories selected", n, "wcb"), n),
    updated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Category search results updated.", "wcb")
  };
  if (error) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", {
      className: "text-red-500 text-sm p-5"
    }, JSON.stringify(error));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_list_control_search_list_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "woocommerce-product-categories",
    list: categories,
    isLoading: isLoading
    // @ts-ignore
    ,
    selected: selected.map(id => categories.find(cat => cat.id === id)).filter(Boolean),
    onChange: search => {
      onChange(search);
    },
    renderItem: renderItem,
    messages: messages,
    isCompact: isCompact,
    isHierarchical: true,
    isSingle: isSingle
  }), !!onOperatorChange && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    hidden: selected.length < 1
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    className: "woocommerce-product-categories__operator",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display products matching", "wcb"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select the operator of the category items.", "wcb"),
    value: operator,
    onChange: onOperatorChange,
    options: PRODUCT_CATS_OPERATOR_OPTIONS
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCategoryControl);

/***/ }),

/***/ "./src/block-products/product-category-control/style.scss":
/*!****************************************************************!*\
  !*** ./src/block-products/product-category-control/style.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-products/product-tag-control/index.tsx":
/*!**********************************************************!*\
  !*** ./src/block-products/product-tag-control/index.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_TAGS_OPERATOR_OPTIONS: () => (/* binding */ PRODUCT_TAGS_OPERATOR_OPTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-products/product-tag-control/style.scss");
/* harmony import */ var _search_list_control_search_list_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-list-control/search-list-control */ "./src/block-products/search-list-control/search-list-control.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/block-products/utils.ts");
/* harmony import */ var _search_list_control_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-list-control/item */ "./src/block-products/search-list-control/item.tsx");

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




const PRODUCT_TAGS_OPERATOR_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Any selected tags", "wcb"),
  value: "any"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("All selected tags", "wcb"),
  value: "all"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not in all selected tags", "wcb"),
  value: "not_in"
}];
const ProductTagControl = ({
  onChange = () => {},
  selected = [],
  isCompact = true,
  isSingle = false,
  showReviewCount = false,
  onOperatorChange,
  operator = "any"
}) => {
  const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsLoading(true);
    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getProductTags)({
      selected: [],
      search: ""
    }).then(tags => {
      setTags(tags);
      setIsLoading(false);
      setError(null);
    }).catch(async e => {
      const error = await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.formatError)(e);
      setTags([]);
      setIsLoading(false);
      setError(error);
    });
  }, []);
  const renderItem = args => {
    const {
      item,
      search,
      depth = 0
    } = args;
    const accessibleName = !item.breadcrumbs.length ? item.name : `${item.breadcrumbs.join(", ")}, ${item.name}`;
    const listItemAriaLabel = showReviewCount ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%1$s, has %2$d review", "%1$s, has %2$d reviews", item.review_count, "wcb"), accessibleName, item.review_count) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the item name, %2$d is the count of products for the item. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%1$s, has %2$d product", "%1$s, has %2$d products", item.count, "wcb"), accessibleName, item.count);
    const listItemCountLabel = showReviewCount ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d is the count of reviews. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d review", "%d reviews", item.review_count, "wcb"), item.review_count) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d is the count of products. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d product", "%d products", item.count, "wcb"), item.count);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_list_control_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("woocommerce-product-categories__item", "has-count", {
        "is-searching": search.length > 0,
        "is-skip-level": depth === 0 && item.parent !== 0
      }),
      ...args,
      countLabel: listItemCountLabel,
      "aria-label": listItemAriaLabel
    });
  };
  const messages = {
    clear: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clear all product tags", "wcb"),
    list: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Product Tags", "wcb"),
    noItems: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Your store doesn't have any product tags.", "wcb"),
    search: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search for product tags", "wcb"),
    selected: n => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d is the count of selected tags. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d tag selected", "%d tags selected", n, "wcb"), n),
    updated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tag search results updated.", "wcb")
  };
  if (error) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", {
      className: "text-red-500 text-sm p-5"
    }, JSON.stringify(error));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_list_control_search_list_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "woocommerce-product-categories",
    list: tags,
    isLoading: isLoading
    // @ts-ignore
    ,
    selected: selected.map(id => tags.find(tag => tag.id === id)).filter(Boolean),
    onChange: search => {
      onChange(search);
    },
    renderItem: renderItem,
    messages: messages,
    isCompact: isCompact,
    isHierarchical: true,
    isSingle: isSingle
  }), !!onOperatorChange && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    hidden: selected.length < 1
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    className: "woocommerce-product-categories__operator",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display products matching", "wcb"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select the operator of the tag items.", "wcb"),
    value: operator,
    onChange: onOperatorChange,
    options: PRODUCT_TAGS_OPERATOR_OPTIONS
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductTagControl);

/***/ }),

/***/ "./src/block-products/product-tag-control/style.scss":
/*!***********************************************************!*\
  !*** ./src/block-products/product-tag-control/style.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-products/search-list-control/item.tsx":
/*!*********************************************************!*\
  !*** ./src/block-products/search-list-control/item.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchListItem: () => (/* binding */ SearchListItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/block-products/search-list-control/utils.tsx");

/**
 * Internal dependencies
 */


const SearchListItem = ({
  countLabel,
  className,
  depth = 0,
  controlId = "",
  item,
  isSelected,
  isSingle,
  onSelect,
  search = "",
  ...props
}) => {
  const showCount = countLabel !== undefined && countLabel !== null && item.count !== undefined && item.count !== null;
  const classes = [className, "woocommerce-search-list__item"];
  classes.push(`depth-${depth}`);
  if (isSingle) {
    classes.push("is-radio-button");
  }
  if (showCount) {
    classes.push("has-count");
  }
  const hasBreadcrumbs = item.breadcrumbs && item.breadcrumbs.length;
  const name = props.name || `search-list-item-${controlId}`;
  const id = `${name}-${item.id}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: id,
    className: classes.join(" ")
  }, isSingle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    id: id,
    name: name,
    value: item.value,
    onChange: onSelect(item),
    checked: isSelected,
    className: "woocommerce-search-list__item-input",
    ...props
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    id: id,
    name: name,
    value: item.value,
    onChange: onSelect(item),
    checked: isSelected,
    className: "woocommerce-search-list__item-input",
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "woocommerce-search-list__item-label"
  }, hasBreadcrumbs ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "woocommerce-search-list__item-prefix"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getBreadcrumbsForDisplay)(item.breadcrumbs)) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "woocommerce-search-list__item-name"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getHighlightedName)(item.name, search))), !!showCount && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "woocommerce-search-list__item-count"
  }, countLabel || item.count));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchListItem);

/***/ }),

/***/ "./src/block-products/search-list-control/search-list-control.tsx":
/*!************************************************************************!*\
  !*** ./src/block-products/search-list-control/search-list-control.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchListControl: () => (/* binding */ SearchListControl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/info.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/block-products/search-list-control/utils.tsx");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item */ "./src/block-products/search-list-control/item.tsx");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tag */ "./src/block-products/tag/index.tsx");

/**
 * External dependencies
 */








/**
 * Internal dependencies
 */



const defaultRenderListItem = args => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ...args
  });
};
const ListItems = props => {
  const {
    list = [],
    selected = [],
    renderItem,
    depth = 0,
    onSelect,
    instanceId,
    isSingle,
    search
  } = props;
  if (!list) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, list.map(item => {
    const isSelected = selected.findIndex(({
      id
    }) => id === item.id) !== -1;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      key: item.id
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, renderItem({
      item,
      isSelected,
      onSelect,
      isSingle,
      search,
      depth,
      controlId: instanceId
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItems, {
      ...props,
      list: item.children,
      depth: depth + 1
    }));
  }));
};
const SelectedListItems = ({
  isLoading,
  isSingle,
  selected,
  messages,
  onChange,
  onRemove
}) => {
  if (isLoading || isSingle || !selected) {
    return null;
  }
  const selectedCount = selected.length;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `woocommerce-search-list__selected ${selectedCount < 1 ? "!min-h-0" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "woocommerce-search-list__selected-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, messages.selected(selectedCount)), selectedCount > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isLink: true,
    isDestructive: true,
    onClick: () => onChange([]),
    "aria-label": messages.clear
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clear all", "woo-gutenberg-products-block")) : null), selectedCount > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, selected.map((item, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: i
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tag__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: item.name,
    id: item.id,
    remove: onRemove
  })))) : null);
};
const ListItemsContainer = ({
  filteredList,
  search,
  onSelect,
  instanceId,
  ...props
}) => {
  const {
    messages,
    renderItem,
    selected,
    isSingle
  } = props;
  const renderItemCallback = renderItem || defaultRenderListItem;
  if (filteredList.length === 0) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "woocommerce-search-list__list is-not-found flex items-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "woocommerce-search-list__not-found-icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "woocommerce-search-list__not-found-text"
    }, search ?
    // eslint-disable-next-line @wordpress/valid-sprintf
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(messages.noResults, search) : messages.noItems));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "woocommerce-search-list__list hiddenScrollbar rounded-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItems, {
    list: filteredList,
    selected: selected,
    renderItem: renderItemCallback,
    onSelect: onSelect,
    instanceId: instanceId,
    isSingle: isSingle,
    search: search
  }));
};

/**
 * Component to display a searchable, selectable list of items.
 */
const SearchListControl = props => {
  const {
    className = "",
    isCompact,
    isHierarchical = false,
    isLoading,
    isSingle,
    list,
    messages: customMessages = _utils__WEBPACK_IMPORTED_MODULE_6__.defaultMessages,
    onChange,
    onSearch,
    selected,
    debouncedSpeak
  } = props;
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useInstanceId)(SearchListControl);
  const messages = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => ({
    ..._utils__WEBPACK_IMPORTED_MODULE_6__.defaultMessages,
    ...customMessages
  }), [customMessages]);
  const filteredList = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getFilteredList)(list, search, isHierarchical);
  }, [list, search, isHierarchical]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (debouncedSpeak) {
      debouncedSpeak(messages.updated);
    }
  }, [debouncedSpeak, messages]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (typeof onSearch === "function") {
      onSearch(search);
    }
  }, [search, onSearch]);
  const onRemove = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(itemId => () => {
    if (isSingle) {
      onChange([]);
    }
    const i = selected.findIndex(({
      id: selectedId
    }) => selectedId === itemId);
    onChange([...selected.slice(0, i), ...selected.slice(i + 1)]);
  }, [isSingle, selected, onChange]);
  const onSelect = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(item => () => {
    if (selected.findIndex(({
      id
    }) => id === item.id) !== -1) {
      onRemove(item.id)();
      return;
    }
    if (isSingle) {
      onChange([item]);
    } else {
      onChange([...selected, item]);
    }
  }, [isSingle, onRemove, onChange, selected]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("woocommerce-search-list", className, {
      "is-compact": isCompact
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectedListItems, {
    ...props,
    onRemove: onRemove,
    messages: messages
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "woocommerce-search-list__search"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: messages.search,
    type: "search",
    value: search,
    onChange: value => setSearch(value)
  })), isLoading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "woocommerce-search-list__list is-loading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemsContainer, {
    ...props,
    search: search,
    filteredList: filteredList,
    messages: messages,
    onSelect: onSelect,
    instanceId: instanceId
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.withSpokenMessages)(SearchListControl));

/***/ }),

/***/ "./src/block-products/search-list-control/utils.tsx":
/*!**********************************************************!*\
  !*** ./src/block-products/search-list-control/utils.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTermsTree: () => (/* binding */ buildTermsTree),
/* harmony export */   defaultMessages: () => (/* binding */ defaultMessages),
/* harmony export */   getBreadcrumbsForDisplay: () => (/* binding */ getBreadcrumbsForDisplay),
/* harmony export */   getFilteredList: () => (/* binding */ getFilteredList),
/* harmony export */   getHighlightedName: () => (/* binding */ getHighlightedName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

const defaultMessages = {
  clear: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Clear all selected items", "woo-gutenberg-products-block"),
  noItems: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("No items found.", "woo-gutenberg-products-block"),
  /* Translators: %s search term */
  noResults: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("No results for %s", "woo-gutenberg-products-block"),
  search: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Search for items", "woo-gutenberg-products-block"),
  selected: n => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(/* translators: Number of items selected from list. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)("%d item selected", "%d items selected", n, "woo-gutenberg-products-block"), n),
  updated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Search results updated.", "woo-gutenberg-products-block")
};

/**
 * Returns terms in a tree form.
 *
 * @param {Array} filteredList Array of terms, possibly a subset of all terms, in flat format.
 * @param {Array} list         Array of the full list of terms, defaults to the filteredList.
 *
 * @return {Array} Array of terms in tree format.
 */
const buildTermsTree = (filteredList, list = filteredList) => {
  const termsByParent = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.groupBy)(filteredList, "parent");
  const listById = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.keyBy)(list, "id");
  const builtParents = ["0"];
  const getParentsName = (term = {}) => {
    if (!term.parent) {
      return term.name ? [term.name] : [];
    }
    const parentName = getParentsName(listById[term.parent]);
    return [...parentName, term.name];
  };
  const fillWithChildren = terms => {
    return terms.map(term => {
      const children = termsByParent[term.id];
      builtParents.push("" + term.id);
      return {
        ...term,
        breadcrumbs: getParentsName(listById[term.parent]),
        children: children && children.length ? fillWithChildren(children) : []
      };
    });
  };
  const tree = fillWithChildren(termsByParent["0"] || []);

  // Handle remaining items in termsByParent that have not been built (orphaned).
  Object.entries(termsByParent).forEach(([termId, terms]) => {
    if (!builtParents.includes(termId)) {
      tree.push(...fillWithChildren(terms || []));
    }
  });
  return tree;
};
const getFilteredList = (list, search, isHierarchical) => {
  if (!search) {
    return isHierarchical ? buildTermsTree(list) : list;
  }
  const re = new RegExp(search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "i");
  const filteredList = list.map(item => re.test(item.name) ? item : false).filter(Boolean);
  return isHierarchical ? buildTermsTree(filteredList, list) : filteredList;
};
const getHighlightedName = (name, search) => {
  if (!search) {
    return name;
  }
  const re = new RegExp(
  // Escaping.
  `(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`, "ig");
  const nameParts = name.split(re);
  return nameParts.map((part, i) => {
    return re.test(part) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
      key: i
    }, part) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: i
    }, part);
  });
};
const getBreadcrumbsForDisplay = breadcrumbs => {
  if (breadcrumbs.length === 1) {
    return breadcrumbs.slice(0, 1).toString();
  }
  if (breadcrumbs.length === 2) {
    return breadcrumbs.slice(0, 1).toString() + " › " + breadcrumbs.slice(-1).toString();
  }
  return breadcrumbs.slice(0, 1).toString() + " … " + breadcrumbs.slice(-1).toString();
};

/***/ }),

/***/ "./src/block-products/tag/index.tsx":
/*!******************************************!*\
  !*** ./src/block-products/tag/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);

/**
 * External dependencies
 */









/**
 * This component can be used to show an item styled as a "tag", optionally with an `X` + "remove"
 * or with a popover that is shown on click.
 */
const Tag = ({
  id,
  label,
  popoverContents,
  remove,
  screenReaderLabel,
  className = ""
}) => {
  const [isVisible, setIsVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useInstanceId)(Tag);
  screenReaderLabel = screenReaderLabel || label;
  if (!label) {
    // A null label probably means something went wrong
    return null;
  }
  label = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(label);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("woocommerce-tag", className, {
    "has-remove": !!remove
  });
  const labelId = `woocommerce-tag__label-${instanceId}`;
  const labelTextNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, screenReaderLabel), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, label));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classes
  }, popoverContents ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "woocommerce-tag__text",
    id: labelId,
    onClick: () => setIsVisible(true)
  }, labelTextNode) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "woocommerce-tag__text",
    id: labelId
  }, labelTextNode), popoverContents && isVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    onClose: () => setIsVisible(false)
  }, popoverContents), remove && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "woocommerce-tag__remove",
    onClick: remove(id),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    // Translators: %s label.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove %s", "woo-gutenberg-products-block"), label),
    "aria-describedby": labelId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
    size: 20,
    className: "clear-icon"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);

/***/ }),

/***/ "./src/block-products/utils.ts":
/*!*************************************!*\
  !*** ./src/block-products/utils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatError: () => (/* binding */ formatError),
/* harmony export */   getAttributes: () => (/* binding */ getAttributes),
/* harmony export */   getCategories: () => (/* binding */ getCategories),
/* harmony export */   getCategory: () => (/* binding */ getCategory),
/* harmony export */   getProduct: () => (/* binding */ getProduct),
/* harmony export */   getProductTags: () => (/* binding */ getProductTags),
/* harmony export */   getTerms: () => (/* binding */ getTerms)
/* harmony export */ });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



const getProduct = productId => {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: `/wc/store/v1/products/${productId}`
  });
};
const getCategories = (queryArgs = {}) => {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(`wc/store/v1/products/categories`, {
      per_page: 0,
      ...queryArgs
    })
  });
};
const getCategory = categoryId => {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: `wc/store/v1/products/categories/${categoryId}`
  });
};
const getProductTagsRequests = ({
  selected = [],
  search = ""
}) => {
  const limitTags = !!window.wcSettings?.limitTags;
  const requests = [(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(`wc/store/v1/products/tags`, {
    per_page: limitTags ? 100 : 0,
    orderby: limitTags ? "count" : "name",
    order: limitTags ? "desc" : "asc",
    search
  })];

  // If we have a large catalog, we might not get all selected products in the first page.
  if (limitTags && selected.length) {
    requests.push((0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(`wc/store/v1/products/tags`, {
      include: selected
    }));
  }
  return requests;
};
const getProductTags = ({
  selected = [],
  search = ""
}) => {
  const requests = getProductTagsRequests({
    selected,
    search
  });
  return Promise.all(requests.map(path => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path
  }))).then(data => {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqBy)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.flatten)(data), "id");
  });
};
const formatError = async error => {
  if (typeof error.json === "function") {
    try {
      const parsedError = await error.json();
      return {
        message: parsedError.message,
        type: parsedError.type || "api"
      };
    } catch (e) {
      return {
        message: e.message,
        type: "general"
      };
    }
  }
  return {
    message: error.message,
    type: error.type || "general"
  };
};
const getAttributes = () => {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: `wc/store/v1/products/attributes`
  });
};
const getTerms = attribute => {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: `wc/store/v1/products/attributes/${attribute}/terms`
  });
};

/***/ }),

/***/ "./src/components/controls/HelpText.tsx":
/*!**********************************************!*\
  !*** ./src/components/controls/HelpText.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const HelpText = ({
  children,
  className = "my-1"
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `components-form-token-field__help ${className}`
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelpText);

/***/ }),

/***/ "./src/components/controls/MyBorderControl/MyBorderControl.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/controls/MyBorderControl/MyBorderControl.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyBorderControl/types.ts");



// @ts-ignore






const MyBorderControl = ({
  className = "space-y-4",
  borderControl = _types__WEBPACK_IMPORTED_MODULE_7__.MY_BORDER_CONTROL_DEMO,
  setAttrs__border
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  //
  const {
    mainSettings: mainSettingsProps,
    hoverColor: hoverColorProps,
    radius: radiusProps
  } = borderControl;
  const handleChangeBorder = newBorders => {
    setAttrs__border({
      ...borderControl,
      mainSettings: newBorders
    });
  };
  const handleChangeBorderHoverColor = hoverColor => {
    setAttrs__border({
      ...borderControl,
      hoverColor
    });
  };
  const handleChangeBorderRadius = newRadius => {
    // If Desktop and Tablet/Mobile are default or all 3 devices are the same then set for all 3 devices
    const allEqual = radiusProps.Desktop === radiusProps.Tablet && radiusProps.Desktop === radiusProps.Mobile;
    if (deviceType === "Desktop" && ((radiusProps.Tablet === undefined || radiusProps.Tablet === "0") && (radiusProps.Mobile === undefined || radiusProps.Mobile === "0") || allEqual)) {
      setAttrs__border({
        ...borderControl,
        radius: {
          Desktop: newRadius,
          Tablet: newRadius,
          Mobile: newRadius
        }
      });
    } else {
      // Otherwise, just update the current device type
      setAttrs__border({
        ...borderControl,
        radius: {
          ...radiusProps,
          [deviceType]: newRadius
        }
      });
    }
  };

  //
  const RADIUS = radiusProps[deviceType] || radiusProps.Tablet || radiusProps.Desktop;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Border"),
    onChange: handleChangeBorder,
    value: mainSettingsProps,
    colors: [],
    enableAlpha: false
    // enableStyle={ showBorderStyle }
    ,
    popoverOffset: 40,
    popoverPlacement: "left-start",
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    size: "__unstable-large",
    className: "wcb-BorderBoxControl"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hover border color", "wcb"),
    onChange: handleChangeBorderHoverColor,
    color: hoverColorProps
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "MyBorderControl__BorderRadiusControl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mb-2",
    hasResponsive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Border radius", "wcb")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderRadiusControl, {
    values: RADIUS,
    onChange: value => {
      handleChangeBorderRadius(value);
    },
    label: ""
    // label={
    // 	<MyLabelControl className="" hasResponsive>
    // 		{__("Border radius", "wcb")}
    // 	</MyLabelControl>
    // }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyBorderControl);

/***/ }),

/***/ "./src/components/controls/MyBorderControl/types.ts":
/*!**********************************************************!*\
  !*** ./src/components/controls/MyBorderControl/types.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_BORDER_MAINS: () => (/* binding */ DEFAULT_BORDER_MAINS),
/* harmony export */   DEFAULT_BORDER_MAIN_SINGLE_SIDE: () => (/* binding */ DEFAULT_BORDER_MAIN_SINGLE_SIDE),
/* harmony export */   DEFAULT_BORDER_RADIUS: () => (/* binding */ DEFAULT_BORDER_RADIUS),
/* harmony export */   MY_BORDER_CONTROL_DEMO: () => (/* binding */ MY_BORDER_CONTROL_DEMO)
/* harmony export */ });
const DEFAULT_BORDER_RADIUS = "0";
const DEFAULT_BORDER_MAIN_SINGLE_SIDE = {
  color: "#d1d5db",
  style: "solid",
  width: "1px"
};
const DEFAULT_BORDER_MAINS = undefined;
const MY_BORDER_CONTROL_DEMO = {
  mainSettings: DEFAULT_BORDER_MAINS,
  hoverColor: undefined,
  radius: {
    Desktop: DEFAULT_BORDER_RADIUS,
    Tablet: DEFAULT_BORDER_RADIUS,
    Mobile: DEFAULT_BORDER_RADIUS
  }
};

/***/ }),

/***/ "./src/components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_COLOR_BGCOLOR_CONTROL_DEMO: () => (/* binding */ MY_COLOR_BGCOLOR_CONTROL_DEMO),
/* harmony export */   MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO: () => (/* binding */ MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO),
/* harmony export */   PANEL_COLOR_TABS: () => (/* binding */ PANEL_COLOR_TABS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");





const PANEL_COLOR_TABS = [{
  name: "Normal",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Normal", "wcb")
}, {
  name: "Hover",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hover", "wcb")
}];
const MY_COLOR_BGCOLOR_CONTROL_DEMO = {
  Normal: {
    color: "",
    backgroundColor: ""
  },
  Hover: {
    color: "",
    backgroundColor: ""
  }
};
const MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO = {
  Normal: {
    color: "#fff",
    backgroundColor: "#1346af"
  },
  Hover: {
    color: "#fff",
    backgroundColor: "#3a3a3a"
  }
};
const MyColorBackgroundColorControl = ({
  className = "",
  controlData = MY_COLOR_BGCOLOR_CONTROL_DEMO,
  setAttrs__control
}) => {
  const handleChangeColor = (currentTab, colorHex) => {
    setAttrs__control({
      ...controlData,
      [currentTab]: {
        ...controlData[currentTab],
        color: colorHex
      }
    });
  };
  const handleChangeBackgroundColor = (currentTab, colorHex) => {
    setAttrs__control({
      ...controlData,
      [currentTab]: {
        ...controlData[currentTab],
        backgroundColor: colorHex
      }
    });
  };
  const renderShadowColorPicker = tab => {
    const tabName = tab.name;
    const {
      color,
      backgroundColor
    } = controlData[tabName];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-3.5"
    }, typeof color !== undefined ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "wcb"),
      onChange: value => handleChangeColor(tabName, value),
      color: color
    }) : null, typeof backgroundColor !== undefined ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background color", "wcb"),
      onChange: value => handleChangeBackgroundColor(tabName, value),
      color: backgroundColor
    }) : null);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: `wcb-bodyControls__panel ${className}`,
    activeClass: "active-tab",
    initialTabName: "Normal",
    tabs: PANEL_COLOR_TABS
  }, renderShadowColorPicker);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyColorBackgroundColorControl);

/***/ }),

/***/ "./src/components/controls/MyColorPicker/MyColorPicker.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/controls/MyColorPicker/MyColorPicker.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


// @ts-ignore



const MyColorPicker = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Color", "wcb"),
  // default value color - co the la cac gia tri hex string
  color = "#000",
  onChange,
  showDefaultPalette = true,
  showCustomColorOnDefaultPallete = true
}) => {
  const [colorState, setColorState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    color && setColorState(color);
  }, [color]);
  const handleUpdateColor = c => {
    setColorState(c);
    onChange(c);
  };
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseMultipleOriginColorsAndGradients)();
  const defaultColorPallete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const customColors = window.wcbGlobalVariables?.customColorPallete;
    if (!customColors || !customColors.length || !showCustomColorOnDefaultPallete) {
      return colorGradientSettings?.colors || [];
    }
    const c = [...(colorGradientSettings?.colors || []), {
      name: "Customs",
      colors: window.wcbGlobalVariables.customColorPallete || []
    }];
    return c;
  }, [colorGradientSettings, showCustomColorOnDefaultPallete]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: `w-full ${className}`,
    contentClassName: "my-popover-content-classname"
    // @ts-ignore
    ,
    popoverProps: {
      placement: "left-start"
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors`,
      onClick: onToggle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center gap-0.5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer ${colorState ? "" : "bg-transparent"}`,
      style: {
        backgroundColor: colorState,
        backgroundImage: !colorState ? "linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)" : undefined,
        backgroundSize: "10px 10px",
        backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0"
      }
    })), label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, label))),
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg-white "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
      className: "block-editor-color-gradient-control__panel p-4",
      colors: showDefaultPalette ? defaultColorPallete : undefined,
      value: colorState
      // @ts-ignore
      ,
      enableAlpha: true,
      onChange: color => {
        handleUpdateColor(color || "");
      }
      // @ts-ignore
      ,
      __experimentalHasMultipleOrigins: true,
      __experimentalIsRenderedInSidebar: true
    })))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyColorPicker);

/***/ }),

/***/ "./src/components/controls/MyCombobox.tsx":
/*!************************************************!*\
  !*** ./src/components/controls/MyCombobox.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const MyComboboxControl = ({
  onChange,
  options,
  value,
  label
}) => {
  const [fontSize, setFontSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || "");
  const [filteredOptions, setFilteredOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFontSize(value || "");
  }, [value]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ComboboxControl, {
    label: label,
    value: fontSize,
    onChange: value => {
      setFontSize(value || "");
      onChange(value || "");
    },
    options: filteredOptions,
    onFilterValueChange: inputValue => setFilteredOptions(options.filter(option => option.label.toLowerCase().startsWith(inputValue.toLowerCase())))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComboboxControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_GAP_UNITS: () => (/* binding */ MY_GAP_UNITS),
/* harmony export */   MY_HORIZOLTAL_UNITS: () => (/* binding */ MY_HORIZOLTAL_UNITS),
/* harmony export */   MY_VERTICAL_UNITS: () => (/* binding */ MY_VERTICAL_UNITS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyDimensionsControl/types.ts");
/* harmony import */ var _MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");









const MY_GAP_UNITS = [{
  value: "px",
  label: "px",
  default: 32,
  step: 1
}, {
  value: "rem",
  label: "rem",
  default: 2,
  step: 0.01
}, {
  value: "em",
  label: "em",
  default: 2,
  step: 0.01
}, {
  value: "%",
  label: "%",
  default: 50,
  step: 0.1
}];
const MY_HORIZOLTAL_UNITS = [{
  value: "px",
  label: "px",
  default: 32,
  step: 1
}, {
  value: "rem",
  label: "rem",
  default: 2,
  step: 0.01
}, {
  value: "em",
  label: "em",
  default: 2,
  step: 0.01
}, {
  value: "%",
  label: "%",
  default: 20,
  step: 0.1
}, {
  value: "vw",
  label: "vw",
  default: 20,
  step: 0.1
}];
const MY_VERTICAL_UNITS = [{
  value: "px",
  label: "px",
  default: 32,
  step: 1
}, {
  value: "rem",
  label: "rem",
  default: 2,
  step: 0.01
}, {
  value: "em",
  label: "em",
  default: 2,
  step: 0.01
}, {
  value: "%",
  label: "%",
  default: 20,
  step: 0.1
}, {
  value: "vh",
  label: "vh",
  default: 20,
  step: 0.1
}];
const MyDimensionsControl = ({
  className = "space-y-5",
  dimensionControl = _types__WEBPACK_IMPORTED_MODULE_5__.MY_DIMENSIONS_CONTROL_DEMO,
  setAttrs__dimensions
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  //
  const {
    colunmGap: colunmGapProps,
    rowGap: rowGapProps,
    margin: marginProps,
    padding: paddingProps
  } = dimensionControl;
  const {
    currentDeviceValue: colunmGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(colunmGapProps, deviceType);
  const {
    currentDeviceValue: rowGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(rowGapProps, deviceType);
  const {
    currentDeviceValue: margin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(marginProps, deviceType);
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(paddingProps, deviceType);

  //
  const setRowGrap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      rowGap: {
        ...rowGapProps,
        [deviceType]: value
      }
    });
  };
  const setColumnGap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      colunmGap: {
        ...colunmGapProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeMargin = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      margin: {
        ...marginProps,
        [deviceType]: value
      }
    });
  };
  const handleChangePadding = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      padding: {
        ...paddingProps,
        [deviceType]: value
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: setRowGrap,
    value: rowGap || "0",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Row Gap", "wcb")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: setColumnGap,
    value: colunmGap || "0",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Column Gap", "wcb")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Padding", "wcb")),
    values: padding,
    onChange: handleChangePadding
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Margin", "wcb")),
    values: margin,
    onChange: handleChangeMargin,
    inputProps: {
      min: -2000
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDimensionsControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/MyDimensionsNoMarginControl.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/MyDimensionsNoMarginControl.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyDimensionsControl/types.ts");
/* harmony import */ var _MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");









const MyDimensionsNoMarginControl = ({
  className = "space-y-5",
  dimensionControl = _types__WEBPACK_IMPORTED_MODULE_5__.MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
  setAttrs__dimensions,
  paddingLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Padding", "wcb")
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  //
  const {
    colunmGap: colunmGapProps,
    rowGap: rowGapProps,
    padding: paddingProps
  } = dimensionControl;
  const {
    currentDeviceValue: colunmGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(colunmGapProps, deviceType);
  const {
    currentDeviceValue: rowGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(rowGapProps, deviceType);
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(paddingProps, deviceType);

  //
  const setRowGrap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      rowGap: {
        ...rowGapProps,
        [deviceType]: value
      }
    });
  };
  const setColumnGap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      colunmGap: {
        ...colunmGapProps,
        [deviceType]: value
      }
    });
  };
  const handleChangePadding = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      padding: {
        ...paddingProps,
        [deviceType]: value
      }
    });
  };
  const MY_GAP_UNITS = [{
    value: "px",
    label: "px",
    default: 32
  }, {
    value: "rem",
    label: "rem",
    default: 2
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: setRowGrap,
    value: rowGap || "0",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Row Gap", "wcb")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: setColumnGap,
    value: colunmGap || "0",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Column Gap", "wcb")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "",
      hasResponsive: true
    }, paddingLabel),
    values: padding,
    onChange: handleChangePadding
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDimensionsNoMarginControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/types.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_DIMENSION: () => (/* binding */ DEFAULT_DIMENSION),
/* harmony export */   MY_DIMENSIONS_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_NO_GAP_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_NO_GAP_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_NO_GAP_DEMO__EMPTY: () => (/* binding */ MY_DIMENSIONS_NO_GAP_DEMO__EMPTY),
/* harmony export */   MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO)
/* harmony export */ });
const DEFAULT_DIMENSION = {
  top: "12px",
  left: "12px",
  right: "12px",
  bottom: "12px"
};
const MY_DIMENSIONS_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_GAP_CONTROL_DEMO = {
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_GAP_DEMO__EMPTY = {
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};
const MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};

/***/ }),

/***/ "./src/components/controls/MyDisclosure.tsx":
/*!**************************************************!*\
  !*** ./src/components/controls/MyDisclosure.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/MinusIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const MyDisclosure = ({
  className = "space-y-3.5",
  label = "Customize",
  children,
  defaultOpen,
  as,
  hasResponsive = false,
  isDisableButton = false
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure, {
    defaultOpen: defaultOpen,
    as: as
  }, ({
    open
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: open ? "ring-2 ring-offset-1 rounded-lg ring-purple-200 mb-4" : ""
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure.Button, {
    className: `flex w-full justify-between items-center rounded-lg bg-purple-100 px-3 py-2.5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ${open ? "rounded-b-none" : ""}`,
    disabled: isDisableButton
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hasResponsive: hasResponsive,
    className: "MyDisclosure__labelControl"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, "wcb")), open ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__, {
    className: "w-5 h-5 text-purple-900"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-4 h-4 text-purple-900",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 22H21",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure.Panel, {
    className: "px-3 pt-4 pb-3 text-sm text-gray-600 rounded-b-lg bg-purple-50/20"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDisclosure);

/***/ }),

/***/ "./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyRadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");




const TAGS_PLANS = [{
  name: "h1",
  icon: "H1"
}, {
  name: "h2",
  icon: "H2"
}, {
  name: "h3",
  icon: "H3"
}, {
  name: "h4",
  icon: "H4"
}, {
  name: "h5",
  icon: "H5"
}, {
  name: "h6",
  icon: "H6"
}, {
  name: "div",
  icon: "DIV"
}, {
  name: "p",
  icon: "P"
}];
const MyHeadingTagControl = ({
  onChange,
  tag,
  className,
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading tag", "wcb")
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    className: className
    // @ts-ignore
    ,
    onChange: onChange,
    value: tag,
    plans: TAGS_PLANS,
    isWrap: true,
    hasResponsive: false
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyHeadingTagControl);

/***/ }),

/***/ "./src/components/controls/MyLabelControl/MyLabelControl.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/controls/MyLabelControl/MyLabelControl.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyResponsiveToggle_MyResponsiveToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MyResponsiveToggle/MyResponsiveToggle */ "./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx");



const MyLabelControl = ({
  children,
  className = "mb-2",
  help,
  hasResponsive,
  devices
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `components-base-control__label font-medium uppercase text-[11px] ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-control-label flex items-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__label"
  }, children), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__responsive ml-1.5"
  }, hasResponsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyResponsiveToggle_MyResponsiveToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    devices: devices
  }))), !!help && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-help text-xs text-slate-500"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "components-base-control__help"
  }, help)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyLabelControl);

/***/ }),

/***/ "./src/components/controls/MyRadioGroup.tsx":
/*!**************************************************!*\
  !*** ./src/components/controls/MyRadioGroup.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALIGNMENT_PLANS_DEMO: () => (/* binding */ ALIGNMENT_PLANS_DEMO),
/* harmony export */   PLANS_DEMO: () => (/* binding */ PLANS_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);






const PLANS_DEMO = [{
  name: "left",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "center",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "right",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}];
const ALIGNMENT_PLANS_DEMO = [{
  name: "left",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "center",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "right",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}];
function MyRadioGroup({
  onChange = () => {},
  value,
  className = "",
  plans = PLANS_DEMO,
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "wcb"),
  hasResponsive = true,
  isWrap = false,
  labelClassName,
  contentClassName = "mt-3"
}) {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || plans[0].name);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selected !== value) {
      setSelected(value || "");
    }
  }, [value]);
  const handleChangeRadio = value => {
    setSelected(value);
    onChange(value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.RadioGroup, {
    className: className,
    value: selected,
    onChange: handleChangeRadio
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.RadioGroup.Label, {
    className: ""
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: labelClassName,
    hasResponsive: hasResponsive
  }, label)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${contentClassName} relative flex gap-1 ${isWrap ? "flex-wrap" : ""}`
  }, plans.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.RadioGroup.Option, {
      key: item.name,
      value: item.name,
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment
    }, ({
      checked
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `relative flex flex-1 basis-12 items-center justify-center p-1.5 max-w-xs cursor-pointer bg-white border rounded-lg ${checked ? "bg-sky-50 border-sky-400 text-sky-500" : "text-neutral-500 border-slate-300 hover:border-slate-500"}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      position: "top center"
      // @ts-ignore
      ,
      delay: 400,
      text: item.name.charAt(0).toUpperCase() + item.name.slice(1)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 z-[1]"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-xs leading-5",
      dangerouslySetInnerHTML: {
        __html: item.icon
      }
    })));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyRadioGroup);

/***/ }),

/***/ "./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ComputerDesktopIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/DeviceTabletIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/DevicePhoneMobileIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ChevronDownIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");






const DEVICE_TYPES = {
  Desktop: "Desktop",
  Tablet: "Tablet",
  Mobile: "Mobile"
};
const MyResponsiveToggle = ({
  className = "",
  devices = Object.values(DEVICE_TYPES)
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__["default"])() || "Desktop";
  const {
    __experimentalSetPreviewDeviceType: setPreviewDeviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)("core/edit-post");
  const handleSetDeviceType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(dv => {
    setPreviewDeviceType(DEVICE_TYPES[dv]);
  }, []);
  const renderDeviceIcon = (dv, className = "h-4 w-4") => {
    switch (dv) {
      case "Desktop":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__, {
          className: className,
          "aria-hidden": "true"
        });
      case "Tablet":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__, {
          className: className,
          "aria-hidden": "true"
        });
      case "Mobile":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__, {
          className: className,
          "aria-hidden": "true"
        });
      default:
        return null;
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
    as: "div",
    className: `wcbMyResponsiveToggle relative inline-block text-left ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Button, {
    className: "wcbMyResponsiveToggle__button inline-flex w-full items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-0 transition-colors text-slate-600 border border-slate-200 hover:border-slate-400",
    title: deviceType
  }, renderDeviceIcon(deviceType), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__, {
    className: "w-2.5 h-2.5 ml-1",
    "aria-hidden": "true"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Items, {
    className: "wcbMyResponsiveToggle__items absolute z-50 inset-x-0 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black/10 focus:outline-none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-1 space-y-0.5"
  }, devices.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
      key: index + item
    }, ({
      active
    }) => {
      const isActive = active || item === deviceType;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: `${isActive ? "bg-sky-50 text-sky-600" : "text-slate-800"} group flex w-full items-center justify-center rounded-md py-1.5`,
        onClick: e => {
          handleSetDeviceType(item);
        },
        title: item
      }, renderDeviceIcon(item));
    });
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyResponsiveToggle);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/components/controls/MySpacingSizesControl/styles.scss");
/* harmony import */ var _SpacingInputControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpacingInputControl */ "./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const MySpacingSizesControl = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "wcb"),
  hasResponsive = true,
  units,
  minCustomValue,
  value = "1rem",
  onChange = () => {},
  customUnitsValueSettings
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `MySpacingSizesControl ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hasResponsive: hasResponsive
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SpacingInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value,
    onChange: onChange,
    minCustomValue: minCustomValue,
    units: units,
    customUnitsValueSettings: customUnitsValueSettings
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MySpacingSizesControl);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_CUSTOM_UNITS_VALUE_SETTINGS: () => (/* binding */ MY_CUSTOM_UNITS_VALUE_SETTINGS),
/* harmony export */   MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE: () => (/* binding */ MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");





const MY_CUSTOM_UNITS_VALUE_SETTINGS = {
  px: {
    max: 1000,
    steps: 1
  },
  "%": {
    max: 100,
    steps: 1
  },
  vw: {
    max: 100,
    steps: 1
  },
  vh: {
    max: 100,
    steps: 1
  },
  em: {
    max: 50,
    steps: 0.1
  },
  rm: {
    max: 50,
    steps: 0.1
  },
  rem: {
    max: 50,
    steps: 0.1
  }
};
const MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE = {
  px: {
    max: 2000,
    steps: 1
  },
  "%": {
    max: 100,
    steps: 1
  },
  vw: {
    max: 100,
    steps: 1
  },
  vh: {
    max: 100,
    steps: 1
  },
  em: {
    max: 100,
    steps: 0.1
  },
  rm: {
    max: 100,
    steps: 0.1
  },
  rem: {
    max: 100,
    steps: 0.1
  }
};
const SpacingInputControl = ({
  value = "10px",
  onChange,
  minCustomValue = 0,
  units = _MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_3__.MY_GAP_UNITS,
  className = "",
  customUnitsValueSettings = MY_CUSTOM_UNITS_VALUE_SETTINGS
}) => {
  const selectedUnit = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalParseQuantityAndUnitFromRawValue)(value), [value])[1] || units[0].value;
  const customRangeValue = parseFloat(value !== null && value !== void 0 ? value : "10");
  const handleCustomValueSliderChange = next => {
    const newValue = [next, selectedUnit].join("");
    onChange(newValue);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className} flex items-center space-x-2.5`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-[1.5]"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: customRangeValue,
    min: minCustomValue,
    max: customUnitsValueSettings[selectedUnit].max,
    step: customUnitsValueSettings[selectedUnit].steps
    // @ts-ignore
    ,
    withInputField: false,
    onChange: handleCustomValueSliderChange,
    className: "m-0"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    onChange: (newSize, ...props) => {
      onChange(newSize);
    },
    placeholder: `${parseInt(value || "")}`,
    value: value,
    units: units,
    min: minCustomValue,
    hideLabelFromVision: true
    // size={"__unstable-large"}
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingInputControl);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/styles.scss":
/*!*******************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/styles.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyRadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");




const MyTextAlignControl = ({
  onChange,
  textAlignment,
  className,
  hasResponsive,
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "wcb")
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className
    // @ts-ignore
    ,
    onChange: onChange
    // @ts-ignore
    ,
    value: textAlignment || "",
    hasResponsive: hasResponsive,
    label: label
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTextAlignControl);

/***/ }),

/***/ "./src/components/controls/MyTextDecorationControl/MyTextDecorationControl.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/controls/MyTextDecorationControl/MyTextDecorationControl.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-underline.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);





const TEXT_DECORATIONS = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("None"),
  value: "none",
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    className: "w-6 h-6",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7 11.5h10V13H7z"
  }))
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Underline"),
  value: "underline",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Strikethrough"),
  value: "line-through",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
}];
const MyTextDecorationControl = ({
  value = "none",
  onChange = () => {},
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    ...props,
    __experimentalIsIconGroup: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Decoration"),
    value: value,
    onChange: onChange
  }, TEXT_DECORATIONS.map(textDecoration => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      key: textDecoration.value,
      value: textDecoration.value,
      icon: textDecoration.icon,
      label: textDecoration.name,
      title: textDecoration.name
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTextDecorationControl);

/***/ }),

/***/ "./src/components/controls/MyTextTransformControl/MyTextTransformControl.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/controls/MyTextTransformControl/MyTextTransformControl.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-uppercase.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-lowercase.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-capitalize.js");





const TEXT_TRANSFORMS = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("None"),
  value: "none",
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    className: "w-6 h-6",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7 11.5h10V13H7z"
  }))
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Uppercase"),
  value: "uppercase",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Lowercase"),
  value: "lowercase",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Capitalize"),
  value: "capitalize",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
}];
const MyTextTransformControl = ({
  value = "none",
  onChange = () => {},
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    ...props,
    __experimentalIsIconGroup: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Letter case"),
    value: value,
    onChange: onChange
  }, TEXT_TRANSFORMS.map(textTransform => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      key: textTransform.value,
      value: textTransform.value,
      icon: textTransform.icon,
      label: textTransform.name
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTextTransformControl);

/***/ }),

/***/ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyTypographyControl/MyTypographyControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SelectFontAppearance */ "./src/components/controls/SelectFontAppearance.tsx");
/* harmony import */ var _MyTextDecorationControl_MyTextDecorationControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MyTextDecorationControl/MyTextDecorationControl */ "./src/components/controls/MyTextDecorationControl/MyTextDecorationControl.tsx");
/* harmony import */ var _MyTextTransformControl_MyTextTransformControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MyTextTransformControl/MyTextTransformControl */ "./src/components/controls/MyTextTransformControl/MyTextTransformControl.tsx");
/* harmony import */ var _WcbFontFamilyPicker_WcbFontFamilyPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../WcbFontFamilyPicker/WcbFontFamilyPicker */ "./src/components/controls/WcbFontFamilyPicker/WcbFontFamilyPicker.tsx");
/* harmony import */ var _MyDisclosure__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");













const MyTypographyControl = ({
  className = "space-y-5",
  typographyControl = _types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO,
  setAttrs__typography = () => {},
  label = "Typography",
  disclosureDefaultOpen
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__["default"])() || "Desktop";
  const {
    fontSizes: fontSizesProps,
    appearance,
    textDecoration,
    textTransform,
    lineHeight: lineHeightProps,
    letterSpacing: letterSpacingProps,
    fontFamily
  } = typographyControl;
  const {
    currentDeviceValue: FONT_SIZE
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__["default"])(fontSizesProps, deviceType);
  const {
    currentDeviceValue: LINE_HEIGHT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__["default"])(lineHeightProps, deviceType);
  const {
    currentDeviceValue: LETTER_SPACING
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__["default"])(letterSpacingProps, deviceType);

  //
  const handleChangeFontFamily = newFont => {
    setAttrs__typography({
      ...typographyControl,
      fontFamily: newFont
    });
  };
  const handleChangeFontAppearance = value => {
    setAttrs__typography({
      ...typographyControl,
      appearance: value || _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_6__.FONT_APPEARANCE_OPTIONS[0]
    });
  };
  const handleChangeTextDecoration = value => {
    setAttrs__typography({
      ...typographyControl,
      textDecoration: value
    });
  };
  const handleChangeTextTransform = value => {
    setAttrs__typography({
      ...typographyControl,
      textTransform: value
    });
  };
  const handleChangeLineHeight = value => {
    setAttrs__typography({
      ...typographyControl,
      lineHeight: {
        ...lineHeightProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeLetterSpacing = value => {
    setAttrs__typography({
      ...typographyControl,
      letterSpacing: {
        ...letterSpacingProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeFontSize = newFontSize => {
    setAttrs__typography({
      ...typographyControl,
      fontSizes: {
        ...fontSizesProps,
        [deviceType]: newFontSize
      }
    });
  };
  //
  const renderFontFamily = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFontFamilyPicker_WcbFontFamilyPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
      selectedFont: fontFamily,
      onChangeFontFamily: handleChangeFontFamily
    }));
  };
  //
  const renderFontsizePicker = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "flex absolute right-8 -top-0.5 z-10",
      hasResponsive: true,
      children: ""
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FontSizePicker
    // @ts-ignore
    , {
      __nextHasNoMarginBottom: true
      // @ts-ignore
      ,
      fontSizes: _types__WEBPACK_IMPORTED_MODULE_4__.FONT_SIZES_DEMO
      // @ts-ignore
      ,
      value: FONT_SIZE,
      fallbackFontSize: 16
      // @ts-ignore
      ,
      onChange: handleChangeFontSize
    }));
  };
  const renderAppearance = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SelectFontAppearance__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: ({
        selectedItem
      }) => handleChangeFontAppearance(selectedItem),
      value: appearance
    });
  };
  const renderLineHeight = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-between space-x-3 items-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hasResponsive: true,
      className: "flex-shrink-0",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Line height", "wcb")
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalNumberControl, {
      onChange: handleChangeLineHeight,
      value: LINE_HEIGHT,
      step: 0.1,
      min: 0,
      max: 100,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("1.5", "wcb")
    }));
  };
  const renderLetterSpacing = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-between space-x-3 items-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hasResponsive: true,
      className: "flex-shrink-0",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Letter spacing", "wcb")
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl, {
      onChange: handleChangeLetterSpacing,
      value: LETTER_SPACING,
      units: [{
        value: "px",
        label: "px",
        default: 0
      }, {
        value: "%",
        label: "%",
        default: 0
      }, {
        value: "em",
        label: "em",
        default: 0
      }]
    }));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyDisclosure__WEBPACK_IMPORTED_MODULE_10__["default"], {
    defaultOpen: disclosureDefaultOpen,
    label: label
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, renderFontFamily(), renderFontsizePicker(), renderAppearance(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyTextDecorationControl_MyTextDecorationControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: textDecoration,
    onChange: handleChangeTextDecoration
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyTextTransformControl_MyTextTransformControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: textTransform,
    onChange: handleChangeTextTransform
  }), renderLineHeight(), renderLetterSpacing()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTypographyControl);

/***/ }),

/***/ "./src/components/controls/MyTypographyControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyTypographyControl/types.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_SIZES_DEMO: () => (/* binding */ FONT_SIZES_DEMO),
/* harmony export */   TYPOGRAPHY_CONTROL_DEMO: () => (/* binding */ TYPOGRAPHY_CONTROL_DEMO),
/* harmony export */   TYPOGRAPHY_CONTROL_PRODUCT_DEMO: () => (/* binding */ TYPOGRAPHY_CONTROL_PRODUCT_DEMO)
/* harmony export */ });
/* harmony import */ var _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SelectFontAppearance */ "./src/components/controls/SelectFontAppearance.tsx");

const TYPOGRAPHY_CONTROL_DEMO = {
  fontSizes: {
    Desktop: ""
  },
  appearance: _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_0__.FONT_APPEARANCE_OPTIONS[0],
  textDecoration: undefined,
  textTransform: undefined,
  lineHeight: {
    Desktop: undefined
  },
  letterSpacing: {
    Desktop: undefined
  },
  fontFamily: undefined
};
const TYPOGRAPHY_CONTROL_PRODUCT_DEMO = {
  fontSizes: {
    Desktop: "",
    Tablet: "",
    Mobile: ""
  },
  appearance: _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_0__.FONT_APPEARANCE_OPTIONS[0],
  textDecoration: undefined,
  textTransform: undefined,
  lineHeight: {
    Desktop: undefined
  },
  letterSpacing: {
    Desktop: undefined
  },
  fontFamily: undefined
};
const FONT_SIZES_DEMO = [{
  name: "Tiny",
  slug: "tiny",
  size: "8px"
}, {
  name: "Small",
  slug: "small",
  size: "12px"
}, {
  name: "Normal",
  slug: "normal",
  size: "16px"
}, {
  name: "Big",
  slug: "big",
  size: "26px"
}, {
  name: "Bigger",
  slug: "bigger",
  size: "30px"
}, {
  name: "Huge",
  slug: "huge",
  size: "36px"
}];

/***/ }),

/***/ "./src/components/controls/MyUnitControl.tsx":
/*!***************************************************!*\
  !*** ./src/components/controls/MyUnitControl.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const MyUnitControl = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Column Gap", "wcb"),
  hasResponsive,
  onChange,
  value,
  units = [{
    value: "px",
    label: "px",
    default: 32
  }, {
    value: "rem",
    label: "rem",
    default: 2
  }, {
    value: "%",
    label: "%",
    default: 10
  }]
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `flex items-center justify-center space-x-2`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "flex-[2.2]",
    hasResponsive: hasResponsive
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    onChange: onChange,
    value: value,
    label: "",
    units: units
    // size={"__unstable-large"}
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyUnitControl);

/***/ }),

/***/ "./src/components/controls/SelectFontAppearance.tsx":
/*!**********************************************************!*\
  !*** ./src/components/controls/SelectFontAppearance.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_APPEARANCE_OPTIONS: () => (/* binding */ FONT_APPEARANCE_OPTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const FONT_APPEARANCE_OPTIONS = [{
  key: "default",
  name: "Default",
  style: {
    fontWeight: undefined,
    fontStyle: undefined
  }
}, {
  key: "thin",
  name: "Thin",
  style: {
    fontWeight: "100",
    fontStyle: "normal"
  }
}, {
  key: "ExtraLight",
  name: "Extra Light",
  style: {
    fontWeight: "200",
    fontStyle: "normal"
  }
}, {
  key: "light",
  name: "Light",
  style: {
    fontWeight: "300",
    fontStyle: "normal"
  }
}, {
  key: "Regular",
  name: "Regular",
  style: {
    fontWeight: "400",
    fontStyle: "normal"
  }
}, {
  key: "Medium",
  name: "Medium",
  style: {
    fontWeight: "500",
    fontStyle: "normal"
  }
}, {
  key: "SemiBold",
  name: "Semi Bold",
  style: {
    fontWeight: "600",
    fontStyle: "normal"
  }
}, {
  key: "Bold",
  name: "Bold",
  style: {
    fontWeight: "700",
    fontStyle: "normal"
  }
}, {
  key: "ExtraBold",
  name: "Extra Bold",
  style: {
    fontWeight: "800",
    fontStyle: "normal"
  }
}, {
  key: "Black",
  name: "Black",
  style: {
    fontWeight: "900",
    fontStyle: "normal"
  }
},
//
{
  key: "thin_italic",
  name: "Thin Italic",
  style: {
    fontWeight: "100",
    fontStyle: "italic"
  }
}, {
  key: "ExtraLight_italic",
  name: "Extra Light Italic",
  style: {
    fontWeight: "200",
    fontStyle: "italic"
  }
}, {
  key: "light_italic",
  name: "Light Italic",
  style: {
    fontWeight: "300",
    fontStyle: "italic"
  }
}, {
  key: "Regular_italic",
  name: "Regular Italic",
  style: {
    fontWeight: "400",
    fontStyle: "italic"
  }
}, {
  key: "Medium_italic",
  name: "Medium Italic",
  style: {
    fontWeight: "500",
    fontStyle: "italic"
  }
}, {
  key: "SemiBold_italic",
  name: "Semi Bold Italic",
  style: {
    fontWeight: "600",
    fontStyle: "italic"
  }
}, {
  key: "Bold_italic",
  name: "Bold Italic",
  style: {
    fontWeight: "700",
    fontStyle: "italic"
  }
}, {
  key: "ExtraBold_italic",
  name: "Extra Bold Italic",
  style: {
    fontWeight: "800",
    fontStyle: "italic"
  }
}, {
  key: "Black_italic",
  name: "Black Italic",
  style: {
    fontWeight: "900",
    fontStyle: "italic"
  }
}];
const SelectFontAppearance = ({
  onChange,
  value
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CustomSelectControl
  //  @ts-ignore
  , {
    __nextUnconstrainedWidth: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Appearance", "wcb"),
    options: FONT_APPEARANCE_OPTIONS,
    onChange: onChange,
    value: value
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectFontAppearance);

/***/ }),

/***/ "./src/components/controls/WcbFontFamilyPicker/WcbFontFamilyPicker.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/WcbFontFamilyPicker/WcbFontFamilyPicker.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _google_fonts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-fonts.json */ "./src/components/controls/WcbFontFamilyPicker/google-fonts.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var _MyCombobox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyCombobox */ "./src/components/controls/MyCombobox.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");







const WcbFontFamilyPicker = ({
  onChangeFontFamily,
  selectedFont
}) => {
  const [fontFamily, setFontFamily] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedFont);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFontFamily(selectedFont);
  }, [selectedFont]);
  const systemFonts = [{
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }];
  const googleFontsList = [];
  Object.keys(_google_fonts_json__WEBPACK_IMPORTED_MODULE_1__).forEach(k => {
    googleFontsList.push({
      value: k,
      label: k
    });
  });
  const handleChangeFont = newFont => {
    setFontFamily(newFont || "");
    onChangeFontFamily(newFont || "");
    googleFontsList.some(font => {
      if (font.value === newFont) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.loadGoogleFont)(newFont);
        return true;
      }
      return false;
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.loadGoogleFont)("");
  };
  const FONTS = [{
    value: "",
    label: "Default"
  }, ...systemFonts, ...googleFontsList];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Family", "wcb")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyCombobox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: fontFamily || "",
    options: FONTS,
    onChange: handleChangeFont
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFontFamilyPicker);

/***/ }),

/***/ "./src/components/controls/WcbFontFamilyPicker/google-fonts.json":
/*!***********************************************************************!*\
  !*** ./src/components/controls/WcbFontFamilyPicker/google-fonts.json ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"Roboto":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Open Sans":{"weight":["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Noto Sans JP":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lato":{"weight":["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Montserrat":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Condensed":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Source Sans Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Oswald":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Poppins":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Mono":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"monospace"},"Noto Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Raleway":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"PT Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Roboto Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Merriweather":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Ubuntu":{"weight":["300","300italic","regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Playfair Display":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Nunito":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Sans KR":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Open Sans Condensed":{"weight":["300","300italic","700"],"fallback":"sans-serif"},"Rubik":{"weight":["300","regular","500","600","700","800","900","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Lora":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Work Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Mukta":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans TC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Nunito Sans":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"PT Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Nanum Gothic":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Inter":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Fira Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Quicksand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Titillium Web":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],"fallback":"sans-serif"},"Hind Siliguri":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Karla":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Barlow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Inconsolata":{"weight":["200","300","regular","500","600","700","800","900"],"fallback":"monospace"},"Heebo":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Noto Sans SC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Oxygen":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Source Code Pro":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"monospace"},"Anton":{"weight":["regular"],"fallback":"sans-serif"},"Josefin Sans":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Arimo":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"PT Sans Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"IBM Plex Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Dosis":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans HK":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Libre Franklin":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Libre Baskerville":{"weight":["regular","italic","700"],"fallback":"serif"},"Cabin":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Bitter":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Crimson Text":{"weight":["regular","italic","600","600italic","700","700italic"],"fallback":"serif"},"Bebas Neue":{"weight":["regular"],"fallback":"display"},"Lobster":{"weight":["regular"],"fallback":"display"},"Yanone Kaffeesatz":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Dancing Script":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Cairo":{"weight":["200","300","regular","600","700","900"],"fallback":"sans-serif"},"Abel":{"weight":["regular"],"fallback":"sans-serif"},"Fjalla One":{"weight":["regular"],"fallback":"sans-serif"},"Varela Round":{"weight":["regular"],"fallback":"sans-serif"},"Source Serif Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"serif"},"Arvo":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"EB Garamond":{"weight":["regular","500","600","700","800","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Barlow Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Architects Daughter":{"weight":["regular"],"fallback":"handwriting"},"Zilla Slab":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Indie Flower":{"weight":["regular"],"fallback":"handwriting"},"Mulish":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Comfortaa":{"weight":["300","regular","500","600","700"],"fallback":"display"},"DM Sans":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Pacifico":{"weight":["regular"],"fallback":"handwriting"},"Exo 2":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Kanit":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Prompt":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Shadows Into Light":{"weight":["regular"],"fallback":"handwriting"},"Questrial":{"weight":["regular"],"fallback":"sans-serif"},"Merriweather Sans":{"weight":["300","regular","500","600","700","800","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Teko":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Balsamiq Sans":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Asap":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind Madurai":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Cormorant Garamond":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Antic Slab":{"weight":["regular"],"fallback":"serif"},"Archivo Narrow":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Overpass":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Abril Fatface":{"weight":["regular"],"fallback":"display"},"Slabo 27px":{"weight":["regular"],"fallback":"serif"},"Exo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Assistant":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Maven Pro":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Domine":{"weight":["regular","500","600","700"],"fallback":"serif"},"Fira Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Caveat":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Rajdhani":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"IBM Plex Serif":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Martel":{"weight":["200","300","regular","600","700","800","900"],"fallback":"serif"},"Play":{"weight":["regular","700"],"fallback":"sans-serif"},"Amatic SC":{"weight":["regular","700"],"fallback":"handwriting"},"Bree Serif":{"weight":["regular"],"fallback":"serif"},"Tajawal":{"weight":["200","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noto Serif JP":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Righteous":{"weight":["regular"],"fallback":"display"},"Satisfy":{"weight":["regular"],"fallback":"handwriting"},"Signika":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Catamaran":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Acme":{"weight":["regular"],"fallback":"sans-serif"},"Manrope":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Fredoka One":{"weight":["regular"],"fallback":"display"},"Nanum Myeongjo":{"weight":["regular","700","800"],"fallback":"serif"},"ABeeZee":{"weight":["regular","italic"],"fallback":"sans-serif"},"Amiri":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Patrick Hand":{"weight":["regular"],"fallback":"handwriting"},"PT Sans Caption":{"weight":["regular","700"],"fallback":"sans-serif"},"Archivo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Alfa Slab One":{"weight":["regular"],"fallback":"display"},"Cinzel":{"weight":["regular","500","600","700","800","900"],"fallback":"serif"},"Crete Round":{"weight":["regular","italic"],"fallback":"serif"},"Permanent Marker":{"weight":["regular"],"fallback":"handwriting"},"Alegreya Sans":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Almarai":{"weight":["300","regular","700","800"],"fallback":"sans-serif"},"Barlow Semi Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Russo One":{"weight":["regular"],"fallback":"sans-serif"},"Vollkorn":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Sarabun":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Krona One":{"weight":["regular"],"fallback":"sans-serif"},"M PLUS Rounded 1c":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noticia Text":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Courgette":{"weight":["regular"],"fallback":"handwriting"},"Monda":{"weight":["regular","700"],"fallback":"sans-serif"},"Alegreya":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Frank Ruhl Libre":{"weight":["300","regular","500","700","900"],"fallback":"serif"},"Patua One":{"weight":["regular"],"fallback":"display"},"Ubuntu Condensed":{"weight":["regular"],"fallback":"sans-serif"},"Great Vibes":{"weight":["regular"],"fallback":"handwriting"},"Quattrocento Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"M PLUS 1p":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Spartan":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yantramanav":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lobster Two":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Archivo Black":{"weight":["regular"],"fallback":"sans-serif"},"Kaushan Script":{"weight":["regular"],"fallback":"handwriting"},"Tinos":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Cardo":{"weight":["regular","italic","700"],"fallback":"serif"},"Orbitron":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Sacramento":{"weight":["regular"],"fallback":"handwriting"},"IBM Plex Mono":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"monospace"},"Francois One":{"weight":["regular"],"fallback":"sans-serif"},"Luckiest Guy":{"weight":["regular"],"fallback":"display"},"Gothic A1":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Kalam":{"weight":["300","regular","700"],"fallback":"handwriting"},"Parisienne":{"weight":["regular"],"fallback":"handwriting"},"Gloria Hallelujah":{"weight":["regular"],"fallback":"handwriting"},"Didact Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Cantarell":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Press Start 2P":{"weight":["regular"],"fallback":"display"},"Jost":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Rokkitt":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Paytone One":{"weight":["regular"],"fallback":"sans-serif"},"Prata":{"weight":["regular"],"fallback":"serif"},"Baloo 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Cuprum":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Chivo":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Encode Sans":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"News Cycle":{"weight":["regular","700"],"fallback":"sans-serif"},"Old Standard TT":{"weight":["regular","italic","700"],"fallback":"serif"},"Hind Guntur":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Pathway Gothic One":{"weight":["regular"],"fallback":"sans-serif"},"Red Hat Display":{"weight":["regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Public Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Secular One":{"weight":["regular"],"fallback":"sans-serif"},"Volkhov":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Concert One":{"weight":["regular"],"fallback":"display"},"Asap Condensed":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Montserrat Alternates":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Ropa Sans":{"weight":["regular","italic"],"fallback":"sans-serif"},"Josefin Slab":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"serif"},"Poiret One":{"weight":["regular"],"fallback":"display"},"Passion One":{"weight":["regular","700","900"],"fallback":"display"},"Padauk":{"weight":["regular","700"],"fallback":"sans-serif"},"Changa":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Saira Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Ultra":{"weight":["regular"],"fallback":"serif"},"Quattrocento":{"weight":["regular","700"],"fallback":"serif"},"Arapey":{"weight":["regular","italic"],"fallback":"serif"},"Vidaloka":{"weight":["regular"],"fallback":"serif"},"Playfair Display SC":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Cookie":{"weight":["regular"],"fallback":"handwriting"},"Chakra Petch":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Istok Web":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Cormorant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"DM Serif Display":{"weight":["regular","italic"],"fallback":"serif"},"Neuton":{"weight":["200","300","regular","italic","700","800"],"fallback":"serif"},"Spectral":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Sawarabi Mincho":{"weight":["regular"],"fallback":"sans-serif"},"Lemonada":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Yellowtail":{"weight":["regular"],"fallback":"handwriting"},"Handlee":{"weight":["regular"],"fallback":"handwriting"},"Merienda":{"weight":["regular","700"],"fallback":"handwriting"},"Philosopher":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Sanchez":{"weight":["regular","italic"],"fallback":"serif"},"Hammersmith One":{"weight":["regular"],"fallback":"sans-serif"},"Special Elite":{"weight":["regular"],"fallback":"display"},"Economica":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Staatliches":{"weight":["regular"],"fallback":"display"},"Sriracha":{"weight":["regular"],"fallback":"handwriting"},"Hind Vadodara":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Monoton":{"weight":["regular"],"fallback":"display"},"Ruda":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Advent Pro":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Saira":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Homemade Apple":{"weight":["regular"],"fallback":"handwriting"},"Sigmar One":{"weight":["regular"],"fallback":"display"},"Mitr":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Bangers":{"weight":["regular"],"fallback":"display"},"Khand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Faustina":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Saira Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cabin Condensed":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Gudea":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Fira Sans Extra Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"DM Serif Text":{"weight":["regular","italic"],"fallback":"serif"},"El Messiri":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Electrolize":{"weight":["regular"],"fallback":"sans-serif"},"Taviraj":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"PT Mono":{"weight":["regular"],"fallback":"monospace"},"Gentium Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Space Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Alice":{"weight":["regular"],"fallback":"serif"},"Unica One":{"weight":["regular"],"fallback":"display"},"Ubuntu Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Pragati Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"Noto Serif TC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Amaranth":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Karma":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Actor":{"weight":["regular"],"fallback":"sans-serif"},"Nanum Pen Script":{"weight":["regular"],"fallback":"handwriting"},"Noto Serif SC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Tangerine":{"weight":["regular","700"],"fallback":"handwriting"},"Carter One":{"weight":["regular"],"fallback":"display"},"Neucha":{"weight":["regular"],"fallback":"handwriting"},"Unna":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Pontano Sans":{"weight":["regular"],"fallback":"sans-serif"},"Bai Jamjuree":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marck Script":{"weight":["regular"],"fallback":"handwriting"},"BenchNine":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Fugaz One":{"weight":["regular"],"fallback":"display"},"Yeseva One":{"weight":["regular"],"fallback":"display"},"Eczar":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Bad Script":{"weight":["regular"],"fallback":"handwriting"},"Viga":{"weight":["regular"],"fallback":"sans-serif"},"Gentium Book Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jura":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Allura":{"weight":["regular"],"fallback":"handwriting"},"Palanquin":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Sawarabi Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Rock Salt":{"weight":["regular"],"fallback":"handwriting"},"Lusitana":{"weight":["regular","700"],"fallback":"serif"},"Alef":{"weight":["regular","700"],"fallback":"sans-serif"},"Julius Sans One":{"weight":["regular"],"fallback":"sans-serif"},"Tenor Sans":{"weight":["regular"],"fallback":"sans-serif"},"Nothing You Could Do":{"weight":["regular"],"fallback":"handwriting"},"Cutive Mono":{"weight":["regular"],"fallback":"monospace"},"Khula":{"weight":["300","regular","600","700","800"],"fallback":"sans-serif"},"Adamina":{"weight":["regular"],"fallback":"serif"},"Playball":{"weight":["regular"],"fallback":"display"},"Audiowide":{"weight":["regular"],"fallback":"display"},"Jaldi":{"weight":["regular","700"],"fallback":"sans-serif"},"Black Ops One":{"weight":["regular"],"fallback":"display"},"Signika Negative":{"weight":["300","regular","600","700"],"fallback":"sans-serif"},"Shadows Into Light Two":{"weight":["regular"],"fallback":"handwriting"},"Armata":{"weight":["regular"],"fallback":"sans-serif"},"Mali":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"handwriting"},"Antic":{"weight":["regular"],"fallback":"sans-serif"},"Varela":{"weight":["regular"],"fallback":"sans-serif"},"Berkshire Swash":{"weight":["regular"],"fallback":"handwriting"},"Aleo":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Gelasio":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Rufina":{"weight":["regular","700"],"fallback":"serif"},"Markazi Text":{"weight":["regular","500","600","700"],"fallback":"serif"},"Nanum Gothic Coding":{"weight":["regular","700"],"fallback":"monospace"},"Allan":{"weight":["regular","700"],"fallback":"display"},"Noto Serif KR":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Abhaya Libre":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Quantico":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Marcellus":{"weight":["regular"],"fallback":"serif"},"Sorts Mill Goudy":{"weight":["regular","italic"],"fallback":"serif"},"Alata":{"weight":["regular"],"fallback":"sans-serif"},"Knewave":{"weight":["regular"],"fallback":"display"},"Alex Brush":{"weight":["regular"],"fallback":"handwriting"},"Aclonica":{"weight":["regular"],"fallback":"sans-serif"},"Gruppo":{"weight":["regular"],"fallback":"display"},"Damion":{"weight":["regular"],"fallback":"handwriting"},"Itim":{"weight":["regular"],"fallback":"handwriting"},"Bungee":{"weight":["regular"],"fallback":"display"},"Gochi Hand":{"weight":["regular"],"fallback":"handwriting"},"Mr Dafoe":{"weight":["regular"],"fallback":"handwriting"},"Freckle Face":{"weight":["regular"],"fallback":"display"},"Baloo Chettan 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Trirong":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Kosugi Maru":{"weight":["regular"],"fallback":"sans-serif"},"Rubik Mono One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Mono":{"weight":["regular","500","700"],"fallback":"monospace"},"Cantata One":{"weight":["regular"],"fallback":"serif"},"Suez One":{"weight":["regular"],"fallback":"serif"},"Niconne":{"weight":["regular"],"fallback":"handwriting"},"Six Caps":{"weight":["regular"],"fallback":"sans-serif"},"Miriam Libre":{"weight":["regular","700"],"fallback":"sans-serif"},"Sarala":{"weight":["regular","700"],"fallback":"sans-serif"},"Sintony":{"weight":["regular","700"],"fallback":"sans-serif"},"Titan One":{"weight":["regular"],"fallback":"display"},"Encode Sans Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cousine":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"PT Serif Caption":{"weight":["regular","italic"],"fallback":"serif"},"Courier Prime":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Overlock":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"display"},"Allerta":{"weight":["regular"],"fallback":"sans-serif"},"Arsenal":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Black Han Sans":{"weight":["regular"],"fallback":"sans-serif"},"Squada One":{"weight":["regular"],"fallback":"display"},"Lateef":{"weight":["regular"],"fallback":"handwriting"},"Arima Madurai":{"weight":["100","200","300","regular","500","700","800","900"],"fallback":"display"},"Ramabhadra":{"weight":["regular"],"fallback":"sans-serif"},"Covered By Your Grace":{"weight":["regular"],"fallback":"handwriting"},"Martel Sans":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Rancho":{"weight":["regular"],"fallback":"handwriting"},"Enriqueta":{"weight":["regular","500","600","700"],"fallback":"serif"},"Syncopate":{"weight":["regular","700"],"fallback":"sans-serif"},"Pinyon Script":{"weight":["regular"],"fallback":"handwriting"},"Chewy":{"weight":["regular"],"fallback":"display"},"Oleo Script":{"weight":["regular","700"],"fallback":"display"},"Kreon":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Candal":{"weight":["regular"],"fallback":"sans-serif"},"Spinnaker":{"weight":["regular"],"fallback":"sans-serif"},"Reem Kufi":{"weight":["regular"],"fallback":"sans-serif"},"Krub":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Michroma":{"weight":["regular"],"fallback":"sans-serif"},"Annie Use Your Telescope":{"weight":["regular"],"fallback":"handwriting"},"Lilita One":{"weight":["regular"],"fallback":"display"},"Coda":{"weight":["regular","800"],"fallback":"display"},"Fredericka the Great":{"weight":["regular"],"fallback":"display"},"Mukta Malar":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bowlby One SC":{"weight":["regular"],"fallback":"display"},"Average":{"weight":["regular"],"fallback":"serif"},"Londrina Solid":{"weight":["100","300","regular","900"],"fallback":"display"},"New Tegomin":{"weight":["regular"],"fallback":"serif"},"Glegoo":{"weight":["regular","700"],"fallback":"serif"},"Pridi":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Boogaloo":{"weight":["regular"],"fallback":"display"},"Red Hat Text":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Aldrich":{"weight":["regular"],"fallback":"sans-serif"},"Basic":{"weight":["regular"],"fallback":"sans-serif"},"Capriola":{"weight":["regular"],"fallback":"sans-serif"},"Forum":{"weight":["regular"],"fallback":"display"},"Reenie Beanie":{"weight":["regular"],"fallback":"handwriting"},"Laila":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Alegreya Sans SC":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Share Tech Mono":{"weight":["regular"],"fallback":"monospace"},"Italianno":{"weight":["regular"],"fallback":"handwriting"},"Lalezar":{"weight":["regular"],"fallback":"display"},"Lexend Deca":{"weight":["regular"],"fallback":"sans-serif"},"Caveat Brush":{"weight":["regular"],"fallback":"handwriting"},"Shrikhand":{"weight":["regular"],"fallback":"display"},"Creepster":{"weight":["regular"],"fallback":"display"},"Kameron":{"weight":["regular","700"],"fallback":"serif"},"Coda Caption":{"weight":["800"],"fallback":"sans-serif"},"Goudy Bookletter 1911":{"weight":["regular"],"fallback":"serif"},"Coming Soon":{"weight":["regular"],"fallback":"handwriting"},"Saira Extra Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yrsa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Telex":{"weight":["regular"],"fallback":"sans-serif"},"Bevan":{"weight":["regular"],"fallback":"display"},"Voltaire":{"weight":["regular"],"fallback":"sans-serif"},"Days One":{"weight":["regular"],"fallback":"sans-serif"},"Cabin Sketch":{"weight":["regular","700"],"fallback":"display"},"Norican":{"weight":["regular"],"fallback":"handwriting"},"Rambla":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Mukta Vaani":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Average Sans":{"weight":["regular"],"fallback":"sans-serif"},"Arbutus Slab":{"weight":["regular"],"fallback":"serif"},"Sansita":{"weight":["regular","italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Mada":{"weight":["200","300","regular","500","600","700","900"],"fallback":"sans-serif"},"Just Another Hand":{"weight":["regular"],"fallback":"handwriting"},"Nobile":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Gilda Display":{"weight":["regular"],"fallback":"serif"},"VT323":{"weight":["regular"],"fallback":"monospace"},"Mandali":{"weight":["regular"],"fallback":"sans-serif"},"Caudex":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Anonymous Pro":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Bentham":{"weight":["regular"],"fallback":"serif"},"Overpass Mono":{"weight":["300","regular","600","700"],"fallback":"monospace"},"Sen":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Kadwa":{"weight":["regular","700"],"fallback":"serif"},"Cambay":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Yesteryear":{"weight":["regular"],"fallback":"handwriting"},"Molengo":{"weight":["regular"],"fallback":"sans-serif"},"Nixie One":{"weight":["regular"],"fallback":"display"},"Scada":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Crimson Pro":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Arizonia":{"weight":["regular"],"fallback":"handwriting"},"Racing Sans One":{"weight":["regular"],"fallback":"display"},"Scheherazade":{"weight":["regular","700"],"fallback":"serif"},"Seaweed Script":{"weight":["regular"],"fallback":"display"},"Belleza":{"weight":["regular"],"fallback":"sans-serif"},"Harmattan":{"weight":["regular","700"],"fallback":"sans-serif"},"Leckerli One":{"weight":["regular"],"fallback":"handwriting"},"Ovo":{"weight":["regular"],"fallback":"serif"},"Merienda One":{"weight":["regular"],"fallback":"handwriting"},"Holtwood One SC":{"weight":["regular"],"fallback":"serif"},"Cinzel Decorative":{"weight":["regular","700","900"],"fallback":"display"},"Literata":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mrs Saint Delafield":{"weight":["regular"],"fallback":"handwriting"},"Schoolbell":{"weight":["regular"],"fallback":"handwriting"},"Bungee Inline":{"weight":["regular"],"fallback":"display"},"Herr Von Muellerhoff":{"weight":["regular"],"fallback":"handwriting"},"Oranienbaum":{"weight":["regular"],"fallback":"serif"},"Baloo Tamma 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Sniglet":{"weight":["regular","800"],"fallback":"display"},"Bubblegum Sans":{"weight":["regular"],"fallback":"display"},"Rochester":{"weight":["regular"],"fallback":"handwriting"},"Judson":{"weight":["regular","italic","700"],"fallback":"serif"},"Marcellus SC":{"weight":["regular"],"fallback":"serif"},"Darker Grotesque":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Changa One":{"weight":["regular","italic"],"fallback":"display"},"Alegreya SC":{"weight":["regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Pattaya":{"weight":["regular"],"fallback":"sans-serif"},"Mallanna":{"weight":["regular"],"fallback":"sans-serif"},"Share":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Podkova":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Allerta Stencil":{"weight":["regular"],"fallback":"sans-serif"},"Charm":{"weight":["regular","700"],"fallback":"handwriting"},"Niramit":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Halant":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Graduate":{"weight":["regular"],"fallback":"display"},"Nanum Brush Script":{"weight":["regular"],"fallback":"handwriting"},"Amita":{"weight":["regular","700"],"fallback":"handwriting"},"Rozha One":{"weight":["regular"],"fallback":"serif"},"Kristi":{"weight":["regular"],"fallback":"handwriting"},"Biryani":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Lustria":{"weight":["regular"],"fallback":"serif"},"Delius":{"weight":["regular"],"fallback":"handwriting"},"Suranna":{"weight":["regular"],"fallback":"serif"},"Amethysta":{"weight":["regular"],"fallback":"serif"},"Contrail One":{"weight":["regular"],"fallback":"display"},"Averia Serif Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Do Hyeon":{"weight":["regular"],"fallback":"sans-serif"},"IBM Plex Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marvel":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Rye":{"weight":["regular"],"fallback":"display"},"Fauna One":{"weight":["regular"],"fallback":"serif"},"Corben":{"weight":["regular","700"],"fallback":"display"},"Cedarville Cursive":{"weight":["regular"],"fallback":"handwriting"},"Jockey One":{"weight":["regular"],"fallback":"sans-serif"},"Libre Caslon Text":{"weight":["regular","italic","700"],"fallback":"serif"},"Carrois Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Calligraffitti":{"weight":["regular"],"fallback":"handwriting"},"Trocchi":{"weight":["regular"],"fallback":"serif"},"Spectral SC":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Coustard":{"weight":["regular","900"],"fallback":"serif"},"Copse":{"weight":["regular"],"fallback":"serif"},"Athiti":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Carme":{"weight":["regular"],"fallback":"sans-serif"},"Rosario":{"weight":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Limelight":{"weight":["regular"],"fallback":"display"},"Jua":{"weight":["regular"],"fallback":"sans-serif"},"Petit Formal Script":{"weight":["regular"],"fallback":"handwriting"},"Love Ya Like A Sister":{"weight":["regular"],"fallback":"display"},"GFS Didot":{"weight":["regular"],"fallback":"serif"},"Aladin":{"weight":["regular"],"fallback":"handwriting"},"Palanquin Dark":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Amiko":{"weight":["regular","600","700"],"fallback":"sans-serif"},"Cormorant Infant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Wallpoet":{"weight":["regular"],"fallback":"display"},"Magra":{"weight":["regular","700"],"fallback":"sans-serif"},"Grand Hotel":{"weight":["regular"],"fallback":"handwriting"},"Sunflower":{"weight":["300","500","700"],"fallback":"sans-serif"},"Big Shoulders Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Slabo 13px":{"weight":["regular"],"fallback":"serif"},"Pangolin":{"weight":["regular"],"fallback":"handwriting"},"Mr De Haviland":{"weight":["regular"],"fallback":"handwriting"},"K2D":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Marmelad":{"weight":["regular"],"fallback":"sans-serif"},"Thasadith":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"La Belle Aurore":{"weight":["regular"],"fallback":"handwriting"},"Hanuman":{"weight":["regular","700"],"fallback":"serif"},"Metrophobic":{"weight":["regular"],"fallback":"sans-serif"},"Epilogue":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Radley":{"weight":["regular","italic"],"fallback":"serif"},"Poly":{"weight":["regular","italic"],"fallback":"serif"},"Commissioner":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Averia Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"IM Fell Double Pica":{"weight":["regular","italic"],"fallback":"serif"},"Comic Neue":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"handwriting"},"Baskervville":{"weight":["regular","italic"],"fallback":"serif"},"Kelly Slab":{"weight":["regular"],"fallback":"display"},"Oxygen Mono":{"weight":["regular"],"fallback":"monospace"},"Maitree":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Buenard":{"weight":["regular","700"],"fallback":"serif"},"Duru Sans":{"weight":["regular"],"fallback":"sans-serif"},"Baloo Da 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Grandstander":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Balthazar":{"weight":["regular"],"fallback":"serif"},"ZCOOL XiaoWei":{"weight":["regular"],"fallback":"serif"},"Cutive":{"weight":["regular"],"fallback":"serif"},"Antic Didone":{"weight":["regular"],"fallback":"serif"},"Waiting for the Sunrise":{"weight":["regular"],"fallback":"handwriting"},"B612 Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Chonburi":{"weight":["regular"],"fallback":"display"},"Montaga":{"weight":["regular"],"fallback":"serif"},"UnifrakturMaguntia":{"weight":["regular"],"fallback":"display"},"Kosugi":{"weight":["regular"],"fallback":"sans-serif"},"Gravitas One":{"weight":["regular"],"fallback":"display"},"Mirza":{"weight":["regular","500","600","700"],"fallback":"display"},"Manjari":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Alike":{"weight":["regular"],"fallback":"serif"},"Lekton":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Sora":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Gabriela":{"weight":["regular"],"fallback":"serif"},"Lemon":{"weight":["regular"],"fallback":"display"},"Esteban":{"weight":["regular"],"fallback":"serif"},"Alatsi":{"weight":["regular"],"fallback":"sans-serif"},"Turret Road":{"weight":["200","300","regular","500","700","800"],"fallback":"display"},"Monsieur La Doulaise":{"weight":["regular"],"fallback":"handwriting"},"Pompiere":{"weight":["regular"],"fallback":"display"},"Cormorant SC":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Kurale":{"weight":["regular"],"fallback":"serif"},"Frijole":{"weight":["regular"],"fallback":"display"},"Rammetto One":{"weight":["regular"],"fallback":"display"},"Chelsea Market":{"weight":["regular"],"fallback":"display"},"Megrim":{"weight":["regular"],"fallback":"display"},"IM Fell English":{"weight":["regular","italic"],"fallback":"serif"},"Oregano":{"weight":["regular","italic"],"fallback":"display"},"Andada":{"weight":["regular"],"fallback":"serif"},"Mate":{"weight":["regular","italic"],"fallback":"serif"},"Convergence":{"weight":["regular"],"fallback":"sans-serif"},"Rouge Script":{"weight":["regular"],"fallback":"handwriting"},"Bowlby One":{"weight":["regular"],"fallback":"display"},"Emilys Candy":{"weight":["regular"],"fallback":"display"},"Wendy One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Code":{"weight":["300","regular","500","600","700"],"fallback":"monospace"},"Dawning of a New Day":{"weight":["regular"],"fallback":"handwriting"},"Sue Ellen Francisco":{"weight":["regular"],"fallback":"handwriting"},"Gurajada":{"weight":["regular"],"fallback":"serif"},"David Libre":{"weight":["regular","500","700"],"fallback":"serif"},"Sofia":{"weight":["regular"],"fallback":"handwriting"},"Short Stack":{"weight":["regular"],"fallback":"handwriting"},"Chau Philomene One":{"weight":["regular","italic"],"fallback":"sans-serif"},"Bellefair":{"weight":["regular"],"fallback":"serif"},"Belgrano":{"weight":["regular"],"fallback":"serif"},"Expletus Sans":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"display"},"Original Surfer":{"weight":["regular"],"fallback":"display"},"Doppio One":{"weight":["regular"],"fallback":"sans-serif"},"Be Vietnam":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Sail":{"weight":["regular"],"fallback":"display"},"Inder":{"weight":["regular"],"fallback":"sans-serif"},"Give You Glory":{"weight":["regular"],"fallback":"handwriting"},"IM Fell DW Pica":{"weight":["regular","italic"],"fallback":"serif"},"McLaren":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Bungee Shade":{"weight":["regular"],"fallback":"display"},"Baumans":{"weight":["regular"],"fallback":"display"},"Brawler":{"weight":["regular"],"fallback":"serif"},"Tenali Ramakrishna":{"weight":["regular"],"fallback":"sans-serif"},"Ceviche One":{"weight":["regular"],"fallback":"display"},"B612":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Zeyada":{"weight":["regular"],"fallback":"handwriting"},"Mountains of Christmas":{"weight":["regular","700"],"fallback":"display"},"Sedgwick Ave":{"weight":["regular"],"fallback":"handwriting"},"Gugi":{"weight":["regular"],"fallback":"display"},"Oleo Script Swash Caps":{"weight":["regular","700"],"fallback":"display"},"Skranji":{"weight":["regular","700"],"fallback":"display"},"Meddon":{"weight":["regular"],"fallback":"handwriting"},"NTR":{"weight":["regular"],"fallback":"sans-serif"},"Finger Paint":{"weight":["regular"],"fallback":"display"},"Blinker":{"weight":["100","200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Fanwood Text":{"weight":["regular","italic"],"fallback":"serif"},"Grenze Gotisch":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Hepta Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Anaheim":{"weight":["regular"],"fallback":"sans-serif"},"Major Mono Display":{"weight":["regular"],"fallback":"monospace"},"Quando":{"weight":["regular"],"fallback":"serif"},"Andika":{"weight":["regular"],"fallback":"sans-serif"},"Qwigley":{"weight":["regular"],"fallback":"handwriting"},"Vast Shadow":{"weight":["regular"],"fallback":"display"},"Happy Monkey":{"weight":["regular"],"fallback":"display"},"Montez":{"weight":["regular"],"fallback":"handwriting"},"Proza Libre":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Homenaje":{"weight":["regular"],"fallback":"sans-serif"},"Ma Shan Zheng":{"weight":["regular"],"fallback":"handwriting"},"Loved by the King":{"weight":["regular"],"fallback":"handwriting"},"Trade Winds":{"weight":["regular"],"fallback":"display"},"Stardos Stencil":{"weight":["regular","700"],"fallback":"display"},"Raleway Dots":{"weight":["regular"],"fallback":"display"},"Libre Barcode 39":{"weight":["regular"],"fallback":"display"},"Recursive":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Numans":{"weight":["regular"],"fallback":"sans-serif"},"RocknRoll One":{"weight":["regular"],"fallback":"sans-serif"},"Rakkas":{"weight":["regular"],"fallback":"display"},"Mouse Memoirs":{"weight":["regular"],"fallback":"sans-serif"},"BioRhyme":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Ranchers":{"weight":["regular"],"fallback":"display"},"Patrick Hand SC":{"weight":["regular"],"fallback":"handwriting"},"Codystar":{"weight":["300","regular"],"fallback":"display"},"Rasa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Meera Inimai":{"weight":["regular"],"fallback":"sans-serif"},"Clicker Script":{"weight":["regular"],"fallback":"handwriting"},"DM Mono":{"weight":["300","300italic","regular","italic","500","500italic"],"fallback":"monospace"},"Gaegu":{"weight":["300","regular","700"],"fallback":"handwriting"},"Aguafina Script":{"weight":["regular"],"fallback":"handwriting"},"Unkempt":{"weight":["regular","700"],"fallback":"display"},"Over the Rainbow":{"weight":["regular"],"fallback":"handwriting"},"Fondamento":{"weight":["regular","italic"],"fallback":"handwriting"},"Battambang":{"weight":["regular","700"],"fallback":"display"},"Cambo":{"weight":["regular"],"fallback":"serif"},"Crafty Girls":{"weight":["regular"],"fallback":"handwriting"},"Nova Mono":{"weight":["regular"],"fallback":"monospace"},"Tillana":{"weight":["regular","500","600","700","800"],"fallback":"handwriting"},"Alike Angular":{"weight":["regular"],"fallback":"serif"},"Kumbh Sans":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Katibeh":{"weight":["regular"],"fallback":"display"},"Sarpanch":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Antonio":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Mansalva":{"weight":["regular"],"fallback":"handwriting"},"Faster One":{"weight":["regular"],"fallback":"display"},"Federo":{"weight":["regular"],"fallback":"sans-serif"},"Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Hi Melody":{"weight":["regular"],"fallback":"handwriting"},"Euphoria Script":{"weight":["regular"],"fallback":"handwriting"},"Orienta":{"weight":["regular"],"fallback":"sans-serif"},"Space Grotesk":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Galada":{"weight":["regular"],"fallback":"display"},"Timmana":{"weight":["regular"],"fallback":"sans-serif"},"JetBrains Mono":{"weight":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"monospace"},"Baloo Thambi 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Averia Sans Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"UnifrakturCook":{"weight":["700"],"fallback":"display"},"Tauri":{"weight":["regular"],"fallback":"sans-serif"},"Share Tech":{"weight":["regular"],"fallback":"sans-serif"},"Walter Turncoat":{"weight":["regular"],"fallback":"handwriting"},"Geo":{"weight":["regular","italic"],"fallback":"sans-serif"},"Atma":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Almendra":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jomhuria":{"weight":["regular"],"fallback":"display"},"Strait":{"weight":["regular"],"fallback":"sans-serif"},"Encode Sans Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Metamorphous":{"weight":["regular"],"fallback":"display"},"Iceland":{"weight":["regular"],"fallback":"display"},"Ledger":{"weight":["regular"],"fallback":"serif"},"Poller One":{"weight":["regular"],"fallback":"display"},"Vollkorn SC":{"weight":["regular","600","700","900"],"fallback":"serif"},"Vesper Libre":{"weight":["regular","500","700","900"],"fallback":"serif"},"Aref Ruqaa":{"weight":["regular","700"],"fallback":"serif"},"Livvic":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Caladea":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Montserrat Subrayada":{"weight":["regular","700"],"fallback":"sans-serif"},"Vampiro One":{"weight":["regular"],"fallback":"display"},"Farro":{"weight":["300","regular","500","700"],"fallback":"sans-serif"},"New Rocker":{"weight":["regular"],"fallback":"display"},"Delius Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"Calistoga":{"weight":["regular"],"fallback":"display"},"Carrois Gothic SC":{"weight":["regular"],"fallback":"sans-serif"},"Italiana":{"weight":["regular"],"fallback":"serif"},"Inknut Antiqua":{"weight":["300","regular","500","600","700","800","900"],"fallback":"serif"},"Life Savers":{"weight":["regular","700","800"],"fallback":"display"},"Imprima":{"weight":["regular"],"fallback":"sans-serif"},"Mako":{"weight":["regular"],"fallback":"sans-serif"},"Lily Script One":{"weight":["regular"],"fallback":"display"},"Bilbo Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"IM Fell English SC":{"weight":["regular"],"fallback":"serif"},"Red Rose":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Shojumaru":{"weight":["regular"],"fallback":"display"},"Prosto One":{"weight":["regular"],"fallback":"display"},"Bodoni Moda":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mukta Mahee":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bubbler One":{"weight":["regular"],"fallback":"sans-serif"},"The Girl Next Door":{"weight":["regular"],"fallback":"handwriting"},"Artifika":{"weight":["regular"],"fallback":"serif"},"Cantora One":{"weight":["regular"],"fallback":"sans-serif"},"Scope One":{"weight":["regular"],"fallback":"serif"},"Yusei Magic":{"weight":["regular"],"fallback":"sans-serif"},"Oxanium":{"weight":["200","300","regular","500","600","700","800"],"fallback":"display"},"Tienne":{"weight":["regular","700","900"],"fallback":"serif"},"Salsa":{"weight":["regular"],"fallback":"display"},"Flamenco":{"weight":["300","regular"],"fallback":"display"},"Port Lligat Sans":{"weight":["regular"],"fallback":"sans-serif"},"Denk One":{"weight":["regular"],"fallback":"sans-serif"},"Fontdiner Swanky":{"weight":["regular"],"fallback":"display"},"Nova Round":{"weight":["regular"],"fallback":"display"},"Gafata":{"weight":["regular"],"fallback":"sans-serif"},"Cormorant Upright":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cherry Cream Soda":{"weight":["regular"],"fallback":"display"},"Asul":{"weight":["regular","700"],"fallback":"sans-serif"},"Big Shoulders Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Voces":{"weight":["regular"],"fallback":"display"},"Dynalight":{"weight":["regular"],"fallback":"display"},"Peralta":{"weight":["regular"],"fallback":"display"},"Mina":{"weight":["regular","700"],"fallback":"sans-serif"},"Headland One":{"weight":["regular"],"fallback":"serif"},"Medula One":{"weight":["regular"],"fallback":"display"},"Englebert":{"weight":["regular"],"fallback":"sans-serif"},"Nova Square":{"weight":["regular"],"fallback":"display"},"Delius Unicase":{"weight":["regular","700"],"fallback":"handwriting"},"Sumana":{"weight":["regular","700"],"fallback":"serif"},"Bilbo":{"weight":["regular"],"fallback":"handwriting"},"Engagement":{"weight":["regular"],"fallback":"handwriting"},"ZCOOL QingKe HuangYou":{"weight":["regular"],"fallback":"display"},"Fresca":{"weight":["regular"],"fallback":"sans-serif"},"Ranga":{"weight":["regular","700"],"fallback":"display"},"Orelega One":{"weight":["regular"],"fallback":"display"},"Zen Dots":{"weight":["regular"],"fallback":"display"},"Shippori Mincho":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Henny Penny":{"weight":["regular"],"fallback":"display"},"Della Respira":{"weight":["regular"],"fallback":"serif"},"Cherry Swash":{"weight":["regular","700"],"fallback":"display"},"Notable":{"weight":["regular"],"fallback":"sans-serif"},"Arya":{"weight":["regular","700"],"fallback":"sans-serif"},"Slackey":{"weight":["regular"],"fallback":"display"},"Vibur":{"weight":["regular"],"fallback":"handwriting"},"Coiny":{"weight":["regular"],"fallback":"display"},"Lexend Zetta":{"weight":["regular"],"fallback":"sans-serif"},"Elsie":{"weight":["regular","900"],"fallback":"display"},"Fjord One":{"weight":["regular"],"fallback":"serif"},"Puritan":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Just Me Again Down Here":{"weight":["regular"],"fallback":"handwriting"},"Khmer":{"weight":["regular"],"fallback":"display"},"Girassol":{"weight":["regular"],"fallback":"display"},"Bellota Text":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Yatra One":{"weight":["regular"],"fallback":"display"},"Stalemate":{"weight":["regular"],"fallback":"handwriting"},"Wire One":{"weight":["regular"],"fallback":"sans-serif"},"Spicy Rice":{"weight":["regular"],"fallback":"display"},"Saira Stencil One":{"weight":["regular"],"fallback":"display"},"Kite One":{"weight":["regular"],"fallback":"sans-serif"},"Port Lligat Slab":{"weight":["regular"],"fallback":"serif"},"Baloo Bhaina 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Pavanam":{"weight":["regular"],"fallback":"sans-serif"},"Eater":{"weight":["regular"],"fallback":"display"},"Text Me One":{"weight":["regular"],"fallback":"sans-serif"},"Ribeye":{"weight":["regular"],"fallback":"display"},"Pirata One":{"weight":["regular"],"fallback":"display"},"Amarante":{"weight":["regular"],"fallback":"display"},"Milonga":{"weight":["regular"],"fallback":"display"},"Habibi":{"weight":["regular"],"fallback":"serif"},"Ruslan Display":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Nokora":{"weight":["regular","700"],"fallback":"serif"},"Rowdies":{"weight":["300","regular","700"],"fallback":"display"},"Kranky":{"weight":["regular"],"fallback":"display"},"Bigelow Rules":{"weight":["regular"],"fallback":"display"},"League Script":{"weight":["regular"],"fallback":"handwriting"},"Swanky and Moo Moo":{"weight":["regular"],"fallback":"handwriting"},"Karantina":{"weight":["300","regular","700"],"fallback":"display"},"Lovers Quarrel":{"weight":["regular"],"fallback":"handwriting"},"Mate SC":{"weight":["regular"],"fallback":"serif"},"Manuale":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Germania One":{"weight":["regular"],"fallback":"display"},"Sura":{"weight":["regular","700"],"fallback":"serif"},"Sarina":{"weight":["regular"],"fallback":"display"},"Macondo Swash Caps":{"weight":["regular"],"fallback":"display"},"Kotta One":{"weight":["regular"],"fallback":"serif"},"IM Fell French Canon SC":{"weight":["regular"],"fallback":"serif"},"Julee":{"weight":["regular"],"fallback":"handwriting"},"Charmonman":{"weight":["regular","700"],"fallback":"handwriting"},"Shanti":{"weight":["regular"],"fallback":"sans-serif"},"Gamja Flower":{"weight":["regular"],"fallback":"handwriting"},"Averia Gruesa Libre":{"weight":["regular"],"fallback":"display"},"Stint Ultra Expanded":{"weight":["regular"],"fallback":"display"},"Uncial Antiqua":{"weight":["regular"],"fallback":"display"},"Mystery Quest":{"weight":["regular"],"fallback":"display"},"Goldman":{"weight":["regular","700"],"fallback":"display"},"Paprika":{"weight":["regular"],"fallback":"display"},"IM Fell French Canon":{"weight":["regular","italic"],"fallback":"serif"},"Prociono":{"weight":["regular"],"fallback":"serif"},"Kodchasan":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Text":{"weight":["regular"],"fallback":"display"},"Quintessential":{"weight":["regular"],"fallback":"handwriting"},"Moul":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128":{"weight":["regular"],"fallback":"display"},"Ramaraja":{"weight":["regular"],"fallback":"serif"},"Modak":{"weight":["regular"],"fallback":"display"},"Song Myung":{"weight":["regular"],"fallback":"serif"},"East Sea Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Crushed":{"weight":["regular"],"fallback":"display"},"Dekko":{"weight":["regular"],"fallback":"handwriting"},"Chilanka":{"weight":["regular"],"fallback":"handwriting"},"Hanalei Fill":{"weight":["regular"],"fallback":"display"},"Mogra":{"weight":["regular"],"fallback":"display"},"Baloo Tammudu 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Baloo Bhai 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Libre Barcode 39 Extended Text":{"weight":["regular"],"fallback":"display"},"Rosarivo":{"weight":["regular","italic"],"fallback":"serif"},"KoHo":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Offside":{"weight":["regular"],"fallback":"display"},"Reggae One":{"weight":["regular"],"fallback":"display"},"Syne":{"weight":["regular","500","600","700","800"],"fallback":"sans-serif"},"Zilla Slab Highlight":{"weight":["regular","700"],"fallback":"display"},"Donegal One":{"weight":["regular"],"fallback":"serif"},"Bellota":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Stoke":{"weight":["300","regular"],"fallback":"serif"},"Cormorant Unicase":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cagliostro":{"weight":["regular"],"fallback":"sans-serif"},"Rationale":{"weight":["regular"],"fallback":"sans-serif"},"Margarine":{"weight":["regular"],"fallback":"display"},"Sancreek":{"weight":["regular"],"fallback":"display"},"Inria Serif":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Overlock SC":{"weight":["regular"],"fallback":"display"},"Nosifer":{"weight":["regular"],"fallback":"display"},"Libre Barcode EAN13 Text":{"weight":["regular"],"fallback":"display"},"Yeon Sung":{"weight":["regular"],"fallback":"display"},"Ruluko":{"weight":["regular"],"fallback":"sans-serif"},"Simonetta":{"weight":["regular","italic","900","900italic"],"fallback":"display"},"Lakki Reddy":{"weight":["regular"],"fallback":"handwriting"},"Baloo Paaji 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Chango":{"weight":["regular"],"fallback":"display"},"Galdeano":{"weight":["regular"],"fallback":"sans-serif"},"Fahkwang":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Elsie Swash Caps":{"weight":["regular","900"],"fallback":"display"},"Buda":{"weight":["300"],"fallback":"display"},"Condiment":{"weight":["regular"],"fallback":"handwriting"},"Barrio":{"weight":["regular"],"fallback":"display"},"Chicle":{"weight":["regular"],"fallback":"display"},"Angkor":{"weight":["regular"],"fallback":"display"},"Akronim":{"weight":["regular"],"fallback":"display"},"Tomorrow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Sonsie One":{"weight":["regular"],"fallback":"display"},"Kumar One":{"weight":["regular"],"fallback":"display"},"Autour One":{"weight":["regular"],"fallback":"display"},"Libre Caslon Display":{"weight":["regular"],"fallback":"serif"},"Farsan":{"weight":["regular"],"fallback":"display"},"Fenix":{"weight":["regular"],"fallback":"serif"},"Solway":{"weight":["300","regular","500","700","800"],"fallback":"serif"},"Kulim Park":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Stint Ultra Condensed":{"weight":["regular"],"fallback":"display"},"Metal":{"weight":["regular"],"fallback":"display"},"Rum Raisin":{"weight":["regular"],"fallback":"sans-serif"},"Redressed":{"weight":["regular"],"fallback":"handwriting"},"Tulpen One":{"weight":["regular"],"fallback":"display"},"Petrona":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Marko One":{"weight":["regular"],"fallback":"serif"},"Asar":{"weight":["regular"],"fallback":"serif"},"Nova Flat":{"weight":["regular"],"fallback":"display"},"Koulen":{"weight":["regular"],"fallback":"display"},"Lexend Exa":{"weight":["regular"],"fallback":"sans-serif"},"Londrina Outline":{"weight":["regular"],"fallback":"display"},"Cute Font":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer":{"weight":["regular","italic"],"fallback":"serif"},"Junge":{"weight":["regular"],"fallback":"serif"},"Stylish":{"weight":["regular"],"fallback":"sans-serif"},"Lexend":{"weight":["100","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Spirax":{"weight":["regular"],"fallback":"display"},"Piazzolla":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Piedra":{"weight":["regular"],"fallback":"display"},"Ribeye Marrow":{"weight":["regular"],"fallback":"display"},"Dorsa":{"weight":["regular"],"fallback":"sans-serif"},"Ibarra Real Nova":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"IM Fell DW Pica SC":{"weight":["regular"],"fallback":"serif"},"Wellfleet":{"weight":["regular"],"fallback":"display"},"Eagle Lake":{"weight":["regular"],"fallback":"handwriting"},"Meie Script":{"weight":["regular"],"fallback":"handwriting"},"Goblin One":{"weight":["regular"],"fallback":"display"},"Flavors":{"weight":["regular"],"fallback":"display"},"Gotu":{"weight":["regular"],"fallback":"sans-serif"},"Linden Hill":{"weight":["regular","italic"],"fallback":"serif"},"Chathura":{"weight":["100","300","regular","700","800"],"fallback":"sans-serif"},"Croissant One":{"weight":["regular"],"fallback":"display"},"Jomolhari":{"weight":["regular"],"fallback":"serif"},"Srisakdi":{"weight":["regular","700"],"fallback":"display"},"Modern Antiqua":{"weight":["regular"],"fallback":"display"},"Joti One":{"weight":["regular"],"fallback":"display"},"Kavoon":{"weight":["regular"],"fallback":"display"},"Sulphur Point":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Castoro":{"weight":["regular","italic"],"fallback":"serif"},"Chela One":{"weight":["regular"],"fallback":"display"},"Atomic Age":{"weight":["regular"],"fallback":"display"},"Maiden Orange":{"weight":["regular"],"fallback":"display"},"Ruthie":{"weight":["regular"],"fallback":"handwriting"},"Bayon":{"weight":["regular"],"fallback":"display"},"Potta One":{"weight":["regular"],"fallback":"display"},"Iceberg":{"weight":["regular"],"fallback":"display"},"Bigshot One":{"weight":["regular"],"fallback":"display"},"Gorditas":{"weight":["regular","700"],"fallback":"display"},"Sree Krushnadevaraya":{"weight":["regular"],"fallback":"serif"},"Trykker":{"weight":["regular"],"fallback":"serif"},"Kufam":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Diplomata SC":{"weight":["regular"],"fallback":"display"},"Poor Story":{"weight":["regular"],"fallback":"display"},"Sirin Stencil":{"weight":["regular"],"fallback":"display"},"Kavivanar":{"weight":["regular"],"fallback":"handwriting"},"Syne Mono":{"weight":["regular"],"fallback":"monospace"},"Metal Mania":{"weight":["regular"],"fallback":"display"},"Arbutus":{"weight":["regular"],"fallback":"display"},"Unlock":{"weight":["regular"],"fallback":"display"},"MuseoModerno":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Glass Antiqua":{"weight":["regular"],"fallback":"display"},"Miniver":{"weight":["regular"],"fallback":"display"},"Griffy":{"weight":["regular"],"fallback":"display"},"Bokor":{"weight":["regular"],"fallback":"display"},"Felipa":{"weight":["regular"],"fallback":"handwriting"},"Inika":{"weight":["regular","700"],"fallback":"serif"},"Princess Sofia":{"weight":["regular"],"fallback":"handwriting"},"Mrs Sheppards":{"weight":["regular"],"fallback":"handwriting"},"Monofett":{"weight":["regular"],"fallback":"display"},"Sahitya":{"weight":["regular","700"],"fallback":"serif"},"Dela Gothic One":{"weight":["regular"],"fallback":"display"},"Shippori Mincho B1":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Beth Ellen":{"weight":["regular"],"fallback":"handwriting"},"Lancelot":{"weight":["regular"],"fallback":"display"},"Rhodium Libre":{"weight":["regular"],"fallback":"serif"},"Fraunces":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Hachi Maru Pop":{"weight":["regular"],"fallback":"handwriting"},"Snippet":{"weight":["regular"],"fallback":"sans-serif"},"Content":{"weight":["regular","700"],"fallback":"display"},"Revalia":{"weight":["regular"],"fallback":"display"},"Diplomata":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128 Text":{"weight":["regular"],"fallback":"display"},"Jacques Francois Shadow":{"weight":["regular"],"fallback":"display"},"Long Cang":{"weight":["regular"],"fallback":"handwriting"},"Caesar Dressing":{"weight":["regular"],"fallback":"display"},"Odor Mean Chey":{"weight":["regular"],"fallback":"display"},"Jolly Lodger":{"weight":["regular"],"fallback":"display"},"Texturina":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"DotGothic16":{"weight":["regular"],"fallback":"sans-serif"},"Ewert":{"weight":["regular"],"fallback":"display"},"Romanesco":{"weight":["regular"],"fallback":"handwriting"},"Kantumruy":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Asset":{"weight":["regular"],"fallback":"display"},"Odibee Sans":{"weight":["regular"],"fallback":"display"},"Emblema One":{"weight":["regular"],"fallback":"display"},"Kdam Thmor":{"weight":["regular"],"fallback":"display"},"Dr Sugiyama":{"weight":["regular"],"fallback":"handwriting"},"Bahiana":{"weight":["regular"],"fallback":"display"},"GFS Neohellenic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Oldenburg":{"weight":["regular"],"fallback":"display"},"Molle":{"weight":["italic"],"fallback":"handwriting"},"Ravi Prakash":{"weight":["regular"],"fallback":"display"},"Gayathri":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Almendra SC":{"weight":["regular"],"fallback":"serif"},"Varta":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Risque":{"weight":["regular"],"fallback":"display"},"Sansita Swashed":{"weight":["300","regular","500","600","700","800","900"],"fallback":"display"},"Kiwi Maru":{"weight":["300","regular","500"],"fallback":"serif"},"Dangrek":{"weight":["regular"],"fallback":"display"},"Devonshire":{"weight":["regular"],"fallback":"handwriting"},"Big Shoulders Stencil Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Jim Nightshade":{"weight":["regular"],"fallback":"handwriting"},"Smythe":{"weight":["regular"],"fallback":"display"},"Stick":{"weight":["regular"],"fallback":"sans-serif"},"Lexend Mega":{"weight":["regular"],"fallback":"sans-serif"},"Siemreap":{"weight":["regular"],"fallback":"display"},"Londrina Shadow":{"weight":["regular"],"fallback":"display"},"Train One":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer SC":{"weight":["regular"],"fallback":"serif"},"Barriecito":{"weight":["regular"],"fallback":"display"},"Underdog":{"weight":["regular"],"fallback":"display"},"Stalinist One":{"weight":["regular"],"fallback":"display"},"Mr Bedfort":{"weight":["regular"],"fallback":"handwriting"},"Freehand":{"weight":["regular"],"fallback":"display"},"MedievalSharp":{"weight":["regular"],"fallback":"display"},"Lexend Giga":{"weight":["regular"],"fallback":"sans-serif"},"Keania One":{"weight":["regular"],"fallback":"display"},"Peddana":{"weight":["regular"],"fallback":"serif"},"Galindo":{"weight":["regular"],"fallback":"display"},"Fascinate":{"weight":["regular"],"fallback":"display"},"Londrina Sketch":{"weight":["regular"],"fallback":"display"},"Gupter":{"weight":["regular","500","700"],"fallback":"serif"},"Nova Slim":{"weight":["regular"],"fallback":"display"},"Snowburst One":{"weight":["regular"],"fallback":"display"},"ZCOOL KuaiLe":{"weight":["regular"],"fallback":"display"},"Plaster":{"weight":["regular"],"fallback":"display"},"Fascinate Inline":{"weight":["regular"],"fallback":"display"},"Newsreader":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Purple Purse":{"weight":["regular"],"fallback":"display"},"Sedgwick Ave Display":{"weight":["regular"],"fallback":"handwriting"},"Jacques Francois":{"weight":["regular"],"fallback":"serif"},"Almendra Display":{"weight":["regular"],"fallback":"display"},"Irish Grover":{"weight":["regular"],"fallback":"display"},"Kumar One Outline":{"weight":["regular"],"fallback":"display"},"Andika New Basic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Extended":{"weight":["regular"],"fallback":"display"},"Taprom":{"weight":["regular"],"fallback":"display"},"Miss Fajardose":{"weight":["regular"],"fallback":"handwriting"},"IM Fell Double Pica SC":{"weight":["regular"],"fallback":"serif"},"Macondo":{"weight":["regular"],"fallback":"display"},"Ruge Boogie":{"weight":["regular"],"fallback":"handwriting"},"Sunshiney":{"weight":["regular"],"fallback":"handwriting"},"Brygada 1918":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Grenze":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Erica One":{"weight":["regular"],"fallback":"display"},"Seymour One":{"weight":["regular"],"fallback":"sans-serif"},"Supermercado One":{"weight":["regular"],"fallback":"display"},"Zhi Mang Xing":{"weight":["regular"],"fallback":"handwriting"},"Butterfly Kids":{"weight":["regular"],"fallback":"handwriting"},"Kirang Haerang":{"weight":["regular"],"fallback":"display"},"Federant":{"weight":["regular"],"fallback":"display"},"Liu Jian Mao Cao":{"weight":["regular"],"fallback":"handwriting"},"Chenla":{"weight":["regular"],"fallback":"display"},"Hanalei":{"weight":["regular"],"fallback":"display"},"Langar":{"weight":["regular"],"fallback":"display"},"Trochut":{"weight":["regular","italic","700"],"fallback":"display"},"Smokum":{"weight":["regular"],"fallback":"display"},"Black And White Picture":{"weight":["regular"],"fallback":"sans-serif"},"Preahvihear":{"weight":["regular"],"fallback":"display"},"Bungee Outline":{"weight":["regular"],"fallback":"display"},"Astloch":{"weight":["regular","700"],"fallback":"display"},"Fasthand":{"weight":["regular"],"fallback":"serif"},"Akaya Telivigala":{"weight":["regular"],"fallback":"display"},"Inria Sans":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Bonbon":{"weight":["regular"],"fallback":"handwriting"},"Combo":{"weight":["regular"],"fallback":"display"},"Nova Script":{"weight":["regular"],"fallback":"display"},"Sofadi One":{"weight":["regular"],"fallback":"display"},"Passero One":{"weight":["regular"],"fallback":"display"},"Suwannaphum":{"weight":["regular"],"fallback":"display"},"Miltonian Tattoo":{"weight":["regular"],"fallback":"display"},"Bungee Hairline":{"weight":["regular"],"fallback":"display"},"Gidugu":{"weight":["regular"],"fallback":"sans-serif"},"Geostar Fill":{"weight":["regular"],"fallback":"display"},"Nerko One":{"weight":["regular"],"fallback":"handwriting"},"Lacquer":{"weight":["regular"],"fallback":"display"},"Butcherman":{"weight":["regular"],"fallback":"display"},"Sevillana":{"weight":["regular"],"fallback":"display"},"Nova Oval":{"weight":["regular"],"fallback":"display"},"Aubrey":{"weight":["regular"],"fallback":"display"},"Akaya Kanadaka":{"weight":["regular"],"fallback":"display"},"Nova Cut":{"weight":["regular"],"fallback":"display"},"Vibes":{"weight":["regular"],"fallback":"display"},"Miltonian":{"weight":["regular"],"fallback":"display"},"Moulpali":{"weight":["regular"],"fallback":"display"},"BioRhyme Expanded":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Bahianita":{"weight":["regular"],"fallback":"display"},"Suravaram":{"weight":["regular"],"fallback":"serif"},"Fruktur":{"weight":["regular"],"fallback":"display"},"Single Day":{"weight":["regular"],"fallback":"display"},"Imbue":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Lexend Tera":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Inline Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Dhurjati":{"weight":["regular"],"fallback":"sans-serif"},"Warnes":{"weight":["regular"],"fallback":"display"},"Kenia":{"weight":["regular"],"fallback":"display"},"Lexend Peta":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Stencil Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Geostar":{"weight":["regular"],"fallback":"display"},"Big Shoulders Inline Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Oi":{"weight":["regular"],"fallback":"display"},"Xanh Mono":{"weight":["regular","italic"],"fallback":"monospace"},"Viaoda Libre":{"weight":["regular"],"fallback":"display"},"Truculenta":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Syne Tactile":{"weight":["regular"],"fallback":"display"},"Trispace":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Ballet":{"weight":["regular"],"fallback":"handwriting"},"Benne":{"weight":["regular"],"fallback":"serif"}}');

/***/ }),

/***/ "./src/hooks/useGetDeviceType.ts":
/*!***************************************!*\
  !*** ./src/hooks/useGetDeviceType.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const useGetDeviceType = () => {
  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType: getPreviewDeviceType
    } = select("core/edit-post") || false;
    if (!getPreviewDeviceType) {
      return {
        deviceType: null
      };
    }
    return {
      // @ts-ignore
      deviceType: getPreviewDeviceType()
    };
  }, []);
  return deviceType;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetDeviceType);

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
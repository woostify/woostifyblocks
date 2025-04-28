"use strict";
(globalThis["webpackChunkwoostifyblocks"] = globalThis["webpackChunkwoostifyblocks"] || []).push([["src_block-products_GlobalCss_tsx"],{

/***/ "./src/block-container/getAdvanveStyles.ts":
/*!*************************************************!*\
  !*** ./src/block-container/getAdvanveStyles.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAdvanveDivWrapStyles": () => (/* binding */ getAdvanveDivWrapStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getAdvanveDivWrapStyles = _ref => {
  let {
    advance_motionEffect,
    advance_zIndex,
    advance_responsiveCondition,
    className,
    defaultDisplay
  } = _ref;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  //
  //
  try {
    const thisELs = document.querySelectorAll(className);
    if (advance_motionEffect && advance_motionEffect.entranceAnimation && thisELs && thisELs.length) {
      console.log(222, {
        thisELs
      });
      thisELs.forEach(element => {
        // remove old class
        const regex = /\banimate__\S+/g;
        const classRemoved = element?.className.replace(regex, "");
        element.setAttribute("class", classRemoved);

        // add new class
        setTimeout(() => {
          element?.classList.add("animate__animated", `animate__${advance_motionEffect?.entranceAnimation}`, `animate__${advance_motionEffect?.animationDuration}`, `animate__delay-${advance_motionEffect?.animationDelay}ms`, `animate__repeat-${advance_motionEffect?.repeat}`);
        }, 50);
      });
    }
  } catch (error) {
    console.log(123, "error, advance_motionEffect", error);
  }
  const {
    mobile_v: zIndexMobile,
    tablet_v: zIndexTablet,
    desktop_v: zIndexDesktop
  } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__["default"])({
    mobile_v: advance_zIndex.Mobile || advance_zIndex.Tablet || advance_zIndex.Desktop,
    tablet_v: advance_zIndex.Tablet || advance_zIndex.Desktop,
    desktop_v: advance_zIndex.Desktop
  });
  //

  const {
    mobile_v: isHiddenOnMobile,
    tablet_v: isHiddenOnTablet,
    desktop_v: isHiddenOnDesktop
  } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__["default"])({
    mobile_v: advance_responsiveCondition.isHiddenOnMobile,
    tablet_v: advance_responsiveCondition.isHiddenOnTablet,
    desktop_v: advance_responsiveCondition.isHiddenOnDesktop
  });
  return _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
		${className} {
			display: ${isHiddenOnMobile ? "none" : defaultDisplay};
			visibility: visible;
			z-index: ${zIndexMobile};
			@media (min-width: ${media_tablet}) {
				z-index: ${zIndexTablet};
				display: ${isHiddenOnTablet !== "" ? isHiddenOnTablet ? "none" : defaultDisplay : ""};
			}
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				display: ${isHiddenOnDesktop !== "" ? isHiddenOnDesktop ? "none" : defaultDisplay : ""};
			}
		}
	`;
};

/***/ }),

/***/ "./src/block-products/GlobalCss.tsx":
/*!******************************************!*\
  !*** ./src/block-products/GlobalCss.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getCssProperyHasResponsive */ "./src/utils/getCssProperyHasResponsive.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");











const GlobalCss = attrs => {
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
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_7__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const LIST_CLASS = `${WRAP_CLASSNAME} .wcb-products__list`;
  const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcb-products__product`;
  const ADD_TO_CART_BTN = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart a`;
  console.log(23232, {
    WRAP_CLASSNAME
  });

  // ------------------- WRAP DIV

  const renderDivListWrapStyle = () => {
    const {
      value_Desktop: rowGap_desktop,
      value_Mobile: rowGap_mobile,
      value_Tablet: rowGap_tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(style_layout.rowGap);
    const {
      value_Desktop: colunmGap_desktop,
      value_Mobile: colunmGap_mobile,
      value_Tablet: colunmGap_tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(style_layout.colunmGap);
    const {
      numberOfColumn,
      swithToScrollSnapX,
      peekAfter
    } = style_layout;
    const {
      value_Desktop: numberOfColumn_desktop,
      value_Tablet: numberOfColumn_tablet,
      value_Mobile: numberOfColumn_mobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(numberOfColumn);
    const {
      value_Desktop: peekAfter_desktop,
      value_Tablet: peekAfter_tablet,
      value_Mobile: peekAfter_mobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(peekAfter);
    const isSnapScrollDesktop = swithToScrollSnapX === "Desktop";
    const isSnapScrollTablet = isSnapScrollDesktop || swithToScrollSnapX === "Tablet";
    const isSnapScrollMobile = isSnapScrollTablet || swithToScrollSnapX === "Mobile";
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
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
          }
        }
      }
    });
  };

  const getDivWrapStyles_Pagination = () => {
    const {
      value_mobile: marginTop_mobile,
      value_tablet: marginTop_tablet,
      value_desktop: marginTop_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_pagination.marginTop
    });
    const {
      mobile_v: marginTop_mobile_new,
      tablet_v: marginTop_tablet_new,
      desktop_v: marginTop_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
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
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_pagination.marginTop
    });
    const {
      mobile_v: marginTop_mobile_new,
      tablet_v: marginTop_tablet_new,
      desktop_v: marginTop_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
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
    const {
      value_mobile: titleMarginBottom_mobile,
      value_tablet: titleMarginBottom_tablet,
      value_desktop: titleMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_title.marginBottom
    });
    const {
      value_mobile: saleBadgeMarginBottom_mobile,
      value_tablet: saleBadgeMarginBottom_tablet,
      value_desktop: saleBadgeMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_saleBadge.marginBottom
    });
    const {
      value_mobile: featuredImageMarginBottom_mobile,
      value_tablet: featuredImageMarginBottom_tablet,
      value_desktop: featuredImageMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_featuredImage.marginBottom
    });
    const {
      value_mobile: priceMarginBottom_mobile,
      value_tablet: priceMarginBottom_tablet,
      value_desktop: priceMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_price.marginBottom
    });
    const {
      value_mobile: ratingMarginBottom_mobile,
      value_tablet: ratingMarginBottom_tablet,
      value_desktop: ratingMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_rating.marginBottom
    });
    const {
      value_mobile: categoryMarginBottom_mobile,
      value_tablet: categoryMarginBottom_tablet,
      value_desktop: categoryMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_category.marginBottom
    });

    //
    const {
      mobile_v: titleMarginBottom_mobile_new,
      tablet_v: titleMarginBottom_tablet_new,
      desktop_v: titleMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: titleMarginBottom_mobile,
      tablet_v: titleMarginBottom_tablet,
      desktop_v: titleMarginBottom_desktop
    });
    const {
      mobile_v: saleBadgeMarginBottom_mobile_new,
      tablet_v: saleBadgeMarginBottom_tablet_new,
      desktop_v: saleBadgeMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: saleBadgeMarginBottom_mobile,
      tablet_v: saleBadgeMarginBottom_tablet,
      desktop_v: saleBadgeMarginBottom_desktop
    });
    const {
      mobile_v: featuredImageMarginBottom_mobile_new,
      tablet_v: featuredImageMarginBottom_tablet_new,
      desktop_v: featuredImageMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: featuredImageMarginBottom_mobile,
      tablet_v: featuredImageMarginBottom_tablet,
      desktop_v: featuredImageMarginBottom_desktop
    });
    const {
      mobile_v: priceMarginBottom_mobile_new,
      tablet_v: priceMarginBottom_tablet_new,
      desktop_v: priceMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: priceMarginBottom_mobile,
      tablet_v: priceMarginBottom_tablet,
      desktop_v: priceMarginBottom_desktop
    });
    const {
      mobile_v: ratingMarginBottom_mobile_new,
      tablet_v: ratingMarginBottom_tablet_new,
      desktop_v: ratingMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: ratingMarginBottom_mobile,
      tablet_v: ratingMarginBottom_tablet,
      desktop_v: ratingMarginBottom_desktop
    });
    const {
      mobile_v: categoryMarginBottom_mobile_new,
      tablet_v: categoryMarginBottom_tablet_new,
      desktop_v: categoryMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: categoryMarginBottom_mobile,
      tablet_v: categoryMarginBottom_tablet,
      desktop_v: categoryMarginBottom_desktop
    });
    //
    return [{
      [POST_CARD_CLASS]: {
        position: "relative",
        height: !style_layout.isEqualHeight ? "max-content" : undefined,
        textAlign: style_layout.textAlignment,
        backgroundColor: style_layout.backgroundColor,
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
        ".wcb-products__product-price": {
          marginBottom: priceMarginBottom_mobile_new,
          color: style_price.textColor
        },
        ".wcb-products__product-rating": {
          marginBottom: ratingMarginBottom_mobile_new,
          color: style_rating.color
        },
        [`@media (min-width: ${media_tablet})`]: titleMarginBottom_tablet_new || saleBadgeMarginBottom_tablet_new || priceMarginBottom_tablet_new || ratingMarginBottom_tablet_new ? {
          ".wcb-products__product-title": titleMarginBottom_tablet_new ? {
            marginBottom: titleMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-categories": categoryMarginBottom_tablet_new ? {
            marginBottom: categoryMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-salebadge": saleBadgeMarginBottom_tablet_new ? {
            marginBottom: saleBadgeMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-price": priceMarginBottom_tablet_new ? {
            marginBottom: priceMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-rating": ratingMarginBottom_tablet_new ? {
            marginBottom: ratingMarginBottom_tablet_new
          } : undefined
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: titleMarginBottom_desktop_new || saleBadgeMarginBottom_desktop_new || priceMarginBottom_desktop_new || ratingMarginBottom_desktop_new ? {
          ".wcb-products__product-title": titleMarginBottom_desktop_new ? {
            marginBottom: titleMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-categories": categoryMarginBottom_desktop_new ? {
            marginBottom: categoryMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-salebadge": saleBadgeMarginBottom_desktop_new ? {
            marginBottom: saleBadgeMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-price": priceMarginBottom_desktop_new ? {
            marginBottom: priceMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-rating": ratingMarginBottom_desktop_new ? {
            marginBottom: ratingMarginBottom_desktop_new
          } : undefined
        } : undefined
      }
    }, (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      // className: `${POST_CARD_CLASS} .wcb-products__product-image`,
      className: `${WRAP_CLASSNAME} .wcb-products__product-image-link`,
      border: style_featuredImage.border,
      isWithRadius: true
    })];
  };
  const getPostCardStyles_AddToCart = () => {
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
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_addToCardBtn.marginBottom || {
        Desktop: "1rem"
      }
    });

    //
    const {
      mobile_v: marginBottom_mobile_new,
      tablet_v: marginBottom_tablet_new,
      desktop_v: marginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: marginBottom_mobile,
      tablet_v: marginBottom_tablet,
      desktop_v: marginBottom_desktop
    });
    //
    return {
      [ADD_TO_CART_BTN]: {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderDivListWrapStyle(), general_content.isShowTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-title",
      typography: style_title.typography
    })
  }), general_content.isShowCategory && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-categories",
      typography: style_category.typography
    })
  }), general_content.isShowRating && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles_Rating()
  }), general_content.isShowPrice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-price",
      typography: style_price.typography
    })
  }), general_content.isShowSaleBadge && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-onsale",
      typography: style_saleBadge.typography
    })
  }), general_pagination.isShowPagination ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles_Pagination()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers`,
      border: style_pagination.mainStyle.Normal.border,
      isWithRadius: true
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers.current`,
      border: style_pagination.mainStyle.Active.border,
      isWithRadius: true
    })
  })) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getPostCardWrapStyles()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: POST_CARD_CLASS,
      padding: style_layout.padding
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${POST_CARD_CLASS}`,
      border: style_border,
      isWithRadius: true
    })
  }), general_addToCartBtn.isShowButton ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getPostCardStyles_AddToCart()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: ADD_TO_CART_BTN,
      typography: style_addToCardBtn.typography
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: ADD_TO_CART_BTN,
      border: style_addToCardBtn.border,
      isWithRadius: true
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: ADD_TO_CART_BTN,
      padding: style_addToCardBtn.padding
    })
  })) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_2__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "block"
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-block-products-uniqueId": uniqueId
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_1___default().memo(GlobalCss));

/***/ }),

/***/ "./src/utils/checkResponsiveValueForOptimizeCSS.ts":
/*!*********************************************************!*\
  !*** ./src/utils/checkResponsiveValueForOptimizeCSS.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkResponsiveValueForOptimizeCSS = _ref => {
  var _new_tablet_v, _new_desktop_v;
  let {
    mobile_v = null,
    tablet_v = null,
    desktop_v = null
  } = _ref;
  let new_tablet_v = tablet_v;
  let new_desktop_v = desktop_v;
  if (mobile_v === tablet_v && tablet_v === desktop_v) {
    return {
      mobile_v,
      tablet_v: null,
      desktop_v: null
    };
  }
  if (desktop_v === tablet_v || desktop_v === mobile_v) {
    new_desktop_v = null;
  }
  if (tablet_v === mobile_v) {
    new_tablet_v = null;
  }
  return {
    mobile_v: mobile_v !== null && mobile_v !== void 0 ? mobile_v : null,
    tablet_v: (_new_tablet_v = new_tablet_v) !== null && _new_tablet_v !== void 0 ? _new_tablet_v : null,
    desktop_v: (_new_desktop_v = new_desktop_v) !== null && _new_desktop_v !== void 0 ? _new_desktop_v : null
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkResponsiveValueForOptimizeCSS);

/***/ }),

/***/ "./src/utils/color.js":
/*!****************************!*\
  !*** ./src/utils/color.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wcbCreateColor": () => (/* binding */ wcbCreateColor),
/* harmony export */   "wcbGetRgb": () => (/* binding */ wcbGetRgb)
/* harmony export */ });
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-rgba */ "./node_modules/color-rgba/index.mjs");


/**
 * Creates a new random color.
 */
const wcbCreateColor = () => {
  return `#${((1 << 24) * Math.random() | 0).toString(16)}`;
};
/**
 * Returns an rgb string of the hex color.
 *
 * @param {string} hex Color
 */
const wcbGetRgb = hex => {
  const rgbColor = (0,color_rgba__WEBPACK_IMPORTED_MODULE_0__["default"])(hex.match(/^#/) ? hex : `#${hex}`);
  rgbColor.splice(3, 1);
  return rgbColor.join(', ');
};

/***/ }),

/***/ "./src/utils/font.ts":
/*!***************************!*\
  !*** ./src/utils/font.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLinkTagWithGoogleFont": () => (/* binding */ createLinkTagWithGoogleFont),
/* harmony export */   "getGoogleFontURL": () => (/* binding */ getGoogleFontURL),
/* harmony export */   "isGoogleFontEnqueued": () => (/* binding */ isGoogleFontEnqueued),
/* harmony export */   "isWebFont": () => (/* binding */ isWebFont),
/* harmony export */   "loadGoogleFont": () => (/* binding */ loadGoogleFont)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/utils/index.js");

const getGoogleFontURL = fontName => {
  const family = fontName.replace(/ /g, "+");
  const subset = "";
  return `https://fonts.googleapis.com/css?family=${family}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic${subset}`;
};
const isWebFont = fontName => fontName && !fontName?.match(/^(sans[-+]serif|serif|monospace|serif-alt)$/i);

/**
 * Load the stylesheet of a Google Font.
 *
 * @param {string} fontName The name of the font
 */
const loadGoogleFont = fontName => {
  setTimeout(() => {
    const _loadGoogleFont = head => {
      if (head && isWebFont(fontName)) {
        if (isGoogleFontEnqueued(fontName, head)) {
          return;
        }
        const link = createLinkTagWithGoogleFont(fontName);
        head.appendChild(link);
        console.log(321, "________load-gg-font_____", {
          fontName,
          link
        });
      }
    };
    const headElement = (0,___WEBPACK_IMPORTED_MODULE_0__.getDocumentHead)();
    _loadGoogleFont(headElement);
    if (headElement !== document.querySelector("head")) {
      _loadGoogleFont(document.querySelector("head"));
    }
  }, 50);
};
const createLinkTagWithGoogleFont = function () {
  let fontName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  const link = document.createElement("link");
  link.classList.add("wcb-google-fonts");
  link.setAttribute("data-font-name", fontName);
  link.setAttribute("href", getGoogleFontURL(fontName));
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  return link;
};
const isGoogleFontEnqueued = function (fontName) {
  let head = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector("head");
  return head.querySelector(`[data-font-name="${fontName}"]`);
};

/***/ }),

/***/ "./src/utils/getBorderRadiusStyles.ts":
/*!********************************************!*\
  !*** ./src/utils/getBorderRadiusStyles.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getBorderRadiusStyles = _ref => {
  let {
    className,
    radius,
    isWithIframe = false
  } = _ref;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  let {
    value_Desktop: radiusDesktop,
    value_Tablet: radiusTablet,
    value_Mobile: radiusMobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(radius);
  const converttted = radiusValue => {
    let newradiusValue = radiusValue;
    if (typeof radiusValue === "string") {
      newradiusValue = {
        bottomLeft: radiusValue,
        bottomRight: radiusValue,
        topLeft: radiusValue,
        topRight: radiusValue
      };
    } else {
      newradiusValue = {
        bottomLeft: radiusValue?.bottomLeft,
        bottomRight: radiusValue?.bottomRight,
        topLeft: radiusValue?.topLeft,
        topRight: radiusValue?.topRight
      };
    }
    return newradiusValue;
  };
  radiusDesktop = converttted(radiusDesktop);
  radiusTablet = converttted(radiusTablet);
  radiusMobile = converttted(radiusMobile);
  const {
    mobile_v: mobile_v_topLeft,
    tablet_v: tablet_v_topLeft,
    desktop_v: desktop_v_topLeft
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.topLeft,
    tablet_v: radiusTablet?.topLeft,
    desktop_v: radiusDesktop?.topLeft
  });
  const {
    mobile_v: mobile_v_topRight,
    tablet_v: tablet_v_topRight,
    desktop_v: desktop_v_topRight
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.topRight,
    tablet_v: radiusTablet?.topRight,
    desktop_v: radiusDesktop?.topRight
  });
  const {
    mobile_v: mobile_v_bottomRight,
    tablet_v: tablet_v_bottomRight,
    desktop_v: desktop_v_bottomRight
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.bottomRight,
    tablet_v: radiusTablet?.bottomRight,
    desktop_v: radiusDesktop?.bottomRight
  });
  const {
    mobile_v: mobile_v_bottomLeft,
    tablet_v: tablet_v_bottomLeft,
    desktop_v: desktop_v_bottomLeft
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.bottomLeft,
    tablet_v: radiusTablet?.bottomLeft,
    desktop_v: radiusDesktop?.bottomLeft
  });

  // Check if className is for iframe
  const applyImportant = isWithIframe ? "!important" : "";
  return {
    [`${className}`]: {
      borderTopLeftRadius: `${mobile_v_topLeft} ${applyImportant}`,
      borderTopRightRadius: `${mobile_v_topRight} ${applyImportant}`,
      borderBottomRightRadius: `${mobile_v_bottomRight} ${applyImportant}`,
      borderBottomLeftRadius: `${mobile_v_bottomLeft} ${applyImportant}`,
      [`@media (min-width: ${media_tablet})`]: tablet_v_topLeft || tablet_v_topRight || tablet_v_bottomRight || tablet_v_bottomLeft ? {
        borderTopLeftRadius: `${tablet_v_topLeft} ${applyImportant}`,
        borderTopRightRadius: `${tablet_v_topRight} ${applyImportant}`,
        borderBottomRightRadius: `${tablet_v_bottomRight} ${applyImportant}`,
        borderBottomLeftRadius: `${tablet_v_bottomLeft} ${applyImportant}`
      } : null,
      [`@media (min-width: ${media_desktop})`]: desktop_v_topLeft || desktop_v_topRight || desktop_v_bottomRight || desktop_v_bottomLeft ? {
        borderTopLeftRadius: `${desktop_v_topLeft} ${applyImportant}`,
        borderTopRightRadius: `${desktop_v_topRight} ${applyImportant}`,
        borderBottomRightRadius: `${desktop_v_bottomRight} ${applyImportant}`,
        borderBottomLeftRadius: `${desktop_v_bottomLeft} ${applyImportant}`
      } : null
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBorderRadiusStyles);

/***/ }),

/***/ "./src/utils/getBorderStyles.ts":
/*!**************************************!*\
  !*** ./src/utils/getBorderStyles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBorderRadiusStyles */ "./src/utils/getBorderRadiusStyles.ts");

const getBorderStyles = _ref => {
  let {
    border,
    className,
    isWithRadius = false,
    isWithIframe = false
  } = _ref;
  const {
    hoverColor,
    mainSettings,
    radius
  } = border;
  //

  // MAIN BORDER
  let CSSObject = {
    [`${className}`]: {}
  };
  if (mainSettings) {
    if (mainSettings?.top) {
      const {
        bottom,
        left,
        right,
        top
      } = mainSettings;
      CSSObject = {
        [`${className}`]: {
          borderTop: `${top.width} ${top.style || "none"} ${top.color || ""}`,
          borderLeft: `${left.width} ${left.style || "none"} ${left.color || ""}`,
          borderRight: `${right.width} ${right.style || "none"} ${right.color || ""}`,
          borderBottom: `${bottom.width} ${bottom.style || "none"} ${bottom.color || ""}`,
          "&:hover": {
            borderColor: `${hoverColor}`
          }
        }
      };
    } else {
      const {
        color,
        style,
        width
      } = mainSettings;
      CSSObject = {
        [`${className}`]: {
          border: `${width} ${style || "none"} ${color || ""}`,
          "&:hover": {
            borderColor: `${hoverColor || ""}`
          }
        }
      };
    }
  }

  // RAIDUS
  let radiusCSSObject = {
    [`${className}`]: {}
  };
  if (isWithRadius && radius) {
    radiusCSSObject = (0,_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_0__["default"])({
      radius,
      className,
      isWithIframe
    });
  }

  //
  let a = {};
  let b = {};
  if (typeof CSSObject[className] === "object") {
    a = CSSObject[className] || {};
  }
  if (typeof radiusCSSObject[className] === "object") {
    b = radiusCSSObject[className] || {};
  }
  return {
    [`${className}`]: {
      ...a,
      ...b
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBorderStyles);

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

function getCssProperyHasResponsive(_ref) {
  let {
    cssProperty
  } = _ref;
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

/***/ }),

/***/ "./src/utils/getPaddingMarginStyles.ts":
/*!*********************************************!*\
  !*** ./src/utils/getPaddingMarginStyles.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");




const getPaddingMarginStyles = _ref => {
  let {
    className,
    padding,
    margin
  } = _ref;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  const {
    value_Desktop: margin_Desktop,
    value_Tablet: margin_Tablet,
    value_Mobile: margin_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(margin);
  //

  const {
    value_Desktop: padding_Desktop,
    value_Tablet: padding_Tablet,
    value_Mobile: padding_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(padding);
  //

  //
  const {
    mobile_v: padding_Mobile_top,
    tablet_v: padding_Tablet_top,
    desktop_v: padding_Desktop_top
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.top,
    tablet_v: padding_Tablet?.top,
    desktop_v: padding_Desktop?.top
  });
  const {
    mobile_v: padding_Mobile_left,
    tablet_v: padding_Tablet_left,
    desktop_v: padding_Desktop_left
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.left,
    tablet_v: padding_Tablet?.left,
    desktop_v: padding_Desktop?.left
  });
  const {
    mobile_v: padding_Mobile_right,
    tablet_v: padding_Tablet_right,
    desktop_v: padding_Desktop_right
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.right,
    tablet_v: padding_Tablet?.right,
    desktop_v: padding_Desktop?.right
  });
  const {
    mobile_v: padding_Mobile_bottom,
    tablet_v: padding_Tablet_bottom,
    desktop_v: padding_Desktop_bottom
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.bottom,
    tablet_v: padding_Tablet?.bottom,
    desktop_v: padding_Desktop?.bottom
  });
  //
  const {
    mobile_v: margin_Mobile_top,
    tablet_v: margin_Tablet_top,
    desktop_v: margin_Desktop_top
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.top,
    tablet_v: margin_Tablet?.top,
    desktop_v: margin_Desktop?.top
  });
  const {
    mobile_v: margin_Mobile_left,
    tablet_v: margin_Tablet_left,
    desktop_v: margin_Desktop_left
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.left,
    tablet_v: margin_Tablet?.left,
    desktop_v: margin_Desktop?.left
  });
  const {
    mobile_v: margin_Mobile_right,
    tablet_v: margin_Tablet_right,
    desktop_v: margin_Desktop_right
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.right,
    tablet_v: margin_Tablet?.right,
    desktop_v: margin_Desktop?.right
  });
  const {
    mobile_v: margin_Mobile_bottom,
    tablet_v: margin_Tablet_bottom,
    desktop_v: margin_Desktop_bottom
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.bottom,
    tablet_v: margin_Tablet?.bottom,
    desktop_v: margin_Desktop?.bottom
  });
  return _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
		body ${className} {
			padding-top: ${padding_Mobile_top};
			padding-right: ${padding_Mobile_right};
			padding-bottom: ${padding_Mobile_bottom};
			padding-left: ${padding_Mobile_left};
			margin-top: ${margin_Mobile_top};
			margin-right: ${margin_Mobile_right};
			margin-bottom: ${margin_Mobile_bottom};
			margin-left: ${margin_Mobile_left};
			@media (min-width: ${media_tablet}) {
				padding-top: ${padding_Tablet_top};
				padding-right: ${padding_Tablet_right};
				padding-bottom: ${padding_Tablet_bottom};
				padding-left: ${padding_Tablet_left};
				margin-top: ${margin_Tablet_top};
				margin-right: ${margin_Tablet_right};
				margin-bottom: ${margin_Tablet_bottom};
				margin-left: ${margin_Tablet_left};
			}
			@media (min-width: ${media_desktop}) {
				padding-top: ${padding_Desktop_top};
				padding-right: ${padding_Desktop_right};
				padding-bottom: ${padding_Desktop_bottom};
				padding-left: ${padding_Desktop_left};
				margin-top: ${margin_Desktop_top};
				margin-right: ${margin_Desktop_right};
				margin-bottom: ${margin_Desktop_bottom};
				margin-left: ${margin_Desktop_left};
			}
		}
	`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaddingMarginStyles);

/***/ }),

/***/ "./src/utils/getTypographyStyles.ts":
/*!******************************************!*\
  !*** ./src/utils/getTypographyStyles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./src/utils/font.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getTypographyStyles = _ref => {
  let {
    typography,
    className
  } = _ref;
  if (!typography || !className) {
    return {};
  }
  const {
    appearance,
    fontFamily,
    fontSizes,
    letterSpacing,
    lineHeight,
    textDecoration,
    textTransform
  } = typography;
  if (!!fontFamily) {
    (0,_font__WEBPACK_IMPORTED_MODULE_1__.loadGoogleFont)(fontFamily);
  }
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  //
  const fontSize_Desktop = fontSizes?.Desktop;
  const fontSize_Tablet = fontSizes?.Tablet || fontSize_Desktop;
  const fontSize_Mobile = fontSizes?.Mobile || fontSize_Tablet;
  //
  const lineHeight_Desktop = lineHeight?.Desktop;
  const lineHeight_Tablet = lineHeight?.Tablet || lineHeight_Desktop;
  const lineHeight_Mobile = lineHeight?.Mobile || lineHeight_Tablet;
  //
  const letterSpacing_Desktop = letterSpacing?.Desktop;
  const letterSpacing_Tablet = letterSpacing?.Tablet || letterSpacing_Desktop;
  const letterSpacing_Mobile = letterSpacing?.Mobile || letterSpacing_Tablet;
  //

  //
  const {
    mobile_v: fontSize_Mobile_new,
    tablet_v: fontSize_Tablet_new,
    desktop_v: fontSize_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: fontSize_Mobile,
    tablet_v: fontSize_Tablet,
    desktop_v: fontSize_Desktop
  });
  const {
    mobile_v: lineHeight_Mobile_new,
    tablet_v: lineHeight_Tablet_new,
    desktop_v: lineHeight_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: lineHeight_Mobile,
    tablet_v: lineHeight_Tablet,
    desktop_v: lineHeight_Desktop
  });
  const {
    mobile_v: letterSpacing_Mobile_new,
    tablet_v: letterSpacing_Tablet_new,
    desktop_v: letterSpacing_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: letterSpacing_Mobile,
    tablet_v: letterSpacing_Tablet,
    desktop_v: letterSpacing_Desktop
  });
  //

  return {
    [`${className}`]: {
      fontFamily: fontFamily,
      fontWeight: appearance.style?.fontWeight,
      fontStyle: appearance.style?.fontStyle,
      textDecoration,
      textTransform,
      //
      fontSize: fontSize_Mobile_new,
      lineHeight: lineHeight_Mobile_new,
      letterSpacing: letterSpacing_Mobile_new,
      [`@media (min-width: ${media_tablet})`]: fontSize_Tablet_new || lineHeight_Tablet_new || letterSpacing_Tablet_new ? {
        fontSize: fontSize_Tablet_new,
        lineHeight: lineHeight_Tablet_new,
        letterSpacing: letterSpacing_Tablet_new
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: fontSize_Desktop_new || lineHeight_Desktop_new || letterSpacing_Desktop_new ? {
        fontSize: fontSize_Desktop_new,
        lineHeight: lineHeight_Desktop_new,
        letterSpacing: letterSpacing_Desktop_new
      } : undefined
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTypographyStyles);

/***/ }),

/***/ "./src/utils/global-style.js":
/*!***********************************!*\
  !*** ./src/utils/global-style.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToResponsiveStyle": () => (/* binding */ convertToResponsiveStyle),
/* harmony export */   "createStyleTagWithGlobalStyleContent": () => (/* binding */ createStyleTagWithGlobalStyleContent),
/* harmony export */   "isStyleTagAdded": () => (/* binding */ isStyleTagAdded),
/* harmony export */   "removeOldStyleTag": () => (/* binding */ removeOldStyleTag),
/* harmony export */   "renderGlobalStyle": () => (/* binding */ renderGlobalStyle)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/utils/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_2__);



const convertToResponsiveStyle = () => {
  let responsiveJson = {
    'desktop': {
      'style': []
    },
    'tablet': {
      'breakpoint': '991px',
      'style': []
    },
    'mobile': {
      'breakpoint': '767px',
      'style': []
    }
  };
  let content = '';
  _wordpress_api__WEBPACK_IMPORTED_MODULE_2__.loadPromise.then(() => {
    const settings = new _wordpress_api__WEBPACK_IMPORTED_MODULE_2__.models.Settings();
    settings.fetch().then(response => {
      const typography = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.head)(response.wcb_global_typography);
      const colors = response.wcb_global_colors;
      for (const selector in typography) {
        //styleContent += `${cssPrefix} ${selector}{${JSToCSS(typo[selector])}}`;
        const attrs = typography[selector];
        let selectorStyle = {
          [selector]: {}
        };
        responsiveJson['desktop']['style'].push(selectorStyle);
        responsiveJson['mobile']['style'].push(selectorStyle);
        responsiveJson['tablet']['style'].push(selectorStyle);
        for (const attrName in attrs) {
          if (attrName.includes('Tablet')) {} else if (attrName.includes('Mobile')) {} else {}
        }
      }
      return responsiveJson;
    });
  });
  return content;
};
const renderGlobalStyle = () => {
  setTimeout(() => {
    const _renderGlobalStyle = head => {
      if (head) {
        removeOldStyleTag(head);
        const style = createStyleTagWithGlobalStyleContent();
        head.appendChild(style);
      }
    };
    const headElement = (0,___WEBPACK_IMPORTED_MODULE_0__.getDocumentHead)();
    _renderGlobalStyle(headElement);
    if (headElement !== document.querySelector('head')) {
      _renderGlobalStyle(document.querySelector('head'));
    }
  }, 50);
};
const createStyleTagWithGlobalStyleContent = () => {
  let cssPrefix = '.woostify-block';
  if ((0,___WEBPACK_IMPORTED_MODULE_0__.isEditingPost)()) {
    cssPrefix = '.editor-styles-wrapper .woostify-block';
  }
  const style = document.createElement('style');
  style.classList.add('wcb-global-style');
  style.textContent = convertToResponsiveStyle();
  return style;
};
const removeOldStyleTag = function () {
  let head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('head');
  if (!isStyleTagAdded(head)) {
    return;
  }
  const oldTag = head.querySelector('.wcb-global-style');
  oldTag.remove();
};
const isStyleTagAdded = function () {
  let head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('head');
  return head.querySelector('.wcb-global-style');
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSToCSS": () => (/* binding */ JSToCSS),
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "convertToResponsiveStyle": () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.convertToResponsiveStyle),
/* harmony export */   "createLinkTagWithGoogleFont": () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.createLinkTagWithGoogleFont),
/* harmony export */   "createStyleTagWithGlobalStyleContent": () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.createStyleTagWithGlobalStyleContent),
/* harmony export */   "getDocumentHead": () => (/* binding */ getDocumentHead),
/* harmony export */   "getGoogleFontURL": () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.getGoogleFontURL),
/* harmony export */   "isEditingContent": () => (/* binding */ isEditingContent),
/* harmony export */   "isEditingPost": () => (/* binding */ isEditingPost),
/* harmony export */   "isGoogleFontEnqueued": () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isGoogleFontEnqueued),
/* harmony export */   "isStyleTagAdded": () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.isStyleTagAdded),
/* harmony export */   "isWebFont": () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isWebFont),
/* harmony export */   "loadGoogleFont": () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.loadGoogleFont),
/* harmony export */   "removeOldStyleTag": () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.removeOldStyleTag),
/* harmony export */   "renderGlobalStyle": () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.renderGlobalStyle),
/* harmony export */   "wcbCreateColor": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbCreateColor),
/* harmony export */   "wcbGetRgb": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbGetRgb)
/* harmony export */ });
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./font */ "./src/utils/font.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/utils/color.js");
/* harmony import */ var _global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-style */ "./src/utils/global-style.js");




/**
 * Capitalize the first letter in string
 * @param {*} string
 * @returns
 */
const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const getDocumentHead = () => {
  let head = document.querySelector('head');
  if (isEditingContent()) {
    head = document.querySelector('iframe[name="editor-canvas"]').contentWindow.document.querySelector('head');
  }
  return head;
};
const isEditingContent = () => !!document.querySelector('iframe[name="editor-canvas"]');
const isEditingPost = () => {
  if (document.querySelector('.edit-post-visual-editor')) {
    return true;
  }
  return false;
};
const JSToCSS = JS => {
  let cssString = '';
  for (let objectKey in JS) {
    if (objectKey.includes('Unit')) {
      return;
    }
    let suffix = '';
    if (objectKey.includes('fontFamily')) {
      suffix = ', Sans-serif';
    }
    if (objectKey.includes('letterSpacing')) {
      suffix = 'px';
    }
    cssString += objectKey.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`) + ': ' + JS[objectKey] + suffix + ';\n';
  }
  return cssString;
};

/***/ })

}]);
//# sourceMappingURL=src_block-products_GlobalCss_tsx.js.map
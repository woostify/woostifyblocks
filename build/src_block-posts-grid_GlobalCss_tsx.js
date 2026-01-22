"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-posts-grid_GlobalCss_tsx"],{

/***/ "./src/block-posts-grid/GlobalCss.tsx":
/*!********************************************!*\
  !*** ./src/block-posts-grid/GlobalCss.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBoxShadowStyles */ "./src/utils/getBoxShadowStyles.ts");
/* harmony import */ var _utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getCssProperyHasResponsive */ "./src/utils/getCssProperyHasResponsive.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../________ */ "./src/________.ts");










const GlobalCss = attrs => {
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
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_7__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcbPostCard`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    const {
      value_desktop: rowGap_desktop,
      value_mobile: rowGap_mobile,
      value_tablet: rowGap_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_layout.rowGap
    });
    const {
      value_desktop: colunmGap_desktop,
      value_mobile: colunmGap_mobile,
      value_tablet: colunmGap_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_layout.colunmGap
    });
    const {
      value_desktop: numberOfColumn_desktop,
      value_tablet: numberOfColumn_tablet,
      value_mobile: numberOfColumn_mobile
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: general_sortingAndFiltering.numberOfColumn
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
            gridTemplateColumns: `repeat(${numberOfColumn_tablet}, minmax(0, 1fr))`
          },
          [`@media (min-width: ${media_desktop})`]: {
            rowGap: rowGap_desktop,
            columnGap: colunmGap_desktop,
            gridTemplateColumns: `repeat(${numberOfColumn_desktop}, minmax(0, 1fr))`
          }
        }
      }
    };
  };
  const getDivWrapStyles_Pagination = () => {
    const {
      value_mobile: marginTop_mobile,
      value_tablet: marginTop_tablet,
      value_desktop: marginTop_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_pagination.marginTop
    });
    return {
      [`${WRAP_CLASSNAME} .wcb-posts-grid__pagination`]: {
        marginTop: marginTop_mobile,
        justifyContent: style_pagination.justifyContent,
        [`.page-numbers`]: {
          color: style_pagination.mainStyle.Normal.color,
          backgroundColor: style_pagination.mainStyle.Normal.backgroundColor
        },
        [`.page-numbers.current`]: {
          color: style_pagination.mainStyle.Active.color,
          backgroundColor: style_pagination.mainStyle.Active.backgroundColor
        },
        [`@media (min-width: ${media_tablet})`]: {
          marginTop: marginTop_tablet
        },
        [`@media (min-width: ${media_desktop})`]: {
          marginTop: marginTop_desktop
        }
      }
    };
  };

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
      value_mobile: excerptMarginBottom_mobile,
      value_tablet: excerptMarginBottom_tablet,
      value_desktop: excerptMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_excerpt.marginBottom
    });
    const {
      value_mobile: featuredImageMarginBottom_mobile,
      value_tablet: featuredImageMarginBottom_tablet,
      value_desktop: featuredImageMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_featuredImage.marginBottom
    });
    return [{
      [POST_CARD_CLASS]: {
        position: "relative",
        height: !general_sortingAndFiltering.isEqualHeight ? "max-content" : undefined,
        "&--image-background": {
          ".wcbPostCard__featuredImage-overlay": {
            backgroundColor: style_featuredImage.backgroundOverlay
          }
        },
        "&--image-top": {
          ".wcbPostCard__featuredImage": {
            marginBottom: featuredImageMarginBottom_mobile,
            [`@media (min-width: ${media_tablet})`]: {
              marginBottom: featuredImageMarginBottom_tablet
            },
            [`@media (min-width: ${media_desktop})`]: {
              marginBottom: featuredImageMarginBottom_desktop
            }
          }
        },
        textAlign: style_layout.textAlignment,
        backgroundColor: style_layout.backgroundColor,
        ".wcbPostCard__content": {},
        ".wcbPostCard__title": {
          marginBottom: titleMarginBottom_mobile,
          ">a": {
            color: style_title.textColor
          },
          ">a:hover": {
            color: style_title.textHoverColor
          }
        },
        ".wcbPostCard__excerpt": {
          marginBottom: excerptMarginBottom_mobile,
          color: style_excerpt.textColor
        },
        [`@media (min-width: ${media_tablet})`]: {
          ".wcbPostCard__title": {
            marginBottom: titleMarginBottom_tablet
          },
          ".wcbPostCard__excerpt": {
            marginBottom: excerptMarginBottom_tablet
          }
        },
        [`@media (min-width: ${media_desktop})`]: {
          ".wcbPostCard__title": {
            marginBottom: titleMarginBottom_desktop
          },
          ".wcbPostCard__excerpt": {
            marginBottom: excerptMarginBottom_desktop
          }
        }
      }
    }, (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcbPostCard--image-top .wcbPostCard__featuredImage img`,
      border: style_featuredImage.border,
      isWithRadius: true
    })];
  };
  const getPostCardStyles_Meta = () => {
    const {
      value_mobile: marginBottom_mobile,
      value_tablet: marginBottom_tablet,
      value_desktop: marginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_meta.marginBottom
    });
    const {
      value_mobile: taxonomyMarginBottom_mobile,
      value_tablet: taxonomyMarginBottom_tablet,
      value_desktop: taxonomyMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_taxonomy.marginBottom
    });
    return {
      [`${POST_CARD_CLASS}`]: {
        // METAS
        ".wcbPostCard__meta": {
          marginBottom: marginBottom_mobile,
          ".wcbPostCard__meta-author": {
            color: style_meta.authorColor
          },
          ".wcbPostCard__meta-date-and-comments": {
            color: style_meta.dateTextColor
          },
          [`@media (min-width: ${media_tablet})`]: {
            marginBottom: marginBottom_tablet
          },
          [`@media (min-width: ${media_desktop})`]: {
            marginBottom: marginBottom_desktop
          }
        },
        // TAXONOMY
        ".wcbPostCard__taxonomies": {
          marginBottom: taxonomyMarginBottom_mobile,
          ">a": {
            color: style_taxonomy.textColor
          },
          "&--highlighted >a": {
            backgroundColor: style_taxonomy.backgroundColor
          },
          [`@media (min-width: ${media_tablet})`]: {
            marginBottom: taxonomyMarginBottom_tablet
          },
          [`@media (min-width: ${media_desktop})`]: {
            marginBottom: taxonomyMarginBottom_desktop
          }
        }
      }
    };
  };
  const getPostCardStyles_ReadmoreLink = () => {
    const {
      backgroundColor,
      color
    } = style_readmoreLink.colorAndBackgroundColor.Normal;
    const {
      backgroundColor: backgroundColor_h,
      color: color_h
    } = style_readmoreLink.colorAndBackgroundColor.Hover;
    const {
      value_mobile: marginBottom_mobile,
      value_tablet: marginBottom_tablet,
      value_desktop: marginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cssProperty: style_readmoreLink.marginBottom || {
        Desktop: "1rem"
      }
    });
    return {
      [`${POST_CARD_CLASS} .wcbPostCard__readmoreLink`]: {
        color,
        backgroundColor,
        marginBottom: marginBottom_mobile,
        ":hover": {
          color: color_h,
          backgroundColor: backgroundColor_h
        },
        [`@media (min-width: ${media_tablet})`]: {
          marginBottom: marginBottom_tablet
        },
        [`@media (min-width: ${media_desktop})`]: {
          marginBottom: marginBottom_desktop
        }
      }
    };
  };
  if (!uniqueId) {
    return null;
  }
  console.log(22323, {
    advance_motionEffect
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: getDivWrapStyles()
  }), general_pagination.isShowPagination ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: getDivWrapStyles_Pagination()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-posts-grid__pagination .page-numbers`,
      border: style_pagination.mainStyle.Normal.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-posts-grid__pagination .page-numbers.current`,
      border: style_pagination.mainStyle.Active.border,
      isWithRadius: true
    })
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: getPostCardWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: getPostCardStyles_Meta()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: general_postFeaturedImage.featuredImagePosition === "background" ? POST_CARD_CLASS : `${POST_CARD_CLASS} .wcbPostCard__content`,
      padding: style_layout.padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${POST_CARD_CLASS}`,
      border: style_border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${POST_CARD_CLASS}`,
      boxShadow: style_boxShadow
    })
  }), general_postMeta.isShowTitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${POST_CARD_CLASS} .wcbPostCard__title a`,
      typography: style_title.typography
    })
  }) : null, general_postContent.isShowPostContent ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${POST_CARD_CLASS} .wcbPostCard__excerpt`,
      typography: style_excerpt.typography
    })
  }) : null, general_postMeta.isShowAuthor && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${POST_CARD_CLASS} .wcbPostCard__meta-author-name`,
      typography: style_meta.authorTypography
    })
  }), (general_postMeta.isShowComment || general_postMeta.isShowDate) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${POST_CARD_CLASS} .wcbPostCard__meta-date-and-comments`,
      typography: style_meta.dateTypography
    })
  }), general_postMeta.isShowTaxonomy ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${POST_CARD_CLASS} .wcbPostCard__taxonomies a`,
      typography: style_taxonomy.typography
    })
  }) : null, general_readmoreLink.isShowReadmore ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: getPostCardStyles_ReadmoreLink()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${POST_CARD_CLASS} .wcbPostCard__readmoreLink`,
      typography: style_readmoreLink.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${POST_CARD_CLASS} .wcbPostCard__readmoreLink`,
      border: style_readmoreLink.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: `${POST_CARD_CLASS} .wcbPostCard__readmoreLink`,
      padding: style_readmoreLink.padding
    })
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_responsiveCondition,
      advance_motionEffect,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "block"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts":
/*!**************************************************************************!*\
  !*** ./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getShadowStyleValueFromTwPreset: () => (/* binding */ getShadowStyleValueFromTwPreset)
/* harmony export */ });
const getShadowStyleValueFromTwPreset = (presetClass, color = "") => {
  switch (presetClass) {
    case "shadow-sm":
      return `0 1px 2px 0 ${color || "rgb(0 0 0 / 0.05)"}`;
    case "shadow":
      return `0 1px 3px 0 ${color || "rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-md":
      return `0 4px 6px -1px ${color || "rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-lg":
      return `0 10px 15px -3px ${color || "rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-xl":
      return `0 20px 25px -5px ${color || "rgb(0 0 0 / 0.1)"}, 0 8px 10px -6px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-2xl":
      return `0 25px 50px -12px ${color || "rgb(0 0 0 / 0.25)"}`;
    case "shadow-inner":
      return `inset 0 2px 4px 0 ${color || "rgb(0 0 0 / 0.05)"}`;
    default:
      return "";
  }
};

/***/ }),

/***/ "./src/utils/getBoxShadowStyles.ts":
/*!*****************************************!*\
  !*** ./src/utils/getBoxShadowStyles.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/getBoxShadowStyles */ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts");

const getBoxShadowStyles = ({
  boxShadow,
  className
}) => {
  const {
    Hover,
    Normal
  } = boxShadow;
  const {
    presetClass,
    blur,
    color,
    horizontal,
    position,
    spread,
    vertical
  } = Normal || {};
  const {
    presetClass: presetClass_h,
    blur: blur_h,
    color: color_h,
    horizontal: horizontal_h,
    position: position_h,
    spread: spread_h,
    vertical: vertical_h
  } = Hover || {};
  //
  let VALUE = "";
  let VALUE_H = "";
  //
  if (presetClass) {
    VALUE = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__.getShadowStyleValueFromTwPreset)(presetClass, color);
  } else {
    VALUE = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${position === "inset" ? position : ""}`;
  }
  //
  if (presetClass_h) {
    VALUE_H = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__.getShadowStyleValueFromTwPreset)(presetClass_h, color_h);
  } else {
    VALUE_H = `${horizontal_h}px ${vertical_h}px ${blur_h}px ${spread_h}px ${color_h} ${position_h === "inset" ? position_h : ""}`;
  }
  return {
    [`${className}`]: {
      boxShadow: VALUE,
      "&:hover": {
        boxShadow: VALUE_H
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBoxShadowStyles);

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
//# sourceMappingURL=src_block-posts-grid_GlobalCss_tsx.js.map
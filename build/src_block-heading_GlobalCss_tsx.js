"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-heading_GlobalCss_tsx"],{

/***/ "./src/block-heading/GlobalCss.tsx":
/*!*****************************************!*\
  !*** ./src/block-heading/GlobalCss.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBackgroundColorGradientStyles */ "./src/utils/getBackgroundColorGradientStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getColorAndGradientStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getColorAndGradientStyles */ "./src/utils/getColorAndGradientStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");













const GlobalCss = attrs => {
  const {
    uniqueId,
    general_content,
    styles_dimensions,
    styles_background,
    styles_heading,
    styles_highlight,
    styles_link,
    styles_separator,
    styles_subHeading,
    advance_responsiveCondition,
    advance_zIndex,
    styles_border,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_9__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const HEADING_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__heading`;
  const SUB_HEADING_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__subHeading`;
  const SEPARATOR_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__separator`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    const {
      textAlignment
    } = general_content;
    const {
      value_Desktop,
      value_Mobile,
      value_Tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(textAlignment);
    //
    const {
      mobile_v: value_Mobile_new,
      tablet_v: value_Tablet_new,
      desktop_v: value_Desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_10__["default"])({
      mobile_v: value_Mobile,
      tablet_v: value_Tablet,
      desktop_v: value_Desktop
    });
    return {
      [`${WRAP_CLASSNAME}`]: value_Mobile_new || value_Tablet_new || value_Desktop_new ? {
        textAlign: value_Mobile_new,
        [`@media (min-width: ${media_tablet})`]: value_Tablet_new ? {
          textAlign: value_Tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: value_Desktop_new ? {
          textAlign: value_Desktop_new
        } : undefined
      } : undefined
    };
  };
  const getDivWrapStyles__Link = () => {
    const {
      linkColor
    } = styles_link;
    return {
      [`${WRAP_CLASSNAME} a`]: {
        color: linkColor.Normal.color,
        ":hover": {
          color: linkColor.Hover.color
        }
      }
    };
  };
  const getDivWrapStyles__background = () => {
    const {
      background
    } = styles_background;
    return (0,_utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      background,
      className: WRAP_CLASSNAME
    });
  };
  const getDivWrapStyles__PaddingMargin = () => {
    const {
      dimension
    } = styles_dimensions;
    const {
      margin,
      padding
    } = dimension;
    return (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      margin,
      padding,
      className: WRAP_CLASSNAME
    });
  };
  // HIGHLIGHT STYLES
  const getDivWrapStyles__Highlight = () => {
    const {
      bgColor,
      padding,
      textColor
    } = styles_highlight;
    const {
      value_Desktop: padding_Desktop,
      value_Mobile: padding_Mobile,
      value_Tablet: padding_Tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(padding);

    //
    const {
      mobile_v: padding_Mobile_new,
      tablet_v: padding_Tablet_new,
      desktop_v: padding_Desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_10__["default"])({
      mobile_v: `${padding_Mobile?.top} ${padding_Mobile?.right} ${padding_Mobile?.bottom} ${padding_Mobile?.left}`,
      tablet_v: `${padding_Tablet?.top} ${padding_Tablet?.right} ${padding_Tablet?.bottom} ${padding_Tablet?.left}`,
      desktop_v: `${padding_Desktop?.top} ${padding_Desktop?.right} ${padding_Desktop?.bottom} ${padding_Desktop?.left}`
    });
    //
    return {
      [`${WRAP_CLASSNAME} mark`]: {
        color: textColor,
        backgroundColor: bgColor,
        padding: padding_Mobile_new,
        [`@media (min-width: ${media_tablet})`]: padding_Tablet_new ? {
          padding: padding_Tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: padding_Desktop_new ? {
          padding: padding_Desktop_new
        } : undefined
      }
    };
  };
  const getDivWrapStyles__Highlight_typography = () => {
    const {
      typography
    } = styles_highlight;
    return (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__["default"])({
      typography,
      className: `${WRAP_CLASSNAME} mark`
    });
  };
  const getDivWrapStyles__Highlight_border = () => {
    const {
      border
    } = styles_highlight;
    return (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      border,
      className: `${WRAP_CLASSNAME} mark`,
      isWithRadius: true
    });
  };

  // SEPARATOR STYLES
  const getDivWrapStyles__Separator_width = () => {
    const {
      width
    } = styles_separator;
    const {
      value_Desktop,
      value_Mobile,
      value_Tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(width);
    //
    return {
      [`${SEPARATOR_CLASSNAME}`]: {
        width: value_Mobile,
        [`@media (min-width: ${media_tablet})`]: {
          width: value_Tablet
        },
        [`@media (min-width: ${media_desktop})`]: {
          width: value_Desktop
        }
      }
    };
  };
  const getDivWrapStyles__Separator = () => {
    const {
      border
    } = styles_separator;
    return (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      border: {
        mainSettings: border
      },
      className: `${SEPARATOR_CLASSNAME}`
    });
  };

  // ------------------- HEADING STYLE
  const getInner__Heading_typography = () => {
    const {
      typography
    } = styles_heading;
    return (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__["default"])({
      typography,
      className: HEADING_CLASSNAME
    });
  };
  const getInner__Heading_color = () => {
    const {
      textColor
    } = styles_heading;
    return (0,_utils_getColorAndGradientStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      textColor,
      className: HEADING_CLASSNAME
    });
  };
  const getInner__Heading__textShadow = () => {
    const {
      textShadow
    } = styles_heading;
    const {
      blur,
      color,
      horizontal,
      vertical
    } = textShadow;
    return {
      [`${HEADING_CLASSNAME}`]: {
        textShadow: `${horizontal}px ${vertical}px ${blur}px ${color}`
      }
    };
  };
  // ------------------- SUB-HEADING STYLE
  const getInner__subHeading_typography = () => {
    const {
      typography
    } = styles_subHeading;
    return (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__["default"])({
      typography,
      className: SUB_HEADING_CLASSNAME
    });
  };
  const getInner__subHeading_color = () => {
    const {
      textColor
    } = styles_subHeading;
    return (0,_utils_getColorAndGradientStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      textColor,
      className: SUB_HEADING_CLASSNAME
    });
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__background()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__Link()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: WRAP_CLASSNAME,
      border: styles_border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__Highlight()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__Highlight_typography()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__Highlight_border()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__PaddingMargin()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__Separator_width()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__Separator()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-heading__separator-wrap`,
      value: styles_separator.marginBottom,
      prefix: "marginBottom"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getInner__Heading_typography()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getInner__Heading_color()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getInner__Heading__textShadow()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: HEADING_CLASSNAME,
      value: styles_heading.marginBottom,
      prefix: "marginBottom"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getInner__subHeading_typography()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getInner__subHeading_color()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: SUB_HEADING_CLASSNAME,
      value: styles_subHeading.marginBottom,
      prefix: "marginBottom"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "block"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/utils/getBackgroundColorGradientStyles.ts":
/*!*******************************************************!*\
  !*** ./src/utils/getBackgroundColorGradientStyles.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getBackgroundColorGradientStyles = ({
  className,
  background,
  backgroundHover
}) => {
  const {
    bgType,
    color,
    gradient
  } = background;
  const {
    bgType: bgType_h,
    color: color_h,
    gradient: gradient_h
  } = backgroundHover || {};
  if (bgType !== "color" && bgType !== "gradient") {
    return {};
  }
  let preBgName = "";
  let bgValue = "";
  if (bgType === "color") {
    preBgName = "backgroundColor";
    bgValue = color;
  }
  // Backgroud gradient
  if (bgType === "gradient") {
    preBgName = "backgroundImage";
    bgValue = gradient;
  }
  //
  //
  let preBgName_h = "";
  let bgValue_h = "";
  if (bgType_h === "color") {
    preBgName_h = "backgroundColor";
    bgValue_h = color_h || "";
  }
  // Backgroud gradient
  if (bgType_h === "gradient") {
    preBgName_h = "backgroundImage";
    bgValue_h = gradient_h || "";
  }
  //
  //
  return {
    [`${className}`]: {
      [`${preBgName}`]: `${bgValue}`,
      ":hover": {
        [`${preBgName_h}`]: `${bgValue_h || null}`
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBackgroundColorGradientStyles);

/***/ }),

/***/ "./src/utils/getColorAndGradientStyles.ts":
/*!************************************************!*\
  !*** ./src/utils/getColorAndGradientStyles.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getColorAndGradientStyles = ({
  className,
  textColor
}) => {
  const {
    colorType,
    color,
    gradient
  } = textColor;
  if (colorType !== "color" && colorType !== "gradient") {
    return {};
  }
  let STYLES_CSS = {};
  //
  if (colorType === "color") {
    STYLES_CSS = {
      color
    };
  }
  // Backgroud gradient
  if (colorType === "gradient") {
    STYLES_CSS = {
      color: "transparent",
      backgroundClip: "text",
      backgroundImage: gradient
    };
  }
  STYLES_CSS = {
    [`${className}`]: STYLES_CSS
  };
  //
  return STYLES_CSS;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getColorAndGradientStyles);

/***/ })

}]);
//# sourceMappingURL=src_block-heading_GlobalCss_tsx.js.map
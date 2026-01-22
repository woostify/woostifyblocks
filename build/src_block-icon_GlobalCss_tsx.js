"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-icon_GlobalCss_tsx"],{

/***/ "./src/block-icon/GlobalCss.tsx":
/*!**************************************!*\
  !*** ./src/block-icon/GlobalCss.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBoxShadowStyles */ "./src/utils/getBoxShadowStyles.ts");
/* harmony import */ var _utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBackgroundColorGradientStyles */ "./src/utils/getBackgroundColorGradientStyles.ts");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");












const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_icon,
    style_background,
    style_icon,
    style_border,
    style_boxshadow,
    style_dimension,
    general_preset,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_8__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon__content`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    const {
      alignment
    } = general_icon;
    const {
      value_Desktop,
      value_Mobile,
      value_Tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(alignment);
    //
    const {
      mobile_v: value_Mobile_new,
      tablet_v: value_Tablet_new,
      desktop_v: value_Desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
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
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: CONTENT_CLASSNAME,
      background: style_background.normal,
      backgroundHover: style_background.hover
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_1__["default"])({
      className: CONTENT_CLASSNAME,
      border: style_border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: CONTENT_CLASSNAME,
      boxShadow: style_boxshadow
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME,
      margin: style_dimension.margin
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon__content`,
      padding: style_dimension.padding
    }), (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_1__["default"])({
      border: style_icon,
      className: `${WRAP_CLASSNAME} .wcb-icon__content`,
      isWithRadius: true
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-full`,
      value: general_icon.size,
      prefix: "width",
      prefix_2: "fontSize"
    }), {
      [`${CONTENT_CLASSNAME} .wcb-icon-full`]: {
        color: style_icon.color
      },
      [`${CONTENT_CLASSNAME}:hover .wcb-icon-full`]: {
        color: style_icon.hoverColor
      },
      [`${WRAP_CLASSNAME} .wcb-icon__content`]: {
        cursor: general_icon.enableLink ? 'pointer' : ''
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_4__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: CONTENT_CLASSNAME,
      defaultDisplay: "inline-block"
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

/***/ })

}]);
//# sourceMappingURL=src_block-icon_GlobalCss_tsx.js.map
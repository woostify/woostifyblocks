"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-countdown_GlobalCss_tsx"],{

/***/ "./src/block-countdown/GlobalCss.tsx":
/*!*******************************************!*\
  !*** ./src/block-countdown/GlobalCss.tsx ***!
  \*******************************************/
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
/* harmony import */ var _utils_getFlexPropertiesStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getFlexPropertiesStyles */ "./src/utils/getFlexPropertiesStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../________ */ "./src/________.ts");












const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_layout,
    style_dimension,
    style_label,
    style_background,
    style_number,
    style_border,
    style_boxshadow,
    general_preset,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_9__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-countdown__content`;
  const LABEL_CLASSNAME = `${WRAP_CLASSNAME} .wcb-countdown__label`;
  const NUMBER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-countdown__number`;
  const BOX_CLASSNAME = `${WRAP_CLASSNAME} .wcb-countdown__box`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return {
      [`${WRAP_CLASSNAME}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    };
  };

  // ------------------- LABEL
  const getInner__Label_typography = () => {
    const {
      typography
    } = style_label;
    return (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__["default"])({
      typography,
      className: LABEL_CLASSNAME
    });
  };

  // ------------------- NUMBER
  const getInner__Number_typography = () => {
    const {
      typography
    } = style_number;
    return (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__["default"])({
      typography,
      className: NUMBER_CLASSNAME
    });
  };
  const {
    value_Desktop: textAlignment_Desktop,
    value_Tablet: textAlignment_tablet,
    value_Mobile: textAlignment_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(general_layout.textAlignment);
  const {
    value_Desktop: flexDirection_Desktop,
    value_Tablet: flexDirection_tablet,
    value_Mobile: flexDirection_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(general_layout.flexDirection);

  // FLEX COL
  let ALIGN_ITEMS = {
    Desktop: textAlignment_Desktop === "left" ? "start" : textAlignment_Desktop === "right" ? "end" : "center",
    Tablet: textAlignment_tablet === "left" ? "start" : textAlignment_tablet === "right" ? "end" : "center",
    Mobile: textAlignment_mobile === "left" ? "start" : textAlignment_mobile === "right" ? "end" : "center"
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_1__["default"])({
      className: BOX_CLASSNAME,
      border: style_border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: BOX_CLASSNAME,
      boxShadow: style_boxshadow
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: CONTENT_CLASSNAME,
      value: general_layout.textAlignment,
      prefix: "textAlign"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: CONTENT_CLASSNAME,
      value: ALIGN_ITEMS,
      prefix: "justifyContent"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: CONTENT_CLASSNAME,
      value: general_layout.flexDirection,
      prefix: "flexDirection"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: BOX_CLASSNAME + '+ div',
      value: style_dimension.gap_boxes,
      prefix: "marginLeft"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: BOX_CLASSNAME,
      value: style_dimension.width_box,
      prefix: "width"
    }), (0,_utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: BOX_CLASSNAME,
      background: style_background.normal,
      backgroundHover: style_background.hover
    })]
  }), general_preset.preset != 'wcb-countdown-5' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: BOX_CLASSNAME,
      value: style_dimension.width_box,
      prefix: "height"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME,
      value: general_layout.contentWidth,
      prefix: "width"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getFlexPropertiesStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      flexProperties: general_layout.flexDirection,
      className: CONTENT_CLASSNAME
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [getInner__Label_typography(), {
      [LABEL_CLASSNAME]: {
        color: style_label.textColor
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [getInner__Number_typography(), {
      [NUMBER_CLASSNAME]: {
        color: style_number.textColor
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: NUMBER_CLASSNAME,
      value: style_dimension.gap_number,
      prefix: "marginBottom"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_4__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: CONTENT_CLASSNAME,
      defaultDisplay: "flex"
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

/***/ }),

/***/ "./src/utils/getFlexPropertiesStyles.ts":
/*!**********************************************!*\
  !*** ./src/utils/getFlexPropertiesStyles.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getFlexPropertiesStyles = ({
  flexProperties,
  className
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;

  //
  const {
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    colunmGap,
    rowGap
  } = flexProperties;
  //

  const {
    value_Desktop: flexDirection_Desktop,
    value_Tablet: flexDirection_Tablet,
    value_Mobile: flexDirection_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(flexDirection);
  //
  const {
    value_Desktop: alignItems_Desktop,
    value_Tablet: alignItems_Tablet,
    value_Mobile: alignItems_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(alignItems);
  //
  const {
    value_Desktop: flexWrap_Desktop,
    value_Tablet: flexWrap_Tablet,
    value_Mobile: flexWrap_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(flexWrap);
  //
  const {
    value_Desktop: justifyContent_Desktop,
    value_Tablet: justifyContent_Tablet,
    value_Mobile: justifyContent_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(justifyContent);

  //
  const {
    value_Desktop: colunmGap_Desktop,
    value_Tablet: colunmGap_Tablet,
    value_Mobile: colunmGap_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(colunmGap);
  //
  const {
    value_Desktop: rowGap_Desktop,
    value_Tablet: rowGap_Tablet,
    value_Mobile: rowGap_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(rowGap);
  //

  //
  const {
    mobile_v: flexDirection_Mobile_new,
    tablet_v: flexDirection_Tablet_new,
    desktop_v: flexDirection_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: flexDirection_Mobile,
    tablet_v: flexDirection_Tablet,
    desktop_v: flexDirection_Desktop
  });
  const {
    mobile_v: alignItems_Mobile_new,
    tablet_v: alignItems_Tablet_new,
    desktop_v: alignItems_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: alignItems_Mobile,
    tablet_v: alignItems_Tablet,
    desktop_v: alignItems_Desktop
  });
  const {
    mobile_v: flexWrap_Mobile_new,
    tablet_v: flexWrap_Tablet_new,
    desktop_v: flexWrap_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: flexWrap_Mobile,
    tablet_v: flexWrap_Tablet,
    desktop_v: flexWrap_Desktop
  });
  const {
    mobile_v: justifyContent_Mobile_new,
    tablet_v: justifyContent_Tablet_new,
    desktop_v: justifyContent_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: justifyContent_Mobile,
    tablet_v: justifyContent_Tablet,
    desktop_v: justifyContent_Desktop
  });
  const {
    mobile_v: colunmGap_Mobile_new,
    tablet_v: colunmGap_Tablet_new,
    desktop_v: colunmGap_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: colunmGap_Mobile,
    tablet_v: colunmGap_Tablet,
    desktop_v: colunmGap_Desktop
  });
  const {
    mobile_v: rowGap_Mobile_new,
    tablet_v: rowGap_Tablet_new,
    desktop_v: rowGap_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: rowGap_Mobile,
    tablet_v: rowGap_Tablet,
    desktop_v: rowGap_Desktop
  });
  //

  return {
    [`${className}`]: {
      flexDirection: flexDirection_Mobile_new,
      alignItems: alignItems_Mobile_new,
      flexWrap: flexWrap_Mobile_new,
      justifyContent: justifyContent_Mobile_new,
      columnGap: colunmGap_Mobile_new,
      rowGap: rowGap_Mobile_new,
      [`@media (min-width: ${media_tablet})`]: flexDirection_Tablet_new || alignItems_Tablet_new || flexWrap_Tablet_new || justifyContent_Tablet_new || colunmGap_Tablet_new || rowGap_Tablet_new ? {
        flexDirection: flexDirection_Tablet_new,
        alignItems: alignItems_Tablet_new,
        flexWrap: flexWrap_Tablet_new,
        justifyContent: justifyContent_Tablet_new,
        columnGap: colunmGap_Tablet_new,
        rowGap: rowGap_Tablet_new
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: flexDirection_Desktop_new || alignItems_Desktop_new || flexWrap_Desktop_new || justifyContent_Desktop_new || colunmGap_Desktop_new || rowGap_Desktop_new ? {
        flexDirection: flexDirection_Desktop_new,
        alignItems: alignItems_Desktop_new,
        flexWrap: flexWrap_Desktop_new,
        justifyContent: justifyContent_Desktop_new,
        columnGap: colunmGap_Desktop_new,
        rowGap: rowGap_Desktop_new
      } : undefined
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFlexPropertiesStyles);

/***/ })

}]);
//# sourceMappingURL=src_block-countdown_GlobalCss_tsx.js.map
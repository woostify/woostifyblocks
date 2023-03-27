"use strict";
(self["webpackChunkwoostify_blocks"] = self["webpackChunkwoostify_blocks"] || []).push([["src_block-container_GlobalCss_tsx"],{

/***/ "./src/block-container/GlobalCss.tsx":
/*!*******************************************!*\
  !*** ./src/block-container/GlobalCss.tsx ***!
  \*******************************************/
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
/* harmony import */ var _components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/getBoxShadowStyles */ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getFlexPropertiesStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getFlexPropertiesStyles */ "./src/utils/getFlexPropertiesStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getStyleBackground */ "./src/utils/getStyleBackground.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getAdvanveStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");











const GlobalCss = attrs => {
  const {
    uniqueId,
    general_container,
    general_flexProperties,
    styles_background,
    styles_border,
    styles_boxShadow,
    styles_color,
    styles_dimensions,
    advance_responsiveCondition,
    advance_zIndex
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_8__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-container__inner`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    const {
      containerWidthType,
      customWidth,
      overflow,
      minHeight
    } = general_container;
    let {
      value_Desktop: cWidthDesktop,
      value_Tablet: cWidthTablet,
      value_Mobile: cWidthMobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(customWidth);
    if (containerWidthType !== "Custom") {
      cWidthDesktop = undefined;
      cWidthTablet = undefined;
      cWidthMobile = undefined;
    }

    //
    const {
      value_Desktop: minHeightDesktop,
      value_Tablet: minHeightTablet,
      value_Mobile: minHeightMobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(minHeight);
    return [{
      [WRAP_CLASSNAME]: {
        color: styles_color,
        overflow: overflow,
        //
        maxWidth: cWidthMobile,
        minHeight: minHeightMobile,
        "&.is_wcb_container_child": {
          // width: "unset",
          flexBasis: `calc(${cWidthMobile} - (var(--wcb-gap-x)));`
        },
        [`@media (min-width: ${media_tablet})`]: {
          maxWidth: cWidthTablet,
          minHeight: minHeightTablet,
          "&.is_wcb_container_child": {
            // width: "unset",
            flexBasis: `calc(${cWidthTablet} - (var(--wcb-gap-x)));`
          }
        },
        [`@media (min-width: ${media_desktop})`]: {
          maxWidth: cWidthDesktop,
          minHeight: minHeightDesktop,
          "&.is_wcb_container_child": {
            // width: "unset",
            flexBasis: `calc(${cWidthDesktop} - (var(--wcb-gap-x)));`
          }
        }
      }
    }];
  };
  const getDivWrapStyles__Border = () => {
    const {} = styles_border;
    //
    return (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      border: styles_border,
      className: WRAP_CLASSNAME,
      isWithRadius: true
    });
  };
  const getDivWrapStyles__BoxShadow = () => {
    const {
      Hover,
      Normal
    } = styles_boxShadow;
    const {
      presetClass,
      blur,
      color,
      horizontal,
      position,
      spread,
      vertical
    } = Normal;
    const {
      presetClass: presetClass_h,
      blur: blur_h,
      color: color_h,
      horizontal: horizontal_h,
      position: position_h,
      spread: spread_h,
      vertical: vertical_h
    } = Hover;
    //
    let VALUE = "";
    let VALUE_H = "";
    //
    if (presetClass) {
      VALUE = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_2__.getShadowStyleValueFromTwPreset)(presetClass, color);
    } else {
      VALUE = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${position === "inset" ? position : ""}`;
    }
    //
    if (presetClass_h) {
      VALUE_H = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_2__.getShadowStyleValueFromTwPreset)(presetClass_h, color_h);
    } else {
      VALUE_H = `${horizontal_h}px ${vertical_h}px ${blur_h}px ${spread_h}px ${color_h} ${position_h === "inset" ? position_h : ""}`;
    }
    return _emotion_react__WEBPACK_IMPORTED_MODULE_10__.css`
			${WRAP_CLASSNAME} {
				box-shadow: ${VALUE};
				&:hover {
					box-shadow: ${VALUE_H};
				}
			}
		`;
  };
  const getDivWrapStyles__PaddingMargin = () => {
    const {
      margin,
      padding
    } = styles_dimensions;
    return (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      margin,
      padding,
      className: WRAP_CLASSNAME
    });
  };
  // ------------------- END WRAP DIV

  // ------------------- INNER DIV
  const getDivInnerStyles = () => {
    return _emotion_react__WEBPACK_IMPORTED_MODULE_10__.css`
			${INNER_CLASSNAME} {
			}
		`;
  };
  const getInner__contentCustomWidth = () => {
    let {
      containerWidthType,
      contentWidthType,
      contentBoxWidth
    } = general_container;
    if (containerWidthType !== "Full Width" || contentWidthType !== "Boxed") {
      return {};
    }
    if (contentBoxWidth.Desktop === "") {
      contentBoxWidth = {
        Desktop: ___WEBPACK_IMPORTED_MODULE_8__.DEMO_WCB_GLOBAL_VARIABLES.defaultContentWidth || ""
      };
    }
    const {
      value_Desktop: contentBoxWidthDesktop,
      value_Tablet: contentBoxWidthTablet,
      value_Mobile: contentBoxWidthMobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(contentBoxWidth);
    return {
      [INNER_CLASSNAME]: {
        maxWidth: contentBoxWidthMobile,
        "> .wcb-container__wrap": {},
        [`@media (min-width: ${media_tablet})`]: {
          maxWidth: contentBoxWidthTablet
        },
        [`@media (min-width: ${media_desktop})`]: {
          maxWidth: contentBoxWidthDesktop
        }
      }
    };
  };
  const getInner__flexProperties = () => {
    const {} = general_flexProperties;
    const {
      colunmGap,
      rowGap
    } = styles_dimensions;
    return (0,_utils_getFlexPropertiesStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      flexProperties: {
        ...general_flexProperties,
        colunmGap,
        rowGap
      },
      className: INNER_CLASSNAME
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getStyleBackground__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME,
      styles_background
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles__Border()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles__BoxShadow()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles__PaddingMargin()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getInner__contentCustomWidth()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getInner__flexProperties()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_9__.getAdvanveDivWrapStyles)({
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "flex"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_1___default().memo(GlobalCss));

/***/ }),

/***/ "./src/block-container/getAdvanveStyles.ts":
/*!*************************************************!*\
  !*** ./src/block-container/getAdvanveStyles.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAdvanveDivWrapStyles": () => (/* binding */ getAdvanveDivWrapStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");


const getAdvanveDivWrapStyles = _ref => {
  let {
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
  const zIndexDesktop = advance_zIndex.Desktop;
  const zIndexTablet = advance_zIndex.Tablet || zIndexDesktop;
  const zIndexMobile = advance_zIndex.Mobile || zIndexTablet;
  //
  const {
    isHiddenOnDesktop,
    isHiddenOnMobile,
    isHiddenOnTablet
  } = advance_responsiveCondition;
  return _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
		[data-is-wcb-save-common] {
			visibility: visible;
		}
		${className} {
			display: ${isHiddenOnMobile ? "none" : defaultDisplay};
			visibility: visible;
			z-index: ${zIndexMobile};
			@media (min-width: ${media_tablet}) {
				z-index: ${zIndexTablet};
				display: ${isHiddenOnTablet ? "none" : defaultDisplay};
			}
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				display: ${isHiddenOnDesktop ? "none" : defaultDisplay};
			}
		}
	`;
};

/***/ }),

/***/ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts":
/*!**************************************************************************!*\
  !*** ./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getShadowStyleValueFromTwPreset": () => (/* binding */ getShadowStyleValueFromTwPreset)
/* harmony export */ });
const getShadowStyleValueFromTwPreset = function (presetClass) {
  let color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
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
const getBackgroundColorGradientStyles = _ref => {
  let {
    className,
    background,
    backgroundHover
  } = _ref;
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


const getBorderRadiusStyles = _ref => {
  let {
    className,
    radius
  } = _ref;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  //

  let {
    value_Desktop: radiusDesktop,
    value_Tablet: radiusTablet,
    value_Mobile: radiusMobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(radius);
  const converttted = radiusValue => {
    if (typeof radiusValue === "string") {
      radiusValue = {
        bottomLeft: radiusValue,
        bottomRight: radiusValue,
        topLeft: radiusValue,
        topRight: radiusValue
      };
    }
    return radiusValue;
  };
  radiusDesktop = converttted(radiusDesktop);
  radiusTablet = converttted(radiusDesktop);
  radiusMobile = converttted(radiusDesktop);
  return {
    [`${className}`]: {
      borderTopLeftRadius: `${radiusMobile?.topLeft}`,
      borderTopRightRadius: `${radiusMobile?.topRight}`,
      borderBottomRightRadius: `${radiusMobile?.bottomRight}`,
      borderBottomLeftRadius: `${radiusMobile?.bottomLeft}`,
      [`@media (min-width: ${media_tablet})`]: {
        borderTopLeftRadius: `${radiusTablet?.topLeft}`,
        borderTopRightRadius: ` ${radiusTablet?.topRight}`,
        borderBottomRightRadius: `${radiusTablet?.bottomRight}`,
        borderBottomLeftRadius: `${radiusTablet?.bottomLeft}`
      },
      [`@media (min-width: ${media_desktop})`]: {
        borderTopLeftRadius: `${radiusDesktop?.topLeft}`,
        borderTopRightRadius: `${radiusDesktop?.topRight}`,
        borderBottomRightRadius: `${radiusDesktop?.bottomRight}`,
        borderBottomLeftRadius: `${radiusDesktop?.bottomLeft}`
      }
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
    isWithRadius = false
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
          borderTop: `${top.width} ${top.style} ${top.color}`,
          borderLeft: `${left.width} ${left.style} ${left.color}`,
          borderRight: `${right.width} ${right.style} ${right.color}`,
          borderBottom: `${bottom.width} ${bottom.style} ${bottom.color}`,
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
          border: `${width} ${style} ${color}`,
          "&:hover": {
            borderColor: `${hoverColor}`
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
      className
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


const getFlexPropertiesStyles = _ref => {
  let {
    flexProperties,
    className
  } = _ref;
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
  return {
    [`${className}`]: {
      flexDirection: flexDirection_Mobile,
      alignItems: alignItems_Mobile,
      flexWrap: flexWrap_Mobile,
      justifyContent: justifyContent_Mobile,
      columnGap: colunmGap_Mobile,
      rowGap: rowGap_Mobile,
      [`@media (min-width: ${media_tablet})`]: {
        flexDirection: flexDirection_Tablet,
        alignItems: alignItems_Tablet,
        flexWrap: flexWrap_Tablet,
        justifyContent: justifyContent_Tablet,
        columnGap: colunmGap_Tablet,
        rowGap: rowGap_Tablet
      },
      [`@media (min-width: ${media_desktop})`]: {
        flexDirection: flexDirection_Desktop,
        alignItems: alignItems_Desktop,
        flexWrap: flexWrap_Desktop,
        justifyContent: justifyContent_Desktop,
        columnGap: colunmGap_Desktop,
        rowGap: rowGap_Desktop
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFlexPropertiesStyles);

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
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");



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

  return _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
		${className} {
			padding-top: ${padding_Mobile?.top};
			padding-right: ${padding_Mobile?.right};
			padding-bottom: ${padding_Mobile?.bottom};
			padding-left: ${padding_Mobile?.left};
			margin-top: ${margin_Mobile?.top};
			margin-right: ${margin_Mobile?.right};
			margin-bottom: ${margin_Mobile?.bottom};
			margin-left: ${margin_Mobile?.left};
			@media (min-width: ${media_tablet}) {
				padding-top: ${padding_Tablet?.top};
				padding-right: ${padding_Tablet?.right};
				padding-bottom: ${padding_Tablet?.bottom};
				padding-left: ${padding_Tablet?.left};
				margin-top: ${margin_Tablet?.top};
				margin-right: ${margin_Tablet?.right};
				margin-bottom: ${margin_Tablet?.bottom};
				margin-left: ${margin_Tablet?.left};
			}
			@media (min-width: ${media_desktop}) {
				padding-top: ${padding_Desktop?.top};
				padding-right: ${padding_Desktop?.right};
				padding-bottom: ${padding_Desktop?.bottom};
				padding-left: ${padding_Desktop?.left};
				margin-top: ${margin_Desktop?.top};
				margin-right: ${margin_Desktop?.right};
				margin-bottom: ${margin_Desktop?.bottom};
				margin-left: ${margin_Desktop?.left};
			}
		}
	`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaddingMarginStyles);

/***/ }),

/***/ "./src/utils/getStyleBackground.tsx":
/*!******************************************!*\
  !*** ./src/utils/getStyleBackground.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getStyleBackground)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBackgroundColorGradientStyles */ "./src/utils/getBackgroundColorGradientStyles.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");



function getStyleBackground(_ref) {
  let {
    styles_background,
    className
  } = _ref;
  const WRAP_CLASSNAME = className;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  const getDivWrapStyles__BgColor_Gradient = () => {
    const {} = styles_background;
    return (0,_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_1__["default"])({
      background: styles_background,
      className: WRAP_CLASSNAME
    });
  };
  const getDivWrapStyles__BackgroundImage = () => {
    const {
      bgImageAttachment,
      bgImageRepeat,
      bgImageSize,
      bgType,
      focalPoint,
      imageData
    } = styles_background;
    if (bgType !== "image") {
      return {};
    }
    //
    const SRC__DESKTOP = imageData.Desktop?.mediaUrl;
    const SRC__TABLET = imageData.Tablet?.mediaUrl || SRC__DESKTOP;
    const SRC = imageData.Mobile?.mediaUrl || SRC__TABLET;

    //

    const {
      value_Desktop: BG_REPEAT__DESKTOP,
      value_Tablet: BG_REPEAT__TABLET,
      value_Mobile: BG_REPEAT
    } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__["default"])(bgImageRepeat);
    //

    const {
      value_Desktop: BG_ATTACHMENT__DESKTOP,
      value_Tablet: BG_ATTACHMENT__TABLET,
      value_Mobile: BG_ATTACHMENT
    } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__["default"])(bgImageAttachment);
    //

    const {
      value_Desktop: BG_SIZE__DESKTOP,
      value_Tablet: BG_SIZE__TABLET,
      value_Mobile: BG_SIZE
    } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__["default"])(bgImageSize);
    //

    const {
      value_Desktop: BG_FOCAL__DESKTOP,
      value_Tablet: BG_FOCAL__TABLET,
      value_Mobile: BG_FOCAL
    } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__["default"])(focalPoint);
    //
    const BG_POSITION = BG_FOCAL ? `${BG_FOCAL.x * 100}% ${BG_FOCAL.y * 100}%` : "";
    const BG_POSITION__TABLET = BG_FOCAL__TABLET ? `${BG_FOCAL__TABLET.x * 100}% ${BG_FOCAL__TABLET.y * 100}%` : "";
    const BG_POSITION__DESKTOP = BG_FOCAL__DESKTOP ? `${BG_FOCAL__DESKTOP.x * 100}% ${BG_FOCAL__DESKTOP.y * 100}%` : "";
    //
    return {
      [`${WRAP_CLASSNAME}`]: {
        backgroundImage: `url(${SRC})`,
        backgroundRepeat: `${BG_REPEAT}`,
        backgroundAttachment: `${BG_ATTACHMENT}`,
        backgroundSize: `${BG_SIZE}`,
        backgroundPosition: `${BG_POSITION}`,
        [`@media (min-width: ${media_tablet})`]: {
          backgroundImage: `url(${SRC__TABLET})`,
          backgroundRepeat: `${BG_REPEAT__TABLET}`,
          backgroundAttachment: `${BG_ATTACHMENT__TABLET}`,
          backgroundSize: `${BG_SIZE__TABLET}`,
          backgroundPosition: `${BG_POSITION__TABLET}`
        },
        [`@media (min-width: ${media_desktop})`]: {
          backgroundImage: `url(${SRC__DESKTOP})`,
          backgroundRepeat: `${BG_REPEAT__DESKTOP}`,
          backgroundAttachment: `${BG_ATTACHMENT__DESKTOP}`,
          backgroundSize: `${BG_SIZE__DESKTOP}`,
          backgroundPosition: `${BG_POSITION__DESKTOP}`
        }
      }
    };
  };
  const getDivWrapStyles__Overlay = () => {
    const {
      overlayColor,
      overlayGradient,
      overlayType
    } = styles_background;
    if (overlayType !== "color" && overlayType !== "gradient") {
      return {};
    }
    let preBgName = "";
    let bgValue = "";
    if (overlayType === "color") {
      preBgName = "backgroundColor";
      bgValue = overlayColor;
    }
    // Backgroud gradient
    if (overlayType === "gradient") {
      preBgName = "backgroundImage";
      bgValue = overlayGradient;
    }
    return {
      [`${WRAP_CLASSNAME}`]: {
        ".wcb-OverlayBackgroundByBgControl": {
          [`${preBgName}`]: `${bgValue}`,
          position: "absolute",
          inset: 0,
          zIndex: 0
        }
      }
    };
  };
  return [getDivWrapStyles__BgColor_Gradient(), getDivWrapStyles__BackgroundImage(), getDivWrapStyles__Overlay()];
}

/***/ })

}]);
//# sourceMappingURL=src_block-container_GlobalCss_tsx.js.map
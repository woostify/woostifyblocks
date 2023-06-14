"use strict";
(globalThis["webpackChunkwoostifyblocks"] = globalThis["webpackChunkwoostifyblocks"] || []).push([["src_block-container_GlobalCss_tsx"],{

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
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");












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
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_8__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.wcb-container__wrap.${uniqueId}[data-uniqueid=${uniqueId}]`;
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
    const {
      value_Desktop: minHeightDesktop,
      value_Tablet: minHeightTablet,
      value_Mobile: minHeightMobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(minHeight);

    //
    const {
      mobile_v: cWidthMobile_new,
      tablet_v: cWidthTablet_new,
      desktop_v: cWidthDesktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_10__["default"])({
      mobile_v: cWidthMobile,
      tablet_v: cWidthTablet,
      desktop_v: cWidthDesktop
    });
    const {
      mobile_v: minHeightMobile_new,
      tablet_v: minHeightTablet_new,
      desktop_v: minHeightDesktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_10__["default"])({
      mobile_v: minHeightMobile,
      tablet_v: minHeightTablet,
      desktop_v: minHeightDesktop
    });
    //

    return [{
      [WRAP_CLASSNAME]: {
        color: styles_color,
        overflow: overflow,
        //
        maxWidth: cWidthMobile_new ? cWidthMobile_new + " !important" : "",
        // width: cWidthMobile_new,
        minHeight: minHeightMobile_new,
        "&.is_wcb_container_child": {
          width: cWidthMobile_new
        },
        [`@media (min-width: ${media_tablet})`]: {
          maxWidth: cWidthTablet_new ? cWidthTablet_new + " !important" : "",
          // width: cWidthTablet_new,
          minHeight: minHeightTablet_new,
          "&.is_wcb_container_child": {
            width: cWidthTablet_new
          }
        },
        [`@media (min-width: ${media_desktop})`]: {
          maxWidth: cWidthDesktop_new ? cWidthDesktop_new + " !important" : "",
          // width: cWidthDesktop_new,
          minHeight: minHeightDesktop_new,
          "&.is_wcb_container_child": {
            width: cWidthDesktop_new
          }
        }
      }
    }];
  };
  const getDivWrapStyles__Border = () => {
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
    return _emotion_react__WEBPACK_IMPORTED_MODULE_11__.css`
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

  const getInner__contentCustomWidth = () => {
    let {
      containerWidthType,
      contentWidthType,
      contentBoxWidth
    } = general_container;

    // when container widtd = custom-width
    // if (containerWidthType !== "Full Width" || contentWidthType !== "Boxed") {
    // if (containerWidthType === "Custom" || contentWidthType !== "Boxed") {
    if (contentWidthType === "Full Width") {
      return {
        [INNER_CLASSNAME]: {
          maxWidth: "100%"
        }
      };
    }
    if (!contentBoxWidth.Desktop) {
      contentBoxWidth = {
        Desktop: ___WEBPACK_IMPORTED_MODULE_8__.DEMO_WCB_GLOBAL_VARIABLES.defaultContentWidth || ""
      };
    }
    const {
      value_Desktop: contentBoxWidthDesktop,
      value_Tablet: contentBoxWidthTablet,
      value_Mobile: contentBoxWidthMobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(contentBoxWidth);
    const {
      mobile_v: contentBoxWidthMobile_new,
      tablet_v: contentBoxWidthTablet_new,
      desktop_v: contentBoxWidthDesktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_10__["default"])({
      mobile_v: contentBoxWidthMobile,
      tablet_v: contentBoxWidthTablet,
      desktop_v: contentBoxWidthDesktop
    });
    if (!contentBoxWidthMobile_new && !contentBoxWidthTablet_new && !contentBoxWidthDesktop_new) {
      return {};
    }
    return {
      [INNER_CLASSNAME]: {
        maxWidth: contentBoxWidthMobile_new,
        [`@media (min-width: ${media_tablet})`]: contentBoxWidthTablet_new ? {
          maxWidth: contentBoxWidthTablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: contentBoxWidthDesktop_new ? {
          maxWidth: contentBoxWidthDesktop_new
        } : undefined
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
  if (!uniqueId) {
    return null;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getStyleBackground__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME,
      styles_background
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__Border()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__BoxShadow()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles__PaddingMargin()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getInner__contentCustomWidth()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getInner__flexProperties()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_9__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
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
  let {
    mobile_v,
    tablet_v,
    desktop_v
  } = _ref;
  let new_tablet_v = tablet_v;
  let new_desktop_v = desktop_v;
  if (mobile_v === tablet_v && tablet_v === desktop_v) {
    return {
      mobile_v,
      tablet_v: "",
      desktop_v: ""
    };
  }
  if (desktop_v === tablet_v || desktop_v === mobile_v) {
    new_desktop_v = "";
  }
  if (tablet_v === mobile_v) {
    new_tablet_v = "";
  }
  return {
    mobile_v,
    tablet_v: new_tablet_v,
    desktop_v: new_desktop_v
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkResponsiveValueForOptimizeCSS);

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
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



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
  return {
    [`${className}`]: {
      borderTopLeftRadius: mobile_v_topLeft,
      borderTopRightRadius: mobile_v_topRight,
      borderBottomRightRadius: mobile_v_bottomRight,
      borderBottomLeftRadius: mobile_v_bottomLeft,
      [`@media (min-width: ${media_tablet})`]: tablet_v_topLeft || tablet_v_topRight || tablet_v_bottomRight || tablet_v_bottomLeft ? {
        borderTopLeftRadius: tablet_v_topLeft,
        borderTopRightRadius: tablet_v_topRight,
        borderBottomRightRadius: tablet_v_bottomRight,
        borderBottomLeftRadius: tablet_v_bottomLeft
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: desktop_v_topLeft || desktop_v_topRight || desktop_v_bottomRight || desktop_v_bottomLeft ? {
        borderTopLeftRadius: desktop_v_topLeft,
        borderTopRightRadius: desktop_v_topRight,
        borderBottomRightRadius: desktop_v_bottomRight,
        borderBottomLeftRadius: desktop_v_bottomLeft
      } : undefined
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
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



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
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");




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

    //
    const {
      mobile_v: SRC_new,
      tablet_v: SRC__TABLET_new,
      desktop_v: SRC__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: SRC,
      tablet_v: SRC__TABLET,
      desktop_v: SRC__DESKTOP
    });
    const {
      mobile_v: BG_REPEAT_new,
      tablet_v: BG_REPEAT__TABLET_new,
      desktop_v: BG_REPEAT__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: BG_REPEAT,
      tablet_v: BG_REPEAT__TABLET,
      desktop_v: BG_REPEAT__DESKTOP
    });
    const {
      mobile_v: BG_ATTACHMENT_new,
      tablet_v: BG_ATTACHMENT__TABLET_new,
      desktop_v: BG_ATTACHMENT__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: BG_ATTACHMENT,
      tablet_v: BG_ATTACHMENT__TABLET,
      desktop_v: BG_ATTACHMENT__DESKTOP
    });
    const {
      mobile_v: BG_SIZE_new,
      tablet_v: BG_SIZE__TABLET_new,
      desktop_v: BG_SIZE__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: BG_SIZE,
      tablet_v: BG_SIZE__TABLET,
      desktop_v: BG_SIZE__DESKTOP
    });
    const {
      mobile_v: BG_POSITION_new,
      tablet_v: BG_POSITION__TABLET_new,
      desktop_v: BG_POSITION__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: BG_POSITION,
      tablet_v: BG_POSITION__TABLET,
      desktop_v: BG_POSITION__DESKTOP
    });
    //

    return {
      [`${WRAP_CLASSNAME}`]: {
        backgroundImage: SRC_new ? `url(${SRC_new})` : undefined,
        backgroundRepeat: SRC_new ? `${BG_REPEAT_new}` : undefined,
        backgroundAttachment: SRC_new ? `${BG_ATTACHMENT_new}` : undefined,
        backgroundSize: SRC_new ? `${BG_SIZE_new}` : undefined,
        backgroundPosition: SRC_new ? `${BG_POSITION_new}` : undefined,
        [`@media (min-width: ${media_tablet})`]: SRC__TABLET_new ? {
          backgroundImage: `url(${SRC__TABLET_new})`,
          backgroundRepeat: `${BG_REPEAT__TABLET_new}`,
          backgroundAttachment: `${BG_ATTACHMENT__TABLET_new}`,
          backgroundSize: `${BG_SIZE__TABLET_new}`,
          backgroundPosition: `${BG_POSITION__TABLET_new}`
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: SRC__DESKTOP_new ? {
          backgroundImage: `url(${SRC__DESKTOP_new})`,
          backgroundRepeat: `${BG_REPEAT__DESKTOP_new}`,
          backgroundAttachment: `${BG_ATTACHMENT__DESKTOP_new}`,
          backgroundSize: `${BG_SIZE__DESKTOP_new}`,
          backgroundPosition: `${BG_POSITION__DESKTOP_new}`
        } : undefined
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
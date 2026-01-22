"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-image_GlobalCss_tsx"],{

/***/ "./src/block-image/GlobalCss.tsx":
/*!***************************************!*\
  !*** ./src/block-image/GlobalCss.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderRadiusStyles */ "./src/utils/getBorderRadiusStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getBoxShadowStyles */ "./src/utils/getBoxShadowStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../________ */ "./src/________.ts");











const GlobalCss = attrs => {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_settings,
    style_caption,
    style_image,
    style_overlay
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_8__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const IMAGE_FIGURE = `${WRAP_CLASSNAME}.wp-block-wcb-image`;
  const IMAGE_CLASSNAME = `${WRAP_CLASSNAME} img`;
  const CAPTION_CLASSNAME = `${WRAP_CLASSNAME} figcaption.wp-element-caption`;
  const OVERLAY_BG_CLASSNAME = `${WRAP_CLASSNAME} .wcb-image__overlay-bg`;
  const OVERLAY_CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-image__overlay-content`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return {
      [`${WRAP_CLASSNAME}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    };
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME,
      padding: style_image.padding
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-image__overlay-wrap`,
      padding: style_image.padding
    })]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: IMAGE_CLASSNAME,
      margin: style_image.margin
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: IMAGE_CLASSNAME,
      value: general_settings.width,
      prefix: "width",
      hasUnit: false,
      unit: "px"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: IMAGE_CLASSNAME,
      value: general_settings.height,
      prefix: "height",
      hasUnit: false,
      unit: "px"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: IMAGE_CLASSNAME,
      value: general_settings.objectFit,
      prefix: "objectFit"
    }),
    //
    (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: IMAGE_CLASSNAME,
      border: style_image.border,
      isWithRadius: true
    }), (0,_utils_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${OVERLAY_BG_CLASSNAME}`,
      radius: style_image.border.radius
    }), (0,_utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: IMAGE_CLASSNAME,
      boxShadow: style_image.boxShadow
    })]
  }), general_settings.layout === "overlay" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [OVERLAY_BG_CLASSNAME]: {
        justifyContent: general_settings.contentAlignment,
        backgroundColor: style_overlay.backgroundColor,
        ":hover": {
          backgroundColor: style_overlay.backgroundColorHover
        }
      }
    }]
  }) : null, general_settings.hoverImage === "zoomin" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [IMAGE_CLASSNAME]: {
        transition: "transform 0.3s ease-in-out"
      },
      [`${WRAP_CLASSNAME}:hover img`]: {
        transform: "scale(1.05)"
      }
    }]
  }) : general_settings.hoverImage === "slide" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [IMAGE_CLASSNAME]: {
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)"
      },
      [`${WRAP_CLASSNAME}:hover img`]: {
        transform: "translateX(-20px)"
      }
    }]
  }) : general_settings.hoverImage === "grayscale" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [IMAGE_CLASSNAME]: {
        transition: "filter 0.3s ease-in-out"
      },
      [`${WRAP_CLASSNAME}:hover img`]: {
        filter: "grayscale(100%)"
      }
    }]
  }) : general_settings.hoverImage === "blur" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [IMAGE_CLASSNAME]: {
        transition: "filter 0.3s ease-in-out"
      },
      [`${WRAP_CLASSNAME}:hover img`]: {
        filter: "blur(2px)"
      }
    }]
  }) : null, general_settings.layout !== "overlay" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: CAPTION_CLASSNAME,
      value: general_settings.captionAlignment,
      prefix: "textAlign"
    }), (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: CAPTION_CLASSNAME,
      typography: style_caption.typography
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: CAPTION_CLASSNAME,
      margin: style_caption.margin
    }), {
      [CAPTION_CLASSNAME]: {
        color: style_caption.textColor
      }
    }]
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "block"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [`${IMAGE_FIGURE}.alignright`]: {
        marginLeft: 'auto',
        marginRight: 0
      },
      [`${IMAGE_FIGURE}.alignleft`]: {
        marginLeft: 0,
        marginRight: 'auto'
      }
    }]
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

/***/ })

}]);
//# sourceMappingURL=src_block-image_GlobalCss_tsx.js.map
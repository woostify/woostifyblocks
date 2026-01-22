"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-testimonials_GlobalCss_tsx"],{

/***/ "./src/block-testimonials/GlobalCss.tsx":
/*!**********************************************!*\
  !*** ./src/block-testimonials/GlobalCss.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getSingleDimensionStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getSingleDimensionStyles */ "./src/utils/getSingleDimensionStyles.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var _utils_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBorderRadiusStyles */ "./src/utils/getBorderRadiusStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getStyleBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getStyleBackground */ "./src/utils/getStyleBackground.tsx");











const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_general,
    style_arrowAndDots,
    style_backgroundAndBorder,
    style_company,
    style_content,
    style_dimension,
    style_image,
    style_rating,
    style_name,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const ITEM_CLASSNAME = `${WRAP_CLASSNAME} .wcb-testimonials__item`;
  const ITEM_NAME = `${WRAP_CLASSNAME} .wcb-testimonials__item-name`;
  const ITEM_CONTENT = `${WRAP_CLASSNAME} .wcb-testimonials__item-content`;
  const ITEM_COMPANY = `${WRAP_CLASSNAME} .wcb-testimonials__item-company`;
  const ITEM_IMAGE = `${WRAP_CLASSNAME} .wcb-testimonials__item-image`;
  const ITEM_RATING = `${WRAP_CLASSNAME} .wcb-testimonials__item-rating`;
  const SLICK_ARROW = `${WRAP_CLASSNAME} .slick-arrow`;
  const SLICK_DOTS = `${WRAP_CLASSNAME} .slick-dots`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      value: general_general.textAlignment,
      className: `${ITEM_CLASSNAME}`,
      prefix: "textAlign"
    })];
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      typography: style_name.typography,
      className: ITEM_NAME
    }), (0,_utils_getSingleDimensionStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      value: style_name.marginBottom,
      className: ITEM_NAME,
      prefix: "marginBottom"
    }), {
      [ITEM_NAME]: {
        color: style_name.textColor
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      typography: style_content.typography,
      className: ITEM_CONTENT
    }), (0,_utils_getSingleDimensionStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      value: style_content.marginBottom,
      className: ITEM_CONTENT,
      prefix: "marginBottom"
    }), {
      [ITEM_CONTENT]: {
        color: style_content.textColor
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      typography: style_company.typography,
      className: ITEM_COMPANY
    }), {
      [ITEM_COMPANY]: {
        color: style_company.textColor
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      padding: style_image.padding,
      className: ITEM_IMAGE
    }), (0,_utils_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      radius: style_image.radius,
      className: `${ITEM_IMAGE} img`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: `${ITEM_IMAGE} img`,
      prefix: "height",
      prefix_2: "width",
      value: style_image.imageSize
    }), {
      [`${ITEM_IMAGE} img`]: {
        objectFit: style_image.objectFit
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      border: style_backgroundAndBorder.border,
      className: ITEM_CLASSNAME,
      isWithRadius: true
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: ITEM_CLASSNAME,
      value: general_general.colGap,
      prefix: "paddingLeft",
      prefix_2: "paddingRight"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: ITEM_CLASSNAME,
      value: style_arrowAndDots.dotsMarginTop,
      prefix: "marginBottom"
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-testimonials__item-inner`,
      padding: style_dimension.padding
    }), (0,_utils_getStyleBackground__WEBPACK_IMPORTED_MODULE_8__["default"])({
      className: `${ITEM_CLASSNAME} .wcb-testimonials__item-background`,
      styles_background: style_backgroundAndBorder.background
    })]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      border: style_arrowAndDots.border,
      className: SLICK_ARROW,
      isWithRadius: true
    }), {
      [`${SLICK_ARROW} svg`]: {
        width: style_arrowAndDots.arrowSize,
        height: style_arrowAndDots.arrowSize,
        color: style_arrowAndDots.color
      }
    }, {
      [`${SLICK_DOTS} li`]: {
        "button:before": {
          color: style_arrowAndDots.color
        }
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getSingleDimensionStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      value: style_rating.marginBottom,
      className: ITEM_RATING,
      prefix: "marginBottom"
    }), {
      [`${ITEM_RATING} .active`]: {
        color: style_rating.color
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
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

/***/ "./src/utils/getSingleDimensionStyles.ts":
/*!***********************************************!*\
  !*** ./src/utils/getSingleDimensionStyles.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");

const getSingleDimensionStyles = ({
  className,
  prefix,
  value
}) => {
  return (0,_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className,
    prefix,
    value
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSingleDimensionStyles);

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




function getStyleBackground({
  styles_background,
  className
}) {
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
//# sourceMappingURL=src_block-testimonials_GlobalCss_tsx.js.map
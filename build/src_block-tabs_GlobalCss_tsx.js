"use strict";
(globalThis["webpackChunkwoostifyblocks"] = globalThis["webpackChunkwoostifyblocks"] || []).push([["src_block-tabs_GlobalCss_tsx"],{

/***/ "./src/block-tabs/GlobalCss.tsx":
/*!**************************************!*\
  !*** ./src/block-tabs/GlobalCss.tsx ***!
  \**************************************/
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
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBackgroundColorGradientStyles */ "./src/utils/getBackgroundColorGradientStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");











const GlobalCss = attrs => {
  const {
    uniqueId,
    style_icon,
    general_tabTitle,
    style_container,
    style_body,
    style_title,
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect,
    general_general
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const TITLE_WRAP_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__titles`;
  const TITLE_CHILD_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title_inner`;
  const TITLE_CHILD_BUTTON_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title_inner_btn`;
  const TITLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title`;
  const BODY_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tab-child__wrap`;
  const ICON_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__icon`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__contents`;
  const IconSizeConverted = {
    Desktop: `${(0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_3__["default"])(style_icon.size).value_Desktop}px`,
    Tablet: `${(0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_3__["default"])(style_icon.size).value_Tablet}px`,
    Mobile: `${(0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_3__["default"])(style_icon.size).value_Mobile}px`
  };
  const inner_getGridCol = () => {
    const {
      value_Desktop,
      value_Tablet,
      value_Mobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_3__["default"])(general_general.columns);
    return {
      [`${INNER_CLASSNAME}`]: {
        gridTemplateColumns: `repeat(${value_Mobile}, minmax(0, 1fr))`,
        [`@media (min-width: ${media_tablet})`]: {
          gridTemplateColumns: `repeat(${value_Tablet}, minmax(0, 1fr))`
        },
        [`@media (min-width: ${media_desktop})`]: {
          gridTemplateColumns: `repeat(${value_Desktop}, minmax(0, 1fr))`
        }
      }
    };
  };
  if (!uniqueId) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: INNER_CLASSNAME,
      value: style_container.colunmGap,
      prefix: "columnGap"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: INNER_CLASSNAME,
      value: style_container.rowGap,
      prefix: "rowGap"
    }), {
      [INNER_CLASSNAME]: {
        textAlign: general_general.textAlignment
      }
    }]
  }), general_general.layout === "grid" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [{
      [INNER_CLASSNAME]: {
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gap: "1rem"
      }
    }, {
      [TITLE_WRAP_CLASSNAME]: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }
    }, {
      [TITLE_CHILD_CLASSNAME]: {
        width: "100%",
        padding: "0.5rem",
        boxSizing: "border-box"
      }
    }, {
      [BODY_CLASSNAME]: {
        margin: "0px",
        padding: "1rem",
        boxSizing: "border-box"
      }
    }, {
      [TITLE_CHILD_BUTTON_CLASSNAME]: {
        padding: "0.6rem"
      }
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [(0,_utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: BODY_CLASSNAME,
      background: style_container.background
    }), (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      border: style_container.border,
      className: BODY_CLASSNAME,
      isWithRadius: true
    }), (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_8__["default"])({
      className: TITLE_CLASSNAME,
      typography: style_title.typography
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_9__["default"])({
      className: TITLE_CLASSNAME,
      padding: style_title.padding
    }), {
      [TITLE_CLASSNAME]: {
        color: style_title.color,
        backgroundColor: style_title.backgroundColor,
        ":hover, :focus, :active": {
          color: style_title.colorHover,
          backgroundColor: style_title.backgroundColorHover
        }
      },
      [`${WRAP_CLASSNAME} .wcb-tabs__title_inner.active .wcb-tabs__title`]: {
        color: style_title.colorHover,
        backgroundColor: style_title.backgroundColorHover
      }
    }, (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_8__["default"])({
      className: BODY_CLASSNAME,
      typography: style_body.typography
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_9__["default"])({
      className: BODY_CLASSNAME,
      padding: style_body.padding
    }), {
      [BODY_CLASSNAME]: {
        color: style_body.color,
        backgroundColor: style_body.backgroundColor
      }
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: `${ICON_CLASSNAME}, ${ICON_CLASSNAME}:before, ${ICON_CLASSNAME} svg`,
      value: IconSizeConverted,
      prefix: "fontSize",
      prefix_2: "height",
      prefix_3: "width"
    }), {
      [ICON_CLASSNAME]: {
        color: style_icon.color
      },
      [`${WRAP_CLASSNAME} .wcb-tabs__title_inner.active .wcb-tabs__icon`]: {
        color: style_icon.activeColor
      }
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_2__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_1___default().memo(GlobalCss));

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

/***/ })

}]);
//# sourceMappingURL=src_block-tabs_GlobalCss_tsx.js.map
"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-cta_GlobalCss_tsx"],{

/***/ "./src/block-cta/GlobalCss.tsx":
/*!*************************************!*\
  !*** ./src/block-cta/GlobalCss.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");









const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_layout,
    style_description,
    style_dimension,
    style_title,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-cta__inner`;
  const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-cta__content`;
  const TITLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-cta__title`;
  const DESC_CLASSNAME = `${WRAP_CLASSNAME} .wcb-cta__description`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return {
      [`${WRAP_CLASSNAME}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    };
  };
  const {
    value_Desktop: textAlignment_Desktop,
    value_Tablet: textAlignment_tablet,
    value_Mobile: textAlignment_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(general_layout.textAlignment);
  const {
    value_Desktop: flexDirection_Desktop,
    value_Tablet: flexDirection_tablet,
    value_Mobile: flexDirection_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(general_layout.flexDirection);
  // FLEX COL
  let ALIGN_ITEMS = {
    Desktop: textAlignment_Desktop === "left" ? "start" : textAlignment_Desktop === "right" ? "end" : "center",
    Tablet: textAlignment_tablet === "left" ? "start" : textAlignment_tablet === "right" ? "end" : "center",
    Mobile: textAlignment_mobile === "left" ? "start" : textAlignment_mobile === "right" ? "end" : "center"
  };
  if (flexDirection_Desktop === "row" || flexDirection_Desktop === "row-reverse") {
    ALIGN_ITEMS.Desktop = "center";
  }
  if (flexDirection_tablet === "row" || flexDirection_tablet === "row-reverse") {
    ALIGN_ITEMS.Tablet = "center";
  }
  if (flexDirection_mobile === "row" || flexDirection_mobile === "row-reverse") {
    ALIGN_ITEMS.Mobile = "center";
  }
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: INNER_CLASSNAME,
      value: general_layout.textAlignment,
      prefix: "textAlign"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: INNER_CLASSNAME,
      value: ALIGN_ITEMS,
      prefix: "alignItems"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: INNER_CLASSNAME,
      value: general_layout.flexDirection,
      prefix: "flexDirection"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: INNER_CLASSNAME,
      value: style_dimension.gap,
      prefix: "gap"
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: INNER_CLASSNAME,
      ...style_dimension
    })]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: CONTENT_CLASSNAME,
      value: general_layout.contentWidth,
      prefix: "width"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: TITLE_CLASSNAME,
      typography: style_title.typography
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: TITLE_CLASSNAME,
      value: style_title.marginBottom,
      prefix: "marginBottom"
    }), {
      [TITLE_CLASSNAME]: {
        color: style_title.textColor
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: DESC_CLASSNAME,
      typography: style_description.typography
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: DESC_CLASSNAME,
      value: style_description.marginBottom,
      prefix: "marginBottom"
    }), {
      [DESC_CLASSNAME]: {
        color: style_description.textColor
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
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

/***/ })

}]);
//# sourceMappingURL=src_block-cta_GlobalCss_tsx.js.map
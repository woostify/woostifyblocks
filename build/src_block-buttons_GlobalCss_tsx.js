"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-buttons_GlobalCss_tsx"],{

/***/ "./src/block-buttons/GlobalCss.tsx":
/*!*****************************************!*\
  !*** ./src/block-buttons/GlobalCss.tsx ***!
  \*****************************************/
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
    general_general,
    style_dimension,
    style_text,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    stackOrientation,
    alignment,
    size
  } = general_general;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-buttons__inner`;
  // const INNER_BUTTON = `#${uniqueId} .wcb-button__main`;
  const INNER_BUTTON_TEXT = `#${uniqueId} .wcb-button__text`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return {
      [`.${uniqueId}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    };
  };
  const {
    value_Desktop: alignment_Desktop,
    value_Tablet: alignment_tablet,
    value_Mobile: alignment_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(alignment);

  // console.log(1, "---- butons global css ---", { style_dimension });

  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [{
      [INNER_CLASSNAME]: {
        flexDirection: stackOrientation !== "none" ? "column" : "row",
        justifyContent: stackOrientation !== "none" ? undefined : alignment_mobile,
        alignItems: stackOrientation !== "none" ? alignment_mobile : "center",
        ">*": {
          flex: alignment_mobile === "stretch" ? 1 : undefined,
          display: alignment_mobile === "stretch" ? "flex" : "block"
        },
        [`@media (min-width: ${media_tablet})`]: {
          flexDirection: stackOrientation !== "none" && stackOrientation !== "Mobile" ? "column" : "row",
          justifyContent: stackOrientation !== "none" && stackOrientation !== "Mobile" ? undefined : alignment_tablet,
          alignItems: stackOrientation !== "none" && stackOrientation !== "Mobile" ? alignment_tablet : "center",
          ">*": {
            flex: alignment_tablet === "stretch" ? 1 : undefined,
            display: alignment_tablet === "stretch" ? "flex" : "block"
          }
        },
        [`@media (min-width: ${media_desktop})`]: {
          flexDirection: stackOrientation === "Desktop" ? "column" : "row",
          justifyContent: stackOrientation === "Desktop" ? undefined : alignment_Desktop,
          alignItems: stackOrientation === "Desktop" ? alignment_Desktop : "center",
          ">*": {
            flex: alignment_Desktop === "stretch" ? 1 : undefined,
            display: alignment_Desktop === "stretch" ? "flex" : "block"
          }
        }
      }
    }, (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: INNER_CLASSNAME,
      value: general_general.gap,
      prefix: "gap"
    })]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      // className: INNER_BUTTON,
      className: WRAP_CLASSNAME,
      padding: style_dimension.padding,
      margin: style_dimension.margin
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: INNER_BUTTON_TEXT,
      typography: style_text.typography
    })
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
//# sourceMappingURL=src_block-buttons_GlobalCss_tsx.js.map
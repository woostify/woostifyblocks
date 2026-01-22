"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-icon-list_GlobalCss_tsx"],{

/***/ "./src/block-icon-list/GlobalCss.tsx":
/*!*******************************************!*\
  !*** ./src/block-icon-list/GlobalCss.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");











const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_layout,
    style_desination,
    style_Icon,
    style_title,
    //
    advance_responsiveCondition,
    advance_zIndex,
    general_icon,
    style_dimension,
    advance_motionEffect
  } = attrs;
  // Get current device type
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon-list__icon-wrap`;
  const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon-list__content`;
  if (!uniqueId) {
    return null;
  }

  // Convert text alignment to flex alignment
  const getFlexAlignment = alignment => {
    switch (alignment) {
      case "center":
        return "center";
      case "right":
        return "flex-end";
      case "left":
      default:
        return "flex-start";
    }
  };
  const {
    textAlignment
  } = general_layout;
  const {
    value_Desktop,
    value_Mobile,
    value_Tablet
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(textAlignment);
  const {
    mobile_v: value_Mobile_new,
    tablet_v: value_Tablet_new,
    desktop_v: value_Desktop_new
  } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
    mobile_v: value_Mobile,
    tablet_v: value_Tablet,
    desktop_v: value_Desktop
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [`${INNER_CLASSNAME}`]: {
        display: "flex",
        flexDirection: general_layout.layout === "vertical" ? "column" : "row"
      },
      ".wcb-icon-list__icon-wrap, .wcb-icon-list__content": {
        alignSelf: general_icon.verticalAlignment === "middle" ? "center" : undefined
      },
      ".wcb-icon-list__icon-wrap": {
        order: general_icon.iconPosition === "leftOfTitle" ? "0" : "2"
      },
      ".wcb-icon-list__content-title-wrap": {
        display: general_icon.iconPosition === "leftOfTitle" || general_icon.iconPosition === "rightOfTitle" ? "flex" : "block"
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [`${CONTENT_CLASSNAME}`]: {
        display: "flex",
        flexDirection: general_layout.layout === "vertical" ? "column" : "row",
        ...(value_Mobile_new || value_Tablet_new || value_Desktop_new ? general_layout.layout === "vertical" ? {
          alignItems: getFlexAlignment(value_Mobile_new),
          [`@media (min-width: ${media_tablet})`]: value_Tablet_new ? {
            alignItems: getFlexAlignment(value_Tablet_new)
          } : undefined,
          [`@media (min-width: ${media_desktop})`]: value_Desktop_new ? {
            alignItems: getFlexAlignment(value_Desktop_new)
          } : undefined
        } : {
          justifyContent: getFlexAlignment(value_Mobile_new),
          [`@media (min-width: ${media_tablet})`]: value_Tablet_new ? {
            justifyContent: getFlexAlignment(value_Tablet_new)
          } : undefined,
          [`@media (min-width: ${media_desktop})`]: value_Desktop_new ? {
            justifyContent: getFlexAlignment(value_Desktop_new)
          } : undefined
        } : {})
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: WRAP_CLASSNAME,
      margin: style_dimension.margin,
      padding: style_dimension.padding
    })
  }), general_icon.enableIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
      margin: style_Icon.dimensions.margin
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
      padding: style_Icon.dimensions.padding
    }), (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      border: style_Icon.border,
      className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
      isWithRadius: true
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-full`,
      value: style_Icon.iconSize,
      prefix: "width",
      prefix_2: "fontSize"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-full`]: {
        color: style_Icon.color,
        ":hover": {
          color: style_Icon.hoverColor
        }
      }
    }]
  }) : null, general_layout.enableTitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_title.typography,
      className: `${WRAP_CLASSNAME} .wcb-icon-list__heading`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-list__heading`,
      value: style_title.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-list__heading`]: {
        color: style_title.textColor
      },
      [`${WRAP_CLASSNAME} .wcb-icon-list__heading:hover`]: {
        color: style_title.textColorHover
      }
    }]
  }) : null, general_layout.enablePrefix ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_desination.typography,
      className: `${WRAP_CLASSNAME} .wcb-icon-list__designation`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-list__designation`,
      value: style_desination.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-list__designation`]: {
        color: style_desination.textColor
      }
    }]
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_responsiveCondition,
      advance_motionEffect,
      advance_zIndex,
      className: WRAP_CLASSNAME
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ })

}]);
//# sourceMappingURL=src_block-icon-list_GlobalCss_tsx.js.map
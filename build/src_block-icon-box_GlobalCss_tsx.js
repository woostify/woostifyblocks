"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-icon-box_GlobalCss_tsx"],{

/***/ "./src/block-icon-box/GlobalCss.tsx":
/*!******************************************!*\
  !*** ./src/block-icon-box/GlobalCss.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");









const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_layout,
    style_description,
    style_desination,
    style_Icon,
    style_title,
    //
    advance_responsiveCondition,
    advance_zIndex,
    general_icon,
    style_dimension,
    style_separator,
    general_separator,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: WRAP_CLASSNAME,
      value: general_layout.textAlignment,
      prefix: "textAlign"
    }), {
      [`${WRAP_CLASSNAME}`]: {
        display: general_icon.iconPosition === "left" || general_icon.iconPosition === "right" ? "flex" : "block",
        flexDirection: general_icon.stackOn === "mobile" || general_icon.stackOn === "tablet" ? general_icon.iconPosition === "right" ? "column-reverse" : "column" : undefined,
        ".wcb-icon-box__icon-wrap, .wcb-icon-box__content": {
          alignSelf: general_icon.verticalAlignment === "middle" ? "center" : undefined
        },
        ".wcb-icon-box__content-title-wrap": {
          display: general_icon.iconPosition === "leftOfTitle" || general_icon.iconPosition === "rightOfTitle" ? "flex" : "block"
        },
        [`@media (min-width: ${media_tablet})`]: {
          flexDirection: general_icon.stackOn === "mobile" ? "row" : undefined
        },
        [`@media (min-width: ${media_desktop})`]: {
          flexDirection: "row"
        }
      }
    }];
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: WRAP_CLASSNAME,
      margin: style_dimension.margin,
      padding: style_dimension.padding
    })
  }), general_icon.enableIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__icon-wrap`,
      margin: style_Icon.dimensions.margin
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__icon`,
      padding: style_Icon.dimensions.padding
    }), (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      border: style_Icon.border,
      className: `${WRAP_CLASSNAME} .wcb-icon-box__icon`,
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
  }) : null, general_layout.enablePrefix ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_desination.typography,
      className: `${WRAP_CLASSNAME} .wcb-icon-box__designation`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__designation`,
      value: style_desination.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-box__designation`]: {
        color: style_desination.textColor
      }
    }]
  }) : null, general_layout.enableTitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_title.typography,
      className: `${WRAP_CLASSNAME} .wcb-icon-box__heading`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__heading`,
      value: style_title.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-box__heading`]: {
        color: style_title.textColor
      }
    }]
  }) : null, general_separator.enableSeparator ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      border: {
        mainSettings: style_separator.border
      },
      className: `${WRAP_CLASSNAME} .wcb-icon-box__separator`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__separator`,
      value: style_separator.width,
      prefix: "width"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__separator`,
      value: style_separator.marginBottom,
      prefix: "marginBottom"
    })]
  }) : null, general_layout.enableDescription ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_description.typography,
      className: `${WRAP_CLASSNAME} .wcb-icon-box__description`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__description`,
      value: style_description.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-box__description`]: {
        color: style_description.textColor
      }
    }]
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
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
//# sourceMappingURL=src_block-icon-box_GlobalCss_tsx.js.map
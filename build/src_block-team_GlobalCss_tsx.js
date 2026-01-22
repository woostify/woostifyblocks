"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-team_GlobalCss_tsx"],{

/***/ "./src/block-team/GlobalCss.tsx":
/*!**************************************!*\
  !*** ./src/block-team/GlobalCss.tsx ***!
  \**************************************/
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
    general_image,
    general_layout,
    general_socials,
    style_description,
    style_desination,
    style_image,
    style_socialIcons,
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

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: WRAP_CLASSNAME,
      value: general_layout.textAlignment,
      prefix: "textAlign"
    }), {
      [`${WRAP_CLASSNAME}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    }];
  };
  const isImageBeSide = general_image.imagePosition === "left" || general_image.imagePosition === "right";
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: getDivWrapStyles()
  }), general_image.isShowImage && general_image?.image?.mediaId && isImageBeSide ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [{
      [`${WRAP_CLASSNAME}`]: {
        display: general_image.stackOn !== "none" ? "block" : "flex",
        [`@media (min-width: ${media_tablet})`]: {
          display: general_image.stackOn === "tablet" ? "block" : "flex"
        },
        [`@media (min-width: ${media_desktop})`]: {
          display: "flex"
        }
      }
    }]
  }) : null, general_image.isShowImage && general_image?.image?.mediaId ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      border: style_image.border,
      className: `${WRAP_CLASSNAME} .wcb-team__image`,
      isWithRadius: true
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-team__image`,
      margin: style_image.margin
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-team__image`,
      value: style_image.imageSize,
      prefix: "width"
    }), {
      [`${WRAP_CLASSNAME} .wcb-team__image, ${WRAP_CLASSNAME} .wcb-team__content-wrap`]: {
        alignSelf: general_image.imageAlignSelf
      }
    }]
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_title.typography,
      className: `${WRAP_CLASSNAME} .wcb-team__heading`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-team__heading`,
      value: style_title.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-team__heading`]: {
        color: style_title.textColor
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_desination.typography,
      className: `${WRAP_CLASSNAME} .wcb-team__designation`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-team__designation`,
      value: style_desination.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-team__designation`]: {
        color: style_desination.textColor
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_description.typography,
      className: `${WRAP_CLASSNAME} .wcb-team__description`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-team__description`,
      value: style_description.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-team__description`]: {
        color: style_description.textColor
      }
    }]
  }), general_socials.enableSocials ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-full`,
      value: style_socialIcons.iconSize,
      prefix: "width",
      prefix_2: "fontSize"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-team__socials-icons > a`,
      value: style_socialIcons.iconSpacing,
      prefix: "marginLeft"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-full`]: {
        color: style_socialIcons.color,
        ":hover": {
          color: style_socialIcons.hoverColor
        }
      }
    }]
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
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
//# sourceMappingURL=src_block-team_GlobalCss_tsx.js.map
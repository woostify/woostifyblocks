"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-faq_GlobalCss_tsx"],{

/***/ "./src/block-faq/GlobalCss.tsx":
/*!*************************************!*\
  !*** ./src/block-faq/GlobalCss.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBackgroundColorGradientStyles */ "./src/utils/getBackgroundColorGradientStyles.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");











const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_general,
    general_icon,
    style_answer,
    style_container,
    style_question,
    style_icon,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_5__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-faq__inner`;
  const FAQ_CHILD_WRAP = `${WRAP_CLASSNAME} .wcb-faq-child__wrap`;
  const FAQ_CHILD_QUESTION = `${WRAP_CLASSNAME} .wcb-faq-child__question`;
  const FAQ_CHILD_QUESTION_TEXT = `${WRAP_CLASSNAME} .wcb-faq-child__question-text`;
  const FAQ_CHILD_ANSWER = `${WRAP_CLASSNAME} .wcb-faq-child__answer`;
  const FAQ_CHILD_ANSWER_TEXT = `${WRAP_CLASSNAME} .wcb-faq-child__answer-text`;
  const FAQ_CHILD_ICON = `${WRAP_CLASSNAME} .wcb-faq-child__icon`;
  const FAQ_CHILD_SEPARATOR = `${WRAP_CLASSNAME} .wcb-faq-child__separator`;

  //

  let {
    value_Desktop: iconSize_desktop,
    value_Tablet: iconSize_tablet,
    value_Mobile: iconSize_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_3__["default"])(style_icon.size);
  const IconSizeConverted = {
    Desktop: iconSize_desktop + "px",
    Tablet: iconSize_tablet + "px",
    Mobile: iconSize_mobile + "px"
  };

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return {
      [`${WRAP_CLASSNAME}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    };
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
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: INNER_CLASSNAME,
      value: style_container.colunmGap,
      prefix: "columnGap"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: INNER_CLASSNAME,
      value: style_container.rowGap,
      prefix: "rowGap"
    }), {
      [INNER_CLASSNAME]: {
        textAlign: general_general.textAlignment
      }
    }]
  }), general_general.layout === "grid" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [inner_getGridCol(), {
      [FAQ_CHILD_QUESTION]: {
        display: "block"
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: FAQ_CHILD_WRAP,
      background: style_container.background
    }), (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      border: style_container.border,
      className: FAQ_CHILD_WRAP,
      isWithRadius: true
    }), (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      border: style_container.border,
      className: FAQ_CHILD_SEPARATOR,
      isWithRadius: true
    }), {
      [FAQ_CHILD_WRAP]: {
        height: general_general.layout === "grid" && !style_container.equalHeight ? "fit-content" : undefined
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: FAQ_CHILD_QUESTION,
      typography: style_question.typography
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_8__["default"])({
      className: FAQ_CHILD_QUESTION,
      padding: style_question.padding
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: FAQ_CHILD_QUESTION,
      value: style_icon.colGap,
      prefix: "gap"
    }), {
      [FAQ_CHILD_QUESTION]: {
        color: style_question.color,
        backgroundColor: style_question.backgroundColor,
        ":hover, :focus, :active": {
          color: style_question.colorHover,
          backgroundColor: style_question.backgroundColorHover
        }
      },
      [`${WRAP_CLASSNAME} .wcb-faq-child__wrap.active .wcb-faq-child__question`]: {
        color: style_question.colorHover,
        backgroundColor: style_question.backgroundColorHover
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${FAQ_CHILD_ICON}, ${FAQ_CHILD_ICON}:before, ${FAQ_CHILD_ICON} svg`,
      value: IconSizeConverted,
      prefix: "fontSize",
      prefix_2: "height",
      prefix_3: "width"
    }), {
      [FAQ_CHILD_ICON]: {
        color: style_icon.color
      },
      [`${WRAP_CLASSNAME} .wcb-faq-child__wrap.active`]: {
        ".wcb-faq-child__icon": {
          color: style_icon.activeColor
        }
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: FAQ_CHILD_ANSWER,
      typography: style_answer.typography
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_8__["default"])({
      className: FAQ_CHILD_ANSWER,
      padding: style_answer.padding
    }), {
      [FAQ_CHILD_ANSWER]: {
        color: style_answer.color,
        backgroundColor: style_answer.backgroundColor
        // display: general_general.collapseOtherItems ? "none" : "block",
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME
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

/***/ })

}]);
//# sourceMappingURL=src_block-faq_GlobalCss_tsx.js.map
"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-icon-child_GlobalCss_tsx"],{

/***/ "./src/block-icon-child/GlobalCss.tsx":
/*!********************************************!*\
  !*** ./src/block-icon-child/GlobalCss.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");








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
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}][data-block-type="icon-item"]`;
  const ICON_CLASS = `${WRAP_CLASSNAME} .wcb-icon-list__icon`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return [{
      [`${WRAP_CLASSNAME}`]: {
        ".wcb-icon-list__icon-wrap, .wcb-icon-list__content": {
          alignSelf: general_icon.verticalAlignment === "middle" ? "center" : undefined
        },
        ".wcb-icon-list__icon-wrap": {
          order: general_icon.iconPosition === "leftOfTitle" ? "0" : "2"
        },
        ".wcb-icon-list__content-title-wrap": {
          display: general_icon.iconPosition === "leftOfTitle" || general_icon.iconPosition === "rightOfTitle" ? "flex" : "block"
        }
      }
    }];
  };

  // ICON CSS
  const renderIconCss = () => {
    const {
      color,
      hoverColor,
      iconSize,
      dimensions,
      border
    } = style_Icon;
    return `
			${ICON_CLASS} {
				color: ${color};
				font-size: ${iconSize.Desktop};
				padding: ${dimensions.padding.Desktop.top} ${dimensions.padding.Desktop.right} ${dimensions.padding.Desktop.bottom} ${dimensions.padding.Desktop.left};
				margin: ${dimensions.margin.Desktop.top} ${dimensions.margin.Desktop.right} ${dimensions.margin.Desktop.bottom} ${dimensions.margin.Desktop.left};
				border-radius: ${border.radius.Desktop};
			}
			${ICON_CLASS}:hover {
				color: ${hoverColor || color};
			}

			@media (max-width: 768px) {
				${ICON_CLASS} {
					font-size: ${iconSize.Tablet};
					border-radius: ${border.radius.Tablet};
				}
			}

			@media (max-width: 576px) {
				${ICON_CLASS} {
					font-size: ${iconSize.Mobile};
					border-radius: ${border.radius.Mobile};
				}
			}
		`;
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: WRAP_CLASSNAME,
      margin: style_dimension.margin,
      padding: style_dimension.padding
    })
  }), general_icon.enableIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-list__icon-wrap`,
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
  }) : null, general_layout.enableTitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.Global, {
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
  }) : null, general_layout.enablePrefix ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.Global, {
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
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_responsiveCondition,
      advance_motionEffect,
      advance_zIndex,
      className: WRAP_CLASSNAME
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, renderIconCss()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ })

}]);
//# sourceMappingURL=src_block-icon-child_GlobalCss_tsx.js.map
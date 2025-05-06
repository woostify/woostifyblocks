"use strict";
(globalThis["webpackChunkwoostifyblocks"] = globalThis["webpackChunkwoostifyblocks"] || []).push([["src_block-form_GlobalCss_tsx"],{

/***/ "./src/block-container/getAdvanveStyles.ts":
/*!*************************************************!*\
  !*** ./src/block-container/getAdvanveStyles.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdvanveDivWrapStyles: () => (/* binding */ getAdvanveDivWrapStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getAdvanveDivWrapStyles = ({
  advance_motionEffect,
  advance_zIndex,
  advance_responsiveCondition,
  className,
  defaultDisplay
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  //
  //
  try {
    const thisELs = document.querySelectorAll(className);
    if (advance_motionEffect && advance_motionEffect.entranceAnimation && thisELs && thisELs.length) {
      console.log(222, {
        thisELs
      });
      thisELs.forEach(element => {
        // remove old class
        const regex = /\banimate__\S+/g;
        const classRemoved = element?.className.replace(regex, "");
        element.setAttribute("class", classRemoved);

        // add new class
        setTimeout(() => {
          element?.classList.add("animate__animated", `animate__${advance_motionEffect?.entranceAnimation}`, `animate__${advance_motionEffect?.animationDuration}`, `animate__delay-${advance_motionEffect?.animationDelay}ms`, `animate__repeat-${advance_motionEffect?.repeat}`);
        }, 50);
      });
    }
  } catch (error) {
    console.log(123, "error, advance_motionEffect", error);
  }
  const {
    mobile_v: zIndexMobile,
    tablet_v: zIndexTablet,
    desktop_v: zIndexDesktop
  } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__["default"])({
    mobile_v: advance_zIndex.Mobile || advance_zIndex.Tablet || advance_zIndex.Desktop,
    tablet_v: advance_zIndex.Tablet || advance_zIndex.Desktop,
    desktop_v: advance_zIndex.Desktop
  });
  //

  const {
    mobile_v: isHiddenOnMobile,
    tablet_v: isHiddenOnTablet,
    desktop_v: isHiddenOnDesktop
  } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__["default"])({
    mobile_v: advance_responsiveCondition.isHiddenOnMobile,
    tablet_v: advance_responsiveCondition.isHiddenOnTablet,
    desktop_v: advance_responsiveCondition.isHiddenOnDesktop
  });
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)`
		${className} {
			display: ${isHiddenOnMobile ? "none" : defaultDisplay};
			visibility: visible;
			z-index: ${zIndexMobile};
			@media (min-width: ${media_tablet}) {
				z-index: ${zIndexTablet};
				display: ${isHiddenOnTablet !== "" ? isHiddenOnTablet ? "none" : defaultDisplay : ""};
			}
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				display: ${isHiddenOnDesktop !== "" ? isHiddenOnDesktop ? "none" : defaultDisplay : ""};
			}
		}
	`;
};

/***/ }),

/***/ "./src/block-form/GlobalCss.tsx":
/*!**************************************!*\
  !*** ./src/block-form/GlobalCss.tsx ***!
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
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getCssProperyHasResponsive */ "./src/utils/getCssProperyHasResponsive.ts");









const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button,
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
  const BOX_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__box`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__inner`;
  const INPUT_CLASSNAME = `${WRAP_CLASSNAME} [type="text"], ${WRAP_CLASSNAME} [type="email"], ${WRAP_CLASSNAME} [type="url"], ${WRAP_CLASSNAME} [type="password"], ${WRAP_CLASSNAME} [type="number"], ${WRAP_CLASSNAME} [type="date"], ${WRAP_CLASSNAME} [type="datetime-local"], ${WRAP_CLASSNAME} [type="month"], ${WRAP_CLASSNAME} [type="search"], ${WRAP_CLASSNAME} [type="tel"], ${WRAP_CLASSNAME} [type="time"], ${WRAP_CLASSNAME} [type="week"], ${WRAP_CLASSNAME} [multiple], ${WRAP_CLASSNAME} select, ${WRAP_CLASSNAME} textarea`;
  const CHECKBOX_RADIO_CLASSNAME = `${WRAP_CLASSNAME} .wcb-radio__option, ${WRAP_CLASSNAME} .wcb-checkbox__option`;
  const CHECKBOX_RADIO_INPUT_CLASSNAME = `${WRAP_CLASSNAME} input[type="checkbox"], ${WRAP_CLASSNAME} input[type="radio"]`;
  const TOGGLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-toggle__switch`;
  const SUBMIT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__btn-submit`;
  const SUCCESS_MESS_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__successMessageText`;
  const ERROR_MESS_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__errorMessageText`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    const {
      textAlignment
    } = general_general;
    const {
      position,
      textAlignment: btnAlignment
    } = general_submit_button;
    const {
      value_desktop: textAlignment_desktop,
      value_tablet: textAlignment_tablet,
      value_mobile: textAlignment_mobile
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: textAlignment
    });
    const {
      value_desktop: btnAlignment_desktop,
      value_tablet: btnAlignment_tablet,
      value_mobile: btnAlignment_mobile
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: btnAlignment
    });
    const boxflexDirectionType = position => {
      if (position === "right") return "row";
      if (position === "left") return "row-reverse";
      if (position === "top") return "column-reverse";
      return "column";
    };
    const {
      value_desktop: position_desktop,
      value_tablet: position_tablet,
      value_mobile: position_mobile
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: position
    });
    const isFlexRow = position => {
      if (position === "right" || position === "left") return true;
      return false;
    };
    return {
      [`${WRAP_CLASSNAME}`]: {
        textAlign: textAlignment_mobile,
        ".wcb-form__btn-submit-wrap": !isFlexRow(position_mobile) ? {
          justifyContent: btnAlignment_mobile
        } : {
          alignItems: btnAlignment_mobile
        },
        [`@media (min-width: ${media_tablet})`]: {
          textAlign: textAlignment_tablet,
          ".wcb-form__btn-submit-wrap": !isFlexRow(position_tablet) ? {
            justifyContent: btnAlignment_tablet
          } : {
            alignItems: btnAlignment_tablet
          }
        },
        [`@media (min-width: ${media_desktop})`]: {
          textAlign: textAlignment_desktop,
          ".wcb-form__btn-submit-wrap": !isFlexRow(position_desktop) ? {
            justifyContent: btnAlignment_desktop
          } : {
            alignItems: btnAlignment_desktop
          }
        }
      },
      [`${BOX_CLASSNAME}`]: {
        flexDirection: boxflexDirectionType(position_mobile),
        [`@media (min-width: ${media_tablet})`]: {
          flexDirection: boxflexDirectionType(position_tablet)
        },
        [`@media (min-width: ${media_desktop})`]: {
          flexDirection: boxflexDirectionType(position_desktop)
        }
      }
    };
  };
  const renderCheckboxRadioSize = () => {
    const {
      value_desktop: size_desktop,
      value_mobile: size_mobile,
      value_tablet: size_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: style_checkbox_radio_toggle.checkboxRadioSize
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
      styles: {
        [`${CHECKBOX_RADIO_INPUT_CLASSNAME} `]: {
          width: size_mobile,
          height: size_mobile,
          [`@media (min-width: ${media_tablet})`]: {
            width: size_tablet,
            height: size_tablet
          },
          [`@media (min-width: ${media_desktop})`]: {
            width: size_desktop,
            height: size_desktop
          }
        }
      }
    });
  };
  const renderToggleSize = () => {
    const {
      value_desktop: size_desktop,
      value_mobile: size_mobile,
      value_tablet: size_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: style_checkbox_radio_toggle.toggleSize
    });
    const mobileSize = size_mobile + "rem";
    const tabletSize = size_tablet + "rem";
    const desktopSize = size_desktop + "rem";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
      styles: {
        [`${TOGGLE_CLASSNAME}`]: {
          ".wcb-toggle__slider::before": {
            width: mobileSize,
            height: mobileSize
          },
          "input:checked + .wcb-toggle__slider:before": {
            transform: `translateX(${mobileSize})`
          },
          height: `calc(${mobileSize} + 8px)`,
          width: `calc((${mobileSize} * 2) + 8px)`,
          [`@media (min-width: ${media_tablet})`]: {
            ".wcb-toggle__slider::before": {
              width: tabletSize,
              height: tabletSize
            },
            "input:checked + .wcb-toggle__slider:before": {
              transform: `translateX(${tabletSize})`
            },
            height: `calc(${tabletSize} + 8px)`,
            width: `calc((${tabletSize} * 2) + 8px)`
          },
          [`@media (min-width: ${media_desktop})`]: {
            ".wcb-toggle__slider::before": {
              width: desktopSize,
              height: desktopSize
            },
            "input:checked + .wcb-toggle__slider:before": {
              transform: `translateX(${desktopSize})`
            },
            height: `calc(${desktopSize} + 8px)`,
            width: `calc((${desktopSize} * 2) + 8px)`
          }
        }
      }
    });
  };
  const renderDivInnerSpacingGap = () => {
    const {
      value_mobile: rowGap_mobile,
      value_desktop: rowGap_desktop,
      value_tablet: rowGap_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: style_spacing.rowGap
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
      styles: {
        [`${INNER_CLASSNAME}, ${BOX_CLASSNAME}`]: {
          rowGap: rowGap_mobile,
          [`@media (min-width: ${media_tablet})`]: {
            rowGap: rowGap_tablet
          },
          [`@media (min-width: ${media_desktop})`]: {
            rowGap: rowGap_desktop
          }
        }
      }
    });
  };
  const renderLabelMarginBottom = () => {
    const {
      value_mobile: bottomMargin_mobile,
      value_desktop: bottomMargin_desktop,
      value_tablet: bottomMargin_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: style_spacing.labelBottomMargin
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
      styles: {
        [`${WRAP_CLASSNAME} .wcb-form__label`]: {
          marginBottom: bottomMargin_mobile,
          [`@media (min-width: ${media_tablet})`]: {
            marginBottom: bottomMargin_tablet
          },
          [`@media (min-width: ${media_desktop})`]: {
            marginBottom: bottomMargin_desktop
          }
        }
      }
    });
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME}`,
      border: style_spacing.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME}`,
      padding: style_spacing.padding
    })
  }), renderDivInnerSpacingGap(), renderLabelMarginBottom(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-form__label`,
      typography: style_label.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [`${WRAP_CLASSNAME} .wcb-form__label`]: {
        color: style_label.textColor,
        display: general_general.isShowLabel ? "block" : "none",
        ":hover": {
          color: style_label.textColorHover
        }
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: INPUT_CLASSNAME,
      typography: style_input.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${INPUT_CLASSNAME}`,
      border: style_input.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${INPUT_CLASSNAME}`,
      padding: style_input.padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [INPUT_CLASSNAME]: {
        color: style_input.textColor,
        backgroundColor: style_input.bgAndPlaceholder.Normal.backgroundColor,
        "::placeholder": {
          color: style_input.bgAndPlaceholder.Normal.placeholderColor
        },
        ":hover": {
          backgroundColor: style_input.bgAndPlaceholder.Hover.backgroundColor,
          "::placeholder": {
            color: style_input.bgAndPlaceholder.Hover.placeholderColor
          }
        },
        ":active, :focus": {
          backgroundColor: style_input.bgAndPlaceholder.Active.backgroundColor,
          "::placeholder": {
            color: style_input.bgAndPlaceholder.Active.placeholderColor
          }
        }
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${CHECKBOX_RADIO_INPUT_CLASSNAME}, ${TOGGLE_CLASSNAME} .wcb-toggle__slider, ${TOGGLE_CLASSNAME} .wcb-toggle__slider::before`,
      border: style_checkbox_radio_toggle.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [CHECKBOX_RADIO_INPUT_CLASSNAME]: {
        backgroundColor: style_checkbox_radio_toggle.colors.Normal.backgroundColor,
        ":checked": {
          backgroundColor: style_checkbox_radio_toggle.colors.Active.backgroundColor
        }
      },
      [`${TOGGLE_CLASSNAME}`]: {
        ".wcb-toggle__slider": {
          backgroundColor: style_checkbox_radio_toggle.colors.Normal.backgroundColor
        },
        "input:checked + .wcb-toggle__slider": {
          backgroundColor: style_checkbox_radio_toggle.colors.Active.backgroundColor
        }
      }
    }
  }), renderCheckboxRadioSize(), renderToggleSize(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${SUBMIT_CLASSNAME}`,
      border: style_submit_button.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: SUBMIT_CLASSNAME,
      typography: style_submit_button.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [SUBMIT_CLASSNAME]: {
        color: style_submit_button.colorAndBackgroundColor?.Normal?.color,
        backgroundColor: style_submit_button.colorAndBackgroundColor?.Normal?.backgroundColor,
        ":hover": {
          color: style_submit_button.colorAndBackgroundColor?.Hover?.color,
          backgroundColor: style_submit_button.colorAndBackgroundColor?.Hover?.backgroundColor
        }
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${SUBMIT_CLASSNAME}`,
      padding: style_submit_button.padding,
      margin: style_submit_button.margin
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${SUCCESS_MESS_CLASSNAME}, ${ERROR_MESS_CLASSNAME}`,
      typography: style_messages.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${SUCCESS_MESS_CLASSNAME}`,
      border: style_messages.Success.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${SUCCESS_MESS_CLASSNAME}, ${ERROR_MESS_CLASSNAME}`,
      margin: style_messages.margin
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [`${SUCCESS_MESS_CLASSNAME}`]: {
        color: style_messages.Success.color,
        backgroundColor: style_messages.Success.backgroundColor
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${ERROR_MESS_CLASSNAME}`,
      border: style_messages.Error.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [`${ERROR_MESS_CLASSNAME}`]: {
        color: style_messages.Error.color,
        backgroundColor: style_messages.Error.backgroundColor
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "flex"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/utils/checkResponsiveValueForOptimizeCSS.ts":
/*!*********************************************************!*\
  !*** ./src/utils/checkResponsiveValueForOptimizeCSS.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkResponsiveValueForOptimizeCSS = ({
  mobile_v = null,
  tablet_v = null,
  desktop_v = null
}) => {
  let new_tablet_v = tablet_v;
  let new_desktop_v = desktop_v;
  if (mobile_v === tablet_v && tablet_v === desktop_v) {
    return {
      mobile_v,
      tablet_v: null,
      desktop_v: null
    };
  }
  if (desktop_v === tablet_v || desktop_v === mobile_v) {
    new_desktop_v = null;
  }
  if (tablet_v === mobile_v) {
    new_tablet_v = null;
  }
  return {
    mobile_v: mobile_v !== null && mobile_v !== void 0 ? mobile_v : null,
    tablet_v: new_tablet_v !== null && new_tablet_v !== void 0 ? new_tablet_v : null,
    desktop_v: new_desktop_v !== null && new_desktop_v !== void 0 ? new_desktop_v : null
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkResponsiveValueForOptimizeCSS);

/***/ }),

/***/ "./src/utils/color.js":
/*!****************************!*\
  !*** ./src/utils/color.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wcbCreateColor: () => (/* binding */ wcbCreateColor),
/* harmony export */   wcbGetRgb: () => (/* binding */ wcbGetRgb)
/* harmony export */ });
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-rgba */ "./node_modules/color-rgba/index.mjs");


/**
 * Creates a new random color.
 */
const wcbCreateColor = () => {
  return `#${((1 << 24) * Math.random() | 0).toString(16)}`;
};
/**
 * Returns an rgb string of the hex color.
 *
 * @param {string} hex Color
 */
const wcbGetRgb = hex => {
  const rgbColor = (0,color_rgba__WEBPACK_IMPORTED_MODULE_0__["default"])(hex.match(/^#/) ? hex : `#${hex}`);
  rgbColor.splice(3, 1);
  return rgbColor.join(', ');
};

/***/ }),

/***/ "./src/utils/font.ts":
/*!***************************!*\
  !*** ./src/utils/font.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLinkTagWithGoogleFont: () => (/* binding */ createLinkTagWithGoogleFont),
/* harmony export */   getGoogleFontURL: () => (/* binding */ getGoogleFontURL),
/* harmony export */   isGoogleFontEnqueued: () => (/* binding */ isGoogleFontEnqueued),
/* harmony export */   isWebFont: () => (/* binding */ isWebFont),
/* harmony export */   loadGoogleFont: () => (/* binding */ loadGoogleFont)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/utils/index.js");

const getGoogleFontURL = fontName => {
  const family = fontName.replace(/ /g, "+");
  const subset = "";
  return `https://fonts.googleapis.com/css?family=${family}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic${subset}`;
};
const isWebFont = fontName => fontName && !fontName?.match(/^(sans[-+]serif|serif|monospace|serif-alt)$/i);

/**
 * Load the stylesheet of a Google Font.
 *
 * @param {string} fontName The name of the font
 */
const loadGoogleFont = fontName => {
  setTimeout(() => {
    const _loadGoogleFont = head => {
      if (head && isWebFont(fontName)) {
        if (isGoogleFontEnqueued(fontName, head)) {
          return;
        }
        const link = createLinkTagWithGoogleFont(fontName);
        head.appendChild(link);
        console.log(321, "________load-gg-font_____", {
          fontName,
          link
        });
      }
    };
    const headElement = (0,___WEBPACK_IMPORTED_MODULE_0__.getDocumentHead)();
    _loadGoogleFont(headElement);
    if (headElement !== document.querySelector("head")) {
      _loadGoogleFont(document.querySelector("head"));
    }
  }, 50);
};
const createLinkTagWithGoogleFont = (fontName = "") => {
  const link = document.createElement("link");
  link.classList.add("wcb-google-fonts");
  link.setAttribute("data-font-name", fontName);
  link.setAttribute("href", getGoogleFontURL(fontName));
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  return link;
};
const isGoogleFontEnqueued = (fontName, head = document.querySelector("head")) => {
  return head.querySelector(`[data-font-name="${fontName}"]`);
};

/***/ }),

/***/ "./src/utils/getBorderRadiusStyles.ts":
/*!********************************************!*\
  !*** ./src/utils/getBorderRadiusStyles.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getBorderRadiusStyles = ({
  className,
  radius,
  isWithIframe = false
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  let {
    value_Desktop: radiusDesktop,
    value_Tablet: radiusTablet,
    value_Mobile: radiusMobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(radius);
  const converttted = radiusValue => {
    let newradiusValue = radiusValue;
    if (typeof radiusValue === "string") {
      newradiusValue = {
        bottomLeft: radiusValue,
        bottomRight: radiusValue,
        topLeft: radiusValue,
        topRight: radiusValue
      };
    } else {
      newradiusValue = {
        bottomLeft: radiusValue?.bottomLeft,
        bottomRight: radiusValue?.bottomRight,
        topLeft: radiusValue?.topLeft,
        topRight: radiusValue?.topRight
      };
    }
    return newradiusValue;
  };
  radiusDesktop = converttted(radiusDesktop);
  radiusTablet = converttted(radiusTablet);
  radiusMobile = converttted(radiusMobile);
  const {
    mobile_v: mobile_v_topLeft,
    tablet_v: tablet_v_topLeft,
    desktop_v: desktop_v_topLeft
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.topLeft,
    tablet_v: radiusTablet?.topLeft,
    desktop_v: radiusDesktop?.topLeft
  });
  const {
    mobile_v: mobile_v_topRight,
    tablet_v: tablet_v_topRight,
    desktop_v: desktop_v_topRight
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.topRight,
    tablet_v: radiusTablet?.topRight,
    desktop_v: radiusDesktop?.topRight
  });
  const {
    mobile_v: mobile_v_bottomRight,
    tablet_v: tablet_v_bottomRight,
    desktop_v: desktop_v_bottomRight
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.bottomRight,
    tablet_v: radiusTablet?.bottomRight,
    desktop_v: radiusDesktop?.bottomRight
  });
  const {
    mobile_v: mobile_v_bottomLeft,
    tablet_v: tablet_v_bottomLeft,
    desktop_v: desktop_v_bottomLeft
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.bottomLeft,
    tablet_v: radiusTablet?.bottomLeft,
    desktop_v: radiusDesktop?.bottomLeft
  });

  // Check if className is for iframe
  const applyImportant = isWithIframe ? "!important" : "";
  return {
    [`${className}`]: {
      borderTopLeftRadius: `${mobile_v_topLeft} ${applyImportant}`,
      borderTopRightRadius: `${mobile_v_topRight} ${applyImportant}`,
      borderBottomRightRadius: `${mobile_v_bottomRight} ${applyImportant}`,
      borderBottomLeftRadius: `${mobile_v_bottomLeft} ${applyImportant}`,
      [`@media (min-width: ${media_tablet})`]: tablet_v_topLeft || tablet_v_topRight || tablet_v_bottomRight || tablet_v_bottomLeft ? {
        borderTopLeftRadius: `${tablet_v_topLeft} ${applyImportant}`,
        borderTopRightRadius: `${tablet_v_topRight} ${applyImportant}`,
        borderBottomRightRadius: `${tablet_v_bottomRight} ${applyImportant}`,
        borderBottomLeftRadius: `${tablet_v_bottomLeft} ${applyImportant}`
      } : null,
      [`@media (min-width: ${media_desktop})`]: desktop_v_topLeft || desktop_v_topRight || desktop_v_bottomRight || desktop_v_bottomLeft ? {
        borderTopLeftRadius: `${desktop_v_topLeft} ${applyImportant}`,
        borderTopRightRadius: `${desktop_v_topRight} ${applyImportant}`,
        borderBottomRightRadius: `${desktop_v_bottomRight} ${applyImportant}`,
        borderBottomLeftRadius: `${desktop_v_bottomLeft} ${applyImportant}`
      } : null
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBorderRadiusStyles);

/***/ }),

/***/ "./src/utils/getBorderStyles.ts":
/*!**************************************!*\
  !*** ./src/utils/getBorderStyles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBorderRadiusStyles */ "./src/utils/getBorderRadiusStyles.ts");

const getBorderStyles = ({
  border,
  className,
  isWithRadius = false,
  isWithIframe = false
}) => {
  const {
    hoverColor,
    mainSettings,
    radius
  } = border;
  //

  // MAIN BORDER
  let CSSObject = {
    [`${className}`]: {}
  };
  if (mainSettings) {
    if (mainSettings?.top) {
      const {
        bottom,
        left,
        right,
        top
      } = mainSettings;
      CSSObject = {
        [`${className}`]: {
          borderTop: `${top.width} ${top.style || "none"} ${top.color || ""}`,
          borderLeft: `${left.width} ${left.style || "none"} ${left.color || ""}`,
          borderRight: `${right.width} ${right.style || "none"} ${right.color || ""}`,
          borderBottom: `${bottom.width} ${bottom.style || "none"} ${bottom.color || ""}`,
          "&:hover": {
            borderColor: `${hoverColor}`
          }
        }
      };
    } else {
      const {
        color,
        style,
        width
      } = mainSettings;
      CSSObject = {
        [`${className}`]: {
          border: `${width} ${style || "none"} ${color || ""}`,
          "&:hover": {
            borderColor: `${hoverColor || ""}`
          }
        }
      };
    }
  }

  // RAIDUS
  let radiusCSSObject = {
    [`${className}`]: {}
  };
  if (isWithRadius && radius) {
    radiusCSSObject = (0,_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_0__["default"])({
      radius,
      className,
      isWithIframe
    });
  }

  //
  let a = {};
  let b = {};
  if (typeof CSSObject[className] === "object") {
    a = CSSObject[className] || {};
  }
  if (typeof radiusCSSObject[className] === "object") {
    b = radiusCSSObject[className] || {};
  }
  return {
    [`${className}`]: {
      ...a,
      ...b
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBorderStyles);

/***/ }),

/***/ "./src/utils/getCssProperyHasResponsive.ts":
/*!*************************************************!*\
  !*** ./src/utils/getCssProperyHasResponsive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");

function getCssProperyHasResponsive({
  cssProperty
}) {
  const {
    value_Desktop: value_desktop,
    value_Tablet: value_tablet,
    value_Mobile: value_mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__["default"])(cssProperty);
  // const value_desktop = cssProperty.Desktop;
  // const value_tablet = cssProperty.Tablet || value_desktop;
  // const value_mobile = cssProperty.Mobile || value_tablet;
  return {
    value_desktop,
    value_tablet,
    value_mobile
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCssProperyHasResponsive);

/***/ }),

/***/ "./src/utils/getPaddingMarginStyles.ts":
/*!*********************************************!*\
  !*** ./src/utils/getPaddingMarginStyles.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");




const getPaddingMarginStyles = ({
  className,
  padding,
  margin
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  const {
    value_Desktop: margin_Desktop,
    value_Tablet: margin_Tablet,
    value_Mobile: margin_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(margin);
  //

  const {
    value_Desktop: padding_Desktop,
    value_Tablet: padding_Tablet,
    value_Mobile: padding_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(padding);
  //

  //
  const {
    mobile_v: padding_Mobile_top,
    tablet_v: padding_Tablet_top,
    desktop_v: padding_Desktop_top
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.top,
    tablet_v: padding_Tablet?.top,
    desktop_v: padding_Desktop?.top
  });
  const {
    mobile_v: padding_Mobile_left,
    tablet_v: padding_Tablet_left,
    desktop_v: padding_Desktop_left
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.left,
    tablet_v: padding_Tablet?.left,
    desktop_v: padding_Desktop?.left
  });
  const {
    mobile_v: padding_Mobile_right,
    tablet_v: padding_Tablet_right,
    desktop_v: padding_Desktop_right
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.right,
    tablet_v: padding_Tablet?.right,
    desktop_v: padding_Desktop?.right
  });
  const {
    mobile_v: padding_Mobile_bottom,
    tablet_v: padding_Tablet_bottom,
    desktop_v: padding_Desktop_bottom
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.bottom,
    tablet_v: padding_Tablet?.bottom,
    desktop_v: padding_Desktop?.bottom
  });
  //
  const {
    mobile_v: margin_Mobile_top,
    tablet_v: margin_Tablet_top,
    desktop_v: margin_Desktop_top
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.top,
    tablet_v: margin_Tablet?.top,
    desktop_v: margin_Desktop?.top
  });
  const {
    mobile_v: margin_Mobile_left,
    tablet_v: margin_Tablet_left,
    desktop_v: margin_Desktop_left
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.left,
    tablet_v: margin_Tablet?.left,
    desktop_v: margin_Desktop?.left
  });
  const {
    mobile_v: margin_Mobile_right,
    tablet_v: margin_Tablet_right,
    desktop_v: margin_Desktop_right
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.right,
    tablet_v: margin_Tablet?.right,
    desktop_v: margin_Desktop?.right
  });
  const {
    mobile_v: margin_Mobile_bottom,
    tablet_v: margin_Tablet_bottom,
    desktop_v: margin_Desktop_bottom
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.bottom,
    tablet_v: margin_Tablet?.bottom,
    desktop_v: margin_Desktop?.bottom
  });
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)`
		body ${className} {
			padding-top: ${padding_Mobile_top};
			padding-right: ${padding_Mobile_right};
			padding-bottom: ${padding_Mobile_bottom};
			padding-left: ${padding_Mobile_left};
			margin-top: ${margin_Mobile_top};
			margin-right: ${margin_Mobile_right};
			margin-bottom: ${margin_Mobile_bottom};
			margin-left: ${margin_Mobile_left};
			@media (min-width: ${media_tablet}) {
				padding-top: ${padding_Tablet_top};
				padding-right: ${padding_Tablet_right};
				padding-bottom: ${padding_Tablet_bottom};
				padding-left: ${padding_Tablet_left};
				margin-top: ${margin_Tablet_top};
				margin-right: ${margin_Tablet_right};
				margin-bottom: ${margin_Tablet_bottom};
				margin-left: ${margin_Tablet_left};
			}
			@media (min-width: ${media_desktop}) {
				padding-top: ${padding_Desktop_top};
				padding-right: ${padding_Desktop_right};
				padding-bottom: ${padding_Desktop_bottom};
				padding-left: ${padding_Desktop_left};
				margin-top: ${margin_Desktop_top};
				margin-right: ${margin_Desktop_right};
				margin-bottom: ${margin_Desktop_bottom};
				margin-left: ${margin_Desktop_left};
			}
		}
	`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaddingMarginStyles);

/***/ }),

/***/ "./src/utils/getTypographyStyles.ts":
/*!******************************************!*\
  !*** ./src/utils/getTypographyStyles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./src/utils/font.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getTypographyStyles = ({
  typography,
  className
}) => {
  if (!typography || !className) {
    return {};
  }
  const {
    appearance,
    fontFamily,
    fontSizes,
    letterSpacing,
    lineHeight,
    textDecoration,
    textTransform
  } = typography;
  if (!!fontFamily) {
    (0,_font__WEBPACK_IMPORTED_MODULE_1__.loadGoogleFont)(fontFamily);
  }
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  //
  const fontSize_Desktop = fontSizes?.Desktop;
  const fontSize_Tablet = fontSizes?.Tablet || fontSize_Desktop;
  const fontSize_Mobile = fontSizes?.Mobile || fontSize_Tablet;
  //
  const lineHeight_Desktop = lineHeight?.Desktop;
  const lineHeight_Tablet = lineHeight?.Tablet || lineHeight_Desktop;
  const lineHeight_Mobile = lineHeight?.Mobile || lineHeight_Tablet;
  //
  const letterSpacing_Desktop = letterSpacing?.Desktop;
  const letterSpacing_Tablet = letterSpacing?.Tablet || letterSpacing_Desktop;
  const letterSpacing_Mobile = letterSpacing?.Mobile || letterSpacing_Tablet;
  //

  //
  const {
    mobile_v: fontSize_Mobile_new,
    tablet_v: fontSize_Tablet_new,
    desktop_v: fontSize_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: fontSize_Mobile,
    tablet_v: fontSize_Tablet,
    desktop_v: fontSize_Desktop
  });
  const {
    mobile_v: lineHeight_Mobile_new,
    tablet_v: lineHeight_Tablet_new,
    desktop_v: lineHeight_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: lineHeight_Mobile,
    tablet_v: lineHeight_Tablet,
    desktop_v: lineHeight_Desktop
  });
  const {
    mobile_v: letterSpacing_Mobile_new,
    tablet_v: letterSpacing_Tablet_new,
    desktop_v: letterSpacing_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: letterSpacing_Mobile,
    tablet_v: letterSpacing_Tablet,
    desktop_v: letterSpacing_Desktop
  });
  //

  return {
    [`${className}`]: {
      fontFamily: fontFamily,
      fontWeight: appearance.style?.fontWeight,
      fontStyle: appearance.style?.fontStyle,
      textDecoration,
      textTransform,
      //
      fontSize: fontSize_Mobile_new,
      lineHeight: lineHeight_Mobile_new,
      letterSpacing: letterSpacing_Mobile_new,
      [`@media (min-width: ${media_tablet})`]: fontSize_Tablet_new || lineHeight_Tablet_new || letterSpacing_Tablet_new ? {
        fontSize: fontSize_Tablet_new,
        lineHeight: lineHeight_Tablet_new,
        letterSpacing: letterSpacing_Tablet_new
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: fontSize_Desktop_new || lineHeight_Desktop_new || letterSpacing_Desktop_new ? {
        fontSize: fontSize_Desktop_new,
        lineHeight: lineHeight_Desktop_new,
        letterSpacing: letterSpacing_Desktop_new
      } : undefined
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTypographyStyles);

/***/ }),

/***/ "./src/utils/global-style.js":
/*!***********************************!*\
  !*** ./src/utils/global-style.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToResponsiveStyle: () => (/* binding */ convertToResponsiveStyle),
/* harmony export */   createStyleTagWithGlobalStyleContent: () => (/* binding */ createStyleTagWithGlobalStyleContent),
/* harmony export */   isStyleTagAdded: () => (/* binding */ isStyleTagAdded),
/* harmony export */   removeOldStyleTag: () => (/* binding */ removeOldStyleTag),
/* harmony export */   renderGlobalStyle: () => (/* binding */ renderGlobalStyle)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/utils/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_2__);



const convertToResponsiveStyle = () => {
  let responsiveJson = {
    'desktop': {
      'style': []
    },
    'tablet': {
      'breakpoint': '991px',
      'style': []
    },
    'mobile': {
      'breakpoint': '767px',
      'style': []
    }
  };
  let content = '';
  _wordpress_api__WEBPACK_IMPORTED_MODULE_2__.loadPromise.then(() => {
    const settings = new _wordpress_api__WEBPACK_IMPORTED_MODULE_2__.models.Settings();
    settings.fetch().then(response => {
      const typography = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.head)(response.wcb_global_typography);
      const colors = response.wcb_global_colors;
      for (const selector in typography) {
        //styleContent += `${cssPrefix} ${selector}{${JSToCSS(typo[selector])}}`;
        const attrs = typography[selector];
        let selectorStyle = {
          [selector]: {}
        };
        responsiveJson['desktop']['style'].push(selectorStyle);
        responsiveJson['mobile']['style'].push(selectorStyle);
        responsiveJson['tablet']['style'].push(selectorStyle);
        for (const attrName in attrs) {
          if (attrName.includes('Tablet')) {} else if (attrName.includes('Mobile')) {} else {}
        }
      }
      return responsiveJson;
    });
  });
  return content;
};
const renderGlobalStyle = () => {
  setTimeout(() => {
    const _renderGlobalStyle = head => {
      if (head) {
        removeOldStyleTag(head);
        const style = createStyleTagWithGlobalStyleContent();
        head.appendChild(style);
      }
    };
    const headElement = (0,___WEBPACK_IMPORTED_MODULE_0__.getDocumentHead)();
    _renderGlobalStyle(headElement);
    if (headElement !== document.querySelector('head')) {
      _renderGlobalStyle(document.querySelector('head'));
    }
  }, 50);
};
const createStyleTagWithGlobalStyleContent = () => {
  let cssPrefix = '.woostify-block';
  if ((0,___WEBPACK_IMPORTED_MODULE_0__.isEditingPost)()) {
    cssPrefix = '.editor-styles-wrapper .woostify-block';
  }
  const style = document.createElement('style');
  style.classList.add('wcb-global-style');
  style.textContent = convertToResponsiveStyle();
  return style;
};
const removeOldStyleTag = (head = document.querySelector('head')) => {
  if (!isStyleTagAdded(head)) {
    return;
  }
  const oldTag = head.querySelector('.wcb-global-style');
  oldTag.remove();
};
const isStyleTagAdded = (head = document.querySelector('head')) => {
  return head.querySelector('.wcb-global-style');
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSToCSS: () => (/* binding */ JSToCSS),
/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   convertToResponsiveStyle: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.convertToResponsiveStyle),
/* harmony export */   createLinkTagWithGoogleFont: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.createLinkTagWithGoogleFont),
/* harmony export */   createStyleTagWithGlobalStyleContent: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.createStyleTagWithGlobalStyleContent),
/* harmony export */   getDocumentHead: () => (/* binding */ getDocumentHead),
/* harmony export */   getGoogleFontURL: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.getGoogleFontURL),
/* harmony export */   isEditingContent: () => (/* binding */ isEditingContent),
/* harmony export */   isEditingPost: () => (/* binding */ isEditingPost),
/* harmony export */   isGoogleFontEnqueued: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isGoogleFontEnqueued),
/* harmony export */   isStyleTagAdded: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.isStyleTagAdded),
/* harmony export */   isWebFont: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isWebFont),
/* harmony export */   loadGoogleFont: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.loadGoogleFont),
/* harmony export */   removeOldStyleTag: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.removeOldStyleTag),
/* harmony export */   renderGlobalStyle: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.renderGlobalStyle),
/* harmony export */   wcbCreateColor: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbCreateColor),
/* harmony export */   wcbGetRgb: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbGetRgb)
/* harmony export */ });
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./font */ "./src/utils/font.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/utils/color.js");
/* harmony import */ var _global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-style */ "./src/utils/global-style.js");




/**
 * Capitalize the first letter in string
 * @param {*} string
 * @returns
 */
const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const getDocumentHead = () => {
  let head = document.querySelector('head');
  if (isEditingContent()) {
    head = document.querySelector('iframe[name="editor-canvas"]').contentWindow.document.querySelector('head');
  }
  return head;
};
const isEditingContent = () => !!document.querySelector('iframe[name="editor-canvas"]');
const isEditingPost = () => {
  if (document.querySelector('.edit-post-visual-editor')) {
    return true;
  }
  return false;
};
const JSToCSS = JS => {
  let cssString = '';
  for (let objectKey in JS) {
    if (objectKey.includes('Unit')) {
      return;
    }
    let suffix = '';
    if (objectKey.includes('fontFamily')) {
      suffix = ', Sans-serif';
    }
    if (objectKey.includes('letterSpacing')) {
      suffix = 'px';
    }
    cssString += objectKey.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`) + ': ' + JS[objectKey] + suffix + ';\n';
  }
  return cssString;
};

/***/ })

}]);
//# sourceMappingURL=src_block-form_GlobalCss_tsx.js.map
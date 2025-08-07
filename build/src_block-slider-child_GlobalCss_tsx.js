(globalThis["webpackChunkwoostifyblocks"] = globalThis["webpackChunkwoostifyblocks"] || []).push([["src_block-slider-child_GlobalCss_tsx"],{

/***/ "./node_modules/@heroicons/react/24/outline/FunnelIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/FunnelIcon.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function FunnelIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
  }));
}

const ForwardRef = React.forwardRef(FunnelIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/PaintBrushIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/PaintBrushIcon.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function PaintBrushIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
  }));
}

const ForwardRef = React.forwardRef(PaintBrushIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./src/block-slider-child/GlobalCss.tsx":
/*!**********************************************!*\
  !*** ./src/block-slider-child/GlobalCss.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getSingleDimensionStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getSingleDimensionStyles */ "./src/utils/getSingleDimensionStyles.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getStyleBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getStyleBackground */ "./src/utils/getStyleBackground.tsx");
/* harmony import */ var _utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/converUniqueIdToAnphaKey */ "./src/utils/converUniqueIdToAnphaKey.ts");
/* harmony import */ var _components_controls_MyBackgroundControl_MyBackgroundNoImageControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyBackgroundControl/MyBackgroundNoImageControl */ "./src/components/controls/MyBackgroundControl/MyBackgroundNoImageControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getBackgroundColorGradientStyles */ "./src/utils/getBackgroundColorGradientStyles.ts");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");















const GlobalCss = attrs => {
  var _style_buttonPreset$i, _style_callToActionBu, _style_callToActionBu2, _style_buttonPreset$i2, _style_buttonPreset$i3, _style_callToActionBu3, _style_callToActionBu4, _style_callToActionBu5, _style_callToActionBu6, _style_callToActionBu7;
  debugger;
  const {
    uniqueId,
    clientID,
    // Get clientID prop
    // ATTRS OF BLOCK
    style_backgroundAndBorder,
    style_content,
    style_callToActionButton,
    style_dimension,
    style_name,
    style_image,
    style_buttonPreset,
    style_layoutPreset,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;

  // Generate unique CSS class from clientID or fallback to uniqueId
  const uniqueCssClass = clientID ? (0,_utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_7__.converClientIdToUniqueClass)(clientID) : uniqueId;

  // Create robust CSS selectors that work in all scenarios
  const WRAP_CLASSNAME_UNIVERSAL = `.wcb-slider-child__wrap.${uniqueCssClass}`;
  const WRAP_CLASSNAME_SCOPED = `.wcb-slider__wrap .wcb-slider-child__wrap.${uniqueCssClass}`;

  // Create comprehensive dual selectors that handle various wrapper scenarios
  const createRobustSelector = childSelector => [
  // Direct targeting (most reliable for save mode)
  `${WRAP_CLASSNAME_UNIVERSAL} ${childSelector}`,
  // Scoped targeting (for edit mode context)
  `${WRAP_CLASSNAME_SCOPED} ${childSelector}`,
  // Additional targeting for potential slider wrapper scenarios
  `${WRAP_CLASSNAME_UNIVERSAL} .wcb-slider__item ${childSelector}`, `${WRAP_CLASSNAME_SCOPED} .wcb-slider__item ${childSelector}`,
  // Even more specific for deeply nested scenarios
  `${WRAP_CLASSNAME_UNIVERSAL} .wcb-slider__item .wcb-slider__item-inner ${childSelector}`, `${WRAP_CLASSNAME_SCOPED} .wcb-slider__item .wcb-slider__item-inner ${childSelector}`].join(', ');

  // Create CSS selectors using robust approach
  const ITEM_CLASSNAME = createRobustSelector('.wcb-slider-child__item');
  const ITEM_CLASSNAME_INNER = createRobustSelector('.wcb-slider-child__item-inner');
  const ITEM_NAME = createRobustSelector('.wcb-slider-child__name');
  const ITEM_CONTENT = createRobustSelector('.wcb-slider-child__content');
  const ITEM_IMAGE = createRobustSelector('.wcb-slider-child__image');
  const CALL_TO_ACTION_INNER = createRobustSelector('.wcb-slider-child__btn-inner');
  const CALL_TO_ACTION_TEXT = createRobustSelector('.wcb-slider-child__btn-text');
  const CALL_TO_ACTION_TEXT_SPACING = createRobustSelector('.wcb-slider-child__btn_spacing');
  const ITEM_TOP_ICON_WRAP = createRobustSelector('.wcb-top__icon-wrap');
  const ITEM_TOP_ICON = createRobustSelector('.wcb-top__icon');

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return [
    // Basic styling for the slider child item using robust selectors
    {
      [ITEM_CLASSNAME]: {
        display: "flex",
        flexDirection: "column"
      }
    }];
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: getDivWrapStyles()
  }), style_image?.enableIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: ITEM_TOP_ICON_WRAP,
      margin: style_image?.iconDimensions.margin
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: ITEM_TOP_ICON_WRAP,
      padding: style_image?.iconDimensions.padding
    }), (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      border: style_image?.iconBorder,
      className: ITEM_TOP_ICON_WRAP,
      isWithRadius: true
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_10__["default"])({
      className: ITEM_TOP_ICON,
      value: style_image?.iconSize,
      prefix: "width",
      prefix_2: "fontSize"
    }),
    // getStyleObjectFromResponsiveAttr({
    // 	className: CALL_TO_ACTION_TEXT,
    // 	value: style_buttonPreset?.iconSpacing ?? { Desktop: null, Tablet: null, Mobile: null },
    // 	prefix: "marginRight",
    // 	prefix_2: "marginLeft",
    // }),
    {
      [`${ITEM_TOP_ICON} .wcb-icon-full`]: {
        color: style_image?.iconColor,
        ":hover": {
          color: style_image?.iconHoverColor
        }
      }
    }, {
      [CALL_TO_ACTION_TEXT]: {
        marginRight: (_style_buttonPreset$i = style_buttonPreset?.iconSpacing?.Desktop) !== null && _style_buttonPreset$i !== void 0 ? _style_buttonPreset$i : "0px"
      }
    }]
  }) : null, style_name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      typography: style_name.typography,
      className: ITEM_NAME
    }), (0,_utils_getSingleDimensionStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      value: style_name.marginBottom,
      className: ITEM_NAME,
      prefix: "marginBottom"
    }), {
      [ITEM_NAME]: {
        color: `${style_name.textColor} !important`
      }
    }]
  }), style_content && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      typography: style_content.typography,
      className: ITEM_CONTENT
    }), (0,_utils_getSingleDimensionStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      value: style_content.marginBottom,
      className: ITEM_CONTENT,
      prefix: "marginBottom"
    }), {
      [ITEM_CONTENT]: {
        color: `${style_content.textColor} !important`
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [{
      [ITEM_CLASSNAME_INNER]: {
        justifyItems: `${style_layoutPreset?.preset === "wcb-layout-2" || style_image?.iconPosition === "left" || style_layoutPreset?.preset === "wcb-layout-3" || style_layoutPreset?.preset === "wcb-layout-5" || style_content?.textAlignment?.Desktop === "left" ? "start" : style_image?.iconPosition === "right" || style_content?.textAlignment?.Desktop === "right" ? "end" : "center"}`
      },
      [CALL_TO_ACTION_INNER]: {
        // backgroundColor: `${getButtonBackgroundFromPreset()} !important`,
        // width: "10rem",
        // height: "2.5rem",
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: CALL_TO_ACTION_TEXT,
      typography: (_style_callToActionBu = style_callToActionButton?.typographyText) !== null && _style_callToActionBu !== void 0 ? _style_callToActionBu : _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_9__.TYPOGRAPHY_CONTROL_DEMO
    }), {
      [CALL_TO_ACTION_TEXT]: {
        color: (_style_callToActionBu2 = style_callToActionButton?.colorText) !== null && _style_callToActionBu2 !== void 0 ? _style_callToActionBu2 : "#ffffff"
      },
      [CALL_TO_ACTION_TEXT_SPACING]: style_buttonPreset?.iconPosition === "afterTitle" ? {
        marginRight: (_style_buttonPreset$i2 = style_buttonPreset?.iconSpacing?.Desktop) !== null && _style_buttonPreset$i2 !== void 0 ? _style_buttonPreset$i2 : "0px"
      } : {
        marginLeft: (_style_buttonPreset$i3 = style_buttonPreset?.iconSpacing?.Desktop) !== null && _style_buttonPreset$i3 !== void 0 ? _style_buttonPreset$i3 : "0px"
      },
      // [CALL_TO_ACTION_TEXT_SPACING]: 
      // 	style_buttonPreset?.iconPosition === "afterTitle"
      // 		? { marginRight: style_buttonPreset?.iconSpacing?.Tablet ?? "0px" }
      // 		: { marginLeft: style_buttonPreset?.iconSpacing?.Tablet ?? "0px" },
      // [CALL_TO_ACTION_TEXT_SPACING]: 
      // 	style_buttonPreset?.iconPosition === "afterTitle"
      // 		? { marginRight: style_buttonPreset?.iconSpacing?.Mobile ?? "0px" }
      // 		: { marginLeft: style_buttonPreset?.iconSpacing?.Mobile ?? "0px" },
      // BUTTON HOVER
      [CALL_TO_ACTION_INNER]: {
        ":hover": {
          ".wcb-slider-child__btn-text": {
            color: style_callToActionButton?.hoverColorText
          }
        }
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: (0,_utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_11__["default"])({
      className: CALL_TO_ACTION_INNER,
      background: (_style_callToActionBu3 = style_callToActionButton?.normalBackground) !== null && _style_callToActionBu3 !== void 0 ? _style_callToActionBu3 : _components_controls_MyBackgroundControl_MyBackgroundNoImageControl__WEBPACK_IMPORTED_MODULE_8__.STYLES_BG_NO_IMAGE_DEMO,
      backgroundHover: (_style_callToActionBu4 = style_callToActionButton?.hoverBackground) !== null && _style_callToActionBu4 !== void 0 ? _style_callToActionBu4 : _components_controls_MyBackgroundControl_MyBackgroundNoImageControl__WEBPACK_IMPORTED_MODULE_8__.STYLES_BG_NO_IMAGE_DEMO
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: CALL_TO_ACTION_INNER,
      border: {
        mainSettings: (_style_callToActionBu5 = style_callToActionButton?.mainSettings) !== null && _style_callToActionBu5 !== void 0 ? _style_callToActionBu5 : _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_12__.MY_BORDER_CONTROL_DEMO.mainSettings,
        hoverColor: (_style_callToActionBu6 = style_callToActionButton?.hoverColor) !== null && _style_callToActionBu6 !== void 0 ? _style_callToActionBu6 : "#121314",
        radius: (_style_callToActionBu7 = style_callToActionButton?.radius) !== null && _style_callToActionBu7 !== void 0 ? _style_callToActionBu7 : _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_12__.MY_BORDER_CONTROL_DEMO.radius
      },
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: CALL_TO_ACTION_INNER,
      padding: style_callToActionButton?.padding,
      margin: style_callToActionButton?.margin
    })]
  }), style_backgroundAndBorder && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [(0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      border: style_backgroundAndBorder.border,
      className: ITEM_CLASSNAME,
      isWithRadius: true
    }), (0,_utils_getStyleBackground__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: createRobustSelector('.wcb-slider-child__item-background'),
      styles_background: style_backgroundAndBorder.background
    })]
  }), style_dimension && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: createRobustSelector('.wcb-slider-child__item-inner'),
      padding: style_dimension.padding
    })]
  }), style_image && style_image.isShowImage && style_image?.image?.mediaId && (style_image.imagePosition === "above-title" || style_image.imagePosition === "blow-title" || style_image.imagePosition === "bottom") ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [{
      [createRobustSelector('.wcb-slider-child__content-image')]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      [createRobustSelector('.wcb-slider-child__image')]: {
        alignSelf: style_image.imageAlignSelf,
        width: style_image.imageSize === "thumbnail" ? "100px" : "100%",
        height: style_image.imageSize === "thumbnail" ? "100px" : "100%",
        objectFit: "cover",
        margin: "auto"
      }
    }]
  }) : null, style_image && style_image.isShowImage && style_image?.image?.mediaId && (style_image.imagePosition === "left" || style_image.imagePosition === "right") ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: [{
      [createRobustSelector('.wcb-slider-child__item-wrap-inner')]: {
        display: "flex",
        flexDirection: "row",
        gap: "10px"
      },
      [createRobustSelector('.wcb-slider-child__image')]: {
        display: "block",
        width: style_image.imageSize === "thumbnail" ? "100px" : "100%",
        height: style_image.imageSize === "thumbnail" ? "100px" : "100%",
        objectFit: "cover"
      }
    }]
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME_UNIVERSAL,
      defaultDisplay: "block"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/components/controls/MyBackgroundControl/MyBackgroundNoImageControl.tsx":
/*!************************************************************************************!*\
  !*** ./src/components/controls/MyBackgroundControl/MyBackgroundNoImageControl.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STYLES_BG_NO_IMAGE_DEMO: () => (/* binding */ STYLES_BG_NO_IMAGE_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/PaintBrushIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/FunnelIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _MyBackgroundControl_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyBackgroundControl/types */ "./src/components/controls/MyBackgroundControl/types.ts");








const BG_TYPES_PLANS = [{
  name: "color",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__
}, {
  name: "gradient",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__
}];
const STYLES_BG_NO_IMAGE_DEMO = {
  bgType: "color",
  color: "",
  gradient: "linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)"
};
const MyBackgroundNoImageControl = ({
  className = "",
  backgroundControl = STYLES_BG_NO_IMAGE_DEMO,
  setAttrs__backgroundControl,
  bgTypesPlans = BG_TYPES_PLANS
}) => {
  //
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  //
  const {
    bgType,
    color,
    gradient
  } = backgroundControl;

  //

  const handleChangeBgType = type => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      bgType: type
    });
  };
  const handleChangeColor = color => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      color
    });
  };
  const handleChangeGradient = gradient => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      gradient
    });
  };

  //

  const renderTypeGroupBtn = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full flex justify-between items-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "flex-1"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Type", "wcb")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex gap-1"
    }, bgTypesPlans.map(item => {
      const active = item.name === bgType;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: item.name,
        className: `p-2 rounded-lg border  ${active ? "text-sky-600 bg-sky-50 border-sky-400" : "border-slate-300 hover:border-slate-500 cursor-pointer"}`,
        onClick: () => handleChangeBgType(item.name),
        title: item.name
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(item.icon, {
        className: "w-4 h-4"
      }));
    })));
  };
  const renderContent = () => {
    switch (bgType) {
      case "color":
        return renderContentColor();
      case "gradient":
        return renderContentGradient();
      default:
        return null;
    }
  };
  const renderContentGradient = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full pt-2.5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
      __nextHasNoMargin: true,
      value: gradient,
      onChange: handleChangeGradient,
      gradients: _MyBackgroundControl_types__WEBPACK_IMPORTED_MODULE_5__.GRADIENT_DEFAULT
    }));
  };
  const renderContentColor = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full pt-2"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: handleChangeColor,
      color: color
    }));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderTypeGroupBtn(), renderContent()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyBackgroundNoImageControl);

/***/ }),

/***/ "./src/components/controls/MyBackgroundControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyBackgroundControl/types.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BG_ATTACHMENT_OPTIONS: () => (/* binding */ BG_ATTACHMENT_OPTIONS),
/* harmony export */   BG_REPEAT_OPTIONS: () => (/* binding */ BG_REPEAT_OPTIONS),
/* harmony export */   BG_SIZE_OPTIONS: () => (/* binding */ BG_SIZE_OPTIONS),
/* harmony export */   GRADIENT_DEFAULT: () => (/* binding */ GRADIENT_DEFAULT)
/* harmony export */ });
const BG_ATTACHMENT_OPTIONS = [{
  value: "fixed",
  label: "Fixed"
}, {
  value: "local",
  label: "Local"
}, {
  value: "scroll",
  label: "Scroll"
}];
const BG_REPEAT_OPTIONS = [{
  value: "no-repeat",
  label: "No repeat"
}, {
  value: "repeat",
  label: "Repeat"
}, {
  value: "repeat-x",
  label: "Repeat-x"
}, {
  value: "repeat-y",
  label: "Repeat-y"
}];
const BG_SIZE_OPTIONS = [{
  value: "auto",
  label: "Auto"
}, {
  value: "contain",
  label: "Contain"
}, {
  value: "cover",
  label: "Cover"
}];
const GRADIENT_DEFAULT = [{
  name: "JShine",
  gradient: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
  slug: "jshine"
}, {
  name: "Moonlit Asteroid",
  gradient: "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
  slug: "moonlit-asteroid"
}, {
  name: "Rastafarie",
  gradient: "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
  slug: "rastafari"
}];

/***/ }),

/***/ "./src/components/controls/MyBorderControl/types.ts":
/*!**********************************************************!*\
  !*** ./src/components/controls/MyBorderControl/types.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_BORDER_MAINS: () => (/* binding */ DEFAULT_BORDER_MAINS),
/* harmony export */   DEFAULT_BORDER_MAIN_SINGLE_SIDE: () => (/* binding */ DEFAULT_BORDER_MAIN_SINGLE_SIDE),
/* harmony export */   DEFAULT_BORDER_RADIUS: () => (/* binding */ DEFAULT_BORDER_RADIUS),
/* harmony export */   MY_BORDER_CONTROL_DEMO: () => (/* binding */ MY_BORDER_CONTROL_DEMO)
/* harmony export */ });
const DEFAULT_BORDER_RADIUS = "0";
const DEFAULT_BORDER_MAIN_SINGLE_SIDE = {
  color: "#d1d5db",
  style: "solid",
  width: "1px"
};
const DEFAULT_BORDER_MAINS = undefined;
const MY_BORDER_CONTROL_DEMO = {
  mainSettings: DEFAULT_BORDER_MAINS,
  hoverColor: undefined,
  radius: {
    Desktop: DEFAULT_BORDER_RADIUS,
    Tablet: DEFAULT_BORDER_RADIUS,
    Mobile: DEFAULT_BORDER_RADIUS
  }
};

/***/ }),

/***/ "./src/components/controls/MyColorPicker/MyColorPicker.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/controls/MyColorPicker/MyColorPicker.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


// @ts-ignore



const MyColorPicker = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Color", "wcb"),
  // default value color - co the la cac gia tri hex string
  color = "#000",
  onChange,
  showDefaultPalette = true,
  showCustomColorOnDefaultPallete = true
}) => {
  const [colorState, setColorState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    color && setColorState(color);
  }, [color]);
  const handleUpdateColor = c => {
    setColorState(c);
    onChange(c);
  };
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseMultipleOriginColorsAndGradients)();
  const defaultColorPallete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const customColors = window.wcbGlobalVariables?.customColorPallete;
    if (!customColors || !customColors.length || !showCustomColorOnDefaultPallete) {
      return colorGradientSettings?.colors || [];
    }
    const c = [...(colorGradientSettings?.colors || []), {
      name: "Customs",
      colors: window.wcbGlobalVariables.customColorPallete || []
    }];
    return c;
  }, [colorGradientSettings, showCustomColorOnDefaultPallete]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: `w-full ${className}`,
    contentClassName: "my-popover-content-classname"
    // @ts-ignore
    ,
    popoverProps: {
      placement: "left-start"
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors`,
      onClick: onToggle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center gap-0.5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer ${colorState ? "" : "bg-transparent"}`,
      style: {
        backgroundColor: colorState,
        backgroundImage: !colorState ? "linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)" : undefined,
        backgroundSize: "10px 10px",
        backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0"
      }
    })), label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, label))),
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg-white "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
      className: "block-editor-color-gradient-control__panel p-4",
      colors: showDefaultPalette ? defaultColorPallete : undefined,
      value: colorState
      // @ts-ignore
      ,
      enableAlpha: true,
      onChange: color => {
        handleUpdateColor(color || "");
      }
      // @ts-ignore
      ,
      __experimentalHasMultipleOrigins: true,
      __experimentalIsRenderedInSidebar: true
    })))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyColorPicker);

/***/ }),

/***/ "./src/components/controls/MyTypographyControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyTypographyControl/types.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_SIZES_DEMO: () => (/* binding */ FONT_SIZES_DEMO),
/* harmony export */   TYPOGRAPHY_CONTROL_DEMO: () => (/* binding */ TYPOGRAPHY_CONTROL_DEMO)
/* harmony export */ });
/* harmony import */ var _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SelectFontAppearance */ "./src/components/controls/SelectFontAppearance.tsx");

const TYPOGRAPHY_CONTROL_DEMO = {
  fontSizes: {
    Desktop: ""
  },
  appearance: _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_0__.FONT_APPEARANCE_OPTIONS[0],
  textDecoration: undefined,
  textTransform: undefined,
  lineHeight: {
    Desktop: undefined
  },
  letterSpacing: {
    Desktop: undefined
  },
  fontFamily: undefined
};
const FONT_SIZES_DEMO = [{
  name: "Tiny",
  slug: "tiny",
  size: "8px"
}, {
  name: "Small",
  slug: "small",
  size: "12px"
}, {
  name: "Normal",
  slug: "normal",
  size: "16px"
}, {
  name: "Big",
  slug: "big",
  size: "26px"
}, {
  name: "Bigger",
  slug: "bigger",
  size: "30px"
}, {
  name: "Huge",
  slug: "huge",
  size: "36px"
}];

/***/ }),

/***/ "./src/components/controls/SelectFontAppearance.tsx":
/*!**********************************************************!*\
  !*** ./src/components/controls/SelectFontAppearance.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_APPEARANCE_OPTIONS: () => (/* binding */ FONT_APPEARANCE_OPTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const FONT_APPEARANCE_OPTIONS = [{
  key: "default",
  name: "Default",
  style: {
    fontWeight: undefined,
    fontStyle: undefined
  }
}, {
  key: "thin",
  name: "Thin",
  style: {
    fontWeight: "100",
    fontStyle: "normal"
  }
}, {
  key: "ExtraLight",
  name: "Extra Light",
  style: {
    fontWeight: "200",
    fontStyle: "normal"
  }
}, {
  key: "light",
  name: "Light",
  style: {
    fontWeight: "300",
    fontStyle: "normal"
  }
}, {
  key: "Regular",
  name: "Regular",
  style: {
    fontWeight: "400",
    fontStyle: "normal"
  }
}, {
  key: "Medium",
  name: "Medium",
  style: {
    fontWeight: "500",
    fontStyle: "normal"
  }
}, {
  key: "SemiBold",
  name: "Semi Bold",
  style: {
    fontWeight: "600",
    fontStyle: "normal"
  }
}, {
  key: "Bold",
  name: "Bold",
  style: {
    fontWeight: "700",
    fontStyle: "normal"
  }
}, {
  key: "ExtraBold",
  name: "Extra Bold",
  style: {
    fontWeight: "800",
    fontStyle: "normal"
  }
}, {
  key: "Black",
  name: "Black",
  style: {
    fontWeight: "900",
    fontStyle: "normal"
  }
},
//
{
  key: "thin_italic",
  name: "Thin Italic",
  style: {
    fontWeight: "100",
    fontStyle: "italic"
  }
}, {
  key: "ExtraLight_italic",
  name: "Extra Light Italic",
  style: {
    fontWeight: "200",
    fontStyle: "italic"
  }
}, {
  key: "light_italic",
  name: "Light Italic",
  style: {
    fontWeight: "300",
    fontStyle: "italic"
  }
}, {
  key: "Regular_italic",
  name: "Regular Italic",
  style: {
    fontWeight: "400",
    fontStyle: "italic"
  }
}, {
  key: "Medium_italic",
  name: "Medium Italic",
  style: {
    fontWeight: "500",
    fontStyle: "italic"
  }
}, {
  key: "SemiBold_italic",
  name: "Semi Bold Italic",
  style: {
    fontWeight: "600",
    fontStyle: "italic"
  }
}, {
  key: "Bold_italic",
  name: "Bold Italic",
  style: {
    fontWeight: "700",
    fontStyle: "italic"
  }
}, {
  key: "ExtraBold_italic",
  name: "Extra Bold Italic",
  style: {
    fontWeight: "800",
    fontStyle: "italic"
  }
}, {
  key: "Black_italic",
  name: "Black Italic",
  style: {
    fontWeight: "900",
    fontStyle: "italic"
  }
}];
const SelectFontAppearance = ({
  onChange,
  value
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CustomSelectControl
  //  @ts-ignore
  , {
    __nextUnconstrainedWidth: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Appearance", "wcb"),
    options: FONT_APPEARANCE_OPTIONS,
    onChange: onChange,
    value: value
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectFontAppearance);

/***/ }),

/***/ "./src/hooks/useGetDeviceType.ts":
/*!***************************************!*\
  !*** ./src/hooks/useGetDeviceType.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const useGetDeviceType = () => {
  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType: getPreviewDeviceType
    } = select("core/edit-post") || false;
    if (!getPreviewDeviceType) {
      return {
        deviceType: null
      };
    }
    return {
      deviceType: getPreviewDeviceType()
    };
  }, []);
  return deviceType;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetDeviceType);

/***/ }),

/***/ "./src/utils/converUniqueIdToAnphaKey.ts":
/*!***********************************************!*\
  !*** ./src/utils/converUniqueIdToAnphaKey.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   converClientIdToUniqueClass: () => (/* binding */ converClientIdToUniqueClass),
/* harmony export */   "default": () => (/* binding */ converUniqueIdToAnphaKey)
/* harmony export */ });
function converUniqueIdToAnphaKey(text, prefix = "wcb-") {
  if (!text) {
    return (prefix + "converniquedreturnnull" + Date.now() + Math.random()).replace(/\./g, "-");
  }

  // Convert clientId to a valid CSS class name
  // Example: "a1b2c3d4-e5f6-7890" -> "wcb-a1b2c3d4e5f67890"
  const cleanId = text.replace(/-/g, "") // Remove hyphens
  .replace(/\s/g, "") // Remove spaces
  .substring(0, 12); // Keep first 12 characters for reasonable length

  return prefix + cleanId;
}

// Alternative function that maintains full uniqueness
function converClientIdToUniqueClass(clientId, prefix = "wcb-") {
  if (!clientId) {
    return prefix + "fallback" + Date.now();
  }

  // Create a hash-like short identifier from clientId
  let hash = 0;
  for (let i = 0; i < clientId.length; i++) {
    const char = clientId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Convert to positive number and base36 (alphanumeric)
  const shortId = Math.abs(hash).toString(36);
  return prefix + shortId;
}

/***/ }),

/***/ "./src/utils/getBackgroundColorGradientStyles.ts":
/*!*******************************************************!*\
  !*** ./src/utils/getBackgroundColorGradientStyles.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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
//# sourceMappingURL=src_block-slider-child_GlobalCss_tsx.js.map
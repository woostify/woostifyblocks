/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/first-block/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/first-block/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_get_device_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/get-device-type */ "./src/components/get-device-type.js");
/* harmony import */ var _components_controls_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/controls/base */ "./src/components/controls/base/index.js");
/* harmony import */ var _components_controls_dimensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/controls/dimensions */ "./src/components/controls/dimensions/index.js");
/* harmony import */ var _components_controls_button_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/controls/button-popover */ "./src/components/controls/button-popover/index.js");
/* harmony import */ var _components_controls_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/controls/typography */ "./src/components/controls/typography/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/first-block/editor.scss");













function Edit(props) {
  const deviceSuffix = (0,_components_get_device_type__WEBPACK_IMPORTED_MODULE_6__.getDeviceSuffix)();
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    uniqueId
  } = attributes;
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setAttributes({
      uniqueId: clientId.substr(2, 9).replace('-', '')
    });
  });
  let lineHeightCSS = attributes['lineHeight' + deviceSuffix] + attributes['lineHeightUnit' + deviceSuffix];
  let fontSizeCSS = attributes['fontSize' + deviceSuffix] + attributes['fontSizeUnit' + deviceSuffix];
  let letterSpacingCSS = attributes['letterSpacing' + deviceSuffix] + 'px';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'woostify-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_button_popover__WEBPACK_IMPORTED_MODULE_9__["default"], {
    popoverHeading: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'woostify-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_typography__WEBPACK_IMPORTED_MODULE_10__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    attrFontFamily: 'fontFamily',
    attrFontWeight: 'fontWeight',
    attrTextTransform: 'fontTransform',
    attrFontStyle: 'fontStyle',
    attrLineHeight: 'lineHeight',
    attrLineHeightUnit: 'lineHeightUnit',
    attrLetterSpacing: 'letterSpacing',
    attrFontSize: 'fontSize',
    attrFontSizeUnit: 'fontSizeUnit',
    fontSizeUnits: ['px', 'em', 'rem'],
    lineHeightUnits: ['px', 'em']
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_base__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'woostify-block'),
    responsive: ['desktop', 'tablet', 'mobile'],
    units: ['px', 'em', 'rem', '%'],
    selectedUnit: attributes['paddingUnit' + deviceSuffix],
    onUnitClick: unit => setAttributes({
      ['paddingUnit' + deviceSuffix]: unit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_dimensions__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    type: 'padding',
    attrTop: 'paddingTop' + deviceSuffix,
    attrRight: 'paddingRight' + deviceSuffix,
    attrBottom: 'paddingBottom' + deviceSuffix,
    attrLeft: 'paddingLeft' + deviceSuffix
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_base__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'woostify-block'),
    responsive: ['desktop', 'tablet', 'mobile'],
    units: ['px', 'rem'],
    selectedUnit: attributes['marginUnit' + deviceSuffix],
    onUnitClick: unit => setAttributes({
      ['marginUnit' + deviceSuffix]: unit
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_dimensions__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    type: 'margin',
    attrTop: 'marginTop' + deviceSuffix,
    attrRight: 'marginRight' + deviceSuffix,
    attrBottom: 'marginBottom' + deviceSuffix,
    attrLeft: 'marginLeft' + deviceSuffix,
    labelTop: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('T-Left', 'woostify-block'),
    labelRight: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('T-Right', 'woostify-blocks'),
    labelBottom: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('B-Right', 'woostify-block'),
    labelLeft: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('B-Left', 'woostify-block'),
    disableInputs: ['marginLeft' + deviceSuffix, 'marginRight' + deviceSuffix]
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "woostify-block",
    id: `woostify-block-${uniqueId}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `#woostify-block-${uniqueId} .woostify-block-text {
							font-family: ${attributes.fontFamily};
							font-weight: ${attributes.fontWeight};
							text-transform: ${attributes.fontTransform};
							font-style: ${attributes.fontStyle};
							line-height: ${lineHeightCSS};
							font-size: ${fontSizeCSS};
							letter-spacing: ${letterSpacingCSS};
							backgroundColor: ${attributes.bg_color},
							color: ${attributes.text_color},
						}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "h2",
    className: "woostify-block-text",
    value: attributes.message,
    onChange: val => setAttributes({
      message: val
    })
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/first-block/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/first-block/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/first-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/first-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/first-block/save.js");


/**
 * Internal dependencies
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('woostify-block/first-block', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/first-block/save.js":
/*!****************************************!*\
  !*** ./src/blocks/first-block/save.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function save(_ref) {
  let {
    attributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(), {
    style: {
      backgroundColor: attributes.bg_color,
      color: attributes.text_color
    }
  }), attributes.message);
}

/***/ }),

/***/ "./src/components/controls/base/index.js":
/*!***********************************************!*\
  !*** ./src/components/controls/base/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon-toggle */ "./src/components/controls/icon-toggle/index.js");
/* harmony import */ var _responsive_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../responsive-toggle */ "./src/components/controls/responsive-toggle/index.js");






const WoostifyBaseControl = props => {
  var _props$responsive, _props$units2;

  const units = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _props$units;

    return props.units && ((_props$units = props.units) === null || _props$units === void 0 ? void 0 : _props$units.map(unit => {
      return {
        value: unit
      };
    }));
  }, [props.units]) || [];
  const hasResponsive = !!((_props$responsive = props.responsive) !== null && _props$responsive !== void 0 && _props$responsive.length);
  const hasUnit = !!((_props$units2 = props.units) !== null && _props$units2 !== void 0 && _props$units2.length);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control components-woostify-base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-control-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__label"
  }, props.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__responsive"
  }, hasResponsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive_toggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    devices: props.responsive
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__responsive wb-base-control__units"
  }, hasUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: props.selectedUnit,
    options: units,
    onChange: unit => props.onUnitClick(unit),
    labelPosition: "left",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Unit', 'woostify-block'),
    buttonsLabel: false
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-content"
  }, props.children), !!props.help && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-help"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "components-base-control__help"
  }, props.help)));
};

/* harmony default export */ __webpack_exports__["default"] = (WoostifyBaseControl);

/***/ }),

/***/ "./src/components/controls/button-popover/index.js":
/*!*********************************************************!*\
  !*** ./src/components/controls/button-popover/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const popoverStatus = {};

class WoostifyButtonPopoverControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      isVisible: popoverStatus[this.props.popoverHeading] || false,
      isMouseOutside: true
    };
    this.onToggleVisible = this.onToggleVisible.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
  }

  onToggleVisible() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  handleClose() {
    this.setState({
      isVisible: false
    });
  }

  handleMouseLeave() {
    this.setState({
      isMouseOutside: true
    });
  }

  handleMouseEnter() {
    this.setState({
      isMouseOutside: false
    });
  }

  handleOnClickOutside(ev) {
    var _window$wp, _window$wp$media, _window$wp$media$fram, _window$wp$media$fram2;

    // Do not do anything if the Media Manager is open.
    if ((_window$wp = window.wp) !== null && _window$wp !== void 0 && (_window$wp$media = _window$wp.media) !== null && _window$wp$media !== void 0 && (_window$wp$media$fram = _window$wp$media.frame) !== null && _window$wp$media$fram !== void 0 && (_window$wp$media$fram2 = _window$wp$media$fram.el) !== null && _window$wp$media$fram2 !== void 0 && _window$wp$media$fram2.clientHeight) {
      return;
    }

    if (this.state.isVisible) {
      if (!ev.target.closest('.wb-button-popover') && !ev.target.closest('.wb-button-popover-icon') && !ev.target.closest('.components-color-picker')) {
        this.handleClose();
      }
    }
  }

  componentWillUnmount() {
    popoverStatus[this.props.popoverHeading] = this.state.isVisible;
    setTimeout(() => {
      delete popoverStatus[this.props.popoverHeading];
    }, 500); // Remove event listener for mousedown.

    document.removeEventListener('mousedown', this.handleOnClickOutside);
  }

  componentDidMount() {
    // Added event listener for mousedown.
    document.addEventListener('mousedown', this.handleOnClickOutside);
  }

  render() {
    const {
      isVisible
    } = this.state;
    const {
      attributes,
      children
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      className: "wb-base-control--grid",
      label: "Typography"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "wb-button-popover-icon",
      variant: "secondary",
      onClick: this.onToggleVisible,
      icon: "edit"
    }), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      className: "wb-button-popover",
      focusOnMount: "container",
      onMouseLeave: this.handleMouseLeave,
      onMouseEnter: this.handleMouseEnter
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, !!this.props.popoverHeading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "components-panel__body-title"
    }, this.props.popoverHeading), children))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WoostifyButtonPopoverControl);

/***/ }),

/***/ "./src/components/controls/dimensions/index.js":
/*!*****************************************************!*\
  !*** ./src/components/controls/dimensions/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);





class WoostifyDimensionsControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.state = {
      isLinkedValues: false
    };
    this.onReset = this.onReset.bind(this);
    this.onChangeAttr = this.onChangeAttr.bind(this);
    this.onChangeAttr = this.onChangeAttr.bind(this);
    this.onChangeLinkedValues = this.onChangeLinkedValues.bind(this);
  }

  onReset(type) {
    this.props.setAttributes({
      [this.props[type]]: ''
    });
    this.setLinkedValues('');
  }

  onChangeAttr(value, attr) {
    this.props.setAttributes({
      [this.props[attr]]: value
    }); // eslint-disable-line dot-notation

    this.setLinkedValues(value);
  }

  setLinkedValues(value) {
    const attrArr = ['attrTop', 'attrRight', 'attrBottom', 'attrLeft'];

    if (this.state.isLinkedValues) {
      attrArr.map(attrItem => {
        if (this.props['disableInputs']) {
          if (!this.props['disableInputs'].includes(this.props[attrItem])) {
            this.props.setAttributes({
              [this.props[attrItem]]: value
            });
          }
        } else {
          this.props.setAttributes({
            [this.props[attrItem]]: value
          });
        }
      });
    }
  }

  onChangeLinkedValues() {
    this.setState({
      isLinkedValues: !this.state.isLinkedValues
    });
  }

  checkDisableInput(attr) {
    if (!this.props['disableInputs']) return false;
    return this.props['disableInputs'].includes(this.props[attr]);
  }

  render() {
    const {
      attributes,
      type = 'margin',
      attrTop,
      attrRight,
      attrBottom,
      attrLeft,
      labelTop = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'woostify-block'),
      labelRight = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'woostify-block'),
      labelBottom = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'woostify-block'),
      labelLeft = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'woostify-block')
    } = this.props;

    const onChangeInputValue = (event, attr) => {
      let newValue = event.target.value;

      if ('padding' === type) {
        // No negative values allowed here.
        newValue = newValue.toString().replace(/-/g, '');
      }

      if ('' === newValue) {
        this.onReset(attr);
        return;
      }

      this.onChangeAttr(newValue, attr);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wb-dimensions-control-inputs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "wb-dimensions-control-input-number",
      type: "number",
      value: attributes[attrTop] ? attributes[attrTop] : '',
      min: type === 'padding' ? 0 : undefined,
      "data-attribute": type,
      onChange: val => onChangeInputValue(val, 'attrTop'),
      disabled: this.checkDisableInput('attrTop')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "wb-dimensions-control-input-number",
      type: "number",
      value: attributes[attrRight] ? attributes[attrRight] : '',
      min: type === 'padding' ? 0 : undefined,
      "data-attribute": type,
      onChange: val => onChangeInputValue(val, 'attrRight'),
      disabled: this.checkDisableInput('attrRight')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "wb-dimensions-control-input-number",
      type: "number",
      value: attributes[attrBottom] ? attributes[attrBottom] : '',
      min: type === 'padding' ? 0 : undefined,
      "data-attribute": type,
      onChange: val => onChangeInputValue(val, 'attrBottom'),
      disabled: this.checkDisableInput('attrBottom')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "wb-dimensions-control-input-number",
      type: "number",
      value: attributes[attrLeft] ? attributes[attrLeft] : '',
      min: type === 'padding' ? 0 : undefined,
      "data-attribute": type,
      onChange: val => onChangeInputValue(val, 'attrLeft'),
      disabled: this.checkDisableInput('attrLeft')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link values together', 'woostify-block')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isSmall: true,
      isPrimary: this.state.isLinkedValues,
      onClick: this.onChangeLinkedValues
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "admin-links"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wb-dimensions-control-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wb-dimensions-control-input-label"
    }, labelTop), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wb-dimensions-control-input-label"
    }, labelRight), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wb-dimensions-control-input-label"
    }, labelBottom), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wb-dimensions-control-input-label"
    }, labelLeft), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wb-dimensions-control-input-label blank"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WoostifyDimensionsControl);

/***/ }),

/***/ "./src/components/controls/font-family-picker/index.js":
/*!*************************************************************!*\
  !*** ./src/components/controls/font-family-picker/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _google_fonts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-fonts.json */ "./src/components/controls/font-family-picker/google-fonts.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);






class WoostifyFontFamilyPicker extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      fontFamily: this.props.selectedFont || ''
    };
  }

  render() {
    const {
      selectedFont,
      onChangeFontFamily
    } = this.props;
    const systemFonts = [{
      value: 'Arial',
      label: 'Arial'
    }, {
      value: 'Helvetica',
      label: 'Helvetica'
    }, {
      value: 'Times New Roman',
      label: 'Times New Roman'
    }, {
      value: 'Georgia',
      label: 'Georgia'
    }];
    const googleFontsList = [];
    Object.keys(_google_fonts_json__WEBPACK_IMPORTED_MODULE_1__).forEach(k => {
      googleFontsList.push({
        value: k,
        label: k
      });
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Family', 'woostify-block'),
      value: this.state.fontFamily,
      onChange: newFont => {
        this.setState({
          fontFamily: newFont
        });
        onChangeFontFamily(newFont);
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select font', 'woostify-block')), systemFonts.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('System fonts', 'woostify-block')
    }, systemFonts.map((option, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: `${option.label}-${option.value}-${index}`,
      value: option.value
    }, option.label))), googleFontsList.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Google fonts', 'woostify-block')
    }, googleFontsList.map((option, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: `${option.label}-${option.value}-${index}`,
      value: option.value
    }, option.label)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WoostifyFontFamilyPicker);

/***/ }),

/***/ "./src/components/controls/icon-toggle/index.js":
/*!******************************************************!*\
  !*** ./src/components/controls/icon-toggle/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);





var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

const IconToggleControl = props => {
  const {
    value,
    options,
    labelPosition = 'right'
  } = props;
  const [isMouseHover, setIsMouseHover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isOpenContent, setIsOpenContent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const buttonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const toggleOffset = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const index = props.options.findIndex(el => el.value === value.toLowerCase());
    return index / options.length * 100;
  }, [options, value]); // Close the toggle content if the user clicks outside.

  const handleOnClickOutside = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    var _window$wp, _window$wp$media, _window$wp$media$fram, _window$wp$media$fram2;

    // Do not do anything if the Media Manager is open.
    if ((_window$wp = window.wp) !== null && _window$wp !== void 0 && (_window$wp$media = _window$wp.media) !== null && _window$wp$media !== void 0 && (_window$wp$media$fram = _window$wp$media.frame) !== null && _window$wp$media$fram !== void 0 && (_window$wp$media$fram2 = _window$wp$media$fram.el) !== null && _window$wp$media$fram2 !== void 0 && _window$wp$media$fram2.clientHeight) {
      return;
    }

    if (isOpenContent) {
      var _event$target;

      const closest = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.closest('.wb-base-control-responsive-toggle');

      if (closest !== buttonRef.current) {
        setIsOpenContent(false);
      }
    }
  }); // Assign the outside click listener.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.addEventListener('click', handleOnClickOutside);
    return () => document.body.removeEventListener('click', handleOnClickOutside);
  }, [handleOnClickOutside]);

  if (options.length <= 1) {
    return null;
  }

  const toggleBtnClassName = classNames('wb-base-control-responsive-toggle', {
    'is-open': isOpenContent
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: toggleBtnClassName,
    ref: buttonRef
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control-toggle__wrapper",
    style: {
      transform: `translateY(-${toggleOffset}%)`
    }
  }, options.length > 1 && options.map((option, i) => {
    const label = option.label || option.value;
    const tooltip = !isOpenContent ? props.label || label : props.buttonsLabel ? label : '';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: i,
      onMouseEnter: () => setIsMouseHover(option.value),
      onMouseLeave: () => setIsMouseHover(false)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: value.toLowerCase() === option.value ? 'is-active' : '',
      onClick: () => {
        if (!isOpenContent) {
          setIsOpenContent(true);
        } else {
          setIsOpenContent(false);
          props.onChange(option.value);
        }
      }
    }, option.icon ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: option.icon
    }) : label), tooltip && isMouseHover === option.value && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      position: `middle ${labelPosition}`,
      className: "wb-responsive-toggle-popover"
    }, option.tooltip || tooltip));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.memo)(IconToggleControl));

/***/ }),

/***/ "./src/components/controls/responsive-toggle/index.js":
/*!************************************************************!*\
  !*** ./src/components/controls/responsive-toggle/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_device_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../get-device-type */ "./src/components/get-device-type.js");
/* harmony import */ var _icon_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon-toggle */ "./src/components/controls/icon-toggle/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);






const DEVICE_TYPES = {
  desktop: 'Desktop',
  tablet: 'Tablet',
  mobile: 'Mobile'
};
const DEVICE_TYPES_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Desktop', 'woostify-block'),
  value: 'desktop',
  icon: 'desktop'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Tablet', 'woostify-block'),
  value: 'tablet',
  icon: 'tablet'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Mobile', 'woostify-block'),
  value: 'mobile',
  icon: 'smartphone'
}];

const ResponsiveToggle = props => {
  const deviceType = (0,_get_device_type__WEBPACK_IMPORTED_MODULE_1__.getDeviceType)();
  const setDeviceType = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(device => {
    const {
      __experimentalSetPreviewDeviceType: setPreviewDeviceType
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/edit-post');
    setPreviewDeviceType(DEVICE_TYPES[device]);
  }, []);
  const devices = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return DEVICE_TYPES_OPTIONS.filter(_ref => {
      var _props$devices;

      let {
        value
      } = _ref;
      return (_props$devices = props.devices) === null || _props$devices === void 0 ? void 0 : _props$devices.includes(value);
    });
  }, [props.devices]);

  if (devices <= 1) {
    return null;
  }

  if (!deviceType) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: deviceType,
    options: devices,
    onChange: device => setDeviceType(device),
    buttonsLabel: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.memo)(ResponsiveToggle));

/***/ }),

/***/ "./src/components/controls/typography/index.js":
/*!*****************************************************!*\
  !*** ./src/components/controls/typography/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _font_family_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../font-family-picker */ "./src/components/controls/font-family-picker/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "./src/components/controls/base/index.js");
/* harmony import */ var _get_device_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../get-device-type */ "./src/components/get-device-type.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);










const WoostifyTypographyControl = props => {
  const [selectedFontWeight, setSelectedFontWeight] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('');
  const [selectedTextTransform, setSelectedTextTransform] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('');
  const [selectedFontStyle, setSelectedFontStyle] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('');
  const [selectedLineHeight, setSelectedLineHeight] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    selectedLineHeight: '',
    selectedLineHeightTablet: '',
    selectedLineHeightMobile: ''
  });
  const [selectedFontSize, setSelectedFontSize] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    selectedFontSize: '',
    selectedFontSizeTablet: '',
    selectedFontSizeMobile: ''
  });
  const [selectedLetterSpacing, setSelectedLetterSpacing] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    selectedLetterSpacing: '',
    selectedLetterSpacingTablet: '',
    selectedLetterSpacingMobile: ''
  });
  const fontWeightList = [{
    label: '100',
    value: '100'
  }, {
    label: '200',
    value: '200'
  }, {
    label: '300',
    value: '300'
  }, {
    label: '400',
    value: '400'
  }, {
    label: '500',
    value: '500'
  }, {
    label: '600',
    value: '600'
  }, {
    label: '700',
    value: '700'
  }, {
    label: '800',
    value: '800'
  }, {
    label: '900',
    value: '900'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'woostify-block'),
    value: ''
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'woostify-block'),
    value: 'normal'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bold', 'woostify-block'),
    value: 'bold'
  }];
  const textTransformList = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'woostify-block'),
    value: ''
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Uppercase', 'woostify-block'),
    value: 'uppercase'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lowercase', 'woostify-block'),
    value: 'lowercase'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Capitalize', 'woostify-block'),
    value: 'capitalize'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'woostify-block'),
    value: 'none'
  }];
  const deviceSuffix = (0,_get_device_type__WEBPACK_IMPORTED_MODULE_6__.getDeviceSuffix)();
  const {
    attributes,
    setAttributes,
    attrFontFamily,
    attrFontWeight,
    attrTextTransform,
    attrFontStyle,
    attrLineHeight,
    attrLineHeightUnit,
    attrFontSize,
    attrFontSizeUnit,
    fontSizeUnits,
    lineHeightUnits,
    attrLetterSpacing
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_font_family_picker__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    selectedFont: attributes[attrFontFamily],
    onChangeFontFamily: val => {
      setAttributes({
        [attrFontFamily]: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_base__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'woostify-block'),
    responsive: ['desktop', 'tablet', 'mobile'],
    units: fontSizeUnits || ['px', 'em'],
    selectedUnit: attributes[attrFontSizeUnit + deviceSuffix],
    onUnitClick: unit => {
      setAttributes({
        [attrFontSizeUnit + deviceSuffix]: unit
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    value: selectedFontSize['selectedFontSize' + deviceSuffix] || attributes[attrFontSize + deviceSuffix],
    min: 0,
    onChange: val => {
      setSelectedFontSize({ ...selectedFontSize,
        ['selectedFontSize' + deviceSuffix]: val
      });
      setAttributes({
        [attrFontSize + deviceSuffix]: val
      });
    },
    max: 200,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: selectedFontWeight || attributes[attrFontWeight],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Weight', 'woostify-block'),
    options: fontWeightList,
    onChange: val => {
      setSelectedFontWeight(val);
      setAttributes({
        [attrFontWeight]: val
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: selectedTextTransform || attributes[attrTextTransform],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Transform', 'woostify-block'),
    options: textTransformList,
    onChange: val => {
      setSelectedTextTransform(val);
      setAttributes({
        [attrTextTransform]: val
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: selectedFontStyle || attributes[attrFontStyle],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Style', 'woostify-block'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'woostify-block'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'woostify-block'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Italic', 'woostify-block'),
      value: 'italic'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Oblique', 'woostify-block'),
      value: 'oblique'
    }],
    onChange: val => {
      setSelectedFontStyle(val);
      setAttributes({
        [attrFontStyle]: val
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_base__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line-Height', 'woostify-block'),
    responsive: ['desktop', 'tablet', 'mobile'],
    units: lineHeightUnits || ['px', 'em'],
    selectedUnit: attributes[attrLineHeightUnit + deviceSuffix],
    onUnitClick: unit => {
      setAttributes({
        [attrLineHeightUnit + deviceSuffix]: unit
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    value: selectedLineHeight['selectedLineHeight' + deviceSuffix] || attributes[attrLineHeight + deviceSuffix],
    min: 0,
    onChange: val => {
      setSelectedLineHeight({ ...selectedLineHeight,
        ['selectedLineHeight' + deviceSuffix]: val
      });
      setAttributes({
        [attrLineHeight + deviceSuffix]: val
      });
    },
    max: 200,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_base__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Letter Spacing', 'woostify-block'),
    responsive: ['desktop', 'tablet', 'mobile']
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    value: selectedLetterSpacing['selectedLetterSpacing' + deviceSuffix] || attributes[attrLetterSpacing + deviceSuffix],
    min: 0,
    onChange: val => {
      setSelectedLetterSpacing({ ...selectedLetterSpacing,
        ['selectedLetterSpacing' + deviceSuffix]: val
      });
      setAttributes({
        [attrLetterSpacing + deviceSuffix]: val
      });
    },
    max: 100,
    step: 0.1,
    allowReset: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WoostifyTypographyControl);

/***/ }),

/***/ "./src/components/get-device-type.js":
/*!*******************************************!*\
  !*** ./src/components/get-device-type.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDeviceSuffix": function() { return /* binding */ getDeviceSuffix; },
/* harmony export */   "getDeviceType": function() { return /* binding */ getDeviceType; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const getDeviceType = () => {
  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType: getPreviewDeviceType
    } = select('core/edit-post') || false;

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
const getDeviceSuffix = () => {
  let deviceSuffix = '';
  let currDevice = getDeviceType();

  if ('Tablet' === currDevice) {
    deviceSuffix = 'Tablet';
  }

  if ('Mobile' === currDevice) {
    deviceSuffix = 'Mobile';
  }

  return deviceSuffix;
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/first-block/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/first-block/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/first-block/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/first-block/style.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/components/controls/font-family-picker/google-fonts.json":
/*!**********************************************************************!*\
  !*** ./src/components/controls/font-family-picker/google-fonts.json ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"Roboto":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Open Sans":{"weight":["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Noto Sans JP":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lato":{"weight":["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Montserrat":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Condensed":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Source Sans Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Oswald":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Poppins":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Mono":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"monospace"},"Noto Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Raleway":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"PT Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Roboto Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Merriweather":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Ubuntu":{"weight":["300","300italic","regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Playfair Display":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Nunito":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Sans KR":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Open Sans Condensed":{"weight":["300","300italic","700"],"fallback":"sans-serif"},"Rubik":{"weight":["300","regular","500","600","700","800","900","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Lora":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Work Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Mukta":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans TC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Nunito Sans":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"PT Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Nanum Gothic":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Inter":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Fira Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Quicksand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Titillium Web":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],"fallback":"sans-serif"},"Hind Siliguri":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Karla":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Barlow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Inconsolata":{"weight":["200","300","regular","500","600","700","800","900"],"fallback":"monospace"},"Heebo":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Noto Sans SC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Oxygen":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Source Code Pro":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"monospace"},"Anton":{"weight":["regular"],"fallback":"sans-serif"},"Josefin Sans":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Arimo":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"PT Sans Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"IBM Plex Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Dosis":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans HK":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Libre Franklin":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Libre Baskerville":{"weight":["regular","italic","700"],"fallback":"serif"},"Cabin":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Bitter":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Crimson Text":{"weight":["regular","italic","600","600italic","700","700italic"],"fallback":"serif"},"Bebas Neue":{"weight":["regular"],"fallback":"display"},"Lobster":{"weight":["regular"],"fallback":"display"},"Yanone Kaffeesatz":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Dancing Script":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Cairo":{"weight":["200","300","regular","600","700","900"],"fallback":"sans-serif"},"Abel":{"weight":["regular"],"fallback":"sans-serif"},"Fjalla One":{"weight":["regular"],"fallback":"sans-serif"},"Varela Round":{"weight":["regular"],"fallback":"sans-serif"},"Source Serif Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"serif"},"Arvo":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"EB Garamond":{"weight":["regular","500","600","700","800","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Barlow Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Architects Daughter":{"weight":["regular"],"fallback":"handwriting"},"Zilla Slab":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Indie Flower":{"weight":["regular"],"fallback":"handwriting"},"Mulish":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Comfortaa":{"weight":["300","regular","500","600","700"],"fallback":"display"},"DM Sans":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Pacifico":{"weight":["regular"],"fallback":"handwriting"},"Exo 2":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Kanit":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Prompt":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Shadows Into Light":{"weight":["regular"],"fallback":"handwriting"},"Questrial":{"weight":["regular"],"fallback":"sans-serif"},"Merriweather Sans":{"weight":["300","regular","500","600","700","800","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Teko":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Balsamiq Sans":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Asap":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind Madurai":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Cormorant Garamond":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Antic Slab":{"weight":["regular"],"fallback":"serif"},"Archivo Narrow":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Overpass":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Abril Fatface":{"weight":["regular"],"fallback":"display"},"Slabo 27px":{"weight":["regular"],"fallback":"serif"},"Exo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Assistant":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Maven Pro":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Domine":{"weight":["regular","500","600","700"],"fallback":"serif"},"Fira Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Caveat":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Rajdhani":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"IBM Plex Serif":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Martel":{"weight":["200","300","regular","600","700","800","900"],"fallback":"serif"},"Play":{"weight":["regular","700"],"fallback":"sans-serif"},"Amatic SC":{"weight":["regular","700"],"fallback":"handwriting"},"Bree Serif":{"weight":["regular"],"fallback":"serif"},"Tajawal":{"weight":["200","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noto Serif JP":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Righteous":{"weight":["regular"],"fallback":"display"},"Satisfy":{"weight":["regular"],"fallback":"handwriting"},"Signika":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Catamaran":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Acme":{"weight":["regular"],"fallback":"sans-serif"},"Manrope":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Fredoka One":{"weight":["regular"],"fallback":"display"},"Nanum Myeongjo":{"weight":["regular","700","800"],"fallback":"serif"},"ABeeZee":{"weight":["regular","italic"],"fallback":"sans-serif"},"Amiri":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Patrick Hand":{"weight":["regular"],"fallback":"handwriting"},"PT Sans Caption":{"weight":["regular","700"],"fallback":"sans-serif"},"Archivo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Alfa Slab One":{"weight":["regular"],"fallback":"display"},"Cinzel":{"weight":["regular","500","600","700","800","900"],"fallback":"serif"},"Crete Round":{"weight":["regular","italic"],"fallback":"serif"},"Permanent Marker":{"weight":["regular"],"fallback":"handwriting"},"Alegreya Sans":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Almarai":{"weight":["300","regular","700","800"],"fallback":"sans-serif"},"Barlow Semi Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Russo One":{"weight":["regular"],"fallback":"sans-serif"},"Vollkorn":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Sarabun":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Krona One":{"weight":["regular"],"fallback":"sans-serif"},"M PLUS Rounded 1c":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noticia Text":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Courgette":{"weight":["regular"],"fallback":"handwriting"},"Monda":{"weight":["regular","700"],"fallback":"sans-serif"},"Alegreya":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Frank Ruhl Libre":{"weight":["300","regular","500","700","900"],"fallback":"serif"},"Patua One":{"weight":["regular"],"fallback":"display"},"Ubuntu Condensed":{"weight":["regular"],"fallback":"sans-serif"},"Great Vibes":{"weight":["regular"],"fallback":"handwriting"},"Quattrocento Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"M PLUS 1p":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Spartan":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yantramanav":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lobster Two":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Archivo Black":{"weight":["regular"],"fallback":"sans-serif"},"Kaushan Script":{"weight":["regular"],"fallback":"handwriting"},"Tinos":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Cardo":{"weight":["regular","italic","700"],"fallback":"serif"},"Orbitron":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Sacramento":{"weight":["regular"],"fallback":"handwriting"},"IBM Plex Mono":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"monospace"},"Francois One":{"weight":["regular"],"fallback":"sans-serif"},"Luckiest Guy":{"weight":["regular"],"fallback":"display"},"Gothic A1":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Kalam":{"weight":["300","regular","700"],"fallback":"handwriting"},"Parisienne":{"weight":["regular"],"fallback":"handwriting"},"Gloria Hallelujah":{"weight":["regular"],"fallback":"handwriting"},"Didact Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Cantarell":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Press Start 2P":{"weight":["regular"],"fallback":"display"},"Jost":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Rokkitt":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Paytone One":{"weight":["regular"],"fallback":"sans-serif"},"Prata":{"weight":["regular"],"fallback":"serif"},"Baloo 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Cuprum":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Chivo":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Encode Sans":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"News Cycle":{"weight":["regular","700"],"fallback":"sans-serif"},"Old Standard TT":{"weight":["regular","italic","700"],"fallback":"serif"},"Hind Guntur":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Pathway Gothic One":{"weight":["regular"],"fallback":"sans-serif"},"Red Hat Display":{"weight":["regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Public Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Secular One":{"weight":["regular"],"fallback":"sans-serif"},"Volkhov":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Concert One":{"weight":["regular"],"fallback":"display"},"Asap Condensed":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Montserrat Alternates":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Ropa Sans":{"weight":["regular","italic"],"fallback":"sans-serif"},"Josefin Slab":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"serif"},"Poiret One":{"weight":["regular"],"fallback":"display"},"Passion One":{"weight":["regular","700","900"],"fallback":"display"},"Padauk":{"weight":["regular","700"],"fallback":"sans-serif"},"Changa":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Saira Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Ultra":{"weight":["regular"],"fallback":"serif"},"Quattrocento":{"weight":["regular","700"],"fallback":"serif"},"Arapey":{"weight":["regular","italic"],"fallback":"serif"},"Vidaloka":{"weight":["regular"],"fallback":"serif"},"Playfair Display SC":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Cookie":{"weight":["regular"],"fallback":"handwriting"},"Chakra Petch":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Istok Web":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Cormorant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"DM Serif Display":{"weight":["regular","italic"],"fallback":"serif"},"Neuton":{"weight":["200","300","regular","italic","700","800"],"fallback":"serif"},"Spectral":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Sawarabi Mincho":{"weight":["regular"],"fallback":"sans-serif"},"Lemonada":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Yellowtail":{"weight":["regular"],"fallback":"handwriting"},"Handlee":{"weight":["regular"],"fallback":"handwriting"},"Merienda":{"weight":["regular","700"],"fallback":"handwriting"},"Philosopher":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Sanchez":{"weight":["regular","italic"],"fallback":"serif"},"Hammersmith One":{"weight":["regular"],"fallback":"sans-serif"},"Special Elite":{"weight":["regular"],"fallback":"display"},"Economica":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Staatliches":{"weight":["regular"],"fallback":"display"},"Sriracha":{"weight":["regular"],"fallback":"handwriting"},"Hind Vadodara":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Monoton":{"weight":["regular"],"fallback":"display"},"Ruda":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Advent Pro":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Saira":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Homemade Apple":{"weight":["regular"],"fallback":"handwriting"},"Sigmar One":{"weight":["regular"],"fallback":"display"},"Mitr":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Bangers":{"weight":["regular"],"fallback":"display"},"Khand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Faustina":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Saira Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cabin Condensed":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Gudea":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Fira Sans Extra Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"DM Serif Text":{"weight":["regular","italic"],"fallback":"serif"},"El Messiri":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Electrolize":{"weight":["regular"],"fallback":"sans-serif"},"Taviraj":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"PT Mono":{"weight":["regular"],"fallback":"monospace"},"Gentium Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Space Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Alice":{"weight":["regular"],"fallback":"serif"},"Unica One":{"weight":["regular"],"fallback":"display"},"Ubuntu Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Pragati Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"Noto Serif TC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Amaranth":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Karma":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Actor":{"weight":["regular"],"fallback":"sans-serif"},"Nanum Pen Script":{"weight":["regular"],"fallback":"handwriting"},"Noto Serif SC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Tangerine":{"weight":["regular","700"],"fallback":"handwriting"},"Carter One":{"weight":["regular"],"fallback":"display"},"Neucha":{"weight":["regular"],"fallback":"handwriting"},"Unna":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Pontano Sans":{"weight":["regular"],"fallback":"sans-serif"},"Bai Jamjuree":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marck Script":{"weight":["regular"],"fallback":"handwriting"},"BenchNine":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Fugaz One":{"weight":["regular"],"fallback":"display"},"Yeseva One":{"weight":["regular"],"fallback":"display"},"Eczar":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Bad Script":{"weight":["regular"],"fallback":"handwriting"},"Viga":{"weight":["regular"],"fallback":"sans-serif"},"Gentium Book Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jura":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Allura":{"weight":["regular"],"fallback":"handwriting"},"Palanquin":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Sawarabi Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Rock Salt":{"weight":["regular"],"fallback":"handwriting"},"Lusitana":{"weight":["regular","700"],"fallback":"serif"},"Alef":{"weight":["regular","700"],"fallback":"sans-serif"},"Julius Sans One":{"weight":["regular"],"fallback":"sans-serif"},"Tenor Sans":{"weight":["regular"],"fallback":"sans-serif"},"Nothing You Could Do":{"weight":["regular"],"fallback":"handwriting"},"Cutive Mono":{"weight":["regular"],"fallback":"monospace"},"Khula":{"weight":["300","regular","600","700","800"],"fallback":"sans-serif"},"Adamina":{"weight":["regular"],"fallback":"serif"},"Playball":{"weight":["regular"],"fallback":"display"},"Audiowide":{"weight":["regular"],"fallback":"display"},"Jaldi":{"weight":["regular","700"],"fallback":"sans-serif"},"Black Ops One":{"weight":["regular"],"fallback":"display"},"Signika Negative":{"weight":["300","regular","600","700"],"fallback":"sans-serif"},"Shadows Into Light Two":{"weight":["regular"],"fallback":"handwriting"},"Armata":{"weight":["regular"],"fallback":"sans-serif"},"Mali":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"handwriting"},"Antic":{"weight":["regular"],"fallback":"sans-serif"},"Varela":{"weight":["regular"],"fallback":"sans-serif"},"Berkshire Swash":{"weight":["regular"],"fallback":"handwriting"},"Aleo":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Gelasio":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Rufina":{"weight":["regular","700"],"fallback":"serif"},"Markazi Text":{"weight":["regular","500","600","700"],"fallback":"serif"},"Nanum Gothic Coding":{"weight":["regular","700"],"fallback":"monospace"},"Allan":{"weight":["regular","700"],"fallback":"display"},"Noto Serif KR":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Abhaya Libre":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Quantico":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Marcellus":{"weight":["regular"],"fallback":"serif"},"Sorts Mill Goudy":{"weight":["regular","italic"],"fallback":"serif"},"Alata":{"weight":["regular"],"fallback":"sans-serif"},"Knewave":{"weight":["regular"],"fallback":"display"},"Alex Brush":{"weight":["regular"],"fallback":"handwriting"},"Aclonica":{"weight":["regular"],"fallback":"sans-serif"},"Gruppo":{"weight":["regular"],"fallback":"display"},"Damion":{"weight":["regular"],"fallback":"handwriting"},"Itim":{"weight":["regular"],"fallback":"handwriting"},"Bungee":{"weight":["regular"],"fallback":"display"},"Gochi Hand":{"weight":["regular"],"fallback":"handwriting"},"Mr Dafoe":{"weight":["regular"],"fallback":"handwriting"},"Freckle Face":{"weight":["regular"],"fallback":"display"},"Baloo Chettan 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Trirong":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Kosugi Maru":{"weight":["regular"],"fallback":"sans-serif"},"Rubik Mono One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Mono":{"weight":["regular","500","700"],"fallback":"monospace"},"Cantata One":{"weight":["regular"],"fallback":"serif"},"Suez One":{"weight":["regular"],"fallback":"serif"},"Niconne":{"weight":["regular"],"fallback":"handwriting"},"Six Caps":{"weight":["regular"],"fallback":"sans-serif"},"Miriam Libre":{"weight":["regular","700"],"fallback":"sans-serif"},"Sarala":{"weight":["regular","700"],"fallback":"sans-serif"},"Sintony":{"weight":["regular","700"],"fallback":"sans-serif"},"Titan One":{"weight":["regular"],"fallback":"display"},"Encode Sans Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cousine":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"PT Serif Caption":{"weight":["regular","italic"],"fallback":"serif"},"Courier Prime":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Overlock":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"display"},"Allerta":{"weight":["regular"],"fallback":"sans-serif"},"Arsenal":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Black Han Sans":{"weight":["regular"],"fallback":"sans-serif"},"Squada One":{"weight":["regular"],"fallback":"display"},"Lateef":{"weight":["regular"],"fallback":"handwriting"},"Arima Madurai":{"weight":["100","200","300","regular","500","700","800","900"],"fallback":"display"},"Ramabhadra":{"weight":["regular"],"fallback":"sans-serif"},"Covered By Your Grace":{"weight":["regular"],"fallback":"handwriting"},"Martel Sans":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Rancho":{"weight":["regular"],"fallback":"handwriting"},"Enriqueta":{"weight":["regular","500","600","700"],"fallback":"serif"},"Syncopate":{"weight":["regular","700"],"fallback":"sans-serif"},"Pinyon Script":{"weight":["regular"],"fallback":"handwriting"},"Chewy":{"weight":["regular"],"fallback":"display"},"Oleo Script":{"weight":["regular","700"],"fallback":"display"},"Kreon":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Candal":{"weight":["regular"],"fallback":"sans-serif"},"Spinnaker":{"weight":["regular"],"fallback":"sans-serif"},"Reem Kufi":{"weight":["regular"],"fallback":"sans-serif"},"Krub":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Michroma":{"weight":["regular"],"fallback":"sans-serif"},"Annie Use Your Telescope":{"weight":["regular"],"fallback":"handwriting"},"Lilita One":{"weight":["regular"],"fallback":"display"},"Coda":{"weight":["regular","800"],"fallback":"display"},"Fredericka the Great":{"weight":["regular"],"fallback":"display"},"Mukta Malar":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bowlby One SC":{"weight":["regular"],"fallback":"display"},"Average":{"weight":["regular"],"fallback":"serif"},"Londrina Solid":{"weight":["100","300","regular","900"],"fallback":"display"},"New Tegomin":{"weight":["regular"],"fallback":"serif"},"Glegoo":{"weight":["regular","700"],"fallback":"serif"},"Pridi":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Boogaloo":{"weight":["regular"],"fallback":"display"},"Red Hat Text":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Aldrich":{"weight":["regular"],"fallback":"sans-serif"},"Basic":{"weight":["regular"],"fallback":"sans-serif"},"Capriola":{"weight":["regular"],"fallback":"sans-serif"},"Forum":{"weight":["regular"],"fallback":"display"},"Reenie Beanie":{"weight":["regular"],"fallback":"handwriting"},"Laila":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Alegreya Sans SC":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Share Tech Mono":{"weight":["regular"],"fallback":"monospace"},"Italianno":{"weight":["regular"],"fallback":"handwriting"},"Lalezar":{"weight":["regular"],"fallback":"display"},"Lexend Deca":{"weight":["regular"],"fallback":"sans-serif"},"Caveat Brush":{"weight":["regular"],"fallback":"handwriting"},"Shrikhand":{"weight":["regular"],"fallback":"display"},"Creepster":{"weight":["regular"],"fallback":"display"},"Kameron":{"weight":["regular","700"],"fallback":"serif"},"Coda Caption":{"weight":["800"],"fallback":"sans-serif"},"Goudy Bookletter 1911":{"weight":["regular"],"fallback":"serif"},"Coming Soon":{"weight":["regular"],"fallback":"handwriting"},"Saira Extra Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yrsa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Telex":{"weight":["regular"],"fallback":"sans-serif"},"Bevan":{"weight":["regular"],"fallback":"display"},"Voltaire":{"weight":["regular"],"fallback":"sans-serif"},"Days One":{"weight":["regular"],"fallback":"sans-serif"},"Cabin Sketch":{"weight":["regular","700"],"fallback":"display"},"Norican":{"weight":["regular"],"fallback":"handwriting"},"Rambla":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Mukta Vaani":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Average Sans":{"weight":["regular"],"fallback":"sans-serif"},"Arbutus Slab":{"weight":["regular"],"fallback":"serif"},"Sansita":{"weight":["regular","italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Mada":{"weight":["200","300","regular","500","600","700","900"],"fallback":"sans-serif"},"Just Another Hand":{"weight":["regular"],"fallback":"handwriting"},"Nobile":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Gilda Display":{"weight":["regular"],"fallback":"serif"},"VT323":{"weight":["regular"],"fallback":"monospace"},"Mandali":{"weight":["regular"],"fallback":"sans-serif"},"Caudex":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Anonymous Pro":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Bentham":{"weight":["regular"],"fallback":"serif"},"Overpass Mono":{"weight":["300","regular","600","700"],"fallback":"monospace"},"Sen":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Kadwa":{"weight":["regular","700"],"fallback":"serif"},"Cambay":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Yesteryear":{"weight":["regular"],"fallback":"handwriting"},"Molengo":{"weight":["regular"],"fallback":"sans-serif"},"Nixie One":{"weight":["regular"],"fallback":"display"},"Scada":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Crimson Pro":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Arizonia":{"weight":["regular"],"fallback":"handwriting"},"Racing Sans One":{"weight":["regular"],"fallback":"display"},"Scheherazade":{"weight":["regular","700"],"fallback":"serif"},"Seaweed Script":{"weight":["regular"],"fallback":"display"},"Belleza":{"weight":["regular"],"fallback":"sans-serif"},"Harmattan":{"weight":["regular","700"],"fallback":"sans-serif"},"Leckerli One":{"weight":["regular"],"fallback":"handwriting"},"Ovo":{"weight":["regular"],"fallback":"serif"},"Merienda One":{"weight":["regular"],"fallback":"handwriting"},"Holtwood One SC":{"weight":["regular"],"fallback":"serif"},"Cinzel Decorative":{"weight":["regular","700","900"],"fallback":"display"},"Literata":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mrs Saint Delafield":{"weight":["regular"],"fallback":"handwriting"},"Schoolbell":{"weight":["regular"],"fallback":"handwriting"},"Bungee Inline":{"weight":["regular"],"fallback":"display"},"Herr Von Muellerhoff":{"weight":["regular"],"fallback":"handwriting"},"Oranienbaum":{"weight":["regular"],"fallback":"serif"},"Baloo Tamma 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Sniglet":{"weight":["regular","800"],"fallback":"display"},"Bubblegum Sans":{"weight":["regular"],"fallback":"display"},"Rochester":{"weight":["regular"],"fallback":"handwriting"},"Judson":{"weight":["regular","italic","700"],"fallback":"serif"},"Marcellus SC":{"weight":["regular"],"fallback":"serif"},"Darker Grotesque":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Changa One":{"weight":["regular","italic"],"fallback":"display"},"Alegreya SC":{"weight":["regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Pattaya":{"weight":["regular"],"fallback":"sans-serif"},"Mallanna":{"weight":["regular"],"fallback":"sans-serif"},"Share":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Podkova":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Allerta Stencil":{"weight":["regular"],"fallback":"sans-serif"},"Charm":{"weight":["regular","700"],"fallback":"handwriting"},"Niramit":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Halant":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Graduate":{"weight":["regular"],"fallback":"display"},"Nanum Brush Script":{"weight":["regular"],"fallback":"handwriting"},"Amita":{"weight":["regular","700"],"fallback":"handwriting"},"Rozha One":{"weight":["regular"],"fallback":"serif"},"Kristi":{"weight":["regular"],"fallback":"handwriting"},"Biryani":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Lustria":{"weight":["regular"],"fallback":"serif"},"Delius":{"weight":["regular"],"fallback":"handwriting"},"Suranna":{"weight":["regular"],"fallback":"serif"},"Amethysta":{"weight":["regular"],"fallback":"serif"},"Contrail One":{"weight":["regular"],"fallback":"display"},"Averia Serif Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Do Hyeon":{"weight":["regular"],"fallback":"sans-serif"},"IBM Plex Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marvel":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Rye":{"weight":["regular"],"fallback":"display"},"Fauna One":{"weight":["regular"],"fallback":"serif"},"Corben":{"weight":["regular","700"],"fallback":"display"},"Cedarville Cursive":{"weight":["regular"],"fallback":"handwriting"},"Jockey One":{"weight":["regular"],"fallback":"sans-serif"},"Libre Caslon Text":{"weight":["regular","italic","700"],"fallback":"serif"},"Carrois Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Calligraffitti":{"weight":["regular"],"fallback":"handwriting"},"Trocchi":{"weight":["regular"],"fallback":"serif"},"Spectral SC":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Coustard":{"weight":["regular","900"],"fallback":"serif"},"Copse":{"weight":["regular"],"fallback":"serif"},"Athiti":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Carme":{"weight":["regular"],"fallback":"sans-serif"},"Rosario":{"weight":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Limelight":{"weight":["regular"],"fallback":"display"},"Jua":{"weight":["regular"],"fallback":"sans-serif"},"Petit Formal Script":{"weight":["regular"],"fallback":"handwriting"},"Love Ya Like A Sister":{"weight":["regular"],"fallback":"display"},"GFS Didot":{"weight":["regular"],"fallback":"serif"},"Aladin":{"weight":["regular"],"fallback":"handwriting"},"Palanquin Dark":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Amiko":{"weight":["regular","600","700"],"fallback":"sans-serif"},"Cormorant Infant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Wallpoet":{"weight":["regular"],"fallback":"display"},"Magra":{"weight":["regular","700"],"fallback":"sans-serif"},"Grand Hotel":{"weight":["regular"],"fallback":"handwriting"},"Sunflower":{"weight":["300","500","700"],"fallback":"sans-serif"},"Big Shoulders Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Slabo 13px":{"weight":["regular"],"fallback":"serif"},"Pangolin":{"weight":["regular"],"fallback":"handwriting"},"Mr De Haviland":{"weight":["regular"],"fallback":"handwriting"},"K2D":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Marmelad":{"weight":["regular"],"fallback":"sans-serif"},"Thasadith":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"La Belle Aurore":{"weight":["regular"],"fallback":"handwriting"},"Hanuman":{"weight":["regular","700"],"fallback":"serif"},"Metrophobic":{"weight":["regular"],"fallback":"sans-serif"},"Epilogue":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Radley":{"weight":["regular","italic"],"fallback":"serif"},"Poly":{"weight":["regular","italic"],"fallback":"serif"},"Commissioner":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Averia Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"IM Fell Double Pica":{"weight":["regular","italic"],"fallback":"serif"},"Comic Neue":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"handwriting"},"Baskervville":{"weight":["regular","italic"],"fallback":"serif"},"Kelly Slab":{"weight":["regular"],"fallback":"display"},"Oxygen Mono":{"weight":["regular"],"fallback":"monospace"},"Maitree":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Buenard":{"weight":["regular","700"],"fallback":"serif"},"Duru Sans":{"weight":["regular"],"fallback":"sans-serif"},"Baloo Da 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Grandstander":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Balthazar":{"weight":["regular"],"fallback":"serif"},"ZCOOL XiaoWei":{"weight":["regular"],"fallback":"serif"},"Cutive":{"weight":["regular"],"fallback":"serif"},"Antic Didone":{"weight":["regular"],"fallback":"serif"},"Waiting for the Sunrise":{"weight":["regular"],"fallback":"handwriting"},"B612 Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Chonburi":{"weight":["regular"],"fallback":"display"},"Montaga":{"weight":["regular"],"fallback":"serif"},"UnifrakturMaguntia":{"weight":["regular"],"fallback":"display"},"Kosugi":{"weight":["regular"],"fallback":"sans-serif"},"Gravitas One":{"weight":["regular"],"fallback":"display"},"Mirza":{"weight":["regular","500","600","700"],"fallback":"display"},"Manjari":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Alike":{"weight":["regular"],"fallback":"serif"},"Lekton":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Sora":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Gabriela":{"weight":["regular"],"fallback":"serif"},"Lemon":{"weight":["regular"],"fallback":"display"},"Esteban":{"weight":["regular"],"fallback":"serif"},"Alatsi":{"weight":["regular"],"fallback":"sans-serif"},"Turret Road":{"weight":["200","300","regular","500","700","800"],"fallback":"display"},"Monsieur La Doulaise":{"weight":["regular"],"fallback":"handwriting"},"Pompiere":{"weight":["regular"],"fallback":"display"},"Cormorant SC":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Kurale":{"weight":["regular"],"fallback":"serif"},"Frijole":{"weight":["regular"],"fallback":"display"},"Rammetto One":{"weight":["regular"],"fallback":"display"},"Chelsea Market":{"weight":["regular"],"fallback":"display"},"Megrim":{"weight":["regular"],"fallback":"display"},"IM Fell English":{"weight":["regular","italic"],"fallback":"serif"},"Oregano":{"weight":["regular","italic"],"fallback":"display"},"Andada":{"weight":["regular"],"fallback":"serif"},"Mate":{"weight":["regular","italic"],"fallback":"serif"},"Convergence":{"weight":["regular"],"fallback":"sans-serif"},"Rouge Script":{"weight":["regular"],"fallback":"handwriting"},"Bowlby One":{"weight":["regular"],"fallback":"display"},"Emilys Candy":{"weight":["regular"],"fallback":"display"},"Wendy One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Code":{"weight":["300","regular","500","600","700"],"fallback":"monospace"},"Dawning of a New Day":{"weight":["regular"],"fallback":"handwriting"},"Sue Ellen Francisco":{"weight":["regular"],"fallback":"handwriting"},"Gurajada":{"weight":["regular"],"fallback":"serif"},"David Libre":{"weight":["regular","500","700"],"fallback":"serif"},"Sofia":{"weight":["regular"],"fallback":"handwriting"},"Short Stack":{"weight":["regular"],"fallback":"handwriting"},"Chau Philomene One":{"weight":["regular","italic"],"fallback":"sans-serif"},"Bellefair":{"weight":["regular"],"fallback":"serif"},"Belgrano":{"weight":["regular"],"fallback":"serif"},"Expletus Sans":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"display"},"Original Surfer":{"weight":["regular"],"fallback":"display"},"Doppio One":{"weight":["regular"],"fallback":"sans-serif"},"Be Vietnam":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Sail":{"weight":["regular"],"fallback":"display"},"Inder":{"weight":["regular"],"fallback":"sans-serif"},"Give You Glory":{"weight":["regular"],"fallback":"handwriting"},"IM Fell DW Pica":{"weight":["regular","italic"],"fallback":"serif"},"McLaren":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Bungee Shade":{"weight":["regular"],"fallback":"display"},"Baumans":{"weight":["regular"],"fallback":"display"},"Brawler":{"weight":["regular"],"fallback":"serif"},"Tenali Ramakrishna":{"weight":["regular"],"fallback":"sans-serif"},"Ceviche One":{"weight":["regular"],"fallback":"display"},"B612":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Zeyada":{"weight":["regular"],"fallback":"handwriting"},"Mountains of Christmas":{"weight":["regular","700"],"fallback":"display"},"Sedgwick Ave":{"weight":["regular"],"fallback":"handwriting"},"Gugi":{"weight":["regular"],"fallback":"display"},"Oleo Script Swash Caps":{"weight":["regular","700"],"fallback":"display"},"Skranji":{"weight":["regular","700"],"fallback":"display"},"Meddon":{"weight":["regular"],"fallback":"handwriting"},"NTR":{"weight":["regular"],"fallback":"sans-serif"},"Finger Paint":{"weight":["regular"],"fallback":"display"},"Blinker":{"weight":["100","200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Fanwood Text":{"weight":["regular","italic"],"fallback":"serif"},"Grenze Gotisch":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Hepta Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Anaheim":{"weight":["regular"],"fallback":"sans-serif"},"Major Mono Display":{"weight":["regular"],"fallback":"monospace"},"Quando":{"weight":["regular"],"fallback":"serif"},"Andika":{"weight":["regular"],"fallback":"sans-serif"},"Qwigley":{"weight":["regular"],"fallback":"handwriting"},"Vast Shadow":{"weight":["regular"],"fallback":"display"},"Happy Monkey":{"weight":["regular"],"fallback":"display"},"Montez":{"weight":["regular"],"fallback":"handwriting"},"Proza Libre":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Homenaje":{"weight":["regular"],"fallback":"sans-serif"},"Ma Shan Zheng":{"weight":["regular"],"fallback":"handwriting"},"Loved by the King":{"weight":["regular"],"fallback":"handwriting"},"Trade Winds":{"weight":["regular"],"fallback":"display"},"Stardos Stencil":{"weight":["regular","700"],"fallback":"display"},"Raleway Dots":{"weight":["regular"],"fallback":"display"},"Libre Barcode 39":{"weight":["regular"],"fallback":"display"},"Recursive":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Numans":{"weight":["regular"],"fallback":"sans-serif"},"RocknRoll One":{"weight":["regular"],"fallback":"sans-serif"},"Rakkas":{"weight":["regular"],"fallback":"display"},"Mouse Memoirs":{"weight":["regular"],"fallback":"sans-serif"},"BioRhyme":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Ranchers":{"weight":["regular"],"fallback":"display"},"Patrick Hand SC":{"weight":["regular"],"fallback":"handwriting"},"Codystar":{"weight":["300","regular"],"fallback":"display"},"Rasa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Meera Inimai":{"weight":["regular"],"fallback":"sans-serif"},"Clicker Script":{"weight":["regular"],"fallback":"handwriting"},"DM Mono":{"weight":["300","300italic","regular","italic","500","500italic"],"fallback":"monospace"},"Gaegu":{"weight":["300","regular","700"],"fallback":"handwriting"},"Aguafina Script":{"weight":["regular"],"fallback":"handwriting"},"Unkempt":{"weight":["regular","700"],"fallback":"display"},"Over the Rainbow":{"weight":["regular"],"fallback":"handwriting"},"Fondamento":{"weight":["regular","italic"],"fallback":"handwriting"},"Battambang":{"weight":["regular","700"],"fallback":"display"},"Cambo":{"weight":["regular"],"fallback":"serif"},"Crafty Girls":{"weight":["regular"],"fallback":"handwriting"},"Nova Mono":{"weight":["regular"],"fallback":"monospace"},"Tillana":{"weight":["regular","500","600","700","800"],"fallback":"handwriting"},"Alike Angular":{"weight":["regular"],"fallback":"serif"},"Kumbh Sans":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Katibeh":{"weight":["regular"],"fallback":"display"},"Sarpanch":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Antonio":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Mansalva":{"weight":["regular"],"fallback":"handwriting"},"Faster One":{"weight":["regular"],"fallback":"display"},"Federo":{"weight":["regular"],"fallback":"sans-serif"},"Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Hi Melody":{"weight":["regular"],"fallback":"handwriting"},"Euphoria Script":{"weight":["regular"],"fallback":"handwriting"},"Orienta":{"weight":["regular"],"fallback":"sans-serif"},"Space Grotesk":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Galada":{"weight":["regular"],"fallback":"display"},"Timmana":{"weight":["regular"],"fallback":"sans-serif"},"JetBrains Mono":{"weight":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"monospace"},"Baloo Thambi 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Averia Sans Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"UnifrakturCook":{"weight":["700"],"fallback":"display"},"Tauri":{"weight":["regular"],"fallback":"sans-serif"},"Share Tech":{"weight":["regular"],"fallback":"sans-serif"},"Walter Turncoat":{"weight":["regular"],"fallback":"handwriting"},"Geo":{"weight":["regular","italic"],"fallback":"sans-serif"},"Atma":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Almendra":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jomhuria":{"weight":["regular"],"fallback":"display"},"Strait":{"weight":["regular"],"fallback":"sans-serif"},"Encode Sans Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Metamorphous":{"weight":["regular"],"fallback":"display"},"Iceland":{"weight":["regular"],"fallback":"display"},"Ledger":{"weight":["regular"],"fallback":"serif"},"Poller One":{"weight":["regular"],"fallback":"display"},"Vollkorn SC":{"weight":["regular","600","700","900"],"fallback":"serif"},"Vesper Libre":{"weight":["regular","500","700","900"],"fallback":"serif"},"Aref Ruqaa":{"weight":["regular","700"],"fallback":"serif"},"Livvic":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Caladea":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Montserrat Subrayada":{"weight":["regular","700"],"fallback":"sans-serif"},"Vampiro One":{"weight":["regular"],"fallback":"display"},"Farro":{"weight":["300","regular","500","700"],"fallback":"sans-serif"},"New Rocker":{"weight":["regular"],"fallback":"display"},"Delius Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"Calistoga":{"weight":["regular"],"fallback":"display"},"Carrois Gothic SC":{"weight":["regular"],"fallback":"sans-serif"},"Italiana":{"weight":["regular"],"fallback":"serif"},"Inknut Antiqua":{"weight":["300","regular","500","600","700","800","900"],"fallback":"serif"},"Life Savers":{"weight":["regular","700","800"],"fallback":"display"},"Imprima":{"weight":["regular"],"fallback":"sans-serif"},"Mako":{"weight":["regular"],"fallback":"sans-serif"},"Lily Script One":{"weight":["regular"],"fallback":"display"},"Bilbo Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"IM Fell English SC":{"weight":["regular"],"fallback":"serif"},"Red Rose":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Shojumaru":{"weight":["regular"],"fallback":"display"},"Prosto One":{"weight":["regular"],"fallback":"display"},"Bodoni Moda":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mukta Mahee":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bubbler One":{"weight":["regular"],"fallback":"sans-serif"},"The Girl Next Door":{"weight":["regular"],"fallback":"handwriting"},"Artifika":{"weight":["regular"],"fallback":"serif"},"Cantora One":{"weight":["regular"],"fallback":"sans-serif"},"Scope One":{"weight":["regular"],"fallback":"serif"},"Yusei Magic":{"weight":["regular"],"fallback":"sans-serif"},"Oxanium":{"weight":["200","300","regular","500","600","700","800"],"fallback":"display"},"Tienne":{"weight":["regular","700","900"],"fallback":"serif"},"Salsa":{"weight":["regular"],"fallback":"display"},"Flamenco":{"weight":["300","regular"],"fallback":"display"},"Port Lligat Sans":{"weight":["regular"],"fallback":"sans-serif"},"Denk One":{"weight":["regular"],"fallback":"sans-serif"},"Fontdiner Swanky":{"weight":["regular"],"fallback":"display"},"Nova Round":{"weight":["regular"],"fallback":"display"},"Gafata":{"weight":["regular"],"fallback":"sans-serif"},"Cormorant Upright":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cherry Cream Soda":{"weight":["regular"],"fallback":"display"},"Asul":{"weight":["regular","700"],"fallback":"sans-serif"},"Big Shoulders Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Voces":{"weight":["regular"],"fallback":"display"},"Dynalight":{"weight":["regular"],"fallback":"display"},"Peralta":{"weight":["regular"],"fallback":"display"},"Mina":{"weight":["regular","700"],"fallback":"sans-serif"},"Headland One":{"weight":["regular"],"fallback":"serif"},"Medula One":{"weight":["regular"],"fallback":"display"},"Englebert":{"weight":["regular"],"fallback":"sans-serif"},"Nova Square":{"weight":["regular"],"fallback":"display"},"Delius Unicase":{"weight":["regular","700"],"fallback":"handwriting"},"Sumana":{"weight":["regular","700"],"fallback":"serif"},"Bilbo":{"weight":["regular"],"fallback":"handwriting"},"Engagement":{"weight":["regular"],"fallback":"handwriting"},"ZCOOL QingKe HuangYou":{"weight":["regular"],"fallback":"display"},"Fresca":{"weight":["regular"],"fallback":"sans-serif"},"Ranga":{"weight":["regular","700"],"fallback":"display"},"Orelega One":{"weight":["regular"],"fallback":"display"},"Zen Dots":{"weight":["regular"],"fallback":"display"},"Shippori Mincho":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Henny Penny":{"weight":["regular"],"fallback":"display"},"Della Respira":{"weight":["regular"],"fallback":"serif"},"Cherry Swash":{"weight":["regular","700"],"fallback":"display"},"Notable":{"weight":["regular"],"fallback":"sans-serif"},"Arya":{"weight":["regular","700"],"fallback":"sans-serif"},"Slackey":{"weight":["regular"],"fallback":"display"},"Vibur":{"weight":["regular"],"fallback":"handwriting"},"Coiny":{"weight":["regular"],"fallback":"display"},"Lexend Zetta":{"weight":["regular"],"fallback":"sans-serif"},"Elsie":{"weight":["regular","900"],"fallback":"display"},"Fjord One":{"weight":["regular"],"fallback":"serif"},"Puritan":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Just Me Again Down Here":{"weight":["regular"],"fallback":"handwriting"},"Khmer":{"weight":["regular"],"fallback":"display"},"Girassol":{"weight":["regular"],"fallback":"display"},"Bellota Text":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Yatra One":{"weight":["regular"],"fallback":"display"},"Stalemate":{"weight":["regular"],"fallback":"handwriting"},"Wire One":{"weight":["regular"],"fallback":"sans-serif"},"Spicy Rice":{"weight":["regular"],"fallback":"display"},"Saira Stencil One":{"weight":["regular"],"fallback":"display"},"Kite One":{"weight":["regular"],"fallback":"sans-serif"},"Port Lligat Slab":{"weight":["regular"],"fallback":"serif"},"Baloo Bhaina 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Pavanam":{"weight":["regular"],"fallback":"sans-serif"},"Eater":{"weight":["regular"],"fallback":"display"},"Text Me One":{"weight":["regular"],"fallback":"sans-serif"},"Ribeye":{"weight":["regular"],"fallback":"display"},"Pirata One":{"weight":["regular"],"fallback":"display"},"Amarante":{"weight":["regular"],"fallback":"display"},"Milonga":{"weight":["regular"],"fallback":"display"},"Habibi":{"weight":["regular"],"fallback":"serif"},"Ruslan Display":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Nokora":{"weight":["regular","700"],"fallback":"serif"},"Rowdies":{"weight":["300","regular","700"],"fallback":"display"},"Kranky":{"weight":["regular"],"fallback":"display"},"Bigelow Rules":{"weight":["regular"],"fallback":"display"},"League Script":{"weight":["regular"],"fallback":"handwriting"},"Swanky and Moo Moo":{"weight":["regular"],"fallback":"handwriting"},"Karantina":{"weight":["300","regular","700"],"fallback":"display"},"Lovers Quarrel":{"weight":["regular"],"fallback":"handwriting"},"Mate SC":{"weight":["regular"],"fallback":"serif"},"Manuale":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Germania One":{"weight":["regular"],"fallback":"display"},"Sura":{"weight":["regular","700"],"fallback":"serif"},"Sarina":{"weight":["regular"],"fallback":"display"},"Macondo Swash Caps":{"weight":["regular"],"fallback":"display"},"Kotta One":{"weight":["regular"],"fallback":"serif"},"IM Fell French Canon SC":{"weight":["regular"],"fallback":"serif"},"Julee":{"weight":["regular"],"fallback":"handwriting"},"Charmonman":{"weight":["regular","700"],"fallback":"handwriting"},"Shanti":{"weight":["regular"],"fallback":"sans-serif"},"Gamja Flower":{"weight":["regular"],"fallback":"handwriting"},"Averia Gruesa Libre":{"weight":["regular"],"fallback":"display"},"Stint Ultra Expanded":{"weight":["regular"],"fallback":"display"},"Uncial Antiqua":{"weight":["regular"],"fallback":"display"},"Mystery Quest":{"weight":["regular"],"fallback":"display"},"Goldman":{"weight":["regular","700"],"fallback":"display"},"Paprika":{"weight":["regular"],"fallback":"display"},"IM Fell French Canon":{"weight":["regular","italic"],"fallback":"serif"},"Prociono":{"weight":["regular"],"fallback":"serif"},"Kodchasan":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Text":{"weight":["regular"],"fallback":"display"},"Quintessential":{"weight":["regular"],"fallback":"handwriting"},"Moul":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128":{"weight":["regular"],"fallback":"display"},"Ramaraja":{"weight":["regular"],"fallback":"serif"},"Modak":{"weight":["regular"],"fallback":"display"},"Song Myung":{"weight":["regular"],"fallback":"serif"},"East Sea Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Crushed":{"weight":["regular"],"fallback":"display"},"Dekko":{"weight":["regular"],"fallback":"handwriting"},"Chilanka":{"weight":["regular"],"fallback":"handwriting"},"Hanalei Fill":{"weight":["regular"],"fallback":"display"},"Mogra":{"weight":["regular"],"fallback":"display"},"Baloo Tammudu 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Baloo Bhai 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Libre Barcode 39 Extended Text":{"weight":["regular"],"fallback":"display"},"Rosarivo":{"weight":["regular","italic"],"fallback":"serif"},"KoHo":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Offside":{"weight":["regular"],"fallback":"display"},"Reggae One":{"weight":["regular"],"fallback":"display"},"Syne":{"weight":["regular","500","600","700","800"],"fallback":"sans-serif"},"Zilla Slab Highlight":{"weight":["regular","700"],"fallback":"display"},"Donegal One":{"weight":["regular"],"fallback":"serif"},"Bellota":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Stoke":{"weight":["300","regular"],"fallback":"serif"},"Cormorant Unicase":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cagliostro":{"weight":["regular"],"fallback":"sans-serif"},"Rationale":{"weight":["regular"],"fallback":"sans-serif"},"Margarine":{"weight":["regular"],"fallback":"display"},"Sancreek":{"weight":["regular"],"fallback":"display"},"Inria Serif":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Overlock SC":{"weight":["regular"],"fallback":"display"},"Nosifer":{"weight":["regular"],"fallback":"display"},"Libre Barcode EAN13 Text":{"weight":["regular"],"fallback":"display"},"Yeon Sung":{"weight":["regular"],"fallback":"display"},"Ruluko":{"weight":["regular"],"fallback":"sans-serif"},"Simonetta":{"weight":["regular","italic","900","900italic"],"fallback":"display"},"Lakki Reddy":{"weight":["regular"],"fallback":"handwriting"},"Baloo Paaji 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Chango":{"weight":["regular"],"fallback":"display"},"Galdeano":{"weight":["regular"],"fallback":"sans-serif"},"Fahkwang":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Elsie Swash Caps":{"weight":["regular","900"],"fallback":"display"},"Buda":{"weight":["300"],"fallback":"display"},"Condiment":{"weight":["regular"],"fallback":"handwriting"},"Barrio":{"weight":["regular"],"fallback":"display"},"Chicle":{"weight":["regular"],"fallback":"display"},"Angkor":{"weight":["regular"],"fallback":"display"},"Akronim":{"weight":["regular"],"fallback":"display"},"Tomorrow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Sonsie One":{"weight":["regular"],"fallback":"display"},"Kumar One":{"weight":["regular"],"fallback":"display"},"Autour One":{"weight":["regular"],"fallback":"display"},"Libre Caslon Display":{"weight":["regular"],"fallback":"serif"},"Farsan":{"weight":["regular"],"fallback":"display"},"Fenix":{"weight":["regular"],"fallback":"serif"},"Solway":{"weight":["300","regular","500","700","800"],"fallback":"serif"},"Kulim Park":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Stint Ultra Condensed":{"weight":["regular"],"fallback":"display"},"Metal":{"weight":["regular"],"fallback":"display"},"Rum Raisin":{"weight":["regular"],"fallback":"sans-serif"},"Redressed":{"weight":["regular"],"fallback":"handwriting"},"Tulpen One":{"weight":["regular"],"fallback":"display"},"Petrona":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Marko One":{"weight":["regular"],"fallback":"serif"},"Asar":{"weight":["regular"],"fallback":"serif"},"Nova Flat":{"weight":["regular"],"fallback":"display"},"Koulen":{"weight":["regular"],"fallback":"display"},"Lexend Exa":{"weight":["regular"],"fallback":"sans-serif"},"Londrina Outline":{"weight":["regular"],"fallback":"display"},"Cute Font":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer":{"weight":["regular","italic"],"fallback":"serif"},"Junge":{"weight":["regular"],"fallback":"serif"},"Stylish":{"weight":["regular"],"fallback":"sans-serif"},"Lexend":{"weight":["100","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Spirax":{"weight":["regular"],"fallback":"display"},"Piazzolla":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Piedra":{"weight":["regular"],"fallback":"display"},"Ribeye Marrow":{"weight":["regular"],"fallback":"display"},"Dorsa":{"weight":["regular"],"fallback":"sans-serif"},"Ibarra Real Nova":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"IM Fell DW Pica SC":{"weight":["regular"],"fallback":"serif"},"Wellfleet":{"weight":["regular"],"fallback":"display"},"Eagle Lake":{"weight":["regular"],"fallback":"handwriting"},"Meie Script":{"weight":["regular"],"fallback":"handwriting"},"Goblin One":{"weight":["regular"],"fallback":"display"},"Flavors":{"weight":["regular"],"fallback":"display"},"Gotu":{"weight":["regular"],"fallback":"sans-serif"},"Linden Hill":{"weight":["regular","italic"],"fallback":"serif"},"Chathura":{"weight":["100","300","regular","700","800"],"fallback":"sans-serif"},"Croissant One":{"weight":["regular"],"fallback":"display"},"Jomolhari":{"weight":["regular"],"fallback":"serif"},"Srisakdi":{"weight":["regular","700"],"fallback":"display"},"Modern Antiqua":{"weight":["regular"],"fallback":"display"},"Joti One":{"weight":["regular"],"fallback":"display"},"Kavoon":{"weight":["regular"],"fallback":"display"},"Sulphur Point":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Castoro":{"weight":["regular","italic"],"fallback":"serif"},"Chela One":{"weight":["regular"],"fallback":"display"},"Atomic Age":{"weight":["regular"],"fallback":"display"},"Maiden Orange":{"weight":["regular"],"fallback":"display"},"Ruthie":{"weight":["regular"],"fallback":"handwriting"},"Bayon":{"weight":["regular"],"fallback":"display"},"Potta One":{"weight":["regular"],"fallback":"display"},"Iceberg":{"weight":["regular"],"fallback":"display"},"Bigshot One":{"weight":["regular"],"fallback":"display"},"Gorditas":{"weight":["regular","700"],"fallback":"display"},"Sree Krushnadevaraya":{"weight":["regular"],"fallback":"serif"},"Trykker":{"weight":["regular"],"fallback":"serif"},"Kufam":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Diplomata SC":{"weight":["regular"],"fallback":"display"},"Poor Story":{"weight":["regular"],"fallback":"display"},"Sirin Stencil":{"weight":["regular"],"fallback":"display"},"Kavivanar":{"weight":["regular"],"fallback":"handwriting"},"Syne Mono":{"weight":["regular"],"fallback":"monospace"},"Metal Mania":{"weight":["regular"],"fallback":"display"},"Arbutus":{"weight":["regular"],"fallback":"display"},"Unlock":{"weight":["regular"],"fallback":"display"},"MuseoModerno":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Glass Antiqua":{"weight":["regular"],"fallback":"display"},"Miniver":{"weight":["regular"],"fallback":"display"},"Griffy":{"weight":["regular"],"fallback":"display"},"Bokor":{"weight":["regular"],"fallback":"display"},"Felipa":{"weight":["regular"],"fallback":"handwriting"},"Inika":{"weight":["regular","700"],"fallback":"serif"},"Princess Sofia":{"weight":["regular"],"fallback":"handwriting"},"Mrs Sheppards":{"weight":["regular"],"fallback":"handwriting"},"Monofett":{"weight":["regular"],"fallback":"display"},"Sahitya":{"weight":["regular","700"],"fallback":"serif"},"Dela Gothic One":{"weight":["regular"],"fallback":"display"},"Shippori Mincho B1":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Beth Ellen":{"weight":["regular"],"fallback":"handwriting"},"Lancelot":{"weight":["regular"],"fallback":"display"},"Rhodium Libre":{"weight":["regular"],"fallback":"serif"},"Fraunces":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Hachi Maru Pop":{"weight":["regular"],"fallback":"handwriting"},"Snippet":{"weight":["regular"],"fallback":"sans-serif"},"Content":{"weight":["regular","700"],"fallback":"display"},"Revalia":{"weight":["regular"],"fallback":"display"},"Diplomata":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128 Text":{"weight":["regular"],"fallback":"display"},"Jacques Francois Shadow":{"weight":["regular"],"fallback":"display"},"Long Cang":{"weight":["regular"],"fallback":"handwriting"},"Caesar Dressing":{"weight":["regular"],"fallback":"display"},"Odor Mean Chey":{"weight":["regular"],"fallback":"display"},"Jolly Lodger":{"weight":["regular"],"fallback":"display"},"Texturina":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"DotGothic16":{"weight":["regular"],"fallback":"sans-serif"},"Ewert":{"weight":["regular"],"fallback":"display"},"Romanesco":{"weight":["regular"],"fallback":"handwriting"},"Kantumruy":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Asset":{"weight":["regular"],"fallback":"display"},"Odibee Sans":{"weight":["regular"],"fallback":"display"},"Emblema One":{"weight":["regular"],"fallback":"display"},"Kdam Thmor":{"weight":["regular"],"fallback":"display"},"Dr Sugiyama":{"weight":["regular"],"fallback":"handwriting"},"Bahiana":{"weight":["regular"],"fallback":"display"},"GFS Neohellenic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Oldenburg":{"weight":["regular"],"fallback":"display"},"Molle":{"weight":["italic"],"fallback":"handwriting"},"Ravi Prakash":{"weight":["regular"],"fallback":"display"},"Gayathri":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Almendra SC":{"weight":["regular"],"fallback":"serif"},"Varta":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Risque":{"weight":["regular"],"fallback":"display"},"Sansita Swashed":{"weight":["300","regular","500","600","700","800","900"],"fallback":"display"},"Kiwi Maru":{"weight":["300","regular","500"],"fallback":"serif"},"Dangrek":{"weight":["regular"],"fallback":"display"},"Devonshire":{"weight":["regular"],"fallback":"handwriting"},"Big Shoulders Stencil Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Jim Nightshade":{"weight":["regular"],"fallback":"handwriting"},"Smythe":{"weight":["regular"],"fallback":"display"},"Stick":{"weight":["regular"],"fallback":"sans-serif"},"Lexend Mega":{"weight":["regular"],"fallback":"sans-serif"},"Siemreap":{"weight":["regular"],"fallback":"display"},"Londrina Shadow":{"weight":["regular"],"fallback":"display"},"Train One":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer SC":{"weight":["regular"],"fallback":"serif"},"Barriecito":{"weight":["regular"],"fallback":"display"},"Underdog":{"weight":["regular"],"fallback":"display"},"Stalinist One":{"weight":["regular"],"fallback":"display"},"Mr Bedfort":{"weight":["regular"],"fallback":"handwriting"},"Freehand":{"weight":["regular"],"fallback":"display"},"MedievalSharp":{"weight":["regular"],"fallback":"display"},"Lexend Giga":{"weight":["regular"],"fallback":"sans-serif"},"Keania One":{"weight":["regular"],"fallback":"display"},"Peddana":{"weight":["regular"],"fallback":"serif"},"Galindo":{"weight":["regular"],"fallback":"display"},"Fascinate":{"weight":["regular"],"fallback":"display"},"Londrina Sketch":{"weight":["regular"],"fallback":"display"},"Gupter":{"weight":["regular","500","700"],"fallback":"serif"},"Nova Slim":{"weight":["regular"],"fallback":"display"},"Snowburst One":{"weight":["regular"],"fallback":"display"},"ZCOOL KuaiLe":{"weight":["regular"],"fallback":"display"},"Plaster":{"weight":["regular"],"fallback":"display"},"Fascinate Inline":{"weight":["regular"],"fallback":"display"},"Newsreader":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Purple Purse":{"weight":["regular"],"fallback":"display"},"Sedgwick Ave Display":{"weight":["regular"],"fallback":"handwriting"},"Jacques Francois":{"weight":["regular"],"fallback":"serif"},"Almendra Display":{"weight":["regular"],"fallback":"display"},"Irish Grover":{"weight":["regular"],"fallback":"display"},"Kumar One Outline":{"weight":["regular"],"fallback":"display"},"Andika New Basic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Extended":{"weight":["regular"],"fallback":"display"},"Taprom":{"weight":["regular"],"fallback":"display"},"Miss Fajardose":{"weight":["regular"],"fallback":"handwriting"},"IM Fell Double Pica SC":{"weight":["regular"],"fallback":"serif"},"Macondo":{"weight":["regular"],"fallback":"display"},"Ruge Boogie":{"weight":["regular"],"fallback":"handwriting"},"Sunshiney":{"weight":["regular"],"fallback":"handwriting"},"Brygada 1918":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Grenze":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Erica One":{"weight":["regular"],"fallback":"display"},"Seymour One":{"weight":["regular"],"fallback":"sans-serif"},"Supermercado One":{"weight":["regular"],"fallback":"display"},"Zhi Mang Xing":{"weight":["regular"],"fallback":"handwriting"},"Butterfly Kids":{"weight":["regular"],"fallback":"handwriting"},"Kirang Haerang":{"weight":["regular"],"fallback":"display"},"Federant":{"weight":["regular"],"fallback":"display"},"Liu Jian Mao Cao":{"weight":["regular"],"fallback":"handwriting"},"Chenla":{"weight":["regular"],"fallback":"display"},"Hanalei":{"weight":["regular"],"fallback":"display"},"Langar":{"weight":["regular"],"fallback":"display"},"Trochut":{"weight":["regular","italic","700"],"fallback":"display"},"Smokum":{"weight":["regular"],"fallback":"display"},"Black And White Picture":{"weight":["regular"],"fallback":"sans-serif"},"Preahvihear":{"weight":["regular"],"fallback":"display"},"Bungee Outline":{"weight":["regular"],"fallback":"display"},"Astloch":{"weight":["regular","700"],"fallback":"display"},"Fasthand":{"weight":["regular"],"fallback":"serif"},"Akaya Telivigala":{"weight":["regular"],"fallback":"display"},"Inria Sans":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Bonbon":{"weight":["regular"],"fallback":"handwriting"},"Combo":{"weight":["regular"],"fallback":"display"},"Nova Script":{"weight":["regular"],"fallback":"display"},"Sofadi One":{"weight":["regular"],"fallback":"display"},"Passero One":{"weight":["regular"],"fallback":"display"},"Suwannaphum":{"weight":["regular"],"fallback":"display"},"Miltonian Tattoo":{"weight":["regular"],"fallback":"display"},"Bungee Hairline":{"weight":["regular"],"fallback":"display"},"Gidugu":{"weight":["regular"],"fallback":"sans-serif"},"Geostar Fill":{"weight":["regular"],"fallback":"display"},"Nerko One":{"weight":["regular"],"fallback":"handwriting"},"Lacquer":{"weight":["regular"],"fallback":"display"},"Butcherman":{"weight":["regular"],"fallback":"display"},"Sevillana":{"weight":["regular"],"fallback":"display"},"Nova Oval":{"weight":["regular"],"fallback":"display"},"Aubrey":{"weight":["regular"],"fallback":"display"},"Akaya Kanadaka":{"weight":["regular"],"fallback":"display"},"Nova Cut":{"weight":["regular"],"fallback":"display"},"Vibes":{"weight":["regular"],"fallback":"display"},"Miltonian":{"weight":["regular"],"fallback":"display"},"Moulpali":{"weight":["regular"],"fallback":"display"},"BioRhyme Expanded":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Bahianita":{"weight":["regular"],"fallback":"display"},"Suravaram":{"weight":["regular"],"fallback":"serif"},"Fruktur":{"weight":["regular"],"fallback":"display"},"Single Day":{"weight":["regular"],"fallback":"display"},"Imbue":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Lexend Tera":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Inline Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Dhurjati":{"weight":["regular"],"fallback":"sans-serif"},"Warnes":{"weight":["regular"],"fallback":"display"},"Kenia":{"weight":["regular"],"fallback":"display"},"Lexend Peta":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Stencil Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Geostar":{"weight":["regular"],"fallback":"display"},"Big Shoulders Inline Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Oi":{"weight":["regular"],"fallback":"display"},"Xanh Mono":{"weight":["regular","italic"],"fallback":"monospace"},"Viaoda Libre":{"weight":["regular"],"fallback":"display"},"Truculenta":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Syne Tactile":{"weight":["regular"],"fallback":"display"},"Trispace":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Ballet":{"weight":["regular"],"fallback":"handwriting"},"Benne":{"weight":["regular"],"fallback":"serif"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"first-block": 0,
/******/ 			"./style-first-block": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwoostify_block"] = self["webpackChunkwoostify_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-first-block"], function() { return __webpack_require__("./src/blocks/first-block/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=first-block.js.map
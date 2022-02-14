/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/first-block/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/first-block/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_controls_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/controls/base */ "./src/components/controls/base/index.js");
/* harmony import */ var _components_controls_dimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/controls/dimensions */ "./src/components/controls/dimensions/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/first-block/editor.scss");











const {
  Visualizer
} = _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl;

function Edit(props) {
  const [selectedDevice, setSelectedDevice] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('Desktop');
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    top: '50px',
    left: '10%',
    right: '10%',
    bottom: '50px'
  });
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

  const getDeviceType = () => {
    let currDeviceType = props.deviceType ? props.deviceType : selectedDevice;
    return currDeviceType;
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

  const setDeviceType = deviceType => {
    if (props.deviceType) {
      props.setDeviceType(deviceType);
      setSelectedDevice(deviceType);
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'woostify-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_base__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'woostify-block'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vestibulum ullamcorper mauris at ligula', 'woostify-block'),
    units: ['px', 'rem', '%'],
    responsive: ['desktop', 'tablet', 'mobile'],
    selectedDevice: getDeviceType(),
    selectedUnit: attributes['bgUnit' + getDeviceSuffix()],
    onResponsiveToggleClick: device => setDeviceType(device),
    onUnitClick: unit => setAttributes({
      ['bgUnit' + getDeviceSuffix()]: unit
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    onChange: val => setAttributes({
      bg_color: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_base__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'woostify-block'),
    responsive: ['desktop', 'tablet', 'mobile'],
    units: ['px', 'rem'],
    selectedDevice: getDeviceType(),
    selectedUnit: attributes['textColorUnit' + getDeviceSuffix()],
    onResponsiveToggleClick: device => setDeviceType(device),
    onUnitClick: unit => setAttributes({
      ['textColorUnit' + getDeviceSuffix()]: unit
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    onChange: val => setAttributes({
      text_color: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_base__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'woostify-block'),
    responsive: ['desktop', 'tablet', 'mobile'],
    units: ['px', 'rem'],
    selectedDevice: getDeviceType(),
    selectedUnit: attributes['paddingUnit' + getDeviceSuffix()],
    onResponsiveToggleClick: device => setDeviceType(device),
    onUnitClick: unit => setAttributes({
      ['paddingUnit' + getDeviceSuffix()]: unit
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_dimensions__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    device: getDeviceType(),
    type: 'padding',
    attrTop: 'paddingTop',
    attrRight: 'paddingRight',
    attrBottom: 'paddingBottom',
    attrLeft: 'paddingLeft',
    attrUnit: 'paddingUnit'
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_base__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'woostify-block'),
    responsive: ['desktop', 'tablet', 'mobile'],
    units: ['px', 'rem'],
    selectedDevice: getDeviceType(),
    selectedUnit: attributes['marginUnit' + getDeviceSuffix()],
    onResponsiveToggleClick: device => setDeviceType(device),
    onUnitClick: unit => setAttributes({
      ['marginUnit' + getDeviceSuffix()]: unit
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_dimensions__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    device: getDeviceType(),
    type: 'margin',
    attrTop: 'marginTop' + getDeviceSuffix(),
    attrRight: 'marginRight' + getDeviceSuffix(),
    attrBottom: 'marginBottom' + getDeviceSuffix(),
    attrLeft: 'marginLeft' + getDeviceSuffix(),
    attrUnit: 'marginUnit' + getDeviceSuffix()
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "woostify-block",
    id: `woostify-block-${uniqueId}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: attributes.message,
    onChange: val => setAttributes({
      message: val
    }),
    style: {
      backgroundColor: attributes.bg_color,
      color: attributes.text_color
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.withDispatch)(dispatch => ({
  setDeviceType(type) {
    const {
      __experimentalSetPreviewDeviceType: setPreviewDeviceType
    } = dispatch('core/edit-post') || false;

    if (!setPreviewDeviceType) {
      return;
    }

    setPreviewDeviceType(type);
  }

})), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.withSelect)(select => {
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
})])(Edit));

/***/ }),

/***/ "./src/blocks/first-block/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/first-block/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/controls/base/style.css");






class WoostifyBaseControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.state = {
      showDevices: false
    };
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  showDevices() {
    this.setState({
      showDevices: !this.state.showDevices
    });
  }

  render() {
    const {
      label,
      help,
      units,
      responsive,
      onResponsiveToggleClick,
      onUnitClick,
      selectedDevice,
      selectedUnit,
      children
    } = this.props;

    let currDeviceTooltip = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop', 'woostify-block');

    if ('tablet' === selectedDevice.toLowerCase()) {
      currDeviceTooltip = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet', 'woostify-block');
    }

    if ('mobile' === selectedDevice.toLowerCase()) {
      currDeviceTooltip = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile', 'woostify-block');
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control components-woostify-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wb-control-label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wb-base-control__label"
    }, label), !!responsive && Array.isArray(responsive) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wb-base-control__responsive"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: currDeviceTooltip
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "wb-current-device",
      onClick: () => this.showDevices()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `dashicons dashicons-${'Mobile' === selectedDevice ? 'smartphone' : selectedDevice.toLowerCase()}`
    }))), this.state.showDevices && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wb-base-control-toggle__wrapper"
    }, responsive.map((v, i) => {
      let device = 'mobile' === v ? 'smartphone' : v;

      let tooltip = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop', 'woostify-block');

      if ('tablet' === v) {
        tooltip = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet', 'woostify-block');
      }

      if ('mobile' === v) {
        tooltip = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile', 'woostify-block');
      }

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        text: tooltip
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        isPressed: this.capitalizeFirstLetter(v) === selectedDevice ? true : false,
        onClick: () => {
          this.showDevices();
          onResponsiveToggleClick(this.capitalizeFirstLetter(v));
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: `dashicons dashicons-${device}`
      })));
    }))), !!units && Array.isArray(units) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wb-base-control__units"
    }, units.map(unit => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: unit,
        className: 'units--' + unit,
        isSmall: true,
        isPrimary: selectedUnit === unit,
        onClick: () => onUnitClick(unit)
      }, unit);
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wb-base-content"
    }, children), !!help && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wb-base-help"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "components-base-control__help"
    }, help)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WoostifyBaseControl);

/***/ }),

/***/ "./src/components/controls/dimensions/index.js":
/*!*****************************************************!*\
  !*** ./src/components/controls/dimensions/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  }

  onChangeAttr(value, attr) {
    this.props.setAttributes({
      [this.props[attr]]: value
    }); // eslint-disable-line dot-notation

    this.setLinkedValues(value);
  }

  setLinkedValues(value) {
    if (this.state.isLinkedValues) {
      this.props.setAttributes({
        [this.props['attrTop']]: value
      });
      this.props.setAttributes({
        [this.props['attrBottom']]: value
      });
      this.props.setAttributes({
        [this.props['attrRight']]: value
      });
      this.props.setAttributes({
        [this.props['attrLeft']]: value
      });
    }
  }

  componentDidUpdate() {
    let value = this.props.attributes[this.props['attrTop']];

    if ('' === value) {
      value = '0';
    }

    this.setLinkedValues(value);
  }

  onChangeLinkedValues() {
    this.setState({
      isLinkedValues: !this.state.isLinkedValues
    });
  }

  render() {
    const {
      attributes,
      type = 'margin',
      attrTop,
      attrRight,
      attrBottom,
      attrLeft,
      attrUnit,
      labelTop = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'woostify-block'),
      labelRight = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'woostify-block'),
      labelBottom = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'woostify-block'),
      labelLeft = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'woostify-block'),
      device
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
      onChange: val => onChangeInputValue(val, 'attrTop')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "wb-dimensions-control-input-number",
      type: "number",
      value: attributes[attrRight] ? attributes[attrRight] : '',
      min: type === 'padding' ? 0 : undefined,
      "data-attribute": type,
      onChange: val => onChangeInputValue(val, 'attrRight')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "wb-dimensions-control-input-number",
      type: "number",
      value: attributes[attrBottom] ? attributes[attrBottom] : '',
      min: type === 'padding' ? 0 : undefined,
      "data-attribute": type,
      onChange: val => onChangeInputValue(val, 'attrBottom')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "wb-dimensions-control-input-number",
      type: "number",
      value: attributes[attrLeft] ? attributes[attrLeft] : '',
      min: type === 'padding' ? 0 : undefined,
      "data-attribute": type,
      onChange: val => onChangeInputValue(val, 'attrLeft')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link values together', 'woostify-block')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isSmall: true,
      isPrimary: this.state.isLinkedValues,
      onClick: this.onChangeLinkedValues
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-admin-links"
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WoostifyDimensionsControl);

/***/ }),

/***/ "./src/components/controls/base/style.css":
/*!************************************************!*\
  !*** ./src/components/controls/base/style.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/first-block/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/first-block/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/first-block/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/first-block/style.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
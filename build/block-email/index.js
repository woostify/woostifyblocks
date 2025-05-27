<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 83c63faf (update slider block)
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-email/Edit.tsx":
/*!**********************************!*\
  !*** ./src/block-email/Edit.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
<<<<<<< HEAD
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HOCInspectorControls */ "./src/components/HOCInspectorControls.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-email/editor.scss");
/* harmony import */ var _hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useSetBlockPanelInfo */ "./src/hooks/useSetBlockPanelInfo.ts");
/* harmony import */ var _WcbEmailPanelGeneral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WcbEmailPanelGeneral */ "./src/block-email/WcbEmailPanelGeneral.tsx");
/* harmony import */ var _block_form_FormInputLabelRichText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block-form/FormInputLabelRichText */ "./src/block-form/FormInputLabelRichText.tsx");
/* harmony import */ var _utils_converUniqueId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/converUniqueId */ "./src/utils/converUniqueId.ts");
/* harmony import */ var _utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/converUniqueIdToAnphaKey */ "./src/utils/converUniqueIdToAnphaKey.ts");
=======
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HOCInspectorControls */ "./src/components/HOCInspectorControls.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/block-email/editor.scss");
/* harmony import */ var _hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useSetBlockPanelInfo */ "./src/hooks/useSetBlockPanelInfo.ts");
/* harmony import */ var _WcbEmailPanelGeneral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WcbEmailPanelGeneral */ "./src/block-email/WcbEmailPanelGeneral.tsx");
/* harmony import */ var _block_form_FormInputLabelRichText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../block-form/FormInputLabelRichText */ "./src/block-form/FormInputLabelRichText.tsx");
/* harmony import */ var _utils_converUniqueId__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/converUniqueId */ "./src/utils/converUniqueId.ts");
/* harmony import */ var _utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/converUniqueIdToAnphaKey */ "./src/utils/converUniqueIdToAnphaKey.ts");

>>>>>>> 83c63faf (update slider block)










const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    general_general,
    uniqueId,
    label
  } = attributes;
  //  COMMON HOOKS
<<<<<<< HEAD
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // const { myCache, ref } = useCreateCacheEmotion();
  const wrapBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
=======
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  // const { myCache, ref } = useCreateCacheEmotion();
  const wrapBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
>>>>>>> 83c63faf (update slider block)
    ref
  });
  const {
    tabIsOpen,
    tabAdvancesIsPanelOpen,
    tabGeneralIsPanelOpen,
    tabStylesIsPanelOpen,
    handleTogglePanel
<<<<<<< HEAD
  } = (0,_hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_4__["default"])(uniqueId);
  const UNIQUE_NAME = (0,_utils_converUniqueId__WEBPACK_IMPORTED_MODULE_7__["default"])(uniqueId, "email");
  // make uniqueid
  const UNIQUE_ID = wrapBlockProps.id;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      uniqueId: (0,_utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_8__["default"])(UNIQUE_ID)
=======
  } = (0,_hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_6__["default"])(uniqueId);
  const UNIQUE_NAME = (0,_utils_converUniqueId__WEBPACK_IMPORTED_MODULE_9__["default"])(uniqueId, "email");
  // make uniqueid
  const UNIQUE_ID = wrapBlockProps.id;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setAttributes({
      uniqueId: (0,_utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_10__["default"])(UNIQUE_ID)
>>>>>>> 83c63faf (update slider block)
    });
  }, [UNIQUE_ID]);
  //
  //

  const renderTabBodyPanels = tab => {
    switch (tab.name) {
      case "General":
<<<<<<< HEAD
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbEmailPanelGeneral__WEBPACK_IMPORTED_MODULE_5__["default"], {
=======
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_WcbEmailPanelGeneral__WEBPACK_IMPORTED_MODULE_7__["default"], {
>>>>>>> 83c63faf (update slider block)
          onToggle: () => handleTogglePanel("General", "General", true),
          initialOpen: tabGeneralIsPanelOpen === "General" || tabGeneralIsPanelOpen === "first",
          opened: tabGeneralIsPanelOpen === "General" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              general_general: data
            });
          },
          panelData: general_general
        }));
      // case "Styles":
      // 	return <></>;
      case "Advances":
<<<<<<< HEAD
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
      default:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null);
=======
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null);
      default:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null);
>>>>>>> 83c63faf (update slider block)
    }
  };
  return (
    // <CacheProvider value={myCache}>
<<<<<<< HEAD
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...wrapBlockProps,
      className: `${wrapBlockProps?.className} wcb-email__wrap ${uniqueId}`,
      "data-uniqueid": uniqueId
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tabs: _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_2__.INSPECTOR_CONTROLS_TABS.filter(item => item.name !== "Styles"),
      renderTabPanels: renderTabBodyPanels,
      uniqueId: uniqueId
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_form_FormInputLabelRichText__WEBPACK_IMPORTED_MODULE_6__.FormInputLabelRichText, {
=======
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, wrapBlockProps, {
      className: `${wrapBlockProps?.className} wcb-email__wrap ${uniqueId}`,
      "data-uniqueid": uniqueId
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tabs: _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_4__.INSPECTOR_CONTROLS_TABS.filter(item => item.name !== "Styles"),
      renderTabPanels: renderTabBodyPanels,
      uniqueId: uniqueId
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_block_form_FormInputLabelRichText__WEBPACK_IMPORTED_MODULE_8__.FormInputLabelRichText, {
>>>>>>> 83c63faf (update slider block)
      value: label,
      isRequired: general_general.isRequired,
      onChange: value => {
        setAttributes({
          label: value
        });
      }
<<<<<<< HEAD
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
=======
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
>>>>>>> 83c63faf (update slider block)
      type: "email",
      placeholder: general_general.placeholder,
      required: general_general.isRequired,
      autoComplete: general_general.autocomplete,
      name: UNIQUE_NAME
    }))
    // </CacheProvider>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 83c63faf (update slider block)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/block-email/Save.tsx":
/*!**********************************!*\
  !*** ./src/block-email/Save.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
<<<<<<< HEAD
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-email/style.scss");
/* harmony import */ var _block_form_FormInputLabelRichTextContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-form/FormInputLabelRichTextContent */ "./src/block-form/FormInputLabelRichTextContent.tsx");
/* harmony import */ var _utils_converUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/converUniqueId */ "./src/utils/converUniqueId.ts");
=======
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-email/style.scss");
/* harmony import */ var _block_form_FormInputLabelRichTextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../block-form/FormInputLabelRichTextContent */ "./src/block-form/FormInputLabelRichTextContent.tsx");
/* harmony import */ var _utils_converUniqueId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/converUniqueId */ "./src/utils/converUniqueId.ts");
>>>>>>> 83c63faf (update slider block)






<<<<<<< HEAD
function save({
  attributes
}) {
=======

function save(_ref) {
  let {
    attributes
  } = _ref;
>>>>>>> 83c63faf (update slider block)
  const {
    uniqueId,
    general_general
  } = attributes;
<<<<<<< HEAD
  const UNIQUE_NAME = (0,_utils_converUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])(uniqueId, "email");
  //
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-email__wrap"
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    ...blockProps,
    "data-uniqueid": uniqueId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_form_FormInputLabelRichTextContent__WEBPACK_IMPORTED_MODULE_3__.FormInputLabelRichTextContent, {
    value: attributes.label,
    isRequired: general_general.isRequired,
    uniqueName: UNIQUE_NAME
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
=======
  const UNIQUE_NAME = (0,_utils_converUniqueId__WEBPACK_IMPORTED_MODULE_6__["default"])(uniqueId, "email");
  //
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: "wcb-email__wrap"
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    "data-uniqueid": uniqueId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_block_form_FormInputLabelRichTextContent__WEBPACK_IMPORTED_MODULE_5__.FormInputLabelRichTextContent, {
    value: attributes.label,
    isRequired: general_general.isRequired,
    uniqueName: UNIQUE_NAME
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
>>>>>>> 83c63faf (update slider block)
    type: "email",
    placeholder: general_general.placeholder,
    required: general_general.isRequired,
    autoComplete: general_general.autocomplete,
    name: UNIQUE_NAME
  }));
}

/***/ }),

/***/ "./src/block-email/WcbEmailPanelGeneral.tsx":
/*!**************************************************!*\
  !*** ./src/block-email/WcbEmailPanelGeneral.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
<<<<<<< HEAD
/* harmony export */   WCB_EMAIL_PANEL_GENERAL_DEMO: () => (/* binding */ WCB_EMAIL_PANEL_GENERAL_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
=======
/* harmony export */   "WCB_EMAIL_PANEL_GENERAL_DEMO": () => (/* binding */ WCB_EMAIL_PANEL_GENERAL_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
>>>>>>> 83c63faf (update slider block)
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
<<<<<<< HEAD
=======
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
>>>>>>> 83c63faf (update slider block)




const WCB_EMAIL_PANEL_GENERAL_DEMO = {
  autocomplete: "email",
  isRequired: false,
  placeholder: "john@example.com"
};
<<<<<<< HEAD
const WcbEmailPanelGeneral = ({
  panelData = WCB_EMAIL_PANEL_GENERAL_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
=======
const WcbEmailPanelGeneral = _ref => {
  let {
    panelData = WCB_EMAIL_PANEL_GENERAL_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened
  } = _ref;
>>>>>>> 83c63faf (update slider block)
  const {
    autocomplete,
    isRequired,
    placeholder
  } = panelData;
<<<<<<< HEAD
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
=======
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
>>>>>>> 83c63faf (update slider block)
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("General", "wcb")
<<<<<<< HEAD
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
=======
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
>>>>>>> 83c63faf (update slider block)
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Autocomplete", "wcb"),
    value: autocomplete,
    onChange: selection => {
      setAttr__({
        ...panelData,
        autocomplete: selection
      });
    }
    // @ts-ignore
    ,
    __nextHasNoMarginBottom: true
<<<<<<< HEAD
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "off"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Off", "wcb")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "email"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Email", "wcb"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
=======
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "off"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Off", "wcb")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "email"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Email", "wcb"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
>>>>>>> 83c63faf (update slider block)
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("PLACEHOLDER", "wcb"),
    value: placeholder,
    onChange: nextValue => {
      setAttr__({
        ...panelData,
        placeholder: nextValue
      });
    }
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
>>>>>>> 83c63faf (update slider block)
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Required", "wcb"),
    checked: isRequired,
    onChange: isChecked => {
      setAttr__({
        ...panelData,
        isRequired: isChecked
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbEmailPanelGeneral);

/***/ }),

/***/ "./src/block-email/attributes.ts":
/*!***************************************!*\
  !*** ./src/block-email/attributes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WcbEmailPanelGeneral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WcbEmailPanelGeneral */ "./src/block-email/WcbEmailPanelGeneral.tsx");

const blokc1Attrs = {
  uniqueId: {
    type: "string",
    default: ""
  },
  label: {
    type: "string",
    source: "html",
    selector: ".wcb-form__label",
    default: "Label"
  },
  //
  general_general: {
    type: "object",
    default: _WcbEmailPanelGeneral__WEBPACK_IMPORTED_MODULE_0__.WCB_EMAIL_PANEL_GENERAL_DEMO
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blokc1Attrs);

/***/ }),

<<<<<<< HEAD
/***/ "./src/block-email/block.json":
/*!************************************!*\
  !*** ./src/block-email/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wcb/email","version":"0.1.0","parent":["wcb/form"],"title":"Email","category":"wcb-blocks","icon":"- wcb-block-editor-block-icon lni lni-envelope text-xl","description":"Example static block scaffolded with Create Block tool.","supports":{"__experimentalSelector":"span,label"},"textdomain":"wcb-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/block-email/editor.scss":
/*!*************************************!*\
  !*** ./src/block-email/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

=======
>>>>>>> 83c63faf (update slider block)
/***/ "./src/block-email/index.js":
/*!**********************************!*\
  !*** ./src/block-email/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
=======
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
>>>>>>> 83c63faf (update slider block)
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-email/style.scss");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/block-email/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/block-email/Save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-email/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/block-email/attributes.ts");
/* harmony import */ var _utils_convertAttsToPreview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/convertAttsToPreview */ "./src/utils/convertAttsToPreview.ts");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



const {
  Fragment
} = wp.element;
const {
  withSelect
} = wp.data;


//------------------ TAILWINDCSS AND COMMON CSS -----------------

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  example: (0,_utils_convertAttsToPreview__WEBPACK_IMPORTED_MODULE_7__["default"])(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"]),
<<<<<<< HEAD
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
=======
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
>>>>>>> 83c63faf (update slider block)
    className: "wcb-editor-block-icons fill-none ",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
<<<<<<< HEAD
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
});

/***/ }),

<<<<<<< HEAD
/***/ "./src/block-email/style.scss":
/*!************************************!*\
  !*** ./src/block-email/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

=======
>>>>>>> 83c63faf (update slider block)
/***/ "./src/block-form/FormInputLabelRichText.tsx":
/*!***************************************************!*\
  !*** ./src/block-form/FormInputLabelRichText.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
<<<<<<< HEAD
/* harmony export */   FormInputLabelRichText: () => (/* binding */ FormInputLabelRichText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const FormInputLabelRichText = ({
  isRequired,
  value,
  className = "",
  onChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
=======
/* harmony export */   "FormInputLabelRichText": () => (/* binding */ FormInputLabelRichText)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const FormInputLabelRichText = _ref => {
  let {
    isRequired,
    value,
    className = "",
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
>>>>>>> 83c63faf (update slider block)
    onChange: onChange,
    value: value,
    className: `wcb-form__label ${className} ${isRequired ? "required" : ""}`,
    tagName: "span"
  });
};

/***/ }),

/***/ "./src/block-form/FormInputLabelRichTextContent.tsx":
/*!**********************************************************!*\
  !*** ./src/block-form/FormInputLabelRichTextContent.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
<<<<<<< HEAD
/* harmony export */   FormInputLabelRichTextContent: () => (/* binding */ FormInputLabelRichTextContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const FormInputLabelRichTextContent = ({
  isRequired,
  value,
  className = "",
  uniqueName
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
=======
/* harmony export */   "FormInputLabelRichTextContent": () => (/* binding */ FormInputLabelRichTextContent)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const FormInputLabelRichTextContent = _ref => {
  let {
    isRequired,
    value,
    className = "",
    uniqueName
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
>>>>>>> 83c63faf (update slider block)
    value: value,
    className: `wcb-form__label ${className} ${isRequired ? "required" : ""}`,
    tagName: "span",
    "data-label-for": uniqueName
  });
};

/***/ }),

/***/ "./src/components/HOCInspectorControls.tsx":
/*!*************************************************!*\
  !*** ./src/components/HOCInspectorControls.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
<<<<<<< HEAD
/* harmony export */   INSPECTOR_CONTROLS_TABS: () => (/* binding */ INSPECTOR_CONTROLS_TABS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
=======
/* harmony export */   "INSPECTOR_CONTROLS_TABS": () => (/* binding */ INSPECTOR_CONTROLS_TABS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
>>>>>>> 83c63faf (update slider block)
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
<<<<<<< HEAD
=======
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
>>>>>>> 83c63faf (update slider block)





const INSPECTOR_CONTROLS_TABS = [{
  name: "General",
<<<<<<< HEAD
  title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "w-5 h-5 fill-none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "w-5 h-5 fill-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
<<<<<<< HEAD
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("General", "wcb")))
}, {
  name: "Styles",
  title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-5 h-5 fill-none",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("General", "wcb")))
}, {
  name: "Styles",
  title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-5 h-5 fill-none",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M11.47 6H16.47",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M11.47 18H15.47",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M11.47 13.95L16.47 14",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M11.47 10H14.47",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M8.44 7H2.53",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
<<<<<<< HEAD
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Styles", "wcb")))
}, {
  name: "Advances",
  title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-5 h-5 fill-none",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Styles", "wcb")))
}, {
  name: "Advances",
  title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-5 h-5 fill-none",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
<<<<<<< HEAD
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
=======
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
>>>>>>> 83c63faf (update slider block)
    d: "M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
<<<<<<< HEAD
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Advances", "wcb")))
}];
const HOCInspectorControls = ({
  renderTabPanels,
  tabs = INSPECTOR_CONTROLS_TABS,
  uniqueId = "",
  tabDefaultActive = "General",
  onChangeActive
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
=======
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Advances", "wcb")))
}];
const HOCInspectorControls = _ref => {
  let {
    renderTabPanels,
    tabs = INSPECTOR_CONTROLS_TABS,
    uniqueId = "",
    tabDefaultActive = "General",
    onChangeActive
  } = _ref;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
>>>>>>> 83c63faf (update slider block)
    setTimeout(() => {
      const tabIsOpenEl = document.querySelector(".components-panel__body.is-opened");
      if (!tabIsOpenEl) {
        return;
      }
      tabIsOpenEl.scrollIntoView({
        behavior: "smooth"
      });
    }, 500);
  }, []);

  // HIDDEN PANEL ADVANCE DEFAULT OF WP
  const handleTooglePanelAdvanceDefaultWp = () => {
    const advancedPanel = document.querySelector(".components-panel__body.block-editor-block-inspector__advanced");
    const elAdvancesbtn = document.querySelector(".HOCInspectorControls__ative-tab");
    const isAdvanceTabActive = !!elAdvancesbtn?.id.includes("-Advances");
    if (!advancedPanel) {
      return;
    }
    advancedPanel.style.display = isAdvanceTabActive ? "block" : "none";
  };
  const handleChageTab = tabName => {
    onChangeActive && onChangeActive(tabName);
    setTimeout(() => {
      handleTooglePanelAdvanceDefaultWp();
    }, 100);
  };
  const renderContent = () => {
<<<<<<< HEAD
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
=======
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
>>>>>>> 83c63faf (update slider block)
      className: `wcb-inspectorControls__panel ${uniqueId}`,
      activeClass: "HOCInspectorControls__ative-tab active-tab",
      tabs: tabs,
      onSelect: handleChageTab,
      initialTabName: tabDefaultActive
    }, tab => {
<<<<<<< HEAD
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
=======
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
>>>>>>> 83c63faf (update slider block)
        key: tab.name,
        className: tab.name
      }, renderTabPanels(tab));
    });
  };
  const renderContent2 = () => {
    !!uniqueId && setTimeout(() => {
      handleTooglePanelAdvanceDefaultWp();
    }, 100);
    return null;
  };
<<<<<<< HEAD
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, renderContent(), renderContent2());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(HOCInspectorControls));
=======
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, renderContent(), renderContent2());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(HOCInspectorControls));
>>>>>>> 83c63faf (update slider block)

/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
<<<<<<< HEAD
/* harmony export */   WCB_STORE_PANELS: () => (/* binding */ WCB_STORE_PANELS)
=======
/* harmony export */   "WCB_STORE_PANELS": () => (/* binding */ WCB_STORE_PANELS)
>>>>>>> 83c63faf (update slider block)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const INIT_BLOCK = {
  Advances: {
    panelIsOpen: ""
  },
  General: {
    panelIsOpen: "first"
  },
  Styles: {
    panelIsOpen: "first"
  },
  tabIsOpen: "General"
};
const DEFAULT_STATE = {};
const WCB_STORE_PANELS = "wcb/panels";
const actions = {
  setBlockPanelInfo(blockId, block) {
    return {
      type: "SET_BLOCK_PANEL_INFO",
      blockId,
      block
    };
  }
};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(WCB_STORE_PANELS, {
<<<<<<< HEAD
  reducer(state = DEFAULT_STATE, action) {
=======
  reducer() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    let action = arguments.length > 1 ? arguments[1] : undefined;
>>>>>>> 83c63faf (update slider block)
    switch (action.type) {
      case "SET_BLOCK_PANEL_INFO":
        const newBlock = state[action.blockId] || INIT_BLOCK;
        return {
          ...state,
          [action.blockId]: {
            ...newBlock,
            ...action.block
          }
        };
      default:
        return state;
    }
    return state;
  },
  actions,
  selectors: {
    getBlockPanelInfo(state) {
      return state;
    }
  },
  controls: {},
  resolvers: {}
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./src/hooks/useSetBlockPanelInfo.ts":
/*!*******************************************!*\
  !*** ./src/hooks/useSetBlockPanelInfo.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/data/index.ts");


// @ts-ignore

const useSetBlockPanelInfo = uniqueId => {
  // DIEU NAY GIUP EMOTION GLOBAL CSS DUOC IMPORT TRONG MOBILE IFRAME!!!
  const {
    setBlockPanelInfo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_data__WEBPACK_IMPORTED_MODULE_2__.WCB_STORE_PANELS);
  const {
    blockStores
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    return {
      blockStores: select(_data__WEBPACK_IMPORTED_MODULE_2__.WCB_STORE_PANELS)?.getBlockPanelInfo()
    };
  }, [uniqueId]);
  const {
    tabIsOpen,
    Advances,
    General,
    Styles
  } = blockStores[uniqueId] || {};
  const blockStore = blockStores[uniqueId];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!blockStore && setBlockPanelInfo) {
      setBlockPanelInfo(uniqueId, {
        tabIsOpen: "General",
        General: {
          panelIsOpen: "first"
        },
        Styles: {
          panelIsOpen: "first"
        }
      });
    }
  }, [uniqueId]);
  const handleTogglePanel = (tab, panel, initOpenPanel) => {
    if (!setBlockPanelInfo) {
      return;
    }
    if (initOpenPanel && blockStore && blockStore[tab]?.panelIsOpen === "first") {
      panel = "";
    }
    if (blockStore && blockStore[tab]?.panelIsOpen === panel) {
      panel = "";
    }
    setBlockPanelInfo(uniqueId, {
      tabIsOpen: tab,
      [tab]: {
        panelIsOpen: panel === undefined && blockStore ? blockStore[tab]?.panelIsOpen : panel
      }
    });
  };
  return {
    setBlockPanelInfo,
    tabAdvances: Advances,
    tabGeneral: General,
    tabStyles: Styles,
    tabIsOpen,
    blockStore,
    handleTogglePanel,
    tabGeneralIsPanelOpen: General?.panelIsOpen,
    tabStylesIsPanelOpen: Styles?.panelIsOpen,
    tabAdvancesIsPanelOpen: Advances?.panelIsOpen
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSetBlockPanelInfo);

/***/ }),

/***/ "./src/utils/converUniqueId.ts":
/*!*************************************!*\
  !*** ./src/utils/converUniqueId.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ converUniqueId)
/* harmony export */ });
<<<<<<< HEAD
function converUniqueId(text, prefix = "") {
=======
function converUniqueId(text) {
  let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
>>>>>>> 83c63faf (update slider block)
  if (!text) {
    return prefix + "converUniqueIdReturnNull";
  }
  return prefix + text.replace(/-/g, "").replace(/ /g, "");
}

/***/ }),

/***/ "./src/utils/converUniqueIdToAnphaKey.ts":
/*!***********************************************!*\
  !*** ./src/utils/converUniqueIdToAnphaKey.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
<<<<<<< HEAD
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
=======
/* harmony export */   "default": () => (/* binding */ converUniqueIdToAnphaKey)
/* harmony export */ });
function converUniqueIdToAnphaKey(text) {
  let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "wcb-";
  if (!text) {
    return (prefix + "converniquedreturnnull" + Date.now() + Math.random()).replace(/\./g, "-");
  }
  return prefix + text.replace(/ /g, "").replace(/\d/g, "")
  // text.substring(2, 9).replace(/-/g, "").replace(/ /g, "").replace(/\d/g, "")
  ;
>>>>>>> 83c63faf (update slider block)
}

/***/ }),

/***/ "./src/utils/convertAttsToPreview.ts":
/*!*******************************************!*\
  !*** ./src/utils/convertAttsToPreview.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ convertObjectAttrToPreview)
/* harmony export */ });
function convertObjectAttrToPreview(A) {
  let B = {};
  for (let key in A) {
    if (A.hasOwnProperty(key)) {
      B[key] = A[key].default;
    }
  }
  return B;
}

/***/ }),

<<<<<<< HEAD
=======
/***/ "./src/block-email/editor.scss":
/*!*************************************!*\
  !*** ./src/block-email/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-email/style.scss":
/*!************************************!*\
  !*** ./src/block-email/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

>>>>>>> 83c63faf (update slider block)
/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

<<<<<<< HEAD
=======
/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

>>>>>>> 83c63faf (update slider block)
/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

<<<<<<< HEAD
/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];
=======
/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

/***/ "./src/block-email/block.json":
/*!************************************!*\
  !*** ./src/block-email/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wcb/email","version":"0.1.0","parent":["wcb/form"],"title":"Email","category":"wcb-blocks","icon":"- wcb-block-editor-block-icon lni lni-envelope text-xl","description":"Example static block scaffolded with Create Block tool.","supports":{"__experimentalSelector":"span,label"},"textdomain":"wcb-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');
>>>>>>> 83c63faf (update slider block)

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block-email/index": 0,
/******/ 			"block-email/style-index": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwoostifyblocks"] = globalThis["webpackChunkwoostifyblocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-email/style-index"], () => (__webpack_require__("./src/block-email/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
<<<<<<< HEAD
//# sourceMappingURL=index.js.map
=======
(()=>{"use strict";var e,t={4729:()=>{const e=window.wp.element,t=window.wp.blocks;function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}const r=window.wp.blockEditor,l=window.React,a=window.wp.components,o=window.wp.i18n,s=[{name:"General",title:(0,e.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,e.createElement)("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5 fill-none"},(0,e.createElement)("path",{d:"M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.createElement)("path",{d:"M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.createElement)("path",{d:"M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.createElement)("path",{d:"M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,e.createElement)("div",null,(0,o.__)("General","wcb")))},{name:"Styles",title:(0,e.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,e.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,e.createElement)("path",{d:"M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,e.createElement)("path",{d:"M11.47 6H16.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,e.createElement)("path",{d:"M11.47 18H15.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,e.createElement)("path",{d:"M11.47 13.95L16.47 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,e.createElement)("path",{d:"M11.47 10H14.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,e.createElement)("path",{d:"M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,e.createElement)("path",{d:"M8.44 7H2.53",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})),(0,e.createElement)("div",null,(0,o.__)("Styles","wcb")))},{name:"Advances",title:(0,e.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,e.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,e.createElement)("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.createElement)("path",{d:"M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,e.createElement)("div",null,(0,o.__)("Advances","wcb")))}],i=(0,l.memo)((t=>{let{renderTabPanels:n,tabs:o=s,uniqueId:i="",tabDefaultActive:c="General",onChangeActive:u}=t;(0,l.useEffect)((()=>{setTimeout((()=>{const e=document.querySelector(".components-panel__body.is-opened");e&&e.scrollIntoView({behavior:"smooth"})}),500)}),[]);const d=()=>{const e=document.querySelector(".components-panel__body.block-editor-block-inspector__advanced"),t=document.querySelector(".HOCInspectorControls__ative-tab"),n=!!t?.id.includes("-Advances");e&&(e.style.display=n?"block":"none")};return(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)(a.TabPanel,{className:`wcb-inspectorControls__panel ${i}`,activeClass:"HOCInspectorControls__ative-tab active-tab",tabs:o,onSelect:e=>{u&&u(e),setTimeout((()=>{d()}),100)},initialTabName:c},(t=>(0,e.createElement)("div",{key:t.name,className:t.name},n(t)))),(i&&setTimeout((()=>{d()}),100),null))})),c=window.wp.data,u={Advances:{panelIsOpen:""},General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"},tabIsOpen:"General"},d={},p="wcb/panels",m=(0,c.createReduxStore)(p,{reducer(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;if("SET_BLOCK_PANEL_INFO"===t.type){const n=e[t.blockId]||u;return{...e,[t.blockId]:{...n,...t.block}}}return e},actions:{setBlockPanelInfo:(e,t)=>({type:"SET_BLOCK_PANEL_INFO",blockId:e,block:t})},selectors:{getBlockPanelInfo:e=>e},controls:{},resolvers:{}});(0,c.register)(m);const b={autocomplete:"email",isRequired:!1,placeholder:"john@example.com"},k=t=>{let{panelData:n=b,setAttr__:r,initialOpen:l,onToggle:s,opened:i}=t;const{autocomplete:c,isRequired:u,placeholder:d}=n;return(0,e.createElement)(a.PanelBody,{initialOpen:l,onToggle:s,opened:i,title:(0,o.__)("General","wcb")},(0,e.createElement)("div",{className:"space-y-5"},(0,e.createElement)(a.SelectControl,{label:(0,o.__)("Autocomplete","wcb"),value:c,onChange:e=>{r({...n,autocomplete:e})},__nextHasNoMarginBottom:!0},(0,e.createElement)("option",{value:"off"},(0,o.__)("Off","wcb")),(0,e.createElement)("option",{value:"email"},(0,o.__)("Email","wcb"))),(0,e.createElement)(a.__experimentalInputControl,{label:(0,o.__)("PLACEHOLDER","wcb"),value:d,onChange:e=>{r({...n,placeholder:e})}}),(0,e.createElement)(a.ToggleControl,{label:(0,o.__)("Required","wcb"),checked:u,onChange:e=>{r({...n,isRequired:e})}})))},C=t=>{let{isRequired:n,value:l,className:a="",onChange:o}=t;return(0,e.createElement)(r.RichText,{onChange:o,value:l,className:`wcb-form__label ${a} ${n?"required":""}`,tagName:"span"})};function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?t+e.replace(/-/g,"").replace(/ /g,""):t+"converUniqueIdReturnNull"}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wcb-";return e?t+e.replace(/ /g,"").replace(/\d/g,""):(t+"converniquedreturnnull"+Date.now()+Math.random()).replace(/\./g,"-")}const f=t=>{let{isRequired:n,value:l,className:a="",uniqueName:o}=t;return(0,e.createElement)(r.RichText.Content,{value:l,className:`wcb-form__label ${a} ${n?"required":""}`,tagName:"span","data-label-for":o})},w={uniqueId:{type:"string",default:""},label:{type:"string",source:"html",selector:".wcb-form__label",default:"Label"},general_general:{type:"object",default:b}},{Fragment:g}=wp.element,{withSelect:E}=wp.data;(0,t.registerBlockType)("wcb/email",{edit:t=>{const{attributes:a,setAttributes:o,clientId:u}=t,{general_general:d,uniqueId:m,label:b}=a,f=(0,l.useRef)(null),w=(0,r.useBlockProps)({ref:f}),{tabIsOpen:g,tabAdvancesIsPanelOpen:E,tabGeneralIsPanelOpen:_,tabStylesIsPanelOpen:O,handleTogglePanel:I}=(e=>{const{setBlockPanelInfo:t}=(0,c.useDispatch)(p),{blockStores:n}=(0,c.useSelect)((e=>({blockStores:e(p)?.getBlockPanelInfo()})),[e]),{tabIsOpen:r,Advances:a,General:o,Styles:s}=n[e]||{},i=n[e];return(0,l.useEffect)((()=>{!i&&t&&t(e,{tabIsOpen:"General",General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"}})}),[e]),{setBlockPanelInfo:t,tabAdvances:a,tabGeneral:o,tabStyles:s,tabIsOpen:r,blockStore:i,handleTogglePanel:(n,r,l)=>{t&&(l&&i&&"first"===i[n]?.panelIsOpen&&(r=""),i&&i[n]?.panelIsOpen===r&&(r=""),t(e,{tabIsOpen:n,[n]:{panelIsOpen:void 0===r&&i?i[n]?.panelIsOpen:r}}))},tabGeneralIsPanelOpen:o?.panelIsOpen,tabStylesIsPanelOpen:s?.panelIsOpen,tabAdvancesIsPanelOpen:a?.panelIsOpen}})(m),y=h(m,"email"),L=w.id;return(0,l.useEffect)((()=>{o({uniqueId:v(L)})}),[L]),(0,e.createElement)("div",n({},w,{className:`${w?.className} wcb-email__wrap ${m}`,"data-uniqueid":m}),(0,e.createElement)(i,{tabs:s.filter((e=>"Styles"!==e.name)),renderTabPanels:t=>{switch(t.name){case"General":return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(k,{onToggle:()=>I("General","General",!0),initialOpen:"General"===_||"first"===_,opened:"General"===_||void 0,setAttr__:e=>{o({general_general:e})},panelData:d}));case"Advances":return(0,e.createElement)(e.Fragment,null);default:return(0,e.createElement)("div",null)}},uniqueId:m}),(0,e.createElement)(C,{value:b,isRequired:d.isRequired,onChange:e=>{o({label:e})}}),(0,e.createElement)("input",{type:"email",placeholder:d.placeholder,required:d.isRequired,autoComplete:d.autocomplete,name:y}))},save:function(t){let{attributes:l}=t;const{uniqueId:a,general_general:o}=l,s=h(a,"email"),i=r.useBlockProps.save({className:"wcb-email__wrap"});return(0,e.createElement)("label",n({},i,{"data-uniqueid":a}),(0,e.createElement)(f,{value:l.label,isRequired:o.isRequired,uniqueName:s}),(0,e.createElement)("input",{type:"email",placeholder:o.placeholder,required:o.isRequired,autoComplete:o.autocomplete,name:s}))},attributes:w,example:function(e){let t={};for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n].default);return t}(w),icon:(0,e.createElement)("svg",{className:"wcb-editor-block-icons fill-none ",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.createElement)("path",{d:"M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}))})}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,l,a)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,l,a]=e[u],s=!0,i=0;i<n.length;i++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,l,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={6289:0,3659:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,a,[o,s,i]=n,c=0;if(o.some((t=>0!==e[t]))){for(l in s)r.o(s,l)&&(r.m[l]=s[l]);if(i)var u=i(r)}for(t&&t(n);c<o.length;c++)a=o[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=globalThis.webpackChunkwoostifyblocks=globalThis.webpackChunkwoostifyblocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=r.O(void 0,[3659],(()=>r(4729)));l=r.O(l)})();
>>>>>>> 54932786 (add build)
=======
//# sourceMappingURL=index.js.map
>>>>>>> 83c63faf (update slider block)

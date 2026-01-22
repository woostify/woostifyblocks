/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-form/FormInputLabelRichText.tsx":
/*!***************************************************!*\
  !*** ./src/block-form/FormInputLabelRichText.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    value: value,
    className: `wcb-form__label ${className} ${isRequired ? "required" : ""}`,
    tagName: "span",
    "data-label-for": uniqueName
  });
};

/***/ }),

/***/ "./src/block-phone/Edit.tsx":
/*!**********************************!*\
  !*** ./src/block-phone/Edit.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HOCInspectorControls */ "./src/components/HOCInspectorControls.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-phone/editor.scss");
/* harmony import */ var _hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useSetBlockPanelInfo */ "./src/hooks/useSetBlockPanelInfo.ts");
/* harmony import */ var _WcbPhonePanelGeneral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WcbPhonePanelGeneral */ "./src/block-phone/WcbPhonePanelGeneral.tsx");
/* harmony import */ var _block_form_FormInputLabelRichText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block-form/FormInputLabelRichText */ "./src/block-form/FormInputLabelRichText.tsx");
/* harmony import */ var _SelectCountryCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectCountryCode */ "./src/block-phone/SelectCountryCode.tsx");
/* harmony import */ var _utils_converUniqueId__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/converUniqueId */ "./src/utils/converUniqueId.ts");
/* harmony import */ var _utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/converUniqueIdToAnphaKey */ "./src/utils/converUniqueIdToAnphaKey.ts");











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
  // const { myCache, ref } = useCreateCacheEmotion();
  const wrapBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const {
    tabIsOpen,
    tabAdvancesIsPanelOpen,
    tabGeneralIsPanelOpen,
    tabStylesIsPanelOpen,
    handleTogglePanel
  } = (0,_hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_4__["default"])(uniqueId);
  const UNIQUE_NAME = (0,_utils_converUniqueId__WEBPACK_IMPORTED_MODULE_8__["default"])(uniqueId, "phone");
  // make uniqueid
  const UNIQUE_ID = wrapBlockProps.id;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      uniqueId: (0,_utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_9__["default"])(UNIQUE_ID)
    });
  }, [UNIQUE_ID]);
  //

  const renderTabBodyPanels = tab => {
    switch (tab.name) {
      case "General":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbPhonePanelGeneral__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
      default:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null);
    }
  };
  return (
    // <CacheProvider value={myCache}>
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...wrapBlockProps,
      className: `${wrapBlockProps?.className} wcb-phone__wrap ${uniqueId}`,
      "data-uniqueid": uniqueId
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tabs: _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_2__.INSPECTOR_CONTROLS_TABS.filter(item => item.name !== "Styles"),
      renderTabPanels: renderTabBodyPanels
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_form_FormInputLabelRichText__WEBPACK_IMPORTED_MODULE_6__.FormInputLabelRichText, {
      value: label,
      isRequired: general_general.isRequired,
      onChange: value => {
        setAttributes({
          label: value
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-phone__inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SelectCountryCode__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: attributes.countryCode,
      onChange: value => {
        setAttributes({
          countryCode: value
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "wcb-phone__tel-input",
      type: "tel",
      placeholder: general_general.placeholder,
      required: general_general.isRequired,
      autoComplete: general_general.autocomplete,
      pattern: general_general.pattern,
      name: UNIQUE_NAME
    })))
    // </CacheProvider>
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/block-phone/Save.tsx":
/*!**********************************!*\
  !*** ./src/block-phone/Save.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-phone/style.scss");
/* harmony import */ var _block_form_FormInputLabelRichTextContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-form/FormInputLabelRichTextContent */ "./src/block-form/FormInputLabelRichTextContent.tsx");
/* harmony import */ var _SelectCountryCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectCountryCode */ "./src/block-phone/SelectCountryCode.tsx");
/* harmony import */ var _utils_converUniqueId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/converUniqueId */ "./src/utils/converUniqueId.ts");







function save({
  attributes
}) {
  const {
    uniqueId,
    general_general,
    label
  } = attributes;
  const UNIQUE_NAME = (0,_utils_converUniqueId__WEBPACK_IMPORTED_MODULE_5__["default"])(uniqueId, "phone");

  //
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-phone__wrap"
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    ...blockProps,
    "data-uniqueid": uniqueId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_form_FormInputLabelRichTextContent__WEBPACK_IMPORTED_MODULE_3__.FormInputLabelRichTextContent, {
    value: attributes.label,
    isRequired: general_general.isRequired,
    uniqueName: UNIQUE_NAME
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-phone__inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SelectCountryCode__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: attributes.countryCode
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wcb-phone__tel-input",
    type: "tel",
    placeholder: general_general.placeholder,
    required: general_general.isRequired,
    autoComplete: general_general.autocomplete,
    pattern: general_general.pattern,
    name: UNIQUE_NAME
  })));
}

/***/ }),

/***/ "./src/block-phone/SelectCountryCode.tsx":
/*!***********************************************!*\
  !*** ./src/block-phone/SelectCountryCode.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const SelectCountryCode = ({
  className = "",
  onChange = () => {},
  ...props
}) => {
  const data = [{
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF"
  }, {
    name: "Aland Islands",
    dial_code: "+358",
    code: "AX"
  }, {
    name: "Albania",
    dial_code: "+355",
    code: "AL"
  }, {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ"
  }, {
    name: "AmericanSamoa",
    dial_code: "+1684",
    code: "AS"
  }, {
    name: "Andorra",
    dial_code: "+376",
    code: "AD"
  }, {
    name: "Angola",
    dial_code: "+244",
    code: "AO"
  }, {
    name: "Anguilla",
    dial_code: "+1264",
    code: "AI"
  }, {
    name: "Antarctica",
    dial_code: "+672",
    code: "AQ"
  }, {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG"
  }, {
    name: "Argentina",
    dial_code: "+54",
    code: "AR"
  }, {
    name: "Armenia",
    dial_code: "+374",
    code: "AM"
  }, {
    name: "Aruba",
    dial_code: "+297",
    code: "AW"
  }, {
    name: "Australia",
    dial_code: "+61",
    code: "AU"
  }, {
    name: "Austria",
    dial_code: "+43",
    code: "AT"
  }, {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ"
  }, {
    name: "Bahamas",
    dial_code: "+1242",
    code: "BS"
  }, {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH"
  }, {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD"
  }, {
    name: "Barbados",
    dial_code: "+1246",
    code: "BB"
  }, {
    name: "Belarus",
    dial_code: "+375",
    code: "BY"
  }, {
    name: "Belgium",
    dial_code: "+32",
    code: "BE"
  }, {
    name: "Belize",
    dial_code: "+501",
    code: "BZ"
  }, {
    name: "Benin",
    dial_code: "+229",
    code: "BJ"
  }, {
    name: "Bermuda",
    dial_code: "+1441",
    code: "BM"
  }, {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT"
  }, {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO"
  }, {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA"
  }, {
    name: "Botswana",
    dial_code: "+267",
    code: "BW"
  }, {
    name: "Brazil",
    dial_code: "+55",
    code: "BR"
  }, {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO"
  }, {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN"
  }, {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG"
  }, {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF"
  }, {
    name: "Burundi",
    dial_code: "+257",
    code: "BI"
  }, {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH"
  }, {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM"
  }, {
    name: "Canada",
    dial_code: "+1",
    code: "CA"
  }, {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV"
  }, {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY"
  }, {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF"
  }, {
    name: "Chad",
    dial_code: "+235",
    code: "TD"
  }, {
    name: "Chile",
    dial_code: "+56",
    code: "CL"
  }, {
    name: "China",
    dial_code: "+86",
    code: "CN"
  }, {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX"
  }, {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC"
  }, {
    name: "Colombia",
    dial_code: "+57",
    code: "CO"
  }, {
    name: "Comoros",
    dial_code: "+269",
    code: "KM"
  }, {
    name: "Congo",
    dial_code: "+242",
    code: "CG"
  }, {
    name: "Congo, The Democratic Republic of the Congo",
    dial_code: "+243",
    code: "CD"
  }, {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK"
  }, {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR"
  }, {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI"
  }, {
    name: "Croatia",
    dial_code: "+385",
    code: "HR"
  }, {
    name: "Cuba",
    dial_code: "+53",
    code: "CU"
  }, {
    name: "Cyprus",
    dial_code: "+357",
    code: "CY"
  }, {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ"
  }, {
    name: "Denmark",
    dial_code: "+45",
    code: "DK"
  }, {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ"
  }, {
    name: "Dominica",
    dial_code: "+1767",
    code: "DM"
  }, {
    name: "Dominican Republic",
    dial_code: "+1849",
    code: "DO"
  }, {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC"
  }, {
    name: "Egypt",
    dial_code: "+20",
    code: "EG"
  }, {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV"
  }, {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ"
  }, {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER"
  }, {
    name: "Estonia",
    dial_code: "+372",
    code: "EE"
  }, {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET"
  }, {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK"
  }, {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO"
  }, {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ"
  }, {
    name: "Finland",
    dial_code: "+358",
    code: "FI"
  }, {
    name: "France",
    dial_code: "+33",
    code: "FR"
  }, {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF"
  }, {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF"
  }, {
    name: "Gabon",
    dial_code: "+241",
    code: "GA"
  }, {
    name: "Gambia",
    dial_code: "+220",
    code: "GM"
  }, {
    name: "Georgia",
    dial_code: "+995",
    code: "GE"
  }, {
    name: "Germany",
    dial_code: "+49",
    code: "DE"
  }, {
    name: "Ghana",
    dial_code: "+233",
    code: "GH"
  }, {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI"
  }, {
    name: "Greece",
    dial_code: "+30",
    code: "GR"
  }, {
    name: "Greenland",
    dial_code: "+299",
    code: "GL"
  }, {
    name: "Grenada",
    dial_code: "+1473",
    code: "GD"
  }, {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP"
  }, {
    name: "Guam",
    dial_code: "+1671",
    code: "GU"
  }, {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT"
  }, {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG"
  }, {
    name: "Guinea",
    dial_code: "+224",
    code: "GN"
  }, {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW"
  }, {
    name: "Guyana",
    dial_code: "+595",
    code: "GY"
  }, {
    name: "Haiti",
    dial_code: "+509",
    code: "HT"
  }, {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA"
  }, {
    name: "Honduras",
    dial_code: "+504",
    code: "HN"
  }, {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK"
  }, {
    name: "Hungary",
    dial_code: "+36",
    code: "HU"
  }, {
    name: "Iceland",
    dial_code: "+354",
    code: "IS"
  }, {
    name: "India",
    dial_code: "+91",
    code: "IN"
  }, {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID"
  }, {
    name: "Iran, Islamic Republic of Persian Gulf",
    dial_code: "+98",
    code: "IR"
  }, {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ"
  }, {
    name: "Ireland",
    dial_code: "+353",
    code: "IE"
  }, {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM"
  }, {
    name: "Israel",
    dial_code: "+972",
    code: "IL"
  }, {
    name: "Italy",
    dial_code: "+39",
    code: "IT"
  }, {
    name: "Jamaica",
    dial_code: "+1876",
    code: "JM"
  }, {
    name: "Japan",
    dial_code: "+81",
    code: "JP"
  }, {
    name: "Jersey",
    dial_code: "+44",
    code: "JE"
  }, {
    name: "Jordan",
    dial_code: "+962",
    code: "JO"
  }, {
    name: "Kazakhstan",
    dial_code: "+77",
    code: "KZ"
  }, {
    name: "Kenya",
    dial_code: "+254",
    code: "KE"
  }, {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI"
  }, {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850",
    code: "KP"
  }, {
    name: "Korea, Republic of South Korea",
    dial_code: "+82",
    code: "KR"
  }, {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW"
  }, {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG"
  }, {
    name: "Laos",
    dial_code: "+856",
    code: "LA"
  }, {
    name: "Latvia",
    dial_code: "+371",
    code: "LV"
  }, {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB"
  }, {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS"
  }, {
    name: "Liberia",
    dial_code: "+231",
    code: "LR"
  }, {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY"
  }, {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI"
  }, {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT"
  }, {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU"
  }, {
    name: "Macao",
    dial_code: "+853",
    code: "MO"
  }, {
    name: "Macedonia",
    dial_code: "+389",
    code: "MK"
  }, {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG"
  }, {
    name: "Malawi",
    dial_code: "+265",
    code: "MW"
  }, {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY"
  }, {
    name: "Maldives",
    dial_code: "+960",
    code: "MV"
  }, {
    name: "Mali",
    dial_code: "+223",
    code: "ML"
  }, {
    name: "Malta",
    dial_code: "+356",
    code: "MT"
  }, {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH"
  }, {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ"
  }, {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR"
  }, {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU"
  }, {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT"
  }, {
    name: "Mexico",
    dial_code: "+52",
    code: "MX"
  }, {
    name: "Micronesia, Federated States of Micronesia",
    dial_code: "+691",
    code: "FM"
  }, {
    name: "Moldova",
    dial_code: "+373",
    code: "MD"
  }, {
    name: "Monaco",
    dial_code: "+377",
    code: "MC"
  }, {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN"
  }, {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME"
  }, {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS"
  }, {
    name: "Morocco",
    dial_code: "+212",
    code: "MA"
  }, {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ"
  }, {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM"
  }, {
    name: "Namibia",
    dial_code: "+264",
    code: "NA"
  }, {
    name: "Nauru",
    dial_code: "+674",
    code: "NR"
  }, {
    name: "Nepal",
    dial_code: "+977",
    code: "NP"
  }, {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL"
  }, {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN"
  }, {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC"
  }, {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ"
  }, {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI"
  }, {
    name: "Niger",
    dial_code: "+227",
    code: "NE"
  }, {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG"
  }, {
    name: "Niue",
    dial_code: "+683",
    code: "NU"
  }, {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF"
  }, {
    name: "Northern Mariana Islands",
    dial_code: "+1670",
    code: "MP"
  }, {
    name: "Norway",
    dial_code: "+47",
    code: "NO"
  }, {
    name: "Oman",
    dial_code: "+968",
    code: "OM"
  }, {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK"
  }, {
    name: "Palau",
    dial_code: "+680",
    code: "PW"
  }, {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS"
  }, {
    name: "Panama",
    dial_code: "+507",
    code: "PA"
  }, {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG"
  }, {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY"
  }, {
    name: "Peru",
    dial_code: "+51",
    code: "PE"
  }, {
    name: "Philippines",
    dial_code: "+63",
    code: "PH"
  }, {
    name: "Pitcairn",
    dial_code: "+872",
    code: "PN"
  }, {
    name: "Poland",
    dial_code: "+48",
    code: "PL"
  }, {
    name: "Portugal",
    dial_code: "+351",
    code: "PT"
  }, {
    name: "Puerto Rico",
    dial_code: "+1939",
    code: "PR"
  }, {
    name: "Qatar",
    dial_code: "+974",
    code: "QA"
  }, {
    name: "Romania",
    dial_code: "+40",
    code: "RO"
  }, {
    name: "Russia",
    dial_code: "+7",
    code: "RU"
  }, {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW"
  }, {
    name: "Reunion",
    dial_code: "+262",
    code: "RE"
  }, {
    name: "Saint Barthelemy",
    dial_code: "+590",
    code: "BL"
  }, {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH"
  }, {
    name: "Saint Kitts and Nevis",
    dial_code: "+1869",
    code: "KN"
  }, {
    name: "Saint Lucia",
    dial_code: "+1758",
    code: "LC"
  }, {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF"
  }, {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM"
  }, {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1784",
    code: "VC"
  }, {
    name: "Samoa",
    dial_code: "+685",
    code: "WS"
  }, {
    name: "San Marino",
    dial_code: "+378",
    code: "SM"
  }, {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST"
  }, {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA"
  }, {
    name: "Senegal",
    dial_code: "+221",
    code: "SN"
  }, {
    name: "Serbia",
    dial_code: "+381",
    code: "RS"
  }, {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC"
  }, {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL"
  }, {
    name: "Singapore",
    dial_code: "+65",
    code: "SG"
  }, {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK"
  }, {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI"
  }, {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB"
  }, {
    name: "Somalia",
    dial_code: "+252",
    code: "SO"
  }, {
    name: "South Africa",
    dial_code: "+27",
    code: "ZA"
  }, {
    name: "South Sudan",
    dial_code: "+211",
    code: "SS"
  }, {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS"
  }, {
    name: "Spain",
    dial_code: "+34",
    code: "ES"
  }, {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK"
  }, {
    name: "Sudan",
    dial_code: "+249",
    code: "SD"
  }, {
    name: "Suriname",
    dial_code: "+597",
    code: "SR"
  }, {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ"
  }, {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ"
  }, {
    name: "Sweden",
    dial_code: "+46",
    code: "SE"
  }, {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH"
  }, {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY"
  }, {
    name: "Taiwan",
    dial_code: "+886",
    code: "TW"
  }, {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ"
  }, {
    name: "Tanzania, United Republic of Tanzania",
    dial_code: "+255",
    code: "TZ"
  }, {
    name: "Thailand",
    dial_code: "+66",
    code: "TH"
  }, {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL"
  }, {
    name: "Togo",
    dial_code: "+228",
    code: "TG"
  }, {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK"
  }, {
    name: "Tonga",
    dial_code: "+676",
    code: "TO"
  }, {
    name: "Trinidad and Tobago",
    dial_code: "+1868",
    code: "TT"
  }, {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN"
  }, {
    name: "Turkey",
    dial_code: "+90",
    code: "TR"
  }, {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM"
  }, {
    name: "Turks and Caicos Islands",
    dial_code: "+1649",
    code: "TC"
  }, {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV"
  }, {
    name: "Uganda",
    dial_code: "+256",
    code: "UG"
  }, {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA"
  }, {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE"
  }, {
    name: "United Kingdom",
    dial_code: "+44",
    code: "GB"
  }, {
    name: "United States",
    dial_code: "+1",
    code: "US"
  }, {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY"
  }, {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ"
  }, {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU"
  }, {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dial_code: "+58",
    code: "VE"
  }, {
    name: "Vietnam",
    dial_code: "+84",
    code: "VN"
  }, {
    name: "Virgin Islands, British",
    dial_code: "+1284",
    code: "VG"
  }, {
    name: "Virgin Islands, U.S.",
    dial_code: "+1340",
    code: "VI"
  }, {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF"
  }, {
    name: "Yemen",
    dial_code: "+967",
    code: "YE"
  }, {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM"
  }, {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW"
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    ...props,
    className: `wcb-phone__country-code-select ${className}`,
    onChange: e => onChange(e.currentTarget.value)
  }, data.map(item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: item.dial_code,
    value: item.dial_code
  }, item.name, " (", item.dial_code, " )")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectCountryCode);

/***/ }),

/***/ "./src/block-phone/WcbPhonePanelGeneral.tsx":
/*!**************************************************!*\
  !*** ./src/block-phone/WcbPhonePanelGeneral.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_PHONE_PANEL_GENERAL_DEMO: () => (/* binding */ WCB_PHONE_PANEL_GENERAL_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const WCB_PHONE_PANEL_GENERAL_DEMO = {
  autocomplete: "tel-national",
  isRequired: false,
  placeholder: "123 45 678",
  pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
};
const WcbPhonePanelGeneral = ({
  panelData = WCB_PHONE_PANEL_GENERAL_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    autocomplete,
    isRequired,
    placeholder,
    pattern
  } = panelData;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("General", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Autocomplete", "boostify-blocks"),
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
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "off"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Off", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "tel-national"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Phone", "boostify-blocks"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Pattern", "boostify-blocks"),
    value: pattern,
    onChange: selection => {
      setAttr__({
        ...panelData,
        pattern: selection
      });
    }
    // @ts-ignore
    ,
    __nextHasNoMarginBottom: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("None", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "[0-9]{3}-?[0-9]{2}-?[0-9]{3}"
  }, "123-45-678"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
  }, "123-456-7890"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "[0-9]{3}s?[0-9]{3}s?[0-9]{4}"
  }, "123 456 7890")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("PLACEHOLDER", "boostify-blocks"),
    value: placeholder,
    onChange: nextValue => {
      setAttr__({
        ...panelData,
        placeholder: nextValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Required", "boostify-blocks"),
    checked: isRequired,
    onChange: isChecked => {
      setAttr__({
        ...panelData,
        isRequired: isChecked
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbPhonePanelGeneral);

/***/ }),

/***/ "./src/block-phone/attributes.ts":
/*!***************************************!*\
  !*** ./src/block-phone/attributes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WcbPhonePanelGeneral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WcbPhonePanelGeneral */ "./src/block-phone/WcbPhonePanelGeneral.tsx");

const blokc1Attrs = {
  uniqueId: {
    type: "string",
    default: ""
  },
  countryCode: {
    type: "string",
    default: ""
  },
  pattern: {
    type: "string"
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
    default: _WcbPhonePanelGeneral__WEBPACK_IMPORTED_MODULE_0__.WCB_PHONE_PANEL_GENERAL_DEMO
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blokc1Attrs);

/***/ }),

/***/ "./src/block-phone/block.json":
/*!************************************!*\
  !*** ./src/block-phone/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wcb/phone","parent":["wcb/form"],"version":"0.1.0","title":"Phone","category":"wcb-blocks","icon":"- wcb-block-editor-block-icon lni lni-phone text-xl","description":"Example static block scaffolded with Create Block tool.","supports":{"__experimentalSelector":"span,label"},"textdomain":"wcb-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/block-phone/editor.scss":
/*!*************************************!*\
  !*** ./src/block-phone/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-phone/index.js":
/*!**********************************!*\
  !*** ./src/block-phone/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-phone/style.scss");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/block-phone/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/block-phone/Save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-phone/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/block-phone/attributes.ts");
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
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "wcb-editor-block-icons fill-none ",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10
  }))
});

/***/ }),

/***/ "./src/block-phone/style.scss":
/*!************************************!*\
  !*** ./src/block-phone/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/HOCInspectorControls.tsx":
/*!*************************************************!*\
  !*** ./src/components/HOCInspectorControls.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INSPECTOR_CONTROLS_TABS: () => (/* binding */ INSPECTOR_CONTROLS_TABS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const INSPECTOR_CONTROLS_TABS = [{
  name: "General",
  title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "w-5 h-5 fill-none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("General", "boostify-blocks")))
}, {
  name: "Styles",
  title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-5 h-5 fill-none",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.47 6H16.47",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.47 18H15.47",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.47 13.95L16.47 14",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.47 10H14.47",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.44 7H2.53",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Styles", "boostify-blocks")))
}, {
  name: "Advances",
  title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-5 h-5 fill-none",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Advances", "boostify-blocks")))
}];
const HOCInspectorControls = ({
  renderTabPanels,
  tabs = INSPECTOR_CONTROLS_TABS,
  uniqueId = "",
  tabDefaultActive = "General",
  onChangeActive
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: `wcb-inspectorControls__panel ${uniqueId}`,
      activeClass: "HOCInspectorControls__ative-tab active-tab",
      tabs: tabs,
      onSelect: handleChageTab,
      initialTabName: tabDefaultActive
    }, tab => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, renderContent(), renderContent2());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(HOCInspectorControls));

/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_STORE_PANELS: () => (/* binding */ WCB_STORE_PANELS)
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
  reducer(state = DEFAULT_STATE, action) {
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
      blockStores: select(_data__WEBPACK_IMPORTED_MODULE_2__.WCB_STORE_PANELS
      // @ts-ignore
      )?.getBlockPanelInfo()
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
function converUniqueId(text, prefix = "") {
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
/* harmony export */   "default": () => (/* binding */ converUniqueIdToAnphaKey)
/* harmony export */ });
function converUniqueIdToAnphaKey(text, prefix = "wcb-") {
  if (!text) {
    return (prefix + "converniquedreturnnull" + Date.now() + Math.random()).replace(/\./g, "-");
  }
  return prefix + text.replace(/ /g, "").replace(/\d/g, "")
  // text.substring(2, 9).replace(/-/g, "").replace(/ /g, "").replace(/\d/g, "")
  ;
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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 			"block-phone/index": 0,
/******/ 			"block-phone/style-index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-phone/style-index"], () => (__webpack_require__("./src/block-phone/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/accordion-js/dist/accordion.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/accordion-js/dist/accordion.min.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Accordion v3.3.2
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 * 
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */

!function(e){var t=0,n=function e(n,s){var i=this,o=this,a=!1;if(Array.isArray(n))return!!n.length&&n.map((function(t){return new e(t,s)}));var r={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},s);var e="string"==typeof n;this.container=e?document.querySelector(n):n,this.createDefinitions(),o.attachEvents()},createDefinitions:function(){var e=this,n=this.options,s=n.elementClass,i=n.openOnInit,o=n.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(".".concat(s));this.elements=Array.from(o).filter((function(e){return e.classList&&e.classList.contains(s)})),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter((function(e){return!e.classList.contains("js-enabled")})).forEach((function(n){n.classList.add("js-enabled"),e.generateIDs(n),e.setARIA(n),e.setTransition(n);var s=e.elements.indexOf(n);t++,i.includes(s)?e.showElement(n,!1):e.closeElement(n,!1)}))},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.options,s=n.duration,i=n.panelClass,o=e.querySelector(".".concat(i)),a=c("transitionDuration");o.style[a]=t?null:"".concat(s,"ms")},generateIDs:function(e){var n=this.options,s=n.triggerClass,i=n.panelClass,o=e.querySelector(".".concat(s)),a=e.querySelector(".".concat(i));e.setAttribute("id","ac-".concat(t)),o.setAttribute("id","ac-trigger-".concat(t)),a.setAttribute("id","ac-panel-".concat(t))},removeIDs:function(e){var t=this.options,n=t.triggerClass,s=t.panelClass,i=e.querySelector(".".concat(n)),o=e.querySelector(".".concat(s));e.removeAttribute("id"),i.removeAttribute("id"),o.removeAttribute("id")},setARIA:function(e){var n=this.options,s=n.ariaEnabled,i=n.triggerClass,o=n.panelClass;if(s){var a=e.querySelector(".".concat(i)),r=e.querySelector(".".concat(o));a.setAttribute("role","button"),a.setAttribute("aria-controls","ac-panel-".concat(t)),a.setAttribute("aria-disabled",!1),a.setAttribute("aria-expanded",!1),r.setAttribute("role","region"),r.setAttribute("aria-labelledby","ac-trigger-".concat(t))}},updateARIA:function(e,t){var n=t.ariaExpanded,s=t.ariaDisabled,i=this.options,o=i.ariaEnabled,a=i.triggerClass;if(o){var r=e.querySelector(".".concat(a));r.setAttribute("aria-expanded",n),r.setAttribute("aria-disabled",s)}},removeARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var o=e.querySelector(".".concat(s)),a=e.querySelector(".".concat(i));o.removeAttribute("role"),o.removeAttribute("aria-controls"),o.removeAttribute("aria-disabled"),o.removeAttribute("aria-expanded"),a.removeAttribute("role"),a.removeAttribute("aria-labelledby")}},focus:function(e,t){e.preventDefault();var n=this.options.triggerClass;t.querySelector(".".concat(n)).focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var t=this.currFocusedIdx+1;if(t>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},focusPrevElement:function(e){var t=this.currFocusedIdx-1;if(t<0)return this.focusLastElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},showElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,o=n.collapse,a=n.beforeOpen;t&&a(e);var r=e.querySelector(".".concat(s)),c=r.scrollHeight;e.classList.add(i),requestAnimationFrame((function(){requestAnimationFrame((function(){r.style.height=t?"".concat(c,"px"):"auto"}))})),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!o})},closeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,o=n.beforeClose,a=e.querySelector(".".concat(s)),r=a.scrollHeight;e.classList.remove(i),t?(o(e),requestAnimationFrame((function(){a.style.height="".concat(r,"px"),requestAnimationFrame((function(){a.style.height=0}))}))):a.style.height=0,this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(e){var t=this.options,n=t.activeClass,s=t.collapse,i=e.classList.contains(n);if(!i||s)return i?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,t=this.options,n=t.activeClass;t.showMultiple||this.elements.forEach((function(t,s){t.classList.contains(n)&&s!==e.currFocusedIdx&&e.closeElement(t)}))},handleClick:function(e){var t=this,n=e.currentTarget;this.elements.forEach((function(s,i){s.contains(n)&&"A"!==e.target.nodeName&&(t.currFocusedIdx=i,t.closeElements(),t.focus(e,s),t.toggleElement(s))}))},handleKeydown:function(e){var t=38,n=40,s=36,i=35;switch(e.keyCode){case t:return this.focusPrevElement(e);case n:return this.focusNextElement(e);case s:return this.focusFirstElement(e);case i:return this.focusLastElement(e);default:return null}},handleTransitionEnd:function(e){if("height"===e.propertyName){var t=this.options,n=t.onOpen,s=t.onClose,i=e.currentTarget,o=parseInt(i.style.height),a=this.elements.find((function(e){return e.contains(i)}));o>0?(i.style.height="auto",n(a)):s(a)}}};this.attachEvents=function(){if(!a){var e=r.options,t=e.triggerClass,n=e.panelClass;r.handleClick=r.handleClick.bind(r),r.handleKeydown=r.handleKeydown.bind(r),r.handleTransitionEnd=r.handleTransitionEnd.bind(r),r.elements.forEach((function(e){var s=e.querySelector(".".concat(t)),i=e.querySelector(".".concat(n));s.addEventListener("click",r.handleClick),s.addEventListener("keydown",r.handleKeydown),i.addEventListener("webkitTransitionEnd",r.handleTransitionEnd),i.addEventListener("transitionend",r.handleTransitionEnd)})),a=!0}},this.detachEvents=function(){if(a){var e=r.options,t=e.triggerClass,n=e.panelClass;r.elements.forEach((function(e){var s=e.querySelector(".".concat(t)),i=e.querySelector(".".concat(n));s.removeEventListener("click",r.handleClick),s.removeEventListener("keydown",r.handleKeydown),i.removeEventListener("webkitTransitionEnd",r.handleTransitionEnd),i.removeEventListener("transitionend",r.handleTransitionEnd)})),a=!1}},this.toggle=function(e){var t=r.elements[e];t&&r.toggleElement(t)},this.open=function(e){var t=r.elements[e];t&&r.showElement(t)},this.openAll=function(){var e=r.options,t=e.activeClass,n=e.onOpen;r.elements.forEach((function(e){e.classList.contains(t)||(r.showElement(e,!1),n(e))}))},this.close=function(e){var t=r.elements[e];t&&r.closeElement(t)},this.closeAll=function(){var e=r.options,t=e.activeClass,n=e.onClose;r.elements.forEach((function(e){e.classList.contains(t)&&(r.closeElement(e,!1),n(e))}))},this.destroy=function(){i.detachEvents(),i.openAll(),r.elements.forEach((function(e){r.removeIDs(e),r.removeARIA(e),r.setTransition(e,!0)})),a=!0},this.update=function(){r.createDefinitions(),i.detachEvents(),i.attachEvents()};var c=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=l(e),e="webkit".concat(e))},l=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};r.init()}; true&&void 0!==module.exports?module.exports=n:e.Accordion=n}(window);

/***/ }),

/***/ "./src/________.ts":
/*!*************************!*\
  !*** ./src/________.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEMO_WCB_GLOBAL_VARIABLES": () => (/* binding */ DEMO_WCB_GLOBAL_VARIABLES)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

const INIT_WCB_GLOBAL_VARIABLES = {
  media_tablet: "768px",
  media_desktop: "1024px",
  reCAPTCHA_v3_secret_key: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
  reCAPTCHA_v3_site_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
  reCAPTCHA_v2_site_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
  reCAPTCHA_v2_secret_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
  defaultContentWidth: "1140px",
  enableTemplatesButton: "true",
  enableCopyPasteStyles: "false"
};
const DEMO_WCB_GLOBAL_VARIABLES = {
  ...INIT_WCB_GLOBAL_VARIABLES,
  ...(window.wcbGlobalVariables || {})
};

/***/ }),

/***/ "./src/block-faq/FrontendStyles.tsx":
/*!******************************************!*\
  !*** ./src/block-faq/FrontendStyles.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCarouselForWcbFaq": () => (/* binding */ initCarouselForWcbFaq)
/* harmony export */ });
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var accordion_js_dist_accordion_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accordion-js/dist/accordion.min.css */ "./node_modules/accordion-js/dist/accordion.min.css");


// const divsToUpdate = document.querySelectorAll(".wcb-faq__wrap.wcb-update-div");
// divsToUpdate.forEach((div) => {
// 	const preEl = div.querySelector(
// 		`pre[data-wcb-block-attrs=${div.id}]`
// 	) as HTMLElement | null;
// 	const divRenderCssEl = div.querySelector(
// 		`div[data-wcb-global-styles=${div.id}]`
// 	) as HTMLElement | null;
// 	if (!preEl || !preEl.innerText || !divRenderCssEl) {
// 		return;
// 	}
// 	//
// 	const props = JSON.parse(preEl?.innerText);
// 	initCarousel(div.id, props);

// 	//
// 	ReactDOM.render(<FrontendStyles {...props} />, divRenderCssEl);
// 	//
// 	div.classList.remove("wcb-update-div");
// 	preEl.remove();
// });

//
// --------------------------- FORM AJAX
function initCarouselForWcbFaq(div, _ref) {
  let {
    general_general
  } = _ref;
  const id = div.id;
  const container = "#" + id + "> .accordion-container";
  if (!container || general_general.layout !== "accordion") {
    return;
  }
  new (accordion_js__WEBPACK_IMPORTED_MODULE_0___default())(container, {
    duration: 400,
    showMultiple: general_general?.showMultiple,
    openOnInit: !general_general.collapseOtherItems ? [...Array(99).keys()] : general_general?.expandFirstItem ? [0] : [],
    activeClass: "active"
  });
}

/***/ }),

/***/ "./src/block-form/FrontendStyles.tsx":
/*!*******************************************!*\
  !*** ./src/block-form/FrontendStyles.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSubmitFormForWcbForm": () => (/* binding */ handleSubmitFormForWcbForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");

// --------------------------- FORM AJAX
function handleSubmitFormForWcbForm(div, props) {
  const formId = div.id;
  let $ = jQuery;
  if (typeof jQuery !== "function") {
    return;
  }
  const reCaptchaV2 = props.general_gg_recaptcha?.enableReCaptcha && props.general_gg_recaptcha?.version === "v2";
  const reCaptchaV3 = props.general_gg_recaptcha?.enableReCaptcha && props.general_gg_recaptcha?.version === "v3";
  if (reCaptchaV2) {
    $(`#${formId} .g-recaptcha`).attr("data-sitekey", ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES.reCAPTCHA_v2_site_key || "");
  }
  $("#" + formId).on("submit", function (event) {
    event.preventDefault();

    // ----------------------------
    const handleAjaxAction = () => {
      let formData = $(this).serializeArray();
      formData = formData.map(item => {
        const fieldLabel = $(`[data-label-for='${item.name}']`).text();
        return {
          name: fieldLabel,
          value: item.value
        };
      });
      const mailInfo = {
        subject: props.general_action.subject || "",
        to: props.general_action.main.To.email || "",
        cc: props.general_action.main.CC.email || "",
        bcc: props.general_action.main.BCC.email || ""
      };
      $.ajax({
        type: "post",
        //Phương thức truyền post hoặc get
        dataType: "json",
        //Dạng dữ liệu trả về xml, json, script, or html
        url: wcbFrontendAjaxObject.ajaxurl,
        //Đường dẫn chứa hàm xử lý dữ liệu. Mặc định của WP như vậy
        data: {
          action: "wcbform_action",
          //Tên action
          formData,
          mailInfo
        },
        context: this,
        beforeSend: function () {},
        success: function (response) {
          // This is OK code
          console.log(99, "-----------OK", {
            props
          });
          $(".wcb-form__successMessageText").css("display", "block");
          $(".wcb-form__errorMessageText").css("display", "none");
          if (props?.general_general?.confirmationType === "url-text" && props?.general_general?.successRedirectUrl) {
            window.location.href = props?.general_general?.successRedirectUrl;
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("The following error occured: " + textStatus, errorThrown);
          $(".wcb-form__successMessageText").css("display", "none");
          $(".wcb-form__errorMessageText").css("display", "block");
        }
      });
    };

    // ------------------------------------------------------------------------------------
    if (typeof grecaptcha === "object" && reCaptchaV3) {
      grecaptcha.ready(function () {
        grecaptcha.execute(___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES.reCAPTCHA_v3_site_key, {
          action: "submit"
        }).then(function (token) {
          console.log(123, {
            token,
            key: ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES.reCAPTCHA_v3_site_key
          });
          handleAjaxAction();
        });
      });
    } else {
      handleAjaxAction();
    }
    return false;
  });
}

/***/ }),

/***/ "./src/block-products/FrontendStyles.tsx":
/*!***********************************************!*\
  !*** ./src/block-products/FrontendStyles.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCarouselForWcbProducts": () => (/* binding */ initCarouselForWcbProducts)
/* harmony export */ });
/* harmony import */ var scroll_snap_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-snap-slider */ "./node_modules/scroll-snap-slider/src/ScrollSnapSlider.js");

// const FrontendStyles: FC<Props> = (attrs) => {
// 	return <GlobalCss {...attrs} />;
// };

// //
// const divsToUpdate = document.querySelectorAll(
// 	".wcb-products__wrap.wcb-update-div"
// );
// divsToUpdate.forEach((div) => {
// 	const preEl = div.querySelector(
// 		`pre[data-wcb-block-attrs=${div.id}]`
// 	) as HTMLElement | null;

// 	const divRenderCssEl = div.querySelector(
// 		`div[data-wcb-global-styles=${div.id}]`
// 	) as HTMLElement | null;

// 	if (!preEl || !preEl.innerText || !divRenderCssEl) {
// 		return;
// 	}
// 	//
// 	const props = JSON.parse(preEl?.innerText);
// 	//
// 	ReactDOM.render(<FrontendStyles {...props} />, divRenderCssEl);
// 	//
// 	div.classList.remove("wcb-update-div");
// 	preEl.remove();
// });

function initCarouselForWcbProducts(div, props) {
  const id = div.id;
  const sliderMultiElement = document.querySelector(".scroll-snap-slider.-multi");
  const sliderMulti = new scroll_snap_slider__WEBPACK_IMPORTED_MODULE_0__.ScrollSnapSlider(sliderMultiElement);
  const prev = document.querySelector(".indicators.-multi .arrow.-prev");
  const next = document.querySelector(".indicators.-multi .arrow.-next");
  console.log(11, {
    sliderMulti,
    prev,
    next
  });
  const updateArrows = function () {
    prev.classList.toggle("-disabled", sliderMultiElement.scrollLeft === 0);
    next.classList.toggle("-disabled", sliderMultiElement.scrollLeft + sliderMultiElement.offsetWidth === sliderMultiElement.scrollWidth);
  };
  prev.addEventListener("click", function () {
    sliderMulti.slideTo(sliderMulti.slide - 1);
  });
  next.addEventListener("click", function () {
    sliderMulti.slideTo(sliderMulti.slide + 1);
  });
  sliderMulti.addEventListener("slide-pass", updateArrows);
  sliderMulti.addEventListener("slide-stop", updateArrows);
}

/***/ }),

/***/ "./src/block-testimonials/FrontendStyles.tsx":
/*!***************************************************!*\
  !*** ./src/block-testimonials/FrontendStyles.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCarouselForWcbTestimonials": () => (/* binding */ initCarouselForWcbTestimonials)
/* harmony export */ });
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../________ */ "./src/________.ts");


//
// const divsToUpdate = document.querySelectorAll(
// 	".wcb-testimonials__wrap.wcb-update-div"
// );
// divsToUpdate.forEach((div) => {
// 	const preEl = div.querySelector(
// 		`pre[data-wcb-block-attrs=${div.id}]`
// 	) as HTMLElement | null;

// 	const divRenderCssEl = div.querySelector(
// 		`div[data-wcb-global-styles=${div.id}]`
// 	) as HTMLElement | null;

// 	if (!preEl || !preEl.innerText || !divRenderCssEl) {
// 		return;
// 	}
// 	//
// 	const props = JSON.parse(preEl?.innerText);
// 	//
// 	initCarousel({ id: div.id, props });
// });

function initCarouselForWcbTestimonials(div, props) {
  const id = div.id;
  let $ = jQuery;
  if (typeof jQuery !== "function") {
    return;
  }
  const {
    animationDuration,
    autoplaySpeed,
    hoverpause,
    isAutoPlay,
    rewind,
    showArrowsDots,
    adaptiveHeight
  } = props.general_carousel;
  const {
    colGap,
    columns,
    numberofTestimonials,
    textAlignment
  } = props.general_general;
  const {
    value_Desktop: col_desktop,
    value_Tablet: col_tablet,
    value_Mobile: col_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__["default"])(columns);
  const settings = {
    infinite: rewind,
    speed: animationDuration || 500,
    autoplay: isAutoPlay,
    autoplaySpeed,
    //
    slidesToShow: col_desktop,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-arrow slick-prev">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
		</button>`,
    nextArrow: `<button type="button" class="slick-arrow slick-next">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
		</button>`,
    dots: showArrowsDots !== "Arrow",
    arrows: showArrowsDots !== "Dot",
    adaptiveHeight,
    pauseOnHover: hoverpause,
    responsive: [{
      breakpoint: parseInt(___WEBPACK_IMPORTED_MODULE_1__.DEMO_WCB_GLOBAL_VARIABLES.media_desktop),
      settings: {
        slidesToShow: col_tablet
      }
    }, {
      breakpoint: parseInt(___WEBPACK_IMPORTED_MODULE_1__.DEMO_WCB_GLOBAL_VARIABLES.media_tablet),
      settings: {
        slidesToShow: col_mobile
      }
    }]
  };
  $(`#${id} .wcb-testimonials__wrap-items`).slick(settings);
}

/***/ }),

/***/ "./src/utils/getValueFromAttrsResponsives.ts":
/*!***************************************************!*\
  !*** ./src/utils/getValueFromAttrsResponsives.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getValueFromAttrsResponsives = function (properties, currentDevice) {
  // let value_Desktop = properties.Desktop;
  // let value_Tablet = properties.Tablet || value_Desktop;
  // let value_Mobile = properties.Mobile || value_Tablet;

  const v_Desktop = properties?.Desktop;
  const v_Tablet = typeof properties?.Tablet !== "undefined" && properties?.Tablet !== null ? properties?.Tablet : v_Desktop;
  const v_Mobile = typeof properties?.Mobile !== "undefined" && properties?.Mobile !== null ? properties?.Mobile : v_Tablet;
  let currentDeviceValue = undefined;
  if (currentDevice) {
    currentDeviceValue = currentDevice === "Desktop" ? v_Desktop : currentDevice === "Tablet" ? v_Tablet : v_Mobile;
  }
  return {
    value_Desktop: v_Desktop,
    value_Tablet: v_Tablet,
    value_Mobile: v_Mobile,
    currentDeviceValue
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValueFromAttrsResponsives);

/***/ }),

/***/ "./node_modules/accordion-js/dist/accordion.min.css":
/*!**********************************************************!*\
  !*** ./node_modules/accordion-js/dist/accordion.min.css ***!
  \**********************************************************/
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

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["api"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/scroll-snap-slider/src/ScrollSnapSlider.js":
/*!*****************************************************************!*\
  !*** ./node_modules/scroll-snap-slider/src/ScrollSnapSlider.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSnapSlider": () => (/* binding */ ScrollSnapSlider)
/* harmony export */ });
/**
 * @classdesc Mostly CSS slider with great performance.
 */
class ScrollSnapSlider {

  /**
   * Bind methods and possibly attach listeners.
   * @param {Element|HTMLElement} element - element to attach listeners and dispatch events
   * @param {Boolean} enabled - attach listeners and enable plugins now. If this is false, you will have to call slider.attachListener() once and plugin.enable() for each plugin later.
   * @param {ScrollSnapPlugin[]} plugins - additional behaviour
   */
  constructor (element, enabled = true, plugins = []) {
    /**
     * Base element of this slider
     * @name ScrollSnapSlider#element
     * @type {Element|HTMLElement}
     * @readonly
     * @public
     */
    this.element = element

    /**
     * Active slide's scrollLeft in the containing element
     * @name ScrollSnapSlider#slideScrollLeft
     * @type {Number}
     * @private
     */
    this.slideScrollLeft = this.element.scrollLeft

    /**
     * Timeout ID used to catch the end of scroll events
     * @name ScrollSnapSlider#scrollTimeoutId
     * @type {?Number}
     * @private
     */
    this.scrollTimeoutId = null

    /**
     * @callback sizingMethod
     * @param {ScrollSnapSlider} slider
     * @return {Number} integer size of a slide in pixels
     */

    /**
     * Width of each slide
     * @type {sizingMethod}
     * @public
     */
    this.sizingMethod = function (slider) {
      return slider.element.firstElementChild.offsetWidth
    }

    /**
     * @callback roundingMethod
     * @param {Number} x - factor indicating th current position (e.g "0" for first slide, "2.5" for third slide and a half)
     * @return {Number} f(x) - integer factor indicating the currently 'active' slide.
     */

    /**
     * Rounding method used to calculate the current slide (e.g. Math.floor, Math.round, Math.ceil, or totally custom.)
     * @name ScrollSnapSlider#roundingMethod
     * @type {roundingMethod}
     * @public
     */
    this.roundingMethod = Math.round

    /**
     * Active slide
     * @name ScrollSnapSlider#slide
     * @type {?Number}
     * @public
     */
    this.slide = this.calculateSlide()

    /**
     * Timeout delay in milliseconds used to catch the end of scroll events
     * @name ScrollSnapSlider#scrollTimeout
     * @type {?Number}
     * @public
     */
    this.scrollTimeout = 100

    /**
     * Options for the scroll listener (passive by default, may be overwritten for compatibility or other reasons)
     * @name ScrollSnapSlider#listenerOptions
     * @type {AddEventListenerOptions}
     * @public
     */
    this.listenerOptions = {
      passive: true
    }

    this.onScroll = this.onScroll.bind(this)
    this.onScrollEnd = this.onScrollEnd.bind(this)
    this.slideTo = this.slideTo.bind(this)

    /**
     * Adds event listener to the element
     * @name ScrollSnapSlider#addEventListener
     * @method
     * @public
     */
    this.addEventListener = this.element.addEventListener.bind(this.element)

    /**
     * Removes event listener from the element
     * @name ScrollSnapSlider#removeEventListener
     * @method
     * @public
     */
    this.removeEventListener = this.element.removeEventListener.bind(this.element)

    enabled && this.attachListeners()

    /**
     * Maps a plugin name to its instance
     * @type {Map<String, Object>}
     */
    this.plugins = new window.Map()
    for (const plugin of plugins) {
      this.plugins.set(plugin.id, plugin)
      enabled && plugin.enable(this)
    }
  }

  /**
   * Attach all necessary listeners
   * @return {void}
   * @public
   */
  attachListeners () {
    this.addEventListener('scroll', this.onScroll, this.listenerOptions)
  }

  /**
   * Detach all listeners
   * @return {void}
   * @public
   */
  detachListeners () {
    this.removeEventListener('scroll', this.onScroll, this.listenerOptions)
    window.clearTimeout(this.scrollTimeoutId)
  }

  /**
   * Act when scrolling starts and stops
   * @return {void}
   * @private
   */
  onScroll () {
    if (null === this.scrollTimeoutId) {
      const direction = (this.element.scrollLeft > this.slideScrollLeft) ? 1 : -1
      this.dispatch('slide-start', this.slide + direction)
    }

    const floored = this.calculateSlide()
    if (floored !== this.slide) {
      this.slideScrollLeft = this.element.scrollLeft
      this.slide = floored
      this.dispatch('slide-pass', this.slide)
    }

    window.clearTimeout(this.scrollTimeoutId)
    this.scrollTimeoutId = window.setTimeout(this.onScrollEnd, this.scrollTimeout)
  }

  /**
   * Calculate all necessary things and dispatch an event when sliding stops
   * @return {void}
   * @private
   */
  onScrollEnd () {
    this.scrollTimeoutId = null
    this.slide = this.calculateSlide()
    this.slideScrollLeft = this.element.scrollLeft
    this.dispatch('slide-stop', this.slide)
  }

  /**
   * Calculates the active slide.
   * The scroll-snap-type property makes sure that the container snaps perfectly to integer multiples.
   * @return {Number}
   * @private
   */
  calculateSlide () {
    return this.roundingMethod(this.element.scrollLeft / this.sizingMethod(this))
  }

  /**
   * @param {String} event
   * @param {any} detail
   * @return {boolean}
   * @private
   */
  dispatch (event, detail) {
    return this.element.dispatchEvent(
      new window.CustomEvent(event, {
        detail: detail
      })
    )
  }

  /**
   * Scroll to a slide by index.
   *
   * @param {Number} index
   * @return {void}
   * @public
   */
  slideTo (index) {
    this.element.scrollTo({
      left: index * this.sizingMethod(this)
    })
  }

  /**
   * Free resources and listeners, disable plugins
   * @return {void}
   * @public
   */
  destroy () {
    window.clearTimeout(this.scrollTimeoutId)
    this.detachListeners()

    for (const plugin of this.plugins.values()) {
      plugin.disable()
    }
  }
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "woostify-blocks:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
/******/ 			"block-common-css/FrontendStyles": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
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
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwoostify_blocks"] = self["webpackChunkwoostify_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************************!*\
  !*** ./src/block-common-css/FrontendStyles.tsx ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_faq_FrontendStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-faq/FrontendStyles */ "./src/block-faq/FrontendStyles.tsx");
/* harmony import */ var _block_form_FrontendStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block-form/FrontendStyles */ "./src/block-form/FrontendStyles.tsx");
/* harmony import */ var _block_testimonials_FrontendStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../block-testimonials/FrontendStyles */ "./src/block-testimonials/FrontendStyles.tsx");
/* harmony import */ var _block_products_FrontendStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block-products/FrontendStyles */ "./src/block-products/FrontendStyles.tsx");







const classes = [{
  D: ".wcb-button__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-button_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-button/GlobalCss */ "./src/block-button/GlobalCss.tsx")))
}, {
  D: ".wcb-buttons__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-buttons_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-buttons/GlobalCss */ "./src/block-buttons/GlobalCss.tsx")))
}, {
  D: ".wcb-cta__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-cta_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-cta/GlobalCss */ "./src/block-cta/GlobalCss.tsx")))
}, {
  D: ".wcb-products__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-products_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-products/GlobalCss */ "./src/block-products/GlobalCss.tsx"))),
  F: _block_products_FrontendStyles__WEBPACK_IMPORTED_MODULE_6__.initCarouselForWcbProducts
}, {
  D: ".wcb-posts-grid__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-posts-grid_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-posts-grid/GlobalCss */ "./src/block-posts-grid/GlobalCss.tsx")))
}, {
  D: ".wcb-container__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("src_block-container_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-container/GlobalCss */ "./src/block-container/GlobalCss.tsx")))
}, {
  D: ".wcb-faq__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-faq_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-faq/GlobalCss */ "./src/block-faq/GlobalCss.tsx"))),
  F: _block_faq_FrontendStyles__WEBPACK_IMPORTED_MODULE_3__.initCarouselForWcbFaq
}, {
  D: ".wcb-form__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-form_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-form/GlobalCss */ "./src/block-form/GlobalCss.tsx"))),
  F: _block_form_FrontendStyles__WEBPACK_IMPORTED_MODULE_4__.handleSubmitFormForWcbForm
}, {
  D: ".wcb-heading__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-heading_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-heading/GlobalCss */ "./src/block-heading/GlobalCss.tsx")))
}, {
  D: ".wcb-icon-box__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-icon-box_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-icon-box/GlobalCss */ "./src/block-icon-box/GlobalCss.tsx")))
}, {
  D: ".wcb-image__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-image_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-image/GlobalCss */ "./src/block-image/GlobalCss.tsx")))
}, {
  D: ".wcb-map__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("src_block-map_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-map/GlobalCss */ "./src/block-map/GlobalCss.tsx")))
}, {
  D: ".wcb-team__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-team_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-team/GlobalCss */ "./src/block-team/GlobalCss.tsx")))
}, {
  D: ".wcb-testimonials__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_color-rgba_index_mjs"), __webpack_require__.e("src_block-testimonials_GlobalCss_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../block-testimonials/GlobalCss */ "./src/block-testimonials/GlobalCss.tsx"))),
  F: _block_testimonials_FrontendStyles__WEBPACK_IMPORTED_MODULE_5__.initCarouselForWcbTestimonials
}];
classes.forEach(_ref => {
  let {
    D,
    C,
    F
  } = _ref;
  const divs = document.querySelectorAll(D);
  if (divs && divs.length) {
    renderToDom(divs, C, F);
  }
});

// ---

function renderToDom(divsToUpdate, GlobalCss, funcRunOnEl) {
  divsToUpdate.forEach(div => {
    const preEl = div.querySelector(`pre[data-wcb-block-attrs=${div.id}]`);
    const divRenderCssEl = div.querySelector(`div[data-wcb-global-styles=${div.id}]`);
    if (!preEl || !preEl.innerText || !divRenderCssEl) {
      return;
    }
    //
    const props = JSON.parse(preEl?.innerText);
    //

    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
      fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GlobalCss, props)), divRenderCssEl);

    // run function if exits
    funcRunOnEl && funcRunOnEl(div, props);
    //

    div.classList.remove("wcb-update-div");
    preEl.remove();
  });
}
})();

/******/ })()
;
//# sourceMappingURL=FrontendStyles.js.map
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/accordion-js/dist/accordion.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/accordion-js/dist/accordion.min.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Accordion v3.3.4
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 *
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */

!function(e){var t=0,n=function e(n,s){var i=this,r=this,o=!1;if(Array.isArray(n))return!!n.length&&n.map((function(t){return new e(t,s)}));var a={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},s);var e="string"==typeof n;this.container=e?document.querySelector(n):n,this.createDefinitions(),r.attachEvents()},createDefinitions:function(){var e=this,n=this.options,s=n.elementClass,i=n.openOnInit,r=n.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(u(s));this.elements=Array.from(r).filter((function(e){return e.classList&&e.classList.contains(s)})),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter((function(e){return!e.classList.contains("js-enabled")})).forEach((function(n){n.classList.add("js-enabled"),e.generateIDs(n),e.setARIA(n),e.setTransition(n);var s=e.elements.indexOf(n);t++,i.includes(s)?e.showElement(n,!1):e.closeElement(n,!1)}))},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.options,s=n.duration,i=n.panelClass,r=e.querySelector(u(i)),o=l("transitionDuration");r.style[o]=t?null:"".concat(s,"ms")},generateIDs:function(e){var n=this.options,s=n.triggerClass,i=n.panelClass,r=e.querySelector(u(s)),o=e.querySelector(u(i));e.setAttribute("id",e.id||"ac-".concat(t)),r.setAttribute("id",r.id||"ac-trigger-".concat(t)),o.setAttribute("id",o.id||"ac-panel-".concat(t))},removeIDs:function(e){var t=this.options,n=t.triggerClass,s=t.panelClass,i=e.querySelector(u(n)),r=e.querySelector(u(s));e.id.startsWith("ac-")&&e.removeAttribute("id"),i.id.startsWith("ac-")&&i.removeAttribute("id"),r.id.startsWith("ac-")&&r.removeAttribute("id")},setARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var r=e.querySelector(u(s)),o=e.querySelector(u(i));r.setAttribute("role","button"),r.setAttribute("aria-controls",o.id),r.setAttribute("aria-disabled",!1),r.setAttribute("aria-expanded",!1),o.setAttribute("role","region"),o.setAttribute("aria-labelledby",r.id)}},updateARIA:function(e,t){var n=t.ariaExpanded,s=t.ariaDisabled,i=this.options,r=i.ariaEnabled,o=i.triggerClass;if(r){var a=e.querySelector(u(o));a.setAttribute("aria-expanded",n),a.setAttribute("aria-disabled",s)}},removeARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var r=e.querySelector(u(s)),o=e.querySelector(u(i));r.removeAttribute("role"),r.removeAttribute("aria-controls"),r.removeAttribute("aria-disabled"),r.removeAttribute("aria-expanded"),o.removeAttribute("role"),o.removeAttribute("aria-labelledby")}},focus:function(e,t){e.preventDefault();var n=this.options.triggerClass;t.querySelector(u(n)).focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var t=this.currFocusedIdx+1;if(t>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},focusPrevElement:function(e){var t=this.currFocusedIdx-1;if(t<0)return this.focusLastElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},showElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,r=n.collapse,o=n.beforeOpen;t&&o(e);var a=e.querySelector(u(s)),l=a.scrollHeight;e.classList.add(i),requestAnimationFrame((function(){requestAnimationFrame((function(){a.style.height=t?"".concat(l,"px"):"auto"}))})),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!r})},closeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,r=n.beforeClose,o=e.querySelector(u(s)),a=o.scrollHeight;e.classList.remove(i),t?(r(e),requestAnimationFrame((function(){o.style.height="".concat(a,"px"),requestAnimationFrame((function(){o.style.height=0}))}))):o.style.height=0,this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(e){var t=this.options,n=t.activeClass,s=t.collapse,i=e.classList.contains(n);if(!i||s)return i?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,t=this.options,n=t.activeClass;t.showMultiple||this.elements.forEach((function(t,s){t.classList.contains(n)&&s!==e.currFocusedIdx&&e.closeElement(t)}))},handleClick:function(e){var t=this,n=e.currentTarget;this.elements.forEach((function(s,i){s.contains(n)&&"A"!==e.target.nodeName&&(t.currFocusedIdx=i,t.closeElements(),t.focus(e,s),t.toggleElement(s))}))},handleKeydown:function(e){switch(e.key){case"ArrowUp":return this.focusPrevElement(e);case"ArrowDown":return this.focusNextElement(e);case"Home":return this.focusFirstElement(e);case"End":return this.focusLastElement(e);default:return null}},handleFocus:function(e){var t=e.currentTarget,n=this.elements.find((function(e){return e.contains(t)}));this.currFocusedIdx=this.elements.indexOf(n)},handleTransitionEnd:function(e){if(e.stopPropagation(),"height"===e.propertyName){var t=this.options,n=t.onOpen,s=t.onClose,i=e.currentTarget,r=parseInt(i.style.height),o=this.elements.find((function(e){return e.contains(i)}));r>0?(i.style.height="auto",n(o)):s(o)}}};this.attachEvents=function(){if(!o){var e=a.options,t=e.triggerClass,n=e.panelClass;a.handleClick=a.handleClick.bind(a),a.handleKeydown=a.handleKeydown.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleTransitionEnd=a.handleTransitionEnd.bind(a),a.elements.forEach((function(e){var s=e.querySelector(u(t)),i=e.querySelector(u(n));s.addEventListener("click",a.handleClick),s.addEventListener("keydown",a.handleKeydown),s.addEventListener("focus",a.handleFocus),i.addEventListener("webkitTransitionEnd",a.handleTransitionEnd),i.addEventListener("transitionend",a.handleTransitionEnd)})),o=!0}},this.detachEvents=function(){if(o){var e=a.options,t=e.triggerClass,n=e.panelClass;a.elements.forEach((function(e){var s=e.querySelector(u(t)),i=e.querySelector(u(n));s.removeEventListener("click",a.handleClick),s.removeEventListener("keydown",a.handleKeydown),s.removeEventListener("focus",a.handleFocus),i.removeEventListener("webkitTransitionEnd",a.handleTransitionEnd),i.removeEventListener("transitionend",a.handleTransitionEnd)})),o=!1}},this.toggle=function(e){var t=a.elements[e];t&&a.toggleElement(t)},this.open=function(e){var t=a.elements[e];t&&a.showElement(t)},this.openAll=function(){var e=a.options,t=e.activeClass,n=e.onOpen;a.elements.forEach((function(e){e.classList.contains(t)||(a.showElement(e,!1),n(e))}))},this.close=function(e){var t=a.elements[e];t&&a.closeElement(t)},this.closeAll=function(){var e=a.options,t=e.activeClass,n=e.onClose;a.elements.forEach((function(e){e.classList.contains(t)&&(a.closeElement(e,!1),n(e))}))},this.destroy=function(){i.detachEvents(),i.openAll(),a.elements.forEach((function(e){a.removeIDs(e),a.removeARIA(e),a.setTransition(e,!0)})),o=!0},this.update=function(){a.createDefinitions(),i.detachEvents(),i.attachEvents()};var l=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=c(e),e="webkit".concat(e))},c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},u=function(e){return".".concat(CSS.escape(e))};a.init()}; true&&void 0!==module.exports?module.exports=n:e.Accordion=n}(window);

/***/ }),

/***/ "./src/________.ts":
/*!*************************!*\
  !*** ./src/________.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEMO_WCB_GLOBAL_VARIABLES": () => (/* binding */ DEMO_WCB_GLOBAL_VARIABLES),
/* harmony export */   "___wcb_global": () => (/* binding */ ___wcb_global)
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
  // se sd khi pick container lan dau tien / or khi truong contentWidth cua container khong duoc nhap
  defaultContentWidth: window?.wcbLayoutGlobalSettings?.contentSize || "",
  enableTemplatesButton: "true",
  enableCopyPasteStyles: "false"
};
const DEMO_WCB_GLOBAL_VARIABLES = {
  ...INIT_WCB_GLOBAL_VARIABLES,
  ...(window.wcbGlobalVariables || {}),
  defaultContentWidth: window.wcbGlobalVariables?.defaultContentWidth || window.wcbLayoutGlobalSettings?.contentSize
};
const ___wcb_global = 1;

/***/ }),

/***/ "./src/block-faq/FrontendStyles.tsx":
/*!******************************************!*\
  !*** ./src/block-faq/FrontendStyles.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCarouselForWcbFaq": () => (/* binding */ initCarouselForWcbFaq)
/* harmony export */ });
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var accordion_js_dist_accordion_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accordion-js/dist/accordion.min.css */ "./node_modules/accordion-js/dist/accordion.min.css");


// --------------------------- FORM AJAX
function initCarouselForWcbFaq(div, _ref) {
  let {
    general_general
  } = _ref;
  const collection = div.children;
  for (let i = 0; i < collection.length; i++) {
    const el = collection[i];
    if (el.classList.contains("accordion-container")) {
      handleAccordion(el, general_general);
    }
  }
  //
}

function handleAccordion(container, general_general) {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSubmitFormForWcbForm": () => (/* binding */ handleSubmitFormForWcbForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");

// --------------------------- FORM AJAX
function handleSubmitFormForWcbForm(div, props) {
  // const formId = div.id;
  const dataUniqueid = div.getAttribute("data-uniqueid") || "";
  let $ = jQuery;
  if (typeof jQuery !== "function") {
    return;
  }
  const reCaptchaV2 = props.general_gg_recaptcha?.enableReCaptcha && props.general_gg_recaptcha?.version === "v2";
  const reCaptchaV3 = props.general_gg_recaptcha?.enableReCaptcha && props.general_gg_recaptcha?.version === "v3";
  if (reCaptchaV2) {
    $(`.${dataUniqueid} .g-recaptcha`).attr("data-sitekey", ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES.reCAPTCHA_v2_site_key || "");
  }
  $("." + dataUniqueid).on("submit", function (event) {
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
            props,
            response,
            formData
          });
          $(`.${dataUniqueid}` + " .wcb-form__successMessageText").css("display", "block");
          $(`.${dataUniqueid}` + " .wcb-form__errorMessageText").css("display", "none");
          if (props?.general_general?.confirmationType === "url-text" && props?.general_general?.successRedirectUrl) {
            window.location.href = props?.general_general?.successRedirectUrl;
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("The following error occured: " + textStatus, errorThrown);
          $(`.${dataUniqueid}` + " .wcb-form__successMessageText").css("display", "none");
          $(`.${dataUniqueid}` + " .wcb-form__errorMessageText").css("display", "block");
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCarouselForWcbProducts": () => (/* binding */ initCarouselForWcbProducts)
/* harmony export */ });
/* harmony import */ var _MyScrollSnapSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyScrollSnapSlider */ "./src/block-products/MyScrollSnapSlider.tsx");
// @ts-nocheck


function initCarouselForWcbProducts(div, props) {
  const handleCarouselForWcbProducts = () => {
    const dataUniqueid = div.getAttribute("data-uniqueid") || "";
    const sliderMultiElement = document.querySelector(`.${dataUniqueid} .scroll-snap-slider.-multi`);
    if (!sliderMultiElement || sliderMultiElement.classList.contains("swithToScrollSnapX--None") || !sliderMultiElement.firstElementChild) {
      return;
    }
    const sliderMulti = new _MyScrollSnapSlider__WEBPACK_IMPORTED_MODULE_0__.CustomPlugin({
      element: sliderMultiElement
    });
    const arrows = document.querySelector(`.${dataUniqueid} .indicators.-multi`);
    const prev = document.querySelector(`.${dataUniqueid} .indicators.-multi .p-arrow.-prev`);
    const next = document.querySelector(`.${dataUniqueid} .indicators.-multi .p-arrow.-next`);
    const updateArrows = function () {
      prev?.classList.toggle("-disabled", sliderMultiElement.scrollLeft === 0);
      next?.classList.toggle("-disabled", sliderMultiElement.scrollLeft + sliderMultiElement.offsetWidth === sliderMultiElement.scrollWidth);
      arrows?.classList.toggle("-hidden", sliderMultiElement.scrollWidth <= sliderMultiElement.clientWidth);
    };
    prev?.addEventListener("click", function (event) {
      const prevI = (sliderMulti.slide || 1) - 1;
      sliderMulti.slideTo(prevI);
    });
    next?.addEventListener("click", function () {
      const nextI = (sliderMulti.slide || 0) + 1;
      sliderMulti.slideTo(nextI);
    });
    sliderMulti.addEventListener("slide-pass", updateArrows);
    sliderMulti.addEventListener("slide-stop", updateArrows);

    //
    sliderMulti.slideTo(0);
    window.addEventListener("resize", updateArrows);
    updateArrows();
  };

  //
  const domObserver = new MutationObserver(() => {
    if (document.querySelector(`[data-block-products-uniqueId=${div.getAttribute("data-uniqueid")}]`)) {
      domObserver.disconnect();
      setTimeout(() => {
        handleCarouselForWcbProducts();
      }, 500);
    }
  });
  domObserver.observe(document.body || document, {
    childList: true,
    subtree: true
  });
  //
}

/***/ }),

/***/ "./src/block-products/MyScrollSnapSlider.tsx":
/*!***************************************************!*\
  !*** ./src/block-products/MyScrollSnapSlider.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomPlugin": () => (/* binding */ CustomPlugin)
/* harmony export */ });
/* harmony import */ var _ScrollSnapSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollSnapSlider */ "./src/block-products/ScrollSnapSlider.ts");

class CustomPlugin extends _ScrollSnapSlider__WEBPACK_IMPORTED_MODULE_0__.ScrollSnapSlider {
  /**
   * Pass any config here
   * @param {*} config
   */
  constructor(element) {
    let enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let plugins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    super(element, enabled, plugins);
  }

  /**
   * Override this if you need multiple instances of the same plugin on the same slider.
   * By default, the id will be the plugin's class name.
   * @return {String}
   */
  get id() {
    return "lubba-wubba-dub-dub";
  }

  /**
   * Attach listeners, fetch DOM things, save reference to the slider
   * @param {ScrollSnapSlider} slider
   * @override
   */
  enable(slider) {
    // TODO methods stub
  }

  /**
   * Free resources, remove listeners, ...
   * @override
   */
  disable() {
    // TODO methods stub
  }
  sizingMethod = function (slider) {
    const childWidth = slider.element.firstElementChild?.offsetWidth;
    const numbChild = slider.element.childElementCount;
    const totalWidth = slider.element.scrollWidth;
    const totalGapWidth = totalWidth - numbChild * childWidth;
    const gap = totalGapWidth / (numbChild - 1 || 1);
    return childWidth + gap;
  };
}

/***/ }),

/***/ "./src/block-products/ScrollSnapSlider.ts":
/*!************************************************!*\
  !*** ./src/block-products/ScrollSnapSlider.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSnapSlider": () => (/* binding */ ScrollSnapSlider)
/* harmony export */ });
/**
 * All options have sensitive defaults. The only required option is the <code>element</code>.
 */

/**
 * @classdesc Mostly CSS slider with great performance.
 */
class ScrollSnapSlider {
  /**
   * Base element of this slider
   */

  /**
   * additional behaviour
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * Rounding method used to calculate the current slide (e.g. Math.floor, Math.round, Math.ceil, or totally custom.)
   *
   * @param value - factor indicating th current position (e.g "0" for first slide, "2.5" for third slide and a half)
   * @return f(x) - integer factor indicating the currently 'active' slide.
   */

  /**
   * Timeout delay in milliseconds used to catch the end of scroll events
   */

  /**
   * Calculated size of a single item
   */

  /**
   * Computes a single number representing the slides widths.
   * By default, this will use the first slide's <code>offsetWidth</code>.
   * Possible values could be an average of all slides, the min or max values, ...
   *
   * @param slider current slider
   * @param entries resized entries
   * @return integer size of a slide in pixels
   */

  /**
   * Active slide
   */

  /**
   * Resize observer used to update item size
   */

  /**
   * Timeout ID used to catch the end of scroll events
   */

  /**
   * Active slide's scrollLeft in the containing element
   */

  /**
   * Bind methods and possibly attach listeners.
   */
  constructor(options) {
    Object.assign(this, {
      scrollTimeout: 100,
      roundingMethod: Math.round,
      sizingMethod: slider => slider.element.firstElementChild.offsetWidth,
      ...options
    });
    this.scrollTimeoutId = null;
    this.itemSize = this.sizingMethod(this);
    this.update();
    this.addEventListener = this.element.addEventListener.bind(this.element);
    this.removeEventListener = this.element.removeEventListener.bind(this.element);
    this.plugins = new window.Map();
    this.resizeObserver = new ResizeObserver(this.onSlideResize);
    this.resizeObserver.observe(this.element);
    for (const child of this.element.children) {
      this.resizeObserver.observe(child);
    }
    this.attachListeners();
  }

  /**
   * Extend the Slider's functionality with Plugins
   *
   * @param plugins Plugins to attach
   * @param enabled Whether the plugins are enabled right away
   */
  with(plugins) {
    let enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    for (const plugin of plugins) {
      plugin.slider = this;
      this.plugins.set(plugin.id, plugin);
      enabled && plugin.enable();
    }
    return this;
  }

  /**
   * Attach all necessary listeners
   */
  attachListeners() {
    this.addEventListener("scroll", this.onScroll, {
      passive: true
    });
  }

  /**
   * Detach all listeners
   */
  detachListeners() {
    this.removeEventListener("scroll", this.onScroll);
    this.scrollTimeoutId && window.clearTimeout(this.scrollTimeoutId);
  }

  /**
   * Scroll to a slide by index.
   */
  slideTo = index => {
    this.element.scrollTo({
      left: index * this.itemSize
    });
  };

  /**
   * Free resources and listeners, disable plugins
   */
  destroy() {
    this.scrollTimeoutId && window.clearTimeout(this.scrollTimeoutId);
    this.detachListeners();
    for (const [id, plugin] of this.plugins) {
      plugin.disable();
      plugin.slider = null;
      this.plugins.delete(id);
    }
  }

  /**
   * Updates the computed values
   */
  update = () => {
    this.slide = this.calculateSlide();
    this.slideScrollLeft = this.slide * this.itemSize;
  };

  /**
   * Calculates the active slide using the user-defined <code>roundingMethod</code>
   */
  calculateSlide() {
    return this.roundingMethod(this.element.scrollLeft / this.itemSize);
  }

  /**
   * Calculate all necessary things and dispatch an event when sliding stops
   */
  onScrollEnd = () => {
    this.scrollTimeoutId = null;
    this.update();
    this.dispatch("slide-stop", this.slide);
  };

  /**
   * Callback on resize. This will recompute the <code>itemSize</code>
   * @param entries Entries that have changed size
   */
  onSlideResize = entries => {
    this.itemSize = this.sizingMethod(this, entries);
  };

  /**
   * Dispatches an event on the slider's element
   */
  dispatch(event, detail) {
    return this.element.dispatchEvent(new window.CustomEvent(event, {
      detail
    }));
  }

  /**
   * Act when scrolling starts and stops
   */
  onScroll = () => {
    if (null === this.scrollTimeoutId) {
      const direction = this.element.scrollLeft > this.slideScrollLeft ? 1 : -1;
      this.dispatch("slide-start", this.slide + direction);
    }
    if (this.calculateSlide() !== this.slide) {
      this.update();
      this.dispatch("slide-pass", this.slide);
    }
    this.scrollTimeoutId && window.clearTimeout(this.scrollTimeoutId);
    this.scrollTimeoutId = window.setTimeout(this.onScrollEnd, this.scrollTimeout);
  };
}

/***/ }),

/***/ "./src/block-testimonials/FrontendStyles.tsx":
/*!***************************************************!*\
  !*** ./src/block-testimonials/FrontendStyles.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCarouselForWcbTestimonials": () => (/* binding */ initCarouselForWcbTestimonials)
/* harmony export */ });
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../________ */ "./src/________.ts");


//
function initCarouselForWcbTestimonials(div, props) {
  const dataUniqueid = div.getAttribute("data-uniqueid") || "";
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
  // @ts-ignore
  $(`.${dataUniqueid} .wcb-testimonials__wrap-items`)?.slick?.(settings);
}

/***/ }),

/***/ "./src/utils/getValueFromAttrsResponsives.ts":
/*!***************************************************!*\
  !*** ./src/utils/getValueFromAttrsResponsives.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getValueFromAttrsResponsives = function (properties, currentDevice) {
  var _properties$Tablet, _properties$Mobile;
  const v_Desktop = properties?.Desktop;
  const v_Tablet = (_properties$Tablet = properties?.Tablet) !== null && _properties$Tablet !== void 0 ? _properties$Tablet : v_Desktop;
  const v_Mobile = (_properties$Mobile = properties?.Mobile) !== null && _properties$Mobile !== void 0 ? _properties$Mobile : v_Tablet;
  let currentDeviceValue = undefined;
  if (currentDevice) {
    currentDeviceValue = currentDevice === "Desktop" ? v_Desktop : currentDevice === "Tablet" ? v_Tablet : v_Mobile;
  }
  return {
    value_Desktop: v_Desktop !== null && v_Desktop !== void 0 ? v_Desktop : null,
    value_Tablet: v_Tablet !== null && v_Tablet !== void 0 ? v_Tablet : null,
    value_Mobile: v_Mobile !== null && v_Mobile !== void 0 ? v_Mobile : null,
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

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["jQuery"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["api"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

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
/******/ 		var dataWebpackPrefix = "woostifyblocks:";
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
/******/ 			}
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
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwoostifyblocks"] = globalThis["webpackChunkwoostifyblocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
    const preEl = div.querySelector(`pre[data-wcb-block-attrs=${div.getAttribute("data-uniqueid")}]`);
    const divRenderCssEl = div.querySelector(`div[data-wcb-global-styles=${div.getAttribute("data-uniqueid")}]`);
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
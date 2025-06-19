<<<<<<< HEAD
(()=>{var e,t,r={817:(e,t,r)=>{const n=r(1609),i=n.forwardRef((function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"}))}));e.exports=i},1609:e=>{"use strict";e.exports=window.React},2266:(e,t,r)=>{const n=r(1609),i=n.forwardRef((function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"}))}));e.exports=i},3849:(e,t,r)=>{const n=r(1609),i=n.forwardRef((function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"}))}));e.exports=i},6426:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},7702:(e,t,r)=>{const n=r(1609),i=n.forwardRef((function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"}))}));e.exports=i},7965:(e,t,r)=>{"use strict";var n=r(6426),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,a,s,c,u,l=!1;t||(t={}),r=t.debug||!1;try{if(a=n(),s=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=i[t.format]||i.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(u),s.selectNodeContents(u),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(n){r&&console.error("unable to copy using execCommand: ",n),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(n){r&&console.error("unable to copy using clipboardData: ",n),r&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),u&&document.body.removeChild(u),a()}return l}},8318:(e,t,r)=>{const n=r(1609),i=n.forwardRef((function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"}))}));e.exports=i},8636:(e,t,r)=>{const n=r(1609),i=n.forwardRef((function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"}))}));e.exports=i},9636:(e,t,r)=>{const n=r(1609),i=n.forwardRef((function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"}))}));e.exports=i}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);i.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,i.d(o,a),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=i(1609),t=i.t(e,2);const r=window.wp.blocks,n=window.wp.plugins,o=window.wp.editPost,a=window.ReactDOM;var s=function(e,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},s(e,t)};function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)};function l(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function f(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}function p(e,t){var r,n,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}function h(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var d="Invariant Violation",v=Object.setPrototypeOf,y=void 0===v?function(e,t){return e.__proto__=t,e}:v,m=function(e){function t(r){void 0===r&&(r=d);var n=e.call(this,"number"==typeof r?d+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=d,y(n,t.prototype),n}return c(t,e),t}(Error);function g(e,t){if(!e)throw new m(t)}var b=["debug","log","warn","error","silent"],w=b.indexOf("log");function E(e){return function(){if(b.indexOf(e)>=w)return(console[e]||console.log).apply(console,arguments)}}function _(e){try{return e()}catch(e){}}!function(e){e.debug=E("debug"),e.log=E("log"),e.warn=E("warn"),e.error=E("error")}(g||(g={}));const O=_((function(){return globalThis}))||_((function(){return window}))||_((function(){return self}))||_((function(){return global}))||_((function(){return _.constructor("return this")()}));var __="__",k=[__,__].join("DEV");const x=function(){try{return Boolean(__DEV__)}catch(e){return Object.defineProperty(O,k,{value:"production"!==_((function(){return"production"})),enumerable:!1,configurable:!0,writable:!0}),O[k]}}();function S(e){try{return e()}catch(e){}}var T=S((function(){return globalThis}))||S((function(){return window}))||S((function(){return self}))||S((function(){return global}))||S((function(){return S.constructor("return this")()})),N=!1;function D(e,t){if(!Boolean(e))throw new Error(t)}function I(e){return C(e,[])}function C(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return function(e,t){if(null===e)return"null";if(t.includes(e))return"[Circular]";const r=[...t,e];if(function(e){return"function"==typeof e.toJSON}(e)){const t=e.toJSON();if(t!==e)return"string"==typeof t?t:C(t,r)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";const r=Math.min(10,e.length),n=e.length-r,i=[];for(let n=0;n<r;++n)i.push(C(e[n],t));return 1===n?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}(e,r);return function(e,t){const r=Object.entries(e);if(0===r.length)return"{}";if(t.length>2)return"["+function(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){const t=e.constructor.name;if("string"==typeof t&&""!==t)return t}return t}(e)+"]";const n=r.map((([e,r])=>e+": "+C(r,t)));return"{ "+n.join(", ")+" }"}(e,r)}(e,t);default:return String(e)}}!T||S((function(){return"production"}))||S((function(){return process}))||(Object.defineProperty(T,"process",{value:{env:{NODE_ENV:"production"}},configurable:!0,enumerable:!1,writable:!0}),N=!0);const R=globalThis.process?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if("object"==typeof e&&null!==e){var r;const n=t.prototype[Symbol.toStringTag];if(n===(Symbol.toStringTag in e?e[Symbol.toStringTag]:null===(r=e.constructor)||void 0===r?void 0:r.name)){const t=I(e);throw new Error(`Cannot use ${n} "${t}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`)}}return!1};class A{constructor(e,t="GraphQL request",r={line:1,column:1}){"string"==typeof e||D(!1,`Body must be a string. Received: ${I(e)}.`),this.body=e,this.name=t,this.locationOffset=r,this.locationOffset.line>0||D(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||D(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t,r){return t&&F(e.prototype,t),r&&F(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}N&&(delete T.process,N=!1),__DEV__?g("boolean"==typeof x,x):g("boolean"==typeof x,39);var L=function(){return"function"==typeof Symbol},M=function(e){return L()&&Boolean(Symbol[e])},V=function(e){return M(e)?Symbol[e]:"@@"+e};L()&&!M("observable")&&(Symbol.observable=Symbol("observable"));var q=V("iterator"),Q=V("observable"),B=V("species");function U(e,t){var r=e[t];if(null!=r){if("function"!=typeof r)throw new TypeError(r+" is not a function");return r}}function z(e){var t=e.constructor;return void 0!==t&&null===(t=t[B])&&(t=void 0),void 0!==t?t:ee}function W(e){return e instanceof ee}function G(e){G.log?G.log(e):setTimeout((function(){throw e}))}function K(e){Promise.resolve().then((function(){try{e()}catch(e){G(e)}}))}function Y(e){var t=e._cleanup;if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t();else{var r=U(t,"unsubscribe");r&&r.call(t)}}catch(e){G(e)}}function H(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function J(e,t,r){e._state="running";var n=e._observer;try{var i=U(n,t);switch(t){case"next":i&&i.call(n,r);break;case"error":if(H(e),!i)throw r;i.call(n,r);break;case"complete":H(e),i&&i.call(n)}}catch(e){G(e)}"closed"===e._state?Y(e):"running"===e._state&&(e._state="ready")}function $(e,t,r){if("closed"!==e._state){if("buffering"!==e._state)return"ready"!==e._state?(e._state="buffering",e._queue=[{type:t,value:r}],void K((function(){return function(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var r=0;r<t.length&&(J(e,t[r].type,t[r].value),"closed"!==e._state);++r);}}(e)}))):void J(e,t,r);e._queue.push({type:t,value:r})}}var X=function(){function e(e,t){this._cleanup=void 0,this._observer=e,this._queue=void 0,this._state="initializing";var r=new Z(this);try{this._cleanup=t.call(void 0,r)}catch(e){r.error(e)}"initializing"===this._state&&(this._state="ready")}return e.prototype.unsubscribe=function(){"closed"!==this._state&&(H(this),Y(this))},j(e,[{key:"closed",get:function(){return"closed"===this._state}}]),e}(),Z=function(){function e(e){this._subscription=e}var t=e.prototype;return t.next=function(e){$(this._subscription,"next",e)},t.error=function(e){$(this._subscription,"error",e)},t.complete=function(){$(this._subscription,"complete")},j(e,[{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),ee=function(){function e(t){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if("function"!=typeof t)throw new TypeError("Observable initializer must be a function");this._subscriber=t}var t=e.prototype;return t.subscribe=function(e){return"object"==typeof e&&null!==e||(e={next:e,error:arguments[1],complete:arguments[2]}),new X(e,this._subscriber)},t.forEach=function(e){var t=this;return new Promise((function(r,n){if("function"==typeof e)var i=t.subscribe({next:function(t){try{e(t,o)}catch(e){n(e),i.unsubscribe()}},error:n,complete:r});else n(new TypeError(e+" is not a function"));function o(){i.unsubscribe(),r()}}))},t.map=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(z(this))((function(r){return t.subscribe({next:function(t){try{t=e(t)}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))},t.filter=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(z(this))((function(r){return t.subscribe({next:function(t){try{if(!e(t))return}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))},t.reduce=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var r=z(this),n=arguments.length>1,i=!1,o=arguments[1];return new r((function(r){return t.subscribe({next:function(t){var a=!i;if(i=!0,!a||n)try{o=e(o,t)}catch(e){return r.error(e)}else o=t},error:function(e){r.error(e)},complete:function(){if(!i&&!n)return r.error(new TypeError("Cannot reduce an empty sequence"));r.next(o),r.complete()}})}))},t.concat=function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=z(this);return new i((function(t){var n,o=0;return function e(a){n=a.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){o===r.length?(n=void 0,t.complete()):e(i.from(r[o++]))}})}(e),function(){n&&(n.unsubscribe(),n=void 0)}}))},t.flatMap=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var r=z(this);return new r((function(n){var i=[],o=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(e){return n.error(e)}var o=r.from(t).subscribe({next:function(e){n.next(e)},error:function(e){n.error(e)},complete:function(){var e=i.indexOf(o);e>=0&&i.splice(e,1),a()}});i.push(o)},error:function(e){n.error(e)},complete:function(){a()}});function a(){o.closed&&0===i.length&&n.complete()}return function(){i.forEach((function(e){return e.unsubscribe()})),o.unsubscribe()}}))},t[Q]=function(){return this},e.from=function(t){var r="function"==typeof this?this:e;if(null==t)throw new TypeError(t+" is not an object");var n=U(t,Q);if(n){var i=n.call(t);if(Object(i)!==i)throw new TypeError(i+" is not an object");return W(i)&&i.constructor===r?i:new r((function(e){return i.subscribe(e)}))}if(M("iterator")&&(n=U(t,q)))return new r((function(e){K((function(){if(!e.closed){for(var r,i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n.call(t));!(r=i()).done;){var o=r.value;if(e.next(o),e.closed)return}e.complete()}}))}));if(Array.isArray(t))return new r((function(e){K((function(){if(!e.closed){for(var r=0;r<t.length;++r)if(e.next(t[r]),e.closed)return;e.complete()}}))}));throw new TypeError(t+" is not observable")},e.of=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return new("function"==typeof this?this:e)((function(e){K((function(){if(!e.closed){for(var t=0;t<r.length;++t)if(e.next(r[t]),e.closed)return;e.complete()}}))}))},j(e,null,[{key:B,get:function(){return this}}]),e}();function te(e){return null!==e&&"object"==typeof e}function re(e,t){var r=t,n=[];return e.definitions.forEach((function(e){if("OperationDefinition"===e.kind)throw __DEV__?new m("Found a ".concat(e.operation," operation").concat(e.name?" named '".concat(e.name.value,"'"):"",". ")+"No operations are allowed when using a fragment as a query. Only fragments are allowed."):new m(44);"FragmentDefinition"===e.kind&&n.push(e)})),void 0===r&&(__DEV__?g(1===n.length,"Found ".concat(n.length," fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")):g(1===n.length,45),r=n[0].name.value),u(u({},e),{definitions:h([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],e.definitions,!0)})}function ne(e){void 0===e&&(e=[]);var t={};return e.forEach((function(e){t[e.name.value]=e})),t}function ie(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":var r=e.name.value;if("function"==typeof t)return t(r);var n=t&&t[r];return __DEV__?g(n,"No fragment named ".concat(r)):g(n,46),n||null;default:return null}}function oe(e){return{__ref:String(e)}}function ae(e){return Boolean(e&&"object"==typeof e&&"string"==typeof e.__ref)}function se(e,t,r,n){if(function(e){return"IntValue"===e.kind}(r)||function(e){return"FloatValue"===e.kind}(r))e[t.value]=Number(r.value);else if(function(e){return"BooleanValue"===e.kind}(r)||function(e){return"StringValue"===e.kind}(r))e[t.value]=r.value;else if(function(e){return"ObjectValue"===e.kind}(r)){var i={};r.fields.map((function(e){return se(i,e.name,e.value,n)})),e[t.value]=i}else if(function(e){return"Variable"===e.kind}(r)){var o=(n||{})[r.name.value];e[t.value]=o}else if(function(e){return"ListValue"===e.kind}(r))e[t.value]=r.values.map((function(e){var r={};return se(r,t,e,n),r[t.value]}));else if(function(e){return"EnumValue"===e.kind}(r))e[t.value]=r.value;else{if(!function(e){return"NullValue"===e.kind}(r))throw __DEV__?new m('The inline argument "'.concat(t.value,'" of kind "').concat(r.kind,'"')+"is not supported. Use variables instead of inline arguments to overcome this limitation."):new m(55);e[t.value]=null}}L()&&Object.defineProperty(ee,Symbol("extensions"),{value:{symbol:Q,hostReportError:G},configurable:!0});var ce=["connection","include","skip","client","rest","export"],ue=Object.assign((function(e,t,r){if(t&&r&&r.connection&&r.connection.key){if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var i={};return n.forEach((function(e){i[e]=t[e]})),"".concat(r.connection.key,"(").concat(le(i),")")}return r.connection.key}var o=e;if(t){var a=le(t);o+="(".concat(a,")")}return r&&Object.keys(r).forEach((function(e){-1===ce.indexOf(e)&&(r[e]&&Object.keys(r[e]).length?o+="@".concat(e,"(").concat(le(r[e]),")"):o+="@".concat(e))})),o}),{setStringify:function(e){var t=le;return le=e,t}}),le=function(e){return JSON.stringify(e,fe)};function fe(e,t){return te(t)&&!Array.isArray(t)&&(t=Object.keys(t).sort().reduce((function(e,r){return e[r]=t[r],e}),{})),t}function pe(e,t){if(e.arguments&&e.arguments.length){var r={};return e.arguments.forEach((function(e){var n=e.name,i=e.value;return se(r,n,i,t)})),r}return null}function he(e){return e.alias?e.alias.value:e.name.value}function de(e,t,r){if("string"==typeof e.__typename)return e.__typename;for(var n=0,i=t.selections;n<i.length;n++){var o=i[n];if(ve(o)){if("__typename"===o.name.value)return e[he(o)]}else{var a=de(e,ie(o,r).selectionSet,r);if("string"==typeof a)return a}}}function ve(e){return"Field"===e.kind}function ye(e){__DEV__?g(e&&"Document"===e.kind,'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'):g(e&&"Document"===e.kind,47);var t=e.definitions.filter((function(e){return"FragmentDefinition"!==e.kind})).map((function(e){if("OperationDefinition"!==e.kind)throw __DEV__?new m('Schema type definitions not allowed in queries. Found: "'.concat(e.kind,'"')):new m(48);return e}));return __DEV__?g(t.length<=1,"Ambiguous GraphQL document: contains ".concat(t.length," operations")):g(t.length<=1,49),e}function me(e){return ye(e),e.definitions.filter((function(e){return"OperationDefinition"===e.kind}))[0]}function ge(e){return e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&!!e.name})).map((function(e){return e.name.value}))[0]||null}function be(e){return e.definitions.filter((function(e){return"FragmentDefinition"===e.kind}))}function we(e){var t=me(e);return __DEV__?g(t&&"query"===t.operation,"Must contain a query definition."):g(t&&"query"===t.operation,50),t}function Ee(e){var t;ye(e);for(var r=0,n=e.definitions;r<n.length;r++){var i=n[r];if("OperationDefinition"===i.kind){var o=i.operation;if("query"===o||"mutation"===o||"subscription"===o)return i}"FragmentDefinition"!==i.kind||t||(t=i)}if(t)return t;throw __DEV__?new m("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment."):new m(54)}function _e(e){var t=Object.create(null),r=e&&e.variableDefinitions;return r&&r.length&&r.forEach((function(e){e.defaultValue&&se(t,e.variable.name,e.defaultValue)})),t}function Oe(e,t){return t?t(e):ee.of()}function ke(e){return"function"==typeof e?new Te(e):e}function xe(e){return e.request.length<=1}var Se=function(e){function t(t,r){var n=e.call(this,t)||this;return n.link=r,n}return c(t,e),t}(Error),Te=function(){function e(e){e&&(this.request=e)}return e.empty=function(){return new e((function(){return ee.of()}))},e.from=function(t){return 0===t.length?e.empty():t.map(ke).reduce((function(e,t){return e.concat(t)}))},e.split=function(t,r,n){var i=ke(r),o=ke(n||new e(Oe));return xe(i)&&xe(o)?new e((function(e){return t(e)?i.request(e)||ee.of():o.request(e)||ee.of()})):new e((function(e,r){return t(e)?i.request(e,r)||ee.of():o.request(e,r)||ee.of()}))},e.execute=function(e,t){return e.request(function(e,t){var r=u({},e);return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(e){r=u(u({},r),"function"==typeof e?e(r):e)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return u({},r)}}),t}(t.context,function(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName="string"!=typeof t.query?ge(t.query)||void 0:""),t}(function(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];if(t.indexOf(i)<0)throw __DEV__?new m("illegal argument: ".concat(i)):new m(27)}return e}(t))))||ee.of()},e.concat=function(t,r){var n=ke(t);if(xe(n))return __DEV__&&g.warn(new Se("You are calling concat on a terminating link, which will have no effect",n)),n;var i=ke(r);return xe(i)?new e((function(e){return n.request(e,(function(e){return i.request(e)||ee.of()}))||ee.of()})):new e((function(e,t){return n.request(e,(function(e){return i.request(e,t)||ee.of()}))||ee.of()}))},e.prototype.split=function(t,r,n){return this.concat(e.split(t,r,n||new e(Oe)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(e,t){throw __DEV__?new m("request is not implemented"):new m(22)},e.prototype.onError=function(e,t){if(t&&t.error)return t.error(e),!1;throw e},e.prototype.setOnError=function(e){return this.onError=e,this},e}(),Ne=Te.execute;class De{constructor(e,t,r){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Ie{constructor(e,t,r,n,i,o){this.kind=e,this.start=t,this.end=r,this.line=n,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Ce={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Re=new Set(Object.keys(Ce));function Ae(e){const t=null==e?void 0:e.kind;return"string"==typeof t&&Re.has(t)}var Pe,Fe,je;!function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"}(Pe||(Pe={})),(je=Fe||(Fe={})).NAME="Name",je.DOCUMENT="Document",je.OPERATION_DEFINITION="OperationDefinition",je.VARIABLE_DEFINITION="VariableDefinition",je.SELECTION_SET="SelectionSet",je.FIELD="Field",je.ARGUMENT="Argument",je.FRAGMENT_SPREAD="FragmentSpread",je.INLINE_FRAGMENT="InlineFragment",je.FRAGMENT_DEFINITION="FragmentDefinition",je.VARIABLE="Variable",je.INT="IntValue",je.FLOAT="FloatValue",je.STRING="StringValue",je.BOOLEAN="BooleanValue",je.NULL="NullValue",je.ENUM="EnumValue",je.LIST="ListValue",je.OBJECT="ObjectValue",je.OBJECT_FIELD="ObjectField",je.DIRECTIVE="Directive",je.NAMED_TYPE="NamedType",je.LIST_TYPE="ListType",je.NON_NULL_TYPE="NonNullType",je.SCHEMA_DEFINITION="SchemaDefinition",je.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",je.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",je.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",je.FIELD_DEFINITION="FieldDefinition",je.INPUT_VALUE_DEFINITION="InputValueDefinition",je.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",je.UNION_TYPE_DEFINITION="UnionTypeDefinition",je.ENUM_TYPE_DEFINITION="EnumTypeDefinition",je.ENUM_VALUE_DEFINITION="EnumValueDefinition",je.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",je.DIRECTIVE_DEFINITION="DirectiveDefinition",je.SCHEMA_EXTENSION="SchemaExtension",je.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",je.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",je.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",je.UNION_TYPE_EXTENSION="UnionTypeExtension",je.ENUM_TYPE_EXTENSION="EnumTypeExtension",je.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension";const Le=Object.freeze({});function Me(e,t,r=Ce){const n=new Map;for(const e of Object.values(Fe))n.set(e,Ve(t,e));let i,o,a,s=Array.isArray(e),c=[e],u=-1,l=[],f=e;const p=[],h=[];do{u++;const e=u===c.length,m=e&&0!==l.length;if(e){if(o=0===h.length?void 0:p[p.length-1],f=a,a=h.pop(),m)if(s){f=f.slice();let e=0;for(const[t,r]of l){const n=t-e;null===r?(f.splice(n,1),e++):f[n]=r}}else{f=Object.defineProperties({},Object.getOwnPropertyDescriptors(f));for(const[e,t]of l)f[e]=t}u=i.index,c=i.keys,l=i.edits,s=i.inArray,i=i.prev}else if(a){if(o=s?u:c[u],f=a[o],null==f)continue;p.push(o)}let g;if(!Array.isArray(f)){var d,v;Ae(f)||D(!1,`Invalid AST Node: ${I(f)}.`);const r=e?null===(d=n.get(f.kind))||void 0===d?void 0:d.leave:null===(v=n.get(f.kind))||void 0===v?void 0:v.enter;if(g=null==r?void 0:r.call(t,f,o,a,p,h),g===Le)break;if(!1===g){if(!e){p.pop();continue}}else if(void 0!==g&&(l.push([o,g]),!e)){if(!Ae(g)){p.pop();continue}f=g}}var y;void 0===g&&m&&l.push([o,f]),e?p.pop():(i={inArray:s,index:u,keys:c,edits:l,prev:i},s=Array.isArray(f),c=s?f:null!==(y=r[f.kind])&&void 0!==y?y:[],u=-1,l=[],a&&h.push(a),a=f)}while(void 0!==i);return 0!==l.length?l[l.length-1][1]:e}function Ve(e,t){const r=e[t];return"object"==typeof r?r:"function"==typeof r?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}function qe(e,t){var r=e.directives;return!r||!r.length||function(e){var t=[];return e&&e.length&&e.forEach((function(e){if(function(e){var t=e.name.value;return"skip"===t||"include"===t}(e)){var r=e.arguments,n=e.name.value;__DEV__?g(r&&1===r.length,"Incorrect number of arguments for the @".concat(n," directive.")):g(r&&1===r.length,41);var i=r[0];__DEV__?g(i.name&&"if"===i.name.value,"Invalid argument for the @".concat(n," directive.")):g(i.name&&"if"===i.name.value,42);var o=i.value;__DEV__?g(o&&("Variable"===o.kind||"BooleanValue"===o.kind),"Argument for the @".concat(n," directive must be a variable or a boolean value.")):g(o&&("Variable"===o.kind||"BooleanValue"===o.kind),43),t.push({directive:e,ifArgument:i})}})),t}(r).every((function(e){var r=e.directive,n=e.ifArgument,i=!1;return"Variable"===n.value.kind?(i=t&&t[n.value.name.value],__DEV__?g(void 0!==i,"Invalid variable referenced in @".concat(r.name.value," directive.")):g(void 0!==i,40)):i=n.value.value,"skip"===r.name.value?!i:i}))}function Qe(e,t,r){var n=new Set(e),i=n.size;return Me(t,{Directive:function(e){if(n.delete(e.name.value)&&(!r||!n.size))return Le}}),r?!n.size:n.size<i}function Be(e){return e&&Qe(["client","export"],e,!0)}var Ue=function(e,t){var r;try{r=JSON.stringify(e)}catch(e){var n=__DEV__?new m("Network request failed. ".concat(t," is not serializable: ").concat(e.message)):new m(24);throw n.parseError=e,n}return r},ze="function"==typeof WeakMap&&"ReactNative"!==_((function(){return navigator.product})),We="function"==typeof WeakSet,Ge="function"==typeof Symbol&&"function"==typeof Symbol.for,Ke=Ge&&Symbol.asyncIterator,Ye="function"==typeof _((function(){return window.document.createElement})),He=_((function(){return navigator.userAgent.indexOf("jsdom")>=0}))||!1,Je=Ye&&!He;function $e(e){var t={next:function(){return e.read()}};return Ke&&(t[Symbol.asyncIterator]=function(){return this}),t}function Xe(e){var t,r,n,i,o=e;if(e.body&&(o=e.body),i=o,Ke&&i[Symbol.asyncIterator])return function(e){var t,r=e[Symbol.asyncIterator]();return(t={next:function(){return r.next()}})[Symbol.asyncIterator]=function(){return this},t}(o);if(function(e){return!!e.getReader}(o))return $e(o.getReader());if(function(e){return!!e.stream}(o))return $e(o.stream().getReader());if(function(e){return!!e.arrayBuffer}(o))return t=o.arrayBuffer(),r=!1,n={next:function(){return r?Promise.resolve({value:void 0,done:!0}):(r=!0,new Promise((function(e,r){t.then((function(t){e({value:t,done:!1})})).catch(r)})))}},Ke&&(n[Symbol.asyncIterator]=function(){return this}),n;if(function(e){return!!e.pipe}(o))return function(e){var t=null,r=null,n=!1,i=[],o=[];function a(e){if(!r){if(o.length){var t=o.shift();if(Array.isArray(t)&&t[0])return t[0]({value:e,done:!1})}i.push(e)}}function s(e){r=e,o.slice().forEach((function(t){t[1](e)})),!t||t()}function c(){n=!0,o.slice().forEach((function(e){e[0]({value:void 0,done:!0})})),!t||t()}t=function(){t=null,e.removeListener("data",a),e.removeListener("error",s),e.removeListener("end",c),e.removeListener("finish",c),e.removeListener("close",c)},e.on("data",a),e.on("error",s),e.on("end",c),e.on("finish",c),e.on("close",c);var u={next:function(){return new Promise((function(e,t){return r?t(r):i.length?e({value:i.shift(),done:!1}):n?e({value:void 0,done:!0}):void o.push([e,t])}))}};return Ke&&(u[Symbol.asyncIterator]=function(){return this}),u}(o);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var Ze=function(e,t,r){var n=new Error(r);throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n},et=Object.prototype.hasOwnProperty;function tt(e){var t={};return e.split("\n").forEach((function(e){var r=e.indexOf(":");if(r>-1){var n=e.slice(0,r).trim().toLowerCase(),i=e.slice(r+1).trim();t[n]=i}})),t}function rt(e,t){e.status>=300&&Ze(e,function(){try{return JSON.parse(t)}catch(e){return t}}(),"Response not successful: Received status code ".concat(e.status));try{return JSON.parse(t)}catch(n){var r=n;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function nt(e,t){var r,n;"AbortError"!==e.name&&(e.result&&e.result.errors&&e.result.data&&(null===(r=t.next)||void 0===r||r.call(t,e.result)),null===(n=t.error)||void 0===n||n.call(t,e))}function it(e){return 9===e||32===e}function ot(e){return e>=48&&e<=57}function at(e){return e>=97&&e<=122||e>=65&&e<=90}function st(e){return at(e)||95===e}function ct(e){var t;let r=Number.MAX_SAFE_INTEGER,n=null,i=-1;for(let t=0;t<e.length;++t){var o;const a=e[t],s=ut(a);s!==a.length&&(n=null!==(o=n)&&void 0!==o?o:t,i=t,0!==t&&s<r&&(r=s))}return e.map(((e,t)=>0===t?e:e.slice(r))).slice(null!==(t=n)&&void 0!==t?t:0,i+1)}function ut(e){let t=0;for(;t<e.length&&it(e.charCodeAt(t));)++t;return t}const lt=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function ft(e){return pt[e.charCodeAt(0)]}const pt=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];function ht(e){return Me(e,dt)}const dt={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>vt(e.definitions,"\n\n")},OperationDefinition:{leave(e){const t=mt("(",vt(e.variableDefinitions,", "),")"),r=vt([e.operation,vt([e.name,t]),vt(e.directives," ")]," ");return("query"===r?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n})=>e+": "+t+mt(" = ",r)+mt(" ",vt(n," "))},SelectionSet:{leave:({selections:e})=>yt(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:i}){const o=mt("",e,": ")+t;let a=o+mt("(",vt(r,", "),")");return a.length>80&&(a=o+mt("(\n",gt(vt(r,"\n")),"\n)")),vt([a,vt(n," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+mt(" ",vt(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>vt(["...",mt("on ",e),vt(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:i})=>`fragment ${e}${mt("(",vt(r,", "),")")} on ${t} ${mt("",vt(n," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?function(e){const t=e.replace(/"""/g,'\\"""'),r=t.split(/\r\n|[\n\r]/g),n=1===r.length,i=r.length>1&&r.slice(1).every((e=>0===e.length||it(e.charCodeAt(0)))),o=t.endsWith('\\"""'),a=e.endsWith('"')&&!o,s=e.endsWith("\\"),c=a||s,u=!n||e.length>70||c||i||o;let l="";const f=n&&it(e.charCodeAt(0));return(u&&!f||i)&&(l+="\n"),l+=t,(u||c)&&(l+="\n"),'"""'+l+'"""'}(e):`"${e.replace(lt,ft)}"`},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+vt(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+vt(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+mt("(",vt(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>mt("",e,"\n")+vt(["schema",vt(t," "),yt(r)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:r})=>mt("",e,"\n")+vt(["scalar",t,vt(r," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>mt("",e,"\n")+vt(["type",t,mt("implements ",vt(r," & ")),vt(n," "),yt(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:r,type:n,directives:i})=>mt("",e,"\n")+t+(bt(r)?mt("(\n",gt(vt(r,"\n")),"\n)"):mt("(",vt(r,", "),")"))+": "+n+mt(" ",vt(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:r,defaultValue:n,directives:i})=>mt("",e,"\n")+vt([t+": "+r,mt("= ",n),vt(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>mt("",e,"\n")+vt(["interface",t,mt("implements ",vt(r," & ")),vt(n," "),yt(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:r,types:n})=>mt("",e,"\n")+vt(["union",t,vt(r," "),mt("= ",vt(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:r,values:n})=>mt("",e,"\n")+vt(["enum",t,vt(r," "),yt(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:r})=>mt("",e,"\n")+vt([t,vt(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:r,fields:n})=>mt("",e,"\n")+vt(["input",t,vt(r," "),yt(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:r,repeatable:n,locations:i})=>mt("",e,"\n")+"directive @"+t+(bt(r)?mt("(\n",gt(vt(r,"\n")),"\n)"):mt("(",vt(r,", "),")"))+(n?" repeatable":"")+" on "+vt(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>vt(["extend schema",vt(e," "),yt(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>vt(["extend scalar",e,vt(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>vt(["extend type",e,mt("implements ",vt(t," & ")),vt(r," "),yt(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>vt(["extend interface",e,mt("implements ",vt(t," & ")),vt(r," "),yt(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:r})=>vt(["extend union",e,vt(t," "),mt("= ",vt(r," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:r})=>vt(["extend enum",e,vt(t," "),yt(r)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:r})=>vt(["extend input",e,vt(t," "),yt(r)]," ")}};function vt(e,t=""){var r;return null!==(r=null==e?void 0:e.filter((e=>e)).join(t))&&void 0!==r?r:""}function yt(e){return mt("{\n",gt(vt(e,"\n")),"\n}")}function mt(e,t,r=""){return null!=t&&""!==t?e+t+r:""}function gt(e){return mt("  ",e.replace(/\n/g,"\n  "))}function bt(e){var t;return null!==(t=null==e?void 0:e.some((e=>e.includes("\n"))))&&void 0!==t&&t}var wt={http:{includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},Et=function(e,t){return t(e)};function _t(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i={},o={};r.forEach((function(e){i=u(u(u({},i),e.options),{headers:u(u({},i.headers),e.headers)}),e.credentials&&(i.credentials=e.credentials),o=u(u({},o),e.http)})),i.headers&&(i.headers=function(e,t){if(!t){var r=Object.create(null);return Object.keys(Object(e)).forEach((function(t){r[t.toLowerCase()]=e[t]})),r}var n=Object.create(null);Object.keys(Object(e)).forEach((function(t){n[t.toLowerCase()]={originalName:t,value:e[t]}}));var i=Object.create(null);return Object.keys(n).forEach((function(e){i[n[e].originalName]=n[e].value})),i}(i.headers,o.preserveHeaderCase));var a=e.operationName,s=e.extensions,c=e.variables,l=e.query,f={operationName:a,variables:c};return o.includeExtensions&&(f.extensions=s),o.includeQuery&&(f.query=t(l,ht)),{options:i,body:f}}function Ot(e){return new ee((function(t){t.error(e)}))}var kt=_((function(){return fetch})),xt=function(e){void 0===e&&(e={});var t=e.uri,r=void 0===t?"/graphql":t,n=e.fetch,i=e.print,o=void 0===i?Et:i,a=e.includeExtensions,s=e.preserveHeaderCase,c=e.useGETForQueries,h=e.includeUnusedVariables,d=void 0!==h&&h,v=l(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);__DEV__&&function(e){if(!e&&"undefined"==typeof fetch)throw __DEV__?new m("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    "):new m(23)}(n||kt);var y={http:{includeExtensions:a,preserveHeaderCase:s},options:v.fetchOptions,credentials:v.credentials,headers:v.headers};return new Te((function(e){var t=function(e,t){return e.getContext().uri||("function"==typeof t?t(e):t||"/graphql")}(e,r),i=e.getContext(),a={};if(i.clientAwareness){var s=i.clientAwareness,l=s.name,h=s.version;l&&(a["apollographql-client-name"]=l),h&&(a["apollographql-client-version"]=h)}var v,m=u(u({},a),i.headers),g={http:i.http,options:i.fetchOptions,credentials:i.credentials,headers:m},b=_t(e,o,wt,y,g),w=b.options,E=b.body;if(E.variables&&!d){var O=new Set(Object.keys(E.variables));Me(e.query,{Variable:function(e,t,r){r&&"VariableDefinition"!==r.kind&&O.delete(e.name.value)}}),O.size&&(E.variables=u({},E.variables),O.forEach((function(e){delete E.variables[e]})))}if(!w.signal){var k=function(){if("undefined"==typeof AbortController)return{controller:!1,signal:!1};var e=new AbortController;return{controller:e,signal:e.signal}}(),x=k.controller,S=k.signal;(v=x)&&(w.signal=S)}if(c&&!e.query.definitions.some((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))&&(w.method="GET"),Qe(["defer"],e.query)&&(w.headers=w.headers||{},w.headers.accept="multipart/mixed; deferSpec=20220824, application/json"),"GET"===w.method){var T=function(e,t){var r=[],n=function(e,t){r.push("".concat(e,"=").concat(encodeURIComponent(t)))};if("query"in t&&n("query",t.query),t.operationName&&n("operationName",t.operationName),t.variables){var i=void 0;try{i=Ue(t.variables,"Variables map")}catch(e){return{parseError:e}}n("variables",i)}if(t.extensions){var o=void 0;try{o=Ue(t.extensions,"Extensions map")}catch(e){return{parseError:e}}n("extensions",o)}var a="",s=e,c=e.indexOf("#");-1!==c&&(a=e.substr(c),s=e.substr(0,c));var u=-1===s.indexOf("?")?"?":"&";return{newURI:s+u+r.join("&")+a}}(t,E),N=T.newURI,D=T.parseError;if(D)return Ot(D);t=N}else try{w.body=Ue(E,"Payload")}catch(D){return Ot(D)}return new ee((function(r){return(n||_((function(){return fetch}))||kt)(t,w).then((function(t){var n;e.setContext({response:t});var i=null===(n=t.headers)||void 0===n?void 0:n.get("content-type");return null!==i&&/^multipart\/mixed/i.test(i)?function(e,t){var r,n,i;return f(this,void 0,void 0,(function(){var o,a,s,c,u,l,f,h,d,v,y,m,g,b,w,E,_,O,k,x;return p(this,(function(p){switch(p.label){case 0:if(void 0===TextDecoder)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");o=new TextDecoder("utf-8"),a=null===(r=e.headers)||void 0===r?void 0:r.get("content-type"),s="boundary=",c=(null==a?void 0:a.includes(s))?null==a?void 0:a.substring((null==a?void 0:a.indexOf(s))+9).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",u="--".concat(c),l="",f=Xe(e),h=!0,p.label=1;case 1:return h?[4,f.next()]:[3,3];case 2:for(d=p.sent(),v=d.value,y=d.done,m="string"==typeof v?v:o.decode(v),h=!y,g=(l+=m).indexOf(u);g>-1;){if(b=void 0,x=[l.slice(0,g),l.slice(g+u.length)],l=x[1],(b=x[0]).trim()){if(w=b.indexOf("\r\n\r\n"),E=tt(b.slice(0,w)),(_=E["content-type"])&&-1===_.toLowerCase().indexOf("application/json"))throw new Error("Unsupported patch content type: application/json is required.");O=b.slice(w);try{k=rt(e,O.replace("\r\n","")),(Object.keys(k).length>1||"data"in k||"incremental"in k||"errors"in k)&&(null===(n=t.next)||void 0===n||n.call(t,k))}catch(e){nt(e,t)}}g=l.indexOf(u)}return[3,1];case 3:return null===(i=t.complete)||void 0===i||i.call(t),[2]}}))}))}(t,r):function(e,t,r){var n;(n=t,function(e){return e.text().then((function(t){return rt(e,t)})).then((function(t){return e.status>=300&&Ze(e,t,"Response not successful: Received status code ".concat(e.status)),Array.isArray(t)||et.call(t,"data")||et.call(t,"errors")||Ze(e,t,"Server response was missing for query '".concat(Array.isArray(n)?n.map((function(e){return e.operationName})):n.operationName,"'.")),t}))})(e).then((function(e){var t,n;null===(t=r.next)||void 0===t||t.call(r,e),null===(n=r.complete)||void 0===n||n.call(r)})).catch((function(e){return nt(e,r)}))}(t,e,r)})).catch((function(e){return nt(e,r)})),function(){v&&v.abort()}}))}))},St=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,xt(t).request)||this;return r.options=t,r}return c(t,e),t}(Te),Tt=Object.prototype,Nt=Tt.toString,Dt=Tt.hasOwnProperty,It=Function.prototype.toString,Ct=new Map;function Rt(e,t){try{return At(e,t)}finally{Ct.clear()}}function At(e,t){if(e===t)return!0;var r,n,i,o=Nt.call(e);if(o!==Nt.call(t))return!1;switch(o){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":if(Lt(e,t))return!0;var a=Pt(e),s=Pt(t),c=a.length;if(c!==s.length)return!1;for(var u=0;u<c;++u)if(!Dt.call(t,a[u]))return!1;for(u=0;u<c;++u){var l=a[u];if(!At(e[l],t[l]))return!1}return!0;case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!=e)return t!=t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e=="".concat(t);case"[object Map]":case"[object Set]":if(e.size!==t.size)return!1;if(Lt(e,t))return!0;for(var f=e.entries(),p="[object Map]"===o;;){var h=f.next();if(h.done)break;var d=h.value,v=d[0],y=d[1];if(!t.has(v))return!1;if(p&&!At(y,t.get(v)))return!1}return!0;case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":var m=e.byteLength;if(m===t.byteLength)for(;m--&&e[m]===t[m];);return-1===m;case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":var g=It.call(e);return g===It.call(t)&&(n=jt,!((i=(r=g).length-n.length)>=0&&r.indexOf(n,i)===i))}return!1}function Pt(e){return Object.keys(e).filter(Ft,e)}function Ft(e){return void 0!==this[e]}var jt="{ [native code] }";function Lt(e,t){var r=Ct.get(e);if(r){if(r.has(t))return!0}else Ct.set(e,r=new Set);return r.add(t),!1}var Mt=Array.isArray;function Vt(e){return Array.isArray(e)&&e.length>0}var qt=Object.prototype.hasOwnProperty;function Qt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Bt(e)}function Bt(e){var t=e[0]||{},r=e.length;if(r>1)for(var n=new zt,i=1;i<r;++i)t=n.merge(t,e[i]);return t}var Ut=function(e,t,r){return this.merge(e[r],t[r])},zt=function(){function e(e){void 0===e&&(e=Ut),this.reconciler=e,this.isObject=te,this.pastCopies=new Set}return e.prototype.merge=function(e,t){for(var r=this,n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];return te(t)&&te(e)?(Object.keys(t).forEach((function(i){if(qt.call(e,i)){var o=e[i];if(t[i]!==o){var a=r.reconciler.apply(r,h([e,t,i],n,!1));a!==o&&((e=r.shallowCopyForMerge(e))[i]=a)}}else(e=r.shallowCopyForMerge(e))[i]=t[i]})),e):t},e.prototype.shallowCopyForMerge=function(e){return te(e)&&(this.pastCopies.has(e)||(e=Array.isArray(e)?e.slice(0):u({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e},e}();function Wt(e){return"incremental"in e}function Gt(e,t){var r=e,n=new zt;return Wt(t)&&Vt(t.incremental)&&t.incremental.forEach((function(e){for(var t=e.data,i=e.path,o=i.length-1;o>=0;--o){var a=i[o],s=isNaN(+a)?{}:[];s[a]=t,t=s}r=n.merge(r,t)})),r}var Kt,Yt,Ht=function(){return Object.create(null)},Jt=Array.prototype,$t=Jt.forEach,Xt=Jt.slice,Zt=function(){function e(e,t){void 0===e&&(e=!0),void 0===t&&(t=Ht),this.weakness=e,this.makeData=t}return e.prototype.lookup=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.lookupArray(e)},e.prototype.lookupArray=function(e){var t=this;return $t.call(e,(function(e){return t=t.getChildTrie(e)})),t.data||(t.data=this.makeData(Xt.call(e)))},e.prototype.getChildTrie=function(t){var r=this.weakness&&function(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}(t)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map),n=r.get(t);return n||r.set(t,n=new e(this.weakness,this.makeData)),n},e}(),er=function(){function e(){this.known=new(We?WeakSet:Set),this.pool=new Zt(ze),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(e){return te(e)&&this.known.has(e)},e.prototype.pass=function(e){if(te(e)){var t=function(e){return te(e)?Mt(e)?e.slice(0):u({__proto__:Object.getPrototypeOf(e)},e):e}(e);return this.passes.set(t,e),t}return e},e.prototype.admit=function(e){var t=this;if(te(e)){var r=this.passes.get(e);if(r)return r;switch(Object.getPrototypeOf(e)){case Array.prototype:if(this.known.has(e))return e;var n=e.map(this.admit,this);return(s=this.pool.lookupArray(n)).array||(this.known.add(s.array=n),__DEV__&&Object.freeze(n)),s.array;case null:case Object.prototype:if(this.known.has(e))return e;var i=Object.getPrototypeOf(e),o=[i],a=this.sortedKeys(e);o.push(a.json);var s,c=o.length;if(a.sorted.forEach((function(r){o.push(t.admit(e[r]))})),!(s=this.pool.lookupArray(o)).object){var u=s.object=Object.create(i);this.known.add(u),a.sorted.forEach((function(e,t){u[e]=o[c+t]})),__DEV__&&Object.freeze(u)}return s.object}}return e},e.prototype.sortedKeys=function(e){var t=Object.keys(e),r=this.pool.lookupArray(t);if(!r.keys){t.sort();var n=JSON.stringify(t);(r.keys=this.keysByJSON.get(n))||this.keysByJSON.set(n,r.keys={sorted:t,json:n})}return r.keys},e}(),tr=Object.assign((function(e){if(te(e)){void 0===Kt&&rr();var t=Kt.admit(e),r=Yt.get(t);return void 0===r&&Yt.set(t,r=JSON.stringify(t)),r}return JSON.stringify(e)}),{reset:rr});function rr(){Kt=new er,Yt=new(ze?WeakMap:Map)}function nr(e,t,r){return new ee((function(n){var i=n.next,o=n.error,a=n.complete,s=0,c=!1,u={then:function(e){return new Promise((function(t){return t(e())}))}};function l(e,t){return e?function(t){++s;var r=function(){return e(t)};u=u.then(r,r).then((function(e){--s,i&&i.call(n,e),c&&f.complete()}),(function(e){throw--s,e})).catch((function(e){o&&o.call(n,e)}))}:function(e){return t&&t.call(n,e)}}var f={next:l(t,i),error:l(r,o),complete:function(){c=!0,s||a&&a.call(n)}},p=e.subscribe(f);return function(){return p.unsubscribe()}}))}function ir(e){return Vt(or(e))}function or(e){var t=Vt(e.errors)?e.errors.slice(0):[];return Wt(e)&&Vt(e.incremental)&&e.incremental.forEach((function(e){e.errors&&t.push.apply(t,e.errors)})),t}var ar={kind:Fe.FIELD,name:{kind:Fe.NAME,value:"__typename"}};function sr(e,t){return!e||e.selectionSet.selections.every((function(e){return e.kind===Fe.FRAGMENT_SPREAD&&sr(t[e.name.value],t)}))}function cr(e){return sr(me(e)||function(e){__DEV__?g("Document"===e.kind,'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'):g("Document"===e.kind,51),__DEV__?g(e.definitions.length<=1,"Fragment must have exactly one definition."):g(e.definitions.length<=1,52);var t=e.definitions[0];return __DEV__?g("FragmentDefinition"===t.kind,"Must be a fragment definition."):g("FragmentDefinition"===t.kind,53),t}(e),ne(be(e)))?null:e}function ur(e){var t=new Map;return function(r){void 0===r&&(r=e);var n=t.get(r);return n||t.set(r,n={variables:new Set,fragmentSpreads:new Set}),n}}function lr(e,t){for(var r=ur(""),n=ur(""),i=function(e){for(var t=0,i=void 0;t<e.length&&(i=e[t]);++t)if(!Mt(i)){if(i.kind===Fe.OPERATION_DEFINITION)return r(i.name&&i.name.value);if(i.kind===Fe.FRAGMENT_DEFINITION)return n(i.name.value)}return __DEV__&&g.error("Could not find operation or fragment"),null},o=0,a=t.definitions.length-1;a>=0;--a)t.definitions[a].kind===Fe.OPERATION_DEFINITION&&++o;var s=function(e){var t=new Set,r=[];return e.forEach((function(e){e.name?t.add(e.name):e.test&&r.push(e.test)})),function(e){return t.has(e.name.value)||r.some((function(t){return t(e)}))}}(e),c=e.some((function(e){return e.remove})),l=function(e){return c&&e&&e.some(s)},f=new Map,p=!1,h={enter:function(e){if(l(e.directives))return p=!0,null}},d=Me(t,{Field:h,InlineFragment:h,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(e,t,r,n,o){var a=i(o);a&&a.variables.add(e.name.value)}},FragmentSpread:{enter:function(e,t,r,n,o){if(l(e.directives))return p=!0,null;var a=i(o);a&&a.fragmentSpreads.add(e.name.value)}},FragmentDefinition:{enter:function(e,t,r,n){f.set(JSON.stringify(n),e)},leave:function(e,t,r,i){return e===f.get(JSON.stringify(i))?e:o>0&&e.selectionSet.selections.every((function(e){return e.kind===Fe.FIELD&&"__typename"===e.name.value}))?(n(e.name.value).removed=!0,p=!0,null):void 0}},Directive:{leave:function(e){if(s(e))return p=!0,null}}});if(!p)return t;var v=function(e){return e.transitiveVars||(e.transitiveVars=new Set(e.variables),e.removed||e.fragmentSpreads.forEach((function(t){v(n(t)).transitiveVars.forEach((function(t){e.transitiveVars.add(t)}))}))),e},y=new Set;d.definitions.forEach((function(e){e.kind===Fe.OPERATION_DEFINITION?v(r(e.name&&e.name.value)).fragmentSpreads.forEach((function(e){y.add(e)})):e.kind!==Fe.FRAGMENT_DEFINITION||0!==o||n(e.name.value).removed||y.add(e.name.value)})),y.forEach((function(e){v(n(e)).fragmentSpreads.forEach((function(e){y.add(e)}))}));var m={enter:function(e){if(t=e.name.value,!y.has(t)||n(t).removed)return null;var t}};return cr(Me(d,{FragmentSpread:m,FragmentDefinition:m,OperationDefinition:{leave:function(e){if(e.variableDefinitions){var t=v(r(e.name&&e.name.value)).transitiveVars;if(t.size<e.variableDefinitions.length)return u(u({},e),{variableDefinitions:e.variableDefinitions.filter((function(e){return t.has(e.variable.name.value)}))})}}}}))}var fr=Object.assign((function(e){return Me(e,{SelectionSet:{enter:function(e,t,r){if(!r||r.kind!==Fe.OPERATION_DEFINITION){var n=e.selections;if(n&&!n.some((function(e){return ve(e)&&("__typename"===e.name.value||0===e.name.value.lastIndexOf("__",0))}))){var i=r;if(!(ve(i)&&i.directives&&i.directives.some((function(e){return"export"===e.name.value}))))return u(u({},e),{selections:h(h([],n,!0),[ar],!1)})}}}}})}),{added:function(e){return e===ar}}),pr={test:function(e){var t="connection"===e.name.value;return t&&(e.arguments&&e.arguments.some((function(e){return"key"===e.name.value}))||__DEV__&&g.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.")),t}};function hr(e){return"query"===Ee(e).operation?e:Me(e,{OperationDefinition:{enter:function(e){return u(u({},e),{operation:"query"})}}})}var dr=new Map;function vr(e){var t=dr.get(e)||1;return dr.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function yr(e,t,r){var n=[];e.forEach((function(e){return e[t]&&n.push(e)})),n.forEach((function(e){return e[t](r)}))}function mr(e){function t(t){Object.defineProperty(e,t,{value:ee})}return Ge&&Symbol.species&&t(Symbol.species),t("@@species"),e}function gr(e){return e&&"function"==typeof e.then}var br=function(e){function t(t){var r=e.call(this,(function(e){return r.addObserver(e),function(){return r.removeObserver(e)}}))||this;return r.observers=new Set,r.promise=new Promise((function(e,t){r.resolve=e,r.reject=t})),r.handlers={next:function(e){null!==r.sub&&(r.latest=["next",e],r.notify("next",e),yr(r.observers,"next",e))},error:function(e){var t=r.sub;null!==t&&(t&&setTimeout((function(){return t.unsubscribe()})),r.sub=null,r.latest=["error",e],r.reject(e),r.notify("error",e),yr(r.observers,"error",e))},complete:function(){var e=r,t=e.sub,n=e.sources;if(null!==t){var i=(void 0===n?[]:n).shift();i?gr(i)?i.then((function(e){return r.sub=e.subscribe(r.handlers)})):r.sub=i.subscribe(r.handlers):(t&&setTimeout((function(){return t.unsubscribe()})),r.sub=null,r.latest&&"next"===r.latest[0]?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),yr(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(e){r.reject(e),r.sources=[],r.handlers.complete()},r.promise.catch((function(e){})),"function"==typeof t&&(t=[new ee(t)]),gr(t)?t.then((function(e){return r.start(e)}),r.handlers.error):r.start(t),r}return c(t,e),t.prototype.start=function(e){void 0===this.sub&&(this.sources=Array.from(e),this.handlers.complete())},t.prototype.deliverLastMessage=function(e){if(this.latest){var t=this.latest[0],r=e[t];r&&r.call(e,this.latest[1]),null===this.sub&&"next"===t&&e.complete&&e.complete()}},t.prototype.addObserver=function(e){this.observers.has(e)||(this.deliverLastMessage(e),this.observers.add(e))},t.prototype.removeObserver=function(e){this.observers.delete(e)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(e,t){var r=this.nextResultListeners;r.size&&(this.nextResultListeners=new Set,r.forEach((function(r){return r(e,t)})))},t.prototype.beforeNext=function(e){var t=!1;this.nextResultListeners.add((function(r,n){t||(t=!0,e(r,n))}))},t}(ee);mr(br);var wr,Er=function(e){function t(r){var n,i,o=r.graphQLErrors,a=r.clientErrors,s=r.networkError,c=r.errorMessage,u=r.extraInfo,l=e.call(this,c)||this;return l.name="ApolloError",l.graphQLErrors=o||[],l.clientErrors=a||[],l.networkError=s||null,l.message=c||(i="",(Vt((n=l).graphQLErrors)||Vt(n.clientErrors))&&(n.graphQLErrors||[]).concat(n.clientErrors||[]).forEach((function(e){var t=e?e.message:"Error message not found.";i+="".concat(t,"\n")})),n.networkError&&(i+="".concat(n.networkError.message,"\n")),i=i.replace(/\n$/,"")),l.extraInfo=u,l.__proto__=t.prototype,l}return c(t,e),t}(Error);function _r(e){return!!e&&e<7}!function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"}(wr||(wr={}));var Or=Object.prototype.toString;function kr(e){return xr(e)}function xr(e,t){switch(Or.call(e)){case"[object Array]":if((t=t||new Map).has(e))return t.get(e);var r=e.slice(0);return t.set(e,r),r.forEach((function(e,n){r[n]=xr(e,t)})),r;case"[object Object]":if((t=t||new Map).has(e))return t.get(e);var n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach((function(r){n[r]=xr(e[r],t)})),n;default:return e}}function Sr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object.create(null);return e.forEach((function(e){e&&Object.keys(e).forEach((function(t){var n=e[t];void 0!==n&&(r[t]=n)}))})),r}var Tr=Object.assign,Nr=Object.hasOwnProperty,Dr=function(e){function t(t){var r=t.queryManager,n=t.queryInfo,i=t.options,o=e.call(this,(function(e){try{var t=e._subscription._observer;t&&!t.error&&(t.error=Cr)}catch(e){}var r=!o.observers.size;o.observers.add(e);var n=o.last;return n&&n.error?e.error&&e.error(n.error):n&&n.result&&e.next&&e.next(n.result),r&&o.reobserve().catch((function(){})),function(){o.observers.delete(e)&&!o.observers.size&&o.tearDownQuery()}}))||this;o.observers=new Set,o.subscriptions=new Set,o.queryInfo=n,o.queryManager=r,o.isTornDown=!1;var a=r.defaultOptions.watchQuery,s=(void 0===a?{}:a).fetchPolicy,c=void 0===s?"cache-first":s,l=i.fetchPolicy,f=void 0===l?c:l,p=i.initialFetchPolicy,h=void 0===p?"standby"===f?c:f:p;o.options=u(u({},i),{initialFetchPolicy:h,fetchPolicy:f}),o.queryId=n.queryId||r.generateQueryId();var d=me(o.query);return o.queryName=d&&d.name&&d.name.value,o}return c(t,e),Object.defineProperty(t.prototype,"query",{get:function(){return this.queryManager.transform(this.options.query).document},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var e=this;return new Promise((function(t,r){var n={next:function(r){t(r),e.observers.delete(n),e.observers.size||e.queryManager.removeQuery(e.queryId),setTimeout((function(){i.unsubscribe()}),0)},error:r},i=e.subscribe(n)}))},t.prototype.getCurrentResult=function(e){void 0===e&&(e=!0);var t=this.getLastResult(!0),r=this.queryInfo.networkStatus||t&&t.networkStatus||wr.ready,n=u(u({},t),{loading:_r(r),networkStatus:r}),i=this.options.fetchPolicy,o=void 0===i?"cache-first":i;if("network-only"===o||"no-cache"===o||"standby"===o||this.queryManager.transform(this.options.query).hasForcedResolvers);else{var a=this.queryInfo.getDiff();(a.complete||this.options.returnPartialData)&&(n.data=a.result),Rt(n.data,{})&&(n.data=void 0),a.complete?(delete n.partial,!a.complete||n.networkStatus!==wr.loading||"cache-first"!==o&&"cache-only"!==o||(n.networkStatus=wr.ready,n.loading=!1)):n.partial=!0,!__DEV__||a.complete||this.options.partialRefetch||n.loading||n.data||n.error||Rr(a.missing)}return e&&this.updateLastResult(n),n},t.prototype.isDifferentFromLastResult=function(e,t){return!this.last||!Rt(this.last.result,e)||t&&!Rt(this.last.variables,t)},t.prototype.getLast=function(e,t){var r=this.last;if(r&&r[e]&&(!t||Rt(r.variables,this.variables)))return r[e]},t.prototype.getLastResult=function(e){return this.getLast("result",e)},t.prototype.getLastError=function(e){return this.getLast("error",e)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(e){var t,r={pollInterval:0},n=this.options.fetchPolicy;if(r.fetchPolicy="cache-and-network"===n?n:"no-cache"===n?"no-cache":"network-only",__DEV__&&e&&Nr.call(e,"variables")){var i=we(this.query),o=i.variableDefinitions;o&&o.some((function(e){return"variables"===e.variable.name.value}))||__DEV__&&g.warn("Called refetch(".concat(JSON.stringify(e),") for query ").concat((null===(t=i.name)||void 0===t?void 0:t.value)||JSON.stringify(i),", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"))}return e&&!Rt(this.options.variables,e)&&(r.variables=this.options.variables=u(u({},this.options.variables),e)),this.queryInfo.resetLastWrite(),this.reobserve(r,wr.refetch)},t.prototype.fetchMore=function(e){var t=this,r=u(u({},e.query?e:u(u(u(u({},this.options),{query:this.query}),e),{variables:u(u({},this.options.variables),e.variables)})),{fetchPolicy:"no-cache"}),n=this.queryManager.generateQueryId(),i=this.queryInfo,o=i.networkStatus;i.networkStatus=wr.fetchMore,r.notifyOnNetworkStatusChange&&this.observe();var a=new Set;return this.queryManager.fetchQuery(n,r,wr.fetchMore).then((function(s){return t.queryManager.removeQuery(n),i.networkStatus===wr.fetchMore&&(i.networkStatus=o),t.queryManager.cache.batch({update:function(n){var i=e.updateQuery;i?n.updateQuery({query:t.query,variables:t.variables,returnPartialData:!0,optimistic:!1},(function(e){return i(e,{fetchMoreResult:s.data,variables:r.variables})})):n.writeQuery({query:r.query,variables:r.variables,data:s.data})},onWatchUpdated:function(e){a.add(e.query)}}),s})).finally((function(){a.has(t.query)||Ir(t)}))},t.prototype.subscribeToMore=function(e){var t=this,r=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:function(r){var n=e.updateQuery;n&&t.updateQuery((function(e,t){var i=t.variables;return n(e,{subscriptionData:r,variables:i})}))},error:function(t){e.onError?e.onError(t):__DEV__&&g.error("Unhandled GraphQL subscription error",t)}});return this.subscriptions.add(r),function(){t.subscriptions.delete(r)&&r.unsubscribe()}},t.prototype.setOptions=function(e){return this.reobserve(e)},t.prototype.setVariables=function(e){return Rt(this.variables,e)?this.observers.size?this.result():Promise.resolve():(this.options.variables=e,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},wr.setVariables):Promise.resolve())},t.prototype.updateQuery=function(e){var t=this.queryManager,r=e(t.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,{variables:this.variables});r&&(t.cache.writeQuery({query:this.options.query,data:r,variables:this.variables}),t.broadcastQueries())},t.prototype.startPolling=function(e){this.options.pollInterval=e,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(e,t){if(t.nextFetchPolicy){var r=t.fetchPolicy,n=void 0===r?"cache-first":r,i=t.initialFetchPolicy,o=void 0===i?n:i;"standby"===n||("function"==typeof t.nextFetchPolicy?t.fetchPolicy=t.nextFetchPolicy(n,{reason:e,options:t,observable:this,initialFetchPolicy:o}):t.fetchPolicy="variables-changed"===e?o:t.nextFetchPolicy)}return t.fetchPolicy},t.prototype.fetch=function(e,t){return this.queryManager.setObservableQuery(this),this.queryManager.fetchQueryObservable(this.queryId,e,t)},t.prototype.updatePolling=function(){var e=this;if(!this.queryManager.ssrMode){var t=this.pollingInfo,r=this.options.pollInterval;if(r){if(!t||t.interval!==r){__DEV__?g(r,"Attempted to start a polling query without a polling interval."):g(r,13),(t||(this.pollingInfo={})).interval=r;var n=function(){e.pollingInfo&&(_r(e.queryInfo.networkStatus)?i():e.reobserve({fetchPolicy:"no-cache"===e.options.initialFetchPolicy?"no-cache":"network-only"},wr.poll).then(i,i))},i=function(){var t=e.pollingInfo;t&&(clearTimeout(t.timeout),t.timeout=setTimeout(n,t.interval))};i()}}else t&&(clearTimeout(t.timeout),delete this.pollingInfo)}},t.prototype.updateLastResult=function(e,t){return void 0===t&&(t=this.variables),this.last=u(u({},this.last),{result:this.queryManager.assumeImmutableResults?e:kr(e),variables:t}),Vt(e.errors)||delete this.last.error,this.last},t.prototype.reobserve=function(e,t){var r=this;this.isTornDown=!1;var n=t===wr.refetch||t===wr.fetchMore||t===wr.poll,i=this.options.variables,o=this.options.fetchPolicy,a=Sr(this.options,e||{}),s=n?a:Tr(this.options,a);n||(this.updatePolling(),e&&e.variables&&!Rt(e.variables,i)&&"standby"!==s.fetchPolicy&&s.fetchPolicy===o&&(this.applyNextFetchPolicy("variables-changed",s),void 0===t&&(t=wr.setVariables)));var c=s.variables&&u({},s.variables),l=this.fetch(s,t),f={next:function(e){r.reportResult(e,c)},error:function(e){r.reportError(e,c)}};return n||(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=l,this.observer=f),l.addObserver(f),l.promise},t.prototype.observe=function(){this.reportResult(this.getCurrentResult(!1),this.variables)},t.prototype.reportResult=function(e,t){var r=this.getLastError();(r||this.isDifferentFromLastResult(e,t))&&((r||!e.partial||this.options.returnPartialData)&&this.updateLastResult(e,t),yr(this.observers,"next",e))},t.prototype.reportError=function(e,t){var r=u(u({},this.getLastResult()),{error:e,errors:e.graphQLErrors,networkStatus:wr.error,loading:!1});this.updateLastResult(r,t),yr(this.observers,"error",this.last.error=e)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach((function(e){return e.unsubscribe()})),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t}(ee);function Ir(e){var t=e.options,r=t.fetchPolicy,n=t.nextFetchPolicy;return"cache-and-network"===r||"network-only"===r?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(){return this.nextFetchPolicy=n,"function"==typeof n?n.apply(this,arguments):r}}):e.reobserve()}function Cr(e){__DEV__&&g.error("Unhandled error",e.message,e.stack)}function Rr(e){__DEV__&&e&&__DEV__&&g.debug("Missing cache result fields: ".concat(JSON.stringify(e)),e)}function Ar(e){return e.kind===Fe.FIELD||e.kind===Fe.FRAGMENT_SPREAD||e.kind===Fe.INLINE_FRAGMENT}mr(Dr);var Pr=null,Fr={},jr=1;function Lr(e){try{return e()}catch(e){}}var Mr="@wry/context:Slot",Vr=Lr((function(){return globalThis}))||Lr((function(){return i.g}))||Object.create(null),qr=Vr[Mr]||Array[Mr]||function(e){try{Object.defineProperty(Vr,Mr,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(function(){function e(){this.id=["slot",jr++,Date.now(),Math.random().toString(36).slice(2)].join(":")}return e.prototype.hasValue=function(){for(var e=Pr;e;e=e.parent)if(this.id in e.slots){var t=e.slots[this.id];if(t===Fr)break;return e!==Pr&&(Pr.slots[this.id]=t),!0}return Pr&&(Pr.slots[this.id]=Fr),!1},e.prototype.getValue=function(){if(this.hasValue())return Pr.slots[this.id]},e.prototype.withValue=function(e,t,r,n){var i,o=((i={__proto__:null})[this.id]=e,i),a=Pr;Pr={parent:a,slots:o};try{return t.apply(n,r)}finally{Pr=a}},e.bind=function(e){var t=Pr;return function(){var r=Pr;try{return Pr=t,e.apply(this,arguments)}finally{Pr=r}}},e.noContext=function(e,t,r){if(!Pr)return e.apply(r,t);var n=Pr;try{return Pr=null,e.apply(r,t)}finally{Pr=n}},e}());function Qr(){}qr.bind,qr.noContext;var Br,Ur=function(){function e(e,t){void 0===e&&(e=1/0),void 0===t&&(t=Qr),this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}return e.prototype.has=function(e){return this.map.has(e)},e.prototype.get=function(e){var t=this.getNode(e);return t&&t.value},e.prototype.getNode=function(e){var t=this.map.get(e);if(t&&t!==this.newest){var r=t.older,n=t.newer;n&&(n.older=r),r&&(r.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t},e.prototype.set=function(e,t){var r=this.getNode(e);return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)},e.prototype.clean=function(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)},e.prototype.delete=function(e){var t=this.map.get(e);return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)},e}(),zr=new qr,Wr=Object.prototype.hasOwnProperty,Gr=void 0===(Br=Array.from)?function(e){var t=[];return e.forEach((function(e){return t.push(e)})),t}:Br;function Kr(e){var t=e.unsubscribe;"function"==typeof t&&(e.unsubscribe=void 0,t())}var Yr=[];function Hr(e,t){if(!e)throw new Error(t||"assertion failure")}function Jr(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}var $r=function(){function e(t){this.fn=t,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++e.count}return e.prototype.peek=function(){if(1===this.value.length&&!en(this))return Xr(this),this.value[0]},e.prototype.recompute=function(e){return Hr(!this.recomputing,"already recomputing"),Xr(this),en(this)?function(e,t){return cn(e),zr.withValue(e,Zr,[e,t]),function(e,t){if("function"==typeof e.subscribe)try{Kr(e),e.unsubscribe=e.subscribe.apply(null,t)}catch(t){return e.setDirty(),!1}return!0}(e,t)&&function(e){e.dirty=!1,en(e)||rn(e)}(e),Jr(e.value)}(this,e):Jr(this.value)},e.prototype.setDirty=function(){this.dirty||(this.dirty=!0,this.value.length=0,tn(this),Kr(this))},e.prototype.dispose=function(){var e=this;this.setDirty(),cn(this),nn(this,(function(t,r){t.setDirty(),un(t,e)}))},e.prototype.forget=function(){this.dispose()},e.prototype.dependOn=function(e){e.add(this),this.deps||(this.deps=Yr.pop()||new Set),this.deps.add(e)},e.prototype.forgetDeps=function(){var e=this;this.deps&&(Gr(this.deps).forEach((function(t){return t.delete(e)})),this.deps.clear(),Yr.push(this.deps),this.deps=null)},e.count=0,e}();function Xr(e){var t=zr.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),en(e)?on(t,e):an(t,e),t}function Zr(e,t){e.recomputing=!0,e.value.length=0;try{e.value[0]=e.fn.apply(null,t)}catch(t){e.value[1]=t}e.recomputing=!1}function en(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function tn(e){nn(e,on)}function rn(e){nn(e,an)}function nn(e,t){var r=e.parents.size;if(r)for(var n=Gr(e.parents),i=0;i<r;++i)t(n[i],e)}function on(e,t){Hr(e.childValues.has(t)),Hr(en(t));var r=!en(e);if(e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=Yr.pop()||new Set;e.dirtyChildren.add(t),r&&tn(e)}function an(e,t){Hr(e.childValues.has(t)),Hr(!en(t));var r,n,i,o=e.childValues.get(t);0===o.length?e.childValues.set(t,t.value.slice(0)):(r=o,n=t.value,(i=r.length)>0&&i===n.length&&r[i-1]===n[i-1]||e.setDirty()),sn(e,t),en(e)||rn(e)}function sn(e,t){var r=e.dirtyChildren;r&&(r.delete(t),0===r.size&&(Yr.length<100&&Yr.push(r),e.dirtyChildren=null))}function cn(e){e.childValues.size>0&&e.childValues.forEach((function(t,r){un(e,r)})),e.forgetDeps(),Hr(null===e.dirtyChildren)}function un(e,t){t.parents.delete(e),e.childValues.delete(t),sn(e,t)}var ln={setDirty:!0,dispose:!0,forget:!0};function fn(e){var t=new Map,r=e&&e.subscribe;function n(e){var n=zr.getValue();if(n){var i=t.get(e);i||t.set(e,i=new Set),n.dependOn(i),"function"==typeof r&&(Kr(i),i.unsubscribe=r(e))}}return n.dirty=function(e,r){var n=t.get(e);if(n){var i=r&&Wr.call(ln,r)?r:"setDirty";Gr(n).forEach((function(e){return e[i]()})),t.delete(e),Kr(n)}},n}function pn(){var e=new Zt("function"==typeof WeakMap);return function(){return e.lookupArray(arguments)}}pn();var hn=new Set;function dn(e,t){void 0===t&&(t=Object.create(null));var r=new Ur(t.max||Math.pow(2,16),(function(e){return e.dispose()})),n=t.keyArgs,i=t.makeCacheKey||pn(),o=function(){var o=i.apply(null,n?n.apply(null,arguments):arguments);if(void 0===o)return e.apply(null,arguments);var a=r.get(o);a||(r.set(o,a=new $r(e)),a.subscribe=t.subscribe,a.forget=function(){return r.delete(o)});var s=a.recompute(Array.prototype.slice.call(arguments));return r.set(o,a),hn.add(r),zr.hasValue()||(hn.forEach((function(e){return e.clean()})),hn.clear()),s};function a(e){var t=r.get(e);t&&t.setDirty()}function s(e){var t=r.get(e);if(t)return t.peek()}function c(e){return r.delete(e)}return Object.defineProperty(o,"size",{get:function(){return r.map.size},configurable:!1,enumerable:!1}),o.dirtyKey=a,o.dirty=function(){a(i.apply(null,arguments))},o.peekKey=s,o.peek=function(){return s(i.apply(null,arguments))},o.forgetKey=c,o.forget=function(){return c(i.apply(null,arguments))},o.makeCacheKey=i,o.getKey=n?function(){return i.apply(null,n.apply(null,arguments))}:i,Object.freeze(o)}var vn=new qr,yn=new WeakMap;function mn(e){var t=yn.get(e);return t||yn.set(e,t={vars:new Set,dep:fn()}),t}function gn(e){mn(e).vars.forEach((function(t){return t.forgetCache(e)}))}function bn(e){var t=new Set,r=new Set,n=function(o){if(arguments.length>0){if(e!==o){e=o,t.forEach((function(e){mn(e).dep.dirty(n),function(e){e.broadcastWatches&&e.broadcastWatches()}(e)}));var a=Array.from(r);r.clear(),a.forEach((function(t){return t(e)}))}}else{var s=vn.getValue();s&&(i(s),mn(s).dep(n))}return e};n.onNextChange=function(e){return r.add(e),function(){r.delete(e)}};var i=n.attachCache=function(e){return t.add(e),mn(e).vars.add(n),n};return n.forgetCache=function(e){return t.delete(e)},n}var wn=function(){function e(e){var t=e.cache,r=e.client,n=e.resolvers,i=e.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=t,r&&(this.client=r),n&&this.addResolvers(n),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(e){var t=this;this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach((function(e){t.resolvers=Qt(t.resolvers,e)})):this.resolvers=Qt(this.resolvers,e)},e.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(e){var t=e.document,r=e.remoteResult,n=e.context,i=e.variables,o=e.onlyRunForcedResolvers,a=void 0!==o&&o;return f(this,void 0,void 0,(function(){return p(this,(function(e){return t?[2,this.resolveDocument(t,r.data,n,i,this.fragmentMatcher,a).then((function(e){return u(u({},r),{data:e.result})}))]:[2,r]}))}))},e.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(e){return Qe(["client"],e)&&this.resolvers?e:null},e.prototype.serverQuery=function(e){return function(e){return ye(e),lr([{test:function(e){return"client"===e.name.value},remove:!0}],e)}(e)},e.prototype.prepareContext=function(e){var t=this.cache;return u(u({},e),{cache:t,getCacheKey:function(e){return t.identify(e)}})},e.prototype.addExportedVariables=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),f(this,void 0,void 0,(function(){return p(this,(function(n){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,t)||{},this.prepareContext(r),t).then((function(e){return u(u({},t),e.exportedVariables)}))]:[2,u({},t)]}))}))},e.prototype.shouldForceResolvers=function(e){var t=!1;return Me(e,{Directive:{enter:function(e){if("client"===e.name.value&&e.arguments&&(t=e.arguments.some((function(e){return"always"===e.name.value&&"BooleanValue"===e.value.kind&&!0===e.value.value}))))return Le}}}),t},e.prototype.buildRootValueFromCache=function(e,t){return this.cache.diff({query:hr(e),variables:t,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(e,t,r,n,i,o){return void 0===r&&(r={}),void 0===n&&(n={}),void 0===i&&(i=function(){return!0}),void 0===o&&(o=!1),f(this,void 0,void 0,(function(){var a,s,c,l,f,h,d,v,y,m;return p(this,(function(p){return a=Ee(e),s=be(e),c=ne(s),l=this.collectSelectionsToResolve(a,c),f=a.operation,h=f?f.charAt(0).toUpperCase()+f.slice(1):"Query",v=(d=this).cache,y=d.client,m={fragmentMap:c,context:u(u({},r),{cache:v,client:y}),variables:n,fragmentMatcher:i,defaultOperationType:h,exportedVariables:{},selectionsToResolve:l,onlyRunForcedResolvers:o},[2,this.resolveSelectionSet(a.selectionSet,!1,t,m).then((function(e){return{result:e,exportedVariables:m.exportedVariables}}))]}))}))},e.prototype.resolveSelectionSet=function(e,t,r,n){return f(this,void 0,void 0,(function(){var i,o,a,s,c,u=this;return p(this,(function(l){return i=n.fragmentMap,o=n.context,a=n.variables,s=[r],c=function(e){return f(u,void 0,void 0,(function(){var c,u;return p(this,(function(l){return(t||n.selectionsToResolve.has(e))&&qe(e,a)?ve(e)?[2,this.resolveField(e,t,r,n).then((function(t){var r;void 0!==t&&s.push(((r={})[he(e)]=t,r))}))]:(function(e){return"InlineFragment"===e.kind}(e)?c=e:(c=i[e.name.value],__DEV__?g(c,"No fragment named ".concat(e.name.value)):g(c,11)),c&&c.typeCondition&&(u=c.typeCondition.name.value,n.fragmentMatcher(r,u,o))?[2,this.resolveSelectionSet(c.selectionSet,t,r,n).then((function(e){s.push(e)}))]:[2]):[2]}))}))},[2,Promise.all(e.selections.map(c)).then((function(){return Bt(s)}))]}))}))},e.prototype.resolveField=function(e,t,r,n){return f(this,void 0,void 0,(function(){var i,o,a,s,c,u,l,f,h,d=this;return p(this,(function(p){return r?(i=n.variables,o=e.name.value,a=he(e),s=o!==a,c=r[a]||r[o],u=Promise.resolve(c),n.onlyRunForcedResolvers&&!this.shouldForceResolvers(e)||(l=r.__typename||n.defaultOperationType,(f=this.resolvers&&this.resolvers[l])&&(h=f[s?o:a])&&(u=Promise.resolve(vn.withValue(this.cache,h,[r,pe(e,i),n.context,{field:e,fragmentMap:n.fragmentMap}])))),[2,u.then((function(r){var i,o;if(void 0===r&&(r=c),e.directives&&e.directives.forEach((function(e){"export"===e.name.value&&e.arguments&&e.arguments.forEach((function(e){"as"===e.name.value&&"StringValue"===e.value.kind&&(n.exportedVariables[e.value.value]=r)}))})),!e.selectionSet)return r;if(null==r)return r;var a=null!==(o=null===(i=e.directives)||void 0===i?void 0:i.some((function(e){return"client"===e.name.value})))&&void 0!==o&&o;return Array.isArray(r)?d.resolveSubSelectedArray(e,t||a,r,n):e.selectionSet?d.resolveSelectionSet(e.selectionSet,t||a,r,n):void 0}))]):[2,null]}))}))},e.prototype.resolveSubSelectedArray=function(e,t,r,n){var i=this;return Promise.all(r.map((function(r){return null===r?null:Array.isArray(r)?i.resolveSubSelectedArray(e,t,r,n):e.selectionSet?i.resolveSelectionSet(e.selectionSet,t,r,n):void 0})))},e.prototype.collectSelectionsToResolve=function(e,t){var r=function(e){return!Array.isArray(e)},n=this.selectionsToResolveCache;return function e(i){if(!n.has(i)){var o=new Set;n.set(i,o),Me(i,{Directive:function(e,t,__,n,i){"client"===e.name.value&&i.forEach((function(e){r(e)&&Ar(e)&&o.add(e)}))},FragmentSpread:function(n,i,__,a,s){var c=t[n.name.value];__DEV__?g(c,"No fragment named ".concat(n.name.value)):g(c,12);var u=e(c);u.size>0&&(s.forEach((function(e){r(e)&&Ar(e)&&o.add(e)})),o.add(n),u.forEach((function(e){o.add(e)})))}})}return n.get(i)}(e)},e}(),En=new(ze?WeakMap:Map);function On(e,t){var r=e[t];"function"==typeof r&&(e[t]=function(){return En.set(e,(En.get(e)+1)%1e15),r.apply(this,arguments)})}function kn(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var xn=function(){function e(e,t){void 0===t&&(t=e.generateQueryId()),this.queryId=t,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.subscriptions=new Set,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var r=this.cache=e.cache;En.has(r)||(En.set(r,0),On(r,"evict"),On(r,"modify"),On(r,"reset"))}return e.prototype.init=function(e){var t=e.networkStatus||wr.loading;return this.variables&&this.networkStatus!==wr.loading&&!Rt(this.variables,e.variables)&&(t=wr.setVariables),Rt(e.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:e.document,variables:e.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:t}),e.observableQuery&&this.setObservableQuery(e.observableQuery),e.lastRequestId&&(this.lastRequestId=e.lastRequestId),this},e.prototype.reset=function(){kn(this),this.dirty=!1},e.prototype.getDiff=function(e){void 0===e&&(e=this.variables);var t=this.getDiffOptions(e);if(this.lastDiff&&Rt(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables=e);var r=this.observableQuery;if(r&&"no-cache"===r.options.fetchPolicy)return{complete:!1};var n=this.cache.diff(t);return this.updateLastDiff(n,t),n},e.prototype.updateLastDiff=function(e,t){this.lastDiff=e?{diff:e,options:t||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(e){var t;return void 0===e&&(e=this.variables),{query:this.document,variables:e,returnPartialData:!0,optimistic:!0,canonizeResults:null===(t=this.observableQuery)||void 0===t?void 0:t.options.canonizeResults}},e.prototype.setDiff=function(e){var t=this,r=this.lastDiff&&this.lastDiff.diff;this.updateLastDiff(e),this.dirty||Rt(r&&r.result,e&&e.result)||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout((function(){return t.notify()}),0)))},e.prototype.setObservableQuery=function(e){var t=this;e!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=e,e?(e.queryInfo=this,this.listeners.add(this.oqListener=function(){t.getDiff().fromOptimisticTransaction?e.observe():Ir(e)})):delete this.oqListener)},e.prototype.notify=function(){var e=this;kn(this),this.shouldNotify()&&this.listeners.forEach((function(t){return t(e)})),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if(_r(this.networkStatus)&&this.observableQuery){var e=this.observableQuery.options.fetchPolicy;if("cache-only"!==e&&"cache-and-network"!==e)return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel,this.subscriptions.forEach((function(e){return e.unsubscribe()}));var t=this.observableQuery;t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(e){var t=this;void 0===e&&(e=this.variables);var r=this.observableQuery;if(!r||"no-cache"!==r.options.fetchPolicy){var n=u(u({},this.getDiffOptions(e)),{watcher:this,callback:function(e){return t.setDiff(e)}});this.lastWatch&&Rt(n,this.lastWatch)||(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=n))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(e,t){var r=this.lastWrite;return!(r&&r.dmCount===En.get(this.cache)&&Rt(t,r.variables)&&Rt(e.data,r.result.data))},e.prototype.markResult=function(e,t,r,n){var i=this,o=new zt,a=Vt(e.errors)?e.errors.slice(0):[];if(this.reset(),"incremental"in e&&Vt(e.incremental)){var s=Gt(this.getDiff().result,e);e.data=s}else if("hasNext"in e&&e.hasNext){var c=this.getDiff();e.data=o.merge(c.result,e.data)}this.graphQLErrors=a,"no-cache"===r.fetchPolicy?this.updateLastDiff({result:e.data,complete:!0},this.getDiffOptions(r.variables)):0!==n&&(Sn(e,r.errorPolicy)?this.cache.performTransaction((function(o){if(i.shouldWrite(e,r.variables))o.writeQuery({query:t,data:e.data,variables:r.variables,overwrite:1===n}),i.lastWrite={result:e,variables:r.variables,dmCount:En.get(i.cache)};else if(i.lastDiff&&i.lastDiff.diff.complete)return void(e.data=i.lastDiff.diff.result);var a=i.getDiffOptions(r.variables),s=o.diff(a);i.stopped||i.updateWatch(r.variables),i.updateLastDiff(s,a),s.complete&&(e.data=s.result)})):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=wr.ready},e.prototype.markError=function(e){return this.networkStatus=wr.error,this.lastWrite=void 0,this.reset(),e.graphQLErrors&&(this.graphQLErrors=e.graphQLErrors),e.networkError&&(this.networkError=e.networkError),e},e}();function Sn(e,t){void 0===t&&(t="none");var r="ignore"===t||"all"===t,n=!ir(e);return!n&&r&&e.data&&(n=!0),n}var Tn=Object.prototype.hasOwnProperty,Nn=function(){function e(e){var t=e.cache,r=e.link,n=e.defaultOptions,i=e.queryDeduplication,o=void 0!==i&&i,a=e.onBroadcast,s=e.ssrMode,c=void 0!==s&&s,u=e.clientAwareness,l=void 0===u?{}:u,f=e.localState,p=e.assumeImmutableResults;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new(ze?WeakMap:Map),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Map,this.cache=t,this.link=r,this.defaultOptions=n||Object.create(null),this.queryDeduplication=o,this.clientAwareness=l,this.localState=f||new wn({cache:t}),this.ssrMode=c,this.assumeImmutableResults=!!p,(this.onBroadcast=a)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var e=this;this.queries.forEach((function(t,r){e.stopQueryNoBroadcast(r)})),this.cancelPendingFetches(__DEV__?new m("QueryManager stopped while query was in flight"):new m(14))},e.prototype.cancelPendingFetches=function(e){this.fetchCancelFns.forEach((function(t){return t(e)})),this.fetchCancelFns.clear()},e.prototype.mutate=function(e){var t,r,n=e.mutation,i=e.variables,o=e.optimisticResponse,a=e.updateQueries,s=e.refetchQueries,c=void 0===s?[]:s,l=e.awaitRefetchQueries,h=void 0!==l&&l,d=e.update,v=e.onQueryUpdated,y=e.fetchPolicy,m=void 0===y?(null===(t=this.defaultOptions.mutate)||void 0===t?void 0:t.fetchPolicy)||"network-only":y,b=e.errorPolicy,w=void 0===b?(null===(r=this.defaultOptions.mutate)||void 0===r?void 0:r.errorPolicy)||"none":b,E=e.keepRootFields,_=e.context;return f(this,void 0,void 0,(function(){var e,t,r,s,l,f;return p(this,(function(p){switch(p.label){case 0:return __DEV__?g(n,"mutation option is required. You must specify your GraphQL document in the mutation option."):g(n,15),__DEV__?g("network-only"===m||"no-cache"===m,"Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write."):g("network-only"===m||"no-cache"===m,16),e=this.generateMutationId(),t=this.transform(n),r=t.document,s=t.hasClientExports,n=this.cache.transformForLink(r),i=this.getVariables(n,i),s?[4,this.localState.addExportedVariables(n,i,_)]:[3,2];case 1:i=p.sent(),p.label=2;case 2:return l=this.mutationStore&&(this.mutationStore[e]={mutation:n,variables:i,loading:!0,error:null}),o&&this.markMutationOptimistic(o,{mutationId:e,document:n,variables:i,fetchPolicy:m,errorPolicy:w,context:_,updateQueries:a,update:d,keepRootFields:E}),this.broadcastQueries(),f=this,[2,new Promise((function(t,r){return nr(f.getObservableFromLink(n,u(u({},_),{optimisticResponse:o}),i,!1),(function(t){if(ir(t)&&"none"===w)throw new Er({graphQLErrors:or(t)});l&&(l.loading=!1,l.error=null);var r=u({},t);return"function"==typeof c&&(c=c(r)),"ignore"===w&&ir(r)&&delete r.errors,f.markMutationResult({mutationId:e,result:r,document:n,variables:i,fetchPolicy:m,errorPolicy:w,context:_,update:d,updateQueries:a,awaitRefetchQueries:h,refetchQueries:c,removeOptimistic:o?e:void 0,onQueryUpdated:v,keepRootFields:E})})).subscribe({next:function(e){f.broadcastQueries(),"hasNext"in e&&!1!==e.hasNext||t(e)},error:function(t){l&&(l.loading=!1,l.error=t),o&&f.cache.removeOptimistic(e),f.broadcastQueries(),r(t instanceof Er?t:new Er({networkError:t}))}})}))]}}))}))},e.prototype.markMutationResult=function(e,t){var r=this;void 0===t&&(t=this.cache);var n=e.result,i=[],o="no-cache"===e.fetchPolicy;if(!o&&Sn(n,e.errorPolicy)){if(Wt(n)||i.push({result:n.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}),Wt(n)&&Vt(n.incremental)){var a=t.diff({id:"ROOT_MUTATION",query:this.transform(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0}),s=void 0;a.result&&(s=Gt(a.result,n)),void 0!==s&&(n.data=s,i.push({result:s,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}))}var c=e.updateQueries;c&&this.queries.forEach((function(e,o){var a=e.observableQuery,s=a&&a.queryName;if(s&&Tn.call(c,s)){var u=c[s],l=r.queries.get(o),f=l.document,p=l.variables,h=t.diff({query:f,variables:p,returnPartialData:!0,optimistic:!1}),d=h.result;if(h.complete&&d){var v=u(d,{mutationResult:n,queryName:f&&ge(f)||void 0,queryVariables:p});v&&i.push({result:v,dataId:"ROOT_QUERY",query:f,variables:p})}}}))}if(i.length>0||e.refetchQueries||e.update||e.onQueryUpdated||e.removeOptimistic){var l=[];if(this.refetchQueries({updateCache:function(t){o||i.forEach((function(e){return t.write(e)}));var a,s=e.update,c=!(Wt(a=n)||function(e){return"hasNext"in e&&"data"in e}(a))||Wt(n)&&!n.hasNext;if(s){if(!o){var l=t.diff({id:"ROOT_MUTATION",query:r.transform(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0});l.complete&&("incremental"in(n=u(u({},n),{data:l.result}))&&delete n.incremental,"hasNext"in n&&delete n.hasNext)}c&&s(t,n,{context:e.context,variables:e.variables})}o||e.keepRootFields||!c||t.modify({id:"ROOT_MUTATION",fields:function(e,t){var r=t.fieldName,n=t.DELETE;return"__typename"===r?e:n}})},include:e.refetchQueries,optimistic:!1,removeOptimistic:e.removeOptimistic,onQueryUpdated:e.onQueryUpdated||null}).forEach((function(e){return l.push(e)})),e.awaitRefetchQueries||e.onQueryUpdated)return Promise.all(l).then((function(){return n}))}return Promise.resolve(n)},e.prototype.markMutationOptimistic=function(e,t){var r=this,n="function"==typeof e?e(t.variables):e;return this.cache.recordOptimisticTransaction((function(e){try{r.markMutationResult(u(u({},t),{result:{data:n}}),e)}catch(e){__DEV__&&g.error(e)}}),t.mutationId)},e.prototype.fetchQuery=function(e,t,r){return this.fetchQueryObservable(e,t,r).promise},e.prototype.getQueryStore=function(){var e=Object.create(null);return this.queries.forEach((function(t,r){e[r]={variables:t.variables,networkStatus:t.networkStatus,networkError:t.networkError,graphQLErrors:t.graphQLErrors}})),e},e.prototype.resetErrors=function(e){var t=this.queries.get(e);t&&(t.networkError=void 0,t.graphQLErrors=[])},e.prototype.transform=function(e){var t=this.transformCache;if(!t.has(e)){var r=this.cache.transformDocument(e),n=lr([pr],ye(r)),i=this.localState.clientQuery(r),o=n&&this.localState.serverQuery(n),a={document:r,hasClientExports:Be(r),hasForcedResolvers:this.localState.shouldForceResolvers(r),clientQuery:i,serverQuery:o,defaultVars:_e(me(r)),asQuery:u(u({},r),{definitions:r.definitions.map((function(e){return"OperationDefinition"===e.kind&&"query"!==e.operation?u(u({},e),{operation:"query"}):e}))})},s=function(e){e&&!t.has(e)&&t.set(e,a)};s(e),s(r),s(i),s(o)}return t.get(e)},e.prototype.getVariables=function(e,t){return u(u({},this.transform(e).defaultVars),t)},e.prototype.watchQuery=function(e){void 0===(e=u(u({},e),{variables:this.getVariables(e.query,e.variables)})).notifyOnNetworkStatusChange&&(e.notifyOnNetworkStatusChange=!1);var t=new xn(this),r=new Dr({queryManager:this,queryInfo:t,options:e});return this.queries.set(r.queryId,t),t.init({document:r.query,observableQuery:r,variables:r.variables}),r},e.prototype.query=function(e,t){var r=this;return void 0===t&&(t=this.generateQueryId()),__DEV__?g(e.query,"query option is required. You must specify your GraphQL document in the query option."):g(e.query,17),__DEV__?g("Document"===e.query.kind,'You must wrap the query string in a "gql" tag.'):g("Document"===e.query.kind,18),__DEV__?g(!e.returnPartialData,"returnPartialData option only supported on watchQuery."):g(!e.returnPartialData,19),__DEV__?g(!e.pollInterval,"pollInterval option only supported on watchQuery."):g(!e.pollInterval,20),this.fetchQuery(t,e).finally((function(){return r.stopQuery(t)}))},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(e){var t=this.queries.get(e);t&&t.stop()},e.prototype.clearStore=function(e){return void 0===e&&(e={discardWatches:!0}),this.cancelPendingFetches(__DEV__?new m("Store reset while query was in flight (not completed in link chain)"):new m(21)),this.queries.forEach((function(e){e.observableQuery?e.networkStatus=wr.loading:e.stop()})),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(e)},e.prototype.getObservableQueries=function(e){var t=this;void 0===e&&(e="active");var r=new Map,n=new Map,i=new Set;return Array.isArray(e)&&e.forEach((function(e){var r;"string"==typeof e?n.set(e,!1):te(r=e)&&"Document"===r.kind&&Array.isArray(r.definitions)?n.set(t.transform(e).document,!1):te(e)&&e.query&&i.add(e)})),this.queries.forEach((function(t,i){var o=t.observableQuery,a=t.document;if(o){if("all"===e)return void r.set(i,o);var s=o.queryName;if("standby"===o.options.fetchPolicy||"active"===e&&!o.hasObservers())return;("active"===e||s&&n.has(s)||a&&n.has(a))&&(r.set(i,o),s&&n.set(s,!0),a&&n.set(a,!0))}})),i.size&&i.forEach((function(e){var n=vr("legacyOneTimeQuery"),i=t.getQuery(n).init({document:e.query,variables:e.variables}),o=new Dr({queryManager:t,queryInfo:i,options:u(u({},e),{fetchPolicy:"network-only"})});g(o.queryId===n),i.setObservableQuery(o),r.set(n,o)})),__DEV__&&n.size&&n.forEach((function(e,t){e||__DEV__&&g.warn("Unknown query ".concat("string"==typeof t?"named ":"").concat(JSON.stringify(t,null,2)," requested in refetchQueries options.include array"))})),r},e.prototype.reFetchObservableQueries=function(e){var t=this;void 0===e&&(e=!1);var r=[];return this.getObservableQueries(e?"all":"active").forEach((function(n,i){var o=n.options.fetchPolicy;n.resetLastResults(),(e||"standby"!==o&&"cache-only"!==o)&&r.push(n.refetch()),t.getQuery(i).setDiff(null)})),this.broadcastQueries(),Promise.all(r)},e.prototype.setObservableQuery=function(e){this.getQuery(e.queryId).setObservableQuery(e)},e.prototype.startGraphQLSubscription=function(e){var t=this,r=e.query,n=e.fetchPolicy,i=e.errorPolicy,o=e.variables,a=e.context,s=void 0===a?{}:a;r=this.transform(r).document,o=this.getVariables(r,o);var c=function(e){return t.getObservableFromLink(r,s,e).map((function(o){if("no-cache"!==n&&(Sn(o,i)&&t.cache.write({query:r,result:o.data,dataId:"ROOT_SUBSCRIPTION",variables:e}),t.broadcastQueries()),ir(o))throw new Er({graphQLErrors:o.errors});return o}))};if(this.transform(r).hasClientExports){var u=this.localState.addExportedVariables(r,o,s).then(c);return new ee((function(e){var t=null;return u.then((function(r){return t=r.subscribe(e)}),e.error),function(){return t&&t.unsubscribe()}}))}return c(o)},e.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},e.prototype.removeQuery=function(e){this.fetchCancelFns.delete(e),this.queries.has(e)&&(this.getQuery(e).stop(),this.queries.delete(e))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach((function(e){return e.notify()}))},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(e,t,r,n){var i,o,a=this;void 0===n&&(n=null!==(i=null==t?void 0:t.queryDeduplication)&&void 0!==i?i:this.queryDeduplication);var s=this.transform(e).serverQuery;if(s){var c=this.inFlightLinkObservables,l=this.link,f={query:s,variables:r,operationName:ge(s)||void 0,context:this.prepareContext(u(u({},t),{forceFetch:!n}))};if(t=f.context,n){var p=c.get(s)||new Map;c.set(s,p);var h=tr(r);if(!(o=p.get(h))){var d=new br([Ne(l,f)]);p.set(h,o=d),d.beforeNext((function(){p.delete(h)&&p.size<1&&c.delete(s)}))}}else o=new br([Ne(l,f)])}else o=new br([ee.of({data:{}})]),t=this.prepareContext(t);var v=this.transform(e).clientQuery;return v&&(o=nr(o,(function(e){return a.localState.runResolvers({document:v,remoteResult:e,context:t,variables:r})}))),o},e.prototype.getResultsFromLink=function(e,t,r){var n=e.lastRequestId=this.generateRequestId(),i=this.cache.transformForLink(this.transform(e.document).document);return nr(this.getObservableFromLink(i,r.context,r.variables),(function(o){var a=or(o),s=a.length>0;if(n>=e.lastRequestId){if(s&&"none"===r.errorPolicy)throw e.markError(new Er({graphQLErrors:a}));e.markResult(o,i,r,t),e.markReady()}var c={data:o.data,loading:!1,networkStatus:wr.ready};return s&&"ignore"!==r.errorPolicy&&(c.errors=a,c.networkStatus=wr.error),c}),(function(t){var r=t.hasOwnProperty("graphQLErrors")?t:new Er({networkError:t});throw n>=e.lastRequestId&&e.markError(r),r}))},e.prototype.fetchQueryObservable=function(e,t,r){var n=this;void 0===r&&(r=wr.loading);var i=this.transform(t.query).document,o=this.getVariables(i,t.variables),a=this.getQuery(e),s=this.defaultOptions.watchQuery,c=t.fetchPolicy,u=void 0===c?s&&s.fetchPolicy||"cache-first":c,l=t.errorPolicy,f=void 0===l?s&&s.errorPolicy||"none":l,p=t.returnPartialData,h=void 0!==p&&p,d=t.notifyOnNetworkStatusChange,v=void 0!==d&&d,y=t.context,m=void 0===y?{}:y,g=Object.assign({},t,{query:i,variables:o,fetchPolicy:u,errorPolicy:f,returnPartialData:h,notifyOnNetworkStatusChange:v,context:m}),b=function(e){g.variables=e;var i=n.fetchQueryByPolicy(a,g,r);return"standby"!==g.fetchPolicy&&i.length>0&&a.observableQuery&&a.observableQuery.applyNextFetchPolicy("after-fetch",t),i},w=function(){return n.fetchCancelFns.delete(e)};this.fetchCancelFns.set(e,(function(e){w(),setTimeout((function(){return E.cancel(e)}))}));var E=new br(this.transform(g.query).hasClientExports?this.localState.addExportedVariables(g.query,g.variables,g.context).then(b):b(g.variables));return E.promise.then(w,w),E},e.prototype.refetchQueries=function(e){var t=this,r=e.updateCache,n=e.include,i=e.optimistic,o=void 0!==i&&i,a=e.removeOptimistic,s=void 0===a?o?vr("refetchQueries"):void 0:a,c=e.onQueryUpdated,u=new Map;n&&this.getObservableQueries(n).forEach((function(e,r){u.set(r,{oq:e,lastDiff:t.getQuery(r).getDiff()})}));var l=new Map;return r&&this.cache.batch({update:r,optimistic:o&&s||!1,removeOptimistic:s,onWatchUpdated:function(e,t,r){var n=e.watcher instanceof xn&&e.watcher.observableQuery;if(n){if(c){u.delete(n.queryId);var i=c(n,t,r);return!0===i&&(i=n.refetch()),!1!==i&&l.set(n,i),i}null!==c&&u.set(n.queryId,{oq:n,lastDiff:r,diff:t})}}}),u.size&&u.forEach((function(e,r){var n,i=e.oq,o=e.lastDiff,a=e.diff;if(c){if(!a){var s=i.queryInfo;s.reset(),a=s.getDiff()}n=c(i,a,o)}c&&!0!==n||(n=i.refetch()),!1!==n&&l.set(i,n),r.indexOf("legacyOneTimeQuery")>=0&&t.stopQueryNoBroadcast(r)})),s&&this.cache.removeOptimistic(s),l},e.prototype.fetchQueryByPolicy=function(e,t,r){var n=this,i=t.query,o=t.variables,a=t.fetchPolicy,s=t.refetchWritePolicy,c=t.errorPolicy,l=t.returnPartialData,f=t.context,p=t.notifyOnNetworkStatusChange,h=e.networkStatus;e.init({document:this.transform(i).document,variables:o,networkStatus:r});var d=function(){return e.getDiff(o)},v=function(t,r){void 0===r&&(r=e.networkStatus||wr.loading);var a=t.result;!__DEV__||l||Rt(a,{})||Rr(t.missing);var s=function(e){return ee.of(u({data:e,loading:_r(r),networkStatus:r},t.complete?null:{partial:!0}))};return a&&n.transform(i).hasForcedResolvers?n.localState.runResolvers({document:i,remoteResult:{data:a},context:f,variables:o,onlyRunForcedResolvers:!0}).then((function(e){return s(e.data||void 0)})):"none"===c&&r===wr.refetch&&Array.isArray(t.missing)?s(void 0):s(a)},y="no-cache"===a?0:r===wr.refetch&&"merge"!==s?1:2,m=function(){return n.getResultsFromLink(e,y,{variables:o,context:f,fetchPolicy:a,errorPolicy:c})},g=p&&"number"==typeof h&&h!==r&&_r(r);switch(a){default:case"cache-first":return(b=d()).complete?[v(b,e.markReady())]:l||g?[v(b),m()]:[m()];case"cache-and-network":var b;return(b=d()).complete||l||g?[v(b),m()]:[m()];case"cache-only":return[v(d(),e.markReady())];case"network-only":return g?[v(d()),m()]:[m()];case"no-cache":return g?[v(e.getDiff()),m()]:[m()];case"standby":return[]}},e.prototype.getQuery=function(e){return e&&!this.queries.has(e)&&this.queries.set(e,new xn(this,e)),this.queries.get(e)},e.prototype.prepareContext=function(e){void 0===e&&(e={});var t=this.localState.prepareContext(e);return u(u({},t),{clientAwareness:this.clientAwareness})},e}();function Dn(e,t){return Sr(e,t,t.variables&&{variables:u(u({},e&&e.variables),t.variables)})}var In=!1,Cn=function(){function e(e){var t=this;this.resetStoreCallbacks=[],this.clearStoreCallbacks=[];var r=e.uri,n=e.credentials,i=e.headers,o=e.cache,a=e.ssrMode,s=void 0!==a&&a,c=e.ssrForceFetchDelay,u=void 0===c?0:c,l=e.connectToDevTools,f=void 0===l?"object"==typeof window&&!window.__APOLLO_CLIENT__&&__DEV__:l,p=e.queryDeduplication,h=void 0===p||p,d=e.defaultOptions,v=e.assumeImmutableResults,y=void 0!==v&&v,b=e.resolvers,w=e.typeDefs,E=e.fragmentMatcher,_=e.name,O=e.version,k=e.link;if(k||(k=r?new St({uri:r,credentials:n,headers:i}):Te.empty()),!o)throw __DEV__?new m("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs"):new m(9);if(this.link=k,this.cache=o,this.disableNetworkFetches=s||u>0,this.queryDeduplication=h,this.defaultOptions=d||Object.create(null),this.typeDefs=w,u&&setTimeout((function(){return t.disableNetworkFetches=!1}),u),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),f&&"object"==typeof window&&(window.__APOLLO_CLIENT__=this),!In&&f&&__DEV__&&(In=!0,"undefined"!=typeof window&&window.document&&window.top===window.self&&!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)){var x=window.navigator,S=x&&x.userAgent,T=void 0;"string"==typeof S&&(S.indexOf("Chrome/")>-1?T="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":S.indexOf("Firefox/")>-1&&(T="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),T&&__DEV__&&g.log("Download the Apollo DevTools for a better development experience: "+T)}this.version="3.7.10",this.localState=new wn({cache:o,client:this,resolvers:b,fragmentMatcher:E}),this.queryManager=new Nn({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,queryDeduplication:h,ssrMode:s,clientAwareness:{name:_,version:O},localState:this.localState,assumeImmutableResults:y,onBroadcast:f?function(){t.devToolsHookCb&&t.devToolsHookCb({action:{},state:{queries:t.queryManager.getQueryStore(),mutations:t.queryManager.mutationStore||{}},dataWithOptimisticResults:t.cache.extract(!0)})}:void 0})}return e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=Dn(this.defaultOptions.watchQuery,e)),!this.disableNetworkFetches||"network-only"!==e.fetchPolicy&&"cache-and-network"!==e.fetchPolicy||(e=u(u({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},e.prototype.query=function(e){return this.defaultOptions.query&&(e=Dn(this.defaultOptions.query,e)),__DEV__?g("cache-and-network"!==e.fetchPolicy,"The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only."):g("cache-and-network"!==e.fetchPolicy,10),this.disableNetworkFetches&&"network-only"===e.fetchPolicy&&(e=u(u({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},e.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=Dn(this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},e.prototype.subscribe=function(e){return this.queryManager.startGraphQLSubscription(e)},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.cache.readQuery(e,t)},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.cache.readFragment(e,t)},e.prototype.writeQuery=function(e){var t=this.cache.writeQuery(e);return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.writeFragment=function(e){var t=this.cache.writeFragment(e);return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},e.prototype.__requestRaw=function(e){return Ne(this.link,e)},e.prototype.resetStore=function(){var e=this;return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!1})})).then((function(){return Promise.all(e.resetStoreCallbacks.map((function(e){return e()})))})).then((function(){return e.reFetchObservableQueries()}))},e.prototype.clearStore=function(){var e=this;return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!0})})).then((function(){return Promise.all(e.clearStoreCallbacks.map((function(e){return e()})))}))},e.prototype.onResetStore=function(e){var t=this;return this.resetStoreCallbacks.push(e),function(){t.resetStoreCallbacks=t.resetStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.onClearStore=function(e){var t=this;return this.clearStoreCallbacks.push(e),function(){t.clearStoreCallbacks=t.clearStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},e.prototype.refetchQueries=function(e){var t=this.queryManager.refetchQueries(e),r=[],n=[];t.forEach((function(e,t){r.push(t),n.push(e)}));var i=Promise.all(n);return i.queries=r,i.results=n,i.catch((function(e){__DEV__&&g.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(e))})),i},e.prototype.getObservableQueries=function(e){return void 0===e&&(e="active"),this.queryManager.getObservableQueries(e)},e.prototype.extract=function(e){return this.cache.extract(e)},e.prototype.restore=function(e){return this.cache.restore(e)},e.prototype.addResolvers=function(e){this.localState.addResolvers(e)},e.prototype.setResolvers=function(e){this.localState.setResolvers(e)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},e.prototype.setLink=function(e){this.link=this.queryManager.link=e},e}(),Rn=function(){function e(){this.getFragmentDoc=dn(re)}return e.prototype.batch=function(e){var t,r=this,n="string"==typeof e.optimistic?e.optimistic:!1===e.optimistic?null:void 0;return this.performTransaction((function(){return t=e.update(r)}),n),t},e.prototype.recordOptimisticTransaction=function(e,t){this.performTransaction(e,t)},e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.identify=function(e){},e.prototype.gc=function(){return[]},e.prototype.modify=function(e){return!1},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read(u(u({},e),{rootId:e.id||"ROOT_QUERY",optimistic:t}))},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read(u(u({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:t}))},e.prototype.writeQuery=function(e){var t=e.id,r=e.data,n=l(e,["id","data"]);return this.write(Object.assign(n,{dataId:t||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(e){var t=e.id,r=e.data,n=e.fragment,i=e.fragmentName,o=l(e,["id","data","fragment","fragmentName"]);return this.write(Object.assign(o,{query:this.getFragmentDoc(n,i),dataId:t,result:r}))},e.prototype.updateQuery=function(e,t){return this.batch({update:function(r){var n=r.readQuery(e),i=t(n);return null==i?n:(r.writeQuery(u(u({},e),{data:i})),i)}})},e.prototype.updateFragment=function(e,t){return this.batch({update:function(r){var n=r.readFragment(e),i=t(n);return null==i?n:(r.writeFragment(u(u({},e),{data:i})),i)}})},e}(),An=function(e){function t(r,n,i,o){var a,s=e.call(this,r)||this;if(s.message=r,s.path=n,s.query=i,s.variables=o,Array.isArray(s.path)){s.missing=s.message;for(var c=s.path.length-1;c>=0;--c)s.missing=((a={})[s.path[c]]=s.missing,a)}else s.missing=s.path;return s.__proto__=t.prototype,s}return c(t,e),t}(Error);function Pn(e){return __DEV__&&(t=e,(r=new Set([t])).forEach((function(e){te(e)&&function(e){if(__DEV__&&!Object.isFrozen(e))try{Object.freeze(e)}catch(e){if(e instanceof TypeError)return null;throw e}return e}(e)===e&&Object.getOwnPropertyNames(e).forEach((function(t){te(e[t])&&r.add(e[t])}))}))),e;var t,r}var Fn=Object.prototype.hasOwnProperty;function jn(e){return null==e}function Ln(e,t){var r=e.__typename,n=e.id,i=e._id;if("string"==typeof r&&(t&&(t.keyObject=jn(n)?jn(i)?void 0:{_id:i}:{id:n}),jn(n)&&!jn(i)&&(n=i),!jn(n)))return"".concat(r,":").concat("number"==typeof n||"string"==typeof n?n:JSON.stringify(n))}var Mn={dataIdFromObject:Ln,addTypename:!0,resultCaching:!0,canonizeResults:!1};function Vn(e){var t=e.canonizeResults;return void 0===t?Mn.canonizeResults:t}var qn=/^[_a-z][_0-9a-z]*/i;function Qn(e){var t=e.match(qn);return t?t[0]:e}function Bn(e,t,r){return!!te(t)&&(Mt(t)?t.every((function(t){return Bn(e,t,r)})):e.selections.every((function(e){if(ve(e)&&qe(e,r)){var n=he(e);return Fn.call(t,n)&&(!e.selectionSet||Bn(e.selectionSet,t[n],r))}return!0})))}function Un(e){return te(e)&&!ae(e)&&!Mt(e)}function zn(e,t){var r=ne(be(e));return{fragmentMap:r,lookupFragment:function(e){var n=r[e];return!n&&t&&(n=t.lookup(e)),n||null}}}var Wn=Object.create(null),Gn=function(){return Wn},Kn=Object.create(null),Yn=function(){function e(e,t){var r=this;this.policies=e,this.group=t,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(e,t){return Pn(ae(e)?r.get(e.__ref,t):e&&e[t])},this.canRead=function(e){return ae(e)?r.has(e.__ref):"object"==typeof e},this.toReference=function(e,t){if("string"==typeof e)return oe(e);if(ae(e))return e;var n=r.policies.identify(e)[0];if(n){var i=oe(n);return t&&r.merge(n,e),i}}}return e.prototype.toObject=function(){return u({},this.data)},e.prototype.has=function(e){return void 0!==this.lookup(e,!0)},e.prototype.get=function(e,t){if(this.group.depend(e,t),Fn.call(this.data,e)){var r=this.data[e];if(r&&Fn.call(r,t))return r[t]}return"__typename"===t&&Fn.call(this.policies.rootTypenamesById,e)?this.policies.rootTypenamesById[e]:this instanceof Xn?this.parent.get(e,t):void 0},e.prototype.lookup=function(e,t){return t&&this.group.depend(e,"__exists"),Fn.call(this.data,e)?this.data[e]:this instanceof Xn?this.parent.lookup(e,t):this.policies.rootTypenamesById[e]?Object.create(null):void 0},e.prototype.merge=function(e,t){var r,n=this;ae(e)&&(e=e.__ref),ae(t)&&(t=t.__ref);var i="string"==typeof e?this.lookup(r=e):e,o="string"==typeof t?this.lookup(r=t):t;if(o){__DEV__?g("string"==typeof r,"store.merge expects a string ID"):g("string"==typeof r,1);var a=new zt(ei).merge(i,o);if(this.data[r]=a,a!==i&&(delete this.refs[r],this.group.caching)){var s=Object.create(null);i||(s.__exists=1),Object.keys(o).forEach((function(e){if(!i||i[e]!==a[e]){s[e]=1;var t=Qn(e);t===e||n.policies.hasKeyArgs(a.__typename,t)||(s[t]=1),void 0!==a[e]||n instanceof Xn||delete a[e]}})),!s.__typename||i&&i.__typename||this.policies.rootTypenamesById[r]!==a.__typename||delete s.__typename,Object.keys(s).forEach((function(e){return n.group.dirty(r,e)}))}}},e.prototype.modify=function(e,t){var r=this,n=this.lookup(e);if(n){var i=Object.create(null),o=!1,a=!0,s={DELETE:Wn,INVALIDATE:Kn,isReference:ae,toReference:this.toReference,canRead:this.canRead,readField:function(t,n){return r.policies.readField("string"==typeof t?{fieldName:t,from:n||oe(e)}:t,{store:r})}};if(Object.keys(n).forEach((function(c){var l=Qn(c),f=n[c];if(void 0!==f){var p="function"==typeof t?t:t[c]||t[l];if(p){var h=p===Gn?Wn:p(Pn(f),u(u({},s),{fieldName:l,storeFieldName:c,storage:r.getStorage(e,c)}));h===Kn?r.group.dirty(e,c):(h===Wn&&(h=void 0),h!==f&&(i[c]=h,o=!0,f=h))}void 0!==f&&(a=!1)}})),o)return this.merge(e,i),a&&(this instanceof Xn?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},e.prototype.delete=function(e,t,r){var n,i=this.lookup(e);if(i){var o=this.getFieldValue(i,"__typename"),a=t&&r?this.policies.getStoreFieldName({typename:o,fieldName:t,args:r}):t;return this.modify(e,a?((n={})[a]=Gn,n):Gn)}return!1},e.prototype.evict=function(e,t){var r=!1;return e.id&&(Fn.call(this.data,e.id)&&(r=this.delete(e.id,e.fieldName,e.args)),this instanceof Xn&&this!==t&&(r=this.parent.evict(e,t)||r),(e.fieldName||r)&&this.group.dirty(e.id,e.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var e=this,t=this.toObject(),r=[];return this.getRootIdSet().forEach((function(t){Fn.call(e.policies.rootTypenamesById,t)||r.push(t)})),r.length&&(t.__META={extraRootIds:r.sort()}),t},e.prototype.replace=function(e){var t=this;if(Object.keys(this.data).forEach((function(r){e&&Fn.call(e,r)||t.delete(r)})),e){var r=e.__META,n=l(e,["__META"]);Object.keys(n).forEach((function(e){t.merge(e,n[e])})),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},e.prototype.release=function(e){if(this.rootIds[e]>0){var t=--this.rootIds[e];return t||delete this.rootIds[e],t}return 0},e.prototype.getRootIdSet=function(e){return void 0===e&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof Xn?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},e.prototype.gc=function(){var e=this,t=this.getRootIdSet(),r=this.toObject();t.forEach((function(n){Fn.call(r,n)&&(Object.keys(e.findChildRefIds(n)).forEach(t.add,t),delete r[n])}));var n=Object.keys(r);if(n.length){for(var i=this;i instanceof Xn;)i=i.parent;n.forEach((function(e){return i.delete(e)}))}return n},e.prototype.findChildRefIds=function(e){if(!Fn.call(this.refs,e)){var t=this.refs[e]=Object.create(null),r=this.data[e];if(!r)return t;var n=new Set([r]);n.forEach((function(e){ae(e)&&(t[e.__ref]=!0),te(e)&&Object.keys(e).forEach((function(t){var r=e[t];te(r)&&n.add(r)}))}))}return this.refs[e]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}(),Hn=function(){function e(e,t){void 0===t&&(t=null),this.caching=e,this.parent=t,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?fn():null,this.keyMaker=new Zt(ze)},e.prototype.depend=function(e,t){if(this.d){this.d(Jn(e,t));var r=Qn(t);r!==t&&this.d(Jn(e,r)),this.parent&&this.parent.depend(e,t)}},e.prototype.dirty=function(e,t){this.d&&this.d.dirty(Jn(e,t),"__exists"===t?"forget":"setDirty")},e}();function Jn(e,t){return t+"#"+e}function $n(e,t){ti(e)&&e.group.depend(t,"__exists")}!function(e){var t=function(e){function t(t){var r=t.policies,n=t.resultCaching,i=void 0===n||n,o=t.seed,a=e.call(this,r,new Hn(i))||this;return a.stump=new Zn(a),a.storageTrie=new Zt(ze),o&&a.replace(o),a}return c(t,e),t.prototype.addLayer=function(e,t){return this.stump.addLayer(e,t)},t.prototype.removeLayer=function(){return this},t.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},t}(e);e.Root=t}(Yn||(Yn={}));var Xn=function(e){function t(t,r,n,i){var o=e.call(this,r.policies,i)||this;return o.id=t,o.parent=r,o.replay=n,o.group=i,n(o),o}return c(t,e),t.prototype.addLayer=function(e,r){return new t(e,this,r,this.group)},t.prototype.removeLayer=function(e){var t=this,r=this.parent.removeLayer(e);return e===this.id?(this.group.caching&&Object.keys(this.data).forEach((function(e){var n=t.data[e],i=r.lookup(e);i?n?n!==i&&Object.keys(n).forEach((function(r){Rt(n[r],i[r])||t.group.dirty(e,r)})):(t.group.dirty(e,"__exists"),Object.keys(i).forEach((function(r){t.group.dirty(e,r)}))):t.delete(e)})),r):r===this.parent?this:r.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return u(u({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(t){var r=this.parent.findChildRefIds(t);return Fn.call(this.data,t)?u(u({},r),e.prototype.findChildRefIds.call(this,t)):r},t.prototype.getStorage=function(){for(var e=this.parent;e.parent;)e=e.parent;return e.getStorage.apply(e,arguments)},t}(Yn),Zn=function(e){function t(t){return e.call(this,"EntityStore.Stump",t,(function(){}),new Hn(t.group.caching,t.group))||this}return c(t,e),t.prototype.removeLayer=function(){return this},t.prototype.merge=function(){return this.parent.merge.apply(this.parent,arguments)},t}(Xn);function ei(e,t,r){var n=e[r],i=t[r];return Rt(n,i)?n:i}function ti(e){return!!(e instanceof Yn&&e.group.caching)}function ri(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var ni=function(){function e(e){var t=this;this.knownResults=new(ze?WeakMap:Map),this.config=Sr(e,{addTypename:!1!==e.addTypename,canonizeResults:Vn(e)}),this.canon=e.canon||new er,this.executeSelectionSet=dn((function(e){var r,n=e.context.canonizeResults,i=ri(e);i[3]=!n;var o=(r=t.executeSelectionSet).peek.apply(r,i);return o?n?u(u({},o),{result:t.canon.admit(o.result)}):o:($n(e.context.store,e.enclosingRef.__ref),t.execSelectionSetImpl(e))}),{max:this.config.resultCacheMaxSize,keyArgs:ri,makeCacheKey:function(e,t,r,n){if(ti(r.store))return r.store.makeCacheKey(e,ae(t)?t.__ref:t,r.varString,n)}}),this.executeSubSelectedArray=dn((function(e){return $n(e.context.store,e.enclosingRef.__ref),t.execSubSelectedArrayImpl(e)}),{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var t=e.field,r=e.array,n=e.context;if(ti(n.store))return n.store.makeCacheKey(t,r,n.varString)}})}return e.prototype.resetCanon=function(){this.canon=new er},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,r=e.query,n=e.rootId,i=void 0===n?"ROOT_QUERY":n,o=e.variables,a=e.returnPartialData,s=void 0===a||a,c=e.canonizeResults,l=void 0===c?this.config.canonizeResults:c,f=this.config.cache.policies;o=u(u({},_e(we(r))),o);var p,h=oe(i),d=this.executeSelectionSet({selectionSet:Ee(r).selectionSet,objectOrReference:h,enclosingRef:h,context:u({store:t,query:r,policies:f,variables:o,varString:tr(o),canonizeResults:l},zn(r,this.config.fragments))});if(d.missing&&(p=[new An(ii(d.missing),d.missing,r,o)],!s))throw p[0];return{result:d.result,complete:!p,missing:p}},e.prototype.isFresh=function(e,t,r,n){if(ti(n.store)&&this.knownResults.get(e)===r){var i=this.executeSelectionSet.peek(r,t,n,this.canon.isKnown(e));if(i&&e===i.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(e){var t=this,r=e.selectionSet,n=e.objectOrReference,i=e.enclosingRef,o=e.context;if(ae(n)&&!o.policies.rootTypenamesById[n.__ref]&&!o.store.has(n.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(n.__ref," object")};var a,s=o.variables,c=o.policies,u=o.store.getFieldValue(n,"__typename"),l=[],f=new zt;function p(e,t){var r;return e.missing&&(a=f.merge(a,((r={})[t]=e.missing,r))),e.result}this.config.addTypename&&"string"==typeof u&&!c.rootIdsByTypename[u]&&l.push({__typename:u});var h=new Set(r.selections);h.forEach((function(e){var r,d;if(qe(e,s))if(ve(e)){var v=c.readField({fieldName:e.name.value,field:e,variables:o.variables,from:n},o),y=he(e);void 0===v?fr.added(e)||(a=f.merge(a,((r={})[y]="Can't find field '".concat(e.name.value,"' on ").concat(ae(n)?n.__ref+" object":"object "+JSON.stringify(n,null,2)),r))):Mt(v)?v=p(t.executeSubSelectedArray({field:e,array:v,enclosingRef:i,context:o}),y):e.selectionSet?null!=v&&(v=p(t.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:v,enclosingRef:ae(v)?v:i,context:o}),y)):o.canonizeResults&&(v=t.canon.pass(v)),void 0!==v&&l.push(((d={})[y]=v,d))}else{var g=ie(e,o.lookupFragment);if(!g&&e.kind===Fe.FRAGMENT_SPREAD)throw __DEV__?new m("No fragment named ".concat(e.name.value)):new m(5);g&&c.fragmentMatches(g,u)&&g.selectionSet.selections.forEach(h.add,h)}}));var d={result:Bt(l),missing:a},v=o.canonizeResults?this.canon.admit(d):Pn(d);return v.result&&this.knownResults.set(v.result,r),v},e.prototype.execSubSelectedArrayImpl=function(e){var t,r=this,n=e.field,i=e.array,o=e.enclosingRef,a=e.context,s=new zt;function c(e,r){var n;return e.missing&&(t=s.merge(t,((n={})[r]=e.missing,n))),e.result}return n.selectionSet&&(i=i.filter(a.store.canRead)),i=i.map((function(e,t){return null===e?null:Mt(e)?c(r.executeSubSelectedArray({field:n,array:e,enclosingRef:o,context:a}),t):n.selectionSet?c(r.executeSelectionSet({selectionSet:n.selectionSet,objectOrReference:e,enclosingRef:ae(e)?e:o,context:a}),t):(__DEV__&&function(e,t,r){if(!t.selectionSet){var n=new Set([r]);n.forEach((function(r){te(r)&&(__DEV__?g(!ae(r),"Missing selection set for object of type ".concat(function(e,t){return ae(t)?e.get(t.__ref,"__typename"):t&&t.__typename}(e,r)," returned for query field ").concat(t.name.value)):g(!ae(r),6),Object.values(r).forEach(n.add,n))}))}}(a.store,n,e),e)})),{result:a.canonizeResults?this.canon.admit(i):i,missing:t}},e}();function ii(e){try{JSON.stringify(e,(function(e,t){if("string"==typeof t)throw t;return t}))}catch(e){return e}}var oi=Object.create(null);function ai(e){var t=JSON.stringify(e);return oi[t]||(oi[t]=Object.create(null))}function si(e){var t=ai(e);return t.keyFieldsFn||(t.keyFieldsFn=function(t,r){var n=function(e,t){return r.readField(t,e)},i=r.keyObject=ui(e,(function(e){var i=pi(r.storeObject,e,n);return void 0===i&&t!==r.storeObject&&Fn.call(t,e[0])&&(i=pi(t,e,fi)),__DEV__?g(void 0!==i,"Missing field '".concat(e.join("."),"' while extracting keyFields from ").concat(JSON.stringify(t))):g(void 0!==i,2),i}));return"".concat(r.typename,":").concat(JSON.stringify(i))})}function ci(e){var t=ai(e);return t.keyArgsFn||(t.keyArgsFn=function(t,r){var n=r.field,i=r.variables,o=r.fieldName,a=ui(e,(function(e){var r=e[0],o=r.charAt(0);if("@"!==o)if("$"!==o){if(t)return pi(t,e)}else{var a=r.slice(1);if(i&&Fn.call(i,a)){var s=e.slice(0);return s[0]=a,pi(i,s)}}else if(n&&Vt(n.directives)){var c=r.slice(1),u=n.directives.find((function(e){return e.name.value===c})),l=u&&pe(u,i);return l&&pi(l,e.slice(1))}})),s=JSON.stringify(a);return(t||"{}"!==s)&&(o+=":"+s),o})}function ui(e,t){var r=new zt;return li(e).reduce((function(e,n){var i,o=t(n);if(void 0!==o){for(var a=n.length-1;a>=0;--a)(i={})[n[a]]=o,o=i;e=r.merge(e,o)}return e}),Object.create(null))}function li(e){var t=ai(e);if(!t.paths){var r=t.paths=[],n=[];e.forEach((function(t,i){Mt(t)?(li(t).forEach((function(e){return r.push(n.concat(e))})),n.length=0):(n.push(t),Mt(e[i+1])||(r.push(n.slice(0)),n.length=0))}))}return t.paths}function fi(e,t){return e[t]}function pi(e,t,r){return r=r||fi,hi(t.reduce((function e(t,n){return Mt(t)?t.map((function(t){return e(t,n)})):t&&r(t,n)}),e))}function hi(e){return te(e)?Mt(e)?e.map(hi):ui(Object.keys(e).sort(),(function(t){return pi(e,t)})):e}function di(e){return void 0!==e.args?e.args:e.field?pe(e.field,e.variables):null}ue.setStringify(tr);var vi=function(){},yi=function(e,t){return t.fieldName},mi=function(e,t,r){return(0,r.mergeObjects)(e,t)},gi=function(e,t){return t},bi=function(){function e(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=u({dataIdFromObject:Ln},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return e.prototype.identify=function(e,t){var r,n=this,i=t&&(t.typename||(null===(r=t.storeObject)||void 0===r?void 0:r.__typename))||e.__typename;if(i===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];for(var o,a=t&&t.storeObject||e,s=u(u({},t),{typename:i,storeObject:a,readField:t&&t.readField||function(){var e=Ei(arguments,a);return n.readField(e,{store:n.cache.data,variables:e.variables})}}),c=i&&this.getTypePolicy(i),l=c&&c.keyFn||this.config.dataIdFromObject;l;){var f=l(e,s);if(!Mt(f)){o=f;break}l=si(f)}return o=o?String(o):void 0,s.keyObject?[o,s.keyObject]:[o]},e.prototype.addTypePolicies=function(e){var t=this;Object.keys(e).forEach((function(r){var n=e[r],i=n.queryType,o=n.mutationType,a=n.subscriptionType,s=l(n,["queryType","mutationType","subscriptionType"]);i&&t.setRootTypename("Query",r),o&&t.setRootTypename("Mutation",r),a&&t.setRootTypename("Subscription",r),Fn.call(t.toBeAdded,r)?t.toBeAdded[r].push(s):t.toBeAdded[r]=[s]}))},e.prototype.updateTypePolicy=function(e,t){var r=this,n=this.getTypePolicy(e),i=t.keyFields,o=t.fields;function a(e,t){e.merge="function"==typeof t?t:!0===t?mi:!1===t?gi:e.merge}a(n,t.merge),n.keyFn=!1===i?vi:Mt(i)?si(i):"function"==typeof i?i:n.keyFn,o&&Object.keys(o).forEach((function(t){var n=r.getFieldPolicy(e,t,!0),i=o[t];if("function"==typeof i)n.read=i;else{var s=i.keyArgs,c=i.read,u=i.merge;n.keyFn=!1===s?yi:Mt(s)?ci(s):"function"==typeof s?s:n.keyFn,"function"==typeof c&&(n.read=c),a(n,u)}n.read&&n.merge&&(n.keyFn=n.keyFn||yi)}))},e.prototype.setRootTypename=function(e,t){void 0===t&&(t=e);var r="ROOT_"+e.toUpperCase(),n=this.rootTypenamesById[r];t!==n&&(__DEV__?g(!n||n===e,"Cannot change root ".concat(e," __typename more than once")):g(!n||n===e,3),n&&delete this.rootIdsByTypename[n],this.rootIdsByTypename[t]=r,this.rootTypenamesById[r]=t)},e.prototype.addPossibleTypes=function(e){var t=this;this.usingPossibleTypes=!0,Object.keys(e).forEach((function(r){t.getSupertypeSet(r,!0),e[r].forEach((function(e){t.getSupertypeSet(e,!0).add(r);var n=e.match(qn);n&&n[0]===e||t.fuzzySubtypes.set(e,new RegExp(e))}))}))},e.prototype.getTypePolicy=function(e){var t=this;if(!Fn.call(this.typePolicies,e)){var r=this.typePolicies[e]=Object.create(null);r.fields=Object.create(null);var n=this.supertypeMap.get(e);n&&n.size&&n.forEach((function(e){var n=t.getTypePolicy(e),i=n.fields,o=l(n,["fields"]);Object.assign(r,o),Object.assign(r.fields,i)}))}var i=this.toBeAdded[e];return i&&i.length&&i.splice(0).forEach((function(r){t.updateTypePolicy(e,r)})),this.typePolicies[e]},e.prototype.getFieldPolicy=function(e,t,r){if(e){var n=this.getTypePolicy(e).fields;return n[t]||r&&(n[t]=Object.create(null))}},e.prototype.getSupertypeSet=function(e,t){var r=this.supertypeMap.get(e);return!r&&t&&this.supertypeMap.set(e,r=new Set),r},e.prototype.fragmentMatches=function(e,t,r,n){var i=this;if(!e.typeCondition)return!0;if(!t)return!1;var o=e.typeCondition.name.value;if(t===o)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(o))for(var a=this.getSupertypeSet(t,!0),s=[a],c=function(e){var t=i.getSupertypeSet(e,!1);t&&t.size&&s.indexOf(t)<0&&s.push(t)},u=!(!r||!this.fuzzySubtypes.size),l=!1,f=0;f<s.length;++f){var p=s[f];if(p.has(o))return a.has(o)||(l&&__DEV__&&g.warn("Inferring subtype ".concat(t," of supertype ").concat(o)),a.add(o)),!0;p.forEach(c),u&&f===s.length-1&&Bn(e.selectionSet,r,n)&&(u=!1,l=!0,this.fuzzySubtypes.forEach((function(e,r){var n=t.match(e);n&&n[0]===t&&c(r)})))}return!1},e.prototype.hasKeyArgs=function(e,t){var r=this.getFieldPolicy(e,t,!1);return!(!r||!r.keyFn)},e.prototype.getStoreFieldName=function(e){var t,r=e.typename,n=e.fieldName,i=this.getFieldPolicy(r,n,!1),o=i&&i.keyFn;if(o&&r)for(var a={typename:r,fieldName:n,field:e.field||null,variables:e.variables},s=di(e);o;){var c=o(s,a);if(!Mt(c)){t=c||n;break}o=ci(c)}return void 0===t&&(t=e.field?function(e,t){var r=null;e.directives&&(r={},e.directives.forEach((function(e){r[e.name.value]={},e.arguments&&e.arguments.forEach((function(n){var i=n.name,o=n.value;return se(r[e.name.value],i,o,t)}))})));var n=null;return e.arguments&&e.arguments.length&&(n={},e.arguments.forEach((function(e){var r=e.name,i=e.value;return se(n,r,i,t)}))),ue(e.name.value,n,r)}(e.field,e.variables):ue(n,di(e))),!1===t?n:n===Qn(t)?t:n+":"+t},e.prototype.readField=function(e,t){var r=e.from;if(r&&(e.field||e.fieldName)){if(void 0===e.typename){var n=t.store.getFieldValue(r,"__typename");n&&(e.typename=n)}var i=this.getStoreFieldName(e),o=Qn(i),a=t.store.getFieldValue(r,i),s=this.getFieldPolicy(e.typename,o,!1),c=s&&s.read;if(c){var u=wi(this,r,e,t,t.store.getStorage(ae(r)?r.__ref:r,i));return vn.withValue(this.cache,c,[a,u])}return a}},e.prototype.getReadFunction=function(e,t){var r=this.getFieldPolicy(e,t,!1);return r&&r.read},e.prototype.getMergeFunction=function(e,t,r){var n=this.getFieldPolicy(e,t,!1),i=n&&n.merge;return!i&&r&&(i=(n=this.getTypePolicy(r))&&n.merge),i},e.prototype.runMergeFunction=function(e,t,r,n,i){var o=r.field,a=r.typename,s=r.merge;return s===mi?_i(n.store)(e,t):s===gi?t:(n.overwrite&&(e=void 0),s(e,t,wi(this,void 0,{typename:a,fieldName:o.name.value,field:o,variables:n.variables},n,i||Object.create(null))))},e}();function wi(e,t,r,n,i){var o=e.getStoreFieldName(r),a=Qn(o),s=r.variables||n.variables,c=n.store,u=c.toReference,l=c.canRead;return{args:di(r),field:r.field||null,fieldName:a,storeFieldName:o,variables:s,isReference:ae,toReference:u,storage:i,cache:e.cache,canRead:l,readField:function(){return e.readField(Ei(arguments,t,s),n)},mergeObjects:_i(n.store)}}function Ei(e,t,r){var n,i,o,a=e[0],s=e[1],c=e.length;return"string"==typeof a?n={fieldName:a,from:c>1?s:t}:(n=u({},a),Fn.call(n,"from")||(n.from=t)),__DEV__&&void 0===n.from&&__DEV__&&g.warn("Undefined 'from' passed to readField with arguments ".concat((i=Array.from(e),o=vr("stringifyForDisplay"),JSON.stringify(i,(function(e,t){return void 0===t?o:t})).split(JSON.stringify(o)).join("<undefined>")))),void 0===n.variables&&(n.variables=r),n}function _i(e){return function(t,r){if(Mt(t)||Mt(r))throw __DEV__?new m("Cannot automatically merge arrays"):new m(4);if(te(t)&&te(r)){var n=e.getFieldValue(t,"__typename"),i=e.getFieldValue(r,"__typename");if(n&&i&&n!==i)return r;if(ae(t)&&Un(r))return e.merge(t.__ref,r),t;if(Un(t)&&ae(r))return e.merge(t,r.__ref),r;if(Un(t)&&Un(r))return u(u({},t),r)}return r}}function Oi(e,t,r){var n="".concat(t).concat(r),i=e.flavors.get(n);return i||e.flavors.set(n,i=e.clientOnly===t&&e.deferred===r?e:u(u({},e),{clientOnly:t,deferred:r})),i}var ki=function(){function e(e,t,r){this.cache=e,this.reader=t,this.fragments=r}return e.prototype.writeToStore=function(e,t){var r=this,n=t.query,i=t.result,o=t.dataId,a=t.variables,s=t.overwrite,c=me(n),l=new zt;a=u(u({},_e(c)),a);var f=u(u({store:e,written:Object.create(null),merge:function(e,t){return l.merge(e,t)},variables:a,varString:tr(a)},zn(n,this.fragments)),{overwrite:!!s,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),p=this.processSelectionSet({result:i||Object.create(null),dataId:o,selectionSet:c.selectionSet,mergeTree:{map:new Map},context:f});if(!ae(p))throw __DEV__?new m("Could not identify object ".concat(JSON.stringify(i))):new m(7);return f.incomingById.forEach((function(t,n){var i=t.storeObject,o=t.mergeTree,a=t.fieldNodeSet,s=oe(n);if(o&&o.map.size){var c=r.applyMerges(o,s,i,f);if(ae(c))return;i=c}if(__DEV__&&!f.overwrite){var u=Object.create(null);a.forEach((function(e){e.selectionSet&&(u[e.name.value]=!0)})),Object.keys(i).forEach((function(e){(function(e){return!0===u[Qn(e)]})(e)&&!function(e){var t=o&&o.map.get(e);return Boolean(t&&t.info&&t.info.merge)}(e)&&function(e,t,r,n){var i=function(e){var t=n.getFieldValue(e,r);return"object"==typeof t&&t},o=i(e);if(o){var a=i(t);if(a&&!ae(o)&&!Rt(o,a)&&!Object.keys(o).every((function(e){return void 0!==n.getFieldValue(a,e)}))){var s=n.getFieldValue(e,"__typename")||n.getFieldValue(t,"__typename"),c=Qn(r),u="".concat(s,".").concat(c);if(!Ii.has(u)){Ii.add(u);var l=[];Mt(o)||Mt(a)||[o,a].forEach((function(e){var t=n.getFieldValue(e,"__typename");"string"!=typeof t||l.includes(t)||l.push(t)})),__DEV__&&g.warn("Cache data may be lost when replacing the ".concat(c," field of a ").concat(s," object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(l.length?"either ensure all objects of type "+l.join(" and ")+" have an ID or a custom merge function, or ":"","define a custom merge function for the ").concat(u," field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(o).slice(0,1e3),"\n  incoming: ").concat(JSON.stringify(a).slice(0,1e3),"\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"))}}}}(s,i,e,f.store)}))}e.merge(n,i)})),e.retain(p.__ref),p},e.prototype.processSelectionSet=function(e){var t=this,r=e.dataId,n=e.result,i=e.selectionSet,o=e.context,a=e.mergeTree,s=this.cache.policies,c=Object.create(null),l=r&&s.rootTypenamesById[r]||de(n,i,o.fragmentMap)||r&&o.store.get(r,"__typename");"string"==typeof l&&(c.__typename=l);var f=function(){var e=Ei(arguments,c,o.variables);if(ae(e.from)){var t=o.incomingById.get(e.from.__ref);if(t){var r=s.readField(u(u({},e),{from:t.storeObject}),o);if(void 0!==r)return r}}return s.readField(e,o)},p=new Set;this.flattenFields(i,n,o,l).forEach((function(e,r){var i,o=he(r),u=n[o];if(p.add(r),void 0!==u){var h=s.getStoreFieldName({typename:l,fieldName:r.name.value,field:r,variables:e.variables}),d=Si(a,h),v=t.processFieldValue(u,r,r.selectionSet?Oi(e,!1,!1):e,d),y=void 0;r.selectionSet&&(ae(v)||Un(v))&&(y=f("__typename",v));var m=s.getMergeFunction(l,r.name.value,y);m?d.info={field:r,typename:l,merge:m}:Di(a,h),c=e.merge(c,((i={})[h]=v,i))}else!__DEV__||e.clientOnly||e.deferred||fr.added(r)||s.getReadFunction(l,r.name.value)||__DEV__&&g.error("Missing field '".concat(he(r),"' while writing result ").concat(JSON.stringify(n,null,2)).substring(0,1e3))}));try{var h=s.identify(n,{typename:l,selectionSet:i,fragmentMap:o.fragmentMap,storeObject:c,readField:f}),d=h[0],v=h[1];r=r||d,v&&(c=o.merge(c,v))}catch(e){if(!r)throw e}if("string"==typeof r){var y=oe(r),m=o.written[r]||(o.written[r]=[]);if(m.indexOf(i)>=0)return y;if(m.push(i),this.reader&&this.reader.isFresh(n,y,i,o))return y;var b=o.incomingById.get(r);return b?(b.storeObject=o.merge(b.storeObject,c),b.mergeTree=Ti(b.mergeTree,a),p.forEach((function(e){return b.fieldNodeSet.add(e)}))):o.incomingById.set(r,{storeObject:c,mergeTree:Ni(a)?void 0:a,fieldNodeSet:p}),y}return c},e.prototype.processFieldValue=function(e,t,r,n){var i=this;return t.selectionSet&&null!==e?Mt(e)?e.map((function(e,o){var a=i.processFieldValue(e,t,r,Si(n,o));return Di(n,o),a})):this.processSelectionSet({result:e,selectionSet:t.selectionSet,context:r,mergeTree:n}):__DEV__?kr(e):e},e.prototype.flattenFields=function(e,t,r,n){void 0===n&&(n=de(t,e,r.fragmentMap));var i=new Map,o=this.cache.policies,a=new Zt(!1);return function e(s,c){var u=a.lookup(s,c.clientOnly,c.deferred);u.visited||(u.visited=!0,s.selections.forEach((function(a){if(qe(a,r.variables)){var s=c.clientOnly,u=c.deferred;if(s&&u||!Vt(a.directives)||a.directives.forEach((function(e){var t=e.name.value;if("client"===t&&(s=!0),"defer"===t){var n=pe(e,r.variables);n&&!1===n.if||(u=!0)}})),ve(a)){var l=i.get(a);l&&(s=s&&l.clientOnly,u=u&&l.deferred),i.set(a,Oi(r,s,u))}else{var f=ie(a,r.lookupFragment);if(!f&&a.kind===Fe.FRAGMENT_SPREAD)throw __DEV__?new m("No fragment named ".concat(a.name.value)):new m(8);f&&o.fragmentMatches(f,n,t,r.variables)&&e(f.selectionSet,Oi(r,s,u))}}})))}(e,r),i},e.prototype.applyMerges=function(e,t,r,n,i){var o,a=this;if(e.map.size&&!ae(r)){var s,c=Mt(r)||!ae(t)&&!Un(t)?void 0:t,l=r;c&&!i&&(i=[ae(c)?c.__ref:c]);var f=function(e,t){return Mt(e)?"number"==typeof t?e[t]:void 0:n.store.getFieldValue(e,String(t))};e.map.forEach((function(e,t){var r=f(c,t),o=f(l,t);if(void 0!==o){i&&i.push(t);var u=a.applyMerges(e,r,o,n,i);u!==o&&(s=s||new Map).set(t,u),i&&g(i.pop()===t)}})),s&&(r=Mt(l)?l.slice(0):u({},l),s.forEach((function(e,t){r[t]=e})))}return e.info?this.cache.policies.runMergeFunction(t,r,e.info,n,i&&(o=n.store).getStorage.apply(o,i)):r},e}(),xi=[];function Si(e,t){var r=e.map;return r.has(t)||r.set(t,xi.pop()||{map:new Map}),r.get(t)}function Ti(e,t){if(e===t||!t||Ni(t))return e;if(!e||Ni(e))return t;var r=e.info&&t.info?u(u({},e.info),t.info):e.info||t.info,n=e.map.size&&t.map.size,i={info:r,map:n?new Map:e.map.size?e.map:t.map};if(n){var o=new Set(t.map.keys());e.map.forEach((function(e,r){i.map.set(r,Ti(e,t.map.get(r))),o.delete(r)})),o.forEach((function(r){i.map.set(r,Ti(t.map.get(r),e.map.get(r)))}))}return i}function Ni(e){return!e||!(e.info||e.map.size)}function Di(e,t){var r=e.map,n=r.get(t);n&&Ni(n)&&(xi.push(n),r.delete(t))}var Ii=new Set,Ci=function(e){function t(t){void 0===t&&(t={});var r=e.call(this)||this;return r.watches=new Set,r.typenameDocumentCache=new Map,r.makeVar=bn,r.txCount=0,r.config=function(e){return Sr(Mn,e)}(t),r.addTypename=!!r.config.addTypename,r.policies=new bi({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return c(t,e),t.prototype.init=function(){var e=this.data=new Yn.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=e.stump,this.resetResultCache()},t.prototype.resetResultCache=function(e){var t=this,r=this.storeReader,n=this.config.fragments;this.storeWriter=new ki(this,this.storeReader=new ni({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:Vn(this.config),canon:e?void 0:r&&r.canon,fragments:n}),n),this.maybeBroadcastWatch=dn((function(e,r){return t.broadcastWatch(e,r)}),{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var r=e.optimistic?t.optimisticData:t.data;if(ti(r)){var n=e.optimistic,i=e.id,o=e.variables;return r.makeCacheKey(e.query,e.callback,tr({optimistic:n,id:i,variables:o}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach((function(e){return e.resetCaching()}))},t.prototype.restore=function(e){return this.init(),e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).extract()},t.prototype.read=function(e){var t=e.returnPartialData,r=void 0!==t&&t;try{return this.storeReader.diffQueryAgainstStore(u(u({},e),{store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:r})).result||null}catch(e){if(e instanceof An)return null;throw e}},t.prototype.write=function(e){try{return++this.txCount,this.storeWriter.writeToStore(this.data,e)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.modify=function(e){if(Fn.call(e,"id")&&!e.id)return!1;var t=e.optimistic?this.optimisticData:this.data;try{return++this.txCount,t.modify(e.id||"ROOT_QUERY",e.fields)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.diff=function(e){return this.storeReader.diffQueryAgainstStore(u(u({},e),{store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(e){var t=this;return this.watches.size||function(e){mn(e).vars.forEach((function(t){return t.attachCache(e)}))}(this),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),function(){t.watches.delete(e)&&!t.watches.size&&gn(t),t.maybeBroadcastWatch.forget(e)}},t.prototype.gc=function(e){tr.reset();var t=this.optimisticData.gc();return e&&!this.txCount&&(e.resetResultCache?this.resetResultCache(e.resetResultIdentities):e.resetResultIdentities&&this.storeReader.resetCanon()),t},t.prototype.retain=function(e,t){return(t?this.optimisticData:this.data).retain(e)},t.prototype.release=function(e,t){return(t?this.optimisticData:this.data).release(e)},t.prototype.identify=function(e){if(ae(e))return e.__ref;try{return this.policies.identify(e)[0]}catch(e){__DEV__&&g.warn(e)}},t.prototype.evict=function(e){if(!e.id){if(Fn.call(e,"id"))return!1;e=u(u({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.reset=function(e){var t=this;return this.init(),tr.reset(),e&&e.discardWatches?(this.watches.forEach((function(e){return t.maybeBroadcastWatch.forget(e)})),this.watches.clear(),gn(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){var t=this.optimisticData.removeLayer(e);t!==this.optimisticData&&(this.optimisticData=t,this.broadcastWatches())},t.prototype.batch=function(e){var t,r=this,n=e.update,i=e.optimistic,o=void 0===i||i,a=e.removeOptimistic,s=e.onWatchUpdated,c=function(e){var i=r,o=i.data,a=i.optimisticData;++r.txCount,e&&(r.data=r.optimisticData=e);try{return t=n(r)}finally{--r.txCount,r.data=o,r.optimisticData=a}},l=new Set;return s&&!this.txCount&&this.broadcastWatches(u(u({},e),{onWatchUpdated:function(e){return l.add(e),!1}})),"string"==typeof o?this.optimisticData=this.optimisticData.addLayer(o,c):!1===o?c(this.data):c(),"string"==typeof a&&(this.optimisticData=this.optimisticData.removeLayer(a)),s&&l.size?(this.broadcastWatches(u(u({},e),{onWatchUpdated:function(e,t){var r=s.call(this,e,t);return!1!==r&&l.delete(e),r}})),l.size&&l.forEach((function(e){return r.maybeBroadcastWatch.dirty(e)}))):this.broadcastWatches(e),t},t.prototype.performTransaction=function(e,t){return this.batch({update:e,optimistic:t||null!==t})},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e);return t||(t=fr(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.transformForLink=function(e){var t=this.config.fragments;return t?t.transform(e):e},t.prototype.broadcastWatches=function(e){var t=this;this.txCount||this.watches.forEach((function(r){return t.maybeBroadcastWatch(r,e)}))},t.prototype.broadcastWatch=function(e,t){var r=e.lastDiff,n=this.diff(e);t&&(e.optimistic&&"string"==typeof t.optimistic&&(n.fromOptimisticTransaction=!0),t.onWatchUpdated&&!1===t.onWatchUpdated.call(this,e,n,r))||r&&Rt(r.result,n.result)||e.callback(e.lastDiff=n,r)},t}(Rn),Ri=Ge?Symbol.for("__APOLLO_CONTEXT__"):"__APOLLO_CONTEXT__";function Ai(){var t=e.createContext[Ri];return t||(Object.defineProperty(e.createContext,Ri,{value:t=e.createContext({}),enumerable:!1,writable:!1,configurable:!0}),t.displayName="ApolloContext"),t}var Pi=function(t){var r=t.client,n=t.children,i=Ai();return e.createElement(i.Consumer,null,(function(t){return void 0===t&&(t={}),r&&t.client!==r&&(t=Object.assign({},t,{client:r})),__DEV__?g(t.client,'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'):g(t.client,29),e.createElement(i.Provider,{value:t},n)}))};const Fi=window.wp.components;var ji,Li=i(817),Mi=i(8636),Vi=i(8318),qi=i(9636),Qi=i(7702),Bi=i(3849),Ui=i(2266),zi=!1,Wi=t.useSyncExternalStore||function(t,r,n){var i=r();__DEV__&&!zi&&i!==r()&&(zi=!0,__DEV__&&g.error("The result of getSnapshot should be cached to avoid an infinite loop"));var o=e.useState({inst:{value:i,getSnapshot:r}}),a=o[0].inst,s=o[1];return Je?e.useLayoutEffect((function(){Object.assign(a,{value:i,getSnapshot:r}),Gi(a)&&s({inst:a})}),[t,i,r]):Object.assign(a,{value:i,getSnapshot:r}),e.useEffect((function(){return Gi(a)&&s({inst:a}),t((function(){Gi(a)&&s({inst:a})}))}),[t]),i};function Gi(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch(e){return!0}}!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(ji||(ji={}));var Ki=new Map;function Yi(e){var t;switch(e){case ji.Query:t="Query";break;case ji.Mutation:t="Mutation";break;case ji.Subscription:t="Subscription"}return t}var Hi=Object.prototype.hasOwnProperty;var Ji=function(){function t(e,t,r){this.client=e,this.query=t,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(We?WeakSet:Set),this.ssrDisabledResult=Pn({loading:!0,data:void 0,error:void 0,networkStatus:wr.loading}),this.skipStandbyResult=Pn({loading:!1,data:void 0,error:void 0,networkStatus:wr.ready}),this.toQueryResultCache=new(ze?WeakMap:Map),function(e,t){var r=function(e){var t,r,n=Ki.get(e);if(n)return n;__DEV__?g(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):g(!!e&&!!e.kind,33);for(var i=[],o=[],a=[],s=[],c=0,u=e.definitions;c<u.length;c++){var l=u[c];if("FragmentDefinition"!==l.kind){if("OperationDefinition"===l.kind)switch(l.operation){case"query":o.push(l);break;case"mutation":a.push(l);break;case"subscription":s.push(l)}}else i.push(l)}__DEV__?g(!i.length||o.length||a.length||s.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):g(!i.length||o.length||a.length||s.length,34),__DEV__?g(o.length+a.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(o.length," queries, ").concat(s.length," ")+"subscriptions and ".concat(a.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):g(o.length+a.length+s.length<=1,35),r=o.length?ji.Query:ji.Mutation,o.length||a.length||(r=ji.Subscription);var f=o.length?o:a.length?a:s;__DEV__?g(1===f.length,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(f.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):g(1===f.length,36);var p=f[0];t=p.variableDefinitions||[];var h={name:p.name&&"Name"===p.name.kind?p.name.value:"data",type:r,variables:t};return Ki.set(e,h),h}(e),n=Yi(t),i=Yi(r.type);__DEV__?g(r.type===t,"Running a ".concat(n," requires a graphql ")+"".concat(n,", but a ").concat(i," was used instead.")):g(r.type===t,37)}(t,ji.Query);var n=r&&r.result,i=n&&n.data;i&&(this.previousData=i)}return t.prototype.forceUpdate=function(){__DEV__&&g.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.asyncUpdate=function(e){var t=this;return new Promise((function(r,n){var i=t.watchQueryOptions,o=function(){t.asyncResolveFns.delete(r),t.optionsToIgnoreOnce.delete(i),e.removeEventListener("abort",o),n(e.reason)};t.asyncResolveFns.add(r),t.optionsToIgnoreOnce.add(i),e.addEventListener("abort",o),t.forceUpdate()}))},t.prototype.useQuery=function(t){var r=this;this.renderPromises=(0,e.useContext)(Ai()).renderPromises,this.useOptions(t);var n=this.useObservableQuery(),i=Wi((0,e.useCallback)((function(){if(r.renderPromises)return function(){};var e=function(){var e=r.result,t=n.getCurrentResult();e&&e.loading===t.loading&&e.networkStatus===t.networkStatus&&Rt(e.data,t.data)||r.setResult(t)},t=function(o){var a=n.last;i.unsubscribe();try{n.resetLastResults(),i=n.subscribe(e,t)}finally{n.last=a}if(!Hi.call(o,"graphQLErrors"))throw o;var s=r.result;(!s||s&&s.loading||!Rt(o,s.error))&&r.setResult({data:s&&s.data,error:o,loading:!1,networkStatus:wr.error})},i=n.subscribe(e,t);return function(){return i.unsubscribe()}}),[n,this.renderPromises,this.client.disableNetworkFetches]),(function(){return r.getCurrentResult()}),(function(){return r.getCurrentResult()}));this.unsafeHandlePartialRefetch(i);var o=this.toQueryResult(i);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(e){return e(o)})),this.asyncResolveFns.clear()),o},t.prototype.useOptions=function(e){var r,n=this.createWatchQueryOptions(this.queryHookOptions=e),i=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(i)&&Rt(n,i)||(this.watchQueryOptions=n,i&&this.observable&&(this.optionsToIgnoreOnce.delete(i),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var e=[],t=this.client.defaultOptions.watchQuery;return t&&e.push(t),this.queryHookOptions.defaultOptions&&e.push(this.queryHookOptions.defaultOptions),e.push(Sr(this.observable&&this.observable.options,this.watchQueryOptions)),e.reduce(Dn)},t.prototype.createWatchQueryOptions=function(e){var t;void 0===e&&(e={});var r=e.skip,n=(e.ssr,e.onCompleted,e.onError,e.defaultOptions,l(e,["skip","ssr","onCompleted","onError","defaultOptions"])),i=Object.assign(n,{query:this.query});if(!this.renderPromises||"network-only"!==i.fetchPolicy&&"cache-and-network"!==i.fetchPolicy||(i.fetchPolicy="cache-first"),i.variables||(i.variables={}),r){var o=i.fetchPolicy,a=void 0===o?this.getDefaultFetchPolicy():o,s=i.initialFetchPolicy,c=void 0===s?a:s;Object.assign(i,{initialFetchPolicy:c,fetchPolicy:"standby"})}else i.fetchPolicy||(i.fetchPolicy=(null===(t=this.observable)||void 0===t?void 0:t.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return i},t.prototype.getDefaultFetchPolicy=function(){var e,t;return(null===(e=this.queryHookOptions.defaultOptions)||void 0===e?void 0:e.fetchPolicy)||(null===(t=this.client.defaultOptions.watchQuery)||void 0===t?void 0:t.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(e){},t.prototype.onError=function(e){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,e.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var r=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&r&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(e){var t=this.result;t&&t.data&&(this.previousData=t.data),this.result=e,this.forceUpdate(),this.handleErrorOrCompleted(e)},t.prototype.handleErrorOrCompleted=function(e){var t=this;if(!e.loading){var r=this.toApolloError(e);Promise.resolve().then((function(){r?t.onError(r):e.data&&t.onCompleted(e.data)})).catch((function(e){__DEV__&&g.warn(e)}))}},t.prototype.toApolloError=function(e){return Vt(e.errors)?new Er({graphQLErrors:e.errors}):e.error},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(e){var t=this.toQueryResultCache.get(e);if(t)return t;var r=e.data,n=(e.partial,l(e,["data","partial"]));return this.toQueryResultCache.set(e,t=u(u(u({data:r},n),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!t.error&&Vt(e.errors)&&(t.error=new Er({graphQLErrors:e.errors})),t},t.prototype.unsafeHandlePartialRefetch=function(e){!e.partial||!this.queryHookOptions.partialRefetch||e.loading||e.data&&0!==Object.keys(e.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(e,{loading:!0,networkStatus:wr.refetch}),this.observable.refetch())},t}(),$i=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function Xi(t,r){var n,i=(0,e.useRef)(new Set),o=(0,e.useRef)(),a=o.current?Dn(r,o.current):r,s=function(t,r){var n=(0,e.useRef)();n.current&&t===n.current.client&&r===n.current.query||(n.current=new Ji(t,r,n.current));var i=n.current,o=(0,e.useState)(0),a=(o[0],o[1]);return i.forceUpdate=function(){a((function(e){return e+1}))},i}(function(t){var r=(0,e.useContext)(Ai()),n=t||r.client;return __DEV__?g(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):g(!!n,32),n}(r&&r.client),null!==(n=null==a?void 0:a.query)&&void 0!==n?n:t),c=s.useQuery(u(u({},a),{skip:!o.current})),l=c.observable.options.initialFetchPolicy||s.getDefaultFetchPolicy(),f=Object.assign(c,{called:!!o.current}),p=(0,e.useMemo)((function(){for(var e={},t=function(t){var r=f[t];e[t]=function(){return o.current||(o.current=Object.create(null),s.forceUpdate()),r.apply(this,arguments)}},r=0,n=$i;r<n.length;r++)t(n[r]);return e}),[]);return Object.assign(f,p),(0,e.useEffect)((function(){return function(){i.current.forEach((function(e){e.abort()}))}}),[]),[(0,e.useCallback)((function(e){var t=new AbortController;i.current.add(t),o.current=e?u(u({},e),{fetchPolicy:e.fetchPolicy||l}):{fetchPolicy:l};var r=s.asyncUpdate(t.signal).then((function(e){return i.current.delete(t),Object.assign(e,p)}));return r.catch((function(){i.current.delete(t)})),r}),[]),f]}function Zi(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const eo=/\r\n|[\n\r]/g;function to(e,t){let r=0,n=1;for(const i of e.body.matchAll(eo)){if("number"==typeof i.index||Zi(!1),i.index>=t)break;r=i.index+i[0].length,n+=1}return{line:n,column:t+1-r}}function ro(e,t){const r=e.locationOffset.column-1,n="".padStart(r)+e.body,i=t.line-1,o=e.locationOffset.line-1,a=t.line+o,s=1===t.line?r:0,c=t.column+s,u=`${e.name}:${a}:${c}\n`,l=n.split(/\r\n|[\n\r]/g),f=l[i];if(f.length>120){const e=Math.floor(c/80),t=c%80,r=[];for(let e=0;e<f.length;e+=80)r.push(f.slice(e,e+80));return u+no([[`${a} |`,r[0]],...r.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",r[e+1]]])}return u+no([[a-1+" |",l[i-1]],[`${a} |`,f],["|","^".padStart(c)],[`${a+1} |`,l[i+1]]])}function no(e){const t=e.filter((([e,t])=>void 0!==t)),r=Math.max(...t.map((([e])=>e.length)));return t.map((([e,t])=>e.padStart(r)+(t?" "+t:""))).join("\n")}class io extends Error{constructor(e,...t){var r,n,i;const{nodes:o,source:a,positions:s,path:c,originalError:u,extensions:l}=function(e){const t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=c?c:void 0,this.originalError=null!=u?u:void 0,this.nodes=oo(Array.isArray(o)?o:o?[o]:void 0);const f=oo(null===(r=this.nodes)||void 0===r?void 0:r.map((e=>e.loc)).filter((e=>null!=e)));this.source=null!=a?a:null==f||null===(n=f[0])||void 0===n?void 0:n.source,this.positions=null!=s?s:null==f?void 0:f.map((e=>e.start)),this.locations=s&&a?s.map((e=>to(a,e))):null==f?void 0:f.map((e=>to(e.source,e.start)));const p="object"==typeof(h=null==u?void 0:u.extensions)&&null!==h?null==u?void 0:u.extensions:void 0;var h;this.extensions=null!==(i=null!=l?l:p)&&void 0!==i?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=u&&u.stack?Object.defineProperty(this,"stack",{value:u.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,io):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(e+="\n\n"+ro((t=r.loc).source,to(t.source,t.start)));else if(this.source&&this.locations)for(const t of this.locations)e+="\n\n"+ro(this.source,t);var t;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function oo(e){return void 0===e||0===e.length?void 0:e}function ao(e,t,r){return new io(`Syntax Error: ${r}`,{source:e,positions:[t]})}var so,co,uo;!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(so||(so={})),(uo=co||(co={})).SOF="<SOF>",uo.EOF="<EOF>",uo.BANG="!",uo.DOLLAR="$",uo.AMP="&",uo.PAREN_L="(",uo.PAREN_R=")",uo.SPREAD="...",uo.COLON=":",uo.EQUALS="=",uo.AT="@",uo.BRACKET_L="[",uo.BRACKET_R="]",uo.BRACE_L="{",uo.PIPE="|",uo.BRACE_R="}",uo.NAME="Name",uo.INT="Int",uo.FLOAT="Float",uo.STRING="String",uo.BLOCK_STRING="BlockString",uo.COMMENT="Comment";class lo{constructor(e){const t=new Ie(co.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==co.EOF)do{if(e.next)e=e.next;else{const t=go(this,e.end);e.next=t,t.prev=e,e=t}}while(e.kind===co.COMMENT);return e}}function fo(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function po(e,t){return ho(e.charCodeAt(t))&&vo(e.charCodeAt(t+1))}function ho(e){return e>=55296&&e<=56319}function vo(e){return e>=56320&&e<=57343}function yo(e,t){const r=e.source.body.codePointAt(t);if(void 0===r)return co.EOF;if(r>=32&&r<=126){const e=String.fromCodePoint(r);return'"'===e?"'\"'":`"${e}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function mo(e,t,r,n,i){const o=e.line,a=1+r-e.lineStart;return new Ie(t,r,n,o,a,i)}function go(e,t){const r=e.source.body,n=r.length;let i=t;for(;i<n;){const t=r.charCodeAt(i);switch(t){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:10===r.charCodeAt(i+1)?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return bo(e,i);case 33:return mo(e,co.BANG,i,i+1);case 36:return mo(e,co.DOLLAR,i,i+1);case 38:return mo(e,co.AMP,i,i+1);case 40:return mo(e,co.PAREN_L,i,i+1);case 41:return mo(e,co.PAREN_R,i,i+1);case 46:if(46===r.charCodeAt(i+1)&&46===r.charCodeAt(i+2))return mo(e,co.SPREAD,i,i+3);break;case 58:return mo(e,co.COLON,i,i+1);case 61:return mo(e,co.EQUALS,i,i+1);case 64:return mo(e,co.AT,i,i+1);case 91:return mo(e,co.BRACKET_L,i,i+1);case 93:return mo(e,co.BRACKET_R,i,i+1);case 123:return mo(e,co.BRACE_L,i,i+1);case 124:return mo(e,co.PIPE,i,i+1);case 125:return mo(e,co.BRACE_R,i,i+1);case 34:return 34===r.charCodeAt(i+1)&&34===r.charCodeAt(i+2)?No(e,i):_o(e,i)}if(ot(t)||45===t)return wo(e,i,t);if(st(t))return Do(e,i);throw ao(e.source,i,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":fo(t)||po(r,i)?`Unexpected character: ${yo(e,i)}.`:`Invalid character: ${yo(e,i)}.`)}return mo(e,co.EOF,n,n)}function bo(e,t){const r=e.source.body,n=r.length;let i=t+1;for(;i<n;){const e=r.charCodeAt(i);if(10===e||13===e)break;if(fo(e))++i;else{if(!po(r,i))break;i+=2}}return mo(e,co.COMMENT,t,i,r.slice(t+1,i))}function wo(e,t,r){const n=e.source.body;let i=t,o=r,a=!1;if(45===o&&(o=n.charCodeAt(++i)),48===o){if(o=n.charCodeAt(++i),ot(o))throw ao(e.source,i,`Invalid number, unexpected digit after 0: ${yo(e,i)}.`)}else i=Eo(e,i,o),o=n.charCodeAt(i);if(46===o&&(a=!0,o=n.charCodeAt(++i),i=Eo(e,i,o),o=n.charCodeAt(i)),69!==o&&101!==o||(a=!0,o=n.charCodeAt(++i),43!==o&&45!==o||(o=n.charCodeAt(++i)),i=Eo(e,i,o),o=n.charCodeAt(i)),46===o||st(o))throw ao(e.source,i,`Invalid number, expected digit but got: ${yo(e,i)}.`);return mo(e,a?co.FLOAT:co.INT,t,i,n.slice(t,i))}function Eo(e,t,r){if(!ot(r))throw ao(e.source,t,`Invalid number, expected digit but got: ${yo(e,t)}.`);const n=e.source.body;let i=t+1;for(;ot(n.charCodeAt(i));)++i;return i}function _o(e,t){const r=e.source.body,n=r.length;let i=t+1,o=i,a="";for(;i<n;){const n=r.charCodeAt(i);if(34===n)return a+=r.slice(o,i),mo(e,co.STRING,t,i+1,a);if(92!==n){if(10===n||13===n)break;if(fo(n))++i;else{if(!po(r,i))throw ao(e.source,i,`Invalid character within String: ${yo(e,i)}.`);i+=2}}else{a+=r.slice(o,i);const t=117===r.charCodeAt(i+1)?123===r.charCodeAt(i+2)?Oo(e,i):ko(e,i):To(e,i);a+=t.value,i+=t.size,o=i}}throw ao(e.source,i,"Unterminated string.")}function Oo(e,t){const r=e.source.body;let n=0,i=3;for(;i<12;){const e=r.charCodeAt(t+i++);if(125===e){if(i<5||!fo(n))break;return{value:String.fromCodePoint(n),size:i}}if(n=n<<4|So(e),n<0)break}throw ao(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+i)}".`)}function ko(e,t){const r=e.source.body,n=xo(r,t+2);if(fo(n))return{value:String.fromCodePoint(n),size:6};if(ho(n)&&92===r.charCodeAt(t+6)&&117===r.charCodeAt(t+7)){const e=xo(r,t+8);if(vo(e))return{value:String.fromCodePoint(n,e),size:12}}throw ao(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function xo(e,t){return So(e.charCodeAt(t))<<12|So(e.charCodeAt(t+1))<<8|So(e.charCodeAt(t+2))<<4|So(e.charCodeAt(t+3))}function So(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function To(e,t){const r=e.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw ao(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function No(e,t){const r=e.source.body,n=r.length;let i=e.lineStart,o=t+3,a=o,s="";const c=[];for(;o<n;){const n=r.charCodeAt(o);if(34===n&&34===r.charCodeAt(o+1)&&34===r.charCodeAt(o+2)){s+=r.slice(a,o),c.push(s);const n=mo(e,co.BLOCK_STRING,t,o+3,ct(c).join("\n"));return e.line+=c.length-1,e.lineStart=i,n}if(92!==n||34!==r.charCodeAt(o+1)||34!==r.charCodeAt(o+2)||34!==r.charCodeAt(o+3))if(10!==n&&13!==n)if(fo(n))++o;else{if(!po(r,o))throw ao(e.source,o,`Invalid character within String: ${yo(e,o)}.`);o+=2}else s+=r.slice(a,o),c.push(s),13===n&&10===r.charCodeAt(o+1)?o+=2:++o,s="",a=o,i=o;else s+=r.slice(a,o),a=o+1,o+=4}throw ao(e.source,o,"Unterminated string.")}function Do(e,t){const r=e.source.body,n=r.length;let i=t+1;for(;i<n&&(at(o=r.charCodeAt(i))||ot(o)||95===o);)++i;var o;return mo(e,co.NAME,t,i,r.slice(t,i))}class Io{constructor(e,t={}){const r=function(e){return R(e,A)}(e)?e:new A(e);this._lexer=new lo(r),this._options=t,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const e=this.expectToken(co.NAME);return this.node(e,{kind:Fe.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:Fe.DOCUMENT,definitions:this.many(co.SOF,this.parseDefinition,co.EOF)})}parseDefinition(){if(this.peek(co.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===co.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw ao(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(co.BRACE_L))return this.node(e,{kind:Fe.OPERATION_DEFINITION,operation:Pe.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let r;return this.peek(co.NAME)&&(r=this.parseName()),this.node(e,{kind:Fe.OPERATION_DEFINITION,operation:t,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(co.NAME);switch(e.value){case"query":return Pe.QUERY;case"mutation":return Pe.MUTATION;case"subscription":return Pe.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(co.PAREN_L,this.parseVariableDefinition,co.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:Fe.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(co.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(co.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(co.DOLLAR),this.node(e,{kind:Fe.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:Fe.SELECTION_SET,selections:this.many(co.BRACE_L,this.parseSelection,co.BRACE_R)})}parseSelection(){return this.peek(co.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let r,n;return this.expectOptionalToken(co.COLON)?(r=t,n=this.parseName()):n=t,this.node(e,{kind:Fe.FIELD,alias:r,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(co.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(co.PAREN_L,t,co.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,r=this.parseName();return this.expectToken(co.COLON),this.node(t,{kind:Fe.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(co.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(co.NAME)?this.node(e,{kind:Fe.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:Fe.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables?this.node(e,{kind:Fe.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:Fe.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case co.BRACKET_L:return this.parseList(e);case co.BRACE_L:return this.parseObject(e);case co.INT:return this.advanceLexer(),this.node(t,{kind:Fe.INT,value:t.value});case co.FLOAT:return this.advanceLexer(),this.node(t,{kind:Fe.FLOAT,value:t.value});case co.STRING:case co.BLOCK_STRING:return this.parseStringLiteral();case co.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:Fe.BOOLEAN,value:!0});case"false":return this.node(t,{kind:Fe.BOOLEAN,value:!1});case"null":return this.node(t,{kind:Fe.NULL});default:return this.node(t,{kind:Fe.ENUM,value:t.value})}case co.DOLLAR:if(e){if(this.expectToken(co.DOLLAR),this._lexer.token.kind===co.NAME){const e=this._lexer.token.value;throw ao(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:Fe.STRING,value:e.value,block:e.kind===co.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:Fe.LIST,values:this.any(co.BRACKET_L,(()=>this.parseValueLiteral(e)),co.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:Fe.OBJECT,fields:this.any(co.BRACE_L,(()=>this.parseObjectField(e)),co.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,r=this.parseName();return this.expectToken(co.COLON),this.node(t,{kind:Fe.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(co.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(co.AT),this.node(t,{kind:Fe.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(co.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(co.BRACKET_R),t=this.node(e,{kind:Fe.LIST_TYPE,type:r})}else t=this.parseNamedType();return this.expectOptionalToken(co.BANG)?this.node(e,{kind:Fe.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:Fe.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(co.STRING)||this.peek(co.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),n=this.many(co.BRACE_L,this.parseOperationTypeDefinition,co.BRACE_R);return this.node(e,{kind:Fe.SCHEMA_DEFINITION,description:t,directives:r,operationTypes:n})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(co.COLON);const r=this.parseNamedType();return this.node(e,{kind:Fe.OPERATION_TYPE_DEFINITION,operation:t,type:r})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),n=this.parseConstDirectives();return this.node(e,{kind:Fe.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:n})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:Fe.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:i,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(co.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(co.BRACE_L,this.parseFieldDefinition,co.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseName(),n=this.parseArgumentDefs();this.expectToken(co.COLON);const i=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(e,{kind:Fe.FIELD_DEFINITION,description:t,name:r,arguments:n,type:i,directives:o})}parseArgumentDefs(){return this.optionalMany(co.PAREN_L,this.parseInputValueDef,co.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseName();this.expectToken(co.COLON);const n=this.parseTypeReference();let i;this.expectOptionalToken(co.EQUALS)&&(i=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(e,{kind:Fe.INPUT_VALUE_DEFINITION,description:t,name:r,type:n,defaultValue:i,directives:o})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:Fe.INTERFACE_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:i,fields:o})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(e,{kind:Fe.UNION_TYPE_DEFINITION,description:t,name:r,directives:n,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(co.EQUALS)?this.delimitedMany(co.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(e,{kind:Fe.ENUM_TYPE_DEFINITION,description:t,name:r,directives:n,values:i})}parseEnumValuesDefinition(){return this.optionalMany(co.BRACE_L,this.parseEnumValueDefinition,co.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(e,{kind:Fe.ENUM_VALUE_DEFINITION,description:t,name:r,directives:n})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw ao(this._lexer.source,this._lexer.token.start,`${Co(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(e,{kind:Fe.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:n,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(co.BRACE_L,this.parseInputValueDef,co.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===co.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),r=this.optionalMany(co.BRACE_L,this.parseOperationTypeDefinition,co.BRACE_R);if(0===t.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:Fe.SCHEMA_EXTENSION,directives:t,operationTypes:r})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),r=this.parseConstDirectives();if(0===r.length)throw this.unexpected();return this.node(e,{kind:Fe.SCALAR_TYPE_EXTENSION,name:t,directives:r})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===r.length&&0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:Fe.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:i})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===r.length&&0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:Fe.INTERFACE_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:i})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:Fe.UNION_TYPE_EXTENSION,name:t,directives:r,types:n})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:Fe.ENUM_TYPE_EXTENSION,name:t,directives:r,values:n})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:Fe.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:n})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(co.AT);const r=this.parseName(),n=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(e,{kind:Fe.DIRECTIVE_DEFINITION,description:t,name:r,arguments:n,repeatable:i,locations:o})}parseDirectiveLocations(){return this.delimitedMany(co.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(so,t.value))return t;throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new De(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw ao(this._lexer.source,t.start,`Expected ${Ro(e)}, found ${Co(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){const t=this._lexer.token;if(t.kind!==co.NAME||t.value!==e)throw ao(this._lexer.source,t.start,`Expected "${e}", found ${Co(t)}.`);this.advanceLexer()}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===co.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){const t=null!=e?e:this._lexer.token;return ao(this._lexer.source,t.start,`Unexpected ${Co(t)}.`)}any(e,t,r){this.expectToken(e);const n=[];for(;!this.expectOptionalToken(r);)n.push(t.call(this));return n}optionalMany(e,t,r){if(this.expectOptionalToken(e)){const e=[];do{e.push(t.call(this))}while(!this.expectOptionalToken(r));return e}return[]}many(e,t,r){this.expectToken(e);const n=[];do{n.push(t.call(this))}while(!this.expectOptionalToken(r));return n}delimitedMany(e,t){this.expectOptionalToken(e);const r=[];do{r.push(t.call(this))}while(this.expectOptionalToken(e));return r}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(t.kind!==co.EOF&&(++this._tokenCounter,void 0!==e&&this._tokenCounter>e))throw ao(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function Co(e){const t=e.value;return Ro(e.kind)+(null!=t?` "${t}"`:"")}function Ro(e){return function(e){return e===co.BANG||e===co.DOLLAR||e===co.AMP||e===co.PAREN_L||e===co.PAREN_R||e===co.SPREAD||e===co.COLON||e===co.EQUALS||e===co.AT||e===co.BRACKET_L||e===co.BRACKET_R||e===co.BRACE_L||e===co.PIPE||e===co.BRACE_R}(e)?`"${e}"`:e}var Ao=new Map,Po=new Map,Fo=!0,jo=!1;function Lo(e){return e.replace(/[\s,]+/g," ").trim()}function Mo(e){var t,r,n,i=Lo(e);if(!Ao.has(i)){var o=function(e,t){const r=new Io(e,t),n=r.parseDocument();return Object.defineProperty(n,"tokenCount",{enumerable:!1,value:r.tokenCount}),n}(e,{experimentalFragmentVariables:jo,allowLegacyFragmentVariables:jo});if(!o||"Document"!==o.kind)throw new Error("Not a valid GraphQL document.");Ao.set(i,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(r){var n=e[r];n&&"object"==typeof n&&t.add(n)}))}));var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}((t=o,r=new Set,n=[],t.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var t=e.name.value,i=Lo((a=e.loc).source.body.substring(a.start,a.end)),o=Po.get(t);o&&!o.has(i)?Fo&&console.warn("Warning: fragment with name "+t+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):o||Po.set(t,o=new Set),o.add(i),r.has(i)||(r.add(i),n.push(e))}else n.push(e);var a})),u(u({},t),{definitions:n}))))}return Ao.get(i)}function Vo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];"string"==typeof e&&(e=[e]);var n=e[0];return t.forEach((function(t,r){t&&"Document"===t.kind?n+=t.loc.source.body:n+=t,n+=e[r+1]})),Mo(n)}var qo,Qo=Vo;(qo=Vo||(Vo={})).gql=Qo,qo.resetCaches=function(){Ao.clear(),Po.clear()},qo.disableFragmentWarnings=function(){Fo=!1},qo.enableExperimentalFragmentVariables=function(){jo=!0},qo.disableExperimentalFragmentVariables=function(){jo=!1},Vo.default=Vo;const Bo=Vo`
=======
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@heroicons/react/24/outline/ArrowDownOnSquareIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/ArrowDownOnSquareIcon.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function ArrowDownOnSquareIcon({
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
    d: "M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
  }));
}

const ForwardRef = React.forwardRef(ArrowDownOnSquareIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/ArrowTopRightOnSquareIcon.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/ArrowTopRightOnSquareIcon.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function ArrowTopRightOnSquareIcon({
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
    d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
  }));
}

const ForwardRef = React.forwardRef(ArrowTopRightOnSquareIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/ArrowUpRightIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/ArrowUpRightIcon.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function ArrowUpRightIcon({
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
    d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
  }));
}

const ForwardRef = React.forwardRef(ArrowUpRightIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/CheckIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/CheckIcon.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function CheckIcon({
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
    d: "M4.5 12.75l6 6 9-13.5"
  }));
}

const ForwardRef = React.forwardRef(CheckIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/ClipboardIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/ClipboardIcon.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function ClipboardIcon({
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
    d: "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
  }));
}

const ForwardRef = React.forwardRef(ClipboardIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/LightBulbIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/LightBulbIcon.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function LightBulbIcon({
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
    d: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
  }));
}

const ForwardRef = React.forwardRef(LightBulbIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/LinkIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/LinkIcon.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function LinkIcon({
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
    d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
  }));
}

const ForwardRef = React.forwardRef(LinkIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@wry/context/lib/context.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@wry/context/lib/context.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slot": () => (/* binding */ Slot),
/* harmony export */   "asyncFromGen": () => (/* binding */ asyncFromGen),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "noContext": () => (/* binding */ noContext),
/* harmony export */   "setTimeout": () => (/* binding */ setTimeoutWithContext),
/* harmony export */   "wrapYieldingFiberMethods": () => (/* binding */ wrapYieldingFiberMethods)
/* harmony export */ });
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
var MISSING_VALUE = {};
var idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
var makeSlotClass = function () { return /** @class */ (function () {
    function Slot() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = [
            "slot",
            idCounter++,
            Date.now(),
            Math.random().toString(36).slice(2),
        ].join(":");
    }
    Slot.prototype.hasValue = function () {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
            // We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE)
                    break;
                if (context_1 !== currentContext) {
                    // Cache the value in currentContext.slots so the next lookup will
                    // be faster. This caching is safe because the tree of contexts and
                    // the values of the slots are logically immutable.
                    currentContext.slots[this.id] = value;
                }
                return true;
            }
        }
        if (currentContext) {
            // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
    };
    Slot.prototype.getValue = function () {
        if (this.hasValue()) {
            return currentContext.slots[this.id];
        }
    };
    Slot.prototype.withValue = function (value, callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        var _a;
        var slots = (_a = {
                __proto__: null
            },
            _a[this.id] = value,
            _a);
        var parent = currentContext;
        currentContext = { parent: parent, slots: slots };
        try {
            // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.
            return callback.apply(thisArg, args);
        }
        finally {
            currentContext = parent;
        }
    };
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    Slot.bind = function (callback) {
        var context = currentContext;
        return function () {
            var saved = currentContext;
            try {
                currentContext = context;
                return callback.apply(this, arguments);
            }
            finally {
                currentContext = saved;
            }
        };
    };
    // Immediately run a callback function without any captured context.
    Slot.noContext = function (callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        if (currentContext) {
            var saved = currentContext;
            try {
                currentContext = null;
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            }
            finally {
                currentContext = saved;
            }
        }
        else {
            return callback.apply(thisArg, args);
        }
    };
    return Slot;
}()); };
function maybe(fn) {
    try {
        return fn();
    }
    catch (ignored) { }
}
// We store a single global implementation of the Slot class as a permanent
// non-enumerable property of the globalThis object. This obfuscation does
// nothing to prevent access to the Slot class, but at least it ensures the
// implementation (i.e. currentContext) cannot be tampered with, and all copies
// of the @wry/context package (hopefully just one) will share the same Slot
// implementation. Since the first copy of the @wry/context package to be
// imported wins, this technique imposes a steep cost for any future breaking
// changes to the Slot class.
var globalKey = "@wry/context:Slot";
var host = 
// Prefer globalThis when available.
// https://github.com/benjamn/wryware/issues/347
maybe(function () { return globalThis; }) ||
    // Fall back to global, which works in Node.js and may be converted by some
    // bundlers to the appropriate identifier (window, self, ...) depending on the
    // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
    maybe(function () { return __webpack_require__.g; }) ||
    // Otherwise, use a dummy host that's local to this module. We used to fall
    // back to using the Array constructor as a namespace, but that was flagged in
    // https://github.com/benjamn/wryware/issues/347, and can be avoided.
    Object.create(null);
// Whichever globalHost we're using, make TypeScript happy about the additional
// globalKey property.
var globalHost = host;
var Slot = globalHost[globalKey] ||
    // Earlier versions of this package stored the globalKey property on the Array
    // constructor, so we check there as well, to prevent Slot class duplication.
    Array[globalKey] ||
    (function (Slot) {
        try {
            Object.defineProperty(globalHost, globalKey, {
                value: Slot,
                enumerable: false,
                writable: false,
                // When it was possible for globalHost to be the Array constructor (a
                // legacy Slot dedup strategy), it was important for the property to be
                // configurable:true so it could be deleted. That does not seem to be as
                // important when globalHost is the global object, but I don't want to
                // cause similar problems again, and configurable:true seems safest.
                // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
                configurable: true
            });
        }
        finally {
            return Slot;
        }
    })(makeSlotClass());

var bind = Slot.bind, noContext = Slot.noContext;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function () {
        var gen = genFn.apply(this, arguments);
        var boundNext = bind(gen.next);
        var boundThrow = bind(gen.throw);
        return new Promise(function (resolve, reject) {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                }
                catch (error) {
                    return reject(error);
                }
                var next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) {
                    result.value.then(next, result.done ? reject : invokeThrow);
                }
                else {
                    next(result.value);
                }
            }
            var invokeNext = function (value) { return invoke(boundNext, value); };
            var invokeThrow = function (error) { return invoke(boundThrow, error); };
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
var wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        var wrap = function (obj, method) {
            var fn = obj[method];
            obj[method] = function () {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}


//# sourceMappingURL=context.esm.js.map


/***/ }),

/***/ "./node_modules/@wry/equality/lib/equality.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@wry/equality/lib/equality.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ equal),
/* harmony export */   "equal": () => (/* binding */ equal)
/* harmony export */ });
var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */
function equal(a, b) {
    try {
        return check(a, b);
    }
    finally {
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length)
                return false;
        // Fall through to object case...
        case '[object Object]': {
            if (previouslyCompared(a, b))
                return true;
            var aKeys = definedKeys(a);
            var bKeys = definedKeys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length)
                return false;
            // Now make sure they have the same keys.
            for (var k = 0; k < keyCount; ++k) {
                if (!hasOwnProperty.call(b, aKeys[k])) {
                    return false;
                }
            }
            // Finally, check deep equality of all child properties.
            for (var k = 0; k < keyCount; ++k) {
                var key = aKeys[k];
                if (!check(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a)
                return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "".concat(b);
        case '[object Map]':
        case '[object Set]': {
            if (a.size !== b.size)
                return false;
            if (previouslyCompared(a, b))
                return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while (true) {
                var info = aIterator.next();
                if (info.done)
                    break;
                // If a instanceof Set, aValue === aKey.
                var _a = info.value, aKey = _a[0], aValue = _a[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) {
                    return false;
                }
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) {
                    return false;
                }
            }
            return true;
        }
        case '[object Uint16Array]':
        case '[object Uint8Array]': // Buffer, in Node.js.
        case '[object Uint32Array]':
        case '[object Int32Array]':
        case '[object Int8Array]':
        case '[object Int16Array]':
        case '[object ArrayBuffer]':
            // DataView doesn't need these conversions, but the equality check is
            // otherwise the same.
            a = new Uint8Array(a);
            b = new Uint8Array(b);
        // Fall through...
        case '[object DataView]': {
            var len = a.byteLength;
            if (len === b.byteLength) {
                while (len-- && a[len] === b[len]) {
                    // Keep looping as long as the bytes are equal.
                }
            }
            return len === -1;
        }
        case '[object AsyncFunction]':
        case '[object GeneratorFunction]':
        case '[object AsyncGeneratorFunction]':
        case '[object Function]': {
            var aCode = fnToStr.call(a);
            if (aCode !== fnToStr.call(b)) {
                return false;
            }
            // We consider non-native functions equal if they have the same code
            // (native functions require === because their code is censored).
            // Note that this behavior is not entirely sound, since !== function
            // objects with the same code can behave differently depending on
            // their closure scope. However, any function can behave differently
            // depending on the values of its input arguments (including this)
            // and its calling context (including its closure scope), even
            // though the function object is === to itself; and it is entirely
            // possible for functions that are not === to behave exactly the
            // same under all conceivable circumstances. Because none of these
            // factors are statically decidable in JavaScript, JS function
            // equality is not well-defined. This ambiguity allows us to
            // consider the best possible heuristic among various imperfect
            // options, and equating non-native functions that have the same
            // code has enormous practical benefits, such as when comparing
            // functions that are repeatedly passed as fresh function
            // expressions within objects that are otherwise deeply equal. Since
            // any function created from the same syntactic expression (in the
            // same code location) will always stringify to the same code
            // according to fnToStr.call, we can reasonably expect these
            // repeatedly passed function expressions to have the same code, and
            // thus behave "the same" (with all the caveats mentioned above),
            // even though the runtime function objects are !== to one another.
            return !endsWith(aCode, nativeCodeSuffix);
        }
    }
    // Otherwise the values are not equal.
    return false;
}
function definedKeys(obj) {
    // Remember that the second argument to Array.prototype.filter will be
    // used as `this` within the callback function.
    return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
    return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
    var fromIndex = full.length - suffix.length;
    return fromIndex >= 0 &&
        full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b))
            return true;
    }
    else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}


//# sourceMappingURL=equality.esm.js.map


/***/ }),

/***/ "./node_modules/@wry/trie/lib/trie.esm.js":
/*!************************************************!*\
  !*** ./node_modules/@wry/trie/lib/trie.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trie": () => (/* binding */ Trie)
/* harmony export */ });
// A [trie](https://en.wikipedia.org/wiki/Trie) data structure that holds
// object keys weakly, yet can also hold non-object keys, unlike the
// native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// null-prototype Object.
var defaultMakeData = function () { return Object.create(null); };
// Useful for processing arguments objects as well as arrays.
var _a = Array.prototype, forEach = _a.forEach, slice = _a.slice;
var Trie = /** @class */ (function () {
    function Trie(weakness, makeData) {
        if (weakness === void 0) { weakness = true; }
        if (makeData === void 0) { makeData = defaultMakeData; }
        this.weakness = weakness;
        this.makeData = makeData;
    }
    Trie.prototype.lookup = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return this.lookupArray(array);
    };
    Trie.prototype.lookupArray = function (array) {
        var node = this;
        forEach.call(array, function (key) { return node = node.getChildTrie(key); });
        return node.data || (node.data = this.makeData(slice.call(array)));
    };
    Trie.prototype.getChildTrie = function (key) {
        var map = this.weakness && isObjRef(key)
            ? this.weak || (this.weak = new WeakMap())
            : this.strong || (this.strong = new Map());
        var child = map.get(key);
        if (!child)
            map.set(key, child = new Trie(this.weakness, this.makeData));
        return child;
    };
    return Trie;
}());
function isObjRef(value) {
    switch (typeof value) {
        case "object":
            if (value === null)
                break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}


//# sourceMappingURL=trie.esm.js.map


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

/***/ "./src/____toolbar-patterns/App.tsx":
/*!******************************************!*\
  !*** ./src/____toolbar-patterns/App.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/ApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/context/ApolloProvider.js");
/* harmony import */ var _HeaderToolBarPatterns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderToolBarPatterns */ "./src/____toolbar-patterns/HeaderToolBarPatterns.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/____toolbar-patterns/editor.scss");






const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({
  uri: "https://woostifyblocks.com/graphql",
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.InMemoryCache()
});
const App = () => {
  if (wcbGlobalVariables?.enableTemplatesButton === "false") {
    return null;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HeaderToolBarPatterns__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
const domObserver = new MutationObserver(() => {
  const modalRoot = document.querySelector(".edit-post-header__toolbar .edit-post-header-toolbar");
  if (modalRoot) {
    // ko disconect vi toolbar co the re-render dan den bi mat nut cua minh
    // domObserver.disconnect();

    if (!document.getElementById("wcb-block-templates-button-wrap")) {
      let newDiv = document.createElement("div");
      newDiv.setAttribute("id", "wcb-block-templates-button-wrap");
      modalRoot.appendChild(newDiv);
      react_dom__WEBPACK_IMPORTED_MODULE_2__.render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloProvider, {
        client: client
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null)), newDiv);
    }
  }
});
domObserver.observe(document.body || document, {
  childList: true,
  subtree: true
});

//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/____toolbar-patterns/HeaderToolBarPatterns.tsx":
/*!************************************************************!*\
  !*** ./src/____toolbar-patterns/HeaderToolBarPatterns.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ArrowDownOnSquareIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ClipboardIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/CheckIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ArrowUpRightIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/LinkIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/LightBulbIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ArrowTopRightOnSquareIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/____toolbar-patterns/constant.ts");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/useTimeoutFn.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Logo */ "./src/components/Logo.tsx");












const HeaderToolBarPatterns = () => {
  // STATE
  let [indexCopying, setIndexCopying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  let [,, resetIsCopying] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(() => setIndexCopying(""), 1500);
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [currentCategorySelected, setCurrentCategorySelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [currentPricingPackage, setCurrentPricingPackage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");

  // CONSTS
  const [loadGreeting, {
    called,
    loading,
    data
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_constant__WEBPACK_IMPORTED_MODULE_3__.GET_WCB_BLOCKS);
  let patternsEdge = [];
  let categoriesEdge = {};
  if (data) {
    patternsEdge = data.wcbBlocks.edges;
    data.wcbBlocks.edges.forEach(element => {
      element.node.wcbBlocksCategories.edges.map(item => {
        categoriesEdge[item.node.id] = item.node;
      });
    });
  }

  // HOOKS
  const {
    selectedBlockClientIndex,
    selectedBlockClientId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    // @ts-ignore
    const {
      getSelectedBlockClientId,
      getBlockIndex
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    const selectedBlockClientId = getSelectedBlockClientId();
    return {
      selectedBlockClientId,
      selectedBlockClientIndex: getBlockIndex(selectedBlockClientId)
    };
  }, []);
  const {
    insertBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);

  // HANDLE
  const openModal = () => {
    setOpen(true);
    !called && loadGreeting();
  };
  const closeModal = () => {
    setOpen(false);
  };
  const insertWcbBlocks = content => {
    setOpen(false);
    const newBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.rawHandler)({
      HTML: content
    });
    const newIndex = selectedBlockClientIndex === -1 ? undefined : (selectedBlockClientIndex || 0) + 1;
    insertBlocks(newBlocks, newIndex);
  };

  // RENDER
  const renderBadge = (value, index) => {
    const name = value.node.name;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: value.node.id,
      className: `relative text-white text-[10px] rounded-full px-2 py-0.5 leading-none capitalize font-medium flex items-center justify-center ${name === "pro" ? "bg-red-500" : "bg-green-500"}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, name));
  };
  const renderImportBtns = post => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-x-2 absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      onClick: e => {
        e.preventDefault();
        insertWcbBlocks(post.contentOrigin);
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__, {
      className: "-ml-1 mr-2 h-5 w-5",
      "aria-hidden": "true"
    }), "Import"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      onClick: e => {
        e.preventDefault();
        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__(post.contentOrigin, {
          format: "text/plain"
        });
        setIndexCopying(post.id);
        resetIsCopying();
      }
    }, indexCopying !== post.id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__, {
      className: "-ml-1 mr-2 h-5 w-5 text-gray-500",
      "aria-hidden": "true"
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__, {
      className: "-ml-1 mr-2 h-5 w-5 text-gray-500"
    }), indexCopying !== post.id ? "Copy" : "Copied!"));
  };
  const renderCardItem = (value, index) => {
    const post = value.node;
    const isIncludeCategorySelected = !currentCategorySelected ? true : post.wcbBlocksCategories.edges.some(item => item.node.id === currentCategorySelected);
    let isIncludePricingPackage = false;
    if (!currentPricingPackage || currentPricingPackage === "all") {
      isIncludePricingPackage = true;
    } else {
      isIncludePricingPackage = post.wcbBlocksPricingPackages.edges.some(item => item.node.name === currentPricingPackage);
    }

    // CHECK FILTER
    if (!isIncludeCategorySelected || !isIncludePricingPackage) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: post.id
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-100/60 before:opacity-0 hover:before:opacity-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10"
    }, renderImportBtns(post), post.featuredImage?.node.sourceUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: post.featuredImage?.node.sourceUrl,
      srcSet: post.featuredImage?.node.srcSet,
      sizes: "550px",
      alt: "heroes",
      className: "absolute inset-0 h-full w-full object-contain group-hover:opacity-60 transition-opacity"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex space-x-2 mt-3.5 "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "text-sm font-medium text-slate-900 group-hover:text-blue-600"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "relative"
    }, post.title)), post.wcbBlocksPricingPackages?.edges?.map(renderBadge)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: post.link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "relative mt-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 flex items-center space-x-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "View demo"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__, {
      className: "w-3 h-3"
    }))));
  };
  const renderFreeProTab = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex space-x-1 rounded-lg bg-slate-100 p-0.5",
      role: "tablist",
      "aria-orientation": "horizontal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${currentPricingPackage === "all" ? "bg-white shadow" : ""}`,
      id: "headlessui-tabs-tab-all",
      role: "tab",
      type: "button",
      "aria-selected": currentPricingPackage === "all" ? "true" : undefined,
      onClick: () => setCurrentPricingPackage("all")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__, {
      className: "w-4 h-4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ml-2 text-slate-900"
    }, "All")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${currentPricingPackage === "free" ? "bg-white shadow" : ""}`,
      id: "headlessui-tabs-tab-free",
      role: "tab",
      type: "button",
      "aria-selected": currentPricingPackage === "free" ? "true" : undefined,
      onClick: () => setCurrentPricingPackage("free")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__, {
      className: "w-4 h-4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ml-2 text-slate-900"
    }, "Free")));
  };
  const renderSelectCategories = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      className: "form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 text-sm",
      onChange: e => {
        setCurrentCategorySelected(e.currentTarget.value);
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      selected: true,
      value: ""
    }, "All categories"), Object.values(categoriesEdge).map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: item.id,
      value: item.id
    }, item.name))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      viewBox: "0 0 8 6",
      width: "8",
      height: "6",
      fill: "none",
      className: "pointer-events-none absolute inset-y-0 right-3.5 h-full stroke-slate-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M7 1.5l-3 3-3-3",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  };
  const renderEmpty = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      className: "mx-auto h-12 w-12 text-gray-400",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "aria-hidden": "true"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      vectorEffect: "non-scaling-stroke",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "mt-2 text-sm font-semibold text-gray-900"
    }, "No items!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "mt-1 text-sm text-gray-500"
    }, "Please try filtering another way."));
  };
  const renderContent = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8"
    }, patternsEdge && patternsEdge.length ? patternsEdge.map(renderCardItem) : renderEmpty());
  };
  const renderModal = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      onRequestClose: closeModal
      // @ts-ignore
      ,
      isFullScreen: true,
      __experimentalHideHeader: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-[1fr,auto] items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-span-2 md:col-span-1 flex min-w-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "truncate text-base font-medium leading-7 text-slate-900"
    }, "Woostify Pattern Library"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "ml-3 whitespace-nowrap rounded-lg bg-slate-100 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700 block"
    }, data ? patternsEdge.length : "", " patterns")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pt-5 md:pt-0 col-span-2 md:col-span-1 md:ml-6 flex items-center"
    }, renderFreeProTab(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ml-6 mr-3 h-5 w-px bg-slate-900/10 block"
    }), renderSelectCategories(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://woostifyblocks.com/wcb-blocks/",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "relative ml-2 h-9 w-9 items-center justify-center flex"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__, {
      className: "w-4 h-4"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-span-2 min-w-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mt-5 pt-6 border-t border-slate-200 focus:outline-none w-full h-full "
    }, called && loading ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null) : renderContent()))));
  };

  // MAIN RETURN
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "wcb-HeaderToolBarPatternsBtn flex-shrink-0 mx-2 button button-primary leading-none h-[33px] text-[13px] flex items-center justify-center",
    onClick: openModal
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "w-4 h-4 text-white"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ml-2"
  }, "Woostify patterns")), isOpen && renderModal());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderToolBarPatterns);

/***/ }),

/***/ "./src/____toolbar-patterns/WcbPluginSidebar.tsx":
/*!*******************************************************!*\
  !*** ./src/____toolbar-patterns/WcbPluginSidebar.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_HelpText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/HelpText */ "./src/components/controls/HelpText.tsx");





// @ts-ignore





const WcbPluginSidebar = props => {
  const [mycolors, setMyColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(window.wcbGlobalVariables.customColorPallete || []);
  const [updateStatus, setUpdateStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const themePalette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useSetting)("color.palette.theme");
  const defaultPalette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useSetting)("color.palette.default");
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalUseMultipleOriginColorsAndGradients)();
  console.log(11, "____WcbPluginSidebar____log", {
    props,
    themePalette,
    defaultPalette,
    colorGradientSettings,
    mycolors,
    nweww: window.wcbGlobalVariables.customColorPallete
  });

  // update save setting to database options via ajax
  const handleUpdateSettings = newColors => {
    if (typeof jQuery !== "function") {
      return;
    }
    const newSettings = {
      ...window.wcbGlobalVariables,
      customColorPallete: newColors
    };
    const data = {
      action: "wcb_dashboard_blocks_update_settings",
      settings: newSettings
    };
    setUpdateStatus("loading");
    jQuery
    // @ts-ignore
    .post(ajaxurl, data, function (response) {
      console.log("Got this from the server: ", response);
    }).done(function () {
      setUpdateStatus("ok");
    }).fail(function () {
      setUpdateStatus("error");
    });
  };
  const handleChangeCustomColor = (color, index) => {
    console.log(111111);
    if (!color) {
      const newcolors = mycolors.filter((_, j) => j !== index);
      handleUpdateSettings(newcolors);
      return setMyColor(newcolors);
    }
    const newcolors = mycolors.map((item, j) => {
      if (j !== index) {
        return item;
      }
      return {
        color,
        name: color
      };
    });
    setMyColor(newcolors);
    handleUpdateSettings(newcolors);
  };
  const addNewCustomColor = () => {
    const newcolors = [...mycolors, {
      name: "black",
      color: "#000"
    }];
    handleUpdateSettings(newcolors);
    return setMyColor(newcolors);
  };

  //
  const debounce_fun = lodash__WEBPACK_IMPORTED_MODULE_3___default().debounce(function (e, j) {
    handleChangeCustomColor(e, j);
  }, 600);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, {
    header: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Color Palette", "wcb"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-4"
  }, colorGradientSettings?.colors?.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "flex flex-col gap-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "uppercase text-[11px] font-medium m-0"
    }, item.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-wrap gap-2.5"
    }, item.colors?.map((item, j) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
      key: j,
      colorValue: item.color,
      name: item.name,
      className: "w-[30px] h-[30px]",
      title: item.name,
      as: "div"
    }))));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "uppercase text-[11px] font-medium m-0"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Add custom colors", "wcb")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_HelpText__WEBPACK_IMPORTED_MODULE_7__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("The custom colors will show up in your ColorPicker component.", "wcb"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-wrap gap-2"
  }, mycolors?.map((item, j) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: item.color,
    key: j,
    label: "",
    onChange: e => {
      debounce_fun(e, j);
    },
    showDefaultPalette: true,
    showCustomColorOnDefaultPallete: false
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "p-2 flex items-center justify-center border rounded-lg cursor-pointer hover:border-slate-300 disabled:opacity-40",
    title: updateStatus === "loading" ? "Updating..." : "Add new color",
    onClick: addNewCustomColor,
    disabled: updateStatus === "loading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Add new color", "wcb")), updateStatus === "loading" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-7 h-7 flex items-center justify-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
    className: "w-5 h-5 !m-0"
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-7 h-7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 6v12m6-6H6"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: "warning",
    className: "m-0",
    isDismissible: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Note: ", "wcb")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("After customizing this color you need to reload the page (f5) so that the changes can properly update into the ColorPicker components.", "wcb"))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbPluginSidebar);

/***/ }),

/***/ "./src/____toolbar-patterns/constant.ts":
/*!**********************************************!*\
  !*** ./src/____toolbar-patterns/constant.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_WCB_BLOCKS": () => (/* binding */ GET_WCB_BLOCKS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");

const GET_WCB_BLOCKS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
>>>>>>> 3978589b2bcb51438be99f30659ff5f1e892ad92
	query NewQuery {
		wcbBlocks(where: { status: PUBLISH }, first: 400) {
			edges {
				node {
					id
					featuredImage {
						node {
							sourceUrl
							srcSet
							altText
							caption
							id
						}
					}
					wcbBlocksCategories {
						edges {
							node {
								id
								name
								link
								count
							}
						}
					}
					wcbBlocksTags {
						edges {
							node {
								id
								name
								link
								count
							}
						}
					}
					wcbBlocksPricingPackages {
						edges {
							node {
								id
								name
								link
								count
							}
						}
					}
					databaseId
					link
					contentOrigin
					date
					title
				}
			}
		}
	}
<<<<<<< HEAD
`;var Uo=i(7965);const zo=window.wp.data,Wo=window.wp.blockEditor,Go=({className:t="w-12 h-12 text-[#5271ff]"})=>(0,e.createElement)("svg",{className:t,width:"188",height:"188",viewBox:"0 0 188 188",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("g",{"clip-path":"url(#clip0_516_2418)"},(0,e.createElement)("mask",{id:"mask0_516_2418",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"188",height:"188"},(0,e.createElement)("path",{d:"M0.286438 0.286621H187.286V187.287H0.286438V0.286621Z",fill:"white"})),(0,e.createElement)("g",{mask:"url(#mask0_516_2418)"},(0,e.createElement)("path",{d:"M120.078 151.37L39.177 70.4691L58.875 50.7712L120.078 111.974L178.292 53.7555C163.302 22.141 131.089 0.276367 93.7708 0.276367C56.427 0.276367 24.1979 22.1722 9.21871 53.8232L87.2343 131.839L67.7083 151.37L0.739543 84.4014C0.432251 87.4847 0.276001 90.6097 0.276001 93.7712C0.276001 145.407 42.1354 187.271 93.7708 187.271C145.406 187.271 187.271 145.407 187.271 93.7712C187.271 90.6826 187.115 87.6357 186.823 84.6253L120.078 151.37Z",fill:"currentColor"}))),(0,e.createElement)("defs",null,(0,e.createElement)("clipPath",{id:"clip0_516_2418"},(0,e.createElement)("rect",{width:"188",height:"188",fill:"white"})))),Ko=()=>{let[t,n]=(0,e.useState)(""),[,,i]=function(t,r){void 0===r&&(r=0);var n=(0,e.useRef)(!1),i=(0,e.useRef)(),o=(0,e.useRef)(t),a=(0,e.useCallback)((function(){return n.current}),[]),s=(0,e.useCallback)((function(){n.current=!1,i.current&&clearTimeout(i.current),i.current=setTimeout((function(){n.current=!0,o.current()}),r)}),[r]),c=(0,e.useCallback)((function(){n.current=null,i.current&&clearTimeout(i.current)}),[]);return(0,e.useEffect)((function(){o.current=t}),[t]),(0,e.useEffect)((function(){return s(),c}),[r]),[a,c,s]}((()=>n("")),1500);const[o,a]=(0,e.useState)(!1),[s,c]=(0,e.useState)(""),[u,l]=(0,e.useState)("all"),[f,{called:p,loading:h,data:d}]=Xi(Bo);let v=[],y={};d&&(v=d.wcbBlocks.edges,d.wcbBlocks.edges.forEach((e=>{e.node.wcbBlocksCategories.edges.map((e=>{y[e.node.id]=e.node}))})));const{selectedBlockClientIndex:m,selectedBlockClientId:g}=(0,zo.useSelect)((e=>{const{getSelectedBlockClientId:t,getBlockIndex:r}=e(Wo.store),n=t();return{selectedBlockClientId:n,selectedBlockClientIndex:r(n)}}),[]),{insertBlocks:b}=(0,zo.useDispatch)(Wo.store),w=(t,r)=>{const n=t.node.name;return(0,e.createElement)("div",{key:t.node.id,className:"relative text-white text-[10px] rounded-full px-2 py-0.5 leading-none capitalize font-medium flex items-center justify-center "+("pro"===n?"bg-red-500":"bg-green-500")},(0,e.createElement)("span",null,n))},E=(o,c)=>{const l=o.node,f=!s||l.wcbBlocksCategories.edges.some((e=>e.node.id===s));let p=!1;return p=!u||"all"===u||l.wcbBlocksPricingPackages.edges.some((e=>e.node.name===u)),f&&p?(0,e.createElement)("li",{key:l.id},(0,e.createElement)("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-100/60 before:opacity-0 hover:before:opacity-100"},(0,e.createElement)("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10"},(o=>(0,e.createElement)("div",{className:"space-x-2 absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"},(0,e.createElement)("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",onClick:e=>{e.preventDefault(),(e=>{a(!1);const t=(0,r.rawHandler)({HTML:e});b(t,-1===m?void 0:(m||0)+1)})(o.contentOrigin)}},(0,e.createElement)(Li,{className:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),"Import"),(0,e.createElement)("button",{type:"button",className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",onClick:e=>{e.preventDefault(),Uo(o.contentOrigin,{format:"text/plain"}),n(o.id),i()}},t!==o.id?(0,e.createElement)(Mi,{className:"-ml-1 mr-2 h-5 w-5 text-gray-500","aria-hidden":"true"}):(0,e.createElement)(Vi,{className:"-ml-1 mr-2 h-5 w-5 text-gray-500"}),t!==o.id?"Copy":"Copied!")))(l),l.featuredImage?.node.sourceUrl&&(0,e.createElement)("img",{src:l.featuredImage?.node.sourceUrl,srcSet:l.featuredImage?.node.srcSet,sizes:"550px",alt:"heroes",className:"absolute inset-0 h-full w-full object-contain group-hover:opacity-60 transition-opacity"})),(0,e.createElement)("div",{className:"flex space-x-2 mt-3.5 "},(0,e.createElement)("h4",{className:"text-sm font-medium text-slate-900 group-hover:text-blue-600"},(0,e.createElement)("span",{className:"relative"},l.title)),l.wcbBlocksPricingPackages?.edges?.map(w)),(0,e.createElement)("a",{href:l.link,target:"_blank",rel:"noopener noreferrer",className:"relative mt-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 flex items-center space-x-2"},(0,e.createElement)("span",null,"View demo"),(0,e.createElement)(qi,{className:"w-3 h-3"})))):null};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Fi.Button,{className:"wcb-HeaderToolBarPatternsBtn flex-shrink-0 mx-2 button button-primary leading-none h-[33px] text-[13px] flex items-center justify-center",onClick:()=>{a(!0),!p&&f()}},(0,e.createElement)(Go,{className:"w-4 h-4 text-white"}),(0,e.createElement)("span",{className:"ml-2"},"Woostify patterns")),o&&(0,e.createElement)(Fi.Modal,{onRequestClose:()=>{a(!1)},isFullScreen:!0,__experimentalHideHeader:!0},(0,e.createElement)("div",{className:"grid grid-cols-[1fr,auto] items-center"},(0,e.createElement)("div",{className:"col-span-2 md:col-span-1 flex min-w-0"},(0,e.createElement)("h2",{className:"truncate text-base font-medium leading-7 text-slate-900"},"Woostify Pattern Library"),(0,e.createElement)("p",{className:"ml-3 whitespace-nowrap rounded-lg bg-slate-100 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700 block"},d?v.length:""," patterns")),(0,e.createElement)("div",{className:"pt-5 md:pt-0 col-span-2 md:col-span-1 md:ml-6 flex items-center"},(0,e.createElement)("div",{className:"flex space-x-1 rounded-lg bg-slate-100 p-0.5",role:"tablist","aria-orientation":"horizontal"},(0,e.createElement)("button",{className:"flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 "+("all"===u?"bg-white shadow":""),id:"headlessui-tabs-tab-all",role:"tab",type:"button","aria-selected":"all"===u?"true":void 0,onClick:()=>l("all")},(0,e.createElement)(Qi,{className:"w-4 h-4"}),(0,e.createElement)("span",{className:"ml-2 text-slate-900"},"All")),(0,e.createElement)("button",{className:"flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 "+("free"===u?"bg-white shadow":""),id:"headlessui-tabs-tab-free",role:"tab",type:"button","aria-selected":"free"===u?"true":void 0,onClick:()=>l("free")},(0,e.createElement)(Bi,{className:"w-4 h-4"}),(0,e.createElement)("span",{className:"ml-2 text-slate-900"},"Free"))),(0,e.createElement)("div",{className:"ml-6 mr-3 h-5 w-px bg-slate-900/10 block"}),(0,e.createElement)("div",{className:"relative block"},(0,e.createElement)("select",{className:"form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 text-sm",onChange:e=>{c(e.currentTarget.value)}},(0,e.createElement)("option",{selected:!0,value:""},"All categories"),Object.values(y).map((t=>(0,e.createElement)("option",{key:t.id,value:t.id},t.name)))),(0,e.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 8 6",width:"8",height:"6",fill:"none",className:"pointer-events-none absolute inset-y-0 right-3.5 h-full stroke-slate-500"},(0,e.createElement)("path",{d:"M7 1.5l-3 3-3-3",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),(0,e.createElement)("a",{href:"https://woostifyblocks.com/wcb-blocks/",target:"_blank",rel:"noopener noreferrer",className:"relative ml-2 h-9 w-9 items-center justify-center flex"},(0,e.createElement)(Ui,{className:"w-4 h-4"}))),(0,e.createElement)("div",{className:"col-span-2 min-w-0"},(0,e.createElement)("div",{className:"mt-5 pt-6 border-t border-slate-200 focus:outline-none w-full h-full "},p&&h?(0,e.createElement)(Fi.Spinner,null):(0,e.createElement)("ul",{className:"col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8"},v&&v.length?v.map(E):(0,e.createElement)("div",{className:"text-center"},(0,e.createElement)("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},(0,e.createElement)("path",{vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"})),(0,e.createElement)("h3",{className:"mt-2 text-sm font-semibold text-gray-900"},"No items!"),(0,e.createElement)("p",{className:"mt-1 text-sm text-gray-500"},"Please try filtering another way."))))))))},Yo=new Cn({uri:"https://woostifyblocks.com/graphql",cache:new Ci}),Ho=()=>"false"===wcbGlobalVariables?.enableTemplatesButton?null:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Ko,null));new MutationObserver((()=>{const t=document.querySelector(".edit-post-header__toolbar .edit-post-header-toolbar");if(t&&!document.getElementById("wcb-block-templates-button-wrap")){let r=document.createElement("div");r.setAttribute("id","wcb-block-templates-button-wrap"),t.appendChild(r),a.render((0,e.createElement)(Pi,{client:Yo},(0,e.createElement)(Ho,null)),r)}})).observe(document.body||document,{childList:!0,subtree:!0}),window.jQuery,window,window.wcbGlobalVariables,window.wcbGlobalVariables?.defaultContentWidth||window.wcbLayoutGlobalSettings;const Jo=window.lodash;var $o=i.n(Jo);const Xo=window.wp.element,Zo=window.wp.i18n,ea=({className:t="",label:r=(0,Zo.__)("Color","wcb"),color:n="#000",onChange:i,showDefaultPalette:o=!0,showCustomColorOnDefaultPallete:a=!0})=>{const[s,c]=(0,e.useState)("");(0,e.useEffect)((()=>{n&&c(n)}),[n]);const u=(0,Wo.__experimentalUseMultipleOriginColorsAndGradients)(),l=(0,e.useMemo)((()=>{const e=window.wcbGlobalVariables?.customColorPallete;return e&&e.length&&a?[...u?.colors||[],{name:"Customs",colors:window.wcbGlobalVariables.customColorPallete||[]}]:u?.colors||[]}),[u,a]);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Fi.Dropdown,{className:`w-full ${t}`,contentClassName:"my-popover-content-classname",popoverProps:{placement:"left-start"},renderToggle:({isOpen:t,onToggle:n})=>(0,e.createElement)("div",{className:"w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors",onClick:n},(0,e.createElement)("div",{className:"flex items-center gap-0.5"},(0,e.createElement)("div",{className:"w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer "+(s?"":"bg-transparent"),style:{backgroundColor:s,backgroundImage:s?void 0:"linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)",backgroundSize:"10px 10px",backgroundPosition:"0 0, 0 5px, 5px -5px, -5px 0"}})),r&&(0,e.createElement)("div",null,(0,e.createElement)("span",null,r))),renderContent:()=>(0,e.createElement)("div",null,(0,e.createElement)("div",{className:"bg-white "},(0,e.createElement)(Fi.ColorPalette,{className:"block-editor-color-gradient-control__panel p-4",colors:o?l:void 0,value:s,enableAlpha:!0,onChange:e=>{var t;c(t=e||""),i(t)},__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0})))}))},ta=({children:t,className:r="my-1"})=>(0,e.createElement)("p",{className:`components-form-token-field__help ${r}`},t),ra=t=>{const[r,n]=(0,Xo.useState)(window.wcbGlobalVariables.customColorPallete||[]),[i,o]=(0,Xo.useState)(""),a=(0,Wo.useSetting)("color.palette.theme"),s=(0,Wo.useSetting)("color.palette.default"),c=(0,Wo.__experimentalUseMultipleOriginColorsAndGradients)();console.log(11,"____WcbPluginSidebar____log",{props:t,themePalette:a,defaultPalette:s,colorGradientSettings:c,mycolors:r,nweww:window.wcbGlobalVariables.customColorPallete});const u=e=>{if("function"!=typeof jQuery)return;const t={action:"wcb_dashboard_blocks_update_settings",settings:{...window.wcbGlobalVariables,customColorPallete:e}};o("loading"),jQuery.post(ajaxurl,t,(function(e){console.log("Got this from the server: ",e)})).done((function(){o("ok")})).fail((function(){o("error")}))},l=$o().debounce((function(e,t){((e,t)=>{if(console.log(111111),!e){const e=r.filter(((e,r)=>r!==t));return u(e),n(e)}const i=r.map(((r,n)=>n!==t?r:{color:e,name:e}));n(i),u(i)})(e,t)}),600);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Fi.Panel,{header:""},(0,e.createElement)(Fi.PanelBody,{title:(0,Zo.__)("Color Palette","wcb"),initialOpen:!0},(0,e.createElement)(Fi.PanelRow,null,(0,e.createElement)("div",{className:"flex flex-col gap-4"},c?.colors?.map(((t,r)=>(0,e.createElement)("div",{key:r,className:"flex flex-col gap-2"},(0,e.createElement)("h2",{className:"uppercase text-[11px] font-medium m-0"},t.name),(0,e.createElement)("div",{className:"flex flex-wrap gap-2.5"},t.colors?.map(((t,r)=>(0,e.createElement)(Fi.ColorIndicator,{key:r,colorValue:t.color,name:t.name,className:"w-[30px] h-[30px]",title:t.name,as:"div"}))))))),(0,e.createElement)("div",{className:"flex flex-col gap-2"},(0,e.createElement)("div",null,(0,e.createElement)("h2",{className:"uppercase text-[11px] font-medium m-0"},(0,Zo.__)("Add custom colors","wcb")),(0,e.createElement)(ta,null,(0,Zo.__)("The custom colors will show up in your ColorPicker component.","wcb"))),(0,e.createElement)("div",{className:"flex flex-wrap gap-2"},r?.map(((t,r)=>(0,e.createElement)("div",null,(0,e.createElement)(ea,{color:t.color,key:r,label:"",onChange:e=>{l(e,r)},showDefaultPalette:!0,showCustomColorOnDefaultPallete:!1})))),(0,e.createElement)("button",{className:"p-2 flex items-center justify-center border rounded-lg cursor-pointer hover:border-slate-300 disabled:opacity-40",title:"loading"===i?"Updating...":"Add new color",onClick:()=>{const e=[...r,{name:"black",color:"#000"}];return u(e),n(e)},disabled:"loading"===i},(0,e.createElement)("span",{className:"sr-only"},(0,Zo.__)("Add new color","wcb")),"loading"===i?(0,e.createElement)("div",{className:"w-7 h-7 flex items-center justify-center"},(0,e.createElement)(Fi.Spinner,{className:"w-5 h-5 !m-0"})):(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7"},(0,e.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})))),(0,e.createElement)(Fi.Notice,{status:"warning",className:"m-0",isDismissible:!1},(0,e.createElement)("strong",null,(0,Zo.__)("Note: ","wcb")),(0,Zo.__)("After customizing this color you need to reload the page (f5) so that the changes can properly update into the ColorPicker components.","wcb"))))))))};(0,n.registerPlugin)("wcb-plugin-sidebar-woostify",{render:()=>(0,e.createElement)(o.PluginSidebar,{name:"wcb-plugin-sidebar-woostify",title:"Woostify Page Settings",icon:(0,e.createElement)("svg",{className:"w-6 h-6 wcb-plugin-sidebar-woostify__logosvg",width:"188",height:"188",viewBox:"0 0 188 188",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("g",{"clip-path":"url(#clip0_516_2418)"},(0,e.createElement)("mask",{id:"mask0_516_2418",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"188",height:"188"},(0,e.createElement)("path",{d:"M0.286438 0.286621H187.286V187.287H0.286438V0.286621Z",fill:"white"})),(0,e.createElement)("g",{mask:"url(#mask0_516_2418)"},(0,e.createElement)("path",{d:"M120.078 151.37L39.177 70.4691L58.875 50.7712L120.078 111.974L178.292 53.7555C163.302 22.141 131.089 0.276367 93.7708 0.276367C56.427 0.276367 24.1979 22.1722 9.21871 53.8232L87.2343 131.839L67.7083 151.37L0.739543 84.4014C0.432251 87.4847 0.276001 90.6097 0.276001 93.7712C0.276001 145.407 42.1354 187.271 93.7708 187.271C145.406 187.271 187.271 145.407 187.271 93.7712C187.271 90.6826 187.115 87.6357 186.823 84.6253L120.078 151.37Z",fill:"currentColor"}))),(0,e.createElement)("defs",null,(0,e.createElement)("clipPath",{id:"clip0_516_2418"},(0,e.createElement)("rect",{width:"188",height:"188",fill:"white"}))))},(0,e.createElement)(ra,null))})})()})();
=======
`;

/***/ }),

/***/ "./src/components/Logo.tsx":
/*!*********************************!*\
  !*** ./src/components/Logo.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Logo = _ref => {
  let {
    className = "w-12 h-12 text-[#5271ff]"
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: className,
    width: "188",
    height: "188",
    viewBox: "0 0 188 188",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_516_2418)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
    id: "mask0_516_2418",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "188",
    height: "188"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0.286438 0.286621H187.286V187.287H0.286438V0.286621Z",
    fill: "white"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    mask: "url(#mask0_516_2418)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M120.078 151.37L39.177 70.4691L58.875 50.7712L120.078 111.974L178.292 53.7555C163.302 22.141 131.089 0.276367 93.7708 0.276367C56.427 0.276367 24.1979 22.1722 9.21871 53.8232L87.2343 131.839L67.7083 151.37L0.739543 84.4014C0.432251 87.4847 0.276001 90.6097 0.276001 93.7712C0.276001 145.407 42.1354 187.271 93.7708 187.271C145.406 187.271 187.271 145.407 187.271 93.7712C187.271 90.6826 187.115 87.6357 186.823 84.6253L120.078 151.37Z",
    fill: "currentColor"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_516_2418"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "188",
    height: "188",
    fill: "white"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ "./src/components/controls/HelpText.tsx":
/*!**********************************************!*\
  !*** ./src/components/controls/HelpText.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const HelpText = _ref => {
  let {
    children,
    className = "my-1"
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `components-form-token-field__help ${className}`
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelpText);

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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);


// @ts-ignore



const MyColorPicker = _ref => {
  let {
    className = "",
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Color", "wcb"),
    // default value color - co the la cac gia tri hex string
    color = "#000",
    onChange,
    showDefaultPalette = true,
    showCustomColorOnDefaultPallete = true
  } = _ref;
  const [colorState, setColorState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    color && setColorState(color);
  }, [color]);
  const handleUpdateColor = c => {
    setColorState(c);
    onChange(c);
  };
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseMultipleOriginColorsAndGradients)();
  const defaultColorPallete = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: `w-full ${className}`,
    contentClassName: "my-popover-content-classname"
    // @ts-ignore
    ,
    popoverProps: {
      placement: "left-start"
    },
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors`,
        onClick: onToggle
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "flex items-center gap-0.5"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer ${colorState ? "" : "bg-transparent"}`,
        style: {
          backgroundColor: colorState,
          backgroundImage: !colorState ? "linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)" : undefined,
          backgroundSize: "10px 10px",
          backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0"
        }
      })), label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, label)));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg-white "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
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

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/graphql-tag/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "disableExperimentalFragmentVariables": () => (/* binding */ disableExperimentalFragmentVariables),
/* harmony export */   "disableFragmentWarnings": () => (/* binding */ disableFragmentWarnings),
/* harmony export */   "enableExperimentalFragmentVariables": () => (/* binding */ enableExperimentalFragmentVariables),
/* harmony export */   "gql": () => (/* binding */ gql),
/* harmony export */   "resetCaches": () => (/* binding */ resetCaches)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/parser.mjs");


var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function (fragmentDefinition) {
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
                        + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
                        + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                }
            }
            else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        }
        else {
            definitions.push(fragmentDefinition);
        }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, ast), { definitions: definitions });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function (node) {
        if (node.loc)
            delete node.loc;
        Object.keys(node).forEach(function (key) {
            var value = node[key];
            if (value && typeof value === 'object') {
                workSet.add(value);
            }
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = (0,graphql__WEBPACK_IMPORTED_MODULE_1__.parse)(source, {
            experimentalFragmentVariables: experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') {
            throw new Error('Not a valid GraphQL document.');
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof literals === 'string') {
        literals = [literals];
    }
    var result = literals[0];
    args.forEach(function (arg, i) {
        if (arg && arg.kind === 'Document') {
            result += arg.loc.source.body;
        }
        else {
            result += arg;
        }
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function (gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gql);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/____toolbar-patterns/editor.scss":
/*!**********************************************!*\
  !*** ./src/____toolbar-patterns/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/optimism/lib/bundle.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/optimism/lib/bundle.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyTrie": () => (/* reexport safe */ _wry_trie__WEBPACK_IMPORTED_MODULE_0__.Trie),
/* harmony export */   "asyncFromGen": () => (/* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.asyncFromGen),
/* harmony export */   "bindContext": () => (/* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.bind),
/* harmony export */   "defaultMakeCacheKey": () => (/* binding */ defaultMakeCacheKey),
/* harmony export */   "dep": () => (/* binding */ dep),
/* harmony export */   "noContext": () => (/* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.noContext),
/* harmony export */   "setTimeout": () => (/* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.setTimeout),
/* harmony export */   "wrap": () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/context */ "./node_modules/@wry/context/lib/context.esm.js");





function defaultDispose() { }
var Cache = /** @class */ (function () {
    function Cache(max, dispose) {
        if (max === void 0) { max = Infinity; }
        if (dispose === void 0) { dispose = defaultDispose; }
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache.prototype.has = function (key) {
        return this.map.has(key);
    };
    Cache.prototype.get = function (key) {
        var node = this.getNode(key);
        return node && node.value;
    };
    Cache.prototype.getNode = function (key) {
        var node = this.map.get(key);
        if (node && node !== this.newest) {
            var older = node.older, newer = node.newer;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) {
                this.oldest = newer;
            }
        }
        return node;
    };
    Cache.prototype.set = function (key, value) {
        var node = this.getNode(key);
        if (node) {
            return node.value = value;
        }
        node = {
            key: key,
            value: value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
    };
    Cache.prototype.clean = function () {
        while (this.oldest && this.map.size > this.max) {
            this.delete(this.oldest.key);
        }
    };
    Cache.prototype.delete = function (key) {
        var node = this.map.get(key);
        if (node) {
            if (node === this.newest) {
                this.newest = node.older;
            }
            if (node === this.oldest) {
                this.oldest = node.newer;
            }
            if (node.newer) {
                node.newer.older = node.older;
            }
            if (node.older) {
                node.older.newer = node.newer;
            }
            this.map.delete(key);
            this.dispose(node.value, key);
            return true;
        }
        return false;
    };
    return Cache;
}());

var parentEntrySlot = new _wry_context__WEBPACK_IMPORTED_MODULE_1__.Slot();

var _a;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var 
// This Array.from polyfill is restricted to working with Set<any> for now,
// but we can improve the polyfill and add other input types, as needed. Note
// that this fallback implementation will only be used if the host environment
// does not support a native Array.from function. In most modern JS runtimes,
// the toArray function exported here will be === Array.from.
toArray = (_a = Array.from, _a === void 0 ? function (collection) {
    var array = [];
    collection.forEach(function (item) { return array.push(item); });
    return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
    var unsubscribe = entryOrDep.unsubscribe;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}

var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
    }
}
function valueIs(a, b) {
    var len = a.length;
    return (
    // Unknown values are not equal to each other.
    len > 0 &&
        // Both values must be ordinary (or both exceptional) to be equal.
        len === b.length &&
        // The underlying value or exception must be the same.
        a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch (value.length) {
        case 0: throw new Error("unknown value");
        case 1: return value[0];
        case 2: throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = /** @class */ (function () {
    function Entry(fn) {
        this.fn = fn;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry.count;
    }
    Entry.prototype.peek = function () {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            rememberParent(this);
            return this.value[0];
        }
    };
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    Entry.prototype.recompute = function (args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this)
            ? reallyRecompute(this, args)
            : valueGet(this.value);
    };
    Entry.prototype.setDirty = function () {
        if (this.dirty)
            return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    };
    Entry.prototype.dispose = function () {
        var _this = this;
        this.setDirty();
        // Sever any dependency relationships with our own children, so those
        // children don't retain this parent Entry in their child.parents sets,
        // thereby preventing it from being fully garbage collected.
        forgetChildren(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        eachParent(this, function (parent, child) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry.prototype.forget = function () {
        // The code that creates Entry objects in index.ts will replace this method
        // with one that actually removes the Entry from the cache, which will also
        // trigger the entry.dispose method.
        this.dispose();
    };
    Entry.prototype.dependOn = function (dep) {
        dep.add(this);
        if (!this.deps) {
            this.deps = emptySetPool.pop() || new Set();
        }
        this.deps.add(dep);
    };
    Entry.prototype.forgetDeps = function () {
        var _this = this;
        if (this.deps) {
            toArray(this.deps).forEach(function (dep) { return dep.delete(_this); });
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    };
    Entry.count = 0;
    return Entry;
}());
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
            parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
            reportDirtyChild(parent, child);
        }
        else {
            reportCleanChild(parent, child);
        }
        return parent;
    }
}
function reallyRecompute(entry, args) {
    forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
    if (maybeSubscribe(entry, args)) {
        // If we successfully recomputed entry.value and did not fail to
        // (re)subscribe, then this Entry is no longer explicitly dirty.
        setClean(entry);
    }
    return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    // Set entry.value as unknown.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, args);
    }
    catch (e) {
        // If entry.fn throws, entry.value will become exceptional.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
        // This Entry may still have dirty children, in which case we can't
        // let our parents know we're clean just yet.
        return;
    }
    reportClean(entry);
}
function reportDirty(child) {
    eachParent(child, reportDirtyChild);
}
function reportClean(child) {
    eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
    var parentCount = child.parents.size;
    if (parentCount) {
        var parents = toArray(child.parents);
        for (var i = 0; i < parentCount; ++i) {
            callback(parents[i], child);
        }
    }
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    var parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || new Set;
    }
    else if (parent.dirtyChildren.has(child)) {
        // If we already know this child is dirty, then we must have already
        // informed our own parents that we are dirty, so we can terminate
        // the recursion early.
        return;
    }
    parent.dirtyChildren.add(child);
    // If parent was clean before, it just became (possibly) dirty (according to
    // mightBeDirty), since we just added child to parent.dirtyChildren.
    if (parentWasClean) {
        reportDirty(parent);
    }
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
    }
    else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
        return;
    }
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) {
                emptySetPool.push(dc);
            }
            parent.dirtyChildren = null;
        }
    }
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    if (parent.childValues.size > 0) {
        parent.childValues.forEach(function (_value, child) {
            forgetChild(parent, child);
        });
    }
    // Remove this parent Entry from any sets to which it was added by the
    // addToSet method.
    parent.forgetDeps();
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") {
        try {
            maybeUnsubscribe(entry); // Prevent double subscriptions.
            entry.unsubscribe = entry.subscribe.apply(null, args);
        }
        catch (e) {
            // If this Entry has a subscribe function and it threw an exception
            // (or an unsubscribe function it previously returned now throws),
            // return false to indicate that we were not able to subscribe (or
            // unsubscribe), and this Entry should remain dirty.
            entry.setDirty();
            return false;
        }
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}

var EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true, // Fully remove parent Entry from LRU cache and computation graph
};
function dep(options) {
    var depsByKey = new Map();
    var subscribe = options && options.subscribe;
    function depend(key) {
        var parent = parentEntrySlot.getValue();
        if (parent) {
            var dep_1 = depsByKey.get(key);
            if (!dep_1) {
                depsByKey.set(key, dep_1 = new Set);
            }
            parent.dependOn(dep_1);
            if (typeof subscribe === "function") {
                maybeUnsubscribe(dep_1);
                dep_1.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key, entryMethodName) {
        var dep = depsByKey.get(key);
        if (dep) {
            var m_1 = (entryMethodName &&
                hasOwnProperty.call(EntryMethods, entryMethodName)) ? entryMethodName : "setDirty";
            // We have to use toArray(dep).forEach instead of dep.forEach, because
            // modifying a Set while iterating over it can cause elements in the Set
            // to be removed from the Set before they've been iterated over.
            toArray(dep).forEach(function (entry) { return entry[m_1](); });
            depsByKey.delete(key);
            maybeUnsubscribe(dep);
        }
    };
    return depend;
}

function makeDefaultMakeCacheKeyFunction() {
    var keyTrie = new _wry_trie__WEBPACK_IMPORTED_MODULE_0__.Trie(typeof WeakMap === "function");
    return function () {
        return keyTrie.lookupArray(arguments);
    };
}
// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
var defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
var caches = new Set();
function wrap(originalFunction, options) {
    if (options === void 0) { options = Object.create(null); }
    var cache = new Cache(options.max || Math.pow(2, 16), function (entry) { return entry.dispose(); });
    var keyArgs = options.keyArgs;
    var makeCacheKey = options.makeCacheKey ||
        makeDefaultMakeCacheKeyFunction();
    var optimistic = function () {
        var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) {
            return originalFunction.apply(null, arguments);
        }
        var entry = cache.get(key);
        if (!entry) {
            cache.set(key, entry = new Entry(originalFunction));
            entry.subscribe = options.subscribe;
            // Give the Entry the ability to trigger cache.delete(key), even though
            // the Entry itself does not know about key or cache.
            entry.forget = function () { return cache.delete(key); };
        }
        var value = entry.recompute(Array.prototype.slice.call(arguments));
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache.set(key, entry);
        caches.add(cache);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function (cache) { return cache.clean(); });
            caches.clear();
        }
        return value;
    };
    Object.defineProperty(optimistic, "size", {
        get: function () {
            return cache["map"].size;
        },
        configurable: false,
        enumerable: false,
    });
    function dirtyKey(key) {
        var entry = cache.get(key);
        if (entry) {
            entry.setDirty();
        }
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
        var entry = cache.get(key);
        if (entry) {
            return entry.peek();
        }
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
        return cache.delete(key);
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/react-use/esm/useTimeoutFn.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useTimeoutFn.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTimeoutFn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
    var isReady = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () { return ready.current; }, []);
    var set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__esDecorate": () => (/* binding */ __esDecorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__propKey": () => (/* binding */ __propKey),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__runInitializers": () => (/* binding */ __runInitializers),
/* harmony export */   "__setFunctionName": () => (/* binding */ __setFunctionName),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


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

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/cache.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/cache.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloCache": () => (/* binding */ ApolloCache)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");



var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = (0,optimism__WEBPACK_IMPORTED_MODULE_0__.wrap)(_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.getFragmentQueryDocument);
    }
    ApolloCache.prototype.batch = function (options) {
        var _this = this;
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic :
            options.optimistic === false ? null : void 0;
        var updateResult;
        this.performTransaction(function () { return updateResult = options.update(_this); }, optimisticId);
        return updateResult;
    };
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { rootId: options.id || 'ROOT_QUERY', optimistic: optimistic }));
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic: optimistic }));
    };
    ApolloCache.prototype.writeQuery = function (_a) {
        var id = _a.id, data = _a.data, options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["id", "data"]);
        return this.write(Object.assign(options, {
            dataId: id || 'ROOT_QUERY',
            result: data,
        }));
    };
    ApolloCache.prototype.writeFragment = function (_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data,
        }));
    };
    ApolloCache.prototype.updateQuery = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readQuery(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeQuery((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { data: data }));
                return data;
            },
        });
    };
    ApolloCache.prototype.updateFragment = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readFragment(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeFragment((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { data: data }));
                return data;
            },
        });
    };
    return ApolloCache;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/types/common.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/types/common.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissingFieldError": () => (/* binding */ MissingFieldError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MissingFieldError = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MissingFieldError, _super);
    function MissingFieldError(message, path, query, variables) {
        var _a;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.path = path;
        _this.query = query;
        _this.variables = variables;
        if (Array.isArray(_this.path)) {
            _this.missing = _this.message;
            for (var i = _this.path.length - 1; i >= 0; --i) {
                _this.missing = (_a = {}, _a[_this.path[i]] = _this.missing, _a);
            }
        }
        else {
            _this.missing = _this.path;
        }
        _this.__proto__ = MissingFieldError.prototype;
        return _this;
    }
    return MissingFieldError;
}(Error));

//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/entityStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/entityStore.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityStore": () => (/* binding */ EntityStore),
/* harmony export */   "maybeDependOnExistenceOfEntity": () => (/* binding */ maybeDependOnExistenceOfEntity),
/* harmony export */   "supportsResultCaching": () => (/* binding */ supportsResultCaching)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");







var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
var EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.maybeDeepFreeze)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.makeReference)(objOrIdOrRef);
            }
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.makeReference)(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && _helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            _helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (older, newer) {
        var _this = this;
        var dataId;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(older))
            older = older.__ref;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(newer))
            newer = newer.__ref;
        var existing = typeof older === "string"
            ? this.lookup(dataId = older)
            : older;
        var incoming = typeof newer === "string"
            ? this.lookup(dataId = newer)
            : newer;
        if (!incoming)
            return;
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof dataId === "string", "store.merge expects a string ID") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof dataId === "string", 1);
        var merged = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.fieldNameFromStoreName)(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty_1.__typename &&
                    !(existing && existing.__typename) &&
                    this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty_1.__typename;
                }
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                    fieldName: fieldNameOrOptions,
                    from: from || (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.makeReference)(dataId),
                } : fieldNameOrOptions, { store: _this }); },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.fieldNameFromStoreName)(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.maybeDeepFreeze)(fieldValue), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, sharedDetails_1), { fieldName: fieldName, storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options, limit) {
        var evicted = false;
        if (options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer && this !== limit) {
                evicted = this.parent.evict(options, limit) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && _helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var root = this.data[dataId];
            if (!root)
                return found_1;
            var workSet_1 = new Set([root]);
            workSet_1.forEach(function (obj) {
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(obj)) {
                    found_1[obj.__ref] = true;
                }
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isNonNullObject)(obj)) {
                    Object.keys(obj).forEach(function (key) {
                        var child = obj[key];
                        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isNonNullObject)(child)) {
                            workSet_1.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore;
}());

var CacheGroup = (function () {
    function CacheGroup(caching, parent) {
        if (parent === void 0) { parent = null; }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup.prototype.resetCaching = function () {
        this.d = this.caching ? (0,optimism__WEBPACK_IMPORTED_MODULE_1__.dep)() : null;
        this.keyMaker = new _wry_trie__WEBPACK_IMPORTED_MODULE_3__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.canUseWeakMap);
    };
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.fieldNameFromStoreName)(storeFieldName);
            if (fieldName !== storeFieldName) {
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        store.group.depend(entityId, "__exists");
    }
}
(function (EntityStore) {
    var Root = (function (_super) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__extends)(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new _wry_trie__WEBPACK_IMPORTED_MODULE_3__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.canUseWeakMap);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__extends)(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    var ownStoreObject = _this.data[dataId];
                    var parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        _this.delete(dataId);
                    }
                    else if (!ownStoreObject) {
                        _this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                            _this.group.dirty(dataId, storeFieldName);
                        });
                    }
                    else if (ownStoreObject !== parentStoreObject) {
                        Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                            if (!(0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                _this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return _helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.data, dataId) ? (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer;
}(EntityStore));
var Stump = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__extends)(Stump, _super);
    function Stump(root) {
        return _super.call(this, "EntityStore.Stump", root, function () { }, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump.prototype.removeLayer = function () {
        return this;
    };
    Stump.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump;
}(Layer));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return (0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof EntityStore && store.group.caching);
}
//# sourceMappingURL=entityStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/helpers.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/helpers.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeOrFieldNameRegExp": () => (/* binding */ TypeOrFieldNameRegExp),
/* harmony export */   "defaultDataIdFromObject": () => (/* binding */ defaultDataIdFromObject),
/* harmony export */   "extractFragmentContext": () => (/* binding */ extractFragmentContext),
/* harmony export */   "fieldNameFromStoreName": () => (/* binding */ fieldNameFromStoreName),
/* harmony export */   "getTypenameFromStoreObject": () => (/* binding */ getTypenameFromStoreObject),
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn),
/* harmony export */   "isArray": () => (/* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   "isNullish": () => (/* binding */ isNullish),
/* harmony export */   "makeProcessedFieldsMerger": () => (/* binding */ makeProcessedFieldsMerger),
/* harmony export */   "normalizeConfig": () => (/* binding */ normalizeConfig),
/* harmony export */   "selectionSetMatchesResult": () => (/* binding */ selectionSetMatchesResult),
/* harmony export */   "shouldCanonizeResults": () => (/* binding */ shouldCanonizeResults),
/* harmony export */   "storeValueIsStoreObject": () => (/* binding */ storeValueIsStoreObject)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");

var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
    return value === null || value === void 0;
}

function defaultDataIdFromObject(_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                !isNullish(id) ? { id: id } :
                    !isNullish(_id) ? { _id: _id } :
                        void 0;
        }
        if (isNullish(id) && !isNullish(_id)) {
            id = _id;
        }
        if (!isNullish(id)) {
            return "".concat(__typename, ":").concat((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false,
};
function normalizeConfig(config) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.compact)(defaultConfig, config);
}
function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isNonNullObject)(result)) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isField)(field) && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.shouldInclude)(field, variables)) {
                    var key = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.resultKeyNameFromField)(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isNonNullObject)(value) &&
        !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(value) &&
        !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value);
}
function makeProcessedFieldsMerger() {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.DeepMerger;
}
function extractFragmentContext(document, fragments) {
    var fragmentMap = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.createFragmentMap)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.getFragmentDefinitions)(document));
    return {
        fragmentMap: fragmentMap,
        lookupFragment: function (name) {
            var def = fragmentMap[name];
            if (!def && fragments) {
                def = fragments.lookup(name);
            }
            return def || null;
        },
    };
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryCache": () => (/* binding */ InMemoryCache)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _core_cache_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/cache.js */ "./node_modules/@apollo/client/cache/core/cache.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _readFromStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./readFromStore.js */ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js");
/* harmony import */ var _writeToStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./writeToStore.js */ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _policies_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");















var InMemoryCache = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = _reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__.makeVar;
        _this.txCount = 0;
        _this.config = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.normalizeConfig)(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new _policies_js__WEBPACK_IMPORTED_MODULE_6__.Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.init();
        return _this;
    }
    InMemoryCache.prototype.init = function () {
        var rootStore = this.data = new _entityStore_js__WEBPACK_IMPORTED_MODULE_7__.EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        var fragments = this.config.fragments;
        this.storeWriter = new _writeToStore_js__WEBPACK_IMPORTED_MODULE_8__.StoreWriter(this, this.storeReader = new _readFromStore_js__WEBPACK_IMPORTED_MODULE_9__.StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.shouldCanonizeResults)(this.config),
            canon: resetResultIdentities
                ? void 0
                : previousReader && previousReader.canon,
            fragments: fragments,
        }), fragments);
        this.maybeBroadcastWatch = (0,optimism__WEBPACK_IMPORTED_MODULE_1__.wrap)(function (c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_7__.supportsResultCaching)(store)) {
                    var optimistic = c.optimistic, id = c.id, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, (0,_object_canon_js__WEBPACK_IMPORTED_MODULE_10__.canonicalStringify)({ optimistic: optimistic, id: id, variables: variables }));
                }
            }
        });
        new Set([
            this.data.group,
            this.optimisticData.group,
        ]).forEach(function (group) { return group.resetCaching(); });
    };
    InMemoryCache.prototype.restore = function (data) {
        this.init();
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: returnPartialData })).result || null;
        }
        catch (e) {
            if (e instanceof _core_types_common_js__WEBPACK_IMPORTED_MODULE_11__.MissingFieldError) {
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            (0,_reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__.recallCache)(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
                (0,_reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__.forgetCache)(_this);
            }
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function (options) {
        _object_canon_js__WEBPACK_IMPORTED_MODULE_10__.canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) {
                this.resetResultCache(options.resetResultIdentities);
            }
            else if (options.resetResultIdentities) {
                this.storeReader.resetCanon();
            }
        }
        return ids;
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_12__.isReference)(object))
            return object.__ref;
        try {
            return this.policies.identify(object)[0];
        }
        catch (e) {
            __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn(e);
        }
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(options, "id")) {
                return false;
            }
            options = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options, this.data);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function (options) {
        var _this = this;
        this.init();
        _object_canon_js__WEBPACK_IMPORTED_MODULE_10__.canonicalStringify.reset();
        if (options && options.discardWatches) {
            this.watches.forEach(function (watch) { return _this.maybeBroadcastWatch.forget(watch); });
            this.watches.clear();
            (0,_reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__.forgetCache)(this);
        }
        else {
            this.broadcastWatches();
        }
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.batch = function (options) {
        var _this = this;
        var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var updateResult;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                return updateResult = update(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            this.broadcastWatches((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { onWatchUpdated: function (watch) {
                    alreadyDirty.add(watch);
                    return false;
                } }));
        }
        if (typeof optimistic === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        }
        else if (optimistic === false) {
            perform(this.data);
        }
        else {
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { onWatchUpdated: function (watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        alreadyDirty.delete(watch);
                    }
                    return result;
                } }));
            if (alreadyDirty.size) {
                alreadyDirty.forEach(function (watch) { return _this.maybeBroadcastWatch.dirty(watch); });
            }
        }
        else {
            this.broadcastWatches(options);
        }
        return updateResult;
    };
    InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || (optimisticId !== null),
        });
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__.addTypenameToDocument)(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.transformForLink = function (document) {
        var fragments = this.config.fragments;
        return fragments
            ? fragments.transform(document)
            : document;
    };
    InMemoryCache.prototype.broadcastWatches = function (options) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, options); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff(c);
        if (options) {
            if (c.optimistic &&
                typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated &&
                options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                return;
            }
        }
        if (!lastDiff || !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
        }
    };
    return InMemoryCache;
}(_core_cache_js__WEBPACK_IMPORTED_MODULE_14__.ApolloCache));

//# sourceMappingURL=inMemoryCache.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/key-extractor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/key-extractor.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectSpecifierPaths": () => (/* binding */ collectSpecifierPaths),
/* harmony export */   "extractKeyPath": () => (/* binding */ extractKeyPath),
/* harmony export */   "getSpecifierPaths": () => (/* binding */ getSpecifierPaths),
/* harmony export */   "keyArgsFnFromSpecifier": () => (/* binding */ keyArgsFnFromSpecifier),
/* harmony export */   "keyFieldsFnFromSpecifier": () => (/* binding */ keyFieldsFnFromSpecifier)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");



var specifierInfoCache = Object.create(null);
function lookupSpecifierInfo(spec) {
    var cacheKey = JSON.stringify(spec);
    return specifierInfoCache[cacheKey] ||
        (specifierInfoCache[cacheKey] = Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyFieldsFn || (info.keyFieldsFn = function (object, context) {
        var extract = function (from, key) { return context.readField(key, from); };
        var keyObject = context.keyObject = collectSpecifierPaths(specifier, function (schemaKeyPath) {
            var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
            if (extracted === void 0 &&
                object !== context.storeObject &&
                _helpers_js__WEBPACK_IMPORTED_MODULE_1__.hasOwn.call(object, schemaKeyPath[0])) {
                extracted = extractKeyPath(object, schemaKeyPath, extractKey);
            }
            __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join('.'), "' while extracting keyFields from ").concat(JSON.stringify(object))) : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(extracted !== void 0, 2);
            return extracted;
        });
        return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
    });
}
function keyArgsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyArgsFn || (info.keyArgsFn = function (args, _a) {
        var field = _a.field, variables = _a.variables, fieldName = _a.fieldName;
        var collected = collectSpecifierPaths(specifier, function (keyPath) {
            var firstKey = keyPath[0];
            var firstChar = firstKey.charAt(0);
            if (firstChar === "@") {
                if (field && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonEmptyArray)(field.directives)) {
                    var directiveName_1 = firstKey.slice(1);
                    var d = field.directives.find(function (d) { return d.name.value === directiveName_1; });
                    var directiveArgs = d && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.argumentsObjectFromField)(d, variables);
                    return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
                }
                return;
            }
            if (firstChar === "$") {
                var variableName = firstKey.slice(1);
                if (variables && _helpers_js__WEBPACK_IMPORTED_MODULE_1__.hasOwn.call(variables, variableName)) {
                    var varKeyPath = keyPath.slice(0);
                    varKeyPath[0] = variableName;
                    return extractKeyPath(variables, varKeyPath);
                }
                return;
            }
            if (args) {
                return extractKeyPath(args, keyPath);
            }
        });
        var suffix = JSON.stringify(collected);
        if (args || suffix !== "{}") {
            fieldName += ":" + suffix;
        }
        return fieldName;
    });
}
function collectSpecifierPaths(specifier, extractor) {
    var merger = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.DeepMerger;
    return getSpecifierPaths(specifier).reduce(function (collected, path) {
        var _a;
        var toMerge = extractor(path);
        if (toMerge !== void 0) {
            for (var i = path.length - 1; i >= 0; --i) {
                toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
            }
            collected = merger.merge(collected, toMerge);
        }
        return collected;
    }, Object.create(null));
}
function getSpecifierPaths(spec) {
    var info = lookupSpecifierInfo(spec);
    if (!info.paths) {
        var paths_1 = info.paths = [];
        var currentPath_1 = [];
        spec.forEach(function (s, i) {
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(s)) {
                getSpecifierPaths(s).forEach(function (p) { return paths_1.push(currentPath_1.concat(p)); });
                currentPath_1.length = 0;
            }
            else {
                currentPath_1.push(s);
                if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(spec[i + 1])) {
                    paths_1.push(currentPath_1.slice(0));
                    currentPath_1.length = 0;
                }
            }
        });
    }
    return info.paths;
}
function extractKey(object, key) {
    return object[key];
}
function extractKeyPath(object, path, extract) {
    extract = extract || extractKey;
    return normalize(path.reduce(function reducer(obj, key) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(obj)
            ? obj.map(function (child) { return reducer(child, key); })
            : obj && extract(obj, key);
    }, object));
}
function normalize(value) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isNonNullObject)(value)) {
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
            return value.map(normalize);
        }
        return collectSpecifierPaths(Object.keys(value).sort(), function (path) { return extractKeyPath(value, path); });
    }
    return value;
}
//# sourceMappingURL=key-extractor.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/object-canon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/object-canon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectCanon": () => (/* binding */ ObjectCanon),
/* harmony export */   "canonicalStringify": () => (/* binding */ canonicalStringify)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");





function shallowCopy(value) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value)) {
        return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(value)
            ? value.slice(0)
            : (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
}
var ObjectCanon = (function () {
    function ObjectCanon() {
        this.known = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.canUseWeakSet ? WeakSet : Set)();
        this.pool = new _wry_trie__WEBPACK_IMPORTED_MODULE_1__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.canUseWeakMap);
        this.passes = new WeakMap();
        this.keysByJSON = new Map();
        this.empty = this.admit({});
    }
    ObjectCanon.prototype.isKnown = function (value) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value) && this.known.has(value);
    };
    ObjectCanon.prototype.pass = function (value) {
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon.prototype.admit = function (value) {
        var _this = this;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value)) {
            var original = this.passes.get(value);
            if (original)
                return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
                case Array.prototype: {
                    if (this.known.has(value))
                        return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) {
                            Object.freeze(array);
                        }
                    }
                    return node.array;
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(value))
                        return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [proto_1];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function (key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function (key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        if (__DEV__) {
                            Object.freeze(obj_1);
                        }
                    }
                    return node.object;
                }
            }
        }
        return value;
    };
    ObjectCanon.prototype.sortedKeys = function (obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
                this.keysByJSON.set(json, node.keys = { sorted: keys, json: json });
            }
        }
        return node.keys;
    };
    return ObjectCanon;
}());

var canonicalStringify = Object.assign(function (value) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value)) {
        if (stringifyCanon === void 0) {
            resetCanonicalStringify();
        }
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) {
            stringifyCache.set(canonical, json = JSON.stringify(canonical));
        }
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: resetCanonicalStringify,
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon;
    stringifyCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.canUseWeakMap ? WeakMap : Map)();
}
//# sourceMappingURL=object-canon.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/policies.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/policies.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Policies": () => (/* binding */ Policies),
/* harmony export */   "normalizeReadFieldOptions": () => (/* binding */ normalizeReadFieldOptions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");
/* harmony import */ var _key_extractor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-extractor.js */ "./node_modules/@apollo/client/cache/inmemory/key-extractor.js");







_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.getStoreKeyName.setStringify(_object_canon_js__WEBPACK_IMPORTED_MODULE_2__.canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.argumentsObjectFromField)(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ dataIdFromObject: _helpers_js__WEBPACK_IMPORTED_MODULE_4__.defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, partialContext) {
        var _a;
        var policies = this;
        var typename = partialContext && (partialContext.typename ||
            ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename)) || object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        var storeObject = partialContext && partialContext.storeObject || object;
        var context = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, partialContext), { typename: typename, storeObject: storeObject, readField: partialContext && partialContext.readField || function () {
                var options = normalizeReadFieldOptions(arguments, storeObject);
                return policies.readField(options, {
                    store: policies.cache["data"],
                    variables: options.variables,
                });
            } });
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(specifierOrId)) {
                keyFn = (0,_key_extractor_js__WEBPACK_IMPORTED_MODULE_6__.keyFieldsFnFromSpecifier)(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__rest)(_a, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__.hasOwn.call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge :
                    merge === true ? mergeTrueFn :
                        merge === false ? mergeFalseFn :
                            existing.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn =
            keyFields === false ? nullKeyFieldsFn :
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(keyFields) ? (0,_key_extractor_js__WEBPACK_IMPORTED_MODULE_6__.keyFieldsFnFromSpecifier)(keyFields) :
                    typeof keyFields === "function" ? keyFields :
                        existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        keyArgs === false ? simpleKeyArgsFn :
                            (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(keyArgs) ? (0,_key_extractor_js__WEBPACK_IMPORTED_MODULE_6__.keyArgsFnFromSpecifier)(keyArgs) :
                                typeof keyArgs === "function" ? keyArgs :
                                    existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!old || old === which, 3);
            if (old)
                delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(_helpers_js__WEBPACK_IMPORTED_MODULE_4__.TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) {
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_4__.hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) {
                supertypes.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__rest)(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            inbox.splice(0).forEach(function (policy) {
                _this.updateTypePolicy(typename, policy);
            });
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes &&
            this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
                        }
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    i === workQueue_1.length - 1 &&
                    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.selectionSetMatchesResult)(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(specifierOrString)) {
                    keyFn = (0,_key_extractor_js__WEBPACK_IMPORTED_MODULE_6__.keyArgsFnFromSpecifier)(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.storeKeyNameFromField)(fieldSpec.field, fieldSpec.variables)
                : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.getStoreKeyName)(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        if (storeFieldName === false) {
            return fieldName;
        }
        return fieldName === (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.fieldNameFromStoreName)(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.fieldNameFromStoreName)(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isReference)(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return _reactiveVars_js__WEBPACK_IMPORTED_MODULE_7__.cacheSlot.withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.getReadFunction = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return policy && policy.read;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            return incoming;
        }
        if (context.overwrite) {
            existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename: typename, fieldName: field.name.value, field: field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies;
}());

function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.fieldNameFromStoreName)(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isReference,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function () {
            return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store),
    };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
    var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
    var options;
    if (typeof fieldNameOrOptions === "string") {
        options = {
            fieldName: fieldNameOrOptions,
            from: argc > 1 ? from : objectOrReference,
        };
    }
    else {
        options = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, fieldNameOrOptions);
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_4__.hasOwn.call(options, "from")) {
            options.from = objectOrReference;
        }
    }
    if (__DEV__ && options.from === void 0) {
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Undefined 'from' passed to readField with arguments ".concat((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.stringifyForDisplay)(Array.from(readFieldArgs))));
    }
    if (void 0 === options.variables) {
        options.variables = variables;
    }
    return options;
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(existing) || (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(incoming)) {
            throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Cannot automatically merge arrays") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(4);
        }
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isNonNullObject)(existing) &&
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isNonNullObject)(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isReference)(existing) &&
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.storeValueIsStoreObject)(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.storeValueIsStoreObject)(existing) &&
                (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isReference)(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.storeValueIsStoreObject)(existing) &&
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.storeValueIsStoreObject)(incoming)) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, existing), incoming);
            }
        }
        return incoming;
    };
}
//# sourceMappingURL=policies.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/reactiveVars.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheSlot": () => (/* binding */ cacheSlot),
/* harmony export */   "forgetCache": () => (/* binding */ forgetCache),
/* harmony export */   "makeVar": () => (/* binding */ makeVar),
/* harmony export */   "recallCache": () => (/* binding */ recallCache)
/* harmony export */ });
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/context */ "./node_modules/@wry/context/lib/context.esm.js");


var cacheSlot = new _wry_context__WEBPACK_IMPORTED_MODULE_1__.Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set,
            dep: (0,optimism__WEBPACK_IMPORTED_MODULE_0__.dep)(),
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function (listener) { return listener(value); });
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}
//# sourceMappingURL=reactiveVars.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/readFromStore.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreReader": () => (/* binding */ StoreReader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");









;
function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults,
    ];
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.knownResults = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.canUseWeakMap ? WeakMap : Map)();
        this.config = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.compact)(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.shouldCanonizeResults)(config),
        });
        this.canon = config.canon || new _object_canon_js__WEBPACK_IMPORTED_MODULE_5__.ObjectCanon;
        this.executeSelectionSet = (0,optimism__WEBPACK_IMPORTED_MODULE_1__.wrap)(function (options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, other), { result: _this.canon.admit(other.result) });
                }
                return other;
            }
            (0,_entityStore_js__WEBPACK_IMPORTED_MODULE_7__.maybeDependOnExistenceOfEntity)(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
                if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_7__.supportsResultCaching)(context.store)) {
                    return context.store.makeCacheKey(selectionSet, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isReference)(parent) ? parent.__ref : parent, context.varString, canonizeResults);
                }
            }
        });
        this.executeSubSelectedArray = (0,optimism__WEBPACK_IMPORTED_MODULE_1__.wrap)(function (options) {
            (0,_entityStore_js__WEBPACK_IMPORTED_MODULE_7__.maybeDependOnExistenceOfEntity)(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_7__.supportsResultCaching)(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
    }
    StoreReader.prototype.resetCanon = function () {
        this.canon = new _object_canon_js__WEBPACK_IMPORTED_MODULE_5__.ObjectCanon;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.getDefaultValues)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.getQueryDefinition)(query))), variables);
        var rootRef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.makeReference)(rootId);
        var execResult = this.executeSelectionSet({
            selectionSet: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.getMainDefinition)(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({ store: store, query: query, policies: policies, variables: variables, varString: (0,_object_canon_js__WEBPACK_IMPORTED_MODULE_5__.canonicalStringify)(variables), canonizeResults: canonizeResults }, (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.extractFragmentContext)(query, this.config.fragments)),
        });
        var missing;
        if (execResult.missing) {
            missing = [new _core_types_common_js__WEBPACK_IMPORTED_MODULE_10__.MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
            if (!returnPartialData) {
                throw missing[0];
            }
        }
        return {
            result: execResult.result,
            complete: !missing,
            missing: missing,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_7__.supportsResultCaching)(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isReference)(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: this.canon.empty,
                missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object"),
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var typename = store.getFieldValue(objectOrReference, "__typename");
        var objectsToMerge = [];
        var missing;
        var missingMerger = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.DeepMerger();
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
        }
        function handleMissing(result, resultName) {
            var _a;
            if (result.missing) {
                missing = missingMerger.merge(missing, (_a = {}, _a[resultName] = result.missing, _a));
            }
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a, _b;
            if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_12__.shouldInclude)(selection, variables))
                return;
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isField)(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.resultKeyNameFromField)(selection);
                if (fieldValue === void 0) {
                    if (!_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__.addTypenameToDocument.added(selection)) {
                        missing = missingMerger.merge(missing, (_a = {},
                            _a[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isReference)(objectOrReference)
                                ? objectOrReference.__ref + " object"
                                : "object " + JSON.stringify(objectOrReference, null, 2)),
                            _a));
                    }
                }
                else if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_14__.isArray)(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        enclosingRef: enclosingRef,
                        context: context,
                    }), resultName);
                }
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) {
                        fieldValue = _this.canon.pass(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isReference)(fieldValue) ? fieldValue : enclosingRef,
                        context: context,
                    }), resultName);
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
                }
            }
            else {
                var fragment = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_15__.getFragmentFromSelection)(selection, context.lookupFragment);
                if (!fragment && selection.kind === graphql__WEBPACK_IMPORTED_MODULE_16__.Kind.FRAGMENT_SPREAD) {
                    throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("No fragment named ".concat(selection.name.value)) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(5);
                }
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        var result = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.mergeDeepArray)(objectsToMerge);
        var finalResult = { result: result, missing: missing };
        var frozen = context.canonizeResults
            ? this.canon.admit(finalResult)
            : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_17__.maybeDeepFreeze)(finalResult);
        if (frozen.result) {
            this.knownResults.set(frozen.result, selectionSet);
        }
        return frozen;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
        var missing;
        var missingMerger = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.DeepMerger();
        function handleMissing(childResult, i) {
            var _a;
            if (childResult.missing) {
                missing = missingMerger.merge(missing, (_a = {}, _a[i] = childResult.missing, _a));
            }
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_14__.isArray)(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    enclosingRef: enclosingRef,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isReference)(item) ? item : enclosingRef,
                    context: context,
                }), i);
            }
            if (__DEV__) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing,
        };
    };
    return StoreReader;
}());

function firstMissing(tree) {
    try {
        JSON.stringify(tree, function (_, value) {
            if (typeof value === "string")
                throw value;
            return value;
        });
    }
    catch (result) {
        return result;
    }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_18__.isNonNullObject)(value)) {
                __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isReference)(value), "Missing selection set for object of type ".concat((0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.getTypenameFromStoreObject)(store, value), " returned for query field ").concat(field.name.value)) : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isReference)(value), 6);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}
//# sourceMappingURL=readFromStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/writeToStore.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreWriter": () => (/* binding */ StoreWriter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/cloneDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");
/* harmony import */ var _policies_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");









;
function getContextFlavor(context, clientOnly, deferred) {
    var key = "".concat(clientOnly).concat(deferred);
    var flavored = context.flavors.get(key);
    if (!flavored) {
        context.flavors.set(key, flavored = (context.clientOnly === clientOnly &&
            context.deferred === deferred) ? context : (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, context), { clientOnly: clientOnly, deferred: deferred }));
    }
    return flavored;
}
var StoreWriter = (function () {
    function StoreWriter(cache, reader, fragments) {
        this.cache = cache;
        this.reader = reader;
        this.fragments = fragments;
    }
    StoreWriter.prototype.writeToStore = function (store, _a) {
        var _this = this;
        var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
        var operationDefinition = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.getOperationDefinition)(query);
        var merger = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.makeProcessedFieldsMerger)();
        variables = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.getDefaultValues)(operationDefinition)), variables);
        var context = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ store: store, written: Object.create(null), merge: function (existing, incoming) {
                return merger.merge(existing, incoming);
            }, variables: variables, varString: (0,_object_canon_js__WEBPACK_IMPORTED_MODULE_6__.canonicalStringify)(variables) }, (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.extractFragmentContext)(query, this.fragments)), { overwrite: !!overwrite, incomingById: new Map, clientOnly: false, deferred: false, flavors: new Map });
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map },
            context: context,
        });
        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(ref)) {
            throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(7);
        }
        context.incomingById.forEach(function (_a, dataId) {
            var storeObject = _a.storeObject, mergeTree = _a.mergeTree, fieldNodeSet = _a.fieldNodeSet;
            var entityRef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.makeReference)(dataId);
            if (mergeTree && mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(applied)) {
                    return;
                }
                storeObject = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var fieldsWithSelectionSets_1 = Object.create(null);
                fieldNodeSet.forEach(function (field) {
                    if (field.selectionSet) {
                        fieldsWithSelectionSets_1[field.name.value] = true;
                    }
                });
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1[(0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.fieldNameFromStoreName)(storeFieldName)] === true;
                };
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(storeObject).forEach(function (storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, storeObject);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        var incoming = Object.create(null);
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.getTypenameFromResult)(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incoming.__typename = typename;
        }
        var readField = function () {
            var options = (0,_policies_js__WEBPACK_IMPORTED_MODULE_8__.normalizeReadFieldOptions)(arguments, incoming, context.variables);
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(options.from)) {
                var info = context.incomingById.get(options.from.__ref);
                if (info) {
                    var result_1 = policies.readField((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { from: info.storeObject }), context);
                    if (result_1 !== void 0) {
                        return result_1;
                    }
                }
            }
            return policies.readField(options, context);
        };
        var fieldNodeSet = new Set();
        this.flattenFields(selectionSet, result, context, typename).forEach(function (context, field) {
            var _a;
            var resultFieldKey = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.resultKeyNameFromField)(field);
            var value = result[resultFieldKey];
            fieldNodeSet.add(field);
            if (value !== void 0) {
                var storeFieldName = policies.getStoreFieldName({
                    typename: typename,
                    fieldName: field.name.value,
                    field: field,
                    variables: context.variables,
                });
                var childTree = getChildMergeTree(mergeTree, storeFieldName);
                var incomingValue = _this.processFieldValue(value, field, field.selectionSet
                    ? getContextFlavor(context, false, false)
                    : context, childTree);
                var childTypename = void 0;
                if (field.selectionSet &&
                    ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(incomingValue) ||
                        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(incomingValue))) {
                    childTypename = readField("__typename", incomingValue);
                }
                var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
                if (merge) {
                    childTree.info = {
                        field: field,
                        typename: typename,
                        merge: merge,
                    };
                }
                else {
                    maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                }
                incoming = context.merge(incoming, (_a = {},
                    _a[storeFieldName] = incomingValue,
                    _a));
            }
            else if (__DEV__ &&
                !context.clientOnly &&
                !context.deferred &&
                !_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.addTypenameToDocument.added(field) &&
                !policies.getReadFunction(typename, field.name.value)) {
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error("Missing field '".concat((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.resultKeyNameFromField)(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1000));
            }
        });
        try {
            var _b = policies.identify(result, {
                typename: typename,
                selectionSet: selectionSet,
                fragmentMap: context.fragmentMap,
                storeObject: incoming,
                readField: readField,
            }), id = _b[0], keyObject = _b[1];
            dataId = dataId || id;
            if (keyObject) {
                incoming = context.merge(incoming, keyObject);
            }
        }
        catch (e) {
            if (!dataId)
                throw e;
        }
        if ("string" === typeof dataId) {
            var dataRef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.makeReference)(dataId);
            var sets = context.written[dataId] || (context.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0)
                return dataRef;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
                return dataRef;
            }
            var previous_1 = context.incomingById.get(dataId);
            if (previous_1) {
                previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
                previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
                fieldNodeSet.forEach(function (field) { return previous_1.fieldNodeSet.add(field); });
            }
            else {
                context.incomingById.set(dataId, {
                    storeObject: incoming,
                    mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                    fieldNodeSet: fieldNodeSet,
                });
            }
            return dataRef;
        }
        return incoming;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return __DEV__ ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.cloneDeep)(value) : value;
        }
        if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_11__.isArray)(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    StoreWriter.prototype.flattenFields = function (selectionSet, result, context, typename) {
        if (typename === void 0) { typename = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.getTypenameFromResult)(result, selectionSet, context.fragmentMap); }
        var fieldMap = new Map();
        var policies = this.cache.policies;
        var limitingTrie = new _wry_trie__WEBPACK_IMPORTED_MODULE_2__.Trie(false);
        (function flatten(selectionSet, inheritedContext) {
            var visitedNode = limitingTrie.lookup(selectionSet, inheritedContext.clientOnly, inheritedContext.deferred);
            if (visitedNode.visited)
                return;
            visitedNode.visited = true;
            selectionSet.selections.forEach(function (selection) {
                if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_12__.shouldInclude)(selection, context.variables))
                    return;
                var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
                if (!(clientOnly && deferred) &&
                    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_11__.isNonEmptyArray)(selection.directives)) {
                    selection.directives.forEach(function (dir) {
                        var name = dir.name.value;
                        if (name === "client")
                            clientOnly = true;
                        if (name === "defer") {
                            var args = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.argumentsObjectFromField)(dir, context.variables);
                            if (!args || args.if !== false) {
                                deferred = true;
                            }
                        }
                    });
                }
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isField)(selection)) {
                    var existing = fieldMap.get(selection);
                    if (existing) {
                        clientOnly = clientOnly && existing.clientOnly;
                        deferred = deferred && existing.deferred;
                    }
                    fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
                }
                else {
                    var fragment = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__.getFragmentFromSelection)(selection, context.lookupFragment);
                    if (!fragment && selection.kind === graphql__WEBPACK_IMPORTED_MODULE_14__.Kind.FRAGMENT_SPREAD) {
                        throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("No fragment named ".concat(selection.name.value)) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(8);
                    }
                    if (fragment &&
                        policies.fragmentMatches(fragment, typename, result, context.variables)) {
                        flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                    }
                }
            });
        })(selectionSet, context);
        return fieldMap;
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(incoming)) {
            var e_1 = (!(0,_helpers_js__WEBPACK_IMPORTED_MODULE_11__.isArray)(incoming) &&
                ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(existing) || (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(existing))) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_11__.isArray)(from)
                    ? (typeof name === "number" ? from[name] : void 0)
                    : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (void 0 === iVal)
                    return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                incoming = ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_11__.isArray)(i_1) ? i_1.slice(0) : (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());

var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
    if (!left || mergeTreeIsEmpty(left))
        return right;
    var info = left.info && right.info ? (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map :
        left.map.size ? left.map : right.map;
    var merged = { info: info, map: map };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(existing))
        return;
    if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.fieldNameFromStoreName)(storeFieldName);
    var typeDotName = "".concat(parentType, ".").concat(fieldName);
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!(0,_helpers_js__WEBPACK_IMPORTED_MODULE_11__.isArray)(existing) &&
        !(0,_helpers_js__WEBPACK_IMPORTED_MODULE_11__.isArray)(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have an ID or a custom merge function, or "
        : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1000), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1000), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}
//# sourceMappingURL=writeToStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/ApolloClient.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/core/ApolloClient.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloClient": () => (/* binding */ ApolloClient),
/* harmony export */   "mergeOptions": () => (/* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeOptions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../version.js */ "./node_modules/@apollo/client/version.js");
/* harmony import */ var _link_http_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/http/index.js */ "./node_modules/@apollo/client/link/http/HttpLink.js");
/* harmony import */ var _QueryManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QueryManager.js */ "./node_modules/@apollo/client/core/QueryManager.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeOptions.js");







var hasSuggestedDevtools = false;


var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' &&
            !window.__APOLLO_CLIENT__ &&
            __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new _link_http_index_js__WEBPACK_IMPORTED_MODULE_2__.HttpLink({ uri: uri, credentials: credentials, headers: headers })
                : _link_core_index_js__WEBPACK_IMPORTED_MODULE_3__.ApolloLink.empty();
        }
        if (!cache) {
            throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(9);
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && connectToDevTools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self &&
                !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) {
                        url = "https://chrome.google.com/webstore/detail/" +
                            "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    }
                    else if (ua.indexOf("Firefox/") > -1) {
                        url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                }
                if (url) {
                    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.log("Download the Apollo DevTools for a better development " +
                        "experience: " + url);
                }
            }
        }
        this.version = _version_js__WEBPACK_IMPORTED_MODULE_4__.version;
        this.localState = new _LocalState_js__WEBPACK_IMPORTED_MODULE_5__.LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new _QueryManager_js__WEBPACK_IMPORTED_MODULE_6__.QueryManager({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            } : void 0,
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeOptions)(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeOptions)(this.defaultOptions.query, options);
        }
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.fetchPolicy !== 'cache-and-network', 10);
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeOptions)(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        var ref = this.cache.writeQuery(options);
        if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
        }
        return ref;
    };
    ApolloClient.prototype.writeFragment = function (options) {
        var ref = this.cache.writeFragment(options);
        if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
        }
        return ref;
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return (0,_link_core_index_js__WEBPACK_IMPORTED_MODULE_8__.execute)(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: false,
        }); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: true,
        }); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.refetchQueries = function (options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function (result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result = Promise.all(results);
        result.queries = queries;
        result.results = results;
        result.catch(function (error) {
            __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
        });
        return result;
    };
    ApolloClient.prototype.getObservableQueries = function (include) {
        if (include === void 0) { include = "active"; }
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());

//# sourceMappingURL=ApolloClient.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/LocalState.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/core/LocalState.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalState": () => (/* binding */ LocalState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");





var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.selectionsToResolveCache = new WeakMap();
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.hasDirectives)(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.removeClientSetsFromDocument)(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, context), { cache: cache, getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, variables), data.exportedVariables)); })];
                }
                return [2, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        (0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql__WEBPACK_IMPORTED_MODULE_5__.BREAK;
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.buildQueryFromSelectionSet)(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a, cache, client, execContext, isClientFieldDescendant;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                mainDefinition = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.getMainDefinition)(document);
                fragments = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.getFragmentDefinitions)(document);
                fragmentMap = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.createFragmentMap)(fragments);
                selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
                definitionOperation = mainDefinition.operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, context), { cache: cache, client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    selectionsToResolve: selectionsToResolve,
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                isClientFieldDescendant = false;
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, isClientFieldDescendant, rootValue, execContext) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                        if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                            return [2];
                        }
                        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.shouldInclude)(selection, variables)) {
                            return [2];
                        }
                        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isField)(selection)) {
                            return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.resultKeyNameFromField)(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isInlineFragment)(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                            __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, "No fragment named ".concat(selection.name.value)) : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, 11);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeepArray)(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, isClientFieldDescendant, rootValue, execContext) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                if (!rootValue) {
                    return [2, null];
                }
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.resultKeyNameFromField)(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(_cache_index_js__WEBPACK_IMPORTED_MODULE_9__.cacheSlot.withValue(this.cache, resolve, [
                                rootValue,
                                (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.argumentsObjectFromField)(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        var _a, _b;
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        var isClientField = (_b = (_a = field.directives) === null || _a === void 0 ? void 0 : _a.some(function (d) { return d.name.value === 'client'; })) !== null && _b !== void 0 ? _b : false;
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, isClientFieldDescendant, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
            }
        }));
    };
    LocalState.prototype.collectSelectionsToResolve = function (mainDefinition, fragmentMap) {
        var isSingleASTNode = function (node) { return !Array.isArray(node); };
        var selectionsToResolveCache = this.selectionsToResolveCache;
        function collectByDefinition(definitionNode) {
            if (!selectionsToResolveCache.has(definitionNode)) {
                var matches_1 = new Set();
                selectionsToResolveCache.set(definitionNode, matches_1);
                (0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(definitionNode, {
                    Directive: function (node, _, __, ___, ancestors) {
                        if (node.name.value === 'client') {
                            ancestors.forEach(function (node) {
                                if (isSingleASTNode(node) && (0,graphql__WEBPACK_IMPORTED_MODULE_10__.isSelectionNode)(node)) {
                                    matches_1.add(node);
                                }
                            });
                        }
                    },
                    FragmentSpread: function (spread, _, __, ___, ancestors) {
                        var fragment = fragmentMap[spread.name.value];
                        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, "No fragment named ".concat(spread.name.value)) : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, 12);
                        var fragmentSelections = collectByDefinition(fragment);
                        if (fragmentSelections.size > 0) {
                            ancestors.forEach(function (node) {
                                if (isSingleASTNode(node) && (0,graphql__WEBPACK_IMPORTED_MODULE_10__.isSelectionNode)(node)) {
                                    matches_1.add(node);
                                }
                            });
                            matches_1.add(spread);
                            fragmentSelections.forEach(function (selection) {
                                matches_1.add(selection);
                            });
                        }
                    }
                });
            }
            return selectionsToResolveCache.get(definitionNode);
        }
        return collectByDefinition(mainDefinition);
    };
    return LocalState;
}());

//# sourceMappingURL=LocalState.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/ObservableQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/core/ObservableQuery.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservableQuery": () => (/* binding */ ObservableQuery),
/* harmony export */   "logMissingFieldErrors": () => (/* binding */ logMissingFieldErrors),
/* harmony export */   "reobserveCacheFirst": () => (/* binding */ reobserveCacheFirst)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/cloneDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/observables/subclassing.js");





var assign = Object.assign, hasOwnProperty = Object.hasOwnProperty;
var ObservableQuery = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function (observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) {
                    subObserver.error = defaultSubscriptionObserverErrorCallback;
                }
            }
            catch (_a) { }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            var last = _this.last;
            if (last && last.error) {
                observer.error && observer.error(last.error);
            }
            else if (last && last.result) {
                observer.next && observer.next(last.result);
            }
            if (first) {
                _this.reobserve().catch(function () { });
            }
            return function () {
                if (_this.observers.delete(observer) && !_this.observers.size) {
                    _this.tearDownQuery();
                }
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.queryInfo = queryInfo;
        _this.queryManager = queryManager;
        _this.isTornDown = false;
        var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
        var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? (fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy) : _f;
        _this.options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { initialFetchPolicy: initialFetchPolicy, fetchPolicy: fetchPolicy });
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getOperationDefinition)(_this.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "query", {
        get: function () {
            return this.queryManager.transform(this.options.query).document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.ready;
        var result = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, lastResult), { loading: (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.isNetworkRequestInFlight)(networkStatus), networkStatus: networkStatus });
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
        if (fetchPolicy === 'network-only' ||
            fetchPolicy === 'no-cache' ||
            fetchPolicy === 'standby' ||
            this.queryManager.transform(this.options.query).hasForcedResolvers) {
        }
        else {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) {
                result.data = diff.result;
            }
            if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(result.data, {})) {
                result.data = void 0;
            }
            if (diff.complete) {
                delete result.partial;
                if (diff.complete &&
                    result.networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.loading &&
                    (fetchPolicy === 'cache-first' ||
                        fetchPolicy === 'cache-only')) {
                    result.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.ready;
                    result.loading = false;
                }
            }
            else {
                result.partial = true;
            }
            if (__DEV__ &&
                !diff.complete &&
                !this.options.partialRefetch &&
                !result.loading &&
                !result.data &&
                !result.error) {
                logMissingFieldErrors(diff.missing);
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult, variables) {
        return (!this.last ||
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.last.result, newResult) ||
            (variables && !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.last.variables, variables)));
    };
    ObservableQuery.prototype.getLast = function (key, variablesMustMatch) {
        var last = this.last;
        if (last &&
            last[key] &&
            (!variablesMustMatch || (0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(last.variables, this.variables))) {
            return last[key];
        }
    };
    ObservableQuery.prototype.getLastResult = function (variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery.prototype.getLastError = function (variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.last;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var _a;
        var reobserveOptions = {
            pollInterval: 0,
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-and-network') {
            reobserveOptions.fetchPolicy = fetchPolicy;
        }
        else if (fetchPolicy === 'no-cache') {
            reobserveOptions.fetchPolicy = 'no-cache';
        }
        else {
            reobserveOptions.fetchPolicy = 'network-only';
        }
        if (__DEV__ && variables && hasOwnProperty.call(variables, "variables")) {
            var queryDef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getQueryDefinition)(this.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function (v) { return v.variable.name.value === "variables"; })) {
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
            }
        }
        if (variables && !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (fetchMoreOptions.query ? fetchMoreOptions : (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.options), { query: this.query }), fetchMoreOptions), { variables: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        var queryInfo = this.queryInfo;
        var originalNetworkStatus = queryInfo.networkStatus;
        queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore;
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.observe();
        }
        var updatedQuerySet = new Set();
        return this.queryManager.fetchQuery(qid, combinedOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore).then(function (fetchMoreResult) {
            _this.queryManager.removeQuery(qid);
            if (queryInfo.networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore) {
                queryInfo.networkStatus = originalNetworkStatus;
            }
            _this.queryManager.cache.batch({
                update: function (cache) {
                    var updateQuery = fetchMoreOptions.updateQuery;
                    if (updateQuery) {
                        cache.updateQuery({
                            query: _this.query,
                            variables: _this.variables,
                            returnPartialData: true,
                            optimistic: false,
                        }, function (previous) { return updateQuery(previous, {
                            fetchMoreResult: fetchMoreResult.data,
                            variables: combinedOptions.variables,
                        }); });
                    }
                    else {
                        cache.writeQuery({
                            query: combinedOptions.query,
                            variables: combinedOptions.variables,
                            data: fetchMoreResult.data,
                        });
                    }
                },
                onWatchUpdated: function (watch) {
                    updatedQuerySet.add(watch.query);
                },
            });
            return fetchMoreResult;
        }).finally(function () {
            if (!updatedQuerySet.has(_this.query)) {
                reobserveCacheFirst(_this);
            }
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.reobserve({
            fetchPolicy: this.options.initialFetchPolicy,
            variables: variables,
        }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery.prototype.applyNextFetchPolicy = function (reason, options) {
        if (options.nextFetchPolicy) {
            var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
            if (fetchPolicy === "standby") {
            }
            else if (typeof options.nextFetchPolicy === "function") {
                options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
                    reason: reason,
                    options: options,
                    observable: this,
                    initialFetchPolicy: initialFetchPolicy,
                });
            }
            else if (reason === "variables-changed") {
                options.fetchPolicy = initialFetchPolicy;
            }
            else {
                options.fetchPolicy = options.nextFetchPolicy;
            }
        }
        return options.fetchPolicy;
    };
    ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery.prototype.updatePolling = function () {
        var _this = this;
        if (this.queryManager.ssrMode) {
            return;
        }
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(pollInterval, 'Attempted to start a polling query without a polling interval.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(pollInterval, 13);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (!(0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.isNetworkRequestInFlight)(_this.queryInfo.networkStatus)) {
                    _this.reobserve({
                        fetchPolicy: _this.options.initialFetchPolicy === 'no-cache' ? 'no-cache' : 'network-only',
                    }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
            ;
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery.prototype.updateLastResult = function (newResult, variables) {
        if (variables === void 0) { variables = this.variables; }
        this.last = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.last), { result: this.queryManager.assumeImmutableResults
                ? newResult
                : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(newResult), variables: variables });
        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.isNonEmptyArray)(newResult.errors)) {
            delete this.last.error;
        }
        return this.last;
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.refetch ||
            newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore ||
            newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var oldFetchPolicy = this.options.fetchPolicy;
        var mergedOptions = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.compact)(this.options, newOptions || {});
        var options = useDisposableConcast
            ? mergedOptions
            : assign(this.options, mergedOptions);
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions &&
                newOptions.variables &&
                !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(newOptions.variables, oldVariables) &&
                options.fetchPolicy !== "standby" &&
                options.fetchPolicy === oldFetchPolicy) {
                this.applyNextFetchPolicy("variables-changed", options);
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.setVariables;
                }
            }
        }
        var variables = options.variables && (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options.variables);
        var concast = this.fetch(options, newNetworkStatus);
        var observer = {
            next: function (result) {
                _this.reportResult(result, variables);
            },
            error: function (error) {
                _this.reportError(error, variables);
            },
        };
        if (!useDisposableConcast) {
            if (this.concast && this.observer) {
                this.concast.removeObserver(this.observer);
            }
            this.concast = concast;
            this.observer = observer;
        }
        concast.addObserver(observer);
        return concast.promise;
    };
    ObservableQuery.prototype.observe = function () {
        this.reportResult(this.getCurrentResult(false), this.variables);
    };
    ObservableQuery.prototype.reportResult = function (result, variables) {
        var lastError = this.getLastError();
        if (lastError || this.isDifferentFromLastResult(result, variables)) {
            if (lastError || !result.partial || this.options.returnPartialData) {
                this.updateLastResult(result, variables);
            }
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.iterateObserversSafely)(this.observers, 'next', result);
        }
    };
    ObservableQuery.prototype.reportError = function (error, variables) {
        var errorResult = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.getLastResult()), { error: error, errors: error.graphQLErrors, networkStatus: _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.error, loading: false });
        this.updateLastResult(errorResult, variables);
        (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.iterateObserversSafely)(this.observers, 'error', this.last.error = error);
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
        }
        this.stopPolling();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery;
}(_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.Observable));

(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.fixObservableSubclass)(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
    var _a = obsQuery.options, fetchPolicy = _a.fetchPolicy, nextFetchPolicy = _a.nextFetchPolicy;
    if (fetchPolicy === "cache-and-network" ||
        fetchPolicy === "network-only") {
        return obsQuery.reobserve({
            fetchPolicy: "cache-first",
            nextFetchPolicy: function () {
                this.nextFetchPolicy = nextFetchPolicy;
                if (typeof nextFetchPolicy === "function") {
                    return nextFetchPolicy.apply(this, arguments);
                }
                return fetchPolicy;
            },
        });
    }
    return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error('Unhandled error', error.message, error.stack);
}
function logMissingFieldErrors(missing) {
    if (__DEV__ && missing) {
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
    }
}
//# sourceMappingURL=ObservableQuery.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryInfo.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryInfo.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryInfo": () => (/* binding */ QueryInfo),
/* harmony export */   "shouldWriteResult": () => (/* binding */ shouldWriteResult)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _utilities_common_incrementalResult_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/common/incrementalResult.js */ "./node_modules/@apollo/client/utilities/common/incrementalResult.js");
/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/errorHandling.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");







;
var destructiveMethodCounts = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
            return original.apply(this, arguments);
        };
    }
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = (function () {
    function QueryInfo(queryManager, queryId) {
        if (queryId === void 0) { queryId = queryManager.generateQueryId(); }
        this.queryId = queryId;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.loading;
        if (this.variables &&
            this.networkStatus !== _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.loading &&
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(this.variables, query.variables)) {
            networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.setVariables;
        }
        if (!(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(query.variables, this.variables)) {
            this.lastDiff = void 0;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.reset = function () {
        cancelNotifyTimeout(this);
        this.dirty = false;
    };
    QueryInfo.prototype.getDiff = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
        }
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo.prototype.updateLastDiff = function (diff, options) {
        this.lastDiff = diff ? {
            diff: diff,
            options: options || this.getDiffOptions(),
        } : void 0;
    };
    QueryInfo.prototype.getDiffOptions = function (variables) {
        var _a;
        if (variables === void 0) { variables = this.variables; }
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults,
        };
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty &&
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        var _this = this;
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function () {
                var diff = _this.getDiff();
                if (diff.fromOptimisticTransaction) {
                    oq["observe"]();
                }
                else {
                    (0,_ObservableQuery_js__WEBPACK_IMPORTED_MODULE_3__.reobserveCacheFirst)(oq);
                }
            });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if ((0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.isNetworkRequestInFlight)(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo.prototype.cancel;
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        var watchOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, this.getDiffOptions(variables)), { watcher: this, callback: function (diff) { return _this.setDiff(diff); } });
        if (!this.lastWatch ||
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(variables, lastWrite.variables) &&
            (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, document, options, cacheWriteBehavior) {
        var _this = this;
        var merger = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.DeepMerger();
        var graphQLErrors = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.isNonEmptyArray)(result.errors)
            ? result.errors.slice(0)
            : [];
        this.reset();
        if ('incremental' in result && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.isNonEmptyArray)(result.incremental)) {
            var mergedData = (0,_utilities_common_incrementalResult_js__WEBPACK_IMPORTED_MODULE_7__.mergeIncrementalData)(this.getDiff().result, result);
            result.data = mergedData;
        }
        else if ('hasNext' in result && result.hasNext) {
            var diff = this.getDiff();
            result.data = merger.merge(diff.result, result.data);
        }
        this.graphQLErrors = graphQLErrors;
        if (options.fetchPolicy === 'no-cache') {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
        }
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: document,
                            data: result.data,
                            variables: options.variables,
                            overwrite: cacheWriteBehavior === 1,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        if (_this.lastDiff &&
                            _this.lastDiff.diff.complete) {
                            result.data = _this.lastDiff.diff.result;
                            return;
                        }
                    }
                    var diffOptions = _this.getDiffOptions(options.variables);
                    var diff = cache.diff(diffOptions);
                    if (!_this.stopped) {
                        _this.updateWatch(options.variables);
                    }
                    _this.updateLastDiff(diff, diffOptions);
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());

function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" ||
        errorPolicy === "all";
    var writeWithErrors = !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.graphQLResultHasError)(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}
//# sourceMappingURL=QueryInfo.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryManager.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryManager.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryManager": () => (/* binding */ QueryManager)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony import */ var _utilities_common_incrementalResult_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/common/incrementalResult.js */ "./node_modules/@apollo/client/utilities/common/incrementalResult.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/observables/asyncMap.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/errorHandling.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/observables/Concast.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");
/* harmony import */ var _QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QueryInfo.js */ "./node_modules/@apollo/client/core/QueryInfo.js");













var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, defaultOptions = _a.defaultOptions, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new _LocalState_js__WEBPACK_IMPORTED_MODULE_3__.LocalState({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if ((this.onBroadcast = onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError('QueryManager stopped while query was in flight') : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(14));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var _b, _c;
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _d = _a.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _f = _a.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a.keepRootFields, context = _a.context;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var mutationId, _h, document, hasClientExports, mutationStoreValue, self;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(mutation, 15);
                        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', 16);
                        mutationId = this.generateMutationId();
                        _h = this.transform(mutation), document = _h.document, hasClientExports = _h.hasClientExports;
                        mutation = this.cache.transformForLink(document);
                        variables = this.getVariables(mutation, variables);
                        if (!hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = (_j.sent());
                        _j.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        if (optimisticResponse) {
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                fetchPolicy: fetchPolicy,
                                errorPolicy: errorPolicy,
                                context: context,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                                keepRootFields: keepRootFields,
                            });
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.asyncMap)(self.getObservableFromLink(mutation, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, context), { optimisticResponse: optimisticResponse }), variables, false), function (result) {
                                    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.graphQLResultHasError)(result) && errorPolicy === 'none') {
                                        throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({
                                            graphQLErrors: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.getGraphQLErrorsFromResult)(result),
                                        });
                                    }
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, result);
                                    if (typeof refetchQueries === "function") {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    if (errorPolicy === 'ignore' &&
                                        (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.graphQLResultHasError)(storeResult)) {
                                        delete storeResult.errors;
                                    }
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields,
                                    });
                                }).subscribe({
                                    next: function (storeResult) {
                                        self.broadcastQueries();
                                        if (!('hasNext' in storeResult) || storeResult.hasNext === false) {
                                            resolve(storeResult);
                                        }
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(err instanceof _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError ? err : new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && (0,_QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.shouldWriteResult)(result, mutation.errorPolicy)) {
            if (!(0,_utilities_common_incrementalResult_js__WEBPACK_IMPORTED_MODULE_9__.isExecutionPatchIncrementalResult)(result)) {
                cacheWrites.push({
                    result: result.data,
                    dataId: 'ROOT_MUTATION',
                    query: mutation.document,
                    variables: mutation.variables,
                });
            }
            if ((0,_utilities_common_incrementalResult_js__WEBPACK_IMPORTED_MODULE_9__.isExecutionPatchIncrementalResult)(result) && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.isNonEmptyArray)(result.incremental)) {
                var diff = cache.diff({
                    id: "ROOT_MUTATION",
                    query: this.transform(mutation.document).asQuery,
                    variables: mutation.variables,
                    optimistic: false,
                    returnPartialData: true,
                });
                var mergedData = void 0;
                if (diff.result) {
                    mergedData = (0,_utilities_common_incrementalResult_js__WEBPACK_IMPORTED_MODULE_9__.mergeIncrementalData)(diff.result, result);
                }
                if (typeof mergedData !== 'undefined') {
                    result.data = mergedData;
                    cacheWrites.push({
                        result: mergedData,
                        dataId: 'ROOT_MUTATION',
                        query: mutation.document,
                        variables: mutation.variables,
                    });
                }
            }
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: result,
                            queryName: document && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.getOperationName)(document) || void 0,
                            queryVariables: variables,
                        });
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
        }
        if (cacheWrites.length > 0 ||
            mutation.refetchQueries ||
            mutation.update ||
            mutation.onQueryUpdated ||
            mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function (cache) {
                    if (!skipCache) {
                        cacheWrites.forEach(function (write) { return cache.write(write); });
                    }
                    var update = mutation.update;
                    var isFinalResult = !(0,_utilities_common_incrementalResult_js__WEBPACK_IMPORTED_MODULE_9__.isExecutionPatchResult)(result) ||
                        ((0,_utilities_common_incrementalResult_js__WEBPACK_IMPORTED_MODULE_9__.isExecutionPatchIncrementalResult)(result) && !result.hasNext);
                    if (update) {
                        if (!skipCache) {
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true,
                            });
                            if (diff.complete) {
                                result = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, result), { data: diff.result });
                                if ('incremental' in result) {
                                    delete result.incremental;
                                }
                                if ('hasNext' in result) {
                                    delete result.hasNext;
                                }
                            }
                        }
                        if (isFinalResult) {
                            update(cache, result, {
                                context: mutation.context,
                                variables: mutation.variables,
                            });
                        }
                    }
                    if (!skipCache && !mutation.keepRootFields && isFinalResult) {
                        cache.modify({
                            id: 'ROOT_MUTATION',
                            fields: function (value, _a) {
                                var fieldName = _a.fieldName, DELETE = _a.DELETE;
                                return fieldName === "__typename" ? value : DELETE;
                            },
                        });
                    }
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null,
            }).forEach(function (result) { return results_1.push(result); });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                return Promise.all(results_1).then(function () { return result; });
            }
        }
        return Promise.resolve(result);
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function"
            ? optimisticResponse(mutation.variables)
            : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var noConnection = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_12__.removeConnectionDirectiveFromDocument)(transformed);
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = noConnection && this.localState.serverQuery(noConnection);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__.hasClientExports)(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.getDefaultValues)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.getOperationDefinition)(transformed)),
                asQuery: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, transformed), { definitions: transformed.definitions.map(function (def) {
                        if (def.kind === "OperationDefinition" &&
                            def.operation !== "query") {
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, def), { operation: "query" });
                        }
                        return def;
                    }) })
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.QueryInfo(this);
        var observable = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_14__.ObservableQuery({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: observable.query,
            observableQuery: observable,
            variables: observable.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options, queryId) {
        var _this = this;
        if (queryId === void 0) { queryId = this.generateQueryId(); }
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query, 17);
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query.kind === 'Document', 18);
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.returnPartialData, 19);
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.pollInterval, 20);
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function (options) {
        if (options === void 0) { options = {
            discardWatches: true,
        }; }
        this.cancelPendingFetches(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError('Store reset while query was in flight (not completed in link chain)') : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(21));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_15__.NetworkStatus.loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        return this.cache.reset(options);
    };
    QueryManager.prototype.getObservableQueries = function (include) {
        var _this = this;
        if (include === void 0) { include = "active"; }
        var queries = new Map();
        var queryNamesAndDocs = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach(function (desc) {
                if (typeof desc === "string") {
                    queryNamesAndDocs.set(desc, false);
                }
                else if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_16__.isDocumentNode)(desc)) {
                    queryNamesAndDocs.set(_this.transform(desc).document, false);
                }
                else if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_17__.isNonNullObject)(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.queries.forEach(function (_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" ||
                    (include === "active" && !oq.hasObservers())) {
                    return;
                }
                if (include === "active" ||
                    (queryName && queryNamesAndDocs.has(queryName)) ||
                    (document && queryNamesAndDocs.has(document))) {
                    queries.set(queryId, oq);
                    if (queryName)
                        queryNamesAndDocs.set(queryName, true);
                    if (document)
                        queryNamesAndDocs.set(document, true);
                }
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
                var queryId = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_18__.makeUniqueId)("legacyOneTimeQuery");
                var queryInfo = _this.getQuery(queryId).init({
                    document: options.query,
                    variables: options.variables,
                });
                var oq = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_14__.ObservableQuery({
                    queryManager: _this,
                    queryInfo: queryInfo,
                    options: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, options), { fetchPolicy: "network-only" }),
                });
                (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(oq.queryId === queryId);
                queryInfo.setObservableQuery(oq);
                queries.set(queryId, oq);
            });
        }
        if (__DEV__ && queryNamesAndDocs.size) {
            queryNamesAndDocs.forEach(function (included, nameOrDoc) {
                if (!included) {
                    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
                }
            });
        }
        return queries;
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby ||
                (fetchPolicy !== "standby" &&
                    fetchPolicy !== "cache-only")) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables).map(function (result) {
                if (fetchPolicy !== 'no-cache') {
                    if ((0,_QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.shouldWriteResult)(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.graphQLResultHasError)(result)) {
                    throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__.Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        if (this.queries.has(queryId)) {
            this.getQuery(queryId).stop();
            this.queries.delete(queryId);
        }
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.getOperationName)(serverQuery) || void 0,
                context: this.prepareContext((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = (0,_cache_index_js__WEBPACK_IMPORTED_MODULE_20__.canonicalStringify)(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_21__.Concast([
                        (0,_link_core_index_js__WEBPACK_IMPORTED_MODULE_22__.execute)(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.beforeNext(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_21__.Concast([
                    (0,_link_core_index_js__WEBPACK_IMPORTED_MODULE_22__.execute)(link, operation)
                ]);
            }
        }
        else {
            observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_21__.Concast([
                _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__.Observable.of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.asyncMap)(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        var linkDocument = this.cache.transformForLink(this.transform(queryInfo.document).document);
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.asyncMap)(this.getObservableFromLink(linkDocument, options.context, options.variables), function (result) {
            var graphQLErrors = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.getGraphQLErrorsFromResult)(result);
            var hasErrors = graphQLErrors.length > 0;
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({
                        graphQLErrors: graphQLErrors,
                    }));
                }
                queryInfo.markResult(result, linkDocument, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: _networkStatus_js__WEBPACK_IMPORTED_MODULE_15__.NetworkStatus.ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = graphQLErrors;
                aqr.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_15__.NetworkStatus.error;
            }
            return aqr;
        }, function (networkError) {
            var error = (0,_errors_index_js__WEBPACK_IMPORTED_MODULE_7__.isApolloError)(networkError)
                ? networkError
                : new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({ networkError: networkError });
            if (requestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_15__.NetworkStatus.loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var defaults = this.defaultOptions.watchQuery;
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            var concastSources = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
            if (normalized.fetchPolicy !== "standby" &&
                concastSources.length > 0 &&
                queryInfo.observableQuery) {
                queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
            }
            return concastSources;
        };
        var cleanupCancelFn = function () { return _this.fetchCancelFns.delete(queryId); };
        this.fetchCancelFns.set(queryId, function (reason) {
            cleanupCancelFn();
            setTimeout(function () { return concast.cancel(reason); });
        });
        var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_21__.Concast(this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.promise.then(cleanupCancelFn, cleanupCancelFn);
        return concast;
    };
    QueryManager.prototype.refetchQueries = function (_a) {
        var _this = this;
        var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_18__.makeUniqueId)("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
                includedQueriesById.set(queryId, {
                    oq: oq,
                    lastDiff: _this.getQuery(queryId).getDiff(),
                });
            });
        }
        var results = new Map;
        if (updateCache) {
            this.cache.batch({
                update: updateCache,
                optimistic: optimistic && removeOptimistic || false,
                removeOptimistic: removeOptimistic,
                onWatchUpdated: function (watch, diff, lastDiff) {
                    var oq = watch.watcher instanceof _QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.QueryInfo &&
                        watch.watcher.observableQuery;
                    if (oq) {
                        if (onQueryUpdated) {
                            includedQueriesById.delete(oq.queryId);
                            var result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                result = oq.refetch();
                            }
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            return result;
                        }
                        if (onQueryUpdated !== null) {
                            includedQueriesById.set(oq.queryId, { oq: oq, lastDiff: lastDiff, diff: diff });
                        }
                    }
                },
            });
        }
        if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a, queryId) {
                var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
                var result;
                if (onQueryUpdated) {
                    if (!diff) {
                        var info = oq["queryInfo"];
                        info.reset();
                        diff = info.getDiff();
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
                if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                    _this.stopQueryNoBroadcast(queryId);
                }
            });
        }
        if (removeOptimistic) {
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: this.transform(query).document,
            variables: variables,
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(variables); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_15__.NetworkStatus.loading; }
            var data = diff.result;
            if (__DEV__ &&
                !returnPartialData &&
                !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(data, {})) {
                (0,_ObservableQuery_js__WEBPACK_IMPORTED_MODULE_14__.logMissingFieldErrors)(diff.missing);
            }
            var fromData = function (data) { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__.Observable.of((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ data: data, loading: (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_15__.isNetworkRequestInFlight)(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true }))); };
            if (data && _this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data || void 0); });
            }
            if (errorPolicy === 'none' &&
                networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_15__.NetworkStatus.refetch &&
                Array.isArray(diff.missing)) {
                return fromData(void 0);
            }
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 :
            (networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_15__.NetworkStatus.refetch &&
                refetchWritePolicy !== "merge") ? 1
                : 2;
        var resultsFromLink = function () { return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
            variables: variables,
            context: context,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
        }); };
        var shouldNotify = notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_15__.isNetworkRequestInFlight)(networkStatus);
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                if (shouldNotify) {
                    return [
                        resultsFromCache(readCache()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "no-cache":
                if (shouldNotify) {
                    return [
                        resultsFromCache(queryInfo.getDiff()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.QueryInfo(this, queryId));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

//# sourceMappingURL=QueryManager.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/networkStatus.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/core/networkStatus.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkStatus": () => (/* binding */ NetworkStatus),
/* harmony export */   "isNetworkRequestInFlight": () => (/* binding */ isNetworkRequestInFlight)
/* harmony export */ });
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}
//# sourceMappingURL=networkStatus.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/errors/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/errors/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloError": () => (/* binding */ ApolloError),
/* harmony export */   "isApolloError": () => (/* binding */ isApolloError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");



function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyArray)(err.graphQLErrors) || (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyArray)(err.clientErrors)) {
        var errors = (err.graphQLErrors || [])
            .concat(err.clientErrors || []);
        errors.forEach(function (error) {
            var errorMessage = error
                ? error.message
                : 'Error message not found.';
            message += "".concat(errorMessage, "\n");
        });
    }
    if (err.networkError) {
        message += "".concat(err.networkError.message, "\n");
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.name = 'ApolloError';
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/ApolloLink.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/ApolloLink.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloLink": () => (/* binding */ ApolloLink)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/createOperation.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/transformOperation.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/validateOperation.js");




function passthrough(op, forward) {
    return (forward ? forward(op) : _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of()
                    : rightLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of()
                    : rightLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.createOperation)(operation.context, (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.transformOperation)((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.validateOperation)(operation)))) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of(); }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
                }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError('request is not implemented') : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(22);
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

//# sourceMappingURL=ApolloLink.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/execute.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/execute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "execute": () => (/* binding */ execute)
/* harmony export */ });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var execute = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.execute;
//# sourceMappingURL=execute.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/HttpLink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/HttpLink.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLink": () => (/* binding */ HttpLink)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHttpLink.js */ "./node_modules/@apollo/client/link/http/createHttpLink.js");



var HttpLink = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, (0,_createHttpLink_js__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_2__.ApolloLink));

//# sourceMappingURL=HttpLink.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/checkFetcher.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/checkFetcher.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkFetcher": () => (/* binding */ checkFetcher)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(23);
    }
};
//# sourceMappingURL=checkFetcher.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createHttpLink.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createHttpLink.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHttpLink": () => (/* binding */ createHttpLink)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectURI.js */ "./node_modules/@apollo/client/link/http/selectURI.js");
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parseAndCheckHttpResponse.js */ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkFetcher.js */ "./node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectHttpOptionsAndBody.js */ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createSignalIfSupported.js */ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rewriteURIForGET.js */ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/fromError.js");














var backupFetch = (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return fetch; });
var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print = _b === void 0 ? _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_1__.defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
    if (__DEV__) {
        (0,_checkFetcher_js__WEBPACK_IMPORTED_MODULE_3__.checkFetcher)(preferredFetch || backupFetch);
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions, preserveHeaderCase: preserveHeaderCase },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new _core_index_js__WEBPACK_IMPORTED_MODULE_4__.ApolloLink(function (operation) {
        var chosenURI = (0,_selectURI_js__WEBPACK_IMPORTED_MODULE_5__.selectURI)(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = (0,_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_1__.selectHttpOptionsAndBodyInternal)(operation, print, _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_1__.fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            (0,graphql__WEBPACK_IMPORTED_MODULE_6__.visit)(operation.query, {
                Variable: function (node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') {
                        unusedNames_1.delete(node.name.value);
                    }
                },
            });
            if (unusedNames_1.size) {
                body.variables = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, body.variables);
                unusedNames_1.forEach(function (name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = (0,_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_7__.createSignalIfSupported)(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.hasDirectives)(['defer'], operation.query)) {
            options.headers = options.headers || {};
            options.headers.accept = "multipart/mixed; deferSpec=20220824, application/json";
        }
        if (options.method === 'GET') {
            var _d = (0,_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_9__.rewriteURIForGET)(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_10__.fromError)(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_11__.serializeFetchParameter)(body, 'Payload');
            }
            catch (parseError) {
                return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_10__.fromError)(parseError);
            }
        }
        return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_12__.Observable(function (observer) {
            var currentFetch = preferredFetch || (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return fetch; }) || backupFetch;
            currentFetch(chosenURI, options)
                .then(function (response) {
                var _a;
                operation.setContext({ response: response });
                var ctype = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get('content-type');
                if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
                    return (0,_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_13__.readMultipartBody)(response, observer);
                }
                else {
                    return (0,_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_13__.readJsonBody)(response, operation, observer);
                }
            })
                .catch(function (err) { return (0,_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_13__.handleError)(err, observer); });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};
//# sourceMappingURL=createHttpLink.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createSignalIfSupported.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSignalIfSupported": () => (/* binding */ createSignalIfSupported)
/* harmony export */ });
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
//# sourceMappingURL=createSignalIfSupported.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/iterators/async.js":
/*!******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/iterators/async.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ asyncIterator)
/* harmony export */ });
function asyncIterator(source) {
    var _a;
    var iterator = source[Symbol.asyncIterator]();
    return _a = {
            next: function () {
                return iterator.next();
            }
        },
        _a[Symbol.asyncIterator] = function () {
            return this;
        },
        _a;
}
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/iterators/nodeStream.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/iterators/nodeStream.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nodeStreamIterator)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");

function nodeStreamIterator(stream) {
    var cleanup = null;
    var error = null;
    var done = false;
    var data = [];
    var waiting = [];
    function onData(chunk) {
        if (error)
            return;
        if (waiting.length) {
            var shiftedArr = waiting.shift();
            if (Array.isArray(shiftedArr) && shiftedArr[0]) {
                return shiftedArr[0]({ value: chunk, done: false });
            }
        }
        data.push(chunk);
    }
    function onError(err) {
        error = err;
        var all = waiting.slice();
        all.forEach(function (pair) {
            pair[1](err);
        });
        !cleanup || cleanup();
    }
    function onEnd() {
        done = true;
        var all = waiting.slice();
        all.forEach(function (pair) {
            pair[0]({ value: undefined, done: true });
        });
        !cleanup || cleanup();
    }
    cleanup = function () {
        cleanup = null;
        stream.removeListener("data", onData);
        stream.removeListener("error", onError);
        stream.removeListener("end", onEnd);
        stream.removeListener("finish", onEnd);
        stream.removeListener("close", onEnd);
    };
    stream.on("data", onData);
    stream.on("error", onError);
    stream.on("end", onEnd);
    stream.on("finish", onEnd);
    stream.on("close", onEnd);
    function getNext() {
        return new Promise(function (resolve, reject) {
            if (error)
                return reject(error);
            if (data.length)
                return resolve({ value: data.shift(), done: false });
            if (done)
                return resolve({ value: undefined, done: true });
            waiting.push([resolve, reject]);
        });
    }
    var iterator = {
        next: function () {
            return getNext();
        },
    };
    if (_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}
//# sourceMappingURL=nodeStream.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/iterators/promise.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/iterators/promise.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ promiseIterator)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");

function promiseIterator(promise) {
    var resolved = false;
    var iterator = {
        next: function () {
            if (resolved)
                return Promise.resolve({
                    value: undefined,
                    done: true,
                });
            resolved = true;
            return new Promise(function (resolve, reject) {
                promise
                    .then(function (value) {
                    resolve({ value: value, done: false });
                })
                    .catch(reject);
            });
        },
    };
    if (_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}
//# sourceMappingURL=promise.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/iterators/reader.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/iterators/reader.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ readerIterator)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");

function readerIterator(reader) {
    var iterator = {
        next: function () {
            return reader.read();
        },
    };
    if (_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}
//# sourceMappingURL=reader.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "parseAndCheckHttpResponse": () => (/* binding */ parseAndCheckHttpResponse),
/* harmony export */   "parseHeaders": () => (/* binding */ parseHeaders),
/* harmony export */   "parseJsonBody": () => (/* binding */ parseJsonBody),
/* harmony export */   "readJsonBody": () => (/* binding */ readJsonBody),
/* harmony export */   "readMultipartBody": () => (/* binding */ readMultipartBody)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _responseIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responseIterator.js */ "./node_modules/@apollo/client/link/http/responseIterator.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/throwServerError.js");



var hasOwnProperty = Object.prototype.hasOwnProperty;
function readMultipartBody(response, observer) {
    var _a, _b, _c;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _d, value, done, chunk, bi, message, i, headers, contentType_1, body, result;
        var _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (TextDecoder === undefined) {
                        throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                    }
                    decoder = new TextDecoder("utf-8");
                    contentType = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get('content-type');
                    delimiter = "boundary=";
                    boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter))
                        ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim()
                        : "-";
                    boundary = "--".concat(boundaryVal);
                    buffer = "";
                    iterator = (0,_responseIterator_js__WEBPACK_IMPORTED_MODULE_1__.responseIterator)(response);
                    running = true;
                    _f.label = 1;
                case 1:
                    if (!running) return [3, 3];
                    return [4, iterator.next()];
                case 2:
                    _d = _f.sent(), value = _d.value, done = _d.done;
                    chunk = typeof value === "string" ? value : decoder.decode(value);
                    running = !done;
                    buffer += chunk;
                    bi = buffer.indexOf(boundary);
                    while (bi > -1) {
                        message = void 0;
                        _e = [
                            buffer.slice(0, bi),
                            buffer.slice(bi + boundary.length),
                        ], message = _e[0], buffer = _e[1];
                        if (message.trim()) {
                            i = message.indexOf("\r\n\r\n");
                            headers = parseHeaders(message.slice(0, i));
                            contentType_1 = headers["content-type"];
                            if (contentType_1 &&
                                contentType_1.toLowerCase().indexOf("application/json") === -1) {
                                throw new Error("Unsupported patch content type: application/json is required.");
                            }
                            body = message.slice(i);
                            try {
                                result = parseJsonBody(response, body.replace("\r\n", ""));
                                if (Object.keys(result).length > 1 ||
                                    "data" in result ||
                                    "incremental" in result ||
                                    "errors" in result) {
                                    (_b = observer.next) === null || _b === void 0 ? void 0 : _b.call(observer, result);
                                }
                            }
                            catch (err) {
                                handleError(err, observer);
                            }
                        }
                        bi = buffer.indexOf(boundary);
                    }
                    return [3, 1];
                case 3:
                    (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
                    return [2];
            }
        });
    });
}
function parseHeaders(headerText) {
    var headersInit = {};
    headerText.split("\n").forEach(function (line) {
        var i = line.indexOf(":");
        if (i > -1) {
            var name_1 = line.slice(0, i).trim().toLowerCase();
            var value = line.slice(i + 1).trim();
            headersInit[name_1] = value;
        }
    });
    return headersInit;
}
function parseJsonBody(response, bodyText) {
    if (response.status >= 300) {
        var getResult = function () {
            try {
                return JSON.parse(bodyText);
            }
            catch (err) {
                return bodyText;
            }
        };
        (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.throwServerError)(response, getResult(), "Response not successful: Received status code ".concat(response.status));
    }
    try {
        return JSON.parse(bodyText);
    }
    catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
    }
}
function handleError(err, observer) {
    var _a, _b;
    if (err.name === "AbortError")
        return;
    if (err.result && err.result.errors && err.result.data) {
        (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, err.result);
    }
    (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, err);
}
function readJsonBody(response, operation, observer) {
    parseAndCheckHttpResponse(operation)(response)
        .then(function (result) {
        var _a, _b;
        (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, result);
        (_b = observer.complete) === null || _b === void 0 ? void 0 : _b.call(observer);
    })
        .catch(function (err) { return handleError(err, observer); });
}
function parseAndCheckHttpResponse(operations) {
    return function (response) {
        return response
            .text()
            .then(function (bodyText) { return parseJsonBody(response, bodyText); })
            .then(function (result) {
            if (response.status >= 300) {
                (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.throwServerError)(response, result, "Response not successful: Received status code ".concat(response.status));
            }
            if (!Array.isArray(result) &&
                !hasOwnProperty.call(result, "data") &&
                !hasOwnProperty.call(result, "errors")) {
                (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.throwServerError)(response, result, "Server response was missing for query '".concat(Array.isArray(operations)
                    ? operations.map(function (op) { return op.operationName; })
                    : operations.operationName, "'."));
            }
            return result;
        });
    };
}
//# sourceMappingURL=parseAndCheckHttpResponse.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/responseIterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/responseIterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "responseIterator": () => (/* binding */ responseIterator)
/* harmony export */ });
/* harmony import */ var _utilities_common_responseIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/common/responseIterator.js */ "./node_modules/@apollo/client/utilities/common/responseIterator.js");
/* harmony import */ var _iterators_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterators/async.js */ "./node_modules/@apollo/client/link/http/iterators/async.js");
/* harmony import */ var _iterators_nodeStream_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iterators/nodeStream.js */ "./node_modules/@apollo/client/link/http/iterators/nodeStream.js");
/* harmony import */ var _iterators_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iterators/promise.js */ "./node_modules/@apollo/client/link/http/iterators/promise.js");
/* harmony import */ var _iterators_reader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iterators/reader.js */ "./node_modules/@apollo/client/link/http/iterators/reader.js");





function responseIterator(response) {
    var body = response;
    if ((0,_utilities_common_responseIterator_js__WEBPACK_IMPORTED_MODULE_0__.isNodeResponse)(response))
        body = response.body;
    if ((0,_utilities_common_responseIterator_js__WEBPACK_IMPORTED_MODULE_0__.isAsyncIterableIterator)(body))
        return (0,_iterators_async_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body);
    if ((0,_utilities_common_responseIterator_js__WEBPACK_IMPORTED_MODULE_0__.isReadableStream)(body))
        return (0,_iterators_reader_js__WEBPACK_IMPORTED_MODULE_2__["default"])(body.getReader());
    if ((0,_utilities_common_responseIterator_js__WEBPACK_IMPORTED_MODULE_0__.isStreamableBlob)(body)) {
        return (0,_iterators_reader_js__WEBPACK_IMPORTED_MODULE_2__["default"])(body.stream().getReader());
    }
    if ((0,_utilities_common_responseIterator_js__WEBPACK_IMPORTED_MODULE_0__.isBlob)(body))
        return (0,_iterators_promise_js__WEBPACK_IMPORTED_MODULE_3__["default"])(body.arrayBuffer());
    if ((0,_utilities_common_responseIterator_js__WEBPACK_IMPORTED_MODULE_0__.isNodeReadableStream)(body))
        return (0,_iterators_nodeStream_js__WEBPACK_IMPORTED_MODULE_4__["default"])(body);
    throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
//# sourceMappingURL=responseIterator.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/rewriteURIForGET.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rewriteURIForGET": () => (/* binding */ rewriteURIForGET)
/* harmony export */ });
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");

function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__.serializeFetchParameter)(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__.serializeFetchParameter)(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}
//# sourceMappingURL=rewriteURIForGET.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultPrinter": () => (/* binding */ defaultPrinter),
/* harmony export */   "fallbackHttpConfig": () => (/* binding */ fallbackHttpConfig),
/* harmony export */   "selectHttpOptionsAndBody": () => (/* binding */ selectHttpOptionsAndBody),
/* harmony export */   "selectHttpOptionsAndBodyInternal": () => (/* binding */ selectHttpOptionsAndBodyInternal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/printer.mjs");


;
var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
    preserveHeaderCase: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var defaultPrinter = function (ast, printer) { return printer(ast); };
function selectHttpOptionsAndBody(operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([operation,
        defaultPrinter], configs, false));
}
function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = {};
    var http = {};
    configs.forEach(function (config) {
        options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), config.options), { headers: (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options.headers), config.headers) });
        if (config.credentials) {
            options.credentials = config.credentials;
        }
        http = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, http), config.http);
    });
    if (options.headers) {
        options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
    }
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = printer(query, graphql__WEBPACK_IMPORTED_MODULE_1__.print);
    return {
        options: options,
        body: body,
    };
}
;
function removeDuplicateHeaders(headers, preserveHeaderCase) {
    if (!preserveHeaderCase) {
        var normalizedHeaders_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function (name) {
            normalizedHeaders_1[name.toLowerCase()] = headers[name];
        });
        return normalizedHeaders_1;
    }
    var headerData = Object.create(null);
    Object.keys(Object(headers)).forEach(function (name) {
        headerData[name.toLowerCase()] = { originalName: name, value: headers[name] };
    });
    var normalizedHeaders = Object.create(null);
    Object.keys(headerData).forEach(function (name) {
        normalizedHeaders[headerData[name].originalName] = headerData[name].value;
    });
    return normalizedHeaders;
}
//# sourceMappingURL=selectHttpOptionsAndBody.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectURI.js":
/*!************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectURI.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectURI": () => (/* binding */ selectURI)
/* harmony export */ });
var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};
//# sourceMappingURL=selectURI.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/serializeFetchParameter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeFetchParameter": () => (/* binding */ serializeFetchParameter)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(24);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
//# sourceMappingURL=serializeFetchParameter.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/createOperation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/createOperation.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOperation": () => (/* binding */ createOperation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function createOperation(starting, operation) {
    var context = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context), next(context));
        }
        else {
            context = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context), next);
        }
    };
    var getContext = function () { return ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}
//# sourceMappingURL=createOperation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/fromError.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/fromError.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromError": () => (/* binding */ fromError)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");

function fromError(errorValue) {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        observer.error(errorValue);
    });
}
//# sourceMappingURL=fromError.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/throwServerError.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/throwServerError.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwServerError": () => (/* binding */ throwServerError)
/* harmony export */ });
var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
//# sourceMappingURL=throwServerError.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/transformOperation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/transformOperation.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformOperation": () => (/* binding */ transformOperation)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.getOperationName)(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}
//# sourceMappingURL=transformOperation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/validateOperation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/validateOperation.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateOperation": () => (/* binding */ validateOperation)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("illegal argument: ".concat(key)) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(27);
        }
    }
    return operation;
}
//# sourceMappingURL=validateOperation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloContext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApolloContext": () => (/* binding */ getApolloContext),
/* harmony export */   "resetApolloContext": () => (/* binding */ getApolloContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");


var contextKey = _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.canUseSymbol
    ? Symbol.for('__APOLLO_CONTEXT__')
    : '__APOLLO_CONTEXT__';
function getApolloContext() {
    var context = react__WEBPACK_IMPORTED_MODULE_0__.createContext[contextKey];
    if (!context) {
        Object.defineProperty(react__WEBPACK_IMPORTED_MODULE_0__.createContext, contextKey, {
            value: context = react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true,
        });
        context.displayName = 'ApolloContext';
    }
    return context;
}

//# sourceMappingURL=ApolloContext.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloProvider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloProvider": () => (/* binding */ ApolloProvider)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");



var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = (0,_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__.getApolloContext)();
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(context.client, 29);
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(ApolloContext.Provider, { value: context }, children));
    }));
};
//# sourceMappingURL=ApolloProvider.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useApolloClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useApolloClient.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useApolloClient": () => (/* binding */ useApolloClient)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");



function useApolloClient(override) {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)((0,_context_index_js__WEBPACK_IMPORTED_MODULE_2__.getApolloContext)());
    var client = override || context.client;
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!client, 'Could not find "client" in the context or passed in as an option. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ApolloClient ' +
        'instance in via options.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!client, 32);
    return client;
}
//# sourceMappingURL=useApolloClient.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useLazyQuery.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLazyQuery": () => (/* binding */ useLazyQuery)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeOptions.js");
/* harmony import */ var _useQuery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useQuery.js */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _useApolloClient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useApolloClient.js */ "./node_modules/@apollo/client/react/hooks/useApolloClient.js");





var EAGER_METHODS = [
    'refetch',
    'reobserve',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore',
];
function useLazyQuery(query, options) {
    var _a;
    var abortControllersRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
    var execOptionsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var merged = execOptionsRef.current ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeOptions)(options, execOptionsRef.current) : options;
    var internalState = (0,_useQuery_js__WEBPACK_IMPORTED_MODULE_2__.useInternalState)((0,_useApolloClient_js__WEBPACK_IMPORTED_MODULE_3__.useApolloClient)(options && options.client), (_a = merged === null || merged === void 0 ? void 0 : merged.query) !== null && _a !== void 0 ? _a : query);
    var useQueryResult = internalState.useQuery((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, merged), { skip: !execOptionsRef.current }));
    var initialFetchPolicy = useQueryResult.observable.options.initialFetchPolicy ||
        internalState.getDefaultFetchPolicy();
    var result = Object.assign(useQueryResult, {
        called: !!execOptionsRef.current,
    });
    var eagerMethods = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var eagerMethods = {};
        var _loop_1 = function (key) {
            var method = result[key];
            eagerMethods[key] = function () {
                if (!execOptionsRef.current) {
                    execOptionsRef.current = Object.create(null);
                    internalState.forceUpdate();
                }
                return method.apply(this, arguments);
            };
        };
        for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
            var key = EAGER_METHODS_1[_i];
            _loop_1(key);
        }
        return eagerMethods;
    }, []);
    Object.assign(result, eagerMethods);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        return function () {
            abortControllersRef.current.forEach(function (controller) {
                controller.abort();
            });
        };
    }, []);
    var execute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (executeOptions) {
        var controller = new AbortController();
        abortControllersRef.current.add(controller);
        execOptionsRef.current = executeOptions ? (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
            fetchPolicy: initialFetchPolicy,
        };
        var promise = internalState
            .asyncUpdate(controller.signal)
            .then(function (queryResult) {
            abortControllersRef.current.delete(controller);
            return Object.assign(queryResult, eagerMethods);
        });
        promise.catch(function () {
            abortControllersRef.current.delete(controller);
        });
        return promise;
    }, []);
    return [execute, result];
}
//# sourceMappingURL=useLazyQuery.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useQuery.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInternalState": () => (/* binding */ useInternalState),
/* harmony export */   "useQuery": () => (/* binding */ useQuery)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _useSyncExternalStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useSyncExternalStore.js */ "./node_modules/@apollo/client/react/hooks/useSyncExternalStore.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/index.js */ "./node_modules/@apollo/client/utilities/common/mergeOptions.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/index.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");
/* harmony import */ var _useApolloClient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useApolloClient.js */ "./node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");












var hasOwnProperty = Object.prototype.hasOwnProperty;
function useQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    return useInternalState((0,_useApolloClient_js__WEBPACK_IMPORTED_MODULE_3__.useApolloClient)(options.client), query).useQuery(options);
}
function useInternalState(client, query) {
    var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    if (!stateRef.current ||
        client !== stateRef.current.client ||
        query !== stateRef.current.query) {
        stateRef.current = new InternalState(client, query, stateRef.current);
    }
    var state = stateRef.current;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), _tick = _a[0], setTick = _a[1];
    state.forceUpdate = function () {
        setTick(function (tick) { return tick + 1; });
    };
    return state;
}
var InternalState = (function () {
    function InternalState(client, query, previous) {
        this.client = client;
        this.query = query;
        this.asyncResolveFns = new Set();
        this.optionsToIgnoreOnce = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.canUseWeakSet ? WeakSet : Set)();
        this.ssrDisabledResult = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.maybeDeepFreeze)({
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_6__.NetworkStatus.loading,
        });
        this.skipStandbyResult = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.maybeDeepFreeze)({
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_6__.NetworkStatus.ready,
        });
        this.toQueryResultCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.canUseWeakMap ? WeakMap : Map)();
        (0,_parser_index_js__WEBPACK_IMPORTED_MODULE_7__.verifyDocumentType)(query, _parser_index_js__WEBPACK_IMPORTED_MODULE_7__.DocumentType.Query);
        var previousResult = previous && previous.result;
        var previousData = previousResult && previousResult.data;
        if (previousData) {
            this.previousData = previousData;
        }
    }
    InternalState.prototype.forceUpdate = function () {
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Calling default no-op implementation of InternalState#forceUpdate");
    };
    InternalState.prototype.asyncUpdate = function (signal) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var watchQueryOptions = _this.watchQueryOptions;
            var handleAborted = function () {
                _this.asyncResolveFns.delete(resolve);
                _this.optionsToIgnoreOnce.delete(watchQueryOptions);
                signal.removeEventListener('abort', handleAborted);
                reject(signal.reason);
            };
            _this.asyncResolveFns.add(resolve);
            _this.optionsToIgnoreOnce.add(watchQueryOptions);
            signal.addEventListener('abort', handleAborted);
            _this.forceUpdate();
        });
    };
    InternalState.prototype.useQuery = function (options) {
        var _this = this;
        this.renderPromises = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)((0,_context_index_js__WEBPACK_IMPORTED_MODULE_8__.getApolloContext)()).renderPromises;
        this.useOptions(options);
        var obsQuery = this.useObservableQuery();
        var result = (0,_useSyncExternalStore_js__WEBPACK_IMPORTED_MODULE_9__.useSyncExternalStore)((0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
            if (_this.renderPromises) {
                return function () { };
            }
            var onNext = function () {
                var previousResult = _this.result;
                var result = obsQuery.getCurrentResult();
                if (previousResult &&
                    previousResult.loading === result.loading &&
                    previousResult.networkStatus === result.networkStatus &&
                    (0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(previousResult.data, result.data)) {
                    return;
                }
                _this.setResult(result);
            };
            var onError = function (error) {
                var last = obsQuery["last"];
                subscription.unsubscribe();
                try {
                    obsQuery.resetLastResults();
                    subscription = obsQuery.subscribe(onNext, onError);
                }
                finally {
                    obsQuery["last"] = last;
                }
                if (!hasOwnProperty.call(error, 'graphQLErrors')) {
                    throw error;
                }
                var previousResult = _this.result;
                if (!previousResult ||
                    (previousResult && previousResult.loading) ||
                    !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(error, previousResult.error)) {
                    _this.setResult({
                        data: (previousResult && previousResult.data),
                        error: error,
                        loading: false,
                        networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_6__.NetworkStatus.error,
                    });
                }
            };
            var subscription = obsQuery.subscribe(onNext, onError);
            return function () { return subscription.unsubscribe(); };
        }, [
            obsQuery,
            this.renderPromises,
            this.client.disableNetworkFetches,
        ]), function () { return _this.getCurrentResult(); }, function () { return _this.getCurrentResult(); });
        this.unsafeHandlePartialRefetch(result);
        var queryResult = this.toQueryResult(result);
        if (!queryResult.loading && this.asyncResolveFns.size) {
            this.asyncResolveFns.forEach(function (resolve) { return resolve(queryResult); });
            this.asyncResolveFns.clear();
        }
        return queryResult;
    };
    InternalState.prototype.useOptions = function (options) {
        var _a;
        var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
        var currentWatchQueryOptions = this.watchQueryOptions;
        if (this.optionsToIgnoreOnce.has(currentWatchQueryOptions) ||
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(watchQueryOptions, currentWatchQueryOptions)) {
            this.watchQueryOptions = watchQueryOptions;
            if (currentWatchQueryOptions && this.observable) {
                this.optionsToIgnoreOnce.delete(currentWatchQueryOptions);
                this.observable.reobserve(this.getObsQueryOptions());
                this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
                this.result = void 0;
            }
        }
        this.onCompleted = options.onCompleted || InternalState.prototype.onCompleted;
        this.onError = options.onError || InternalState.prototype.onError;
        if ((this.renderPromises || this.client.disableNetworkFetches) &&
            this.queryHookOptions.ssr === false &&
            !this.queryHookOptions.skip) {
            this.result = this.ssrDisabledResult;
        }
        else if (this.queryHookOptions.skip ||
            this.watchQueryOptions.fetchPolicy === 'standby') {
            this.result = this.skipStandbyResult;
        }
        else if (this.result === this.ssrDisabledResult ||
            this.result === this.skipStandbyResult) {
            this.result = void 0;
        }
    };
    InternalState.prototype.getObsQueryOptions = function () {
        var toMerge = [];
        var globalDefaults = this.client.defaultOptions.watchQuery;
        if (globalDefaults)
            toMerge.push(globalDefaults);
        if (this.queryHookOptions.defaultOptions) {
            toMerge.push(this.queryHookOptions.defaultOptions);
        }
        toMerge.push((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.compact)(this.observable && this.observable.options, this.watchQueryOptions));
        return toMerge.reduce(_core_index_js__WEBPACK_IMPORTED_MODULE_11__.mergeOptions);
    };
    InternalState.prototype.createWatchQueryOptions = function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var skip = _a.skip, ssr = _a.ssr, onCompleted = _a.onCompleted, onError = _a.onError, defaultOptions = _a.defaultOptions, otherOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__rest)(_a, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        var watchQueryOptions = Object.assign(otherOptions, { query: this.query });
        if (this.renderPromises &&
            (watchQueryOptions.fetchPolicy === 'network-only' ||
                watchQueryOptions.fetchPolicy === 'cache-and-network')) {
            watchQueryOptions.fetchPolicy = 'cache-first';
        }
        if (!watchQueryOptions.variables) {
            watchQueryOptions.variables = {};
        }
        if (skip) {
            var _c = watchQueryOptions.fetchPolicy, fetchPolicy = _c === void 0 ? this.getDefaultFetchPolicy() : _c, _d = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _d === void 0 ? fetchPolicy : _d;
            Object.assign(watchQueryOptions, {
                initialFetchPolicy: initialFetchPolicy,
                fetchPolicy: 'standby',
            });
        }
        else if (!watchQueryOptions.fetchPolicy) {
            watchQueryOptions.fetchPolicy =
                ((_b = this.observable) === null || _b === void 0 ? void 0 : _b.options.initialFetchPolicy) ||
                    this.getDefaultFetchPolicy();
        }
        return watchQueryOptions;
    };
    InternalState.prototype.getDefaultFetchPolicy = function () {
        var _a, _b;
        return (((_a = this.queryHookOptions.defaultOptions) === null || _a === void 0 ? void 0 : _a.fetchPolicy) ||
            ((_b = this.client.defaultOptions.watchQuery) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
            "cache-first");
    };
    InternalState.prototype.onCompleted = function (data) { };
    InternalState.prototype.onError = function (error) { };
    InternalState.prototype.useObservableQuery = function () {
        var obsQuery = this.observable =
            this.renderPromises
                && this.renderPromises.getSSRObservable(this.watchQueryOptions)
                || this.observable
                || this.client.watchQuery(this.getObsQueryOptions());
        this.obsQueryFields = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () { return ({
            refetch: obsQuery.refetch.bind(obsQuery),
            reobserve: obsQuery.reobserve.bind(obsQuery),
            fetchMore: obsQuery.fetchMore.bind(obsQuery),
            updateQuery: obsQuery.updateQuery.bind(obsQuery),
            startPolling: obsQuery.startPolling.bind(obsQuery),
            stopPolling: obsQuery.stopPolling.bind(obsQuery),
            subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery),
        }); }, [obsQuery]);
        var ssrAllowed = !(this.queryHookOptions.ssr === false ||
            this.queryHookOptions.skip);
        if (this.renderPromises && ssrAllowed) {
            this.renderPromises.registerSSRObservable(obsQuery);
            if (obsQuery.getCurrentResult().loading) {
                this.renderPromises.addObservableQueryPromise(obsQuery);
            }
        }
        return obsQuery;
    };
    InternalState.prototype.setResult = function (nextResult) {
        var previousResult = this.result;
        if (previousResult && previousResult.data) {
            this.previousData = previousResult.data;
        }
        this.result = nextResult;
        this.forceUpdate();
        this.handleErrorOrCompleted(nextResult);
    };
    InternalState.prototype.handleErrorOrCompleted = function (result) {
        var _this = this;
        if (!result.loading) {
            var error_1 = this.toApolloError(result);
            Promise.resolve().then(function () {
                if (error_1) {
                    _this.onError(error_1);
                }
                else if (result.data) {
                    _this.onCompleted(result.data);
                }
            }).catch(function (error) {
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn(error);
            });
        }
    };
    InternalState.prototype.toApolloError = function (result) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__.isNonEmptyArray)(result.errors)
            ? new _errors_index_js__WEBPACK_IMPORTED_MODULE_14__.ApolloError({ graphQLErrors: result.errors })
            : result.error;
    };
    InternalState.prototype.getCurrentResult = function () {
        if (!this.result) {
            this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
        }
        return this.result;
    };
    InternalState.prototype.toQueryResult = function (result) {
        var queryResult = this.toQueryResultCache.get(result);
        if (queryResult)
            return queryResult;
        var data = result.data, partial = result.partial, resultWithoutPartial = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__rest)(result, ["data", "partial"]);
        this.toQueryResultCache.set(result, queryResult = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_12__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_12__.__assign)({ data: data }, resultWithoutPartial), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData }));
        if (!queryResult.error && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__.isNonEmptyArray)(result.errors)) {
            queryResult.error = new _errors_index_js__WEBPACK_IMPORTED_MODULE_14__.ApolloError({ graphQLErrors: result.errors });
        }
        return queryResult;
    };
    InternalState.prototype.unsafeHandlePartialRefetch = function (result) {
        if (result.partial &&
            this.queryHookOptions.partialRefetch &&
            !result.loading &&
            (!result.data || Object.keys(result.data).length === 0) &&
            this.observable.options.fetchPolicy !== 'cache-only') {
            Object.assign(result, {
                loading: true,
                networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_6__.NetworkStatus.refetch,
            });
            this.observable.refetch();
        }
    };
    return InternalState;
}());
//# sourceMappingURL=useQuery.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useSyncExternalStore.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useSyncExternalStore.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncExternalStore": () => (/* binding */ useSyncExternalStore)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");



var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_1__, 2)))[uSESKey];
var useSyncExternalStore = realHook || (function (subscribe, getSnapshot, getServerSnapshot) {
    var value = getSnapshot();
    if (__DEV__ &&
        !didWarnUncachedGetSnapshot &&
        value !== getSnapshot()) {
        didWarnUncachedGetSnapshot = true;
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error('The result of getSnapshot should be cached to avoid an infinite loop');
    }
    var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState({ inst: { value: value, getSnapshot: getSnapshot } }), inst = _a[0].inst, forceUpdate = _a[1];
    if (_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.canUseLayoutEffect) {
        react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(function () {
            Object.assign(inst, { value: value, getSnapshot: getSnapshot });
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        }, [subscribe, value, getSnapshot]);
    }
    else {
        Object.assign(inst, { value: value, getSnapshot: getSnapshot });
    }
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        if (checkIfSnapshotChanged(inst)) {
            forceUpdate({ inst: inst });
        }
        return subscribe(function handleStoreChange() {
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        });
    }, [subscribe]);
    return value;
});
function checkIfSnapshotChanged(_a) {
    var value = _a.value, getSnapshot = _a.getSnapshot;
    try {
        return value !== getSnapshot();
    }
    catch (_b) {
        return true;
    }
}
//# sourceMappingURL=useSyncExternalStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/parser/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/react/parser/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentType": () => (/* binding */ DocumentType),
/* harmony export */   "operationName": () => (/* binding */ operationName),
/* harmony export */   "parser": () => (/* binding */ parser),
/* harmony export */   "verifyDocumentType": () => (/* binding */ verifyDocumentType)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case DocumentType.Query:
            name = 'Query';
            break;
        case DocumentType.Mutation:
            name = 'Mutation';
            break;
        case DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!document && !!document.kind, "Argument of ".concat(document, " passed to parser was not a valid GraphQL ") +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!document && !!document.kind, 33);
    var fragments = [];
    var queries = [];
    var mutations = [];
    var subscriptions = [];
    for (var _i = 0, _a = document.definitions; _i < _a.length; _i++) {
        var x = _a[_i];
        if (x.kind === 'FragmentDefinition') {
            fragments.push(x);
            continue;
        }
        if (x.kind === 'OperationDefinition') {
            switch (x.operation) {
                case 'query':
                    queries.push(x);
                    break;
                case 'mutation':
                    mutations.push(x);
                    break;
                case 'subscription':
                    subscriptions.push(x);
                    break;
            }
        }
    }
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), 34);
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        "".concat(document, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") +
        "subscriptions and ".concat(mutations.length, " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(queries.length + mutations.length + subscriptions.length <= 1, 35);
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(definitions.length === 1, "react-apollo only supports one definition per HOC. ".concat(document, " had ") +
        "".concat(definitions.length, " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(definitions.length === 1, 36);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") +
        "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(operation.type === type, 37);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/arrays.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/arrays.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isNonEmptyArray": () => (/* binding */ isNonEmptyArray)
/* harmony export */ });
var isArray = Array.isArray;
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}
//# sourceMappingURL=arrays.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/canUse.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/canUse.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canUseAsyncIteratorSymbol": () => (/* binding */ canUseAsyncIteratorSymbol),
/* harmony export */   "canUseDOM": () => (/* binding */ canUseDOM),
/* harmony export */   "canUseLayoutEffect": () => (/* binding */ canUseLayoutEffect),
/* harmony export */   "canUseSymbol": () => (/* binding */ canUseSymbol),
/* harmony export */   "canUseWeakMap": () => (/* binding */ canUseWeakMap),
/* harmony export */   "canUseWeakSet": () => (/* binding */ canUseWeakSet)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var canUseWeakMap = typeof WeakMap === 'function' &&
    (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return navigator.product; }) !== 'ReactNative';
var canUseWeakSet = typeof WeakSet === 'function';
var canUseSymbol = typeof Symbol === 'function' &&
    typeof Symbol.for === 'function';
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
var canUseDOM = typeof (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return window.document.createElement; }) === "function";
var usingJSDOM = (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return navigator.userAgent.indexOf("jsdom") >= 0; }) || false;
var canUseLayoutEffect = canUseDOM && !usingJSDOM;
//# sourceMappingURL=canUse.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/cloneDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/cloneDeep.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneDeep": () => (/* binding */ cloneDeep)
/* harmony export */ });
var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/compact.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/compact.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compact": () => (/* binding */ compact)
/* harmony export */ });
function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}
//# sourceMappingURL=compact.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/errorHandling.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/errorHandling.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGraphQLErrorsFromResult": () => (/* binding */ getGraphQLErrorsFromResult),
/* harmony export */   "graphQLResultHasError": () => (/* binding */ graphQLResultHasError)
/* harmony export */ });
/* harmony import */ var _arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _incrementalResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incrementalResult.js */ "./node_modules/@apollo/client/utilities/common/incrementalResult.js");


function graphQLResultHasError(result) {
    var errors = getGraphQLErrorsFromResult(result);
    return (0,_arrays_js__WEBPACK_IMPORTED_MODULE_0__.isNonEmptyArray)(errors);
}
function getGraphQLErrorsFromResult(result) {
    var graphQLErrors = (0,_arrays_js__WEBPACK_IMPORTED_MODULE_0__.isNonEmptyArray)(result.errors)
        ? result.errors.slice(0)
        : [];
    if ((0,_incrementalResult_js__WEBPACK_IMPORTED_MODULE_1__.isExecutionPatchIncrementalResult)(result) &&
        (0,_arrays_js__WEBPACK_IMPORTED_MODULE_0__.isNonEmptyArray)(result.incremental)) {
        result.incremental.forEach(function (incrementalResult) {
            if (incrementalResult.errors) {
                graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
            }
        });
    }
    return graphQLErrors;
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/incrementalResult.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/incrementalResult.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExecutionPatchIncrementalResult": () => (/* binding */ isExecutionPatchIncrementalResult),
/* harmony export */   "isExecutionPatchInitialResult": () => (/* binding */ isExecutionPatchInitialResult),
/* harmony export */   "isExecutionPatchResult": () => (/* binding */ isExecutionPatchResult),
/* harmony export */   "mergeIncrementalData": () => (/* binding */ mergeIncrementalData)
/* harmony export */ });
/* harmony import */ var _arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrays.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _mergeDeep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeDeep.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");


function isExecutionPatchIncrementalResult(value) {
    return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
    return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
    return (isExecutionPatchIncrementalResult(value) ||
        isExecutionPatchInitialResult(value));
}
function mergeIncrementalData(prevResult, result) {
    var mergedData = prevResult;
    var merger = new _mergeDeep_js__WEBPACK_IMPORTED_MODULE_0__.DeepMerger();
    if (isExecutionPatchIncrementalResult(result) &&
        (0,_arrays_js__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyArray)(result.incremental)) {
        result.incremental.forEach(function (_a) {
            var data = _a.data, path = _a.path;
            for (var i = path.length - 1; i >= 0; --i) {
                var key = path[i];
                var isNumericKey = !isNaN(+key);
                var parent_1 = isNumericKey ? [] : {};
                parent_1[key] = data;
                data = parent_1;
            }
            mergedData = merger.merge(mergedData, data);
        });
    }
    return mergedData;
}
//# sourceMappingURL=incrementalResult.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/makeUniqueId.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUniqueId": () => (/* binding */ makeUniqueId)
/* harmony export */ });
var prefixCounts = new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
//# sourceMappingURL=makeUniqueId.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeDeepFreeze": () => (/* binding */ maybeDeepFreeze)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");


function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(obj) && shallowFreeze(obj) === obj) {
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function shallowFreeze(obj) {
    if (__DEV__ && !Object.isFrozen(obj)) {
        try {
            Object.freeze(obj);
        }
        catch (e) {
            if (e instanceof TypeError)
                return null;
            throw e;
        }
    }
    return obj;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) {
        deepFreeze(obj);
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/mergeDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/mergeDeep.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeepMerger": () => (/* binding */ DeepMerger),
/* harmony export */   "mergeDeep": () => (/* binding */ mergeDeep),
/* harmony export */   "mergeDeepArray": () => (/* binding */ mergeDeepArray)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");


var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = _objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(source) && (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([target, source, sourceKey], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(value)) {
            if (!this.pastCopies.has(value)) {
                if (Array.isArray(value)) {
                    value = value.slice(0);
                }
                else {
                    value = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ __proto__: Object.getPrototypeOf(value) }, value);
                }
                this.pastCopies.add(value);
            }
        }
        return value;
    };
    return DeepMerger;
}());

//# sourceMappingURL=mergeDeep.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/mergeOptions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/mergeOptions.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeOptions": () => (/* binding */ mergeOptions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _compact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compact.js */ "./node_modules/@apollo/client/utilities/common/compact.js");


function mergeOptions(defaults, options) {
    return (0,_compact_js__WEBPACK_IMPORTED_MODULE_0__.compact)(defaults, options, options.variables && {
        variables: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (defaults && defaults.variables)), options.variables),
    });
}
//# sourceMappingURL=mergeOptions.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/objects.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/objects.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNonNullObject": () => (/* binding */ isNonNullObject)
/* harmony export */ });
function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}
//# sourceMappingURL=objects.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/responseIterator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/responseIterator.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAsyncIterableIterator": () => (/* binding */ isAsyncIterableIterator),
/* harmony export */   "isBlob": () => (/* binding */ isBlob),
/* harmony export */   "isNodeReadableStream": () => (/* binding */ isNodeReadableStream),
/* harmony export */   "isNodeResponse": () => (/* binding */ isNodeResponse),
/* harmony export */   "isReadableStream": () => (/* binding */ isReadableStream),
/* harmony export */   "isStreamableBlob": () => (/* binding */ isStreamableBlob)
/* harmony export */ });
/* harmony import */ var _canUse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUse.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");

function isNodeResponse(value) {
    return !!value.body;
}
function isReadableStream(value) {
    return !!value.getReader;
}
function isAsyncIterableIterator(value) {
    return !!(_canUse_js__WEBPACK_IMPORTED_MODULE_0__.canUseAsyncIteratorSymbol &&
        value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
    return !!value.stream;
}
function isBlob(value) {
    return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
    return !!value.pipe;
}
//# sourceMappingURL=responseIterator.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyForDisplay": () => (/* binding */ stringifyForDisplay)
/* harmony export */ });
/* harmony import */ var _makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeUniqueId.js */ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js");

function stringifyForDisplay(value) {
    var undefId = (0,_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__.makeUniqueId)("stringifyForDisplay");
    return JSON.stringify(value, function (key, value) {
        return value === void 0 ? undefId : value;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}
//# sourceMappingURL=stringifyForDisplay.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/DEV.js":
/*!**************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/DEV.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ "./node_modules/@apollo/client/utilities/globals/global.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/globals/maybe.js");


var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    }
    catch (_a) {
        Object.defineProperty(_global_js__WEBPACK_IMPORTED_MODULE_0__["default"], GLOBAL_KEY, {
            value: (0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.maybe)(function () { return "development"; }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true,
        });
        return _global_js__WEBPACK_IMPORTED_MODULE_0__["default"][GLOBAL_KEY];
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDEV());
//# sourceMappingURL=DEV.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/fix-graphql.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/fix-graphql.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTemporaryGlobals": () => (/* binding */ removeTemporaryGlobals)
/* harmony export */ });
/* harmony import */ var ts_invariant_process_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant/process/index.js */ "./node_modules/ts-invariant/process/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/source.mjs");


function removeTemporaryGlobals() {
    return typeof graphql__WEBPACK_IMPORTED_MODULE_1__.Source === "function" ? (0,ts_invariant_process_index_js__WEBPACK_IMPORTED_MODULE_0__.remove)() : (0,ts_invariant_process_index_js__WEBPACK_IMPORTED_MODULE_0__.remove)();
}
//# sourceMappingURL=fix-graphql.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/global.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/globals/maybe.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return globalThis; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return window; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return self; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return global; }) || (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return _maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe.constructor("return this")(); }));
//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEV": () => (/* reexport safe */ _DEV_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "InvariantError": () => (/* reexport safe */ ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError),
/* harmony export */   "checkDEV": () => (/* binding */ checkDEV),
/* harmony export */   "global": () => (/* reexport safe */ _global_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "invariant": () => (/* reexport safe */ ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant),
/* harmony export */   "maybe": () => (/* reexport safe */ _maybe_js__WEBPACK_IMPORTED_MODULE_3__.maybe)
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.js");
/* harmony import */ var _DEV_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DEV.js */ "./node_modules/@apollo/client/utilities/globals/DEV.js");
/* harmony import */ var _fix_graphql_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fix-graphql.js */ "./node_modules/@apollo/client/utilities/globals/fix-graphql.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/globals/maybe.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.js */ "./node_modules/@apollo/client/utilities/globals/global.js");



function checkDEV() {
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _DEV_js__WEBPACK_IMPORTED_MODULE_1__["default"], _DEV_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _DEV_js__WEBPACK_IMPORTED_MODULE_1__["default"], 39);
}

(0,_fix_graphql_js__WEBPACK_IMPORTED_MODULE_2__.removeTemporaryGlobals)();



checkDEV();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/maybe.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/maybe.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybe": () => (/* binding */ maybe)
/* harmony export */ });
function maybe(thunk) {
    try {
        return thunk();
    }
    catch (_a) { }
}
//# sourceMappingURL=maybe.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/directives.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/directives.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDirectiveNames": () => (/* binding */ getDirectiveNames),
/* harmony export */   "getInclusionDirectives": () => (/* binding */ getInclusionDirectives),
/* harmony export */   "hasAllDirectives": () => (/* binding */ hasAllDirectives),
/* harmony export */   "hasAnyDirectives": () => (/* binding */ hasAnyDirectives),
/* harmony export */   "hasClientExports": () => (/* binding */ hasClientExports),
/* harmony export */   "hasDirectives": () => (/* binding */ hasDirectives),
/* harmony export */   "shouldInclude": () => (/* binding */ shouldInclude)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/visitor.mjs");


function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(evaledValue !== void 0, 40);
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    (0,graphql__WEBPACK_IMPORTED_MODULE_1__.visit)(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
var hasAnyDirectives = function (names, root) { return hasDirectives(names, root, false); };
var hasAllDirectives = function (names, root) { return hasDirectives(names, root, true); };
function hasDirectives(names, root, all) {
    var nameSet = new Set(names);
    var uniqueCount = nameSet.size;
    (0,graphql__WEBPACK_IMPORTED_MODULE_1__.visit)(root, {
        Directive: function (node) {
            if (nameSet.delete(node.name.value) &&
                (!all || !nameSet.size)) {
                return graphql__WEBPACK_IMPORTED_MODULE_1__.BREAK;
            }
        },
    });
    return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document) {
    return document && hasDirectives(['client', 'export'], document, true);
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(directiveArguments && directiveArguments.length === 1, 41);
            var ifArgument = directiveArguments[0];
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @".concat(directiveName, " directive.")) : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifArgument.name && ifArgument.name.value === 'if', 42);
            var ifValue = ifArgument.value;
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 43);
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/fragments.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/fragments.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFragmentMap": () => (/* binding */ createFragmentMap),
/* harmony export */   "getFragmentFromSelection": () => (/* binding */ getFragmentFromSelection),
/* harmony export */   "getFragmentQueryDocument": () => (/* binding */ getFragmentQueryDocument)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");


function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : '', ". ") +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(44);
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragments.length === 1, 45);
        actualFragmentName = fragments[0].name.value;
    }
    var query = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, document), { definitions: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions, true) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragmentName = selection.name.value;
            if (typeof fragmentMap === "function") {
                return fragmentMap(fragmentName);
            }
            var fragment = fragmentMap && fragmentMap[fragmentName];
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, "No fragment named ".concat(fragmentName)) : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, 46);
            return fragment || null;
        }
        default:
            return null;
    }
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/getFromAST.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDocument": () => (/* binding */ checkDocument),
/* harmony export */   "getDefaultValues": () => (/* binding */ getDefaultValues),
/* harmony export */   "getFragmentDefinition": () => (/* binding */ getFragmentDefinition),
/* harmony export */   "getFragmentDefinitions": () => (/* binding */ getFragmentDefinitions),
/* harmony export */   "getMainDefinition": () => (/* binding */ getMainDefinition),
/* harmony export */   "getOperationDefinition": () => (/* binding */ getOperationDefinition),
/* harmony export */   "getOperationName": () => (/* binding */ getOperationName),
/* harmony export */   "getQueryDefinition": () => (/* binding */ getQueryDefinition)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");


function checkDocument(doc) {
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc && doc.kind === 'Document', 47);
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Schema type definitions not allowed in queries. Found: \"".concat(definition.kind, "\"")) : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(48);
        }
        return definition;
    });
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(operations.length <= 1, 49);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition';
    })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && !!definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) {
        return definition.kind === 'FragmentDefinition';
    });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(queryDef && queryDef.operation === 'query', 50);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.kind === 'Document', 51);
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.definitions.length <= 1, 52);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragmentDef.kind === 'FragmentDefinition', 53);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(54);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                (0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__.valueToObjectRepresentation)(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/storeUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argumentsObjectFromField": () => (/* binding */ argumentsObjectFromField),
/* harmony export */   "getStoreKeyName": () => (/* binding */ getStoreKeyName),
/* harmony export */   "getTypenameFromResult": () => (/* binding */ getTypenameFromResult),
/* harmony export */   "isDocumentNode": () => (/* binding */ isDocumentNode),
/* harmony export */   "isField": () => (/* binding */ isField),
/* harmony export */   "isInlineFragment": () => (/* binding */ isInlineFragment),
/* harmony export */   "isReference": () => (/* binding */ isReference),
/* harmony export */   "makeReference": () => (/* binding */ makeReference),
/* harmony export */   "resultKeyNameFromField": () => (/* binding */ resultKeyNameFromField),
/* harmony export */   "storeKeyNameFromField": () => (/* binding */ storeKeyNameFromField),
/* harmony export */   "valueToObjectRepresentation": () => (/* binding */ valueToObjectRepresentation)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _common_objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");



function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
    return ((0,_common_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value) &&
        value.kind === "Document" &&
        Array.isArray(value.definitions));
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("The inline argument \"".concat(name.value, "\" of kind \"").concat(value.kind, "\"") +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.') : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(55);
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return "".concat(directives['connection']['key'], "(").concat(stringify(filteredArgs_1), ")");
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
            }
            else {
                completeFieldName += "@".concat(key);
            }
        });
    }
    return completeFieldName;
}, {
    setStringify: function (s) {
        var previous = stringify;
        stringify = s;
        return previous;
    },
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if ((0,_common_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value) && !Array.isArray(value)) {
        value = Object.keys(value).sort().reduce(function (copy, key) {
            copy[key] = value[key];
            return copy;
        }, {});
    }
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, (0,_fragments_js__WEBPACK_IMPORTED_MODULE_2__.getFragmentFromSelection)(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/transform.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/transform.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTypenameToDocument": () => (/* binding */ addTypenameToDocument),
/* harmony export */   "buildQueryFromSelectionSet": () => (/* binding */ buildQueryFromSelectionSet),
/* harmony export */   "removeArgumentsFromDocument": () => (/* binding */ removeArgumentsFromDocument),
/* harmony export */   "removeClientSetsFromDocument": () => (/* binding */ removeClientSetsFromDocument),
/* harmony export */   "removeConnectionDirectiveFromDocument": () => (/* binding */ removeConnectionDirectiveFromDocument),
/* harmony export */   "removeDirectivesFromDocument": () => (/* binding */ removeDirectivesFromDocument),
/* harmony export */   "removeFragmentSpreadFromDocument": () => (/* binding */ removeFragmentSpreadFromDocument)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _getFromAST_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _common_arrays_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/arrays.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");







var TYPENAME_FIELD = {
    kind: graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD,
    name: {
        kind: graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.NAME,
        value: '__typename',
    },
};
function isEmpty(op, fragmentMap) {
    return !op || op.selectionSet.selections.every(function (selection) { return selection.kind === graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.FRAGMENT_SPREAD &&
        isEmpty(fragmentMap[selection.name.value], fragmentMap); });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__.getOperationDefinition)(doc) || (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__.getFragmentDefinition)(doc), (0,_fragments_js__WEBPACK_IMPORTED_MODULE_3__.createFragmentMap)((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__.getFragmentDefinitions)(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    var nameSet = new Set();
    var tests = [];
    directives.forEach(function (directive) {
        if (directive.name) {
            nameSet.add(directive.name);
        }
        else if (directive.test) {
            tests.push(directive.test);
        }
    });
    return function (directive) { return (nameSet.has(directive.name.value) ||
        tests.some(function (test) { return test(directive); })); };
}
function makeInUseGetterFunction(defaultKey) {
    var map = new Map();
    return function inUseGetterFunction(key) {
        if (key === void 0) { key = defaultKey; }
        var inUse = map.get(key);
        if (!inUse) {
            map.set(key, inUse = {
                variables: new Set,
                fragmentSpreads: new Set,
            });
        }
        return inUse;
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var getInUseByOperationName = makeInUseGetterFunction("");
    var getInUseByFragmentName = makeInUseGetterFunction("");
    var getInUse = function (ancestors) {
        for (var p = 0, ancestor = void 0; p < ancestors.length && (ancestor = ancestors[p]); ++p) {
            if ((0,_common_arrays_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(ancestor))
                continue;
            if (ancestor.kind === graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.OPERATION_DEFINITION) {
                return getInUseByOperationName(ancestor.name && ancestor.name.value);
            }
            if (ancestor.kind === graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.FRAGMENT_DEFINITION) {
                return getInUseByFragmentName(ancestor.name.value);
            }
        }
        __DEV__ && _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error("Could not find operation or fragment");
        return null;
    };
    var operationCount = 0;
    for (var i = doc.definitions.length - 1; i >= 0; --i) {
        if (doc.definitions[i].kind === graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.OPERATION_DEFINITION) {
            ++operationCount;
        }
    }
    var directiveMatcher = getDirectiveMatcher(directives);
    var hasRemoveDirective = directives.some(function (directive) { return directive.remove; });
    var shouldRemoveField = function (nodeDirectives) { return (hasRemoveDirective &&
        nodeDirectives &&
        nodeDirectives.some(directiveMatcher)); };
    var originalFragmentDefsByPath = new Map();
    var firstVisitMadeChanges = false;
    var fieldOrInlineFragmentVisitor = {
        enter: function (node) {
            if (shouldRemoveField(node.directives)) {
                firstVisitMadeChanges = true;
                return null;
            }
        },
    };
    var docWithoutDirectiveSubtrees = (0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(doc, {
        Field: fieldOrInlineFragmentVisitor,
        InlineFragment: fieldOrInlineFragmentVisitor,
        VariableDefinition: {
            enter: function () {
                return false;
            },
        },
        Variable: {
            enter: function (node, _key, _parent, _path, ancestors) {
                var inUse = getInUse(ancestors);
                if (inUse) {
                    inUse.variables.add(node.name.value);
                }
            },
        },
        FragmentSpread: {
            enter: function (node, _key, _parent, _path, ancestors) {
                if (shouldRemoveField(node.directives)) {
                    firstVisitMadeChanges = true;
                    return null;
                }
                var inUse = getInUse(ancestors);
                if (inUse) {
                    inUse.fragmentSpreads.add(node.name.value);
                }
            },
        },
        FragmentDefinition: {
            enter: function (node, _key, _parent, path) {
                originalFragmentDefsByPath.set(JSON.stringify(path), node);
            },
            leave: function (node, _key, _parent, path) {
                var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
                if (node === originalNode) {
                    return node;
                }
                if (operationCount > 0 &&
                    node.selectionSet.selections.every(function (selection) { return (selection.kind === graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD &&
                        selection.name.value === '__typename'); })) {
                    getInUseByFragmentName(node.name.value).removed = true;
                    firstVisitMadeChanges = true;
                    return null;
                }
            },
        },
        Directive: {
            leave: function (node) {
                if (directiveMatcher(node)) {
                    firstVisitMadeChanges = true;
                    return null;
                }
            },
        },
    });
    if (!firstVisitMadeChanges) {
        return doc;
    }
    var populateTransitiveVars = function (inUse) {
        if (!inUse.transitiveVars) {
            inUse.transitiveVars = new Set(inUse.variables);
            if (!inUse.removed) {
                inUse.fragmentSpreads.forEach(function (childFragmentName) {
                    populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function (varName) {
                        inUse.transitiveVars.add(varName);
                    });
                });
            }
        }
        return inUse;
    };
    var allFragmentNamesUsed = new Set();
    docWithoutDirectiveSubtrees.definitions.forEach(function (def) {
        if (def.kind === graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.OPERATION_DEFINITION) {
            populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function (childFragmentName) {
                allFragmentNamesUsed.add(childFragmentName);
            });
        }
        else if (def.kind === graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.FRAGMENT_DEFINITION &&
            operationCount === 0 &&
            !getInUseByFragmentName(def.name.value).removed) {
            allFragmentNamesUsed.add(def.name.value);
        }
    });
    allFragmentNamesUsed.forEach(function (fragmentName) {
        populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function (childFragmentName) {
            allFragmentNamesUsed.add(childFragmentName);
        });
    });
    var fragmentWillBeRemoved = function (fragmentName) { return !!(!allFragmentNamesUsed.has(fragmentName) ||
        getInUseByFragmentName(fragmentName).removed); };
    var enterVisitor = {
        enter: function (node) {
            if (fragmentWillBeRemoved(node.name.value)) {
                return null;
            }
        },
    };
    return nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(docWithoutDirectiveSubtrees, {
        FragmentSpread: enterVisitor,
        FragmentDefinition: enterVisitor,
        OperationDefinition: {
            leave: function (node) {
                if (node.variableDefinitions) {
                    var usedVariableNames_1 = populateTransitiveVars(getInUseByOperationName(node.name && node.name.value)).transitiveVars;
                    if (usedVariableNames_1.size < node.variableDefinitions.length) {
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { variableDefinitions: node.variableDefinitions.filter(function (varDef) { return usedVariableNames_1.has(varDef.variable.name.value); }) });
                    }
                }
            },
        },
    }));
}
var addTypenameToDocument = Object.assign(function (doc) {
    return (0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(doc, {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.OPERATION_DEFINITION) {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return ((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_7__.isField)(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if ((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_7__.isField)(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { selections: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([], selections, true), [TYPENAME_FIELD], false) });
            },
        },
    });
}, {
    added: function (field) {
        return field === TYPENAME_FIELD;
    },
});
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                __DEV__ && _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__.checkDocument)(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    return (!!selectionSet &&
        selectionSet.selections &&
        selectionSet.selections.some(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        }));
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (!(0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_7__.isField)(selection)) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    return (selection.directives.some(getDirectiveMatcher(directives)) ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === graphql__WEBPACK_IMPORTED_MODULE_1__.Kind.VARIABLE &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(doc, {
        OperationDefinition: {
            enter: function (node) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function buildQueryFromSelectionSet(document) {
    var definition = (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__.getMainDefinition)(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = (0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(document, {
        OperationDefinition: {
            enter: function (node) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__.checkDocument)(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    return modifiedDoc;
}
//# sourceMappingURL=transform.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/Concast.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/Concast.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Concast": () => (/* binding */ Concast)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _iteration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iteration.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony import */ var _subclassing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subclassing.js */ "./node_modules/@apollo/client/utilities/observables/subclassing.js");




function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    _this.notify("next", result);
                    (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__.iterateObserversSafely)(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub)
                        setTimeout(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    _this.notify("error", error);
                    (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__.iterateObserversSafely)(_this.observers, "error", error);
                }
            },
            complete: function () {
                var _a = _this, sub = _a.sub, _b = _a.sources, sources = _b === void 0 ? [] : _b;
                if (sub !== null) {
                    var value = sources.shift();
                    if (!value) {
                        if (sub)
                            setTimeout(function () { return sub.unsubscribe(); });
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        _this.notify("complete");
                        (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__.iterateObserversSafely)(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.nextResultListeners = new Set();
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (typeof sources === "function") {
            sources = [new _Observable_js__WEBPACK_IMPORTED_MODULE_2__.Observable(sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            if (this.sub === null &&
                nextOrError === "next" &&
                observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
        }
    };
    Concast.prototype.removeObserver = function (observer) {
        if (this.observers.delete(observer) &&
            this.observers.size < 1) {
            this.handlers.complete();
        }
    };
    Concast.prototype.notify = function (method, arg) {
        var nextResultListeners = this.nextResultListeners;
        if (nextResultListeners.size) {
            this.nextResultListeners = new Set;
            nextResultListeners.forEach(function (listener) { return listener(method, arg); });
        }
    };
    Concast.prototype.beforeNext = function (callback) {
        var called = false;
        this.nextResultListeners.add(function (method, arg) {
            if (!called) {
                called = true;
                callback(method, arg);
            }
        });
    };
    return Concast;
}(_Observable_js__WEBPACK_IMPORTED_MODULE_2__.Observable));

(0,_subclassing_js__WEBPACK_IMPORTED_MODULE_3__.fixObservableSubclass)(Concast);
//# sourceMappingURL=Concast.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/asyncMap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/asyncMap.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncMap": () => (/* binding */ asyncMap)
/* harmony export */ });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/zen-observable-ts/module.js");

function asyncMap(observable, mapFn, catchFn) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}
//# sourceMappingURL=asyncMap.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/iteration.js":
/*!************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/iteration.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iterateObserversSafely": () => (/* binding */ iterateObserversSafely)
/* harmony export */ });
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}
//# sourceMappingURL=iteration.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/subclassing.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/subclassing.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fixObservableSubclass": () => (/* binding */ fixObservableSubclass)
/* harmony export */ });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _common_canUse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/canUse.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");


function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, { value: _Observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable });
    }
    if (_common_canUse_js__WEBPACK_IMPORTED_MODULE_1__.canUseSymbol && Symbol.species) {
        set(Symbol.species);
    }
    set("@@species");
    return subclass;
}
//# sourceMappingURL=subclassing.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/version.js":
/*!************************************************!*\
  !*** ./node_modules/@apollo/client/version.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
var version = '3.7.10';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLError": () => (/* binding */ GraphQLError),
/* harmony export */   "formatError": () => (/* binding */ formatError),
/* harmony export */   "printError": () => (/* binding */ printError)
/* harmony export */ });
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");




function toNormalizedOptions(args) {
  const firstArg = args[0];

  if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5],
    };
  }

  return firstArg;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */

  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;

    const { nodes, source, positions, path, originalError, extensions } =
      toNormalizedOptions(rawArgs);
    super(message);
    this.name = 'GraphQLError';
    this.path = path !== null && path !== void 0 ? path : undefined;
    this.originalError =
      originalError !== null && originalError !== void 0
        ? originalError
        : undefined; // Compute list of blame nodes.

    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined,
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0
        ? void 0
        : _this$nodes.map((node) => node.loc).filter((loc) => loc != null),
    ); // Compute locations in the source for the given nodes/positions.

    this.source =
      source !== null && source !== void 0
        ? source
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : (_nodeLocations$ = nodeLocations[0]) === null ||
          _nodeLocations$ === void 0
        ? void 0
        : _nodeLocations$.source;
    this.positions =
      positions !== null && positions !== void 0
        ? positions
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => loc.start);
    this.locations =
      positions && source
        ? positions.map((pos) => (0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(source, pos))
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => (0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(loc.source, loc.start));
    const originalExtensions = (0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__.isObjectLike)(
      originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions,
    )
      ? originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions
      : undefined;
    this.extensions =
      (_ref =
        extensions !== null && extensions !== void 0
          ? extensions
          : originalExtensions) !== null && _ref !== void 0
        ? _ref
        : Object.create(null); // Only properties prescribed by the spec should be enumerable.
    // Keep the rest as non-enumerable.

    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true,
      },
      name: {
        enumerable: false,
      },
      nodes: {
        enumerable: false,
      },
      source: {
        enumerable: false,
      },
      positions: {
        enumerable: false,
      },
      originalError: {
        enumerable: false,
      },
    }); // Include (non-enumerable) stack trace.

    /* c8 ignore start */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317

    if (
      originalError !== null &&
      originalError !== void 0 &&
      originalError.stack
    ) {
      Object.defineProperty(this, 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true,
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true,
      });
    }
    /* c8 ignore stop */
  }

  get [Symbol.toStringTag]() {
    return 'GraphQLError';
  }

  toString() {
    let output = this.message;

    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__.printLocation)(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__.printSourceLocation)(this.source, location);
      }
    }

    return output;
  }

  toJSON() {
    const formattedError = {
      message: this.message,
    };

    if (this.locations != null) {
      formattedError.locations = this.locations;
    }

    if (this.path != null) {
      formattedError.path = this.path;
    }

    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }

    return formattedError;
  }
}

function undefinedIfEmpty(array) {
  return array === undefined || array.length === 0 ? undefined : array;
}
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */
function printError(error) {
  return error.toString();
}
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toJSON` instead. Will be removed in v17
 */

function formatError(error) {
  return error.toJSON();
}


/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "syntaxError": () => (/* binding */ syntaxError)
/* harmony export */ });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position],
  });
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "devAssert": () => (/* binding */ devAssert)
/* harmony export */ });
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inspect": () => (/* binding */ inspect)
/* harmony export */ });
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (typeof value) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? `[function ${value.name}]` : '[function]';

    case 'object':
      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return 'null';
  }

  if (previouslySeenValues.includes(value)) {
    return '[Circular]';
  }

  const seenValues = [...previouslySeenValues, value];

  if (isJSONable(value)) {
    const jsonValue = value.toJSON(); // check for infinite recursion

    if (jsonValue !== value) {
      return typeof jsonValue === 'string'
        ? jsonValue
        : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function isJSONable(value) {
  return typeof value.toJSON === 'function';
}

function formatObject(object, seenValues) {
  const entries = Object.entries(object);

  if (entries.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  const properties = entries.map(
    ([key, value]) => key + ': ' + formatValue(value, seenValues),
  );
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];

  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }

  return '[' + items.join(', ') + ']';
}

function getObjectTag(object) {
  const tag = Object.prototype.toString
    .call(object)
    .replace(/^\[object /, '')
    .replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    const name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instanceOf": () => (/* binding */ instanceOf)
/* harmony export */ });
/* harmony import */ var _inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 * See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
 * See: https://webpack.js.org/guides/production/
 */

const instanceOf =
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  // eslint-disable-next-line no-undef
   false
    ? 0
    : function instanceOf(value, constructor) {
        if (value instanceof constructor) {
          return true;
        }

        if (typeof value === 'object' && value !== null) {
          var _value$constructor;

          // Prefer Symbol.toStringTag since it is immune to minification.
          const className = constructor.prototype[Symbol.toStringTag];
          const valueClassName = // We still need to support constructor's name to detect conflicts with older versions of this library.
            Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
              ? value[Symbol.toStringTag]
              : (_value$constructor = value.constructor) === null ||
                _value$constructor === void 0
              ? void 0
              : _value$constructor.name;

          if (className === valueClassName) {
            const stringifiedValue = (0,_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.inspect)(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
          }
        }

        return false;
      };


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariant": () => (/* binding */ invariant)
/* harmony export */ });
function invariant(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(
      message != null ? message : 'Unexpected invariant triggered.',
    );
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObjectLike": () => (/* binding */ isObjectLike)
/* harmony export */ });
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return typeof value == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/language/ast.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/language/ast.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "OperationTypeNode": () => (/* binding */ OperationTypeNode),
/* harmony export */   "QueryDocumentKeys": () => (/* binding */ QueryDocumentKeys),
/* harmony export */   "Token": () => (/* binding */ Token),
/* harmony export */   "isNode": () => (/* binding */ isNode)
/* harmony export */ });
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
class Location {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  get [Symbol.toStringTag]() {
    return 'Location';
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
    };
  }
}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

class Token {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    this.value = value;
    this.prev = null;
    this.next = null;
  }

  get [Symbol.toStringTag]() {
    return 'Token';
  }

  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column,
    };
  }
}
/**
 * The list of all possible AST node types.
 */

/**
 * @internal
 */
const QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: [
    'name',
    'variableDefinitions',
    'directives',
    'selectionSet',
  ],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: [
    'name', // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    'variableDefinitions',
    'typeCondition',
    'directives',
    'selectionSet',
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: [
    'description',
    'name',
    'interfaces',
    'directives',
    'fields',
  ],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: [
    'description',
    'name',
    'type',
    'defaultValue',
    'directives',
  ],
  InterfaceTypeDefinition: [
    'description',
    'name',
    'interfaces',
    'directives',
    'fields',
  ],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields'],
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
/**
 * @internal
 */

function isNode(maybeNode) {
  const maybeKind =
    maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === 'string' && kindValues.has(maybeKind);
}
/** Name */

var OperationTypeNode;

(function (OperationTypeNode) {
  OperationTypeNode['QUERY'] = 'query';
  OperationTypeNode['MUTATION'] = 'mutation';
  OperationTypeNode['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (OperationTypeNode = {}));




/***/ }),

/***/ "./node_modules/graphql/language/blockString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dedentBlockStringLines": () => (/* binding */ dedentBlockStringLines),
/* harmony export */   "isPrintableAsBlockString": () => (/* binding */ isPrintableAsBlockString),
/* harmony export */   "printBlockString": () => (/* binding */ printBlockString)
/* harmony export */ });
/* harmony import */ var _characterClasses_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characterClasses.mjs */ "./node_modules/graphql/language/characterClasses.mjs");

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */

function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;

  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;

  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;

    const line = lines[i];
    const indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    firstNonEmptyLine =
      (_firstNonEmptyLine = firstNonEmptyLine) !== null &&
      _firstNonEmptyLine !== void 0
        ? _firstNonEmptyLine
        : i;
    lastNonEmptyLine = i;

    if (i !== 0 && indent < commonIndent) {
      commonIndent = indent;
    }
  }

  return lines // Remove common indentation from all lines but first.
    .map((line, i) => (i === 0 ? line : line.slice(commonIndent))) // Remove leading and trailing blank lines.
    .slice(
      (_firstNonEmptyLine2 = firstNonEmptyLine) !== null &&
        _firstNonEmptyLine2 !== void 0
        ? _firstNonEmptyLine2
        : 0,
      lastNonEmptyLine + 1,
    );
}

function leadingWhitespace(str) {
  let i = 0;

  while (i < str.length && (0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_0__.isWhiteSpace)(str.charCodeAt(i))) {
    ++i;
  }

  return i;
}
/**
 * @internal
 */

function isPrintableAsBlockString(value) {
  if (value === '') {
    return true; // empty string is printable
  }

  let isEmptyLine = true;
  let hasIndent = false;
  let hasCommonIndent = true;
  let seenNonEmptyLine = false;

  for (let i = 0; i < value.length; ++i) {
    switch (value.codePointAt(i)) {
      case 0x0000:
      case 0x0001:
      case 0x0002:
      case 0x0003:
      case 0x0004:
      case 0x0005:
      case 0x0006:
      case 0x0007:
      case 0x0008:
      case 0x000b:
      case 0x000c:
      case 0x000e:
      case 0x000f:
        return false;
      // Has non-printable characters

      case 0x000d:
        //  \r
        return false;
      // Has \r or \r\n which will be replaced as \n

      case 10:
        //  \n
        if (isEmptyLine && !seenNonEmptyLine) {
          return false; // Has leading new line
        }

        seenNonEmptyLine = true;
        isEmptyLine = true;
        hasIndent = false;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        hasIndent || (hasIndent = isEmptyLine);
        break;

      default:
        hasCommonIndent && (hasCommonIndent = hasIndent);
        isEmptyLine = false;
    }
  }

  if (isEmptyLine) {
    return false; // Has trailing empty lines
  }

  if (hasCommonIndent && seenNonEmptyLine) {
    return false; // Has internal indent
  }

  return true;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.

  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line

  const forceLeadingNewLine =
    lines.length > 1 &&
    lines
      .slice(1)
      .every((line) => line.length === 0 || (0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_0__.isWhiteSpace)(line.charCodeAt(0))); // Trailing triple quotes just looks confusing but doesn't force trailing new line

  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line

  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith('\\');
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines =
    !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
    (!isSingleLine ||
      value.length > 70 ||
      forceTrailingNewline ||
      forceLeadingNewLine ||
      hasTrailingTripleQuotes);
  let result = ''; // Format a multi-line block quote to account for leading space.

  const skipLeadingNewLine = isSingleLine && (0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_0__.isWhiteSpace)(value.charCodeAt(0));

  if ((printAsMultipleLines && !skipLeadingNewLine) || forceLeadingNewLine) {
    result += '\n';
  }

  result += escapedValue;

  if (printAsMultipleLines || forceTrailingNewline) {
    result += '\n';
  }

  return '"""' + result + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/characterClasses.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/language/characterClasses.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDigit": () => (/* binding */ isDigit),
/* harmony export */   "isLetter": () => (/* binding */ isLetter),
/* harmony export */   "isNameContinue": () => (/* binding */ isNameContinue),
/* harmony export */   "isNameStart": () => (/* binding */ isNameStart),
/* harmony export */   "isWhiteSpace": () => (/* binding */ isWhiteSpace)
/* harmony export */ });
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */
function isWhiteSpace(code) {
  return code === 0x0009 || code === 0x0020;
}
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */

function isDigit(code) {
  return code >= 0x0030 && code <= 0x0039;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */

function isLetter(code) {
  return (
    (code >= 0x0061 && code <= 0x007a) || // A-Z
    (code >= 0x0041 && code <= 0x005a) // a-z
  );
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */

function isNameStart(code) {
  return isLetter(code) || code === 0x005f;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */

function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 0x005f;
}


/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveLocation": () => (/* binding */ DirectiveLocation)
/* harmony export */ });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation;

(function (DirectiveLocation) {
  DirectiveLocation['QUERY'] = 'QUERY';
  DirectiveLocation['MUTATION'] = 'MUTATION';
  DirectiveLocation['SUBSCRIPTION'] = 'SUBSCRIPTION';
  DirectiveLocation['FIELD'] = 'FIELD';
  DirectiveLocation['FRAGMENT_DEFINITION'] = 'FRAGMENT_DEFINITION';
  DirectiveLocation['FRAGMENT_SPREAD'] = 'FRAGMENT_SPREAD';
  DirectiveLocation['INLINE_FRAGMENT'] = 'INLINE_FRAGMENT';
  DirectiveLocation['VARIABLE_DEFINITION'] = 'VARIABLE_DEFINITION';
  DirectiveLocation['SCHEMA'] = 'SCHEMA';
  DirectiveLocation['SCALAR'] = 'SCALAR';
  DirectiveLocation['OBJECT'] = 'OBJECT';
  DirectiveLocation['FIELD_DEFINITION'] = 'FIELD_DEFINITION';
  DirectiveLocation['ARGUMENT_DEFINITION'] = 'ARGUMENT_DEFINITION';
  DirectiveLocation['INTERFACE'] = 'INTERFACE';
  DirectiveLocation['UNION'] = 'UNION';
  DirectiveLocation['ENUM'] = 'ENUM';
  DirectiveLocation['ENUM_VALUE'] = 'ENUM_VALUE';
  DirectiveLocation['INPUT_OBJECT'] = 'INPUT_OBJECT';
  DirectiveLocation['INPUT_FIELD_DEFINITION'] = 'INPUT_FIELD_DEFINITION';
})(DirectiveLocation || (DirectiveLocation = {}));


/**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */


/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kind": () => (/* binding */ Kind)
/* harmony export */ });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind;

(function (Kind) {
  Kind['NAME'] = 'Name';
  Kind['DOCUMENT'] = 'Document';
  Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
  Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
  Kind['SELECTION_SET'] = 'SelectionSet';
  Kind['FIELD'] = 'Field';
  Kind['ARGUMENT'] = 'Argument';
  Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
  Kind['INLINE_FRAGMENT'] = 'InlineFragment';
  Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
  Kind['VARIABLE'] = 'Variable';
  Kind['INT'] = 'IntValue';
  Kind['FLOAT'] = 'FloatValue';
  Kind['STRING'] = 'StringValue';
  Kind['BOOLEAN'] = 'BooleanValue';
  Kind['NULL'] = 'NullValue';
  Kind['ENUM'] = 'EnumValue';
  Kind['LIST'] = 'ListValue';
  Kind['OBJECT'] = 'ObjectValue';
  Kind['OBJECT_FIELD'] = 'ObjectField';
  Kind['DIRECTIVE'] = 'Directive';
  Kind['NAMED_TYPE'] = 'NamedType';
  Kind['LIST_TYPE'] = 'ListType';
  Kind['NON_NULL_TYPE'] = 'NonNullType';
  Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
  Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
  Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
  Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
  Kind['FIELD_DEFINITION'] = 'FieldDefinition';
  Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
  Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
  Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
  Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
  Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
  Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
  Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
  Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
  Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
  Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
  Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
  Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
  Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
  Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (Kind = {}));


/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */


/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": () => (/* binding */ Lexer),
/* harmony export */   "isPunctuatorTokenKind": () => (/* binding */ isPunctuatorTokenKind)
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterClasses.mjs */ "./node_modules/graphql/language/characterClasses.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");





/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

class Lexer {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }

  get [Symbol.toStringTag]() {
    return 'Lexer';
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */

  advance() {
    this.lastToken = this.token;
    const token = (this.token = this.lookahead());
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */

  lookahead() {
    let token = this.token;

    if (token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          // Read the next token and form a link in the token linked-list.
          const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.

          token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.

          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT);
    }

    return token;
  }
}
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return (
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R
  );
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */

function isUnicodeScalarValue(code) {
  return (
    (code >= 0x0000 && code <= 0xd7ff) || (code >= 0xe000 && code <= 0x10ffff)
  );
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */

function isSupplementaryCodePoint(body, location) {
  return (
    isLeadingSurrogate(body.charCodeAt(location)) &&
    isTrailingSurrogate(body.charCodeAt(location + 1))
  );
}

function isLeadingSurrogate(code) {
  return code >= 0xd800 && code <= 0xdbff;
}

function isTrailingSurrogate(code) {
  return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */

function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);

  if (code === undefined) {
    return _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF;
  } else if (code >= 0x0020 && code <= 0x007e) {
    // Printable ASCII
    const char = String.fromCodePoint(code);
    return char === '"' ? "'\"'" : `"${char}"`;
  } // Unicode code point

  return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
}
/**
 * Create a token with line and column location information.
 */

function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */

function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // SourceCharacter

    switch (code) {
      // Ignored ::
      //   - UnicodeBOM
      //   - WhiteSpace
      //   - LineTerminator
      //   - Comment
      //   - Comma
      //
      // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
      //
      // WhiteSpace ::
      //   - "Horizontal Tab (U+0009)"
      //   - "Space (U+0020)"
      //
      // Comma :: ,
      case 0xfeff: // <BOM>

      case 0x0009: // \t

      case 0x0020: // <space>

      case 0x002c:
        // ,
        ++position;
        continue;
      // LineTerminator ::
      //   - "New Line (U+000A)"
      //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
      //   - "Carriage Return (U+000D)" "New Line (U+000A)"

      case 0x000a:
        // \n
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;

      case 0x000d:
        // \r
        if (body.charCodeAt(position + 1) === 0x000a) {
          position += 2;
        } else {
          ++position;
        }

        ++lexer.line;
        lexer.lineStart = position;
        continue;
      // Comment

      case 0x0023:
        // #
        return readComment(lexer, position);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }

      case 0x0021:
        // !
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG, position, position + 1);

      case 0x0024:
        // $
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR, position, position + 1);

      case 0x0026:
        // &
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP, position, position + 1);

      case 0x0028:
        // (
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L, position, position + 1);

      case 0x0029:
        // )
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R, position, position + 1);

      case 0x002e:
        // .
        if (
          body.charCodeAt(position + 1) === 0x002e &&
          body.charCodeAt(position + 2) === 0x002e
        ) {
          return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD, position, position + 3);
        }

        break;

      case 0x003a:
        // :
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON, position, position + 1);

      case 0x003d:
        // =
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS, position, position + 1);

      case 0x0040:
        // @
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT, position, position + 1);

      case 0x005b:
        // [
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L, position, position + 1);

      case 0x005d:
        // ]
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R, position, position + 1);

      case 0x007b:
        // {
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L, position, position + 1);

      case 0x007c:
        // |
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE, position, position + 1);

      case 0x007d:
        // }
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R, position, position + 1);
      // StringValue

      case 0x0022:
        // "
        if (
          body.charCodeAt(position + 1) === 0x0022 &&
          body.charCodeAt(position + 2) === 0x0022
        ) {
          return readBlockString(lexer, position);
        }

        return readString(lexer, position);
    } // IntValue | FloatValue (Digit | -)

    if ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isDigit)(code) || code === 0x002d) {
      return readNumber(lexer, position, code);
    } // Name

    if ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isNameStart)(code)) {
      return readName(lexer, position);
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
      lexer.source,
      position,
      code === 0x0027
        ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
        : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position)
        ? `Unexpected character: ${printCodePointAt(lexer, position)}.`
        : `Invalid character: ${printCodePointAt(lexer, position)}.`,
    );
  }

  return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */

function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }

  return createToken(
    lexer,
    _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position),
  );
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */

function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false; // NegativeSign (-)

  if (code === 0x002d) {
    code = body.charCodeAt(++position);
  } // Zero (0)

  if (code === 0x0030) {
    code = body.charCodeAt(++position);

    if ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isDigit)(code)) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Full stop (.)

  if (code === 0x002e) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // E e

  if (code === 0x0045 || code === 0x0065) {
    isFloat = true;
    code = body.charCodeAt(++position); // + -

    if (code === 0x002b || code === 0x002d) {
      code = body.charCodeAt(++position);
    }

    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart

  if (code === 0x002e || (0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isNameStart)(code)) {
    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position,
      )}.`,
    );
  }

  return createToken(
    lexer,
    isFloat ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.FLOAT : _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.INT,
    start,
    position,
    body.slice(start, position),
  );
}
/**
 * Returns the new position in the source after reading one or more digits.
 */

function readDigits(lexer, start, firstCode) {
  if (!(0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isDigit)(firstCode)) {
    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start,
      )}.`,
    );
  }

  const body = lexer.source.body;
  let position = start + 1; // +1 to skip first firstCode

  while ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isDigit)(body.charCodeAt(position))) {
    ++position;
  }

  return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */

function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = '';

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // Closing Quote (")

    if (code === 0x0022) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.STRING, start, position + 1, value);
    } // Escape Sequence (\)

    if (code === 0x005c) {
      value += body.slice(chunkStart, position);
      const escape =
        body.charCodeAt(position + 1) === 0x0075 // u
          ? body.charCodeAt(position + 2) === 0x007b // {
            ? readEscapedUnicodeVariableWidth(lexer, position)
            : readEscapedUnicodeFixedWidth(lexer, position)
          : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    } // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(lexer.source, position, 'Unterminated string.');
} // The string value and lexed size of an escape sequence.

function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3; // Cannot be larger than 12 chars (\u{00000000}).

  while (size < 12) {
    const code = body.charCodeAt(position + size++); // Closing Brace (})

    if (code === 0x007d) {
      // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }

      return {
        value: String.fromCodePoint(point),
        size,
      };
    } // Append this hex digit to the code point.

    point = (point << 4) | readHexDigit(code);

    if (point < 0) {
      break;
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size,
    )}".`,
  );
}

function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);

  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6,
    };
  } // GraphQL allows JSON-style surrogate pair escape sequences, but only when
  // a valid pair is formed.

  if (isLeadingSurrogate(code)) {
    // \u
    if (
      body.charCodeAt(position + 6) === 0x005c &&
      body.charCodeAt(position + 7) === 0x0075
    ) {
      const trailingCode = read16BitHexCode(body, position + 8);

      if (isTrailingSurrogate(trailingCode)) {
        // JavaScript defines strings as a sequence of UTF-16 code units and
        // encodes Unicode code points above U+FFFF using a surrogate pair of
        // code units. Since this is a surrogate pair escape sequence, just
        // include both codes into the JavaScript string value. Had JavaScript
        // not been internally based on UTF-16, then this surrogate pair would
        // be decoded to retrieve the supplementary code point.
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12,
        };
      }
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`,
  );
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */

function read16BitHexCode(body, position) {
  // readHexDigit() returns -1 on error. ORing a negative value with any other
  // value always produces a negative value.
  return (
    (readHexDigit(body.charCodeAt(position)) << 12) |
    (readHexDigit(body.charCodeAt(position + 1)) << 8) |
    (readHexDigit(body.charCodeAt(position + 2)) << 4) |
    readHexDigit(body.charCodeAt(position + 3))
  );
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */

function readHexDigit(code) {
  return code >= 0x0030 && code <= 0x0039 // 0-9
    ? code - 0x0030
    : code >= 0x0041 && code <= 0x0046 // A-F
    ? code - 0x0037
    : code >= 0x0061 && code <= 0x0066 // a-f
    ? code - 0x0057
    : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */

function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);

  switch (code) {
    case 0x0022:
      // "
      return {
        value: '\u0022',
        size: 2,
      };

    case 0x005c:
      // \
      return {
        value: '\u005c',
        size: 2,
      };

    case 0x002f:
      // /
      return {
        value: '\u002f',
        size: 2,
      };

    case 0x0062:
      // b
      return {
        value: '\u0008',
        size: 2,
      };

    case 0x0066:
      // f
      return {
        value: '\u000c',
        size: 2,
      };

    case 0x006e:
      // n
      return {
        value: '\u000a',
        size: 2,
      };

    case 0x0072:
      // r
      return {
        value: '\u000d',
        size: 2,
      };

    case 0x0074:
      // t
      return {
        value: '\u0009',
        size: 2,
      };
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2,
    )}".`,
  );
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */

function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = '';
  const blockLines = [];

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // Closing Triple-Quote (""")

    if (
      code === 0x0022 &&
      body.charCodeAt(position + 1) === 0x0022 &&
      body.charCodeAt(position + 2) === 0x0022
    ) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BLOCK_STRING,
        start,
        position + 3, // Return a string of the lines joined with U+000A.
        (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_4__.dedentBlockStringLines)(blockLines).join('\n'),
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    } // Escaped Triple-Quote (\""")

    if (
      code === 0x005c &&
      body.charCodeAt(position + 1) === 0x0022 &&
      body.charCodeAt(position + 2) === 0x0022 &&
      body.charCodeAt(position + 3) === 0x0022
    ) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1; // skip only slash

      position += 4;
      continue;
    } // LineTerminator

    if (code === 0x000a || code === 0x000d) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);

      if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) {
        position += 2;
      } else {
        ++position;
      }

      currentLine = '';
      chunkStart = position;
      lineStart = position;
      continue;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(lexer.source, position, 'Unterminated string.');
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */

function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;

  while (position < bodyLength) {
    const code = body.charCodeAt(position);

    if ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isNameContinue)(code)) {
      ++position;
    } else {
      break;
    }
  }

  return createToken(
    lexer,
    _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.NAME,
    start,
    position,
    body.slice(start, position),
  );
}


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": () => (/* binding */ getLocation)
/* harmony export */ });
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");

const LineRegExp = /\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;

  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === 'number' || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant)(false);

    if (match.index >= position) {
      break;
    }

    lastLineStart = match.index + match[0].length;
    line += 1;
  }

  return {
    line,
    column: position + 1 - lastLineStart,
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parser": () => (/* binding */ Parser),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parseConstValue": () => (/* binding */ parseConstValue),
/* harmony export */   "parseType": () => (/* binding */ parseType),
/* harmony export */   "parseValue": () => (/* binding */ parseValue)
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");







/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  const parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  const parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  const value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return value;
}
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */

function parseConstValue(source, options) {
  const parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  const value = parser.parseConstValueLiteral();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  const parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  const type = parser.parseTypeReference();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

class Parser {
  constructor(source, options = {}) {
    const sourceObj = (0,_source_mjs__WEBPACK_IMPORTED_MODULE_1__.isSource)(source) ? source : new _source_mjs__WEBPACK_IMPORTED_MODULE_1__.Source(source);
    this._lexer = new _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.Lexer(sourceObj);
    this._options = options;
    this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */

  parseName() {
    const token = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);
    return this.node(token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAME,
      value: token.value,
    });
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */

  parseDocument() {
    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DOCUMENT,
      definitions: this.many(
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF,
        this.parseDefinition,
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF,
      ),
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */

  parseDefinition() {
    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } // Many definitions begin with a description and require a lookahead.

    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription
      ? this._lexer.lookahead()
      : this._lexer.token;

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }

      if (hasDescription) {
        throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
          this._lexer.source,
          this._lexer.token.start,
          'Unexpected description, descriptions are supported only on type definitions.',
        );
      }

      switch (keywordToken.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    }

    throw this.unexpected(keywordToken);
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */

  parseOperationDefinition() {
    const start = this._lexer.token;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
        operation: _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.OperationTypeNode.QUERY,
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
      });
    }

    const operation = this.parseOperationType();
    let name;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      name = this.parseName();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */

  parseOperationType() {
    const operationToken = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.OperationTypeNode.QUERY;

      case 'mutation':
        return _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.OperationTypeNode.MUTATION;

      case 'subscription':
        return _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.OperationTypeNode.SUBSCRIPTION;
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */

  parseVariableDefinitions() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L,
      this.parseVariableDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R,
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */

  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS)
        ? this.parseConstValueLiteral()
        : undefined,
      directives: this.parseConstDirectives(),
    });
  }
  /**
   * Variable : $ Name
   */

  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR);
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE,
      name: this.parseName(),
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */

  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SELECTION_SET,
      selections: this.many(
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
        this.parseSelection,
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
      ),
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */

  parseSelection() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD)
      ? this.parseFragment()
      : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */

  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)
        ? this.parseSelectionSet()
        : undefined,
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */

  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */

  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst),
    });
  }

  parseConstArgument() {
    return this.parseArgument(true);
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */

  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      return this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
      });
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */

  parseFragmentDefinition() {
    const start = this._lexer.token;
    this.expectKeyword('fragment'); // Legacy support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
      });
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * FragmentName : Name but not `on`
   */

  parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */

  parseValueLiteral(isConst) {
    const token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INT,
          value: token.value,
        });

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FLOAT,
          value: token.value,
        });

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING:
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME:
        this.advanceLexer();

        switch (token.value) {
          case 'true':
            return this.node(token, {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: true,
            });

          case 'false':
            return this.node(token, {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: false,
            });

          case 'null':
            return this.node(token, {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NULL,
            });

          default:
            return this.node(token, {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM,
              value: token.value,
            });
        }

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR);

          if (this._lexer.token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`,
            );
          } else {
            throw this.unexpected(token);
          }
        }

        return this.parseVariable();

      default:
        throw this.unexpected();
    }
  }

  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }

  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.STRING,
      value: token.value,
      block: token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING,
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */

  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);

    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST,
      values: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R),
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */

  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);

    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT,
      fields: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R),
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */

  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst),
    });
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */

  parseDirectives(isConst) {
    const directives = [];

    while (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }

  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */

  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
    });
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */

  parseTypeReference() {
    const start = this._lexer.token;
    let type;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST_TYPE,
        type: innerType,
      });
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BANG)) {
      return this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NON_NULL_TYPE,
        type,
      });
    }

    return type;
  }
  /**
   * NamedType : Name
   */

  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAMED_TYPE,
      name: this.parseName(),
    });
  } // Implements the parsing rules in the Type Definition section.

  peekDescription() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */

  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */

  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('schema');
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes,
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */

  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type,
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */

  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('scalar');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives,
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */

  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('type');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */

  parseImplementsInterfaces() {
    return this.expectOptionalKeyword('implements')
      ? this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP, this.parseNamedType)
      : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */

  parseFieldsDefinition() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseFieldDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */

  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives,
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */

  parseArgumentDefs() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L,
      this.parseInputValueDef,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R,
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */

  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }

    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives,
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */

  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('interface');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */

  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('union');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types,
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */

  parseUnionMemberTypes() {
    return this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS)
      ? this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseNamedType)
      : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */

  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('enum');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values,
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */

  parseEnumValuesDefinition() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */

  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives,
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */

  parseEnumValueName() {
    if (
      this._lexer.token.value === 'true' ||
      this._lexer.token.value === 'false' ||
      this._lexer.token.value === 'null'
    ) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token,
        )} is reserved and cannot be used for an enum value.`,
      );
    }

    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */

  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('input');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields,
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */

  parseInputFieldsDefinition() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseInputValueDef,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */

  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */

  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes,
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */

  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    const name = this.parseName();
    const directives = this.parseConstDirectives();

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives,
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */

  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();

    if (
      interfaces.length === 0 &&
      directives.length === 0 &&
      fields.length === 0
    ) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */

  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();

    if (
      interfaces.length === 0 &&
      directives.length === 0 &&
      fields.length === 0
    ) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */

  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types,
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */

  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values,
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */

  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields,
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */

  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations,
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */

  parseDirectiveLocations() {
    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */

  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();

    if (Object.prototype.hasOwnProperty.call(_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_6__.DirectiveLocation, name.value)) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */

  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.Location(
        startToken,
        this._lexer.lastToken,
        this._lexer.source,
      );
    }

    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */

  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */

  expectToken(kind) {
    const token = this._lexer.token;

    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`,
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */

  expectOptionalToken(kind) {
    const token = this._lexer.token;

    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }

    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */

  expectKeyword(value) {
    const token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`,
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */

  expectOptionalKeyword(value) {
    const token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */

  unexpected(atToken) {
    const token =
      atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`,
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */

  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  }

  advanceLexer() {
    const { maxTokens } = this._options;

    const token = this._lexer.advance();

    if (maxTokens !== undefined && token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF) {
      ++this._tokenCounter;

      if (this._tokenCounter > maxTokens) {
        throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
          this._lexer.source,
          token.start,
          `Document contains more that ${maxTokens} tokens. Parsing aborted.`,
        );
      }
    }
  }
}
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */

function getTokenKindDesc(kind) {
  return (0,_lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.isPunctuatorTokenKind)(kind) ? `"${kind}"` : kind;
}


/***/ }),

/***/ "./node_modules/graphql/language/predicates.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/language/predicates.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isConstValueNode": () => (/* binding */ isConstValueNode),
/* harmony export */   "isDefinitionNode": () => (/* binding */ isDefinitionNode),
/* harmony export */   "isExecutableDefinitionNode": () => (/* binding */ isExecutableDefinitionNode),
/* harmony export */   "isSelectionNode": () => (/* binding */ isSelectionNode),
/* harmony export */   "isTypeDefinitionNode": () => (/* binding */ isTypeDefinitionNode),
/* harmony export */   "isTypeExtensionNode": () => (/* binding */ isTypeExtensionNode),
/* harmony export */   "isTypeNode": () => (/* binding */ isTypeNode),
/* harmony export */   "isTypeSystemDefinitionNode": () => (/* binding */ isTypeSystemDefinitionNode),
/* harmony export */   "isTypeSystemExtensionNode": () => (/* binding */ isTypeSystemExtensionNode),
/* harmony export */   "isValueNode": () => (/* binding */ isValueNode)
/* harmony export */ });
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");

function isDefinitionNode(node) {
  return (
    isExecutableDefinitionNode(node) ||
    isTypeSystemDefinitionNode(node) ||
    isTypeSystemExtensionNode(node)
  );
}
function isExecutableDefinitionNode(node) {
  return (
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OPERATION_DEFINITION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_DEFINITION
  );
}
function isSelectionNode(node) {
  return (
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FIELD ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_SPREAD ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INLINE_FRAGMENT
  );
}
function isValueNode(node) {
  return (
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.VARIABLE ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INT ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FLOAT ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.STRING ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.BOOLEAN ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NULL ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.ENUM ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.LIST ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT
  );
}
function isConstValueNode(node) {
  return (
    isValueNode(node) &&
    (node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.LIST
      ? node.values.some(isConstValueNode)
      : node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT
      ? node.fields.some((field) => isConstValueNode(field.value))
      : node.kind !== _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.VARIABLE)
  );
}
function isTypeNode(node) {
  return (
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NAMED_TYPE ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.LIST_TYPE ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NON_NULL_TYPE
  );
}
function isTypeSystemDefinitionNode(node) {
  return (
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.SCHEMA_DEFINITION ||
    isTypeDefinitionNode(node) ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.DIRECTIVE_DEFINITION
  );
}
function isTypeDefinitionNode(node) {
  return (
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.SCALAR_TYPE_DEFINITION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT_TYPE_DEFINITION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INTERFACE_TYPE_DEFINITION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.UNION_TYPE_DEFINITION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.ENUM_TYPE_DEFINITION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INPUT_OBJECT_TYPE_DEFINITION
  );
}
function isTypeSystemExtensionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
  return (
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.SCALAR_TYPE_EXTENSION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT_TYPE_EXTENSION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INTERFACE_TYPE_EXTENSION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.UNION_TYPE_EXTENSION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.ENUM_TYPE_EXTENSION ||
    node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INPUT_OBJECT_TYPE_EXTENSION
  );
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printLocation": () => (/* binding */ printLocation),
/* harmony export */   "printSourceLocation": () => (/* binding */ printSourceLocation)
/* harmony export */ });
/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");


/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
function printLocation(location) {
  return printSourceLocation(
    location.source,
    (0,_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(location.source, location.start),
  );
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = ''.padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];

    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return (
      locationStr +
      printPrefixedLines([
        [`${lineNum} |`, subLines[0]],
        ...subLines.slice(1, subLineIndex + 1).map((subLine) => ['|', subLine]),
        ['|', '^'.padStart(subLineColumnNum)],
        ['|', subLines[subLineIndex + 1]],
      ])
    );
  }

  return (
    locationStr +
    printPrefixedLines([
      // Lines specified like this: ["prefix", "string"],
      [`${lineNum - 1} |`, lines[lineIndex - 1]],
      [`${lineNum} |`, locationLine],
      ['|', '^'.padStart(columnNum)],
      [`${lineNum + 1} |`, lines[lineIndex + 1]],
    ])
  );
}

function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== undefined);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines
    .map(([prefix, line]) => prefix.padStart(padLen) + (line ? ' ' + line : ''))
    .join('\n');
}


/***/ }),

/***/ "./node_modules/graphql/language/printString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/printString.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printString": () => (/* binding */ printString)
/* harmony export */ });
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
} // eslint-disable-next-line no-control-regex

const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore

const escapeSequences = [
  '\\u0000',
  '\\u0001',
  '\\u0002',
  '\\u0003',
  '\\u0004',
  '\\u0005',
  '\\u0006',
  '\\u0007',
  '\\b',
  '\\t',
  '\\n',
  '\\u000B',
  '\\f',
  '\\r',
  '\\u000E',
  '\\u000F',
  '\\u0010',
  '\\u0011',
  '\\u0012',
  '\\u0013',
  '\\u0014',
  '\\u0015',
  '\\u0016',
  '\\u0017',
  '\\u0018',
  '\\u0019',
  '\\u001A',
  '\\u001B',
  '\\u001C',
  '\\u001D',
  '\\u001E',
  '\\u001F',
  '',
  '',
  '\\"',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 2F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 3F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 4F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '\\\\',
  '',
  '',
  '', // 5F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 6F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '\\u007F',
  '\\u0080',
  '\\u0081',
  '\\u0082',
  '\\u0083',
  '\\u0084',
  '\\u0085',
  '\\u0086',
  '\\u0087',
  '\\u0088',
  '\\u0089',
  '\\u008A',
  '\\u008B',
  '\\u008C',
  '\\u008D',
  '\\u008E',
  '\\u008F',
  '\\u0090',
  '\\u0091',
  '\\u0092',
  '\\u0093',
  '\\u0094',
  '\\u0095',
  '\\u0096',
  '\\u0097',
  '\\u0098',
  '\\u0099',
  '\\u009A',
  '\\u009B',
  '\\u009C',
  '\\u009D',
  '\\u009E',
  '\\u009F',
];


/***/ }),

/***/ "./node_modules/graphql/language/printer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/printer.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "print": () => (/* binding */ print)
/* harmony export */ });
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _printString_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printString.mjs */ "./node_modules/graphql/language/printString.mjs");
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");



/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return (0,_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__.visit)(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
  Name: {
    leave: (node) => node.value,
  },
  Variable: {
    leave: (node) => '$' + node.name,
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, '\n\n'),
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
      const prefix = join(
        [
          node.operation,
          join([node.name, varDefs]),
          join(node.directives, ' '),
        ],
        ' ',
      ); // Anonymous queries with no directives or variable definitions can use
      // the query short form.

      return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
    },
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) =>
      variable +
      ': ' +
      type +
      wrap(' = ', defaultValue) +
      wrap(' ', join(directives, ' ')),
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections),
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap('', alias, ': ') + name;
      let argsLine = prefix + wrap('(', join(args, ', '), ')');

      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
      }

      return join([argsLine, join(directives, ' '), selectionSet], ' ');
    },
  },
  Argument: {
    leave: ({ name, value }) => name + ': ' + value,
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) =>
      '...' + name + wrap(' ', join(directives, ' ')),
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) =>
      join(
        [
          '...',
          wrap('on ', typeCondition),
          join(directives, ' '),
          selectionSet,
        ],
        ' ',
      ),
  },
  FragmentDefinition: {
    leave: (
      { name, typeCondition, variableDefinitions, directives, selectionSet }, // Note: fragment variable definitions are experimental and may be changed
    ) =>
      // or removed in the future.
      `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` +
      `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` +
      selectionSet,
  },
  // Value
  IntValue: {
    leave: ({ value }) => value,
  },
  FloatValue: {
    leave: ({ value }) => value,
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) =>
      isBlockString ? (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_1__.printBlockString)(value) : (0,_printString_mjs__WEBPACK_IMPORTED_MODULE_2__.printString)(value),
  },
  BooleanValue: {
    leave: ({ value }) => (value ? 'true' : 'false'),
  },
  NullValue: {
    leave: () => 'null',
  },
  EnumValue: {
    leave: ({ value }) => value,
  },
  ListValue: {
    leave: ({ values }) => '[' + join(values, ', ') + ']',
  },
  ObjectValue: {
    leave: ({ fields }) => '{' + join(fields, ', ') + '}',
  },
  ObjectField: {
    leave: ({ name, value }) => name + ': ' + value,
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) =>
      '@' + name + wrap('(', join(args, ', '), ')'),
  },
  // Type
  NamedType: {
    leave: ({ name }) => name,
  },
  ListType: {
    leave: ({ type }) => '[' + type + ']',
  },
  NonNullType: {
    leave: ({ type }) => type + '!',
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) =>
      wrap('', description, '\n') +
      join(['schema', join(directives, ' '), block(operationTypes)], ' '),
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ': ' + type,
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) =>
      wrap('', description, '\n') +
      join(['scalar', name, join(directives, ' ')], ' '),
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) =>
      wrap('', description, '\n') +
      join(
        [
          'type',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) =>
      wrap('', description, '\n') +
      name +
      (hasMultilineItems(args)
        ? wrap('(\n', indent(join(args, '\n')), '\n)')
        : wrap('(', join(args, ', '), ')')) +
      ': ' +
      type +
      wrap(' ', join(directives, ' ')),
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) =>
      wrap('', description, '\n') +
      join(
        [name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')],
        ' ',
      ),
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) =>
      wrap('', description, '\n') +
      join(
        [
          'interface',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types }) =>
      wrap('', description, '\n') +
      join(
        ['union', name, join(directives, ' '), wrap('= ', join(types, ' | '))],
        ' ',
      ),
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) =>
      wrap('', description, '\n') +
      join(['enum', name, join(directives, ' '), block(values)], ' '),
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) =>
      wrap('', description, '\n') + join([name, join(directives, ' ')], ' '),
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) =>
      wrap('', description, '\n') +
      join(['input', name, join(directives, ' '), block(fields)], ' '),
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) =>
      wrap('', description, '\n') +
      'directive @' +
      name +
      (hasMultilineItems(args)
        ? wrap('(\n', indent(join(args, '\n')), '\n)')
        : wrap('(', join(args, ', '), ')')) +
      (repeatable ? ' repeatable' : '') +
      ' on ' +
      join(locations, ' | '),
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) =>
      join(
        ['extend schema', join(directives, ' '), block(operationTypes)],
        ' ',
      ),
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) =>
      join(['extend scalar', name, join(directives, ' ')], ' '),
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) =>
      join(
        [
          'extend type',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) =>
      join(
        [
          'extend interface',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) =>
      join(
        [
          'extend union',
          name,
          join(directives, ' '),
          wrap('= ', join(types, ' | ')),
        ],
        ' ',
      ),
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) =>
      join(['extend enum', name, join(directives, ' '), block(values)], ' '),
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) =>
      join(['extend input', name, join(directives, ' '), block(fields)], ' '),
  },
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */

function join(maybeArray, separator = '') {
  var _maybeArray$filter$jo;

  return (_maybeArray$filter$jo =
    maybeArray === null || maybeArray === void 0
      ? void 0
      : maybeArray.filter((x) => x).join(separator)) !== null &&
    _maybeArray$filter$jo !== void 0
    ? _maybeArray$filter$jo
    : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */

function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */

function wrap(start, maybeString, end = '') {
  return maybeString != null && maybeString !== ''
    ? start + maybeString + end
    : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function hasMultilineItems(maybeArray) {
  var _maybeArray$some;

  // FIXME: https://github.com/graphql/graphql-js/issues/2203

  /* c8 ignore next */
  return (_maybeArray$some =
    maybeArray === null || maybeArray === void 0
      ? void 0
      : maybeArray.some((str) => str.includes('\n'))) !== null &&
    _maybeArray$some !== void 0
    ? _maybeArray$some
    : false;
}


/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": () => (/* binding */ Source),
/* harmony export */   "isSource": () => (/* binding */ isSource)
/* harmony export */ });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");




/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
class Source {
  constructor(
    body,
    name = 'GraphQL request',
    locationOffset = {
      line: 1,
      column: 1,
    },
  ) {
    typeof body === 'string' ||
      (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.devAssert)(false, `Body must be a string. Received: ${(0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.inspect)(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 ||
      (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.devAssert)(
        false,
        'line in locationOffset is 1-indexed and must be positive.',
      );
    this.locationOffset.column > 0 ||
      (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.devAssert)(
        false,
        'column in locationOffset is 1-indexed and must be positive.',
      );
  }

  get [Symbol.toStringTag]() {
    return 'Source';
  }
}
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

function isSource(source) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_2__.instanceOf)(source, Source);
}


/***/ }),

/***/ "./node_modules/graphql/language/tokenKind.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/language/tokenKind.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenKind": () => (/* binding */ TokenKind)
/* harmony export */ });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind;

(function (TokenKind) {
  TokenKind['SOF'] = '<SOF>';
  TokenKind['EOF'] = '<EOF>';
  TokenKind['BANG'] = '!';
  TokenKind['DOLLAR'] = '$';
  TokenKind['AMP'] = '&';
  TokenKind['PAREN_L'] = '(';
  TokenKind['PAREN_R'] = ')';
  TokenKind['SPREAD'] = '...';
  TokenKind['COLON'] = ':';
  TokenKind['EQUALS'] = '=';
  TokenKind['AT'] = '@';
  TokenKind['BRACKET_L'] = '[';
  TokenKind['BRACKET_R'] = ']';
  TokenKind['BRACE_L'] = '{';
  TokenKind['PIPE'] = '|';
  TokenKind['BRACE_R'] = '}';
  TokenKind['NAME'] = 'Name';
  TokenKind['INT'] = 'Int';
  TokenKind['FLOAT'] = 'Float';
  TokenKind['STRING'] = 'String';
  TokenKind['BLOCK_STRING'] = 'BlockString';
  TokenKind['COMMENT'] = 'Comment';
})(TokenKind || (TokenKind = {}));


/**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */


/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BREAK": () => (/* binding */ BREAK),
/* harmony export */   "getEnterLeaveForKind": () => (/* binding */ getEnterLeaveForKind),
/* harmony export */   "getVisitFn": () => (/* binding */ getVisitFn),
/* harmony export */   "visit": () => (/* binding */ visit),
/* harmony export */   "visitInParallel": () => (/* binding */ visitInParallel)
/* harmony export */ });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");




/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

const BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */

function visit(root, visitor, visitorKeys = _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.QueryDocumentKeys) {
  const enterLeaveMap = new Map();

  for (const kind of Object.values(_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  /* eslint-disable no-undef-init */

  let stack = undefined;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let edits = [];
  let node = root;
  let key = undefined;
  let parent = undefined;
  const path = [];
  const ancestors = [];
  /* eslint-enable no-undef-init */

  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;

          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;

            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(node),
          );

          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];

      if (node === null || node === undefined) {
        continue;
      }

      path.push(key);
    }

    let result;

    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;

      (0,_ast_mjs__WEBPACK_IMPORTED_MODULE_0__.isNode)(node) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__.devAssert)(false, `Invalid AST Node: ${(0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.inspect)(node)}.`);
      const visitFn = isLeaving
        ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null ||
          _enterLeaveMap$get === void 0
          ? void 0
          : _enterLeaveMap$get.leave
        : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null ||
          _enterLeaveMap$get2 === void 0
        ? void 0
        : _enterLeaveMap$get2.enter;
      result =
        visitFn === null || visitFn === void 0
          ? void 0
          : visitFn.call(visitor, node, key, parent, path, ancestors);

      if (result === BREAK) {
        break;
      }

      if (result === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== undefined) {
        edits.push([key, result]);

        if (!isLeaving) {
          if ((0,_ast_mjs__WEBPACK_IMPORTED_MODULE_0__.isNode)(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;

      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack,
      };
      inArray = Array.isArray(node);
      keys = inArray
        ? node
        : (_node$kind = visitorKeys[node.kind]) !== null &&
          _node$kind !== void 0
        ? _node$kind
        : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    // New root
    return edits[edits.length - 1][1];
  }

  return root;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  const skipping = new Array(visitors.length).fill(null);
  const mergedVisitor = Object.create(null);

  for (const kind of Object.values(_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind)) {
    let hasVisitor = false;
    const enterList = new Array(visitors.length).fill(undefined);
    const leaveList = new Array(visitors.length).fill(undefined);

    for (let i = 0; i < visitors.length; ++i) {
      const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
      hasVisitor || (hasVisitor = enter != null || leave != null);
      enterList[i] = enter;
      leaveList[i] = leave;
    }

    if (!hasVisitor) {
      continue;
    }

    const mergedEnterLeave = {
      enter(...args) {
        const node = args[0];

        for (let i = 0; i < visitors.length; i++) {
          if (skipping[i] === null) {
            var _enterList$i;

            const result =
              (_enterList$i = enterList[i]) === null || _enterList$i === void 0
                ? void 0
                : _enterList$i.apply(visitors[i], args);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      },

      leave(...args) {
        const node = args[0];

        for (let i = 0; i < visitors.length; i++) {
          if (skipping[i] === null) {
            var _leaveList$i;

            const result =
              (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0
                ? void 0
                : _leaveList$i.apply(visitors[i], args);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          } else if (skipping[i] === node) {
            skipping[i] = null;
          }
        }
      },
    };
    mergedVisitor[kind] = mergedEnterLeave;
  }

  return mergedVisitor;
}
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */

function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];

  if (typeof kindVisitor === 'object') {
    // { Kind: { enter() {}, leave() {} } }
    return kindVisitor;
  } else if (typeof kindVisitor === 'function') {
    // { Kind() {} }
    return {
      enter: kindVisitor,
      leave: undefined,
    };
  } // { enter() {}, leave() {} }

  return {
    enter: visitor.enter,
    leave: visitor.leave,
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */

/* c8 ignore next 8 */

function getVisitFn(visitor, kind, isLeaving) {
  const { enter, leave } = getEnterLeaveForKind(visitor, kind);
  return isLeaving ? leave : enter;
}


/***/ }),

/***/ "./node_modules/ts-invariant/lib/invariant.js":
/*!****************************************************!*\
  !*** ./node_modules/ts-invariant/lib/invariant.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvariantError": () => (/* binding */ InvariantError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "invariant": () => (/* binding */ invariant),
/* harmony export */   "setVerbosity": () => (/* binding */ setVerbosity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));

function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.debug = wrapConsoleMethod("debug");
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (invariant);
//# sourceMappingURL=invariant.js.map

/***/ }),

/***/ "./node_modules/ts-invariant/process/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ts-invariant/process/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "install": () => (/* binding */ install),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
function maybe(thunk) {
  try { return thunk() } catch (_) {}
}

var safeGlobal = (
  maybe(function() { return globalThis }) ||
  maybe(function() { return window }) ||
  maybe(function() { return self }) ||
  maybe(function() { return global }) ||
  // We don't expect the Function constructor ever to be invoked at runtime, as
  // long as at least one of globalThis, window, self, or global is defined, so
  // we are under no obligation to make it easy for static analysis tools to
  // detect syntactic usage of the Function constructor. If you think you can
  // improve your static analysis to detect this obfuscation, think again. This
  // is an arms race you cannot win, at least not in JavaScript.
  maybe(function() { return maybe.constructor("return this")() })
);

var needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe(function() { return "development" }) &&
      !maybe(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}


/***/ }),

/***/ "./node_modules/zen-observable-ts/module.js":
/*!**************************************************!*\
  !*** ./node_modules/zen-observable-ts/module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// === Symbol Support ===
var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(observer, subscriber) {
    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  var _proto = Subscription.prototype;

  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== 'closed') {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };

  _createClass(Subscription, [{
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = /*#__PURE__*/function () {
  function SubscriptionObserver(subscription) {
    this._subscription = subscription;
  }

  var _proto2 = SubscriptionObserver.prototype;

  _proto2.next = function next(value) {
    onNotify(this._subscription, 'next', value);
  };

  _proto2.error = function error(value) {
    onNotify(this._subscription, 'error', value);
  };

  _proto2.complete = function complete() {
    onNotify(this._subscription, 'complete');
  };

  _createClass(SubscriptionObserver, [{
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = /*#__PURE__*/function () {
  function Observable(subscriber) {
    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  var _proto3 = Observable.prototype;

  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== 'object' || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }

    return new Subscription(observer, this._subscriber);
  };

  _proto3.forEach = function forEach(fn) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (typeof fn !== 'function') {
        reject(new TypeError(fn + ' is not a function'));
        return;
      }

      function done() {
        subscription.unsubscribe();
        resolve();
      }

      var subscription = _this.subscribe({
        next: function (value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };

  _proto3.map = function map(fn) {
    var _this2 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this2.subscribe({
        next: function (value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.filter = function filter(fn) {
    var _this3 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this3.subscribe({
        next: function (value) {
          try {
            if (!fn(value)) return;
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.reduce = function reduce(fn) {
    var _this4 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function (observer) {
      return _this4.subscribe({
        next: function (value) {
          var first = !hasValue;
          hasValue = true;

          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };

  _proto3.concat = function concat() {
    var _this5 = this;

    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    var C = getSpecies(this);
    return new C(function (observer) {
      var subscription;
      var index = 0;

      function startNext(next) {
        subscription = next.subscribe({
          next: function (v) {
            observer.next(v);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (index === sources.length) {
              subscription = undefined;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }

      startNext(_this5);
      return function () {
        if (subscription) {
          subscription.unsubscribe();
          subscription = undefined;
        }
      };
    });
  };

  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      var subscriptions = [];

      var outer = _this6.subscribe({
        next: function (value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }

          var inner = C.from(value).subscribe({
            next: function (value) {
              observer.next(value);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              var i = subscriptions.indexOf(inner);
              if (i >= 0) subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          completeIfDone();
        }
      });

      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0) observer.complete();
      }

      return function () {
        subscriptions.forEach(function (s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };

  _proto3[SymbolObservable] = function () {
    return this;
  };

  Observable.from = function from(x) {
    var C = typeof this === 'function' ? this : Observable;
    if (x == null) throw new TypeError(x + ' is not an object');
    var method = getMethod(x, SymbolObservable);

    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
      if (isObservable(observable) && observable.constructor === C) return observable;
      return new C(function (observer) {
        return observable.subscribe(observer);
      });
    }

    if (hasSymbol('iterator')) {
      method = getMethod(x, SymbolIterator);

      if (method) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done;) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }
    }

    if (Array.isArray(x)) {
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }

    throw new TypeError(x + ' is not observable');
  };

  Observable.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    var C = typeof this === 'function' ? this : Observable;
    return new C(function (observer) {
      enqueue(function () {
        if (observer.closed) return;

        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed) return;
        }

        observer.complete();
      });
    });
  };

  _createClass(Observable, null, [{
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./src/____toolbar-patterns/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/____toolbar-patterns/App.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _WcbPluginSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WcbPluginSidebar */ "./src/____toolbar-patterns/WcbPluginSidebar.tsx");






/**
 * Internal dependencies
 */



// import metadata from "./block.json";
//
// registerBlockType(metadata.name, {
// 	edit: () => null,
// 	save: () => null,
// 	attributes: [],
// });

const PluginSidebarTest = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__.PluginSidebar, {
  name: "wcb-plugin-sidebar-woostify",
  title: "Woostify Page Settings",
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-6 h-6 wcb-plugin-sidebar-woostify__logosvg",
    width: "188",
    height: "188",
    viewBox: "0 0 188 188",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_516_2418)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
    id: "mask0_516_2418",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "188",
    height: "188"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0.286438 0.286621H187.286V187.287H0.286438V0.286621Z",
    fill: "white"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    mask: "url(#mask0_516_2418)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M120.078 151.37L39.177 70.4691L58.875 50.7712L120.078 111.974L178.292 53.7555C163.302 22.141 131.089 0.276367 93.7708 0.276367C56.427 0.276367 24.1979 22.1722 9.21871 53.8232L87.2343 131.839L67.7083 151.37L0.739543 84.4014C0.432251 87.4847 0.276001 90.6097 0.276001 93.7712C0.276001 145.407 42.1354 187.271 93.7708 187.271C145.406 187.271 187.271 145.407 187.271 93.7712C187.271 90.6826 187.115 87.6357 186.823 84.6253L120.078 151.37Z",
    fill: "currentColor"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_516_2418"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "188",
    height: "188",
    fill: "white"
  }))))
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbPluginSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], null));
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__.registerPlugin)("wcb-plugin-sidebar-woostify", {
  render: PluginSidebarTest
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
>>>>>>> 3978589b2bcb51438be99f30659ff5f1e892ad92

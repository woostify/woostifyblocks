/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");





var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      break;
    }

    (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)();
  }

  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.slice)(begin, stylis__WEBPACK_IMPORTED_MODULE_3__.position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      case 0:
        // &\f
        if (character === 38 && (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(stylis__WEBPACK_IMPORTED_MODULE_3__.position - 1, points, index);
        break;

      case 2:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.delimit)(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_4__.from)(character);
    }
  } while (character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)());

  return parsed;
};

var getRules = function getRules(value, points) {
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.dealloc)(toRules((0,stylis__WEBPACK_IMPORTED_MODULE_3__.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = element.parent === children[0]; // in nested rules comments become children of the "auto-inserted" rule
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? children[0].children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.hash)(value, length)) {
    // color-adjust
    case 5103:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // order

    case 6165:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(\w+).+(:[^]+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-$1$2' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-item-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-line-pack' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, '-grow', '') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /([^-])(transform)/g, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(zoom-|grab)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), /(image-set)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(image-set\([^]*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(flex-)?(.*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-pack:$3' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+)-inline(.+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 1 - length > 6) switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2-$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, 'stretch') ? prefix((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, (0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 3 - (~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, ':', ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case stylis__WEBPACK_IMPORTED_MODULE_5__.DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case stylis__WEBPACK_IMPORTED_MODULE_5__.KEYFRAMES:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
        value: (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(element.value, '@', '@' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT)
      })], callback);

    case stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET:
      if (element.length) return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.combine)(element.props, function (value) {
        switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.match)(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(read-\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'input-$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if ( true && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_6__.stringify,  true ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_5__.COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : 0];
    var serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_7__.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_8__.compile)(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ( true && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/emotion-hash.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});

/* harmony default export */ __webpack_exports__["default"] = (hoistNonReactStatics);


/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ CacheProvider; },
/* harmony export */   "E": function() { return /* binding */ Emotion; },
/* harmony export */   "T": function() { return /* binding */ ThemeContext; },
/* harmony export */   "_": function() { return /* binding */ __unsafe_useEmotionCache; },
/* harmony export */   "a": function() { return /* binding */ ThemeProvider; },
/* harmony export */   "b": function() { return /* binding */ withTheme; },
/* harmony export */   "c": function() { return /* binding */ createEmotionProps; },
/* harmony export */   "h": function() { return /* binding */ hasOwnProperty; },
/* harmony export */   "u": function() { return /* binding */ useTheme; },
/* harmony export */   "w": function() { return /* binding */ withEmotionCache; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js */ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/use-insertion-effect-with-fallbacks */ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");









var hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
  key: 'css'
}) : null);

if (true) {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

if (true) {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var useTheme = function useTheme() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ( true && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (outerTheme) {
  return (0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return (0,_isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["default"])(WithTheme, Component);
}

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if ( true && !!props.css && (typeof props.css !== 'object' || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label) newProps[labelPropName] = label;
  }

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.registerStyles)(cache, serialized, isStringTag);
  var rules = (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_6__.useInsertionEffectAlwaysWithSyncFallback)(function () {
    return (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)(registeredStyles, undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext));

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, newProps));
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeStyles": function() { return /* binding */ serializeStyles; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleSheet": function() { return /* binding */ StyleSheet; }
/* harmony export */ });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInsertionEffectAlwaysWithSyncFallback": function() { return /* binding */ useInsertionEffectAlwaysWithSyncFallback; },
/* harmony export */   "useInsertionEffectWithLayoutFallback": function() { return /* binding */ useInsertionEffectWithLayoutFallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] ? react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback =  useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;




/***/ }),

/***/ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegisteredStyles": function() { return /* binding */ getRegisteredStyles; },
/* harmony export */   "insertStyles": function() { return /* binding */ insertStyles; },
/* harmony export */   "registerStyles": function() { return /* binding */ registerStyles; }
/* harmony export */ });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plus);
//# sourceMappingURL=plus.js.map

/***/ }),

/***/ "./src/block-faq-child/Edit.tsx":
/*!**************************************!*\
  !*** ./src/block-faq-child/Edit.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/block-faq-child/editor.scss");
/* harmony import */ var _hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useSetBlockPanelInfo */ "./src/hooks/useSetBlockPanelInfo.ts");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyCacheProvider */ "./src/components/MyCacheProvider.tsx");
/* harmony import */ var _components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyIconFull */ "./src/components/controls/MyIconFull.tsx");










const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId,
    context,
    isSelected
  } = props;
  const {
    uniqueId,
    answer,
    layout,
    question,
    general_icon,
    headingTag,
    defaultExtend,
    enableSeparator
  } = attributes;
  //  COMMON HOOKS
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  // const { myCache, ref } = useCreateCacheEmotion();
  const wrapBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    ref
  });
  const {
    tabIsOpen,
    tabAdvancesIsPanelOpen,
    tabGeneralIsPanelOpen,
    tabStylesIsPanelOpen,
    handleTogglePanel
  } = (0,_hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_6__["default"])(uniqueId);
  const UNIQUE_ID = wrapBlockProps.id;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setAttributes({
      uniqueId: UNIQUE_ID
    });
  }, [UNIQUE_ID]);
  //

  const blockIndex = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).getBlockIndex(clientId), [clientId]);

  //

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    console.log(12, "------ FAQ CHILD setAttributes ON useEffect --------");
    setAttributes({
      layout: context["wcb/faq_general"]?.layout,
      headingTag: context["wcb/faq_general"]?.headingTag,
      general_icon: context["wcb/faq_icon"],
      enableSeparator: context["wcb/faq_general"]?.enableSeparator,
      defaultExtend: !context["wcb/faq_general"]?.collapseOtherItems || context["wcb/faq_general"]?.collapseOtherItems && !blockIndex && context["wcb/faq_general"]?.expandFirstItem
    });
  }, [context["wcb/faq_general"], context["wcb/faq_icon"], blockIndex]);
  const renderIcon = () => {
    if (!general_icon.enableIcon || layout !== "accordion") {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, general_icon.icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "wcb-faq-child__icon wcb-faq-child__icon--active",
      icon: general_icon.icon
    }), general_icon.inactiveIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "wcb-faq-child__icon wcb-faq-child__icon--inactive",
      icon: general_icon.inactiveIcon
    }));
  };
  const ACTIVE = (defaultExtend || isSelected) && layout === "accordion";
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    uniqueKey: clientId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, wrapBlockProps, {
    className: `${wrapBlockProps?.className} wcb-faq-child__wrap wcb-faq-child__wrap--${layout} ${ACTIVE ? "active" : ""} ${UNIQUE_ID}`,
    "data-uniqueid": UNIQUE_ID
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ac-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `wcb-faq-child__question wcb-faq-child__question--icon-${general_icon.iconPosition}`
  }, general_icon.iconPosition === "left" && renderIcon(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: headingTag || "h4",
    value: question,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: content => setAttributes({
      question: content
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Question..."),
    className: "wcb-faq-child__question-text"
  }), general_icon.iconPosition === "right" && renderIcon())), (ACTIVE || layout === "grid") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ac-panel"
  }, enableSeparator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wcb-faq-child__separator"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wcb-faq-child__answer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    value: answer,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: content => setAttributes({
      answer: content
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Answer..."),
    className: "wcb-faq-child__answer-text"
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/block-faq-child/Save.tsx":
/*!**************************************!*\
  !*** ./src/block-faq-child/Save.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-faq-child/style.scss");
/* harmony import */ var _components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyIconFull */ "./src/components/controls/MyIconFull.tsx");






function save(_ref) {
  let {
    attributes,
    ...props
  } = _ref;
  const {
    uniqueId,
    answer,
    question,
    general_icon,
    headingTag,
    layout,
    defaultExtend,
    enableSeparator
  } = attributes;
  //

  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: "wcb-faq-child__wrap"
  });
  const renderIcon = () => {
    if (!general_icon.enableIcon || layout !== "accordion") {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, general_icon.icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "wcb-faq-child__icon wcb-faq-child__icon--active",
      icon: general_icon.icon
    }), general_icon.inactiveIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "wcb-faq-child__icon wcb-faq-child__icon--inactive",
      icon: general_icon.inactiveIcon
    }));
  };
  const ariaControls = uniqueId + "controls";
  const Htmltag = layout === "grid" ? "div" : "button";
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: `ac wcb-faq-child__wrap wcb-faq-child__wrap--${layout} `,
    id: uniqueId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ac-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Htmltag, {
    className: `ac-trigger wcb-faq-child__question wcb-faq-child__question--icon-${general_icon.iconPosition}`,
    type: "button",
    "aria-expanded": "true",
    "aria-controls": ariaControls
  }, general_icon.iconPosition === "left" && renderIcon(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: headingTag || "h4",
    value: question,
    className: "wcb-faq-child__question-text"
  }), general_icon.iconPosition === "right" && renderIcon())), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ac-panel"
  }, enableSeparator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wcb-faq-child__separator"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wcb-faq-child__answer",
    id: ariaControls
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: "p",
    value: answer,
    className: "wcb-faq-child__answer-text ac-text"
  }))));
}

/***/ }),

/***/ "./src/block-faq-child/attributes.ts":
/*!*******************************************!*\
  !*** ./src/block-faq-child/attributes.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_faq_WcbFaqPanelIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-faq/WcbFaqPanelIcon */ "./src/block-faq/WcbFaqPanelIcon.tsx");

const blokc1Attrs = {
  uniqueId: {
    type: "string",
    default: ""
  },
  layout: {
    type: "string",
    default: "accordion"
  },
  headingTag: {
    type: "string",
    default: "div"
  },
  general_icon: {
    type: "object",
    default: _block_faq_WcbFaqPanelIcon__WEBPACK_IMPORTED_MODULE_0__.WCB_FAQ_PANEL_ICON_DEMO
  },
  defaultExtend: {
    type: "bool",
    default: false
  },
  enableSeparator: {
    type: "bool",
    default: false
  },
  // THE ATTRS OF BLOCK HERE
  question: {
    type: "string",
    source: "html",
    selector: ".wcb-faq-child__question-text",
    default: "What is FAQ?"
  },
  answer: {
    type: "string",
    source: "html",
    selector: ".wcb-faq-child__answer-text",
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }

  // ADVANCE
};

/* harmony default export */ __webpack_exports__["default"] = (blokc1Attrs);

/***/ }),

/***/ "./src/block-faq-child/index.js":
/*!**************************************!*\
  !*** ./src/block-faq-child/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block-faq-child/style.scss");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./src/block-faq-child/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Save */ "./src/block-faq-child/Save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block-faq-child/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/block-faq-child/attributes.ts");
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

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/block-faq/WcbFaqPanelIcon.tsx":
/*!*******************************************!*\
  !*** ./src/block-faq/WcbFaqPanelIcon.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCB_FAQ_PANEL_ICON_DEMO": function() { return /* binding */ WCB_FAQ_PANEL_ICON_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");
/* harmony import */ var _components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/SelectIcon/SelecIcon */ "./src/components/controls/SelectIcon/SelecIcon.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");







const WCB_FAQ_PANEL_ICON_DEMO = {
  enableIcon: true,
  inactiveIcon: {
    ..._components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_MY_ICON,
    iconName: "lni-plus"
  },
  iconPosition: "right",
  icon: {
    ..._components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_MY_ICON,
    iconName: "lni-minus"
  }
};
const WcbFaqPanelIcon = _ref => {
  let {
    panelData = WCB_FAQ_PANEL_ICON_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  const {
    enableIcon,
    icon,
    iconPosition,
    inactiveIcon
  } = panelData;
  const PLANS_DEMO = [{
    name: "left",
    icon: "Left"
  }, {
    name: "right",
    icon: "Right"
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Icon", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable Icon", "wcb"),
    checked: enableIcon,
    className: "mb-0",
    onChange: checked => {
      setAttr__({
        ...panelData,
        enableIcon: checked
      });
    }
  }), enableIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Active Icon:", "wcb"),
    iconData: icon,
    onChange: value => {
      setAttr__({
        ...panelData,
        icon: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Inactive Icon:", "wcb"),
    iconData: inactiveIcon || _components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_MY_ICON,
    onChange: value => {
      setAttr__({
        ...panelData,
        inactiveIcon: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Icon position", "wcb"),
    value: iconPosition,
    onChange: value => {
      setAttr__({
        ...panelData,
        iconPosition: value
      });
    },
    hasResponsive: false,
    plans: PLANS_DEMO
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (WcbFaqPanelIcon);

/***/ }),

/***/ "./src/components/MyCacheProvider.tsx":
/*!********************************************!*\
  !*** ./src/components/MyCacheProvider.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCreateCacheEmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useCreateCacheEmotion */ "./src/hooks/useCreateCacheEmotion.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");





const MyCacheProvider = _ref => {
  let {
    children,
    uniqueKey = "uniqueid"
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__["default"])() || "Desktop";
  if (deviceType === "Desktop") {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
  }
  const KEY = uniqueKey.replace(/[0-9]/g, "").replace(/ /g, "").toLocaleLowerCase();
  const {
    myCache,
    ref
  } = (0,_hooks_useCreateCacheEmotion__WEBPACK_IMPORTED_MODULE_2__["default"])("wcb-key-cache");
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.C, {
    value: myCache
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("head", {
    hidden: true,
    className: "hidden",
    ref: ref
  }), children);
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MyCacheProvider));

/***/ }),

/***/ "./src/components/controls/MyButton.tsx":
/*!**********************************************!*\
  !*** ./src/components/controls/MyButton.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const MyButton = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: `rounded-md ${className}`
  }, props));
};
/* harmony default export */ __webpack_exports__["default"] = (MyButton);

/***/ }),

/***/ "./src/components/controls/MyIcon.tsx":
/*!********************************************!*\
  !*** ./src/components/controls/MyIcon.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const MyIcon = _ref => {
  let {
    icon = "lni-image",
    className,
    size,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: `lni ${icon} ${className}`
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MyIcon);

/***/ }),

/***/ "./src/components/controls/MyIconFull.tsx":
/*!************************************************!*\
  !*** ./src/components/controls/MyIconFull.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyIcon */ "./src/components/controls/MyIcon.tsx");
/* harmony import */ var _SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectIcon/SelecIcon */ "./src/components/controls/SelectIcon/SelecIcon.tsx");




const MyIconFull = _ref => {
  let {
    icon = _SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_MY_ICON,
    className = "",
    renderIfNone = null,
    ...props
  } = _ref;
  const renderIcon = () => {
    const classes = `wcb-icon-full ${className}`.trim();
    if (!icon) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderIfNone);
    }
    if (icon.type === "icon" && icon.iconName) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: `${classes}`,
        icon: icon.iconName
      });
    }
    if (icon.type === "svg") {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${classes} is-svg wcb-icon-full--svg`,
        dangerouslySetInnerHTML: {
          __html: icon.svgCode
        }
      });
    }
    if (icon.type === "image" && icon.imageData?.mediaId) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${classes} is-image wcb-icon-full--image`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: icon.imageData.mediaUrl,
        alt: ""
      }));
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderIfNone);
  };
  return renderIcon();
};
/* harmony default export */ __webpack_exports__["default"] = (MyIconFull);

/***/ }),

/***/ "./src/components/controls/MyLabelControl/MyLabelControl.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/controls/MyLabelControl/MyLabelControl.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyResponsiveToggle_MyResponsiveToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyResponsiveToggle/MyResponsiveToggle */ "./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx");



const MyLabelControl = _ref => {
  let {
    children,
    className = "mb-2",
    help,
    hasResponsive,
    devices
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `components-base-control__label font-medium uppercase text-[11px] ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-control-label flex items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__label"
  }, children), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__responsive ml-1.5"
  }, hasResponsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyResponsiveToggle_MyResponsiveToggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    devices: devices
  }))), !!help && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-help text-xs text-slate-500"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "components-base-control__help"
  }, help)));
};
/* harmony default export */ __webpack_exports__["default"] = (MyLabelControl);

/***/ }),

/***/ "./src/components/controls/MyMediaUploadCheck.tsx":
/*!********************************************************!*\
  !*** ./src/components/controls/MyMediaUploadCheck.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_MEDIA_UPLOAD": function() { return /* binding */ DEFAULT_MEDIA_UPLOAD; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MyButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyButton */ "./src/components/controls/MyButton.tsx");







const DEFAULT_MEDIA_UPLOAD = {
  mediaId: 0,
  mediaUrl: "",
  mediaSrcSet: undefined
};
const MyMediaUploadCheck = _ref => {
  let {
    className = "text-gray-700",
    btnClass = "ring-1 ring-neutral-200",
    defaultBtnClass = "hover:bg-slate-100",
    imageData,
    onChange
  } = _ref;
  const {
    mediaId,
    mediaUrl,
    mediaSrcSet,
    sizes
  } = imageData;
  const removeMedia = () => {
    onChange({
      mediaId: 0,
      mediaUrl: "",
      mediaSrcSet: undefined
    });
  };
  const onSelectMedia = media => {
    onChange({
      mediaId: media.id,
      mediaUrl: media.url,
      mediaSrcSet: `${media.url} ${media.width}w, ${media.sizes?.medium?.url} ${media.sizes?.medium?.width}w, ${media.sizes?.full?.url} ${media.sizes?.full?.width}w, ${media.sizes?.large?.url} ${media.sizes?.large?.width}w`,
      sizes: media.sizes
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `editor-post-featured-image w-full ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectMedia,
    value: mediaId,
    allowedTypes: ["image"],
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: `h-auto rounded-lg text-inherit ${btnClass} ${mediaId == 0 ? "editor-post-featured-image__toggle " + defaultBtnClass : "editor-post-featured-image__preview"}`,
        onClick: open
      }, mediaId == 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "text-center flex flex-col items-center justify-center rounded-lg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
        className: "text-inherit"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "mt-0.5"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Choose an image", "wcb"))), !!mediaUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mediaUrl,
        className: "w-full block rounded-lg",
        sizes: "250px",
        srcSet: mediaSrcSet || undefined
      }));
    }
  })), mediaId !== 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-between gap-2 mt-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Replace image", "wcb"),
    value: mediaId,
    onSelect: onSelectMedia,
    allowedTypes: ["image"],
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "flex-1 my-0 flex justify-center",
        onClick: open,
        variant: "secondary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Replace", "wcb"));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "flex-1 my-0",
    onClick: removeMedia,
    isDestructive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Remove", "wcb")))));
};
/* harmony default export */ __webpack_exports__["default"] = (MyMediaUploadCheck);

/***/ }),

/***/ "./src/components/controls/MyRadioGroup.tsx":
/*!**************************************************!*\
  !*** ./src/components/controls/MyRadioGroup.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLANS_DEMO": function() { return /* binding */ PLANS_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);






const PLANS_DEMO = [{
  name: "left",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "center",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "right",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}];
const MyRadioGroup = _ref => {
  let {
    onChange = () => {},
    value,
    className = "",
    plans = PLANS_DEMO,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "wcb"),
    hasResponsive = true,
    isWrap = false,
    labelClassName,
    contentClassName = "mt-3"
  } = _ref;
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(value || plans[0].name);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (selected !== value) {
      setSelected(value || "");
    }
  }, [value]);
  const handleChangeRadio = value => {
    setSelected(value);
    onChange(value);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.RadioGroup, {
    className: className,
    value: selected,
    onChange: handleChangeRadio
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.RadioGroup.Label, {
    className: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: labelClassName,
    hasResponsive: hasResponsive
  }, label)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${contentClassName} relative flex gap-1 ${isWrap ? "flex-wrap" : ""}`
  }, plans.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.RadioGroup.Option, {
      key: item.name,
      value: item.name,
      as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment
    }, _ref2 => {
      let {
        checked
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `relative flex flex-1 basis-12 items-center justify-center p-1.5 max-w-xs cursor-pointer bg-white border rounded-lg ${checked ? "bg-sky-50 border-sky-400 text-sky-500" : "text-neutral-500 border-slate-300 hover:border-slate-500"}`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
        position: "top center"
        // @ts-ignore
        ,
        delay: 400,
        text: item.name.charAt(0).toUpperCase() + item.name.slice(1)
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "absolute inset-0 z-[1]"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "",
        dangerouslySetInnerHTML: {
          __html: item.icon
        }
      }));
    });
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (MyRadioGroup);

/***/ }),

/***/ "./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ComputerDesktopIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/DeviceTabletIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/DevicePhoneMobileIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");






const DEVICE_TYPES = {
  Desktop: "Desktop",
  Tablet: "Tablet",
  Mobile: "Mobile"
};
const MyResponsiveToggle = _ref => {
  let {
    className = "",
    devices = Object.values(DEVICE_TYPES)
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__["default"])() || "Desktop";
  const {
    __experimentalSetPreviewDeviceType: setPreviewDeviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)("core/edit-post");
  const handleSetDeviceType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(dv => {
    setPreviewDeviceType(DEVICE_TYPES[dv]);
  }, []);
  const renderDeviceIcon = function (dv) {
    let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "h-4 w-4";
    switch (dv) {
      case "Desktop":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: className,
          "aria-hidden": "true"
        });
      case "Tablet":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: className,
          "aria-hidden": "true"
        });
      case "Mobile":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: className,
          "aria-hidden": "true"
        });
      default:
        return null;
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu, {
    as: "div",
    className: `wcbMyResponsiveToggle relative inline-block text-left ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Button, {
    className: "wcbMyResponsiveToggle__button inline-flex w-full items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-0 transition-colors text-slate-600 border border-slate-200 hover:border-slate-400",
    title: deviceType
  }, renderDeviceIcon(deviceType), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "w-2.5 h-2.5 ml-1",
    "aria-hidden": "true"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition, {
    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Items, {
    className: "wcbMyResponsiveToggle__items absolute z-50 inset-x-0 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black/10 focus:outline-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-1 space-y-0.5"
  }, devices.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, {
      key: index + item
    }, _ref2 => {
      let {
        active
      } = _ref2;
      const isActive = active || item === deviceType;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: `${isActive ? "bg-sky-50 text-sky-600" : "text-slate-800"} group flex w-full items-center justify-center rounded-md py-1.5`,
        onClick: e => {
          handleSetDeviceType(item);
        },
        title: item
      }, renderDeviceIcon(item));
    });
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (MyResponsiveToggle);

/***/ }),

/***/ "./src/components/controls/ResetButton.tsx":
/*!*************************************************!*\
  !*** ./src/components/controls/ResetButton.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




const ResetButton = _ref => {
  let {
    onClick,
    className = "text-slate-700",
    isSmall = true,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className,
    onClick: onClick,
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: "w-5 h-5",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"
    })),
    isSmall: isSmall
  }, props));
};
/* harmony default export */ __webpack_exports__["default"] = (ResetButton);

/***/ }),

/***/ "./src/components/controls/SelectIcon/SelecIcon.tsx":
/*!**********************************************************!*\
  !*** ./src/components/controls/SelectIcon/SelecIcon.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_MY_ICON": function() { return /* binding */ DEFAULT_MY_ICON; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ResetButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ResetButton */ "./src/components/controls/ResetButton.tsx");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _public_lineicons_free_basic_icon_font_unicodesMap_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/lineicons-free-basic/icon-font/unicodesMap.json */ "./public/lineicons-free-basic/icon-font/unicodesMap.json");
/* harmony import */ var _MyIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MyIcon */ "./src/components/controls/MyIcon.tsx");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js");
/* harmony import */ var _MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MyMediaUploadCheck */ "./src/components/controls/MyMediaUploadCheck.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/components/controls/SelectIcon/editor.scss");
/* harmony import */ var _utils_checkIsSvgHtmlTag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/checkIsSvgHtmlTag */ "./src/utils/checkIsSvgHtmlTag.ts");
/* harmony import */ var _MyIconFull__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MyIconFull */ "./src/components/controls/MyIconFull.tsx");













const ICON_KEYS = Object.keys(_public_lineicons_free_basic_icon_font_unicodesMap_json__WEBPACK_IMPORTED_MODULE_5__);
const DEFAULT_MY_ICON = {
  type: "icon",
  iconName: "lni-heart-filled",
  imageData: _MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_MEDIA_UPLOAD,
  svgCode: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
	<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
  </svg>`
};
const SelecIcon = _ref => {
  let {
    onChange,
    iconData,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Icon:", "wcb")
  } = _ref;
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [isCorrectSvgCode, setIsCorrectSvgCode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_utils_checkIsSvgHtmlTag__WEBPACK_IMPORTED_MODULE_9__["default"])(iconData.svgCode));
  const [svgCodeState, setSvgCodeState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setSvgCodeState(iconData.svgCode);
  }, [iconData.svgCode]);
  const gridRef = react__WEBPACK_IMPORTED_MODULE_3___default().createRef();
  const people = ICON_KEYS;
  const filteredPeople = query === "" ? people : people.filter(person => {
    return person.toLowerCase().includes(query.toLowerCase());
  });
  const ICONS_KEYS = filteredPeople;
  const scrollToIcon = () => {
    setTimeout(() => {
      if (!iconData.iconName) return;
      const index = filteredPeople.indexOf(iconData.iconName);
      index && gridRef?.current?.scrollToItem({
        rowIndex: Math.ceil(index / 3),
        align: "center"
      });
    }, 1);
  };
  const Cell = _ref2 => {
    let {
      columnIndex,
      rowIndex,
      style
    } = _ref2;
    const index = rowIndex * 3 + columnIndex;
    const item = ICONS_KEYS[index];
    if (!item) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          ...style
        }
      });
    }
    const isActive = item === iconData.iconName;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        ...style,
        padding: "4px 0px 4px 8px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: item,
      className: `h-20 p-3 flex items-center justify-center bg-gray-800 rounded-lg text-gray-50 hover:ring-2 ring-offset-1 ring-sky-500 cursor-pointer ${isActive ? "ring-2 SelecIcon__item--isActive" : ""}`,
      onClick: () => {
        onChange({
          ...iconData,
          iconName: isActive ? undefined : item
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center overflow-hidden "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "text-lg",
      size: 16,
      icon: item
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "block mt-2.5 truncate text-gray-300 text-xs"
    }, item)))));
  };
  const renderInput = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative p-2 mb-2 -mt-2 border-b border-gray-800 text-white "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pointer-events-none absolute inset-y-0 left-2.5 flex items-center pl-2.5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-5 h-5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      onChange: event => setQuery(event.target.value),
      type: "text",
      className: "block w-full py-1.5 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-800 border-transparent text-white",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Search for an icon...", "wcb"),
      defaultValue: query,
      name: "icon-query",
      autoFocus: true
    }));
  };
  const TABS = [{
    name: "icon",
    icon: "lni lni-ruler-pencil text-lg"
  }, {
    name: "image",
    icon: "lni lni-image text-lg"
  }, {
    name: "svg",
    icon: "lni lni-code text-lg"
  }];
  const renderContent = _ref3 => {
    let {
      onToggle,
      onClose
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "min-w-[310px] min-h-[510px] bg-gray-900 pt-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cursor-pointer absolute -right-0.5 -top-0.5 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-lg ring-1 ring-gray-200/70 hover:ring-gray-300",
      onClick: onClose
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      className: "w-6 h-6 text-red-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18L18 6M6 6l12 12"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Tab.Group, {
      onChange: i => {
        onChange({
          ...iconData,
          type: TABS[i].name
        });
      },
      defaultIndex: TABS.findIndex(item => item.name === iconData.type)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Tab.List, {
      className: "flex p-1.5 bg-slate-700/60 rounded-lg shadow-md mx-2"
    }, TABS.map(item => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Tab, {
        key: item.name,
        className: _ref4 => {
          let {
            selected
          } = _ref4;
          return `flex-1 font-medium whitespace-nowrap px-1 py-2 text-sm focus:outline-none flex flex-col items-center justify-center space-y-1 rounded-lg capitalize ${selected ? "bg-slate-900 text-slate-50 " : "text-slate-300 hover:text-slate-100 border-b-transparent"}`;
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: item.icon
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "block"
      }, item.name));
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Tab.Panels, {
      className: "mt-3 pt-3 border-t border-slate-700"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Tab.Panel, {
      className: ""
    }, renderContentDefault()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Tab.Panel, {
      className: ""
    }, renderContentUploadImage()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Tab.Panel, {
      className: ""
    }, renderContentUploadSVG()))));
  };
  const renderContentUploadSVG = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pt-1 px-3 text-slate-300"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
      rows: 17,
      label: "",
      placeholder: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" ...`,
      className: "Wcb-SelectIcon__textarea text-slate-200",
      help: !svgCodeState || isCorrectSvgCode ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enter your SVG code here", "wcb") : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "text-red-500"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Please write a valid SVG code", "wcb")),
      value: svgCodeState,
      onChange: value => {
        setSvgCodeState(value);
        if ((0,_utils_checkIsSvgHtmlTag__WEBPACK_IMPORTED_MODULE_9__["default"])(value)) {
          setIsCorrectSvgCode(true);
          const a = /<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/g.exec(value);
          onChange({
            ...iconData,
            svgCode: a?.[0] || ""
          });
        } else {
          setIsCorrectSvgCode(false);
        }
      }
    }));
  };
  const renderContentUploadImage = () => {
    const imageData = iconData?.imageData;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-3 pt-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "text-neutral-200",
      btnClass: "ring-1 ring-neutral-700",
      defaultBtnClass: "hover:bg-black/10",
      onChange: data => {
        onChange({
          ...iconData,
          imageData: data
        });
      },
      imageData: imageData
    }));
  };
  const renderContentDefault = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, renderInput()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_window__WEBPACK_IMPORTED_MODULE_12__.FixedSizeGrid, {
      ref: gridRef,
      className: "hiddenScrollbar",
      columnCount: 3,
      columnWidth: 100,
      height: 380,
      rowCount: Math.ceil(ICONS_KEYS.length / 3),
      rowHeight: 88,
      width: 308
    }, Cell));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    position: "middle left",
    className: "w-full",
    contentClassName: "Wcb-SelectIcon z-[100]",
    renderToggle: _ref5 => {
      let {
        isOpen,
        onToggle
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "flex items-center space-x-4"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "py-3 px-6 flex items-center justify-center ring-2 ring-slate-200 hover:ring-slate-300 rounded-lg ",
        onClick: () => {
          onToggle();
          if (iconData.type === "icon") {
            scrollToIcon();
          }
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "mr-3"
      }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyIconFull__WEBPACK_IMPORTED_MODULE_10__["default"], {
        icon: iconData,
        className: "w-6 h-6 text-[24px] flex items-center ",
        renderIfNone: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("None", "wcb"))
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ResetButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: () => {
          onChange(DEFAULT_MY_ICON);
        }
      }));
    },
    renderContent: renderContent
  });
};
/* harmony default export */ __webpack_exports__["default"] = (SelecIcon);

/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCB_STORE_PANELS": function() { return /* binding */ WCB_STORE_PANELS; }
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
  reducer() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    let action = arguments.length > 1 ? arguments[1] : undefined;
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

/***/ "./src/hooks/useCreateCacheEmotion.ts":
/*!********************************************!*\
  !*** ./src/hooks/useCreateCacheEmotion.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");


const useCreateCacheEmotion = function () {
  let key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "wcb-custom-cache-key";
  // DIEU NAY GIUP EMOTION GLOBAL CSS DUOC IMPORT TRONG MOBILE IFRAME!!!
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
    key,
    container: ref.current || undefined
  });
  return {
    myCache: cache,
    ref
  };
};
/* harmony default export */ __webpack_exports__["default"] = (useCreateCacheEmotion);

/***/ }),

/***/ "./src/hooks/useGetDeviceType.ts":
/*!***************************************!*\
  !*** ./src/hooks/useGetDeviceType.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (useGetDeviceType);

/***/ }),

/***/ "./src/hooks/useSetBlockPanelInfo.ts":
/*!*******************************************!*\
  !*** ./src/hooks/useSetBlockPanelInfo.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (useSetBlockPanelInfo);

/***/ }),

/***/ "./src/utils/checkIsSvgHtmlTag.ts":
/*!****************************************!*\
  !*** ./src/utils/checkIsSvgHtmlTag.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function checkIsSvgHtmlTag(str) {
  if (typeof str !== "string") {
    return false;
  }
  return /<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/g.test(str);
}
/* harmony default export */ __webpack_exports__["default"] = (checkIsSvgHtmlTag);

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./src/block-faq-child/editor.scss":
/*!*****************************************!*\
  !*** ./src/block-faq-child/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-faq-child/style.scss":
/*!****************************************!*\
  !*** ./src/block-faq-child/style.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/controls/SelectIcon/editor.scss":
/*!********************************************************!*\
  !*** ./src/components/controls/SelectIcon/editor.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-window/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-window/dist/index.esm.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedSizeGrid": function() { return /* binding */ FixedSizeGrid; },
/* harmony export */   "FixedSizeList": function() { return /* binding */ FixedSizeList; },
/* harmony export */   "VariableSizeGrid": function() { return /* binding */ VariableSizeGrid; },
/* harmony export */   "VariableSizeList": function() { return /* binding */ VariableSizeList; },
/* harmony export */   "areEqual": function() { return /* binding */ areEqual; },
/* harmony export */   "shouldComponentUpdate": function() { return /* binding */ shouldComponentUpdate; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");







// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var size = -1; // This utility copied from "dom-helpers" package.

function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (size === -1 || recalculate) {
    var div = document.createElement('div');
    var style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }

  return size;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

var defaultItemKey = function defaultItemKey(_ref) {
  var columnIndex = _ref.columnIndex,
      data = _ref.data,
      rowIndex = _ref.rowIndex;
  return rowIndex + ":" + columnIndex;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsOverscanCount = /*#__PURE__*/new WeakSet();
    devWarningsOverscanRowsColumnsCount = /*#__PURE__*/new WeakSet();
    devWarningsTagName = /*#__PURE__*/new WeakSet();
  }
}

function createGridComponent(_ref2) {
  var _class;

  var getColumnOffset = _ref2.getColumnOffset,
      getColumnStartIndexForOffset = _ref2.getColumnStartIndexForOffset,
      getColumnStopIndexForStartIndex = _ref2.getColumnStopIndexForStartIndex,
      getColumnWidth = _ref2.getColumnWidth,
      getEstimatedTotalHeight = _ref2.getEstimatedTotalHeight,
      getEstimatedTotalWidth = _ref2.getEstimatedTotalWidth,
      getOffsetForColumnAndAlignment = _ref2.getOffsetForColumnAndAlignment,
      getOffsetForRowAndAlignment = _ref2.getOffsetForRowAndAlignment,
      getRowHeight = _ref2.getRowHeight,
      getRowOffset = _ref2.getRowOffset,
      getRowStartIndexForOffset = _ref2.getRowStartIndexForOffset,
      getRowStopIndexForStartIndex = _ref2.getRowStopIndexForStartIndex,
      initInstanceProps = _ref2.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref2.validateProps;
  return _class = /*#__PURE__*/function (_PureComponent) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Grid, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function Grid(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
      _this._resetIsScrollingTimeoutId = null;
      _this._outerRef = void 0;
      _this.state = {
        instance: (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this),
        isScrolling: false,
        horizontalScrollDirection: 'forward',
        scrollLeft: typeof _this.props.initialScrollLeft === 'number' ? _this.props.initialScrollLeft : 0,
        scrollTop: typeof _this.props.initialScrollTop === 'number' ? _this.props.initialScrollTop : 0,
        scrollUpdateWasRequested: false,
        verticalScrollDirection: 'forward'
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
        return _this.props.onItemsRendered({
          overscanColumnStartIndex: overscanColumnStartIndex,
          overscanColumnStopIndex: overscanColumnStopIndex,
          overscanRowStartIndex: overscanRowStartIndex,
          overscanRowStopIndex: overscanRowStopIndex,
          visibleColumnStartIndex: visibleColumnStartIndex,
          visibleColumnStopIndex: visibleColumnStopIndex,
          visibleRowStartIndex: visibleRowStartIndex,
          visibleRowStopIndex: visibleRowStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          horizontalScrollDirection: horizontalScrollDirection,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          verticalScrollDirection: verticalScrollDirection,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (rowIndex, columnIndex) {
        var _this$props = _this.props,
            columnWidth = _this$props.columnWidth,
            direction = _this$props.direction,
            rowHeight = _this$props.rowHeight;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);

        var key = rowIndex + ":" + columnIndex;
        var style;

        if (itemStyleCache.hasOwnProperty(key)) {
          style = itemStyleCache[key];
        } else {
          var _offset = getColumnOffset(_this.props, columnIndex, _this._instanceProps);

          var isRtl = direction === 'rtl';
          itemStyleCache[key] = style = {
            position: 'absolute',
            left: isRtl ? undefined : _offset,
            right: isRtl ? _offset : undefined,
            top: getRowOffset(_this.props, rowIndex, _this._instanceProps),
            height: getRowHeight(_this.props, rowIndex, _this._instanceProps),
            width: getColumnWidth(_this.props, columnIndex, _this._instanceProps)
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScroll = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientHeight = _event$currentTarget.clientHeight,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollTop = _event$currentTarget.scrollTop,
            scrollHeight = _event$currentTarget.scrollHeight,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.

          var calculatedScrollLeft = scrollLeft;

          if (direction === 'rtl') {
            switch (getRTLOffsetType()) {
              case 'negative':
                calculatedScrollLeft = -scrollLeft;
                break;

              case 'positive-descending':
                calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
          var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
            scrollLeft: calculatedScrollLeft,
            scrollTop: calculatedScrollTop,
            verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward',
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1);
        });
      };

      return _this;
    }

    Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = Grid.prototype;

    _proto.scrollTo = function scrollTo(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      if (scrollLeft !== undefined) {
        scrollLeft = Math.max(0, scrollLeft);
      }

      if (scrollTop !== undefined) {
        scrollTop = Math.max(0, scrollTop);
      }

      this.setState(function (prevState) {
        if (scrollLeft === undefined) {
          scrollLeft = prevState.scrollLeft;
        }

        if (scrollTop === undefined) {
          scrollTop = prevState.scrollTop;
        }

        if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
          return null;
        }

        return {
          horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollUpdateWasRequested: true,
          verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward'
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === void 0 ? 'auto' : _ref4$align,
          columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex;
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          height = _this$props2.height,
          rowCount = _this$props2.rowCount,
          width = _this$props2.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;
      var scrollbarSize = getScrollbarSize();

      if (columnIndex !== undefined) {
        columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
      }

      if (rowIndex !== undefined) {
        rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
      }

      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps); // The scrollbar size should be considered when scrolling an item into view,
      // to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.

      var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
      var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
      this.scrollTo({
        scrollLeft: columnIndex !== undefined ? getOffsetForColumnAndAlignment(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
        scrollTop: rowIndex !== undefined ? getOffsetForRowAndAlignment(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
      });
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          initialScrollLeft = _this$props3.initialScrollLeft,
          initialScrollTop = _this$props3.initialScrollTop;

      if (this._outerRef != null) {
        var outerRef = this._outerRef;

        if (typeof initialScrollLeft === 'number') {
          outerRef.scrollLeft = initialScrollLeft;
        }

        if (typeof initialScrollTop === 'number') {
          outerRef.scrollTop = initialScrollTop;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var direction = this.props.direction;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollTop = _this$state2.scrollTop,
          scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
        // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
        // So we need to determine which browser behavior we're dealing with, and mimic it.
        var outerRef = this._outerRef;

        if (direction === 'rtl') {
          switch (getRTLOffsetType()) {
            case 'negative':
              outerRef.scrollLeft = -scrollLeft;
              break;

            case 'positive-ascending':
              outerRef.scrollLeft = scrollLeft;
              break;

            default:
              var clientWidth = outerRef.clientWidth,
                  scrollWidth = outerRef.scrollWidth;
              outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        } else {
          outerRef.scrollLeft = Math.max(0, scrollLeft);
        }

        outerRef.scrollTop = Math.max(0, scrollTop);
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          columnCount = _this$props4.columnCount,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          rowCount = _this$props4.rowCount,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling;

      var _this$_getHorizontalR = this._getHorizontalRangeToRender(),
          columnStartIndex = _this$_getHorizontalR[0],
          columnStopIndex = _this$_getHorizontalR[1];

      var _this$_getVerticalRan = this._getVerticalRangeToRender(),
          rowStartIndex = _this$_getVerticalRan[0],
          rowStopIndex = _this$_getVerticalRan[1];

      var items = [];

      if (columnCount > 0 && rowCount) {
        for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
          for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
            items.push((0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(children, {
              columnIndex: _columnIndex,
              data: itemData,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              key: itemKey({
                columnIndex: _columnIndex,
                data: itemData,
                rowIndex: _rowIndex
              }),
              rowIndex: _rowIndex,
              style: this._getItemStyle(_rowIndex, _columnIndex)
            }));
          }
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps);
      return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: this._onScroll,
        ref: this._outerRefSetter,
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: estimatedTotalHeight,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: estimatedTotalWidth
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      var _this$props5 = this.props,
          columnCount = _this$props5.columnCount,
          onItemsRendered = _this$props5.onItemsRendered,
          onScroll = _this$props5.onScroll,
          rowCount = _this$props5.rowCount;

      if (typeof onItemsRendered === 'function') {
        if (columnCount > 0 && rowCount > 0) {
          var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(),
              _overscanColumnStartIndex = _this$_getHorizontalR2[0],
              _overscanColumnStopIndex = _this$_getHorizontalR2[1],
              _visibleColumnStartIndex = _this$_getHorizontalR2[2],
              _visibleColumnStopIndex = _this$_getHorizontalR2[3];

          var _this$_getVerticalRan2 = this._getVerticalRangeToRender(),
              _overscanRowStartIndex = _this$_getVerticalRan2[0],
              _overscanRowStopIndex = _this$_getVerticalRan2[1],
              _visibleRowStartIndex = _this$_getVerticalRan2[2],
              _visibleRowStopIndex = _this$_getVerticalRan2[3];

          this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
        }
      }

      if (typeof onScroll === 'function') {
        var _this$state3 = this.state,
            _horizontalScrollDirection = _this$state3.horizontalScrollDirection,
            _scrollLeft = _this$state3.scrollLeft,
            _scrollTop = _this$state3.scrollTop,
            _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested,
            _verticalScrollDirection = _this$state3.verticalScrollDirection;

        this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
      }
    } // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    ;

    _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
      var _this$props6 = this.props,
          columnCount = _this$props6.columnCount,
          overscanColumnCount = _this$props6.overscanColumnCount,
          overscanColumnsCount = _this$props6.overscanColumnsCount,
          overscanCount = _this$props6.overscanCount,
          rowCount = _this$props6.rowCount;
      var _this$state4 = this.state,
          horizontalScrollDirection = _this$state4.horizontalScrollDirection,
          isScrolling = _this$state4.isScrolling,
          scrollLeft = _this$state4.scrollLeft;
      var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getColumnStartIndexForOffset(this.props, scrollLeft, this._instanceProps);
      var stopIndex = getColumnStopIndexForStartIndex(this.props, startIndex, scrollLeft, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || horizontalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || horizontalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
      var _this$props7 = this.props,
          columnCount = _this$props7.columnCount,
          overscanCount = _this$props7.overscanCount,
          overscanRowCount = _this$props7.overscanRowCount,
          overscanRowsCount = _this$props7.overscanRowsCount,
          rowCount = _this$props7.rowCount;
      var _this$state5 = this.state,
          isScrolling = _this$state5.isScrolling,
          verticalScrollDirection = _this$state5.verticalScrollDirection,
          scrollTop = _this$state5.scrollTop;
      var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getRowStartIndexForOffset(this.props, scrollTop, this._instanceProps);
      var stopIndex = getRowStopIndexForStartIndex(this.props, startIndex, scrollTop, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || verticalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || verticalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return Grid;
  }(react__WEBPACK_IMPORTED_MODULE_3__.PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    useIsScrolling: false
  }, _class;
}

var validateSharedProps = function validateSharedProps(_ref5, _ref6) {
  var children = _ref5.children,
      direction = _ref5.direction,
      height = _ref5.height,
      innerTagName = _ref5.innerTagName,
      outerTagName = _ref5.outerTagName,
      overscanColumnsCount = _ref5.overscanColumnsCount,
      overscanCount = _ref5.overscanCount,
      overscanRowsCount = _ref5.overscanRowsCount,
      width = _ref5.width;
  var instance = _ref6.instance;

  if (true) {
    if (typeof overscanCount === 'number') {
      if (devWarningsOverscanCount && !devWarningsOverscanCount.has(instance)) {
        devWarningsOverscanCount.add(instance);
        console.warn('The overscanCount prop has been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (typeof overscanColumnsCount === 'number' || typeof overscanRowsCount === 'number') {
      if (devWarningsOverscanRowsColumnsCount && !devWarningsOverscanRowsColumnsCount.has(instance)) {
        devWarningsOverscanRowsColumnsCount.add(instance);
        console.warn('The overscanColumnsCount and overscanRowsCount props have been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName && !devWarningsTagName.has(instance)) {
        devWarningsTagName.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    switch (direction) {
      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    if (typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Grids must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    }

    if (typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Grids must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

var getEstimatedTotalHeight = function getEstimatedTotalHeight(_ref, _ref2) {
  var rowCount = _ref.rowCount;
  var rowMetadataMap = _ref2.rowMetadataMap,
      estimatedRowHeight = _ref2.estimatedRowHeight,
      lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredRowIndex >= rowCount) {
    lastMeasuredRowIndex = rowCount - 1;
  }

  if (lastMeasuredRowIndex >= 0) {
    var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getEstimatedTotalWidth = function getEstimatedTotalWidth(_ref3, _ref4) {
  var columnCount = _ref3.columnCount;
  var columnMetadataMap = _ref4.columnMetadataMap,
      estimatedColumnWidth = _ref4.estimatedColumnWidth,
      lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredColumnIndex >= columnCount) {
    lastMeasuredColumnIndex = columnCount - 1;
  }

  if (lastMeasuredColumnIndex >= 0) {
    var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getItemMetadata = function getItemMetadata(itemType, props, index, instanceProps) {
  var itemMetadataMap, itemSize, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    itemSize = props.columnWidth;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    itemSize = props.rowHeight;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    if (itemType === 'column') {
      instanceProps.lastMeasuredColumnIndex = index;
    } else {
      instanceProps.lastMeasuredRowIndex = index;
    }
  }

  return itemMetadataMap[index];
};

var findNearestItem = function findNearestItem(itemType, props, instanceProps, offset) {
  var itemMetadataMap, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch = function findNearestItemBinarySearch(itemType, props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(itemType, props, instanceProps, index, offset) {
  var itemCount = itemType === 'column' ? props.columnCount : props.rowCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata(itemType, props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment(itemType, props, index, align, scrollOffset, instanceProps, scrollbarSize) {
  var size = itemType === 'column' ? props.width : props.height;
  var itemMetadata = getItemMetadata(itemType, props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
  // To ensure it reflects actual measurements instead of just estimates.

  var estimatedTotalSize = itemType === 'column' ? getEstimatedTotalWidth(props, instanceProps) : getEstimatedTotalHeight(props, instanceProps);
  var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
  var minOffset = Math.max(0, itemMetadata.offset - size + scrollbarSize + itemMetadata.size);

  if (align === 'smart') {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      align = 'auto';
    } else {
      align = 'center';
    }
  }

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return Math.round(minOffset + (maxOffset - minOffset) / 2);

    case 'auto':
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        // Because we only take into account the scrollbar size when calculating minOffset
        // this value can be larger than maxOffset when at the end of the list
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }

  }
};

var VariableSizeGrid = /*#__PURE__*/createGridComponent({
  getColumnOffset: function getColumnOffset(props, index, instanceProps) {
    return getItemMetadata('column', props, index, instanceProps).offset;
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
    return findNearestItem('column', props, instanceProps, scrollLeft);
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
    var columnCount = props.columnCount,
        width = props.width;
    var itemMetadata = getItemMetadata('column', props, startIndex, instanceProps);
    var maxOffset = scrollLeft + width;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < columnCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('column', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  getColumnWidth: function getColumnWidth(props, index, instanceProps) {
    return instanceProps.columnMetadataMap[index].size;
  },
  getEstimatedTotalHeight: getEstimatedTotalHeight,
  getEstimatedTotalWidth: getEstimatedTotalWidth,
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('column', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('row', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getRowOffset: function getRowOffset(props, index, instanceProps) {
    return getItemMetadata('row', props, index, instanceProps).offset;
  },
  getRowHeight: function getRowHeight(props, index, instanceProps) {
    return instanceProps.rowMetadataMap[index].size;
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
    return findNearestItem('row', props, instanceProps, scrollTop);
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
    var rowCount = props.rowCount,
        height = props.height;
    var itemMetadata = getItemMetadata('row', props, startIndex, instanceProps);
    var maxOffset = scrollTop + height;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < rowCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('row', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref5 = props,
        estimatedColumnWidth = _ref5.estimatedColumnWidth,
        estimatedRowHeight = _ref5.estimatedRowHeight;
    var instanceProps = {
      columnMetadataMap: {},
      estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
      estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredColumnIndex: -1,
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {}
    };

    instance.resetAfterColumnIndex = function (columnIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        columnIndex: columnIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterRowIndex = function (rowIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        rowIndex: rowIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterIndices = function (_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex,
          _ref6$shouldForceUpda = _ref6.shouldForceUpdate,
          shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;

      if (typeof columnIndex === 'number') {
        instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
      }

      if (typeof rowIndex === 'number') {
        instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
      } // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.


      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref7) {
    var columnWidth = _ref7.columnWidth,
        rowHeight = _ref7.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'function') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      } else if (typeof rowHeight !== 'function') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection = /*#__PURE__*/new WeakSet();
    devWarningsTagName$1 = /*#__PURE__*/new WeakSet();
  }
}

function createListComponent(_ref) {
  var _class;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _class = /*#__PURE__*/function (_PureComponent) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          var isRtl = direction === 'rtl';
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: 'absolute',
            left: isRtl ? undefined : offsetHorizontal,
            right: isRtl ? offsetHorizontal : undefined,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : '100%',
            width: isHorizontal ? size : '100%'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var _this$props2 = this.props,
          itemCount = _this$props2.itemCount,
          layout = _this$props2.layout;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1)); // The scrollbar size should be considered when scrolling an item into view, to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.
      // This is an edge case for lists; normally they only scroll in the dominant direction.

      var scrollbarSize = 0;

      if (this._outerRef) {
        var outerRef = this._outerRef;

        if (layout === 'vertical') {
          scrollbarSize = outerRef.scrollWidth > outerRef.clientWidth ? getScrollbarSize() : 0;
        } else {
          scrollbarSize = outerRef.scrollHeight > outerRef.clientHeight ? getScrollbarSize() : 0;
        }
      }

      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps, scrollbarSize));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          initialScrollOffset = _this$props3.initialScrollOffset,
          layout = _this$props3.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props4 = this.props,
          direction = _this$props4.direction,
          layout = _this$props4.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          direction = _this$props5.direction,
          height = _this$props5.height,
          innerRef = _this$props5.innerRef,
          innerElementType = _this$props5.innerElementType,
          innerTagName = _this$props5.innerTagName,
          itemCount = _this$props5.itemCount,
          itemData = _this$props5.itemData,
          _this$props5$itemKey = _this$props5.itemKey,
          itemKey = _this$props5$itemKey === void 0 ? defaultItemKey$1 : _this$props5$itemKey,
          layout = _this$props5.layout,
          outerElementType = _this$props5.outerElementType,
          outerTagName = _this$props5.outerTagName,
          style = _this$props5.style,
          useIsScrolling = _this$props5.useIsScrolling,
          width = _this$props5.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push((0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    } // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    ;

    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props6 = this.props,
          itemCount = _this$props6.itemCount,
          overscanCount = _this$props6.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(react__WEBPACK_IMPORTED_MODULE_3__.PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _class;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (true) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    } // TODO Deprecate direction "horizontal"


    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }

        break;

      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;

var getItemMetadata$1 = function getItemMetadata(props, index, instanceProps) {
  var _ref = props,
      itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

var findNearestItem$1 = function findNearestItem(props, instanceProps, offset) {
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
  var itemCount = props.itemCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata$1(props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap,
      estimatedItemSize = _ref3.estimatedItemSize,
      lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

var VariableSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(props, index, instanceProps) {
    return getItemMetadata$1(props, index, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index, instanceProps) {
    return instanceProps.itemMetadataMap[index].size;
  },
  getEstimatedTotalSize: getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = props.direction,
        height = props.height,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
    // To ensure it reflects actual measurements instead of just estimates.

    var estimatedTotalSize = getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size + scrollbarSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
    return findNearestItem$1(props, instanceProps, offset);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        itemCount = props.itemCount,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata$1(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref4 = props,
        estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
      lastMeasuredIndex: -1
    };

    instance.resetAfterIndex = function (index, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref5) {
    var itemSize = _ref5.itemSize;

    if (true) {
      if (typeof itemSize !== 'function') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

var FixedSizeGrid = /*#__PURE__*/createGridComponent({
  getColumnOffset: function getColumnOffset(_ref, index) {
    var columnWidth = _ref.columnWidth;
    return index * columnWidth;
  },
  getColumnWidth: function getColumnWidth(_ref2, index) {
    var columnWidth = _ref2.columnWidth;
    return columnWidth;
  },
  getRowOffset: function getRowOffset(_ref3, index) {
    var rowHeight = _ref3.rowHeight;
    return index * rowHeight;
  },
  getRowHeight: function getRowHeight(_ref4, index) {
    var rowHeight = _ref4.rowHeight;
    return rowHeight;
  },
  getEstimatedTotalHeight: function getEstimatedTotalHeight(_ref5) {
    var rowCount = _ref5.rowCount,
        rowHeight = _ref5.rowHeight;
    return rowHeight * rowCount;
  },
  getEstimatedTotalWidth: function getEstimatedTotalWidth(_ref6) {
    var columnCount = _ref6.columnCount,
        columnWidth = _ref6.columnWidth;
    return columnWidth * columnCount;
  },
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
    var columnCount = _ref7.columnCount,
        columnWidth = _ref7.columnWidth,
        width = _ref7.width;
    var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
    var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);

    if (align === 'smart') {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(width / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
    var rowHeight = _ref8.rowHeight,
        height = _ref8.height,
        rowCount = _ref8.rowCount;
    var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
    var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);

    if (align === 'smart') {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(height / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(_ref9, scrollLeft) {
    var columnWidth = _ref9.columnWidth,
        columnCount = _ref9.columnCount;
    return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(_ref10, startIndex, scrollLeft) {
    var columnWidth = _ref10.columnWidth,
        columnCount = _ref10.columnCount,
        width = _ref10.width;
    var left = startIndex * columnWidth;
    var numVisibleColumns = Math.ceil((width + scrollLeft - left) / columnWidth);
    return Math.max(0, Math.min(columnCount - 1, startIndex + numVisibleColumns - 1 // -1 is because stop index is inclusive
    ));
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(_ref11, scrollTop) {
    var rowHeight = _ref11.rowHeight,
        rowCount = _ref11.rowCount;
    return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(_ref12, startIndex, scrollTop) {
    var rowHeight = _ref12.rowHeight,
        rowCount = _ref12.rowCount,
        height = _ref12.height;
    var top = startIndex * rowHeight;
    var numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
    return Math.max(0, Math.min(rowCount - 1, startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref13) {
    var columnWidth = _ref13.columnWidth,
        rowHeight = _ref13.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'number') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      }

      if (typeof rowHeight !== 'number') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var FixedSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize + scrollbarSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (true) {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

var _excluded = ["style"],
    _excluded2 = ["style"];
// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(prevProps, _excluded);

  var nextStyle = nextProps.style,
      nextRest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(nextProps, _excluded2);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}


//# sourceMappingURL=index.esm.js.map


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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

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

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/description/description.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Description": function() { return /* binding */ F; },
/* harmony export */   "useDescriptions": function() { return /* binding */ k; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function u(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return r}function k(){let[r,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(t(o=>[...o,n]),()=>t(o=>{let c=o.slice(),p=c.indexOf(n);return p!==-1&&c.splice(p,1),c}))),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:s},e.children)},[t])]}let S="p",F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,a){let e=u(),i=`headlessui-description-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(a);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>e.register(i),[i,e.register]);let n=t,o={ref:s,...e.props,id:i};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:o,theirProps:n,slot:e.slot||{},defaultTag:S,name:e.name||"Description"})});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": function() { return /* binding */ o; }
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/label/label.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/label/label.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": function() { return /* binding */ F; },
/* harmony export */   "useLabels": function() { return /* binding */ M; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function c(){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(u);if(o===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,c),t}return o}function M(){let[o,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[o.length>0?o.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(a=>(t(i=>[...i,a]),()=>t(i=>{let n=i.slice(),d=n.indexOf(a);return d!==-1&&n.splice(d,1),n}))),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:l,slot:e.slot,name:e.name,props:e.props}),[l,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(u.Provider,{value:r},e.children)},[t])]}let h="label",F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,s){let{passive:e=!1,...l}=t,r=c(),a=`headlessui-label-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(s);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>r.register(a),[a,r.register]);let n={ref:i,...r.props,id:a};return e&&("onClick"in n&&delete n.onClick,"onClick"in l&&delete l.onClick),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:n,theirProps:l,slot:r.slot||{},defaultTag:h,name:r.name||"Label"})});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/menu/menu.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/menu/menu.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ qe; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculate-active-index.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-tree-walker.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
var ue=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(ue||{}),se=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(se||{}),le=(n=>(n[n.OpenMenu=0]="OpenMenu",n[n.CloseMenu=1]="CloseMenu",n[n.GoToItem=2]="GoToItem",n[n.Search=3]="Search",n[n.ClearSearch=4]="ClearSearch",n[n.RegisterItem=5]="RegisterItem",n[n.UnregisterItem=6]="UnregisterItem",n))(le||{});function k(t,i=o=>o){let o=t.activeItemIndex!==null?t.items[t.activeItemIndex]:null,e=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)(i(t.items.slice()),u=>u.dataRef.current.domRef.current),r=o?e.indexOf(o):null;return r===-1&&(r=null),{items:e,activeItemIndex:r}}let ce={[1](t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},[0](t){return t.menuState===0?t:{...t,menuState:0}},[2]:(t,i)=>{var r;let o=k(t),e=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.calculateActiveIndex)(i,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:e,activationTrigger:(r=i.trigger)!=null?r:1}},[3]:(t,i)=>{let e=t.searchQuery!==""?0:1,r=t.searchQuery+i.value.toLowerCase(),s=(t.activeItemIndex!==null?t.items.slice(t.activeItemIndex+e).concat(t.items.slice(0,t.activeItemIndex+e)):t.items).find(p=>{var c;return((c=p.dataRef.current.textValue)==null?void 0:c.startsWith(r))&&!p.dataRef.current.disabled}),n=s?t.items.indexOf(s):-1;return n===-1||n===t.activeItemIndex?{...t,searchQuery:r}:{...t,searchQuery:r,activeItemIndex:n,activationTrigger:1}},[4](t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},[5]:(t,i)=>{let o=k(t,e=>[...e,{id:i.id,dataRef:i.dataRef}]);return{...t,...o}},[6]:(t,i)=>{let o=k(t,e=>{let r=e.findIndex(u=>u.id===i.id);return r!==-1&&e.splice(r,1),e});return{...t,...o,activationTrigger:1}}},w=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);w.displayName="MenuContext";function C(t){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(w);if(i===null){let o=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,C),o}return i}function pe(t,i){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(i.type,ce,t,i)}let de=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,me=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.forwardRefWithAs)(function(i,o){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(pe,{menuState:1,buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),itemsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:u,buttonRef:s},n]=e,p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(o);(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_6__.useOutsideClick)([s,u],(A,M)=>{var l;n({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.isFocusableElement)(M,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusableMode.Loose)||(A.preventDefault(),(l=s.current)==null||l.focus())},r===0);let c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{n({type:1})}),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:r===0,close:c}),[r,c]),m=i,g={ref:p};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(w.Provider,{value:e},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(r,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)({ourProps:g,theirProps:m,slot:b,defaultTag:de,name:"Menu"})))}),fe="button",Te=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.forwardRefWithAs)(function(i,o){var M;let[e,r]=C("Menu.Button"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(e.buttonRef,o),s=`headlessui-menu-button-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__.useId)()}`,n=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)(),p=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(l=>{switch(l.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:l.preventDefault(),l.stopPropagation(),r({type:0}),n.nextFrame(()=>r({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First}));break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:l.preventDefault(),l.stopPropagation(),r({type:0}),n.nextFrame(()=>r({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last}));break}}),c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(l=>{switch(l.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:l.preventDefault();break}}),b=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(l=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__.isDisabledReactIssue7711)(l.currentTarget))return l.preventDefault();i.disabled||(e.menuState===0?(r({type:1}),n.nextFrame(()=>{var R;return(R=e.buttonRef.current)==null?void 0:R.focus({preventScroll:!0})})):(l.preventDefault(),r({type:0})))}),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:e.menuState===0}),[e]),g=i,A={ref:u,id:s,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__.useResolveButtonType)(i,e.buttonRef),"aria-haspopup":!0,"aria-controls":(M=e.itemsRef.current)==null?void 0:M.id,"aria-expanded":i.disabled?void 0:e.menuState===0,onKeyDown:p,onKeyUp:c,onClick:b};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)({ourProps:A,theirProps:g,slot:m,defaultTag:fe,name:"Menu.Button"})}),ye="div",Ie=_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.Features.Static,ge=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.forwardRefWithAs)(function(i,o){var R,S;let[e,r]=C("Menu.Items"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(e.itemsRef,o),s=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_14__.useOwnerDocument)(e.itemsRef),n=`headlessui-menu-items-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__.useId)()}`,p=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)(),c=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.useOpenClosed)(),b=(()=>c!==null?c===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Open:e.menuState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let a=e.itemsRef.current;!a||e.menuState===0&&a!==(s==null?void 0:s.activeElement)&&a.focus({preventScroll:!0})},[e.menuState,e.itemsRef,s]),(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_15__.useTreeWalker)({container:e.itemsRef.current,enabled:e.menuState===0,accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});let m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(a=>{var T,y;switch(p.dispose(),a.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:if(e.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),r({type:3,value:a.key});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:if(a.preventDefault(),a.stopPropagation(),r({type:1}),e.activeItemIndex!==null){let{dataRef:v}=e.items[e.activeItemIndex];(y=(T=v.current)==null?void 0:T.domRef.current)==null||y.click()}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.restoreFocusIfNecessary)(e.buttonRef.current);break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:return a.preventDefault(),a.stopPropagation(),r({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:return a.preventDefault(),a.stopPropagation(),r({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Home:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageUp:return a.preventDefault(),a.stopPropagation(),r({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.End:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageDown:return a.preventDefault(),a.stopPropagation(),r({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape:a.preventDefault(),a.stopPropagation(),r({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__.disposables)().nextFrame(()=>{var v;return(v=e.buttonRef.current)==null?void 0:v.focus({preventScroll:!0})});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Tab:a.preventDefault(),a.stopPropagation(),r({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__.disposables)().nextFrame(()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusFrom)(e.buttonRef.current,a.shiftKey?_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Previous:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Next)});break;default:a.key.length===1&&(r({type:3,value:a.key}),p.setTimeout(()=>r({type:4}),350));break}}),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(a=>{switch(a.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:a.preventDefault();break}}),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:e.menuState===0}),[e]),M=i,l={"aria-activedescendant":e.activeItemIndex===null||(R=e.items[e.activeItemIndex])==null?void 0:R.id,"aria-labelledby":(S=e.buttonRef.current)==null?void 0:S.id,id:n,onKeyDown:m,onKeyUp:g,role:"menu",tabIndex:0,ref:u};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)({ourProps:l,theirProps:M,slot:A,defaultTag:ye,features:Ie,visible:b,name:"Menu.Items"})}),Me=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Re=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.forwardRefWithAs)(function(i,o){let{disabled:e=!1,...r}=i,[u,s]=C("Menu.Item"),n=`headlessui-menu-item-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__.useId)()}`,p=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===n:!1,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),b=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(o,c);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.useIsoMorphicEffect)(()=>{if(u.menuState!==0||!p||u.activationTrigger===0)return;let T=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__.disposables)();return T.requestAnimationFrame(()=>{var y,v;(v=(y=c.current)==null?void 0:y.scrollIntoView)==null||v.call(y,{block:"nearest"})}),T.dispose},[c,p,u.menuState,u.activationTrigger,u.activeItemIndex]);let m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:e,domRef:c});(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.useIsoMorphicEffect)(()=>{m.current.disabled=e},[m,e]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.useIsoMorphicEffect)(()=>{var T,y;m.current.textValue=(y=(T=c.current)==null?void 0:T.textContent)==null?void 0:y.toLowerCase()},[m,c]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.useIsoMorphicEffect)(()=>(s({type:5,id:n,dataRef:m}),()=>s({type:6,id:n})),[m,n]);let g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{s({type:1})}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(T=>{if(e)return T.preventDefault();s({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.restoreFocusIfNecessary)(u.buttonRef.current)}),M=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{if(e)return s({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing});s({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,id:n})}),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{e||p||s({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,id:n,trigger:0})}),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{e||!p||s({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing})}),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:p,disabled:e,close:g}),[p,e,g]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)({ourProps:{id:n,ref:b,role:"menuitem",tabIndex:e===!0?void 0:-1,"aria-disabled":e===!0?!0:void 0,disabled:void 0,onClick:A,onFocus:M,onPointerMove:l,onMouseMove:l,onPointerLeave:R,onMouseLeave:R},theirProps:r,slot:S,defaultTag:Me,name:"Menu.Item"})}),qe=Object.assign(me,{Button:Te,Items:ge,Item:Re});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioGroup": function() { return /* binding */ et; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _hooks_use_flags_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-flags.js */ "./node_modules/@headlessui/react/dist/hooks/use-flags.js");
/* harmony import */ var _components_label_label_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/label/label.js */ "./node_modules/@headlessui/react/dist/components/label/label.js");
/* harmony import */ var _components_description_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-tree-walker.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
var ye=(t=>(t[t.RegisterOption=0]="RegisterOption",t[t.UnregisterOption=1]="UnregisterOption",t))(ye||{});let ge={[0](a,n){let t=[...a.options,{id:n.id,element:n.element,propsRef:n.propsRef}];return{...a,options:(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)(t,l=>l.element.current)}},[1](a,n){let t=a.options.slice(),l=a.options.findIndex(O=>O.id===n.id);return l===-1?a:(t.splice(l,1),{...a,options:t})}},V=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);V.displayName="RadioGroupContext";function te(a){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(V);if(n===null){let t=new Error(`<${a} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,te),t}return n}function ve(a,n){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(n.type,ge,a,n)}let Oe="div",Ee=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(n,t){let{value:l,defaultValue:O,name:c,onChange:M,by:E=(e,r)=>e===r,disabled:P=!1,...S}=n,u=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(typeof E=="string"?(e,r)=>{let o=E;return(e==null?void 0:e[o])===(r==null?void 0:r[o])}:E),[_,A]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(ve,{options:[]}),i=_.options,[R,U]=(0,_components_label_label_js__WEBPACK_IMPORTED_MODULE_5__.useLabels)(),[f,D]=(0,_components_description_description_js__WEBPACK_IMPORTED_MODULE_6__.useDescriptions)(),H=`headlessui-radiogroup-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)()}`,h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),G=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(h,t),[p,k]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_9__.useControllable)(l,M,O),F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>i.find(e=>!e.propsRef.current.disabled),[i]),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>i.some(e=>u(e.propsRef.current.value,p)),[i,p]),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(e=>{var o;if(P||u(e,p))return!1;let r=(o=i.find(w=>u(w.propsRef.current.value,e)))==null?void 0:o.propsRef.current;return r!=null&&r.disabled?!1:(k==null||k(e),!0)});(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_10__.useTreeWalker)({container:h.current,accept(e){return e.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none")}});let N=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(e=>{let r=h.current;if(!r)return;let o=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_11__.getOwnerDocument)(r),w=i.filter(d=>d.propsRef.current.disabled===!1).map(d=>d.element.current);switch(e.key){case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Enter:(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_13__.attemptSubmit)(e.currentTarget);break;case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowLeft:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(w,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Success){let m=i.find(K=>K.element.current===(o==null?void 0:o.activeElement));m&&T(m.propsRef.current.value)}break;case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowRight:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(w,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Success){let m=i.find(K=>K.element.current===(o==null?void 0:o.activeElement));m&&T(m.propsRef.current.value)}break;case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Space:{e.preventDefault(),e.stopPropagation();let d=i.find(m=>m.element.current===(o==null?void 0:o.activeElement));d&&T(d.propsRef.current.value)}break}}),x=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(e=>(A({type:0,...e}),()=>A({type:1,id:e.id}))),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerOption:x,firstOption:F,containsCheckedOption:L,change:T,disabled:P,value:p,compare:u}),[x,F,L,T,P,p,u]),y={ref:G,id:H,role:"radiogroup","aria-labelledby":R,"aria-describedby":f,onKeyDown:N},W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({value:p}),[p]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{name:"RadioGroup.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(U,{name:"RadioGroup.Label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(V.Provider,{value:s},c!=null&&p!=null&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_13__.objectToFormEntries)({[c]:p}).map(([e,r])=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Features.Hidden,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.compact)({key:e,as:"input",type:"radio",checked:r!=null,hidden:!0,readOnly:!0,name:e,value:r})})),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:y,theirProps:S,slot:W,defaultTag:Oe,name:"RadioGroup"}))))});var Pe=(t=>(t[t.Empty=1]="Empty",t[t.Active=2]="Active",t))(Pe||{});let Ae="div",he=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(n,t){let l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),O=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(l,t),c=`headlessui-radiogroup-option-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)()}`,[M,E]=(0,_components_label_label_js__WEBPACK_IMPORTED_MODULE_5__.useLabels)(),[P,S]=(0,_components_description_description_js__WEBPACK_IMPORTED_MODULE_6__.useDescriptions)(),{addFlag:u,removeFlag:_,hasFlag:A}=(0,_hooks_use_flags_js__WEBPACK_IMPORTED_MODULE_15__.useFlags)(1),{value:i,disabled:R=!1,...U}=n,f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value:i,disabled:R});(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(()=>{f.current.value=i},[i,f]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(()=>{f.current.disabled=R},[R,f]);let{registerOption:D,disabled:H,change:h,firstOption:G,containsCheckedOption:p,value:k,compare:F}=te("RadioGroup.Option");(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(()=>D({id:c,element:l,propsRef:f}),[c,D,l,n]);let L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(r=>{var o;if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_17__.isDisabledReactIssue7711)(r.currentTarget))return r.preventDefault();!h(i)||(u(2),(o=l.current)==null||o.focus())}),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(r=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_17__.isDisabledReactIssue7711)(r.currentTarget))return r.preventDefault();u(2)}),N=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(()=>_(2)),x=(G==null?void 0:G.id)===c,s=H||R,y=F(k,i),W={ref:O,id:c,role:"radio","aria-checked":y?"true":"false","aria-labelledby":M,"aria-describedby":P,"aria-disabled":s?!0:void 0,tabIndex:(()=>s?-1:y||!p&&x?0:-1)(),onClick:s?void 0:L,onFocus:s?void 0:T,onBlur:s?void 0:N},e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:y,disabled:s,active:A(2)}),[y,s,A]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(S,{name:"RadioGroup.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{name:"RadioGroup.Label"},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:W,theirProps:U,slot:e,defaultTag:Ae,name:"RadioGroup.Option"})))}),et=Object.assign(Ee,{Option:he,Label:_components_label_label_js__WEBPACK_IMPORTED_MODULE_5__.Label,Description:_components_description_description_js__WEBPACK_IMPORTED_MODULE_6__.Description});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/tabs/tabs.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab": function() { return /* binding */ qe; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _internal_focus_sentinel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal/focus-sentinel.js */ "./node_modules/@headlessui/react/dist/internal/focus-sentinel.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
var de=(n=>(n[n.SetSelectedIndex=0]="SetSelectedIndex",n[n.RegisterTab=1]="RegisterTab",n[n.UnregisterTab=2]="UnregisterTab",n[n.RegisterPanel=3]="RegisterPanel",n[n.UnregisterPanel=4]="UnregisterPanel",n))(de||{});let pe={[0](e,t){let r=e.tabs.filter(i=>{var l;return!((l=i.current)!=null&&l.hasAttribute("disabled"))});if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let o=e.tabs.slice(0,t.index),n=[...e.tabs.slice(t.index),...o].find(i=>r.includes(i));return n?{...e,selectedIndex:e.tabs.indexOf(n)}:e},[1](e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],o=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)([...e.tabs,t.tab],i=>i.current),s=(n=o.indexOf(r))!=null?n:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:o,selectedIndex:s}},[2](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)([...e.panels,t.panel],r=>r.current)}},[4](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},z=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);z.displayName="TabsSSRContext";function V(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(z);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,V),r}return t}let q=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);q.displayName="TabsDataContext";function D(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(q);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,D),r}return t}let J=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);J.displayName="TabsActionsContext";function Q(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(J);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Q),r}return t}function fe(e,t){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(t.type,pe,e,t)}let be=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Te=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){let{defaultIndex:o=0,vertical:s=!1,manual:n=!1,onChange:i,selectedIndex:l=null,...y}=t;const p=s?"vertical":"horizontal",S=n?"manual":"auto";let b=l!==null,u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(r),[c,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(fe,{selectedIndex:l!=null?l:o,tabs:[],panels:[]}),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:c.selectedIndex}),[c.selectedIndex]),x=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__.useLatestValue)(i||(()=>{})),R=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__.useLatestValue)(c.tabs),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({orientation:p,activation:S,...c}),[p,S,c]),A=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__.useLatestValue)(b?t.selectedIndex:c.selectedIndex),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerTab(d){return f({type:1,tab:d}),()=>f({type:2,tab:d})},registerPanel(d){return f({type:3,panel:d}),()=>f({type:4,panel:d})},change(d){A.current!==d&&x.current(d),b||f({type:0,index:d})}}),[f,b]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{f({type:0,index:l!=null?l:o})},[l]);let k=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({tabs:[],panels:[]}),G={ref:u};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(z.Provider,{value:k},react__WEBPACK_IMPORTED_MODULE_0__.createElement(J.Provider,{value:L},react__WEBPACK_IMPORTED_MODULE_0__.createElement(q.Provider,{value:E},E.tabs.length<=0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_focus_sentinel_js__WEBPACK_IMPORTED_MODULE_7__.FocusSentinel,{onFocus:()=>{var d,U;for(let M of R.current)if(((d=M.current)==null?void 0:d.tabIndex)===0)return(U=M.current)==null||U.focus(),!0;return!1}}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:G,theirProps:y,slot:T,defaultTag:be,name:"Tabs"}))))}),me="div",Pe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){let{orientation:o,selectedIndex:s}=D("Tab.List"),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(r);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:{ref:n,role:"tablist","aria-orientation":o},theirProps:t,slot:{selectedIndex:s},defaultTag:me,name:"Tabs.List"})}),xe="button",ge=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){var M,X;let o=`headlessui-tabs-tab-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_8__.useId)()}`,{orientation:s,activation:n,selectedIndex:i,tabs:l,panels:y}=D("Tab"),p=Q("Tab"),S=D("Tab"),b=V("Tab"),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(u,r);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>p.registerTab(u),[p,u]);let f=b.current.tabs.indexOf(o);f===-1&&(f=b.current.tabs.push(o)-1);let T=l.indexOf(u);T===-1&&(T=f);let x=T===i,R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__.useEvent)(a=>{var j;let g=a();if(g===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Success&&n==="auto"){let W=(j=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_10__.getOwnerDocument)(u))==null?void 0:j.activeElement,Y=S.tabs.findIndex(ne=>ne.current===W);Y!==-1&&p.change(Y)}return g}),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__.useEvent)(a=>{let g=l.map(W=>W.current).filter(Boolean);if(a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space||a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter){a.preventDefault(),a.stopPropagation(),p.change(T);return}switch(a.key){case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Home:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageUp:return a.preventDefault(),a.stopPropagation(),R(()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(g,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.First));case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.End:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageDown:return a.preventDefault(),a.stopPropagation(),R(()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(g,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Last))}if(R(()=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(s,{vertical(){return a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(g,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround):a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(g,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround):_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Error},horizontal(){return a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowLeft?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(g,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround):a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowRight?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(g,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround):_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Error}}))===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Success)return a.preventDefault()}),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__.useEvent)(()=>{var a;A.current||(A.current=!0,(a=u.current)==null||a.focus(),p.change(T),(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_12__.microTask)(()=>{A.current=!1}))}),k=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__.useEvent)(a=>{a.preventDefault()}),G=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:x}),[x]),d=t,U={ref:c,onKeyDown:E,onMouseDown:k,onClick:L,id:o,role:"tab",type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__.useResolveButtonType)(t,u),"aria-controls":(X=(M=y[T])==null?void 0:M.current)==null?void 0:X.id,"aria-selected":x,tabIndex:x?0:-1};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:U,theirProps:d,slot:G,defaultTag:xe,name:"Tabs.Tab"})}),ye="div",Re=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){let{selectedIndex:o}=D("Tab.Panels"),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(r),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:o}),[o]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:{ref:s},theirProps:t,slot:n,defaultTag:ye,name:"Tabs.Panels"})}),Ae="div",Ee=_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.Features.Static,Se=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){var R,E,A,L;let{selectedIndex:o,tabs:s,panels:n}=D("Tab.Panel"),i=Q("Tab.Panel"),l=V("Tab.Panel"),y=`headlessui-tabs-panel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_8__.useId)()}`,p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),S=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(p,r);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>i.registerPanel(p),[i,p]);let b=l.current.panels.indexOf(y);b===-1&&(b=l.current.panels.push(y)-1);let u=n.indexOf(p);u===-1&&(u=b);let c=u===o,f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:c}),[c]),T=t,x={ref:S,id:y,role:"tabpanel","aria-labelledby":(E=(R=s[u])==null?void 0:R.current)==null?void 0:E.id,tabIndex:c?0:-1};return!c&&((A=t.unmount)!=null?A:!0)&&!((L=t.static)!=null&&L)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Hidden,{as:"span",...x}):(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:x,theirProps:T,slot:f,defaultTag:Ae,features:Ee,visible:c,name:"Tabs.Panel"})}),qe=Object.assign(ge,{Group:Te,List:Pe,Panels:Re,Panel:Se});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/transition.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/transition.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transition": function() { return /* binding */ We; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-transition.js */ "./node_modules/@headlessui/react/dist/hooks/use-transition.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
function x(r=""){return r.split(" ").filter(e=>e.trim().length>1)}let F=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);F.displayName="TransitionContext";var ve=(s=>(s.Visible="visible",s.Hidden="hidden",s))(ve||{});function Ce(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(F);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}function ge(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}let M=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);M.displayName="NestingContext";function I(r){return"children"in r?I(r.children):r.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function ee(r,e){let s=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),m=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_2__.useIsMounted)(),D=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__.useDisposables)(),b=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((l,i=_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden)=>{let t=n.current.findIndex(({el:o})=>o===l);t!==-1&&((0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(i,{[_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount](){n.current.splice(t,1)},[_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden](){n.current[t].state="hidden"}}),D.microTask(()=>{var o;!I(n)&&m.current&&((o=s.current)==null||o.call(s))}))}),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(l=>{let i=n.current.find(({el:t})=>t===l);return i?i.state!=="visible"&&(i.state="visible"):n.current.push({el:l,state:"visible"}),()=>b(l,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount)}),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Promise.resolve()),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({enter:[],leave:[],idle:[]}),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((l,i,t)=>{S.current.splice(0),e&&(e.chains.current[i]=e.chains.current[i].filter(([o])=>o!==l)),e==null||e.chains.current[i].push([l,new Promise(o=>{S.current.push(o)})]),e==null||e.chains.current[i].push([l,new Promise(o=>{Promise.all(p.current[i].map(([f,a])=>a)).then(()=>o())})]),i==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>t(i)):t(i)}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((l,i,t)=>{Promise.all(p.current[i].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=S.current.shift())==null||o()}).then(()=>t(i))});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({children:n,register:E,unregister:b,onStart:d,onStop:h,wait:u,chains:p}),[E,b,n,d,h,p,u])}function be(){}let Ee=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function te(r){var s;let e={};for(let n of Ee)e[n]=(s=r[n])!=null?s:be;return e}function Se(r){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(te(r));return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e.current=te(r)},[r]),e}let xe="div",ne=_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.Features.RenderStrategy,re=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function(e,s){let{beforeEnter:n,afterEnter:m,beforeLeave:D,afterLeave:b,enter:E,enterFrom:S,enterTo:u,entered:p,leave:d,leaveFrom:h,leaveTo:l,...i}=e,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(t,s),f=i.unmount?_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount:_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden,{show:a,appear:P,initial:ie}=Ce(),[v,_]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(a?"visible":"hidden"),z=ge(),{register:N,unregister:V}=z,j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>N(t),[N,t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(f===_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden&&!!t.current){if(a&&v!=="visible"){_("visible");return}return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(v,{["hidden"]:()=>V(t),["visible"]:()=>N(t)})}},[v,t,N,V,a,f]);let oe=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)({enter:x(E),enterFrom:x(S),enterTo:x(u),entered:x(p),leave:x(d),leaveFrom:x(h),leaveTo:x(l)}),L=Se({beforeEnter:n,afterEnter:m,beforeLeave:D,afterLeave:b}),U=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_8__.useServerHandoffComplete)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(U&&v==="visible"&&t.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[t,v,U]);let k=ie&&!P,se=(()=>!U||k||j.current===a?"idle":a?"enter":"leave")(),le=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(C=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(C,{enter:()=>L.current.beforeEnter(),leave:()=>L.current.beforeLeave(),idle:()=>{}})),ae=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(C=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(C,{enter:()=>L.current.afterEnter(),leave:()=>L.current.afterLeave(),idle:()=>{}})),w=ee(()=>{_("hidden"),V(t)},z);(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_9__.useTransition)({container:t,classes:oe,direction:se,onStart:(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(C=>{w.onStart(t,C,le)}),onStop:(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(C=>{w.onStop(t,C,ae),C==="leave"&&!I(w)&&(_("hidden"),V(t))})}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!k||(f===_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden?j.current=null:j.current=a)},[a,k,v]);let ue=i,de={ref:o};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Provider,{value:w},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(v,{["visible"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open,["hidden"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:de,theirProps:ue,defaultTag:xe,features:ne,visible:v==="visible",name:"Transition.Child"})))}),q=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function(e,s){let{show:n,appear:m=!1,unmount:D,...b}=e,E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),S=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(E,s);(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_8__.useServerHandoffComplete)();let u=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)();if(n===void 0&&u!==null&&(n=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(u,{[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open]:!0,[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,d]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(n?"visible":"hidden"),h=ee(()=>{d("hidden")}),[l,i]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([n]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_11__.useIsoMorphicEffect)(()=>{l!==!1&&t.current[t.current.length-1]!==n&&(t.current.push(n),i(!1))},[t,n]);let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({show:n,appear:m,initial:l}),[n,m,l]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(n)d("visible");else if(!I(h))d("hidden");else{let a=E.current;if(!a)return;let P=a.getBoundingClientRect();P.x===0&&P.y===0&&P.width===0&&P.height===0&&d("hidden")}},[n,h]);let f={unmount:D};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Provider,{value:h},react__WEBPACK_IMPORTED_MODULE_0__.createElement(F.Provider,{value:o},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:{...f,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(re,{ref:S,...f,...b})},theirProps:{},defaultTag:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,features:ne,visible:p==="visible",name:"Transition"})))}),Pe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function(e,s){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(F)!==null,m=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)()!==null;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,!n&&m?react__WEBPACK_IMPORTED_MODULE_0__.createElement(q,{ref:s,...e}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(re,{ref:s,...e}))}),We=Object.assign(q,{Child:Pe,Root:q});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reason": function() { return /* binding */ T; },
/* harmony export */   "transition": function() { return /* binding */ C; }
/* harmony export */ });
/* harmony import */ var _utils_once_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/once.js */ "./node_modules/@headlessui/react/dist/utils/once.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
function f(t,...e){t&&e.length>0&&t.classList.add(...e)}function v(t,...e){t&&e.length>0&&t.classList.remove(...e)}var T=(n=>(n.Ended="ended",n.Cancelled="cancelled",n))(T||{});function c(t,e){let n=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();if(!t)return n.dispose;let{transitionDuration:d,transitionDelay:o}=getComputedStyle(t),[s,u]=[d,o].map(i=>{let[a=0]=i.split(",").filter(Boolean).map(r=>r.includes("ms")?parseFloat(r):parseFloat(r)*1e3).sort((r,l)=>l-r);return a});if(s+u!==0){let i=[];i.push(n.addEventListener(t,"transitionrun",a=>{a.target===a.currentTarget&&(i.splice(0).forEach(r=>r()),i.push(n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e("ended"),i.splice(0).forEach(l=>l()))}),n.addEventListener(t,"transitioncancel",r=>{r.target===r.currentTarget&&(e("cancelled"),i.splice(0).forEach(l=>l()))})))}))}else e("ended");return n.add(()=>e("cancelled")),n.dispose}function C(t,e,n,d){let o=n?"enter":"leave",s=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__.disposables)(),u=d!==void 0?(0,_utils_once_js__WEBPACK_IMPORTED_MODULE_1__.once)(d):()=>{};o==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let m=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(o,{enter:()=>e.enter,leave:()=>e.leave}),i=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(o,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),a=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(o,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),f(t,...m,...a),s.nextFrame(()=>{v(t,...a),f(t,...i),c(t,r=>(r==="ended"&&(v(t,...m),f(t,...e.entered)),u(r)))}),s.dispose}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-controllable.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useControllable": function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=l!==void 0,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(e||s(n),r==null?void 0:r(n)))]}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisposables": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-document-event.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDocumentEvent": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function d(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEvent": function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-flags.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-flags.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFlags": function() { return /* binding */ b; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function b(g=0){let[r,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(g),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a|e),[r]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>Boolean(r&e),[r]),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a&~e),[l]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a^e),[l]);return{addFlag:u,hasFlag:n,removeFlag:o,toggleFlag:s}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": function() { return /* binding */ I; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
var u;let l=0;function r(){return++l}let I=(u=react__WEBPACK_IMPORTED_MODULE_0__.useId)!=null?u:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.useServerHandoffComplete)(),[e,o]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?r:null);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>{e===null&&o(r())},[e]),e!=null?""+e:void 0};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMounted": function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsoMorphicEffect": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_ssr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ssr.js */ "./node_modules/@headlessui/react/dist/utils/ssr.js");
let s=_utils_ssr_js__WEBPACK_IMPORTED_MODULE_1__.isServer?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLatestValue": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOutsideClick": function() { return /* binding */ L; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _use_document_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-document-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js");
function L(E,m,c=!0){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{requestAnimationFrame(()=>{i.current=c})},[c]);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(E),n=o(e);if(n!==null&&!!n.getRootNode().contains(n)){for(let r of l){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n))return}return!(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.isFocusableElement)(n,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusableMode.Loose)&&n.tabIndex!==-1&&e.preventDefault(),m(e,n)}}let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("mousedown",e=>{var o,l;i.current&&(u.current=((l=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:l[0])||e.target)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("click",e=>{!u.current||(f(e,()=>u.current),u.current=null)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("blur",e=>f(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-owner.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-owner.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOwnerDocument": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function n(...e){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(...e),[...e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useResolveButtonType": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useServerHandoffComplete": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let r={serverHandoffComplete:!1};function a(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(r.serverHandoffComplete);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e!==!0&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r.serverHandoffComplete===!1&&(r.serverHandoffComplete=!0)},[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionalRef": function() { return /* binding */ T; },
/* harmony export */   "useSyncRefs": function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-transition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-transition.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTransition": function() { return /* binding */ I; }
/* harmony export */ });
/* harmony import */ var _components_transitions_utils_transition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/transitions/utils/transition.js */ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _use_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _use_is_mounted_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function I({container:o,direction:t,classes:s,onStart:a,onStop:u}){let c=(0,_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_0__.useIsMounted)(),d=(0,_use_disposables_js__WEBPACK_IMPORTED_MODULE_1__.useDisposables)(),r=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(t);(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{let e=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__.disposables)();d.add(e.dispose);let n=o.current;if(!!n&&r.current!=="idle"&&!!c.current)return e.dispose(),a.current(r.current),e.add((0,_components_transitions_utils_transition_js__WEBPACK_IMPORTED_MODULE_5__.transition)(n,s.current,r.current==="enter",l=>{e.dispose(),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(l,{[_components_transitions_utils_transition_js__WEBPACK_IMPORTED_MODULE_5__.Reason.Ended](){u.current(r.current)},[_components_transitions_utils_transition_js__WEBPACK_IMPORTED_MODULE_5__.Reason.Cancelled]:()=>{}})})),e.dispose},[t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTreeWalker": function() { return /* binding */ F; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{o.current=t,l.current=r},[t,r]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{if(!e||!c)return;let n=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign(i=>f(i),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)},[e,c,o,l])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/focus-sentinel.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/focus-sentinel.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusSentinel": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hidden_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
function p({onFocus:n}){let[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);return r?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_1__.Hidden,{as:"button",type:"button",features:_hidden_js__WEBPACK_IMPORTED_MODULE_1__.Features.Focusable,onFocus:a=>{a.preventDefault();let e,u=50;function t(){if(u--<=0){e&&cancelAnimationFrame(e);return}if(n()){o(!1),cancelAnimationFrame(e);return}e=requestAnimationFrame(t)}e=requestAnimationFrame(t)}}):null}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/hidden.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/hidden.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": function() { return /* binding */ s; },
/* harmony export */   "Hidden": function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
let a="div";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.forwardRefWithAs)(function(t,o){let{features:e=1,...r}=t,d={ref:o,"aria-hidden":(e&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.render)({ourProps:d,theirProps:r,slot:{},defaultTag:a,name:"Hidden"})});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenClosedProvider": function() { return /* binding */ C; },
/* harmony export */   "State": function() { return /* binding */ p; },
/* harmony export */   "useOpenClosed": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);o.displayName="OpenClosedContext";var p=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(p||{});function s(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(o)}function C({value:t,children:n}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(o.Provider,{value:t},n)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisabledReactIssue7711": function() { return /* binding */ r; }
/* harmony export */ });
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/calculate-active-index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": function() { return /* binding */ a; },
/* harmony export */   "calculateActiveIndex": function() { return /* binding */ x; }
/* harmony export */ });
function f(r){throw new Error("Unexpected object: "+r)}var a=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(a||{});function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=l!=null?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex(e=>!n.resolveDisabled(e));case 1:{let e=t.slice().reverse().findIndex((i,c,u)=>s!==-1&&u.length-c-1>=s?!1:!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 2:return t.findIndex((e,i)=>i<=s?!1:!n.resolveDisabled(e));case 3:{let e=t.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 4:return t.findIndex(e=>n.resolveId(e)===r.id);case 5:return null;default:f(r)}})();return d===-1?l:d}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disposables": function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
function m(){let n=[],i=[],r={enqueue(e){i.push(e)},addEventListener(e,t,a,o){return e.addEventListener(t,a,o),r.add(()=>e.removeEventListener(t,a,o))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.microTask)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0){let[a]=n.splice(t,1);a()}}},dispose(){for(let e of n.splice(0))e()},async workQueue(){for(let e of i.splice(0))await e()}};return r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": function() { return /* binding */ T; },
/* harmony export */   "FocusResult": function() { return /* binding */ M; },
/* harmony export */   "FocusableMode": function() { return /* binding */ N; },
/* harmony export */   "focusElement": function() { return /* binding */ h; },
/* harmony export */   "focusFrom": function() { return /* binding */ D; },
/* harmony export */   "focusIn": function() { return /* binding */ O; },
/* harmony export */   "getFocusableElements": function() { return /* binding */ d; },
/* harmony export */   "isFocusableElement": function() { return /* binding */ F; },
/* harmony export */   "restoreFocusIfNecessary": function() { return /* binding */ I; },
/* harmony export */   "sortByDomNode": function() { return /* binding */ S; }
/* harmony export */ });
/* harmony import */ var _disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _owner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
let m=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(T||{}),M=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(M||{}),b=(r=>(r[r.Previous=-1]="Previous",r[r.Next=1]="Next",r))(b||{});function d(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(m))}var N=(r=>(r[r.Strict=0]="Strict",r[r.Loose=1]="Loose",r))(N||{});function F(e,t=0){var r;return e===((r=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e))==null?void 0:r.body)?!1:(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t,{[0](){return e.matches(m)},[1](){let l=e;for(;l!==null;){if(l.matches(m))return!0;l=l.parentElement}return!1}})}function I(e){let t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)().nextFrame(()=>{t&&!F(t.activeElement,0)&&h(e)})}function h(e){e==null||e.focus({preventScroll:!0})}let w=["textarea","input"].join(",");function H(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,w))!=null?r:!1}function S(e,t=r=>r){return e.slice().sort((r,l)=>{let o=t(r),s=t(l);if(o===null||s===null)return 0;let n=o.compareDocumentPosition(s);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function D(e,t){return O(d(),t,!0,e)}function O(e,t,r=!0,l=null){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?r?S(e):e:d(e);l=l!=null?l:o.activeElement;let n=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),E=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(l))-1;if(t&4)return Math.max(0,s.indexOf(l))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=t&32?{preventScroll:!0}:{},f=0,i=s.length,u;do{if(f>=i||f+i<=0)return 0;let a=E+f;if(t&16)a=(a+i)%i;else{if(a<0)return 3;if(a>=i)return 1}u=s[a],u==null||u.focus(x),f+=n}while(u!==o.activeElement);return t&6&&H(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/form.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/form.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attemptSubmit": function() { return /* binding */ p; },
/* harmony export */   "objectToFormEntries": function() { return /* binding */ e; }
/* harmony export */ });
function e(n={},r=null,t=[]){for(let[i,o]of Object.entries(n))f(t,s(r,i),o);return t}function s(n,r){return n?n+"["+r+"]":r}function f(n,r,t){if(Array.isArray(t))for(let[i,o]of t.entries())f(n,s(r,i.toString()),o);else t instanceof Date?n.push([r,t.toISOString()]):typeof t=="boolean"?n.push([r,t?"1":"0"]):typeof t=="string"?n.push([r,t]):typeof t=="number"?n.push([r,`${t}`]):t==null?n.push([r,""]):e(t,r,n)}function p(n){var t;let r=(t=n==null?void 0:n.form)!=null?t:n.closest("form");if(!!r){for(let i of r.elements)if(i.tagName==="INPUT"&&i.type==="submit"||i.tagName==="BUTTON"&&i.type==="submit"||i.nodeName==="INPUT"&&i.type==="image"){i.click();return}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match": function() { return /* binding */ u; }
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/micro-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/micro-task.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "microTask": function() { return /* binding */ t; }
/* harmony export */ });
function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/once.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/once.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "once": function() { return /* binding */ l; }
/* harmony export */ });
function l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/owner.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/owner.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOwnerDocument": function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _ssr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr.js */ "./node_modules/@headlessui/react/dist/utils/ssr.js");
function e(r){return _ssr_js__WEBPACK_IMPORTED_MODULE_0__.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": function() { return /* binding */ S; },
/* harmony export */   "RenderStrategy": function() { return /* binding */ j; },
/* harmony export */   "compact": function() { return /* binding */ F; },
/* harmony export */   "forwardRefWithAs": function() { return /* binding */ C; },
/* harmony export */   "render": function() { return /* binding */ $; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var S=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function $({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:o,visible:n=!0,name:l}){let s=T(t,r);if(n)return p(s,e,a,l);let u=o!=null?o:0;if(u&2){let{static:i=!1,...d}=s;if(i)return p(d,e,a,l)}if(u&1){let{unmount:i=!0,...d}=s;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i?0:1,{[0](){return null},[1](){return p({...d,hidden:!0,style:{display:"none"}},e,a,l)}})}return p(s,e,a,l)}function p(r,t={},e,a){let{as:o=e,children:n,refName:l="ref",...s}=m(r,["unmount","static"]),u=r.ref!==void 0?{[l]:r.ref}:{},i=typeof n=="function"?n(t):n;s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(t){let f=!1,y=[];for(let[h,g]of Object.entries(t))typeof g=="boolean"&&(f=!0),g===!0&&y.push(h);f&&(d["data-headlessui-state"]=y.join(" "))}if(o===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(F(s)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},T(i.props,F(m(s,["ref"]))),d,u,w(i.ref,u.ref)))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(o,Object.assign({},m(s,["ref"]),o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function w(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function T(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let o of r)for(let n in o)n.startsWith("on")&&typeof o[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(o[n])):t[n]=o[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o in e)Object.assign(t,{[o](n,...l){let s=e[o];for(let u of s){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function C(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function F(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function m(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/ssr.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServer": function() { return /* binding */ e; }
/* harmony export */ });
const e=typeof window=="undefined"||typeof document=="undefined";


/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ __webpack_exports__["default"] = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/ComputerDesktopIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ComputerDesktopIcon.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ComputerDesktopIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ComputerDesktopIcon);
/* harmony default export */ __webpack_exports__["default"] = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/DevicePhoneMobileIcon.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/DevicePhoneMobileIcon.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DevicePhoneMobileIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DevicePhoneMobileIcon);
/* harmony default export */ __webpack_exports__["default"] = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/DeviceTabletIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/DeviceTabletIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DeviceTabletIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DeviceTabletIcon);
/* harmony default export */ __webpack_exports__["default"] = (ForwardRef);

/***/ }),

/***/ "./node_modules/stylis/src/Enum.js":
/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHARSET": function() { return /* binding */ CHARSET; },
/* harmony export */   "COMMENT": function() { return /* binding */ COMMENT; },
/* harmony export */   "COUNTER_STYLE": function() { return /* binding */ COUNTER_STYLE; },
/* harmony export */   "DECLARATION": function() { return /* binding */ DECLARATION; },
/* harmony export */   "DOCUMENT": function() { return /* binding */ DOCUMENT; },
/* harmony export */   "FONT_FACE": function() { return /* binding */ FONT_FACE; },
/* harmony export */   "FONT_FEATURE_VALUES": function() { return /* binding */ FONT_FEATURE_VALUES; },
/* harmony export */   "IMPORT": function() { return /* binding */ IMPORT; },
/* harmony export */   "KEYFRAMES": function() { return /* binding */ KEYFRAMES; },
/* harmony export */   "MEDIA": function() { return /* binding */ MEDIA; },
/* harmony export */   "MOZ": function() { return /* binding */ MOZ; },
/* harmony export */   "MS": function() { return /* binding */ MS; },
/* harmony export */   "NAMESPACE": function() { return /* binding */ NAMESPACE; },
/* harmony export */   "PAGE": function() { return /* binding */ PAGE; },
/* harmony export */   "RULESET": function() { return /* binding */ RULESET; },
/* harmony export */   "SUPPORTS": function() { return /* binding */ SUPPORTS; },
/* harmony export */   "VIEWPORT": function() { return /* binding */ VIEWPORT; },
/* harmony export */   "WEBKIT": function() { return /* binding */ WEBKIT; }
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'


/***/ }),

/***/ "./node_modules/stylis/src/Middleware.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Middleware.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "middleware": function() { return /* binding */ middleware; },
/* harmony export */   "namespace": function() { return /* binding */ namespace; },
/* harmony export */   "prefixer": function() { return /* binding */ prefixer; },
/* harmony export */   "rulesheet": function() { return /* binding */ rulesheet; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/stylis/src/Parser.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/src/Parser.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comment": function() { return /* binding */ comment; },
/* harmony export */   "compile": function() { return /* binding */ compile; },
/* harmony export */   "declaration": function() { return /* binding */ declaration; },
/* harmony export */   "parse": function() { return /* binding */ parse; },
/* harmony export */   "ruleset": function() { return /* binding */ ruleset; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length)
}


/***/ }),

/***/ "./node_modules/stylis/src/Prefixer.js":
/*!*********************************************!*\
  !*** ./node_modules/stylis/src/Prefixer.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefix": function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span') ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span') ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/stylis/src/Serializer.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Serializer.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serialize": function() { return /* binding */ serialize; },
/* harmony export */   "stringify": function() { return /* binding */ stringify; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/stylis/src/Tokenizer.js":
/*!**********************************************!*\
  !*** ./node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alloc": function() { return /* binding */ alloc; },
/* harmony export */   "caret": function() { return /* binding */ caret; },
/* harmony export */   "char": function() { return /* binding */ char; },
/* harmony export */   "character": function() { return /* binding */ character; },
/* harmony export */   "characters": function() { return /* binding */ characters; },
/* harmony export */   "column": function() { return /* binding */ column; },
/* harmony export */   "commenter": function() { return /* binding */ commenter; },
/* harmony export */   "copy": function() { return /* binding */ copy; },
/* harmony export */   "dealloc": function() { return /* binding */ dealloc; },
/* harmony export */   "delimit": function() { return /* binding */ delimit; },
/* harmony export */   "delimiter": function() { return /* binding */ delimiter; },
/* harmony export */   "escaping": function() { return /* binding */ escaping; },
/* harmony export */   "identifier": function() { return /* binding */ identifier; },
/* harmony export */   "length": function() { return /* binding */ length; },
/* harmony export */   "line": function() { return /* binding */ line; },
/* harmony export */   "next": function() { return /* binding */ next; },
/* harmony export */   "node": function() { return /* binding */ node; },
/* harmony export */   "peek": function() { return /* binding */ peek; },
/* harmony export */   "position": function() { return /* binding */ position; },
/* harmony export */   "prev": function() { return /* binding */ prev; },
/* harmony export */   "slice": function() { return /* binding */ slice; },
/* harmony export */   "token": function() { return /* binding */ token; },
/* harmony export */   "tokenize": function() { return /* binding */ tokenize; },
/* harmony export */   "tokenizer": function() { return /* binding */ tokenizer; },
/* harmony export */   "whitespace": function() { return /* binding */ whitespace; }
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/stylis/src/Utility.js":
/*!********************************************!*\
  !*** ./node_modules/stylis/src/Utility.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": function() { return /* binding */ abs; },
/* harmony export */   "append": function() { return /* binding */ append; },
/* harmony export */   "assign": function() { return /* binding */ assign; },
/* harmony export */   "charat": function() { return /* binding */ charat; },
/* harmony export */   "combine": function() { return /* binding */ combine; },
/* harmony export */   "from": function() { return /* binding */ from; },
/* harmony export */   "hash": function() { return /* binding */ hash; },
/* harmony export */   "indexof": function() { return /* binding */ indexof; },
/* harmony export */   "match": function() { return /* binding */ match; },
/* harmony export */   "replace": function() { return /* binding */ replace; },
/* harmony export */   "sizeof": function() { return /* binding */ sizeof; },
/* harmony export */   "strlen": function() { return /* binding */ strlen; },
/* harmony export */   "substr": function() { return /* binding */ substr; },
/* harmony export */   "trim": function() { return /* binding */ trim; }
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ }),

/***/ "./public/lineicons-free-basic/icon-font/unicodesMap.json":
/*!****************************************************************!*\
  !*** ./public/lineicons-free-basic/icon-font/unicodesMap.json ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"lni-500px":59907,"lni-add-files":59905,"lni-adobe":59910,"lni-agenda":59906,"lni-airbnb":59911,"lni-alarm-clock":59912,"lni-alarm":59908,"lni-amazon-original":59909,"lni-amazon-pay":59913,"lni-amazon":59914,"lni-ambulance":59915,"lni-amex":59916,"lni-anchor":59917,"lni-android-original":59918,"lni-android":59919,"lni-angellist":59920,"lni-angle-double-down":59921,"lni-angle-double-left":59922,"lni-angle-double-right":59923,"lni-angle-double-up":59924,"lni-angular":59925,"lni-apartment":59926,"lni-app-store":59927,"lni-apple-music":59928,"lni-apple-pay":59929,"lni-apple":59930,"lni-archive":59935,"lni-arrow-down-circle":59931,"lni-arrow-down":59932,"lni-arrow-left-circle":59933,"lni-arrow-left":59934,"lni-arrow-right-circle":59936,"lni-arrow-right":59937,"lni-arrow-top-left":59938,"lni-arrow-top-right":59939,"lni-arrow-up-circle":59940,"lni-arrow-up":59941,"lni-arrows-horizontal":59942,"lni-arrows-vertical":59943,"lni-atlassian":59944,"lni-aws":59945,"lni-azure":59946,"lni-backward":59947,"lni-baloon":59948,"lni-ban":59949,"lni-bar-chart":59950,"lni-basketball":59951,"lni-behance-original":59952,"lni-behance":59953,"lni-bi-cycle":59954,"lni-bitbucket":59955,"lni-bitcoin":59956,"lni-blackboard":59957,"lni-blogger":59958,"lni-bluetooth-original":59959,"lni-bluetooth":59960,"lni-bold":59961,"lni-bolt-alt":59962,"lni-bolt":59968,"lni-book":59963,"lni-bookmark-alt":59964,"lni-bookmark":59965,"lni-bootstrap":59966,"lni-bricks":59967,"lni-bridge":59969,"lni-briefcase":59970,"lni-brush-alt":59971,"lni-brush":59972,"lni-btc":59973,"lni-bubble":59974,"lni-bug":59975,"lni-bulb":59976,"lni-bullhorn":59977,"lni-burger":59978,"lni-bus":59979,"lni-cake":59980,"lni-calculator":59981,"lni-calendar":59982,"lni-camera":59983,"lni-candy-cane":59984,"lni-candy":59985,"lni-capsule":59986,"lni-car-alt":59987,"lni-car":59988,"lni-caravan":59989,"lni-cart-full":59990,"lni-cart":59991,"lni-certificate":59992,"lni-check-box":59993,"lni-checkmark-circle":59994,"lni-checkmark":59995,"lni-chef-hat":59996,"lni-chevron-down-circle":59997,"lni-chevron-down":59998,"lni-chevron-left-circle":59999,"lni-chevron-left":60000,"lni-chevron-right-circle":60001,"lni-chevron-right":60002,"lni-chevron-up-circle":60003,"lni-chevron-up":60004,"lni-chrome":60005,"lni-chromecast":60006,"lni-circle-minus":60007,"lni-circle-plus":60008,"lni-clipboard":60009,"lni-close":60010,"lni-cloud-check":60011,"lni-cloud-download":60012,"lni-cloud-network":60013,"lni-cloud-sync":60014,"lni-cloud-upload":60015,"lni-cloud":60016,"lni-cloudflare":60017,"lni-cloudy-sun":60018,"lni-code-alt":60019,"lni-code":60020,"lni-codepen":60021,"lni-coffee-cup":60022,"lni-cog":60023,"lni-cogs":60024,"lni-coin":60025,"lni-comments-alt":60026,"lni-comments-reply":60027,"lni-comments":60028,"lni-compass":60029,"lni-connectdevelop":60030,"lni-construction-hammer":60031,"lni-construction":60032,"lni-consulting":60033,"lni-control-panel":60034,"lni-cool":60035,"lni-cpanel":60036,"lni-creative-commons":60037,"lni-credit-cards":60038,"lni-crop":60039,"lni-cross-circle":60040,"lni-crown":60041,"lni-css3":60042,"lni-cup":60043,"lni-customer":60044,"lni-cut":60045,"lni-dashboard":60046,"lni-database":60047,"lni-delivery":60048,"lni-dev":60049,"lni-diamond-alt":60050,"lni-diamond":60051,"lni-digitalocean":60052,"lni-diners-club":60053,"lni-dinner":60054,"lni-direction-alt":60055,"lni-direction-ltr":60056,"lni-direction-rtl":60057,"lni-direction":60058,"lni-discord":60059,"lni-discover":60060,"lni-display-alt":60061,"lni-display":60062,"lni-docker":60063,"lni-dollar":60064,"lni-domain":60065,"lni-download":60066,"lni-dribbble":60067,"lni-drop":60068,"lni-dropbox-original":60069,"lni-dropbox":60070,"lni-drupal-original":60071,"lni-drupal":60072,"lni-dumbbell":60073,"lni-edge":60074,"lni-empty-file":60075,"lni-enter":60076,"lni-envato":60077,"lni-envelope":60078,"lni-eraser":60079,"lni-euro":60080,"lni-exit-down":60081,"lni-exit-up":60082,"lni-exit":60083,"lni-eye":60084,"lni-facebook-filled":60085,"lni-facebook-messenger":60086,"lni-facebook-original":60087,"lni-facebook-oval":60088,"lni-facebook":60089,"lni-figma":60090,"lni-files":60091,"lni-firefox-original":60092,"lni-firefox":60093,"lni-fireworks":60094,"lni-first-aid":60095,"lni-flag-alt":60096,"lni-flag":60097,"lni-flags":60098,"lni-flickr":60099,"lni-flower":60100,"lni-folder":60101,"lni-forward":60102,"lni-frame-expand":60103,"lni-fresh-juice":60104,"lni-friendly":60105,"lni-full-screen":60106,"lni-funnel":60107,"lni-gallery":60108,"lni-game":60109,"lni-gatsby":60110,"lni-gift":60111,"lni-git":60112,"lni-github-original":60113,"lni-github":60114,"lni-goodreads":60115,"lni-google-drive":60116,"lni-google-pay":60117,"lni-google-wallet":60118,"lni-google":60119,"lni-graduation":60120,"lni-graph":60121,"lni-grid-alt":60122,"lni-grid":60123,"lni-grow":60124,"lni-hacker-news":60125,"lni-hammer":60126,"lni-hand":60127,"lni-handshake":60128,"lni-happy":60129,"lni-harddrive":60130,"lni-headphone-alt":60131,"lni-headphone":60132,"lni-heart-filled":60133,"lni-heart-monitor":60134,"lni-heart":60135,"lni-helicopter":60136,"lni-helmet":60137,"lni-help":60138,"lni-highlight-alt":60139,"lni-highlight":60140,"lni-home":60141,"lni-hospital":60142,"lni-hourglass":60143,"lni-html5":60144,"lni-image":60145,"lni-imdb":60146,"lni-inbox":60147,"lni-indent-decrease":60148,"lni-indent-increase":60149,"lni-infinite":60150,"lni-information":60151,"lni-instagram-filled":60152,"lni-instagram-original":60153,"lni-instagram":60154,"lni-invention":60155,"lni-invest-monitor":60156,"lni-investment":60157,"lni-island":60158,"lni-italic":60159,"lni-java":60160,"lni-javascript":60161,"lni-jcb":60162,"lni-joomla-original":60163,"lni-joomla":60164,"lni-jsfiddle":60165,"lni-juice":60166,"lni-key":60167,"lni-keyboard":60168,"lni-keyword-research":60169,"lni-laptop-phone":60170,"lni-laptop":60171,"lni-laravel":60172,"lni-layers":60173,"lni-layout":60174,"lni-leaf":60175,"lni-library":60176,"lni-license":60177,"lni-lifering":60178,"lni-line-dashed":60179,"lni-line-dotted":60180,"lni-line-double":60181,"lni-line-spacing":60182,"lni-line":60183,"lni-lineicons-alt":60184,"lni-lineicons":60185,"lni-link":60186,"lni-linkedin-original":60187,"lni-linkedin":60188,"lni-list":60189,"lni-lock-alt":60190,"lni-lock":60191,"lni-magento":60192,"lni-magnet":60193,"lni-magnifier":60194,"lni-mailchimp":60195,"lni-map-marker":60196,"lni-map":60197,"lni-markdown":60198,"lni-mashroom":60199,"lni-mastercard":60200,"lni-medium":60201,"lni-menu":60202,"lni-mic":60203,"lni-microphone":60204,"lni-microscope":60205,"lni-microsoft-edge":60206,"lni-microsoft":60207,"lni-minus":60208,"lni-mobile":60209,"lni-money-location":60210,"lni-money-protection":60211,"lni-more-alt":60212,"lni-more":60213,"lni-mouse":60214,"lni-move":60215,"lni-music":60216,"lni-netlify":60217,"lni-network":60218,"lni-night":60219,"lni-nodejs-alt":60220,"lni-nodejs":60221,"lni-notepad":60222,"lni-npm":60223,"lni-offer":60224,"lni-opera":60225,"lni-package":60226,"lni-page-break":60227,"lni-pagination":60228,"lni-paint-bucket":60229,"lni-paint-roller":60230,"lni-pallet":60231,"lni-paperclip":60232,"lni-patreon":60233,"lni-pause":60234,"lni-paypal-original":60235,"lni-paypal":60236,"lni-pencil-alt":60237,"lni-pencil":60238,"lni-phone-set":60239,"lni-phone":60240,"lni-php":60241,"lni-pie-chart":60242,"lni-pilcrow":60243,"lni-pin":60244,"lni-pinterest":60245,"lni-pizza":60246,"lni-plane":60247,"lni-play-store":60248,"lni-play":60249,"lni-playstation":60250,"lni-plug":60251,"lni-plus":60252,"lni-pointer-down":60253,"lni-pointer-left":60254,"lni-pointer-right":60255,"lni-pointer-top":60256,"lni-pointer":60257,"lni-popup":60258,"lni-postcard":60259,"lni-pound":60260,"lni-power-switch":60261,"lni-printer":60262,"lni-producthunt":60263,"lni-protection":60264,"lni-pulse":60265,"lni-pyramids":60266,"lni-python":60267,"lni-question-circle":60268,"lni-quora":60269,"lni-quotation":60270,"lni-radio-button":60271,"lni-rain":60272,"lni-react":60275,"lni-reddit":60273,"lni-reload":60274,"lni-remove-file":60276,"lni-reply":60277,"lni-restaurant":60278,"lni-revenue":60279,"lni-road":60280,"lni-rocket":60281,"lni-rss-feed":60282,"lni-ruler-alt":60283,"lni-ruler-pencil":60284,"lni-ruler":60285,"lni-rupee":60286,"lni-sad":60287,"lni-save":60288,"lni-school-bench-alt":60289,"lni-school-bench":60290,"lni-scooter":60291,"lni-scroll-down":60292,"lni-search-alt":60293,"lni-search":60294,"lni-select":60295,"lni-seo":60296,"lni-service":60297,"lni-share-alt-1":60298,"lni-share-alt":60299,"lni-share":60300,"lni-shield":60301,"lni-shift-left":60302,"lni-shift-right":60303,"lni-ship":60304,"lni-shopify":60305,"lni-shopping-basket":60306,"lni-shortcode":60307,"lni-shovel":60308,"lni-shuffle":60309,"lni-signal":60310,"lni-sketch":60311,"lni-skipping-rope":60312,"lni-skype":60313,"lni-slack-line":60314,"lni-slack":60315,"lni-slice":60316,"lni-slideshare":60317,"lni-slim":60318,"lni-smile":60319,"lni-snapchat":60320,"lni-sort-alpha-asc":60321,"lni-sort-amount-asc":60322,"lni-sort-amount-dsc":60323,"lni-soundcloud-original":60324,"lni-soundcloud":60325,"lni-speechless":60326,"lni-spellcheck":60327,"lni-spinner-arrow":60328,"lni-spinner-solid":60329,"lni-spinner":60330,"lni-spotify-original":60331,"lni-spotify":60332,"lni-spray":60333,"lni-sprout":60334,"lni-squarespace":60335,"lni-stackoverflow":60336,"lni-stamp":60337,"lni-star-empty":60338,"lni-star-filled":60339,"lni-star-half":60340,"lni-star":60341,"lni-stats-down":60342,"lni-stats-up":60343,"lni-steam":60344,"lni-sthethoscope":60345,"lni-stop":60346,"lni-strikethrough":60347,"lni-stripe":60348,"lni-stumbleupon":60349,"lni-sun":60350,"lni-support":60351,"lni-surf-board":60352,"lni-suspect":60353,"lni-swift":60354,"lni-syringe":60355,"lni-tab":60356,"lni-tag":60357,"lni-target-customer":60358,"lni-target-revenue":60359,"lni-target":60360,"lni-taxi":60361,"lni-teabag":60362,"lni-telegram-original":60363,"lni-telegram":60364,"lni-text-align-center":60365,"lni-text-align-justify":60366,"lni-text-align-left":60367,"lni-text-align-right":60368,"lni-text-format-remove":60372,"lni-text-format":60369,"lni-thought":60370,"lni-thumbs-down":60371,"lni-thumbs-up":60373,"lni-thunder-alt":60374,"lni-thunder":60375,"lni-ticket-alt":60376,"lni-ticket":60377,"lni-tiktok":60378,"lni-timer":60379,"lni-tounge":60380,"lni-train-alt":60381,"lni-train":60382,"lni-trash-can":60383,"lni-travel":60384,"lni-tree":60385,"lni-trees":60386,"lni-trello":60387,"lni-trowel":60388,"lni-tshirt":60389,"lni-tumblr":60390,"lni-twitch":60391,"lni-twitter-filled":60392,"lni-twitter-original":60393,"lni-twitter":60394,"lni-ubuntu":60395,"lni-underline":60396,"lni-unlink":60397,"lni-unlock":60398,"lni-unsplash":60399,"lni-upload":60400,"lni-user":60401,"lni-users":60406,"lni-ux":60402,"lni-vector":60403,"lni-video":60404,"lni-vimeo":60405,"lni-visa":60407,"lni-vk":60408,"lni-volume-high":60409,"lni-volume-low":60410,"lni-volume-medium":60411,"lni-volume-mute":60412,"lni-volume":60413,"lni-wallet":60414,"lni-warning":60415,"lni-website-alt":60416,"lni-website":60417,"lni-wechat":60418,"lni-weight":60419,"lni-whatsapp":60420,"lni-wheelbarrow":60421,"lni-wheelchair":60422,"lni-windows":60423,"lni-wordpress-filled":60424,"lni-wordpress":60425,"lni-world-alt":60426,"lni-world":60428,"lni-write":60427,"lni-xbox":60429,"lni-yahoo":60430,"lni-ycombinator":60431,"lni-yen":60432,"lni-youtube":60435,"lni-zip":60433,"lni-zoom-in":60434,"lni-zoom-out":60436}');

/***/ }),

/***/ "./src/block-faq-child/block.json":
/*!****************************************!*\
  !*** ./src/block-faq-child/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wcb/faq-child","version":"0.1.0","title":"FAQ child","category":"wcb-blocks","usesContext":["wcb/faq_icon","wcb/faq_general"],"parent":["wcb/faq"],"icon":"heart","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false},"textdomain":"wcb-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"block-faq-child/index": 0,
/******/ 			"block-faq-child/style-index": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkwoostify_blocks"] = self["webpackChunkwoostify_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-faq-child/style-index"], function() { return __webpack_require__("./src/block-faq-child/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
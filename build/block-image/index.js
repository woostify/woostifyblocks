/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheProvider": function() { return /* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.C; },
/* harmony export */   "ClassNames": function() { return /* binding */ ClassNames; },
/* harmony export */   "Global": function() { return /* binding */ Global; },
/* harmony export */   "ThemeContext": function() { return /* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a; },
/* harmony export */   "__unsafe_useEmotionCache": function() { return /* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._; },
/* harmony export */   "createElement": function() { return /* binding */ jsx; },
/* harmony export */   "css": function() { return /* binding */ css; },
/* harmony export */   "jsx": function() { return /* binding */ jsx; },
/* harmony export */   "keyframes": function() { return /* binding */ keyframes; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.u; },
/* harmony export */   "withEmotionCache": function() { return /* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.b; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion-element-6a883da9.browser.esm.js */ "./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/use-insertion-effect-with-fallbacks */ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");












var pkg = {
	name: "@emotion/react",
	version: "11.10.5",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				worker: "./dist/emotion-react.worker.esm.js",
				browser: "./dist/emotion-react.browser.esm.js",
				"default": "./dist/emotion-react.esm.js"
			},
			"default": "./dist/emotion-react.cjs.js"
		},
		"./jsx-runtime": {
			module: {
				worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
				browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
			},
			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
		},
		"./_isolated-hnrs": {
			module: {
				worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
				browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
			},
			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
		},
		"./jsx-dev-runtime": {
			module: {
				worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
				browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
			},
			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
		},
		"./package.json": "./package.json",
		"./types/css-prop": "./types/css-prop.d.ts",
		"./macro": "./macro.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.18.3",
		"@emotion/babel-plugin": "^11.10.5",
		"@emotion/cache": "^11.10.5",
		"@emotion/serialize": "^1.1.1",
		"@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
		"@emotion/utils": "^1.2.0",
		"@emotion/weak-memoize": "^0.3.0",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.18.5",
		"@definitelytyped/dtslint": "0.0.112",
		"@emotion/css": "11.10.5",
		"@emotion/css-prettifier": "1.1.1",
		"@emotion/server": "11.10.0",
		"@emotion/styled": "11.10.5",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^4.5.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact",
		exports: {
			envConditions: [
				"browser",
				"worker"
			],
			extra: {
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": "./macro.js"
			}
		}
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.h.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.E;
  createElementArgArray[1] = (0,_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)([styles], undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_8__.useInsertionEffectWithLayoutFallback)(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_8__.useInsertionEffectWithLayoutFallback)(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (true) {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if ( true && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  var rules = (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_8__.useInsertionEffectAlwaysWithSyncFallback)(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      var res = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serializedArr[i], false);
    }
  });

  return null;
};

var ClassNames = /* #__PURE__ */(0,_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.registerStyles)(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

if (true) {
  ClassNames.displayName = 'EmotionClassNames';
}

if (true) {
  var isBrowser = "object" !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked

  var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';

  if (isBrowser && !isTestEnv) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = // $FlowIgnore
    typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : __webpack_require__.g;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}




/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/@wordpress/icons/build-module/library/caption.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/caption.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const caption = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6 5.5h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4 10h2v-1.5H8V16Zm5 0h-2v-1.5h2V16Zm1 0h2v-1.5h-2V16Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (caption);
//# sourceMappingURL=caption.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/crop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/crop.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const crop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.5 7.8v7H18v-7c0-1-.8-1.8-1.8-1.8h-7v1.5h7c.2 0 .3.1.3.3zm-8.7 8.7c-.1 0-.2-.1-.2-.2V2H6v4H2v1.5h4v8.8c0 1 .8 1.8 1.8 1.8h8.8v4H18v-4h4v-1.5H7.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (crop);
//# sourceMappingURL=crop.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-capitalize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-capitalize.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatCapitalize = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatCapitalize);
//# sourceMappingURL=format-capitalize.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-lowercase.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-lowercase.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatLowercase = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatLowercase);
//# sourceMappingURL=format-lowercase.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatStrikethrough = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatStrikethrough);
//# sourceMappingURL=format-strikethrough.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-underline.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-underline.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatUnderline = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatUnderline);
//# sourceMappingURL=format-underline.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-uppercase.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-uppercase.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatUppercase = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatUppercase);
//# sourceMappingURL=format-uppercase.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/image.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/image.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (image);
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/upload.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/upload.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const upload = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (upload);
//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "./src/________.ts":
/*!*************************!*\
  !*** ./src/________.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEMO_WCB_GLOBAL_VARIABLES": function() { return /* binding */ DEMO_WCB_GLOBAL_VARIABLES; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

const DEMO_WCB_GLOBAL_VARIABLES = window.wcbGlobalVariables || {
  media__desktopMinWidth: "1024px",
  media__tabletMinWidth: "768px",
  media_tablet: "768px",
  media_desktop: "1024px",
  reCAPTCHA_site_key: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
  reCAPTCHA_secret_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
  defaultContentWidth: "1140px"
};

// ----------------
/* harmony default export */ __webpack_exports__["default"] = (null);

/***/ }),

/***/ "./src/block-container/getAdvanveStyles.ts":
/*!*************************************************!*\
  !*** ./src/block-container/getAdvanveStyles.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAdvanveDivWrapStyles": function() { return /* binding */ getAdvanveDivWrapStyles; }
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");


const getAdvanveDivWrapStyles = _ref => {
  let {
    advance_zIndex,
    advance_responsiveCondition,
    className,
    defaultDisplay
  } = _ref;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  //
  const zIndexDesktop = advance_zIndex.Desktop;
  const zIndexTablet = advance_zIndex.Tablet || zIndexDesktop;
  const zIndexMobile = advance_zIndex.Mobile || zIndexTablet;
  //
  const {
    isHiddenOnDesktop,
    isHiddenOnMobile,
    isHiddenOnTablet
  } = advance_responsiveCondition;
  return _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
		${className} {
			display: ${isHiddenOnMobile ? "none" : defaultDisplay};
			z-index: ${zIndexMobile};
			@media (min-width: ${media_tablet}) {
				z-index: ${zIndexTablet};
				display: ${isHiddenOnTablet ? "none" : defaultDisplay};
			}
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				display: ${isHiddenOnDesktop ? "none" : defaultDisplay};
			}
		}
	`;
};

/***/ }),

/***/ "./src/block-heading/WcbHeadingPanelContent.tsx":
/*!******************************************************!*\
  !*** ./src/block-heading/WcbHeadingPanelContent.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCB_HEADING_PANEL_CONTENT_DEMO": function() { return /* binding */ WCB_HEADING_PANEL_CONTENT_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_controls_MyHeadingTagControl_MyHeadingTagControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyHeadingTagControl/MyHeadingTagControl */ "./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx");
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");
/* harmony import */ var _components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyTextAlignControl/MyTextAlignControl */ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");








const WCB_HEADING_PANEL_CONTENT_DEMO = {
  textAlignment: {
    Desktop: "left"
  },
  headingTag: "h2",
  showHeading: true,
  showSeparator: false,
  showSubHeading: false,
  separatorPosition: "middle"
};
const PLANS_SEPARATOR_POSTION = [{
  name: "top",
  icon: "Top"
}, {
  name: "middle",
  icon: "Middle"
}, {
  name: "bottom",
  icon: "Bottom"
}];
const WcbHeadingPanelContent = _ref => {
  let {
    panelContentData = WCB_HEADING_PANEL_CONTENT_DEMO,
    setAttr__panelContentData,
    onToggle,
    opened,
    initialOpen
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__["default"])() || "Desktop";
  const {
    textAlignment,
    headingTag,
    showHeading,
    showSeparator,
    showSubHeading,
    separatorPosition
  } = panelContentData;
  const TEXT_ALIGNMENT = textAlignment[deviceType] || textAlignment.Tablet || textAlignment.Desktop;

  //
  const handleChangeTextAlignment = selected => {
    setAttr__panelContentData({
      ...panelContentData,
      textAlignment: {
        ...textAlignment,
        [deviceType]: selected
      }
    });
  };
  const handleChangeTag = selected => {
    setAttr__panelContentData({
      ...panelContentData,
      headingTag: selected
    });
  };
  const toggleHeading = e => {
    setAttr__panelContentData({
      ...panelContentData,
      showHeading: e
    });
  };
  const toggleSubHeading = e => {
    setAttr__panelContentData({
      ...panelContentData,
      showSubHeading: e
    });
  };
  const toggleSeparator = e => {
    setAttr__panelContentData({
      ...panelContentData,
      showSeparator: e
    });
  };
  //

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    className: "space-y-5",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Content", "wcb"),
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    textAlignment: TEXT_ALIGNMENT,
    onChange: handleChangeTextAlignment
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyHeadingTagControl_MyHeadingTagControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tag: headingTag,
    onChange: handleChangeTag
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show Heading", "wcb"),
    checked: showHeading,
    onChange: toggleHeading
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show Sub-heading", "wcb"),
    checked: showSubHeading,
    onChange: toggleSubHeading
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show Separator", "wcb"),
    checked: showSeparator,
    onChange: toggleSeparator
  }), showSeparator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    plans: PLANS_SEPARATOR_POSTION,
    value: separatorPosition,
    hasResponsive: false,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Separator position", "wcb"),
    onChange: value => {
      setAttr__panelContentData({
        ...panelContentData,
        separatorPosition: value
      });
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (WcbHeadingPanelContent);

/***/ }),

/***/ "./src/block-heading/WcbHeadingPanelDimension.tsx":
/*!********************************************************!*\
  !*** ./src/block-heading/WcbHeadingPanelDimension.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCB_HEADING_PANEL_DIMENSION_DEMO": function() { return /* binding */ WCB_HEADING_PANEL_DIMENSION_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsNoGapControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/types */ "./src/components/controls/MyDimensionsControl/types.ts");






const WCB_HEADING_PANEL_DIMENSION_DEMO = {
  dimension: {
    ..._components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
    padding: {
      Desktop: {
        bottom: "0",
        top: "0",
        left: "0",
        right: "0"
      }
    }
  }
};
const WcbHeadingPanelDimension = _ref => {
  let {
    panelData = WCB_HEADING_PANEL_DIMENSION_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened
  } = _ref;
  const {
    dimension
  } = panelData;

  //
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dimension", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dimensionControl: dimension,
    setAttrs__dimensions: dimension => setAttr__({
      dimension
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (WcbHeadingPanelDimension);

/***/ }),

/***/ "./src/block-heading/WcbHeadingPanelSeparator.tsx":
/*!********************************************************!*\
  !*** ./src/block-heading/WcbHeadingPanelSeparator.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCB_HEADING_PANEL_SEPARATOR_DEMO": function() { return /* binding */ WCB_HEADING_PANEL_SEPARATOR_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");









const WCB_HEADING_PANEL_SEPARATOR_DEMO = {
  border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_BORDER_MAIN_SINGLE_SIDE,
  width: {
    Desktop: "10%"
  },
  marginBottom: {
    Desktop: "1rem"
  }
};
const WcbHeadingPanelSeparator = _ref => {
  let {
    panelSeparator = WCB_HEADING_PANEL_SEPARATOR_DEMO,
    setAttr__panelSeparator,
    initialOpen,
    onToggle,
    opened
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  const {
    border,
    width: widthProps,
    marginBottom
  } = panelSeparator;
  const {
    currentDeviceValue: CUSTOM_WIDTH
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(widthProps, deviceType);
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(marginBottom, deviceType);
  const renderCustomWidth = () => {
    const units = [{
      value: "px",
      label: "px",
      default: 100
    }, {
      value: "%",
      label: "%",
      default: 10
    }, {
      value: "vw",
      label: "vw",
      default: 10
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center justify-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "flex-shrink-0",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Custom Width", "wcb")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      className: "flex-grow ml-3",
      units: units,
      value: CUSTOM_WIDTH,
      onChange: value => {
        setAttr__panelSeparator({
          ...panelSeparator,
          width: {
            ...widthProps,
            [deviceType]: value
          }
        });
      }
    }));
  };
  //
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, renderCustomWidth(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border styles"),
    onChange: border => {
      setAttr__panelSeparator({
        ...panelSeparator,
        border
      });
    },
    withSlider: true,
    value: border
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: value => {
      setAttr__panelSeparator({
        ...panelSeparator,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "wcb"),
    hasResponsive: true
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (WcbHeadingPanelSeparator);

/***/ }),

/***/ "./src/block-image/Edit.tsx":
/*!**********************************!*\
  !*** ./src/block-image/Edit.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExternalImage": function() { return /* binding */ isExternalImage; },
/* harmony export */   "pickRelevantMediaFiles": function() { return /* binding */ pickRelevantMediaFiles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/image.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _GlobalCss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GlobalCss */ "./src/block-image/GlobalCss.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor.scss */ "./src/block-image/editor.scss");
/* harmony import */ var _components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MyCacheProvider */ "./src/components/MyCacheProvider.tsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Image */ "./src/block-image/Image.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants */ "./src/block-image/constants.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _block_heading_WcbHeadingPanelContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../block-heading/WcbHeadingPanelContent */ "./src/block-heading/WcbHeadingPanelContent.tsx");
/* harmony import */ var _block_heading_WcbHeadingPanelDimension__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../block-heading/WcbHeadingPanelDimension */ "./src/block-heading/WcbHeadingPanelDimension.tsx");
/* harmony import */ var _block_heading_WcbHeadingPanelSeparator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../block-heading/WcbHeadingPanelSeparator */ "./src/block-heading/WcbHeadingPanelSeparator.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");










// @ts-ignore















// Much of this description is duplicated from MediaPlaceholder.
const placeholder = content => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
    className: "block-editor-media-placeholder"
    // @ts-ignore
    ,
    withIllustration: true,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)("Image"),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)("Upload an image file, pick one from your media library, or add one with a URL.")
  }, content);
};
const pickRelevantMediaFiles = (image, size) => {
  const imageProps = Object.fromEntries(Object.entries(image !== null && image !== void 0 ? image : {}).filter(_ref => {
    let [key] = _ref;
    return ["alt", "id", "link", "caption"].includes(key);
  }));
  imageProps.url = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.get)(image, ["sizes", size, "url"]) || (0,lodash__WEBPACK_IMPORTED_MODULE_3__.get)(image, ["media_details", "sizes", size, "source_url"]) || image.url;
  return imageProps;
};
const isTemporaryImage = (id, url) => !id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__.isBlobURL)(url);
const isExternalImage = (id, url) => url && !id && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__.isBlobURL)(url);
function hasDefaultSize(image, defaultSize) {
  var _image$sizes$defaultS, _image$media_details$;
  return "url" in ((_image$sizes$defaultS = image?.sizes?.[defaultSize]) !== null && _image$sizes$defaultS !== void 0 ? _image$sizes$defaultS : {}) || "source_url" in ((_image$media_details$ = image?.media_details?.sizes?.[defaultSize]) !== null && _image$media_details$ !== void 0 ? _image$media_details$ : {});
}
const Edit = props => {
  const {
    attributes,
    setAttributes,
    isSelected,
    className,
    insertBlocksAfter,
    onReplace,
    context,
    clientId
  } = props;
  //
  const {
    url = "",
    alt,
    caption,
    id,
    advance_responsiveCondition,
    advance_zIndex,
    href,
    linkClass,
    linkDestination,
    linkTarget,
    rel,
    title,
    uniqueId,
    general_settings,
    style_image,
    style_overlay,
    style_caption
  } = attributes;
  const [temporaryURL, setTemporaryURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_17__["default"])() || "Desktop";
  const altRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    // @ts-ignore
    altRef.current = alt;
  }, [alt]);
  const captionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    // @ts-ignore
    captionRef.current = caption;
  }, [caption]);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    imageDefaultSize,
    mediaUpload,
    isContentLocked
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    // @ts-ignore
    const {
      getSettings,
      __unstableGetContentLockingParent
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);
    const settings = getSettings();
    return {
      imageDefaultSize: settings.imageDefaultSize,
      mediaUpload: settings.mediaUpload,
      isContentLocked: !!__unstableGetContentLockingParent(clientId)
    };
  }, []);
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__.store);
  function onUploadError(message) {
    createErrorNotice(message, {
      type: "snackbar"
    });
    setAttributes({
      id: undefined,
      url: undefined,
      // @ts-ignore
      src: undefined
    });
    setTemporaryURL(undefined);
  }
  function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        alt: undefined,
        id: undefined,
        title: undefined,
        caption: undefined
      });
      return;
    }
    if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__.isBlobURL)(media.url)) {
      setTemporaryURL(media.url);
      return;
    }
    setTemporaryURL(undefined);
    let mediaAttributes = pickRelevantMediaFiles(media, imageDefaultSize);

    // If a caption text was meanwhile written by the user,
    // make sure the text is not overwritten by empty captions.
    if (captionRef.current && !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.get)(mediaAttributes, ["caption"])) {
      const {
        caption: omittedCaption,
        ...restMediaAttributes
      } = mediaAttributes;
      mediaAttributes = restMediaAttributes;
    }
    let additionalAttributes;
    // Reset the dimension attributes if changing to a different image.
    if (!media.id || media.id !== id) {
      const siseSlugggg = hasDefaultSize(media, imageDefaultSize) ? imageDefaultSize : "full";
      additionalAttributes = {
        general_settings: {
          ...general_settings,
          width: {
            Desktop: undefined,
            Tablet: undefined,
            Mobile: undefined
          },
          height: {
            Desktop: undefined,
            Tablet: undefined,
            Mobile: undefined
          },
          // Fallback to size "full" if there's no default image size.
          // It means the image is smaller, and the block will use a full-size URL.
          sizeSlug: {
            Desktop: siseSlugggg,
            Tablet: siseSlugggg,
            Mobile: siseSlugggg
          }
        }
      };
    } else {
      // Keep the same url when selecting the same file, so "Image Size"
      // option is not changed.
      additionalAttributes = {
        url
      };
    }

    // Check if default link setting should be used.
    let linkDestination = attributes.linkDestination;
    if (!linkDestination) {
      // Use the WordPress option to determine the proper default.
      // The constants used in Gutenberg do not match WP options so a little more complicated than ideal.
      // TODO: fix this in a follow up PR, requires updating media-text and ui component.
      switch (window?.wp?.media?.view?.settings?.defaultProps?.link || _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_NONE) {
        case "file":
        case _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_MEDIA:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_MEDIA;
          break;
        case "post":
        case _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_ATTACHMENT:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_ATTACHMENT;
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_CUSTOM:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_CUSTOM;
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_NONE:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_NONE;
          break;
      }
    }

    // Check if the image is linked to it's media.
    let href;
    switch (linkDestination) {
      case _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_MEDIA:
        href = media.url;
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_15__.LINK_DESTINATION_ATTACHMENT:
        href = media.link;
        break;
    }
    mediaAttributes.href = href;
    setAttributes({
      ...mediaAttributes,
      ...additionalAttributes,
      linkDestination
    });
  }
  function onSelectURL(newURL) {
    if (newURL !== url) {
      setAttributes({
        url: newURL,
        id: undefined
      });
    }
  }
  function updateAlignment(nextAlign) {
    const extraUpdatedAttributes = ["wide", "full"].includes(nextAlign) ? {
      general_settings: {
        ...general_settings,
        width: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        height: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        alignment: {
          ...general_settings.alignment,
          [deviceType]: nextAlign
        }
      }
    } : {
      general_settings: {
        ...general_settings,
        alignment: {
          ...general_settings.alignment,
          [deviceType]: nextAlign
        }
      }
    };
    setAttributes({
      ...extraUpdatedAttributes
    });
  }
  let isTemp = isTemporaryImage(id, url);

  // Upload a temporary image on mount.
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    if (!isTemp) {
      return;
    }
    const file = (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__.getBlobByURL)(url);
    if (file) {
      mediaUpload({
        filesList: [file],
        onFileChange: _ref2 => {
          let [img] = _ref2;
          onSelectImage(img);
        },
        allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_15__.ALLOWED_MEDIA_TYPES,
        onError: message => {
          isTemp = false;
          onUploadError(message);
        }
      });
    }
  }, []);

  // If an image is temporary, revoke the Blob url when it is uploaded (and is
  // no longer temporary).
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    if (isTemp) {
      setTemporaryURL(url);
      return;
    }
    (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__.revokeBlobURL)(temporaryURL || "");
  }, [isTemp, url]);
  const isExternal = isExternalImage(id, url);
  const src = isExternal ? url : undefined;
  const mediaPreview = !!url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)("Edit image"),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)("Edit image"),
    className: "edit-image-preview",
    src: url
  }) : null;
  const {
    currentDeviceValue: align
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_16__["default"])(general_settings.alignment, deviceType);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
    [`align${align}`]: align,
    "is-transient": temporaryURL
    // "is-resized": !!width || !!height,
    // [`size-${sizeSlug}`]: sizeSlug,
  });

  const wrapBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)({
    ref,
    className: classes
  });
  const UNIQUE_ID = wrapBlockProps.id;
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    setAttributes({
      uniqueId: UNIQUE_ID
    });
  }, [UNIQUE_ID]);
  //
  //
  const WcbAttrsForSave = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)(() => {
    return {
      uniqueId,
      advance_responsiveCondition,
      advance_zIndex,
      general_settings,
      style_image,
      style_overlay,
      style_caption
    };
  }, [uniqueId, advance_responsiveCondition, advance_zIndex, general_settings, style_image, style_overlay, style_caption]);
  const renderOverlay = () => {
    const InitWcbBlockHeadingAttrs = {
      heading: "Title of content",
      subHeading: "Description of content",
      styles_separator: {
        ..._block_heading_WcbHeadingPanelSeparator__WEBPACK_IMPORTED_MODULE_20__.WCB_HEADING_PANEL_SEPARATOR_DEMO,
        width: {
          Desktop: "20%"
        },
        border: {
          ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_21__.DEFAULT_BORDER_MAIN_SINGLE_SIDE,
          color: "#334155"
        }
      },
      general_content: {
        ..._block_heading_WcbHeadingPanelContent__WEBPACK_IMPORTED_MODULE_18__.WCB_HEADING_PANEL_CONTENT_DEMO,
        textAlignment: {
          Desktop: "center"
        },
        showSeparator: true,
        showSubHeading: true,
        headingTag: "h3"
      },
      styles_dimensions: {
        ..._block_heading_WcbHeadingPanelDimension__WEBPACK_IMPORTED_MODULE_19__.WCB_HEADING_PANEL_DIMENSION_DEMO,
        dimension: {
          ..._block_heading_WcbHeadingPanelDimension__WEBPACK_IMPORTED_MODULE_19__.WCB_HEADING_PANEL_DIMENSION_DEMO.dimension,
          margin: {
            Desktop: {
              bottom: "1rem",
              top: "1rem",
              left: "1rem",
              right: "1rem"
            }
          }
        }
      }
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "wcb-image__overlay-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "wcb-image__overlay-bg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "wcb-image__overlay-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InnerBlocks, {
      allowedBlocks: [],
      template: [["wcb/heading", InitWcbBlockHeadingAttrs]]
    }))));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    uniqueKey: clientId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, wrapBlockProps, {
    className: `${wrapBlockProps?.className} wcb-image__wrap wcb-image__wrap--${general_settings.layout} ${UNIQUE_ID}`,
    "data-uniqueid": UNIQUE_ID
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_GlobalCss__WEBPACK_IMPORTED_MODULE_11__["default"], WcbAttrsForSave()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (temporaryURL || url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Image__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "wcb-image__image",
    temporaryURL: temporaryURL || "",
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected,
    insertBlocksAfter: insertBlocksAfter,
    onReplace: onReplace,
    onSelectImage: onSelectImage,
    onSelectURL: onSelectURL,
    onUploadError: onUploadError,
    containerRef: ref,
    context: context,
    clientId: clientId,
    isContentLocked: isContentLocked
  }), general_settings.layout === "overlay" && renderOverlay()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaPlaceholder, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockIcon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__["default"]
    }),
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError
    // @ts-ignore
    ,
    placeholder: placeholder,
    accept: "image/*",
    allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_15__.ALLOWED_MEDIA_TYPES,
    value: {
      id,
      src
    },
    mediaPreview: mediaPreview || undefined,
    disableMediaButtons: temporaryURL || url
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/block-image/GlobalCss.tsx":
/*!***************************************!*\
  !*** ./src/block-image/GlobalCss.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBorderRadiusStyles */ "./src/utils/getBorderRadiusStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBoxShadowStyles */ "./src/utils/getBoxShadowStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../________ */ "./src/________.ts");











const GlobalCss = attrs => {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_settings,
    style_caption,
    style_image,
    style_overlay
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_9__.DEMO_WCB_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
  const IMAGE_CLASSNAME = `${WRAP_CLASSNAME} img`;
  const CAPTION_CLASSNAME = `${WRAP_CLASSNAME} figcaption.wp-element-caption`;
  const OVERLAY_BG_CLASSNAME = `${WRAP_CLASSNAME} .wcb-image__overlay-bg`;
  const OVERLAY_CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-image__overlay-content`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return {
      [`${WRAP_CLASSNAME}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    };
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME,
      padding: style_image.padding
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-image__overlay-wrap`,
      padding: style_image.padding
    })]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: IMAGE_CLASSNAME,
      value: general_settings.width,
      prefix: "width",
      hasUnit: false,
      unit: "px"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: IMAGE_CLASSNAME,
      value: general_settings.height,
      prefix: "height",
      hasUnit: false,
      unit: "px"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: IMAGE_CLASSNAME,
      value: general_settings.objectFit,
      prefix: "objectFit"
    }),
    //
    (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: IMAGE_CLASSNAME,
      border: style_image.border,
      isWithRadius: true
    }), (0,_utils_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${OVERLAY_BG_CLASSNAME}`,
      radius: style_image.border.radius
    }), (0,_utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: IMAGE_CLASSNAME,
      boxShadow: style_image.boxShadow
    })]
  }), general_settings.layout === "overlay" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [{
      [OVERLAY_BG_CLASSNAME]: {
        justifyContent: general_settings.contentAlignment,
        backgroundColor: style_overlay.backgroundColor,
        ":hover": {
          backgroundColor: style_overlay.backgroundColorHover
        }
      }
    }]
  }) : null, general_settings.layout !== "overlay" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: CAPTION_CLASSNAME,
      value: general_settings.captionAlignment,
      prefix: "textAlign"
    }), (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_8__["default"])({
      className: CAPTION_CLASSNAME,
      typography: style_caption.typography
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: CAPTION_CLASSNAME,
      margin: style_caption.margin
    }), {
      [CAPTION_CLASSNAME]: {
        color: style_caption.textColor
      }
    }]
  }) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_2__.getAdvanveDivWrapStyles)({
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "block"
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default().memo(GlobalCss));

/***/ }),

/***/ "./src/block-image/Image.tsx":
/*!***********************************!*\
  !*** ./src/block-image/Image.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/caption.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/crop.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/upload.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _use_client_width__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./use-client-width */ "./src/block-image/use-client-width.ts");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Edit */ "./src/block-image/Edit.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants */ "./src/block-image/constants.ts");
/* harmony import */ var _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/HOCInspectorControls */ "./src/components/HOCInspectorControls.tsx");
/* harmony import */ var _hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/useSetBlockPanelInfo */ "./src/hooks/useSetBlockPanelInfo.ts");
/* harmony import */ var _components_AdvancePanelCommon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AdvancePanelCommon */ "./src/components/AdvancePanelCommon.tsx");
/* harmony import */ var _WcbImagePanelSettings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./WcbImagePanelSettings */ "./src/block-image/WcbImagePanelSettings.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _WcbImagePanel_StyleImage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./WcbImagePanel_StyleImage */ "./src/block-image/WcbImagePanel_StyleImage.tsx");
/* harmony import */ var _WcbImagePanel_StyleOverlay__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./WcbImagePanel_StyleOverlay */ "./src/block-image/WcbImagePanel_StyleOverlay.tsx");
/* harmony import */ var _WcbImagePanel_StyleCaption__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./WcbImagePanel_StyleCaption */ "./src/block-image/WcbImagePanel_StyleCaption.tsx");













// @ts-ignore














const Image = _ref => {
  let {
    temporaryURL,
    attributes,
    setAttributes,
    isSelected,
    insertBlocksAfter,
    onReplace,
    onSelectImage,
    onSelectURL,
    onUploadError,
    containerRef,
    context,
    clientId,
    isContentLocked
  } = _ref;
  const {
    url = "",
    alt,
    caption,
    id,
    href,
    rel,
    linkClass,
    linkDestination,
    title,
    linkTarget,
    advance_responsiveCondition,
    advance_zIndex,
    general_settings,
    uniqueId,
    style_image,
    style_overlay,
    style_caption
  } = attributes;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_20__["default"])() || "Desktop";
  const imageRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const prevCaption = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.usePrevious)(caption);
  const [showCaption, setShowCaption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(!!caption);
  const {
    allowResize = true
  } = context;
  const {
    currentDeviceValue: align = ""
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__["default"])(general_settings.alignment,
  // "Desktop"
  deviceType);
  const {
    image,
    multiImageSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    // @ts-ignore
    const {
      getMedia
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_12__.store);
    // @ts-ignore
    const {
      getMultiSelectedBlockClientIds,
      getBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);
    const multiSelectedClientIds = getMultiSelectedBlockClientIds();
    return {
      image: id && isSelected ? getMedia(id, {
        context: "view"
      }) : null,
      multiImageSelection: multiSelectedClientIds.length && multiSelectedClientIds.every(_clientId => getBlockName(_clientId) === "core/image")
    };
  }, [id, isSelected, clientId]);
  // @ts-ignore
  const {
    canInsertCover,
    imageEditing,
    imageSizes,
    maxWidth,
    mediaUpload
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    // @ts-ignore
    const {
      getBlockRootClientId,
      getSettings,
      canInsertBlockType
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);
    const rootClientId = getBlockRootClientId(clientId);
    const settings = Object.fromEntries(Object.entries(getSettings()).filter(_ref2 => {
      let [key] = _ref2;
      return ["imageEditing", "imageSizes", "maxWidth", "mediaUpload"].includes(key);
    }));
    return {
      ...settings,
      canInsertCover: canInsertBlockType("core/cover", rootClientId)
    };
  }, [clientId]);
  const {
    replaceBlocks,
    toggleSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    createErrorNotice,
    createSuccessNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_11__.store);
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useViewportMatch)("medium");
  const isWideAligned = ["wide", "full"].includes(align);
  // @ts-ignore
  const [{
    loadedNaturalWidth,
    loadedNaturalHeight
  }, setLoadedNaturalSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isEditingImage, setIsEditingImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [externalBlob, setExternalBlob] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const clientWidth = (0,_use_client_width__WEBPACK_IMPORTED_MODULE_13__["default"])(containerRef, [align]);
  const isResizable = allowResize && !isContentLocked && !(isWideAligned && isLargeViewport);
  const imageSizeOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(imageSizes.filter(_ref3 => {
    let {
      slug
    } = _ref3;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ["media_details", "sizes", slug, "source_url"]);
  }), _ref4 => {
    let {
      name,
      slug
    } = _ref4;
    return {
      value: slug,
      label: name
    };
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,_Edit__WEBPACK_IMPORTED_MODULE_14__.isExternalImage)(id, url) || !isSelected || externalBlob) {
      return;
    }
    window.fetch(url).then(response => response.blob())
    // @ts-ignore
    .then(blob => setExternalBlob(blob))
    // Do nothing, cannot upload.
    .catch(() => {});
  }, [id, url, isSelected, externalBlob]);

  // We need to show the caption when changes come from
  // history navigation(undo/redo).
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (caption && !prevCaption) {
      setShowCaption(true);
    }
  }, [caption, prevCaption]);

  // Focus the caption when we click to add one.
  const captionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(node => {
    if (node && !caption) {
      node.focus();
    }
  }, [caption]);
  const {
    naturalWidth,
    naturalHeight
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      naturalWidth: imageRef.current?.naturalWidth || loadedNaturalWidth || undefined,
      naturalHeight: imageRef.current?.naturalHeight || loadedNaturalHeight || undefined
    };
  }, [loadedNaturalWidth, loadedNaturalHeight, imageRef.current?.complete]);
  function onResizeStart() {
    toggleSelection(false);
  }
  function onResizeStop() {
    toggleSelection(true);
  }
  function onImageError() {
    // Check if there's an embed block that handles this URL, e.g., instagram URL.
    // See: https://github.com/WordPress/gutenberg/pull/11472
  }
  function onSetHref(props) {
    setAttributes(props);
  }
  function onSetTitle(value) {
    // This is the HTML title attribute, separate from the media object
    // title.
    setAttributes({
      title: value
    });
  }
  function updateAlt(newAlt) {
    setAttributes({
      alt: newAlt
    });
  }
  function updateImage(newSizeSlug) {
    const newUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ["media_details", "sizes", newSizeSlug, "source_url"]);
    if (!newUrl) {
      return null;
    }
    setAttributes({
      url: newUrl,
      general_settings: {
        ...general_settings,
        width: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        height: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        sizeSlug: {
          ...general_settings.sizeSlug,
          [deviceType]: newSizeSlug
        }
      }
    });
  }
  function uploadExternal() {
    mediaUpload({
      filesList: [externalBlob],
      onFileChange(_ref5) {
        let [img] = _ref5;
        onSelectImage(img);
        if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(img.url)) {
          return;
        }
        setExternalBlob(undefined);
        createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Image uploaded."), {
          type: "snackbar"
        });
      },
      allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_15__.ALLOWED_MEDIA_TYPES,
      onError(message) {
        createErrorNotice(message, {
          type: "snackbar"
        });
      }
    });
  }
  function updateAlignment(nextAlign) {
    const extraUpdatedAttributes = ["wide", "full"].includes(nextAlign) ? {
      general_settings: {
        ...general_settings,
        width: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        height: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        alignment: {
          ...general_settings.alignment,
          [deviceType]: nextAlign
        }
      }
    } : {
      general_settings: {
        ...general_settings,
        alignment: {
          ...general_settings.alignment,
          [deviceType]: nextAlign
        }
      }
    };
    setAttributes({
      ...extraUpdatedAttributes
    });
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSelected) {
      setIsEditingImage(false);
      if (!caption) {
        setShowCaption(false);
      }
    }
  }, [isSelected, caption]);
  const canEditImage = id && naturalWidth && naturalHeight && imageEditing;
  const allowCrop = !multiImageSelection && canEditImage && !isEditingImage;
  const {
    tabIsOpen,
    tabAdvancesIsPanelOpen,
    tabGeneralIsPanelOpen,
    tabStylesIsPanelOpen,
    handleTogglePanel
  } = (0,_hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_17__["default"])(uniqueId);

  //

  const renderTabBodyPanels = tab => {
    switch (tab.name) {
      case "General":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanelSettings__WEBPACK_IMPORTED_MODULE_19__["default"], {
          onToggle: () => handleTogglePanel("General", "General", true),
          initialOpen: tabGeneralIsPanelOpen === "General" || tabGeneralIsPanelOpen === "first",
          opened: tabGeneralIsPanelOpen === "General" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              general_settings: data
            });
          },
          panelData: general_settings
          //
          ,
          imageSizeOptions: imageSizeOptions,
          isResizable: isResizable,
          naturalHeight: naturalHeight,
          naturalWidth: naturalWidth,
          setAttributes: setAttributes,
          updateImage: updateImage,
          alt: alt,
          enableCaption: showCaption,
          toggleEnableCaption: checked => {
            setShowCaption(checked);
          }
        }));
      case "Styles":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanel_StyleImage__WEBPACK_IMPORTED_MODULE_22__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleImage", true),
          initialOpen: tabStylesIsPanelOpen === "_StyleImage" || tabStylesIsPanelOpen === "first",
          opened: tabStylesIsPanelOpen === "_StyleImage" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_image: data
            });
          },
          panelData: style_image
        }), general_settings.layout === "overlay" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanel_StyleOverlay__WEBPACK_IMPORTED_MODULE_23__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleOverlay"),
          initialOpen: tabStylesIsPanelOpen === "_StyleOverlay",
          opened: tabStylesIsPanelOpen === "_StyleOverlay" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_overlay: data
            });
          },
          panelData: style_overlay
        }), showCaption && general_settings.layout !== "overlay" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanel_StyleCaption__WEBPACK_IMPORTED_MODULE_24__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleCaption"),
          initialOpen: tabStylesIsPanelOpen === "_StyleCaption",
          opened: tabStylesIsPanelOpen === "_StyleCaption" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_caption: data
            });
          },
          panelData: style_caption
        }));
      case "Advances":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AdvancePanelCommon__WEBPACK_IMPORTED_MODULE_18__["default"], {
          advance_responsiveCondition: attributes.advance_responsiveCondition,
          advance_zIndex: attributes.advance_zIndex,
          handleTogglePanel: handleTogglePanel,
          setAttributes: setAttributes,
          tabAdvancesIsPanelOpen: tabAdvancesIsPanelOpen
        }));
      default:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null);
    }
  };
  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockControls, {
    group: "block"
  }, !isContentLocked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockAlignmentControl, {
    value: align,
    onChange: updateAlignment
  }), !isContentLocked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    onClick: () => {
      setShowCaption(!showCaption);
      if (showCaption && caption) {
        setAttributes({
          caption: undefined
        });
      }
    },
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_25__["default"],
    isPressed: showCaption,
    label: showCaption ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Remove caption") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Add caption")
  }), !multiImageSelection && !isEditingImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.__experimentalImageURLInputUI, {
    url: href || "",
    onChangeUrl: onSetHref,
    linkDestination: linkDestination,
    mediaUrl: image && image.source_url || url,
    mediaLink: image && image.link,
    linkTarget: linkTarget,
    linkClass: linkClass,
    rel: rel
  }), allowCrop && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    onClick: () => setIsEditingImage(true),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_26__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Crop")
  }), externalBlob && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    onClick: uploadExternal,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_27__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Upload external image")
  })), !multiImageSelection && !isEditingImage &&
  // @ts-ignore
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockControls, {
    group: "other"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaReplaceFlow, {
    mediaId: id,
    mediaURL: url,
    allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_15__.ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, {
    __experimentalGroup: "advanced"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Title attribute"),
    value: title || "",
    onChange: onSetTitle,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Describe the role of this image on the page."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ExternalLink, {
      href: "https://www.w3.org/TR/html52/dom.html#the-title-attribute"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("(Note: many devices and browsers do not display this text.)")))
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_16__["default"], {
    renderTabPanels: renderTabBodyPanels,
    uniqueId: uniqueId
  }));

  //
  const {
    currentDeviceValue: WIDTH
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__["default"])(general_settings.width, deviceType);
  const {
    currentDeviceValue: HEIGHT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__["default"])(general_settings.height, deviceType);
  const {
    currentDeviceValue: SIZE_SLUG
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__["default"])(general_settings.sizeSlug, deviceType);
  //

  const filename = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_9__.getFilename)(url);
  let defaultedAlt;
  if (alt) {
    defaultedAlt = alt;
  } else if (filename) {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.sprintf)( /* translators: %s: file name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("This image has an empty alt attribute; its file name is %s"), filename);
  } else {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("This image has an empty alt attribute");
  }
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.__experimentalUseBorderProps)(attributes);
  // @ts-ignore
  const isRounded = attributes.className?.includes("is-style-rounded");
  const hasCustomBorder = !!borderProps.className || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(borderProps.style);
  let img =
  // Disable reason: Image itself is not meant to be interactive, but
  // should direct focus to block.
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: temporaryURL || url,
    alt: defaultedAlt,
    onError: () => onImageError(),
    onLoad: event => {
      setLoadedNaturalSize({
        // @ts-ignore
        loadedNaturalWidth: event.target?.naturalWidth,
        // @ts-ignore
        loadedNaturalHeight: event.target?.naturalHeight
      });
    },
    ref: imageRef,
    className: borderProps.className,
    style: borderProps.style
  }), temporaryURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null))
  /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */;

  let imageWidthWithinContainer;
  let imageHeightWithinContainer;
  if (clientWidth && naturalWidth && naturalHeight) {
    const exceedMaxWidth = naturalWidth > clientWidth;
    const ratio = naturalHeight / naturalWidth;
    imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
    imageHeightWithinContainer = exceedMaxWidth ? clientWidth * ratio : naturalHeight;
  }
  if (canEditImage && isEditingImage) {
    img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.__experimentalImageEditor, {
      borderProps: isRounded ? undefined : borderProps,
      url: url,
      width: WIDTH,
      height: HEIGHT,
      clientWidth: clientWidth,
      naturalHeight: naturalHeight,
      naturalWidth: naturalWidth
    });
  } else if (!isResizable || !imageWidthWithinContainer) {
    img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: WIDTH,
        height: HEIGHT
      }
    }, img);
  } else {
    const currentWidth = WIDTH || imageWidthWithinContainer;
    const currentHeight = HEIGHT || imageHeightWithinContainer;
    const ratio = naturalWidth / naturalHeight;
    const minWidth = naturalWidth < naturalHeight ? _constants__WEBPACK_IMPORTED_MODULE_15__.MIN_SIZE : _constants__WEBPACK_IMPORTED_MODULE_15__.MIN_SIZE * ratio;
    const minHeight = naturalHeight < naturalWidth ? _constants__WEBPACK_IMPORTED_MODULE_15__.MIN_SIZE : _constants__WEBPACK_IMPORTED_MODULE_15__.MIN_SIZE / ratio;

    // ==============
    const maxWidthBuffer = maxWidth * 2.5;
    let showRightHandle = false;
    let showLeftHandle = false;

    /* eslint-disable no-lonely-if */
    // See https://github.com/WordPress/gutenberg/issues/7584.
    if (align === "center") {
      // When the image is centered, show both handles.
      showRightHandle = true;
      showLeftHandle = true;
    } else if ((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.isRTL)()) {
      // In RTL mode the image is on the right by default.
      // Show the right handle and hide the left handle only when it is
      // aligned left. Otherwise always show the left handle.
      if (align === "left") {
        showRightHandle = true;
      } else {
        showLeftHandle = true;
      }
    } else {
      // Show the left handle and hide the right handle only when the
      // image is aligned right. Otherwise always show the right handle.
      if (align === "right") {
        showLeftHandle = true;
      } else {
        showRightHandle = true;
      }
    }
    /* eslint-enable no-lonely-if */

    img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ResizableBox, {
      className: "wcb-image__ResizableBox",
      size: {
        width: WIDTH || "auto",
        height: HEIGHT && !hasCustomBorder ? HEIGHT : "auto"
      },
      showHandle: isSelected,
      minWidth: minWidth,
      maxWidth: maxWidthBuffer,
      minHeight: minHeight,
      maxHeight: maxWidthBuffer / ratio,
      lockAspectRatio: true,
      enable: {
        top: false,
        right: showRightHandle,
        bottom: true,
        left: showLeftHandle
      },
      onResizeStart: onResizeStart,
      onResizeStop: (event, direction, elt, delta) => {
        onResizeStop();
        setAttributes({
          general_settings: {
            ...general_settings,
            width: {
              ...general_settings.width,
              [deviceType]: parseInt(currentWidth + delta.width, 10)
            },
            height: {
              ...general_settings.height,
              [deviceType]: parseInt(currentHeight + delta.height, 10)
            }
          }
        });
      },
      resizeRatio: align === "center" ? 2 : 1
    }, img);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.__experimentalImageEditingProvider, {
    id: id,
    url: url,
    naturalWidth: naturalWidth,
    naturalHeight: naturalHeight,
    clientWidth: clientWidth,
    onSaveImage: imageAttributes => {
      setAttributes(imageAttributes);
    },
    isEditing: isEditingImage,
    onFinishEditing: () => setIsEditingImage(false)
  }, !temporaryURL && controls, img, showCaption && (!_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.RichText.isEmpty(caption) || isSelected) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.RichText, {
    className: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.__experimentalGetElementClassName)("caption"),
    ref: captionRef,
    tagName: "figcaption",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Image caption text"),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Add caption"),
    value: caption,
    onChange: value => setAttributes({
      caption: value
    }),
    inlineToolbar: true
    // @ts-ignore
    ,
    __unstableOnSplitAtEnd: () => insertBlocksAfter((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__.createBlock)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__.getDefaultBlockName)() || ""))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/block-image/Save.tsx":
/*!**********************************!*\
  !*** ./src/block-image/Save.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-image/style.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");









function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    alt,
    caption,
    href,
    id,
    linkClass,
    linkDestination,
    linkTarget,
    rel,
    title,
    url,
    general_settings,
    style_image,
    style_overlay,
    style_caption
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_settings,
    style_image,
    style_overlay,
    style_caption
  };
  const {
    currentDeviceValue: align
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(general_settings.alignment, "Desktop");
  const {
    currentDeviceValue: WIDTH
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(general_settings.width, "Desktop");
  const {
    currentDeviceValue: HEIGHT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(general_settings.height, "Desktop");
  //
  //

  const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty)(rel) ? undefined : rel;
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.__experimentalGetBorderClassesAndStyles)(attributes);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()({
    [`align${align}`]: align
    // [`size-${sizeSlug}`]: sizeSlug,
    // "is-resized": width || height,
    // "has-custom-border": !!borderProps.className || !isEmpty(borderProps.style),
  });

  const imageClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()(borderProps.className, {
    [`wp-image-${id}`]: !!id
  });
  const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: url,
    alt: alt,
    className: imageClasses || undefined,
    style: borderProps.style,
    width: WIDTH,
    height: HEIGHT,
    title: title
  });
  const figure = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    className: linkClass,
    href: href,
    target: linkTarget,
    rel: newRel
  }, image) : image, !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.RichText.Content, {
    className: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.__experimentalGetElementClassName)("caption"),
    tagName: "figcaption",
    value: caption
  }));
  //
  //
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps.save({
    className: "wcb-image__wrap " + classes + ` wcb-image__wrap--${general_settings.layout}`
  });
  //
  //

  const renderOverlay = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "wcb-image__overlay-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "wcb-image__overlay-bg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "wcb-image__overlay-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InnerBlocks.Content, null))));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributes: newAttrForSave,
    className: `wcb-image__wrap wcb-image__wrap--${general_settings.layout}`,
    uniqueId: uniqueId,
    HtmlTag: "figure"
  }, blockProps), figure, general_settings.layout === "overlay" && renderOverlay());
}

/***/ }),

/***/ "./src/block-image/WcbImagePanelSettings.tsx":
/*!***************************************************!*\
  !*** ./src/block-image/WcbImagePanelSettings.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCB_IMAGE_PANEL_SETTINGS_DEMO": function() { return /* binding */ WCB_IMAGE_PANEL_SETTINGS_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyTextAlignControl/MyTextAlignControl */ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MySelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MySelect */ "./src/components/controls/MySelect.tsx");
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");



// @ts-ignore








const WCB_IMAGE_PANEL_SETTINGS_DEMO = {
  alignment: {
    Desktop: "center"
  },
  captionAlignment: {
    Desktop: "center"
  },
  height: {
    Desktop: undefined
  },
  sizeSlug: {
    Desktop: undefined
  },
  width: {
    Desktop: undefined
  },
  objectFit: {
    Desktop: "initial"
  },
  layout: "normal",
  contentAlignment: "center"
};
const WcbImagePanelSettings = _ref => {
  let {
    panelData = WCB_IMAGE_PANEL_SETTINGS_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened,
    //
    updateImage,
    setAttributes,
    imageSizeOptions,
    isResizable,
    naturalHeight,
    naturalWidth,
    alt,
    enableCaption,
    toggleEnableCaption
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__["default"])() || "Desktop";
  const {
    alignment,
    captionAlignment,
    objectFit
  } = panelData;
  const {
    currentDeviceValue: TEXT_ALIGNMENT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(alignment, deviceType);
  const {
    currentDeviceValue: CAPTION_ALIGNMENT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(captionAlignment, deviceType);
  const {
    currentDeviceValue: currentWidth
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(panelData.width, deviceType);
  const {
    currentDeviceValue: currentHeight
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(panelData.height, deviceType);
  const {
    currentDeviceValue: currentSizeSlug
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(panelData.sizeSlug, deviceType);
  const {
    currentDeviceValue: currentObjectFit
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(objectFit, deviceType);
  //

  //
  const handleChangeTextAlignment = selected => {
    setAttr__({
      ...panelData,
      alignment: {
        ...alignment,
        [deviceType]: selected
      }
    });
  };
  const handleChangeCaptionAlignment = selected => {
    setAttr__({
      ...panelData,
      captionAlignment: {
        ...captionAlignment,
        [deviceType]: selected
      }
    });
  };
  //

  const OBJECT_FIT_OPTIONS = [{
    value: "initial",
    label: "Default"
  }, {
    value: "fill",
    label: "Fill"
  }, {
    value: "cover",
    label: "Cover"
  }, {
    value: "contain",
    label: "Contain"
  }];
  const PLANS_LAYOUT = [{
    name: "normal",
    icon: "Normal"
  }, {
    name: "overlay",
    icon: "Overlay"
  }];
  const PLANS_CONTENT_ALIGNMENT = [{
    name: "flex-start",
    icon: "Top"
  }, {
    name: "center",
    icon: "Middle"
  }, {
    name: "flex-end",
    icon: "Bottom"
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Settings", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    textAlignment: TEXT_ALIGNMENT,
    onChange: handleChangeTextAlignment
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl
  // @ts-ignore
  , {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Alt text (alternative text)"),
    value: alt,
    onChange: data => {
      setAttributes({
        alt: data
      });
    },
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Describe the purpose of the image")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Leave empty if the image is purely decorative."))
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
    plans: PLANS_LAYOUT,
    value: panelData.layout,
    hasResponsive: false,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout", "wcb"),
    onChange: value => {
      setAttr__({
        ...panelData,
        layout: value
      });
    }
  }), panelData.layout === "overlay" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
    plans: PLANS_CONTENT_ALIGNMENT,
    value: panelData.contentAlignment,
    hasResponsive: false,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Content alignment", "wcb"),
    onChange: value => {
      setAttr__({
        ...panelData,
        contentAlignment: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Dimensions",
    hasResponsive: true,
    defaultOpen: true,
    isDisableButton: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalImageSizeControl, {
    onChangeImage: updateImage,
    onChange: _ref2 => {
      let {
        width,
        height
      } = _ref2;
      if (typeof width === "undefined" && typeof height === "undefined") {
        setAttr__({
          ...panelData,
          width: {
            ...panelData.width,
            [deviceType]: undefined
          },
          height: {
            ...panelData.height,
            [deviceType]: undefined
          }
        });
      } else {
        const W = width ? {
          width: {
            ...panelData.width,
            [deviceType]: width
          }
        } : {};
        const H = height ? {
          height: {
            ...panelData.height,
            [deviceType]: height
          }
        } : {};
        setAttr__({
          ...panelData,
          ...W,
          ...H
        });
      }
    },
    slug: currentSizeSlug,
    width: currentWidth,
    height: currentHeight,
    imageSizeOptions: imageSizeOptions,
    isResizable: isResizable,
    imageWidth: naturalWidth,
    imageHeight: naturalHeight
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Object Fit", "wcb"),
    hasResponsive: true,
    onChange: value => {
      setAttr__({
        ...panelData,
        objectFit: {
          ...objectFit,
          [deviceType]: value
        }
      });
    },
    value: currentObjectFit,
    options: OBJECT_FIT_OPTIONS
  }), panelData.layout !== "overlay" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable caption", "wcb"),
    checked: enableCaption,
    onChange: toggleEnableCaption
  }), panelData.layout !== "overlay" && enableCaption && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    textAlignment: CAPTION_ALIGNMENT,
    onChange: handleChangeCaptionAlignment,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Caption alignment", "wcb")
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (WcbImagePanelSettings);

/***/ }),

/***/ "./src/block-image/WcbImagePanel_StyleCaption.tsx":
/*!********************************************************!*\
  !*** ./src/block-image/WcbImagePanel_StyleCaption.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO": function() { return /* binding */ WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");










const WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO = {
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_5__.TYPOGRAPHY_CONTROL_DEMO,
  textColor: "",
  margin: {
    Desktop: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0"
    }
  }
};
const WcbImagePanel_StyleCaption = _ref => {
  let {
    panelData = WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  const {
    typography,
    textColor,
    margin
  } = panelData;
  const {
    currentDeviceValue: currentMargin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(margin, deviceType);
  //
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Caption", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    typographyControl: typography,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: textColor,
    onChange: textColor => {
      setAttr__({
        ...panelData,
        textColor
      });
    },
    disableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
      hasResponsive: true,
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "wcb")),
    values: currentMargin,
    onChange: data => {
      setAttr__({
        ...panelData,
        margin: {
          ...margin,
          [deviceType]: data
        }
      });
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (WcbImagePanel_StyleCaption);

/***/ }),

/***/ "./src/block-image/WcbImagePanel_StyleImage.tsx":
/*!******************************************************!*\
  !*** ./src/block-image/WcbImagePanel_StyleImage.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO": function() { return /* binding */ WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyBoxShadowControl_MyBoxShadowControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/MyBoxShadowControl */ "./src/components/controls/MyBoxShadowControl/MyBoxShadowControl.tsx");
/* harmony import */ var _components_controls_MyBoxShadowControl_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/types */ "./src/components/controls/MyBoxShadowControl/types.ts");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");












const WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO = {
  border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO,
  boxShadow: _components_controls_MyBoxShadowControl_types__WEBPACK_IMPORTED_MODULE_7__.MY_BOX_SHADOW_CONTROL_DEMO,
  padding: {
    Desktop: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0"
    }
  }
};
const WcbImagePanel_StyleImage = _ref => {
  let {
    panelData = WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_10__["default"])() || "Desktop";
  const {
    border,
    boxShadow,
    padding
  } = panelData;
  const {
    currentDeviceValue: currentPadding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__["default"])(padding, deviceType);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    defaultOpen: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    borderControl: border,
    setAttrs__border: data => {
      setAttr__({
        ...panelData,
        border: data
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Box shadow", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBoxShadowControl_MyBoxShadowControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    boxShadowControl: boxShadow,
    setAttrs__boxShadow: data => {
      setAttr__({
        ...panelData,
        boxShadow: data
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hasResponsive: true,
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Padding", "wcb")),
    values: currentPadding,
    onChange: data => {
      setAttr__({
        ...panelData,
        padding: {
          ...padding,
          [deviceType]: data
        }
      });
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (WcbImagePanel_StyleImage);

/***/ }),

/***/ "./src/block-image/WcbImagePanel_StyleOverlay.tsx":
/*!********************************************************!*\
  !*** ./src/block-image/WcbImagePanel_StyleOverlay.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO": function() { return /* binding */ WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_controls_HelpText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/HelpText */ "./src/components/controls/HelpText.tsx");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");







const WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO = {
  backgroundColor: "",
  backgroundColorHover: ""
};
const WcbImagePanel_StyleOverlay = _ref => {
  let {
    panelData = WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  const {
    backgroundColor,
    backgroundColorHover
  } = panelData;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Overlay", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: backgroundColor,
    onChange: color => {
      setAttr__({
        ...panelData,
        backgroundColor: color
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background color")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: backgroundColorHover,
    onChange: color => {
      setAttr__({
        ...panelData,
        backgroundColorHover: color
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background hover color")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_HelpText__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Let's customize the opacity of the background right inside the color-picker popover", "wcb"))));
};
/* harmony default export */ __webpack_exports__["default"] = (WcbImagePanel_StyleOverlay);

/***/ }),

/***/ "./src/block-image/attributes.ts":
/*!***************************************!*\
  !*** ./src/block-image/attributes.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl */ "./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx");
/* harmony import */ var _components_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/controls/MyZIndexControl/MyZIndexControl */ "./src/components/controls/MyZIndexControl/MyZIndexControl.tsx");
/* harmony import */ var _WcbImagePanelSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WcbImagePanelSettings */ "./src/block-image/WcbImagePanelSettings.tsx");
/* harmony import */ var _WcbImagePanel_StyleCaption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WcbImagePanel_StyleCaption */ "./src/block-image/WcbImagePanel_StyleCaption.tsx");
/* harmony import */ var _WcbImagePanel_StyleImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WcbImagePanel_StyleImage */ "./src/block-image/WcbImagePanel_StyleImage.tsx");
/* harmony import */ var _WcbImagePanel_StyleOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WcbImagePanel_StyleOverlay */ "./src/block-image/WcbImagePanel_StyleOverlay.tsx");






const blokc1Attrs = {
  uniqueId: {
    type: "string",
    default: ""
  },
  //
  general_settings: {
    type: "object",
    default: _WcbImagePanelSettings__WEBPACK_IMPORTED_MODULE_2__.WCB_IMAGE_PANEL_SETTINGS_DEMO
  },
  style_image: {
    type: "object",
    default: _WcbImagePanel_StyleImage__WEBPACK_IMPORTED_MODULE_4__.WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO
  },
  style_overlay: {
    type: "object",
    default: _WcbImagePanel_StyleOverlay__WEBPACK_IMPORTED_MODULE_5__.WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO
  },
  style_caption: {
    type: "object",
    default: _WcbImagePanel_StyleCaption__WEBPACK_IMPORTED_MODULE_3__.WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO
  },
  //

  url: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "src",
    __experimentalRole: "content"
  },
  alt: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "alt",
    default: "",
    __experimentalRole: "content"
  },
  caption: {
    type: "string",
    source: "html",
    selector: "figcaption",
    __experimentalRole: "content"
  },
  title: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "title",
    __experimentalRole: "content"
  },
  href: {
    type: "string",
    source: "attribute",
    selector: "figure > a",
    attribute: "href",
    __experimentalRole: "content"
  },
  rel: {
    type: "string",
    source: "attribute",
    selector: "figure > a",
    attribute: "rel"
  },
  linkClass: {
    type: "string",
    source: "attribute",
    selector: "figure > a",
    attribute: "class"
  },
  id: {
    type: "number",
    __experimentalRole: "content"
  },
  linkDestination: {
    type: "string"
  },
  linkTarget: {
    type: "string",
    source: "attribute",
    selector: "figure > a",
    attribute: "target"
  },
  // THE ATTRS OF BLOCK HERE

  // ADVANCE
  advance_responsiveCondition: {
    type: "object",
    default: _components_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_0__.RESPONSIVE_CONDITON_DEMO
  },
  advance_zIndex: {
    type: "object",
    default: _components_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_1__.Z_INDEX_DEMO
  }
};
/* harmony default export */ __webpack_exports__["default"] = (blokc1Attrs);

/***/ }),

/***/ "./src/block-image/constants.ts":
/*!**************************************!*\
  !*** ./src/block-image/constants.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOWED_MEDIA_TYPES": function() { return /* binding */ ALLOWED_MEDIA_TYPES; },
/* harmony export */   "LINK_DESTINATION_ATTACHMENT": function() { return /* binding */ LINK_DESTINATION_ATTACHMENT; },
/* harmony export */   "LINK_DESTINATION_CUSTOM": function() { return /* binding */ LINK_DESTINATION_CUSTOM; },
/* harmony export */   "LINK_DESTINATION_MEDIA": function() { return /* binding */ LINK_DESTINATION_MEDIA; },
/* harmony export */   "LINK_DESTINATION_NONE": function() { return /* binding */ LINK_DESTINATION_NONE; },
/* harmony export */   "MEDIA_ID_NO_FEATURED_IMAGE_SET": function() { return /* binding */ MEDIA_ID_NO_FEATURED_IMAGE_SET; },
/* harmony export */   "MIN_SIZE": function() { return /* binding */ MIN_SIZE; },
/* harmony export */   "NEW_TAB_REL": function() { return /* binding */ NEW_TAB_REL; }
/* harmony export */ });
const MIN_SIZE = 20;
const LINK_DESTINATION_NONE = "none";
const LINK_DESTINATION_MEDIA = "media";
const LINK_DESTINATION_ATTACHMENT = "attachment";
const LINK_DESTINATION_CUSTOM = "custom";
const NEW_TAB_REL = ["noreferrer", "noopener"];
const ALLOWED_MEDIA_TYPES = ["image"];
const MEDIA_ID_NO_FEATURED_IMAGE_SET = 0;

/***/ }),

/***/ "./src/block-image/index.js":
/*!**********************************!*\
  !*** ./src/block-image/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block-image/style.scss");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./src/block-image/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Save */ "./src/block-image/Save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block-image/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/block-image/attributes.ts");
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

/***/ "./src/block-image/use-client-width.ts":
/*!*********************************************!*\
  !*** ./src/block-image/use-client-width.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useClientWidth; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function useClientWidth(ref, dependencies) {
  const [clientWidth, setClientWidth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  function calculateClientWidth() {
    setClientWidth(ref.current?.clientWidth);
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(calculateClientWidth, dependencies);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      defaultView
    } = ref.current.ownerDocument;
    defaultView.addEventListener("resize", calculateClientWidth);
    return () => {
      defaultView.removeEventListener("resize", calculateClientWidth);
    };
  }, []);
  return clientWidth;
}

/***/ }),

/***/ "./src/components/AdvancePanelCommon.tsx":
/*!***********************************************!*\
  !*** ./src/components/AdvancePanelCommon.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/MyResponsiveConditionControl/MyResponsiveConditionControl */ "./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx");
/* harmony import */ var _controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/MyZIndexControl/MyZIndexControl */ "./src/components/controls/MyZIndexControl/MyZIndexControl.tsx");






const AdvancePanelCommon = _ref => {
  let {
    handleTogglePanel,
    tabAdvancesIsPanelOpen,
    advance_responsiveCondition,
    advance_zIndex,
    setAttributes,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    onToggle: () => handleTogglePanel("Advances", "Responsive Conditions"),
    initialOpen: tabAdvancesIsPanelOpen === "Responsive Conditions",
    opened: tabAdvancesIsPanelOpen === "Responsive Conditions" || undefined,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Responsive Conditions", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    responsiveConditionControl: advance_responsiveCondition,
    setAttrs__responsiveCondition: data => setAttributes({
      advance_responsiveCondition: data
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    onToggle: () => handleTogglePanel("Advances", "Z-Index"),
    initialOpen: tabAdvancesIsPanelOpen === "Z-Index",
    opened: tabAdvancesIsPanelOpen === "Z-Index" || undefined,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Z-Index", "wcb")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    zIndexControl: advance_zIndex,
    setAttrs__zIndex: data => setAttributes({
      advance_zIndex: data
    })
  })), children ? children : null);
};
/* harmony default export */ __webpack_exports__["default"] = (AdvancePanelCommon);

/***/ }),

/***/ "./src/components/CheckIcon.tsx":
/*!**************************************!*\
  !*** ./src/components/CheckIcon.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function CheckIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle", {
    cx: 12,
    cy: 12,
    r: 12,
    fill: "currentColor",
    opacity: "0.2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M7 13l3 3 7-7",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (CheckIcon);

/***/ }),

/***/ "./src/components/HOCInspectorControls.tsx":
/*!*************************************************!*\
  !*** ./src/components/HOCInspectorControls.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INSPECTOR_CONTROLS_TABS": function() { return /* binding */ INSPECTOR_CONTROLS_TABS; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const INSPECTOR_CONTROLS_TABS = [{
  name: "General",
  title: "General"
}, {
  name: "Styles",
  title: "Styles"
}, {
  name: "Advances",
  title: "Advances"
}];
const HOCInspectorControls = _ref => {
  let {
    renderTabPanels,
    tabs = INSPECTOR_CONTROLS_TABS,
    uniqueId = "",
    tabDefaultActive = "General",
    onChangeActive
  } = _ref;
  // console.log(888888);

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: `wcb-inspectorControls__panel ${uniqueId}`,
      activeClass: "HOCInspectorControls__ative-tab active-tab",
      tabs: tabs,
      onSelect: handleChageTab,
      initialTabName: tabDefaultActive
    }, tab => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, renderContent(), renderContent2());
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(HOCInspectorControls));

/***/ }),

/***/ "./src/components/MyCacheProvider.tsx":
/*!********************************************!*\
  !*** ./src/components/MyCacheProvider.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./src/components/SaveCommon.tsx":
/*!***************************************!*\
  !*** ./src/components/SaveCommon.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




// @ts-ignore

const SaveCommon = _ref => {
  let {
    className = "",
    uniqueId = "",
    HtmlTag = "div",
    children,
    attributes = {},
    ...props
  } = _ref;
  let blockJson = "";
  try {
    blockJson = lodash__WEBPACK_IMPORTED_MODULE_3___default().escape(JSON.stringify(attributes));
  } catch (error) {
    console.log("attributes JSON.stringify error on SAVE function", {
      error,
      className,
      attributes
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(HtmlTag, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: `${className} ${uniqueId} wcb-update-div`,
    id: uniqueId,
    "data-uniqueid": uniqueId
  }), children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    "data-wcb-global-styles": uniqueId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("pre", {
    "data-wcb-block-attrs": uniqueId,
    style: {
      display: "none"
    }
  }, blockJson));
};
/* harmony default export */ __webpack_exports__["default"] = (SaveCommon);

/***/ }),

/***/ "./src/components/controls/HelpText.tsx":
/*!**********************************************!*\
  !*** ./src/components/controls/HelpText.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (HelpText);

/***/ }),

/***/ "./src/components/controls/MyBorderControl/MyBorderControl.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/controls/MyBorderControl/MyBorderControl.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyBorderControl/types.ts");



// @ts-ignore






const MyBorderControl = _ref => {
  let {
    className = "space-y-4",
    borderControl = _types__WEBPACK_IMPORTED_MODULE_8__.MY_BORDER_CONTROL_DEMO,
    setAttrs__border
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__["default"])() || "Desktop";
  //
  const {
    mainSettings: mainSettingsProps,
    hoverColor: hoverColorProps,
    radius: radiusProps
  } = borderControl;
  const handleChangeBorder = newBorders => {
    setAttrs__border({
      ...borderControl,
      mainSettings: newBorders
    });
  };
  const handleChangeBorderHoverColor = hoverColor => {
    setAttrs__border({
      ...borderControl,
      hoverColor
    });
  };
  const handleChangeBorderRadius = newRadius => {
    setAttrs__border({
      ...borderControl,
      radius: {
        ...radiusProps,
        [deviceType]: newRadius
      }
    });
  };

  //
  const RADIUS = radiusProps[deviceType] || radiusProps.Tablet || radiusProps.Desktop;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Border"),
    onChange: handleChangeBorder,
    value: mainSettingsProps,
    colors: [],
    enableAlpha: false
    // enableStyle={ showBorderStyle }
    ,
    popoverOffset: 40,
    popoverPlacement: "left-start",
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    size: "__unstable-large"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Hover border color", "wcb"),
    onChange: handleChangeBorderHoverColor,
    color: hoverColorProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderRadiusControl, {
    values: RADIUS,
    onChange: value => {
      handleChangeBorderRadius(value);
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Border radius", "wcb"))
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (MyBorderControl);

/***/ }),

/***/ "./src/components/controls/MyBorderControl/types.ts":
/*!**********************************************************!*\
  !*** ./src/components/controls/MyBorderControl/types.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_BORDER_MAINS": function() { return /* binding */ DEFAULT_BORDER_MAINS; },
/* harmony export */   "DEFAULT_BORDER_MAIN_SINGLE_SIDE": function() { return /* binding */ DEFAULT_BORDER_MAIN_SINGLE_SIDE; },
/* harmony export */   "DEFAULT_BORDER_RADIUS": function() { return /* binding */ DEFAULT_BORDER_RADIUS; },
/* harmony export */   "MY_BORDER_CONTROL_DEMO": function() { return /* binding */ MY_BORDER_CONTROL_DEMO; }
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

/***/ "./src/components/controls/MyBoxShadowControl/MyBoxShadowControl.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyBoxShadowControl/MyBoxShadowControl.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOX_SHADOW_POSITON": function() { return /* binding */ BOX_SHADOW_POSITON; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CheckIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CheckIcon */ "./src/components/CheckIcon.tsx");
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _MyDisclosure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _ResetButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ResetButton */ "./src/components/controls/ResetButton.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyBoxShadowControl/types.ts");











const BOX_SHADOW_POSITON = ["outset", "inset"];
const PanelTab = [{
  name: "Normal",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Normal", "wcb")
}, {
  name: "Hover",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hover", "wcb")
}];
const MyBoxShadowControl = _ref => {
  let {
    className = "",
    boxShadowControl = _types__WEBPACK_IMPORTED_MODULE_8__.MY_BOX_SHADOW_CONTROL_DEMO,
    setAttrs__boxShadow
  } = _ref;
  //
  const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("Normal");
  //
  const {
    color,
    presetClass,
    horizontal,
    vertical,
    blur,
    spread,
    position
  } = boxShadowControl[currentTab];

  //
  const setShadowPreset = preClass => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        presetClass: preClass
      }
    });
  };
  const handleChangeColor = colorHex => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        color: colorHex
      }
    });
  };
  // custoM
  const handleChangePosition = bPosition => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        position: bPosition,
        presetClass: ""
      }
    });
  };
  const setHorizontal = value => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        horizontal: value,
        presetClass: ""
      }
    });
  };
  const setVertical = value => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        vertical: value,
        presetClass: ""
      }
    });
  };
  const setBlur = value => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        blur: value,
        presetClass: ""
      }
    });
  };
  const setSpread = value => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        spread: value,
        presetClass: ""
      }
    });
  };

  // RENDER
  const renderRadioPresetShadow = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.RadioGroup, {
      value: presetClass,
      onChange: setShadowPreset
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.RadioGroup.Label, {
      className: "relative flex items-center justify-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Preset", "wcb")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ResetButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => setShadowPreset("")
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative p-3 bg-slate-50 mt-3 rounded-lg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative grid grid-cols-3 gap-3 "
    }, _types__WEBPACK_IMPORTED_MODULE_8__.TW_SHADOW_PRESET.map(item => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.RadioGroup.Option, {
        key: item,
        value: item
      }, _ref2 => {
        let {
          checked
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: `${item} flex items-center justify-center w-full h-20 cursor-pointer rounded-lg ${checked ? "bg-sky-50 " : "bg-white"} ${item === "shadow-inner" ? "ring-1 ring-black/5" : ""}`
        }, checked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "shrink-0 text-sky-500"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CheckIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "h-6 w-6"
        })));
      });
    }))));
  };
  const renderBlurRange = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Blur", "wcb"),
      value: blur,
      onChange: setBlur,
      min: 0,
      max: 100
    });
  };
  const renderSpreadRange = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Spread", "wcb"),
      value: spread,
      onChange: setSpread,
      min: -100,
      max: 100
    });
  };
  const renderVerticalRange = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Vertical", "wcb"),
      value: vertical,
      onChange: setVertical,
      min: -100,
      max: 100
    });
  };
  const renderHorizontalRange = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Horizontal", "wcb"),
      className: "mb-0",
      value: horizontal,
      onChange: setHorizontal,
      min: -100,
      max: 100
    });
  };
  const renderPositionRadioGroup = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center justify-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Position", "wcb")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadioGroup, {
      onChange: handleChangePosition,
      checked: position
    }, BOX_SHADOW_POSITON.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadio, {
      value: item,
      key: item,
      className: "capitalize"
    }, item))));
  };
  const renderShadowColorPicker = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "wcb"),
      onChange: handleChangeColor,
      color: color
    });
  };
  const renderContentSettings = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-5"
    }, renderRadioPresetShadow(), renderShadowColorPicker(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyDisclosure__WEBPACK_IMPORTED_MODULE_6__["default"], null, renderHorizontalRange(), renderVerticalRange(), renderBlurRange(), renderSpreadRange(), renderPositionRadioGroup()));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: `wcb-bodyControls__panel ${className}`,
    activeClass: "active-tab",
    onSelect: tab => setCurrentTab(tab),
    initialTabName: "Normal",
    tabs: PanelTab
  }, _ => renderContentSettings());
};
/* harmony default export */ __webpack_exports__["default"] = (MyBoxShadowControl);

/***/ }),

/***/ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts":
/*!**************************************************************************!*\
  !*** ./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getShadowStyleValueFromTwPreset": function() { return /* binding */ getShadowStyleValueFromTwPreset; }
/* harmony export */ });
const getShadowStyleValueFromTwPreset = function (presetClass) {
  let color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  switch (presetClass) {
    case "shadow-sm":
      return `0 1px 2px 0 ${color || "rgb(0 0 0 / 0.05)"}`;
    case "shadow":
      return `0 1px 3px 0 ${color || "rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-md":
      return `0 4px 6px -1px ${color || "rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-lg":
      return `0 10px 15px -3px ${color || "rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-xl":
      return `0 20px 25px -5px ${color || "rgb(0 0 0 / 0.1)"}, 0 8px 10px -6px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-2xl":
      return `0 25px 50px -12px ${color || "rgb(0 0 0 / 0.25)"}`;
    case "shadow-inner":
      return `inset 0 2px 4px 0 ${color || "rgb(0 0 0 / 0.05)"}`;
    default:
      return "";
  }
};

/***/ }),

/***/ "./src/components/controls/MyBoxShadowControl/types.ts":
/*!*************************************************************!*\
  !*** ./src/components/controls/MyBoxShadowControl/types.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY_BOX_SHADOW_CONTROL_DEMO": function() { return /* binding */ MY_BOX_SHADOW_CONTROL_DEMO; },
/* harmony export */   "TW_SHADOW_PRESET": function() { return /* binding */ TW_SHADOW_PRESET; }
/* harmony export */ });
const TW_SHADOW_PRESET = ["shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl", "shadow-inner"];
const MY_BOX_SHADOW_CONTROL_DEMO = {
  Normal: {
    color: "",
    presetClass: "",
    blur: 0,
    horizontal: 0,
    spread: 0,
    vertical: 0,
    position: "outset"
  },
  Hover: {
    color: "",
    presetClass: "",
    blur: 0,
    horizontal: 0,
    spread: 0,
    vertical: 0,
    position: "outset"
  }
};

/***/ }),

/***/ "./src/components/controls/MyColorPicker/MyColorPicker.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/controls/MyColorPicker/MyColorPicker.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/popover/popover.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _ResetButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ResetButton */ "./src/components/controls/ResetButton.tsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






const MyColorPicker = _ref => {
  let {
    className = "",
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Color", "wcb"),
    // default value color - co the la cac gia tri hex string
    color,
    disableAlpha,
    oldHue,
    onChange
  } = _ref;
  const [colorState, setColorState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    color && setColorState(color);
  }, [color]);
  const handleUpdateColor = c => {
    setColorState(c);
    onChange(c);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover, {
    className: `relative w-full ${className}`
  }, _ref2 => {
    let {
      open
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-between items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "flex-1"
    }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ResetButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: () => handleUpdateColor("")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Button, {
      className: `ml-0.5 w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 ${colorState ? "" : "bg-transparent"}`,
      style: {
        backgroundColor: colorState,
        backgroundImage: !colorState ? "linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)" : undefined,
        backgroundSize: "10px 10px",
        backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0"
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Transition, {
      as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 translate-y-1",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 translate-y-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Panel, {
      className: "absolute right-0 z-50 mt-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shadow-xl ring-1 ring-black/10 bg-white"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
      onChangeComplete: e => handleUpdateColor(e.hex),
      disableAlpha: disableAlpha,
      color: colorState,
      oldHue: oldHue
    })))));
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MyColorPicker);

/***/ }),

/***/ "./src/components/controls/MyCombobox.tsx":
/*!************************************************!*\
  !*** ./src/components/controls/MyCombobox.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const MyComboboxControl = _ref => {
  let {
    onChange,
    options,
    value,
    label
  } = _ref;
  const [fontSize, setFontSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value || "");
  const [filteredOptions, setFilteredOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setFontSize(value || "");
  }, [value]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ComboboxControl, {
    label: label,
    value: fontSize,
    onChange: value => {
      setFontSize(value || "");
      onChange(value || "");
    },
    options: filteredOptions,
    onFilterValueChange: inputValue => setFilteredOptions(options.filter(option => option.label.toLowerCase().startsWith(inputValue.toLowerCase())))
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MyComboboxControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY_GAP_UNITS": function() { return /* binding */ MY_GAP_UNITS; },
/* harmony export */   "MY_HORIZOLTAL_UNITS": function() { return /* binding */ MY_HORIZOLTAL_UNITS; },
/* harmony export */   "MY_VERTICAL_UNITS": function() { return /* binding */ MY_VERTICAL_UNITS; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyDimensionsControl/types.ts");
/* harmony import */ var _MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");









const MY_GAP_UNITS = [{
  value: "px",
  label: "px",
  default: 32
}, {
  value: "rem",
  label: "rem",
  default: 2
}, {
  value: "em",
  label: "em",
  default: 2
}, {
  value: "%",
  label: "%",
  default: 50
}];
const MY_HORIZOLTAL_UNITS = [{
  value: "px",
  label: "px",
  default: 32
}, {
  value: "rem",
  label: "rem",
  default: 2
}, {
  value: "em",
  label: "em",
  default: 2
}, {
  value: "%",
  label: "%",
  default: 20
}, {
  value: "vw",
  label: "vw",
  default: 20
}];
const MY_VERTICAL_UNITS = [{
  value: "px",
  label: "px",
  default: 32
}, {
  value: "rem",
  label: "rem",
  default: 2
}, {
  value: "em",
  label: "em",
  default: 2
}, {
  value: "%",
  label: "%",
  default: 20
}, {
  value: "vh",
  label: "vh",
  default: 20
}];
const MyDimensionsControl = _ref => {
  let {
    className = "space-y-5",
    dimensionControl = _types__WEBPACK_IMPORTED_MODULE_6__.MY_DIMENSIONS_CONTROL_DEMO,
    setAttrs__dimensions
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__["default"])() || "Desktop";
  //
  const {
    colunmGap: colunmGapProps,
    rowGap: rowGapProps,
    margin: marginProps,
    padding: paddingProps
  } = dimensionControl;
  const {
    currentDeviceValue: colunmGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(colunmGapProps, deviceType);
  const {
    currentDeviceValue: rowGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(rowGapProps, deviceType);
  const {
    currentDeviceValue: margin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(marginProps, deviceType);
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(paddingProps, deviceType);

  //
  const setRowGrap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      rowGap: {
        ...rowGapProps,
        [deviceType]: value
      }
    });
  };
  const setColumnGap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      colunmGap: {
        ...colunmGapProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeMargin = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      margin: {
        ...marginProps,
        [deviceType]: value
      }
    });
  };
  const handleChangePadding = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      padding: {
        ...paddingProps,
        [deviceType]: value
      }
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: setRowGrap,
    value: rowGap || "0",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Row Gap", "wcb")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: setColumnGap,
    value: colunmGap || "0",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Column Gap", "wcb")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Padding", "wcb")),
    values: padding,
    onChange: handleChangePadding
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Margin", "wcb")),
    values: margin,
    onChange: handleChangeMargin
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MyDimensionsControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyDimensionsControl/types.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");








const MyDimensionsNoGapControl = _ref => {
  let {
    className = "space-y-5",
    dimensionControl = _types__WEBPACK_IMPORTED_MODULE_6__.MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
    setAttrs__dimensions
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__["default"])() || "Desktop";
  //
  const {
    margin: marginProps,
    padding: paddingProps
  } = dimensionControl;
  const {
    currentDeviceValue: margin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(marginProps, deviceType);
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(paddingProps, deviceType);

  //

  const handleChangeMargin = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      margin: {
        ...marginProps,
        [deviceType]: value
      }
    });
  };
  const handleChangePadding = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      padding: {
        ...paddingProps,
        [deviceType]: value
      }
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hasResponsive: true,
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Padding", "wcb")),
    values: padding,
    onChange: handleChangePadding
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Margin", "wcb")),
    values: margin,
    onChange: handleChangeMargin
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MyDimensionsNoGapControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/types.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_DIMENSION": function() { return /* binding */ DEFAULT_DIMENSION; },
/* harmony export */   "MY_DIMENSIONS_CONTROL_DEMO": function() { return /* binding */ MY_DIMENSIONS_CONTROL_DEMO; },
/* harmony export */   "MY_DIMENSIONS_NO_GAP_CONTROL_DEMO": function() { return /* binding */ MY_DIMENSIONS_NO_GAP_CONTROL_DEMO; },
/* harmony export */   "MY_DIMENSIONS_NO_GAP_DEMO__EMPTY": function() { return /* binding */ MY_DIMENSIONS_NO_GAP_DEMO__EMPTY; },
/* harmony export */   "MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO": function() { return /* binding */ MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO; },
/* harmony export */   "MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO": function() { return /* binding */ MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO; }
/* harmony export */ });
const DEFAULT_DIMENSION = {
  top: "12px",
  left: "12px",
  right: "12px",
  bottom: "12px"
};
const MY_DIMENSIONS_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  margin: {
    Desktop: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0"
    }
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_GAP_CONTROL_DEMO = {
  margin: {
    Desktop: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0"
    }
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_GAP_DEMO__EMPTY = {
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};
const MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  margin: {
    Desktop: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0"
    }
  }
};

/***/ }),

/***/ "./src/components/controls/MyDisclosure.tsx":
/*!**************************************************!*\
  !*** ./src/components/controls/MyDisclosure.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MinusIcon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const MyDisclosure = _ref => {
  let {
    className = "space-y-3.5",
    label = "Customize",
    children,
    defaultOpen,
    as,
    hasResponsive = false,
    isDisableButton = false
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure, {
    defaultOpen: defaultOpen,
    as: as
  }, _ref2 => {
    let {
      open
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: open ? "ring-2 ring-offset-1 rounded-lg ring-purple-200 mb-4" : ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Button, {
      className: `flex w-full justify-between items-center rounded-lg bg-purple-100 px-3 py-2.5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ${open ? "rounded-b-none" : ""}`,
      disabled: isDisableButton
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hasResponsive: hasResponsive,
      className: "MyDisclosure__labelControl"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, "wcb")), open ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "w-5 h-5 text-purple-900"
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      className: "w-4 h-4 text-purple-900",
      viewBox: "0 0 24 24",
      fill: "none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-miterlimit": "10",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-miterlimit": "10",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M3 22H21",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-miterlimit": "10",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Panel, {
      className: "px-3 pt-4 pb-3 text-sm text-gray-600 rounded-b-lg bg-purple-50/20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, children)));
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MyDisclosure);

/***/ }),

/***/ "./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");




const TAGS_PLANS = [{
  name: "h1",
  icon: "H1"
}, {
  name: "h2",
  icon: "H2"
}, {
  name: "h3",
  icon: "H3"
}, {
  name: "h4",
  icon: "H4"
}, {
  name: "h5",
  icon: "H5"
}, {
  name: "h6",
  icon: "H6"
}, {
  name: "div",
  icon: "DIV"
}, {
  name: "p",
  icon: "P"
}];
const MyHeadingTagControl = _ref => {
  let {
    onChange,
    tag,
    className,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading tag", "wcb")
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    className: className
    // @ts-ignore
    ,
    onChange: onChange,
    value: tag,
    plans: TAGS_PLANS,
    isWrap: true,
    hasResponsive: false
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MyHeadingTagControl);

/***/ }),

/***/ "./src/components/controls/MyLabelControl/MyLabelControl.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/controls/MyLabelControl/MyLabelControl.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./src/components/controls/MyRadioGroup.tsx":
/*!**************************************************!*\
  !*** ./src/components/controls/MyRadioGroup.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESPONSIVE_CONDITON_DEMO": function() { return /* binding */ RESPONSIVE_CONDITON_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const RESPONSIVE_CONDITON_DEMO = {
  isHiddenOnDesktop: false,
  isHiddenOnTablet: false,
  isHiddenOnMobile: false
};
const MyResponsiveConditionControl = _ref => {
  let {
    className = "space-y-4",
    responsiveConditionControl = RESPONSIVE_CONDITON_DEMO,
    setAttrs__responsiveCondition
  } = _ref;
  const {
    isHiddenOnDesktop,
    isHiddenOnMobile,
    isHiddenOnTablet
  } = responsiveConditionControl;
  const toggleHiddenOnDesktop = e => {
    setAttrs__responsiveCondition({
      ...responsiveConditionControl,
      isHiddenOnDesktop: e
    });
  };
  const toggleHiddenOnTablet = e => {
    setAttrs__responsiveCondition({
      ...responsiveConditionControl,
      isHiddenOnTablet: e
    });
  };
  const toggleHiddenOnMobile = e => {
    setAttrs__responsiveCondition({
      ...responsiveConditionControl,
      isHiddenOnMobile: e
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide on Desktop", "wcb"),
    checked: isHiddenOnDesktop,
    onChange: toggleHiddenOnDesktop,
    className: "mb-0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide on Tablet", "wcb"),
    checked: isHiddenOnTablet,
    onChange: toggleHiddenOnTablet
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide on Mobile", "wcb"),
    checked: isHiddenOnMobile,
    onChange: toggleHiddenOnMobile
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MyResponsiveConditionControl);

/***/ }),

/***/ "./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./src/components/controls/MySelect.tsx":
/*!**********************************************!*\
  !*** ./src/components/controls/MySelect.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");





const MySelect = _ref => {
  let {
    label = "My select",
    hasResponsive,
    labelClass = "flex-1",
    devices,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wcb-MySelect w-full flex justify-between items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: labelClass,
    hasResponsive: hasResponsive,
    devices: devices
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    hideLabelFromVision: true
  }, props))));
};
/* harmony default export */ __webpack_exports__["default"] = (MySelect);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/components/controls/MySpacingSizesControl/styles.scss");
/* harmony import */ var _SpacingInputControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpacingInputControl */ "./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const MySpacingSizesControl = _ref => {
  let {
    className = "",
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Margin bottom", "wcb"),
    hasResponsive = true,
    units,
    minCustomValue,
    value = "1rem",
    onChange = () => {},
    customUnitsValueSettings
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `MySpacingSizesControl ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    hasResponsive: hasResponsive
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SpacingInputControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: value,
    onChange: onChange,
    minCustomValue: minCustomValue,
    units: units,
    customUnitsValueSettings: customUnitsValueSettings
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MySpacingSizesControl);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY_CUSTOM_UNITS_VALUE_SETTINGS": function() { return /* binding */ MY_CUSTOM_UNITS_VALUE_SETTINGS; },
/* harmony export */   "MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE": function() { return /* binding */ MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");





const MY_CUSTOM_UNITS_VALUE_SETTINGS = {
  px: {
    max: 1000,
    steps: 1
  },
  "%": {
    max: 100,
    steps: 1
  },
  vw: {
    max: 100,
    steps: 1
  },
  vh: {
    max: 100,
    steps: 1
  },
  em: {
    max: 50,
    steps: 0.1
  },
  rm: {
    max: 50,
    steps: 0.1
  },
  rem: {
    max: 50,
    steps: 0.1
  }
};
const MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE = {
  px: {
    max: 2000,
    steps: 1
  },
  "%": {
    max: 100,
    steps: 1
  },
  vw: {
    max: 100,
    steps: 1
  },
  vh: {
    max: 100,
    steps: 1
  },
  em: {
    max: 100,
    steps: 1
  },
  rm: {
    max: 100,
    steps: 1
  },
  rem: {
    max: 100,
    steps: 1
  }
};
const SpacingInputControl = _ref => {
  let {
    value = "10px",
    onChange,
    minCustomValue = 0,
    units = _MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_3__.MY_GAP_UNITS,
    className = "",
    customUnitsValueSettings = MY_CUSTOM_UNITS_VALUE_SETTINGS
  } = _ref;
  const [currentValue, setCurrentValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCurrentValue(value);
  }, [value]);
  const selectedUnit = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalParseQuantityAndUnitFromRawValue)(currentValue), [currentValue])[1] || units[0].value;
  const customRangeValue = parseFloat(currentValue !== null && currentValue !== void 0 ? currentValue : "10");
  const handleCustomValueSliderChange = next => {
    const newValue = [next, selectedUnit].join("");
    onChange(newValue);
    setCurrentValue(newValue);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className} flex items-center space-x-2.5`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-[1.5]"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: customRangeValue,
    min: minCustomValue,
    max: customUnitsValueSettings[selectedUnit].max,
    step: customUnitsValueSettings[selectedUnit].steps
    // @ts-ignore
    ,
    withInputField: false,
    onChange: handleCustomValueSliderChange,
    className: "m-0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    onChange: newSize => {
      setCurrentValue(newSize);
      onChange(newSize);
    },
    value: currentValue,
    units: units,
    min: minCustomValue,
    hideLabelFromVision: true
    // size={"__unstable-large"}
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingInputControl);

/***/ }),

/***/ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");




const MyTextAlignControl = _ref => {
  let {
    onChange,
    textAlignment,
    className,
    hasResponsive,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "wcb")
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: className
    // @ts-ignore
    ,
    onChange: onChange,
    value: textAlignment || "",
    hasResponsive: hasResponsive,
    label: label
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MyTextAlignControl);

/***/ }),

/***/ "./src/components/controls/MyTextDecorationControl/MyTextDecorationControl.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/controls/MyTextDecorationControl/MyTextDecorationControl.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-underline.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






const TEXT_DECORATIONS = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("None"),
  value: "none",
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    viewBox: "0 0 24 24",
    className: "w-6 h-6",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M7 11.5h10V13H7z"
  }))
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Underline"),
  value: "underline",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Strikethrough"),
  value: "line-through",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
}];
const MyTextDecorationControl = _ref => {
  let {
    value = "none",
    onChange = () => {},
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __experimentalIsIconGroup: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Decoration"),
    value: value,
    onChange: onChange
  }), TEXT_DECORATIONS.map(textDecoration => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOptionIcon, {
      key: textDecoration.value,
      value: textDecoration.value,
      icon: textDecoration.icon,
      label: textDecoration.name,
      title: textDecoration.name
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MyTextDecorationControl);

/***/ }),

/***/ "./src/components/controls/MyTextTransformControl/MyTextTransformControl.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/controls/MyTextTransformControl/MyTextTransformControl.tsx ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-uppercase.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-lowercase.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-capitalize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






const TEXT_TRANSFORMS = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("None"),
  value: "none",
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    viewBox: "0 0 24 24",
    className: "w-6 h-6",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M7 11.5h10V13H7z"
  }))
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Uppercase"),
  value: "uppercase",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Lowercase"),
  value: "lowercase",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Capitalize"),
  value: "capitalize",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
}];
const MyTextTransformControl = _ref => {
  let {
    value = "none",
    onChange = () => {},
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __experimentalIsIconGroup: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Letter case"),
    value: value,
    onChange: onChange
  }), TEXT_TRANSFORMS.map(textTransform => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOptionIcon, {
      key: textTransform.value,
      value: textTransform.value,
      icon: textTransform.icon,
      label: textTransform.name
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MyTextTransformControl);

/***/ }),

/***/ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyTypographyControl/MyTypographyControl.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SelectFontAppearance */ "./src/components/controls/SelectFontAppearance.tsx");
/* harmony import */ var _MyTextDecorationControl_MyTextDecorationControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MyTextDecorationControl/MyTextDecorationControl */ "./src/components/controls/MyTextDecorationControl/MyTextDecorationControl.tsx");
/* harmony import */ var _MyTextTransformControl_MyTextTransformControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MyTextTransformControl/MyTextTransformControl */ "./src/components/controls/MyTextTransformControl/MyTextTransformControl.tsx");
/* harmony import */ var _WcbFontFamilyPicker_WcbFontFamilyPicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../WcbFontFamilyPicker/WcbFontFamilyPicker */ "./src/components/controls/WcbFontFamilyPicker/WcbFontFamilyPicker.tsx");
/* harmony import */ var _MyDisclosure__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");













const MyTypographyControl = _ref => {
  let {
    className = "space-y-5",
    typographyControl = _types__WEBPACK_IMPORTED_MODULE_5__.TYPOGRAPHY_CONTROL_DEMO,
    setAttrs__typography = () => {},
    label = "Typography",
    disclosureDefaultOpen
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__["default"])() || "Desktop";
  const {
    fontSizes: fontSizesProps,
    appearance,
    textDecoration,
    textTransform,
    lineHeight: lineHeightProps,
    letterSpacing: letterSpacingProps,
    fontFamily
  } = typographyControl;
  const {
    currentDeviceValue: FONT_SIZE
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_12__["default"])(fontSizesProps, deviceType);
  const {
    currentDeviceValue: LINE_HEIGHT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_12__["default"])(lineHeightProps, deviceType);
  const {
    currentDeviceValue: LETTER_SPACING
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_12__["default"])(letterSpacingProps, deviceType);

  //
  const handleChangeFontFamily = newFont => {
    setAttrs__typography({
      ...typographyControl,
      fontFamily: newFont
    });
  };
  const handleChangeFontAppearance = value => {
    setAttrs__typography({
      ...typographyControl,
      appearance: value || _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_7__.FONT_APPEARANCE_OPTIONS[0]
    });
  };
  const handleChangeTextDecoration = value => {
    setAttrs__typography({
      ...typographyControl,
      textDecoration: value
    });
  };
  const handleChangeTextTransform = value => {
    setAttrs__typography({
      ...typographyControl,
      textTransform: value
    });
  };
  const handleChangeLineHeight = value => {
    setAttrs__typography({
      ...typographyControl,
      lineHeight: {
        ...lineHeightProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeLetterSpacing = value => {
    setAttrs__typography({
      ...typographyControl,
      letterSpacing: {
        ...letterSpacingProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeFontSize = newFontSize => {
    setAttrs__typography({
      ...typographyControl,
      fontSizes: {
        ...fontSizesProps,
        [deviceType]: newFontSize
      }
    });
  };
  //
  const renderFontFamily = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFontFamilyPicker_WcbFontFamilyPicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
      selectedFont: fontFamily,
      onChangeFontFamily: handleChangeFontFamily
    }));
  };
  //
  const renderFontsizePicker = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "flex absolute right-8 -top-0.5 z-10",
      hasResponsive: true,
      children: ""
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FontSizePicker
    // @ts-ignore
    , {
      __nextHasNoMarginBottom: true
      // @ts-ignore
      ,
      fontSizes: _types__WEBPACK_IMPORTED_MODULE_5__.FONT_SIZES_DEMO
      // @ts-ignore
      ,
      value: FONT_SIZE,
      fallbackFontSize: 16
      // @ts-ignore
      ,
      onChange: handleChangeFontSize
    }));
  };
  const renderAppearance = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SelectFontAppearance__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: _ref2 => {
        let {
          selectedItem
        } = _ref2;
        return handleChangeFontAppearance(selectedItem);
      },
      value: appearance
    });
  };
  const renderLineHeight = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-between space-x-3 items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hasResponsive: true,
      className: "flex-shrink-0",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Line height", "wcb")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalNumberControl, {
      onChange: handleChangeLineHeight,
      value: LINE_HEIGHT,
      step: 0.1,
      min: 0,
      max: 100,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("1.5", "wcb")
    }));
  };
  const renderLetterSpacing = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-between space-x-3 items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hasResponsive: true,
      className: "flex-shrink-0",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Letter spacing", "wcb")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalUnitControl, {
      onChange: handleChangeLetterSpacing,
      value: LETTER_SPACING,
      units: [{
        value: "px",
        label: "px",
        default: 0
      }, {
        value: "%",
        label: "%",
        default: 0
      }, {
        value: "em",
        label: "em",
        default: 0
      }]
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyDisclosure__WEBPACK_IMPORTED_MODULE_11__["default"], {
    defaultOpen: disclosureDefaultOpen,
    label: label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, renderFontFamily(), renderFontsizePicker(), renderAppearance(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyTextDecorationControl_MyTextDecorationControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: textDecoration,
    onChange: handleChangeTextDecoration
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyTextTransformControl_MyTextTransformControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: textTransform,
    onChange: handleChangeTextTransform
  }), renderLineHeight(), renderLetterSpacing()));
};
/* harmony default export */ __webpack_exports__["default"] = (MyTypographyControl);

/***/ }),

/***/ "./src/components/controls/MyTypographyControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyTypographyControl/types.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FONT_SIZES_DEMO": function() { return /* binding */ FONT_SIZES_DEMO; },
/* harmony export */   "TYPOGRAPHY_CONTROL_DEMO": function() { return /* binding */ TYPOGRAPHY_CONTROL_DEMO; }
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

/***/ "./src/components/controls/MyZIndexControl/MyZIndexControl.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/controls/MyZIndexControl/MyZIndexControl.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z_INDEX_DEMO": function() { return /* binding */ Z_INDEX_DEMO; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const Z_INDEX_DEMO = {
  Desktop: undefined
};
const MyZIndexControl = _ref => {
  let {
    className = "space-y-3",
    zIndexControl = Z_INDEX_DEMO,
    setAttrs__zIndex
  } = _ref;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  const Z_INDEX = zIndexControl[deviceType] !== undefined ? zIndexControl[deviceType] : zIndexControl.Tablet !== undefined ? zIndexControl.Tablet : zIndexControl.Desktop;
  const handleChangeZIndex = value => {
    setAttrs__zIndex({
      ...zIndexControl,
      [deviceType]: value
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Above setting will only take effect once you are on the live page, and not while you're editing.", "wcb")
    // @ts-ignore
    ,
    value: undefined,
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Z-Index", "wcb")),
    allowReset: true,
    max: 1000,
    min: -100,
    initialPosition: Z_INDEX,
    onChange: handleChangeZIndex
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MyZIndexControl);

/***/ }),

/***/ "./src/components/controls/ResetButton.tsx":
/*!*************************************************!*\
  !*** ./src/components/controls/ResetButton.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./src/components/controls/SelectFontAppearance.tsx":
/*!**********************************************************!*\
  !*** ./src/components/controls/SelectFontAppearance.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FONT_APPEARANCE_OPTIONS": function() { return /* binding */ FONT_APPEARANCE_OPTIONS; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




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
const SelectFontAppearance = _ref => {
  let {
    onChange,
    value
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CustomSelectControl
  //  @ts-ignore
  , {
    __nextUnconstrainedWidth: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Appearance", "wcb"),
    options: FONT_APPEARANCE_OPTIONS,
    onChange: onChange,
    value: value
  });
};
/* harmony default export */ __webpack_exports__["default"] = (SelectFontAppearance);

/***/ }),

/***/ "./src/components/controls/WcbFontFamilyPicker/WcbFontFamilyPicker.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/WcbFontFamilyPicker/WcbFontFamilyPicker.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _google_fonts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-fonts.json */ "./src/components/controls/WcbFontFamilyPicker/google-fonts.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MyCombobox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyCombobox */ "./src/components/controls/MyCombobox.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");







const WcbFontFamilyPicker = _ref => {
  let {
    onChangeFontFamily,
    selectedFont
  } = _ref;
  const [fontFamily, setFontFamily] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(selectedFont);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setFontFamily(selectedFont);
  }, [selectedFont]);
  const systemFonts = [{
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }];
  const googleFontsList = [];
  Object.keys(_google_fonts_json__WEBPACK_IMPORTED_MODULE_1__).forEach(k => {
    googleFontsList.push({
      value: k,
      label: k
    });
  });
  const handleChangeFont = newFont => {
    setFontFamily(newFont || "");
    onChangeFontFamily(newFont || "");
    googleFontsList.some(font => {
      if (font.value === newFont) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.loadGoogleFont)(newFont);
        return true;
      }
      return false;
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.loadGoogleFont)("");
  };
  const FONTS = [{
    value: "",
    label: "Default"
  }, ...systemFonts, ...googleFontsList];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Family", "wcb")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyCombobox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: fontFamily || "",
    options: FONTS,
    onChange: handleChangeFont
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (WcbFontFamilyPicker);

/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/utils/color.js":
/*!****************************!*\
  !*** ./src/utils/color.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wcbCreateColor": function() { return /* binding */ wcbCreateColor; },
/* harmony export */   "wcbGetRgb": function() { return /* binding */ wcbGetRgb; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLinkTagWithGoogleFont": function() { return /* binding */ createLinkTagWithGoogleFont; },
/* harmony export */   "getGoogleFontURL": function() { return /* binding */ getGoogleFontURL; },
/* harmony export */   "isGoogleFontEnqueued": function() { return /* binding */ isGoogleFontEnqueued; },
/* harmony export */   "isWebFont": function() { return /* binding */ isWebFont; },
/* harmony export */   "loadGoogleFont": function() { return /* binding */ loadGoogleFont; }
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
const createLinkTagWithGoogleFont = function () {
  let fontName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  const link = document.createElement("link");
  link.classList.add("wcb-google-fonts");
  link.setAttribute("data-font-name", fontName);
  link.setAttribute("href", getGoogleFontURL(fontName));
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  return link;
};
const isGoogleFontEnqueued = function (fontName) {
  let head = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector("head");
  return head.querySelector(`[data-font-name="${fontName}"]`);
};

/***/ }),

/***/ "./src/utils/getBorderRadiusStyles.ts":
/*!********************************************!*\
  !*** ./src/utils/getBorderRadiusStyles.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");


const getBorderRadiusStyles = _ref => {
  let {
    className,
    radius
  } = _ref;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  //

  let {
    value_Desktop: radiusDesktop,
    value_Tablet: radiusTablet,
    value_Mobile: radiusMobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(radius);
  const converttted = radiusValue => {
    if (typeof radiusValue === "string") {
      radiusValue = {
        bottomLeft: radiusValue,
        bottomRight: radiusValue,
        topLeft: radiusValue,
        topRight: radiusValue
      };
    }
    return radiusValue;
  };
  radiusDesktop = converttted(radiusDesktop);
  radiusTablet = converttted(radiusDesktop);
  radiusMobile = converttted(radiusDesktop);
  return {
    [`${className}`]: {
      borderTopLeftRadius: `${radiusMobile?.topLeft}`,
      borderTopRightRadius: `${radiusMobile?.topRight}`,
      borderBottomRightRadius: `${radiusMobile?.bottomRight}`,
      borderBottomLeftRadius: `${radiusMobile?.bottomLeft}`,
      [`@media (min-width: ${media_tablet})`]: {
        borderTopLeftRadius: `${radiusTablet?.topLeft}`,
        borderTopRightRadius: ` ${radiusTablet?.topRight}`,
        borderBottomRightRadius: `${radiusTablet?.bottomRight}`,
        borderBottomLeftRadius: `${radiusTablet?.bottomLeft}`
      },
      [`@media (min-width: ${media_desktop})`]: {
        borderTopLeftRadius: `${radiusDesktop?.topLeft}`,
        borderTopRightRadius: `${radiusDesktop?.topRight}`,
        borderBottomRightRadius: `${radiusDesktop?.bottomRight}`,
        borderBottomLeftRadius: `${radiusDesktop?.bottomLeft}`
      }
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (getBorderRadiusStyles);

/***/ }),

/***/ "./src/utils/getBorderStyles.ts":
/*!**************************************!*\
  !*** ./src/utils/getBorderStyles.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBorderRadiusStyles */ "./src/utils/getBorderRadiusStyles.ts");

const getBorderStyles = _ref => {
  let {
    border,
    className,
    isWithRadius = false
  } = _ref;
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
          borderTop: `${top.width} ${top.style} ${top.color}`,
          borderLeft: `${left.width} ${left.style} ${left.color}`,
          borderRight: `${right.width} ${right.style} ${right.color}`,
          borderBottom: `${bottom.width} ${bottom.style} ${bottom.color}`,
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
          border: `${width} ${style} ${color}`,
          "&:hover": {
            borderColor: `${hoverColor}`
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
      className
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
/* harmony default export */ __webpack_exports__["default"] = (getBorderStyles);

/***/ }),

/***/ "./src/utils/getBoxShadowStyles.ts":
/*!*****************************************!*\
  !*** ./src/utils/getBoxShadowStyles.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/getBoxShadowStyles */ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts");

const getBoxShadowStyles = _ref => {
  let {
    boxShadow,
    className
  } = _ref;
  const {
    Hover,
    Normal
  } = boxShadow;
  const {
    presetClass,
    blur,
    color,
    horizontal,
    position,
    spread,
    vertical
  } = Normal || {};
  const {
    presetClass: presetClass_h,
    blur: blur_h,
    color: color_h,
    horizontal: horizontal_h,
    position: position_h,
    spread: spread_h,
    vertical: vertical_h
  } = Hover || {};
  //
  let VALUE = "";
  let VALUE_H = "";
  //
  if (presetClass) {
    VALUE = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__.getShadowStyleValueFromTwPreset)(presetClass, color);
  } else {
    VALUE = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${position === "inset" ? position : ""}`;
  }
  //
  if (presetClass_h) {
    VALUE_H = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__.getShadowStyleValueFromTwPreset)(presetClass_h, color_h);
  } else {
    VALUE_H = `${horizontal_h}px ${vertical_h}px ${blur_h}px ${spread_h}px ${color_h} ${position_h === "inset" ? position_h : ""}`;
  }
  return {
    [`${className}`]: {
      boxShadow: VALUE,
      "&:hover": {
        boxShadow: VALUE_H
      }
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (getBoxShadowStyles);

/***/ }),

/***/ "./src/utils/getPaddingMarginStyles.ts":
/*!*********************************************!*\
  !*** ./src/utils/getPaddingMarginStyles.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");



const getPaddingMarginStyles = _ref => {
  let {
    className,
    padding,
    margin
  } = _ref;
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

  return _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
		${className} {
			padding-top: ${padding_Mobile?.top};
			padding-right: ${padding_Mobile?.right};
			padding-bottom: ${padding_Mobile?.bottom};
			padding-left: ${padding_Mobile?.left};
			margin-top: ${margin_Mobile?.top};
			margin-right: ${margin_Mobile?.right};
			margin-bottom: ${margin_Mobile?.bottom};
			margin-left: ${margin_Mobile?.left};
			@media (min-width: ${media_tablet}) {
				padding-top: ${padding_Tablet?.top};
				padding-right: ${padding_Tablet?.right};
				padding-bottom: ${padding_Tablet?.bottom};
				padding-left: ${padding_Tablet?.left};
				margin-top: ${margin_Tablet?.top};
				margin-right: ${margin_Tablet?.right};
				margin-bottom: ${margin_Tablet?.bottom};
				margin-left: ${margin_Tablet?.left};
			}
			@media (min-width: ${media_desktop}) {
				padding-top: ${padding_Desktop?.top};
				padding-right: ${padding_Desktop?.right};
				padding-bottom: ${padding_Desktop?.bottom};
				padding-left: ${padding_Desktop?.left};
				margin-top: ${margin_Desktop?.top};
				margin-right: ${margin_Desktop?.right};
				margin-bottom: ${margin_Desktop?.bottom};
				margin-left: ${margin_Desktop?.left};
			}
		}
	`;
};
/* harmony default export */ __webpack_exports__["default"] = (getPaddingMarginStyles);

/***/ }),

/***/ "./src/utils/getStyleObjectFromResponsiveAttr.ts":
/*!*******************************************************!*\
  !*** ./src/utils/getStyleObjectFromResponsiveAttr.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");


function getStyleObjectFromResponsiveAttr(_ref) {
  let {
    className,
    prefix,
    prefix_2,
    prefix_3,
    prefix_4,
    value,
    hasUnit = true,
    unit
  } = _ref;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_WCB_GLOBAL_VARIABLES;
  let {
    value_Desktop,
    value_Tablet,
    value_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (!hasUnit && !!unit && (typeof value_Desktop === "string" || typeof value_Desktop === "number")) {
    value_Desktop = value_Desktop + unit;
    value_Tablet = value_Tablet + unit;
    value_Mobile = value_Mobile + unit;
  }

  //
  let prefix2 = prefix_2 || "";
  let prefix3 = prefix_3 || "";
  let prefix4 = prefix_4 || "";
  return {
    [className]: {
      [prefix]: `${value_Mobile}`,
      [prefix2]: prefix_2 ? `${value_Mobile}` : null,
      [prefix3]: prefix_3 ? `${value_Mobile}` : null,
      [prefix4]: prefix_4 ? `${value_Mobile}` : null,
      [`@media (min-width: ${media_tablet})`]: {
        [prefix]: `${value_Tablet}`,
        [prefix2]: prefix_2 ? `${value_Tablet}` : null,
        [prefix3]: prefix_3 ? `${value_Tablet}` : null,
        [prefix4]: prefix_4 ? `${value_Tablet}` : null
      },
      [`@media (min-width: ${media_desktop})`]: {
        [prefix]: `${value_Desktop}`,
        [prefix2]: prefix_2 ? `${value_Desktop}` : null,
        [prefix3]: prefix_3 ? `${value_Desktop}` : null,
        [prefix4]: prefix_4 ? `${value_Desktop}` : null
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (getStyleObjectFromResponsiveAttr);

/***/ }),

/***/ "./src/utils/getTypographyStyles.ts":
/*!******************************************!*\
  !*** ./src/utils/getTypographyStyles.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./src/utils/font.ts");


const getTypographyStyles = _ref => {
  let {
    typography,
    className
  } = _ref;
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

  return {
    [`${className}`]: {
      fontFamily: fontFamily,
      fontSize: fontSize_Mobile,
      fontWeight: appearance.style?.fontWeight,
      fontStyle: appearance.style?.fontStyle,
      textDecoration,
      textTransform,
      lineHeight: lineHeight_Mobile,
      letterSpacing: letterSpacing_Mobile,
      [`@media (min-width: ${media_tablet})`]: {
        fontSize: fontSize_Tablet,
        lineHeight: lineHeight_Tablet,
        letterSpacing: letterSpacing_Tablet
      },
      [`@media (min-width: ${media_desktop})`]: {
        fontSize: fontSize_Desktop,
        lineHeight: lineHeight_Desktop,
        letterSpacing: letterSpacing_Desktop
      }
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (getTypographyStyles);

/***/ }),

/***/ "./src/utils/getValueFromAttrsResponsives.ts":
/*!***************************************************!*\
  !*** ./src/utils/getValueFromAttrsResponsives.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (getValueFromAttrsResponsives);

/***/ }),

/***/ "./src/utils/global-style.js":
/*!***********************************!*\
  !*** ./src/utils/global-style.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToResponsiveStyle": function() { return /* binding */ convertToResponsiveStyle; },
/* harmony export */   "createStyleTagWithGlobalStyleContent": function() { return /* binding */ createStyleTagWithGlobalStyleContent; },
/* harmony export */   "isStyleTagAdded": function() { return /* binding */ isStyleTagAdded; },
/* harmony export */   "removeOldStyleTag": function() { return /* binding */ removeOldStyleTag; },
/* harmony export */   "renderGlobalStyle": function() { return /* binding */ renderGlobalStyle; }
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
const removeOldStyleTag = function () {
  let head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('head');
  if (!isStyleTagAdded(head)) {
    return;
  }
  const oldTag = head.querySelector('.wcb-global-style');
  oldTag.remove();
};
const isStyleTagAdded = function () {
  let head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('head');
  return head.querySelector('.wcb-global-style');
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSToCSS": function() { return /* binding */ JSToCSS; },
/* harmony export */   "capitalizeFirstLetter": function() { return /* binding */ capitalizeFirstLetter; },
/* harmony export */   "convertToResponsiveStyle": function() { return /* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.convertToResponsiveStyle; },
/* harmony export */   "createLinkTagWithGoogleFont": function() { return /* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.createLinkTagWithGoogleFont; },
/* harmony export */   "createStyleTagWithGlobalStyleContent": function() { return /* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.createStyleTagWithGlobalStyleContent; },
/* harmony export */   "getDocumentHead": function() { return /* binding */ getDocumentHead; },
/* harmony export */   "getGoogleFontURL": function() { return /* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.getGoogleFontURL; },
/* harmony export */   "isEditingContent": function() { return /* binding */ isEditingContent; },
/* harmony export */   "isEditingPost": function() { return /* binding */ isEditingPost; },
/* harmony export */   "isGoogleFontEnqueued": function() { return /* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isGoogleFontEnqueued; },
/* harmony export */   "isStyleTagAdded": function() { return /* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.isStyleTagAdded; },
/* harmony export */   "isWebFont": function() { return /* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isWebFont; },
/* harmony export */   "loadGoogleFont": function() { return /* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.loadGoogleFont; },
/* harmony export */   "removeOldStyleTag": function() { return /* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.removeOldStyleTag; },
/* harmony export */   "renderGlobalStyle": function() { return /* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.renderGlobalStyle; },
/* harmony export */   "wcbCreateColor": function() { return /* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbCreateColor; },
/* harmony export */   "wcbGetRgb": function() { return /* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbGetRgb; }
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
	var nativeCodeString = '[native code]';

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
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
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

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/***/ (function(module) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


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

/***/ "./src/block-image/editor.scss":
/*!*************************************!*\
  !*** ./src/block-image/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-image/style.scss":
/*!************************************!*\
  !*** ./src/block-image/style.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/styles.scss":
/*!*******************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/styles.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
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

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["jQuery"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["api"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blob"];

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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

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

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

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

/***/ "./node_modules/@headlessui/react/dist/components/description/description.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Disclosure": function() { return /* binding */ Oe; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
var Q=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Q||{}),V=(n=>(n[n.ToggleDisclosure=0]="ToggleDisclosure",n[n.CloseDisclosure=1]="CloseDisclosure",n[n.SetButtonId=2]="SetButtonId",n[n.SetPanelId=3]="SetPanelId",n[n.LinkPanel=4]="LinkPanel",n[n.UnlinkPanel=5]="UnlinkPanel",n))(V||{});let X={[0]:e=>({...e,disclosureState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[3](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},B=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);B.displayName="DisclosureContext";function h(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(B);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,h),o}return t}let H=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);H.displayName="DisclosureAPIContext";function j(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(H);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,j),o}return t}let U=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);U.displayName="DisclosurePanelContext";function Y(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(U)}function Z(e,t){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t.type,X,e,t)}let ee=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,te=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,o){let{defaultOpen:l=!1,...i}=t,s=`headlessui-disclosure-button-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,n=`headlessui-disclosure-panel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(o,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.optionalRef)(f=>{u.current=f},t.as===void 0||t.as===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Z,{disclosureState:l?0:1,linkedPanel:!1,buttonRef:m,panelRef:T,buttonId:s,panelId:n}),[{disclosureState:p},a]=c;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>a({type:2,buttonId:s}),[s,a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>a({type:3,panelId:n}),[n,a]);let P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(f=>{a({type:1});let C=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_6__.getOwnerDocument)(u);if(!C)return;let A=(()=>f?f instanceof HTMLElement?f:f.current instanceof HTMLElement?f.current:C.getElementById(s):C.getElementById(s))();A==null||A.focus()}),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:P}),[P]),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:p===0,close:P}),[p,P]),d={ref:D};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(B.Provider,{value:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement(H.Provider,{value:b},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(p,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:d,theirProps:i,slot:r,defaultTag:ee,name:"Disclosure"}))))}),ne="button",le=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,o){let[l,i]=h("Disclosure.Button"),s=Y(),n=s===null?!1:s===l.panelId,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(u,o,n?null:l.buttonRef),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(r=>{var d;if(n){if(l.disclosureState===1)return;switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:r.preventDefault(),r.stopPropagation(),i({type:0}),(d=l.buttonRef.current)==null||d.focus();break}}else switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:r.preventDefault(),r.stopPropagation(),i({type:0});break}}),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(r=>{switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:r.preventDefault();break}}),c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(r=>{var d;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__.isDisabledReactIssue7711)(r.currentTarget)||t.disabled||(n?(i({type:0}),(d=l.buttonRef.current)==null||d.focus()):i({type:0}))}),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l.disclosureState===0}),[l]),a=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_10__.useResolveButtonType)(t,u),P=t,b=n?{ref:D,type:a,onKeyDown:T,onClick:c}:{ref:D,id:l.buttonId,type:a,"aria-expanded":t.disabled?void 0:l.disclosureState===0,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:T,onKeyUp:m,onClick:c};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:b,theirProps:P,slot:p,defaultTag:ne,name:"Disclosure.Button"})}),oe="div",re=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,se=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,o){let[l,i]=h("Disclosure.Panel"),{close:s}=j("Disclosure.Panel"),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(o,l.panelRef,p=>{i({type:p?4:5})}),u=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.useOpenClosed)(),D=(()=>u!==null?u===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Open:l.disclosureState===0)(),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l.disclosureState===0,close:s}),[l,s]),m=t,c={ref:n,id:l.panelId};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(U.Provider,{value:l.panelId},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:c,theirProps:m,slot:T,defaultTag:oe,features:re,visible:D,name:"Disclosure.Panel"}))}),Oe=Object.assign(te,{Button:le,Panel:se});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/@headlessui/react/dist/components/popover/popover.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/popover/popover.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popover": function() { return /* binding */ mt; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-tab-direction.js */ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js");
var Ae=(f=>(f[f.Open=0]="Open",f[f.Closed=1]="Closed",f))(Ae||{}),Ce=(n=>(n[n.TogglePopover=0]="TogglePopover",n[n.ClosePopover=1]="ClosePopover",n[n.SetButton=2]="SetButton",n[n.SetButtonId=3]="SetButtonId",n[n.SetPanel=4]="SetPanel",n[n.SetPanelId=5]="SetPanelId",n))(Ce||{});let Re={[0]:r=>({...r,popoverState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r.popoverState,{[0]:1,[1]:0})}),[1](r){return r.popoverState===1?r:{...r,popoverState:1}},[2](r,t){return r.button===t.button?r:{...r,button:t.button}},[3](r,t){return r.buttonId===t.buttonId?r:{...r,buttonId:t.buttonId}},[4](r,t){return r.panel===t.panel?r:{...r,panel:t.panel}},[5](r,t){return r.panelId===t.panelId?r:{...r,panelId:t.panelId}}},te=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);te.displayName="PopoverContext";function Q(r){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(te);if(t===null){let f=new Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,Q),f}return t}let oe=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);oe.displayName="PopoverAPIContext";function re(r){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(oe);if(t===null){let f=new Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,re),f}return t}let ne=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ne.displayName="PopoverGroupContext";function ce(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ne)}let le=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);le.displayName="PopoverPanelContext";function Oe(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(le)}function Me(r,t){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t.type,Re,r,t)}let Le="div",Ie=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,f){var O;let o=`headlessui-popover-button-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,v=`headlessui-popover-panel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(f,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.optionalRef)(e=>{a.current=e})),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Me,{popoverState:1,button:null,buttonId:o,panel:null,panelId:v,beforePanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),afterPanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),[{popoverState:y,button:l,panel:P,beforePanelSentinel:s,afterPanelSentinel:B},i]=g,T=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__.useOwnerDocument)((O=a.current)!=null?O:l);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>i({type:3,buttonId:o}),[o,i]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>i({type:5,panelId:v}),[v,i]);let c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{if(!l||!P)return!1;for(let M of document.querySelectorAll("body > *"))if(Number(M==null?void 0:M.contains(l))^Number(M==null?void 0:M.contains(P)))return!0;let e=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.getFocusableElements)(),p=e.indexOf(l),m=(p+e.length-1)%e.length,C=(p+1)%e.length,D=e[m],V=e[C];return!P.contains(D)&&!P.contains(V)},[l,P]),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({buttonId:o,panelId:v,close:()=>i({type:1})}),[o,v,i]),E=ce(),A=E==null?void 0:E.registerPopover,L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{var e;return(e=E==null?void 0:E.isFocusWithinPopoverGroup())!=null?e:(T==null?void 0:T.activeElement)&&((l==null?void 0:l.contains(T.activeElement))||(P==null?void 0:P.contains(T.activeElement)))});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>A==null?void 0:A(d),[A,d]),(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_8__.useEventListener)(T==null?void 0:T.defaultView,"focus",e=>{var p,m,C,D;y===0&&(L()||!l||!P||(m=(p=s.current)==null?void 0:p.contains)!=null&&m.call(p,e.target)||(D=(C=B.current)==null?void 0:C.contains)!=null&&D.call(C,e.target)||i({type:1}))},!0),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_9__.useOutsideClick)([l,P],(e,p)=>{i({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.isFocusableElement)(p,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.FocusableMode.Loose)||(e.preventDefault(),l==null||l.focus())},y===0);let I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{i({type:1});let p=(()=>e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:l:l)();p==null||p.focus()}),H=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:I,isPortalled:c}),[I,c]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:y===0,close:I}),[y,I]),S=t,R={ref:n};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(te.Provider,{value:g},react__WEBPACK_IMPORTED_MODULE_0__.createElement(oe.Provider,{value:H},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(y,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:R,theirProps:S,slot:u,defaultTag:Le,name:"Popover"}))))}),Fe="button",he=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,f){let[o,v]=Q("Popover.Button"),{isPortalled:a}=re("Popover.Button"),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),g=`headlessui-focus-sentinel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,y=ce(),l=y==null?void 0:y.closeOthers,P=Oe(),s=P===null?!1:P===o.panelId,B=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(n,f,s?null:e=>e&&v({type:2,button:e})),i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(n,f),T=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__.useOwnerDocument)(n),c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{var p,m,C;if(s){if(o.popoverState===1)return;switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:e.preventDefault(),(m=(p=e.target).click)==null||m.call(p),v({type:1}),(C=o.button)==null||C.focus();break}}else switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:e.preventDefault(),e.stopPropagation(),o.popoverState===1&&(l==null||l(o.buttonId)),v({type:0});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape:if(o.popoverState!==0)return l==null?void 0:l(o.buttonId);if(!n.current||(T==null?void 0:T.activeElement)&&!n.current.contains(T.activeElement))return;e.preventDefault(),e.stopPropagation(),v({type:1});break}}),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{s||e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space&&e.preventDefault()}),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{var p,m;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__.isDisabledReactIssue7711)(e.currentTarget)||t.disabled||(s?(v({type:1}),(p=o.button)==null||p.focus()):(e.preventDefault(),e.stopPropagation(),o.popoverState===1&&(l==null||l(o.buttonId)),v({type:0}),(m=o.button)==null||m.focus()))}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{e.preventDefault(),e.stopPropagation()}),L=o.popoverState===0,I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:L}),[L]),H=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__.useResolveButtonType)(t,n),u=t,S=s?{ref:i,type:H,onKeyDown:c,onClick:E}:{ref:B,id:o.buttonId,type:H,"aria-expanded":t.disabled?void 0:o.popoverState===0,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:c,onKeyUp:d,onClick:E,onMouseDown:A},R=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.useTabDirection)(),O=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{let e=o.panel;if(!e)return;function p(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(R.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Forwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.First),[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.Last)})}p()});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:S,theirProps:u,slot:I,defaultTag:Fe,name:"Popover.Button"}),L&&!s&&a&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Hidden,{id:g,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Features.Focusable,as:"button",type:"button",onFocus:O}))}),Be="div",De=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,xe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,f){let[{popoverState:o},v]=Q("Popover.Overlay"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(f),n=`headlessui-popover-overlay-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,g=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)(),y=(()=>g!==null?g===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open:o===0)(),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(i=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__.isDisabledReactIssue7711)(i.currentTarget))return i.preventDefault();v({type:1})}),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:a,id:n,"aria-hidden":!0,onClick:l},theirProps:t,slot:P,defaultTag:Be,features:De,visible:y,name:"Popover.Overlay"})}),He="div",Ge=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,f){let{focus:o=!1,...v}=t,[a,n]=Q("Popover.Panel"),{close:g,isPortalled:y}=re("Popover.Panel"),l=`headlessui-focus-sentinel-before-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,P=`headlessui-focus-sentinel-after-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),B=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(s,f,u=>{n({type:4,panel:u})}),i=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__.useOwnerDocument)(s),T=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)(),c=(()=>T!==null?T===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open:a.popoverState===0)(),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(u=>{var S;switch(u.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape:if(a.popoverState!==0||!s.current||(i==null?void 0:i.activeElement)&&!s.current.contains(i.activeElement))return;u.preventDefault(),u.stopPropagation(),n({type:1}),(S=a.button)==null||S.focus();break}});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var u;t.static||a.popoverState===1&&((u=t.unmount)!=null?u:!0)&&n({type:4,panel:null})},[a.popoverState,t.unmount,t.static,n]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!o||a.popoverState!==0||!s.current)return;let u=i==null?void 0:i.activeElement;s.current.contains(u)||(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.focusIn)(s.current,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.First)},[o,s,a.popoverState]);let E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:a.popoverState===0,close:g}),[a,g]),A={ref:B,id:a.panelId,onKeyDown:d,onBlur:o&&a.popoverState===0?u=>{var R,O,e,p,m;let S=u.relatedTarget;!S||!s.current||(R=s.current)!=null&&R.contains(S)||(n({type:1}),(((e=(O=a.beforePanelSentinel.current)==null?void 0:O.contains)==null?void 0:e.call(O,S))||((m=(p=a.afterPanelSentinel.current)==null?void 0:p.contains)==null?void 0:m.call(p,S)))&&S.focus({preventScroll:!0}))}:void 0,tabIndex:-1},L=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.useTabDirection)(),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{let u=s.current;if(!u)return;function S(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(L.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Forwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.focusIn)(u,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.First)},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Backwards]:()=>{var R;(R=a.button)==null||R.focus({preventScroll:!0})}})}S()}),H=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{let u=s.current;if(!u)return;function S(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(L.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Forwards]:()=>{var C,D,V;if(!a.button)return;let R=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.getFocusableElements)(),O=R.indexOf(a.button),e=R.slice(0,O+1),m=[...R.slice(O+1),...e];for(let M of m.slice())if(((D=(C=M==null?void 0:M.id)==null?void 0:C.startsWith)==null?void 0:D.call(C,"headlessui-focus-sentinel-"))||((V=a.panel)==null?void 0:V.contains(M))){let ae=m.indexOf(M);ae!==-1&&m.splice(ae,1)}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.focusIn)(m,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.First,!1)},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.focusIn)(u,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.Last)})}S()});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(le.Provider,{value:a.panelId},c&&y&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Hidden,{id:l,ref:a.beforePanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Features.Focusable,as:"button",type:"button",onFocus:I}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:A,theirProps:v,slot:E,defaultTag:He,features:Ge,visible:c,name:"Popover.Panel"}),c&&y&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Hidden,{id:P,ref:a.afterPanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Features.Focusable,as:"button",type:"button",onFocus:H}))}),_e="div",we=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,f){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),v=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(o,f),[a,n]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(c=>{n(d=>{let E=d.indexOf(c);if(E!==-1){let A=d.slice();return A.splice(E,1),A}return d})}),y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(c=>(n(d=>[...d,c]),()=>g(c))),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{var E;let c=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_16__.getOwnerDocument)(o);if(!c)return!1;let d=c.activeElement;return(E=o.current)!=null&&E.contains(d)?!0:a.some(A=>{var L,I;return((L=c.getElementById(A.buttonId))==null?void 0:L.contains(d))||((I=c.getElementById(A.panelId))==null?void 0:I.contains(d))})}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(c=>{for(let d of a)d.buttonId!==c&&d.close()}),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerPopover:y,unregisterPopover:g,isFocusWithinPopoverGroup:l,closeOthers:P}),[y,g,l,P]),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({}),[]),i=t,T={ref:v};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ne.Provider,{value:s},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:T,theirProps:i,slot:B,defaultTag:_e,name:"Popover.Group"}))}),mt=Object.assign(Ie,{Button:he,Overlay:xe,Panel:ke,Group:we});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/@headlessui/react/dist/components/transitions/transition.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/transition.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDocumentEvent": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function d(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEventListener": function() { return /* binding */ E; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function E(n,e,a,t){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(a);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionalRef": function() { return /* binding */ T; },
/* harmony export */   "useSyncRefs": function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": function() { return /* binding */ s; },
/* harmony export */   "useTabDirection": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
var s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s||{});function n(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_1__.useWindowEvent)("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-transition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-transition.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTreeWalker": function() { return /* binding */ F; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{o.current=t,l.current=r},[t,r]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{if(!e||!c)return;let n=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign(i=>f(i),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)},[e,c,o,l])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWindowEvent": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function s(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/hidden.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/hidden.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/@heroicons/react/24/outline/esm/MinusIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/MinusIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MinusIcon({
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
    d: "M19.5 12h-15"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MinusIcon);
/* harmony default export */ __webpack_exports__["default"] = (ForwardRef);

/***/ }),

/***/ "./node_modules/color-parse/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/color-parse/index.mjs ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
/**
 * @module color-parse
 */


/* harmony default export */ __webpack_exports__["default"] = (parse);

/**
 * Base hues
 * http://dev.w3.org/csswg/css-color/#typedef-named-hue
 */
//FIXME: use external hue detector
var baseHues = {
	red: 0,
	orange: 60,
	yellow: 120,
	green: 180,
	blue: 240,
	purple: 300
}

/**
 * Parse color from the string passed
 *
 * @return {Object} A space indicator `space`, an array `values` and `alpha`
 */
function parse (cstr) {
	var m, parts = [], alpha = 1, space

	if (typeof cstr === 'string') {
		//keyword
		if (color_name__WEBPACK_IMPORTED_MODULE_0__[cstr]) {
			parts = color_name__WEBPACK_IMPORTED_MODULE_0__[cstr].slice()
			space = 'rgb'
		}

		//reserved words
		else if (cstr === 'transparent') {
			alpha = 0
			space = 'rgb'
			parts = [0,0,0]
		}

		//hex
		else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
			var base = cstr.slice(1)
			var size = base.length
			var isShort = size <= 4
			alpha = 1

			if (isShort) {
				parts = [
					parseInt(base[0] + base[0], 16),
					parseInt(base[1] + base[1], 16),
					parseInt(base[2] + base[2], 16)
				]
				if (size === 4) {
					alpha = parseInt(base[3] + base[3], 16) / 255
				}
			}
			else {
				parts = [
					parseInt(base[0] + base[1], 16),
					parseInt(base[2] + base[3], 16),
					parseInt(base[4] + base[5], 16)
				]
				if (size === 8) {
					alpha = parseInt(base[6] + base[7], 16) / 255
				}
			}

			if (!parts[0]) parts[0] = 0
			if (!parts[1]) parts[1] = 0
			if (!parts[2]) parts[2] = 0

			space = 'rgb'
		}

		//color space
		else if (m = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
			var name = m[1]
			var isRGB = name === 'rgb'
			var base = name.replace(/a$/, '')
			space = base
			var size = base === 'cmyk' ? 4 : base === 'gray' ? 1 : 3
			parts = m[2].trim()
				.split(/\s*[,\/]\s*|\s+/)
				.map(function (x, i) {
					//<percentage>
					if (/%$/.test(x)) {
						//alpha
						if (i === size)	return parseFloat(x) / 100
						//rgb
						if (base === 'rgb') return parseFloat(x) * 255 / 100
						return parseFloat(x)
					}
					//hue
					else if (base[i] === 'h') {
						//<deg>
						if (/deg$/.test(x)) {
							return parseFloat(x)
						}
						//<base-hue>
						else if (baseHues[x] !== undefined) {
							return baseHues[x]
						}
					}
					return parseFloat(x)
				})

			if (name === base) parts.push(1)
			alpha = (isRGB) ? 1 : (parts[size] === undefined) ? 1 : parts[size]
			parts = parts.slice(0, size)
		}

		//named channels case
		else if (cstr.length > 10 && /[0-9](?:\s|\/)/.test(cstr)) {
			parts = cstr.match(/([0-9]+)/g).map(function (value) {
				return parseFloat(value)
			})

			space = cstr.match(/([a-z])/ig).join('').toLowerCase()
		}
	}

	//numeric case
	else if (!isNaN(cstr)) {
		space = 'rgb'
		parts = [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff]
	}

	//array-like
	else if (Array.isArray(cstr) || cstr.length) {
		parts = [cstr[0], cstr[1], cstr[2]]
		space = 'rgb'
		alpha = cstr.length === 4 ? cstr[3] : 1
	}

	//object case - detects css cases of rgb and hsl
	else if (cstr instanceof Object) {
		if (cstr.r != null || cstr.red != null || cstr.R != null) {
			space = 'rgb'
			parts = [
				cstr.r || cstr.red || cstr.R || 0,
				cstr.g || cstr.green || cstr.G || 0,
				cstr.b || cstr.blue || cstr.B || 0
			]
		}
		else {
			space = 'hsl'
			parts = [
				cstr.h || cstr.hue || cstr.H || 0,
				cstr.s || cstr.saturation || cstr.S || 0,
				cstr.l || cstr.lightness || cstr.L || cstr.b || cstr.brightness
			]
		}

		alpha = cstr.a || cstr.alpha || cstr.opacity || 1

		if (cstr.opacity != null) alpha /= 100
	}

	return {
		space: space,
		values: parts,
		alpha: alpha
	}
}


/***/ }),

/***/ "./node_modules/color-rgba/index.mjs":
/*!*******************************************!*\
  !*** ./node_modules/color-rgba/index.mjs ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rgba; }
/* harmony export */ });
/* harmony import */ var color_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-parse */ "./node_modules/color-parse/index.mjs");
/* harmony import */ var color_space_rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-space/rgb.js */ "./node_modules/color-space/rgb.js");
/* harmony import */ var color_space_hsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color-space/hsl.js */ "./node_modules/color-space/hsl.js");
/** @module  color-rgba */




function rgba (color) {
	// template literals
	if (Array.isArray(color) && color.raw) color = String.raw(...arguments)

	var values, i, l

	//attempt to parse non-array arguments
	var parsed = (0,color_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(color)

	if (!parsed.space) return []

	const min = parsed.space[0] === 'h' ? color_space_hsl_js__WEBPACK_IMPORTED_MODULE_2__["default"].min : color_space_rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"].min
	const max = parsed.space[0] === 'h' ? color_space_hsl_js__WEBPACK_IMPORTED_MODULE_2__["default"].max : color_space_rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"].max

	values = Array(3)
	values[0] = Math.min(Math.max(parsed.values[0], min[0]), max[0])
	values[1] = Math.min(Math.max(parsed.values[1], min[1]), max[1])
	values[2] = Math.min(Math.max(parsed.values[2], min[2]), max[2])

	if (parsed.space[0] === 'h') {
		values = color_space_hsl_js__WEBPACK_IMPORTED_MODULE_2__["default"].rgb(values)
	}

	values.push(Math.min(Math.max(parsed.alpha, 0), 1))

	return values
}


/***/ }),

/***/ "./node_modules/color-space/hsl.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hsl.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/color-space/rgb.js");
/**
 * @module color-space/hsl
 */


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hsl',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'saturation', 'lightness'],
	alias: ['HSL'],

	rgb: function(hsl) {
		var h = hsl[0] / 360,
				s = hsl[1] / 100,
				l = hsl[2] / 100,
				t1, t2, t3, rgb, val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		}
		else {
			t2 = l + s - l * s;
		}
		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * - (i - 1);
			if (t3 < 0) {
				t3++;
			}
			else if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			}
			else if (2 * t3 < 1) {
				val = t2;
			}
			else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			}
			else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	}
});


//extend rgb
_rgb_js__WEBPACK_IMPORTED_MODULE_0__["default"].hsl = function(rgb) {
	var r = rgb[0]/255,
			g = rgb[1]/255,
			b = rgb[2]/255,
			min = Math.min(r, g, b),
			max = Math.max(r, g, b),
			delta = max - min,
			h, s, l;

	if (max === min) {
		h = 0;
	}
	else if (r === max) {
		h = (g - b) / delta;
	}
	else if (g === max) {
		h = 2 + (b - r) / delta;
	}
	else if (b === max) {
		h = 4 + (r - g)/ delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	}
	else if (l <= 0.5) {
		s = delta / (max + min);
	}
	else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};


/***/ }),

/***/ "./node_modules/color-space/rgb.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/rgb.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * RGB space.
 *
 * @module  color-space/rgb
 */

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'rgb',
	min: [0,0,0],
	max: [255,255,255],
	channel: ['red', 'green', 'blue'],
	alias: ['RGB']
});


/***/ }),

/***/ "./node_modules/stylis/src/Enum.js":
/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/block-image/block.json":
/*!************************************!*\
  !*** ./src/block-image/block.json ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wcb/image","version":"0.1.0","title":"Image","category":"wcb-blocks","icon":"heart","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false},"textdomain":"wcb-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./FrontendStyles.js"}');

/***/ }),

/***/ "./src/components/controls/WcbFontFamilyPicker/google-fonts.json":
/*!***********************************************************************!*\
  !*** ./src/components/controls/WcbFontFamilyPicker/google-fonts.json ***!
  \***********************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			"block-image/index": 0,
/******/ 			"block-image/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-image/style-index"], function() { return __webpack_require__("./src/block-image/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
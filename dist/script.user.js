// ==UserScript==
// @name Cubhub Miles Entry
// @description Automates entering miles from Cubhub
// @version 1.0.19
// @author Justin Loveless
// @match https://login.companymileage.com/*
// @grant GM_addStyle
// @updateURL https://raw.githubusercontent.com/justinloveless/Cubhub-Miles-Entry/dist/script.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
#floating-list-container {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 250px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

#floating-list-container h3 {
    margin: 0 0 10px;
}

#dropdown {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
}

#add-btn, #clear-btn, #submit-btn {
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    cursor: pointer;
    background-color: #28a745;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 14px;
}

#add-btn:hover, #clear-btn:hover, #submit-btn:hover {
    background-color: #218838;
}

#list-items {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
}

#list-items li {
    padding: 8px;
    background-color: #444;
    border: 1px solid #333;
    border-radius: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#list-items li button {
    background-color: red;
    border: none;
    color: white;
    font-size: 12px;
    cursor: pointer;
    padding: 2px 6px;
    border-radius: 5px;
}

#list-items li button:hover {
    background-color: #c82333;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 601:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 439:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"name":"home","address":"6010 Spring Creek Lane","city":"Spring","zip":"77379"},{"name":"milan saez","address":"31103 Gulf Cypress Ln","city":"Hockley","zip":"77447"},{"name":"London Saez","address":"31103 Gulf Cypress Ln","city":"Hockley","zip":"77447"},{"name":"Ortega Bros","address":"16103 Prairie Lea St Cypress, Tx, United States","city":"Cypress","zip":"77429"},{"name":"Samarah ABA","address":"16410 Cypress Rose Hill Rd","city":"Cypress","zip":"77429"},{"name":"Chelsea Monroy","address":"12215 Hurst Ct","city":"Cypress","zip":"77429"},{"name":"Zayden Gonzales","address":"14903 Calico Heights Ln","city":"Cypress","zip":"77429"},{"name":"Ayden Arrington","address":"15330 Ella Blvd, Unit 1613","city":"Houston","zip":"77090"},{"name":"John Demetro","address":"12817 N Palomino Lake Cir","city":"Cypress","zip":"77429"},{"name":"Niles Doud","address":"12715 Ravensong Dr","city":"Cypress","zip":"77429"},{"name":"Anthony Johnson","address":"12027 Mariposa Canyon Dr","city":"Tomball","zip":"77377"},{"name":"Rebecca Lowery","address":"12503 Exbury Ct","city":"TOMBALL","zip":"77377-8447"},{"name":"Jose Rivera","address":"20330 Savannah Bay Rd Cypress, Tx, United States","city":"Cypress","zip":"77433"},{"name":"Jayden Soto","address":"10000 N Eldridge Pkwy","city":"Houston","zip":"77065"}]');

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// ./src/styles.js
// Function to add styles to the DOM
function addStyles(cssContent) {
  if (typeof GM_addStyle !== 'undefined') {
    GM_addStyle(cssContent);
  } else {
    var styleElement = document.createElement('style');
    styleElement.textContent = cssContent;
    document.head.appendChild(styleElement);
  }
}
/* harmony default export */ const styles = (addStyles);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles.css
var cjs_js_src_styles = __webpack_require__(365);
;// ./src/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_src_styles/* default */.A, options);




       /* harmony default export */ const src_styles = (cjs_js_src_styles/* default */.A && cjs_js_src_styles/* default */.A.locals ? cjs_js_src_styles/* default */.A.locals : undefined);

;// ./src/miniFramework.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function createElement(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = document.createElement(type);
  Object.entries(props).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (key.startsWith('on') && typeof value === 'function') {
      element.addEventListener(key.toLowerCase().substr(2), value);
    } else if (key === 'style' && _typeof(value) === 'object') {
      Object.assign(element.style, value);
    } else {
      element[key] = value;
    }
  });
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  children.forEach(function (child) {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  });
  return element;
}
function createComponent(render) {
  return function (props) {
    return render(props);
  };
}
;// ./src/components/container.component.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || container_component_unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function container_component_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return container_component_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? container_component_arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return container_component_arrayLikeToArray(r); }
function container_component_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var Container = createComponent(function (_ref) {
  var children = _ref.children;
  return createElement.apply(void 0, ['div', {
    id: 'floating-list-container'
  }].concat(_toConsumableArray(children)));
});
;// ./src/components/title.component.js

var Title = createComponent(function (_ref) {
  var text = _ref.text,
    onToggle = _ref.onToggle,
    isCollapsed = _ref.isCollapsed;
  return createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10px'
    }
  }, createElement('h3', {
    style: {
      margin: '0',
      flexGrow: '1'
    }
  }, text), createElement('button', {
    id: 'toggle-btn',
    onClick: onToggle,
    style: {
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '18px',
      color: 'white'
    }
  }, isCollapsed ? '▶' : '▼'));
});
;// ./src/components/button.component.js

var Button = createComponent(function (_ref) {
  var id = _ref.id,
    text = _ref.text,
    onClick = _ref.onClick;
  return createElement('button', {
    id: id,
    onClick: onClick
  }, text);
});
;// ./src/components/dropdown.component.js
function dropdown_component_toConsumableArray(r) { return dropdown_component_arrayWithoutHoles(r) || dropdown_component_iterableToArray(r) || dropdown_component_unsupportedIterableToArray(r) || dropdown_component_nonIterableSpread(); }
function dropdown_component_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function dropdown_component_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return dropdown_component_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? dropdown_component_arrayLikeToArray(r, a) : void 0; } }
function dropdown_component_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function dropdown_component_arrayWithoutHoles(r) { if (Array.isArray(r)) return dropdown_component_arrayLikeToArray(r); }
function dropdown_component_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var Dropdown = createComponent(function (_ref) {
  var items = _ref.items,
    onChange = _ref.onChange;
  return createElement.apply(void 0, ['select', {
    id: 'dropdown',
    onChange: onChange
  }].concat(dropdown_component_toConsumableArray(items.map(function (item) {
    return createElement('option', {
      value: JSON.stringify(item),
      selected: item.name === 'home'
    }, item.name);
  }))));
});
;// ./src/components/list.component.js
function list_component_toConsumableArray(r) { return list_component_arrayWithoutHoles(r) || list_component_iterableToArray(r) || list_component_unsupportedIterableToArray(r) || list_component_nonIterableSpread(); }
function list_component_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function list_component_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return list_component_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? list_component_arrayLikeToArray(r, a) : void 0; } }
function list_component_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function list_component_arrayWithoutHoles(r) { if (Array.isArray(r)) return list_component_arrayLikeToArray(r); }
function list_component_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var List = createComponent(function (_ref) {
  var items = _ref.items,
    onDelete = _ref.onDelete;
  return createElement.apply(void 0, ['ul', {
    id: 'list-items'
  }].concat(list_component_toConsumableArray(items.map(function (item) {
    return createElement('li', {}, item.name, createElement('button', {
      onClick: function onClick() {
        return onDelete(item);
      }
    }, 'Delete'));
  }))));
});
;// ./src/app.js
function app_typeof(o) { "@babel/helpers - typeof"; return app_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, app_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == app_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(app_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = app_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function app_toConsumableArray(r) { return app_arrayWithoutHoles(r) || app_iterableToArray(r) || app_unsupportedIterableToArray(r) || app_nonIterableSpread(); }
function app_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function app_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return app_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? app_arrayLikeToArray(r, a) : void 0; } }
function app_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function app_arrayWithoutHoles(r) { if (Array.isArray(r)) return app_arrayLikeToArray(r); }
function app_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






// List of items (Modified items with name, address, city, zip)
var items = app_toConsumableArray(__webpack_require__(439)).sort(function (a, b) {
  return a.name.localeCompare(b.name);
});

// Main component
var App = createComponent(function () {
  var listItems = [items.find(function (i) {
    return i.name === 'home';
  })];
  console.log('List items:', listItems);
  var isCollapsed = false;
  var _updateList = function updateList() {
    listContainer.innerHTML = '';
    listContainer.appendChild(List({
      items: listItems,
      onDelete: function onDelete(item) {
        listItems = listItems.filter(function (i) {
          return i !== item;
        });
        _updateList();
      }
    }));
  };
  var waitForButtonToBeEnabled = function waitForButtonToBeEnabled(buttonId) {
    return new Promise(function (resolve) {
      var interval = setInterval(function () {
        var button = document.getElementById(buttonId);
        if (button && !button.disabled) {
          clearInterval(interval); // Stop checking once it's enabled
          button.click();
          // console.log(`${buttonId} clicked`);
          resolve(); // Resolve the Promise
        }
      }, 100); // Check every 100ms
    });
  };
  var waitForInputCleared = function waitForInputCleared(elementId) {
    return new Promise(function (resolve) {
      var interval = setInterval(function () {
        var element = document.getElementById(elementId);
        if (element && (element.value === '' || element.value === null)) {
          clearInterval(interval); // Stop checking once it's cleared
          // console.log(`${elementId} cleared`);
          resolve(); // Resolve the Promise
        }
      }, 100); // Check every 100ms
    });
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var fromItem, _iterator, _step, _loop, homeAddressBtn;
      return _regeneratorRuntime().wrap(function _callee$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(listItems.length <= 0)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            // Get the first item (from)
            fromItem = items.find(function (i) {
              return i.name == 'home';
            }); // Fill 'from' fields
            document.getElementById('fromName').value = fromItem.name;
            document.getElementById('fromAddress').value = fromItem.address;
            document.getElementById('fromCity').value = fromItem.city;
            document.getElementById('fromZip').value = fromItem.zip;
            document.getElementById('fromState').value = 'Tx';
            // console.log('from:', fromItem);

            // For each "to" item
            _iterator = _createForOfIteratorHelper(listItems.slice(1));
            _context2.prev = 9;
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var _document$getElementB;
              var listItem, toItem;
              return _regeneratorRuntime().wrap(function _loop$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    listItem = _step.value;
                    toItem = items.find(function (i) {
                      return i.name === listItem.name;
                    });
                    document.getElementById('toName').value = toItem.name;
                    document.getElementById('toAddress').value = toItem.address;
                    document.getElementById('toCity').value = toItem.city;
                    document.getElementById('toZip').value = toItem.zip;
                    document.getElementById('toState').value = 'Tx';
                    console.log('to:', toItem);

                    // ensure add1 and add2 are not checked
                    document.getElementById('add1').checked = false;
                    document.getElementById('add2').checked = false;

                    // Click Verify button and wait for svc button to be enabled and clicked
                    (_document$getElementB = document.getElementById('Verify')) === null || _document$getElementB === void 0 || _document$getElementB.click();
                    console.log('verify clicked');
                    _context.next = 14;
                    return waitForButtonToBeEnabled('svc');
                  case 14:
                    _context.next = 16;
                    return waitForInputCleared('toAddress');
                  case 16:
                  case "end":
                    return _context.stop();
                }
              }, _loop);
            });
            _iterator.s();
          case 12:
            if ((_step = _iterator.n()).done) {
              _context2.next = 16;
              break;
            }
            return _context2.delegateYield(_loop(), "t0", 14);
          case 14:
            _context2.next = 12;
            break;
          case 16:
            _context2.next = 21;
            break;
          case 18:
            _context2.prev = 18;
            _context2.t1 = _context2["catch"](9);
            _iterator.e(_context2.t1);
          case 21:
            _context2.prev = 21;
            _iterator.f();
            return _context2.finish(21);
          case 24:
            // For the final item, click 'sv' instead of 'svc' and set to home
            homeAddressBtn = document.querySelector('#dirform > div > table.sort-table.table-top20-bottom0 > tbody > tr:nth-child(9) > td > img');
            homeAddressBtn === null || homeAddressBtn === void 0 || homeAddressBtn.click();
            _context2.next = 28;
            return waitForButtonToBeEnabled('Verify');
          case 28:
            _context2.next = 30;
            return waitForButtonToBeEnabled('sv');
          case 30:
            // console.log('sv clicked');

            // clear list, keeping home at the beginning
            listItems = [items.find(function (i) {
              return i.name === 'home';
            })];
            _updateList();
          case 32:
          case "end":
            return _context2.stop();
        }
      }, _callee, null, [[9, 18, 21, 24]]);
    }));
    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();
  var container = Container({
    children: [Title({
      text: 'Auto-Fill Helper',
      onToggle: function onToggle() {
        isCollapsed = !isCollapsed;
        Array.from(container.children).slice(1).forEach(function (el) {
          return el.style.display = isCollapsed ? 'none' : '';
        });
        _updateList();
      },
      isCollapsed: isCollapsed
    }), createElement('h3', {}, 'Manage List'), Dropdown({
      items: items,
      onChange: function onChange(e) {
        var selectedItem = JSON.parse(e.target.value);
        if (!listItems.some(function (i) {
          return i.name === selectedItem.name;
        })) {
          listItems.push(selectedItem);
          _updateList();
        }
      }
    }), Button({
      id: 'clear-btn',
      text: 'Clear List',
      onClick: function onClick() {
        listItems = [items.find(function (i) {
          return i.name === 'home';
        })];
        _updateList();
      }
    }), Button({
      id: 'submit-btn',
      text: 'Submit',
      onClick: handleSubmit
    })]
  });
  var listContainer = createElement('div');
  container.appendChild(listContainer);
  _updateList();
  return container;
});
;// ./src/main.js




// Add custom styles for floating UI
styles(src_styles);

// Render the app
document.body.appendChild(App());
/******/ })()
;
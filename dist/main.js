/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n::before,\\r\\n::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.body {\\r\\n  font-family: cursive;\\r\\n  background-color: rgb(155, 226, 174);\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.navigationBar {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.navigationItems {\\r\\n  list-style-type: none;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-evenly;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.footer-text {\\r\\n  text-transform: capitalize;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  min-height: calc(100vh - 4rem);\\r\\n  justify-content: center;\\r\\n  display: grid;\\r\\n}\\r\\n\\r\\n.section-container {\\r\\n  width: 100%;\\r\\n  max-width: 1200px;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  padding: 0.5rem;\\r\\n  margin: 1rem 2rem;\\r\\n}\\r\\n\\r\\n.card-header {\\r\\n  width: 100%;\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n.card-img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.card-body {\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.card-footer {\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.popUp {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin: 30px;\\r\\n}\\r\\n\\r\\n.popUpXButton {\\r\\n  height: 50px;\\r\\n  width: 10%;\\r\\n  margin-top: 50px;\\r\\n  margin-right: 50px;\\r\\n  color: rgb(54, 3, 22);\\r\\n  background-color: rgba(187, 205, 137, 0.897);\\r\\n}\\r\\n\\r\\n.popUpTitle {\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\\r\\n.popUpProperties {\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  padding: 0.25rem;\\r\\n}\\r\\n\\r\\n.btn-comment {\\r\\n  width: 100%;\\r\\n  font-size: 1.2rem;\\r\\n  text-transform: capitalize;\\r\\n  outline: 3pt solid black;\\r\\n  border-radius: 0.2rem;\\r\\n  margin: 0.5rem 0;\\r\\n}\\r\\n\\r\\n.card-body p {\\r\\n  text-transform: capitalize;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.likes-container h5 {\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\\r\\n.containerPopUp {\\r\\n  background-color: rgb(175, 220, 219);\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  color: red;\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.commentForm {\\r\\n  margin-top: 30px;\\r\\n}\\r\\n\\r\\n.formContainer {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.item-count {\\r\\n  text-align: center;\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/counterComment.js":
/*!*******************************!*\
  !*** ./src/counterComment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/comments */ \"./src/modules/comments.js\");\n\r\n\r\nconst countComment = (commentList) => {\r\n    const commentNumber = commentList.length;\r\n    return commentNumber;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/counterComment.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_getPokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getPokemon */ \"./src/modules/getPokemon.js\");\n\n\n// import formFunction from './modules/addComment';\n\nwindow.addEventListener('DOMContentLoaded', _modules_getPokemon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n// formFunction();\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getItems */ \"./src/modules/getItems.js\");\n\n\nclass Comments {\n  constructor() {\n    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kumd2xEuWrRQPQTt2JCG/comments';\n  }\n\n  apiFetch = async () => {\n    const request = new Request(this.url);\n    const result = await fetch(request);\n    const fResult = await result.json();\n    // const allComments = fResult.result.map(({ user: name, insights }) => ({\n    //   name,\n    //   insights,\n    // }));\n    // console.log('comments here', allComments);\n    return fResult;\n  };\n\n  addNewComment = async (itemId, username, comment) => {\n    await fetch(this.url, {\n      method: 'POST',\n      body: JSON.stringify({ item_id: itemId, username, comment }),\n      headers: {\n        'Content-Type': 'application/json; charset=UTF-8',\n      },\n    });\n  };\n\n  displayComments = async (commentList, itemId) => {\n    const commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kumd2xEuWrRQPQTt2JCG/comments?item_id=${itemId}`;\n    (0,_getItems__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentsUrl).then((data) => {\n      if (!data.error) {\n        commentList.classList.add('show');\n        const content = data\n          .map((element) => `\n        <li class=\"scoreItem\">${element.username} <span>: <span>${element.comment}</li>\n       `)\n          .join('');\n        commentList.innerHTML = content;\n      }\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/createLike.js":
/*!***********************************!*\
  !*** ./src/modules/createLike.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayLikeCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLikeCount */ \"./src/modules/displayLikeCount.js\");\n/* harmony import */ var _postItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postItems */ \"./src/modules/postItems.js\");\n\r\n\r\n\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kumd2xEuWrRQPQTt2JCG/likes/';\r\nconst createLike = (likeBtns, likeCount) => {\r\n  likeBtns.forEach((btn) => {\r\n    btn.addEventListener('click', async (e) => {\r\n      const itemID = e.currentTarget.id;\r\n\r\n      await (0,_postItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, { item_id: itemID });\r\n      (0,_displayLikeCount__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(likeCount);\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLike);\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/createLike.js?");

/***/ }),

/***/ "./src/modules/displayLikeCount.js":
/*!*****************************************!*\
  !*** ./src/modules/displayLikeCount.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getItems */ \"./src/modules/getItems.js\");\n\n\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kumd2xEuWrRQPQTt2JCG/likes/';\nconst displayLikeCount = async (likeContainer) => {\n  const data = await (0,_getItems__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(baseUrl);\n  likeContainer.forEach((container) => {\n    container.textContent = `${\n      data.find((item) => item.item_id === container.dataset.id)?.likes || '0'\n    } likes`;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikeCount);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/displayLikeCount.js?");

/***/ }),

/***/ "./src/modules/displayPokemon.js":
/*!***************************************!*\
  !*** ./src/modules/displayPokemon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLike */ \"./src/modules/createLike.js\");\n/* harmony import */ var _displayLikeCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayLikeCount */ \"./src/modules/displayLikeCount.js\");\n/* harmony import */ var _getItemCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getItemCount */ \"./src/modules/getItemCount.js\");\n/* harmony import */ var _popUpFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popUpFunction */ \"./src/modules/popUpFunction.js\");\n\r\n\r\n\r\n\r\n\r\nconst itemCount = document.querySelector('.item-count');\r\nconst pokemonContainer = document.querySelector('.pokemon-container');\r\nconst displayPokemon = (list) => {\r\n  const pokemonlist = list\r\n    .map(\r\n      (pokemon, index) => ` <article class=\"card\">\r\n          <div class=\"card-header\">\r\n            <img\r\n              src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${\r\n  index + 1\r\n}.png\"\r\n              alt=\"${pokemon.name}\"\r\n              class=\"card-img\"\r\n            />\r\n          </div>\r\n            <div class=\"card-body flex\">\r\n            <p>${pokemon.name}</p>\r\n            <div class=\"likes-container\">\r\n              <button type=\" button\" class=\"btn flex like-btn\" id=\"${\r\n  pokemon.name\r\n}\">\r\n                <i class=\"fa-regular fa-heart\"></i>\r\n              </button>\r\n              <h5 class=\"likes\" data-id=\"${pokemon.name}\"></h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer flex\">\r\n            <button type=\" button\" id=\"${\r\n  index + 1\r\n}\" class=\"btn-comment btn flex\">comments</button>\r\n          </div>\r\n        </article>`,\r\n    )\r\n    .join('');\r\n  pokemonContainer.innerHTML = pokemonlist;\r\n  const commentButton = document.querySelectorAll('.btn-comment');\r\n  const likeButton = document.querySelectorAll('.like-btn');\r\n  const likeCount = document.querySelectorAll('.likes');\r\n  (0,_popUpFunction__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(commentButton);\r\n  (0,_createLike__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(likeButton, likeCount);\r\n  (0,_displayLikeCount__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(likeCount);\r\n  (0,_getItemCount__WEBPACK_IMPORTED_MODULE_2__.displayItemCount)(itemCount, list);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPokemon);\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/displayPokemon.js?");

/***/ }),

/***/ "./src/modules/getItemCount.js":
/*!*************************************!*\
  !*** ./src/modules/getItemCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayItemCount\": () => (/* binding */ displayItemCount)\n/* harmony export */ });\nconst getItemCount = (arr) => arr.length;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItemCount);\r\n\r\nconst displayItemCount = (container, arr) => {\r\n  container.textContent = `${getItemCount(arr)} items found`;\r\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getItemCount.js?");

/***/ }),

/***/ "./src/modules/getItems.js":
/*!*********************************!*\
  !*** ./src/modules/getItems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getItems = async (url) => {\n  const result = await fetch(url);\n  const data = await result.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItems);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getItems.js?");

/***/ }),

/***/ "./src/modules/getPokemon.js":
/*!***********************************!*\
  !*** ./src/modules/getPokemon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayPokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPokemon */ \"./src/modules/displayPokemon.js\");\n/* harmony import */ var _getItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getItems */ \"./src/modules/getItems.js\");\n\n\n\n// hello\nconst baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0';\n\nconst getPokemon = async () => {\n  await (0,_getItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(baseUrl)\n    .then((data) => (0,_displayPokemon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.results))\n    .catch((err) => new Error(err));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPokemon);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getPokemon.js?");

/***/ }),

/***/ "./src/modules/popUpFunction.js":
/*!**************************************!*\
  !*** ./src/modules/popUpFunction.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getItems */ \"./src/modules/getItems.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments */ \"./src/modules/comments.js\");\n/* harmony import */ var _counterComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../counterComment */ \"./src/counterComment.js\");\n\n\n\n\nconst popUp = document.querySelector('.popUp');\npopUp.innerHTML = '';\nconst popUpXButton = document.querySelector('.popUpXButton');\nconst home = document.querySelector('.home');\n\npopUp.classList.add('close');\npopUpXButton.classList.add('close');\n\nconst popUpFunction = (commentButton) => {\n  commentButton.forEach((element) => {\n    element.addEventListener('click', (e) => {\n      const pokemonId = e.target.id;\n      const getName = () => {\n        (0,_getItems__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(\n          (data) => {\n            const popUpItems = `<div class=\"popUpImage\">\n<img\n  src=\"${data.sprites.other['official-artwork'].front_default}\"\n  name=\"${data.name}\"\n  alt=\"${data.name}\"\n/>\n</div>\n<div class=\"popUpTitle\">\n<h2>${data.name}</h2>\n</div>\n<div class=\"popUpProperties\">\n<ul>\n  <li class=\"type\">Type : ${data.types[0].type.name}</li>\n  <li class=\"weight\">Weight:${data.weight}</li>\n  <li class=\"height\">Heigth:${data.height}</li>\n  <li class=\"power\">baseexperience\n:${data.base_experience}</li>\n</ul>\n</div> \n<h3 class=\"commentsCount\">Comments(${commentNumber})</h3>\n<ul class=\"commentsList\"></ul>\n<form class=\"commentForm\">\n<h2 class=\"formTitle\">Add a comment</h2>\n<ul class=\"formContainer\">\n  <li>\n    <input minlength=\"1\" maxlength=\"30\" class=\"name\" type=\"text\" name=\"name\" placeholder=\"Your name\" required/>\n  </li>\n  <li>\n    <input minlength=\"1\" maxlength=\"150\" class=\"insights\" type=\"text\" name=\"insights\" placeholder=\"Your insights\" required/>\n  </li>\n  <li>\n    <button class=\"submitButton button\" type=\"submit\">Comment</button>\n  </li>\n</ul>\n</form>`;\n            popUp.innerHTML = popUpItems;\n            const itemId = data.name;\n\n            const commentsCount = document.querySelector(\".commentsCount\");\n            const comments = new _comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n            const submitButton = document.querySelector('.commentForm');\n            const commentsList = document.querySelector('.commentsList');\n\n            submitButton.addEventListener('submit', (e) => {\n              e.preventDefault();\n              const name = document.querySelector('.name');\n              const insights = document.querySelector('.insights');\n              if (name.value !== '' && insights.value !== '') {\n                comments.addNewComment(itemId, name.value, insights.value);\n              }\n              name.value = '';\n              insights.value = '';\n              comments.displayComments(commentsList, itemId);\n            });\n            comments.displayComments(commentsList, itemId);\n            commentsCount.innerHTML = (0,_counterComment__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentsList.children);\n          },\n        );\n      };\n      getName();\n      home.classList.add('close');\n      popUp.classList.remove('close');\n      popUpXButton.classList.remove('close');\n    });\n\n    popUpXButton.addEventListener('click', () => {\n      home.classList.remove('close');\n      popUp.classList.add('close');\n      popUpXButton.classList.add('close');\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUpFunction);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/popUpFunction.js?");

/***/ }),

/***/ "./src/modules/postItems.js":
/*!**********************************!*\
  !*** ./src/modules/postItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function postData(url = '', data = {}) {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify(data),\n  });\n\n  return response;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/postItems.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
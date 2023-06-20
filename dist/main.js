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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cabin&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n  font-family: 'Cabin', sans-serif;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  grid-template-rows: auto 1fr;\n  height: 100vh;\n}\n\n/* Header */\n.header {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  align-items: center;\n  background-color: #0B1D51;\n  color: white;\n}\n\n.headerText {\n  font-size: 3vw;\n  padding: 2vw 3vw;\n}\n\n/* Side */\n.side {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background-color: #A5AE9E;\n  color: white;\n  padding-top: 1vw;\n}\n\n.side p {\n  padding: 1vw 2vw;\n  font-size: 2vw;\n}\n\n.side p:hover {\n  cursor: pointer;\n  background-color: #97a091;\n}\n\n/* Main */\n.main {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background: whitesmoke;\n  padding-top: 3vw;\n  padding-left: 5vw;\n  padding-right: 15vw;\n  padding-bottom: 5vw;\n}\n\n.mainHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mainText {\n  font-size: 2.5vw;\n}\n\n.mainBtn {\n  font-size: 1.5vw;\n  border-radius: 2.5vw;\n  padding: 1vw;\n  border: 0.2vw solid #0B1D51;\n  background-color: #0B1D51;\n  color: white;\n  font-weight: bold;\n  transition: background-color 0.5s ease;\n}\n\n.mainBtn:hover, .submit:hover {\n  cursor: pointer;\n  background-color: whitesmoke;\n  color: #0B1D51;\n}\n\n/* Form */\n.form {\n  display: none;\n  flex-direction: column;\n}\n\n.form p {\n  font-size: 1.5vw;\n}\n\n.form input, .form select {\n  margin-top: .1vw;\n  margin-bottom: 0.5vw;\n  padding: .5vw;\n  font-size: 1vw;\n  border: 0.2vw solid black;\n  background-color: white;\n}\n\n.form input:focus, .form select:focus {\n  box-shadow: 0px 0px 0.2vw rgba(0, 0, 0, 0.4);\n  outline: none;\n}\n\n.firstRow {\n  display: flex;\n  align-items: center;\n}\n\n.firstRow div:nth-of-type(2) {\n  margin-left: 2vw; \n  margin-right: 2vw;\n}\n\n.nothing {\n  margin-top: 1vw;\n  font-size: 1.5vw;\n}\n\n.submit, .cancel {\n  margin-top: .5vw;\n  font-size: 1.5vw;\n  font-weight: bold;\n  padding: 0.5vw;\n  border-radius: .5vw;\n  transition: background-color 0.5s ease;\n}\n\n.submit {\n  background-color: #0B1D51;\n  color: white;\n  border: .2vw #0B1D51 solid;\n  margin-right: 1.5vw;\n}\n\n.cancel {\n  background-color: white;\n  color: #999999;\n  border: .2vw #999999 solid;\n}\n\n.cancel:hover {\n  cursor: pointer;\n  background-color: #ededed;\n}\n\n.required {\n  padding-top: 0;\n  color: #CC0000;\n}\n\n/* Task */\n.task {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-row: auto;\n  align-items: center;\n}\n\n.taskHeader {\n  padding-top: 1vw;\n  border-bottom: 0.7vw black solid;\n  padding-bottom: .5vw;\n  font-weight: bold;\n}\n\n.taskFormCont {\n  padding-top: 1vw;\n  padding-bottom: 1vw;\n  border-bottom: 0.2vw black solid;\n}\n\n.task img {\n  width: 2.5vw;\n  height: auto;\n  transition: transform .1s ease;\n}\n\n.task img:nth-of-type(2) {\n  margin-left: 0.5vw;\n  margin-right: 0.5vw;\n}\n\n.task img:hover {\n  transform: translateY(-.1vw);\n}\n\n.task p {\n  word-break: break-all;\n  font-size: 1.5vw;\n}\n\n.task p:first-of-type:not(.dateHead), .infoDescr  {\n  padding-right: 2vw;\n}\n\n.infoDescr {\n  font-size: 1.1vw;\n  margin-bottom: -.5vw;\n}\n\n.iconCont {\n  margin: 0;\n  padding: 0;\n}\n\n.dateCont {\n  display: flex;\n  align-items: center;\n}\n\n.dateHead {\n  margin-right: .5vw;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/compareDesc/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareDesc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareDesc\n * @category Common Helpers\n * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return -1 if the first date is after the second,\n * 1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:\n * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> 1\n *\n * @example\n * // Sort the array of dates in reverse chronological order:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareDesc)\n * //=> [\n * //   Sun Jul 02 1995 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Wed Feb 11 1987 00:00:00\n * // ]\n */\nfunction compareDesc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n  if (diff > 0) {\n    return -1;\n  } else if (diff < 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/compareDesc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isPast)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isPast\n * @category Common Helpers\n * @summary Is the given date in the past?\n * @pure false\n *\n * @description\n * Is the given date in the past?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is in the past\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 2 July 2014 in the past?\n * const result = isPast(new Date(2014, 6, 2))\n * //=> true\n */\nfunction isPast(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate).getTime() < Date.now();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isPast/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\n\nfunction isThisWeek(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isThisWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/format.js":
/*!***********************!*\
  !*** ./src/format.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   format: () => (/* binding */ format)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst form = () =>  {\n  const form = document.createElement('form');\n  const title = document.createElement('input');\n  const descr = document.createElement('input');\n  const date = document.createElement('input');\n  const priority = document.createElement('select');\n  const titleHead = document.createElement('p');\n  const descrHead = document.createElement('p');\n  const dateHead = document.createElement('p');\n  const priorityHead = document.createElement('p');\n  const urgent = document.createElement('option');\n  const high = document.createElement('option');\n  const medium = document.createElement('option');\n  const low = document.createElement('option');\n  const submit = document.createElement('button');\n  const cancel = document.createElement('button');\n  const required = document.createElement('p');\n  const titleCont = document.createElement('div');\n  const dateCont = document.createElement('div');\n  const priorityCont = document.createElement('div');\n  const firstRow = document.createElement('div');\n  const btns = document.createElement('div');\n  btns.append(submit, cancel);\n  titleCont.append(titleHead, title);\n  dateCont.append(dateHead, date);\n  priorityCont.append(priorityHead, priority);\n  firstRow.append(titleCont, dateCont, priorityCont);\n  form.classList.add('form');\n  submit.classList.add('submit');\n  cancel.classList.add('cancel');\n  required.classList.add('required');\n  firstRow.classList.add('firstRow');\n  title.classList.add('title');\n  descr.classList.add('descr');\n  date.classList.add('date');\n  priority.classList.add('priority');\n  \n  urgent.textContent = 'Urgent';\n  high.textContent = 'High';\n  medium.textContent = 'Medium';\n  low.textContent = 'Low';\n  submit.textContent = 'Add';\n  cancel.textContent = 'Cancel';\n  priority.append(low, medium, high, urgent);\n  title.setAttribute('type', 'text');\n  descr.setAttribute('type', 'text');\n  date.setAttribute('type', 'date');\n  titleHead.textContent = 'Title';\n  descrHead.textContent = 'Description';\n  dateHead.textContent = 'Date';\n  priorityHead.textContent = 'Priority';\n  title.setAttribute('placeholder', 'Title');\n  descr.setAttribute('placeholder', 'Description');\n  form.append(firstRow, descrHead, descr, btns, required);\n  return form;\n}\n\nconst format = () => {\n  const container = document.querySelector('.container');\n\n  /* Header */\n  const header = document.createElement('div');\n  const headerText = document.createElement('p');\n  header.classList.add('header');\n  headerText.classList.add('headerText');\n\n  headerText.textContent = 'todolist';\n\n  header.append(headerText);\n  container.append(header);\n\n  /* Side */\n  const side = document.createElement('div');\n  const tasks = document.createElement('p');\n  const today = document.createElement('p');\n  const week = document.createElement('p');\n  const past = document.createElement('p');\n  side.classList.add('side');\n  tasks.classList.add('tasks');\n  today.classList.add('today');\n  week.classList.add('week');\n  past.classList.add('past');\n\n  tasks.textContent = 'Home';\n  today.textContent = 'Today';\n  week.textContent = 'Week';\n  past.textContent = 'Past';\n  \n  side.append(tasks, today, week, past);\n  container.append(side);\n\n  /* Main */\n  const main = document.createElement('div');\n  const mainHeader = document.createElement('div');\n  const mainText = document.createElement('p');\n  const mainBtn = document.createElement('button');\n  main.classList.add('main');\n  mainHeader.classList.add('mainHeader');\n  mainText.classList.add('mainText');\n  mainBtn.classList.add('mainBtn');\n\n  mainText.textContent = 'All tasks';\n  mainBtn.textContent = 'Add task';\n\n  const taskCont = document.createElement('div');\n  taskCont.classList.add('taskCont');\n  \n  const nothing = document.createElement('p');\n  nothing.classList.add('nothing');\n  nothing.textContent = 'You have no tasks... Add some tasks you bum!';\n\n  mainHeader.append(mainText, mainBtn);\n  main.append(mainHeader);\n  main.append(nothing);\n  main.append(form());\n  main.append(taskCont);\n  container.append(main);\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/format.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ \"./src/format.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n\n\n\n(0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)();\n(0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks)();\n(0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.add)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _icons_information_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/information-outline.svg */ \"./src/icons/information-outline.svg\");\n/* harmony import */ var _icons_square_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/square-edit-outline.svg */ \"./src/icons/square-edit-outline.svg\");\n/* harmony import */ var _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/trash-can-outline.svg */ \"./src/icons/trash-can-outline.svg\");\n/* harmony import */ var _icons_sort_ascending_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/sort-ascending.svg */ \"./src/icons/sort-ascending.svg\");\n/* harmony import */ var _icons_sort_descending_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/sort-descending.svg */ \"./src/icons/sort-descending.svg\");\n/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format.js */ \"./src/format.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/compareDesc/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isThisWeek/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isPast/index.js\");\n\n\n\n\n\n\n\n\nlet globalList = [];\nlet check = 'normal';\nlet sort = 'asc';\n\nfunction save() {\n  localStorage.setItem('data', JSON.stringify(globalList));\n}\n\nfunction Task(title, descr, date, priority) {\n  this.title = title;\n  this.descr = descr;\n  this.date = date;\n  this.priority = priority;\n}\n\nfunction create(dateString) {\n  const parts = dateString.split(\"-\");\n  const year = parseInt(parts[0], 10);\n  const month = parseInt(parts[1], 10);\n  const day = parseInt(parts[2], 10);\n  \n  return new Date(year, month - 1, day);\n}\n\nfunction convert(dateString) {\n  const [year, month, day] = dateString.split('-');\n  const formattedDate = `${month}/${day}/${year}`;\n  return formattedDate;\n}\n\nfunction revert(dateString) {\n  const [month, day, year] = dateString.split('/');\n  const formattedDate = `${year}-${month}-${day}`;\n  return formattedDate;\n}\n\nfunction display() {\n  save();\n  let list = [];\n  if (sort === 'asc') {\n    globalList.sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(create(b.date), create(a.date)));\n  }\n  else {\n    globalList.sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(create(a.date), create(b.date)));\n  }\n  const nothing = document.querySelector('.nothing');\n  if (check === 'normal') {\n    list = globalList;\n    if (list.length === 0) {\n      nothing.style.display = 'revert';\n      nothing.textContent = 'You have no tasks... Add some tasks you bum!';\n    }\n    else {\n      nothing.style.display = 'none';\n    }\n  }\n  if (check === 'today') {\n    list = globalList.filter(obj => (0,date_fns__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(create(obj.date)));\n    if (list.length === 0) {\n      nothing.style.display = 'revert';\n      nothing.textContent = 'You have no tasks for today...';\n    }\n    else {\n      nothing.style.display = 'none';\n    }\n  }\n  if (check === 'week') {\n    list = globalList.filter(obj => (0,date_fns__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(create(obj.date)));\n    if (list.length === 0) {\n      nothing.style.display = 'revert';\n      nothing.textContent = 'You have no tasks for this week...';\n    }\n    else {\n      nothing.style.display = 'none';\n    }\n  }\n  if (check === 'past') {\n    list = globalList.filter(obj => (0,date_fns__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(create(obj.date)) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(create(obj.date)));\n    if (list.length === 0) {\n      nothing.style.display = 'revert';\n      nothing.textContent = 'You have no past tasks...';\n    }\n    else {\n      nothing.style.display = 'none';\n    }\n  }\n  const taskCont = document.querySelector('.taskCont');\n  taskCont.innerHTML = '';\n  if (list.length !== 0) {\n    const task = document.createElement('div');\n    task.classList.add('taskHeader');\n    const title = document.createElement('p');\n    const date = document.createElement('p'); \n    const priority = document.createElement('p');\n    const sortBy = new Image();\n    if (sort === 'asc') {\n      sortBy.src = _icons_sort_ascending_svg__WEBPACK_IMPORTED_MODULE_3__;\n    }\n    else {\n      sortBy.src = _icons_sort_descending_svg__WEBPACK_IMPORTED_MODULE_4__;\n    }\n    sortBy.addEventListener('click', () => {\n      if (list.length !== 1) {\n        if (sort === 'asc') {\n          sort = 'desc';\n        }\n        else {\n          sort = 'asc';\n        }\n        display();  \n      }\n    });\n    task.classList.add('task');\n    date.classList.add('dateHead');\n    title.textContent = 'Title';\n    date.textContent = 'Date';\n    priority.textContent = 'Priority';\n    const dateCont = document.createElement('div');\n    dateCont.classList.add('dateCont');\n    dateCont.append(date, sortBy);\n    task.append(title, dateCont, priority);\n    taskCont.append(task);\n  }\n  for (let i = 0; i < list.length; i++) {\n    const task = document.createElement('div');\n    const title = document.createElement('p');\n    const descr = document.createElement('p');\n    const date = document.createElement('p');\n    const priority = document.createElement('p');\n    const info = new Image();\n    const edit = new Image();\n    const trash = new Image();\n    task.classList.add('task');\n    info.src = _icons_information_outline_svg__WEBPACK_IMPORTED_MODULE_0__;\n    edit.src = _icons_square_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__;\n    trash.src = _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__;\n    const main = document.querySelector('.main');\n    const iconCont = document.createElement('div');\n    iconCont.classList.add('iconCont');\n    iconCont.append(info, edit, trash);\n    title.textContent = list[i].title;\n    descr.textContent = list[i].descr;\n    date.textContent = convert(list[i].date);\n    priority.textContent = list[i].priority;\n    const taskFormCont = document.createElement('div');\n    const infoDescr = document.createElement('p');\n    infoDescr.style.display = 'none';\n    infoDescr.textContent = 'Description: ' + descr.textContent;\n    infoDescr.classList.add('infoDescr');\n    task.append(title, date, priority, iconCont);\n    taskFormCont.append(task, infoDescr, (0,_format_js__WEBPACK_IMPORTED_MODULE_5__.form)());\n    taskFormCont.classList.add('taskFormCont');\n    taskCont.append(taskFormCont);\n    const taskForm = document.querySelectorAll('.form')[i + 1];\n    const save = document.querySelectorAll('.submit')[i + 1];\n    const cancel = document.querySelectorAll('.cancel')[i + 1];\n    const formTitle = document.querySelectorAll('.title')[i + 1];\n    const formDescr = document.querySelectorAll('.descr')[i + 1];\n    const formDate = document.querySelectorAll('.date')[i + 1];\n    const formPriority = document.querySelectorAll('.priority')[i + 1];\n    const required = document.querySelectorAll('.required')[i + 1];\n    required.style.paddingtop = '0';\n    formTitle.value = title.textContent;\n    formDescr.value = descr.textContent;\n    formDate.value = revert(date.textContent);\n    formPriority.value = priority.textContent;\n    save.textContent = 'Save';\n    taskForm.style.display = 'none';\n\n    info.addEventListener('click', () => {\n      if (infoDescr.style.display === 'none') {\n        infoDescr.style.display = 'revert';\n      }\n      else {\n        infoDescr.style.display = 'none';\n      }\n    });\n\n    trash.addEventListener('click', () => {\n      const nothing = document.querySelector('.nothing');\n      list.splice(i, 1);\n      display(list);\n      if (list.length === 0) {\n        nothing.style.display = 'revert';\n      }\n    });\n\n    edit.addEventListener('click', () => {\n      if (document.querySelectorAll('.form')[0].style.display === 'none') {\n        taskForm.style.display = 'flex';\n        task.style.display = 'none'; \n        infoDescr.style.display = 'none';\n      }\n    });\n    \n    cancel.addEventListener('click', (e) => {\n      e.preventDefault();\n      taskForm.style.display = 'none';\n      required.textContent = '';\n      required.style.paddingTop = '0';\n      task.style.display = 'grid';\n    });\n\n    save.addEventListener('click', (e) => {\n      e.preventDefault();\n      let check = false;\n      if (formTitle.value === '' || formDescr.value === '' ||\n      formDate.value === '' || formPriority.value === '') {\n        check = true;\n        required.textContent = '*All fields are required';  \n        required.style.paddingTop = '1vw';  \n      }\n      if (check === false) {\n        list[i].title = formTitle.value;\n        infoDescr.textContent = 'Description: ' + formDescr.value;\n        list[i].descr = formDescr.value;\n        list[i].priority = formPriority.value;\n        list[i].date = formDate.value;\n        taskForm.style.display = 'none';\n        required.textContent = '';\n        required.style.paddingTop = '0';\n        task.style.display = 'grid';\n        display(list);\n      }\n    });\n  }\n}\n\nconst tasks = () => {\n  const mainText = document.querySelector('.mainText');\n  const mainBtn = document.querySelector('.mainBtn');\n  const tasks = document.querySelector('.tasks');\n  const today = document.querySelector('.today');\n  const week = document.querySelector('.week');\n  const past = document.querySelector('.past');\n  const form = document.querySelector('.form');\n  const nothing = document.querySelector('.nothing');\n\n  tasks.addEventListener('click', () => {\n    mainText.textContent = 'All tasks';\n    form.style.display = 'none';\n    check = 'normal';\n    display(globalList);\n  });\n\n  today.addEventListener('click', () => {\n    mainText.textContent = 'Tasks for today';\n    form.style.display = 'none';\n    check = 'today';\n    display(globalList);\n  });\n\n  past.addEventListener('click', () => {\n    mainText.textContent = 'Past tasks';\n    form.style.display = 'none';\n    check = 'past';\n    display(globalList);\n  });\n\n  week.addEventListener('click', () => {\n    mainText.textContent = 'Tasks for this week';\n    form.style.display = 'none';\n    check = 'week';\n    display(globalList);\n  });\n};\n\nconst add = () => {\n  if (localStorage.getItem('data')) {\n    globalList = JSON.parse(localStorage.getItem('data'));\n    display();\n  }\n  const main = document.querySelector('.main');\n  const form = document.querySelector('.form');\n  const mainBtn = document.querySelector('.mainBtn');\n  const submit = document.querySelector('.submit');\n  const cancel = document.querySelector('.cancel');\n  const required = document.querySelector('.required');\n  const input = document.querySelectorAll('input');\n  const nothing = document.querySelector('.nothing');\n\n  input.forEach(function(element) {\n    element.addEventListener('input', () => {\n      required.textContent = ''; \n      required.style.paddingTop = '0';\n    });\n  });  \n  \n  mainBtn.addEventListener('click', () => {\n    nothing.style.display = 'none';\n    const taskForm = document.querySelectorAll('.form');\n    let check = true;\n    taskForm.forEach(function(form) {\n      if (form.style.display === 'flex') {\n        check = false;\n      }\n    });\n    if (check) {\n      input.forEach(function(element) {\n        element.value = '';\n      });\n      form.style.display = 'flex';\n    }\n  });\n\n  cancel.addEventListener('click', (e) => {\n    e.preventDefault();\n    input.forEach(function(element) {\n      element.value = '';\n    });   \n    form.style.display = 'none';\n    required.textContent = '';  \n    required.style.paddingTop = '0';\n    if (globalList.length === 0) {\n      nothing.style.display = 'revert'; \n    }\n  });\n\n  submit.addEventListener('click', (e) => {\n    e.preventDefault();\n    let check = false;\n    input.forEach(function(element) {\n        if (element.value.trim() === '') {\n          check = true;\n          required.textContent = '*All fields are required';   \n          required.style.paddingTop = '1vw'; \n        }\n    });\n    if (check === false) {\n      form.style.display = 'none';\n      required.textContent = '';\n      required.style.paddingTop = '0';\n      const title = document.querySelectorAll('.title')[0];\n      const descr = document.querySelectorAll('.descr')[0];\n      const date = document.querySelectorAll('.date')[0];\n      const priority = document.querySelectorAll('.priority')[0];\n      globalList.push(new Task(title.value, descr.value, date.value, priority.value));\n      display();\n      priority.value = 'Low';\n      nothing.style.display = 'none';\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ }),

/***/ "./src/icons/information-outline.svg":
/*!*******************************************!*\
  !*** ./src/icons/information-outline.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8211ecd492e7628ee23.svg\";\n\n//# sourceURL=webpack://todo-list/./src/icons/information-outline.svg?");

/***/ }),

/***/ "./src/icons/sort-ascending.svg":
/*!**************************************!*\
  !*** ./src/icons/sort-ascending.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cac4601f3ab2873578c.svg\";\n\n//# sourceURL=webpack://todo-list/./src/icons/sort-ascending.svg?");

/***/ }),

/***/ "./src/icons/sort-descending.svg":
/*!***************************************!*\
  !*** ./src/icons/sort-descending.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c907f04cf7003a9b99a.svg\";\n\n//# sourceURL=webpack://todo-list/./src/icons/sort-descending.svg?");

/***/ }),

/***/ "./src/icons/square-edit-outline.svg":
/*!*******************************************!*\
  !*** ./src/icons/square-edit-outline.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8421b7fc701a0f1a93be.svg\";\n\n//# sourceURL=webpack://todo-list/./src/icons/square-edit-outline.svg?");

/***/ }),

/***/ "./src/icons/trash-can-outline.svg":
/*!*****************************************!*\
  !*** ./src/icons/trash-can-outline.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bcf8d6ff346603c8a51a.svg\";\n\n//# sourceURL=webpack://todo-list/./src/icons/trash-can-outline.svg?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
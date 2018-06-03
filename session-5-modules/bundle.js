/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./counter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./counter.js":
/*!********************!*\
  !*** ./counter.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { add, subst, multi2 } = __webpack_require__(/*! ./math */ \"./math.js\")\nconst { handleClick } = __webpack_require__(/*! ./utils */ \"./utils.js\")\n\nconst input = document.querySelector('#counter')\nconst addButton = document.querySelector('#add')\nconst substButton = document.querySelector('#subst')\nconst multi2Button = document.querySelector('#multi-2')\n\nhandleClick(addButton, input, (count) => add(count, 1))\nhandleClick(substButton, input, (count) => subst(count, 1))\nhandleClick(multi2Button, input, (count) => multi2(count))\n\n\n//# sourceURL=webpack:///./counter.js?");

/***/ }),

/***/ "./math.js":
/*!*****************!*\
  !*** ./math.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function add (a, b) {\n  return a + b\n}\n\nfunction subst (a, b) {\n  return a - b\n}\n\nfunction multi2 (a) {\n  return a * 2\n}\n\nmodule.exports = {\n  add,\n  subst,\n  multi2\n}\n\n\n//# sourceURL=webpack:///./math.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getNumber (value) {\n  return parseInt(value) || 0\n}\n\nfunction handleClick (button, input, calc) {\n  button.addEventListener('click', function () {\n    const count = getNumber(input.value)\n\n    input.value = calc(count)\n  })\n}\n\nmodule.exports = {\n  getNumber,\n  handleClick\n}\n\n\n//# sourceURL=webpack:///./utils.js?");

/***/ })

/******/ });
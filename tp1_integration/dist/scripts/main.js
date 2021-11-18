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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/Form.js":
/*!*****************************!*\
  !*** ./src/scripts/Form.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/** Composante Form de Timtools */\nclass Form {\n  /**\n   * Méthode constructeur\n   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée\n   */\n  constructor(element) {\n    this.element = element;\n    this.formElements = this.element.elements;\n    this.init();\n  }\n\n  init() {\n    this.element.setAttribute('novalidate', '');\n\n    for (let i = 0; i < this.formElements.length; i++) {\n      const input = this.formElements[i];\n\n      if (input.required) {\n        input.addEventListener('input', this.validateInput.bind(this));\n      }\n    }\n    this.element.addEventListener('submit', this.onSubmit.bind(this));\n  }\n\n  validateInput(event) {\n    const input = event.currentTarget || event;\n\n    if (input.validity.valid) {\n      this.removeError(input);\n    } else {\n      this.addError(input);\n    }\n\n    return input.validity.valid;\n  }\n\n  onSubmit(event) {\n    event.preventDefault();\n\n    if (this.validate()) {\n      // On envoi les données du formulaire en AJAX et sur le succès\n      this.showConfirmation();\n    } else {\n      console.log('Une erreur est survenue');\n    }\n  }\n\n  validate() {\n    let isValid = true;\n\n    for (let i = 0; i < this.formElements.length; i++) {\n      const input = this.formElements[i];\n\n      if (input.required && !this.validateInput(input)) {\n        isValid = false;\n      }\n    }\n\n    return isValid;\n  }\n\n  addError(input) {\n    const container = input.closest('[data-input-container]') || input.closest('.input');\n    container.classList.add('error');\n  }\n\n  removeError(input) {\n    const container = input.closest('[data-input-container]') || input.closest('.input');\n    container.classList.remove('error');\n  }\n\n  showConfirmation() {\n    this.element.classList.add('is-sent');\n  }\n}\n\n\n//# sourceURL=webpack:///./src/scripts/Form.js?");

/***/ }),

/***/ "./src/scripts/Main.js":
/*!*****************************!*\
  !*** ./src/scripts/Main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview */ \"./src/scripts/Preview.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ \"./src/scripts/Form.js\");\n\n\nclass Main {\n\n\n  constructor() {\n    console.log('TimTools IN MOTION');\n\n    new _Preview__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('.js-preview'));\n    new _Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector('.form'));\n  }\n}\n\nnew Main();\n\n\n//# sourceURL=webpack:///./src/scripts/Main.js?");

/***/ }),

/***/ "./src/scripts/Preview.js":
/*!********************************!*\
  !*** ./src/scripts/Preview.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Preview; });\n/** Componsante Preview*/\nclass Preview {\n  /**\n   * Méthode constructeur\n   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée\n   */\n  constructor(element) {\n    this._element = element;\n    this.previewItem = this._element.querySelectorAll('[data-follow]');\n\n    this.init();\n  }\n\n  init() {\n    for (let i = 0; i < this.previewItem.length; i++) {\n      const element = this.previewItem[i];\n      const inputId = element.dataset.follow;\n      const input = document.querySelector(`#${inputId}`);\n\n      if (!input) {\n        console.error(\n          `Le champ : ${inputId}, n'existe pas. Assurez-vous de bien identifier votre champ avec un id=\"${inputId}\"`\n        );\n      } else {\n        input.addEventListener('input', this.updateContent.bind(element));\n      }\n    }\n  }\n  updateContent() {\n    const inputId = this.dataset.follow;\n    const input = document.querySelector(`#${inputId}`);\n\n    if (this.dataset.type == 'file') {\n      this.src = URL.createObjectURL(input.files[0]);\n    } else {\n      this.innerText = input.value;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/scripts/Preview.js?");

/***/ })

/******/ });
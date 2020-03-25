// [DozSidenav]  Build version: 3.1.1  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozSidenav", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozSidenav"] = factory(require("doz"));
	else
		root["DozSidenav"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(1);

var _src = __webpack_require__(2);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        (0, _doz.define)('doz-sidenav', _src2.default);
    }
}

register();

exports.default = _src2.default;


if (false) {}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\n            <style>   \n                :component {\n                  height: 100%;\n                  width: ', ';\n                  position: fixed;\n                  z-index: 1;\n                  top: 0;\n                  ', ';\n                  background: ', ';\n                  overflow-x: hidden;\n                  transition: 0.5s;\n                  padding-top: 60px;\n                }\n                \n                :component a {\n                  padding: 8px 8px 8px 0;\n                  text-decoration: none;\n                  font-size: 25px;\n                  color: ', ';\n                  display: block;\n                  transition: 0.3s;\n                }\n                \n                :component a:hover {\n                  color: ', ';\n                }\n                \n                .tools .closebtn {\n                  position: absolute;\n                  top: 0;\n                  right: 25px;\n                  font-size: 36px;\n                  margin-left: 50px;\n                  cursor: pointer;\n                }\n                \n                @media screen and (max-height: 450px) {\n                  :component {padding-top: 15px;}\n                  :component a {font-size: 18px;}\n                }\n            </style>\n            \n            <div class="tools">\n                <a class="closebtn" onclick="this.close()">&times;</a>\n            </div>\n        '], ['\n\n            <style>   \n                :component {\n                  height: 100%;\n                  width: ', ';\n                  position: fixed;\n                  z-index: 1;\n                  top: 0;\n                  ', ';\n                  background: ', ';\n                  overflow-x: hidden;\n                  transition: 0.5s;\n                  padding-top: 60px;\n                }\n                \n                :component a {\n                  padding: 8px 8px 8px 0;\n                  text-decoration: none;\n                  font-size: 25px;\n                  color: ', ';\n                  display: block;\n                  transition: 0.3s;\n                }\n                \n                :component a:hover {\n                  color: ', ';\n                }\n                \n                .tools .closebtn {\n                  position: absolute;\n                  top: 0;\n                  right: 25px;\n                  font-size: 36px;\n                  margin-left: 50px;\n                  cursor: pointer;\n                }\n                \n                @media screen and (max-height: 450px) {\n                  :component {padding-top: 15px;}\n                  :component a {font-size: 18px;}\n                }\n            </style>\n            \n            <div class="tools">\n                <a class="closebtn" onclick="this.close()">&times;</a>\n            </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = {

    props: {
        width: '0',
        background: '#111',
        colorlink: '#818181',
        colorlinkhover: '#f1f1f1',
        sideposition: 'left'
    },

    template: function template(h) {
        return h(_templateObject, this.props.width, this.props.sideposition === 'left' ? 'left: 0' : 'right: 0', this.props.background, this.props.colorlink, this.props.colorlinkhover);
    },
    open: function open() {
        this.props.width = '250px';
    },
    close: function close() {
        this.props.width = '0';
    },
    isOpen: function isOpen() {
        return this.props.width !== '0';
    }
};

/***/ })
/******/ ]);
}); 
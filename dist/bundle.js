// [DozSidenav]  Build version: 1.0.1  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozSidenav", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozSidenav"] = factory(require("doz"));
	else
		root["DozSidenav"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(0);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\n            <style>   \n                .sidenav {\n                  height: 100%;\n                  width: ', ';\n                  position: fixed;\n                  z-index: 1;\n                  top: 0;\n                  left: 0;\n                  background: ', ';\n                  overflow-x: hidden;\n                  transition: 0.5s;\n                  padding-top: 60px;\n                }\n                \n                .sidenav a {\n                  padding: 8px 8px 8px 32px;\n                  text-decoration: none;\n                  font-size: 25px;\n                  color: ', ';\n                  display: block;\n                  transition: 0.3s;\n                }\n                \n                .sidenav a:hover {\n                  color: ', ';\n                }\n                \n                .sidenav .closebtn {\n                  position: absolute;\n                  top: 0;\n                  right: 25px;\n                  font-size: 36px;\n                  margin-left: 50px;\n                }\n                \n                @media screen and (max-height: 450px) {\n                  .sidenav {padding-top: 15px;}\n                  .sidenav a {font-size: 18px;}\n                }\n            </style>\n            \n            <div d-ref="nav" class="sidenav">\n                <a href="javascript:void(0)" class="closebtn" onclick="this.closeNav()">&times;</a>\n            </div>\n        '], ['\n\n            <style>   \n                .sidenav {\n                  height: 100%;\n                  width: ', ';\n                  position: fixed;\n                  z-index: 1;\n                  top: 0;\n                  left: 0;\n                  background: ', ';\n                  overflow-x: hidden;\n                  transition: 0.5s;\n                  padding-top: 60px;\n                }\n                \n                .sidenav a {\n                  padding: 8px 8px 8px 32px;\n                  text-decoration: none;\n                  font-size: 25px;\n                  color: ', ';\n                  display: block;\n                  transition: 0.3s;\n                }\n                \n                .sidenav a:hover {\n                  color: ', ';\n                }\n                \n                .sidenav .closebtn {\n                  position: absolute;\n                  top: 0;\n                  right: 25px;\n                  font-size: 36px;\n                  margin-left: 50px;\n                }\n                \n                @media screen and (max-height: 450px) {\n                  .sidenav {padding-top: 15px;}\n                  .sidenav a {font-size: 18px;}\n                }\n            </style>\n            \n            <div d-ref="nav" class="sidenav">\n                <a href="javascript:void(0)" class="closebtn" onclick="this.closeNav()">&times;</a>\n            </div>\n        ']);

var _doz = __webpack_require__(0);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(o) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, o));

        _this.props = {
            width: '0',
            background: 'linear-gradient(128deg, #56CCF2, #2F80ED)',
            colorlink: '#f1f1f1',
            colorlinkhover: '#818181'
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'template',
        value: function template(h) {
            return h(_templateObject, this.props.width, this.props.background, this.props.colorlink, this.props.colorlinkhover);
        }
    }, {
        key: 'openNav',
        value: function openNav() {
            this.props.width = '250px';
        }
    }, {
        key: 'closeNav',
        value: function closeNav() {
            this.props.width = '0';
        }
    }, {
        key: 'onMount',
        value: function onMount() {
            var _this2 = this;

            this.getHTMLElement().querySelectorAll('[data-link]').forEach(function (node) {
                _this2.ref.nav.appendChild(node);
            });
        }
    }]);

    return _class;
}(_doz.Component);

exports.default = _class;
;

/***/ })
/******/ ]);
}); 
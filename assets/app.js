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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drawer = function () {
    function Drawer(className) {
        _classCallCheck(this, Drawer);

        this.className = className;

        this.container = document.querySelector('.collection__' + this.className);

        if (this.container) {
            this.bindNodes();
            this.bindEventListeners();
            this.initSwiping();
        }
    }

    _createClass(Drawer, [{
        key: 'bindNodes',
        value: function bindNodes() {
            this.body = document.querySelector('body');
            this.toggleButton = document.querySelector('.' + this.className + '__toggle');
            this.closeButton = document.querySelector('.' + this.className + '__close');
        }
    }, {
        key: 'bindEventListeners',
        value: function bindEventListeners() {
            this.toggleButton.addEventListener('click', this.toggleSorting.bind(this));
            this.closeButton.addEventListener('click', this.toggleSorting.bind(this));
            this.container.addEventListener('click', this.handleSortingContainerClick.bind(this));
        }
    }, {
        key: 'toggleSorting',
        value: function toggleSorting(e) {
            this.body.classList.toggle('no-scroll');
            this.container.classList.toggle('visible');
        }
    }, {
        key: 'handleSortingContainerClick',
        value: function handleSortingContainerClick(e) {
            if (e.currentTarget === e.target) {
                this.toggleSorting();
            }
        }
    }, {
        key: 'initSwiping',
        value: function initSwiping() {
            this.touchstartX = 0;
            this.touchendX = 0;

            this.swipeZone = this.container.querySelector('.inner-container');

            this.bindSwipeEvents();
        }
    }, {
        key: 'bindSwipeEvents',
        value: function bindSwipeEvents() {
            var _this = this;

            this.swipeZone.addEventListener('touchstart', function (e) {
                _this.touchstartX = e.touches[0].clientX;
            }, false);

            this.swipeZone.addEventListener('touchend', function (e) {
                _this.touchendX = e.changedTouches[0].clientX;
                _this.handleSwipe();
            }, false);
        }
    }, {
        key: 'handleSwipe',
        value: function handleSwipe() {
            if (this.touchendX > this.touchstartX) {
                this.toggleSorting();
            }
        }
    }]);

    return Drawer;
}();

/* harmony default export */ __webpack_exports__["a"] = (Drawer);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(7);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);

// Modules
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

serialize = function serialize(obj) {
    var str = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    }
    return str.join("&");
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {


(function () {

    var navContainer = document.querySelector('.nav');
    var navToggle = navContainer.querySelector('.nav__toggle');
    var navExtraToggle = navContainer.querySelector('.nav__extra-toggle');
    var nav = navContainer.querySelector('nav');
    var extraNav = navContainer.querySelector('nav .extra');

    navToggle.addEventListener('click', toggleNav);
    navExtraToggle.addEventListener('click', toggleExtraNav);

    function toggleNav() {
        nav.classList.toggle('visible');
        navToggle.classList.toggle('active');
    }

    function toggleExtraNav() {
        extraNav.classList.toggle('visible');
        navExtraToggle.classList.toggle('active');
    }
})();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Drawer__ = __webpack_require__(0);


(function () {

    new __WEBPACK_IMPORTED_MODULE_0__Drawer__["a" /* default */]('sort');

    // Sorting
    if (location.search.length) {
        for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
            aKeyValue = aCouples[i].split('=');
            if (aKeyValue.length > 1) {
                Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
            }
        }
    }

    var currentlyChecked = document.querySelector('input[value="' + Shopify.queryParams.sort_by + '"]');
    currentlyChecked.checked = true;

    var radioButtons = document.querySelectorAll('input[name="sort"]');
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('click', function (e) {
            Shopify.queryParams.sort_by = e.target.value;
            location.search = serialize(Shopify.queryParams);
        });
    });
})();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Drawer__ = __webpack_require__(0);


(function () {

    new __WEBPACK_IMPORTED_MODULE_0__Drawer__["a" /* default */]('filter');
})();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
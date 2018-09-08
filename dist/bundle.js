module.exports =
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
/******/ 	__webpack_require__.p = "";
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

var _WelcomeScreen = __webpack_require__(1);

var _WelcomeScreen2 = _interopRequireDefault(_WelcomeScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _WelcomeScreen2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Transition = __webpack_require__(3);

var _Transition2 = _interopRequireDefault(_Transition);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultDuration = 700;
var defaultDelay = 2000;
var defaultBetween = 100;

var WelcomeScreen = function (_React$Component) {
    _inherits(WelcomeScreen, _React$Component);

    function WelcomeScreen() {
        _classCallCheck(this, WelcomeScreen);

        var _this = _possibleConstructorReturn(this, (WelcomeScreen.__proto__ || Object.getPrototypeOf(WelcomeScreen)).apply(this, arguments));
        //last,timeout,array,styles,timeBetweenScreen


        _this.state = { AnimateTrigger: false, CurrentShowScreen: 0 };
        _this.defaultStyle = {
            transition: 'opacity ' + (_this.props.timeout || defaultDuration) + 'ms linear',
            opacity: 0
        };
        _this.WelcomeScreenStyle = {
            boxSizing: "content-box",
            width: "100%",
            height: "100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            position: "absolute",
            zIndex: 9999
        };
        _this.WelcomeTransitionStyle = {
            backgroundColor: "black",
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%"
        };
        _this.transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 }
        };
        _this.ScreenUrls = _this.ShapeScreenUrl();
        _this.setChildrenRef = _this.setChildrenRef.bind(_this);
        _this.RemoveTransitionComponent = _this.RemoveTransitionComponent.bind(_this);
        return _this;
    }

    _createClass(WelcomeScreen, [{
        key: 'setChildrenRef',
        value: function setChildrenRef(r) {
            this.childrenRef = r;
        }
    }, {
        key: 'ShapeScreenUrl',
        value: function ShapeScreenUrl() {
            var urls = this.props.ScreenArray;
            var news = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = urls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    if (!i.startsWith("url(")) {
                        i = 'url(\'' + i + '\')';
                    }
                    news.push(i);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return news;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.on) {
                this.setState({ AnimateTrigger: true });
            } else {
                this.childrenRef && (this.childrenRef.style.display = "inline");
            }
        }
    }, {
        key: 'RemoveTransitionComponent',
        value: function RemoveTransitionComponent() {
            this.childrenRef && (this.childrenRef.style.display = "inline");
            document.getElementById("WelcomeScreen").remove();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'WelcomeTransition', style: _extends({}, this.WelcomeTransitionStyle, this.props.styles && this.props.styles.container) },
                this.props.on ? _react2.default.createElement(
                    _Transition2.default,
                    {
                        'in': this.state.AnimateTrigger,
                        timeout: this.props.timeout || defaultDuration,
                        onEntered: function onEntered() {
                            setTimeout(function () {
                                _this2.setState({ AnimateTrigger: false });
                            }, _this2.props.last || defaultDelay);
                        },
                        onExited: function onExited() {
                            if (_this2.state.CurrentShowScreen + 1 < _this2.ScreenUrls.length) {
                                setTimeout(function () {
                                    _this2.setState({ AnimateTrigger: true, CurrentShowScreen: _this2.state.CurrentShowScreen + 1 });
                                }, _this2.props.timeBetweenScreen || defaultBetween);
                            } else {
                                _this2.RemoveTransitionComponent();
                            }
                        } },
                    function (state) {
                        return _react2.default.createElement(
                            'div',
                            { style: _extends({}, _this2.props.styles && _this2.props.styles.transition, _this2.defaultStyle, _this2.transitionStyles[state]) },
                            _react2.default.createElement('div', { id: 'WelcomeScreen', style: _extends({ backgroundImage: _this2.ScreenUrls[_this2.state.CurrentShowScreen] }, _this2.WelcomeScreenStyle, _this2.props.styles && _this2.props.styles.screen) })
                        );
                    }
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: 'ChildrenContainer', ref: this.setChildrenRef, style: { display: "none" } },
                    this.props.children
                )
            );
        }
    }]);

    return WelcomeScreen;
}(_react2.default.Component);

WelcomeScreen.propTypes = {
    last: _propTypes2.default.number,
    styles: _propTypes2.default.object,
    timeout: _propTypes2.default.object,
    ScreenArray: _propTypes2.default.array.isRequired,
    timeBetweenScreen: _propTypes2.default.number
};
exports.default = WelcomeScreen;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group/Transition");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);
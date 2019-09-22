module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg_loader_static_Dots_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg-loader!../static/Dots.svg */ "./node_modules/react-svg-loader/lib/loader.js!./static/Dots.svg");
/* harmony import */ var _styles_home_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.less */ "./styles/home.less");
/* harmony import */ var _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_less__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HP\\Desktop\\Deneme\\Portfolio\\components\\Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(react_svg_loader_static_Dots_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.dots,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("hr", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("ul", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("li", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "link"), __jsx("li", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "link"), __jsx("li", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "link"), __jsx("li", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "link")), __jsx("div", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("ul", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("li", {
    className: [_styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.item, _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.active].join(" "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Home"), __jsx("li", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Home"), __jsx("li", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Home"), __jsx("li", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Home"), __jsx("li", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Home"))), __jsx("div", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.hi,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("p", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.hello,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Hello, I am"), __jsx("p", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Mehmet Serdar Tekin"), __jsx("p", {
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.web,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Web, Mobile and Game Developer"), __jsx("button", {
    class: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Contact Me")), __jsx("img", {
    src: "/static/lastestPP.png",
    className: _styles_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_services_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/services.less */ "./styles/services.less");
/* harmony import */ var _styles_services_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_services_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\HP\\Desktop\\Deneme\\Portfolio\\components\\Services.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Services = () => {
  const info = 'I am a Web developer and React-Native developer. I also provide game development and simple 3D modelling services.';
  const infoSecond = 'I love to help those people who want a creative and modern looking website and mobile apps.';
  return __jsx("div", {
    className: _styles_services_less__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("p", {
    className: _styles_services_less__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, " My Services "), __jsx("div", {
    className: _styles_services_less__WEBPACK_IMPORTED_MODULE_1___default.a.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("p", {
    className: _styles_services_less__WEBPACK_IMPORTED_MODULE_1___default.a.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, info), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("p", {
    className: _styles_services_less__WEBPACK_IMPORTED_MODULE_1___default.a.infoSecond,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, infoSecond));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Home, Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./components/Home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _Home__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services */ "./components/Services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _Services__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/react-svg-loader/lib/loader.js!./static/Dots.svg":
/*!***********************************************************************!*\
  !*** ./node_modules/react-svg-loader/lib/loader.js!./static/Dots.svg ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "464",
  height: "217"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "a"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-name": "Rectangle 14",
  transform: "translate(266)",
  fill: "#fff",
  stroke: "#707070",
  d: "M0 0h464v217H0z"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Mask Group 13",
  transform: "translate(-266)",
  clipPath: "url(#a)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 19",
  opacity: ".14",
  fill: "#fff"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 17"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 15"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 13"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -560)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -560)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -560)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -547.909)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -547.909)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -547.909)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -535.818)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -535.818)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -535.818)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -523.728)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -523.728)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -523.728)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 11"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -511.637)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -511.637)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -511.637)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -499.546)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -499.546)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -499.546)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -487.455)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -487.455)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -487.455)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -475.365)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -475.365)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -475.365)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 14"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -463.274)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -463.274)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -463.274)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -451.183)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -451.183)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -451.183)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -439.092)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -439.092)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -439.092)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -427.002)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -427.002)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -427.002)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 11"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -414.911)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -414.911)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -414.911)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -402.82)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -402.82)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -402.82)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -390.729)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -390.729)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -390.729)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -378.639)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -378.639)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -378.639)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 16"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 13"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -366.547)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -366.547)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -366.547)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -354.456)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -354.456)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -354.456)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -342.365)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -342.365)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -342.365)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -330.275)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -330.275)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -330.275)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 11"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -318.184)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -318.184)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -318.184)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -306.093)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -306.093)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -306.093)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -294.002)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -294.002)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -294.002)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -281.912)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -281.912)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -281.912)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 14"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -269.821)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -269.821)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -269.821)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -257.73)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -257.73)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -257.73)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -245.639)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -245.639)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -245.639)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -233.549)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -233.549)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -233.549)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 11"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -221.458)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -221.458)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -221.458)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -209.367)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -209.367)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -209.367)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -197.276)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -197.276)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -197.276)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -185.186)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -185.186)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -185.186)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 18",
  opacity: ".6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 15"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 13"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -173.095)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -173.095)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -173.095)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -161.004)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -161.004)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -161.004)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -148.913)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -148.913)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -148.913)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -136.823)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -136.823)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -136.823)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 11"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -124.732)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -124.732)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -124.732)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -112.641)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -112.641)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -112.641)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -100.55)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -100.55)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -100.55)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -88.46)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -88.46)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -88.46)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 14"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -76.369)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -76.369)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -76.369)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -64.278)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -64.278)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -64.278)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -52.187)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -52.187)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -52.187)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -40.097)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -40.097)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -40.097)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 11"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -28.006)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -28.006)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -28.006)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -15.915)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -15.915)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -15.915)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 -3.824)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 -3.824)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 -3.824)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 8.266)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 8.266)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 8.266)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 16"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 13"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 20.358)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 20.358)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 20.358)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 32.449)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 32.449)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 32.449)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 44.54)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 44.54)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 44.54)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 56.63)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 56.63)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 56.63)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 11"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 68.721)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 68.721)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 68.721)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 80.812)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 80.812)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 80.812)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 92.903)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 92.903)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 92.903)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 104.993)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 104.993)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 104.993)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 14"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 117.084)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 117.084)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 117.084)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 129.175)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 129.175)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 129.175)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 141.266)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 141.266)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 141.266)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 153.356)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 153.356)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 153.356)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 11"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 6"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 165.447)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 165.447)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 165.447)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 177.538)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 177.538)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 177.538)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 8"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 189.629)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 189.629)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 189.629)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 9"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 3",
  transform: "translate(281 201.719)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 4",
  transform: "translate(426.09 201.719)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 5",
  transform: "translate(571.179 201.719)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 1",
  cx: "3.023",
  cy: "3.023",
  r: "3.023"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 12",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(72.545)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 6",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(36.272)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 9",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(108.817)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 2",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(12.091)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 11",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(84.636)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 5",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(48.363)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 8",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(120.908)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 3",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(24.182)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 10",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(96.726)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 4",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(60.454)"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 7",
  cx: "3.023",
  cy: "3.023",
  r: "3.023",
  transform: "translate(132.999)"
})))))))))));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "C:\\Users\\HP\\Desktop\\Deneme\\Portfolio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Index = () => {
  return __jsx("div", {
    className: "jsx-1372227104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Home"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Services"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1372227104",
    __self: undefined
  }, "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}:focus{outline:0;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none;}input[type=search]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;}textarea{overflow:auto;vertical-align:top;resize:vertical;}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;max-width:100%;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}img{border:0;-ms-interpolation-mode:bicubic;}figure{margin:0;}form{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;white-space:normal;*margin-left:-7px;}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle;}button,input{line-height:normal;}button,select{text-transform:none;}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer;*overflow:visible;}button[disabled],html input[disabled]{cursor:default;}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0;*height:13px;*width:13px;}input[type=\"search\"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}html,button,input,select,textarea{color:#222;}::-moz-selection{background:#b3d4fc;text-shadow:none;}::selection{background:#b3d4fc;text-shadow:none;}img{vertical-align:middle;}fieldset{border:0;margin:0;padding:0;}textarea{resize:vertical;}.chromeframe{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERlc2t0b3BcXERlbmVtZVxcUG9ydGZvbGlvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTytCLEFBZVksQUFVRyxBQU1DLEFBSUEsQUFJRSxBQUlKLEFBS0QsQUFLYyxBQVFFLEFBS0EsQUFRVixBQVFPLEFBT1IsQUFVQSxBQUlFLEFBTUssQUFLVixBQUlELEFBU0EsQUFRQSxBQVFnQixBQVloQixBQWlCTSxBQVFJLEFBS0MsQUFPTSxBQU9YLEFBWU8sQUFPTyxBQWFMLEFBU2YsQUFVSyxBQVNXLEFBU2QsQUFLUSxBQUtBLEFBS0csQUFJYixBQU1PLEFBSUQsU0F6UlIsQUF1R3dCLEFBU25DLEFBUUEsQUFvQmMsQUFxRkEsQUErQ0QsQ0F0UWIsQUF5RkEsQ0FsRWMsQUE0TmQsQ0FqT0EsQ0E4Q2EsQUFVYixDQXBFQSxBQUlBLEFBdUN1QixBQWdMQSxDQW5KVyxBQXFFckIsQUEyQmIsQUFrR29CLENBbFFwQixBQThQQSxFQUxjLENBaFJKLEFBNElhLEFBd0J2QixBQTZEQSxBQWdDcUIsQUFLQSxDQXpLckIsQUE0RUEsQ0F2R29CLENBUXBCLEFBeUhjLEFBd0VkLEVBMU9BLEFBWXlCLEFBS0EsQUEyR0csQUEwRDVCLENBbExrQixBQTBGRCxBQW9ISSxDQW5FRixFQS9LSCxBQWdSaEIsQ0F2RWdDLEVBZ0ZqQixDQXRGRSxDQXpJRyxBQWdMcEIsR0F1QkEsQUFLQSxDQXBNWSxDQTZEc0IsQUFhWixFQXRDdEIsQ0EwRXNCLENBM0l0QixBQThNQSxBQXVDb0IsQ0F6Uk4sRUE0Q2QsQUFLbUMsQUFpQmhCLEFBb0JXLEFBNkdkLEdBdkNXLENBbEczQixPQXpEeUIsQUEySXpCLENBd0RBLEFBS21DLENBaUZuQyxDQTFHQSxDQTdHQSxRQTREQSxHQXhDQSxBQXNFQSxLQTNHZ0MsSUFoRGhDLFFBd00yQixnQkF2SkEsT0F3SjNCLGdCQXZKQSIsImZpbGUiOiJDOlxcVXNlcnNcXEhQXFxEZXNrdG9wXFxEZW5lbWVcXFBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZSwgU2VydmljZXMgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SG9tZSAvPlxyXG4gICAgICAgICAgICA8U2VydmljZXMgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cclxuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSwgcSB7XHJcblx0cXVvdGVzOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuYXVkaW8sXHJcbmNhbnZhcyxcclxudmlkZW8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgKmRpc3BsYXk6IGlubGluZTtcclxuICAgICp6b29tOiAxO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXHJcbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXHJcbiAqL1xyXG5cclxuW2hpZGRlbl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cclxufVxyXG5cclxuYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcclxufVxyXG5cclxuYTphY3RpdmUsXHJcbmE6aG92ZXIge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xyXG4gICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYzsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cclxuICovXHJcblxyXG5maWd1cmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cclxuICovXHJcblxyXG5mb3JtIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cclxuICovXHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxyXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cclxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cclxuICovXHJcblxyXG5sZWdlbmQge1xyXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMiAqL1xyXG4gICAgKm1hcmdpbi1sZWZ0OiAtN3B4OyAvKiAzICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxyXG4gKiAgICBhbmQgQ2hyb21lLlxyXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDMgKi9cclxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAzICovXHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCAvKiAxICovXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXHJcbiAgICAqb3ZlcmZsb3c6IHZpc2libGU7ICAvKiA0ICovXHJcbn1cclxuXHJcbmJ1dHRvbltkaXNhYmxlZF0sXHJcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxyXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxyXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cclxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXHJcbiAgICAqaGVpZ2h0OiAxM3B4OyAvKiAzICovXHJcbiAgICAqd2lkdGg6IDEzcHg7IC8qIDMgKi9cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcclxuICogb24gT1MgWC5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cclxuICovXHJcblxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cclxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogMSAqL1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxyXG4gKi9cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaHRtbCxcclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuXHJcbjo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG46OnNlbGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4uY2hyb21lZnJhbWUge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMDtcclxufVxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=C:\\Users\\HP\\Desktop\\Deneme\\Portfolio\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/home.less":
/*!**************************!*\
  !*** ./styles/home.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "MZpN-_OYgbHd82yiIgaOl",
	"line": "ITJIWO8xQlLss4MnkQZmr",
	"dots": "_3MZKgdIEkOjzoe2PJ1X3Ce",
	"menu": "n20vZHq4Wufahey4asdBj",
	"list": "t5k-U9yc4zJeP1ggeuTMS",
	"item": "_2BskaqmEgdTd8UYM7hYa0J",
	"active": "_3wtQ4BBNgTe4xjMHE405op",
	"content": "_1TuWn6GfSo_21x88mmnXHQ",
	"image": "_1jp0h-Qdd4QHT_5xQq5oTD",
	"hi": "_12UyC-VyUSOCmKfUTnkiJI",
	"hello": "_1Wq_afo3O-MnwrFlmctW-h",
	"name": "_8aPSlxXNFm0pZT8VQT27L",
	"web": "_3KhIiZJOAo6urPPj_D4M3x",
	"links": "_3rlNpmbX0D6litCqWQOgFo",
	"link": "C3cr2nHDU9PPE92ohKxEF",
	"button": "_1P2SYeiXhSzntcevpS8ifV"
};

/***/ }),

/***/ "./styles/services.less":
/*!******************************!*\
  !*** ./styles/services.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "_2C5xTtzSbldprRL969nkls",
	"title": "_3So_jI1Ltk3h6D_-Gzmg-t",
	"line": "_19z8V_Pg9v5gM1_6TYV7HR",
	"info": "bYf0bEZJrC4S_gC9A7daa",
	"infoSecond": "Cc3697Rw-Y2f7qDHmGejk"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Desktop\Deneme\Portfolio\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
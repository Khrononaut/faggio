"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextHeader\": function() { return /* binding */ ContextHeader; },\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/NavBar */ \"./components/nav/NavBar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst ContextHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nfunction Header() {\n    _s();\n    const [activeLink, setActiveLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\");\n    const setLinkAsActive = (pageTitle)=>{\n        setActiveLink(pageTitle);\n    };\n    const value = {\n        activeLink: activeLink,\n        setActiveLink: setLinkAsActive\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContextHeader.Provider, {\n        value: value,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/Header.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/Header.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/Header.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"SVQOjAvLiriUZmQqVpcMnBjsilE=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNOO0FBRTNCLE1BQU1HLDhCQUFnQkgsMERBQW1CLENBQUMsQ0FBQyxHQUFHO0FBRXRDLFNBQVNLLFNBQVM7O0lBQy9CLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNTyxrQkFBa0IsQ0FBQ0MsWUFBc0I7UUFDN0NGLGNBQWNFO0lBQ2hCO0lBQ0EsTUFBTUMsUUFBUTtRQUFFSixZQUFZQTtRQUFZQyxlQUFlQztJQUFnQjtJQUN2RSxxQkFDRSw4REFBQ0wsY0FBY1EsUUFBUTtRQUFDRCxPQUFPQTtrQkFDN0IsNEVBQUNFO3NCQUNDLDRFQUFDVixtREFBTUE7Ozs7Ozs7Ozs7Ozs7OztBQUlmLENBQUM7R0FidUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9uYXYvTmF2QmFyXCI7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0SGVhZGVyID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW2FjdGl2ZUxpbmssIHNldEFjdGl2ZUxpbmtdID0gdXNlU3RhdGUoXCJob21lXCIpO1xuICBjb25zdCBzZXRMaW5rQXNBY3RpdmUgPSAocGFnZVRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRBY3RpdmVMaW5rKHBhZ2VUaXRsZSk7XG4gIH07XG4gIGNvbnN0IHZhbHVlID0geyBhY3RpdmVMaW5rOiBhY3RpdmVMaW5rLCBzZXRBY3RpdmVMaW5rOiBzZXRMaW5rQXNBY3RpdmUgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dEhlYWRlci5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9Db250ZXh0SGVhZGVyLlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZCYXIiLCJDb250ZXh0SGVhZGVyIiwiY3JlYXRlQ29udGV4dCIsIkhlYWRlciIsImFjdGl2ZUxpbmsiLCJzZXRBY3RpdmVMaW5rIiwic2V0TGlua0FzQWN0aXZlIiwicGFnZVRpdGxlIiwidmFsdWUiLCJQcm92aWRlciIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});
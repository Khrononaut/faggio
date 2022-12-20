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

/***/ "./components/nav/NavItem.tsx":
/*!************************************!*\
  !*** ./components/nav/NavItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/Icon */ \"./components/icons/Icon.tsx\");\n/* harmony import */ var _data_DNavIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/DNavIcons */ \"./data/DNavIcons.ts\");\n\n\n\n\n\nfunction NavItem(param) {\n    let { pageTitle  } = param;\n    const drawnIcon = _data_DNavIcons__WEBPACK_IMPORTED_MODULE_4__[\"default\"][pageTitle];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\".concat(pageTitle),\n        className: \"flex grow items-center justify-center py-4 opacity-50 hover:bg-slate-500 hover:opacity-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            icon: drawnIcon,\n            className: \"h-10 w-10 fill-slate-200\"\n        }, void 0, false, {\n            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = NavItem;\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9OYXZJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNHO0FBQ0k7QUFFZTtBQU1qQyxTQUFTSSxRQUFRLEtBQW9CLEVBQUU7UUFBdEIsRUFBRUMsVUFBUyxFQUFTLEdBQXBCO0lBQzlCLE1BQU1DLFlBQVlILHVEQUFZLENBQUNFLFVBQVU7SUFFekMscUJBQ0UsOERBQUNKLGtEQUFJQTtRQUNITSxNQUFNLElBQWMsT0FBVkY7UUFDVkcsV0FBVTtrQkFFViw0RUFBQ04sbURBQUlBO1lBQUNPLE1BQU1IO1lBQVdFLFdBQVU7Ozs7Ozs7Ozs7O0FBR3ZDLENBQUM7S0FYdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2L05hdkl0ZW0udHN4P2Q0MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25zL0ljb25cIjtcbmltcG9ydCB0eXBlIFRQYWdlVGl0bGUgZnJvbSBcIi4uLy4uL3R5cGluZ3MvdHlwZXMvVFBhZ2VUaXRsZVwiO1xuaW1wb3J0IGRhdGFOYXZJY29ucyBmcm9tIFwiLi4vLi4vZGF0YS9ETmF2SWNvbnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZVRpdGxlOiBUUGFnZVRpdGxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZJdGVtKHsgcGFnZVRpdGxlIH06IFByb3BzKSB7XG4gIGNvbnN0IGRyYXduSWNvbiA9IGRhdGFOYXZJY29uc1twYWdlVGl0bGVdO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGhyZWY9e2AvJHtwYWdlVGl0bGV9YH1cbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktNCBvcGFjaXR5LTUwIGhvdmVyOmJnLXNsYXRlLTUwMCBob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgPlxuICAgICAgPEljb24gaWNvbj17ZHJhd25JY29ufSBjbGFzc05hbWU9XCJoLTEwIHctMTAgZmlsbC1zbGF0ZS0yMDBcIiAvPlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJJY29uIiwiZGF0YU5hdkljb25zIiwiTmF2SXRlbSIsInBhZ2VUaXRsZSIsImRyYXduSWNvbiIsImhyZWYiLCJjbGFzc05hbWUiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/NavItem.tsx\n"));

/***/ })

});
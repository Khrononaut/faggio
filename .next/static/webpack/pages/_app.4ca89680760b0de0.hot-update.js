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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavActiveLink */ \"./components/nav/NavActiveLink.tsx\");\n/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/Icon */ \"./components/icons/Icon.tsx\");\n/* harmony import */ var _data_DNavIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/DNavIcons */ \"./data/DNavIcons.ts\");\n\n\n\n\n\nfunction NavItem(param) {\n    let { pageTitle  } = param;\n    const drawnIcon = _data_DNavIcons__WEBPACK_IMPORTED_MODULE_4__[\"default\"][pageTitle];\n    let activeClassNames = {\n        link: \"\",\n        icon: \"\"\n    };\n    let hoverClassName = \"\";\n    switch(pageTitle){\n        case \"calendar\":\n            activeClassNames = {\n                link: \"border-b-emerald-400\",\n                icon: \"\"\n            };\n            hoverClassName = \"hover:border-b-emerald-400\";\n            break;\n        case \"bookings\":\n            activeClassNames = {\n                link: \"border-b-yellow-400\",\n                icon: \"\"\n            };\n            hoverClassName = \"hover:border-b-yellow-400\";\n            break;\n        case \"home\":\n            activeClassNames = {\n                link: \"border-b-emerald-400\",\n                icon: \"\"\n            };\n            hoverClassName = \"hover:border-b-emerald-400\";\n            break;\n        case \"offices\":\n            activeClassNames = {\n                link: \"border-b-emerald-400\",\n                icon: \"\"\n            };\n            hoverClassName = \"hover:border-b-emerald-400\";\n            break;\n        case \"teams\":\n            activeClassNames = {\n                link: \"border-b-emerald-400\",\n                icon: \"\"\n            };\n            hoverClassName = \"hover:border-b-emerald-400\";\n            break;\n        case \"calendar\":\n            activeClassNames = {\n                link: \"border-b-emerald-400\",\n                icon: \"\"\n            };\n            hoverClassName = \"hover:border-b-emerald-400\";\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavActiveLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: \"/\".concat(pageTitle),\n        className: \"flex grow items-center justify-center border-b-4 border-slate-500 py-4 opacity-50 hover:bg-slate-600 hover:opacity-100 \".concat(hoverClassName),\n        activeClassName: activeClassNames.link,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            icon: drawnIcon,\n            className: \"h-10 w-10 fill-slate-400\"\n        }, void 0, false, {\n            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_c = NavItem;\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9OYXZJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2tCO0FBQ1g7QUFFZTtBQU1qQyxTQUFTSSxRQUFRLEtBQW9CLEVBQUU7UUFBdEIsRUFBRUMsVUFBUyxFQUFTLEdBQXBCO0lBQzlCLE1BQU1DLFlBQVlILHVEQUFZLENBQUNFLFVBQVU7SUFDekMsSUFBSUUsbUJBQW1CO1FBQ3JCQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBLElBQUlDLGlCQUFpQjtJQUVyQixPQUFRTDtRQUNOLEtBQUs7WUFDSEUsbUJBQW1CO2dCQUNqQkMsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1lBQ0FDLGlCQUFpQjtZQUNqQixLQUFNO1FBQ1IsS0FBSztZQUNISCxtQkFBbUI7Z0JBQ2pCQyxNQUFNO2dCQUNOQyxNQUFNO1lBQ1I7WUFDQUMsaUJBQWlCO1lBQ2pCLEtBQU07UUFDUixLQUFLO1lBQ0hILG1CQUFtQjtnQkFDakJDLE1BQU07Z0JBQ05DLE1BQU07WUFDUjtZQUNBQyxpQkFBaUI7WUFDakIsS0FBTTtRQUNSLEtBQUs7WUFDSEgsbUJBQW1CO2dCQUNqQkMsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1lBQ0FDLGlCQUFpQjtZQUNqQixLQUFNO1FBQ1IsS0FBSztZQUNISCxtQkFBbUI7Z0JBQ2pCQyxNQUFNO2dCQUNOQyxNQUFNO1lBQ1I7WUFDQUMsaUJBQWlCO1lBQ2pCLEtBQU07UUFDUixLQUFLO1lBQ0hILG1CQUFtQjtnQkFDakJDLE1BQU07Z0JBQ05DLE1BQU07WUFDUjtZQUNBQyxpQkFBaUI7WUFDakIsS0FBTTtJQUNWO0lBRUEscUJBQ0UsOERBQUNULHNEQUFhQTtRQUNaVSxNQUFNLElBQWMsT0FBVk47UUFDVk8sV0FBVywwSEFBeUksT0FBZkY7UUFDcklHLGlCQUFpQk4saUJBQWlCQyxJQUFJO2tCQUV0Qyw0RUFBQ04sbURBQUlBO1lBQUNPLE1BQU1IO1lBQVdNLFdBQVU7Ozs7Ozs7Ozs7O0FBR3ZDLENBQUM7S0E5RHVCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdi9OYXZJdGVtLnRzeD9kNDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZBY3RpdmVMaW5rIGZyb20gXCIuL05hdkFjdGl2ZUxpbmtcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29ucy9JY29uXCI7XG5pbXBvcnQgdHlwZSBUUGFnZVRpdGxlIGZyb20gXCIuLi8uLi90eXBpbmdzL3R5cGVzL1RQYWdlVGl0bGVcIjtcbmltcG9ydCBkYXRhTmF2SWNvbnMgZnJvbSBcIi4uLy4uL2RhdGEvRE5hdkljb25zXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VUaXRsZTogVFBhZ2VUaXRsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2SXRlbSh7IHBhZ2VUaXRsZSB9OiBQcm9wcykge1xuICBjb25zdCBkcmF3bkljb24gPSBkYXRhTmF2SWNvbnNbcGFnZVRpdGxlXTtcbiAgbGV0IGFjdGl2ZUNsYXNzTmFtZXMgPSB7XG4gICAgbGluazogXCJcIixcbiAgICBpY29uOiBcIlwiLFxuICB9O1xuICBsZXQgaG92ZXJDbGFzc05hbWUgPSBcIlwiO1xuXG4gIHN3aXRjaCAocGFnZVRpdGxlKSB7XG4gICAgY2FzZSBcImNhbGVuZGFyXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLWVtZXJhbGQtNDAwXCIsXG4gICAgICAgIGljb246IFwiXCIsXG4gICAgICB9O1xuICAgICAgaG92ZXJDbGFzc05hbWUgPSBcImhvdmVyOmJvcmRlci1iLWVtZXJhbGQtNDAwXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYm9va2luZ3NcIjpcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiYm9yZGVyLWIteWVsbG93LTQwMFwiLFxuICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgfTtcbiAgICAgIGhvdmVyQ2xhc3NOYW1lID0gXCJob3Zlcjpib3JkZXItYi15ZWxsb3ctNDAwXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgYWN0aXZlQ2xhc3NOYW1lcyA9IHtcbiAgICAgICAgbGluazogXCJib3JkZXItYi1lbWVyYWxkLTQwMFwiLFxuICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgfTtcbiAgICAgIGhvdmVyQ2xhc3NOYW1lID0gXCJob3Zlcjpib3JkZXItYi1lbWVyYWxkLTQwMFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9mZmljZXNcIjpcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiYm9yZGVyLWItZW1lcmFsZC00MDBcIixcbiAgICAgICAgaWNvbjogXCJcIixcbiAgICAgIH07XG4gICAgICBob3ZlckNsYXNzTmFtZSA9IFwiaG92ZXI6Ym9yZGVyLWItZW1lcmFsZC00MDBcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0ZWFtc1wiOlxuICAgICAgYWN0aXZlQ2xhc3NOYW1lcyA9IHtcbiAgICAgICAgbGluazogXCJib3JkZXItYi1lbWVyYWxkLTQwMFwiLFxuICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgfTtcbiAgICAgIGhvdmVyQ2xhc3NOYW1lID0gXCJob3Zlcjpib3JkZXItYi1lbWVyYWxkLTQwMFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGVuZGFyXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLWVtZXJhbGQtNDAwXCIsXG4gICAgICAgIGljb246IFwiXCIsXG4gICAgICB9O1xuICAgICAgaG92ZXJDbGFzc05hbWUgPSBcImhvdmVyOmJvcmRlci1iLWVtZXJhbGQtNDAwXCI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE5hdkFjdGl2ZUxpbmtcbiAgICAgIGhyZWY9e2AvJHtwYWdlVGl0bGV9YH1cbiAgICAgIGNsYXNzTmFtZT17YGZsZXggZ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLWItNCBib3JkZXItc2xhdGUtNTAwIHB5LTQgb3BhY2l0eS01MCBob3ZlcjpiZy1zbGF0ZS02MDAgaG92ZXI6b3BhY2l0eS0xMDAgJHtob3ZlckNsYXNzTmFtZX1gfVxuICAgICAgYWN0aXZlQ2xhc3NOYW1lPXthY3RpdmVDbGFzc05hbWVzLmxpbmt9XG4gICAgPlxuICAgICAgPEljb24gaWNvbj17ZHJhd25JY29ufSBjbGFzc05hbWU9XCJoLTEwIHctMTAgZmlsbC1zbGF0ZS00MDBcIiAvPlxuICAgIDwvTmF2QWN0aXZlTGluaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdkFjdGl2ZUxpbmsiLCJJY29uIiwiZGF0YU5hdkljb25zIiwiTmF2SXRlbSIsInBhZ2VUaXRsZSIsImRyYXduSWNvbiIsImFjdGl2ZUNsYXNzTmFtZXMiLCJsaW5rIiwiaWNvbiIsImhvdmVyQ2xhc3NOYW1lIiwiaHJlZiIsImNsYXNzTmFtZSIsImFjdGl2ZUNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav/NavItem.tsx\n"));

/***/ })

});
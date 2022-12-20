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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavActiveLink */ \"./components/nav/NavActiveLink.tsx\");\n/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/Icon */ \"./components/icons/Icon.tsx\");\n/* harmony import */ var _data_DNavIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/DNavIcons */ \"./data/DNavIcons.ts\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header */ \"./components/Header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NavItem(param) {\n    let { pageTitle  } = param;\n    _s();\n    const [isHovering, setIsHovering] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [computedClassNameIcon, setComputedClassNameIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Header__WEBPACK_IMPORTED_MODULE_5__.ContextHeader);\n    const isActiveLink = (context === null || context === void 0 ? void 0 : context.activeLink) === pageTitle;\n    const handleMouse = {\n        over: ()=>setIsHovering(true),\n        out: ()=>setIsHovering(false)\n    };\n    const drawnIcon = _data_DNavIcons__WEBPACK_IMPORTED_MODULE_4__[\"default\"][pageTitle];\n    let activeClassNames = {\n        link: \"\",\n        icon: \"\"\n    };\n    let hoverClassNames = {\n        link: \"\",\n        icon: \"\"\n    };\n    switch(pageTitle){\n        case \"calendar\":\n            activeClassNames = {\n                link: \"border-b-emerald-400\",\n                icon: \"fill-emerald-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-emerald-400 hover:bg-emerald-800\",\n                icon: \"fill-emerald-400\"\n            };\n            break;\n        case \"bookings\":\n            activeClassNames = {\n                link: \"border-b-amber-400\",\n                icon: \"fill-amber-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-amber-400 hover:bg-amber-900\",\n                icon: \"fill-amber-400\"\n            };\n            break;\n        case \"home\":\n            activeClassNames = {\n                link: \"border-b-slate-400\",\n                icon: \"fill-slate-800\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-slate-400 hover:bg-slate-500\",\n                icon: \"fill-slate-800\"\n            };\n            break;\n        case \"offices\":\n            activeClassNames = {\n                link: \"border-b-sky-400\",\n                icon: \"fill-sky-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-sky-400 hover:bg-sky-900\",\n                icon: \"fill-sky-400\"\n            };\n            break;\n        case \"teams\":\n            activeClassNames = {\n                link: \"border-b-pink-400\",\n                icon: \"fill-pink-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-pink-400 hover:bg-pink-900\",\n                icon: \"fill-pink-400\"\n            };\n            break;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.dir(context);\n        console.log(isActiveLink);\n        if (isHovering && isActiveLink) {\n            setComputedClassNameIcon(\"h-10 w-10 \".concat(hoverClassNames.icon, \" \").concat(activeClassNames.icon));\n        } else if (isHovering) {\n            setComputedClassNameIcon(\"h-10 w-10 \".concat(hoverClassNames.icon));\n        } else {\n            setComputedClassNameIcon(\"h-10 w-10 fill-slate-400\");\n        }\n    }, [\n        isHovering,\n        context\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavActiveLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: \"/\".concat(pageTitle),\n        className: \"flex grow items-center justify-center border-b-4 border-slate-500 py-4 opacity-50 transition hover:opacity-100 \".concat(hoverClassNames.link),\n        activeClassName: activeClassNames.link,\n        onMouseOver: handleMouse.over,\n        onMouseOut: handleMouse.out,\n        onClick: ()=>{\n            return context === null || context === void 0 ? void 0 : context.setActiveLink(pageTitle);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            icon: drawnIcon,\n            className: computedClassNameIcon\n        }, void 0, false, {\n            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s(NavItem, \"hB20bHYpKwRLfy330rRJh0/xQSo=\");\n_c = NavItem;\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZBY3RpdmVMaW5rIGZyb20gXCIuL05hdkFjdGl2ZUxpbmtcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29ucy9JY29uXCI7XG5pbXBvcnQgdHlwZSBUUGFnZVRpdGxlIGZyb20gXCIuLi8uLi90eXBpbmdzL3R5cGVzL1RQYWdlVGl0bGVcIjtcbmltcG9ydCBkYXRhTmF2SWNvbnMgZnJvbSBcIi4uLy4uL2RhdGEvRE5hdkljb25zXCI7XG5pbXBvcnQgeyBDb250ZXh0SGVhZGVyIH0gZnJvbSBcIi4uL0hlYWRlclwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYWdlVGl0bGU6IFRQYWdlVGl0bGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkl0ZW0oeyBwYWdlVGl0bGUgfTogUHJvcHMpIHtcbiAgY29uc3QgW2lzSG92ZXJpbmcsIHNldElzSG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tcHV0ZWRDbGFzc05hbWVJY29uLCBzZXRDb21wdXRlZENsYXNzTmFtZUljb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbnRleHRIZWFkZXIpO1xuICBjb25zdCBpc0FjdGl2ZUxpbmsgPSBjb250ZXh0Py5hY3RpdmVMaW5rID09PSBwYWdlVGl0bGU7XG5cbiAgY29uc3QgaGFuZGxlTW91c2UgPSB7XG4gICAgb3ZlcjogKCkgPT4gc2V0SXNIb3ZlcmluZyh0cnVlKSxcbiAgICBvdXQ6ICgpID0+IHNldElzSG92ZXJpbmcoZmFsc2UpLFxuICB9O1xuICBjb25zdCBkcmF3bkljb24gPSBkYXRhTmF2SWNvbnNbcGFnZVRpdGxlXTtcbiAgbGV0IGFjdGl2ZUNsYXNzTmFtZXMgPSB7XG4gICAgbGluazogXCJcIixcbiAgICBpY29uOiBcIlwiLFxuICB9O1xuICBsZXQgaG92ZXJDbGFzc05hbWVzID0ge1xuICAgIGxpbms6IFwiXCIsXG4gICAgaWNvbjogXCJcIixcbiAgfTtcblxuICBzd2l0Y2ggKHBhZ2VUaXRsZSkge1xuICAgIGNhc2UgXCJjYWxlbmRhclwiOlxuICAgICAgYWN0aXZlQ2xhc3NOYW1lcyA9IHtcbiAgICAgICAgbGluazogXCJib3JkZXItYi1lbWVyYWxkLTQwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtZW1lcmFsZC00MDBcIixcbiAgICAgIH07XG4gICAgICBob3ZlckNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiaG92ZXI6Ym9yZGVyLWItZW1lcmFsZC00MDAgaG92ZXI6YmctZW1lcmFsZC04MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLWVtZXJhbGQtNDAwXCIsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJvb2tpbmdzXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLWFtYmVyLTQwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtYW1iZXItNDAwXCIsXG4gICAgICB9O1xuICAgICAgaG92ZXJDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImhvdmVyOmJvcmRlci1iLWFtYmVyLTQwMCBob3ZlcjpiZy1hbWJlci05MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLWFtYmVyLTQwMFwiLFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJob21lXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLXNsYXRlLTQwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtc2xhdGUtODAwXCIsXG4gICAgICB9O1xuICAgICAgaG92ZXJDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImhvdmVyOmJvcmRlci1iLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS01MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLXNsYXRlLTgwMFwiLFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvZmZpY2VzXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLXNreS00MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLXNreS00MDBcIixcbiAgICAgIH07XG4gICAgICBob3ZlckNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiaG92ZXI6Ym9yZGVyLWItc2t5LTQwMCBob3ZlcjpiZy1za3ktOTAwXCIsXG4gICAgICAgIGljb246IFwiZmlsbC1za3ktNDAwXCIsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRlYW1zXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLXBpbmstNDAwXCIsXG4gICAgICAgIGljb246IFwiZmlsbC1waW5rLTQwMFwiLFxuICAgICAgfTtcbiAgICAgIGhvdmVyQ2xhc3NOYW1lcyA9IHtcbiAgICAgICAgbGluazogXCJob3Zlcjpib3JkZXItYi1waW5rLTQwMCBob3ZlcjpiZy1waW5rLTkwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtcGluay00MDBcIixcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5kaXIoY29udGV4dCk7XG4gICAgY29uc29sZS5sb2coaXNBY3RpdmVMaW5rKTtcbiAgICBpZiAoaXNIb3ZlcmluZyAmJiBpc0FjdGl2ZUxpbmspIHtcbiAgICAgIHNldENvbXB1dGVkQ2xhc3NOYW1lSWNvbihcbiAgICAgICAgYGgtMTAgdy0xMCAke2hvdmVyQ2xhc3NOYW1lcy5pY29ufSAke2FjdGl2ZUNsYXNzTmFtZXMuaWNvbn1gXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNIb3ZlcmluZykge1xuICAgICAgc2V0Q29tcHV0ZWRDbGFzc05hbWVJY29uKGBoLTEwIHctMTAgJHtob3ZlckNsYXNzTmFtZXMuaWNvbn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q29tcHV0ZWRDbGFzc05hbWVJY29uKFwiaC0xMCB3LTEwIGZpbGwtc2xhdGUtNDAwXCIpO1xuICAgIH1cbiAgfSwgW2lzSG92ZXJpbmcsIGNvbnRleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZBY3RpdmVMaW5rXG4gICAgICBocmVmPXtgLyR7cGFnZVRpdGxlfWB9XG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGdyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci1iLTQgYm9yZGVyLXNsYXRlLTUwMCBweS00IG9wYWNpdHktNTAgdHJhbnNpdGlvbiBob3ZlcjpvcGFjaXR5LTEwMCAke2hvdmVyQ2xhc3NOYW1lcy5saW5rfWB9XG4gICAgICBhY3RpdmVDbGFzc05hbWU9e2FjdGl2ZUNsYXNzTmFtZXMubGlua31cbiAgICAgIG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZS5vdmVyfVxuICAgICAgb25Nb3VzZU91dD17aGFuZGxlTW91c2Uub3V0fVxuICAgICAgb25DbGljaz17KCkgPT4gY29udGV4dD8uc2V0QWN0aXZlTGluayhwYWdlVGl0bGUpfVxuICAgID5cbiAgICAgIDxJY29uIGljb249e2RyYXduSWNvbn0gY2xhc3NOYW1lPXtjb21wdXRlZENsYXNzTmFtZUljb259IC8+XG4gICAgPC9OYXZBY3RpdmVMaW5rPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiTmF2QWN0aXZlTGluayIsIkljb24iLCJkYXRhTmF2SWNvbnMiLCJDb250ZXh0SGVhZGVyIiwiTmF2SXRlbSIsInBhZ2VUaXRsZSIsImlzSG92ZXJpbmciLCJzZXRJc0hvdmVyaW5nIiwiY29tcHV0ZWRDbGFzc05hbWVJY29uIiwic2V0Q29tcHV0ZWRDbGFzc05hbWVJY29uIiwiY29udGV4dCIsImlzQWN0aXZlTGluayIsImFjdGl2ZUxpbmsiLCJoYW5kbGVNb3VzZSIsIm92ZXIiLCJvdXQiLCJkcmF3bkljb24iLCJhY3RpdmVDbGFzc05hbWVzIiwibGluayIsImljb24iLCJob3ZlckNsYXNzTmFtZXMiLCJjb25zb2xlIiwiZGlyIiwibG9nIiwiaHJlZiIsImNsYXNzTmFtZSIsImFjdGl2ZUNsYXNzTmFtZSIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uQ2xpY2siLCJzZXRBY3RpdmVMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/NavItem.tsx\n"));

/***/ })

});
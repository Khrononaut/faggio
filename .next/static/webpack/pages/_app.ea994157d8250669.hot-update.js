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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavActiveLink */ \"./components/nav/NavActiveLink.tsx\");\n/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/Icon */ \"./components/icons/Icon.tsx\");\n/* harmony import */ var _data_DNavIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/DNavIcons */ \"./data/DNavIcons.ts\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Header */ \"./components/Header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction NavItem(param) {\n    let { pageTitle  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isHovering, setIsHovering] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [computedClassNameIcon, setComputedClassNameIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Header__WEBPACK_IMPORTED_MODULE_6__.ContextHeader);\n    const isActiveLink = (context === null || context === void 0 ? void 0 : context.activeLink) === pageTitle;\n    const handleMouse = {\n        over: ()=>setIsHovering(true),\n        out: ()=>setIsHovering(false)\n    };\n    const drawnIcon = _data_DNavIcons__WEBPACK_IMPORTED_MODULE_5__[\"default\"][pageTitle];\n    let activeClassNames = {\n        link: \"\",\n        icon: \"\"\n    };\n    let hoverClassNames = {\n        link: \"\",\n        icon: \"\"\n    };\n    switch(pageTitle){\n        case \"calendar\":\n            activeClassNames = {\n                link: \"border-b-emerald-400\",\n                icon: \"fill-emerald-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-emerald-400 hover:bg-emerald-800\",\n                icon: \"fill-emerald-400\"\n            };\n            break;\n        case \"bookings\":\n            activeClassNames = {\n                link: \"border-b-amber-400\",\n                icon: \"fill-amber-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-amber-400 hover:bg-amber-900\",\n                icon: \"fill-amber-400\"\n            };\n            break;\n        case \"home\":\n            activeClassNames = {\n                link: \"border-b-slate-400\",\n                icon: \"fill-slate-800\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-slate-400 hover:bg-slate-500\",\n                icon: \"fill-slate-800\"\n            };\n            break;\n        case \"offices\":\n            activeClassNames = {\n                link: \"border-b-sky-400\",\n                icon: \"fill-sky-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-sky-400 hover:bg-sky-900\",\n                icon: \"fill-sky-400\"\n            };\n            break;\n        case \"teams\":\n            activeClassNames = {\n                link: \"border-b-pink-400\",\n                icon: \"fill-pink-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-pink-400 hover:bg-pink-900\",\n                icon: \"fill-pink-400\"\n            };\n            break;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (router.pathname === \"/\".concat(pageTitle)) {\n            console.log(context.activeLink);\n            context === null || context === void 0 ? void 0 : context.setActiveLink(pageTitle);\n        }\n        if (isActiveLink) {\n            setComputedClassNameIcon(\"h-10 w-10 \".concat(activeClassNames.icon));\n        }\n        if (isHovering) {\n            setComputedClassNameIcon(\"h-10 w-10 \".concat(hoverClassNames.icon));\n        } else {\n            setComputedClassNameIcon(\"h-10 w-10 fill-slate-400\");\n        }\n    }, [\n        isHovering,\n        context\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavActiveLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        href: \"/\".concat(pageTitle),\n        className: \"flex grow items-center justify-center border-b-4 border-slate-500 py-4 opacity-50 transition hover:opacity-100 \".concat(hoverClassNames.link),\n        activeClassName: activeClassNames.link,\n        onMouseOver: handleMouse.over,\n        onMouseOut: handleMouse.out,\n        onClick: ()=>{\n            return context === null || context === void 0 ? void 0 : context.setActiveLink(pageTitle);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            icon: drawnIcon,\n            className: computedClassNameIcon\n        }, void 0, false, {\n            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_s(NavItem, \"fdT7qL4YQmdx6d6vPg/LY5+ql7Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavItem;\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUd4QyxDQUFDO0dBdkd1Qkw7O1FBQ1BMLGtEQUFTQTs7O0tBREZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2L05hdkl0ZW0udHN4P2Q0MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5hdkFjdGl2ZUxpbmsgZnJvbSBcIi4vTmF2QWN0aXZlTGlua1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25zL0ljb25cIjtcbmltcG9ydCB0eXBlIFRQYWdlVGl0bGUgZnJvbSBcIi4uLy4uL3R5cGluZ3MvdHlwZXMvVFBhZ2VUaXRsZVwiO1xuaW1wb3J0IGRhdGFOYXZJY29ucyBmcm9tIFwiLi4vLi4vZGF0YS9ETmF2SWNvbnNcIjtcbmltcG9ydCB7IENvbnRleHRIZWFkZXIgfSBmcm9tIFwiLi4vSGVhZGVyXCI7XG5pbXBvcnQgQWN0aXZlTGluayBmcm9tIFwiLi9OYXZBY3RpdmVMaW5rXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VUaXRsZTogVFBhZ2VUaXRsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2SXRlbSh7IHBhZ2VUaXRsZSB9OiBQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzSG92ZXJpbmcsIHNldElzSG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tcHV0ZWRDbGFzc05hbWVJY29uLCBzZXRDb21wdXRlZENsYXNzTmFtZUljb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbnRleHRIZWFkZXIpO1xuICBjb25zdCBpc0FjdGl2ZUxpbmsgPSBjb250ZXh0Py5hY3RpdmVMaW5rID09PSBwYWdlVGl0bGU7XG5cbiAgY29uc3QgaGFuZGxlTW91c2UgPSB7XG4gICAgb3ZlcjogKCkgPT4gc2V0SXNIb3ZlcmluZyh0cnVlKSxcbiAgICBvdXQ6ICgpID0+IHNldElzSG92ZXJpbmcoZmFsc2UpLFxuICB9O1xuICBjb25zdCBkcmF3bkljb24gPSBkYXRhTmF2SWNvbnNbcGFnZVRpdGxlXTtcbiAgbGV0IGFjdGl2ZUNsYXNzTmFtZXMgPSB7XG4gICAgbGluazogXCJcIixcbiAgICBpY29uOiBcIlwiLFxuICB9O1xuICBsZXQgaG92ZXJDbGFzc05hbWVzID0ge1xuICAgIGxpbms6IFwiXCIsXG4gICAgaWNvbjogXCJcIixcbiAgfTtcblxuICBzd2l0Y2ggKHBhZ2VUaXRsZSkge1xuICAgIGNhc2UgXCJjYWxlbmRhclwiOlxuICAgICAgYWN0aXZlQ2xhc3NOYW1lcyA9IHtcbiAgICAgICAgbGluazogXCJib3JkZXItYi1lbWVyYWxkLTQwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtZW1lcmFsZC00MDBcIixcbiAgICAgIH07XG4gICAgICBob3ZlckNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiaG92ZXI6Ym9yZGVyLWItZW1lcmFsZC00MDAgaG92ZXI6YmctZW1lcmFsZC04MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLWVtZXJhbGQtNDAwXCIsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJvb2tpbmdzXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLWFtYmVyLTQwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtYW1iZXItNDAwXCIsXG4gICAgICB9O1xuICAgICAgaG92ZXJDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImhvdmVyOmJvcmRlci1iLWFtYmVyLTQwMCBob3ZlcjpiZy1hbWJlci05MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLWFtYmVyLTQwMFwiLFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJob21lXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLXNsYXRlLTQwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtc2xhdGUtODAwXCIsXG4gICAgICB9O1xuICAgICAgaG92ZXJDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImhvdmVyOmJvcmRlci1iLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS01MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLXNsYXRlLTgwMFwiLFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvZmZpY2VzXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLXNreS00MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLXNreS00MDBcIixcbiAgICAgIH07XG4gICAgICBob3ZlckNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiaG92ZXI6Ym9yZGVyLWItc2t5LTQwMCBob3ZlcjpiZy1za3ktOTAwXCIsXG4gICAgICAgIGljb246IFwiZmlsbC1za3ktNDAwXCIsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRlYW1zXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLXBpbmstNDAwXCIsXG4gICAgICAgIGljb246IFwiZmlsbC1waW5rLTQwMFwiLFxuICAgICAgfTtcbiAgICAgIGhvdmVyQ2xhc3NOYW1lcyA9IHtcbiAgICAgICAgbGluazogXCJob3Zlcjpib3JkZXItYi1waW5rLTQwMCBob3ZlcjpiZy1waW5rLTkwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtcGluay00MDBcIixcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gYC8ke3BhZ2VUaXRsZX1gKSB7XG4gICAgICBjb25zb2xlLmxvZyhjb250ZXh0LmFjdGl2ZUxpbmspO1xuICAgICAgY29udGV4dD8uc2V0QWN0aXZlTGluayhwYWdlVGl0bGUpO1xuICAgIH1cblxuICAgIGlmIChpc0FjdGl2ZUxpbmspIHtcbiAgICAgIHNldENvbXB1dGVkQ2xhc3NOYW1lSWNvbihgaC0xMCB3LTEwICR7YWN0aXZlQ2xhc3NOYW1lcy5pY29ufWApO1xuICAgIH1cblxuICAgIGlmIChpc0hvdmVyaW5nKSB7XG4gICAgICBzZXRDb21wdXRlZENsYXNzTmFtZUljb24oYGgtMTAgdy0xMCAke2hvdmVyQ2xhc3NOYW1lcy5pY29ufWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDb21wdXRlZENsYXNzTmFtZUljb24oXCJoLTEwIHctMTAgZmlsbC1zbGF0ZS00MDBcIik7XG4gICAgfVxuICB9LCBbaXNIb3ZlcmluZywgY29udGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkFjdGl2ZUxpbmtcbiAgICAgIGhyZWY9e2AvJHtwYWdlVGl0bGV9YH1cbiAgICAgIGNsYXNzTmFtZT17YGZsZXggZ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLWItNCBib3JkZXItc2xhdGUtNTAwIHB5LTQgb3BhY2l0eS01MCB0cmFuc2l0aW9uIGhvdmVyOm9wYWNpdHktMTAwICR7aG92ZXJDbGFzc05hbWVzLmxpbmt9YH1cbiAgICAgIGFjdGl2ZUNsYXNzTmFtZT17YWN0aXZlQ2xhc3NOYW1lcy5saW5rfVxuICAgICAgb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlLm92ZXJ9XG4gICAgICBvbk1vdXNlT3V0PXtoYW5kbGVNb3VzZS5vdXR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBjb250ZXh0Py5zZXRBY3RpdmVMaW5rKHBhZ2VUaXRsZSl9XG4gICAgPlxuICAgICAgPEljb24gaWNvbj17ZHJhd25JY29ufSBjbGFzc05hbWU9e2NvbXB1dGVkQ2xhc3NOYW1lSWNvbn0gLz5cbiAgICA8L05hdkFjdGl2ZUxpbms+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJOYXZBY3RpdmVMaW5rIiwiSWNvbiIsImRhdGFOYXZJY29ucyIsIkNvbnRleHRIZWFkZXIiLCJOYXZJdGVtIiwicGFnZVRpdGxlIiwicm91dGVyIiwiaXNIb3ZlcmluZyIsInNldElzSG92ZXJpbmciLCJjb21wdXRlZENsYXNzTmFtZUljb24iLCJzZXRDb21wdXRlZENsYXNzTmFtZUljb24iLCJjb250ZXh0IiwiaXNBY3RpdmVMaW5rIiwiYWN0aXZlTGluayIsImhhbmRsZU1vdXNlIiwib3ZlciIsIm91dCIsImRyYXduSWNvbiIsImFjdGl2ZUNsYXNzTmFtZXMiLCJsaW5rIiwiaWNvbiIsImhvdmVyQ2xhc3NOYW1lcyIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsInNldEFjdGl2ZUxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwiYWN0aXZlQ2xhc3NOYW1lIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav/NavItem.tsx\n"));

/***/ })

});
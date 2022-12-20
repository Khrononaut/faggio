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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavActiveLink */ \"./components/nav/NavActiveLink.tsx\");\n/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/Icon */ \"./components/icons/Icon.tsx\");\n/* harmony import */ var _data_DNavIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/DNavIcons */ \"./data/DNavIcons.ts\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Header */ \"./components/Header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction NavItem(param) {\n    let { pageTitle  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isHovering, setIsHovering] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [computedClassNameIcon, setComputedClassNameIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Header__WEBPACK_IMPORTED_MODULE_6__.ContextHeader);\n    const isActiveLink = (context === null || context === void 0 ? void 0 : context.activeLink) === pageTitle;\n    const handleMouse = {\n        over: ()=>setIsHovering(true),\n        out: ()=>setIsHovering(false)\n    };\n    const drawnIcon = _data_DNavIcons__WEBPACK_IMPORTED_MODULE_5__[\"default\"][pageTitle];\n    let activeClassNames = {\n        link: \"\",\n        icon: \"\"\n    };\n    let hoverClassNames = {\n        link: \"\",\n        icon: \"\"\n    };\n    switch(pageTitle){\n        case \"calendar\":\n            activeClassNames = {\n                link: \"border-b-emerald-400\",\n                icon: \"fill-emerald-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-emerald-400 hover:bg-emerald-800\",\n                icon: \"fill-emerald-400\"\n            };\n            break;\n        case \"bookings\":\n            activeClassNames = {\n                link: \"border-b-amber-400\",\n                icon: \"fill-amber-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-amber-400 hover:bg-amber-900\",\n                icon: \"fill-amber-400\"\n            };\n            break;\n        case \"home\":\n            activeClassNames = {\n                link: \"border-b-slate-400\",\n                icon: \"fill-slate-800\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-slate-400 hover:bg-slate-500\",\n                icon: \"fill-slate-800\"\n            };\n            break;\n        case \"offices\":\n            activeClassNames = {\n                link: \"border-b-sky-400\",\n                icon: \"fill-sky-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-sky-400 hover:bg-sky-900\",\n                icon: \"fill-sky-400\"\n            };\n            break;\n        case \"teams\":\n            activeClassNames = {\n                link: \"border-b-pink-400\",\n                icon: \"fill-pink-400\"\n            };\n            hoverClassNames = {\n                link: \"hover:border-b-pink-400 hover:bg-pink-900\",\n                icon: \"fill-pink-400\"\n            };\n            break;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (router.pathname === \"/\".concat(pageTitle)) {\n            context === null || context === void 0 ? void 0 : context.setActiveLink(pageTitle);\n        }\n        if (isHovering && isActiveLink) {\n            setComputedClassNameIcon(\"h-10 w-10 \".concat(hoverClassNames.icon, \" \").concat(activeClassNames.icon));\n        } else if (isHovering) {\n            setComputedClassNameIcon(\"h-10 w-10 \".concat(hoverClassNames.icon));\n        } else {\n            setComputedClassNameIcon(\"h-10 w-10 fill-slate-400\");\n        }\n    }, [\n        isHovering,\n        context\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavActiveLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        href: \"/\".concat(pageTitle),\n        className: \"flex grow items-center justify-center border-b-4 border-slate-500 py-4 opacity-50 transition hover:opacity-100 \".concat(hoverClassNames.link),\n        activeClassName: activeClassNames.link,\n        onMouseOver: handleMouse.over,\n        onMouseOut: handleMouse.out,\n        onClick: ()=>{\n            return context === null || context === void 0 ? void 0 : context.setActiveLink(pageTitle);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            icon: drawnIcon,\n            className: computedClassNameIcon\n        }, void 0, false, {\n            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavItem.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n}\n_s(NavItem, \"fdT7qL4YQmdx6d6vPg/LY5+ql7Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavItem;\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R3hDLENBQUM7R0FyR3VCTDs7UUFDUEwsa0RBQVNBOzs7S0FERksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvTmF2SXRlbS50c3g/ZDQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2QWN0aXZlTGluayBmcm9tIFwiLi9OYXZBY3RpdmVMaW5rXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvbnMvSWNvblwiO1xuaW1wb3J0IHR5cGUgVFBhZ2VUaXRsZSBmcm9tIFwiLi4vLi4vdHlwaW5ncy90eXBlcy9UUGFnZVRpdGxlXCI7XG5pbXBvcnQgZGF0YU5hdkljb25zIGZyb20gXCIuLi8uLi9kYXRhL0ROYXZJY29uc1wiO1xuaW1wb3J0IHsgQ29udGV4dEhlYWRlciB9IGZyb20gXCIuLi9IZWFkZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZVRpdGxlOiBUUGFnZVRpdGxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZJdGVtKHsgcGFnZVRpdGxlIH06IFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNIb3ZlcmluZywgc2V0SXNIb3ZlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21wdXRlZENsYXNzTmFtZUljb24sIHNldENvbXB1dGVkQ2xhc3NOYW1lSWNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29udGV4dEhlYWRlcik7XG4gIGNvbnN0IGlzQWN0aXZlTGluayA9IGNvbnRleHQ/LmFjdGl2ZUxpbmsgPT09IHBhZ2VUaXRsZTtcblxuICBjb25zdCBoYW5kbGVNb3VzZSA9IHtcbiAgICBvdmVyOiAoKSA9PiBzZXRJc0hvdmVyaW5nKHRydWUpLFxuICAgIG91dDogKCkgPT4gc2V0SXNIb3ZlcmluZyhmYWxzZSksXG4gIH07XG4gIGNvbnN0IGRyYXduSWNvbiA9IGRhdGFOYXZJY29uc1twYWdlVGl0bGVdO1xuICBsZXQgYWN0aXZlQ2xhc3NOYW1lcyA9IHtcbiAgICBsaW5rOiBcIlwiLFxuICAgIGljb246IFwiXCIsXG4gIH07XG4gIGxldCBob3ZlckNsYXNzTmFtZXMgPSB7XG4gICAgbGluazogXCJcIixcbiAgICBpY29uOiBcIlwiLFxuICB9O1xuXG4gIHN3aXRjaCAocGFnZVRpdGxlKSB7XG4gICAgY2FzZSBcImNhbGVuZGFyXCI6XG4gICAgICBhY3RpdmVDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImJvcmRlci1iLWVtZXJhbGQtNDAwXCIsXG4gICAgICAgIGljb246IFwiZmlsbC1lbWVyYWxkLTQwMFwiLFxuICAgICAgfTtcbiAgICAgIGhvdmVyQ2xhc3NOYW1lcyA9IHtcbiAgICAgICAgbGluazogXCJob3Zlcjpib3JkZXItYi1lbWVyYWxkLTQwMCBob3ZlcjpiZy1lbWVyYWxkLTgwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtZW1lcmFsZC00MDBcIixcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYm9va2luZ3NcIjpcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiYm9yZGVyLWItYW1iZXItNDAwXCIsXG4gICAgICAgIGljb246IFwiZmlsbC1hbWJlci00MDBcIixcbiAgICAgIH07XG4gICAgICBob3ZlckNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiaG92ZXI6Ym9yZGVyLWItYW1iZXItNDAwIGhvdmVyOmJnLWFtYmVyLTkwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtYW1iZXItNDAwXCIsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImhvbWVcIjpcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiYm9yZGVyLWItc2xhdGUtNDAwXCIsXG4gICAgICAgIGljb246IFwiZmlsbC1zbGF0ZS04MDBcIixcbiAgICAgIH07XG4gICAgICBob3ZlckNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiaG92ZXI6Ym9yZGVyLWItc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTUwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtc2xhdGUtODAwXCIsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9mZmljZXNcIjpcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiYm9yZGVyLWItc2t5LTQwMFwiLFxuICAgICAgICBpY29uOiBcImZpbGwtc2t5LTQwMFwiLFxuICAgICAgfTtcbiAgICAgIGhvdmVyQ2xhc3NOYW1lcyA9IHtcbiAgICAgICAgbGluazogXCJob3Zlcjpib3JkZXItYi1za3ktNDAwIGhvdmVyOmJnLXNreS05MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLXNreS00MDBcIixcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGVhbXNcIjpcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZXMgPSB7XG4gICAgICAgIGxpbms6IFwiYm9yZGVyLWItcGluay00MDBcIixcbiAgICAgICAgaWNvbjogXCJmaWxsLXBpbmstNDAwXCIsXG4gICAgICB9O1xuICAgICAgaG92ZXJDbGFzc05hbWVzID0ge1xuICAgICAgICBsaW5rOiBcImhvdmVyOmJvcmRlci1iLXBpbmstNDAwIGhvdmVyOmJnLXBpbmstOTAwXCIsXG4gICAgICAgIGljb246IFwiZmlsbC1waW5rLTQwMFwiLFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSBgLyR7cGFnZVRpdGxlfWApIHtcbiAgICAgIGNvbnRleHQ/LnNldEFjdGl2ZUxpbmsocGFnZVRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGlzSG92ZXJpbmcgJiYgaXNBY3RpdmVMaW5rKSB7XG4gICAgICBzZXRDb21wdXRlZENsYXNzTmFtZUljb24oXG4gICAgICAgIGBoLTEwIHctMTAgJHtob3ZlckNsYXNzTmFtZXMuaWNvbn0gJHthY3RpdmVDbGFzc05hbWVzLmljb259YFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzSG92ZXJpbmcpIHtcbiAgICAgIHNldENvbXB1dGVkQ2xhc3NOYW1lSWNvbihgaC0xMCB3LTEwICR7aG92ZXJDbGFzc05hbWVzLmljb259YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENvbXB1dGVkQ2xhc3NOYW1lSWNvbihcImgtMTAgdy0xMCBmaWxsLXNsYXRlLTQwMFwiKTtcbiAgICB9XG4gIH0sIFtpc0hvdmVyaW5nLCBjb250ZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2QWN0aXZlTGlua1xuICAgICAgaHJlZj17YC8ke3BhZ2VUaXRsZX1gfVxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBncm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItYi00IGJvcmRlci1zbGF0ZS01MDAgcHktNCBvcGFjaXR5LTUwIHRyYW5zaXRpb24gaG92ZXI6b3BhY2l0eS0xMDAgJHtob3ZlckNsYXNzTmFtZXMubGlua31gfVxuICAgICAgYWN0aXZlQ2xhc3NOYW1lPXthY3RpdmVDbGFzc05hbWVzLmxpbmt9XG4gICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2Uub3Zlcn1cbiAgICAgIG9uTW91c2VPdXQ9e2hhbmRsZU1vdXNlLm91dH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnRleHQ/LnNldEFjdGl2ZUxpbmsocGFnZVRpdGxlKX1cbiAgICA+XG4gICAgICA8SWNvbiBpY29uPXtkcmF3bkljb259IGNsYXNzTmFtZT17Y29tcHV0ZWRDbGFzc05hbWVJY29ufSAvPlxuICAgIDwvTmF2QWN0aXZlTGluaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsIk5hdkFjdGl2ZUxpbmsiLCJJY29uIiwiZGF0YU5hdkljb25zIiwiQ29udGV4dEhlYWRlciIsIk5hdkl0ZW0iLCJwYWdlVGl0bGUiLCJyb3V0ZXIiLCJpc0hvdmVyaW5nIiwic2V0SXNIb3ZlcmluZyIsImNvbXB1dGVkQ2xhc3NOYW1lSWNvbiIsInNldENvbXB1dGVkQ2xhc3NOYW1lSWNvbiIsImNvbnRleHQiLCJpc0FjdGl2ZUxpbmsiLCJhY3RpdmVMaW5rIiwiaGFuZGxlTW91c2UiLCJvdmVyIiwib3V0IiwiZHJhd25JY29uIiwiYWN0aXZlQ2xhc3NOYW1lcyIsImxpbmsiLCJpY29uIiwiaG92ZXJDbGFzc05hbWVzIiwicGF0aG5hbWUiLCJzZXRBY3RpdmVMaW5rIiwiaHJlZiIsImNsYXNzTmFtZSIsImFjdGl2ZUNsYXNzTmFtZSIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/NavItem.tsx\n"));

/***/ })

});
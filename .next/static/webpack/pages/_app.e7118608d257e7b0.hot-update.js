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

/***/ "./components/nav/NavActiveLink.tsx":
/*!******************************************!*\
  !*** ./components/nav/NavActiveLink.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ActiveLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ActiveLink(param) {\n    let { children , activeClassName , className , onMouseOver , onMouseOut , ...props } = param;\n    _s();\n    const { asPath , isReady  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [computedClassName, setComputedClassName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(className);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Check if the router fields are updated client-side\n        if (isReady) {\n            // Dynamic route will be matched via props.as\n            // Static route will be matched via props.href\n            const linkPathname = new URL(props.as || props.href, location.href).pathname;\n            // Using URL().pathname to get rid of query and hash\n            const activePathname = new URL(asPath, location.href).pathname;\n            const newClassName = linkPathname === activePathname ? \"\".concat(className, \" \").concat(activeClassName).trim() : className;\n            if (newClassName !== computedClassName) {\n                setComputedClassName(newClassName);\n            }\n        }\n    }, [\n        asPath,\n        isReady,\n        props.as,\n        props.href,\n        activeClassName,\n        className,\n        computedClassName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: computedClassName,\n        onMouseOver: onMouseOver,\n        onMouseOut: onMouseOut,\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/nav/NavActiveLink.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(ActiveLink, \"TRhCJiDWpC9388NYyWxNLro96/M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ActiveLink;\nvar _c;\n$RefreshReg$(_c, \"ActiveLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9OYXZBY3RpdmVMaW5rLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDSTtBQUMwQjtBQVN2RCxTQUFTSyxXQUFXLEtBT0UsRUFBRTtRQVBKLEVBQ2pDQyxTQUFRLEVBQ1JDLGdCQUFlLEVBQ2ZDLFVBQVMsRUFDVEMsWUFBVyxFQUNYQyxXQUFVLEVBQ1YsR0FBR0MsT0FDZ0MsR0FQRjs7SUFRakMsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHYixzREFBU0E7SUFDckMsTUFBTSxDQUFDYyxtQkFBbUJDLHFCQUFxQixHQUFHWiwrQ0FBUUEsQ0FBQ0s7SUFFM0RKLGdEQUFTQSxDQUFDLElBQU07UUFDZCxxREFBcUQ7UUFDckQsSUFBSVMsU0FBUztZQUNYLDZDQUE2QztZQUM3Qyw4Q0FBOEM7WUFDOUMsTUFBTUcsZUFBZSxJQUFJQyxJQUN0Qk4sTUFBTU8sRUFBRSxJQUFJUCxNQUFNUSxJQUFJLEVBQ3ZCQyxTQUFTRCxJQUFJLEVBQ2JFLFFBQVE7WUFFVixvREFBb0Q7WUFDcEQsTUFBTUMsaUJBQWlCLElBQUlMLElBQUlMLFFBQVFRLFNBQVNELElBQUksRUFBRUUsUUFBUTtZQUU5RCxNQUFNRSxlQUNKUCxpQkFBaUJNLGlCQUNiLEdBQWdCZixPQUFiQyxXQUFVLEtBQW1CLE9BQWhCRCxpQkFBa0JpQixJQUFJLEtBQ3RDaEIsU0FBUztZQUVmLElBQUllLGlCQUFpQlQsbUJBQW1CO2dCQUN0Q0MscUJBQXFCUTtZQUN2QixDQUFDO1FBQ0gsQ0FBQztJQUNILEdBQUc7UUFDRFg7UUFDQUM7UUFDQUYsTUFBTU8sRUFBRTtRQUNSUCxNQUFNUSxJQUFJO1FBQ1ZaO1FBQ0FDO1FBQ0FNO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ2Isa0RBQUlBO1FBQ0hPLFdBQVdNO1FBQ1hMLGFBQWFBO1FBQ2JDLFlBQVlBO1FBQ1gsR0FBR0MsS0FBSztrQkFFUkw7Ozs7OztBQUdQLENBQUM7R0FyRHVCRDs7UUFRTUwsa0RBQVNBOzs7S0FSZksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvTmF2QWN0aXZlTGluay50c3g/NGQ0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rLCB7IExpbmtQcm9wcyB9IGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEFjdGl2ZUxpbmtQcm9wcyA9IExpbmtQcm9wcyAmIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBhY3RpdmVDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG9uTW91c2VPdmVyOiAoKSA9PiB2b2lkO1xuICBvbk1vdXNlT3V0OiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aXZlTGluayh7XG4gIGNoaWxkcmVuLFxuICBhY3RpdmVDbGFzc05hbWUsXG4gIGNsYXNzTmFtZSxcbiAgb25Nb3VzZU92ZXIsXG4gIG9uTW91c2VPdXQsXG4gIC4uLnByb3BzXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxBY3RpdmVMaW5rUHJvcHM+KSB7XG4gIGNvbnN0IHsgYXNQYXRoLCBpc1JlYWR5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2NvbXB1dGVkQ2xhc3NOYW1lLCBzZXRDb21wdXRlZENsYXNzTmFtZV0gPSB1c2VTdGF0ZShjbGFzc05hbWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJvdXRlciBmaWVsZHMgYXJlIHVwZGF0ZWQgY2xpZW50LXNpZGVcbiAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgLy8gRHluYW1pYyByb3V0ZSB3aWxsIGJlIG1hdGNoZWQgdmlhIHByb3BzLmFzXG4gICAgICAvLyBTdGF0aWMgcm91dGUgd2lsbCBiZSBtYXRjaGVkIHZpYSBwcm9wcy5ocmVmXG4gICAgICBjb25zdCBsaW5rUGF0aG5hbWUgPSBuZXcgVVJMKFxuICAgICAgICAocHJvcHMuYXMgfHwgcHJvcHMuaHJlZikgYXMgc3RyaW5nLFxuICAgICAgICBsb2NhdGlvbi5ocmVmXG4gICAgICApLnBhdGhuYW1lO1xuXG4gICAgICAvLyBVc2luZyBVUkwoKS5wYXRobmFtZSB0byBnZXQgcmlkIG9mIHF1ZXJ5IGFuZCBoYXNoXG4gICAgICBjb25zdCBhY3RpdmVQYXRobmFtZSA9IG5ldyBVUkwoYXNQYXRoLCBsb2NhdGlvbi5ocmVmKS5wYXRobmFtZTtcblxuICAgICAgY29uc3QgbmV3Q2xhc3NOYW1lID1cbiAgICAgICAgbGlua1BhdGhuYW1lID09PSBhY3RpdmVQYXRobmFtZVxuICAgICAgICAgID8gYCR7Y2xhc3NOYW1lfSAke2FjdGl2ZUNsYXNzTmFtZX1gLnRyaW0oKVxuICAgICAgICAgIDogY2xhc3NOYW1lO1xuXG4gICAgICBpZiAobmV3Q2xhc3NOYW1lICE9PSBjb21wdXRlZENsYXNzTmFtZSkge1xuICAgICAgICBzZXRDb21wdXRlZENsYXNzTmFtZShuZXdDbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW1xuICAgIGFzUGF0aCxcbiAgICBpc1JlYWR5LFxuICAgIHByb3BzLmFzLFxuICAgIHByb3BzLmhyZWYsXG4gICAgYWN0aXZlQ2xhc3NOYW1lLFxuICAgIGNsYXNzTmFtZSxcbiAgICBjb21wdXRlZENsYXNzTmFtZSxcbiAgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgY2xhc3NOYW1lPXtjb21wdXRlZENsYXNzTmFtZX1cbiAgICAgIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn1cbiAgICAgIG9uTW91c2VPdXQ9e29uTW91c2VPdXR9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFjdGl2ZUxpbmsiLCJjaGlsZHJlbiIsImFjdGl2ZUNsYXNzTmFtZSIsImNsYXNzTmFtZSIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsInByb3BzIiwiYXNQYXRoIiwiaXNSZWFkeSIsImNvbXB1dGVkQ2xhc3NOYW1lIiwic2V0Q29tcHV0ZWRDbGFzc05hbWUiLCJsaW5rUGF0aG5hbWUiLCJVUkwiLCJhcyIsImhyZWYiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYWN0aXZlUGF0aG5hbWUiLCJuZXdDbGFzc05hbWUiLCJ0cmltIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/NavActiveLink.tsx\n"));

/***/ })

});
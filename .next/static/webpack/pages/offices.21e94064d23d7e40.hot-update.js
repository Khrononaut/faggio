"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/offices",{

/***/ "./components/MapOffices.tsx":
/*!***********************************!*\
  !*** ./components/MapOffices.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n/* harmony import */ var _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typings/types/TOffices */ \"./typings/types/TOffices.ts\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst markers = [\n    {\n        markerOffset: 13,\n        name: \"k\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"m\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"leipzig\",\n        coordinates: [\n            12.360103,\n            51.340199\n        ]\n    },\n    {\n        markerOffset: 11,\n        name: \"bremen\",\n        coordinates: [\n            8.806422,\n            53.073635\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__.ContextTeams);\n    function handleMarkerClick(office) {\n        const germanOfficeNameInLowerCase = office.toLowerCase();\n        context === null || context === void 0 ? void 0 : context.setDisplayedOffice(_typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesGermanToEnglish[germanOfficeNameInLowerCase]);\n    }\n    function isCurrentlyDisplayedOffice(chosenOffice) {\n        return chosenOffice === _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesEnglishToGerman[context === null || context === void 0 ? void 0 : context.displayedOffice];\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.ComposableMap, {\n        width: 120,\n        height: 200,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geography, {\n                            geography: geo,\n                            fill: \"#0284c7\",\n                            className: \"outline-none\"\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>/*#__PURE__*/ {\n                let { name , coordinates , markerOffset  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                    coordinates: coordinates,\n                    onClick: ()=>handleMarkerClick(name),\n                    style: {\n                        default: {\n                            fill: \"#06F\"\n                        },\n                        hover: {\n                            fontSize: \"16px\"\n                        }\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 3,\n                            fill: \"\".concat(isCurrentlyDisplayedOffice(name) ? \"#7dd3fc\" : \"#0369a1\"),\n                            stroke: \"#01579b\",\n                            strokeWidth: 0.5\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontSize: \"8px\",\n                                fill: \"#e1f5fe\",\n                                textTransform: \"uppercase\",\n                                fontWeight: \"\".concat(isCurrentlyDisplayedOffice(name) ? \"bold\" : \"lighter\")\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(MapOffices, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBPZmZpY2VzLnRzeD8zNzk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0VGVhbXMgfSBmcm9tIFwiLi9jb250ZXh0cy9Db250ZXh0VGVhbXNcIjtcbmltcG9ydCB7XG4gIEVPZmZpY2VzR2VybWFuVG9FbmdsaXNoLFxuICBFT2ZmaWNlc0VuZ2xpc2hUb0dlcm1hbixcbiAgVE9mZmljZXNHZXJtYW4sXG59IGZyb20gXCIuLi90eXBpbmdzL3R5cGVzL1RPZmZpY2VzXCI7XG5pbXBvcnQge1xuICBDb21wb3NhYmxlTWFwLFxuICBHZW9ncmFwaGllcyxcbiAgR2VvZ3JhcGh5LFxuICBNYXJrZXIsXG59IGZyb20gXCJyZWFjdC1zaW1wbGUtbWFwc1wiO1xuXG5pbnRlcmZhY2UgSU1hcmtlciB7XG4gIG1hcmtlck9mZnNldDogbnVtYmVyO1xuICBuYW1lOiBUT2ZmaWNlc0dlcm1hbjtcbiAgY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl07XG59XG5cbmNvbnN0IG1hcmtlcnM6IElNYXJrZXJbXSA9IFtcbiAge1xuICAgIG1hcmtlck9mZnNldDogMTMsXG4gICAgbmFtZTogXCJrw7ZsblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbNi45NTMxMDEsIDUwLjkzNTE3M10sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC01LFxuICAgIG5hbWU6IFwiZG9ydG11bmRcIixcbiAgICBjb29yZGluYXRlczogWzcuNDY2LCA1MS41MTQ5NF0sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC01LFxuICAgIG5hbWU6IFwibcO8bmNoZW5cIixcbiAgICBjb29yZGluYXRlczogWzExLjU3NTQ5LCA0OC4xMzc0M10sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC01LFxuICAgIG5hbWU6IFwiaGFtYnVyZ1wiLFxuICAgIGNvb3JkaW5hdGVzOiBbOS45OTMwMiwgNTMuNTUwNzNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAxMixcbiAgICBuYW1lOiBcImZyYW5rZnVydFwiLFxuICAgIGNvb3JkaW5hdGVzOiBbOC42ODQxNywgNTAuMTE1NTJdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNSxcbiAgICBuYW1lOiBcImJlcmxpblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbMTMuNDEwNTMsIDUyLjUyNDM3XSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogMTIsXG4gICAgbmFtZTogXCJsZWlwemlnXCIsXG4gICAgY29vcmRpbmF0ZXM6IFsxMi4zNjAxMDMsIDUxLjM0MDE5OV0sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IDExLFxuICAgIG5hbWU6IFwiYnJlbWVuXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs4LjgwNjQyMiwgNTMuMDczNjM1XSxcbiAgfSxcbl07XG5cbmNvbnN0IGdlb1VybCA9XG4gIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RlbGRlcnN2ZWxkL3RvcG9qc29uL21hc3Rlci9jb3VudHJpZXMvZ2VybWFueS9nZXJtYW55LXJlZ2lvbnMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBPZmZpY2VzKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb250ZXh0VGVhbXMpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU1hcmtlckNsaWNrKG9mZmljZTogVE9mZmljZXNHZXJtYW4pIHtcbiAgICBjb25zdCBnZXJtYW5PZmZpY2VOYW1lSW5Mb3dlckNhc2U6IFRPZmZpY2VzR2VybWFuID1cbiAgICAgIG9mZmljZS50b0xvd2VyQ2FzZSgpIGFzIFRPZmZpY2VzR2VybWFuO1xuICAgIGNvbnRleHQ/LnNldERpc3BsYXllZE9mZmljZShcbiAgICAgIEVPZmZpY2VzR2VybWFuVG9FbmdsaXNoW2dlcm1hbk9mZmljZU5hbWVJbkxvd2VyQ2FzZV1cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDdXJyZW50bHlEaXNwbGF5ZWRPZmZpY2UoY2hvc2VuT2ZmaWNlOiBUT2ZmaWNlc0dlcm1hbikge1xuICAgIHJldHVybiBjaG9zZW5PZmZpY2UgPT09IEVPZmZpY2VzRW5nbGlzaFRvR2VybWFuW2NvbnRleHQ/LmRpc3BsYXllZE9mZmljZSFdO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9zYWJsZU1hcFxuICAgICAgd2lkdGg9ezEyMH1cbiAgICAgIGhlaWdodD17MjAwfVxuICAgICAgcHJvamVjdGlvbj1cImdlb01lcmNhdG9yXCJcbiAgICAgIHByb2plY3Rpb25Db25maWc9e3tcbiAgICAgICAgcm90YXRlOiBbLTEwLjUsIC01MS4wLCAwXSxcbiAgICAgICAgc2NhbGU6IDEwMDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxHZW9ncmFwaGllcyBnZW9ncmFwaHk9e2dlb1VybH0+XG4gICAgICAgIHsoeyBnZW9ncmFwaGllcyB9KSA9PlxuICAgICAgICAgIGdlb2dyYXBoaWVzLm1hcCgoZ2VvKSA9PiAoXG4gICAgICAgICAgICA8R2VvZ3JhcGh5XG4gICAgICAgICAgICAgIGtleT17Z2VvLnJzbUtleX1cbiAgICAgICAgICAgICAgZ2VvZ3JhcGh5PXtnZW99XG4gICAgICAgICAgICAgIGZpbGw9XCIjMDI4NGM3XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9HZW9ncmFwaGllcz5cbiAgICAgIHttYXJrZXJzLm1hcCgoeyBuYW1lLCBjb29yZGluYXRlcywgbWFya2VyT2Zmc2V0IH0pID0+IChcbiAgICAgICAgPE1hcmtlclxuICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICBjb29yZGluYXRlcz17Y29vcmRpbmF0ZXN9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTWFya2VyQ2xpY2sobmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRlZmF1bHQ6IHsgZmlsbDogXCIjMDZGXCIgfSxcbiAgICAgICAgICAgIGhvdmVyOiB7IGZvbnRTaXplOiBcIjE2cHhcIiB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICByPXszfVxuICAgICAgICAgICAgZmlsbD17YCR7aXNDdXJyZW50bHlEaXNwbGF5ZWRPZmZpY2UobmFtZSkgPyBcIiM3ZGQzZmNcIiA6IFwiIzAzNjlhMVwifWB9XG4gICAgICAgICAgICBzdHJva2U9XCIjMDE1NzliXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXswLjV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICB5PXttYXJrZXJPZmZzZXR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCI4cHhcIixcbiAgICAgICAgICAgICAgZmlsbDogXCIjZTFmNWZlXCIsXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGAke1xuICAgICAgICAgICAgICAgIGlzQ3VycmVudGx5RGlzcGxheWVkT2ZmaWNlKG5hbWUpID8gXCJib2xkXCIgOiBcImxpZ2h0ZXJcIlxuICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L01hcmtlcj5cbiAgICAgICkpfVxuICAgIDwvQ29tcG9zYWJsZU1hcD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0VGVhbXMiLCJFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaCIsIkVPZmZpY2VzRW5nbGlzaFRvR2VybWFuIiwiQ29tcG9zYWJsZU1hcCIsIkdlb2dyYXBoaWVzIiwiR2VvZ3JhcGh5IiwiTWFya2VyIiwibWFya2VycyIsIm1hcmtlck9mZnNldCIsIm5hbWUiLCJjb29yZGluYXRlcyIsImdlb1VybCIsIk1hcE9mZmljZXMiLCJjb250ZXh0IiwiaGFuZGxlTWFya2VyQ2xpY2siLCJvZmZpY2UiLCJnZXJtYW5PZmZpY2VOYW1lSW5Mb3dlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsInNldERpc3BsYXllZE9mZmljZSIsImlzQ3VycmVudGx5RGlzcGxheWVkT2ZmaWNlIiwiY2hvc2VuT2ZmaWNlIiwiZGlzcGxheWVkT2ZmaWNlIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0aW9uIiwicHJvamVjdGlvbkNvbmZpZyIsInJvdGF0ZSIsInNjYWxlIiwiZ2VvZ3JhcGh5IiwiZ2VvZ3JhcGhpZXMiLCJtYXAiLCJnZW8iLCJmaWxsIiwiY2xhc3NOYW1lIiwicnNtS2V5Iiwib25DbGljayIsInN0eWxlIiwiZGVmYXVsdCIsImhvdmVyIiwiZm9udFNpemUiLCJjaXJjbGUiLCJyIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJ0ZXh0IiwidGV4dEFuY2hvciIsInkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ })

});
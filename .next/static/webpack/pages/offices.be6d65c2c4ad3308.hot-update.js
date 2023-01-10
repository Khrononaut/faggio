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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n/* harmony import */ var _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typings/types/TOffices */ \"./typings/types/TOffices.ts\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst markers = [\n    {\n        markerOffset: 13,\n        name: \"K\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"Dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"M\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"Frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__.ContextTeams);\n    function handleMarkerClick(office) {\n        context === null || context === void 0 ? void 0 : context.setDisplayedOffice(_typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesGermanToEnglish[office]);\n        console.log(context === null || context === void 0 ? void 0 : context.displayedOffice);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.ComposableMap, {\n        width: 120,\n        height: 200,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geography, {\n                            geography: geo,\n                            fill: \"#0284c7\",\n                            stroke: \"#0369a1\",\n                            strokeOpacity: 0.25,\n                            strokeWidth: 0.125\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>/*#__PURE__*/ {\n                let { name , coordinates , markerOffset  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                    coordinates: coordinates,\n                    onClick: (e)=>handleMarkerClick(e),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 3,\n                            fill: \"#e1f5fe\",\n                            stroke: \"#01579b\",\n                            strokeWidth: 0.5\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontSize: \"8px\",\n                                fill: \"#e1f5fe\",\n                                textTransform: \"uppercase\"\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(MapOffices, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUNhO0FBSXBCO0FBTVI7QUFRM0IsTUFBTVEsVUFBcUI7SUFDekI7UUFDRUMsY0FBYztRQUNkQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVU7SUFDcEM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBTztTQUFTO0lBQ2hDO0lBQ0E7UUFDRUYsY0FBYyxDQUFDO1FBQ2ZDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVU7U0FBUztJQUNuQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFTO1NBQVM7SUFDbEM7SUFDQTtRQUNFRixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVM7U0FBUztJQUNsQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVM7SUFDbkM7Q0FDRDtBQUVELE1BQU1DLFNBQ0o7QUFFYSxTQUFTQyxhQUFhOztJQUNuQyxNQUFNQyxVQUFVYixpREFBVUEsQ0FBQ0MsZ0VBQVlBO0lBQ3ZDLFNBQVNhLGtCQUFrQkMsTUFBc0IsRUFBRTtRQUNqREYsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRyxrQkFBa0IsQ0FBQ2QsNEVBQXVCLENBQUNhLE9BQU87UUFDM0RFLFFBQVFDLEdBQUcsQ0FBQ0wsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTTSxlQUFlO0lBQ3RDO0lBRUEscUJBQ0UsOERBQUNoQiw0REFBYUE7UUFDWmlCLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxZQUFXO1FBQ1hDLGtCQUFrQjtZQUNoQkMsUUFBUTtnQkFBQyxDQUFDO2dCQUFNLENBQUM7Z0JBQU07YUFBRTtZQUN6QkMsT0FBTztRQUNUOzswQkFFQSw4REFBQ3JCLDBEQUFXQTtnQkFBQ3NCLFdBQVdmOzBCQUNyQixTQUNDZ0I7d0JBREEsRUFBRUEsWUFBVyxFQUFFOzJCQUNmQSxZQUFZQyxHQUFHLENBQUMsQ0FBQ0Msb0JBQ2YsOERBQUN4Qix3REFBU0E7NEJBRVJxQixXQUFXRzs0QkFDWEMsTUFBSzs0QkFDTEMsUUFBTzs0QkFDUEMsZUFBZTs0QkFDZkMsYUFBYTsyQkFMUkosSUFBSUssTUFBTTs7Ozs7Z0JBT2xCOzs7Ozs7WUFHSjNCLFFBQVFxQixHQUFHLENBQUMsdUJBQ1g7b0JBRFksRUFBRW5CLEtBQUksRUFBRUMsWUFBVyxFQUFFRixhQUFZLEVBQUU7dUJBQy9DLDhEQUFDRixxREFBTUE7b0JBRUxJLGFBQWFBO29CQUNieUIsU0FBUyxDQUFDQyxJQUFNdEIsa0JBQWtCc0I7O3NDQUVsQyw4REFBQ0M7NEJBQU9DLEdBQUc7NEJBQUdSLE1BQUs7NEJBQVVDLFFBQU87NEJBQVVFLGFBQWE7Ozs7OztzQ0FDM0QsOERBQUNNOzRCQUNDQyxZQUFXOzRCQUNYQyxHQUFHakM7NEJBQ0hrQyxPQUFPO2dDQUNMQyxVQUFVO2dDQUNWYixNQUFNO2dDQUNOYyxlQUFlOzRCQUNqQjtzQ0FFQ25DOzs7Ozs7O21CQWRFQTs7Ozs7WUFnQkM7Ozs7Ozs7QUFJaEIsQ0FBQztHQXJEdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwT2ZmaWNlcy50c3g/Mzc5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGV4dFRlYW1zIH0gZnJvbSBcIi4vY29udGV4dHMvQ29udGV4dFRlYW1zXCI7XG5pbXBvcnQge1xuICBFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaCxcbiAgVE9mZmljZXNHZXJtYW4sXG59IGZyb20gXCIuLi90eXBpbmdzL3R5cGVzL1RPZmZpY2VzXCI7XG5pbXBvcnQge1xuICBDb21wb3NhYmxlTWFwLFxuICBHZW9ncmFwaGllcyxcbiAgR2VvZ3JhcGh5LFxuICBNYXJrZXIsXG59IGZyb20gXCJyZWFjdC1zaW1wbGUtbWFwc1wiO1xuXG5pbnRlcmZhY2UgSU1hcmtlciB7XG4gIG1hcmtlck9mZnNldDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5jb25zdCBtYXJrZXJzOiBJTWFya2VyW10gPSBbXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IDEzLFxuICAgIG5hbWU6IFwiS8O2bG5cIixcbiAgICBjb29yZGluYXRlczogWzYuOTUzMTAxLCA1MC45MzUxNzNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNixcbiAgICBuYW1lOiBcIkRvcnRtdW5kXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs3LjQ2NiwgNTEuNTE0OTRdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNSxcbiAgICBuYW1lOiBcIk3DvG5jaGVuXCIsXG4gICAgY29vcmRpbmF0ZXM6IFsxMS41NzU0OSwgNDguMTM3NDNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNSxcbiAgICBuYW1lOiBcIkhhbWJ1cmdcIixcbiAgICBjb29yZGluYXRlczogWzkuOTkzMDIsIDUzLjU1MDczXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogMTIsXG4gICAgbmFtZTogXCJGcmFua2Z1cnRcIixcbiAgICBjb29yZGluYXRlczogWzguNjg0MTcsIDUwLjExNTUyXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJCZXJsaW5cIixcbiAgICBjb29yZGluYXRlczogWzEzLjQxMDUzLCA1Mi41MjQzN10sXG4gIH0sXG5dO1xuXG5jb25zdCBnZW9VcmwgPVxuICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZWxkZXJzdmVsZC90b3BvanNvbi9tYXN0ZXIvY291bnRyaWVzL2dlcm1hbnkvZ2VybWFueS1yZWdpb25zLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwT2ZmaWNlcygpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29udGV4dFRlYW1zKTtcbiAgZnVuY3Rpb24gaGFuZGxlTWFya2VyQ2xpY2sob2ZmaWNlOiBUT2ZmaWNlc0dlcm1hbikge1xuICAgIGNvbnRleHQ/LnNldERpc3BsYXllZE9mZmljZShFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaFtvZmZpY2VdKTtcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0Py5kaXNwbGF5ZWRPZmZpY2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9zYWJsZU1hcFxuICAgICAgd2lkdGg9ezEyMH1cbiAgICAgIGhlaWdodD17MjAwfVxuICAgICAgcHJvamVjdGlvbj1cImdlb01lcmNhdG9yXCJcbiAgICAgIHByb2plY3Rpb25Db25maWc9e3tcbiAgICAgICAgcm90YXRlOiBbLTEwLjUsIC01MS4wLCAwXSxcbiAgICAgICAgc2NhbGU6IDEwMDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxHZW9ncmFwaGllcyBnZW9ncmFwaHk9e2dlb1VybH0+XG4gICAgICAgIHsoeyBnZW9ncmFwaGllcyB9KSA9PlxuICAgICAgICAgIGdlb2dyYXBoaWVzLm1hcCgoZ2VvKSA9PiAoXG4gICAgICAgICAgICA8R2VvZ3JhcGh5XG4gICAgICAgICAgICAgIGtleT17Z2VvLnJzbUtleX1cbiAgICAgICAgICAgICAgZ2VvZ3JhcGh5PXtnZW99XG4gICAgICAgICAgICAgIGZpbGw9XCIjMDI4NGM3XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiIzAzNjlhMVwiXG4gICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk9ezAuMjV9XG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXswLjEyNX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9HZW9ncmFwaGllcz5cbiAgICAgIHttYXJrZXJzLm1hcCgoeyBuYW1lLCBjb29yZGluYXRlcywgbWFya2VyT2Zmc2V0IH0pID0+IChcbiAgICAgICAgPE1hcmtlclxuICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICBjb29yZGluYXRlcz17Y29vcmRpbmF0ZXN9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZU1hcmtlckNsaWNrKGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPGNpcmNsZSByPXszfSBmaWxsPVwiI2UxZjVmZVwiIHN0cm9rZT1cIiMwMTU3OWJcIiBzdHJva2VXaWR0aD17MC41fSAvPlxuICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgIHk9e21hcmtlck9mZnNldH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjhweFwiLFxuICAgICAgICAgICAgICBmaWxsOiBcIiNlMWY1ZmVcIixcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L01hcmtlcj5cbiAgICAgICkpfVxuICAgIDwvQ29tcG9zYWJsZU1hcD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0VGVhbXMiLCJFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaCIsIkNvbXBvc2FibGVNYXAiLCJHZW9ncmFwaGllcyIsIkdlb2dyYXBoeSIsIk1hcmtlciIsIm1hcmtlcnMiLCJtYXJrZXJPZmZzZXQiLCJuYW1lIiwiY29vcmRpbmF0ZXMiLCJnZW9VcmwiLCJNYXBPZmZpY2VzIiwiY29udGV4dCIsImhhbmRsZU1hcmtlckNsaWNrIiwib2ZmaWNlIiwic2V0RGlzcGxheWVkT2ZmaWNlIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXllZE9mZmljZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJvamVjdGlvbiIsInByb2plY3Rpb25Db25maWciLCJyb3RhdGUiLCJzY2FsZSIsImdlb2dyYXBoeSIsImdlb2dyYXBoaWVzIiwibWFwIiwiZ2VvIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXaWR0aCIsInJzbUtleSIsIm9uQ2xpY2siLCJlIiwiY2lyY2xlIiwiciIsInRleHQiLCJ0ZXh0QW5jaG9yIiwieSIsInN0eWxlIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ }),

/***/ "./typings/types/TOffices.ts":
/*!***********************************!*\
  !*** ./typings/types/TOffices.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EOfficesEnglishToGerman\": function() { return /* binding */ EOfficesEnglishToGerman; },\n/* harmony export */   \"EOfficesGermanToEnglish\": function() { return /* binding */ EOfficesGermanToEnglish; }\n/* harmony export */ });\nvar EOfficesEnglishToGerman;\n(function(EOfficesEnglishToGerman) {\n    EOfficesEnglishToGerman[\"cologne\"] = \"k\\xf6ln\";\n    EOfficesEnglishToGerman[\"dortmund\"] = \"dortmund\";\n    EOfficesEnglishToGerman[\"hamburg\"] = \"hamburg\";\n    EOfficesEnglishToGerman[\"berlin\"] = \"berlin\";\n    EOfficesEnglishToGerman[\"frankfurt\"] = \"frankfurt\";\n    EOfficesEnglishToGerman[\"munich\"] = \"m\\xfcnchen\";\n})(EOfficesEnglishToGerman || (EOfficesEnglishToGerman = {}));\nvar EOfficesGermanToEnglish;\n(function(EOfficesGermanToEnglish) {\n    EOfficesGermanToEnglish[\"k\\xf6ln\"] = \"cologne\";\n    EOfficesGermanToEnglish[\"dortmund\"] = \"dortmund\";\n    EOfficesGermanToEnglish[\"hamburg\"] = \"hamburg\";\n    EOfficesGermanToEnglish[\"berlin\"] = \"berlin\";\n    EOfficesGermanToEnglish[\"frankfurt\"] = \"frankfurt\";\n    EOfficesGermanToEnglish[\"m\\xfcnchen\"] = \"munich\";\n})(EOfficesGermanToEnglish || (EOfficesGermanToEnglish = {}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90eXBpbmdzL3R5cGVzL1RPZmZpY2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFnQk87VUFBS0EsdUJBQXVCO0lBQXZCQSx3QkFDVkMsYUFBVTtJQURBRCx3QkFFVkUsY0FBQUE7SUFGVUYsd0JBR1ZHLGFBQUFBO0lBSFVILHdCQUlWSSxZQUFBQTtJQUpVSix3QkFLVkssZUFBQUE7SUFMVUwsd0JBTVZNLFlBQVM7R0FOQ04sNEJBQUFBO0lBU0w7VUFBS08sdUJBQXVCO0lBQXZCQSx3QkFDVixhQUFTO0lBRENBLHdCQUVWTCxjQUFBQTtJQUZVSyx3QkFHVkosYUFBQUE7SUFIVUksd0JBSVZILFlBQUFBO0lBSlVHLHdCQUtWRixlQUFBQTtJQUxVRSx3QkFNVixnQkFBWTtHQU5GQSw0QkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdHlwaW5ncy90eXBlcy9UT2ZmaWNlcy50cz83MTgzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgVE9mZmljZXMgPVxuICB8IFwiY29sb2duZVwiXG4gIHwgXCJkb3J0bXVuZFwiXG4gIHwgXCJoYW1idXJnXCJcbiAgfCBcImJlcmxpblwiXG4gIHwgXCJmcmFua2Z1cnRcIlxuICB8IFwibXVuaWNoXCI7XG5cbmV4cG9ydCB0eXBlIFRPZmZpY2VzR2VybWFuID1cbiAgfCBcImvDtmxuXCJcbiAgfCBcImRvcnRtdW5kXCJcbiAgfCBcImhhbWJ1cmdcIlxuICB8IFwiYmVybGluXCJcbiAgfCBcImZyYW5rZnVydFwiXG4gIHwgXCJtw7xuY2hlblwiO1xuXG5leHBvcnQgZW51bSBFT2ZmaWNlc0VuZ2xpc2hUb0dlcm1hbiB7XG4gIGNvbG9nbmUgPSBcImvDtmxuXCIsXG4gIGRvcnRtdW5kID0gXCJkb3J0bXVuZFwiLFxuICBoYW1idXJnID0gXCJoYW1idXJnXCIsXG4gIGJlcmxpbiA9IFwiYmVybGluXCIsXG4gIGZyYW5rZnVydCA9IFwiZnJhbmtmdXJ0XCIsXG4gIG11bmljaCA9IFwibcO8bmNoZW5cIixcbn1cblxuZXhwb3J0IGVudW0gRU9mZmljZXNHZXJtYW5Ub0VuZ2xpc2gge1xuICBcImvDtmxuXCIgPSBcImNvbG9nbmVcIixcbiAgZG9ydG11bmQgPSBcImRvcnRtdW5kXCIsXG4gIGhhbWJ1cmcgPSBcImhhbWJ1cmdcIixcbiAgYmVybGluID0gXCJiZXJsaW5cIixcbiAgZnJhbmtmdXJ0ID0gXCJmcmFua2Z1cnRcIixcbiAgXCJtw7xuY2hlblwiID0gXCJtdW5pY2hcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgVE9mZmljZXM7XG4iXSwibmFtZXMiOlsiRU9mZmljZXNFbmdsaXNoVG9HZXJtYW4iLCJjb2xvZ25lIiwiZG9ydG11bmQiLCJoYW1idXJnIiwiYmVybGluIiwiZnJhbmtmdXJ0IiwibXVuaWNoIiwiRU9mZmljZXNHZXJtYW5Ub0VuZ2xpc2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./typings/types/TOffices.ts\n"));

/***/ })

});
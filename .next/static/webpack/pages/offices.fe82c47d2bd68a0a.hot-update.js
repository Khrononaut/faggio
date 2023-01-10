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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction translateOfficeName() {}\nconst markers = [\n    {\n        markerOffset: 13,\n        name: \"K\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"Dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"M\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"Frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__.ContextTeams);\n    function handleMarkerClick(e) {\n        console.log(context === null || context === void 0 ? void 0 : context.displayedOffice);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.ComposableMap, {\n        width: 120,\n        height: 200,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geography, {\n                            geography: geo,\n                            fill: \"#0284c7\",\n                            stroke: \"#0369a1\",\n                            strokeOpacity: 0.25,\n                            strokeWidth: 0.125\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>/*#__PURE__*/ {\n                let { name , coordinates , markerOffset  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                    coordinates: coordinates,\n                    onClick: (e)=>handleMarkerClick(e),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 3,\n                            fill: \"#e1f5fe\",\n                            stroke: \"#01579b\",\n                            strokeWidth: 0.5\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontSize: \"8px\",\n                                fill: \"#e1f5fe\",\n                                textTransform: \"uppercase\"\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(MapOffices, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBDO0FBQ2E7QUFPNUI7QUFRM0IsU0FBU08sc0JBQXNCLENBQUM7QUFFaEMsTUFBTUMsVUFBcUI7SUFDekI7UUFDRUMsY0FBYztRQUNkQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVU7SUFDcEM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBTztTQUFTO0lBQ2hDO0lBQ0E7UUFDRUYsY0FBYyxDQUFDO1FBQ2ZDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVU7U0FBUztJQUNuQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFTO1NBQVM7SUFDbEM7SUFDQTtRQUNFRixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVM7U0FBUztJQUNsQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVM7SUFDbkM7Q0FDRDtBQUVELE1BQU1DLFNBQ0o7QUFFYSxTQUFTQyxhQUFhOztJQUNuQyxNQUFNQyxVQUFVYixpREFBVUEsQ0FBQ0MsZ0VBQVlBO0lBQ3ZDLFNBQVNhLGtCQUFrQkMsQ0FBTSxFQUFFO1FBQ2pDQyxRQUFRQyxHQUFHLENBQUNKLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0ssZUFBZTtJQUN0QztJQUVBLHFCQUNFLDhEQUFDaEIsNERBQWFBO1FBQ1ppQixPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsWUFBVztRQUNYQyxrQkFBa0I7WUFDaEJDLFFBQVE7Z0JBQUMsQ0FBQztnQkFBTSxDQUFDO2dCQUFNO2FBQUU7WUFDekJDLE9BQU87UUFDVDs7MEJBRUEsOERBQUNyQiwwREFBV0E7Z0JBQUNzQixXQUFXZDswQkFDckIsU0FDQ2U7d0JBREEsRUFBRUEsWUFBVyxFQUFFOzJCQUNmQSxZQUFZQyxHQUFHLENBQUMsQ0FBQ0Msb0JBQ2YsOERBQUN4Qix3REFBU0E7NEJBRVJxQixXQUFXRzs0QkFDWEMsTUFBSzs0QkFDTEMsUUFBTzs0QkFDUEMsZUFBZTs0QkFDZkMsYUFBYTsyQkFMUkosSUFBSUssTUFBTTs7Ozs7Z0JBT2xCOzs7Ozs7WUFHSjFCLFFBQVFvQixHQUFHLENBQUMsdUJBQ1g7b0JBRFksRUFBRWxCLEtBQUksRUFBRUMsWUFBVyxFQUFFRixhQUFZLEVBQUU7dUJBQy9DLDhEQUFDSCxxREFBTUE7b0JBRUxLLGFBQWFBO29CQUNid0IsU0FBUyxDQUFDbkIsSUFBTUQsa0JBQWtCQzs7c0NBRWxDLDhEQUFDb0I7NEJBQU9DLEdBQUc7NEJBQUdQLE1BQUs7NEJBQVVDLFFBQU87NEJBQVVFLGFBQWE7Ozs7OztzQ0FDM0QsOERBQUNLOzRCQUNDQyxZQUFXOzRCQUNYQyxHQUFHL0I7NEJBQ0hnQyxPQUFPO2dDQUNMQyxVQUFVO2dDQUNWWixNQUFNO2dDQUNOYSxlQUFlOzRCQUNqQjtzQ0FFQ2pDOzs7Ozs7O21CQWRFQTs7Ozs7WUFnQkM7Ozs7Ozs7QUFJaEIsQ0FBQztHQXBEdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwT2ZmaWNlcy50c3g/Mzc5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGV4dFRlYW1zIH0gZnJvbSBcIi4vY29udGV4dHMvQ29udGV4dFRlYW1zXCI7XG5pbXBvcnQgeyBFT2ZmaWNlc0dlcm1hbiB9IGZyb20gXCIuLi90eXBpbmdzL3R5cGVzL1RPZmZpY2VzXCI7XG5pbXBvcnQge1xuICBDb21wb3NhYmxlTWFwLFxuICBHZW9ncmFwaGllcyxcbiAgR2VvZ3JhcGh5LFxuICBNYXJrZXIsXG59IGZyb20gXCJyZWFjdC1zaW1wbGUtbWFwc1wiO1xuXG5pbnRlcmZhY2UgSU1hcmtlciB7XG4gIG1hcmtlck9mZnNldDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVPZmZpY2VOYW1lKCkge31cblxuY29uc3QgbWFya2VyczogSU1hcmtlcltdID0gW1xuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAxMyxcbiAgICBuYW1lOiBcIkvDtmxuXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs2Ljk1MzEwMSwgNTAuOTM1MTczXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTYsXG4gICAgbmFtZTogXCJEb3J0bXVuZFwiLFxuICAgIGNvb3JkaW5hdGVzOiBbNy40NjYsIDUxLjUxNDk0XSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJNw7xuY2hlblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbMTEuNTc1NDksIDQ4LjEzNzQzXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJIYW1idXJnXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs5Ljk5MzAyLCA1My41NTA3M10sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IDEyLFxuICAgIG5hbWU6IFwiRnJhbmtmdXJ0XCIsXG4gICAgY29vcmRpbmF0ZXM6IFs4LjY4NDE3LCA1MC4xMTU1Ml0sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC01LFxuICAgIG5hbWU6IFwiQmVybGluXCIsXG4gICAgY29vcmRpbmF0ZXM6IFsxMy40MTA1MywgNTIuNTI0MzddLFxuICB9LFxuXTtcblxuY29uc3QgZ2VvVXJsID1cbiAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZGVsZGVyc3ZlbGQvdG9wb2pzb24vbWFzdGVyL2NvdW50cmllcy9nZXJtYW55L2dlcm1hbnktcmVnaW9ucy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcE9mZmljZXMoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbnRleHRUZWFtcyk7XG4gIGZ1bmN0aW9uIGhhbmRsZU1hcmtlckNsaWNrKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGNvbnRleHQ/LmRpc3BsYXllZE9mZmljZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb21wb3NhYmxlTWFwXG4gICAgICB3aWR0aD17MTIwfVxuICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICBwcm9qZWN0aW9uPVwiZ2VvTWVyY2F0b3JcIlxuICAgICAgcHJvamVjdGlvbkNvbmZpZz17e1xuICAgICAgICByb3RhdGU6IFstMTAuNSwgLTUxLjAsIDBdLFxuICAgICAgICBzY2FsZTogMTAwMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEdlb2dyYXBoaWVzIGdlb2dyYXBoeT17Z2VvVXJsfT5cbiAgICAgICAgeyh7IGdlb2dyYXBoaWVzIH0pID0+XG4gICAgICAgICAgZ2VvZ3JhcGhpZXMubWFwKChnZW8pID0+IChcbiAgICAgICAgICAgIDxHZW9ncmFwaHlcbiAgICAgICAgICAgICAga2V5PXtnZW8ucnNtS2V5fVxuICAgICAgICAgICAgICBnZW9ncmFwaHk9e2dlb31cbiAgICAgICAgICAgICAgZmlsbD1cIiMwMjg0YzdcIlxuICAgICAgICAgICAgICBzdHJva2U9XCIjMDM2OWExXCJcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eT17MC4yNX1cbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezAuMTI1fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L0dlb2dyYXBoaWVzPlxuICAgICAge21hcmtlcnMubWFwKCh7IG5hbWUsIGNvb3JkaW5hdGVzLCBtYXJrZXJPZmZzZXQgfSkgPT4gKFxuICAgICAgICA8TWFya2VyXG4gICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgIGNvb3JkaW5hdGVzPXtjb29yZGluYXRlc31cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTWFya2VyQ2xpY2soZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8Y2lyY2xlIHI9ezN9IGZpbGw9XCIjZTFmNWZlXCIgc3Ryb2tlPVwiIzAxNTc5YlwiIHN0cm9rZVdpZHRoPXswLjV9IC8+XG4gICAgICAgICAgPHRleHRcbiAgICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgeT17bWFya2VyT2Zmc2V0fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiOHB4XCIsXG4gICAgICAgICAgICAgIGZpbGw6IFwiI2UxZjVmZVwiLFxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgIDwvTWFya2VyPlxuICAgICAgKSl9XG4gICAgPC9Db21wb3NhYmxlTWFwPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkNvbnRleHRUZWFtcyIsIkNvbXBvc2FibGVNYXAiLCJHZW9ncmFwaGllcyIsIkdlb2dyYXBoeSIsIk1hcmtlciIsInRyYW5zbGF0ZU9mZmljZU5hbWUiLCJtYXJrZXJzIiwibWFya2VyT2Zmc2V0IiwibmFtZSIsImNvb3JkaW5hdGVzIiwiZ2VvVXJsIiwiTWFwT2ZmaWNlcyIsImNvbnRleHQiLCJoYW5kbGVNYXJrZXJDbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheWVkT2ZmaWNlIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0aW9uIiwicHJvamVjdGlvbkNvbmZpZyIsInJvdGF0ZSIsInNjYWxlIiwiZ2VvZ3JhcGh5IiwiZ2VvZ3JhcGhpZXMiLCJtYXAiLCJnZW8iLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdpZHRoIiwicnNtS2V5Iiwib25DbGljayIsImNpcmNsZSIsInIiLCJ0ZXh0IiwidGV4dEFuY2hvciIsInkiLCJzdHlsZSIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ })

});
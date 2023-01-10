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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n/* harmony import */ var _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typings/types/TOffices */ \"./typings/types/TOffices.ts\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst markers = [\n    {\n        markerOffset: 13,\n        name: \"K\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"Dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"M\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"Frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__.ContextTeams);\n    function handleMarkerClick(office) {\n        console.log(_typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesGermanToEnglish[office]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.ComposableMap, {\n        width: 120,\n        height: 200,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geography, {\n                            geography: geo,\n                            fill: \"#0284c7\",\n                            stroke: \"#0369a1\",\n                            strokeOpacity: 0.25,\n                            strokeWidth: 0.125\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>/*#__PURE__*/ {\n                let { name , coordinates , markerOffset  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                    coordinates: coordinates,\n                    onClick: (e)=>handleMarkerClick(e),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 3,\n                            fill: \"#e1f5fe\",\n                            stroke: \"#01579b\",\n                            strokeWidth: 0.5\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontSize: \"8px\",\n                                fill: \"#e1f5fe\",\n                                textTransform: \"uppercase\"\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(MapOffices, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUNhO0FBSXBCO0FBTVI7QUFRM0IsTUFBTVEsVUFBcUI7SUFDekI7UUFDRUMsY0FBYztRQUNkQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVU7SUFDcEM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBTztTQUFTO0lBQ2hDO0lBQ0E7UUFDRUYsY0FBYyxDQUFDO1FBQ2ZDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVU7U0FBUztJQUNuQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFTO1NBQVM7SUFDbEM7SUFDQTtRQUNFRixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVM7U0FBUztJQUNsQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVM7SUFDbkM7Q0FDRDtBQUVELE1BQU1DLFNBQ0o7QUFFYSxTQUFTQyxhQUFhOztJQUNuQyxNQUFNQyxVQUFVYixpREFBVUEsQ0FBQ0MsZ0VBQVlBO0lBQ3ZDLFNBQVNhLGtCQUFrQkMsTUFBc0IsRUFBRTtRQUNqREMsUUFBUUMsR0FBRyxDQUFDZiw0RUFBdUIsQ0FBQ2EsT0FBTztJQUM3QztJQUVBLHFCQUNFLDhEQUFDWiw0REFBYUE7UUFDWmUsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFlBQVc7UUFDWEMsa0JBQWtCO1lBQ2hCQyxRQUFRO2dCQUFDLENBQUM7Z0JBQU0sQ0FBQztnQkFBTTthQUFFO1lBQ3pCQyxPQUFPO1FBQ1Q7OzBCQUVBLDhEQUFDbkIsMERBQVdBO2dCQUFDb0IsV0FBV2I7MEJBQ3JCLFNBQ0NjO3dCQURBLEVBQUVBLFlBQVcsRUFBRTsyQkFDZkEsWUFBWUMsR0FBRyxDQUFDLENBQUNDLG9CQUNmLDhEQUFDdEIsd0RBQVNBOzRCQUVSbUIsV0FBV0c7NEJBQ1hDLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLGVBQWU7NEJBQ2ZDLGFBQWE7MkJBTFJKLElBQUlLLE1BQU07Ozs7O2dCQU9sQjs7Ozs7O1lBR0p6QixRQUFRbUIsR0FBRyxDQUFDLHVCQUNYO29CQURZLEVBQUVqQixLQUFJLEVBQUVDLFlBQVcsRUFBRUYsYUFBWSxFQUFFO3VCQUMvQyw4REFBQ0YscURBQU1BO29CQUVMSSxhQUFhQTtvQkFDYnVCLFNBQVMsQ0FBQ0MsSUFBTXBCLGtCQUFrQm9COztzQ0FFbEMsOERBQUNDOzRCQUFPQyxHQUFHOzRCQUFHUixNQUFLOzRCQUFVQyxRQUFPOzRCQUFVRSxhQUFhOzs7Ozs7c0NBQzNELDhEQUFDTTs0QkFDQ0MsWUFBVzs0QkFDWEMsR0FBRy9COzRCQUNIZ0MsT0FBTztnQ0FDTEMsVUFBVTtnQ0FDVmIsTUFBTTtnQ0FDTmMsZUFBZTs0QkFDakI7c0NBRUNqQzs7Ozs7OzttQkFkRUE7Ozs7O1lBZ0JDOzs7Ozs7O0FBSWhCLENBQUM7R0FwRHVCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4PzM3OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHRUZWFtcyB9IGZyb20gXCIuL2NvbnRleHRzL0NvbnRleHRUZWFtc1wiO1xuaW1wb3J0IHtcbiAgRU9mZmljZXNHZXJtYW5Ub0VuZ2xpc2gsXG4gIFRPZmZpY2VzR2VybWFuLFxufSBmcm9tIFwiLi4vdHlwaW5ncy90eXBlcy9UT2ZmaWNlc1wiO1xuaW1wb3J0IHtcbiAgQ29tcG9zYWJsZU1hcCxcbiAgR2VvZ3JhcGhpZXMsXG4gIEdlb2dyYXBoeSxcbiAgTWFya2VyLFxufSBmcm9tIFwicmVhY3Qtc2ltcGxlLW1hcHNcIjtcblxuaW50ZXJmYWNlIElNYXJrZXIge1xuICBtYXJrZXJPZmZzZXQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXTtcbn1cblxuY29uc3QgbWFya2VyczogSU1hcmtlcltdID0gW1xuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAxMyxcbiAgICBuYW1lOiBcIkvDtmxuXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs2Ljk1MzEwMSwgNTAuOTM1MTczXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTYsXG4gICAgbmFtZTogXCJEb3J0bXVuZFwiLFxuICAgIGNvb3JkaW5hdGVzOiBbNy40NjYsIDUxLjUxNDk0XSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJNw7xuY2hlblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbMTEuNTc1NDksIDQ4LjEzNzQzXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJIYW1idXJnXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs5Ljk5MzAyLCA1My41NTA3M10sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IDEyLFxuICAgIG5hbWU6IFwiRnJhbmtmdXJ0XCIsXG4gICAgY29vcmRpbmF0ZXM6IFs4LjY4NDE3LCA1MC4xMTU1Ml0sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC01LFxuICAgIG5hbWU6IFwiQmVybGluXCIsXG4gICAgY29vcmRpbmF0ZXM6IFsxMy40MTA1MywgNTIuNTI0MzddLFxuICB9LFxuXTtcblxuY29uc3QgZ2VvVXJsID1cbiAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZGVsZGVyc3ZlbGQvdG9wb2pzb24vbWFzdGVyL2NvdW50cmllcy9nZXJtYW55L2dlcm1hbnktcmVnaW9ucy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcE9mZmljZXMoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbnRleHRUZWFtcyk7XG4gIGZ1bmN0aW9uIGhhbmRsZU1hcmtlckNsaWNrKG9mZmljZTogVE9mZmljZXNHZXJtYW4pIHtcbiAgICBjb25zb2xlLmxvZyhFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaFtvZmZpY2VdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbXBvc2FibGVNYXBcbiAgICAgIHdpZHRoPXsxMjB9XG4gICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgIHByb2plY3Rpb249XCJnZW9NZXJjYXRvclwiXG4gICAgICBwcm9qZWN0aW9uQ29uZmlnPXt7XG4gICAgICAgIHJvdGF0ZTogWy0xMC41LCAtNTEuMCwgMF0sXG4gICAgICAgIHNjYWxlOiAxMDAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8R2VvZ3JhcGhpZXMgZ2VvZ3JhcGh5PXtnZW9Vcmx9PlxuICAgICAgICB7KHsgZ2VvZ3JhcGhpZXMgfSkgPT5cbiAgICAgICAgICBnZW9ncmFwaGllcy5tYXAoKGdlbykgPT4gKFxuICAgICAgICAgICAgPEdlb2dyYXBoeVxuICAgICAgICAgICAgICBrZXk9e2dlby5yc21LZXl9XG4gICAgICAgICAgICAgIGdlb2dyYXBoeT17Z2VvfVxuICAgICAgICAgICAgICBmaWxsPVwiIzAyODRjN1wiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiMwMzY5YTFcIlxuICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5PXswLjI1fVxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MC4xMjV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvR2VvZ3JhcGhpZXM+XG4gICAgICB7bWFya2Vycy5tYXAoKHsgbmFtZSwgY29vcmRpbmF0ZXMsIG1hcmtlck9mZnNldCB9KSA9PiAoXG4gICAgICAgIDxNYXJrZXJcbiAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVNYXJrZXJDbGljayhlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGUgcj17M30gZmlsbD1cIiNlMWY1ZmVcIiBzdHJva2U9XCIjMDE1NzliXCIgc3Ryb2tlV2lkdGg9ezAuNX0gLz5cbiAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICB5PXttYXJrZXJPZmZzZXR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCI4cHhcIixcbiAgICAgICAgICAgICAgZmlsbDogXCIjZTFmNWZlXCIsXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgPC9NYXJrZXI+XG4gICAgICApKX1cbiAgICA8L0NvbXBvc2FibGVNYXA+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQ29udGV4dFRlYW1zIiwiRU9mZmljZXNHZXJtYW5Ub0VuZ2xpc2giLCJDb21wb3NhYmxlTWFwIiwiR2VvZ3JhcGhpZXMiLCJHZW9ncmFwaHkiLCJNYXJrZXIiLCJtYXJrZXJzIiwibWFya2VyT2Zmc2V0IiwibmFtZSIsImNvb3JkaW5hdGVzIiwiZ2VvVXJsIiwiTWFwT2ZmaWNlcyIsImNvbnRleHQiLCJoYW5kbGVNYXJrZXJDbGljayIsIm9mZmljZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsInByb2plY3Rpb24iLCJwcm9qZWN0aW9uQ29uZmlnIiwicm90YXRlIiwic2NhbGUiLCJnZW9ncmFwaHkiLCJnZW9ncmFwaGllcyIsIm1hcCIsImdlbyIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2lkdGgiLCJyc21LZXkiLCJvbkNsaWNrIiwiZSIsImNpcmNsZSIsInIiLCJ0ZXh0IiwidGV4dEFuY2hvciIsInkiLCJzdHlsZSIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ })

});
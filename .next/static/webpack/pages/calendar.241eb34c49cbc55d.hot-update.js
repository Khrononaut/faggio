"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/calendar",{

/***/ "./helpers/mapCalendar.ts":
/*!********************************!*\
  !*** ./helpers/mapCalendar.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n\nconst mapCalendar = (displayedMonth, displayedYear)=>{\n    let calRows = {\n        1: [],\n        2: [],\n        3: [],\n        4: [],\n        5: [],\n        6: []\n    };\n    for(let currentDayOfMonth = 1; currentDayOfMonth <= (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getDaysInMonth)(new Date(displayedYear, displayedMonth)); currentDayOfMonth = currentDayOfMonth + 1){\n        const currentDate = new Date(displayedYear, displayedMonth, currentDayOfMonth);\n        const currentWeekOfMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getWeekOfMonth)(currentDate, {\n            weekStartsOn: 1\n        });\n        console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getWeek)(new Date(2023, 0, 2)));\n        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getDay)(currentDate) === 0 || (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getDay)(currentDate) === 6) {\n            continue;\n        } else if (calRows[currentWeekOfMonth].length === 0) {\n            calRows[currentWeekOfMonth].push({\n                calWeek: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getWeek)(currentDate, {\n                    weekStartsOn: 1\n                })\n            });\n            if (currentWeekOfMonth === 1 && (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.startOfMonth)(currentDate)) > 1) {\n                for(let j = 1; j <= (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.startOfMonth)(currentDate)) - 1; j = j + 1){\n                    calRows[1].push({\n                        isNoDayOfMonth: true\n                    });\n                }\n                calRows[currentWeekOfMonth].push({\n                    date: currentDate\n                });\n            } else {\n                calRows[currentWeekOfMonth].push({\n                    date: currentDate\n                });\n            }\n        } else {\n            calRows[currentWeekOfMonth].push({\n                date: currentDate\n            });\n        }\n    }\n    let finalArr = [];\n    for(const row in calRows){\n        finalArr.push(calRows[row]);\n    }\n    return finalArr;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mapCalendar);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL21hcENhbGVuZGFyLnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBTWtCO0FBVWxCLE1BQU1LLGNBQWMsQ0FDbEJDLGdCQUNBQyxnQkFDYTtJQUNiLElBQUlDLFVBQXdCO1FBQUUsR0FBRyxFQUFFO1FBQUUsR0FBRyxFQUFFO1FBQUUsR0FBRyxFQUFFO1FBQUUsR0FBRyxFQUFFO1FBQUUsR0FBRyxFQUFFO1FBQUUsR0FBRyxFQUFFO0lBQUM7SUFFdkUsSUFDRSxJQUFJQyxvQkFBb0IsR0FDeEJBLHFCQUNBUCx3REFBY0EsQ0FBQyxJQUFJUSxLQUFLSCxlQUFlRCxrQkFDdkNHLG9CQUFvQkEsb0JBQW9CLEVBQ3hDO1FBQ0EsTUFBTUUsY0FBYyxJQUFJRCxLQUN0QkgsZUFDQUQsZ0JBQ0FHO1FBRUYsTUFBTUcscUJBQXFCVCx3REFBY0EsQ0FBQ1EsYUFBYTtZQUFFRSxjQUFjO1FBQUU7UUFDekVDLFFBQVFDLEdBQUcsQ0FBQ2YsaURBQU9BLENBQUMsSUFBSVUsS0FBSyxNQUFNLEdBQUc7UUFFdEMsSUFBSVQsZ0RBQU1BLENBQUNVLGlCQUFpQixLQUFLVixnREFBTUEsQ0FBQ1UsaUJBQWlCLEdBQUc7WUFDMUQsUUFBUztRQUNYLE9BQU8sSUFBSUgsT0FBTyxDQUFDSSxtQkFBbUIsQ0FBQ0ksTUFBTSxLQUFLLEdBQUc7WUFDbkRSLE9BQU8sQ0FBQ0ksbUJBQW1CLENBQUNLLElBQUksQ0FBQztnQkFDL0JDLFNBQVNsQixpREFBT0EsQ0FBQ1csYUFBYTtvQkFDNUJFLGNBQWM7Z0JBQ2hCO1lBRUY7WUFDQSxJQUFJRCx1QkFBdUIsS0FBS1gsZ0RBQU1BLENBQUNHLHNEQUFZQSxDQUFDTyxnQkFBZ0IsR0FBRztnQkFDckUsSUFBSyxJQUFJUSxJQUFJLEdBQUdBLEtBQUtsQixnREFBTUEsQ0FBQ0csc0RBQVlBLENBQUNPLGdCQUFnQixHQUFHUSxJQUFJQSxJQUFJLEVBQUc7b0JBQ3JFWCxPQUFPLENBQUMsRUFBRSxDQUFDUyxJQUFJLENBQUM7d0JBQ2RHLGdCQUFnQixJQUFJO29CQUN0QjtnQkFDRjtnQkFDQVosT0FBTyxDQUFDSSxtQkFBbUIsQ0FBQ0ssSUFBSSxDQUFDO29CQUMvQkksTUFBTVY7Z0JBQ1I7WUFDRixPQUFPO2dCQUNMSCxPQUFPLENBQUNJLG1CQUFtQixDQUFDSyxJQUFJLENBQUM7b0JBQy9CSSxNQUFNVjtnQkFDUjtZQUNGLENBQUM7UUFDSCxPQUFPO1lBQ0xILE9BQU8sQ0FBQ0ksbUJBQW1CLENBQUNLLElBQUksQ0FBQztnQkFDL0JJLE1BQU1WO1lBQ1I7UUFDRixDQUFDO0lBQ0g7SUFFQSxJQUFJVyxXQUFxQixFQUFFO0lBQzNCLElBQUssTUFBTUMsT0FBT2YsUUFBUztRQUN6QmMsU0FBU0wsSUFBSSxDQUFDVCxPQUFPLENBQUNlLElBQUk7SUFDNUI7SUFDQSxPQUFPRDtBQUNUO0FBRUEsK0RBQWVqQixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hlbHBlcnMvbWFwQ2FsZW5kYXIudHM/ZmEzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRXZWVrLFxuICBnZXREYXksXG4gIGdldERheXNJbk1vbnRoLFxuICBnZXRXZWVrT2ZNb250aCxcbiAgc3RhcnRPZk1vbnRoLFxufSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuaW50ZXJmYWNlIENhbGVuZGFyUm93cyB7XG4gIFtrZXk6IG51bWJlcl06IE9iamVjdFtdO1xufVxuXG5pbnRlcmZhY2UgQ2FsV2Vla0VudHJ5IHtcbiAgY2FsV2VlazogbnVtYmVyO1xufVxuXG5jb25zdCBtYXBDYWxlbmRhciA9IChcbiAgZGlzcGxheWVkTW9udGg6IG51bWJlcixcbiAgZGlzcGxheWVkWWVhcjogbnVtYmVyXG4pOiBPYmplY3RbXSA9PiB7XG4gIGxldCBjYWxSb3dzOiBDYWxlbmRhclJvd3MgPSB7IDE6IFtdLCAyOiBbXSwgMzogW10sIDQ6IFtdLCA1OiBbXSwgNjogW10gfTtcblxuICBmb3IgKFxuICAgIGxldCBjdXJyZW50RGF5T2ZNb250aCA9IDE7XG4gICAgY3VycmVudERheU9mTW9udGggPD1cbiAgICBnZXREYXlzSW5Nb250aChuZXcgRGF0ZShkaXNwbGF5ZWRZZWFyLCBkaXNwbGF5ZWRNb250aCkpO1xuICAgIGN1cnJlbnREYXlPZk1vbnRoID0gY3VycmVudERheU9mTW9udGggKyAxXG4gICkge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoXG4gICAgICBkaXNwbGF5ZWRZZWFyLFxuICAgICAgZGlzcGxheWVkTW9udGgsXG4gICAgICBjdXJyZW50RGF5T2ZNb250aFxuICAgICk7XG4gICAgY29uc3QgY3VycmVudFdlZWtPZk1vbnRoID0gZ2V0V2Vla09mTW9udGgoY3VycmVudERhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xuICAgIGNvbnNvbGUubG9nKGdldFdlZWsobmV3IERhdGUoMjAyMywgMCwgMikpKTtcblxuICAgIGlmIChnZXREYXkoY3VycmVudERhdGUpID09PSAwIHx8IGdldERheShjdXJyZW50RGF0ZSkgPT09IDYpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSBpZiAoY2FsUm93c1tjdXJyZW50V2Vla09mTW9udGhdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2FsUm93c1tjdXJyZW50V2Vla09mTW9udGhdLnB1c2goe1xuICAgICAgICBjYWxXZWVrOiBnZXRXZWVrKGN1cnJlbnREYXRlLCB7XG4gICAgICAgICAgd2Vla1N0YXJ0c09uOiAxLFxuICAgICAgICB9KSxcbiAgICAgICAgLy8gfHwgKGNhbFJvd3NbY3VycmVudFdlZWtPZk1vbnRoIC0gMV1bMF0gYXMgQ2FsV2Vla0VudHJ5KS5jYWxXZWVrICsgMSxcbiAgICAgIH0pO1xuICAgICAgaWYgKGN1cnJlbnRXZWVrT2ZNb250aCA9PT0gMSAmJiBnZXREYXkoc3RhcnRPZk1vbnRoKGN1cnJlbnREYXRlKSkgPiAxKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGdldERheShzdGFydE9mTW9udGgoY3VycmVudERhdGUpKSAtIDE7IGogPSBqICsgMSkge1xuICAgICAgICAgIGNhbFJvd3NbMV0ucHVzaCh7XG4gICAgICAgICAgICBpc05vRGF5T2ZNb250aDogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYWxSb3dzW2N1cnJlbnRXZWVrT2ZNb250aF0ucHVzaCh7XG4gICAgICAgICAgZGF0ZTogY3VycmVudERhdGUsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsUm93c1tjdXJyZW50V2Vla09mTW9udGhdLnB1c2goe1xuICAgICAgICAgIGRhdGU6IGN1cnJlbnREYXRlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsUm93c1tjdXJyZW50V2Vla09mTW9udGhdLnB1c2goe1xuICAgICAgICBkYXRlOiBjdXJyZW50RGF0ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGxldCBmaW5hbEFycjogT2JqZWN0W10gPSBbXTtcbiAgZm9yIChjb25zdCByb3cgaW4gY2FsUm93cykge1xuICAgIGZpbmFsQXJyLnB1c2goY2FsUm93c1tyb3ddKTtcbiAgfVxuICByZXR1cm4gZmluYWxBcnI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWxlbmRhcjtcbiJdLCJuYW1lcyI6WyJnZXRXZWVrIiwiZ2V0RGF5IiwiZ2V0RGF5c0luTW9udGgiLCJnZXRXZWVrT2ZNb250aCIsInN0YXJ0T2ZNb250aCIsIm1hcENhbGVuZGFyIiwiZGlzcGxheWVkTW9udGgiLCJkaXNwbGF5ZWRZZWFyIiwiY2FsUm93cyIsImN1cnJlbnREYXlPZk1vbnRoIiwiRGF0ZSIsImN1cnJlbnREYXRlIiwiY3VycmVudFdlZWtPZk1vbnRoIiwid2Vla1N0YXJ0c09uIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInB1c2giLCJjYWxXZWVrIiwiaiIsImlzTm9EYXlPZk1vbnRoIiwiZGF0ZSIsImZpbmFsQXJyIiwicm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/mapCalendar.ts\n"));

/***/ })

});
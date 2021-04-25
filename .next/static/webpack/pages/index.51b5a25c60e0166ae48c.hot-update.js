webpackHotUpdate_N_E("pages/index",{

/***/ "./components/WeatherCard.js":
/*!***********************************!*\
  !*** ./components/WeatherCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _styles_weather_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/weather.module.css */ "./styles/weather.module.css");
/* harmony import */ var _styles_weather_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_weather_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fetcher */ "./lib/fetcher.js");


var _jsxFileName = "C:\\Users\\kaima\\Documents\\GitHub\\mywebsite\\components\\WeatherCard.js",
    _s = $RefreshSig$();





var api = {
  key: "b5228c4c0bee00a931110d03ad712490",
  //base: "http://localhost:2000/data/2.5/"
  base: "http://api.openweathermap.org/data/2.5/"
};

function WeatherCard() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      weather = _useState2[0],
      setWeather = _useState2[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])("".concat(api.base, "weather?q=Munich&units=metric&APPID=").concat(api.key), function (url) {
    return fetch(url).then(function (_) {
      return _.json();
    }).then(function (result) {
      setWeather(result);
      setQuery('Munich');
      console.log(result);
    }).then(sleep);
  }),
      data = _useSWR.data;

  var dateBuilder = function dateBuilder(d) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[d.getDay()];
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    return "".concat(day, ", ").concat(date, " ").concat(month, " ").concat(year);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: typeof weather.main != "undefined" ? weather.main.temp > 16 ? 'app warm' : 'app' : 'app',
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: typeof weather.main != "undefined" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "location-box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "location",
            children: [weather.name, ", ", weather.sys.country]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "date",
            children: dateBuilder(new Date())
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_weather_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.weather_box,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "temp",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _styles_weather_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.temp,
              children: [Math.round(weather.main.temp), "\xB0C / ", Math.round(weather.main.temp * 9 / 5 + 32), "\xB0F"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_weather_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.weather,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "http://openweathermap.org/img/wn/".concat(weather.weather[0].icon, "@2x.png")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 50
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: weather.weather[0].main
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 132
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this) : 'loading ...'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

_s(WeatherCard, "FNN9H8lnUFNo7/5GOeTnpAdlw8I=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = WeatherCard;
/* harmony default export */ __webpack_exports__["default"] = (WeatherCard);

var _c;

$RefreshReg$(_c, "WeatherCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWF0aGVyQ2FyZC5qcyJdLCJuYW1lcyI6WyJhcGkiLCJrZXkiLCJiYXNlIiwiV2VhdGhlckNhcmQiLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsInVzZVNXUiIsInVybCIsImZldGNoIiwidGhlbiIsIl8iLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInNsZWVwIiwiZGF0YSIsImRhdGVCdWlsZGVyIiwiZCIsIm1vbnRocyIsImRheXMiLCJkYXkiLCJnZXREYXkiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtYWluIiwidGVtcCIsIm5hbWUiLCJzeXMiLCJjb3VudHJ5IiwiRGF0ZSIsIndlYXRoZXJjYXJkIiwid2VhdGhlcl9ib3giLCJNYXRoIiwicm91bmQiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBLElBQU1BLEdBQUcsR0FBRztBQUNWQyxLQUFHLEVBQUUsa0NBREs7QUFFVjtBQUNBQyxNQUFJLEVBQUU7QUFISSxDQUFaOztBQU1BLFNBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNkQyxLQURjO0FBQUEsTUFDUEMsUUFETzs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFZEcsT0FGYztBQUFBLE1BRUxDLFVBRks7O0FBQUEsZ0JBSUpDLG1EQUFNLFdBQ2xCVCxHQUFHLENBQUNFLElBRGMsaURBQzZCRixHQUFHLENBQUNDLEdBRGpDLEdBRXJCLFVBQUFTLEdBQUc7QUFBQSxXQUNEQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FB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O0FBQUEsb0JBQXJDLGVBQXVIO0FBQUEsd0JBQUluQyxPQUFPLENBQUNBLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJ5QjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURDLEdBYUk7QUFkUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQWhEUTdCLFc7VUFJVU0sMkM7OztLQUpWTixXO0FBa0RNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MWI1YTI1YzYwZTAxNjZhZTQ4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB3ZWF0aGVyY2FyZCBmcm9tICcuLi9zdHlsZXMvd2VhdGhlci5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9saWIvZmV0Y2hlcic7XHJcblxyXG5jb25zdCBhcGkgPSB7XHJcbiAga2V5OiBcImI1MjI4YzRjMGJlZTAwYTkzMTExMGQwM2FkNzEyNDkwXCIsXHJcbiAgLy9iYXNlOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9kYXRhLzIuNS9cIlxyXG4gIGJhc2U6IFwiaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvXCJcclxufVxyXG5cclxuZnVuY3Rpb24gV2VhdGhlckNhcmQoKSB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihcclxuICAgIGAke2FwaS5iYXNlfXdlYXRoZXI/cT1NdW5pY2gmdW5pdHM9bWV0cmljJkFQUElEPSR7YXBpLmtleX1gLFxyXG4gICAgdXJsID0+XHJcbiAgICAgIGZldGNoKHVybClcclxuICAgICAgICAudGhlbihfID0+IF8uanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHNldFdlYXRoZXIocmVzdWx0KTtcclxuICAgICAgICAgICAgc2V0UXVlcnkoJ011bmljaCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAudGhlbihzbGVlcClcclxuICApO1xyXG4gIGNvbnN0IGRhdGVCdWlsZGVyID0gKGQpID0+IHtcclxuICAgIGxldCBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcclxuICAgIGxldCBkYXlzID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XHJcblxyXG4gICAgbGV0IGRheSA9IGRheXNbZC5nZXREYXkoKV07XHJcbiAgICBsZXQgZGF0ZSA9IGQuZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gbW9udGhzW2QuZ2V0TW9udGgoKV07XHJcbiAgICBsZXQgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICByZXR1cm4gYCR7ZGF5fSwgJHtkYXRlfSAke21vbnRofSAke3llYXJ9YFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsodHlwZW9mIHdlYXRoZXIubWFpbiAhPSBcInVuZGVmaW5lZFwiKSA/ICgod2VhdGhlci5tYWluLnRlbXAgPiAxNikgPyAnYXBwIHdhcm0nIDogJ2FwcCcpIDogJ2FwcCd9PlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7KHR5cGVvZiB3ZWF0aGVyLm1haW4gIT0gXCJ1bmRlZmluZWRcIikgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb24tYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25cIj57d2VhdGhlci5uYW1lfSwge3dlYXRoZXIuc3lzLmNvdW50cnl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPntkYXRlQnVpbGRlcihuZXcgRGF0ZSgpKX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dlYXRoZXJjYXJkLndlYXRoZXJfYm94fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17d2VhdGhlcmNhcmQudGVtcH0+e01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXApfcKwQyAvIHtNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wICogOS81ICsgMzIpfcKwRjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17d2VhdGhlcmNhcmQud2VhdGhlcn0+PGltZyBzcmM9e2BodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXIud2VhdGhlclswXS5pY29ufUAyeC5wbmdgfSAvPjxwPnt3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbn08L3A+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKCdsb2FkaW5nIC4uLicpfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9
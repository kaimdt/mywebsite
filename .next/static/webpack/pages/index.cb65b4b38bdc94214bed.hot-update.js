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
            }, this), weather.weather[0].main]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWF0aGVyQ2FyZC5qcyJdLCJuYW1lcyI6WyJhcGkiLCJrZXkiLCJiYXNlIiwiV2VhdGhlckNhcmQiLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsInVzZVNXUiIsInVybCIsImZldGNoIiwidGhlbiIsIl8iLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInNsZWVwIiwiZGF0YSIsImRhdGVCdWlsZGVyIiwiZCIsIm1vbnRocyIsImRheXMiLCJkYXkiLCJnZXREYXkiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtYWluIiwidGVtcCIsIm5hbWUiLCJzeXMiLCJjb3VudHJ5IiwiRGF0ZSIsIndlYXRoZXJjYXJkIiwid2VhdGhlcl9ib3giLCJNYXRoIiwicm91bmQiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBLElBQU1BLEdBQUcsR0FBRztBQUNWQyxLQUFHLEVBQUUsa0NBREs7QUFFVjtBQUNBQyxNQUFJLEVBQUU7QUFISSxDQUFaOztBQU1BLFNBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNkQyxLQURjO0FBQUEsTUFDUEMsUUFETzs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFZEcsT0FGYztBQUFBLE1BRUxDLFVBRks7O0FBQUEsZ0JBSUpDLG1EQUFNLFdBQ2xCVCxHQUFHLENBQUNFLElBRGMsaURBQzZCRixHQUFHLENBQUNDLEdBRGpDLEdBRXJCLFVBQUFTLEdBQUc7QUFBQSxXQUNEQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FB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O0FBQUEsb0JBQXJDLEVBQXdIbkMsT0FBTyxDQUFDQSxPQUFSLENBQWdCLENBQWhCLEVBQW1CeUIsSUFBM0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQyxHQWFJO0FBZFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0FoRFE3QixXO1VBSVVNLDJDOzs7S0FKVk4sVztBQWtETUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2I2NWI0YjM4YmRjOTQyMTRiZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgd2VhdGhlcmNhcmQgZnJvbSAnLi4vc3R5bGVzL3dlYXRoZXIubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vbGliL2ZldGNoZXInO1xyXG5cclxuY29uc3QgYXBpID0ge1xyXG4gIGtleTogXCJiNTIyOGM0YzBiZWUwMGE5MzExMTBkMDNhZDcxMjQ5MFwiLFxyXG4gIC8vYmFzZTogXCJodHRwOi8vbG9jYWxob3N0OjIwMDAvZGF0YS8yLjUvXCJcclxuICBiYXNlOiBcImh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L1wiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFdlYXRoZXJDYXJkKCkge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXHJcbiAgICBgJHthcGkuYmFzZX13ZWF0aGVyP3E9TXVuaWNoJnVuaXRzPW1ldHJpYyZBUFBJRD0ke2FwaS5rZXl9YCxcclxuICAgIHVybCA9PlxyXG4gICAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4oXyA9PiBfLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBzZXRXZWF0aGVyKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHNldFF1ZXJ5KCdNdW5pY2gnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oc2xlZXApXHJcbiAgKTtcclxuICBjb25zdCBkYXRlQnVpbGRlciA9IChkKSA9PiB7XHJcbiAgICBsZXQgbW9udGhzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XHJcbiAgICBsZXQgZGF5cyA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdO1xyXG5cclxuICAgIGxldCBkYXkgPSBkYXlzW2QuZ2V0RGF5KCldO1xyXG4gICAgbGV0IGRhdGUgPSBkLmdldERhdGUoKTtcclxuICAgIGxldCBtb250aCA9IG1vbnRoc1tkLmdldE1vbnRoKCldO1xyXG4gICAgbGV0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgcmV0dXJuIGAke2RheX0sICR7ZGF0ZX0gJHttb250aH0gJHt5ZWFyfWBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KHR5cGVvZiB3ZWF0aGVyLm1haW4gIT0gXCJ1bmRlZmluZWRcIikgPyAoKHdlYXRoZXIubWFpbi50ZW1wID4gMTYpID8gJ2FwcCB3YXJtJyA6ICdhcHAnKSA6ICdhcHAnfT5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgeyh0eXBlb2Ygd2VhdGhlci5tYWluICE9IFwidW5kZWZpbmVkXCIpID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uLWJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+e3dlYXRoZXIubmFtZX0sIHt3ZWF0aGVyLnN5cy5jb3VudHJ5fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj57ZGF0ZUJ1aWxkZXIobmV3IERhdGUoKSl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt3ZWF0aGVyY2FyZC53ZWF0aGVyX2JveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcFwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3dlYXRoZXJjYXJkLnRlbXB9PntNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wKX3CsEMgLyB7TWF0aC5yb3VuZCh3ZWF0aGVyLm1haW4udGVtcCAqIDkvNSArIDMyKX3CsEY8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dlYXRoZXJjYXJkLndlYXRoZXJ9PjxpbWcgc3JjPXtgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYH0gLz57d2VhdGhlci53ZWF0aGVyWzBdLm1haW59PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKCdsb2FkaW5nIC4uLicpfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9
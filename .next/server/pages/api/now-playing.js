module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/now-playing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/spotify.js":
/*!************************!*\
  !*** ./lib/spotify.js ***!
  \************************/
/*! exports provided: getNowPlaying, getTopTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNowPlaying", function() { return getNowPlaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopTracks", function() { return getTopTracks; });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });
  return response.json();
};

const getNowPlaying = async () => {
  const {
    access_token
  } = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
const getTopTracks = async () => {
  const {
    access_token
  } = await getAccessToken();
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

/***/ }),

/***/ "./pages/api/now-playing.js":
/*!**********************************!*\
  !*** ./pages/api/now-playing.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/spotify */ "./lib/spotify.js");

/* harmony default export */ __webpack_exports__["default"] = (async (_, res) => {
  const response = await Object(_lib_spotify__WEBPACK_IMPORTED_MODULE_0__["getNowPlaying"])();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({
      isPlaying: false
    });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map(_artist => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title
  });
});

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nwb3RpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL25vdy1wbGF5aW5nLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiXSwibmFtZXMiOlsiU1BPVElGWV9DTElFTlRfSUQiLCJjbGllbnRfaWQiLCJTUE9USUZZX0NMSUVOVF9TRUNSRVQiLCJjbGllbnRfc2VjcmV0IiwiU1BPVElGWV9SRUZSRVNIX1RPS0VOIiwicmVmcmVzaF90b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJiYXNpYyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIk5PV19QTEFZSU5HX0VORFBPSU5UIiwiVE9QX1RSQUNLU19FTkRQT0lOVCIsIlRPS0VOX0VORFBPSU5UIiwiZ2V0QWNjZXNzVG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwicXVlcnlzdHJpbmciLCJzdHJpbmdpZnkiLCJncmFudF90eXBlIiwianNvbiIsImdldE5vd1BsYXlpbmciLCJhY2Nlc3NfdG9rZW4iLCJnZXRUb3BUcmFja3MiLCJfIiwicmVzIiwic3RhdHVzIiwiaXNQbGF5aW5nIiwic29uZyIsImlzX3BsYXlpbmciLCJ0aXRsZSIsIml0ZW0iLCJuYW1lIiwiYXJ0aXN0IiwiYXJ0aXN0cyIsIm1hcCIsIl9hcnRpc3QiLCJqb2luIiwiYWxidW0iLCJhbGJ1bUltYWdlVXJsIiwiaW1hZ2VzIiwidXJsIiwic29uZ1VybCIsImV4dGVybmFsX3VybHMiLCJzcG90aWZ5Iiwic2V0SGVhZGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FB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S0FBSyxHQUFHRixJQUFJLENBQUNHLElBQUwsQ0FBVUMsSUFBeEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdMLElBQUksQ0FBQ0csSUFBTCxDQUFVRyxPQUFWLENBQWtCQyxHQUFsQixDQUF1QkMsT0FBRCxJQUFhQSxPQUFPLENBQUNKLElBQTNDLEVBQWlESyxJQUFqRCxDQUFzRCxJQUF0RCxDQUFmO0FBQ0EsUUFBTUMsS0FBSyxHQUFHVixJQUFJLENBQUNHLElBQUwsQ0FBVU8sS0FBVixDQUFnQk4sSUFBOUI7QUFDQSxRQUFNTyxhQUFhLEdBQUdYLElBQUksQ0FBQ0csSUFBTCxDQUFVTyxLQUFWLENBQWdCRSxNQUFoQixDQUF1QixDQUF2QixFQUEwQkMsR0FBaEQ7QUFDQSxRQUFNQyxPQUFPLEdBQUdkLElBQUksQ0FBQ0csSUFBTCxDQUFVWSxhQUFWLENBQXdCQyxPQUF4QztBQUVBbkIsS0FBRyxDQUFDb0IsU0FBSixDQUNFLGVBREYsRUFFRSxnREFGRjtBQUtBLFNBQU9wQixHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQjtBQUMxQmtCLFNBRDBCO0FBRTFCQyxpQkFGMEI7QUFHMUJOLFVBSDBCO0FBSTFCTixhQUowQjtBQUsxQmUsV0FMMEI7QUFNMUJaO0FBTjBCLEdBQXJCLENBQVA7QUFRRCxDQTVCRCxFOzs7Ozs7Ozs7OztBQ0ZBLHdDIiwiZmlsZSI6InBhZ2VzL2FwaS9ub3ctcGxheWluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL25vdy1wbGF5aW5nLmpzXCIpO1xuIiwiaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuXHJcbmNvbnN0IHtcclxuICBTUE9USUZZX0NMSUVOVF9JRDogY2xpZW50X2lkLFxyXG4gIFNQT1RJRllfQ0xJRU5UX1NFQ1JFVDogY2xpZW50X3NlY3JldCxcclxuICBTUE9USUZZX1JFRlJFU0hfVE9LRU46IHJlZnJlc2hfdG9rZW5cclxufSA9IHByb2Nlc3MuZW52O1xyXG5cclxuY29uc3QgYmFzaWMgPSBCdWZmZXIuZnJvbShgJHtjbGllbnRfaWR9OiR7Y2xpZW50X3NlY3JldH1gKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcbmNvbnN0IE5PV19QTEFZSU5HX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9jdXJyZW50bHktcGxheWluZ2A7XHJcbmNvbnN0IFRPUF9UUkFDS1NfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrc2A7XHJcbmNvbnN0IFRPS0VOX0VORFBPSU5UID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuYDtcclxuXHJcbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtiYXNpY31gLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgIH0sXHJcbiAgICBib2R5OiBxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xyXG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXHJcbiAgICAgIHJlZnJlc2hfdG9rZW5cclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Tm93UGxheWluZyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKE5PV19QTEFZSU5HX0VORFBPSU5ULCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YFxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRvcFRyYWNrcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFRPUF9UUkFDS1NfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gXHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldE5vd1BsYXlpbmcgfSBmcm9tICcuLi8uLi9saWIvc3BvdGlmeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoXywgcmVzKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXROb3dQbGF5aW5nKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPiA0MDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlzUGxheWluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb25nID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IGlzUGxheWluZyA9IHNvbmcuaXNfcGxheWluZztcclxuICBjb25zdCB0aXRsZSA9IHNvbmcuaXRlbS5uYW1lO1xyXG4gIGNvbnN0IGFydGlzdCA9IHNvbmcuaXRlbS5hcnRpc3RzLm1hcCgoX2FydGlzdCkgPT4gX2FydGlzdC5uYW1lKS5qb2luKCcsICcpO1xyXG4gIGNvbnN0IGFsYnVtID0gc29uZy5pdGVtLmFsYnVtLm5hbWU7XHJcbiAgY29uc3QgYWxidW1JbWFnZVVybCA9IHNvbmcuaXRlbS5hbGJ1bS5pbWFnZXNbMF0udXJsO1xyXG4gIGNvbnN0IHNvbmdVcmwgPSBzb25nLml0ZW0uZXh0ZXJuYWxfdXJscy5zcG90aWZ5O1xyXG5cclxuICByZXMuc2V0SGVhZGVyKFxyXG4gICAgJ0NhY2hlLUNvbnRyb2wnLFxyXG4gICAgJ3B1YmxpYywgcy1tYXhhZ2U9NjAsIHN0YWxlLXdoaWxlLXJldmFsaWRhdGU9MzAnXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgIGFsYnVtLFxyXG4gICAgYWxidW1JbWFnZVVybCxcclxuICAgIGFydGlzdCxcclxuICAgIGlzUGxheWluZyxcclxuICAgIHNvbmdVcmwsXHJcbiAgICB0aXRsZVxyXG4gIH0pO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
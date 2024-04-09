"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getShops";
exports.ids = ["pages/api/getShops"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/getShops.js":
/*!*******************************!*\
  !*** ./pages/api/getShops.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    api: {\n        bodyParser: true\n    }\n};\nconst get = async (req, res)=>{\n    fs__WEBPACK_IMPORTED_MODULE_0___default().readFile(\"./public/zooShops.json\", {\n        encoding: \"utf-8\"\n    }, function(err, data) {\n        if (!err) {\n            res.statusCode = 200;\n            res.end(data);\n        } else {\n            res.end([]);\n        }\n    });\n    return res;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    if (req.method === \"GET\") get(req, res);\n    else res.status(200).send(\"Invalid method, use POST\");\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U2hvcHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNvQjtBQUViLE1BQU1DLFNBQVM7SUFDbEJDLEtBQUs7UUFDREMsWUFBWSxJQUFJO0lBQ3BCO0FBQ0osRUFBRTtBQUVGLE1BQU1DLE1BQU0sT0FBT0MsS0FBS0MsTUFBUTtJQUM1Qk4sa0RBQVcsQ0FBQywwQkFBMEI7UUFBQ1EsVUFBVTtJQUFPLEdBQUcsU0FBVUMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7UUFDNUUsSUFBSSxDQUFDRCxLQUFLO1lBQ05ILElBQUlLLFVBQVUsR0FBRztZQUNqQkwsSUFBSU0sR0FBRyxDQUFDRjtRQUNaLE9BQU87WUFDSEosSUFBSU0sR0FBRyxDQUFDLEVBQUU7UUFDZCxDQUFDO0lBQ0w7SUFFQSxPQUFPTjtBQUNYO0FBRUEsaUVBQWUsQ0FBQ0QsS0FBS0MsTUFBUTtJQUN6QixJQUFJRCxJQUFJUSxNQUFNLEtBQUssT0FBT1QsSUFBSUMsS0FBS0M7U0FDOUJBLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7QUFDOUIsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UtMS8uL3BhZ2VzL2FwaS9nZXRTaG9wcy5qcz81ZDUyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgYXBpOiB7XHJcbiAgICAgICAgYm9keVBhcnNlcjogdHJ1ZVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBmcy5yZWFkRmlsZShcIi4vcHVibGljL3pvb1Nob3BzLmpzb25cIiwge2VuY29kaW5nOiAndXRmLTgnfSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwXHJcbiAgICAgICAgICAgIHJlcy5lbmQoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLmVuZChbXSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSBnZXQocmVxLCByZXMpXHJcbiAgICBlbHNlIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiSW52YWxpZCBtZXRob2QsIHVzZSBQT1NUXCIpXHJcbn07Il0sIm5hbWVzIjpbImZzIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImdldCIsInJlcSIsInJlcyIsInJlYWRGaWxlIiwiZW5jb2RpbmciLCJlcnIiLCJkYXRhIiwic3RhdHVzQ29kZSIsImVuZCIsIm1ldGhvZCIsInN0YXR1cyIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getShops.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getShops.js"));
module.exports = __webpack_exports__;

})();
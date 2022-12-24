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
exports.id = "pages/api/[date]";
exports.ids = ["pages/api/[date]"];
exports.modules = {

/***/ "(api)/./pages/api/[date].js":
/*!*****************************!*\
  !*** ./pages/api/[date].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ timeStamp)\n/* harmony export */ });\nfunction timeStamp(req, res) {\n    const { date  } = req.query;\n    if (/^\\d+$/.test(date)) {\n        req.utc = new Date(parseInt(date)).toGMTString();\n        req.unix = Date.parse(req.utc);\n        res.json({\n            \"unix\": req.unix,\n            \"utc\": req.utc\n        });\n    } else if (new Date(date) != \"Invalid Date\") {\n        req.utc = new Date(date).toGMTString();\n        req.unix = Date.parse(req.utc);\n        res.json({\n            \"unix\": req.unix,\n            \"utc\": req.utc\n        });\n    } else res.json({\n        error: \"Invalid Date\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvW2RhdGVdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxTQUFTQSxVQUFVQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUN0QyxNQUFNLEVBQUNDLEtBQUksRUFBQyxHQUFHRixJQUFJRyxLQUFLO0lBQ3hCLElBQUksUUFBUUMsSUFBSSxDQUFDRixPQUFPO1FBQ3RCRixJQUFJSyxHQUFHLEdBQUcsSUFBSUMsS0FBS0MsU0FBU0wsT0FBT00sV0FBVztRQUM5Q1IsSUFBSVMsSUFBSSxHQUFHSCxLQUFLSSxLQUFLLENBQUNWLElBQUlLLEdBQUc7UUFDN0JKLElBQUlVLElBQUksQ0FBQztZQUFDLFFBQU9YLElBQUlTLElBQUk7WUFBRSxPQUFNVCxJQUFJSyxHQUFHO1FBQUE7SUFDMUMsT0FDSyxJQUFJLElBQUlDLEtBQUtKLFNBQVMsZ0JBQWU7UUFDeENGLElBQUlLLEdBQUcsR0FBRyxJQUFJQyxLQUFLSixNQUFNTSxXQUFXO1FBQ3BDUixJQUFJUyxJQUFJLEdBQUdILEtBQUtJLEtBQUssQ0FBQ1YsSUFBSUssR0FBRztRQUM3QkosSUFBSVUsSUFBSSxDQUFDO1lBQUMsUUFBT1gsSUFBSVMsSUFBSTtZQUFFLE9BQU1ULElBQUlLLEdBQUc7UUFBQTtJQUMxQyxPQUNLSixJQUFJVSxJQUFJLENBQUM7UUFBQ0MsT0FBUTtJQUFjO0FBQ3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtMTMtYXBpLy4vcGFnZXMvYXBpL1tkYXRlXS5qcz8zMTcwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lU3RhbXAocmVxLHJlcyl7XG4gICAgY29uc3Qge2RhdGV9ID0gcmVxLnF1ZXJ5XG4gICAgaWYgKC9eXFxkKyQvLnRlc3QoZGF0ZSkpIHtcbiAgICAgIHJlcS51dGMgPSBuZXcgRGF0ZShwYXJzZUludChkYXRlKSkudG9HTVRTdHJpbmcoKTtcbiAgICAgIHJlcS51bml4ID0gRGF0ZS5wYXJzZShyZXEudXRjKTtcbiAgICAgIHJlcy5qc29uKHsndW5peCc6cmVxLnVuaXgsIFwidXRjXCI6cmVxLnV0Y30pXG4gICAgfVxuICAgIGVsc2UgaWYgKG5ldyBEYXRlKGRhdGUpICE9IFwiSW52YWxpZCBEYXRlXCIpe1xuICAgICAgcmVxLnV0YyA9IG5ldyBEYXRlKGRhdGUpLnRvR01UU3RyaW5nKCk7XG4gICAgICByZXEudW5peCA9IERhdGUucGFyc2UocmVxLnV0Yyk7XG4gICAgICByZXMuanNvbih7J3VuaXgnOnJlcS51bml4LCBcInV0Y1wiOnJlcS51dGN9KVxuICAgIH1cbiAgICBlbHNlIHJlcy5qc29uKHtlcnJvciA6IFwiSW52YWxpZCBEYXRlXCJ9KVxuICB9Il0sIm5hbWVzIjpbInRpbWVTdGFtcCIsInJlcSIsInJlcyIsImRhdGUiLCJxdWVyeSIsInRlc3QiLCJ1dGMiLCJEYXRlIiwicGFyc2VJbnQiLCJ0b0dNVFN0cmluZyIsInVuaXgiLCJwYXJzZSIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/[date].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[date].js"));
module.exports = __webpack_exports__;

})();
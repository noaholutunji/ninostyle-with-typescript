webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./pages/checkout.tsx":
/*!****************************!*\
  !*** ./pages/checkout.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_containers_CheckOut_CheckOut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/containers/CheckOut/CheckOut */ "./src/containers/CheckOut/CheckOut.tsx");
/* harmony import */ var _src_lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/lib/auth */ "./src/lib/auth.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CheckOutPage = function CheckOutPage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_containers_CheckOut_CheckOut__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

CheckOutPage.getInitialProps = Object(_src_lib_auth__WEBPACK_IMPORTED_MODULE_2__["authInitialProps"])(true, '/login');
/* harmony default export */ __webpack_exports__["default"] = (CheckOutPage);

/***/ }),

/***/ "./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/*! exports provided: authInitialProps, checkIfAuthenticated, getUserFromCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialProps", function() { return authInitialProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfAuthenticated", function() { return checkIfAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromCookie", function() { return getUserFromCookie; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


var authInitialProps = function authInitialProps(isProtectedRoute, path) {
  return function (_ref) {
    var res = _ref.res;
    var isAuthenticated = checkIfAuthenticated();

    if (isProtectedRoute && !isAuthenticated) {
      return redirectUser(res, path);
    }

    return {
      isAuthenticated: isAuthenticated
    };
  };
};
var checkIfAuthenticated = function checkIfAuthenticated() {
  var auth = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('jwtToken');
  return auth ? true : false;
};
var getUserFromCookie = function getUserFromCookie() {
  var authUser = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('jwtToken');
  return authUser ? JSON.parse(authUser) : null;
};

var redirectUser = function redirectUser(res, path) {
  if (res) {
    res.redirect(302, path);
  }

  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace(path);
};

/***/ })

})
//# sourceMappingURL=checkout.js.0fa030d77241415cc4be.hot-update.js.map
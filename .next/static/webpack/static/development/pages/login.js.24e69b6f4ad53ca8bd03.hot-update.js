webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/store/actions/authActions.ts":
/*!******************************************!*\
  !*** ./src/store/actions/authActions.ts ***!
  \******************************************/
/*! exports provided: setCurrentUser, logout, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _axios_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../axios-orders */ "./src/axios-orders.ts");
/* harmony import */ var _utils_setAuthorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/setAuthorization */ "./src/utils/setAuthorization.ts");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./src/store/actions/types.ts");







function setCurrentUser(user) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_6__["SET_CURRENT_USER"],
    user: user
  };
}
function logout() {
  return function (dispatch) {
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('jwtToken');
    Object(_utils_setAuthorization__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
    dispatch(setCurrentUser({}));
  };
}
function login(data) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var res, token, user;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios_orders__WEBPACK_IMPORTED_MODULE_2__["default"].post('/login', data);

              case 2:
                res = _context.sent;
                token = res.data.jwtToken;
                user = res.data.user;
                js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('jwtToken', token);
                js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('user', user);
                Object(_utils_setAuthorization__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
                dispatch(setCurrentUser(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.decode(token)));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

/***/ })

})
//# sourceMappingURL=login.js.24e69b6f4ad53ca8bd03.hot-update.js.map
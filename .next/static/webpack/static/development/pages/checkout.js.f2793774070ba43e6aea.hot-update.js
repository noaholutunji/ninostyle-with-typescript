webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./src/containers/CheckOut/CheckOut.tsx":
/*!**********************************************!*\
  !*** ./src/containers/CheckOut/CheckOut.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    td {\n      vertical-align: middle;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var CheckOut = function CheckOut(props) {
  var cart = props.cart;
  var ProductTable = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBTable"])(_templateObject());

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    label: __jsx("strong", null, "Product"),
    field: 'product'
  }, {
    label: __jsx("strong", null, "QTY"),
    field: 'qty'
  }, {
    label: __jsx("strong", null, "Amount"),
    field: 'amount'
  }]),
      cols = _useState[0];

  var rows = [];
  cart.addedItems.map(function (item) {
    return rows.push({
      product: [__jsx("h5", {
        className: "mt-3"
      }, __jsx("strong", null, item.name))],
      qty: "".concat(item.quantity),
      amount: __jsx("strong", null, "\u20A6", item.quantity * item.price)
    });
  });
  return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBContainer"], null, __jsx("div", null), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
    md: "6",
    className: "mt-4"
  }, __jsx("h4", {
    className: "text-center mt-1"
  }, "CHECKOUT"), __jsx("form", null, __jsx("div", {
    className: "grey-text"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
    label: "First Name",
    icon: "user",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
    label: "Last Name",
    icon: "user",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
    label: "Email",
    icon: "envelope",
    group: true,
    type: "email",
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
    label: "Phone Number",
    icon: "mobile",
    group: true,
    type: "number",
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBInput"], {
    label: "Shipping Address",
    icon: "tag",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx("p", {
    className: "lead mt-3 py-2 ml-5"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/checkout/successfulorder"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBBtn"], {
    color: "primary"
  }, "Confirm Order")))))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCol"], {
    md: "6"
  }, __jsx("h4", {
    className: "text-center mt-4"
  }, "Your Order Summary"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCardBody"], null, __jsx(ProductTable, {
    className: "product-table"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBTableHead"], {
    className: "font-weight-bold",
    color: "mdb-color lighten-5",
    columns: cols
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBTableBody"], {
    rows: rows
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBBtn"], null, "Total: \u20A6", cart.total)))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(CheckOut));

/***/ })

})
//# sourceMappingURL=checkout.js.f2793774070ba43e6aea.hot-update.js.map
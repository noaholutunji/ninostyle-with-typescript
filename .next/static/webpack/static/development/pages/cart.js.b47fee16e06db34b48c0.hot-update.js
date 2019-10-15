webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./src/components/Cart/Cart.tsx":
/*!**************************************!*\
  !*** ./src/components/Cart/Cart.tsx ***!
  \**************************************/
/*! exports provided: Cart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Footer/Footer */ "./src/components/Footer/Footer.tsx");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./src/store/actions/cartActions.ts");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  td {\n    vertical-align: middle;\n    &:nth-child(6) {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-height: 150px;\n  min-width: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var ImgCart = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject());
var ProductTable = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBTable"])(_templateObject2());
var Cart = function Cart(props) {
  var handleRemove = function handleRemove(product) {
    props.removeItem(product);
  }; //to add the quantity


  var handleAddQuantity = function handleAddQuantity(product) {
    props.addQuantity(product);
  }; //to substruct from the quantity


  var handleSubtractQuantity = function handleSubtractQuantity(product) {
    props.subtractQuantity(product);
  };

  var cart = props.cart;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    label: '',
    field: 'img'
  }, {
    label: 'Product',
    field: 'product'
  }, {
    label: 'Price',
    field: 'price'
  }, {
    label: 'QTY',
    field: 'qty'
  }, {
    label: 'Amount',
    field: 'amount'
  }, {
    label: '',
    field: 'button'
  }]),
      cols = _useState[0];

  var rows = [];
  cart.addedItems.map(function (item) {
    return rows.push({
      img: __jsx(ImgCart, {
        src: item.image,
        alt: "",
        className: "img-fluid z-depth-0"
      }),
      product: [__jsx("h5", {
        className: "mt-3"
      }, __jsx("strong", null, item.name))],
      price: "\u20A6 ".concat(item.price),
      qty: "".concat(item.quantity),
      amount: __jsx("strong", null, "\u20A6 ", item.quantity * item.price),
      button: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBBtn"], {
        title: "Increase quantity",
        color: "success",
        size: "sm",
        onClick: function onClick() {
          handleAddQuantity(item._id);
        }
      }, "+"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBBtn"], {
        color: "info",
        size: "sm",
        onClick: function onClick() {
          handleSubtractQuantity(item._id);
        }
      }, "-"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBBtn"], {
        color: "danger",
        size: "sm",
        onClick: function onClick() {
          handleRemove(item._id);
        }
      }, "X"))
    });
  });
  return cart.addedItems.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBRow"], {
    className: "my-2 ml-3 mr-1",
    center: true
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBCol"], {
    xs: "6",
    md: "12"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBCard"], {
    className: "w-100"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBCardBody"], null, __jsx(ProductTable, {
    className: "product-table"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBTableHead"], {
    className: "font-weight-bold",
    color: "mdb-color lighten-5",
    columns: cols
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBTableBody"], {
    rows: rows
  })))), __jsx("div", {
    className: "text-center"
  }, __jsx("h3", {
    className: "my-4"
  }, __jsx("strong", null, "Total:"), " \u20A6 ", cart.total), __jsx("p", {
    className: "lead mt-3 py-2 ml-5"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/checkout"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_8__["MDBBtn"], {
    color: "primary"
  }, "CheckOut")))))), __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("p", {
    className: "text-center my-5"
  }, __jsx("strong", null, "Your cart is empty!!!")), __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeItem: function removeItem(product) {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["removeItem"])(product));
    },
    addQuantity: function addQuantity(product) {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["addQuantity"])(product));
    },
    subtractQuantity: function subtractQuantity(product) {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["subtractQuantity"])(product));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Cart));

/***/ })

})
//# sourceMappingURL=cart.js.b47fee16e06db34b48c0.hot-update.js.map
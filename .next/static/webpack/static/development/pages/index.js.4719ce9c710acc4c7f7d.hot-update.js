webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Home/Home.tsx":
/*!**************************************!*\
  !*** ./src/components/Home/Home.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios-orders */ "./src/axios-orders.ts");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.tsx");
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Table */ "./src/components/Home/Table.tsx");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';







var Home = function Home(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      product = _useState[0],
      setProduct = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _axios_orders__WEBPACK_IMPORTED_MODULE_1__["default"].get('/products').then(function (response) {
      console.log(response.data);
      setProduct(response.data);
    })["catch"](function (error) {
      console.log(error);
    });
  }, [props]);

  var tabRow = function tabRow() {
    return product && product.slice(-4).map(function (object, i) {
      return __jsx(_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        obj: object,
        key: i
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], null), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBContainer"], {
    className: "d-flex justify-content-center mb-3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarousel"], {
    activeItem: 1,
    length: 4,
    showControls: true,
    showIndicators: true,
    className: "z-depth-1 w-75 mt-3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarouselInner"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarouselItem"], {
    itemId: "1"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg",
    alt: "First slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBMask"], {
    overlay: "black-light"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "NinoStyle"), __jsx("p", null, "Enjoy shopping with us"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarouselItem"], {
    itemId: "2"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg",
    alt: "Second slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBMask"], {
    overlay: "black-strong"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "NinoStyle"), __jsx("p", null, "Top notch Experience"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarouselItem"], {
    itemId: "3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg",
    alt: "Third slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBMask"], {
    overlay: "black-slight"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "Ninostyle"), __jsx("p", null, "Prompt Delivery"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarouselItem"], {
    itemId: "4"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    alt: "Third slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBMask"], {
    overlay: "black-slight"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "NinoStyle"), __jsx("p", null, "Excellence Customer Service")))))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBContainer"], {
    className: "mt-3 px-1 text-center"
  }, __jsx("h3", null, "Latest Products"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBRow"], {
    className: "mt-3"
  }, tabRow())), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4719ce9c710acc4c7f7d.hot-update.js.map
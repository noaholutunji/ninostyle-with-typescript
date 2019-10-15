webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/store/reducers/cartReducer.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/cartReducer.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/types */ "./src/store/actions/types.ts");



var initState = {
  addedItems: [],
  total: 0
};

var addCart = function addCart(state, action) {
  var existed_item = state.addedItems.find(function (item) {
    return action.data._id === item._id;
  });

  if (existed_item) {
    action.data.quantity += 1;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      total: state.total + action.data.price
    });
  } else {
    action.data.quantity = 1; //calculating the total

    var newTotal = state.total + action.data.price;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      addedItems: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addedItems), [action.data]),
      total: newTotal
    });
  }
};

var removeCart = function removeCart(state, action) {
  var itemToRemove = state.addedItems.find(function (item) {
    return action.id === item._id;
  });
  var new_items = state.addedItems.filter(function (item) {
    return action.id !== item._id;
  }); //calculating the total

  var newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
  console.log(itemToRemove);
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    addedItems: new_items,
    total: newTotal
  });
};

var increaseQuantity = function increaseQuantity(state, action) {
  var addedItem = state.addedItems.find(function (item) {
    return item._id === action.id;
  });
  addedItem.quantity += 1;
  var newTotal = state.total + addedItem.price;
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    total: newTotal
  });
};

var decreaseQuantity = function decreaseQuantity(state, action) {
  var addedItem = state.addedItems.find(function (item) {
    return item._id === action.id;
  }); //if the qt == 0 then it should be removed

  if (addedItem.quantity === 1) {
    var new_items = state.addedItems.filter(function (item) {
      return item.id !== action.id;
    });
    var newTotal = state.total - addedItem.price;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      addedItems: new_items,
      total: newTotal
    });
  } else {
    addedItem.quantity -= 1;

    var _newTotal = state.total - addedItem.price;

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      total: _newTotal
    });
  }
}; // type Action = {
//   _id: string;
//   quantity: number;
//   price: string
// }
// { _id: string; quantity: number; price: string | number; }


var cart = function cart() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["ADD_TO_CART"]:
      return addCart(state, action);

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_ITEM"]:
      return removeCart(state, action);

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["ADD_QUANTITY"]:
      return increaseQuantity(state, action);

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SUB_QUANTITY"]:
      return decreaseQuantity(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cart);

/***/ })

})
//# sourceMappingURL=_app.js.680fcc9e3b1cb5a9e136.hot-update.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _uiApi = require("../uiApi");

var _excluded = ["items", "crItem"];
var _isArr = Array.isArray;
var ItemStack = (0, _uiApi.memo)(function (_ref) {
  var items = _ref.items,
      crItem = _ref.crItem,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return _isArr(items) ? items.map(function (item, index) {
    return crItem(item, index, restProps);
  }) : null;
});
var _default = ItemStack;
exports["default"] = _default;
//# sourceMappingURL=ItemStack.js.map
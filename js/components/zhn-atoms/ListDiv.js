"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var ListDiv = function ListDiv(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      itemStyle = _ref.itemStyle;
  return _react["default"].createElement(_react.Fragment, null, items.map(function (str, index) {
    return _react["default"].createElement("div", {
      key: index,
      style: itemStyle
    }, str);
  }));
};

var _default = ListDiv;
exports["default"] = _default;
//# sourceMappingURL=ListDiv.js.map
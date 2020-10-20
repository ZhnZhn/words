"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var ListDiv = function ListDiv(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      itemStyle = _ref.itemStyle;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: items.map(function (str, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: itemStyle,
        children: str
      }, index);
    })
  });
};

var _default = ListDiv;
exports["default"] = _default;
//# sourceMappingURL=ListDiv.js.map
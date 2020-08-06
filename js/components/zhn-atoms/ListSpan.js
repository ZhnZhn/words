"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var S = {
  ITEM: {
    fontWeight: 400
  }
};

var ListSpan = function ListSpan(_ref) {
  var rootStyle = _ref.rootStyle,
      caption = _ref.caption,
      captionStyle = _ref.captionStyle,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      itemStyle = _ref.itemStyle;

  if (items.length === 0) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: rootStyle
  }, caption && /*#__PURE__*/_react["default"].createElement("span", {
    style: captionStyle
  }, caption), /*#__PURE__*/_react["default"].createElement("span", {
    style: (0, _extends2["default"])({}, S.ITEM, itemStyle)
  }, items.join(', ')));
};

var _default = ListSpan;
exports["default"] = _default;
//# sourceMappingURL=ListSpan.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ITEM = {
  fontWeight: 400
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

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: rootStyle,
    children: [caption && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: captionStyle,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, S_ITEM, itemStyle),
      children: items.join(', ')
    })]
  });
};

var _default = ListSpan;
exports["default"] = _default;
//# sourceMappingURL=ListSpan.js.map
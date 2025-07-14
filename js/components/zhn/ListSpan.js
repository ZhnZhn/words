"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SafeToken = _interopRequireDefault(require("./SafeToken"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ITEM = {
  fontWeight: 400
};
const _isArr = Array.isArray;
const ListSpan = _ref => {
  let {
    style,
    caption,
    captionStyle,
    items,
    itemStyle
  } = _ref;
  return !_isArr(items) || items.length === 0 ? null : (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)(_SafeToken.default, {
      style: captionStyle,
      token: caption
    }), (0, _jsxRuntime.jsx)(_SafeToken.default, {
      style: {
        ...S_ITEM,
        ...itemStyle
      },
      token: items.join(', ')
    })]
  });
};
var _default = exports.default = ListSpan;
//# sourceMappingURL=ListSpan.js.map
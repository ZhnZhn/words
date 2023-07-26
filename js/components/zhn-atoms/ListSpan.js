"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SafeToken = _interopRequireDefault(require("./SafeToken"));
var _jsxRuntime = require("react/jsx-runtime");
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
  return !_isArr(items) || items.length === 0 ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SafeToken.default, {
      style: captionStyle,
      token: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SafeToken.default, {
      style: {
        ...S_ITEM,
        ...itemStyle
      },
      token: items.join(', ')
    })]
  });
};
var _default = ListSpan;
exports.default = _default;
//# sourceMappingURL=ListSpan.js.map
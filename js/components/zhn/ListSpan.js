"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _fnArr = require("../../utils/fnArr");
var _jsxRuntime = require("preact/jsx-runtime");
const S_ITEM = {
  fontWeight: 400
};
const ListSpan = _ref => {
  let {
    style,
    caption,
    captionStyle,
    items,
    itemStyle
  } = _ref;
  return (0, _isTypeFn.isArrNotEmpty)(items) ? (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)("span", {
      style: captionStyle,
      children: caption
    }), (0, _jsxRuntime.jsx)("span", {
      style: {
        ...S_ITEM,
        ...itemStyle
      },
      children: (0, _fnArr.joinByComma)(items)
    })]
  }) : null;
};
var _default = exports.default = ListSpan;
//# sourceMappingURL=ListSpan.js.map
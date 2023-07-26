"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const S_ITEM = {
  fontWeight: 400
};
const _isArr = Array.isArray,
  _isNotEmptyStr = v => typeof v === 'string' && v !== '';
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
    children: [_isNotEmptyStr(caption) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: captionStyle,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: {
        ...S_ITEM,
        ...itemStyle
      },
      children: items.join(', ')
    })]
  });
};
var _default = ListSpan;
exports.default = _default;
//# sourceMappingURL=ListSpan.js.map
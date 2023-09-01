"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROW_DIV = {
    display: 'flex',
    alignItems: 'center',
    margin: 5
  },
  S_ROOT_DIV = {
    margin: 5,
    lineHeight: 2,
    fontWeight: 'bold'
  },
  S_LABEL_SPAN = {
    display: 'inline-block',
    color: '#1b75bb',
    paddingLeft: 18,
    paddingRight: 5,
    fontSize: '16px'
  };
const Plain = _ref => {
  let {
    style,
    children
  } = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    style: {
      ...S_ROW_DIV,
      ...style
    },
    children: children
  });
};
const Text = _ref2 => {
  let {
    caption,
    text,
    styleRoot
  } = _ref2;
  return (0, _jsxRuntime.jsxs)("div", {
    style: {
      ...S_ROOT_DIV,
      ...styleRoot
    },
    children: [(0, _jsxRuntime.jsx)("span", {
      style: S_LABEL_SPAN,
      children: caption
    }), (0, _jsxRuntime.jsx)("span", {
      children: text
    })]
  });
};
var _default = {
  Plain,
  Text
};
exports.default = _default;
//# sourceMappingURL=Row.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROOT_DIV = {
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
      ..._DialogStyles.default.rowDiv,
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
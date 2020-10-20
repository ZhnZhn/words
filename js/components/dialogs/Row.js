"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

var S = {
  ROOT_DIV: {
    margin: 5,
    lineHeight: 2,
    fontWeight: 'bold'
  },
  LABEL_SPAN: {
    display: 'inline-block',
    color: '#1b75bb',
    paddingLeft: 18,
    paddingRight: 5,
    fontSize: '16px'
  }
};

var Plain = function Plain(_ref) {
  var style = _ref.style,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: (0, _extends2["default"])({}, _DialogStyles["default"].rowDiv, style),
    children: children
  });
};

var Text = function Text(_ref2) {
  var caption = _ref2.caption,
      text = _ref2.text,
      styleRoot = _ref2.styleRoot;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S.ROOT_DIV, styleRoot),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S.LABEL_SPAN,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: text
    })]
  });
};

var _default = {
  Plain: Plain,
  Text: Text
};
exports["default"] = _default;
//# sourceMappingURL=Row.js.map
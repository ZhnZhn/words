"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const S_DIV = {
    color: '#f44336',
    paddingLeft: 10,
    paddingTop: 5
  },
  S_MSG_NUMBER = {
    display: 'inline-block',
    width: 22,
    height: 22,
    border: 'solid 2px #F44336',
    borderRadius: '50%',
    textAlign: 'center',
    marginRight: 5
  },
  S_MSG_SPAN = {
    fontWeight: 'bold'
  };
const ValidationMessages = props => (0, _jsxRuntime.jsx)("div", {
  style: S_DIV,
  children: (props.validationMessages || []).map((msg, index) => (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)("div", {
      style: S_MSG_NUMBER,
      children: index + 1
    }), (0, _jsxRuntime.jsx)("span", {
      style: S_MSG_SPAN,
      children: msg
    })]
  }, index))
});
var _default = exports.default = ValidationMessages;
//# sourceMappingURL=ValidationMessages.js.map
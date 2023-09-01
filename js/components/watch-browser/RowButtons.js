"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Button = _interopRequireDefault(require("./Button"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_DIV = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  margin: '8px 4px 6px 0'
};
const RowButtons = _ref => {
  let {
    caption,
    title,
    onClick,
    onClear,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_DIV,
    children: [(0, _jsxRuntime.jsx)(_Button.default.Primary, {
      caption: caption,
      title: title,
      onClick: onClick
    }), onClear && (0, _jsxRuntime.jsx)(_Button.default.Clear, {
      onClick: onClear
    }), (0, _jsxRuntime.jsx)(_Button.default.Close, {
      onClick: onClose
    })]
  });
};
var _default = RowButtons;
exports.default = _default;
//# sourceMappingURL=RowButtons.js.map
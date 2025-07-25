"use strict";

exports.__esModule = true;
exports.default = void 0;
var _Button = require("./Button");
var _jsxRuntime = require("preact/jsx-runtime");
const S_DIV = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  margin: '30px 4px 6px 0'
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
    children: [(0, _jsxRuntime.jsx)(_Button.ButtonPrimary, {
      caption: caption,
      title: title,
      onClick: onClick
    }), onClear && (0, _jsxRuntime.jsx)(_Button.ButtonClear, {
      onClick: onClear
    }), (0, _jsxRuntime.jsx)(_Button.ButtonClose, {
      onClick: onClose
    })]
  });
};
var _default = exports.default = RowButtons;
//# sourceMappingURL=RowButtons.js.map
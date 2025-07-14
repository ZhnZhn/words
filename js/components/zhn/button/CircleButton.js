"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const CL = 'bt-circle';
const CircleButton = _ref => {
  let {
    refEl,
    style,
    tabIndex = '-1',
    caption = '',
    title,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    ref: refEl,
    className: CL,
    style: style,
    tabIndex: tabIndex,
    title: title,
    onClick: onClick,
    children: caption
  });
};
var _default = exports.default = CircleButton;
//# sourceMappingURL=CircleButton.js.map
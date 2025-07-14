"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const Button = _ref => {
  let {
    className,
    style,
    tabIndex = '0',
    caption = '',
    title,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: className,
    style: style,
    tabIndex: tabIndex,
    title: title,
    onClick: onClick,
    children: caption
  });
};
var _default = exports.default = Button;
//# sourceMappingURL=Button.js.map
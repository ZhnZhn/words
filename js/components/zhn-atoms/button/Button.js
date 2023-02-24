"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var Button = function Button(_ref) {
  var className = _ref.className,
    style = _ref.style,
    _ref$tabIndex = _ref.tabIndex,
    tabIndex = _ref$tabIndex === void 0 ? '0' : _ref$tabIndex,
    _ref$caption = _ref.caption,
    caption = _ref$caption === void 0 ? '' : _ref$caption,
    title = _ref.title,
    onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: className,
    style: style,
    tabIndex: tabIndex,
    title: title,
    onClick: onClick,
    children: caption
  });
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=Button.js.map
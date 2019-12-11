"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Button = function Button(_ref) {
  var className = _ref.className,
      style = _ref.style,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? '0' : _ref$tabIndex,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      title = _ref.title,
      onClick = _ref.onClick;
  return _react["default"].createElement("button", {
    className: className,
    style: style,
    tabIndex: tabIndex,
    title: title,
    onClick: onClick
  }, caption);
};

var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=Button.js.map
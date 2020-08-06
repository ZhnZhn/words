"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL = 'bt-circle';

var CircleButton = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var style = _ref.style,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? '-1' : _ref$tabIndex,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      title = _ref.title,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    ref: ref,
    className: CL,
    style: style,
    tabIndex: tabIndex,
    title: title,
    onClick: onClick
  }, caption);
});

var _default = CircleButton;
exports["default"] = _default;
//# sourceMappingURL=CircleButton.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL = 'bt-clear';

var ButtonClear = function ButtonClear(_ref) {
  var style = _ref.style,
      onClick = _ref.onClick;
  return _react["default"].createElement("button", {
    className: CL,
    style: style,
    onClick: onClick
  }, "x");
};

var _default = ButtonClear;
exports["default"] = _default;
//# sourceMappingURL=ButtonClear.js.map
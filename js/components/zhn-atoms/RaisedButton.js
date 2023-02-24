"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _jsxRuntime = require("react/jsx-runtime");
var CL_BT = 'bt-raised',
  CL_BT_SPAN = 'bt-raised__span',
  S_PRIMARY_SPAN = {
    color: '#80c040'
  };
var RaisedButton = function RaisedButton(_ref) {
  var isPrimary = _ref.isPrimary,
    className = _ref.className,
    style = _ref.style,
    clDiv = _ref.clDiv,
    caption = _ref.caption,
    _ref$tabIndex = _ref.tabIndex,
    tabIndex = _ref$tabIndex === void 0 ? "0" : _ref$tabIndex,
    onClick = _ref.onClick;
  var _btCl = (0, _crCn["default"])(CL_BT, className),
    _spanStyle = isPrimary ? S_PRIMARY_SPAN : void 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    tabIndex: tabIndex,
    className: _btCl,
    style: style,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: clDiv,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: CL_BT_SPAN,
        style: _spanStyle,
        children: caption
      })
    })
  });
};
var _default = RaisedButton;
exports["default"] = _default;
//# sourceMappingURL=RaisedButton.js.map
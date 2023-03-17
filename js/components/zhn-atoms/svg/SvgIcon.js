"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _Svg = _interopRequireDefault(require("./Svg"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["color", "size", "children"];
var SvgIcon = function SvgIcon(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '24' : _ref$size,
    children = _ref.children,
    restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg["default"], (0, _extends2["default"])({
    w: size,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps, {
    children: children
  }));
};
var _default = SvgIcon;
exports["default"] = _default;
//# sourceMappingURL=SvgIcon.js.map
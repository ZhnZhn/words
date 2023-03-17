"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["style", "w", "h", "children"];
var Svg = function Svg(_ref) {
  var style = _ref.style,
    w = _ref.w,
    _ref$h = _ref.h,
    h = _ref$h === void 0 ? w : _ref$h,
    children = _ref.children,
    restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    preserveAspectRatio: "none"
  }, restProps, {
    xmlns: "http://www.w3.org/2000/svg",
    style: style,
    width: w + "px",
    height: h + "px",
    viewBox: "0 0 " + w + " " + h,
    children: children
  }));
};
var _default = Svg;
exports["default"] = _default;
//# sourceMappingURL=Svg.js.map
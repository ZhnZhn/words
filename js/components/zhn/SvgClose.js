"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = _interopRequireDefault(require("./svg/Svg100"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SVG_CLOSE = "svg-close",
  S_SVG = {
    padding: 3
  };
const SvgClose = _ref => {
  let {
    style,
    tabIndex,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    tabIndex: tabIndex,
    className: CL_SVG_CLOSE,
    style: style,
    onClick: onClose,
    children: (0, _jsxRuntime.jsxs)(_Svg.default, {
      w: "12",
      style: S_SVG,
      strokeWidth: "2",
      strokeLinecap: "round",
      children: [(0, _jsxRuntime.jsx)("path", {
        d: "M 0,0 L 12,12"
      }), (0, _jsxRuntime.jsx)("path", {
        d: "M 12,0 L 0,12"
      })]
    })
  });
};
var _default = exports.default = SvgClose;
//# sourceMappingURL=SvgClose.js.map
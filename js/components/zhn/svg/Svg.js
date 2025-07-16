"use strict";

exports.__esModule = true;
exports.XMLNS_SVG = exports.Svg = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const XMLNS_SVG = exports.XMLNS_SVG = "http://www.w3.org/2000/svg";
const Svg = _ref => {
  let {
    w,
    h = w,
    children,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)("svg", {
    "aria-hidden": "true",
    focusable: "false",
    role: "img",
    preserveAspectRatio: "none",
    width: `${w}px`,
    height: `${h}px`,
    ...restProps,
    xmlns: XMLNS_SVG,
    viewBox: `0 0 ${w} ${h}`,
    children: children
  });
};
exports.Svg = Svg;
//# sourceMappingURL=Svg.js.map
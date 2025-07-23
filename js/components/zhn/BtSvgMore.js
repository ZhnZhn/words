"use strict";

exports.__esModule = true;
exports.default = void 0;
var _Svg = require("./svg/Svg");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_SVG_MORE = 'bt-svg-more',
  DF_TITLE = "Click to open menu More",
  DF_ARIA_LABEL = "Menu more";
const BtSvgMore = _ref => {
  let {
    style,
    svgStyle,
    title = DF_TITLE,
    ariaLabel = DF_ARIA_LABEL,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: CL_BT_SVG_MORE,
    style: style,
    title: title,
    "aria-label": ariaLabel,
    onClick: onClick,
    children: (0, _jsxRuntime.jsxs)(_Svg.Svg, {
      style: svgStyle,
      w: "6",
      h: "22",
      children: [(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "4",
        r: "2"
      }), (0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "11",
        r: "2"
      }), (0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "18",
        r: "2"
      })]
    })
  });
};
var _default = exports.default = BtSvgMore;
//# sourceMappingURL=BtSvgMore.js.map
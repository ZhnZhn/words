"use strict";

exports.__esModule = true;
exports.default = void 0;
var _Svg = require("./svg/Svg");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_FOCUSABLE = 'focusable',
  S_BT = {
    verticalAlign: 'middle',
    padding: '0 6px',
    cursor: 'pointer'
  },
  S_SVG = {
    fill: 'black',
    stroke: 'black'
  },
  DF_TITLE = "Click to open menu More";
const SvgMore = _ref => {
  let {
    style,
    svgStyle,
    title = DF_TITLE,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: CL_FOCUSABLE,
    style: {
      ...S_BT,
      ...style
    },
    title: title,
    onClick: onClick,
    children: (0, _jsxRuntime.jsxs)(_Svg.Svg, {
      style: {
        ...S_SVG,
        ...svgStyle
      },
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
var _default = exports.default = SvgMore;
//# sourceMappingURL=SvgMore.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _Svg = _interopRequireDefault(require("./svg/Svg"));
var _jsxRuntime = require("react/jsx-runtime");
var CL_FOCUSABLE = 'focusable',
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
var SvgMore = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var style = _ref.style,
    svgStyle = _ref.svgStyle,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? DF_TITLE : _ref$title,
    onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    ref: ref,
    className: CL_FOCUSABLE,
    style: (0, _extends2["default"])({}, S_BT, style),
    title: title,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg["default"], {
      style: (0, _extends2["default"])({}, S_SVG, svgStyle),
      w: "6",
      h: "22",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "4",
        r: "2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "11",
        r: "2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "18",
        r: "2"
      })]
    })
  });
});
var _default = SvgMore;
exports["default"] = _default;
//# sourceMappingURL=SvgMore.js.map
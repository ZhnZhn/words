"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _Svg = _interopRequireDefault(require("./svg/Svg100"));
var _jsxRuntime = require("react/jsx-runtime");
var CL_SVG_CLOSE = "svg-close",
  STROKE_COLOR = '#d64336',
  S_SVG = {
    padding: 3
  };
var SvgClose = function SvgClose(_ref) {
  var style = _ref.style,
    tabIndex = _ref.tabIndex,
    onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    tabIndex: tabIndex,
    className: CL_SVG_CLOSE,
    style: style,
    onClick: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg["default"], {
      w: "12",
      style: S_SVG,
      strokeWidth: "2",
      stroke: STROKE_COLOR,
      strokeLinecap: "round",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 0,0 L 12,12"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 12,0 L 0,12"
      })]
    })
  });
};
var _default = SvgClose;
exports["default"] = _default;
//# sourceMappingURL=SvgClose.js.map
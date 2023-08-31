"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SvgMore = _interopRequireDefault(require("./SvgMore"));
var _SvgClose = _interopRequireDefault(require("./SvgClose"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_NOT_SELECTED = "not-selected",
  CL_B_CAPTION = "b-caption gap-right",
  S_CAPTION = {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  S_BT_MORE = {
    marginRight: 6
  },
  S_SVG_MORE = {
    fill: 'inherit',
    stroke: 'inherit'
  },
  S_SVG_CLOSE = {
    position: 'absolute',
    top: 6,
    right: 0,
    width: 24,
    height: 24
  };
const _isFn = fn => typeof fn === "function";
const _extractColorToSvgStyle = function (_temp, DF_STYLE) {
  let {
    color
  } = _temp === void 0 ? {} : _temp;
  return color ? {
    fill: color,
    stroke: color
  } : DF_STYLE;
};
const BrowserCaption = _ref => {
  let {
    rootStyle,
    caption,
    children,
    onMore,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_B_CAPTION,
    style: rootStyle,
    children: [_isFn(onMore) && (0, _jsxRuntime.jsx)(_SvgMore.default, {
      style: S_BT_MORE,
      svgStyle: _extractColorToSvgStyle(rootStyle, S_SVG_MORE),
      onClick: onMore
    }), (0, _jsxRuntime.jsx)("span", {
      className: CL_NOT_SELECTED,
      style: S_CAPTION,
      children: caption
    }), children, (0, _jsxRuntime.jsx)(_SvgClose.default, {
      style: S_SVG_CLOSE,
      onClose: onClose
    })]
  });
};
var _default = BrowserCaption;
exports.default = _default;
//# sourceMappingURL=BrowserCaption.js.map
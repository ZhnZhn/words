"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _BtSvgMore = _interopRequireDefault(require("./BtSvgMore"));
var _SvgClose = _interopRequireDefault(require("./SvgClose"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_NOT_SELECTED = "not-selected",
  CL_B_CAPTION = "b-caption gap-right",
  S_CAPTION = {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  S_BT_MORE = {
    verticalAlign: 'middle',
    marginRight: 6,
    marginLeft: -6
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
    children: [(0, _isTypeFn.isFn)(onMore) && (0, _jsxRuntime.jsx)(_BtSvgMore.default, {
      style: S_BT_MORE,
      svgStyle: _extractColorToSvgStyle(rootStyle, S_SVG_MORE),
      onClick: onMore
    }), (0, _jsxRuntime.jsx)("span", {
      className: CL_NOT_SELECTED,
      style: S_CAPTION,
      children: caption
    }), children, (0, _jsxRuntime.jsx)(_SvgClose.default, {
      style: S_SVG_CLOSE,
      tabIndex: "-1",
      onClose: onClose
    })]
  });
};
var _default = exports.default = BrowserCaption;
//# sourceMappingURL=BrowserCaption.js.map
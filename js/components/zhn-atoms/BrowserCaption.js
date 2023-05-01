"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _SvgMore = _interopRequireDefault(require("./SvgMore"));
var _SvgClose = _interopRequireDefault(require("./SvgClose"));
var _jsxRuntime = require("react/jsx-runtime");
var CL_NOT_SELECTED = "not-selected",
  CL_GAP_RIGHT = "gap-right",
  S_ROOT = {
    position: 'relative',
    backgroundColor: '#3f5178',
    color: '#a487d4',
    lineHeight: 1.8,
    padding: '4px 42px 0 10px',
    marginBottom: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'clip'
  },
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
var _isFn = function _isFn(fn) {
  return typeof fn === "function";
};
var _extractColorToSvgStyle = function _extractColorToSvgStyle(_temp, DF_STYLE) {
  var _ref = _temp === void 0 ? {} : _temp,
    color = _ref.color;
  return color ? {
    fill: color,
    stroke: color
  } : DF_STYLE;
};
var BrowserCaption = function BrowserCaption(_ref2) {
  var rootStyle = _ref2.rootStyle,
    caption = _ref2.caption,
    children = _ref2.children,
    onMore = _ref2.onMore,
    onClose = _ref2.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_GAP_RIGHT,
    style: (0, _extends2["default"])({}, S_ROOT, rootStyle),
    children: [_isFn(onMore) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore["default"], {
      style: S_BT_MORE,
      svgStyle: _extractColorToSvgStyle(rootStyle, S_SVG_MORE),
      onClick: onMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL_NOT_SELECTED,
      style: S_CAPTION,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      style: S_SVG_CLOSE,
      onClose: onClose
    })]
  });
};
var _default = BrowserCaption;
exports["default"] = _default;
//# sourceMappingURL=BrowserCaption.js.map
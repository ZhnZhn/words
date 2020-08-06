"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _SvgMore = _interopRequireDefault(require("./SvgMore"));

var _SvgClose = _interopRequireDefault(require("./SvgClose"));

var CL_NOT_SELECTED = "not-selected";
var CL_GAP = "gap-right";
var S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#3f5178',
    color: 'rgba(164, 135, 212, 1)',
    lineHeight: 1.8,
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 42,
    marginBottom: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'clip'
  },
  CAPTION: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  BT_MORE: {
    marginRight: 6
  },
  SVG_MORE: {
    fill: 'inherit',
    stroke: 'inherit'
  },
  SVG_CLOSE: {
    position: 'absolute',
    top: 6,
    right: 0,
    width: 24,
    height: 24
  }
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
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: CL_GAP,
    style: (0, _extends2["default"])({}, S.ROOT, rootStyle)
  }, _isFn(onMore) && /*#__PURE__*/_react["default"].createElement(_SvgMore["default"], {
    style: S.BT_MORE,
    svgStyle: _extractColorToSvgStyle(rootStyle, S.SVG_MORE),
    onClick: onMore
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: CL_NOT_SELECTED,
    style: S.CAPTION
  }, caption), children, /*#__PURE__*/_react["default"].createElement(_SvgClose["default"], {
    style: S.SVG_CLOSE,
    onClose: onClose
  }));
};

var _default = BrowserCaption;
exports["default"] = _default;
//# sourceMappingURL=BrowserCaption.js.map
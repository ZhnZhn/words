'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgMore = require('./SvgMore');

var _SvgMore2 = _interopRequireDefault(_SvgMore);

var _SvgClose = require('./SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _extractColorToSvgStyle = function _extractColorToSvgStyle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      color = _ref.color;

  var DF_STYLE = arguments[1];
  return color ? { fill: color, stroke: color } : DF_STYLE;
};

var BrowserCaption = function BrowserCaption(_ref2) {
  var rootStyle = _ref2.rootStyle,
      caption = _ref2.caption,
      children = _ref2.children,
      onMore = _ref2.onMore,
      onClose = _ref2.onClose;
  return _react2.default.createElement(
    'div',
    { className: CL_GAP, style: (0, _extends3.default)({}, S.ROOT, rootStyle) },
    _isFn(onMore) && _react2.default.createElement(_SvgMore2.default, {
      style: S.BT_MORE,
      svgStyle: _extractColorToSvgStyle(rootStyle, S.SVG_MORE),
      onClick: onMore
    }),
    _react2.default.createElement(
      'span',
      {
        className: CL_NOT_SELECTED,
        style: S.CAPTION
      },
      caption
    ),
    children,
    _react2.default.createElement(_SvgClose2.default, {
      style: S.SVG_CLOSE,
      onClose: onClose
    })
  );
};

exports.default = BrowserCaption;
//# sourceMappingURL=BrowserCaption.js.map
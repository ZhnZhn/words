'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('./SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    backgroundColor: '#3f5178',
    color: '#303030',
    lineHeight: '1.8',
    paddingTop: '4px',
    paddingLeft: '10px',
    marginBottom: '10px',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px'
  },
  CAPTION: {
    color: 'inherit',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  SVG_CLOSE: {
    position: 'relative',
    top: '3px',
    width: '24px',
    height: '24px'
  }
};

var BrowserCaption = function BrowserCaption(_ref) {
  var rootStyle = _ref.rootStyle,
      svgStyle = _ref.svgStyle,
      caption = _ref.caption,
      children = _ref.children,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { style: (0, _extends3.default)({}, S.ROOT, rootStyle) },
    _react2.default.createElement(
      'span',
      {
        className: 'not-selected',
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
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-atoms\BrowserCaption.js.map
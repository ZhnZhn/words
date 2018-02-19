'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  KEY: {
    textDecoration: 'underline'
  }
};

var EMPTY = '';

var _toCaptionIn = function _toCaptionIn(caption, accessKey) {
  var captionIn = caption == null ? EMPTY : EMPTY + caption,
      _index = captionIn.toLowerCase().indexOf(accessKey);
  if (accessKey && _index !== -1) {
    return {
      before: captionIn.substring(0, _index),
      key: captionIn.substring(_index, _index + 1),
      after: captionIn.substring(_index + 1)
    };
  }
  return { captionIn: captionIn };
};

var CaptionInput = function CaptionInput(_ref) {
  var className = _ref.className,
      rootStyle = _ref.rootStyle,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children;

  var _toCaptionIn2 = _toCaptionIn(caption, accessKey),
      captionIn = _toCaptionIn2.captionIn,
      after = _toCaptionIn2.after,
      key = _toCaptionIn2.key,
      before = _toCaptionIn2.before;

  if (typeof captionIn !== 'undefined') {
    return _react2.default.createElement(
      'span',
      { className: className, style: rootStyle },
      captionIn,
      children
    );
  }
  return _react2.default.createElement(
    'span',
    { className: className, style: rootStyle },
    _react2.default.createElement(
      'span',
      null,
      before
    ),
    _react2.default.createElement(
      'span',
      { style: S.KEY },
      key
    ),
    _react2.default.createElement(
      'span',
      null,
      after
    ),
    children
  );
};

exports.default = CaptionInput;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-atoms\CaptionInput.js.map
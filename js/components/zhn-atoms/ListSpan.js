'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListSpan = function ListSpan(_ref) {
  var rootStyle = _ref.rootStyle,
      caption = _ref.caption,
      captionStyle = _ref.captionStyle,
      _ref$items = _ref.items,
      items = _ref$items === undefined ? [] : _ref$items,
      itemStyle = _ref.itemStyle;

  if (items.length === 0) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { style: rootStyle },
    _react2.default.createElement(
      'span',
      { style: captionStyle },
      caption
    ),
    _react2.default.createElement(
      'span',
      null,
      items.join(', ')
    )
  );
};

exports.default = ListSpan;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-atoms\ListSpan.js.map
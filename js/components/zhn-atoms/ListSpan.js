'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ITEM: {
    fontWeight: 400
  }
};

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
    caption && _react2.default.createElement(
      'span',
      { style: captionStyle },
      caption
    ),
    _react2.default.createElement(
      'span',
      { style: (0, _extends3.default)({}, S.ITEM, itemStyle) },
      items.join(', ')
    )
  );
};

exports.default = ListSpan;
//# sourceMappingURL=ListSpan.js.map
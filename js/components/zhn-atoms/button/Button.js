'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var className = _ref.className,
      style = _ref.style,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === undefined ? '0' : _ref$tabIndex,
      _ref$caption = _ref.caption,
      caption = _ref$caption === undefined ? '' : _ref$caption,
      title = _ref.title,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: className,
      style: style,
      tabIndex: tabIndex,
      title: title,
      onClick: onClick
    },
    caption
  );
};

exports.default = Button;
//# sourceMappingURL=Button.js.map
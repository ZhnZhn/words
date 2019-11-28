'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppLabel = function AppLabel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      caption = _ref.caption,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: className,
      style: style,
      title: title,
      onClick: onClick
    },
    caption
  );
};

exports.default = AppLabel;
//# sourceMappingURL=AppLabel.js.map
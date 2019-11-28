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
  ROOT: {
    display: 'inline-block',
    color: '#80c040',
    border: '2px solid #80c040',
    borderRadius: '50%',
    lineHeight: '24px',
    width: '26px',
    height: '26px',
    textAlign: 'center',
    cursor: 'pointer'
  }
};

var CircleButton = function CircleButton(props) {
  var _props$caption = props.caption,
      caption = _props$caption === undefined ? '' : _props$caption,
      className = props.className,
      style = props.style,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === undefined ? '-1' : _props$tabIndex,
      isWithoutDefault = props.isWithoutDefault,
      onClick = props.onClick,
      _style = isWithoutDefault ? style : (0, _extends3.default)({}, S.ROOT, style);

  return _react2.default.createElement(
    'button',
    {
      className: className,
      style: _style,
      tabIndex: tabIndex,
      onClick: onClick
    },
    caption
  );
};

exports.default = CircleButton;
//# sourceMappingURL=CircleButton.js.map
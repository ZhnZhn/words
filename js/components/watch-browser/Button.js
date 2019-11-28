'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('../zhn-atoms/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_DIV = 'bt-flat__div';

var S = {
  BT_ROOT: {
    color: 'rgb(35, 47, 59)'
  }
};

var Clear = function Clear(_ref) {
  var style = _ref.style,
      onClick = _ref.onClick;
  return _react2.default.createElement(_FlatButton2.default, {
    rootStyle: (0, _extends3.default)({}, S.BT_ROOT, style),
    clDiv: CL_DIV,
    caption: 'Clear',
    title: 'Clear Input',
    onClick: onClick
  });
};

var Close = function Close(_ref2) {
  var style = _ref2.style,
      onClick = _ref2.onClick;
  return _react2.default.createElement(_FlatButton2.default, {
    rootStyle: (0, _extends3.default)({}, S.BT_ROOT, style),
    clDiv: CL_DIV,
    caption: 'Close',
    title: 'Close Dialog',
    onClick: onClick
  });
};

var Primary = function Primary(_ref3) {
  var style = _ref3.style,
      caption = _ref3.caption,
      title = _ref3.title,
      onClick = _ref3.onClick;
  return _react2.default.createElement(_FlatButton2.default, {
    rootStyle: (0, _extends3.default)({}, S.BT_ROOT, style),
    clDiv: CL_DIV,
    caption: caption,
    title: title
    //isPrimary={true}
    , onClick: onClick
  });
};

exports.default = {
  Primary: Primary,
  Clear: Clear,
  Close: Close,
  Flat: _FlatButton2.default,
  Raised: _RaisedButton2.default
};
//# sourceMappingURL=Button.js.map
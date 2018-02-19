'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_FOR_BT = "bt__watch__bar";

var S = {
  ROOT: {
    marginBottom: '10px'
  },
  BT_LIST: {
    marginLeft: '20px'
  }
};

var EditBar = function EditBar(_ref) {
  var isShow = _ref.isShow,
      onClickGroup = _ref.onClickGroup,
      onClickList = _ref.onClickList;

  if (!isShow) {
    return null;
  }
  return _react2.default.createElement(
    'div',
    { style: S.ROOT },
    _react2.default.createElement(_Atoms2.default.CircleButton, {
      caption: 'GROUP',
      className: CLASS_FOR_BT,
      isWithoutDefault: true,
      onClick: onClickGroup
    }),
    _react2.default.createElement(_Atoms2.default.CircleButton, {
      caption: 'LIST',
      className: CLASS_FOR_BT,
      isWithoutDefault: true,
      style: S.BT_LIST,
      onClick: onClickList
    })
  );
};

exports.default = EditBar;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\watch-browser\EditBar.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_BT = "bt__watch__bar";

var S = {
  ROOT: {
    marginBottom: 10
  },
  BT_LIST: {
    marginLeft: 20
  }
};

var T = {
  G: "Click to open groups edit dialog",
  L: "Click to open lists edit dialog"
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
    _react2.default.createElement(_Atoms2.default.Button, {
      caption: 'GROUP',
      title: T.G,
      className: CL_BT,
      onClick: onClickGroup
    }),
    _react2.default.createElement(_Atoms2.default.Button, {
      caption: 'LIST',
      title: T.L,
      className: CL_BT,
      style: S.BT_LIST,
      onClick: onClickList
    })
  );
};

exports.default = EditBar;
//# sourceMappingURL=EditBar.js.map
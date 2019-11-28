'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    height: '60px',
    marginTop: '-10px'
  },
  SPAN: {
    position: 'relative',
    top: '16px',
    fontWeight: 'bold',
    paddingLeft: '16px'
  }
};

var InputRandom = function InputRandom(_ref) {
  var TS = _ref.TS,
      onEnter = _ref.onEnter;
  return _react2.default.createElement(
    'div',
    { style: S.ROOT },
    _react2.default.createElement(
      'span',
      { style: S.SPAN },
      'Random Word'
    ),
    _react2.default.createElement(_Atoms2.default.RaisedButton, {
      rootStyle: TS.BT.RAISED_ROOT,
      clDiv: TS.BT.CL_RAISED_DIV,
      caption: 'Load',
      isPrimary: true,
      onClick: onEnter
    })
  );
};

exports.default = InputRandom;
//# sourceMappingURL=InputRandom.js.map
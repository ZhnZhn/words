'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

var _Nyms = require('./Nyms');

var _Nyms2 = _interopRequireDefault(_Nyms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  FILL_OPEN: "#80c040",

  OC_CAPTION: {
    color: 'black'
  },
  OC_CHILDREN: {
    paddingLeft: '16px',
    paddingRight: '16px'
  }
};
//import OpenClose from '../zhn-atoms/OpenClose'


var WordNyms = function WordNyms(_ref) {
  var result = _ref.result;
  var typeOf = result.typeOf,
      hasTypes = result.hasTypes,
      partOf = result.partOf,
      hasParts = result.hasParts;

  if (!typeOf && !hasTypes && !partOf && !hasParts) {
    return null;
  }
  return _react2.default.createElement(
    _Atoms2.default.OpenClose,
    {
      isClose: true,
      caption: 'Nyms',
      fillOpen: S.FILL_OPEN,
      captionStyle: S.OC_CAPTION,
      childrenStyle: S.OC_CHILDREN
    },
    _react2.default.createElement(_Nyms2.default, {
      caption: 'hypernyms (more generic):',
      items: typeOf
    }),
    _react2.default.createElement(_Nyms2.default, {
      caption: 'hyponyms (more specific):',
      items: hasTypes
    }),
    _react2.default.createElement(_Nyms2.default, {
      caption: 'holonyms (partOf):',
      items: partOf
    }),
    _react2.default.createElement(_Nyms2.default, {
      caption: 'meronyms (hasParts):',
      items: hasParts
    })
  );
};

exports.default = WordNyms;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\items\WordNyms.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Atoms = require('../../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    lineHeight: 1.7
  },
  DER_ROOT: {
    display: 'inline-block'
  },
  DER_CAPTION: {
    color: '#0c7abf',
    paddingRight: '8px',
    fontWeight: 800
  },
  SYN_CAPTION: {
    color: 'green',
    paddingRight: '8px',
    fontWeight: 800
  },
  ITEM: {
    fontWeight: 400
  }
};

var WordSyn = function WordSyn(_ref) {
  var result = _ref.result;
  var derivation = result.derivation,
      examples = result.examples,
      synonyms = result.synonyms,
      similarTo = result.similarTo;

  return _react2.default.createElement(
    'div',
    { style: S.ROOT },
    _react2.default.createElement(_Atoms2.default.ListSpan, {
      caption: 'derivation:',
      rootStyle: S.DER_ROOT,
      captionStyle: S.DER_CAPTION,
      items: derivation
    }),
    _react2.default.createElement(_Atoms2.default.ListDiv, {
      itemStyle: S.ITEM,
      items: examples
    }),
    _react2.default.createElement(_Atoms2.default.ListSpan, {
      caption: 'synonyms:',
      captionStyle: S.SYN_CAPTION,
      items: synonyms
    }),
    _react2.default.createElement(_Atoms2.default.ListSpan, {
      caption: 'similarTo:',
      captionStyle: S.SYN_CAPTION,
      items: similarTo
    })
  );
};

exports.default = WordSyn;
//# sourceMappingURL=WordSyn.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WordOf = require('./WordOf');

var _WordOf2 = _interopRequireDefault(_WordOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WordNyms = function WordNyms(_ref) {
  var result = _ref.result;

  var _ref2 = result || {},
      typeOf = _ref2.typeOf,
      hasTypes = _ref2.hasTypes,
      partOf = _ref2.partOf,
      hasParts = _ref2.hasParts,
      inCategory = _ref2.inCategory,
      hasCategories = _ref2.hasCategories;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_WordOf2.default
    //hypernyms

    //hyponyms
    , { caption: 'typeOf (more generic)',
      items: typeOf
    }),
    _react2.default.createElement(_WordOf2.default, { caption: 'hasTypes (more specific)',
      items: hasTypes
    }),
    _react2.default.createElement(_WordOf2.default, {
      caption: 'partOf (holonyms)',
      items: partOf
    }),
    _react2.default.createElement(_WordOf2.default, {
      caption: 'hasParts (meronyms)',
      items: hasParts
    }),
    _react2.default.createElement(_WordOf2.default, {
      caption: 'inCategory',
      items: inCategory,
      isCount: true
    }),
    _react2.default.createElement(_WordOf2.default, {
      caption: 'hasCategory',
      items: hasCategories,
      isCount: true
    })
  );
};

exports.default = WordNyms;
//# sourceMappingURL=WordNyms.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _WordOf = _interopRequireDefault(require("./WordOf"));

var WordNyms = function WordNyms(_ref) {
  var result = _ref.result;

  var _ref2 = result || {},
      typeOf = _ref2.typeOf,
      hasTypes = _ref2.hasTypes,
      partOf = _ref2.partOf,
      hasParts = _ref2.hasParts,
      inCategory = _ref2.inCategory,
      hasCategories = _ref2.hasCategories;

  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_WordOf["default"] //hypernyms
  , {
    caption: "typeOf (more generic)",
    items: typeOf
  }), _react["default"].createElement(_WordOf["default"] //hyponyms
  , {
    caption: "hasTypes (more specific)",
    items: hasTypes
  }), _react["default"].createElement(_WordOf["default"], {
    caption: "partOf (holonyms)",
    items: partOf
  }), _react["default"].createElement(_WordOf["default"], {
    caption: "hasParts (meronyms)",
    items: hasParts
  }), _react["default"].createElement(_WordOf["default"], {
    caption: "inCategory",
    items: inCategory,
    isCount: true
  }), _react["default"].createElement(_WordOf["default"], {
    caption: "hasCategory",
    items: hasCategories,
    isCount: true
  }));
};

var _default = WordNyms;
exports["default"] = _default;
//# sourceMappingURL=WordNyms.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _WordOf = _interopRequireDefault(require("./WordOf"));

var _jsxRuntime = require("react/jsx-runtime");

var WordNyms = function WordNyms(_ref) {
  var result = _ref.result;

  var _ref2 = result || {},
      typeOf = _ref2.typeOf,
      hasTypes = _ref2.hasTypes,
      partOf = _ref2.partOf,
      hasParts = _ref2.hasParts,
      inCategory = _ref2.inCategory,
      hasCategories = _ref2.hasCategories;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WordOf["default"] //hypernyms
    , {
      caption: "typeOf (more generic)",
      items: typeOf
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordOf["default"] //hyponyms
    , {
      caption: "hasTypes (more specific)",
      items: hasTypes
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordOf["default"], {
      caption: "partOf (holonyms)",
      items: partOf
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordOf["default"], {
      caption: "hasParts (meronyms)",
      items: hasParts
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordOf["default"], {
      caption: "inCategory",
      items: inCategory,
      isCount: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordOf["default"], {
      caption: "hasCategory",
      items: hasCategories,
      isCount: true
    })]
  });
};

var _default = WordNyms;
exports["default"] = _default;
//# sourceMappingURL=WordNyms.js.map
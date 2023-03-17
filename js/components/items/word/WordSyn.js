"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _Comp = _interopRequireDefault(require("../../Comp"));
var _jsxRuntime = require("react/jsx-runtime");
var S_ROOT = {
    lineHeight: 1.7
  },
  S_DERIVATION_ROOT = {
    display: 'inline-block'
  },
  S_DERIVATION_CAPTION = {
    color: '#0c7abf',
    paddingRight: 8,
    fontWeight: 800
  },
  S_SYNONYMS_CAPTION = {
    color: 'green',
    paddingRight: 8,
    fontWeight: 800
  },
  S_ITEM = {
    fontWeight: 400
  };
var WordSyn = function WordSyn(_ref) {
  var result = _ref.result;
  var _ref2 = result || {},
    derivation = _ref2.derivation,
    examples = _ref2.examples,
    synonyms = _ref2.synonyms,
    similarTo = _ref2.similarTo;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListSpan, {
      caption: "derivation:",
      rootStyle: S_DERIVATION_ROOT,
      captionStyle: S_DERIVATION_CAPTION,
      items: derivation
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListDiv, {
      itemStyle: S_ITEM,
      items: examples
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListSpan, {
      caption: "synonyms:",
      captionStyle: S_SYNONYMS_CAPTION,
      items: synonyms
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListSpan, {
      caption: "similarTo:",
      captionStyle: S_SYNONYMS_CAPTION,
      items: similarTo
    })]
  });
};
var _default = WordSyn;
exports["default"] = _default;
//# sourceMappingURL=WordSyn.js.map
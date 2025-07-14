"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ListSpan = _interopRequireDefault(require("../../zhn/ListSpan"));
var _ListDiv = _interopRequireDefault(require("../../zhn/ListDiv"));
var _jsxRuntime = require("preact/jsx-runtime");
const _S_CAPTION = {
    paddingRight: 8,
    fontWeight: 800
  },
  S_DERIVATION_CAPTION = {
    ..._S_CAPTION,
    color: '#0c7abf'
  },
  S_SYNONYMS_CAPTION = {
    ..._S_CAPTION,
    color: 'green'
  },
  S_ITEM = {
    fontWeight: 400
  };
const WordSyn = _ref => {
  let {
    style,
    result
  } = _ref;
  const {
    derivation,
    examples,
    synonyms,
    similarTo
  } = result || {};
  return (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)(_ListSpan.default, {
      caption: "derivation:",
      captionStyle: S_DERIVATION_CAPTION,
      items: derivation
    }), (0, _jsxRuntime.jsx)(_ListDiv.default, {
      itemStyle: S_ITEM,
      items: examples
    }), (0, _jsxRuntime.jsx)(_ListSpan.default, {
      caption: "synonyms:",
      captionStyle: S_SYNONYMS_CAPTION,
      items: synonyms
    }), (0, _jsxRuntime.jsx)(_ListSpan.default, {
      caption: "similarTo:",
      captionStyle: S_SYNONYMS_CAPTION,
      items: similarTo
    })]
  });
};
var _default = exports.default = WordSyn;
//# sourceMappingURL=WordSyn.js.map
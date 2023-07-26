"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ListSpan = _interopRequireDefault(require("../../zhn-atoms/ListSpan"));
var _ListDiv = _interopRequireDefault(require("../../zhn-atoms/ListDiv"));
var _jsxRuntime = require("react/jsx-runtime");
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListSpan.default, {
      caption: "derivation:",
      captionStyle: S_DERIVATION_CAPTION,
      items: derivation
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListDiv.default, {
      itemStyle: S_ITEM,
      items: examples
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListSpan.default, {
      caption: "synonyms:",
      captionStyle: S_SYNONYMS_CAPTION,
      items: synonyms
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListSpan.default, {
      caption: "similarTo:",
      captionStyle: S_SYNONYMS_CAPTION,
      items: similarTo
    })]
  });
};
var _default = WordSyn;
exports.default = _default;
//# sourceMappingURL=WordSyn.js.map
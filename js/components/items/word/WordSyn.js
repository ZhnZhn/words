"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _Comp = _interopRequireDefault(require("../../Comp"));
var _jsxRuntime = require("react/jsx-runtime");
var _S_CAPTION = {
    paddingRight: 8,
    fontWeight: 800
  },
  S_DERIVATION_CAPTION = (0, _extends2["default"])({}, _S_CAPTION, {
    color: '#0c7abf'
  }),
  S_SYNONYMS_CAPTION = (0, _extends2["default"])({}, _S_CAPTION, {
    color: 'green'
  }),
  S_ITEM = {
    fontWeight: 400
  };
var WordSyn = function WordSyn(_ref) {
  var style = _ref.style,
    result = _ref.result;
  var _ref2 = result || {},
    derivation = _ref2.derivation,
    examples = _ref2.examples,
    synonyms = _ref2.synonyms,
    similarTo = _ref2.similarTo;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListSpan, {
      caption: "derivation:",
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
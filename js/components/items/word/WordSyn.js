"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _Comp = _interopRequireDefault(require("../../Comp"));

var S = {
  ROOT: {
    lineHeight: 1.7
  },
  DER_ROOT: {
    display: 'inline-block'
  },
  DER_CAPTION: {
    color: '#0c7abf',
    paddingRight: 8,
    fontWeight: 800
  },
  SYN_CAPTION: {
    color: 'green',
    paddingRight: 8,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListSpan, {
      caption: "derivation:",
      rootStyle: S.DER_ROOT,
      captionStyle: S.DER_CAPTION,
      items: derivation
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListDiv, {
      itemStyle: S.ITEM,
      items: examples
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListSpan, {
      caption: "synonyms:",
      captionStyle: S.SYN_CAPTION,
      items: synonyms
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListSpan, {
      caption: "similarTo:",
      captionStyle: S.SYN_CAPTION,
      items: similarTo
    })]
  });
};

var _default = WordSyn;
exports["default"] = _default;
//# sourceMappingURL=WordSyn.js.map
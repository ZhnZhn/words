"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _Comp = _interopRequireDefault(require("../../Comp"));
var _WordSyn = _interopRequireDefault(require("./WordSyn"));
var _WordNyms = _interopRequireDefault(require("./WordNyms"));
var _jsxRuntime = require("react/jsx-runtime");
var S_FILL_OPEN = "black",
  S_OC_CAPTION = {
    color: 'black'
  },
  S_OC_AFTER = {
    color: '#0c7abf',
    fontWeight: 800
  },
  S_OC_CHILDREN = {
    padding: '0 16px'
  };
var Span = function Span(_ref) {
  var style = _ref.style,
    text = _ref.text;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    style: style,
    children: ["\xA0", text]
  });
};
var DefenitionList = function DefenitionList(_ref2) {
  var style = _ref2.style,
    defItems = _ref2.defItems;
  return (defItems || []).map(function (defItem, index) {
    var _ref3 = defItem || {},
      definition = _ref3.definition,
      partOfSpeech = _ref3.partOfSpeech;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].OpenClose, {
      isClose: true,
      style: style,
      caption: definition,
      fillOpen: S_FILL_OPEN,
      captionStyle: S_OC_CAPTION,
      afterCaptionComp: /*#__PURE__*/(0, _jsxRuntime.jsx)(Span, {
        style: S_OC_AFTER,
        text: partOfSpeech
      }),
      childrenStyle: S_OC_CHILDREN,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WordSyn["default"], {
        result: defItem
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordNyms["default"], {
        result: defItem
      })]
    }, index);
  });
};
var WordDef = function WordDef(_ref4) {
  var isShow = _ref4.isShow,
    style = _ref4.style,
    config = _ref4.config;
  var _ref5 = config || {},
    results = _ref5.results;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ShowHide, {
    style: style,
    isShow: isShow,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DefenitionList, {
      style: style,
      defItems: results
    })
  });
};
var _default = WordDef;
exports["default"] = _default;
//# sourceMappingURL=WordDef.js.map
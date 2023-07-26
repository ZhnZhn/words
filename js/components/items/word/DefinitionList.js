"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _OpenClose = _interopRequireDefault(require("../../zhn-atoms/OpenClose"));
var _SafeToken = _interopRequireDefault(require("../../zhn-atoms/SafeToken"));
var _WordSyn = _interopRequireDefault(require("./WordSyn"));
var _WordNyms = _interopRequireDefault(require("./WordNyms"));
var _jsxRuntime = require("react/jsx-runtime");
const S_FILL_OPEN = "black",
  S_OC_CAPTION = {
    color: 'black'
  },
  S_OC_AFTER = {
    color: '#0c7abf',
    marginLeft: 6,
    fontWeight: 800
  },
  S_OC_CHILDREN = {
    padding: '0 16px'
  },
  S_W_SYN = {
    lineHeight: 1.7,
    marginLeft: -6
  };
const DefinitionList = _ref => {
  let {
    style,
    defItems
  } = _ref;
  return (defItems || []).map((defItem, index) => {
    const {
      definition,
      partOfSpeech
    } = defItem || {};
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_OpenClose.default, {
      isClose: true,
      style: style,
      caption: definition,
      fillOpen: S_FILL_OPEN,
      captionStyle: S_OC_CAPTION,
      afterCaptionComp: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SafeToken.default, {
        style: S_OC_AFTER,
        token: partOfSpeech
      }),
      childrenStyle: S_OC_CHILDREN,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WordSyn.default, {
        style: S_W_SYN,
        result: defItem
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordNyms.default, {
        result: defItem
      })]
    }, index);
  });
};
var _default = DefinitionList;
exports.default = _default;
//# sourceMappingURL=DefinitionList.js.map
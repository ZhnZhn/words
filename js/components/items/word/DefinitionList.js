"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../../utils/isTypeFn");
var _uiApi = require("../../uiApi");
var _OpenClose = _interopRequireDefault(require("../../zhn/OpenClose"));
var _WordSyn = _interopRequireDefault(require("./WordSyn"));
var _WordNyms = _interopRequireDefault(require("./WordNyms"));
var _jsxRuntime = require("preact/jsx-runtime");
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
  return (0, _uiApi.safeMap)(defItems, defItem => {
    const {
      definition,
      partOfSpeech
    } = defItem || {};
    return (0, _jsxRuntime.jsxs)(_OpenClose.default, {
      isClose: true,
      style: style,
      caption: definition,
      fillOpen: S_FILL_OPEN,
      captionStyle: S_OC_CAPTION,
      afterCaptionComp: (0, _isTypeFn.isStrNotBlank)(partOfSpeech) ? (0, _jsxRuntime.jsx)("span", {
        style: S_OC_AFTER,
        children: partOfSpeech
      }) : null,
      childrenStyle: S_OC_CHILDREN,
      children: [(0, _jsxRuntime.jsx)(_WordSyn.default, {
        style: S_W_SYN,
        result: defItem
      }), (0, _jsxRuntime.jsx)(_WordNyms.default, {
        result: defItem
      })]
    }, definition);
  });
};
var _default = exports.default = DefinitionList;
//# sourceMappingURL=DefinitionList.js.map
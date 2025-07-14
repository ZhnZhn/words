"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ShowHide = _interopRequireDefault(require("../../zhn/ShowHide"));
var _DefinitionList = _interopRequireDefault(require("./DefinitionList"));
var _jsxRuntime = require("preact/jsx-runtime");
const WordDef = _ref => {
  let {
    isShow,
    style,
    config
  } = _ref;
  return (0, _jsxRuntime.jsx)(_ShowHide.default, {
    isShow: isShow,
    children: (0, _jsxRuntime.jsx)(_DefinitionList.default, {
      style: style,
      defItems: (config || {}).results
    })
  });
};
var _default = exports.default = WordDef;
//# sourceMappingURL=WordDef.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ShowHide = _interopRequireDefault(require("../../zhn-atoms/ShowHide"));
var _DefinitionList = _interopRequireDefault(require("./DefinitionList"));
var _jsxRuntime = require("react/jsx-runtime");
const WordDef = _ref => {
  let {
    isShow,
    style,
    config
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
    isShow: isShow,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefinitionList.default, {
      style: style,
      defItems: (config || {}).results
    })
  });
};
var _default = WordDef;
exports.default = _default;
//# sourceMappingURL=WordDef.js.map
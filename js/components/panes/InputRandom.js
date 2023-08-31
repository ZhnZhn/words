"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));
var _CL = require("../styles/CL");
var _jsxRuntime = require("preact/jsx-runtime");
const S_DIV = {
    height: 60,
    paddingTop: 8
  },
  S_SPAN = {
    paddingLeft: 16,
    fontWeight: 'bold'
  },
  S_BT = {
    marginLeft: 8
  };
const InputRandom = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    onEnter
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_DIV,
    children: [(0, _jsxRuntime.jsx)("span", {
      style: S_SPAN,
      children: "Random Word"
    }), (0, _jsxRuntime.jsx)(_Atoms.default.FlatButton, {
      rootStyle: S_BT,
      clDiv: _CL.CL_BT_FLAT_DIV,
      caption: "Load",
      onClick: onEnter
    })]
  });
});
var _default = InputRandom;
exports.default = _default;
//# sourceMappingURL=InputRandom.js.map
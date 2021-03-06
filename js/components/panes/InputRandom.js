"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  ROOT: {
    height: 60,
    paddingTop: 8
  },
  SPAN: {
    paddingLeft: 16,
    fontWeight: 'bold'
  },
  BT: {
    marginLeft: 8
  }
};
var InputRandom = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var TS = _ref.TS,
      onEnter = _ref.onEnter;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S.SPAN,
      children: "Random Word"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].FlatButton, {
      rootStyle: (0, _extends2["default"])({}, TS.BT.FLAT, S.BT),
      clDiv: TS.BT.CL_FLAT_DIV,
      caption: "Load",
      onClick: onEnter
    })]
  });
});
var _default = InputRandom;
exports["default"] = _default;
//# sourceMappingURL=InputRandom.js.map
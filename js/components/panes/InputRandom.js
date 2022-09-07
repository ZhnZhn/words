"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

var S_DIV = {
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

var InputRandom = function InputRandom(_ref) {
  var TS = _ref.TS,
      onEnter = _ref.onEnter;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_DIV,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_SPAN,
      children: "Random Word"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].FlatButton, {
      rootStyle: (0, _extends2["default"])({}, TS.BT.FLAT, S_BT),
      clDiv: TS.BT.CL_FLAT_DIV,
      caption: "Load",
      onClick: onEnter
    })]
  });
};

var _default = InputRandom;
exports["default"] = _default;
//# sourceMappingURL=InputRandom.js.map
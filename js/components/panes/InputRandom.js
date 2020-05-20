"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

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

var InputRandom = function InputRandom(_ref) {
  var TS = _ref.TS,
      onEnter = _ref.onEnter;
  return _react["default"].createElement("div", {
    style: S.ROOT
  }, _react["default"].createElement("span", {
    style: S.SPAN
  }, "Random Word"), _react["default"].createElement(_Atoms["default"].FlatButton, {
    rootStyle: (0, _extends2["default"])({}, TS.BT.FLAT, {}, S.BT),
    clDiv: TS.BT.CL_FLAT_DIV,
    caption: "Load",
    onClick: onEnter
  }));
};

var _default = InputRandom;
exports["default"] = _default;
//# sourceMappingURL=InputRandom.js.map
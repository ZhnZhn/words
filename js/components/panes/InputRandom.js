"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var S = {
  ROOT: {
    height: 60,
    marginTop: -10
  },
  SPAN: {
    position: 'relative',
    top: 16,
    paddingLeft: 16,
    fontWeight: 'bold'
  }
};

var InputRandom = function InputRandom(_ref) {
  var TS = _ref.TS,
      onEnter = _ref.onEnter;
  return _react["default"].createElement("div", {
    style: S.ROOT
  }, _react["default"].createElement("span", {
    style: S.SPAN
  }, "Random Word"), _react["default"].createElement(_Atoms["default"].RaisedButton, {
    rootStyle: TS.BT.RAISED_ROOT,
    clDiv: TS.BT.CL_RAISED_DIV,
    caption: "Load",
    isPrimary: true,
    onClick: onEnter
  }));
};

var _default = InputRandom;
exports["default"] = _default;
//# sourceMappingURL=InputRandom.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var CL_BT = "bt__watch__bar";
var S = {
  ROOT: {
    marginBottom: 10
  },
  BT_LIST: {
    marginLeft: 20
  }
};
var T = {
  G: "Click to open groups edit dialog",
  L: "Click to open lists edit dialog"
};

var EditBar = function EditBar(_ref) {
  var isShow = _ref.isShow,
      onClickGroup = _ref.onClickGroup,
      onClickList = _ref.onClickList;

  if (!isShow) {
    return null;
  }

  return _react["default"].createElement("div", {
    style: S.ROOT
  }, _react["default"].createElement(_Atoms["default"].Button, {
    caption: "GROUP",
    title: T.G,
    className: CL_BT,
    onClick: onClickGroup
  }), _react["default"].createElement(_Atoms["default"].Button, {
    caption: "LIST",
    title: T.L,
    className: CL_BT,
    style: S.BT_LIST,
    onClick: onClickList
  }));
};

var _default = EditBar;
exports["default"] = _default;
//# sourceMappingURL=EditBar.js.map
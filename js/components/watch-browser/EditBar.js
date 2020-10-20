"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

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

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Button, {
      caption: "GROUP",
      title: T.G,
      className: CL_BT,
      onClick: onClickGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Button, {
      caption: "LIST",
      title: T.L,
      className: CL_BT,
      style: S.BT_LIST,
      onClick: onClickList
    })]
  });
};

var _default = EditBar;
exports["default"] = _default;
//# sourceMappingURL=EditBar.js.map
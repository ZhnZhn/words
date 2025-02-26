"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Button = _interopRequireDefault(require("../zhn-atoms/button/Button"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT = "bt__watch__bar",
  S_MB_10 = {
    marginBottom: 10
  },
  S_ML_20 = {
    marginLeft: 20
  },
  BT_GROUP_TITLE = "Click to open groups edit dialog",
  BT_LIST_TITLE = "Click to open lists edit dialog";
const EditBar = _ref => {
  let {
    isShow,
    onClickGroup,
    onClickList
  } = _ref;
  return isShow ? (0, _jsxRuntime.jsxs)("div", {
    style: S_MB_10,
    children: [(0, _jsxRuntime.jsx)(_Button.default, {
      caption: "GROUP",
      title: BT_GROUP_TITLE,
      className: CL_BT,
      onClick: onClickGroup
    }), (0, _jsxRuntime.jsx)(_Button.default, {
      caption: "LIST",
      title: BT_LIST_TITLE,
      className: CL_BT,
      style: S_ML_20,
      onClick: onClickList
    })]
  }) : null;
};
var _default = exports.default = EditBar;
//# sourceMappingURL=EditBar.js.map
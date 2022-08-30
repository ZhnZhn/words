"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var S_DIALOG = {
  left: 'calc(50vw - 154px)'
},
    S_CAPTION = {
  paddingTop: 8,
  paddingLeft: 8,
  color: '#a487d4',
  fontSize: '18px',
  fontWeight: 'bold'
},
    S_ROW = {
  display: 'flex',
  alignItems: 'center',
  margin: '5px 5px'
},
    S_DESCR = {
  color: 'grey',
  width: 300,
  paddingLeft: 10,
  lineHeight: 1.4,
  whiteSpace: 'pre',
  fontWeight: 'bold'
};
var MsgDialog = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
      data = _ref.data,
      onClose = _ref.onClose;
  var TS = (0, _useTheme["default"])(_Dialog["default"]),
      caption = data.caption,
      descr = data.descr;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].ModalDialog, {
    STYLE: TS.BT,
    style: (0, _extends2["default"])({}, TS.R_DIALOG, S_DIALOG),
    captionStyle: TS.BROWSER_CAPTION,
    caption: "Message",
    isShow: isShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_ROW,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: S_CAPTION,
        children: caption
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_ROW,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: S_DESCR,
        children: descr
      })
    })]
  });
});
var _default = MsgDialog;
exports["default"] = _default;
//# sourceMappingURL=MsgDialog.js.map
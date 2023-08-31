"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_DIALOG = {
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
const MsgDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    data,
    onClose
  } = _ref;
  const {
    caption,
    descr
  } = data;
  return (0, _jsxRuntime.jsxs)(_ModalDialog.default, {
    style: S_DIALOG,
    caption: "Message",
    isShow: isShow,
    onClose: onClose,
    children: [(0, _jsxRuntime.jsx)("div", {
      style: S_ROW,
      children: (0, _jsxRuntime.jsx)("p", {
        style: S_CAPTION,
        children: caption
      })
    }), (0, _jsxRuntime.jsx)("div", {
      style: S_ROW,
      children: (0, _jsxRuntime.jsx)("p", {
        style: S_DESCR,
        children: descr
      })
    })]
  });
});
var _default = MsgDialog;
exports.default = _default;
//# sourceMappingURL=MsgDialog.js.map
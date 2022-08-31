"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var S_DIALOG = {
  left: 'calc(50vw - 152px)'
},
    S_CAPTION = {
  color: '#f44336',
  fontWeight: 'bold'
},
    S_MSG = {
  color: 'black',
  width: 300,
  paddingTop: 16,
  paddingLeft: 10,
  fontWeight: 'bold',
  lineHeight: 1.4,
  whiteSpace: 'pre-line'
};

var _toMsg = function _toMsg(data) {
  if (data instanceof TypeError) {
    return data.message;
  }

  var status = data.status,
      url = data.url,
      msg = data.msg;

  if (status) {
    return url + "\ncode:" + status + "\nNetwork exception";
  } else if (msg) {
    return msg;
  }

  return 'Exception Message';
};

var DF_DATA = {};
var AlertDialog = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? DF_DATA : _ref$data,
      onClose = _ref.onClose;

  var TS = (0, _useTheme["default"])(_Dialog["default"]),
      _msg = _toMsg(data);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ModalDialog, {
    STYLE: TS.BT,
    style: (0, _extends2["default"])({}, TS.R_DIALOG, S_DIALOG),
    captionStyle: (0, _extends2["default"])({}, TS.BROWSER_CAPTION, S_CAPTION),
    caption: "Exception Message",
    isShow: isShow,
    isClosePrimary: true,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: S_MSG,
        children: _msg
      })
    })
  });
});
/*
AlertDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    status: PropTypes.string,
    url: PropTypes.string,
    msg: PropTypes.string
  }),
  onClose: PropTypes.func
}
*/

var _default = AlertDialog;
exports["default"] = _default;
//# sourceMappingURL=AlertDialog.js.map
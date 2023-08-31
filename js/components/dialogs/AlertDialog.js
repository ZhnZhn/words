"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const S_DIALOG = {
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
const _toMsg = data => {
  if (data instanceof TypeError) {
    return data.message;
  }
  const {
    status,
    url,
    msg
  } = data;
  if (status) {
    return url + "\ncode:" + status + "\nNetwork exception";
  } else if (msg) {
    return msg;
  }
  return 'Exception Message';
};
const DF_DATA = {};
const AlertDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    data = DF_DATA,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsx)(_ModalDialog.default, {
    style: S_DIALOG,
    captionStyle: S_CAPTION,
    caption: "Exception Message",
    isShow: isShow,
    isClosePrimary: true,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)("p", {
        style: S_MSG,
        children: _toMsg(data)
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
exports.default = _default;
//# sourceMappingURL=AlertDialog.js.map
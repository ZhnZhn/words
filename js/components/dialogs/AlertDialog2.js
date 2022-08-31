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

//import PropTypes from "prop-types";
var CL_ELL = 'ellipsis',
    S_DIALOG = {
  left: 'calc(50vw - 184px)'
},
    S_CAPTION = {
  color: '#f44336',
  fontWeight: 'bold'
},
    S_ROW = {
  display: 'flex',
  alignItems: 'center',
  marginRight: 5,
  marginTop: 5,
  marginLeft: 5,
  marginBottom: 5
},
    S_TITLE = {
  display: 'inline-block',
  color: '#f44336',
  width: 360,
  paddingLeft: 10,
  lineHeight: 2,
  fontSize: '18px',
  fontWeight: 'bold'
},
    S_ITEM_ID = {
  color: '#a487d4',
  width: 120,
  fontWeight: 'bold',
  verticalAlign: 'bottom'
},
    S_DESCR = {
  color: 'gray',
  width: 360,
  paddingLeft: 10,
  paddingRight: 8,
  fontWeight: 'bold',
  lineHeight: 1.4,
  whiteSpace: 'pre-line',
  wordWrap: 'break-word'
};
var DF_DATA = {};
var AlertDialog2 = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? DF_DATA : _ref$data,
      onClose = _ref.onClose;

  var TS = (0, _useTheme["default"])(_Dialog["default"]),
      _data$caption = data.caption,
      caption = _data$caption === void 0 ? 'Item' : _data$caption,
      _data$itemId = data.itemId,
      itemId = _data$itemId === void 0 ? '' : _data$itemId,
      descr = data.descr,
      _caption = caption + ': ';

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].ModalDialog, {
    STYLE: TS.BT,
    style: (0, _extends2["default"])({}, TS.R_DIALOG, S_DIALOG),
    caption: "Exception",
    captionStyle: (0, _extends2["default"])({}, TS.BROWSER_CAPTION, S_CAPTION),
    isShow: isShow,
    isClosePrimary: true,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_ROW,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        style: S_TITLE,
        children: [_caption, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: CL_ELL,
          style: S_ITEM_ID,
          title: itemId,
          children: itemId
        })]
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
/*
AlertDialog2.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    caption: PropTypes.string,
    itemId: PropTypes.string,
    descr: PropTypes.string
  }),
  onClose: PropTypes.func
}
*/

var _default = AlertDialog2;
exports["default"] = _default;
//# sourceMappingURL=AlertDialog2.js.map
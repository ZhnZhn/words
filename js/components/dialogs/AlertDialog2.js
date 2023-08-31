"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const CL_ELL = 'ellipsis',
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
const DF_DATA = {};
const AlertDialog2 = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    data = DF_DATA,
    onClose
  } = _ref;
  const {
      caption = 'Item',
      itemId = '',
      descr
    } = data,
    _caption = caption + ': ';
  return (0, _jsxRuntime.jsxs)(_ModalDialog.default, {
    style: S_DIALOG,
    caption: "Exception",
    captionStyle: S_CAPTION,
    isShow: isShow,
    isClosePrimary: true,
    onClose: onClose,
    children: [(0, _jsxRuntime.jsx)("div", {
      style: S_ROW,
      children: (0, _jsxRuntime.jsxs)("span", {
        style: S_TITLE,
        children: [_caption, (0, _jsxRuntime.jsx)("span", {
          className: CL_ELL,
          style: S_ITEM_ID,
          title: itemId,
          children: itemId
        })]
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
exports.default = _default;
//# sourceMappingURL=AlertDialog2.js.map
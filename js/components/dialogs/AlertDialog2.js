"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

//import PropTypes from "prop-types";
var CL = {
  ELL: 'ellipsis'
};
var S = {
  DIALOG: {
    left: 'calc(50vw - 184px)'
  },
  CAPTION: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  ROW: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5
  },
  TITLE: {
    display: 'inline-block',
    color: '#f44336',
    width: 360,
    paddingLeft: 10,
    lineHeight: 2,
    fontSize: '18px',
    fontWeight: 'bold'
  },
  ITEM_ID: {
    color: '#a487d4',
    width: 120,
    fontWeight: 'bold',
    verticalAlign: 'bottom'
  },
  DESCR: {
    color: 'gray',
    width: 360,
    paddingLeft: 10,
    paddingRight: 8,
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre-line',
    wordWrap: 'break-word'
  }
};

var AlertDialog2 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(AlertDialog2, _Component);

  function AlertDialog2() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AlertDialog2.prototype;

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      caption: PropTypes.string,
      itemId: PropTypes.string,
      descr: PropTypes.string
    }),
    onClose: PropTypes.func
  }
  */
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        theme = _this$props.theme,
        isShow = _this$props.isShow,
        data = _this$props.data,
        onClose = _this$props.onClose,
        TS = theme.createStyle(_Dialog["default"]),
        _data$caption = data.caption,
        caption = _data$caption === void 0 ? 'Item' : _data$caption,
        _data$itemId = data.itemId,
        itemId = _data$itemId === void 0 ? '' : _data$itemId,
        descr = data.descr,
        _caption = caption + ': ';

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].ModalDialog, {
      STYLE: TS.BT,
      style: (0, _extends2["default"])({}, TS.R_DIALOG, S.DIALOG),
      caption: "Exception",
      captionStyle: (0, _extends2["default"])({}, TS.BROWSER_CAPTION, S.CAPTION),
      isShow: isShow,
      isClosePrimary: true,
      onClose: onClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S.ROW,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          style: S.TITLE,
          children: [_caption, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: CL.ELL,
            style: S.ITEM_ID,
            title: itemId,
            children: itemId
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S.ROW,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S.DESCR,
          children: descr
        })
      })]
    });
  };

  return AlertDialog2;
}(_react.Component);

AlertDialog2.defaultProps = {
  data: {}
};

var _default = (0, _withTheme["default"])(AlertDialog2);

exports["default"] = _default;
//# sourceMappingURL=AlertDialog2.js.map
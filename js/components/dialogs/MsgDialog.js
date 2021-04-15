"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  DIALOG: {
    left: 'calc(50vw - 154px)'
  },
  CAPTION: {
    paddingTop: 8,
    paddingLeft: 8,
    color: 'rgba(164, 135, 212, 1)',
    fontSize: '18px',
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
  DESCR: {
    color: 'gray',
    width: 300,
    paddingLeft: 10,
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre'
  }
};

var MsgDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(MsgDialog, _Component);

  function MsgDialog() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MsgDialog.prototype;

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
        caption = data.caption,
        descr = data.descr;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].ModalDialog, {
      STYLE: TS.BT,
      style: (0, _extends2["default"])({}, TS.R_DIALOG, S.DIALOG),
      captionStyle: TS.BROWSER_CAPTION,
      caption: "Message",
      isShow: isShow,
      onClose: onClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S.ROW,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S.CAPTION,
          children: caption
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

  return MsgDialog;
}(_react.Component);

var _default = (0, _withTheme["default"])(MsgDialog);

exports["default"] = _default;
//# sourceMappingURL=MsgDialog.js.map
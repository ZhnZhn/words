"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

//import PropTypes from 'prop-types'
var S = {
  DIALOG: {
    left: 'calc(50vw - 152px)'
  },
  CAPTION: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  MSG: {
    color: 'black',
    width: 300,
    paddingTop: 16,
    paddingLeft: 10,
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre-line'
  }
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

var AlertDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(AlertDialog, _Component);

  function AlertDialog() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AlertDialog.prototype;

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      status: PropTypes.string,
      url: PropTypes.string,
      msg: PropTypes.string
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
        isShow = _this$props.isShow,
        data = _this$props.data,
        theme = _this$props.theme,
        onClose = _this$props.onClose,
        TS = theme.createStyle(_Dialog["default"]),
        _msg = _toMsg(data);

    return /*#__PURE__*/_react["default"].createElement(_Comp["default"].ModalDialog, {
      STYLE: TS.BT,
      style: (0, _extends2["default"])({}, TS.R_DIALOG, S.DIALOG),
      captionStyle: (0, _extends2["default"])({}, TS.BROWSER_CAPTION, S.CAPTION) //styleButton={TS.BT}
      ,
      caption: "Exception Message",
      isShow: isShow,
      isClosePrimary: true,
      onClose: onClose
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
      style: S.MSG
    }, _msg)));
  };

  return AlertDialog;
}(_react.Component);

AlertDialog.defaultProps = {
  data: {}
};

var _default = (0, _withTheme["default"])(AlertDialog);

exports["default"] = _default;
//# sourceMappingURL=AlertDialog.js.map
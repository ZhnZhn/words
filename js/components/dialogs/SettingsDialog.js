"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _ComponentActions = _interopRequireDefault(require("../../flux/actions/ComponentActions"));

var _SettingActions = _interopRequireDefault(require("../../flux/actions/SettingActions"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _CardApiKey = _interopRequireDefault(require("./CardApiKey"));

var _CardUi = _interopRequireDefault(require("./CardUi"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  MODAL: {
    position: 'static',
    zIndex: 10,
    width: 350,
    height: 290,
    margin: '70px auto 0px',
    border: 'solid 2px #1b2836',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px'
  },
  TAB_PANE: {
    width: "100%"
  },
  CARD_ROOT: {
    position: 'relative',
    height: 200
  },
  CARD_BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  }
};

var SettingsDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(SettingsDialog, _Component);

  function SettingsDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hSelectTheme = function (item) {
      var theme = _this.props.theme;

      if (item && theme.getThemeName() !== item.value) {
        _ComponentActions["default"].changeTheme(item.value);
      }
    };

    _this._hSetAndClose = function () {
      var onClose = _this.props.onClose;

      _this._setKey1(_this.iComp1.getValue());

      onClose();
    };

    _this._ref1 = function (n) {
      return _this.iComp1 = n;
    };

    var data = props.data;
    _this._setKey1 = data.key1;
    return _this;
  }

  var _proto = SettingsDialog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        theme = _this$props.theme,
        isShow = _this$props.isShow,
        onClose = _this$props.onClose,
        TS = theme.createStyle(_Dialog["default"]);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ModalDialog, {
      className: "",
      STYLE: TS.BT,
      style: (0, _extends2["default"])({}, S.MODAL, TS.R_DIALOG),
      caption: "User Settings",
      captionStyle: TS.BROWSER_CAPTION,
      isShow: isShow,
      isWithButton: false,
      onClose: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].TabPane, {
        style: S.TAB_PANE,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Tab, {
          title: "API Key",
          style: TS.TAB,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardApiKey["default"], {
            ref: this._ref1,
            style: S.CARD_ROOT,
            buttonsStyle: S.CARD_BUTTONS,
            btStyle: TS.BT.FLAT_ROOT,
            isShow: isShow,
            onSet: this._hSetAndClose,
            onClose: onClose
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Tab, {
          title: "UI Theme",
          style: TS.TAB,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardUi["default"], {
            style: S.CARD_ROOT,
            buttonsStyle: S.CARD_BUTTONS,
            btStyle: TS.BT.FLAT_ROOT,
            chbStroke: TS.CHB_STROKE,
            onSetTheme: this._hSelectTheme,
            onCheckAutoSave: _SettingActions["default"].checkAutoSave,
            onUncheckAutoSave: _SettingActions["default"].uncheckAutoSave,
            onClose: onClose
          })
        })]
      })
    });
  };

  return SettingsDialog;
}(_react.Component);

var _default = (0, _withTheme["default"])(SettingsDialog);

exports["default"] = _default;
//# sourceMappingURL=SettingsDialog.js.map
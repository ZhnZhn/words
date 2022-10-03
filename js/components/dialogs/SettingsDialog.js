"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _ThemeContext = _interopRequireDefault(require("../hoc/ThemeContext"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _ComponentActions = require("../../flux/actions/ComponentActions");

var _SettingActions = require("../../flux/actions/SettingActions");

var _Comp = _interopRequireDefault(require("../Comp"));

var _TabPane = _interopRequireDefault(require("../zhn-tabpane/TabPane"));

var _Tab = _interopRequireDefault(require("../zhn-tabpane/Tab"));

var _CardApiKey = _interopRequireDefault(require("./CardApiKey"));

var _CardUi = _interopRequireDefault(require("./CardUi"));

var _jsxRuntime = require("react/jsx-runtime");

var S_MODAL = {
  position: 'static',
  zIndex: 10,
  width: 350,
  height: 290,
  margin: '70px auto 0px',
  border: 'solid 2px #1b2836',
  borderRadius: 5,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px'
},
    S_TAB_PANE = {
  width: "100%"
},
    S_CARD_ROOT = {
  position: 'relative',
  height: 200
},
    S_CARD_BUTTONS = {
  position: 'absolute',
  right: 4,
  bottom: 4,
  cursor: 'default'
};

var SettingsDialog = function SettingsDialog(_ref) {
  var isShow = _ref.isShow,
      data = _ref.data,
      onClose = _ref.onClose;

  var _refSetKey1 = (0, _uiApi.useRef)(data.key1),
      _ref1 = (0, _uiApi.useRef)(),
      theme = (0, _uiApi.useContext)(_ThemeContext["default"]),
      TS = theme.createStyle(_Dialog["default"]),
      _hSelectTheme = (0, _uiApi.useCallback)(function (item) {
    var _ref2 = item || {},
        value = _ref2.value;

    if (theme.getThemeName() !== value) {
      _ComponentActions.ComponentActions.changeTheme(value);
    }
  }, [theme]),
      _hSetAndClose = (0, _uiApi.useCallback)(function () {
    (0, _uiApi.getRefValue)(_refSetKey1)((0, _uiApi.getRefValue)(_ref1).getValue());
    onClose();
  }, [onClose]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ModalDialog, {
    className: "",
    STYLE: TS.BT,
    style: (0, _extends2["default"])({}, S_MODAL, TS.R_DIALOG),
    caption: "User Settings",
    captionStyle: TS.BROWSER_CAPTION,
    isShow: isShow,
    isWithButton: false,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TabPane["default"], {
      style: S_TAB_PANE,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "API Key",
        style: TS.TAB,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardApiKey["default"], {
          ref: _ref1,
          style: S_CARD_ROOT,
          buttonsStyle: S_CARD_BUTTONS,
          btStyle: TS.BT.FLAT_ROOT,
          isShow: isShow,
          onSet: _hSetAndClose,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "UI Theme",
        style: TS.TAB,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardUi["default"], {
          style: S_CARD_ROOT,
          buttonsStyle: S_CARD_BUTTONS,
          btStyle: TS.BT.FLAT_ROOT,
          chbStroke: TS.CHB_STROKE,
          onSetTheme: _hSelectTheme,
          onCheckAutoSave: _SettingActions.SettingActions.checkAutoSave,
          onUncheckAutoSave: _SettingActions.SettingActions.uncheckAutoSave,
          onClose: onClose
        })
      })]
    })
  });
};

var _default = SettingsDialog;
exports["default"] = _default;
//# sourceMappingURL=SettingsDialog.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _storeAtoms = require("../../flux/storeAtoms");
var _settingStore = require("../../flux/settingStore");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _TabPane = _interopRequireDefault(require("../zhn-tabpane/TabPane"));
var _Tab = _interopRequireDefault(require("../zhn-tabpane/Tab"));
var _CardApiKey = _interopRequireDefault(require("./CardApiKey"));
var _CardUi = _interopRequireDefault(require("./CardUi"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_MODAL = {
    position: 'static',
    zIndex: 10,
    width: 350,
    height: 290,
    margin: '70px auto 0px',
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
const SettingsDialog = _ref => {
  let {
    isShow,
    data,
    onClose
  } = _ref;
  const _refSetKey1 = (0, _uiApi.useRef)(data.key1),
    _ref1 = (0, _uiApi.useRef)(),
    _selectTheme = (0, _uiApi.useCallback)(item => {
      (0, _storeAtoms.setUiTheme)((item || {}).value);
    }, []),
    _hSetAndClose = (0, _uiApi.useCallback)(() => {
      (0, _uiApi.getRefValue)(_refSetKey1)((0, _uiApi.getRefValue)(_ref1).getValue());
      onClose();
    }, [onClose]);
  return (0, _jsxRuntime.jsx)(_ModalDialog.default, {
    className: "",
    style: S_MODAL,
    caption: "User Settings",
    isShow: isShow,
    isWithButton: false,
    onClose: onClose,
    children: (0, _jsxRuntime.jsxs)(_TabPane.default, {
      id: "sd",
      style: S_TAB_PANE,
      children: [(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "API Key",
        children: (0, _jsxRuntime.jsx)(_CardApiKey.default, {
          ref: _ref1,
          style: S_CARD_ROOT,
          buttonsStyle: S_CARD_BUTTONS,
          isShow: isShow,
          onSet: _hSetAndClose,
          onClose: onClose
        })
      }), (0, _jsxRuntime.jsx)(_Tab.default, {
        title: "UI Theme",
        children: (0, _jsxRuntime.jsx)(_CardUi.default, {
          style: S_CARD_ROOT,
          buttonsStyle: S_CARD_BUTTONS,
          onSetTheme: _selectTheme,
          onCheckAutoSave: _settingStore.enableAutoSave,
          onUncheckAutoSave: _settingStore.disableAutoSave,
          onClose: onClose
        })
      })]
    })
  });
};
var _default = SettingsDialog;
exports.default = _default;
//# sourceMappingURL=SettingsDialog.js.map
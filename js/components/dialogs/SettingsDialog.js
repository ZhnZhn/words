"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _uiTheme = require("../uiTheme");
var _settingStore = require("../../flux/settingStore");
var _useFocus = require("../hooks/useFocus");
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
  const [refFocusLast, setRefFocusLast] = (0, _useFocus.useRefFocusElement)(),
    _refSetKey1 = (0, _uiApi.useRef)(data.key1),
    _ref1 = (0, _uiApi.useRef)(),
    _selectTheme = (0, _uiApi.useCallback)(item => {
      (0, _uiTheme.setUiTheme)((item || {}).value);
    }, []),
    _hSetAndClose = (0, _uiApi.useCallback)(() => {
      (0, _uiApi.getRefValue)(_refSetKey1)((0, _uiApi.getRefValue)(_ref1).getValue());
      onClose();
    }, [onClose]);
  return (0, _jsxRuntime.jsx)(_ModalDialog.default, {
    refFocusLast: refFocusLast,
    style: S_MODAL,
    caption: "User Settings",
    isShow: isShow,
    isWithButton: !1,
    onClose: onClose,
    children: (0, _jsxRuntime.jsxs)(_TabPane.default, {
      id: "sd",
      style: S_CARD_ROOT,
      buttonsStyle: S_CARD_BUTTONS,
      setRefFocusLast: setRefFocusLast,
      onClose: onClose,
      children: [(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "API Key",
        children: (0, _jsxRuntime.jsx)(_CardApiKey.default, {
          refEl: _ref1,
          isShow: isShow,
          onSet: _hSetAndClose
        })
      }), (0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Appearance",
        children: (0, _jsxRuntime.jsx)(_CardUi.default, {
          uiThemeOptions: _uiTheme.UI_THEME_OPTIONS,
          dfUiThemeItem: _uiTheme.DF_UI_THEME_ITEM,
          onSetTheme: _selectTheme,
          onCheckAutoSave: _settingStore.enableAutoSave,
          onUncheckAutoSave: _settingStore.disableAutoSave
        })
      })]
    })
  });
};
var _default = exports.default = SettingsDialog;
//# sourceMappingURL=SettingsDialog.js.map
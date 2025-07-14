"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _useFocus = require("../hooks/useFocus");
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _InputSwitch = _interopRequireDefault(require("../zhn/InputSwitch"));
var _FlatButton = _interopRequireDefault(require("../zhn/FlatButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_INPUT_SELECT = {
    width: 288
  },
  S_SWITCH = {
    padding: '28px 34px 0 23px'
  };
const CardUi = _ref => {
  let {
    isSelected,
    style,
    buttonsStyle,
    uiThemeOptions,
    dfUiThemeItem,
    setRefFocusLast,
    onSetTheme,
    onCheckAutoSave,
    onUncheckAutoSave,
    onClose
  } = _ref;
  const _refBtClose = (0, _useFocus.useEffectSyncRef)(isSelected, setRefFocusLast);
  return (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)(_InputSelect.default, {
      id: "ui-th",
      style: S_INPUT_SELECT,
      caption: "Theme (Default: Grey)",
      initItem: dfUiThemeItem,
      options: uiThemeOptions,
      onSelect: onSetTheme
    }), (0, _jsxRuntime.jsx)(_InputSwitch.default, {
      initialValue: true,
      style: S_SWITCH,
      onCheck: onCheckAutoSave,
      onUnCheck: onUncheckAutoSave,
      caption: "AutoSave on Add to Watch List"
    }), (0, _jsxRuntime.jsx)("div", {
      style: buttonsStyle,
      children: (0, _jsxRuntime.jsx)(_FlatButton.default, {
        refBt: _refBtClose,
        clDiv: _styleFn.CL_BT_FLAT_DIV,
        caption: "Close",
        title: "Close Dialog",
        onClick: onClose
      })
    })]
  });
};
var _default = exports.default = CardUi;
//# sourceMappingURL=CardUi.js.map
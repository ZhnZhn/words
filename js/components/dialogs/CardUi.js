"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useFocus = require("../hooks/useFocus");
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _InputSwitch = _interopRequireDefault(require("../zhn/InputSwitch"));
var _FlatButton = _interopRequireDefault(require("../zhn/FlatButton"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const CL_DIV = 'bt-flat__div',
  S_SELECT = {
    ROOT: {
      width: 288
    }
  },
  S_SWITCH = {
    padding: '28px 34px 0 23px'
  },
  THEME_OPTIONS = [{
    caption: 'Grey',
    value: 'GREY'
  }, {
    caption: 'Sand',
    value: 'SAND'
  }, {
    caption: 'White',
    value: 'WHITE'
  }],
  DF_THEME = THEME_OPTIONS[0];
const CardUi = _ref => {
  let {
    isSelected,
    style,
    buttonsStyle,
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
      styleConfig: S_SELECT,
      caption: "Theme (Default: Grey)",
      initItem: DF_THEME,
      options: THEME_OPTIONS,
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
        clDiv: CL_DIV,
        caption: "Close",
        title: "Close Dialog",
        onClick: onClose
      })
    })]
  });
};

/*
CardUi.propTypes = {
  style: PropTypes.object,
  buttonsStyle: PropTypes.object,
  onSetTheme: PropTypes.func,
  onCheckAutoSave: PropTypes.func,
  onUncheckAutoSave: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = exports.default = CardUi;
//# sourceMappingURL=CardUi.js.map
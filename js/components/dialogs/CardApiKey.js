"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useFocus = require("../hooks/useFocus");
var _FlatButton = _interopRequireDefault(require("../zhn/FlatButton"));
var _PasswordField = _interopRequireDefault(require("../zhn-m-input/PasswordField"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_DIV = 'bt-flat__div',
  S_PF = {
    width: 320,
    marginLeft: 12
  };
const CardApiKey = _ref => {
  let {
    refEl,
    isShow,
    isSelected,
    style,
    buttonsStyle,
    setRefFocusLast,
    onClose,
    onSet
  } = _ref;
  const _refInput = (0, _uiApi.useRef)(),
    _refBtClose = (0, _useFocus.useEffectSyncRef)(isSelected, setRefFocusLast);
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getValue: () => (0, _uiApi.getRefInputValue)(_refInput)
  }), []);
  return isShow && isSelected ? (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)("form", {
      children: (0, _jsxRuntime.jsx)(_PasswordField.default, {
        refEl: _refInput,
        rootStyle: S_PF,
        caption: "Words API Key",
        name: "wordsapi",
        maxLength: "50",
        onEnter: onSet
      })
    }), (0, _jsxRuntime.jsxs)("div", {
      style: buttonsStyle,
      children: [(0, _jsxRuntime.jsx)(_FlatButton.default, {
        clDiv: CL_DIV,
        caption: "Set & Close",
        title: "Set & Close Dialog",
        onClick: onSet
      }), (0, _jsxRuntime.jsx)(_FlatButton.default, {
        refBt: _refBtClose,
        clDiv: CL_DIV,
        caption: "Close",
        title: "Close Dialog",
        onClick: onClose
      })]
    })]
  }) : null;
};
var _default = exports.default = CardApiKey;
//# sourceMappingURL=CardApiKey.js.map
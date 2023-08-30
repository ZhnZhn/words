"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _FlatButton = _interopRequireDefault(require("../zhn-atoms/FlatButton"));
var _PasswordField = _interopRequireDefault(require("../zhn-m-input/PasswordField"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_DIV = 'bt-flat__div',
  S_PF = {
    width: 320,
    marginLeft: 12
  };
const CardApiKey = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    isShow,
    isSelected,
    style,
    buttonsStyle,
    onClose,
    onSet
  } = _ref;
  const _refInput = (0, _uiApi.useRef)();
  (0, _uiApi.useImperativeHandle)(ref, () => ({
    getValue: () => (0, _uiApi.getRefInputValue)(_refInput)
  }), []);
  return isShow && isSelected ? (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)("form", {
      children: (0, _jsxRuntime.jsx)(_PasswordField.default, {
        ref: _refInput,
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
        clDiv: CL_DIV,
        caption: "Close",
        title: "Close Dialog",
        onClick: onClose
      })]
    })]
  }) : null;
});
var _default = CardApiKey;
exports.default = _default;
//# sourceMappingURL=CardApiKey.js.map
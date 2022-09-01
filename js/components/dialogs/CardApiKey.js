"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_DIV = 'bt-flat__div',
    S_PF = {
  width: 320,
  marginLeft: 12
},
    S_BT = {
  color: '#3270b4'
};
var CardApiKey = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var isShow = _ref.isShow,
      isSelected = _ref.isSelected,
      style = _ref.style,
      buttonsStyle = _ref.buttonsStyle,
      btStyle = _ref.btStyle,
      onClose = _ref.onClose,
      onSet = _ref.onSet;

  var _refInput = (0, _uiApi.useRef)(),
      _btStyle = (0, _extends2["default"])({}, S_BT, btStyle);

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        return (0, _uiApi.getRefInputValue)(_refInput);
      }
    };
  }, []);
  return !(isShow && isSelected) ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInput,
        rootStyle: S_PF,
        caption: "Words API Key",
        name: "wordsapi",
        maxLength: "50",
        onEnter: onSet
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: buttonsStyle,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
        rootStyle: _btStyle,
        clDiv: CL_DIV,
        caption: "Set & Close",
        title: "Set & Close Dialog",
        onClick: onSet
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
        rootStyle: _btStyle,
        clDiv: CL_DIV,
        caption: "Close",
        title: "Close Dialog",
        onClick: onClose
      })]
    })]
  });
});
var _default = CardApiKey;
exports["default"] = _default;
//# sourceMappingURL=CardApiKey.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _has = require("../has");

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var S_TF_LABEL = {
  top: 28
},
    S_TF_INPUT = {
  fontSize: '24px'
},
    S_BT_CLEAR = {
  position: 'relative',
  top: 18,
  left: 6
},
    S_BT_LOAD = {
  position: 'relative',
  top: 22,
  marginLeft: 8
};
var DF_INITIAL_VALUE = 'example';
var InputWord = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var _ref$initValue = _ref.initValue,
      initValue = _ref$initValue === void 0 ? DF_INITIAL_VALUE : _ref$initValue,
      TS = _ref.TS,
      onEnter = _ref.onEnter;

  var _refTextField = (0, _uiApi.useRef)(),
      _hClear = (0, _uiApi.useCallback)(function () {
    var _tfInst = (0, _uiApi.getRefValue)(_refTextField);

    if (_tfInst) {
      _tfInst.setValue('');
    }
  }, []);

  (0, _uiApi.useEffect)(function () {
    (0, _uiApi.focusRefElement)(_refTextField);
  }, []);
  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        return (0, _uiApi.getRefInputValue)(_refTextField);
      }
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      ref: _refTextField,
      rootStyle: TS.INPUT_ROOT,
      labelStyle: S_TF_LABEL,
      inputStyle: S_TF_INPUT,
      caption: "Word",
      accessKey: "W",
      spellCheck: true,
      initialValue: initValue,
      onEnter: onEnter
    }), _has.HAS_TOUCH ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ButtonClear, {
      style: S_BT_CLEAR,
      onClick: _hClear
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
      caption: "Load",
      tabIndex: -1,
      rootStyle: (0, _extends2["default"])({}, TS.BT.FLAT, S_BT_LOAD),
      clDiv: TS.BT.CL_FLAT_DIV,
      isPrimary: true,
      onClick: onEnter
    })]
  });
});
var _default = InputWord;
exports["default"] = _default;
//# sourceMappingURL=InputWord.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _Comp = _interopRequireDefault(require("../Comp"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_TF_LABEL = {
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
const DF_INITIAL_VALUE = 'example';
const InputWord = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    initValue = DF_INITIAL_VALUE,
    TS,
    onEnter
  } = _ref;
  const _refTextField = (0, _uiApi.useRef)(),
    _hClear = (0, _uiApi.useCallback)(() => {
      const _tfInst = (0, _uiApi.getRefValue)(_refTextField);
      if (_tfInst) {
        _tfInst.setValue('');
      }
    }, []);
  (0, _uiApi.useEffect)(() => {
    (0, _uiApi.focusRefElement)(_refTextField);
  }, []);
  (0, _uiApi.useImperativeHandle)(ref, () => ({
    getValue: () => (0, _uiApi.getRefInputValue)(_refTextField)
  }), []);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_Comp.default.TextField, {
      ref: _refTextField,
      rootStyle: TS.INPUT_ROOT,
      labelStyle: S_TF_LABEL,
      inputStyle: S_TF_INPUT,
      caption: "Word",
      accessKey: "W",
      spellCheck: true,
      initialValue: initValue,
      onEnter: onEnter
    }), _has.HAS_TOUCH_EVENTS ? (0, _jsxRuntime.jsx)(_Comp.default.ButtonClear, {
      style: S_BT_CLEAR,
      onClick: _hClear
    }) : (0, _jsxRuntime.jsx)(_Comp.default.FlatButton, {
      caption: "Load",
      tabIndex: -1,
      rootStyle: S_BT_LOAD,
      clDiv: TS.BT.CL_FLAT_DIV,
      isPrimary: true,
      onClick: onEnter
    })]
  });
});
var _default = InputWord;
exports.default = _default;
//# sourceMappingURL=InputWord.js.map
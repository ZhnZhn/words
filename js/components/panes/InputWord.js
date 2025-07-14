"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _styleFn = require("../styleFn");
var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));
var _ButtonClear = _interopRequireDefault(require("../zhn/ButtonClear"));
var _FlatButton = _interopRequireDefault(require("../zhn/FlatButton"));
var _wordConfig = require("./wordConfig");
var _jsxRuntime = require("preact/jsx-runtime");
const S_INPUT_ROOT = {
    width: 250,
    marginLeft: 8
  },
  S_TF_LABEL = {
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
const InputWord = _ref => {
  let {
    refEl,
    initValue = _wordConfig.INITIAL_WORD,
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
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getValue: () => (0, _uiApi.getRefInputValue)(_refTextField)
  }), []);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_TextField.default, {
      refEl: _refTextField,
      rootStyle: S_INPUT_ROOT,
      labelStyle: S_TF_LABEL,
      inputStyle: S_TF_INPUT,
      caption: "Word",
      accessKey: "W",
      spellCheck: true,
      initialValue: initValue,
      onEnter: onEnter
    }), _has.HAS_TOUCH_EVENTS ? (0, _jsxRuntime.jsx)(_ButtonClear.default, {
      style: S_BT_CLEAR,
      onClick: _hClear
    }) : (0, _jsxRuntime.jsx)(_FlatButton.default, {
      caption: "Load",
      tabIndex: -1,
      rootStyle: S_BT_LOAD,
      clDiv: _styleFn.CL_BT_FLAT_DIV,
      isPrimary: true,
      onClick: onEnter
    })]
  });
};
var _default = exports.default = InputWord;
//# sourceMappingURL=InputWord.js.map
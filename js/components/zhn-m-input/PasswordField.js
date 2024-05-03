"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SELECT = 'm-select',
  CL_LABEL = CL_SELECT + "__label",
  CL_INPUT = 'm-textfield-input',
  CL_INPUT_DIV = CL_INPUT + "__div",
  M_INPUT = 'm-input',
  CL_INPUT_LINE = M_INPUT + "__line",
  CL_INPUT_MSG_ERR = M_INPUT + "__msg-err";
const S_LABEL_TO_INPUT = {
    transform: 'scale(1) translate(0px, -6px)'
  },
  S_LABEL_ON_ERROR = {
    color: '#f44336'
  },
  S_LINE_ERROR = {
    borderBottom: '2px solid #f44336'
  },
  S_LINE_AFTER_ENTER = {
    borderBottom: '2px solid greenyellow'
  };
const _crId = _ref => {
  let {
    name
  } = _ref;
  return (name || 'pwd') + '_' + Math.random().toString(36).substr(2, 5);
};
const _isValue = elInput => elInput ? !!elInput.value : false;
const FN_TRUE = () => true,
  FN_NOOP = () => {};
const PasswordField = props => {
  const _refInput = (0, _uiApi.useRef)(),
    _refWasEnter = (0, _uiApi.useRef)(false),
    _id = (0, _uiApi.useState)(() => _crId(props))[0],
    {
      refEl,
      rootStyle,
      caption,
      name,
      maxLength = "32",
      errorMsg = '',
      onTest = FN_TRUE,
      onEnter = FN_NOOP
    } = props,
    [value, setValue] = (0, _uiApi.useState)(''),
    [isFocus, setFocused, setNotFocused] = (0, _useBool.default)(),
    rerender = (0, _useRerender.default)()[1],
    _hInputChange = (0, _uiApi.useCallback)(evt => {
      setValue(evt.target.value.trim());
    }, [])
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      const {
        keyCode
      } = evt;
      if (keyCode === 46) {
        setValue('');
      } else if (keyCode === 13) {
        evt.preventDefault();
        onEnter(event.target.value);
        (0, _uiApi.setRefValue)(_refWasEnter, true);
        rerender();
      }
    }, []);
  // onEnter, rerender
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getValue: () => {
      const _elInput = (0, _uiApi.getRefValue)(_refInput);
      return _elInput && _elInput.value;
    }
  }));
  (0, _uiApi.useEffect)(() => {
    const _clearId = setTimeout(() => {
      const _input = (0, _uiApi.getRefValue)(_refInput);
      if (_input && _input.hasAttribute('value')) {
        _input.removeAttribute('value');
      }
    });
    return () => clearTimeout(_clearId);
  });
  (0, _uiApi.useEffect)(() => {
    if ((0, _uiApi.getRefValue)(_refWasEnter)) {
      (0, _uiApi.setRefValue)(_refWasEnter, false);
    }
  });
  const _isPassTest = onTest(value),
    _labelStyle = _isValue((0, _uiApi.getRefValue)(_refInput)) || isFocus ? null : S_LABEL_TO_INPUT,
    _labelErrStyle = _isPassTest ? null : S_LABEL_ON_ERROR,
    _lineStyle = _isPassTest ? (0, _uiApi.getRefValue)(_refWasEnter) ? S_LINE_AFTER_ENTER : void 0 : S_LINE_ERROR;
  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_SELECT,
    style: rootStyle,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: CL_LABEL,
      style: {
        ..._labelStyle,
        ..._labelErrStyle
      },
      htmlFor: _id,
      children: caption
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_INPUT_DIV,
      children: [(0, _jsxRuntime.jsx)("input", {
        hidden: true,
        autoComplete: "username",
        value: name,
        readOnly: true
      }), (0, _jsxRuntime.jsx)("input", {
        ref: _refInput,
        id: _id,
        type: "password",
        autoComplete: "current-password",
        className: CL_INPUT,
        maxLength: maxLength,
        value: value,
        onChange: _hInputChange,
        onKeyDown: _hKeyDown,
        onFocus: setFocused,
        onBlur: setNotFocused
      }), (0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE,
        style: _lineStyle
      }), !_isPassTest && (0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_MSG_ERR,
        children: errorMsg
      })]
    })]
  });
};
var _default = exports.default = PasswordField;
//# sourceMappingURL=PasswordField.js.map
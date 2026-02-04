"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _styleFn = require("../styleFn");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SELECT = 'm-select',
  CL_LABEL = `${CL_SELECT}__label`,
  CL_INPUT = 'm-textfield-input',
  CL_INPUT_DIV = `${CL_INPUT}__div`,
  M_INPUT = 'm-input',
  CL_INPUT_LINE = `${M_INPUT}__line`,
  CL_INPUT_MSG_ERR = `${M_INPUT}__msg-err`,
  CL_UNDERLINE = (0, _styleFn.crUnderline)("bt-4-after"),
  S_LABEL_TO_INPUT = {
    transform: 'scale(1) translate(0px, -6px)'
  },
  S_LABEL_ON_ERROR = {
    color: '#f44336'
  },
  S_LINE_ERROR = {
    borderBottom: '2px solid #F44336'
  };
const _crCaption = (caption, accessKey) => {
  if (!(0, _has.hasAccessKey)(accessKey)) {
    return {
      cPrefix: caption
    };
  }
  const keyIndex = caption.toLowerCase().indexOf(accessKey.toLowerCase());
  if (keyIndex === -1) {
    return {
      cPrefix: caption
    };
  }
  return {
    cPrefix: caption.substring(0, keyIndex),
    cKey: caption.substring(keyIndex, keyIndex + 1),
    cTail: caption.substring(keyIndex + 1)
  };
};
const DF_ON_TEST = () => true,
  FN_NOOP = () => {};
const TextField = _ref => {
  let {
    refEl,
    caption = '',
    accessKey = '',
    spellCheck = false,
    initialValue = '',
    rootStyle,
    labelStyle,
    inputStyle,
    lineStyle,
    errorMsg = '',
    maxLength = 24,
    onTest = DF_ON_TEST,
    onEnter = FN_NOOP,
    ...restProps
  } = _ref;
  const _refInput = (0, _uiApi.useRef)(),
    [isFocus, setFocused, setNotFocused] = (0, _useBool.default)(),
    [value, setValue] = (0, _uiApi.useState)(initialValue),
    _hInputChange = (0, _uiApi.useCallback)(evt => {
      setValue(evt.target.value);
    }, []),
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      const {
        keyCode
      } = evt;
      if (keyCode === 46) {
        setValue('');
      } else if (keyCode === 13) {
        onEnter(evt.target.value);
      }
    }, [onEnter]);
  (0, _uiApi.useEffect)(() => {
    setValue(initialValue);
  }, [initialValue]);
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getValue: () => {
      const _elInput = (0, _uiApi.getRefValue)(_refInput),
        {
          value
        } = _elInput || {};
      return value ? value.trim() : void 0;
    },
    setValue: value => setValue(String(value)),
    focus: () => (0, _uiApi.focusRefElement)(_refInput)
  }), []);
  const _isPassTest = onTest(value),
    _labelStyle = value || isFocus ? void 0 : S_LABEL_TO_INPUT,
    [_labelErrStyle, _lineStyle] = _isPassTest ? [] : [S_LABEL_ON_ERROR, S_LINE_ERROR],
    {
      cPrefix,
      cKey,
      cTail
    } = _crCaption(caption, accessKey);
  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_SELECT,
    style: rootStyle,
    children: [(0, _jsxRuntime.jsxs)("label", {
      className: CL_LABEL,
      style: {
        ...labelStyle,
        ..._labelStyle,
        ..._labelErrStyle
      },
      children: [cPrefix, (0, _jsxRuntime.jsx)("span", {
        className: CL_UNDERLINE,
        children: cKey
      }), cTail]
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_INPUT_DIV,
      children: [(0, _jsxRuntime.jsx)("input", {
        ref: _refInput,
        type: "text",
        className: CL_INPUT,
        style: inputStyle,
        value: value,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        translate: "false",
        accessKey: accessKey,
        maxLength: maxLength,
        ...restProps,
        onFocus: setFocused,
        onBlur: setNotFocused,
        onChange: _hInputChange,
        onKeyDown: _hKeyDown
      }), (0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE,
        style: {
          ...lineStyle,
          ..._lineStyle
        }
      }), _lineStyle && (0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_MSG_ERR,
        children: errorMsg
      })]
    })]
  });
};
var _default = exports.default = TextField;
//# sourceMappingURL=TextField.js.map
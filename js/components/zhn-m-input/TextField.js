"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _uiApi = require("../uiApi");
var _has = require("../has");
var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["caption", "accessKey", "spellCheck", "initialValue", "rootStyle", "labelStyle", "inputStyle", "errorMsg", "maxLength", "onTest", "onEnter"];
var CL_SELECT = 'm-select',
  CL_LABEL = CL_SELECT + "__label",
  CL_INPUT = 'm-textfield-input',
  CL_INPUT_DIV = CL_INPUT + "__div",
  M_INPUT = 'm-input',
  CL_INPUT_LINE = M_INPUT + "__line",
  CL_INPUT_MSG_ERR = M_INPUT + "__msg-err",
  S_LABEL_TO_INPUT = {
    transform: 'scale(1) translate(0px, -6px)'
  },
  S_LABEL_ON_ERROR = {
    color: '#f44336'
  },
  S_LINE_ERROR = {
    borderBottom: '2px solid #F44336'
  },
  S_KEY = {
    textDecoration: 'underline'
  };
var _crCaption = function _crCaption(caption, accessKey) {
  if (!(0, _has.hasAccessKey)(accessKey)) {
    return {
      cPrefix: caption
    };
  }
  var keyIndex = caption.toLowerCase().indexOf(accessKey.toLowerCase());
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
var DF_ON_TEST = function DF_ON_TEST() {
    return true;
  },
  FN_NOOP = function FN_NOOP() {};
var TextField = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var _ref$caption = _ref.caption,
    caption = _ref$caption === void 0 ? '' : _ref$caption,
    _ref$accessKey = _ref.accessKey,
    accessKey = _ref$accessKey === void 0 ? '' : _ref$accessKey,
    _ref$spellCheck = _ref.spellCheck,
    spellCheck = _ref$spellCheck === void 0 ? false : _ref$spellCheck,
    _ref$initialValue = _ref.initialValue,
    initialValue = _ref$initialValue === void 0 ? '' : _ref$initialValue,
    rootStyle = _ref.rootStyle,
    labelStyle = _ref.labelStyle,
    inputStyle = _ref.inputStyle,
    _ref$errorMsg = _ref.errorMsg,
    errorMsg = _ref$errorMsg === void 0 ? '' : _ref$errorMsg,
    _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 24 : _ref$maxLength,
    _ref$onTest = _ref.onTest,
    onTest = _ref$onTest === void 0 ? DF_ON_TEST : _ref$onTest,
    _ref$onEnter = _ref.onEnter,
    onEnter = _ref$onEnter === void 0 ? FN_NOOP : _ref$onEnter,
    restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var _refInput = (0, _uiApi.useRef)(),
    _useBool = (0, _useBool2["default"])(),
    isFocus = _useBool[0],
    setFocused = _useBool[1],
    setNotFocused = _useBool[2],
    _useState = (0, _uiApi.useState)(initialValue),
    value = _useState[0],
    _setValue = _useState[1],
    _hInputChange = (0, _uiApi.useCallback)(function (evt) {
      _setValue(evt.target.value);
    }, []),
    _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
      var _event = event,
        keyCode = _event.keyCode;
      if (keyCode === 46) {
        _setValue('');
      } else if (keyCode === 13) {
        onEnter(event.target.value);
      }
    }, [onEnter]);
  (0, _uiApi.useEffect)(function () {
    _setValue(initialValue);
  }, [initialValue]);
  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        var _elInput = (0, _uiApi.getRefValue)(_refInput),
          _ref2 = _elInput || {},
          value = _ref2.value;
        return value ? value.trim() : void 0;
      },
      setValue: function setValue(value) {
        return _setValue(String(value));
      },
      focus: function focus() {
        return (0, _uiApi.focusRefElement)(_refInput);
      }
    };
  }, []);
  var _isPassTest = onTest(value),
    _labelStyle = value || isFocus ? void 0 : S_LABEL_TO_INPUT,
    _ref3 = _isPassTest ? [] : [S_LABEL_ON_ERROR, S_LINE_ERROR],
    _labelErrStyle = _ref3[0],
    _lineStyle = _ref3[1],
    _crCaption2 = _crCaption(caption, accessKey),
    cPrefix = _crCaption2.cPrefix,
    cKey = _crCaption2.cKey,
    cTail = _crCaption2.cTail;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_SELECT,
    style: rootStyle,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      className: CL_LABEL,
      style: (0, _extends2["default"])({}, labelStyle, _labelStyle, _labelErrStyle),
      children: [cPrefix, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S_KEY,
        children: cKey
      }), cTail]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_INPUT_DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", (0, _extends2["default"])({
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
        maxLength: maxLength
      }, restProps, {
        onFocus: setFocused,
        onBlur: setNotFocused,
        onChange: _hInputChange,
        onKeyDown: _hKeyDown
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE,
        style: _lineStyle
      }), _lineStyle && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_MSG_ERR,
        children: errorMsg
      })]
    })]
  });
});
var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=TextField.js.map
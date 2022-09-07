"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_SELECT = 'm-select',
    CL_LABEL = CL_SELECT + "__label",
    CL_INPUT = 'm-textfield-input',
    CL_INPUT_DIV = CL_INPUT + "__div",
    M_INPUT = 'm-input',
    CL_INPUT_LINE = M_INPUT + "__line",
    CL_INPUT_MSG_ERR = M_INPUT + "__msg-err";
var S_LABEL_TO_INPUT = {
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

var _crId = function _crId(_ref) {
  var name = _ref.name;
  return (name || 'pwd') + '_' + Math.random().toString(36).substr(2, 5);
};

var _isValue = function _isValue(elInput) {
  return elInput ? !!elInput.value : false;
};

var FN_TRUE = function FN_TRUE() {
  return true;
},
    FN_NOOP = function FN_NOOP() {};

var PasswordField = (0, _uiApi.forwardRef)(function (props, ref) {
  var _refInput = (0, _uiApi.useRef)(),
      _refWasEnter = (0, _uiApi.useRef)(false),
      _id = (0, _uiApi.useState)(function () {
    return _crId(props);
  })[0],
      rootStyle = props.rootStyle,
      caption = props.caption,
      name = props.name,
      _props$maxLength = props.maxLength,
      maxLength = _props$maxLength === void 0 ? "32" : _props$maxLength,
      _props$errorMsg = props.errorMsg,
      errorMsg = _props$errorMsg === void 0 ? '' : _props$errorMsg,
      _props$onTest = props.onTest,
      onTest = _props$onTest === void 0 ? FN_TRUE : _props$onTest,
      _props$onEnter = props.onEnter,
      onEnter = _props$onEnter === void 0 ? FN_NOOP : _props$onEnter,
      _useState = (0, _uiApi.useState)(''),
      value = _useState[0],
      setValue = _useState[1],
      _useBool = (0, _useBool2["default"])(),
      isFocus = _useBool[0],
      setFocused = _useBool[1],
      setNotFocused = _useBool[2],
      rerender = (0, _useRerender["default"])()[1],
      _hInputChange = (0, _uiApi.useCallback)(function (evt) {
    setValue(evt.target.value.trim());
  }, []),
      _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
    var keyCode = evt.keyCode;

    if (keyCode === 46) {
      setValue('');
    } else if (keyCode === 13) {
      evt.preventDefault();
      onEnter(event.target.value);
      (0, _uiApi.setRefValue)(_refWasEnter, true);
      rerender();
    }
  }, []); // onEnter, rerender

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        var _elInput = (0, _uiApi.getRefValue)(_refInput);

        return _elInput && _elInput.value;
      }
    };
  });
  (0, _uiApi.useEffect)(function () {
    var _clearId = setTimeout(function () {
      var _input = (0, _uiApi.getRefValue)(_refInput);

      if (_input && _input.hasAttribute('value')) {
        _input.removeAttribute('value');
      }
    });

    return function () {
      return clearTimeout(_clearId);
    };
  });
  (0, _uiApi.useEffect)(function () {
    if ((0, _uiApi.getRefValue)(_refWasEnter)) {
      (0, _uiApi.setRefValue)(_refWasEnter, false);
    }
  });

  var _isPassTest = onTest(value),
      _labelStyle = _isValue((0, _uiApi.getRefValue)(_refInput)) || isFocus ? null : S_LABEL_TO_INPUT,
      _labelErrStyle = _isPassTest ? null : S_LABEL_ON_ERROR,
      _lineStyle = _isPassTest ? (0, _uiApi.getRefValue)(_refWasEnter) ? S_LINE_AFTER_ENTER : void 0 : S_LINE_ERROR;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_SELECT,
    style: rootStyle,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: CL_LABEL,
      style: (0, _extends2["default"])({}, _labelStyle, _labelErrStyle),
      htmlFor: _id,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_INPUT_DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        hidden: true,
        autoComplete: "username",
        value: name,
        readOnly: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE,
        style: _lineStyle
      }), !_isPassTest && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_MSG_ERR,
        children: errorMsg
      })]
    })]
  });
});
var _default = PasswordField;
exports["default"] = _default;
//# sourceMappingURL=PasswordField.js.map
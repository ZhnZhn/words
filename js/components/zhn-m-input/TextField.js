"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

//import PropsTypes from 'prop-types'
var CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-textfield-input__div',
  INPUT: 'm-textfield-input',
  INPUT_LINE: 'm-input__line',
  INPUT_MSG_ERR: 'm-input__msg-err'
};
var S = {
  LABEL_TO_INPUT: {
    transform: 'scale(1) translate(0px, -6px)'
  },
  LABEL_ON_ERROR: {
    color: '#f44336'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #F44336'
  },
  KEY: {
    textDecoration: 'underline'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _isStr = function _isStr(str) {
  return typeof str === 'string';
};

var _crCaption = function _crCaption(caption, accessKey) {
  if (!accessKey) {
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

var _crValue = function _crValue(initValue) {
  return initValue || '';
};

var _crInitialState = function _crInitialState(props) {
  var initValue = props.initValue,
      onTest = props.onTest,
      _value = _crValue(initValue);

  return {
    initValue: initValue,
    value: _value,
    isPassTest: _isFn(onTest) ? onTest(_value) : true
  };
};

var TextField = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(TextField, _Component);

  /*
  static propTypes = {
    rootStyle: PropTypes.object,
    caption: PropTypes.string,
    labelStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    errorMsg: PropTypes.string,
    initValue: PropTypes.string,
    accessKey: PropTypes.string,
    spellCheck: PropTypes.bool,
    onTest: PropTypes.func,
    onEnter: PropTypes.func,
  }
  */
  function TextField(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleFocusInput = function () {
      _this.isFocus = true;

      _this.forceUpdate();
    };

    _this._handleBlurInput = function () {
      _this.isFocus = false;

      _this.forceUpdate();
    };

    _this._handleInputChange = function (event) {
      var value = event.target.value,
          onTest = _this.props.onTest,
          _nextState = _isFn(onTest) ? {
        value: value,
        isPassTest: onTest(value)
      } : {
        value: value
      };

      _this.setState(_nextState);
    };

    _this._handleKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 46) {
        _this.setState({
          value: ''
        });
      } else if (keyCode === 13 && _isFn(_this.props.onEnter)) {
        _this.props.onEnter(event.target.value);
      }
    };

    _this._ref = function (n) {
      return _this.inputNode = n;
    };

    _this.isFocus = false;
    _this.state = _crInitialState(props);
    return _this;
  }

  TextField.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var initValue = props.initValue;
    return state.initValue !== initValue ? _crInitialState(props) : null;
  };

  var _proto = TextField.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        rootStyle = _this$props.rootStyle,
        caption = _this$props.caption,
        labelStyle = _this$props.labelStyle,
        inputStyle = _this$props.inputStyle,
        accessKey = _this$props.accessKey,
        _this$props$errorMsg = _this$props.errorMsg,
        errorMsg = _this$props$errorMsg === void 0 ? '' : _this$props$errorMsg,
        initValue = _this$props.initValue,
        onEnter = _this$props.onEnter,
        restProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["rootStyle", "caption", "labelStyle", "inputStyle", "accessKey", "errorMsg", "initValue", "onEnter"]),
        _this$state = this.state,
        value = _this$state.value,
        isPassTest = _this$state.isPassTest,
        _labelStyle = value || this.isFocus ? void 0 : S.LABEL_TO_INPUT,
        _labelErrStyle = isPassTest ? void 0 : S.LABEL_ON_ERROR,
        _lineStyle = isPassTest ? void 0 : S.LINE_ERROR,
        _crCaption2 = _crCaption(caption, accessKey),
        cPrefix = _crCaption2.cPrefix,
        cKey = _crCaption2.cKey,
        cTail = _crCaption2.cTail;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL.SELECT,
      style: rootStyle,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        className: CL.LABEL,
        style: (0, _extends2["default"])({}, labelStyle, _labelStyle, _labelErrStyle),
        children: [cPrefix, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S.KEY,
          children: cKey
        }), cTail]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: CL.DIV,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", (0, _extends2["default"])({
          ref: this._ref,
          type: "text",
          className: CL.INPUT,
          style: inputStyle,
          value: value,
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          translate: "false",
          accessKey: accessKey
        }, restProps, {
          onFocus: this._handleFocusInput,
          onBlur: this._handleBlurInput,
          onChange: this._handleInputChange,
          onKeyDown: this._handleKeyDown
        })), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: CL.INPUT_LINE,
          style: _lineStyle
        }), _lineStyle && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: CL.INPUT_MSG_ERR,
          children: errorMsg
        })]
      })]
    });
  };

  _proto.getValue = function getValue() {
    return String(this.state.value).trim();
  };

  _proto.setValue = function setValue(str) {
    if (_isStr(str)) {
      this.setState({
        value: str
      });
    }
  };

  _proto.focus = function focus() {
    if (this.inputNode) {
      this.inputNode.focus();

      if (_isFn(this.inputNode.setSelectionRange)) {
        var len = this.state.value.length;
        this.inputNode.setSelectionRange(len, len);
      }
    }
  };

  return TextField;
}(_react.Component);

TextField.defaultProps = {
  caption: '',
  accessKey: '',
  spellCheck: false
};
var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=TextField.js.map
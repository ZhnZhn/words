"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var DB_TOUCH_PERIOD = 500;
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
  return typeof str === 'function';
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

var TextField =
/*#__PURE__*/
function (_Component) {
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

    _this._handleClearInput = function () {
      _this.setState({
        value: ''
      });
    };

    _this._handleDbTouch = function (ev) {
      var _ms = Date.now();

      if (_this._firstTouch) {
        if (_ms - _this._firstTouch < DB_TOUCH_PERIOD) {
          _this._firstTouch = 0;

          _this._handleClearInput();
        } else {
          _this._firstTouch = _ms;
        }
      } else {
        _this._firstTouch = _ms;
      }
    };

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
          onTest = _this.props.onTest;

      if (_this.isOnTest) {
        _this.setState({
          value: value,
          isPassTest: onTest(value)
        });
      } else {
        _this.setState({
          value: value
        });
      }
    };

    _this._handleKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 46) {
        _this.setState({
          value: ''
        });
      } else if (keyCode === 13 && _this.isOnEnter) {
        _this.props.onEnter(event.target.value);
      }
    };

    _this._ref = function (n) {
      return _this.inputNode = n;
    };

    var _onTest = props.onTest,
        onEnter = props.onEnter,
        initValue = props.initValue;
    _this.isFocus = false;
    _this.isOnTest = _isFn(_onTest);
    _this.isOnEnter = _isFn(onEnter);
    _this._firstTouch = 0;

    var _value = initValue || '';

    _this.state = {
      value: _value,
      isPassTest: _this.isOnTest ? _onTest(_value) : true
    };
    return _this;
  }

  var _proto = TextField.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    /* update new initValue from parent component */
    if (this.props !== nextProps && this.props.initValue !== nextProps.initValue) {
      this.setState({
        value: nextProps.initValue || ''
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        rootStyle = _this$props.rootStyle,
        caption = _this$props.caption,
        labelStyle = _this$props.labelStyle,
        inputStyle = _this$props.inputStyle,
        accessKey = _this$props.accessKey,
        _this$props$errorMsg = _this$props.errorMsg,
        errorMsg = _this$props$errorMsg === void 0 ? '' : _this$props$errorMsg,
        restProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["rootStyle", "caption", "labelStyle", "inputStyle", "accessKey", "errorMsg"]),
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

    return _react["default"].createElement("div", {
      className: CL.SELECT,
      style: rootStyle //onDoubleClick={this._handleClearInput}
      ,
      onTouchStart: this._handleDbTouch
    }, _react["default"].createElement("label", {
      className: CL.LABEL,
      style: (0, _extends2["default"])({}, labelStyle, {}, _labelStyle, {}, _labelErrStyle)
    }, cPrefix, _react["default"].createElement("span", {
      style: S.KEY
    }, cKey), cTail), _react["default"].createElement("div", {
      className: CL.DIV
    }, _react["default"].createElement("input", (0, _extends2["default"])({
      ref: this._ref,
      type: "text",
      className: CL.INPUT,
      style: inputStyle,
      value: value,
      autoComplete: "new-text",
      autoCorrect: "off",
      autoCapitalize: "off",
      translate: "false",
      accessKey: accessKey
    }, restProps, {
      onFocus: this._handleFocusInput,
      onBlur: this._handleBlurInput,
      onChange: this._handleInputChange,
      onKeyDown: this._handleKeyDown
    })), _react["default"].createElement("div", {
      className: CL.INPUT_LINE,
      style: _lineStyle
    }), _lineStyle && _react["default"].createElement("div", {
      className: CL.INPUT_MSG_ERR
    }, errorMsg)));
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
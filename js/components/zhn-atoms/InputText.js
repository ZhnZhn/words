"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var S = {
  INPUT_TEXT: {
    display: 'inline',
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: 26,
    paddingLeft: 5,
    color: 'green',
    width: 40,
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e1e1cb',
    marginLeft: 5,
    marginRight: 5
  }
};
var C = {
  BLANK: '',
  TEXT: 'text',
  ON: 'on',
  OFF: 'off'
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var InputText = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputText, _Component);

  /*
  static propTypes = {
    placeholder: PropTypes.string,
    initValue: PropTypes.string,
    style: PropTypes.object,
    onEnter: PropTypes.func
  }
  */
  function InputText(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleInputChange = function (event) {
      _this.setState({
        value: event.target.value
      });
    };

    _this._handleKeyDown = function (event) {
      switch (event.keyCode) {
        case 27:
        case 46:
          event.preventDefault();

          _this.setState({
            value: C.BLANK
          });

          break;

        case 13:
          if (_isFn(_this.props.onEnter)) {
            _this.props.onEnter(event.target.value);
          }

          break;

        default:
          return;
      }
    };

    var initValue = props.initValue;
    _this.state = {
      value: initValue
    };
    return _this;
  }

  var _proto = InputText.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var onReg = this.props.onReg;

    if (_isFn(onReg)) {
      onReg(this);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      var initValue = this.props.initValue;
      this.setState({
        value: initValue != null ? initValue : C.BLANK
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        spellCheck = _this$props.spellCheck,
        placeholder = _this$props.placeholder,
        value = this.state.value,
        _autoCorrect = spellCheck ? C.ON : C.OFF,
        _spellCheck = spellCheck ? "true" : "false";

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      style: (0, _extends2["default"])({}, S.INPUT_TEXT, style),
      type: C.TEXT,
      name: C.TEXT,
      autoCapitalize: C.OFF,
      autoComplete: C.OFF,
      autoCorrect: _autoCorrect,
      spellCheck: _spellCheck,
      translate: "false",
      value: value,
      placeholder: placeholder,
      onChange: this._handleInputChange,
      onKeyDown: this._handleKeyDown
    });
  };

  _proto.getValue = function getValue() {
    return this.state.value;
  };

  _proto.setValue = function setValue(value) {
    this.setState({
      value: value
    });
  };

  return InputText;
}(_react.Component);

InputText.defaultProps = {
  initValue: C.BLANK
};
var _default = InputText;
exports["default"] = _default;
//# sourceMappingURL=InputText.js.map
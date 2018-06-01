'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    color: '#F44336'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #F44336'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _crValue = function _crValue(_v, v) {
  var value = void 0;
  if (!_v) {
    value = v;
  } else {
    var _vL = _v.length,
        vL = v.length;
    if (vL > _vL) {
      value = _v + v.substr(_vL);
    } else {
      value = _v.substr(0, vL);
    }
  }
  return value.trim();
};

var _maskValue = function _maskValue() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var i = 0,
      str = '';
  for (i; i < len; i++) {
    str = str + 'X';
  }
  return str;
};

var TextField = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField(props) {
    (0, _classCallCheck3.default)(this, TextField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this));

    _this._handleFocusInput = function () {
      _this.isFocus = true;
      _this.forceUpdate();
    };

    _this._handleBlurInput = function () {
      _this.isFocus = false;
      _this.forceUpdate();
    };

    _this._handleInputChange = function (event) {
      var value = event.target.value;
      _this._value = _crValue(_this._value, value);
      var _v = _maskValue(_this._value.length);
      if (_this.isOnTest) {
        _this.setState({
          value: _v,
          isPassTest: _this.props.onTest(_this._value)
        });
      } else {
        _this.setState({ value: _v });
      }
    };

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 27) {
        _this._value = '';
        _this.setState({ value: '' });
      } else if (event.keyCode === 13 && _this.isOnEnter) {
        _this.props.onEnter(event.target.value);
      }
    };

    _this._isValue = function (isAllowRemember) {
      return isAllowRemember ? _this._input ? !!_this._input.value : false : !!_this.state.value;
    };

    _this._refInput = function (c) {
      return _this._input = c;
    };

    _this.isFocus = false;
    var onTest = props.onTest,
        onEnter = props.onEnter;

    _this.isOnTest = _isFn(onTest);
    _this.isOnEnter = _isFn(onEnter);
    _this.state = {
      value: '',
      isPassTest: true
    };
    return _this;
  }

  (0, _createClass3.default)(TextField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rootStyle = _props.rootStyle,
          caption = _props.caption,
          isAllowRemember = _props.isAllowRemember,
          name = _props.name,
          maxLength = _props.maxLength,
          _props$errorMsg = _props.errorMsg,
          errorMsg = _props$errorMsg === undefined ? '' : _props$errorMsg,
          _state = this.state,
          value = _state.value,
          isPassTest = _state.isPassTest,
          _labelStyle = this._isValue(isAllowRemember) || this.isFocus ? undefined : S.LABEL_TO_INPUT,
          _labelErrStyle = isPassTest ? undefined : S.LABEL_ON_ERROR,
          _lineStyle = isPassTest ? undefined : S.LINE_ERROR,
          _inputProps = isAllowRemember ? {
        autoComplete: "current-password",
        name: name + '[password]'
      } : {
        autoComplete: "off",
        name: name + '[password]',
        value: value,
        defaultValue: value,
        onChange: this._handleInputChange,
        onKeyDown: this._handleKeyDown
      };

      return _react2.default.createElement(
        'div',
        {
          className: CL.SELECT,
          style: rootStyle
        },
        _react2.default.createElement(
          'label',
          {
            className: CL.LABEL,
            style: (0, _extends3.default)({}, _labelStyle, _labelErrStyle)
          },
          caption
        ),
        _react2.default.createElement(
          'div',
          { className: CL.DIV },
          _react2.default.createElement('input', { hidden: true, name: name + '[username]', value: name }),
          _react2.default.createElement('input', (0, _extends3.default)({
            ref: this._refInput,
            type: 'password',
            className: CL.INPUT,
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: false,
            translate: false,
            maxLength: maxLength,
            onFocus: this._handleFocusInput,
            onBlur: this._handleBlurInput
          }, _inputProps)),
          _react2.default.createElement('div', { className: CL.INPUT_LINE, style: _lineStyle }),
          _lineStyle && _react2.default.createElement(
            'div',
            { className: CL.INPUT_MSG_ERR },
            errorMsg
          )
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        if (this.props.isAllowRemember !== prevProps.isAllowRemember) {
          this._input.value = '';
          if (this.props.isAllowRemember) {
            this._value = '';
            this.setState({ value: '' });
          }
        }
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var isAllowRemember = this.props.isAllowRemember;

      return isAllowRemember && this._input ? this._input.value : String(this._value).trim();
    }
  }]);
  return TextField;
}(_react.Component), _class.defaultProps = {
  maxLength: "32"
}, _temp);
exports.default = TextField;
//# sourceMappingURL=SecretField.js.map
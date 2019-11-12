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

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropsTypes from 'prop-types'

//import CaptionInput from '../zhn-atoms/CaptionInput'

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
    color: '#F44336'
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

var _crCaption = function _crCaption(caption, accessKey) {
  if (!accessKey) {
    return { cPrefix: caption };
  }
  var keyIndex = caption.toLowerCase().indexOf(accessKey.toLowerCase());
  if (keyIndex === -1) {
    return { cPrefix: caption };
  }
  return {
    cPrefix: caption.substring(0, keyIndex),
    cKey: caption.substring(keyIndex, keyIndex + 1),
    cTail: caption.substring(keyIndex + 1)
  };
};

var TextField = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField(props) {
    (0, _classCallCheck3.default)(this, TextField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _initialiseProps.call(_this);

    var onTest = props.onTest,
        onEnter = props.onEnter,
        initValue = props.initValue;


    _this.isFocus = false;
    _this.isOnTest = _isFn(onTest);
    _this.isOnEnter = _isFn(onEnter);

    _this._firstTouch = 0;

    var _value = initValue || '';
    _this.state = {
      value: _value,
      isPassTest: _this.isOnTest ? onTest(_value) : true
    };
    return _this;
  }
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

  (0, _createClass3.default)(TextField, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      /* update new initValue from parent component */
      if (this.props !== nextProps && this.props.initValue !== nextProps.initValue) {
        this.setState({
          value: nextProps.initValue || ''
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          rootStyle = _props.rootStyle,
          caption = _props.caption,
          labelStyle = _props.labelStyle,
          inputStyle = _props.inputStyle,
          accessKey = _props.accessKey,
          spellCheck = _props.spellCheck,
          _props$errorMsg = _props.errorMsg,
          errorMsg = _props$errorMsg === undefined ? '' : _props$errorMsg,
          _state = this.state,
          value = _state.value,
          isPassTest = _state.isPassTest,
          _labelStyle = value || this.isFocus ? undefined : S.LABEL_TO_INPUT,
          _labelErrStyle = isPassTest ? undefined : S.LABEL_ON_ERROR,
          _lineStyle = isPassTest ? undefined : S.LINE_ERROR,
          _crCaption2 = _crCaption(caption, accessKey),
          cPrefix = _crCaption2.cPrefix,
          cKey = _crCaption2.cKey,
          cTail = _crCaption2.cTail;

      return _react2.default.createElement(
        'div',
        {
          className: CL.SELECT,
          style: rootStyle
          //onDoubleClick={this._handleClearInput}
          , onTouchStart: this._handleDbTouch
        },
        _react2.default.createElement(
          'label',
          {
            className: CL.LABEL,
            style: (0, _extends3.default)({}, labelStyle, _labelStyle, _labelErrStyle)
          },
          cPrefix,
          _react2.default.createElement(
            'span',
            { style: S.KEY },
            cKey
          ),
          cTail
        ),
        _react2.default.createElement(
          'div',
          { className: CL.DIV },
          _react2.default.createElement('input', {
            ref: this._ref,
            type: 'text',
            className: CL.INPUT,
            style: inputStyle,
            value: value,
            accessKey: accessKey,
            autoComplete: 'new-text',
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: spellCheck,
            translate: 'false',
            onFocus: this._handleFocusInput,
            onBlur: this._handleBlurInput,
            onChange: this._handleInputChange,
            onKeyDown: this._handleKeyDown
          }),
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
    key: 'getValue',
    value: function getValue() {
      return String(this.state.value).trim();
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.inputNode) {
        this.inputNode.focus();
        if (typeof this.inputNode.setSelectionRange === 'function') {
          var len = this.state.value.length;
          this.inputNode.setSelectionRange(len, len);
        }
      }
    }
  }]);
  return TextField;
}(_react.Component), _class.defaultProps = {
  caption: '',
  accessKey: '',
  spellCheck: false
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._handleClearInput = function () {
    _this2.setState({ value: '' });
  };

  this._handleDbTouch = function (ev) {
    var _ms = Date.now();
    if (_this2._firstTouch) {
      if (_ms - _this2._firstTouch < DB_TOUCH_PERIOD) {
        _this2._firstTouch = 0;
        _this2._handleClearInput();
      } else {
        _this2._firstTouch = _ms;
      }
    } else {
      _this2._firstTouch = _ms;
    }
  };

  this._handleFocusInput = function () {
    _this2.isFocus = true;
    _this2.forceUpdate();
  };

  this._handleBlurInput = function () {
    _this2.isFocus = false;
    _this2.forceUpdate();
  };

  this._handleInputChange = function (event) {
    var value = event.target.value,
        onTest = _this2.props.onTest;

    if (_this2.isOnTest) {
      _this2.setState({
        value: value, isPassTest: onTest(value)
      });
    } else {
      _this2.setState({ value: value });
    }
  };

  this._handleKeyDown = function (event) {
    var keyCode = event.keyCode;

    if (keyCode === 46) {
      _this2.setState({ value: '' });
    } else if (keyCode === 13 && _this2.isOnEnter) {
      _this2.props.onEnter(event.target.value);
    }
  };

  this._ref = function (n) {
    return _this2.inputNode = n;
  };
}, _temp);
exports.default = TextField;
//# sourceMappingURL=TextField.js.map
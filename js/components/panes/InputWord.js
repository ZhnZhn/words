'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

var _TextField = require('../zhn-m-input/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  TF_LABEL: {
    top: '28px'
  },
  TF_INPUT: {
    fontSize: '24px'
  }
};

var InputWord = function (_Component) {
  (0, _inherits3.default)(InputWord, _Component);

  function InputWord() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InputWord);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InputWord.__proto__ || Object.getPrototypeOf(InputWord)).call.apply(_ref, [this].concat(args))), _this), _this._ref = function (n) {
      return _this.iWord = n;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InputWord, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.iWord) {
        this.iWord.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          TS = _props.TS,
          onEnter = _props.onEnter;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_TextField2.default, {
          ref: this._ref,
          rootStyle: TS.INPUT_ROOT,
          labelStyle: S.TF_LABEL,
          inputStyle: S.TF_INPUT,
          caption: 'Word',
          accessKey: 'W',
          spellCheck: true,
          initValue: 'example',
          onEnter: onEnter
        }),
        _react2.default.createElement(_Atoms2.default.RaisedButton, {
          rootStyle: TS.BT.RAISED_ROOT,
          clDiv: TS.BT.CL_RAISED_DIV,
          caption: 'Load',
          tabIndex: -1
          //timeout={3000}
          , isPrimary: true,
          onClick: onEnter
        })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.iWord ? this.iWord.getValue() : undefined;
    }
  }]);
  return InputWord;
}(_react.Component);

exports.default = InputWord;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\panes\InputWord.js.map
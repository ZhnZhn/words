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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SecretField = require('../zhn-m-input/SecretField');

var _SecretField2 = _interopRequireDefault(_SecretField);

var _FlatButton = require('../zhn-atoms/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var CL_DIV = 'bt-flat__div';

var S = {
  ROOT: {
    position: 'relative',
    height: 200
  },
  SECRET: {
    width: 320,
    marginLeft: 12
  },
  BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  },
  BT_ROOT: {
    color: 'rgb(35, 47, 59)'
  }
};

var CardApiKey = function (_Component) {
  (0, _inherits3.default)(CardApiKey, _Component);

  function CardApiKey() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CardApiKey);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CardApiKey.__proto__ || Object.getPrototypeOf(CardApiKey)).call.apply(_ref, [this].concat(args))), _this), _this._refInput = function (c) {
      return _this._input = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  /*
  static propTypes = {
    style: PropTypes.object,
    buttonsStyle: PropTypes.object,
    btStyle: PropTypes.object,
    onClose: PropTypes.func,
    onSet: PropTypes.func
  }
  */

  (0, _createClass3.default)(CardApiKey, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          buttonsStyle = _props.buttonsStyle,
          btStyle = _props.btStyle,
          onClose = _props.onClose,
          onSet = _props.onSet;

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(_SecretField2.default, {
            ref: this._refInput,
            rootStyle: S.SECRET,
            caption: 'Words API Key',
            name: 'wordsapi',
            maxLength: '50',
            onEnter: onSet
          })
        ),
        _react2.default.createElement(
          'div',
          { style: buttonsStyle },
          _react2.default.createElement(_FlatButton2.default, {
            rootStyle: (0, _extends3.default)({}, S.BT_ROOT, btStyle),
            clDiv: CL_DIV,
            caption: 'Set & Close',
            title: 'Set & Close Dialog',
            onClick: onSet
          }),
          _react2.default.createElement(_FlatButton2.default, {
            rootStyle: (0, _extends3.default)({}, S.BT_ROOT, btStyle),
            clDiv: CL_DIV,
            caption: 'Close',
            title: 'Close Dialog',
            onClick: onClose
          })
        )
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this._input.getValue();
    }
  }]);
  return CardApiKey;
}(_react.Component);

exports.default = CardApiKey;
//# sourceMappingURL=CardApiKey.js.map
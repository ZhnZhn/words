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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  LABEL: {
    position: 'relative',
    float: 'right',
    top: '9px',
    display: 'inline-block',
    color: '#2f7ed8',
    paddingRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

var LimitLabel = function (_Component) {
  (0, _inherits3.default)(LimitLabel, _Component);

  function LimitLabel() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LimitLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LimitLabel.__proto__ || Object.getPrototypeOf(LimitLabel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _this._onStore = function (actionType, value) {
      var ACTIONS = _this.props.ACTIONS;

      if (actionType === ACTIONS.LOADING_COMPLETE) {
        if (!(value == null)) {
          _this.setState({ value: value });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LimitLabel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var store = this.props.store;

      this.unsubscribe = store.listenLoading(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.props.style,
          value = this.state.value;

      return _react2.default.createElement(
        'span',
        { style: (0, _extends3.default)({}, S.LABEL, style) },
        value
      );
    }
  }]);
  return LimitLabel;
}(_react.Component);

exports.default = LimitLabel;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\header\LimitLabel.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var S = {
  LABEL: {
    position: 'relative',
    "float": 'right',
    top: 9,
    display: 'inline-block',
    color: '#2f7ed8',
    paddingRight: 10,
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

var LimitLabel = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(LimitLabel, _Component);

  function LimitLabel() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      value: ''
    };

    _this._onStore = function (actionType, value) {
      var ACTIONS = _this.props.ACTIONS;

      if (actionType === ACTIONS.LOADING_COMPLETE) {
        if (!(value == null)) {
          _this.setState({
            value: value
          });
        }
      }
    };

    return _this;
  }

  var _proto = LimitLabel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var store = this.props.store;
    this.unsubscribe = store.listenLoading(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var style = this.props.style,
        value = this.state.value;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, S.LABEL, style),
      children: value
    });
  };

  return LimitLabel;
}(_react.Component);

var _default = LimitLabel;
exports["default"] = _default;
//# sourceMappingURL=LimitLabel.js.map
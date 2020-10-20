"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

//import PropTypes from 'prop-types'
var CL_DIV = "hrz-container";

var _isInCont = function _isInCont(arrComps, comp) {
  var key = comp.key,
      _max = arrComps.length;
  var i = 0;

  for (i; i < _max; i++) {
    if (arrComps[i].key === key) {
      return true;
    }
  }

  return false;
};

var HrzContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(HrzContainer, _Component);

  function HrzContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      containers: []
    };

    _this._onStore = function (actionType, option) {
      if (actionType === _this.props.addAction && option && option.Comp) {
        _this.setState(function (prevState) {
          var comp = option.Comp;

          if (!_isInCont(prevState.containers, comp)) {
            prevState.containers.unshift(comp);
          }

          return prevState;
        });
      }
    };

    return _this;
  }

  var _proto = HrzContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var className = this.props.className,
        containers = this.state.containers;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL_DIV + " " + className,
      children: containers
    });
  };

  return HrzContainer;
}(_react.Component);

HrzContainer.defaultProps = {
  className: ''
};
var _default = HrzContainer;
exports["default"] = _default;
//# sourceMappingURL=HrzContainer.js.map
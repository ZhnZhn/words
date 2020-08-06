"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _fnNoop = function _fnNoop() {};

var MenuItem = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(MenuItem, _Component);

  function MenuItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        _this.props.onClick();
      } else if (keyCode === 27) {
        _this.props.onClose({
          target: _this.divNode
        });
      }
    };

    _this._ref = function (n) {
      return _this.divNode = n;
    };

    return _this;
  }

  var _proto = MenuItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        caption = _this$props.caption,
        onClick = _this$props.onClick;
    return /*#__PURE__*/_react["default"].createElement("div", {
      role: "button",
      ref: this._ref,
      className: className,
      tabIndex: "0",
      onClick: onClick,
      onKeyDown: this._hKeyDown
    }, caption);
  };

  _proto.focus = function focus() {
    this.divNode.focus();
  };

  return MenuItem;
}(_react.Component);

MenuItem.defaultProps = {
  onClick: _fnNoop,
  onClose: _fnNoop
};
var _default = MenuItem;
exports["default"] = _default;
//# sourceMappingURL=MenuItem.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var ModalPane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ModalPane, _Component);

  function ModalPane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this._refNode = /*#__PURE__*/(0, _react.createRef)();

    _this._hClickOutside = function (event) {
      var onClose = _this.props.onClose,
          _node = _this._refNode.current;

      if (_node && !_node.contains(event.target)) {
        onClose(event);
      }
    };

    return _this;
  }

  var _proto = ModalPane.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      if (this.props.isShow) {
        document.addEventListener('click', this._hClickOutside, true);
      } else {
        document.removeEventListener('click', this._hClickOutside, true);
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        children = _this$props.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: style,
      ref: this._refNode,
      children: children
    });
  };

  return ModalPane;
}(_react.Component);

ModalPane.defaultProps = {
  onClose: function onClose() {}
};
var _default = ModalPane;
exports["default"] = _default;
//# sourceMappingURL=ModalPane.js.map
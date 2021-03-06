"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_BT = 'bt-flat';
var CL_BT_SPAN = 'bt-flat__span';

var ModalButton = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ModalButton, _Component);

  function ModalButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._ref = function (n) {
      return _this.rootNode = n;
    };

    return _this;
  }

  var _proto = ModalButton.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var onReg = this.props.onReg;

    if (typeof onReg === 'function') {
      onReg(this.rootNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        rootStyle = _this$props.rootStyle,
        clDiv = _this$props.clDiv,
        title = _this$props.title,
        caption = _this$props.caption,
        accessKey = _this$props.accessKey,
        children = _this$props.children,
        onClick = _this$props.onClick;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      ref: this._ref,
      className: CL_BT,
      style: rootStyle,
      tabIndex: 0,
      title: title,
      accessKey: accessKey,
      onClick: onClick,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: clDiv,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionInput["default"], {
          className: CL_BT_SPAN,
          caption: caption,
          accessKey: accessKey,
          children: children
        })
      })
    });
  };

  return ModalButton;
}(_react.Component);

var _default = ModalButton;
exports["default"] = _default;
//# sourceMappingURL=ModalButton.js.map
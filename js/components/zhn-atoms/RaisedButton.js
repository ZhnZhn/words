"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var CL_BT = 'bt-raised';
var CL_BT_SPAN = 'bt-raised__span';
var S = {
  PRIMARY_SPAN: {
    color: '#80c040'
  }
};

var RaisedButton =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(RaisedButton, _Component);

  function RaisedButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refNode = function (node) {
      return _this.rootNode = node;
    };

    return _this;
  }

  var _proto = RaisedButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        rootStyle = _this$props.rootStyle,
        clDiv = _this$props.clDiv,
        caption = _this$props.caption,
        tabIndex = _this$props.tabIndex,
        isPrimary = _this$props.isPrimary,
        onClick = _this$props.onClick,
        _btCl = CL_BT + " " + className,
        _spanStyle = isPrimary ? S.PRIMARY_SPAN : undefined;

    return _react["default"].createElement("button", {
      ref: this._refNode,
      tabIndex: tabIndex,
      className: _btCl,
      style: rootStyle,
      onClick: onClick
    }, _react["default"].createElement("div", {
      className: clDiv
    }, _react["default"].createElement("span", {
      className: CL_BT_SPAN,
      style: _spanStyle
    }, caption)));
  };

  _proto.focus = function focus() {
    this.rootNode.focus();
  };

  return RaisedButton;
}(_react.Component);

RaisedButton.defaultProps = {
  className: '',
  tabIndex: 0,
  onClick: function onClick() {}
};
var _default = RaisedButton;
exports["default"] = _default;
//# sourceMappingURL=RaisedButton.js.map
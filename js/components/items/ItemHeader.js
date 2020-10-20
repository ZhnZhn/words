"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _Comp = _interopRequireDefault(require("../Comp"));

var CL_NOT_SELECTED = "not-selected";
var T = {
  A: "Click to open add to watch list dialog"
};

var _fnNoop = function _fnNoop() {};

var _setPrevFocused = function _setPrevFocused(element) {
  document._prevFocusedZhn = element;
};

var ItemHeader = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ItemHeader, _Component);

  /*
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    captionStyle: PropTypes.object,
    svgCloseStyle: PropTypes.object,
      caption: PropTypes.string,
      onClick: PropTypes.func,
    onClose: PropTypes.func,
    onAddToWatch: PropTypes.func
  }
  */
  function ItemHeader(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hAddToWatch = function (event) {
      event.stopPropagation();

      _setPrevFocused(_this._refBtAdd.current);

      var _this$props = _this.props,
          caption = _this$props.caption,
          onAddToWatch = _this$props.onAddToWatch;
      onAddToWatch({
        caption: caption
      });
    };

    _this._hClose = function (event) {
      event.stopPropagation();

      _this.props.onClose();
    };

    _this._hKeyDown = function (event) {
      var target = event.target,
          keyCode = event.keyCode;

      if (target === _this._refRootNode.current) {
        var _this$props2 = _this.props,
            onClick = _this$props2.onClick,
            onClose = _this$props2.onClose;

        if (keyCode === 13) {
          onClick();
        } else if (keyCode === 46) {
          onClose();
        } else if (keyCode === 65) {
          _this._hAddToWatch(event);
        }
      }
    };

    _this._refRootNode = /*#__PURE__*/(0, _react.createRef)();
    _this._refBtAdd = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  var _proto = ItemHeader.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this._refRootNode.current) {
      this._refRootNode.current.focus();
    }
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        className = _this$props3.className,
        style = _this$props3.style,
        captionStyle = _this$props3.captionStyle,
        svgCloseStyle = _this$props3.svgCloseStyle,
        title = _this$props3.title,
        onClick = _this$props3.onClick;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      tabIndex: "0",
      role: "button",
      ref: this._refRootNode,
      className: className,
      style: style,
      onClick: onClick,
      onKeyDown: this._hKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: CL_NOT_SELECTED,
        style: captionStyle,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].CircleButton, {
        ref: this._refBtAdd,
        caption: "A",
        title: T.A,
        onClick: this._hAddToWatch
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].SvgClose, {
        tabIndex: "-1",
        style: svgCloseStyle,
        onClose: this._hClose
      })]
    });
  };

  _proto.focus = function focus() {
    this._refRootNode.current.focus();
  };

  return ItemHeader;
}(_react.Component);

ItemHeader.defaultProps = {
  onClick: _fnNoop,
  onClose: _fnNoop,
  onAddToWatch: _fnNoop
};
var _default = ItemHeader;
exports["default"] = _default;
//# sourceMappingURL=ItemHeader.js.map
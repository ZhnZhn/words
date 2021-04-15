"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

var PaneTopics = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(PaneTopics, _Component);

  function PaneTopics() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._ref = function (n) {
      return _this.firstItem = n;
    };

    _this._renderItems = function (_ref2) {
      var clItem = _ref2.clItem,
          items = _ref2.items,
          onClose = _ref2.onClose;
      return items.map(function (item, index) {
        var _ref = index === 0 ? _this._ref : undefined;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].MenuItem, (0, _extends2["default"])({
          ref: _ref,
          className: clItem
        }, item, {
          onClose: onClose
        }), item.caption);
      });
    };

    return _this;
  }

  var _proto = PaneTopics.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      var isShow = this.props.isShow;

      if (isShow && !prevProps.isShow) {
        this.prevFocused = document.activeElement;
        this.firstItem.focus();
      } else if (!isShow && prevProps.isShow) {
        if (this.prevFocused) {
          this.prevFocused.focus();
        }
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        paneStyle = _this$props.paneStyle,
        isShow = _this$props.isShow,
        clItem = _this$props.clItem,
        items = _this$props.items,
        onClose = _this$props.onClose;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalPane["default"], {
      isShow: isShow,
      onClose: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ShowHide, {
        className: className,
        style: paneStyle,
        isShow: isShow,
        children: this._renderItems({
          clItem: clItem,
          items: items,
          onClose: onClose
        })
      })
    });
  };

  return PaneTopics;
}(_react.Component);

var _default = PaneTopics;
exports["default"] = _default;
//# sourceMappingURL=PaneTopics.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _uiApi = require("../uiApi");

var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));

var _RaisedButton = _interopRequireDefault(require("../zhn-atoms/RaisedButton"));

var _Interact = _interopRequireDefault(require("../../utils/Interact"));

var _jsxRuntime = require("react/jsx-runtime");

var _this = void 0;

var CL_DIALOG = 'dialog';
var CL_DIALOG_OPEN = 'dialog show-popup';
var S_ROOT = {
  zIndex: 10,
  position: 'absolute',
  top: 30,
  left: 50,
  backgroundColor: '#4D4D4D',
  border: 'solid 2px #3f5178',
  borderRadius: 5,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px'
},
    S_CHILDREN = {
  cursor: 'default'
},
    S_COMMAND = {
  cursor: 'default',
  "float": 'right',
  marginTop: 16,
  marginBottom: 10,
  marginRight: 4
},
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var DialogButtons = function DialogButtons(_ref) {
  var _ref$S = _ref.S,
      S = _ref$S === void 0 ? {} : _ref$S,
      onLoad = _ref.onLoad,
      onShow = _ref.onShow,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_COMMAND,
    children: [_isFn(onLoad) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
      style: S.RAISED_ROOT,
      clDiv: S.CL_RAISED_DIV,
      caption: "Load",
      isPrimary: true,
      onClick: onLoad
    }), _isFn(onShow) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
      style: S.RAISED_ROOT,
      clDiv: S.CL_RAISED_DIV,
      caption: "Show",
      onClick: onShow
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
      style: S.RAISED_ROOT,
      clDiv: S.CL_RAISED_DIV,
      caption: "Close",
      onClick: _this._handleClose
    })]
  });
};

var DraggableDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DraggableDialog, _Component);

  function DraggableDialog() {
    var _this2;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this2._handleKeyDown = function (event) {
      var focused = document.activeElement;

      if (focused == _this2.rootDiv) {
        _this2.props.onKeyDown(event);
      }
    };

    _this2._handleClose = function (event) {
      if (_this2.prevFocusedEl) {
        _this2.prevFocusedEl.focus();
      }

      _this2.props.onClose();
    };

    _this2._refRootDiv = function (_divElement) {
      return _this2.rootDiv = _divElement;
    };

    return _this2;
  }

  var _proto = DraggableDialog.prototype;

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    rootStyle: PropTypes.object,
    browserCaptionStyle: PropTypes.object,
    styleButton: PropTypes.object,
    caption: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    onLoad: PropTypes.func,
    onShow: PropTypes.func,
    onClose: PropTypes.func
  }
  */
  _proto.componentDidMount = function componentDidMount() {
    _Interact["default"].makeDragable(this.rootDiv);

    this.prevFocusedEl = document.activeElement;
    this.rootDiv.focus();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isShow && !prevProps.isShow) {
      this.rootDiv.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        rootStyle = _this$props.rootStyle,
        browserCaptionStyle = _this$props.browserCaptionStyle,
        styleButton = _this$props.styleButton,
        caption = _this$props.caption,
        children = _this$props.children,
        onLoad = _this$props.onLoad,
        onShow = _this$props.onShow,
        onClose = _this$props.onClose,
        _ref2 = isShow ? [CL_DIALOG_OPEN, S_BLOCK] : [CL_DIALOG, S_NONE],
        _classShow = _ref2[0],
        _styleShow = _ref2[1];

    return (
      /*#__PURE__*/

      /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/

      /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
      (0, _jsxRuntime.jsxs)("div", {
        ref: this._refRootDiv,
        role: "dialog",
        className: _classShow,
        style: (0, _extends2["default"])({}, S_ROOT, rootStyle, _styleShow),
        tabIndex: "0",
        onKeyDown: this._handleKeyDown,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserCaption["default"], {
          rootStyle: browserCaptionStyle,
          caption: caption,
          onClose: onClose
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: S_CHILDREN,
          children: children
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DialogButtons, {
          S: styleButton,
          onLoad: onLoad,
          onShow: onShow,
          onClose: this._handleClose
        })]
      })
    );
  };

  _proto.focusPrevEl = function focusPrevEl() {
    if (this.prevFocusedEl) {
      this.prevFocusedEl.focus();
    }
  };

  return DraggableDialog;
}(_uiApi.Component);

var _default = DraggableDialog;
exports["default"] = _default;
//# sourceMappingURL=DraggableDialog.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useXYMovable = _interopRequireDefault(require("../hooks/useXYMovable"));
var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));
var _RaisedButton = _interopRequireDefault(require("../zhn-atoms/RaisedButton"));
var _jsxRuntime = require("react/jsx-runtime");
var _this = void 0;
var CL_DIALOG = 'dialog',
  CL_DIALOG_OPEN = CL_DIALOG + " show-popup";
var S_DIV = {
    zIndex: 10,
    position: 'absolute',
    top: 30,
    left: 50,
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #3f5178',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px'
  },
  S_COMMAND = {
    textAlign: 'right',
    margin: '16px 4px 10px 0'
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

/*eslint-disable react-hooks/exhaustive-deps */
var useFocusByRef = function useFocusByRef(ref) {
  return (0, _uiApi.useCallback)(function () {
    (0, _uiApi.focusRefElement)(ref);
  }, []);
};
//ref
/*eslint-enable react-hooks/exhaustive-deps */

var DraggableDialog = (0, _uiApi.forwardRef)(function (_ref2, ref) {
  var isShow = _ref2.isShow,
    style = _ref2.style,
    captionStyle = _ref2.captionStyle,
    buttonStyle = _ref2.buttonStyle,
    caption = _ref2.caption,
    children = _ref2.children,
    onKeyDown = _ref2.onKeyDown,
    onLoad = _ref2.onLoad,
    onShow = _ref2.onShow,
    onClose = _ref2.onClose;
  var _refDiv = (0, _uiApi.useRef)(null),
    _refIsShow = (0, _uiApi.useRef)(isShow),
    _refPrevFocused = (0, _uiApi.useRef)(null),
    focusPrevEl = useFocusByRef(_refPrevFocused),
    focus = useFocusByRef(_refDiv),
    _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
      if (document.activeElement == (0, _uiApi.getRefValue)(_refDiv)) {
        onKeyDown(evt);
      }
    }, [onKeyDown]),
    _hClose = (0, _uiApi.useCallback)(function (evt) {
      focusPrevEl();
      onClose();
    }, [onClose, focusPrevEl]);
  (0, _uiApi.useEffect)(function () {
    var _divElement = (0, _uiApi.getRefValue)(_refDiv);
    (0, _uiApi.setRefValue)(_refPrevFocused, document.activeElement);
    _divElement.focus();
  }, []);
  (0, _useXYMovable["default"])((0, _uiApi.getRefValue)(_refDiv));

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    if (isShow && !(0, _uiApi.getRefValue)(_refIsShow)) {
      focus();
    }
    (0, _uiApi.setRefValue)(_refIsShow, isShow);
  }, [isShow]);
  // focus
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      focusPrevEl: focusPrevEl
    };
  });
  var _ref3 = isShow ? [CL_DIALOG_OPEN, S_BLOCK] : [CL_DIALOG, S_NONE],
    _classShow = _ref3[0],
    _styleShow = _ref3[1];
  return (
    /*#__PURE__*/
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    (0, _jsxRuntime.jsxs)("div", {
      ref: _refDiv,
      role: "dialog",
      className: _classShow,
      style: (0, _extends2["default"])({}, S_DIV, style, _styleShow),
      tabIndex: "0",
      onKeyDown: _hKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserCaption["default"], {
        style: captionStyle,
        caption: caption,
        onClose: onClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DialogButtons, {
        TS: buttonStyle,
        onLoad: onLoad,
        onShow: onShow,
        onClose: _hClose
      })]
    })
  );
});

/*
static propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object,
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
var _default = DraggableDialog;
exports["default"] = _default;
//# sourceMappingURL=DraggableDialog.js.map
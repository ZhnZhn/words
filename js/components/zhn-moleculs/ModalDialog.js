"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useClassAnimation2 = _interopRequireDefault(require("../hooks/useClassAnimation"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_MD = 'modal-dialog',
    CL_MD_ACTIONS = CL_MD + "__actions",
    CL_BT_DIV = 'bt-flat__div',
    S_BT = {
  color: '#3270b4'
},
    CL = {
  SHOWING: 'dialog show-popup',
  HIDING: 'hide-popup'
},
    S = {
  INIT: {
    display: 'none'
  },
  SHOWING: {
    display: 'block'
  },
  HIDING: {
    opacity: 0,
    transform: 'scaleY(0)'
  }
};

var _getPrevFocusedElement = function _getPrevFocusedElement() {
  var _prevFocused = document._prevFocusedZhn;

  if (_prevFocused) {
    return document._prevFocusedZhn = void 0, _prevFocused;
  }

  return document.activeElement;
};

var _hasFocusFn = function _hasFocusFn(ref) {
  return typeof ((ref || {}).current || {}).focus === 'function';
};

var _hClickDialog = function _hClickDialog(event) {
  event.stopPropagation();
};

var ModalDialog = function ModalDialog(_ref) {
  var isShow = _ref.isShow,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? CL_MD : _ref$className,
      style = _ref.style,
      _ref$isWithButton = _ref.isWithButton,
      isWithButton = _ref$isWithButton === void 0 ? true : _ref$isWithButton,
      caption = _ref.caption,
      captionStyle = _ref.captionStyle,
      commandButtons = _ref.commandButtons,
      withoutClose = _ref.withoutClose,
      children = _ref.children,
      onClose = _ref.onClose;

  var _refRootDiv = (0, _uiApi.useRef)(),
      _refPrevFocused = (0, _uiApi.useRef)(),
      _hKeyDown = (0, _uiApi.useCallback)(function (event) {
    if (_refRootDiv && event.target === _refRootDiv.current && event.keyCode === 27) {
      onClose(event);
    }
  }, []),
      _useClassAnimation = (0, _useClassAnimation2["default"])({
    isShow: isShow,
    CL: CL,
    S: S,
    initialWasClosed: false
  }),
      _className = _useClassAnimation.className,
      _style = _useClassAnimation.style,
      _className2 = _className ? className + " " + _className : className;

  (0, _uiApi.useEffect)(function () {
    if (isShow) {
      _refPrevFocused.current = _getPrevFocusedElement();
    }
  }, [isShow]);
  (0, _uiApi.useEffect)(function () {
    if (isShow && _hasFocusFn(_refRootDiv)) {
      _refRootDiv.current.focus();
    }
  }, [isShow]);
  (0, _uiApi.useEffect)(function () {
    if (_style === S.HIDING && _hasFocusFn(_refPrevFocused)) {
      _refPrevFocused.current.focus();
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: _refRootDiv,
    tabIndex: "0",
    className: _className2,
    style: (0, _extends2["default"])({}, style, _style),
    onClick: _hClickDialog,
    onKeyDown: _hKeyDown,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].BrowserCaption, {
      rootStyle: captionStyle,
      caption: caption,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: children
    }), isWithButton && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_MD_ACTIONS,
      children: [commandButtons, !withoutClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
        rootStyle: S_BT,
        clDiv: CL_BT_DIV,
        caption: "Close",
        isPrimary: true,
        onClick: onClose
      })]
    })]
  });
};

var _default = ModalDialog;
exports["default"] = _default;
//# sourceMappingURL=ModalDialog.js.map
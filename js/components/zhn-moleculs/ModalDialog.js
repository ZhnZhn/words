"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _useClassAnimation2 = _interopRequireDefault(require("../zhn-hooks/useClassAnimation"));

var _Comp = _interopRequireDefault(require("../Comp"));

//import PropTypes from "prop-types";
var CL = {
  D: 'modal-dialog',
  D_ACTIONS: 'modal-dialog__actions',
  BT_DIV: 'bt-flat__div'
};
var S = {
  BT_ROOT: {
    color: '#3270b4'
  }
};
var CL2 = {
  SHOWING: 'dialog show-popup',
  HIDING: 'hide-popup'
};
var S2 = {
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
      className = _ref$className === void 0 ? CL.D : _ref$className,
      style = _ref.style,
      _ref$isWithButton = _ref.isWithButton,
      isWithButton = _ref$isWithButton === void 0 ? true : _ref$isWithButton,
      caption = _ref.caption,
      captionStyle = _ref.captionStyle,
      commandButtons = _ref.commandButtons,
      withoutClose = _ref.withoutClose,
      children = _ref.children,
      onClose = _ref.onClose;

  var _refRootDiv = (0, _react.useRef)(),
      _refPrevFocused = (0, _react.useRef)(),
      _hKeyDown = (0, _react.useCallback)(function (event) {
    if (_refRootDiv && event.target === _refRootDiv.current && event.keyCode === 27) {
      onClose(event);
    }
  }, []),
      _useClassAnimation = (0, _useClassAnimation2["default"])({
    isShow: isShow,
    CL: CL2,
    S: S2,
    initialWasClosed: false
  }),
      _className = _useClassAnimation.className,
      _style = _useClassAnimation.style,
      _className2 = _className ? className + " " + _className : className;

  (0, _react.useEffect)(function () {
    if (isShow) {
      _refPrevFocused.current = _getPrevFocusedElement();
    }
  }, [isShow]);
  (0, _react.useEffect)(function () {
    if (isShow && _hasFocusFn(_refRootDiv)) {
      _refRootDiv.current.focus();
    }
  }, [isShow]);
  (0, _react.useEffect)(function () {
    if (_style === S2.HIDING && _hasFocusFn(_refPrevFocused)) {
      _refPrevFocused.current.focus();
    }
  });
  return _react["default"].createElement("div", {
    ref: _refRootDiv,
    tabIndex: "0",
    className: _className2,
    style: (0, _extends2["default"])({}, style, {}, _style),
    onClick: _hClickDialog,
    onKeyDown: _hKeyDown
  }, _react["default"].createElement(_Comp["default"].BrowserCaption, {
    rootStyle: captionStyle,
    caption: caption,
    onClose: onClose
  }), _react["default"].createElement("div", null, children), isWithButton && _react["default"].createElement("div", {
    className: CL.D_ACTIONS
  }, commandButtons, !withoutClose && _react["default"].createElement(_Comp["default"].FlatButton, {
    //ref={_refBtClose}
    rootStyle: S.BT_ROOT,
    clDiv: CL.BT_DIV,
    caption: "Close",
    isPrimary: true,
    onClick: onClose
  })));
};

var _default = ModalDialog;
exports["default"] = _default;
//# sourceMappingURL=ModalDialog.js.map
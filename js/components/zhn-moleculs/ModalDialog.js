'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _useClassAnimation2 = require('../zhn-hooks/useClassAnimation');

var _useClassAnimation3 = _interopRequireDefault(_useClassAnimation2);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _hasFocusFn = function _hasFocusFn(ref) {
  return typeof ((ref || {}).current || {}).focus === 'function';
};

var _hClickDialog = function _hClickDialog(event) {
  event.stopPropagation();
};

var ModalDialog = function ModalDialog(_ref) {
  var isShow = _ref.isShow,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? CL.D : _ref$className,
      style = _ref.style,
      _ref$isWithButton = _ref.isWithButton,
      isWithButton = _ref$isWithButton === undefined ? true : _ref$isWithButton,
      caption = _ref.caption,
      captionStyle = _ref.captionStyle,
      commandButtons = _ref.commandButtons,
      withoutClose = _ref.withoutClose,
      children = _ref.children,
      onClose = _ref.onClose;
  var _refRootDiv = (0, _react.useRef)(),
      _refPrevFocused = (0, _react.useRef)(),
      _hKeyDown = (0, _react.useCallback)(function (event) {
    if (_refRootDiv && document.activeElement === _refRootDiv.current && event.keyCode === 27) {
      onClose(event);
    }
  }, []),
      _useClassAnimation = (0, _useClassAnimation3.default)({
    isShow: isShow, CL: CL2, S: S2,
    initialWasClosed: false
  }),
      _className = _useClassAnimation.className,
      _style = _useClassAnimation.style,
      _className2 = _className ? className + ' ' + _className : className;


  (0, _react.useEffect)(function () {
    _refPrevFocused.current = document.activeElement;
  }, []);
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
  return _react2.default.createElement(
    'div',
    {
      ref: _refRootDiv,
      tabIndex: '0',
      className: _className2,
      style: (0, _extends3.default)({}, style, _style),
      onClick: _hClickDialog,
      onKeyDown: _hKeyDown
    },
    _react2.default.createElement(_Comp2.default.BrowserCaption, {
      rootStyle: captionStyle,
      caption: caption,
      onClose: onClose
    }),
    _react2.default.createElement(
      'div',
      null,
      children
    ),
    isWithButton && _react2.default.createElement(
      'div',
      { className: CL.D_ACTIONS },
      commandButtons,
      !withoutClose && _react2.default.createElement(_Comp2.default.FlatButton, {
        //ref={_refBtClose}
        rootStyle: S.BT_ROOT,
        clDiv: CL.BT_DIV,
        caption: 'Close',
        isPrimary: true,
        onClick: onClose
      })
    )
  );
};

exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map
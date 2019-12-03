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

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var CL = {
  SHOWING: 'show-popup',
  HIDING: 'hide-popup'
};

var S = (0, _extends3.default)({}, _Dialog2.default, {
  ROOT_DIV_MODAL: {
    position: 'absolute',
    top: '20%',
    left: '40%',
    display: 'block',
    zIndex: 10
  }
});

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

function _hClickDialog(event) {
  event.stopPropagation();
}

var ModalDialog = function ModalDialog(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      _ref$isWithButton = _ref.isWithButton,
      isWithButton = _ref$isWithButton === undefined ? true : _ref$isWithButton,
      caption = _ref.caption,
      captionStyle = _ref.captionStyle,
      commandButtons = _ref.commandButtons,
      withoutClose = _ref.withoutClose,
      children = _ref.children,
      onClose = _ref.onClose;

  //const _refBtClose = useRef();
  var _useClassAnimation = (0, _useClassAnimation3.default)({
    isShow: isShow, CL: CL, S: S2,
    initialWasClosed: false
  }),
      _className = _useClassAnimation.className,
      _style = _useClassAnimation.style;

  return _react2.default.createElement(
    'div',
    {
      className: _className,
      style: (0, _extends3.default)({}, S.ROOT_DIV, S.ROOT_DIV_MODAL, style, _style),
      onClick: _hClickDialog
    },
    _react2.default.createElement(_BrowserCaption2.default, {
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
      { style: S.COMMAND_DIV },
      commandButtons,
      !withoutClose && _react2.default.createElement(_RaisedButton2.default
      //ref={_refBtClose}
      , { rootStyle: _Dialog2.default.RAISED_ROOT,
        clDiv: _Dialog2.default.CL_RAISED_DIV,
        caption: 'Close',
        isPrimary: true,
        onClick: onClose
      })
    )
  );
};

exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map
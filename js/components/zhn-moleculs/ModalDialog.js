"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useClassAnimation = _interopRequireDefault(require("../hooks/useClassAnimation"));
var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));
var _FlatButton = _interopRequireDefault(require("../zhn-atoms/FlatButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_MD = 'modal-dialog',
  CL_MD_ACTIONS = CL_MD + "__actions",
  CL_BT_DIV = 'bt-flat__div',
  CL = {
    SHOWING: 'dialog show-popup',
    HIDING: 'hide-popup'
  },
  S_CAPTION = {
    paddingTop: 5,
    textAlign: 'center',
    marginBottom: 0
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
const _getPrevFocusedElement = () => {
  const _prevFocused = document._prevFocusedZhn;
  if (_prevFocused) {
    return document._prevFocusedZhn = void 0, _prevFocused;
  }
  return document.activeElement;
};
const _hClickDialog = evt => {
  evt.stopPropagation();
};
const ModalDialog = _ref => {
  let {
    isShow,
    className = CL_MD,
    style,
    isWithButton = true,
    caption,
    captionStyle,
    commandButtons,
    withoutClose,
    children,
    onClose
  } = _ref;
  const _refRootDiv = (0, _uiApi.useRef)(),
    _refPrevFocused = (0, _uiApi.useRef)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      if (evt.target === (0, _uiApi.getRefValue)(_refRootDiv) && evt.keyCode === 27) {
        onClose(evt);
      }
    }, [])
    // onClose
    /*eslint-enable react-hooks/exhaustive-deps */,
    {
      className: _className,
      style: _style
    } = (0, _useClassAnimation.default)({
      isShow,
      CL,
      S,
      initialWasClosed: false
    }),
    _className2 = _className ? className + " " + _className : className;
  (0, _uiApi.useEffect)(() => {
    if (isShow) {
      (0, _uiApi.setRefValue)(_refPrevFocused, _getPrevFocusedElement());
    }
  }, [isShow]);
  (0, _uiApi.useEffect)(() => {
    if (isShow) {
      (0, _uiApi.focusRefElement)(_refRootDiv);
    }
  }, [isShow]);
  (0, _uiApi.useEffect)(() => {
    if (_style === S.HIDING) {
      (0, _uiApi.focusRefElement)(_refPrevFocused);
    }
  });
  return (/*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    (0, _jsxRuntime.jsxs)("div", {
      ref: _refRootDiv,
      role: "dialog",
      tabIndex: "-1",
      "aria-label": caption,
      "aria-hidden": !isShow,
      className: _className2,
      style: {
        ...style,
        ..._style
      },
      onClick: _hClickDialog,
      onKeyDown: _hKeyDown,
      children: [(0, _jsxRuntime.jsx)(_BrowserCaption.default, {
        rootStyle: {
          ...S_CAPTION,
          ...captionStyle
        },
        caption: caption,
        onClose: onClose
      }), (0, _jsxRuntime.jsx)("div", {
        children: children
      }), isWithButton && (0, _jsxRuntime.jsxs)("div", {
        className: CL_MD_ACTIONS,
        children: [commandButtons, !withoutClose && (0, _jsxRuntime.jsx)(_FlatButton.default, {
          clDiv: CL_BT_DIV,
          caption: "Close",
          isPrimary: true,
          onClick: onClose
        })]
      })]
    })
  );
};
var _default = ModalDialog;
exports.default = _default;
//# sourceMappingURL=ModalDialog.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _fUseKey = require("../hooks/fUseKey");
var _useDialogFocus = _interopRequireDefault(require("./useDialogFocus"));
var _FocusTrap = _interopRequireDefault(require("./FocusTrap"));
var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));
var _FlatButton = _interopRequireDefault(require("../zhn-atoms/FlatButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_MD = 'modal-dialog',
  CL_MODAL_DIALOG = `${CL_MD} dialog`,
  CL_MD_ACTIONS = `${CL_MD}__actions`,
  CL_BT_DIV = 'bt-flat__div',
  S_CAPTION = {
    paddingTop: 5,
    textAlign: 'center',
    marginBottom: 0
  };
const _hClickDialog = evt => {
  evt.stopPropagation();
};
const ModalDialog = _ref => {
  let {
    refFocusLast,
    isShow,
    style,
    isWithButton = !0,
    caption,
    captionStyle,
    commandButtons,
    withoutClose,
    children,
    onClose
  } = _ref;
  const _refRootDiv = (0, _uiApi.useRef)(),
    _refBtClose = (0, _uiApi.useRef)(),
    _hKeyDown = (0, _fUseKey.useKeyEscape)(onClose),
    [_className, _showHideStyle] = (0, _styleFn.crShowHide)(isShow, CL_MODAL_DIALOG);
  (0, _useDialogFocus.default)(isShow, _refRootDiv);
  return (0, _jsxRuntime.jsx)(_FocusTrap.default, {
    refEl: _refRootDiv,
    refFirst: _refRootDiv,
    refLast: refFocusLast || _refBtClose,
    style: _showHideStyle,
    children: (0, _jsxRuntime.jsxs)("div", {
      ref: _refRootDiv,
      role: "dialog",
      tabIndex: "-1",
      "aria-label": caption,
      "aria-hidden": !isShow,
      className: _className,
      style: {
        ...style,
        ..._showHideStyle
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
          refBt: _refBtClose,
          clDiv: CL_BT_DIV,
          caption: "Close",
          isPrimary: true,
          onClick: onClose
        })]
      })]
    })
  });
};
var _default = exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map
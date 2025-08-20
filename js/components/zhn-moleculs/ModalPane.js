"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));
var _fUseKey = require("../hooks/fUseKey");
var _useFocus = require("../hooks/useFocus");
var _jsxRuntime = require("preact/jsx-runtime");
const ModalPane = _ref => {
  let {
    isShow,
    className,
    style,
    children,
    onClose,
    onKeyDown,
    ...restProps
  } = _ref;
  const _refEl = (0, _useClickOutside.default)(isShow, onClose),
    _hKeyEscape = (0, _fUseKey.useKeyEscape)(onClose);
  (0, _useFocus.useFocusPrevElement)(isShow);
  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (0, _jsxRuntime.jsx)("div", {
    ...restProps,
    ref: _refEl,
    className: className,
    style: style,
    hidden: !isShow,
    onKeyDown: isShow ? onKeyDown || _hKeyEscape : void 0,
    children: children
  });
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};
var _default = exports.default = ModalPane;
//# sourceMappingURL=ModalPane.js.map
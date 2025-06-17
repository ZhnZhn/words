"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_MODAL_ROOT = 'modal-root',
  CL_MODAL_ROOT_SHOWING = `${CL_MODAL_ROOT} show-modal`;
const ModalContainer = _ref => {
  let {
    isShow,
    children,
    onClose
  } = _ref;
  const [_className, _style] = isShow ? [CL_MODAL_ROOT_SHOWING, _styleFn.S_BLOCK] : [CL_MODAL_ROOT, _styleFn.S_NONE];
  return (0, _jsxRuntime.jsx)("div", {
    role: "presentation",
    className: _className,
    style: _style,
    onClick: onClose,
    children: children
  });
};
var _default = exports.default = ModalContainer;
//# sourceMappingURL=ModalContainer.js.map
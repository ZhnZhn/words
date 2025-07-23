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

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  /*eslint-disable jsx-a11y/click-events-have-key-events*/
  return (0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: _style,
    onClick: onClose,
    children: children
  });
  /*eslint-enable jsx-a11y/click-events-have-key-events*/
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};
var _default = exports.default = ModalContainer;
//# sourceMappingURL=ModalContainer.js.map
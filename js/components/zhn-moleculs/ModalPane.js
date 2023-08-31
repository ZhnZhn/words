"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));
var _jsxRuntime = require("preact/jsx-runtime");
const ModalPane = _ref => {
  let {
    isShow,
    style,
    children,
    onClose
  } = _ref;
  const _refEl = (0, _useClickOutside.default)(isShow, onClose);
  return (0, _jsxRuntime.jsx)("div", {
    ref: _refEl,
    style: style,
    children: children
  });
};
var _default = ModalPane;
exports.default = _default;
//# sourceMappingURL=ModalPane.js.map
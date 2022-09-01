"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));

var _jsxRuntime = require("react/jsx-runtime");

var ModalPane = function ModalPane(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      children = _ref.children,
      onClose = _ref.onClose;

  var _refEl = (0, _useClickOutside["default"])(isShow, onClose);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: _refEl,
    style: style,
    children: children
  });
};

var _default = ModalPane;
exports["default"] = _default;
//# sourceMappingURL=ModalPane.js.map
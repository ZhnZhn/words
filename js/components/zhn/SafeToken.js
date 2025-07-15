"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _domSanitize = _interopRequireDefault(require("../../utils/domSanitize"));
var _jsxRuntime = require("preact/jsx-runtime");
const SafeToken = _ref => {
  let {
    as = "span",
    style,
    token
  } = _ref;
  const Comp = as,
    _token = (0, _domSanitize.default)(token);
  return (0, _isTypeFn.isStrNotBlank)(_token) ? (0, _jsxRuntime.jsx)(Comp, {
    style: style,
    children: _token
  }) : null;
};
var _default = exports.default = SafeToken;
//# sourceMappingURL=SafeToken.js.map
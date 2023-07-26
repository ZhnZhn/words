"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _domSanitize = _interopRequireDefault(require("../../utils/domSanitize"));
var _jsxRuntime = require("react/jsx-runtime");
const _isNotEmptyStr = v => typeof v === 'string' && v !== '';
const SafeToken = _ref => {
  let {
    as = "span",
    style,
    token
  } = _ref;
  const Comp = as,
    _token = (0, _domSanitize.default)(token);
  return _isNotEmptyStr(_token) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, {
    style: style,
    children: _token
  }) : null;
};
var _default = SafeToken;
exports.default = _default;
//# sourceMappingURL=SafeToken.js.map
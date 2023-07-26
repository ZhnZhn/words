"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const _isNotEmptyStr = v => typeof v === 'string' && v !== '';
const SafeToken = _ref => {
  let {
    as = "span",
    style,
    token
  } = _ref;
  const Comp = as;
  return _isNotEmptyStr(token) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, {
    style: style,
    children: token
  }) : null;
};
var _default = SafeToken;
exports.default = _default;
//# sourceMappingURL=SafeToken.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _toLink = _interopRequireDefault(require("./toLink"));
var _jsxRuntime = require("preact/jsx-runtime");
const Link = _ref => {
  let {
    title,
    href,
    ...rest
  } = _ref;
  return (0, _jsxRuntime.jsx)("a", {
    ...rest,
    target: "_blank",
    className: "link",
    href: (0, _toLink.default)(href),
    children: title
  });
};
var _default = exports.default = Link;
//# sourceMappingURL=Link.js.map
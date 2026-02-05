"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SCROLL = 'with-scroll';
const ScrollPane = props => (0, _jsxRuntime.jsx)("div", {
  className: (0, _styleFn.crCn)(props.className, CL_SCROLL),
  style: props.style,
  children: props.children
});
var _default = exports.default = ScrollPane;
//# sourceMappingURL=ScrollPane.js.map
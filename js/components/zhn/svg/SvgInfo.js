"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SvgIcon = _interopRequireDefault(require("./SvgIcon"));
var _jsxRuntime = require("preact/jsx-runtime");
const SvgInfo = props => (0, _jsxRuntime.jsxs)(_SvgIcon.default, {
  ...props,
  children: [(0, _jsxRuntime.jsx)("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), (0, _jsxRuntime.jsx)("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), (0, _jsxRuntime.jsx)("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "8"
  })]
});
var _default = exports.default = SvgInfo;
//# sourceMappingURL=SvgInfo.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SvgIcon = _interopRequireDefault(require("./SvgIcon"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_SVG = {
  transform: 'scale(1.3) translate(0px, 5px)'
};
const SvgAddBookmark = props => (0, _jsxRuntime.jsxs)(_SvgIcon.default, {
  stroke: "currentColor",
  style: S_SVG,
  children: [(0, _jsxRuntime.jsx)("path", {
    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
  }), (0, _jsxRuntime.jsx)("line", {
    x1: "12",
    x2: "12",
    y1: "7",
    y2: "13"
  }), (0, _jsxRuntime.jsx)("line", {
    x1: "15",
    x2: "9",
    y1: "10",
    y2: "10"
  })]
});
var _default = exports.default = SvgAddBookmark;
//# sourceMappingURL=SvgAddBookmark.js.map
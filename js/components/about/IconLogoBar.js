"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _IconGitHub = _interopRequireDefault(require("./IconGitHub"));
var _IconWordsApi = _interopRequireDefault(require("./IconWordsApi"));
var _IconPreact = _interopRequireDefault(require("./IconPreact"));
var _jsxRuntime = require("preact/jsx-runtime");
const IconLogoBar = () => (0, _jsxRuntime.jsxs)("div", {
  className: "logos",
  children: [(0, _jsxRuntime.jsx)(_IconGitHub.default, {
    ariaLabel: "GitHub: Repository of web app Words",
    href: "https://github.com/zhnzhn/words/"
  }), (0, _jsxRuntime.jsx)(_IconWordsApi.default, {}), (0, _jsxRuntime.jsx)(_IconPreact.default, {})]
});
var _default = exports.default = IconLogoBar;
//# sourceMappingURL=IconLogoBar.js.map
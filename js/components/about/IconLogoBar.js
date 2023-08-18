"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _IconGitHub = _interopRequireDefault(require("./IconGitHub"));
var _IconWordsApi = _interopRequireDefault(require("./IconWordsApi"));
var _IconPreact = _interopRequireDefault(require("./IconPreact"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROOT = {
  textAlign: 'center',
  paddingTop: 20
};
const IconLogoBar = _ref => {
  let {
    iconStyle,
    iconGitHubStyle
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [(0, _jsxRuntime.jsx)(_IconGitHub.default, {
      style: iconGitHubStyle,
      ariaLabel: "GitHub: Repository of web app Words",
      href: "https://github.com/zhnzhn/words/"
    }), (0, _jsxRuntime.jsx)(_IconWordsApi.default, {
      style: iconStyle
    }), (0, _jsxRuntime.jsx)(_IconPreact.default, {
      style: iconStyle
    })]
  });
};
var _default = IconLogoBar;
exports.default = _default;
//# sourceMappingURL=IconLogoBar.js.map
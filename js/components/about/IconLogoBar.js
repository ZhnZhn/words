"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _IconGitHub = _interopRequireDefault(require("./IconGitHub"));

var _IconWordsApi = _interopRequireDefault(require("./IconWordsApi"));

var _IconReact = _interopRequireDefault(require("./IconReact"));

var S = {
  ROOT: {
    textAlign: 'center',
    paddingTop: 20
  }
};

var IconLogoBar = function IconLogoBar(_ref) {
  var iconStyle = _ref.iconStyle,
      iconGitHubStyle = _ref.iconGitHubStyle;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IconGitHub["default"], {
      style: iconGitHubStyle,
      title: "GitHub Repository",
      href: "https://github.com/zhnzhn/words/"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconWordsApi["default"], {
      style: iconStyle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconReact["default"], {
      style: iconStyle
    })]
  });
};

var _default = IconLogoBar;
exports["default"] = _default;
//# sourceMappingURL=IconLogoBar.js.map
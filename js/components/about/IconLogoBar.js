"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
  return _react["default"].createElement("div", {
    style: S.ROOT
  }, _react["default"].createElement(_IconGitHub["default"], {
    style: iconGitHubStyle,
    title: "GitHub Repository",
    href: "https://github.com/zhnzhn/words/"
  }), _react["default"].createElement(_IconWordsApi["default"], {
    style: iconStyle
  }), _react["default"].createElement(_IconReact["default"], {
    style: iconStyle
  }));
};

var _default = IconLogoBar;
exports["default"] = _default;
//# sourceMappingURL=IconLogoBar.js.map
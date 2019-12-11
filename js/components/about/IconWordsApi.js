"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var IconWordsApi = function IconWordsApi(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("a", {
    className: "icon__words",
    style: style,
    href: "https://www.wordsapi.com/"
  }, _react["default"].createElement("img", {
    alt: "Logo WordsApi",
    src: "css/wordsapilogo.png"
  }));
};

var _default = IconWordsApi;
exports["default"] = _default;
//# sourceMappingURL=IconWordsApi.js.map
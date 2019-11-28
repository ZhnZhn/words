"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconWordsApi = function IconWordsApi(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    "a",
    {
      className: "icon__words",
      style: style,
      href: "https://www.wordsapi.com/"
    },
    _react2.default.createElement("img", {
      alt: "Logo WordsApi",
      src: "css/wordsapilogo.png"
    })
  );
};

exports.default = IconWordsApi;
//# sourceMappingURL=IconWordsApi.js.map
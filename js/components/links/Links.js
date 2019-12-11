"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _withProps = _interopRequireDefault(require("../hoc/withProps"));

var _Link = _interopRequireDefault(require("../zhn-atoms/Link"));

var WordsApi = (0, _withProps["default"])({
  title: "WordsApi",
  href: "https://www.wordsapi.com/"
})(_Link["default"]);
var Link = {
  WordsApi: WordsApi
};
var _default = Link;
exports["default"] = _default;
//# sourceMappingURL=Links.js.map
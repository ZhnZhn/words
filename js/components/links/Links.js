"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _withProps = _interopRequireDefault(require("../hoc/withProps"));
var _Link = _interopRequireDefault(require("../zhn/Link"));
const WordsApi = (0, _withProps.default)({
  title: "WordsApi",
  href: "https://www.wordsapi.com/"
})(_Link.default);
const RapidApi = (0, _withProps.default)({
  title: "RapidApi",
  href: "https://rapidapi.com/dpventures/api/wordsapi/details"
})(_Link.default);
const Link = {
  WordsApi,
  RapidApi
};
var _default = exports.default = Link;
//# sourceMappingURL=Links.js.map
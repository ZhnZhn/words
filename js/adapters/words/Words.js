"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _WordsAdapter = _interopRequireDefault(require("./WordsAdapter"));

var _WordsApi = _interopRequireDefault(require("./WordsApi"));

var Words = {
  api: _WordsApi["default"],
  adapter: _WordsAdapter["default"]
};
var _default = Words;
exports["default"] = _default;
//# sourceMappingURL=Words.js.map
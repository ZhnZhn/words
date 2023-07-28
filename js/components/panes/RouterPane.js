"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _PaneType = _interopRequireDefault(require("./PaneType1"));
var _Word = _interopRequireDefault(require("../items/word/Word"));
var _InputWord = _interopRequireDefault(require("./InputWord"));
var _InputRandom = _interopRequireDefault(require("./InputRandom"));
const R = {
  DF: {
    Pane: _PaneType.default,
    Input: _InputWord.default,
    Item: _Word.default
  },
  R: {
    Pane: _PaneType.default,
    Input: _InputRandom.default,
    Item: _Word.default
  }
};
const RouterPane = {
  getElement: type => type && R[type] || R.DF
};
var _default = RouterPane;
exports.default = _default;
//# sourceMappingURL=RouterPane.js.map
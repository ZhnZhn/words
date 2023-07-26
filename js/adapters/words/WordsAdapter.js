"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _domSanitize = _interopRequireDefault(require("../../utils/domSanitize"));
const _assign = Object.assign,
  EMPTY = '';
const _crConfig = json => {
  const {
      word,
      frequency = EMPTY,
      pronunciation
    } = json || {},
    {
      all = EMPTY
    } = pronunciation || {},
    _pron = all ? "[" + (0, _domSanitize.default)(all) + "]" : EMPTY,
    _caption = (0, _domSanitize.default)(word);
  return _assign(json || {}, {
    caption: _caption,
    id: _caption || 'id',
    title: _caption + ": " + (0, _domSanitize.default)(frequency) + " " + _pron
  });
};
const WordsAdapter = {
  toConfig(json, option) {
    return _crConfig(json);
  }
};
var _default = WordsAdapter;
exports.default = _default;
//# sourceMappingURL=WordsAdapter.js.map
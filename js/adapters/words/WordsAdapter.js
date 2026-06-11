"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fnArr = require("../../utils/fnArr");
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
    _pron = all ? `[${(0, _domSanitize.default)(all)}]` : EMPTY,
    _caption = (0, _domSanitize.default)(word);
  return _assign(json || {}, {
    caption: _caption,
    id: _caption || 'id',
    title: (0, _fnArr.joinByColon)(_caption, (0, _fnArr.joinByBlank)((0, _domSanitize.default)(frequency), _pron))
  });
};
const WordsAdapter = {
  toConfig(json) {
    return _crConfig(json);
  }
};
var _default = exports.default = WordsAdapter;
//# sourceMappingURL=WordsAdapter.js.map
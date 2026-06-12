"use strict";

exports.__esModule = true;
exports.default = void 0;
var _fnArr = require("../../utils/fnArr");
const BLANK = '';
const _crConfig = json => {
  const {
      word,
      frequency = BLANK,
      pronunciation
    } = json || {},
    {
      all = BLANK
    } = pronunciation || {},
    _pron = all ? `[${all}]` : BLANK,
    _caption = word;
  return {
    ...json,
    caption: _caption,
    id: _caption || 'id',
    title: (0, _fnArr.joinByColon)(_caption, (0, _fnArr.joinByBlank)(frequency, _pron))
  };
};
const WordsAdapter = {
  toConfig(json) {
    return _crConfig(json);
  }
};
var _default = exports.default = WordsAdapter;
//# sourceMappingURL=WordsAdapter.js.map
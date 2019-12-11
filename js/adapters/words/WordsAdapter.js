"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var EMPTY = '';

var _crConfig = function _crConfig(json) {
  var word = json.word,
      _json$frequency = json.frequency,
      frequency = _json$frequency === void 0 ? EMPTY : _json$frequency,
      _json$pronunciation = json.pronunciation,
      pronunciation = _json$pronunciation === void 0 ? {} : _json$pronunciation,
      _pronunciation$all = pronunciation.all,
      all = _pronunciation$all === void 0 ? EMPTY : _pronunciation$all,
      _pron = all ? "[" + all + "]" : EMPTY;

  return Object.assign(json, {
    caption: word,
    id: word || 'id',
    title: word + ": " + frequency + " " + _pron
  });
};

var WordsAdapter = {
  toConfig: function toConfig(json, option) {
    if (json === void 0) {
      json = {};
    }

    return _crConfig(json);
  }
};
var _default = WordsAdapter;
exports["default"] = _default;
//# sourceMappingURL=WordsAdapter.js.map
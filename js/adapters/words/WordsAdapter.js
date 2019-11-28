'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var EMPTY = '';

var _crConfig = function _crConfig(json) {
  var word = json.word,
      _json$frequency = json.frequency,
      frequency = _json$frequency === undefined ? EMPTY : _json$frequency,
      _json$pronunciation = json.pronunciation,
      pronunciation = _json$pronunciation === undefined ? {} : _json$pronunciation,
      _pronunciation$all = pronunciation.all,
      all = _pronunciation$all === undefined ? EMPTY : _pronunciation$all,
      _pron = all ? '[' + all + ']' : EMPTY;

  return Object.assign(json, {
    caption: word,
    id: word || 'id',
    title: word + ': ' + frequency + ' ' + _pron
  });
};

var WordsAdapter = {
  toConfig: function toConfig() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var option = arguments[1];

    return _crConfig(json);
  }
};

exports.default = WordsAdapter;
//# sourceMappingURL=WordsAdapter.js.map
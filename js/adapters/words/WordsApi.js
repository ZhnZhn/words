'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var C = {
  URL: 'https://wordsapiv1.p.mashape.com/words'
};

var WordsApi = {
  crOptions: function crOptions(option) {
    var apiKey = option.apiKey;

    return {
      headers: {
        'X-Mashape-Key': apiKey
      }
    };
  },
  getRequestUrl: function getRequestUrl(option) {
    var _option$word = option.word,
        word = _option$word === undefined ? 'example' : _option$word,
        _option$itemConf = option.itemConf,
        itemConf = _option$itemConf === undefined ? {} : _option$itemConf,
        loadType = itemConf.loadType;

    if (loadType === 'R') {
      return C.URL + '/?random=true';
    }
    return C.URL + '/' + word;
  },
  checkResponse: function checkResponse() {
    return true;
  }
};

exports.default = WordsApi;
//# sourceMappingURL=WordsApi.js.map
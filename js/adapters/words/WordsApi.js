"use strict";

exports.__esModule = true;
exports["default"] = void 0;
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
        word = _option$word === void 0 ? 'example' : _option$word,
        _option$itemConf = option.itemConf,
        itemConf = _option$itemConf === void 0 ? {} : _option$itemConf,
        loadType = itemConf.loadType;

    if (loadType === 'R') {
      return C.URL + "/?random=true";
    }

    return C.URL + "/" + word;
  },
  checkResponse: function checkResponse() {
    return true;
  }
};
var _default = WordsApi;
exports["default"] = _default;
//# sourceMappingURL=WordsApi.js.map
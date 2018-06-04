'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = {
  wordsApi: undefined
};

var CHAR_X = 'X';

var Settings = {

  isApiKeyAllow: function isApiKeyAllow(apiKey) {
    var _max = apiKey.length;
    var i = 0;
    for (; i < _max; i++) {
      if (apiKey[i] !== CHAR_X) {
        break;
      }
    }
    return i !== _max ? true : false;
  },

  settingFn: function settingFn() {
    return {
      key1: this.fSetKey('wordsApi')
    };
  },


  fSetKey: function fSetKey(propName) {
    return function (value) {
      _settings[propName] = value;
    };
  },
  getKey: function getKey(id) {
    return _settings[id];
  }
};

exports.default = Settings;
//# sourceMappingURL=Settings.js.map
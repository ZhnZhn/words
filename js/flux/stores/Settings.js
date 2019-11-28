'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = {
  wordsApi: void 0
};

var Settings = {
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
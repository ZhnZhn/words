"use strict";

exports.__esModule = true;
exports["default"] = void 0;
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
var _default = Settings;
exports["default"] = _default;
//# sourceMappingURL=Settings.js.map
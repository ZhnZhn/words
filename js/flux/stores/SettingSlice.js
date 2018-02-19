'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SettingSlice = {
  settings: {
    wordsKey: 'wO7v0DEsY1mshL8jSc9dywEFHzaQp1mzG0cjsnjuMJzJE6S4Bn'
  },

  exportSettingsFn: function exportSettingsFn() {
    return {
      setWordsKey: this.setWordsKey.bind(this)
    };
  },
  setWordsKey: function setWordsKey(value) {
    this.settings.wordsKey = value;
  },
  getWordsKey: function getWordsKey() {
    return this.settings.wordsKey;
  }
};

exports.default = SettingSlice;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\stores\SettingSlice.js.map
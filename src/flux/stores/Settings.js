
const _settings = {
  wordsApi: void 0
};

const CHAR_X = 'X';

const Settings = {

  isApiKeyAllow: (apiKey) => {
    const _max = apiKey.length;
    let i = 0;
    for (; i<_max; i++) {
      if (apiKey[i] !== CHAR_X) {
        break;
      }
    }
    return i !== _max ? true : false;
  },

  settingFn(){
    return {
      key1: this.fSetKey('wordsApi'),
    }
  },

  fSetKey: (propName) => (value) => {
    _settings[propName] = value
  },
  getKey(id){
    return _settings[id];
  }

}

export default Settings

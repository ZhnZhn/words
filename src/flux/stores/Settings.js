
const _settings = {
  wordsApi: void 0
};

const Settings = {  
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
};

export default Settings

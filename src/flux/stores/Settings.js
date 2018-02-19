
const _settings = {
  wordsApi: undefined
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

}

export default Settings

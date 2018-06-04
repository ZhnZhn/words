
import Settings from '../stores/Settings'

import Adapter from '../../adapters/Adapter'

const MSG_ERR_TAIL = 'API key is not set. \nPlease, set in Settings Dialog [s]\nand try again.';
const MSG_ERR_DF = 'Unknow data API provider';

const RouterApiConf = {
  getApiConf: (id) => {
    switch(id){
      case 'WD':
        return {
          apiKey: Settings.getKey('wordsApi'),
          isApiKeyAllow: Settings.isApiKeyAllow,
          api: Adapter.Words.api,
          adapter: Adapter.Words.adapter,
          msgErr: `WordsApi ${MSG_ERR_TAIL}`
        };
      default: return {
        msgErr: MSG_ERR_DF
      };
    }
  }
}

export default RouterApiConf

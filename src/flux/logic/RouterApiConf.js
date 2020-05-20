
import Settings from '../stores/Settings'

import Adapter from '../../adapters/Adapter'

const MSG_ERR_TAIL = 'API key is not set \nin User Settings Dialog [s].';
const MSG_ERR_DF = 'Unknow data API provider';

const RouterApiConf = {
  getApiConf: (id) => {
    switch(id){
      case 'WD':
        return {
          apiKey: Settings.getKey('wordsApi'),
          api: Adapter.Words.api,
          adapter: Adapter.Words.adapter,
          msgErr: `WordsApi's ${MSG_ERR_TAIL}`
        };
      default: return {
        msgErr: MSG_ERR_DF
      };
    }
  }
}

export default RouterApiConf

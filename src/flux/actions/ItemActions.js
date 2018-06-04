import Reflux from 'reflux'

import Store from '../stores/Store'

import RouterApiConf from '../logic/RouterApiConf'
import loadItem from '../logic/loadItem'

export const T = {
  LOAD_ITEM: 'loadItem',
  LOAD_ITEM_COMPLETED: 'loadItemCompleted',
  LOAD_ITEM_FAILED: 'loadItemFailed',

  REMOVE_ITEM: 'removeItem',
  REMOVE_ITEMS: 'removeItems',
  REMOVE_ITEMS_UNDER: 'removeItemsUnder'
};

const Actions = Reflux.createActions({
  [T.LOAD_ITEM]: {
    children: ['completed', 'failed']
  },
  [T.REMOVE_ITEM]: {},
  [T.REMOVE_ITEMS]: {},
  [T.REMOVE_ITEMS_UNDER]: {}
});


const _crDbLoadMsg = word => `Item '${word}' has been already loaded.`;

const MSG_KEY_NOT_ALLOWED = "It looks like you try to use not valid saved api key by Password Manager not allowed before. Please, reenter api key, check let check box before."

Actions[T.LOAD_ITEM].listen(function(option={}){

  const { itemConf={}, word='' } = option
      , { paneId } = itemConf;
  if (Store.isItem(paneId, word)){
    this.failed({ msg: _crDbLoadMsg(word) })
    return undefined;
  }

  const { loadId='WD' } = option
      , {
          apiKey, isApiKeyAllow,
          adapter, api,
          msgErr
        } = RouterApiConf.getApiConf(loadId);
  if (apiKey){
    if (isApiKeyAllow(apiKey)) {
      Object.assign(option, { apiKey, adapter, api })
      loadItem(option, this.completed, this.failed)
    } else {
      this.failed({ msg: MSG_KEY_NOT_ALLOWED })
    }
  } else {
    this.failed({ msg: msgErr })
  }
})


export default Actions

import Reflux from 'reflux'

//import throttle from '../../utils/throttle'

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

/*
Actions.loadItem = throttle(
  Actions.loadItem,
  2500, {
    trailing: false
  }
);
*/

const _crDbLoadMsg = word => `Item '${word}' has been already loaded`;

Actions[T.LOAD_ITEM].listen(function(option={}){

  const { itemConf={}, word='' } = option
      , { paneId } = itemConf;
  if (Store.isItem(paneId, word)){
    this.failed({ msg: _crDbLoadMsg(word) })
    return undefined;
  }

  const { loadId='WD' } = option
      , {
          apiKey,
          adapter, api,
          msgErr
        } = RouterApiConf.getApiConf(loadId);
  if (apiKey){
    Object.assign(option, { apiKey, adapter, api })
    loadItem(option, this.completed, this.failed)
  } else {
    this.failed({ msg: msgErr })
  }
})


export default Actions

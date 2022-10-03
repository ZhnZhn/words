import Reflux from 'reflux-core';

import Store from '../stores/Store';

import RouterApiConf from '../logic/RouterApiConf';
import loadItem from '../logic/loadItem';

export const IAT_LOAD_ITEM = 'loadItem'
export const IAT_LOAD_ITEM_COMPLETED = 'loadItemCompleted'
export const IAT_LOAD_ITEM_FAILED = 'loadItemFailed'

export const IAT_REMOVE_ITEM = 'removeItem'
export const IAT_REMOVE_ITEMS = 'removeItems'
export const IAT_REMOVE_ITEMS_UNDER = 'removeItemsUnder'

const Actions = Reflux.createActions({
  [IAT_LOAD_ITEM]: {
    children: ['completed', 'failed']
  },
  [IAT_REMOVE_ITEM]: {},
  [IAT_REMOVE_ITEMS]: {},
  [IAT_REMOVE_ITEMS_UNDER]: {}
});

const _assign = Object.assign
, _crDbLoadMsg = word => `Item '${word}' has been already loaded.`;

Actions[IAT_LOAD_ITEM].listen(function(option={}){
  const {
    itemConf={},
    word=''
  } = option
  , { paneId } = itemConf;
  if (Store.isItem(paneId, word)){
    this.failed({ msg: _crDbLoadMsg(word) })
    return;
  }

  const {
    loadId='WD'
  } = option
  , {
    apiKey,
    adapter, api,
    msgErr
  } = RouterApiConf.getApiConf(loadId);
  if (apiKey){
    _assign(option, { apiKey, adapter, api })
    loadItem(option, this.completed, this.failed)
  } else {
    this.failed({ msg: msgErr })
  }
});

export const ItemActions = Actions

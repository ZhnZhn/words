import RouterApiConf from './logic/RouterApiConf';
import loadItemImpl from './logic/loadItem';

import {
  IAT_LOAD_ITEM_LOADING,
  IAT_LOAD_ITEM_COMPLETED,
  IAT_LOAD_ITEM_FAILED
} from './actions/ItemActions';

import {
  isItemImpl,
  addItemImpl,
  removeItemImpl,
  removeItemsImpl,
  removeItemsUnderImpl
} from './itemFn';

import {
  createStoreWithSelector,
  fCrUse
} from './storeApi';
import {
  showMd,
  showPane
} from './compStore';

const _assign = Object.assign
, _crDbLoadMsg = word => `Item '${word}' has been already loaded.`;

const _crStore = () => ({
  loading: void 0,
  limitRemaining: void 0,
  items: {},
  msItem: void 0
})
, itemStore = createStoreWithSelector(_crStore)
, _selectItems = state => state.items
, _selectLoading = state => state.loading
, _selectLimitRemaining = state => state.limitRemaining
, _selectMsItem = state => state.msItem
, _set = itemStore.setState
, _get = itemStore.getState;

export const useLoading = fCrUse(itemStore, _selectLoading)
export const useLimitRemaining = fCrUse(itemStore, _selectLimitRemaining)
export const useMsItem = fCrUse(itemStore, _selectMsItem)

const _loadItemFailed = (option) => {
  showMd('ALERT_DIALOG', option)
  _set({ loading: IAT_LOAD_ITEM_FAILED })
}
, _loadItemCompleted = (result, option) => {
  const {
    config,
    itemConf
  } = result
  , { limitRemaining } = option
  , _nextState = {
    loading: IAT_LOAD_ITEM_COMPLETED,
    limitRemaining,
  };

  if (config) {
    _nextState.msItem = addItemImpl(
       _selectItems(_get()),
       config,
       itemConf
     )
  }
  _set(_nextState)
}

export const loadItem = (option={}) => {
  const {
    itemConf={},
    word=''
  } = option
  , { paneId } = itemConf;
  if (isItemImpl(paneId, word)){
    _loadItemFailed({ msg: _crDbLoadMsg(word) })
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
    showPane(option.itemConf)
    _set({ loading: IAT_LOAD_ITEM_LOADING })
    loadItemImpl(option, _loadItemCompleted, _loadItemFailed)
  } else {
    _loadItemFailed({ msg: msgErr })
  }
}

export const removeItem = (config) => {
  const _options = removeItemImpl(
    _selectItems(_get()),
    config
  )
  if (_options) {
    _set({ msItem: _options })
  }
}
export const removeItems = (paneId) => {
  removeItemsImpl(
    _selectItems(_get()),
    paneId
  )
  _set({
    msItem: {
      configs: [],
      id: paneId
    }
  })
}
export const removeItemsUnder = (config) => {
  const _option = removeItemsUnderImpl(
    _selectItems(_get()),
    config
  )
  if (_option){
    _set({ msItem: _option })
  }
}

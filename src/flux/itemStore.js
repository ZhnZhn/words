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
  getStoreApi,
  fCrStoreSlice,
  fCrUse,
  fCrSetSlice,
  fCrGetSlice,
} from './storeApi';
import {
  showMd,
  showPane
} from './compStore';

const _assign = Object.assign
, _crDbLoadMsg = word => `Item '${word}' has been already loaded.`;

const [
  _crLoading,
  _selectLoading
] = fCrStoreSlice("loading")
, [
  _crLimitRemaining,
  _selectLimitRemaining
] = fCrStoreSlice("limitRemaining")
, [
  _crMsItem,
  _selectMsItem
] = fCrStoreSlice("msItem")
, [
  _crItems,
  _selectItems
] = fCrStoreSlice("items")

const _crStore = () => ({
  ..._crLoading(),
  ..._crLimitRemaining(),
  ..._crMsItem(),
  ..._crItems({})
})
, itemStore = createStoreWithSelector(_crStore)
, [_set, _get] = getStoreApi(itemStore)
, _setMsItem = fCrSetSlice(_set, _crMsItem)
, _getItems = fCrGetSlice(_get, _selectItems);

export const useLoading = fCrUse(itemStore, _selectLoading)
export const useLimitRemaining = fCrUse(itemStore, _selectLimitRemaining)
export const useMsItem = fCrUse(itemStore, _selectMsItem)

const _loadItemFailed = (option) => {
  showMd('ALERT_DIALOG', option)
  _set(_crLoading(IAT_LOAD_ITEM_FAILED))
}
, _loadItemCompleted = (result, option) => {
  const {
    config,
    itemConf
  } = result;

  _set({
    ...(config
      ? _crMsItem(addItemImpl(
          _selectItems(_get()),
          config,
          itemConf
      ))
      : void 0),
    ..._crLoading(IAT_LOAD_ITEM_COMPLETED),
    ..._crLimitRemaining(option.limitRemaining)
  })
}

export const loadItem = (option={}) => {
  const {
    itemConf={},
    word=''
  } = option
  , { paneId } = itemConf;
  if (isItemImpl(_getItems(), paneId, word)){
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
    _set(_crLoading(IAT_LOAD_ITEM_LOADING))
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
   _setMsItem(_options)
  }
}

export const removeItems = (paneId) => {
  removeItemsImpl(
    _getItems(),
    paneId
  )

  _setMsItem({
    configs: [],
    id: paneId
  })
}

export const removeItemsUnder = (config) => {
  const _option = removeItemsUnderImpl(
    _getItems(),
    config
  )
  if (_option){
    _setMsItem(_option)
  }
}

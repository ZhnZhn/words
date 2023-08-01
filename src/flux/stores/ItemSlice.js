import {
  IAT_LOAD_ITEM_COMPLETED
} from '../actions/ItemActions';

import {
  showMd,
  showPane
} from '../useCompStore';

import {
  LPAT_LOADING,
  LPAT_LOADING_COMPLETE,
  LPAT_LOADING_FAILED
} from '../actions/LoadingActions';

import {
  isItem,
  addItem,
  removeItem,
  removeItems,
  removeItemsUnder
} from './itemFn';

const ItemSlice = {
  items: {},

  isItem(paneId, word) {
    return isItem(this.items, paneId, word);
  },

  onLoadItem(option={}){
    showPane(option.itemConf)
    this.triggerLoading(LPAT_LOADING)
  },
  onLoadItemCompleted(result, option){
    const {
      config,
      itemConf
    } = result
    , { limitRemaining } = option;
    if (config) {
      const _option = addItem(this.items, config, itemConf);
      this.trigger(IAT_LOAD_ITEM_COMPLETED, _option)
    }
    this.triggerLoading(LPAT_LOADING_COMPLETE, limitRemaining)
  },
  onLoadItemFailed(option){
    showMd('ALERT_DIALOG', option)
    this.triggerLoading(LPAT_LOADING_FAILED)
  },

  onRemoveItem(config){
    const _options = removeItem(this.items, config)
    if (_options) {
      this.trigger(IAT_LOAD_ITEM_COMPLETED, _options)
    }
  },
  onRemoveItems(paneId){
    removeItems(this.items, paneId)
    this.trigger(IAT_LOAD_ITEM_COMPLETED, {
      configs: [],
      id: paneId
    })
  },
  onRemoveItemsUnder(config){
    const _option = removeItemsUnder(this.items, config)
    if (_option){
      this.trigger(IAT_LOAD_ITEM_COMPLETED, _option)
    }
  }
};

export default ItemSlice

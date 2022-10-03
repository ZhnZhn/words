import {
  IAT_LOAD_ITEM_COMPLETED
} from '../actions/ItemActions';
import {
  ComponentActions
} from '../actions/ComponentActions';
import { T as LPT } from '../actions/LoadingActions';

const _isArr = Array.isArray;

const Logic = {
  addItem(slice, config, itemConf){
    const { paneId='paneId' } = itemConf;
    config.paneId = paneId

    const paneSlice = slice[paneId] || {}
    , { configs } = paneSlice;
    if (_isArr(configs)) {
      if (!Logic._isItem(configs, config.id)) {
        configs.unshift(config)
      }
    } else {
      slice[paneId] = {
        configs: [ config ]
      };
    }
    return {
      configs: slice[paneId].configs,
      id: paneId
    };
  },

  _isItem(configs, id){
    return _isArr(configs) &&
      configs.findIndex(c => c.id === id) !== -1;
  },

  isItem(slice, paneId, id){
    const paneSlice = slice[paneId] || {}
    , { configs } = paneSlice;
    return Logic._isItem(configs, id);
  },

  _isConfigs(slice){
    return slice
      && _isArr(slice.configs);
  },

  removeItem(slice, config){
    const { paneId, id } = config
        , paneSlice = slice[paneId];
    if ( this._isConfigs(paneSlice) ) {
      slice[paneId].configs = paneSlice.configs
        .filter(c => c.id !== id )
      return {
        configs: slice[paneId].configs,
        id: paneId
      };
    } else {
      return;
    }
  },

  removeItems(slice, paneId){
    const paneSlice = slice[paneId]
    if (paneSlice) {
      paneSlice.configs = []
    }
  },

  removeItemsUnder(slice, config={}){
    const { paneId, id } = config
    , paneSlice = slice[paneId];
    if ( this._isConfigs(paneSlice) ) {
      const _undexIndex = paneSlice.configs
        .findIndex(c => c.id === id )
      paneSlice.configs = paneSlice.configs
         .slice(_undexIndex+1)
      return {
         configs: paneSlice.configs,
         id: paneId
       };
    }
    return;
  }
};

const ItemSlice = {
  items: {},

  isItem(paneId, word) {
    return Logic.isItem(this.items, paneId, word);
  },

  onLoadItem(option={}){
    ComponentActions.showPane(option.itemConf)
    this.triggerLoading(LPT.LOADING)
  },
  onLoadItemCompleted(result, option){
    const {
      config,
      itemConf
    } = result
    , { limitRemaining } = option;
    if (config) {
      const _option = Logic.addItem(this.items, config, itemConf);
      this.trigger(IAT_LOAD_ITEM_COMPLETED, _option)
    }
    this.triggerLoading(LPT.LOADING_COMPLETE, limitRemaining)
  },
  onLoadItemFailed(option){
    ComponentActions.showModalDialog('ALERT_DIALOG', option)
    this.triggerLoading(LPT.LOADING_FAILED)
  },

  onRemoveItem(config){
    const _options = Logic.removeItem(this.items, config)
    if (_options) {
      this.trigger(IAT_LOAD_ITEM_COMPLETED, _options)
    }
  },
  onRemoveItems(paneId){
    Logic.removeItems(this.items, paneId)
    this.trigger(IAT_LOAD_ITEM_COMPLETED, {
      configs: [],
      id: paneId
    })
  },
  onRemoveItemsUnder(config){
    const _option = Logic.removeItemsUnder(this.items, config)
    if (_option){
      this.trigger(IAT_LOAD_ITEM_COMPLETED, _option)
    }
  }
};

export default ItemSlice

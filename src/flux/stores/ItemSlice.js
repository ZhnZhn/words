
import { T } from '../actions/ItemActions'
import ComponentActions from '../actions/ComponentActions'
import { T as LPT } from '../actions/LoadingActions'


const Logic = {
  addItem(slice, config, itemConf){
    const { paneId='paneId' } = itemConf;
    config.paneId = paneId

    const paneSlice = slice[paneId] || {}
       , { configs } = paneSlice;
    if (Array.isArray(configs)) {
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
    return  Array.isArray(configs) &&
      configs.findIndex(c => c.id === id) !== -1
      ? true
      : false;
  },

  isItem(slice, paneId, id){
    const paneSlice = slice[paneId] || {}
       , { configs } = paneSlice;
    return Logic._isItem(configs, id);
  },

  _isConfigs(slice){
    return slice
      && Array.isArray(slice.configs);
  },

  removeItem(slice, config){
    const { paneId, id } = config
        , paneSlice = slice[paneId];
    if ( this._isConfigs(paneSlice) ) {
      slice[paneId].configs = paneSlice.configs
        .filter(c => c.id !== id )
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
    return undefined;
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
            config, itemConf
          } = result
        , { limitRemaining } = option;
    if (config) {
      const _option = Logic.addItem(this.items, config, itemConf);
      this.trigger(T.LOAD_ITEM_COMPLETED, _option)
    }
    this.triggerLoading(LPT.LOADING_COMPLETE, limitRemaining)
  },
  onLoadItemFailed(option){
    ComponentActions.showModalDialog('ALERT_DIALOG', option)
    this.triggerLoading(LPT.LOADING_FAILED)
  },

  onRemoveItem(config){
    Logic.removeItem(this.items, config)
  },
  onRemoveItems(paneId){
    Logic.removeItems(this.items, paneId)
    this.trigger(T.LOAD_ITEM_COMPLETED, {
      configs: [], id: paneId
    })
  },
  onRemoveItemsUnder(config){
    const _option = Logic.removeItemsUnder(this.items, config)
    if (_option){
      this.trigger(T.LOAD_ITEM_COMPLETED, _option)
    }
  }
};

export default ItemSlice

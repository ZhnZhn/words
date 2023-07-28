"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ItemActions = require("../actions/ItemActions");
var _useCompStore = require("../useCompStore");
var _ComponentActions = require("../actions/ComponentActions");
var _LoadingActions = require("../actions/LoadingActions");
const _isArr = Array.isArray;
const Logic = {
  addItem(slice, config, itemConf) {
    const {
      paneId = 'paneId'
    } = itemConf;
    config.paneId = paneId;
    const paneSlice = slice[paneId] || {},
      {
        configs
      } = paneSlice;
    if (_isArr(configs)) {
      if (!Logic._isItem(configs, config.id)) {
        configs.unshift(config);
      }
    } else {
      slice[paneId] = {
        configs: [config]
      };
    }
    return {
      configs: slice[paneId].configs,
      id: paneId
    };
  },
  _isItem(configs, id) {
    return _isArr(configs) && configs.findIndex(c => c.id === id) !== -1;
  },
  isItem(slice, paneId, id) {
    const paneSlice = slice[paneId] || {},
      {
        configs
      } = paneSlice;
    return Logic._isItem(configs, id);
  },
  _isConfigs(slice) {
    return slice && _isArr(slice.configs);
  },
  removeItem(slice, config) {
    const {
        paneId,
        id
      } = config,
      paneSlice = slice[paneId];
    if (this._isConfigs(paneSlice)) {
      slice[paneId].configs = paneSlice.configs.filter(c => c.id !== id);
      return {
        configs: slice[paneId].configs,
        id: paneId
      };
    } else {
      return;
    }
  },
  removeItems(slice, paneId) {
    const paneSlice = slice[paneId];
    if (paneSlice) {
      paneSlice.configs = [];
    }
  },
  removeItemsUnder(slice, config) {
    if (config === void 0) {
      config = {};
    }
    const {
        paneId,
        id
      } = config,
      paneSlice = slice[paneId];
    if (this._isConfigs(paneSlice)) {
      const _undexIndex = paneSlice.configs.findIndex(c => c.id === id);
      paneSlice.configs = paneSlice.configs.slice(_undexIndex + 1);
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
  onLoadItem(option) {
    if (option === void 0) {
      option = {};
    }
    _ComponentActions.ComponentActions.showPane(option.itemConf);
    this.triggerLoading(_LoadingActions.LPAT_LOADING);
  },
  onLoadItemCompleted(result, option) {
    const {
        config,
        itemConf
      } = result,
      {
        limitRemaining
      } = option;
    if (config) {
      const _option = Logic.addItem(this.items, config, itemConf);
      this.trigger(_ItemActions.IAT_LOAD_ITEM_COMPLETED, _option);
    }
    this.triggerLoading(_LoadingActions.LPAT_LOADING_COMPLETE, limitRemaining);
  },
  onLoadItemFailed(option) {
    (0, _useCompStore.showMd)('ALERT_DIALOG', option);
    this.triggerLoading(_LoadingActions.LPAT_LOADING_FAILED);
  },
  onRemoveItem(config) {
    const _options = Logic.removeItem(this.items, config);
    if (_options) {
      this.trigger(_ItemActions.IAT_LOAD_ITEM_COMPLETED, _options);
    }
  },
  onRemoveItems(paneId) {
    Logic.removeItems(this.items, paneId);
    this.trigger(_ItemActions.IAT_LOAD_ITEM_COMPLETED, {
      configs: [],
      id: paneId
    });
  },
  onRemoveItemsUnder(config) {
    const _option = Logic.removeItemsUnder(this.items, config);
    if (_option) {
      this.trigger(_ItemActions.IAT_LOAD_ITEM_COMPLETED, _option);
    }
  }
};
var _default = ItemSlice;
exports.default = _default;
//# sourceMappingURL=ItemSlice.js.map
"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _ItemActions = require("../actions/ItemActions");

var _ComponentActions = require("../actions/ComponentActions");

var _LoadingActions = require("../actions/LoadingActions");

var Logic = {
  addItem: function addItem(slice, config, itemConf) {
    var _itemConf$paneId = itemConf.paneId,
        paneId = _itemConf$paneId === void 0 ? 'paneId' : _itemConf$paneId;
    config.paneId = paneId;
    var paneSlice = slice[paneId] || {},
        configs = paneSlice.configs;

    if (Array.isArray(configs)) {
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
  _isItem: function _isItem(configs, id) {
    return Array.isArray(configs) && configs.findIndex(function (c) {
      return c.id === id;
    }) !== -1 ? true : false;
  },
  isItem: function isItem(slice, paneId, id) {
    var paneSlice = slice[paneId] || {},
        configs = paneSlice.configs;
    return Logic._isItem(configs, id);
  },
  _isConfigs: function _isConfigs(slice) {
    return slice && Array.isArray(slice.configs);
  },
  removeItem: function removeItem(slice, config) {
    var paneId = config.paneId,
        id = config.id,
        paneSlice = slice[paneId];

    if (this._isConfigs(paneSlice)) {
      slice[paneId].configs = paneSlice.configs.filter(function (c) {
        return c.id !== id;
      });
      return {
        configs: slice[paneId].configs,
        id: paneId
      };
    } else {
      return undefined;
    }
  },
  removeItems: function removeItems(slice, paneId) {
    var paneSlice = slice[paneId];

    if (paneSlice) {
      paneSlice.configs = [];
    }
  },
  removeItemsUnder: function removeItemsUnder(slice, config) {
    if (config === void 0) {
      config = {};
    }

    var _config = config,
        paneId = _config.paneId,
        id = _config.id,
        paneSlice = slice[paneId];

    if (this._isConfigs(paneSlice)) {
      var _undexIndex = paneSlice.configs.findIndex(function (c) {
        return c.id === id;
      });

      paneSlice.configs = paneSlice.configs.slice(_undexIndex + 1);
      return {
        configs: paneSlice.configs,
        id: paneId
      };
    }

    return undefined;
  }
};
var ItemSlice = {
  items: {},
  isItem: function isItem(paneId, word) {
    return Logic.isItem(this.items, paneId, word);
  },
  onLoadItem: function onLoadItem(option) {
    if (option === void 0) {
      option = {};
    }

    _ComponentActions.ComponentActions.showPane(option.itemConf);

    this.triggerLoading(_LoadingActions.T.LOADING);
  },
  onLoadItemCompleted: function onLoadItemCompleted(result, option) {
    var config = result.config,
        itemConf = result.itemConf,
        limitRemaining = option.limitRemaining;

    if (config) {
      var _option = Logic.addItem(this.items, config, itemConf);

      this.trigger(_ItemActions.T.LOAD_ITEM_COMPLETED, _option);
    }

    this.triggerLoading(_LoadingActions.T.LOADING_COMPLETE, limitRemaining);
  },
  onLoadItemFailed: function onLoadItemFailed(option) {
    _ComponentActions.ComponentActions.showModalDialog('ALERT_DIALOG', option);

    this.triggerLoading(_LoadingActions.T.LOADING_FAILED);
  },
  onRemoveItem: function onRemoveItem(config) {
    var _options = Logic.removeItem(this.items, config);

    if (_options) {
      this.trigger(_ItemActions.T.LOAD_ITEM_COMPLETED, _options);
    }
  },
  onRemoveItems: function onRemoveItems(paneId) {
    Logic.removeItems(this.items, paneId);
    this.trigger(_ItemActions.T.LOAD_ITEM_COMPLETED, {
      configs: [],
      id: paneId
    });
  },
  onRemoveItemsUnder: function onRemoveItemsUnder(config) {
    var _option = Logic.removeItemsUnder(this.items, config);

    if (_option) {
      this.trigger(_ItemActions.T.LOAD_ITEM_COMPLETED, _option);
    }
  }
};
var _default = ItemSlice;
exports["default"] = _default;
//# sourceMappingURL=ItemSlice.js.map
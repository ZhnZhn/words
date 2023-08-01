"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ItemActions = require("../actions/ItemActions");
var _useCompStore = require("../useCompStore");
var _LoadingActions = require("../actions/LoadingActions");
var _itemFn = require("./itemFn");
const ItemSlice = {
  items: {},
  isItem(paneId, word) {
    return (0, _itemFn.isItem)(this.items, paneId, word);
  },
  onLoadItem(option) {
    if (option === void 0) {
      option = {};
    }
    (0, _useCompStore.showPane)(option.itemConf);
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
      const _option = (0, _itemFn.addItem)(this.items, config, itemConf);
      this.trigger(_ItemActions.IAT_LOAD_ITEM_COMPLETED, _option);
    }
    this.triggerLoading(_LoadingActions.LPAT_LOADING_COMPLETE, limitRemaining);
  },
  onLoadItemFailed(option) {
    (0, _useCompStore.showMd)('ALERT_DIALOG', option);
    this.triggerLoading(_LoadingActions.LPAT_LOADING_FAILED);
  },
  onRemoveItem(config) {
    const _options = (0, _itemFn.removeItem)(this.items, config);
    if (_options) {
      this.trigger(_ItemActions.IAT_LOAD_ITEM_COMPLETED, _options);
    }
  },
  onRemoveItems(paneId) {
    (0, _itemFn.removeItems)(this.items, paneId);
    this.trigger(_ItemActions.IAT_LOAD_ITEM_COMPLETED, {
      configs: [],
      id: paneId
    });
  },
  onRemoveItemsUnder(config) {
    const _option = (0, _itemFn.removeItemsUnder)(this.items, config);
    if (_option) {
      this.trigger(_ItemActions.IAT_LOAD_ITEM_COMPLETED, _option);
    }
  }
};
var _default = ItemSlice;
exports.default = _default;
//# sourceMappingURL=ItemSlice.js.map
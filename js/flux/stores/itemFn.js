"use strict";

exports.__esModule = true;
exports.removeItemsUnder = exports.removeItems = exports.removeItem = exports.isItem = exports.addItem = void 0;
const _isArr = Array.isArray,
  _isItem = (configs, id) => _isArr(configs) && configs.findIndex(c => c.id === id) !== -1,
  _isConfigs = slice => slice && _isArr(slice.configs);
const addItem = (slice, config, itemConf) => {
  const {
    paneId = 'paneId'
  } = itemConf;
  config.paneId = paneId;
  const paneSlice = slice[paneId] || {},
    {
      configs
    } = paneSlice;
  if (_isArr(configs)) {
    if (!_isItem(configs, config.id)) {
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
};
exports.addItem = addItem;
const isItem = (slice, paneId, id) => {
  const paneSlice = slice[paneId] || {},
    {
      configs
    } = paneSlice;
  return _isItem(configs, id);
};
exports.isItem = isItem;
const removeItem = (slice, config) => {
  const {
      paneId,
      id
    } = config,
    paneSlice = slice[paneId];
  if (_isConfigs(paneSlice)) {
    slice[paneId].configs = paneSlice.configs.filter(c => c.id !== id);
    return {
      configs: slice[paneId].configs,
      id: paneId
    };
  } else {
    return;
  }
};
exports.removeItem = removeItem;
const removeItems = (slice, paneId) => {
  const paneSlice = slice[paneId];
  if (paneSlice) {
    paneSlice.configs = [];
  }
};
exports.removeItems = removeItems;
const removeItemsUnder = function (slice, config) {
  if (config === void 0) {
    config = {};
  }
  const {
      paneId,
      id
    } = config,
    paneSlice = slice[paneId];
  if (_isConfigs(paneSlice)) {
    const _undexIndex = paneSlice.configs.findIndex(c => c.id === id);
    paneSlice.configs = paneSlice.configs.slice(_undexIndex + 1);
    return {
      configs: paneSlice.configs,
      id: paneId
    };
  }
  return;
};
exports.removeItemsUnder = removeItemsUnder;
//# sourceMappingURL=itemFn.js.map
const _isArr = Array.isArray
, _isItem = (
  configs,
  id
) => _isArr(configs)
 && configs.findIndex(c => c.id === id) !== -1
, _isConfigs = (
  slice
) => slice && _isArr(slice.configs);

export const addItemImpl = (
  slice,
  config,
  itemConf
) => {
  const {
    paneId='paneId'
  } = itemConf;
  config.paneId = paneId

  const paneSlice = slice[paneId] || {}
  , { configs } = paneSlice;
  if (_isArr(configs)) {
    if (!_isItem(configs, config.id)) {
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
}

export const isItemImpl = (
  slice,
  paneId,
  id
) => {
  const paneSlice = slice[paneId] || {}
  , { configs } = paneSlice;
  return _isItem(configs, id);
}

export const removeItemImpl = (
  slice,
  config
) => {
  const { paneId, id } = config
  , paneSlice = slice[paneId];
  if (_isConfigs(paneSlice)) {
    slice[paneId].configs = paneSlice.configs
      .filter(c => c.id !== id )
    return {
      configs: slice[paneId].configs,
      id: paneId
    };
  } else {
    return;
  }
}

export const removeItemsImpl = (
  slice,
  paneId
) => {
  const paneSlice = slice[paneId]
  if (paneSlice) {
    paneSlice.configs = []
  }
}

export const removeItemsUnderImpl = (
  slice,
  config={}
) => {
  const { paneId, id } = config
  , paneSlice = slice[paneId];
  if (_isConfigs(paneSlice)) {
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

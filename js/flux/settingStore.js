"use strict";

exports.__esModule = true;
exports.getIsAutoSave = exports.enableAutoSave = exports.disableAutoSave = void 0;
var _storeApi = require("./storeApi");
const _IS_AUTO_SAVE_ENABLED = 'is',
  _crIsAutoSaveEnabled = is => ({
    [_IS_AUTO_SAVE_ENABLED]: is
  }),
  _settingStore = (0, _storeApi.createStore)(() => ({
    ..._crIsAutoSaveEnabled(true)
  }));
const [_set, _get] = (0, _storeApi.getStoreApi)(_settingStore);
const enableAutoSave = () => _set(_crIsAutoSaveEnabled(true));
exports.enableAutoSave = enableAutoSave;
const disableAutoSave = () => _set(_crIsAutoSaveEnabled(false));
exports.disableAutoSave = disableAutoSave;
const getIsAutoSave = () => _get()[_IS_AUTO_SAVE_ENABLED];
exports.getIsAutoSave = getIsAutoSave;
//# sourceMappingURL=settingStore.js.map
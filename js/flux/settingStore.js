"use strict";

exports.__esModule = true;
exports.getIsAutoSave = exports.enableAutoSave = exports.disableAutoSave = void 0;
var _storeApi = require("./storeApi");
const [_crIsAutoSaveEnabled, _selectIsAutoSaveEnables] = (0, _storeApi.fCrStoreSlice)("is"),
  _settingStore = (0, _storeApi.createStore)(() => ({
    ..._crIsAutoSaveEnabled(true)
  })),
  [_set, _get] = (0, _storeApi.getStoreApi)(_settingStore);
const _setIsAutoSaveEnables = (0, _storeApi.fCrSetSlice)(_set, _crIsAutoSaveEnabled);
const enableAutoSave = exports.enableAutoSave = (0, _storeApi.bindTo)(_setIsAutoSaveEnables, true);
const disableAutoSave = exports.disableAutoSave = (0, _storeApi.bindTo)(_setIsAutoSaveEnables, false);
const getIsAutoSave = () => _selectIsAutoSaveEnables(_get());
exports.getIsAutoSave = getIsAutoSave;
//# sourceMappingURL=settingStore.js.map
"use strict";

exports.__esModule = true;
exports.getIsAutoSave = exports.enableAutoSave = exports.disableAutoSave = void 0;
var _storeApi = require("./storeApi");
const settingStore = (0, _storeApi.createStore)(set => ({
  is: true,
  enableAutoSave: () => set({
    is: true
  }),
  disableAutoSave: () => set({
    is: false
  })
}));
const _getState = settingStore.getState;
const _state = _getState();
const enableAutoSave = _state.enableAutoSave;
exports.enableAutoSave = enableAutoSave;
const disableAutoSave = _state.disableAutoSave;
exports.disableAutoSave = disableAutoSave;
const getIsAutoSave = () => _getState().is;
exports.getIsAutoSave = getIsAutoSave;
//# sourceMappingURL=settingStore.js.map
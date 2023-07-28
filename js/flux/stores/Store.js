"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _ItemActions = require("../actions/ItemActions");
var _SettingActions = require("../actions/SettingActions");
var _WatchActions = require("../actions/WatchActions");
var _ItemSlice = _interopRequireDefault(require("./ItemSlice"));
var _SettingSlice = _interopRequireDefault(require("./SettingSlice"));
var _WithLoading = _interopRequireDefault(require("./WithLoading"));
var _WatchListSlice = _interopRequireDefault(require("../watch-list/WatchListSlice"));
const Store = _refluxCore.default.createStore({
  listenables: [_ItemActions.ItemActions, _SettingActions.SettingActions, _WatchActions.WatchActions],
  init() {
    this.initWatchList();
  },
  ..._ItemSlice.default,
  ..._SettingSlice.default,
  ..._WatchListSlice.default,
  ..._WithLoading.default
});
var _default = Store;
exports.default = _default;
//# sourceMappingURL=Store.js.map
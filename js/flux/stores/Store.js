"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _ComponentActions = _interopRequireDefault(require("../actions/ComponentActions"));

var _ItemActions = _interopRequireDefault(require("../actions/ItemActions"));

var _SettingActions = _interopRequireDefault(require("../actions/SettingActions"));

var _WatchActions = _interopRequireDefault(require("../actions/WatchActions"));

var _ComponentSlice = _interopRequireDefault(require("./ComponentSlice"));

var _ItemSlice = _interopRequireDefault(require("./ItemSlice"));

var _SettingSlice = _interopRequireDefault(require("./SettingSlice"));

var _WithLoading = _interopRequireDefault(require("./WithLoading"));

var _WatchListSlice = _interopRequireDefault(require("../watch-list/WatchListSlice"));

var Store = _refluxCore["default"].createStore((0, _extends2["default"])({
  listenables: [_ComponentActions["default"], _ItemActions["default"], _SettingActions["default"], _WatchActions["default"]],
  init: function init() {
    this.initWatchList();
  }
}, _ComponentSlice["default"], {}, _ItemSlice["default"], {}, _SettingSlice["default"], {}, _WatchListSlice["default"], {}, _WithLoading["default"]));

var _default = Store;
exports["default"] = _default;
//# sourceMappingURL=Store.js.map
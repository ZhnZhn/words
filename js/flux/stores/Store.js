"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _ItemActions = require("../actions/ItemActions");
var _ItemSlice = _interopRequireDefault(require("./ItemSlice"));
var _WithLoading = _interopRequireDefault(require("./WithLoading"));
const Store = _refluxCore.default.createStore({
  listenables: [_ItemActions.ItemActions],
  ..._ItemSlice.default,
  ..._WithLoading.default
});
var _default = Store;
exports.default = _default;
//# sourceMappingURL=Store.js.map
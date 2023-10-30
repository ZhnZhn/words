"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getStoreApi = exports.fCrUse = exports.fCrStoreSlice = exports.fCrMsFromFn = exports.createStoreWithSelector = void 0;
var _zustandLite = require("./zustand-lite");
exports.createStore = _zustandLite.createStore;
var _bindTo = require("../utils/bindTo");
exports.bindTo = _bindTo.bindTo;
var _useSubscribe = _interopRequireDefault(require("../components/hooks/useSubscribe"));
const createStoreWithSelector = crStore => (0, _zustandLite.createStore)((0, _zustandLite.subscribeWithSelector)(crStore));
exports.createStoreWithSelector = createStoreWithSelector;
const getStoreApi = store => [store.setState, store.getState];
exports.getStoreApi = getStoreApi;
const fCrStoreSlice = (slicePn, optionPn) => [value => ({
  [slicePn]: optionPn ? {
    [optionPn]: value
  } : value
}), state => state[slicePn]];
exports.fCrStoreSlice = fCrStoreSlice;
const fCrMsFromFn = (crMs, fn) => function () {
  return crMs(fn(...arguments));
};
exports.fCrMsFromFn = fCrMsFromFn;
const fCrUse = (store, select) => (0, _bindTo.bindTo)(_useSubscribe.default, store, select);
exports.fCrUse = fCrUse;
//# sourceMappingURL=storeApi.js.map
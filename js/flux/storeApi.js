"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getStoreApi = exports.fCrUse = exports.createStoreWithSelector = void 0;
var _zustand = require("zustand");
exports.createStore = _zustand.createStore;
var _bindTo = require("../utils/bindTo");
exports.bindTo = _bindTo.bindTo;
var _middleware = require("zustand/middleware");
var _useSubscribe = _interopRequireDefault(require("../components/hooks/useSubscribe"));
const createStoreWithSelector = crStore => (0, _zustand.createStore)((0, _middleware.subscribeWithSelector)(crStore));
exports.createStoreWithSelector = createStoreWithSelector;
const getStoreApi = store => [store.setState, store.getState];
exports.getStoreApi = getStoreApi;
const fCrUse = (store, select) => (0, _bindTo.bindTo)(_useSubscribe.default, store, select);
exports.fCrUse = fCrUse;
//# sourceMappingURL=storeApi.js.map
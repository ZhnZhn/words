"use strict";

exports.__esModule = true;
exports.createWithSelector = exports.createStore = void 0;
var _zustand = require("zustand");
exports.createStore = _zustand.createStore;
var _middleware = require("zustand/middleware");
const createWithSelector = crStore => (0, _zustand.create)((0, _middleware.subscribeWithSelector)(function () {
  return crStore(...arguments);
}));
exports.createWithSelector = createWithSelector;
//# sourceMappingURL=storeApi.js.map
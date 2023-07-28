"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ComponentActions = exports.CAT_UPDATE_WATCH_BROWSER = exports.CAT_CLICK_WATCH_ITEM = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
const CAT_UPDATE_WATCH_BROWSER = 'updateWatchBrowser';
exports.CAT_UPDATE_WATCH_BROWSER = CAT_UPDATE_WATCH_BROWSER;
const CAT_CLICK_WATCH_ITEM = 'clickWatchItem';
exports.CAT_CLICK_WATCH_ITEM = CAT_CLICK_WATCH_ITEM;
const ComponentActions = _refluxCore.default.createActions({
  [CAT_CLICK_WATCH_ITEM]: {}
});
exports.ComponentActions = ComponentActions;
//# sourceMappingURL=ComponentActions.js.map
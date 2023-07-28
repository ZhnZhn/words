"use strict";

exports.__esModule = true;
exports.showDialogEditLists = exports.showDialogEditGroups = exports.saveWatchList = exports.removeWatchItem = void 0;
var _useCompStore = require("../../flux/useCompStore");
var _WatchActions = require("../../flux/actions/WatchActions");
var _Type = require("../../constants/Type");
const showDialogEditGroups = () => (0, _useCompStore.showMd)(_Type.MD_EDIT_WATCH_GROUP);
exports.showDialogEditGroups = showDialogEditGroups;
const showDialogEditLists = () => (0, _useCompStore.showMd)(_Type.MD_EDIT_WATCH_LIST);
exports.showDialogEditLists = showDialogEditLists;
const removeWatchItem = (option, evt) => {
  evt.stopPropagation();
  _WatchActions.WatchActions.removeWatchItem(option);
};
exports.removeWatchItem = removeWatchItem;
const saveWatchList = () => {
  _WatchActions.WatchActions.saveWatch();
};
exports.saveWatchList = saveWatchList;
//# sourceMappingURL=Handlers.js.map
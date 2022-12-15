"use strict";

exports.__esModule = true;
exports.showDialogEditLists = exports.showDialogEditGroups = exports.saveWatchList = exports.removeWatchItem = void 0;
var _ComponentActions = require("../../flux/actions/ComponentActions");
var _WatchActions = require("../../flux/actions/WatchActions");
var _Type = require("../../constants/Type");
var showDialogEditGroups = function showDialogEditGroups() {
  return _ComponentActions.ComponentActions.showModalDialog(_Type.MD_EDIT_WATCH_GROUP);
};
exports.showDialogEditGroups = showDialogEditGroups;
var showDialogEditLists = function showDialogEditLists() {
  return _ComponentActions.ComponentActions.showModalDialog(_Type.MD_EDIT_WATCH_LIST);
};
exports.showDialogEditLists = showDialogEditLists;
var removeWatchItem = function removeWatchItem(option, evt) {
  evt.stopPropagation();
  _WatchActions.WatchActions.removeWatchItem(option);
};
exports.removeWatchItem = removeWatchItem;
var saveWatchList = function saveWatchList() {
  _WatchActions.WatchActions.saveWatch();
};
exports.saveWatchList = saveWatchList;
//# sourceMappingURL=Handlers.js.map
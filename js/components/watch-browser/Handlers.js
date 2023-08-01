"use strict";

exports.__esModule = true;
exports.showDialogEditLists = exports.showDialogEditGroups = exports.saveWatchList = exports.removeWatchItem = void 0;
var _watchListStore = require("../../flux/watch-list/watchListStore");
exports.saveWatchList = _watchListStore.saveWatchList;
var _useCompStore = require("../../flux/useCompStore");
var _Type = require("../../constants/Type");
const showDialogEditGroups = () => (0, _useCompStore.showMd)(_Type.MD_EDIT_WATCH_GROUP);
exports.showDialogEditGroups = showDialogEditGroups;
const showDialogEditLists = () => (0, _useCompStore.showMd)(_Type.MD_EDIT_WATCH_LIST);
exports.showDialogEditLists = showDialogEditLists;
const removeWatchItem = (option, evt) => {
  evt.stopPropagation();
  (0, _watchListStore.deleteWatchItem)(option);
};
exports.removeWatchItem = removeWatchItem;
//# sourceMappingURL=Handlers.js.map
"use strict";

exports.__esModule = true;
exports.showDialogEditLists = exports.showDialogEditGroups = exports.saveWatchList = exports.removeWatchItem = exports.getWatchList = void 0;
var _watchListStore = require("../../flux/watch-list/watchListStore");
exports.getWatchList = _watchListStore.getWatchList;
exports.saveWatchList = _watchListStore.saveWatchList;
var _compStore = require("../../flux/compStore");
var _Type = require("../../constants/Type");
const showDialogEditGroups = () => (0, _compStore.showMd)(_Type.MD_EDIT_WATCH_GROUP);
exports.showDialogEditGroups = showDialogEditGroups;
const showDialogEditLists = () => (0, _compStore.showMd)(_Type.MD_EDIT_WATCH_LIST);
exports.showDialogEditLists = showDialogEditLists;
const removeWatchItem = (option, evt) => {
  evt.stopPropagation();
  (0, _watchListStore.deleteWatchItem)(option);
};
exports.removeWatchItem = removeWatchItem;
//# sourceMappingURL=Handlers.js.map
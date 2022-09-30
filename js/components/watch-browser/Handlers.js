"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.showDialogEditLists = exports.showDialogEditGroups = exports.saveWatchList = exports.removeWatchItem = void 0;

var _ComponentActions = _interopRequireDefault(require("../../flux/actions/ComponentActions"));

var _WatchActions = _interopRequireDefault(require("../../flux/actions/WatchActions"));

var _Type = require("../../constants/Type");

var showDialogEditGroups = function showDialogEditGroups() {
  return _ComponentActions["default"].showModalDialog(_Type.MD_EDIT_WATCH_GROUP);
};

exports.showDialogEditGroups = showDialogEditGroups;

var showDialogEditLists = function showDialogEditLists() {
  return _ComponentActions["default"].showModalDialog(_Type.MD_EDIT_WATCH_LIST);
};

exports.showDialogEditLists = showDialogEditLists;

var removeWatchItem = function removeWatchItem(option, evt) {
  evt.stopPropagation();

  _WatchActions["default"].removeItem(option);
};

exports.removeWatchItem = removeWatchItem;

var saveWatchList = function saveWatchList() {
  _WatchActions["default"].saveWatch();
};

exports.saveWatchList = saveWatchList;
//# sourceMappingURL=Handlers.js.map
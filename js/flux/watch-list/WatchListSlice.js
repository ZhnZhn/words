"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _localforage = _interopRequireDefault(require("localforage"));

var _ComponentActions = require("../actions/ComponentActions");

var _WatchActions = require("../actions/WatchActions");

var _WatchDefault = _interopRequireDefault(require("../../constants/WatchDefault"));

var _Type = require("../../constants/Type");

var _MsgWatch = require("../../constants/MsgWatch");

var _Logic = _interopRequireDefault(require("./Logic"));

var STORAGE_KEY = 'WATCH_LIST_WORDS',
    DIALOG_CAPTION = 'Watch List:';
var findGroup = _Logic["default"].findGroup,
    addItem = _Logic["default"].addItem,
    removeItem = _Logic["default"].removeItem,
    dragDropItem = _Logic["default"].dragDropItem,
    dragDropList = _Logic["default"].dragDropList,
    dragDropGroup = _Logic["default"].dragDropGroup,
    addGroup = _Logic["default"].addGroup,
    renameGroup = _Logic["default"].renameGroup,
    deleteGroup = _Logic["default"].deleteGroup,
    createList = _Logic["default"].createList,
    renameList = _Logic["default"].renameList,
    deleteList = _Logic["default"].deleteList;
var WatchListSlice = {
  watchList: _WatchDefault["default"],
  isWatchEdited: false,
  initWatchList: function initWatchList() {
    var _this = this;

    _localforage["default"].getItem(STORAGE_KEY).then(function (value) {
      _this.watchList = value || _WatchDefault["default"];

      _this.trigger(_ComponentActions.CAT_UPDATE_WATCH_BROWSER, _this.watchList);
    })["catch"](function () {
      _this.watchList = _WatchDefault["default"];

      _this.trigger(_ComponentActions.CAT_UPDATE_WATCH_BROWSER, _this.watchList);
    });
  },
  getWatchList: function getWatchList() {
    return this.watchList;
  },
  getWatchGroups: function getWatchGroups() {
    return this.watchList.groups;
  },
  getWatchListsByGroup: function getWatchListsByGroup(groupCaption) {
    var group = findGroup(this.watchList, groupCaption);

    if (!group) {
      return [];
    }

    return group.lists;
  },
  onAddWatchItem: function onAddWatchItem(item) {
    this._onEditWatch(addItem(this.watchList, item), _WatchActions.WatchActionTypes.ADD_ITEM);

    if (this.isAutoSaveOnAdd) {
      this.onSaveWatch({
        isShowDialog: false
      });
    }
  },
  onRemoveWatchItem: function onRemoveWatchItem(option) {
    removeItem(this.watchList, option);
    this.isWatchEdited = true;
    this.trigger(_ComponentActions.CAT_UPDATE_WATCH_BROWSER, this.watchList);
  },
  _onDragDrop: function _onDragDrop(result) {
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_ComponentActions.CAT_UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      this.showAlertDialog(result);
    }
  },
  onDragDropItem: function onDragDropItem(option) {
    this._onDragDrop(dragDropItem(this.watchList, option));
  },
  onDragDropList: function onDragDropList(option) {
    this._onDragDrop(dragDropList(this.watchList, option));
  },
  onDragDropGroup: function onDragDropGroup(option) {
    this._onDragDrop(dragDropGroup(this.watchList, option));
  },
  onSaveWatch: function onSaveWatch(_temp) {
    var _this2 = this;

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$isShowDialog = _ref.isShowDialog,
        isShowDialog = _ref$isShowDialog === void 0 ? true : _ref$isShowDialog;

    if (this.isWatchEdited) {
      _localforage["default"].setItem(STORAGE_KEY, this.watchList).then(function () {
        _this2.isWatchEdited = false;

        if (isShowDialog) {
          _this2.onShowModalDialog(_Type.MD_MSG, {
            caption: DIALOG_CAPTION,
            descr: _MsgWatch.WATCH_SAVED
          });
        }
      })["catch"](function (error) {
        /*eslint-disable no-console*/
        console.warn(error);
        /*eslint-enable no-console*/
      });
    } else {
      this.onShowModalDialog(_Type.MD_MSG, {
        caption: DIALOG_CAPTION,
        descr: _MsgWatch.WATCH_PREV
      });
    }
  },
  _onEditWatch: function _onEditWatch(result, forActionType) {
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_ComponentActions.CAT_UPDATE_WATCH_BROWSER, this.watchList);
      this.trigger(_WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED, {
        forActionType: forActionType
      });
    } else {
      this.trigger(_WatchActions.WatchActionTypes.EDIT_WATCH_FAILED, {
        messages: [result.message],
        forActionType: forActionType
      });
    }
  },
  onAddGroup: function onAddGroup(option) {
    this._onEditWatch(addGroup(this.watchList, option), _WatchActions.WatchActionTypes.ADD_GROUP);
  },
  onRenameGroup: function onRenameGroup(option) {
    this._onEditWatch(renameGroup(this.watchList, option), _WatchActions.WatchActionTypes.RENAME_GROUP);
  },
  onDeleteGroup: function onDeleteGroup(option) {
    this._onEditWatch(deleteGroup(this.watchList, option), _WatchActions.WatchActionTypes.DELETE_GROUP);
  },
  onCreateList: function onCreateList(option) {
    this._onEditWatch(createList(this.watchList, option), _WatchActions.WatchActionTypes.CREATE_LIST);
  },
  onRenameList: function onRenameList(option) {
    this._onEditWatch(renameList(this.watchList, option), _WatchActions.WatchActionTypes.RENAME_LIST);
  },
  onDeleteList: function onDeleteList(option) {
    this._onEditWatch(deleteList(this.watchList, option), _WatchActions.WatchActionTypes.DELETE_LIST);
  }
};
var _default = WatchListSlice;
exports["default"] = _default;
//# sourceMappingURL=WatchListSlice.js.map
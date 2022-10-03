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

var _LogicDnDFn = require("./LogicDnDFn");

var _LogicGroupFn = require("./LogicGroupFn");

var _LogicListFn = require("./LogicListFn");

var _LogicItemFn = require("./LogicItemFn");

var STORAGE_KEY = 'WATCH_LIST_WORDS',
    DIALOG_CAPTION = 'Watch List:';
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
    var group = (0, _LogicGroupFn.findGroup)(this.watchList, groupCaption);

    if (!group) {
      return [];
    }

    return group.lists;
  },
  onAddWatchItem: function onAddWatchItem(item) {
    this._onEditWatch((0, _LogicItemFn.addItem)(this.watchList, item), _WatchActions.WAT_ADD_ITEM);

    if (this.isAutoSaveOnAdd) {
      this.onSaveWatch({
        isShowDialog: false
      });
    }
  },
  onRemoveWatchItem: function onRemoveWatchItem(option) {
    (0, _LogicItemFn.removeItem)(this.watchList, option);
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
    this._onDragDrop((0, _LogicDnDFn.dragDropItem)(this.watchList, option));
  },
  onDragDropList: function onDragDropList(option) {
    this._onDragDrop((0, _LogicDnDFn.dragDropList)(this.watchList, option));
  },
  onDragDropGroup: function onDragDropGroup(option) {
    this._onDragDrop((0, _LogicDnDFn.dragDropGroup)(this.watchList, option));
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
      this.trigger(_WatchActions.WAT_EDIT_WATCH_COMPLETED, {
        forActionType: forActionType
      });
    } else {
      this.trigger(_WatchActions.WAT_EDIT_WATCH_FAILED, {
        messages: [result.message],
        forActionType: forActionType
      });
    }
  },
  onCreateGroup: function onCreateGroup(option) {
    this._onEditWatch((0, _LogicGroupFn.createGroup)(this.watchList, option), _WatchActions.WAT_CREATE_GROUP);
  },
  onRenameGroup: function onRenameGroup(option) {
    this._onEditWatch((0, _LogicGroupFn.renameGroup)(this.watchList, option), _WatchActions.WAT_RENAME_GROUP);
  },
  onDeleteGroup: function onDeleteGroup(option) {
    this._onEditWatch((0, _LogicGroupFn.deleteGroup)(this.watchList, option), _WatchActions.WAT_DELETE_GROUP);
  },
  onCreateList: function onCreateList(option) {
    this._onEditWatch((0, _LogicListFn.createList)(this.watchList, option), _WatchActions.WAT_CREATE_LIST);
  },
  onRenameList: function onRenameList(option) {
    this._onEditWatch((0, _LogicListFn.renameList)(this.watchList, option), _WatchActions.WAT_RENAME_LIST);
  },
  onDeleteList: function onDeleteList(option) {
    this._onEditWatch((0, _LogicListFn.deleteList)(this.watchList, option), _WatchActions.WAT_DELETE_LIST);
  }
};
var _default = WatchListSlice;
exports["default"] = _default;
//# sourceMappingURL=WatchListSlice.js.map
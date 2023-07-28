"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _localStorageFn = require("../../utils/localStorageFn");
var _useCompStore = require("../useCompStore");
var _ComponentActions = require("../actions/ComponentActions");
var _WatchActions = require("../actions/WatchActions");
var _WatchDefault = _interopRequireDefault(require("../../constants/WatchDefault"));
var _Type = require("../../constants/Type");
var _MsgWatch = require("../../constants/MsgWatch");
var _LogicDnDFn = require("./LogicDnDFn");
var _LogicGroupFn = require("./LogicGroupFn");
var _LogicListFn = require("./LogicListFn");
var _LogicItemFn = require("./LogicItemFn");
const STORAGE_KEY = 'WATCH_LIST_WORDS',
  DIALOG_CAPTION = 'Watch List:';
const WatchListSlice = {
  watchList: _WatchDefault.default,
  isWatchEdited: false,
  initWatchList() {
    this.watchList = (0, _localStorageFn.readObj)(STORAGE_KEY)[0] || _WatchDefault.default;
    this.trigger(_ComponentActions.CAT_UPDATE_WATCH_BROWSER, this.watchList);
  },
  getWatchList() {
    return this.watchList;
  },
  getWatchGroups() {
    return this.watchList.groups;
  },
  getWatchListsByGroup(groupCaption) {
    const group = (0, _LogicGroupFn.findGroup)(this.watchList, groupCaption);
    if (!group) {
      return [];
    }
    return group.lists;
  },
  onAddWatchItem(item) {
    this._onEditWatch((0, _LogicItemFn.addItem)(this.watchList, item), _WatchActions.WAT_ADD_ITEM);
    if (this.isAutoSaveOnAdd) {
      this.onSaveWatch({
        isShowDialog: false
      });
    }
  },
  onRemoveWatchItem(option) {
    (0, _LogicItemFn.removeItem)(this.watchList, option);
    this.isWatchEdited = true;
    this.trigger(_ComponentActions.CAT_UPDATE_WATCH_BROWSER, this.watchList);
  },
  _onDragDrop(result) {
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_ComponentActions.CAT_UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      (0, _useCompStore.showMd)(_Type.MD_EXCEPTION, result);
    }
  },
  onDragDropItem(option) {
    this._onDragDrop((0, _LogicDnDFn.dragDropItem)(this.watchList, option));
  },
  onDragDropList(option) {
    this._onDragDrop((0, _LogicDnDFn.dragDropList)(this.watchList, option));
  },
  onDragDropGroup(option) {
    this._onDragDrop((0, _LogicDnDFn.dragDropGroup)(this.watchList, option));
  },
  onSaveWatch(_temp) {
    let {
      isShowDialog = true
    } = _temp === void 0 ? {} : _temp;
    if (this.isWatchEdited) {
      const _err = (0, _localStorageFn.writeObj)(STORAGE_KEY, this.watchList);
      if (_err) {
        (0, _useCompStore.showMd)(_Type.MD_MSG, {
          caption: DIALOG_CAPTION,
          descr: _err.message
        });
      } else {
        this.isWatchEdited = false;
        if (isShowDialog) {
          (0, _useCompStore.showMd)(_Type.MD_MSG, {
            caption: DIALOG_CAPTION,
            descr: _MsgWatch.WATCH_SAVED
          });
        }
      }
    } else {
      (0, _useCompStore.showMd)(_Type.MD_MSG, {
        caption: DIALOG_CAPTION,
        descr: _MsgWatch.WATCH_PREV
      });
    }
  },
  _onEditWatch(result, forActionType) {
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_ComponentActions.CAT_UPDATE_WATCH_BROWSER, this.watchList);
      this.trigger(_WatchActions.WAT_EDIT_WATCH_COMPLETED, {
        forActionType
      });
    } else {
      this.trigger(_WatchActions.WAT_EDIT_WATCH_FAILED, {
        messages: [result.message],
        forActionType
      });
    }
  },
  onCreateGroup(option) {
    this._onEditWatch((0, _LogicGroupFn.createGroup)(this.watchList, option), _WatchActions.WAT_CREATE_GROUP);
  },
  onRenameGroup(option) {
    this._onEditWatch((0, _LogicGroupFn.renameGroup)(this.watchList, option), _WatchActions.WAT_RENAME_GROUP);
  },
  onDeleteGroup(option) {
    this._onEditWatch((0, _LogicGroupFn.deleteGroup)(this.watchList, option), _WatchActions.WAT_DELETE_GROUP);
  },
  onCreateList(option) {
    this._onEditWatch((0, _LogicListFn.createList)(this.watchList, option), _WatchActions.WAT_CREATE_LIST);
  },
  onRenameList(option) {
    this._onEditWatch((0, _LogicListFn.renameList)(this.watchList, option), _WatchActions.WAT_RENAME_LIST);
  },
  onDeleteList(option) {
    this._onEditWatch((0, _LogicListFn.deleteList)(this.watchList, option), _WatchActions.WAT_DELETE_LIST);
  }
};
var _default = WatchListSlice;
exports.default = _default;
//# sourceMappingURL=WatchListSlice.js.map
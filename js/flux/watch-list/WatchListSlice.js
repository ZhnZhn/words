'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _ComponentActions = require('../actions/ComponentActions');

var _WatchActions = require('../actions/WatchActions');

var _WatchDefault = require('../../constants/WatchDefault');

var _WatchDefault2 = _interopRequireDefault(_WatchDefault);

var _Type = require('../../constants/Type');

var _MsgWatch = require('../../constants/MsgWatch');

var _MsgWatch2 = _interopRequireDefault(_MsgWatch);

var _Logic = require('./Logic');

var _Logic2 = _interopRequireDefault(_Logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORAGE_KEY = 'WATCH_LIST_WORDS',
    DIALOG_CAPTION = 'Watch List:';

var WATCH_SAVED = _MsgWatch2.default.WATCH_SAVED,
    WATCH_PREV = _MsgWatch2.default.WATCH_PREV;
var findGroup = _Logic2.default.findGroup,
    addItem = _Logic2.default.addItem,
    removeItem = _Logic2.default.removeItem,
    dragDropItem = _Logic2.default.dragDropItem,
    dragDropList = _Logic2.default.dragDropList,
    dragDropGroup = _Logic2.default.dragDropGroup,
    addGroup = _Logic2.default.addGroup,
    renameGroup = _Logic2.default.renameGroup,
    deleteGroup = _Logic2.default.deleteGroup,
    createList = _Logic2.default.createList,
    renameList = _Logic2.default.renameList,
    deleteList = _Logic2.default.deleteList;


var WatchListSlice = {

  watchList: _WatchDefault2.default,
  isWatchEdited: false,

  initWatchList: function initWatchList() {
    var _this = this;

    _localforage2.default.getItem(STORAGE_KEY).then(function (value) {
      _this.watchList = value || _WatchDefault2.default;
      _this.trigger(_ComponentActions.T.UPDATE_WATCH_BROWSER, _this.watchList);
    }).catch(function () {
      _this.watchList = _WatchDefault2.default;
      _this.trigger(_ComponentActions.T.UPDATE_WATCH_BROWSER, _this.watchList);
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
  },
  onRemoveWatchItem: function onRemoveWatchItem(option) {
    removeItem(this.watchList, option);
    this.isWatchEdited = true;
    this.trigger(_ComponentActions.T.UPDATE_WATCH_BROWSER, this.watchList);
  },
  _onDragDrop: function _onDragDrop(result) {
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_ComponentActions.T.UPDATE_WATCH_BROWSER, this.watchList);
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
  onSaveWatch: function onSaveWatch() {
    var _this2 = this;

    if (this.isWatchEdited) {
      _localforage2.default.setItem(STORAGE_KEY, this.watchList).then(function () {
        _this2.isWatchEdited = false;
        _this2.onShowModalDialog(_Type.ModalDialog.MSG, {
          caption: DIALOG_CAPTION,
          descr: WATCH_SAVED
        });
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      this.onShowModalDialog(_Type.ModalDialog.MSG, {
        caption: DIALOG_CAPTION,
        descr: WATCH_PREV
      });
    }
  },
  _onEditWatch: function _onEditWatch(result, forActionType) {
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_ComponentActions.T.UPDATE_WATCH_BROWSER, this.watchList);
      this.trigger(_WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED, { forActionType: forActionType });
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

exports.default = WatchListSlice;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\watch-list\WatchListSlice.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useWatchList = exports.useMsEdit = exports.saveWatchList = exports.renList = exports.renGroup = exports.initWatchList = exports.getWatchListsByGroup = exports.getWatchGroups = exports.deleteWatchItem = exports.delList = exports.delGroup = exports.ddList = exports.ddItem = exports.ddGroup = exports.crList = exports.crGroup = exports.addWatchItem = void 0;
var _storeApi = require("../storeApi");
var _settingStore = require("../settingStore");
var _compStore = require("../compStore");
var _localStorageFn = require("../../utils/localStorageFn");
var _Type = require("../../constants/Type");
var _MsgWatch = require("../../constants/MsgWatch");
var _WatchDefault = _interopRequireDefault(require("../../constants/WatchDefault"));
var _WatchActions = require("../actions/WatchActions");
var _LogicGroupFn = require("./LogicGroupFn");
var _LogicListFn = require("./LogicListFn");
var _LogicItemFn = require("./LogicItemFn");
var _LogicDnDFn = require("./LogicDnDFn");
const STORAGE_KEY = 'WATCH_LIST_WORDS',
  DIALOG_CAPTION = 'Watch List:';
const _crStore = () => ({
    isWatchEdited: false,
    watchList: {},
    msEdit: {}
  }),
  watchListStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectWatchList = state => state.watchList,
  _selectMsEdit = state => state.msEdit,
  _selectIsWatchEdited = state => state.isWatchEdited,
  _set = watchListStore.setState,
  _get = watchListStore.getState;
const useWatchList = (0, _storeApi.fCrUse)(watchListStore, _selectWatchList);
exports.useWatchList = useWatchList;
const useMsEdit = (0, _storeApi.fCrUse)(watchListStore, _selectMsEdit);
exports.useMsEdit = useMsEdit;
const getWatchGroups = () => _selectWatchList(watchListStore.getState()).groups;
exports.getWatchGroups = getWatchGroups;
const getWatchListsByGroup = groupCaption => {
  const group = (0, _LogicGroupFn.findGroup)(_selectWatchList(watchListStore.getState()), groupCaption);
  return group ? group.lists : [];
};
exports.getWatchListsByGroup = getWatchListsByGroup;
const _onEditWatch = (result, forActionType, set, get) => {
  if (result.isDone) {
    set({
      isWatchEdited: true,
      watchList: {
        ..._selectWatchList(get())
      },
      msEdit: {
        forActionType
      }
    });
  } else {
    set({
      msEdit: {
        messages: [result.message],
        forActionType
      }
    });
  }
};
const crGroup = option => {
  _onEditWatch((0, _LogicGroupFn.createGroup)(_selectWatchList(_get()), option), _WatchActions.WAT_CREATE_GROUP, _set, _get);
};
exports.crGroup = crGroup;
const renGroup = option => {
  _onEditWatch((0, _LogicGroupFn.renameGroup)(_selectWatchList(_get()), option), _WatchActions.WAT_RENAME_GROUP, _set, _get);
};
exports.renGroup = renGroup;
const delGroup = option => {
  _onEditWatch((0, _LogicGroupFn.deleteGroup)(_selectWatchList(_get()), option), _WatchActions.WAT_DELETE_GROUP, _set, _get);
};
exports.delGroup = delGroup;
const crList = option => {
  _onEditWatch((0, _LogicListFn.createList)(_selectWatchList(_get()), option), _WatchActions.WAT_CREATE_LIST, _set, _get);
};
exports.crList = crList;
const renList = option => {
  _onEditWatch((0, _LogicListFn.renameList)(_selectWatchList(_get()), option), _WatchActions.WAT_RENAME_LIST, _set, _get);
};
exports.renList = renList;
const delList = option => {
  _onEditWatch((0, _LogicListFn.deleteList)(_selectWatchList(_get()), option), _WatchActions.WAT_DELETE_LIST, _set, _get);
};
exports.delList = delList;
const _onDragDrop = (result, set, get) => {
  if (result.isDone) {
    set({
      isWatchEdited: true,
      watchList: {
        ..._selectWatchList(get())
      }
    });
  } else {
    (0, _compStore.showMd)(_Type.MD_EXCEPTION, result);
  }
};
const ddItem = option => {
  _onDragDrop((0, _LogicDnDFn.dragDropItem)(_selectWatchList(_get()), option), _set, _get);
};
exports.ddItem = ddItem;
const ddList = option => {
  _onDragDrop((0, _LogicDnDFn.dragDropList)(_selectWatchList(_get()), option), _set, _get);
};
exports.ddList = ddList;
const ddGroup = option => {
  _onDragDrop((0, _LogicDnDFn.dragDropGroup)(_selectWatchList(_get()), option), _set, _get);
};
exports.ddGroup = ddGroup;
const _crMsgOption = (caption, descr) => ({
  caption,
  descr
});
const _saveWl = function (isShowDialog, set, get) {
  if (isShowDialog === void 0) {
    isShowDialog = true;
  }
  const _isWatchEdited = _selectIsWatchEdited(get());
  if (_isWatchEdited) {
    const _err = (0, _localStorageFn.writeObj)(STORAGE_KEY, _selectWatchList(get()));
    if (_err) {
      (0, _compStore.showMd)(_Type.MD_MSG, _crMsgOption(DIALOG_CAPTION, _err.message));
    } else {
      set({
        isWatchEdited: false
      });
      if (isShowDialog) {
        (0, _compStore.showMd)(_Type.MD_MSG, _crMsgOption(DIALOG_CAPTION, _MsgWatch.WATCH_SAVED));
      }
    }
  } else {
    (0, _compStore.showMd)(_Type.MD_MSG, _crMsgOption(DIALOG_CAPTION, _MsgWatch.WATCH_PREV));
  }
};
const initWatchList = () => {
  _set({
    watchList: (0, _localStorageFn.readObj)(STORAGE_KEY)[0] || _WatchDefault.default
  });
};
exports.initWatchList = initWatchList;
const saveWatchList = function (_temp) {
  let {
    isShowDialog
  } = _temp === void 0 ? {} : _temp;
  _saveWl(isShowDialog, _set, _get);
};
exports.saveWatchList = saveWatchList;
const addWatchItem = item => {
  _onEditWatch((0, _LogicItemFn.addItem)(_selectWatchList(_get()), item), _WatchActions.WAT_ADD_ITEM, _set, _get);
  if ((0, _settingStore.getIsAutoSave)()) {
    _saveWl(false, _set, _get);
  }
};
exports.addWatchItem = addWatchItem;
const deleteWatchItem = option => {
  (0, _LogicItemFn.removeItem)(_selectWatchList(_get()), option);
  _set({
    isWatchEdited: true,
    watchList: {
      ..._selectWatchList(_get())
    }
  });
};
exports.deleteWatchItem = deleteWatchItem;
//# sourceMappingURL=watchListStore.js.map
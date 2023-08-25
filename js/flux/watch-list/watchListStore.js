"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useWatchList = exports.useMsEdit = exports.saveWatchList = exports.renList = exports.renGroup = exports.initWatchList = exports.getWatchListsByGroup = exports.getWatchList = exports.getWatchGroups = exports.deleteWatchItem = exports.delList = exports.delGroup = exports.ddList = exports.ddItem = exports.ddGroup = exports.crList = exports.crGroup = exports.addWatchItem = void 0;
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
    watchList: _WatchDefault.default,
    msEdit: {}
  }),
  _watchListStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectWatchList = state => state.watchList,
  _selectMsEdit = state => state.msEdit,
  _selectIsWatchEdited = state => state.isWatchEdited,
  [_set, _get] = (0, _storeApi.getStoreApi)(_watchListStore),
  _getIsWatchEdited = () => _selectIsWatchEdited(_get());
const getWatchList = () => _selectWatchList(_get());
exports.getWatchList = getWatchList;
const useWatchList = (0, _storeApi.fCrUse)(_watchListStore, _selectWatchList);
exports.useWatchList = useWatchList;
const useMsEdit = (0, _storeApi.fCrUse)(_watchListStore, _selectMsEdit);
exports.useMsEdit = useMsEdit;
const getWatchGroups = () => (getWatchList() || {}).groups;
exports.getWatchGroups = getWatchGroups;
const getWatchListsByGroup = groupCaption => {
  const group = (0, _LogicGroupFn.findGroup)(getWatchList(), groupCaption);
  return group ? group.lists : [];
};
exports.getWatchListsByGroup = getWatchListsByGroup;
const _onEditWatch = (result, forActionType) => {
  if (result.isDone) {
    _set({
      isWatchEdited: true,
      watchList: {
        ...getWatchList()
      },
      msEdit: {
        forActionType
      }
    });
  } else {
    _set({
      msEdit: {
        messages: [result.message],
        forActionType
      }
    });
  }
};
const _fEditWatch = (editEntity, EDIT_ENTITY) => option => {
  _onEditWatch(editEntity(getWatchList(), option), EDIT_ENTITY);
};
const crGroup = _fEditWatch(_LogicGroupFn.createGroup, _WatchActions.WAT_CREATE_GROUP);
exports.crGroup = crGroup;
const renGroup = _fEditWatch(_LogicGroupFn.renameGroup, _WatchActions.WAT_RENAME_GROUP);
exports.renGroup = renGroup;
const delGroup = _fEditWatch(_LogicGroupFn.deleteGroup, _WatchActions.WAT_DELETE_GROUP);
exports.delGroup = delGroup;
const crList = _fEditWatch(_LogicListFn.createList, _WatchActions.WAT_CREATE_LIST);
exports.crList = crList;
const renList = _fEditWatch(_LogicListFn.renameList, _WatchActions.WAT_RENAME_LIST);
exports.renList = renList;
const delList = _fEditWatch(_LogicListFn.deleteList, _WatchActions.WAT_DELETE_LIST);
exports.delList = delList;
const _addItem = _fEditWatch(_LogicItemFn.addItem, _WatchActions.WAT_ADD_ITEM);
const _onDragDrop = result => {
  if (result.isDone) {
    _set({
      isWatchEdited: true,
      watchList: {
        ...getWatchList()
      }
    });
  } else {
    (0, _compStore.showMd)(_Type.MD_EXCEPTION, result);
  }
};
const _fDdEntity = ddEntity => option => {
  _onDragDrop(ddEntity(getWatchList(), option));
};
const ddItem = _fDdEntity(_LogicDnDFn.dragDropItem);
exports.ddItem = ddItem;
const ddList = _fDdEntity(_LogicDnDFn.dragDropList);
exports.ddList = ddList;
const ddGroup = _fDdEntity(_LogicDnDFn.dragDropGroup);
exports.ddGroup = ddGroup;
const _crMsgOption = descr => ({
  caption: DIALOG_CAPTION,
  descr
});
const _saveWl = function (isShowDialog) {
  if (isShowDialog === void 0) {
    isShowDialog = true;
  }
  if (_getIsWatchEdited()) {
    const _err = (0, _localStorageFn.writeObj)(STORAGE_KEY, getWatchList());
    if (_err) {
      (0, _compStore.showMd)(_Type.MD_MSG, _crMsgOption(_err.message));
    } else {
      _set({
        isWatchEdited: false
      });
      if (isShowDialog) {
        (0, _compStore.showMd)(_Type.MD_MSG, _crMsgOption(_MsgWatch.WATCH_SAVED));
      }
    }
  } else {
    (0, _compStore.showMd)(_Type.MD_MSG, _crMsgOption(_MsgWatch.WATCH_PREV));
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
  _saveWl(isShowDialog);
};
exports.saveWatchList = saveWatchList;
const addWatchItem = item => {
  _addItem(item);
  if ((0, _settingStore.getIsAutoSave)()) {
    _saveWl(false);
  }
};
exports.addWatchItem = addWatchItem;
const deleteWatchItem = option => {
  (0, _LogicItemFn.removeItem)(getWatchList(), option);
  _set({
    isWatchEdited: true,
    watchList: {
      ...getWatchList()
    }
  });
};
exports.deleteWatchItem = deleteWatchItem;
//# sourceMappingURL=watchListStore.js.map
import {
  createStoreWithSelector,
  fCrUse
} from '../storeApi';

import { getIsAutoSave } from '../settingStore';
import { showMd } from '../compStore';

import {
  readObj,
  writeObj
} from '../../utils/localStorageFn';

import {
  MD_EXCEPTION,
  MD_MSG
}  from '../../constants/Type';
import {
  WATCH_SAVED,
  WATCH_PREV
} from '../../constants/MsgWatch';

import WatchDefault from '../../constants/WatchDefault';

import {
  WAT_CREATE_GROUP,
  WAT_RENAME_GROUP,
  WAT_DELETE_GROUP,

  WAT_CREATE_LIST,
  WAT_RENAME_LIST,
  WAT_DELETE_LIST,

  WAT_ADD_ITEM
} from '../actions/WatchActions';

import {
  findGroup,
  createGroup,
  renameGroup,
  deleteGroup,
} from './LogicGroupFn';

import {
  createList,
  renameList,
  deleteList
} from './LogicListFn';
import {
  addItem,
  removeItem,
} from './LogicItemFn';

import {
  dragDropItem,
  dragDropList,
  dragDropGroup
} from './LogicDnDFn';

const STORAGE_KEY = 'WATCH_LIST_WORDS'
, DIALOG_CAPTION ='Watch List:';

const _crStore = () => ({
  isWatchEdited: false,
  watchList: WatchDefault,
  msEdit: {}
})
, _watchListStore = createStoreWithSelector(_crStore)
, _selectWatchList = state => state.watchList
, _selectMsEdit = state => state.msEdit
, _selectIsWatchEdited = state => state.isWatchEdited
, _set = _watchListStore.setState
, _get = _watchListStore.getState
, _getIsWatchEdited = () => _selectIsWatchEdited(_get());

export const getWatchList = () => _selectWatchList(_get())

export const useWatchList = fCrUse(_watchListStore, _selectWatchList)
export const useMsEdit = fCrUse(_watchListStore, _selectMsEdit)

export const getWatchGroups = () => (getWatchList() || {}).groups
export const getWatchListsByGroup = (groupCaption) => {
  const group = findGroup(getWatchList(), groupCaption);
  return group
    ? group.lists
    : [];
}

const _onEditWatch = (
  result,
  forActionType
) => {
  if (result.isDone){
    _set({
      isWatchEdited: true,
      watchList: { ...getWatchList() },
      msEdit: { forActionType }
    })
  } else {
    _set({
      msEdit: {
        messages:[result.message],
        forActionType
      }
    })
  }
}
const _fEditWatch = (
  editEntity,
  EDIT_ENTITY
) => (option) => {
  _onEditWatch(
    editEntity(getWatchList(), option),
    EDIT_ENTITY
  )
};
export const crGroup = _fEditWatch(createGroup, WAT_CREATE_GROUP)
export const renGroup = _fEditWatch(renameGroup, WAT_RENAME_GROUP)
export const delGroup = _fEditWatch(deleteGroup, WAT_DELETE_GROUP)
export const crList = _fEditWatch(createList, WAT_CREATE_LIST)
export const renList = _fEditWatch(renameList, WAT_RENAME_LIST)
export const delList = _fEditWatch(deleteList, WAT_DELETE_LIST)
const _addItem = _fEditWatch(addItem, WAT_ADD_ITEM);

const _onDragDrop = (
  result
) => {
  if (result.isDone){
    _set({
      isWatchEdited: true,
      watchList: {...getWatchList()}
    })
  } else {
    showMd(MD_EXCEPTION, result)
  }
}
const _fDdEntity = (ddEntity) => (option) => {
  _onDragDrop(ddEntity(getWatchList(), option))
};
export const ddItem = _fDdEntity(dragDropItem)
export const ddList = _fDdEntity(dragDropList)
export const ddGroup = _fDdEntity(dragDropGroup)

const _crMsgOption = (
  descr
) => ({
  caption: DIALOG_CAPTION,
  descr
});

const _saveWl = (
  isShowDialog=true
) => {
  if (_getIsWatchEdited()){
    const _err = writeObj(STORAGE_KEY, getWatchList());
    if (_err) {
      showMd(MD_MSG, _crMsgOption(_err.message))
    } else {
     _set({ isWatchEdited: false })
     if (isShowDialog) {
       showMd(MD_MSG, _crMsgOption(WATCH_SAVED))
     }
    }
  } else {
     showMd(MD_MSG, _crMsgOption(WATCH_PREV))
  }
}

export const initWatchList = () => {
  _set({
    watchList: readObj(STORAGE_KEY)[0] || WatchDefault
  })
}
export const saveWatchList = ({ isShowDialog } = {}) => {
  _saveWl(isShowDialog)
}
export const addWatchItem = (item) => {
  _addItem(item)
  if (getIsAutoSave()) {
    _saveWl(false)
  }
}
export const deleteWatchItem = (option) => {
  removeItem(getWatchList(), option);
  _set({
    isWatchEdited: true,
    watchList: {...getWatchList()}
  })
}

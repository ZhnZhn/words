import { createWithSelector } from '../storeApi';

import { getIsAutoSave } from '../settingStore';
import { showMd } from '../useCompStore';

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

import fCrUse from '../fCrUse';

const STORAGE_KEY = 'WATCH_LIST_WORDS'
, DIALOG_CAPTION ='Watch List:';

const _selectWatchList = state => state.watchList;
const _selectMsEdit = state => state.msEdit;
const _selectIsWatchEdited = state => state.isWatchEdited

const _crMsgOption = (
  caption,
  descr
) => ({
  caption,
  descr
});

const _onEditWatch = (
  result,
  forActionType,
  set,
  get
) => {
  if (result.isDone){
    set({
      isWatchEdited: true,
      watchList: { ..._selectWatchList(get()) },
      msEdit: { forActionType }
    })
  } else {
    set({
      msEdit: {
        messages:[result.message],
        forActionType
      }
    })
  }
}

const _onDragDrop = (
  result,
  set,
  get
) => {
  if (result.isDone){
    set({
      isWatchEdited: true,
      watchList: {..._selectWatchList(get())}
    })
  } else {
    showMd(MD_EXCEPTION, result)
  }
}

const _saveWl = (
  isShowDialog=true,
  set,
  get
) => {
  const _isWatchEdited = _selectIsWatchEdited(get());
  if (_isWatchEdited){
    const _err = writeObj(STORAGE_KEY, _selectWatchList(get()));
    if (_err) {
      showMd(
        MD_MSG,
        _crMsgOption(DIALOG_CAPTION, _err.message)
      )
    } else {
     set({ isWatchEdited: false })
     if (isShowDialog) {
       showMd(
         MD_MSG,
         _crMsgOption(DIALOG_CAPTION, WATCH_SAVED)
       )
     }
    }
  } else {
     showMd(
       MD_MSG,
       _crMsgOption(DIALOG_CAPTION, WATCH_PREV)
     )
  }
}

const _crStore = () => ({
  isWatchEdited: false,
  watchList: WatchDefault,
  msEdit: {}
})

const useWatchListStore = createWithSelector(_crStore)

export const useWatchList = fCrUse(useWatchListStore, _selectWatchList)
export const useMsEdit = fCrUse(useWatchListStore, _selectMsEdit)

export const getWatchGroups = () => _selectWatchList(useWatchListStore.getState()).groups
export const getWatchListsByGroup = (groupCaption) => {
  const group = findGroup(_selectWatchList(useWatchListStore.getState()), groupCaption);
  return group
    ? group.lists
    : [];
}

const _set = useWatchListStore.setState
, _get = useWatchListStore.getState;

export const crGroup = (option) => {
  _onEditWatch(
     createGroup(_selectWatchList(_get()), option),
     WAT_CREATE_GROUP,
     _set,
     _get
  );
}
export const renGroup = (option) => {
  _onEditWatch(
    renameGroup(_selectWatchList(_get()), option),
    WAT_RENAME_GROUP,
    _set,
    _get
  );
}
export const delGroup = (option) => {
  _onEditWatch(
    deleteGroup(_selectWatchList(_get()), option),
    WAT_DELETE_GROUP,
    _set,
    _get
  );
}

export const crList = (option) => {
  _onEditWatch(
    createList(_selectWatchList(_get()), option),
    WAT_CREATE_LIST,
    _set,
    _get
  );
}
export const renList = (option) => {
  _onEditWatch(
    renameList(_selectWatchList(_get()), option),
    WAT_RENAME_LIST,
    _set,
    _get
  );
}
export const delList = (option) => {
  _onEditWatch(
    deleteList(_selectWatchList(_get()), option),
    WAT_DELETE_LIST,
    _set,
    _get
  )
}

export const ddItem = (option) => {
  _onDragDrop(
    dragDropItem(_selectWatchList(_get()), option),
    _set,
    _get
  );
}
export const ddList = (option) => {
  _onDragDrop(
    dragDropList(_selectWatchList(_get()), option),
    _set,
    _get
  );
}
export const ddGroup = (option) => {
  _onDragDrop(
    dragDropGroup(_selectWatchList(_get()), option),
    _set,
    _get
  );
}

export const initWatchList = () => {
  _set({
    watchList: readObj(STORAGE_KEY)[0] || WatchDefault
  })
}
export const saveWatchList = ({ isShowDialog } = {}) => {
  _saveWl(isShowDialog, _set, _get)
}
export const addWatchItem = (item) => {
  _onEditWatch(
    addItem(_selectWatchList(_get()), item),
    WAT_ADD_ITEM,
    _set,
    _get
  );
  if (getIsAutoSave()) {
    _saveWl(false, _set, _get)
  }
}
export const deleteWatchItem = (option) => {
  removeItem(_selectWatchList(_get()), option);
  _set({
    isWatchEdited: true,
    watchList: {..._selectWatchList(_get())}
  })
}

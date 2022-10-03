import Reflux from 'reflux-core';

export const WAT_ADD_ITEM = 'addWatchItem'
export const WAT_REMOVE_ITEM = 'removeWatchItem'
export const WAT_SAVE_WATCH = 'saveWatch'

export const WAT_DRAG_DROP_GROUP = 'dragDropGroup'
export const WAT_DRAG_DROP_LIST = 'dragDropList'
export const WAT_DRAG_DROP_ITEM = 'dragDropItem'

export const WAT_CREATE_GROUP = 'createGroup'
export const WAT_RENAME_GROUP = 'renameGroup'
export const WAT_DELETE_GROUP = 'deleteGroup'
export const WAT_CREATE_LIST = 'createList'
export const WAT_RENAME_LIST = 'renameList'
export const WAT_DELETE_LIST = 'deleteList'

export const WAT_EDIT_WATCH_COMPLETED = 'editWatchCompleted'
export const WAT_EDIT_WATCH_FAILED = 'editWatchFailed'

export const WatchActions = Reflux.createActions({
  [WAT_ADD_ITEM] : {},
  [WAT_REMOVE_ITEM] : {},
  [WAT_SAVE_WATCH] : {},

  [WAT_DRAG_DROP_GROUP] : {},
  [WAT_DRAG_DROP_LIST] : {},
  [WAT_DRAG_DROP_ITEM] : {},

  [WAT_CREATE_GROUP] : {},
  [WAT_RENAME_GROUP] : {},
  [WAT_DELETE_GROUP] : {},
  [WAT_CREATE_LIST] : {},
  [WAT_RENAME_LIST] : {},
  [WAT_DELETE_LIST] : {},

  [WAT_EDIT_WATCH_COMPLETED] : {},
  [WAT_EDIT_WATCH_FAILED] : {}
})

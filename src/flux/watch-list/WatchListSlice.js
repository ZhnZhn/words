import {
  readObj,
  writeObj
} from '../../utils/localStorageFn';

import { showMd } from '../useCompStore';

import {
  CAT_UPDATE_WATCH_BROWSER
} from '../actions/ComponentActions';

import {
  WAT_CREATE_GROUP,
  WAT_RENAME_GROUP,
  WAT_DELETE_GROUP,
  WAT_CREATE_LIST,
  WAT_RENAME_LIST,
  WAT_DELETE_LIST,
  WAT_ADD_ITEM,
  WAT_EDIT_WATCH_COMPLETED,
  WAT_EDIT_WATCH_FAILED
} from '../actions/WatchActions';
import WatchDefault from '../../constants/WatchDefault';
import {
  MD_EXCEPTION,
  MD_MSG
}  from '../../constants/Type';
import {
  WATCH_SAVED,
  WATCH_PREV
} from '../../constants/MsgWatch';

import {
  dragDropItem,
  dragDropList,
  dragDropGroup
} from './LogicDnDFn';
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


const STORAGE_KEY = 'WATCH_LIST_WORDS'
, DIALOG_CAPTION ='Watch List:';

const WatchListSlice = {

  watchList: WatchDefault,
  isWatchEdited: false,

  initWatchList(){
    this.watchList = readObj(STORAGE_KEY)[0] || WatchDefault
    this.trigger(CAT_UPDATE_WATCH_BROWSER, this.watchList);
  },
  getWatchList(){
    return this.watchList;
  },
  getWatchGroups(){
    return this.watchList.groups;
  },
  getWatchListsByGroup(groupCaption){
    const group = findGroup(this.watchList, groupCaption);
    if (!group) { return []; }
    return group.lists;
  },

  onAddWatchItem(item){
    this._onEditWatch(
      addItem(this.watchList, item), WAT_ADD_ITEM
    );
    if (this.isAutoSaveOnAdd){
      this.onSaveWatch({ isShowDialog: false })
    }
  },
  onRemoveWatchItem(option){
    removeItem(this.watchList, option);
    this.isWatchEdited = true;
    this.trigger(CAT_UPDATE_WATCH_BROWSER, this.watchList);
  },


  _onDragDrop(result){
    if (result.isDone){
       this.isWatchEdited = true;
       this.trigger(CAT_UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      showMd(MD_EXCEPTION, result)    
    }
  },

  onDragDropItem(option){
    this._onDragDrop(dragDropItem(this.watchList, option) );
  },
  onDragDropList(option){
    this._onDragDrop(dragDropList(this.watchList, option) );
  },
  onDragDropGroup(option){
    this._onDragDrop(dragDropGroup(this.watchList, option));
  },


  onSaveWatch({ isShowDialog=true } = {}){
    if (this.isWatchEdited){
      const _err = writeObj(STORAGE_KEY, this.watchList);
      if (_err) {
       showMd(MD_MSG, {
          caption: DIALOG_CAPTION,
          descr: _err.message
       })
      } else {
       this.isWatchEdited = false;
       if (isShowDialog) {
         showMd(MD_MSG, {
            caption: DIALOG_CAPTION,
            descr: WATCH_SAVED
         })
       }
      }
    } else {
       showMd(MD_MSG, {
          caption: DIALOG_CAPTION,
          descr: WATCH_PREV
       })
    }
  },

  _onEditWatch(result, forActionType){
    if (result.isDone){
      this.isWatchEdited = true;
      this.trigger(CAT_UPDATE_WATCH_BROWSER, this.watchList);
      this.trigger(WAT_EDIT_WATCH_COMPLETED, {forActionType});
    } else {
      this.trigger(WAT_EDIT_WATCH_FAILED, {
          messages:[result.message],
          forActionType
      });
    }
  },
  onCreateGroup(option){
    this._onEditWatch(
      createGroup(this.watchList, option),
      WAT_CREATE_GROUP
    );
  },
  onRenameGroup(option){
    this._onEditWatch(
      renameGroup(this.watchList, option),
      WAT_RENAME_GROUP
    );
  },
  onDeleteGroup(option){
    this._onEditWatch(
      deleteGroup(this.watchList, option),
      WAT_DELETE_GROUP
    );
  },

  onCreateList(option){
    this._onEditWatch(
      createList(this.watchList, option),
      WAT_CREATE_LIST
    );
  },
  onRenameList(option){
    this._onEditWatch(
      renameList(this.watchList, option),
      WAT_RENAME_LIST
    );
  },
  onDeleteList(option){
    this._onEditWatch(
      deleteList(this.watchList, option),
      WAT_DELETE_LIST
    );
  }

}

export default WatchListSlice

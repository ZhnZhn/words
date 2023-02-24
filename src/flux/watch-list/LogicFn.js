import {
  notFoundItem,
  groupExisted,
  listExisted,
  itemExisted,
  ALERT_DND_LIST,
  ALERT_DND_ITEM
} from '../../constants/MsgWatch';

import {
  fFindArrIndexByPropName,
  fIsArrSameItemByPropName
} from '../../utils/fnArr';
import {
  pushToImArr,
  fFilterByPropNameImArr,
  insertItemToImArr,
  fEditByPropNameImArr
} from '../../utils/fnImArr';
import {
  fFindItemInObjArrayByPropName
} from '../../utils/fnObj';

const CAPTION = 'caption'
, GROUPS = 'groups'
, LISTS = 'lists';

const _fCrMsgItem = (
  crMsg
) => (...args) => ({
  isDone: false,
  message: crMsg(...args)
})

//itemType, name
export const crMsgNotFound = _fCrMsgItem(notFoundItem)
//caption
export const crMsgGroupExisted = _fCrMsgItem(groupExisted)
//captionList, captionGroup
export const crMsgListExisted = _fCrMsgItem(listExisted)
//caption, captionList
export const crMsgItemExisted = _fCrMsgItem(itemExisted)

const _fCrAlertItem = (options) => (
  token1,
  token2
) => ({
  isDone: false,
  itemId: `${token1}:${token2}`,
  ...options
})

/* for DragDrop */
// dropId, dragId
export const crAlertItemExisted = _fCrAlertItem(ALERT_DND_ITEM)
//dropGroupCaption, dragListCaption
export const crAlertListExisted = _fCrAlertItem(ALERT_DND_LIST)

/* for DragDrop */
export const filter = fFilterByPropNameImArr(CAPTION)
export const getArrayWithObj = pushToImArr

export const getArrayWithRename = fEditByPropNameImArr(CAPTION)

/* for DragDrop */
export const insertItemInArray = insertItemToImArr
/* for DragDrop */

export const findGroup = fFindItemInObjArrayByPropName(GROUPS, CAPTION)
export const findList = fFindItemInObjArrayByPropName(LISTS, CAPTION)

export const findIndex = fFindArrIndexByPropName('caption')
export const isInArraySameCaption = fIsArrSameItemByPropName(CAPTION)

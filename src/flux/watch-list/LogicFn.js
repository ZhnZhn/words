import {
  notFoundItem,
  groupExisted,
  listExisted,
  itemExisted,
  ALERT_DND_LIST,
  ALERT_DND_ITEM
} from '../../constants/MsgWatch';

import ut from '../../utils/fnUtil';

const CAPTION = 'caption'
, GROUPS = 'groups'
, LISTS = 'lists';

export const crMsgNotFound = (
  itemType,
  name
) => ({
   isDone: false,
   message: notFoundItem(itemType, name)
})

export const crMsgGroupExisted = (
  caption
) => ({
   isDone: false,
   message: groupExisted(caption)
})

export const crMsgListExisted = (
  captionList,
  captionGroup
) => ({
   isDone: false,
   message: listExisted(captionList, captionGroup)
})

export const crMsgItemExisted = (
  caption,
  captionList
) => ({
    isDone: false,
    message: itemExisted(caption, captionList)
})

/* for DragDrop */
export const crAlertItemExisted = (
  dropId,
  dragId
) => ({
    isDone: false,
    itemId: `${dropId}:${dragId}`,
    ...ALERT_DND_ITEM
 })

 export const crAlertListExisted = (
   dropGroupCaption,
   dragListCaption
 ) => ({
    isDone: false,
    itemId: `${dropGroupCaption}:${dragListCaption}`,
    ...ALERT_DND_LIST
 })

/* for DragDrop */
export const filter = ut.imArr.filterByPropFn(CAPTION)
export const getArrayWithObj = ut.imArr.push

export const getArrayWithRename = ut.imArr.editByPropFn(CAPTION)

/* for DragDrop */
export const insertItemInArray = ut.imArr.insertItem
/* for DragDrop */

export const findGroup = ut.obj.findInPropArrayByProp(GROUPS, CAPTION)
export const findList = ut.obj.findInPropArrayByProp(LISTS, CAPTION)

export const findIndex = ut.arr.findIndexByProp('caption')
export const isInArraySameCaption = ut.arr.isSameByProp(CAPTION)

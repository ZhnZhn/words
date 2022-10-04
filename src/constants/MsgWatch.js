
export const WATCH_SAVED = 'Watch List has been saved.'
export const WATCH_PREV = 'Watch List has not been edited\nfrom previous save.'
export const LOCAL_STORAGE_ABSENT = 'Browser LocalStorage is absent.'

export const notFoundItem = (
  itemType,
  captionGroup
) => `The ${itemType} witn name ${captionGroup} not found.`
export const groupExisted = (
  caption
) => `Group with name ${caption} is already existed.`
export const listExisted = (
  captionList,
  captionGroup
) => `List with name ${captionList}\n      In Group ${captionGroup} is already existed.`
export const itemExisted = (
  caption,
  captionList
) => `Item with name ${caption}\n      In List ${captionList} is already existed.`

export const emptyName = (
  item
) => `${item} name can not be empty.`
export const notSelected = (
  item
) => `${item} is not selected.`

export const ALERT_DND_ITEM = {
  caption: 'Drag Drop Item',
  descr: 'Item in List already has been existed.'
}
export const ALERT_DND_LIST = {
  caption: 'Drag Drop List',
  descr: 'List in Group already has been existed.'
}

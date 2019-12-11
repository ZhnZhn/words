"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var MsgWatch = {
  WATCH_SAVED: 'Watch List has been saved.',
  WATCH_PREV: 'Watch List has not been edited\nfrom previous save.',
  notFoundItem: function notFoundItem(itemType, captionGroup) {
    return "The " + itemType + " witn name " + captionGroup + " not found.";
  },
  groupExisted: function groupExisted(caption) {
    return "Group with name " + caption + " is already existed.";
  },
  listExisted: function listExisted(captionList, captionGroup) {
    return "List with name " + captionList + "\n      In Group " + captionGroup + " is already existed.";
  },
  itemExisted: function itemExisted(caption, captionList) {
    return "Item with name " + caption + "\n      In List " + captionList + " is already existed.";
  },
  emptyName: function emptyName(item) {
    return item + " name can not be empty.";
  },
  notSelected: function notSelected(item) {
    return item + " is not selected.";
  },
  ALERT_DND_ITEM: {
    caption: 'Drag Drop Item',
    descr: 'Item in List already has been existed.'
  },
  ALERT_DND_LIST: {
    caption: 'Drag Drop List',
    descr: 'List in Group already has been existed.'
  }
};
var _default = MsgWatch;
exports["default"] = _default;
//# sourceMappingURL=MsgWatch.js.map
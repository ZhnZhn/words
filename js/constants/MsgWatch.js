"use strict";

exports.__esModule = true;
exports.notSelected = exports.notFoundItem = exports.listExisted = exports.itemExisted = exports.groupExisted = exports.emptyName = exports.WATCH_SAVED = exports.WATCH_PREV = exports.ALERT_DND_LIST = exports.ALERT_DND_ITEM = void 0;
var WATCH_SAVED = 'Watch List has been saved.';
exports.WATCH_SAVED = WATCH_SAVED;
var WATCH_PREV = 'Watch List has not been edited\nfrom previous save.';
exports.WATCH_PREV = WATCH_PREV;

var notFoundItem = function notFoundItem(itemType, captionGroup) {
  return "The " + itemType + " witn name " + captionGroup + " not found.";
};

exports.notFoundItem = notFoundItem;

var groupExisted = function groupExisted(caption) {
  return "Group with name " + caption + " is already existed.";
};

exports.groupExisted = groupExisted;

var listExisted = function listExisted(captionList, captionGroup) {
  return "List with name " + captionList + "\n      In Group " + captionGroup + " is already existed.";
};

exports.listExisted = listExisted;

var itemExisted = function itemExisted(caption, captionList) {
  return "Item with name " + caption + "\n      In List " + captionList + " is already existed.";
};

exports.itemExisted = itemExisted;

var emptyName = function emptyName(item) {
  return item + " name can not be empty.";
};

exports.emptyName = emptyName;

var notSelected = function notSelected(item) {
  return item + " is not selected.";
};

exports.notSelected = notSelected;
var ALERT_DND_ITEM = {
  caption: 'Drag Drop Item',
  descr: 'Item in List already has been existed.'
};
exports.ALERT_DND_ITEM = ALERT_DND_ITEM;
var ALERT_DND_LIST = {
  caption: 'Drag Drop List',
  descr: 'List in Group already has been existed.'
};
exports.ALERT_DND_LIST = ALERT_DND_LIST;
//# sourceMappingURL=MsgWatch.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.isInArraySameCaption = exports.insertItemInArray = exports.getArrayWithRename = exports.getArrayWithObj = exports.findList = exports.findIndex = exports.findGroup = exports.filter = exports.crMsgNotFound = exports.crMsgListExisted = exports.crMsgItemExisted = exports.crMsgGroupExisted = exports.crAlertListExisted = exports.crAlertItemExisted = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _MsgWatch = require("../../constants/MsgWatch");
var _fnUtil = _interopRequireDefault(require("../../utils/fnUtil"));
var _fnArr = require("../../utils/fnArr");
var CAPTION = 'caption',
  GROUPS = 'groups',
  LISTS = 'lists';
var crMsgNotFound = function crMsgNotFound(itemType, name) {
  return {
    isDone: false,
    message: (0, _MsgWatch.notFoundItem)(itemType, name)
  };
};
exports.crMsgNotFound = crMsgNotFound;
var crMsgGroupExisted = function crMsgGroupExisted(caption) {
  return {
    isDone: false,
    message: (0, _MsgWatch.groupExisted)(caption)
  };
};
exports.crMsgGroupExisted = crMsgGroupExisted;
var crMsgListExisted = function crMsgListExisted(captionList, captionGroup) {
  return {
    isDone: false,
    message: (0, _MsgWatch.listExisted)(captionList, captionGroup)
  };
};
exports.crMsgListExisted = crMsgListExisted;
var crMsgItemExisted = function crMsgItemExisted(caption, captionList) {
  return {
    isDone: false,
    message: (0, _MsgWatch.itemExisted)(caption, captionList)
  };
};

/* for DragDrop */
exports.crMsgItemExisted = crMsgItemExisted;
var crAlertItemExisted = function crAlertItemExisted(dropId, dragId) {
  return (0, _extends2["default"])({
    isDone: false,
    itemId: dropId + ":" + dragId
  }, _MsgWatch.ALERT_DND_ITEM);
};
exports.crAlertItemExisted = crAlertItemExisted;
var crAlertListExisted = function crAlertListExisted(dropGroupCaption, dragListCaption) {
  return (0, _extends2["default"])({
    isDone: false,
    itemId: dropGroupCaption + ":" + dragListCaption
  }, _MsgWatch.ALERT_DND_LIST);
};

/* for DragDrop */
exports.crAlertListExisted = crAlertListExisted;
var filter = _fnUtil["default"].imArr.filterByPropFn(CAPTION);
exports.filter = filter;
var getArrayWithObj = _fnUtil["default"].imArr.push;
exports.getArrayWithObj = getArrayWithObj;
var getArrayWithRename = _fnUtil["default"].imArr.editByPropFn(CAPTION);

/* for DragDrop */
exports.getArrayWithRename = getArrayWithRename;
var insertItemInArray = _fnUtil["default"].imArr.insertItem;
/* for DragDrop */
exports.insertItemInArray = insertItemInArray;
var findGroup = _fnUtil["default"].obj.findInPropArrayByProp(GROUPS, CAPTION);
exports.findGroup = findGroup;
var findList = _fnUtil["default"].obj.findInPropArrayByProp(LISTS, CAPTION);
exports.findList = findList;
var findIndex = (0, _fnArr.fFindArrIndexByPropName)('caption');
exports.findIndex = findIndex;
var isInArraySameCaption = (0, _fnArr.fIsArrSameItemByPropName)(CAPTION);
exports.isInArraySameCaption = isInArraySameCaption;
//# sourceMappingURL=LogicFn.js.map
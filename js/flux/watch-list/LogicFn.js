"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.isInArraySameCaption = exports.insertItemInArray = exports.getArrayWithRename = exports.getArrayWithObj = exports.findList = exports.findIndex = exports.findGroup = exports.filter = exports.crMsgNotFound = exports.crMsgListExisted = exports.crMsgItemExisted = exports.crMsgGroupExisted = exports.crAlertListExisted = exports.crAlertItemExisted = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _MsgWatch = require("../../constants/MsgWatch");
var _fnArr = require("../../utils/fnArr");
var _fnImArr = require("../../utils/fnImArr");
var _fnObj = require("../../utils/fnObj");
var CAPTION = 'caption',
  GROUPS = 'groups',
  LISTS = 'lists';
var _fCrMsgItem = function _fCrMsgItem(crMsg) {
  return function () {
    return {
      isDone: false,
      message: crMsg.apply(void 0, arguments)
    };
  };
};

//itemType, name
var crMsgNotFound = _fCrMsgItem(_MsgWatch.notFoundItem);
//caption
exports.crMsgNotFound = crMsgNotFound;
var crMsgGroupExisted = _fCrMsgItem(_MsgWatch.groupExisted);
//captionList, captionGroup
exports.crMsgGroupExisted = crMsgGroupExisted;
var crMsgListExisted = _fCrMsgItem(_MsgWatch.listExisted);
//caption, captionList
exports.crMsgListExisted = crMsgListExisted;
var crMsgItemExisted = _fCrMsgItem(_MsgWatch.itemExisted);
exports.crMsgItemExisted = crMsgItemExisted;
var _fCrAlertItem = function _fCrAlertItem(options) {
  return function (token1, token2) {
    return (0, _extends2["default"])({
      isDone: false,
      itemId: token1 + ":" + token2
    }, options);
  };
};

/* for DragDrop */
// dropId, dragId
var crAlertItemExisted = _fCrAlertItem(_MsgWatch.ALERT_DND_ITEM);
//dropGroupCaption, dragListCaption
exports.crAlertItemExisted = crAlertItemExisted;
var crAlertListExisted = _fCrAlertItem(_MsgWatch.ALERT_DND_LIST);

/* for DragDrop */
exports.crAlertListExisted = crAlertListExisted;
var filter = (0, _fnImArr.fFilterByPropNameImArr)(CAPTION);
exports.filter = filter;
var getArrayWithObj = _fnImArr.pushToImArr;
exports.getArrayWithObj = getArrayWithObj;
var getArrayWithRename = (0, _fnImArr.fEditByPropNameImArr)(CAPTION);

/* for DragDrop */
exports.getArrayWithRename = getArrayWithRename;
var insertItemInArray = _fnImArr.insertItemToImArr;
/* for DragDrop */
exports.insertItemInArray = insertItemInArray;
var findGroup = (0, _fnObj.fFindItemInObjArrayByPropName)(GROUPS, CAPTION);
exports.findGroup = findGroup;
var findList = (0, _fnObj.fFindItemInObjArrayByPropName)(LISTS, CAPTION);
exports.findList = findList;
var findIndex = (0, _fnArr.fFindArrIndexByPropName)('caption');
exports.findIndex = findIndex;
var isInArraySameCaption = (0, _fnArr.fIsArrSameItemByPropName)(CAPTION);
exports.isInArraySameCaption = isInArraySameCaption;
//# sourceMappingURL=LogicFn.js.map
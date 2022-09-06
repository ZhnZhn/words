"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _MsgWatch = require("../../constants/MsgWatch");

var _fnUtil = _interopRequireDefault(require("../../utils/fnUtil"));

var CAPTION = 'caption',
    GROUPS = 'groups',
    LISTS = 'lists';
var LogicFn = {
  crMsgNotFound: function crMsgNotFound(itemType, name) {
    return {
      isDone: false,
      message: (0, _MsgWatch.notFoundItem)(itemType, name)
    };
  },
  crMsgGroupExisted: function crMsgGroupExisted(caption) {
    return {
      isDone: false,
      message: (0, _MsgWatch.groupExisted)(caption)
    };
  },
  crMsgListExisted: function crMsgListExisted(captionList, captionGroup) {
    return {
      isDone: false,
      message: (0, _MsgWatch.listExisted)(captionList, captionGroup)
    };
  },
  crMsgItemExisted: function crMsgItemExisted(caption, captionList) {
    return {
      isDone: false,
      message: (0, _MsgWatch.itemExisted)(caption, captionList)
    };
  },

  /* for DragDrop */
  crAlertItemExisted: function crAlertItemExisted(dropId, dragId) {
    return (0, _extends2["default"])({
      isDone: false,
      itemId: dropId + ":" + dragId
    }, _MsgWatch.ALERT_DND_ITEM);
  },
  crAlertListExisted: function crAlertListExisted(dropGroupCaption, dragListCaption) {
    return (0, _extends2["default"])({
      isDone: false,
      itemId: dropGroupCaption + ":" + dragListCaption
    }, _MsgWatch.ALERT_DND_LIST);
  },

  /* for DragDrop */
  filter: _fnUtil["default"].imArr.filterByPropFn(CAPTION),
  getArrayWithObj: _fnUtil["default"].imArr.push,
  getArrayWithRename: _fnUtil["default"].imArr.editByPropFn(CAPTION),

  /* for DragDrop */
  insertItemInArray: _fnUtil["default"].imArr.insertItem,

  /* for DragDrop */
  findGroup: _fnUtil["default"].obj.findInPropArrayByProp(GROUPS, CAPTION),
  findList: _fnUtil["default"].obj.findInPropArrayByProp(LISTS, CAPTION),
  findIndex: _fnUtil["default"].arr.findIndexByProp('caption'),
  isInArraySameCaption: _fnUtil["default"].arr.isSameByProp(CAPTION)
};
var _default = LogicFn;
exports["default"] = _default;
//# sourceMappingURL=LogicFn.js.map
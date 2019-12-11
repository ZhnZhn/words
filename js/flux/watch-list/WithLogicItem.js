"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _LogicFn = _interopRequireDefault(require("./LogicFn"));

var crMsgItemExisted = _LogicFn["default"].crMsgItemExisted,
    findGroup = _LogicFn["default"].findGroup,
    findList = _LogicFn["default"].findList,
    isInArraySameCaption = _LogicFn["default"].isInArraySameCaption,
    filter = _LogicFn["default"].filter;
var WithLogicItem = {
  addItem: function addItem(watchList, item) {
    var caption = item.caption,
        groupCaption = item.groupCaption,
        listCaption = item.listCaption,
        toGroup = findGroup(watchList, groupCaption),
        toList = findList(toGroup, listCaption),
        items = toList.items;

    if (isInArraySameCaption(items, caption)) {
      return crMsgItemExisted(caption, listCaption);
    }

    if (items) {
      toList.items.push({
        caption: caption
      });
    } else {
      toList.items = [{
        caption: caption
      }];
    }

    return {
      isDone: true
    };
  },
  removeItem: function removeItem(watchList, _ref) {
    var groupCaption = _ref.groupCaption,
        listCaption = _ref.listCaption,
        caption = _ref.caption;
    var groupFrom = findGroup(watchList, groupCaption),
        listFrom = findList(groupFrom, listCaption);
    listFrom.items = filter(listFrom.items, caption);
  }
};
var _default = WithLogicItem;
exports["default"] = _default;
//# sourceMappingURL=WithLogicItem.js.map
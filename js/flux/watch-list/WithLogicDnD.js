"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _LogicFn = require("./LogicFn");

var WithLogicDnD = {
  dragDropItem: function dragDropItem(watchList, _ref) {
    var dragId = _ref.dragId,
        dropId = _ref.dropId;

    var _dragId$split = dragId.split(';'),
        dragGroupId = _dragId$split[0],
        dragListId = _dragId$split[1],
        dragItemId = _dragId$split[2],
        dragGroup = (0, _LogicFn.findGroup)(watchList, dragGroupId),
        dragList = (0, _LogicFn.findList)(dragGroup, dragListId),
        dragIndex = (0, _LogicFn.findIndex)(dragList.items, dragItemId),
        dragItem = dragList.items[dragIndex];

    var _dropId$split = dropId.split(';'),
        dropGroupId = _dropId$split[0],
        dropListId = _dropId$split[1],
        dropItemId = _dropId$split[2],
        dropGroup = (0, _LogicFn.findGroup)(watchList, dropGroupId),
        dropList = (0, _LogicFn.findList)(dropGroup, dropListId),
        dropIndex = dropItemId ? (0, _LogicFn.findIndex)(dropList.items, dropItemId) : 0; //dragArr[3] => dragArr[2]


    if (dragList.caption !== dropList.caption && (0, _LogicFn.isInArraySameCaption)(dropList.items, dragItemId)) {
      return (0, _LogicFn.crAlertItemExisted)(dropListId, dragItemId);
    }

    dragList.items = (0, _LogicFn.filter)(dragList.items, dragItemId);
    dropList.items = (0, _LogicFn.insertItemInArray)(dragItem, dropIndex, dropList.items);
    return {
      isDone: true
    };
  },
  dragDropList: function dragDropList(watchList, _ref2) {
    var dragId = _ref2.dragId,
        dropId = _ref2.dropId;

    var _dragId$split2 = dragId.split(';'),
        dragGroupCaption = _dragId$split2[0],
        dragListCaption = _dragId$split2[1],
        dragGroup = (0, _LogicFn.findGroup)(watchList, dragGroupCaption),
        dragList = (0, _LogicFn.findList)(dragGroup, dragListCaption);

    var _dropId$split2 = dropId.split(';'),
        dropGroupCaption = _dropId$split2[0],
        dropListCaption = _dropId$split2[1],
        dropGroup = (0, _LogicFn.findGroup)(watchList, dropGroupCaption),
        dropIndex = dropListCaption ? (0, _LogicFn.findIndex)(dropGroup.lists, dropListCaption) : 0;

    if (dragGroup.caption !== dropGroup.caption && (0, _LogicFn.isInArraySameCaption)(dropGroup.lists, dragListCaption)) {
      return (0, _LogicFn.crAlertListExisted)(dropGroupCaption, dragListCaption);
    }

    dragGroup.lists = (0, _LogicFn.filter)(dragGroup.lists, dragListCaption);
    dropGroup.lists = (0, _LogicFn.insertItemInArray)(dragList, dropIndex, dropGroup.lists);
    return {
      isDone: true
    };
  },
  dragDropGroup: function dragDropGroup(watchList, _ref3) {
    var dragId = _ref3.dragId,
        dropId = _ref3.dropId;

    var _dragId$split3 = dragId.split(';'),
        dragGroupCaption = _dragId$split3[0],
        dragGroup = (0, _LogicFn.findGroup)(watchList, dragGroupCaption),
        _dropId$split3 = dropId.split(';'),
        dropGroupCaption = _dropId$split3[0],
        dropIndex = dropGroupCaption ? (0, _LogicFn.findIndex)(watchList.groups, dropGroupCaption) : 0;

    watchList.groups = (0, _LogicFn.filter)(watchList.groups, dragGroupCaption);
    watchList.groups = (0, _LogicFn.insertItemInArray)(dragGroup, dropIndex, watchList.groups);
    return {
      isDone: true
    };
  }
};
var _default = WithLogicDnD;
exports["default"] = _default;
//# sourceMappingURL=WithLogicDnD.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _LogicFn = _interopRequireDefault(require("./LogicFn"));

var crAlertItemExisted = _LogicFn["default"].crAlertItemExisted,
    crAlertListExisted = _LogicFn["default"].crAlertListExisted,
    findGroup = _LogicFn["default"].findGroup,
    findList = _LogicFn["default"].findList,
    findIndex = _LogicFn["default"].findIndex,
    isInArraySameCaption = _LogicFn["default"].isInArraySameCaption,
    filter = _LogicFn["default"].filter,
    insertItemInArray = _LogicFn["default"].insertItemInArray;
var WithLogicDnD = {
  dragDropItem: function dragDropItem(watchList, _ref) {
    var dragId = _ref.dragId,
        dropId = _ref.dropId;

    var _dragId$split = dragId.split(';'),
        dragGroupId = _dragId$split[0],
        dragListId = _dragId$split[1],
        dragItemId = _dragId$split[2],
        dragGroup = findGroup(watchList, dragGroupId),
        dragList = findList(dragGroup, dragListId),
        dragIndex = findIndex(dragList.items, dragItemId),
        dragItem = dragList.items[dragIndex];

    var _dropId$split = dropId.split(';'),
        dropGroupId = _dropId$split[0],
        dropListId = _dropId$split[1],
        dropItemId = _dropId$split[2],
        dropGroup = findGroup(watchList, dropGroupId),
        dropList = findList(dropGroup, dropListId),
        dropIndex = dropItemId ? findIndex(dropList.items, dropItemId) : 0; //dragArr[3] => dragArr[2]


    if (dragList.caption !== dropList.caption && isInArraySameCaption(dropList.items, dragItemId)) {
      return crAlertItemExisted(dropListId, dragItemId);
    }

    dragList.items = filter(dragList.items, dragItemId);
    dropList.items = insertItemInArray(dragItem, dropIndex, dropList.items);
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
        dragGroup = findGroup(watchList, dragGroupCaption),
        dragList = findList(dragGroup, dragListCaption);

    var _dropId$split2 = dropId.split(';'),
        dropGroupCaption = _dropId$split2[0],
        dropListCaption = _dropId$split2[1],
        dropGroup = findGroup(watchList, dropGroupCaption),
        dropIndex = dropListCaption ? findIndex(dropGroup.lists, dropListCaption) : 0;

    if (dragGroup.caption !== dropGroup.caption && isInArraySameCaption(dropGroup.lists, dragListCaption)) {
      return crAlertListExisted(dropGroupCaption, dragListCaption);
    }

    dragGroup.lists = filter(dragGroup.lists, dragListCaption);
    dropGroup.lists = insertItemInArray(dragList, dropIndex, dropGroup.lists);
    return {
      isDone: true
    };
  },
  dragDropGroup: function dragDropGroup(watchList, _ref3) {
    var dragId = _ref3.dragId,
        dropId = _ref3.dropId;

    var _dragId$split3 = dragId.split(';'),
        dragGroupCaption = _dragId$split3[0],
        dragGroup = findGroup(watchList, dragGroupCaption),
        _dropId$split3 = dropId.split(';'),
        dropGroupCaption = _dropId$split3[0],
        dropIndex = dropGroupCaption ? findIndex(watchList.groups, dropGroupCaption) : 0;

    watchList.groups = filter(watchList.groups, dragGroupCaption);
    watchList.groups = insertItemInArray(dragGroup, dropIndex, watchList.groups);
    return {
      isDone: true
    };
  }
};
var _default = WithLogicDnD;
exports["default"] = _default;
//# sourceMappingURL=WithLogicDnD.js.map
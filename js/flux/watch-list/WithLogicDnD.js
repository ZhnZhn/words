'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _LogicFn = require('./LogicFn');

var _LogicFn2 = _interopRequireDefault(_LogicFn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crAlertItemExisted = _LogicFn2.default.crAlertItemExisted,
    crAlertListExisted = _LogicFn2.default.crAlertListExisted,
    findGroup = _LogicFn2.default.findGroup,
    findList = _LogicFn2.default.findList,
    findIndex = _LogicFn2.default.findIndex,
    isInArraySameCaption = _LogicFn2.default.isInArraySameCaption,
    filter = _LogicFn2.default.filter,
    insertItemInArray = _LogicFn2.default.insertItemInArray;


var WithLogicDnD = {
  dragDropItem: function dragDropItem(watchList, _ref) {
    var dragId = _ref.dragId,
        dropId = _ref.dropId;

    var _dragId$split = dragId.split(';'),
        _dragId$split2 = (0, _slicedToArray3.default)(_dragId$split, 3),
        dragGroupId = _dragId$split2[0],
        dragListId = _dragId$split2[1],
        dragItemId = _dragId$split2[2],
        dragGroup = findGroup(watchList, dragGroupId),
        dragList = findList(dragGroup, dragListId),
        dragIndex = findIndex(dragList.items, dragItemId),
        dragItem = dragList.items[dragIndex];

    var _dropId$split = dropId.split(';'),
        _dropId$split2 = (0, _slicedToArray3.default)(_dropId$split, 3),
        dropGroupId = _dropId$split2[0],
        dropListId = _dropId$split2[1],
        dropItemId = _dropId$split2[2],
        dropGroup = findGroup(watchList, dropGroupId),
        dropList = findList(dropGroup, dropListId),
        dropIndex = dropItemId ? findIndex(dropList.items, dropItemId) : 0;

    //dragArr[3] => dragArr[2]


    if (dragList.caption !== dropList.caption && isInArraySameCaption(dropList.items, dragItemId)) {
      return crAlertItemExisted(dropListId, dragItemId);
    }

    dragList.items = filter(dragList.items, dragItemId);
    dropList.items = insertItemInArray(dragItem, dropIndex, dropList.items);

    return { isDone: true };
  },
  dragDropList: function dragDropList(watchList, _ref2) {
    var dragId = _ref2.dragId,
        dropId = _ref2.dropId;

    var _dragId$split3 = dragId.split(';'),
        _dragId$split4 = (0, _slicedToArray3.default)(_dragId$split3, 2),
        dragGroupCaption = _dragId$split4[0],
        dragListCaption = _dragId$split4[1],
        dragGroup = findGroup(watchList, dragGroupCaption),
        dragList = findList(dragGroup, dragListCaption);

    var _dropId$split3 = dropId.split(';'),
        _dropId$split4 = (0, _slicedToArray3.default)(_dropId$split3, 2),
        dropGroupCaption = _dropId$split4[0],
        dropListCaption = _dropId$split4[1],
        dropGroup = findGroup(watchList, dropGroupCaption),
        dropIndex = dropListCaption ? findIndex(dropGroup.lists, dropListCaption) : 0;

    if (dragGroup.caption !== dropGroup.caption && isInArraySameCaption(dropGroup.lists, dragListCaption)) {
      return crAlertListExisted(dropGroupCaption, dragListCaption);
    }

    dragGroup.lists = filter(dragGroup.lists, dragListCaption);
    dropGroup.lists = insertItemInArray(dragList, dropIndex, dropGroup.lists);

    return { isDone: true };
  },
  dragDropGroup: function dragDropGroup(watchList, _ref3) {
    var dragId = _ref3.dragId,
        dropId = _ref3.dropId;

    var _dragId$split5 = dragId.split(';'),
        _dragId$split6 = (0, _slicedToArray3.default)(_dragId$split5, 1),
        dragGroupCaption = _dragId$split6[0],
        dragGroup = findGroup(watchList, dragGroupCaption),
        _dropId$split5 = dropId.split(';'),
        _dropId$split6 = (0, _slicedToArray3.default)(_dropId$split5, 1),
        dropGroupCaption = _dropId$split6[0],
        dropIndex = dropGroupCaption ? findIndex(watchList.groups, dropGroupCaption) : 0;

    watchList.groups = filter(watchList.groups, dragGroupCaption);
    watchList.groups = insertItemInArray(dragGroup, dropIndex, watchList.groups);

    return { isDone: true };
  }
};

exports.default = WithLogicDnD;
//# sourceMappingURL=WithLogicDnD.js.map
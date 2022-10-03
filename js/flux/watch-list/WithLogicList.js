"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _LogicFn = require("./LogicFn");

var WithLogicList = {
  createList: function createList(watchList, _ref) {
    var captionGroup = _ref.captionGroup,
        captionList = _ref.captionList;
    var groupTo = (0, _LogicFn.findGroup)(watchList, captionGroup);

    if (!groupTo) {
      return (0, _LogicFn.crMsgNotFound)('group', captionGroup);
    }

    var lists = groupTo.lists;

    if ((0, _LogicFn.isInArraySameCaption)(lists, captionList)) {
      return (0, _LogicFn.crMsgListExisted)(captionList, captionGroup);
    }

    groupTo.lists = (0, _LogicFn.getArrayWithObj)(lists, {
      caption: captionList
    });
    return {
      isDone: true
    };
  },
  renameList: function renameList(watchList, _ref2) {
    var captionGroup = _ref2.captionGroup,
        captionListFrom = _ref2.captionListFrom,
        captionListTo = _ref2.captionListTo;
    var groupIn = (0, _LogicFn.findGroup)(watchList, captionGroup);

    if (!groupIn) {
      return (0, _LogicFn.crMsgNotFound)('group', captionGroup);
    }

    var lists = groupIn.lists;
    var listIndex = (0, _LogicFn.findIndex)(lists, captionListFrom);

    if (listIndex === -1) {
      return (0, _LogicFn.crMsgNotFound)('list', captionListFrom);
    }

    if ((0, _LogicFn.isInArraySameCaption)(lists, captionListTo)) {
      return (0, _LogicFn.crMsgListExisted)(captionListTo, captionGroup);
    }

    groupIn.lists = (0, _LogicFn.getArrayWithRename)(lists, listIndex, captionListTo);
    return {
      isDone: true
    };
  },
  deleteList: function deleteList(watchList, _ref3) {
    var captionGroup = _ref3.captionGroup,
        captionList = _ref3.captionList;
    var groupFrom = (0, _LogicFn.findGroup)(watchList, captionGroup);

    if (!groupFrom) {
      return (0, _LogicFn.crMsgNotFound)('group', captionGroup);
    }

    groupFrom.lists = (0, _LogicFn.filter)(groupFrom.lists, captionList);
    return {
      isDone: true
    };
  }
};
var _default = WithLogicList;
exports["default"] = _default;
//# sourceMappingURL=WithLogicList.js.map
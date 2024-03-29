"use strict";

exports.__esModule = true;
exports.renameGroup = exports.findGroup = exports.deleteGroup = exports.createGroup = void 0;

var _LogicFn = require("./LogicFn");

exports.findGroup = _LogicFn.findGroup;

var createGroup = function createGroup(watchList, _ref) {
  var caption = _ref.caption;
  var groups = watchList.groups;

  if ((0, _LogicFn.isInArraySameCaption)(groups, caption)) {
    return (0, _LogicFn.crMsgGroupExisted)(caption);
  }

  var _captionObj = caption ? {
    caption: caption
  } : {
    caption: "Default"
  };

  watchList.groups = (0, _LogicFn.getArrayWithObj)(groups, _captionObj);
  return {
    isDone: true
  };
};

exports.createGroup = createGroup;

var renameGroup = function renameGroup(watchList, _ref2) {
  var captionFrom = _ref2.captionFrom,
      captionTo = _ref2.captionTo;
  var groups = watchList.groups,
      groupIndex = (0, _LogicFn.findIndex)(groups, captionFrom);

  if (groupIndex === -1) {
    return (0, _LogicFn.crMsgNotFound)('group', captionFrom);
  }

  if ((0, _LogicFn.isInArraySameCaption)(groups, captionTo)) {
    return (0, _LogicFn.crMsgGroupExisted)(captionTo);
  }

  watchList.groups = (0, _LogicFn.getArrayWithRename)(groups, groupIndex, captionTo);
  return {
    isDone: true
  };
};

exports.renameGroup = renameGroup;

var deleteGroup = function deleteGroup(watchList, _ref3) {
  var caption = _ref3.caption;
  watchList.groups = (0, _LogicFn.filter)(watchList.groups, caption);
  return {
    isDone: true
  };
};

exports.deleteGroup = deleteGroup;
//# sourceMappingURL=LogicGroupFn.js.map
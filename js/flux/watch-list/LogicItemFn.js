"use strict";

exports.__esModule = true;
exports.removeItem = exports.addItem = void 0;

var _LogicFn = require("./LogicFn");

var addItem = function addItem(watchList, item) {
  var caption = item.caption,
      groupCaption = item.groupCaption,
      listCaption = item.listCaption,
      toGroup = (0, _LogicFn.findGroup)(watchList, groupCaption),
      toList = (0, _LogicFn.findList)(toGroup, listCaption),
      items = toList.items;

  if ((0, _LogicFn.isInArraySameCaption)(items, caption)) {
    return (0, _LogicFn.crMsgItemExisted)(caption, listCaption);
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
};

exports.addItem = addItem;

var removeItem = function removeItem(watchList, _ref) {
  var groupCaption = _ref.groupCaption,
      listCaption = _ref.listCaption,
      caption = _ref.caption;
  var groupFrom = (0, _LogicFn.findGroup)(watchList, groupCaption),
      listFrom = (0, _LogicFn.findList)(groupFrom, listCaption);
  listFrom.items = (0, _LogicFn.filter)(listFrom.items, caption);
};

exports.removeItem = removeItem;
//# sourceMappingURL=LogicItemFn.js.map
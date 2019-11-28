"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fnDnD = require("./fnDnD");

var _fnDnD2 = _interopRequireDefault(_fnDnD);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _crDragStartList = function _crDragStartList(DRAG) {
  return function (_ref, ev) {
    var groupCaption = _ref.groupCaption,
        caption = _ref.caption;

    this.dragStartWithDnDStyle(ev, [DRAG.GROUP, DRAG.LIST]);
    _fnDnD2.default.setTransferTo({
      event: ev,
      dragId: groupCaption + ";" + caption,
      xType: DRAG.LIST
    });
  };
};

var _crDropList = function _crDropList(DRAG, WatchActions) {
  return function (_ref2, ev) {
    var groupCaption = _ref2.groupCaption,
        caption = _ref2.caption;

    this.dropWithDnDStyle(ev);
    //ev.currentTarget.style.borderLeft = "";

    var data = JSON.parse(ev.dataTransfer.getData("text")),
        xType = data.xType,
        dragId = data.dragId,
        dropId = groupCaption + ";" + caption + ";";


    if (xType === DRAG.LIST) {
      if (dragId !== dropId) {
        ev.preventDefault();
        WatchActions.dragDropList({
          dragId: dragId,
          dropId: dropId
        });
      } else {
        return undefined;
      }
    } else if (xType === DRAG.ITEM) {
      ev.preventDefault();
      WatchActions.dragDropItem({
        dragId: dragId,
        dropId: dropId
      });
    }
  };
};

var _crDragEnterList = function _crDragEnterList(DRAG) {
  return function (ev) {
    ev.preventDefault();
    this.dragEnterWithDnDStyle(ev, DRAG.LIST);
  };
};

var _handlerDragOverList = function _handlerDragOverList(ev) {
  ev.preventDefault();
};

var _handlerDragLeaveList = function _handlerDragLeaveList(ev) {
  ev.preventDefault();
  this.dragLeaveWithDnDStyle(ev);
};

var withDnDList = function withDnDList(DRAG, WatchActions) {
  return function (target) {
    Object.assign(target.prototype, {
      _handlerDragStartList: _crDragStartList(DRAG),
      _handlerDropList: _crDropList(DRAG, WatchActions),
      _handlerDragEnterList: _crDragEnterList(DRAG),
      _handlerDragOverList: _handlerDragOverList,
      _handlerDragLeaveList: _handlerDragLeaveList
    });
  };
};

exports.default = withDnDList;
//# sourceMappingURL=withDnDList.js.map
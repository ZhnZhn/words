"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fnDnD = require("./fnDnD");

var _fnDnD2 = _interopRequireDefault(_fnDnD);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _crDragStartItem = function _crDragStartItem(DRAG) {
  return function (_ref, ev) {
    var groupCaption = _ref.groupCaption,
        listCaption = _ref.listCaption,
        caption = _ref.caption;

    this.dragStartWithDnDStyle(ev, [DRAG.LIST, DRAG.ITEM]);
    _fnDnD2.default.setTransferTo({
      event: ev,
      dragId: groupCaption + ";" + listCaption + ";" + caption,
      xType: DRAG.ITEM
    });
  };
};

var _crDropItem = function _crDropItem(DRAG, WatchActions) {
  return function (_ref2, ev) {
    var groupCaption = _ref2.groupCaption,
        listCaption = _ref2.listCaption,
        caption = _ref2.caption;

    this.dropWithDnDStyle(ev);
    var dataText = ev.dataTransfer.getData("text");
    if (!dataText) {
      return undefined;
    }

    var data = JSON.parse(dataText),
        xType = data.xType,
        dragId = data.dragId,
        dropId = groupCaption + ";" + listCaption + ";" + caption;


    if (xType === DRAG.ITEM) {
      if (dragId !== dropId) {
        ev.preventDefault();
        WatchActions.dragDropItem({
          dragId: dragId,
          dropId: dropId
        });
      } else {
        return undefined;
      }
    }
  };
};

var _crDragEnterItem = function _crDragEnterItem(DRAG) {
  return function (ev) {
    ev.preventDefault();
    this.dragEnterWithDnDStyle(ev, DRAG.ITEM);
  };
};

var _handlerDragOverItem = function _handlerDragOverItem(ev) {
  ev.preventDefault();
};

var _handlerDragLeaveItem = function _handlerDragLeaveItem(ev) {
  ev.preventDefault();
  this.dragLeaveWithDnDStyle(ev);
};

var withDnDItem = function withDnDItem(DRAG, WatchActions) {
  return function (target) {
    Object.assign(target.prototype, {
      _handlerDragStartItem: _crDragStartItem(DRAG),
      _handlerDropItem: _crDropItem(DRAG, WatchActions),
      _handlerDragEnterItem: _crDragEnterItem(DRAG),
      _handlerDragOverItem: _handlerDragOverItem,
      _handlerDragLeaveItem: _handlerDragLeaveItem
    });
  };
};

exports.default = withDnDItem;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\watch-browser\decorators\withDnDItem.js.map
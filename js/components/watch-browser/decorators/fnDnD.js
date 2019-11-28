"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fnDnD = {
  setTransferTo: function setTransferTo(_ref) {
    var event = _ref.event,
        dragId = _ref.dragId,
        xType = _ref.xType;

    var _data = { dragId: dragId, xType: xType };
    Object.assign(event.dataTransfer, {
      effectAllowed: "move",
      dropEffect: "move"
    }).setData("text", JSON.stringify(_data));
  }
};

exports.default = fnDnD;
//# sourceMappingURL=fnDnD.js.map
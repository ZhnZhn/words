"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _assign = Object.assign;

var setTransferTo = function setTransferTo(_ref) {
  var event = _ref.event,
      dragId = _ref.dragId,
      xType = _ref.xType;

  _assign(event.dataTransfer, {
    effectAllowed: "move",
    dropEffect: "move"
  }).setData("text", JSON.stringify({
    dragId: dragId,
    xType: xType
  }));
};

var _default = setTransferTo;
exports["default"] = _default;
//# sourceMappingURL=setTransferTo.js.map
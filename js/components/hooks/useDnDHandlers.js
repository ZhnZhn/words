"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var useDnDHandlers = function useDnDHandlers(_ref) {
  var isDraggable = _ref.isDraggable,
      option = _ref.option,
      onDragStart = _ref.onDragStart,
      onDrop = _ref.onDrop,
      onDragEnter = _ref.onDragEnter,
      onDragOver = _ref.onDragOver,
      onDragLeave = _ref.onDragLeave;
  return isDraggable ? {
    draggable: true,
    onDragStart: onDragStart.bind(null, option),
    onDrop: onDrop.bind(null, option),
    onDragEnter: onDragEnter,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave
  } : void 0;
};

var _default = useDnDHandlers;
exports["default"] = _default;
//# sourceMappingURL=useDnDHandlers.js.map
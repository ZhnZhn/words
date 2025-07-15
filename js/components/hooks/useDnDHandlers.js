"use strict";

exports.__esModule = true;
exports.default = void 0;
var _bindTo = require("../../utils/bindTo");
const useDnDHandlers = _ref => {
  let {
    isDraggable,
    option,
    onDragStart,
    onDrop,
    onDragEnter,
    onDragOver,
    onDragLeave
  } = _ref;
  return isDraggable ? {
    draggable: !0,
    onDragStart: (0, _bindTo.bindTo)(onDragStart, option),
    onDrop: (0, _bindTo.bindTo)(onDrop, option),
    onDragEnter,
    onDragOver,
    onDragLeave
  } : void 0;
};
var _default = exports.default = useDnDHandlers;
//# sourceMappingURL=useDnDHandlers.js.map
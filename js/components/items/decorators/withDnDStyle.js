'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BORDER_LEFT = 'border-left';
var DRAG_START_BORDER_LEFT = "4px solid #D64336";
var _node = undefined;

var _dragStart = function _dragStart(ev) {
  if (_node) {
    _node.style.removeProperty(BORDER_LEFT);
  }
  _node = ev.currentTarget;
  _node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
};

var _dragEnd = function _dragEnd(ev) {
  _node.style.removeProperty(BORDER_LEFT);
  _node = undefined;
};

var _dragTouchStart = function _dragTouchStart(node) {
  node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
};
var _dragTouchMove = function _dragTouchMove(node) {
  var dX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _opacity = 1 - 0.5 * Math.abs(dX) / 60;
  node.style.right = dX + 'px';
  node.style.opacity = _opacity;
};
var _dragTouchEnd = function _dragTouchEnd(node, isBack) {
  node.style.removeProperty(BORDER_LEFT);
  if (isBack) {
    node.style.right = '0px';
    node.style.opacity = 1;
  }
};

var withDnDStyle = function withDnDStyle(target) {
  Object.assign(target.prototype, {
    dragStartWithDnDStyle: _dragStart,
    dragEndWithDnDStyle: _dragEnd,
    dragTouchStartWithDnDStyle: _dragTouchStart,
    dragTouchMoveWithDnDStyle: _dragTouchMove,
    dragTouchEndWithDnDStyle: _dragTouchEnd
  });
};

exports.default = withDnDStyle;
//# sourceMappingURL=withDnDStyle.js.map

const BORDER_LEFT = 'border-left';
const DRAG_START_BORDER_LEFT = "4px solid #D64336";
let _node = undefined;

const _dragStart = function(ev){
  if (_node){
    _node.style.removeProperty(BORDER_LEFT)
  }
  _node = ev.currentTarget
  _node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
}

const _dragEnd = function(ev){
  _node.style.removeProperty(BORDER_LEFT)
  _node = undefined
}

const _dragTouchStart = function(node) {
  node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
}
const _dragTouchMove = function(node, dX=0) {
  const _opacity = (1 - (0.5*Math.abs(dX))/60);
  node.style.right = dX + 'px'
  node.style.opacity = _opacity
}
const _dragTouchEnd = function(node, isBack) {
  node.style.removeProperty(BORDER_LEFT)
  if (isBack) {
    node.style.right = '0px'
    node.style.opacity = 1
  }
}


const withDnDStyle = (target) => {
  Object.assign(target.prototype, {
    dragStartWithDnDStyle: _dragStart,
    dragEndWithDnDStyle: _dragEnd,
    dragTouchStartWithDnDStyle: _dragTouchStart,
    dragTouchMoveWithDnDStyle: _dragTouchMove,
    dragTouchEndWithDnDStyle: _dragTouchEnd
  })
}

export default withDnDStyle

import React, { Component } from 'react'

const BORDER_LEFT = 'border-left';
const DRAG_START_BORDER_LEFT = "4px solid #D64336";

const LONG_TOUCH = 1000;

const _getClientX = (ev) => {
  const { targetTouches, changedTouches } = ev;
  return (targetTouches && targetTouches[0])
    ? targetTouches[0].clientX
    : (changedTouches && changedTouches[0])
        ? changedTouches[0].clientX
        : 0;
};

class DndOnlyX extends Component {
  /*
  static propTypes = {
    style: PropTypes.object,

    onDragEnd: PropTypes.func,
    onDragTouchEnd: PropTypes.func
  }
  */

  constructor(props){
    super()
    this.clientX = 0
    this._isDragTouch = false

    this._dragStartStyle = this._dragStartStyle.bind(this)
    this._dragEndStyle = this._dragEndStyle.bind(this)
    this._dragStart = this._dragStart.bind(this)
    this._dragEnd = this._dragEnd.bind(this)

    this._startDragTouch = this._startDragTouch.bind(this)
    this._dragTouchStart = this._dragTouchStart.bind(this)
    this._dragTouchMove = this._dragTouchMove.bind(this)
    this._dragTouchEnd = this._dragTouchEnd.bind(this)

  }

  _dragStartStyle(ev) {
    if (this._node){
      this._node.style.removeProperty(BORDER_LEFT)
    }
    this._node = ev.currentTarget
    this._node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
  }
  _dragEndStyle() {
    this._node.style.removeProperty(BORDER_LEFT)
    this._node = null
  }

  _dragStart(ev) {
    ev.persist()
    this.clientX = ev.clientX
    this._dragStartStyle(ev)
    ev.dataTransfer.effectAllowed="move"
    ev.dataTransfer.dropEffect="move"
  }
  _dragEnd(ev) {
    ev.preventDefault()
    ev.persist()
    this._dragEndStyle()
    this.props.onDragEnd(Math.abs(
      this.clientX - ev.clientX
    ))
  }

  _preventDefault(ev){
    ev.preventDefault()
  }

  _dragTouchStartStyle(node) {
    node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
  }
  _startDragTouch(node) {
    this._isDragTouch = true
    this._dragTouchStartStyle(node)
  }
   _dragTouchStart(ev){
     const node = ev.currentTarget;
     this._dragTouchId = setTimeout(
       () => this._startDragTouch(node),
       LONG_TOUCH
     )
   }

   _dragTouchMoveStyle(node, dX){
     const _opacity = (1 - (0.5*Math.abs(dX))/60);
     node.style.right = dX + 'px'
     node.style.opacity = _opacity
   }
   _dragTouchMove(ev) {
     if (this._isDragTouch) {
       ev.persist()
       const _clientX = _getClientX(ev);
       if (_clientX) {
         if (!this._isMoveStart){
           this.clientX = this._startMoveX = _clientX
           this._isMoveStart = true
         } else {
           const _dX = this._startMoveX - _clientX;
           this._dragTouchMoveStyle(ev.currentTarget, _dX)
         }
       }
     }
   }

   _dragTouchEndStyle(node, isBack){
     node.style.removeProperty(BORDER_LEFT)
     if (isBack) {
       node.style.right = '0px'
       node.style.opacity = 1
     }
   }
   _dragTouchEnd = (ev) => {
     if (this._isDragTouch) {
       if (this._isMoveStart) {
         ev.preventDefault()
         ev.persist()
         const _clientX = _getClientX(ev)
             , _dX = Math.abs(this.clientX - _clientX);
        if (this.props.onDragTouchEnd(_dX)){
          this._dragTouchEndStyle(ev.currentTarget, true)
        }
         this._isMoveStart = false
       } else {
         this._dragTouchEndStyle(ev.currentTarget)
       }
       this._isDragTouch = false
     } else {
       clearTimeout(this._dragTouchId)
     }
   }

  render(){
    const { style, children } = this.props;
    return (
      <div
        style={style}
        draggable={true}
        onDragStart={this._dragStart}
        onDragEnd={this._dragEnd}

        onDrop={this._preventDefault}
        onDragOver={this._preventDefault}
        onDragEnter={this._preventDefault}
        onDragLeave={this._preventDefault}

        onTouchStart={this._dragTouchStart}
        onTouchMove={this._dragTouchMove}
        onTouchEnd={this._dragTouchEnd}
      >
        {children}
      </div>
    )
  }
}

export default DndOnlyX

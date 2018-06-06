import React, { Component } from 'react'

import withTheme from '../../hoc/withTheme'
import styleConfig from './Word.Style'

import ItemHeader from '../ItemHeader'
import WordDef from './WordDef'

import withDnDStyle from '../decorators/withDnDStyle'

const LONG_TOUCH = 1000;

const D_REMOVE_UNDER = 60;
const D_REMOVE_ITEM = 35;

const CL_ITEM_HEADER = "article-header"

const S = {
  ROOT: {
    position : 'relative',
    lineHeight : 1.5,
    marginBottom: '5px',
    marginRight: '25px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderBottomRightRadius: '2px'
  },
  LEFT_LINE: {
    position: 'absolute',
    top: '0px',
    left: 'Opx',
    width: '3px',
    height: '8px',
    backgroundColor: '#3F51B5'
  },
  HEADER: {
    backgroundColor: '#404040',
    paddingTop: '8px',
    paddingLeft: '16px',
    paddingBottom: '16px',
    lineHeight: 1.5,
    width : '100%',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display : 'inline-block',
    color: 'black',
    fontSize: '18px',
    fontWeight : 'bold',
    paddingRight: '32px',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b',
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: '8px',
    right: '0px'
  }
}

const _getClientX = (ev) => {
  const { targetTouches, changedTouches } = ev;
  return (targetTouches && targetTouches[0])
    ? targetTouches[0].clientX
    : (changedTouches && changedTouches[0])
        ? changedTouches[0].clientX
        : 0;
};

//const BORDER_LEFT = 'border-left';
//const DRAG_START_BORDER_LEFT = "4px solid #D64336";

@withDnDStyle
class Word extends Component {

  static defaultProps = {
    config: {}
  }

  constructor(props){
    super()
    this.clientX = 0
    this._isDragTouch = false
    this.state = {
      isShow: false
    }
  }

  _dragStart = (ev) => {
    ev.persist()
    this.clientX = ev.clientX
    this.dragStartWithDnDStyle(ev)
    ev.dataTransfer.effectAllowed="move"
    ev.dataTransfer.dropEffect="move"
  }
  _dragEnd = (ev) => {
    ev.preventDefault()
    ev.persist()
    this.dragEndWithDnDStyle()
    const _deltaX = Math.abs(this.clientX - ev.clientX)
        , { config, onRemoveUnder } = this.props;
    if (_deltaX > D_REMOVE_UNDER) {
      onRemoveUnder(config)
    } else if (_deltaX > D_REMOVE_ITEM){
      this._handleClose()
    }
  }

 _startDragTouch = (node) => {
   this._isDragTouch = true
   this.dragTouchStartWithDnDStyle(node)
 }

  _dragTouchStart = (ev) => {
    const node = ev.currentTarget;
    this._dragTouchId = setTimeout(
      () => this._startDragTouch(node),
      LONG_TOUCH
    )
  }

  _dragTouchMove = (ev) => {
    if (this._isDragTouch) {
      ev.persist()
      const _clientX = _getClientX(ev);
      if (_clientX) {
        if (!this._isMoveStart){
          this.clientX = this._startMoveX = _clientX
          this._isMoveStart = true
        } else {
          const _dX = this._startMoveX - _clientX;
          this.dragTouchMoveWithDnDStyle(ev.currentTarget, _dX)
        }
      }
    }
  }
  _dragTouchEnd = (ev) => {
    if (this._isDragTouch) {
      if (this._isMoveStart) {
        ev.preventDefault()
        ev.persist()
        const _clientX = _getClientX(ev)
            , _dX = Math.abs(this.clientX - _clientX);
        if (_dX > D_REMOVE_UNDER) {
          this._handleClose()
        } else {
          this.dragTouchEndWithDnDStyle(ev.currentTarget, true)
        }
        this._isMoveStart = false
      } else {
        this.dragTouchEndWithDnDStyle(ev.currentTarget)
      }
      this._isDragTouch = false
    } else {
      clearTimeout(this._dragTouchId)
    }
  }

  _preventDefault(ev){
    ev.preventDefault()
  }

  _handleToggle = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  _handleClose = () => {
    const {
            onCloseItem,
            config
          } = this.props;
    onCloseItem(config)
  }

  _handleHide = () => {
    this.headerComp.focus()
    this.setState({ isShow: false })
  }

  _refItemHeader = (comp) => {
    this.headerComp = comp
  }

  render() {
    const {config, theme, onAddToWatch } = this.props
        , { title, caption } = config
        , TS = theme.createStyle(styleConfig)
        , { isShow } = this.state
        , _headerStyle = isShow
             ? { ...S.HEADER, ...S.HEADER_OPEN }
             : S.HEADER
        , _captionStyle = isShow
             ? { ...S.CAPTION, ...S.CAPTION_OPEN }
             : S.CAPTION;
    return (
        <div
          style={S.ROOT}
          draggable={true}

          onTouchStart={this._dragTouchStart}

          onDragStart={this._dragStart}
          onTouchMove={this._dragTouchMove}
          onDragEnd={this._dragEnd}
          onTouchEnd={this._dragTouchEnd}

          onDrop={this._preventDefault}
          onDragOver={this._preventDefault}
          onDragEnter={this._preventDefault}
          onDragLeave={this._preventDefault}
        >
          <ItemHeader
             ref={this._refItemHeader}
             className={CL_ITEM_HEADER}
             style={{ ..._headerStyle, ...TS.HEADER }}
             captionStyle={_captionStyle}
             svgCloseStyle={S.SVG_CLOSE}
             title={title}
             caption={caption}
             isShow={isShow}
             onClick={this._handleToggle}
             onClose={this._handleClose}
             onAddToWatch={onAddToWatch}
          />
          <WordDef
            style={TS.DESCR}
            isShow={isShow}
            config={config}
          />
        </div>
      );
    }
}

export default withTheme(Word)

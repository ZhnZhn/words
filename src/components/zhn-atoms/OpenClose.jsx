import { Component } from 'react'
//import PropTypes from 'prop-types'

const CL_CAPTION = 'open-close not-selected'
, S_ROOT = {
  backgroundColor: 'inherit',
  lineHeight: 2.5
}
, S_SVG = {
  display: 'inline-block',
  width: 16,
  height: 16
}
, S_ROOT_CAPTION = { paddingLeft: 12 }
, S_CAPTION = {
  color: '#9e9e9e',
  paddingLeft: 4,
  verticalAlign: 'top'
}
, S_INLINE = { display: 'inline-block' }
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' }

const FILL_OPEN = '#9e9e9e'
    , FILL_CLOSE = 'transparent'
    , PATH_OPEN = "M 2,14 L 14,14 14,2 2,14"
    , PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

class OpenClose extends Component {
  /*
  static propTypes = {
    isClose: PropTypes.bool,

    style: PropTypes.object,
    styleNotSelected: PropTypes.object,
    captionStyle: PropTypes.object,
    childrenStyle: PropTypes.object,

    caption: PropTypes.string,
    fillOpen: PropTypes.string,
    fillClose: PropTypes.string,

    isDraggable: PropTypes.bool,
    option: PropTypes.object,
    onDragStart: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDrop: PropTypes.func,

    children: PropTypes.oneOfType([
       PropTypes.arrayOf(PropTypes.node),
       PropTypes.node
    ])
  }
  */

  static defaultProps = {
    isClose: true,
    fillOpen: FILL_OPEN,
    fillClose: FILL_CLOSE
  }

  constructor(props){
    super(props)
    this.state = {
      isOpen: !props.isClose
    }
  }

  _handleToggle = () => {
    this.setState({ isOpen : !this.state.isOpen })
  }
  _handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.keyCode === 27 ) {
      this._handleToggle()
    }
  }

  render(){
    const {
      style,
      itemStyle,
      captionStyle,
      childrenStyle,
      caption,
      fillOpen,
      fillClose,
      afterCaptionComp,
      isDraggable,
      option,
      onDragStart,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop,
      children
    } = this.props
    , _dndOption = isDraggable
         ? {
             draggable : true,
             onDragStart : onDragStart.bind(null, option),
             onDrop : onDrop.bind(null, option),
             onDragEnter : onDragEnter,
             onDragOver : onDragOver,
             onDragLeave : onDragLeave
           }
        : void 0;

    let _pathV, _fillV, _styleCollapse, _classShow, _itemStyle;
    if (this.state.isOpen){
      _pathV = PATH_OPEN;
      _fillV = fillOpen;
      _styleCollapse = S_BLOCK;
      _classShow = 'show-popup';
      _itemStyle = null;
    } else {
      _pathV = PATH_CLOSE;
      _fillV = fillClose;
      _styleCollapse = S_NONE;
      _classShow = null;
      _itemStyle = itemStyle;
    }

    return (
      <div style={{...S_ROOT, ...style}}>
        <div
           role="button"
           className={CL_CAPTION}
           tabIndex="0"
           style={{...S_ROOT_CAPTION, ..._itemStyle }}
           onClick={this._handleToggle}
           onKeyDown={this._handleKeyDown}
           {..._dndOption}
         >
          <div style={S_SVG}>
             <svg
                viewBox="0 0 16 16"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={S_INLINE}
              >
               <path
                  d={_pathV}
                  fill={_fillV}
                  strokeWidth="1" stroke={fillOpen}
               />
             </svg>
         </div>
         <span style={{...S_CAPTION, ...captionStyle}} >
            {caption}
         </span>
         {afterCaptionComp}
       </div>
      <div
         className={_classShow}
         style={{ ...childrenStyle, ..._styleCollapse }}
       >
        {children}
      </div>
     </div>
    );
  }
}

export default OpenClose

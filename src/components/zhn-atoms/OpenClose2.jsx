import React, { Component } from 'react';

import isKeyEnter from './isKeyEnter'

const CL = 'oc-item not-selected';

const S = {
  ROOT: {
    backgroundColor: '#4d4d4d',
    lineHeight: 1.5
  },
  DIV_SVG : {
    display: 'inline-block',
    width: 16,
    height: 16,
    marginLeft: 8
  },
  SVG: {
    display: 'inline-block'
  },
  CAPTION: {
    paddingLeft: 4,
    verticalAlign: 'top',
    color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

const FILL_OPEN = '#9e9e9e'
, FILL_CLOSE = 'transparent'
, PATH = {
  OPEN: "M 2,14 L 14,14 14,2 2,14",
  CLOSE: "M 2,2 L 14,8 2,14 2,2"
};

const _crStyleConf = ({
  isOpen,
  fillOpen, fillClose,
  styleNotSelected
}) => isOpen
  ? {
    _pathV: PATH.OPEN,
    _fillV: fillOpen,
    _divStyle: S.BLOCK,
    _classShow: 'show-popup',
    _styleNotSelected: null
   }
 : {
   _pathV: PATH.CLOSE,
   _fillV: fillClose,
   _divStyle: S.NONE,
   _classShow: null,
   _styleNotSelected: styleNotSelected
 };

class OpenClose2 extends Component {
   static defaultProps = {
     fillOpen: FILL_OPEN,
     fillClose: FILL_CLOSE
   }

   constructor(props){
     super(props);
     const { isInitialOpen } = props;
      this.state = {
        isOpen: Boolean(isInitialOpen)
      }
   }

  _hClick = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen
    }));
  }

  _hKeyDown = (event) => {
    if (isKeyEnter(event)){
      this._hClick()
    }
  }

  render(){
    const {
      style, styleCaption, caption,
      fillOpen, fillClose, styleNotSelected,
      draggableOption,
      children
    } = this.props
    , { isOpen } = this.state
    , {
        _pathV, _fillV,
        _divStyle, _classShow,
        _styleNotSelected
    } = _crStyleConf({ isOpen, fillOpen, fillClose, styleNotSelected });


    return (
      <div style={{ ...S.ROOT, ...style }}>
        <div
           role="menuitem"
           tabIndex="0"
           className={CL}
           style={_styleNotSelected}
           onClick={this._hClick}
           onKeyDown={this._hKeyDown}
           {...draggableOption}
         >
          <div style={S.DIV_SVG}>
             <svg
                viewBox="0 0 16 16" width="100%" height="100%"
                preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                style={S.SVG}
              >
               <path
                  d={_pathV} fill={_fillV}
                  strokeWidth="1" stroke={fillOpen}
               />
             </svg>
         </div>
         <span style={{...S.CAPTION, ...styleCaption}} >
            {caption}
         </span>
       </div>
      <div className={_classShow} style={_divStyle}>
        {children}
      </div>
     </div>
    )
  }
}

export default OpenClose2;

import React, { Component } from 'react';

const styles = {
  rootDiv: {
    backgroundColor: '#4D4D4D',
    //backgroundColor: 'inherit',
    lineHeight: 1.5
  },
  divSvg : {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    marginLeft: '8px'
  },
  labelCaption: {
    paddingLeft: '4px',
    verticalAlign: 'top',
    color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  itemRow : {
    backgroundColor: '#404040'
  }
};

const FILL_OPEN = '#9e9e9e'
    , FILL_CLOSE = 'transparent';

const pathOpen = "M 2,14 L 14,14 14,2 2,14";
const pathClose = "M 2,2 L 14,8 2,14 2,2";

class OpenClose2 extends Component {
   constructor(props){
     super();
     const { isClose, fillOpen, fillClose } = props;

      this.state = {
        isOpen: isClose ? false : true,
        fillOpen: fillOpen || FILL_OPEN,
        fillClose: fillClose || FILL_CLOSE
      }
   }

  _handleClickOpenClose = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  }

  render(){
    const {
            style, styleNotSelected, styleCaption, caption,
            isDraggable, option, onDragStart, onDragEnter, onDragOver, onDragLeave, onDrop,
            children
          } = this.props
        , _dragOption = (isDraggable)
              ? {
                  draggable : true,
                  onDragStart : onDragStart.bind(null, option),
                  onDrop : onDrop.bind(null, option),
                  onDragEnter : onDragEnter,
                  onDragOver : onDragOver,
                  onDragLeave : onDragLeave
                }
              : undefined ;

    let _pathV, _fillV, _displayDivStyle, _classShow, _styleNotSelected;
    if (this.state.isOpen){
      _pathV = pathOpen;
      _fillV = this.state.fillOpen;
      _displayDivStyle = 'block';
      _classShow = 'show-popup';
      _styleNotSelected = null;

    } else {
      _pathV = pathClose;
      _fillV = this.state.fillClose;
      _displayDivStyle = 'none';
      _classShow = null;
      _styleNotSelected = styleNotSelected;
    }


    return (
      <div style={Object.assign({}, styles.rootDiv, style)}>
        <div
           className="not-selected"
           style={_styleNotSelected}
           onClick={this._handleClickOpenClose}
           {..._dragOption}
         >
          <div style={styles.divSvg}>
             <svg
                viewBox="0 0 16 16" width="100%" height="100%"
                preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                style={{display: 'inline-block'}}
              >
             <path
                d={_pathV}
                fill={_fillV}
                strokeWidth="1" stroke={this.state.fillOpen}
             >
             </path>
             </svg>
         </div>
         <span style={Object.assign({}, styles.labelCaption, styleCaption)} >
            {caption}
         </span>
       </div>
      <div className={_classShow} style={{display: _displayDivStyle}}>
        {children}
      </div>
     </div>
    )
  }
}

export default OpenClose2;

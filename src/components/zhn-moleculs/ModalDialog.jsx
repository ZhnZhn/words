import React, { Component } from 'react';
//import PropTypes from "prop-types";

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import RaisedButton from '../zhn-atoms/RaisedButton'

import STYLE from './Dialog.Style'

const CL = {
  SHOWING : 'show-popup',
  HIDING : 'hide-popup'
};

const S = {
  ...STYLE,
  ROOT_DIV_MODAL: {
    position: 'absolute',
    top: '20%',
    left: '40%',
    display: 'block',
    zIndex: 10
  },
  HIDE_POPUP: {
    opacity: 0,
    transform: 'scaleY(0)'
  },
};

class ModalDialog extends Component {
  /*
   static propTypes = {
     isShow: PropTypes.bool,
     isWithButton: PropTypes.bool,
     isNotUpdate: PropTypes.bool,
     withoutClose: PropTypes.bool,
     isFocusClose: PropTypes.bool,
     commandButtons: PropTypes.arrayOf(PropTypes.element),
     timeout: PropTypes.number,
     caption: PropTypes.string,
     style: PropTypes.object,
     onClose: PropTypes.func
   }
   */
   static defaultProps = {
     isWithButton: true,
     isNotUpdate: false,
     isFocusClose: true,
     timeout: 450,
     STYLE: {}
   }

   constructor(props){
     super()
     this.wasClosing = false
   }

   shouldComponentUpdate(nextProps, nextState){
     if (nextProps !== this.props){
       if (nextProps.isNotUpdate){
         return false;
       }
     }
     return true;
   }

   focusBtClose(){
     if (this.props.isFocusClose && this._btClose) {
       this._btClose.focus()
     }
   }

   componentDidMount(){
     this.focusBtClose()
   }

   componentDidUpdate(prevProps, prevState){
    const { timeout, isShow } = this.props
     if (this.wasClosing){
       setTimeout(
         () => { this.setState({}) },
         timeout
       )
     }
     if (prevProps.isShow === false && isShow) {
       this.focusBtClose()
     }
   }


  _handleClickDialog(event) {
    event.stopPropagation()
   }

  _refBtClose = n => this._btClose = n

  _renderCommandButton = () => {
    const { STYLE, commandButtons, withoutClose, onClose } = this.props;
    return (
      <div style={S.COMMAND_DIV}>
        {commandButtons}
        { !withoutClose &&
           <RaisedButton
             ref={this._refBtClose}
             rootStyle={STYLE.RAISED_ROOT}
             clDiv={STYLE.CL_RAISED_DIV}
             caption="Close"
             isPrimary={true}
             onClick={onClose}
           />
        }
      </div>
    );
  }

  render(){
    const {
            isShow, isWithButton, style,
            caption, captionStyle,
            //styleCaption,
            children, onClose
          } = this.props;

    let _className, _style;

    if (this.wasClosing){
      _style = S.HIDE
      this.wasClosing = false
    } else {
      _className = isShow ? CL.SHOWING : CL.HIDING
      _style = isShow ? S.SHOW : S.HIDE_POPUP
      if (!isShow){
        this.wasClosing = true
      }
    }

    return (
         <div
            className={_className}
            style={{ ...S.ROOT_DIV, ...S.ROOT_DIV_MODAL, ...style, ..._style}}
            onClick={this._handleClickDialog}
         >
            <BrowserCaption
               rootStyle={captionStyle}
               caption={caption}
               onClose={onClose}
            />
            <div>
              {children}
            </div>
            {isWithButton && this._renderCommandButton()}
        </div>
    );
  }
}

export default ModalDialog

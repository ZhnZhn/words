import React from 'react';
//import PropTypes from "prop-types";

import useClassAnimation from '../zhn-hooks/useClassAnimation'

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
  }
};

const S2 = {
  INIT: {
    display: 'none'
  },
  SHOWING: {
    display: 'block'
  },
  HIDING: {
    opacity: 0,
    transform: 'scaleY(0)'
  }
}


function _hClickDialog(event) {
  event.stopPropagation()
}

const ModalDialog = ({
  isShow,
  style,
  isWithButton=true,
  //isFocusClose=true,
  caption, captionStyle,
  commandButtons, withoutClose,
  children, onClose
}) => {
  //const _refBtClose = useRef();
  const {
    className:_className, style:_style
  } = useClassAnimation({
    isShow, CL, S: S2,
    initialWasClosed: false
  });

  return (
    <div
       className={_className}
       style={{
         ...S.ROOT_DIV, ...S.ROOT_DIV_MODAL,
         ...style, ..._style
       }}
       onClick={_hClickDialog}
    >
       <BrowserCaption
          rootStyle={captionStyle}
          caption={caption}
          onClose={onClose}
       />
       <div>
         {children}
       </div>
       {isWithButton && <div style={S.COMMAND_DIV}>
         {commandButtons}
         { !withoutClose &&
            <RaisedButton
              //ref={_refBtClose}
              rootStyle={STYLE.RAISED_ROOT}
              clDiv={STYLE.CL_RAISED_DIV}
              caption="Close"
              isPrimary={true}
              onClick={onClose}
            />
         }
       </div>}
   </div>
  );
}

export default ModalDialog

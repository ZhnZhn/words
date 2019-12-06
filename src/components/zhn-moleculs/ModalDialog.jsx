import React, { useRef, useCallback, useEffect } from 'react';
//import PropTypes from "prop-types";

import useClassAnimation from '../zhn-hooks/useClassAnimation'

import A from '../Comp'

const CL = {
  D: 'modal-dialog',
  D_ACTIONS: 'modal-dialog__actions',
  BT_DIV: 'bt-flat__div'
};
const S = {
  BT_ROOT: {
    color: '#3270b4'
  }
};

const CL2 = {
  SHOWING : 'dialog show-popup',
  HIDING : 'hide-popup'
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
};

const _hasFocusFn = ref =>
  typeof ((ref || {}).current || {}).focus === 'function';

const _hClickDialog = (event) => {
  event.stopPropagation()
};

const ModalDialog = ({
  isShow,
  className=CL.D,
  style,
  isWithButton=true,
  //isFocusClose=true,
  caption, captionStyle,
  commandButtons, withoutClose,
  children, onClose
}) => {
  const _refRootDiv = useRef()
  , _refPrevFocused = useRef()
  , _hKeyDown = useCallback((event) => {
       if (_refRootDiv && document.activeElement === _refRootDiv.current
         && event.keyCode === 27) {
           onClose(event)
       }
     }, [])
  , {
    className:_className, style:_style
  } = useClassAnimation({
    isShow, CL: CL2, S: S2,
    initialWasClosed: false
  })
  , _className2 = _className
      ? `${className} ${_className}`
      : className;

  useEffect(() => {
    _refPrevFocused.current = document.activeElement
  }, [])
  useEffect(() => {
    if (isShow && _hasFocusFn(_refRootDiv)) {
      _refRootDiv.current.focus()
    }
  }, [isShow])
  useEffect(() => {
    if (_style === S2.HIDING && _hasFocusFn(_refPrevFocused) ) {
      _refPrevFocused.current.focus()
    }
  })
  return (
    <div
       ref={_refRootDiv}
       tabIndex="0"
       className={_className2}
       style={{...style, ..._style}}
       onClick={_hClickDialog}
       onKeyDown={_hKeyDown}
    >
       <A.BrowserCaption
          rootStyle={captionStyle}
          caption={caption}
          onClose={onClose}
       />
       <div>
         {children}
       </div>
       {isWithButton && <div className={CL.D_ACTIONS}>
         {commandButtons}
         { !withoutClose &&
            <A.FlatButton
              //ref={_refBtClose}
              rootStyle={S.BT_ROOT}
              clDiv={CL.BT_DIV}
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

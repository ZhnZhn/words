import {
  useRef,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue,
  focusRefElement
} from '../uiApi';

import useClassAnimation from '../hooks/useClassAnimation';

import BrowserCaption from '../zhn-atoms/BrowserCaption';
import FlatButton from '../zhn-atoms/FlatButton';

const CL_MD = 'modal-dialog'
, CL_MD_ACTIONS = `${CL_MD}__actions`
, CL_BT_DIV = 'bt-flat__div'
, S_BT = { color: '#3270b4' }

, CL = {
  SHOWING: 'dialog show-popup',
  HIDING: 'hide-popup'
}
, S = {
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

const _getPrevFocusedElement = () => {
  const _prevFocused = document._prevFocusedZhn;
  if (_prevFocused) {
    return document._prevFocusedZhn = void 0, _prevFocused;
  }
  return document.activeElement;
};

const _hClickDialog = (evt) => {
  evt.stopPropagation()
};

const ModalDialog = ({
  isShow,
  className=CL_MD,
  style,
  isWithButton=true,
  caption,
  captionStyle,
  commandButtons,
  withoutClose,
  children,
  onClose
}) => {
  const _refRootDiv = useRef()
  , _refPrevFocused = useRef()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback(evt => {
       if ( evt.target === getRefValue(_refRootDiv)
         && evt.keyCode === 27
       ) {
           onClose(evt)
       }
     }, [])
  // onClose
  /*eslint-enable react-hooks/exhaustive-deps */
  , {
    className:_className,
    style:_style
  } = useClassAnimation({
    isShow,
    CL,
    S,
    initialWasClosed: false
  })
  , _className2 = _className
      ? `${className} ${_className}`
      : className;

  useEffect(() => {
    if(isShow) {
      setRefValue(_refPrevFocused, _getPrevFocusedElement())
    }
  }, [isShow])
  useEffect(() => {
    if (isShow) {
      focusRefElement(_refRootDiv)
    }
  }, [isShow])
  useEffect(() => {
    if (_style === S.HIDING) {
      focusRefElement(_refPrevFocused)
    }
  })

  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    <div
       ref={_refRootDiv}
       role="dialog"
       tabIndex="-1"
       aria-label={caption}
       aria-hidden={!isShow}
       className={_className2}
       style={{...style, ..._style}}
       onClick={_hClickDialog}
       onKeyDown={_hKeyDown}
    >
    {/*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/}
       <BrowserCaption
          rootStyle={captionStyle}
          caption={caption}
          onClose={onClose}
       />
       <div>
         {children}
       </div>
       {isWithButton && <div className={CL_MD_ACTIONS}>
         {commandButtons}
         { !withoutClose &&
            <FlatButton
              rootStyle={S_BT}
              clDiv={CL_BT_DIV}
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

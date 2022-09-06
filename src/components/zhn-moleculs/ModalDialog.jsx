import {
  useRef,
  useCallback,
  useEffect
} from '../uiApi';

import useClassAnimation from '../hooks/useClassAnimation';

import A from '../Comp';

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

const _hasFocusFn = ref =>
  typeof ((ref || {}).current || {}).focus === 'function';

const _hClickDialog = (event) => {
  event.stopPropagation()
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
  , _hKeyDown = useCallback((event) => {
       if (_refRootDiv
         && event.target === _refRootDiv.current
         && event.keyCode === 27) {
           onClose(event)
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
      _refPrevFocused.current = _getPrevFocusedElement()
    }
  }, [isShow])
  useEffect(() => {
    if (isShow && _hasFocusFn(_refRootDiv)) {
      _refRootDiv.current.focus()
    }
  }, [isShow])
  useEffect(() => {
    if (_style === S.HIDING && _hasFocusFn(_refPrevFocused) ) {
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
       {isWithButton && <div className={CL_MD_ACTIONS}>
         {commandButtons}
         { !withoutClose &&
            <A.FlatButton
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

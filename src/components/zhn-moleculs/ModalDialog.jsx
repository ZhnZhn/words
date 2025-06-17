import {
  useRef,
  useEffect,
  setRefValue,
  focusRefElement
} from '../uiApi';

import { useKeyEscape } from '../hooks/fUseKey';
import useClassAnimation from '../hooks/useClassAnimation';

import BrowserCaption from '../zhn-atoms/BrowserCaption';
import FlatButton from '../zhn-atoms/FlatButton';

const CL_MD = 'modal-dialog'
, CL_MD_ACTIONS = `${CL_MD}__actions`
, CL_BT_DIV = 'bt-flat__div'

, CL = {
  SHOWING: 'dialog show-popup',
  HIDING: 'hide-popup'
}
, S_CAPTION = {
  paddingTop: 5,
  textAlign: 'center',
  marginBottom: 0
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
  , _hKeyDown = useKeyEscape(onClose)
  , {
    className:_className,
    style:_style
  } = useClassAnimation({
    isShow,
    CL,
    S,
    initialWasClosed: !1
  })
  , _className2 = _className
      ? `${className} ${_className}`
      : className;

  useEffect(() => {
    if (isShow) {
      setRefValue(_refPrevFocused, _getPrevFocusedElement())
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
          rootStyle={{...S_CAPTION, ...captionStyle}}
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

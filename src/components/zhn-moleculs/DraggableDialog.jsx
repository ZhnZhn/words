//import PropTypes from 'prop-types'
import {
  forwardRef,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  getRefValue,
  setRefValue,
  focusRefElement
} from '../uiApi';

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import RaisedButton from '../zhn-atoms/RaisedButton'

import Interact from '../../utils/Interact'

const CL_DIALOG = 'dialog';
const CL_DIALOG_OPEN = 'dialog show-popup';

const S_DIV = {
  zIndex: 10,
  position: 'absolute',
  top: 30,
  left: 50,
  backgroundColor: '#4D4D4D',
  border: 'solid 2px #3f5178',
  borderRadius: 5,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px'
}
, S_CHL_DIV = {
  cursor: 'default'
}
, S_COMMAND = {
   cursor: 'default',
   float: 'right',
   marginTop: 16,
   marginBottom: 10,
   marginRight: 4
}
, S_BLOCK = {
  display: 'block'
}
, S_NONE = {
  display: 'none'
};

const _isFn = fn => typeof fn === 'function';

const DialogButtons = ({
  S={},
  onLoad,
  onShow,
  onClose
}) => (
  <div style={S_COMMAND}>
    {_isFn(onLoad) && <RaisedButton
        style={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Load"
        isPrimary={true}
        onClick={onLoad}
      />
    }
    {_isFn(onShow) && <RaisedButton
         style={S.RAISED_ROOT}
         clDiv={S.CL_RAISED_DIV}
         caption="Show"
         onClick={onShow}
      />
    }
    <RaisedButton
       style={S.RAISED_ROOT}
       clDiv={S.CL_RAISED_DIV}
       caption="Close"
       onClick={this._handleClose}
    />
  </div>
);

/*eslint-disable react-hooks/exhaustive-deps */
const useFocusByRef = ref => useCallback(() => {
  focusRefElement(ref)
}, [])
//ref
/*eslint-enable react-hooks/exhaustive-deps */

const DraggableDialog = forwardRef(({
  isShow,
  style,
  captionStyle,
  buttonStyle,
  caption,
  children,
  onKeyDown,
  onLoad,
  onShow,
  onClose
}, ref) => {
  const _refDiv = useRef(null)
  , _refIsShow = useRef(isShow)
  , _refPrevFocused = useRef(null)
  , focusPrevEl = useFocusByRef(_refPrevFocused)
  , focus = useFocusByRef(_refDiv)
  , _hKeyDown = useCallback(evt => {
    if (document.activeElement == getRefValue(_refDiv)) {
      onKeyDown(evt)
    }
  }, [onKeyDown])
  , _hClose = useCallback(evt => {
    focusPrevEl()
    onClose()
  }, [onClose, focusPrevEl]);

  useEffect(() => {
    const _divElement = getRefValue(_refDiv);
    Interact.makeDragable(_divElement)
    setRefValue(_refPrevFocused, document.activeElement)
    _divElement.focus()
  }, [])

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isShow && !getRefValue(_refIsShow)) {
      focus()
    }
    setRefValue(_refIsShow, isShow)
  }, [isShow])
  // focus
  /*eslint-enable react-hooks/exhaustive-deps */

  useImperativeHandle(ref, () => ({ focusPrevEl }))

  const [
    _classShow,
    _styleShow
  ] = isShow
    ? [CL_DIALOG_OPEN, S_BLOCK]
    : [CL_DIALOG, S_NONE];

  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    <div
         ref={_refDiv}
         role="dialog"
         className={_classShow}
         style={{
           ...S_DIV,
           ...style,
           ..._styleShow
         }}
         tabIndex="0"
         onKeyDown={_hKeyDown}
    >
    {
      /*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/
      /*eslint-enable jsx-a11y/no-noninteractive-tabindex*/
    }
      <BrowserCaption
         style={captionStyle}
         caption={caption}
         onClose={onClose}
      />
      <div style={S_CHL_DIV}>
         {children}
      </div>
      <DialogButtons
        TS={buttonStyle}
        onLoad={onLoad}
        onShow={onShow}
        onClose={_hClose}
      />
    </div>
  );
});

/*
static propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object,
  browserCaptionStyle: PropTypes.object,
  styleButton: PropTypes.object,
  caption: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onLoad: PropTypes.func,
  onShow: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default DraggableDialog

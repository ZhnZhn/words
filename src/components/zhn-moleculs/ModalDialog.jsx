import { useRef } from '../uiApi';
import { crShowHide } from '../styleFn';

import { useKeyEscape } from '../hooks/fUseKey';
import useDialogFocus from './useDialogFocus';

import FocusTrap from './FocusTrap';
import BrowserCaption from '../zhn/BrowserCaption';
import FlatButton from '../zhn/FlatButton';

const CL_MD = 'modal-dialog'
, CL_MODAL_DIALOG = `${CL_MD} dialog`
, CL_MD_ACTIONS = `${CL_MD}__actions`
, CL_BT_DIV = 'bt-flat__div'
, S_CAPTION = {
  paddingTop: 5,
  textAlign: 'center',
  marginBottom: 0
};

const _hClickDialog = (evt) => {
  evt.stopPropagation()
};

const ModalDialog = ({
  refFocusLast,
  isShow,
  style,
  isWithButton=!0,
  caption,
  captionStyle,
  commandButtons,
  withoutClose,
  children,
  onClose
}) => {
  const _refRootDiv = useRef()
  , _refBtClose = useRef()
  , _hKeyDown = useKeyEscape(onClose)
  , [
    _className,
    _showHideStyle
  ] = crShowHide(
    isShow,
    CL_MODAL_DIALOG
  );

  useDialogFocus(isShow, _refRootDiv)

  return (
    <FocusTrap
      refEl={_refRootDiv}
      refFirst={_refRootDiv}
      refLast={refFocusLast || _refBtClose}
      style={_showHideStyle}
    >
      {/*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/}
      <div
         ref={_refRootDiv}
         role="dialog"
         tabIndex="-1"
         aria-label={caption}
         aria-hidden={!isShow}
         className={_className}
         style={{...style, ..._showHideStyle}}
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
                refBt={_refBtClose}
                clDiv={CL_BT_DIV}
                caption="Close"
                isPrimary={true}
                onClick={onClose}
              />
           }
         </div>}
     </div>
   </FocusTrap>
  );
}

export default ModalDialog

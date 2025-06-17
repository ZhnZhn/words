import {
  S_BLOCK,
  S_NONE
} from '../styleFn';

const CL_MODAL_ROOT = 'modal-root'
, CL_MODAL_ROOT_SHOWING = `${CL_MODAL_ROOT} show-modal`;

const ModalContainer = ({
  isShow,
  children,
  onClose
}) => {
  const [
    _className,
    _style
  ] = isShow
    ? [CL_MODAL_ROOT_SHOWING, S_BLOCK]
    : [CL_MODAL_ROOT, S_NONE];
  return (
   <div
     role="presentation"
     className={_className}
     style={_style}
     onClick={onClose}
   >
     {children}
   </div>
 );
}

export default ModalContainer

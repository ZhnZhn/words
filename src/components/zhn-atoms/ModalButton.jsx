import { useRef, useEffect } from '../uiApi';
import CaptionInput from './CaptionInput';

const CL_BT = 'bt-flat'
, CL_BT_SPAN = 'bt-flat__span';

const ModalButton = ({
  style,
  clDiv,
  title,
  caption,
  accessKey,
  children,
  onClick,
  onReg
}) => {
  const _ref = useRef();

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    if (typeof onReg === 'function'){
      onReg(_ref.current)
    }
  }, [])
  // onReg
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <button
      ref={_ref}
      className={CL_BT}
      style={style}
      tabIndex={0}
      title={title}
      accessKey={accessKey}
      onClick={onClick}
    >
      <div className={clDiv}>
        <CaptionInput
          className={CL_BT_SPAN}
          caption={caption}
          accessKey={accessKey}
        >
           {children}
        </CaptionInput>
      </div>
    </button>
  );
};

export default ModalButton

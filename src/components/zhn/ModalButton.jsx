import CaptionInput from './CaptionInput';

const CL_BT_FLAT = 'bt-flat'
, CL_BT_SPAN = `${CL_BT_FLAT}__span`;

const ModalButton = ({
  refEl,
  style,
  title,
  caption,
  accessKey,
  onClick,
  children
}) => (
  <button
    ref={refEl}
    type="button"
    className={CL_BT_FLAT}
    style={style}
    title={title}
    accessKey={accessKey}
    onClick={onClick}
  >
    <CaptionInput
      className={CL_BT_SPAN}
      caption={caption}
      accessKey={accessKey}
    >
       {children}
    </CaptionInput>
  </button>
);


export default ModalButton

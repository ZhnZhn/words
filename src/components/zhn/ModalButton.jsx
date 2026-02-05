import CaptionInput from './CaptionInput';

const CL_BT_FLAT = 'bt-flat'
, CL_BT_SPAN = `${CL_BT_FLAT}__span`;

const ModalButton = (props) => (
  <button
    ref={props.refEl}
    type="button"
    className={CL_BT_FLAT}
    style={props.style}
    title={props.title}
    accessKey={props.accessKey}
    onClick={props.onClick}
  >
    <CaptionInput
      className={CL_BT_SPAN}
      caption={props.caption}
      accessKey={props.accessKey}
    >
       {props.children}
    </CaptionInput>
  </button>
);


export default ModalButton

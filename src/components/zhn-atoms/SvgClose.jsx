import Svg100 from './svg/Svg100';

const CL_SVG_CLOSE = "svg-close"
, S_SVG = { padding: 3 };

const SvgClose = ({
  style,
  tabIndex,
  onClose
}) => (
   <button
      type="button"
      tabIndex={tabIndex}
      className={CL_SVG_CLOSE}
      style={style}
      onClick={onClose}
   >
     <Svg100
        w="12"
        style={S_SVG}
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M 0,0 L 12,12" />
        <path d="M 12,0 L 0,12" />
     </Svg100>
   </button>
);

export default SvgClose

const CL_SVG_CLOSE = "svg-close"
, STROKE_COLOR = '#d64336'
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
     <svg
        viewBox="0 0 12 12"
        width="100%"
        height="100%"
        style={S_SVG}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="2"
        stroke={STROKE_COLOR}
        strokeLinecap="round"
      >
        <path d="M 0,0 L 12,12" />
        <path d="M 12,0 L 0,12" />
     </svg>
   </button>
);

export default SvgClose

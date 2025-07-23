import { Svg } from './svg/Svg';

const CL_BT_SVG_MORE = 'bt-svg-more'
, DF_TITLE = "Click to open menu More"
, DF_ARIA_LABEL = "Menu more";

const BtSvgMore = ({
  style,
  svgStyle,
  title=DF_TITLE,
  ariaLabel=DF_ARIA_LABEL,
  onClick
}) => (
  <button
    type="button"
    className={CL_BT_SVG_MORE}
    style={style}
    title={title}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    <Svg
      style={svgStyle}
      w="6"
      h="22"
    >
      <circle cx="3" cy="4" r="2" />
      <circle cx="3" cy="11" r="2" />
      <circle cx="3" cy="18" r="2" />
    </Svg>
  </button>
);

export default BtSvgMore

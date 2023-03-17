import { forwardRef }  from '../uiApi';

import Svg from './svg/Svg';

const CL_FOCUSABLE = 'focusable'
, S_BT = {
  verticalAlign: 'middle',
  padding: '0 6px',
  cursor: 'pointer'
}
, S_SVG = {
  fill: 'black',
  stroke: 'black'
}
, DF_TITLE = "Click to open menu More";

const SvgMore = forwardRef(({
  style,
  svgStyle,
  title=DF_TITLE,
  onClick
}, ref) => (
  <button
    type="button"
    ref={ref}
    className={CL_FOCUSABLE}
    style={{...S_BT, ...style}}
    title={title}
    onClick={onClick}
  >
    <Svg
      style={{...S_SVG, ...svgStyle}}
      w="6"
      h="22"      
    >
      <circle cx="3" cy="4" r="2" />
      <circle cx="3" cy="11" r="2" />
      <circle cx="3" cy="18" r="2" />
    </Svg>
  </button>
));

export default SvgMore

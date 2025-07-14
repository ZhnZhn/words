import { isFn } from '../../utils/isTypeFn';

import SvgMore from './SvgMore'
import SvgClose from './SvgClose'

const CL_NOT_SELECTED = "not-selected"
, CL_B_CAPTION = "b-caption gap-right"

, S_CAPTION = {
  fontSize: '18px',
  fontWeight: 'bold'
}
, S_BT_MORE = { marginRight: 6 }
, S_SVG_MORE = {
  fill: 'inherit',
  stroke: 'inherit'
}
, S_SVG_CLOSE = {
  position: 'absolute',
  top: 6,
  right: 0,
  width: 24,
  height: 24
};

const _extractColorToSvgStyle = (
  {color}={},
  DF_STYLE
) => color
 ? { fill: color, stroke: color }
 : DF_STYLE;

const BrowserCaption = ({
  rootStyle,
  caption,
  children,
  onMore,
  onClose
}) => (
  <div
    className={CL_B_CAPTION}
    style={rootStyle}
  >
    {
       isFn(onMore) && <SvgMore
          style={S_BT_MORE}
          svgStyle={_extractColorToSvgStyle(rootStyle, S_SVG_MORE)}
          onClick={onMore}
       />
     }
    <span
       className={CL_NOT_SELECTED}
       style={S_CAPTION}
    >
       {caption}
    </span>
    {children}
    <SvgClose
      style={S_SVG_CLOSE}
      tabIndex="-1"
      onClose={onClose}
    />
  </div>
);

export default BrowserCaption

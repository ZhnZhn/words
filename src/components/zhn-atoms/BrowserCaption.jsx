import SvgMore from './SvgMore'
import SvgClose from './SvgClose'

const CL_NOT_SELECTED = "not-selected"
, CL_GAP_RIGHT = "gap-right"
, S_ROOT = {
  position: 'relative',
  backgroundColor: '#3f5178',
  color: 'rgba(164, 135, 212, 1)',
  lineHeight: 1.8,
  padding: '4px 42px 0 10px',
  marginBottom: 10,
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'clip'
}
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


const _isFn = fn => typeof fn === "function";

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
    className={CL_GAP_RIGHT}
    style={{...S_ROOT, ...rootStyle}}
  >
    {
       _isFn(onMore) &&
       <SvgMore
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
      onClose={onClose}
    />
  </div>
);

export default BrowserCaption

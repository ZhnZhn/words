import React from 'react'

import SvgMore from './SvgMore'
import SvgClose from './SvgClose'

const CL_NOT_SELECTED = "not-selected";
const CL_GAP = "gap-right";

const S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#3f5178',
    color: 'rgba(164, 135, 212, 1)',
    lineHeight: 1.8,
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 42,
    marginBottom: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'clip'
  },
  CAPTION: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  BT_MORE: {
    marginRight: 6
  },
  SVG_MORE: {
    fill: 'inherit',
    stroke: 'inherit'
  },
  SVG_CLOSE: {
    position: 'absolute',
    top: 6,
    right: 0,
    width: 24,
    height: 24
  }
};

const _isFn = fn => typeof fn === "function";

const _extractColorToSvgStyle = ({color}={}, DF_STYLE) => color
 ? { fill: color, stroke: color }
 : DF_STYLE;

const BrowserCaption = ({ rootStyle, caption, children, onMore, onClose }) => (
  <div className={CL_GAP} style={{...S.ROOT, ...rootStyle}}>
    {
       _isFn(onMore) &&
       <SvgMore
          style={S.BT_MORE}
          svgStyle={_extractColorToSvgStyle(rootStyle, S.SVG_MORE)}
          onClick={onMore}
       />
     }
    <span
       className={CL_NOT_SELECTED}
       style={S.CAPTION}
    >
       {caption}
    </span>
    {children}
    <SvgClose
      style={S.SVG_CLOSE}
      onClose={onClose}
    />
  </div>
);

export default BrowserCaption

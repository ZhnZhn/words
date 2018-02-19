import React from 'react'

import SvgClose from './SvgClose'

const S = {
  ROOT: {
    backgroundColor: '#3f5178',
    color: '#303030',
    lineHeight: '1.8',
    paddingTop: '4px',
    paddingLeft: '10px',
    marginBottom: '10px',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px'
  },
  CAPTION: {
    color: 'inherit',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  SVG_CLOSE: {
    position: 'relative',
    top: '3px',
    width: '24px',
    height: '24px',
  }
};

const BrowserCaption = ({ rootStyle, svgStyle, caption, children, onClose }) => (
  <div style={{...S.ROOT, ...rootStyle}}>
    <span
       className="not-selected"
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

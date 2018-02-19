import React from 'react'
//import PropTypes from 'prop-types'

const CL_ROOT = "svg-close"
const S = {
  //COLOR : '#F44336',
  COLOR: '#D64336',
  SVG: {
    padding: '3px',
  }
};

const SvgClose = ({ style, tabIndex, onClose }) => (
   <button
      tabIndex={tabIndex}
      className={CL_ROOT}
      style={style}
      onClick={onClose}
   >
     <svg
        viewBox="0 0 12 12" width="100%" height="100%"
        style={S.SVG} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        strokeWidth="2"
        stroke={S.COLOR}
        strokeLinecap="round"
      >
        <path d="M 0,0 L 12,12"></path>
        <path d="M 12,0 L 0,12"></path>
     </svg>
   </button>
);

/*
SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/
SvgClose.defaultProps = {
  onClose: () => {}
};


export default SvgClose

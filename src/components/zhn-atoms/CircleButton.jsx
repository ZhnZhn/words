import React from 'react'

const S = {
  ROOT: {
    display: 'inline-block',
    color: '#80c040',
    border: '2px solid #80c040',
    borderRadius: '50%',
    lineHeight: '24px',
    width: '26px',
    height: '26px',
    textAlign: 'center',
    cursor: 'pointer'
  }
};

const CircleButton = (props) => {
    const {
           caption='', className, style,
           tabIndex='-1',
           isWithoutDefault, onClick
         } = props
        , _style = (isWithoutDefault)
             ? style
             : { ...S.ROOT, ...style };
    return (
      <button
         className={className}
         style={_style}
         tabIndex={tabIndex}
         onClick={onClick}
      >
         {caption}
      </button>
    );
}

export default CircleButton

const CL = 'bt-circle';

const CircleButton = ({
  refEl,
  style,
  tabIndex='-1',
  caption='',
  title,
  onClick
}) => (
  <button
     type="button"
     ref={refEl}
     className={CL}
     style={style}
     tabIndex={tabIndex}
     title={title}
     onClick={onClick}
  >
     {caption}
  </button>
);

export default CircleButton

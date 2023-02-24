import { forwardRef } from '../../uiApi';

const CL = 'bt-circle';

const CircleButton = forwardRef(({
  style,
  tabIndex='-1',
  caption='',
  title,
  onClick
}, ref) => (
  <button
     type="button"
     ref={ref}
     className={CL}
     style={style}
     tabIndex={tabIndex}
     title={title}
     onClick={onClick}
  >
     {caption}
  </button>
));

export default CircleButton

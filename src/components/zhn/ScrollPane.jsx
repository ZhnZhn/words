import { crCn } from '../uiApi';

const CL_SCROLL = 'with-scroll';

const ScrollPane = ({
  style,
  className,
  children
}) => (
   <div
     className={crCn(className, CL_SCROLL)}
     style={style}
   >
     {children}
   </div>
);

export default ScrollPane

import { crCn } from '../styleFn';

const CL_SCROLL = 'with-scroll';

const ScrollPane = (props) => (
   <div
     className={crCn(props.className, CL_SCROLL)}
     style={props.style}
   >
     {props.children}
   </div>
);

export default ScrollPane

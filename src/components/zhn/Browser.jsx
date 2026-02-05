import { crShowHideIf } from '../styleFn';

const CL_BROWSER = 'browser';

const Browser = (props) => {
  const [
    _style,
    _className
  ] = crShowHideIf(props.isShow, CL_BROWSER);

  return (
     <div
        className={_className}
        style={{...props.style, ..._style}}
      >
        {props.children}
     </div>
  );
};

export default Browser

import { crShowHideIf } from '../styles/ContainerStyle';

const CL_BROWSER = 'browser';

const Browser = ({
  isShow,
  style,
  children
}) => {
  const [
    _style,
    _className
  ] = crShowHideIf(isShow, CL_BROWSER);

  return (
     <div
        className={_className}
        style={{...style, ..._style}}
      >
        {children}
     </div>
  );
};

export default Browser

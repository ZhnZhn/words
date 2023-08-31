import {
  crShowHideIf,
  S_BROWSER
} from '../styles/ContainerStyle';

const Browser = ({
  isShow,
  style,
  children
}) => {
  const [
    _style,
    _className
  ] = crShowHideIf(isShow);

  return (
     <div
        className={_className}
        style={{...S_BROWSER, ...style, ..._style}}
      >
        {children}
     </div>
  );
};

export default Browser

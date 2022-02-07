
import STYLE from '../styles/ContainerStyle';

const CL_SHOW_POPUP = 'show-popup'
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' };

const Browser = ({
  isShow,
  style,
  children
}) => {
  const _styleOpen = isShow ? S_BLOCK : S_NONE
  , _classOpen = isShow ? CL_SHOW_POPUP : null;
  return (
     <div
        className={_classOpen}
        style={{...STYLE.BROWSER_ROOT, ...style, ..._styleOpen}}
      >
        {children}
     </div>
  );
};

export default Browser

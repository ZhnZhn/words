import crCn from '../zhn-utils/crCn';

const CL_SHOW_POPUP = 'show-popup'
, S_SHOW = { display: 'block' }
, S_HIDE = { display: 'none' };

const ShowHide = ({
  isShow,
  className,
  style,
  children
}) => {
    const _style = isShow
      ? S_SHOW : S_HIDE
    , _className = crCn(className,
      [isShow, CL_SHOW_POPUP]
    );

    return (
      <div
        className={_className}
        style={{...style, ..._style}}
      >
        {children}
      </div>
    );
};

export default ShowHide

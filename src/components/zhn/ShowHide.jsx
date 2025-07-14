import { crCn } from '../uiApi';

const CL_SHOW_POPUP = 'show-popup'
, S_SHOW = { display: 'block' }
, S_HIDE = { display: 'none' };

const ShowHide = ({
  isShow,
  isScrollable,
  className,
  style,
  children,
  onKeyDown
}) => {
    const _style = isShow
      ? S_SHOW : S_HIDE
    , _className = crCn(className,
      [isShow, CL_SHOW_POPUP]
    );

    return (
      <div
        role="presentation"
        className={_className}
        style={{...style, ..._style}}
        data-scrollable={isScrollable ? "true" : void 0}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
    );
};

export default ShowHide

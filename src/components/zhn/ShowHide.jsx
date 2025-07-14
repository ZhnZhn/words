import {
  crCn,
  CL_SHOW_POPUP,
  S_BLOCK,
  S_NONE
 } from '../styleFn';

const ShowHide = ({
  isShow,
  isScrollable,
  className,
  style,
  children,
  onKeyDown
}) => {
    const _style = isShow
      ? S_BLOCK : S_NONE
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

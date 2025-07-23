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
  onKeyDown,
  ...restProps
}) => {
    const _style = isShow
      ? S_BLOCK : S_NONE
    , _className = crCn(className,
      [isShow, CL_SHOW_POPUP]
    );
    /*eslint-disable jsx-a11y/no-static-element-interactions*/
    return (
      <div
        {...restProps}    
        tabIndex="-1"
        className={_className}
        style={{...style, ..._style}}
        data-scrollable={isScrollable ? "true" : void 0}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
    );
    /*eslint-enable jsx-a11y/no-static-element-interactions*/
};

export default ShowHide

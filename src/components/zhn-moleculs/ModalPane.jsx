import useClickOutside from '../hooks/useClickOutside';
import { useKeyEscape } from '../hooks/fUseKey';

const ModalPane = ({
  isShow,
  className,
  style,
  children,
  onClose
}) => {
  const _refEl = useClickOutside(isShow, onClose)
  , _hKeyEscape = useKeyEscape(onClose);
  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
    <div      
      ref={_refEl}
      className={className}
      style={style}
      hidden={!isShow}
      onKeyDown={isShow ? _hKeyEscape : void 0}
    >
      {children}
    </div>
  );
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};

export default ModalPane

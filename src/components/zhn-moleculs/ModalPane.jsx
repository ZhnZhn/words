import useClickOutside from '../hooks/useClickOutside';
import { useKeyEscape } from '../hooks/fUseKey';
import { useFocusPrevElement } from '../hooks/useFocus';

const ModalPane = ({
  isShow,
  className,
  style,
  children,
  onClose,
  onKeyDown,
  ...restProps
}) => {
  const _refEl = useClickOutside(isShow, onClose)
  , _hKeyEscape = useKeyEscape(onClose);

  useFocusPrevElement(isShow)
  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
    <div
      {...restProps}
      ref={_refEl}
      className={className}
      style={style}
      hidden={!isShow}
      onKeyDown={isShow ? onKeyDown || _hKeyEscape : void 0}
    >
      {children}
    </div>
  );
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};

export default ModalPane

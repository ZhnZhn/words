import useClickOutside from '../hooks/useClickOutside';

const ModalPane = ({
  isShow,
  style,
  children,
  onClose
}) => {
  const _refEl = useClickOutside(isShow, onClose);
  return (
    <div
      ref={_refEl}
      style={style}
    >
      {children}
    </div>
  );
};

export default ModalPane

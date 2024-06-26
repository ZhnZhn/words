import {
  useRef,
  useCallback,
  useImperativeHandle,
  getRefValue,
  focusRefElement
} from '../uiApi';

const FN_NOOP = () => {};

const MenuItem = ({
  refEl,
  className,
  caption,
  onClick=FN_NOOP,
  onClose=FN_NOOP
}) => {
  const _refDiv = useRef()
  , _hKeyDown = useCallback(evt => {
    const { keyCode } = evt;
    if (keyCode === 13 ) {
      onClick()
    } else if (keyCode === 27 ) {
      onClose({ target: getRefValue(_refDiv) })
    }
  }, [onClick, onClose]);

  useImperativeHandle(refEl, () => ({
    focus: () => {
      focusRefElement(_refDiv)
    }
  }), [])

  return (
    <div
      role="button"
      ref={_refDiv}
      className={className}
      tabIndex="0"
      onClick={onClick}
      onKeyDown={_hKeyDown}
    >
      {caption}
    </div>
  );
};

export default MenuItem

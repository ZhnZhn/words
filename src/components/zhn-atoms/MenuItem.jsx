import {
  forwardRef,
  useRef,
  useCallback,
  useImperativeHandle,
  getRefValue
} from '../uiApi';

const FN_NOOP = () => {};

const MenuItem = forwardRef(({
  className,
  caption,
  onClick=FN_NOOP,
  onClose=FN_NOOP
}, ref) => {
  const _refDiv = useRef()
  , _hKeyDown = useCallback((evt) => {
    const { keyCode } = event;
    if (keyCode === 13 ) {
      onClick()
    } else if (keyCode === 27 ) {
      onClose({ target: getRefValue(_refDiv) })
    }
  }, [onClick, onClose]);

  useImperativeHandle(ref, () => ({
    focus: () => {
      const _el = getRefValue(_refDiv);
      if (_el) {
        _el.focus()
      }
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
});

export default MenuItem

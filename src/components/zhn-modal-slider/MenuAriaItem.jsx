import {
  useRef,
  useCallback,
  useLayoutEffect
} from '../uiApi';

const MenuAriaItem = ({
  className,
  style,
  onClick,
  onReg,
  children
}) => {
  const _ref = useRef()
  , _hKeyDown = useCallback(event => {
      event.preventDefault()
      const { keyCode } = event
      if (keyCode === 13 || keyCode === 32) {
        onClick()
      }
  }, [onClick]);

 /* eslint-disable react-hooks/exhaustive-deps */
 useLayoutEffect(() => {
   const _el = (_ref || {}).current;
   if (_el && typeof onReg === 'function') {
     onReg(_el)
   }
 }, [])
 // ref, onReg
 /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      className={className}
      style={style}
      ref={onReg ? _ref : void 0}
      role="menuitem"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={_hKeyDown}
    >
      {children}
    </div>
  );
};

export default MenuAriaItem

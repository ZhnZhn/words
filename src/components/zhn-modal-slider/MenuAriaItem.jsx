import { isFn } from '../../utils/isTypeFn';

import {
  useRef,
  useCallback,
  useEffect,
  getRefValue
} from '../uiApi';

const MenuAriaItem = ({
  className,
  style,
  onClick,
  onReg,
  children
}) => {
  const _ref = useRef()
  , _hKeyDown = useCallback(evt => {
      evt.preventDefault()
      const { keyCode } = evt;
      if (keyCode === 13 || keyCode === 32) {
        onClick()
      }
  }, [onClick]);

 /* eslint-disable react-hooks/exhaustive-deps */
 useEffect(() => {
   const _el = getRefValue(_ref);
   if (_el && isFn(onReg)) {
     onReg(_el)
   }
 }, [])
 // onReg
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

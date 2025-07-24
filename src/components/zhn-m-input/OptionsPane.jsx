import {
  useRef,
  useCallback,
  useEffect,

  KEY_ARROW_DOWN,
  KEY_ARROW_UP,
  KEY_ENTER,
  KEY_ESCAPE,
  KEY_TAB,

  getRefValue,
  setRefValue,
  stopDefaultFor
} from '../uiApi';

import ItemStack from '../zhn/ItemStack';
import ModalPane from '../zhn-moleculs/ModalPane';
import {
  getItemCaption,
  getItemValue
} from './OptionFn';

const SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};

const _fFocusItem = propName => ref => {
  const _elItem = (getRefValue(ref) || {})[propName];
  if (_elItem) {
    _elItem.scrollIntoView(SCROLL_OPTIONS)
    _elItem.focus()
    setRefValue(ref, _elItem)
  }
};

const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');

const _crItem = (
  item,
  index, {
  refItem,
  currentItem,
  clItem,
  onSelect
}) => {
  const caption = getItemCaption(item)
  , value = getItemValue(item)
  , currentItemCaption = getItemCaption(currentItem)
  , [
    _tabIndex,
    _ref,
    _ariaSelected,
  ] = currentItemCaption !== void 0 && caption === currentItemCaption
      ? ["0", refItem, "true"]
      : currentItemCaption === void 0 && index === 0
         ? ["0", refItem]
         : ["-1"]
  , _hKeyDown = evt => {
    if (evt.key === KEY_ENTER) {
      onSelect(item, evt)
    }
  };

  return (
    <div
      key={value}
      role="option"
      ref={_ref}
      aria-selected={_ariaSelected}
      tabIndex={_tabIndex}
      className={clItem}
      onClick={evt => onSelect(item, evt)}
      onKeyDown={_hKeyDown}
    >
      {caption}
    </div>
  );
};

const OptionsPane = ({
  id,
  isShow,
  className,
  options,
  item,
  clItem,
  onSelect,
  onClose
}) => {
  const _refItem = useRef(null)
  , _refFocus = useRef(null)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback(evt => {
    if (evt.key === KEY_ARROW_DOWN) {
      stopDefaultFor(evt)
      _focusNextItem(_refFocus)
    } else if (evt.key === KEY_ARROW_UP) {
      stopDefaultFor(evt)
      _focusPrevItem(_refFocus)
    } else if (evt.key === KEY_ESCAPE || evt.key === KEY_TAB) {
      stopDefaultFor(evt)
      onClose()
    }
  }, []);
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  useEffect(()=>{
    if (isShow) {
      const _elItem = getRefValue(_refItem);
      if (_elItem) {
        _elItem.focus()
        setRefValue(_refFocus, _elItem)
      }
    }
  }, [isShow])
  return (
   <ModalPane
     id={id}
     role="listbox"
     data-scrollable="true"
     isShow={isShow}
     className={className}
     onClose={onClose}
     onKeyDown={_hKeyDown}
   >
     <ItemStack
       items={options}
       crItem={_crItem}
       refItem={_refItem}
       currentItem={item}
       clItem={clItem}
       onSelect={onSelect}
     />
   </ModalPane>
 );
};

export default OptionsPane

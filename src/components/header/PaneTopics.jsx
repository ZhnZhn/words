import {
  useRef,
  useEffect,
  setRefValue,
  focusRefElement
} from '../uiApi';

import MenuItem from '../zhn-atoms/MenuItem';
import ShowHide from '../zhn-atoms/ShowHide';
import ModalPane from '../zhn-moleculs/ModalPane';

const ItemsStack = ({
  refItem,
  items,
  clItem,
  onClose
}) => items
 .map((item, index) => {
    const _ref = index === 0
      ? refItem
      : void 0;
    return (
      <MenuItem
        key={item.caption}
        refEl={_ref}
        className={clItem}
        {...item}
        onClose={onClose}
      />
    );
 })

const PaneTopics = ({
  isShow,
  className,
  clItem,
  items,
  onClose
}) => {
  const _refItem = useRef()
  , _refPrevEl = useRef();

  useEffect(() => {
    if (isShow) {
      setRefValue(_refPrevEl, document.activeElement)
      focusRefElement(_refItem)
    } else {
      focusRefElement(_refPrevEl)
    }
  }, [isShow])

  return (
    <ModalPane
      isShow={isShow}
      onClose={onClose}
    >
      <ShowHide
        isShow={isShow}
        className={className}
      >
        <ItemsStack
          refItem={_refItem}
          items={items}
          clItem={clItem}
          onClose={onClose}
        />
      </ShowHide>
   </ModalPane>
  );
};

export default PaneTopics

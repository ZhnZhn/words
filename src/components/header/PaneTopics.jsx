import {
  useRef,
  useEffect,
  setRefValue,
  focusRefElement
} from '../uiApi';

import ModalPane from '../zhn-moleculs/ModalPane';
import A from '../zhn-atoms/Atoms';

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
      <A.MenuItem
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
      <A.ShowHide
        isShow={isShow}
        className={className}
      >
        <ItemsStack
          refItem={_refItem}
          items={items}
          clItem={clItem}
          onClose={onClose}
        />
      </A.ShowHide>
   </ModalPane>
  );
};

export default PaneTopics

import {
  useRef,
  useEffect,
  safeMap,
  crOnClick,
  setRefValue,
  focusRefElement
} from '../uiApi';

import { crMenuItemRole } from '../a11yFn';

import ShowHide from '../zhn/ShowHide';
import ModalPane from '../zhn-moleculs/ModalPane';

const ItemsStack = ({
  refItem,
  items,
  clItem,
  onClose
}) => safeMap(items, (item, index) => (
  <div
    key={item.caption}
    {...crMenuItemRole(crOnClick(item.onClick, onClose, !0), "0")}
    ref={index === 0 ? refItem : void 0}
    className={clItem}
  >
    {item.caption}
  </div>
))

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

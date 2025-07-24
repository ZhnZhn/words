import {
  safeMap,
  crOnClick
} from '../uiApi';

import { crMenuItemRole } from '../a11yFn';

import { useItemsFocusTrap } from '../hooks/useFocus';

import ModalPane from '../zhn-moleculs/ModalPane';
import FocusTrap from '../zhn-moleculs/FocusTrap';

const ItemsStack = ({
  getRefItem,
  items,
  clItem,
  onClose
}) => safeMap(items, (item, index) => (
  <div
    key={item.caption}
    {...crMenuItemRole(crOnClick(item.onClick, onClose, !0), "0")}
    ref={getRefItem(index)}
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
  const [
    _refFirstItem,
    _refLastItem,
    _getRefItem
  ] = useItemsFocusTrap(
    items,
    isShow
  );

  return (
    <ModalPane
      isShow={isShow}
      className={className}
      onClose={onClose}
    >
      <FocusTrap
        refFirst={_refFirstItem}
        refLast={_refLastItem}
      >
        <ItemsStack
          getRefItem={_getRefItem}
          items={items}
          clItem={clItem}
          onClose={onClose}
        />
      </FocusTrap>
   </ModalPane>
  );
};

export default PaneTopics

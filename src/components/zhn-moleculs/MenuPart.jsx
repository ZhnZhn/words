import { safeBindTo } from '../../utils/bindTo';

import { safeMap } from '../uiApi';
import { crMenuItemRole } from '../a11yFn';

import OpenClose from '../zhn/OpenClose';

const CL_ROW_ITEM = "row__item not-selected";

const MenuPart = ({
  isInitClose,
  caption,
  items,
  hmItems,
  onClickItem,
  ...restProps
}) => (
  <OpenClose
     caption={caption}
     isClose={isInitClose}
  >
    {safeMap(items, item => {
      const _itemConf = hmItems[item.id]
      , { menuTitle} = _itemConf || {};
      return menuTitle ? (
         <div
           key={item.id}
           {...crMenuItemRole(
             safeBindTo(onClickItem, {..._itemConf, ...restProps}),
             "0"
           )}
           className={CL_ROW_ITEM}
          >
            {menuTitle}
         </div>
      ) : null;
     })}
  </OpenClose>
)

export default MenuPart

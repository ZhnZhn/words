import { bindTo } from '../../utils/bindTo';
import { isBool } from '../../utils/isTypeFn';

import { safeMap, crOnClick } from '../uiApi';
import { crMenuItemRole } from '../a11yFn';

import {
  S_INLINE_BLOCK,
  crAbsoluteTopLeftStyle
} from '../styleFn';

import InputSwitch from '../zhn/InputSwitch';

const SUB_MENU = 'sub'
, S_ITEM = {
  position: 'relative'
}
, S_INPUT_SWITCH = {
  padding: '10px 0'
}
, S_NEXT_PAGE = {
  ...S_INLINE_BLOCK,
  ...crAbsoluteTopLeftStyle(0, 4, !0),
  color: 'inherit',
  paddingRight: 16,
  fontWeight: 'bold'
};

const NextPageArrow = ({
  type
}) => type === SUB_MENU
 ? (<span style={S_NEXT_PAGE}>{">"}</span>)
 : null;

const MenuItemList = ({
  getRefItem,
  items,
  itemCl,
  pageNumber,
  onNextPage,
  onClose
}) => (
  <>
   {safeMap(items, (item, index) => {
     const {
       name,
       type,
       isInitial
     } = item
     , _onClick = type === SUB_MENU
        ? bindTo(onNextPage, item.id, name, pageNumber)
        : crOnClick(item.onClick, onClose, item.isClose);
     return isBool(isInitial) ? (
       <div
         key={name}
         {...crMenuItemRole()}
         className={item.cn || itemCl}
       >
         <InputSwitch
           refEl={getRefItem(index)}
           style={S_INPUT_SWITCH}
           initialValue={isInitial}
           caption={name}
           onToggle={_onClick}
         />
      </div>
     ) : (<div
        key={name}
        ref={getRefItem(index)}
        className={item.cn || itemCl}
        style={S_ITEM}
        {...crMenuItemRole(_onClick, "0")}
      >
        <span>{name}</span>
        <NextPageArrow type={type}/>
      </div>);
    })}
  </>
);

/*
MenuItemList.propTypes = {
  items: PropTypes.array,
  itemCl: PropTypes.string,
  pageNumber: PropTypes.number,
  onNextPage: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default MenuItemList

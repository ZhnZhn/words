import { bindTo } from '../../utils/bindTo';

import { safeMap, crOnClick } from '../uiApi';
import { crMenuItemRole } from '../a11yFn';

import {
  S_INLINE_BLOCK,
  crAbsoluteTopLeftStyle
} from '../styleFn';

const SUB_MENU = 'sub'
, S_ITEM = {
  position: 'relative'
}
, S_NEXT_PAGE = {
  ...S_INLINE_BLOCK,
  ...crAbsoluteTopLeftStyle(0, 4, !0),
  color: 'inherit',
  padding: '1px 16px 1px 0px',
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
       type
     } = item
     , _onClick = type === SUB_MENU
        ? bindTo(onNextPage, item.id, name, pageNumber)
        : crOnClick(item.onClick, onClose, item.isClose);
     return (<div
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

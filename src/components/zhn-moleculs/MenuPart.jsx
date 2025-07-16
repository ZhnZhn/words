//import PropTypes from 'prop-types'
import { isFn } from '../../utils/isTypeFn';
import { bindTo } from '../../utils/bindTo';

import { isKeyEnter } from '../hooks/fUseKey';
import OpenClose from '../zhn/OpenClose';

const CL_ROW_ITEM = "row__item not-selected";
const _assign = Object.assign;

const _hKeyDown = (onClick, evt) => {
  if (isFn(onClick) && isKeyEnter(evt)) {
    onClick()
  }
};

const _renderMenuItems = function(option){
  const {
    items=[],
    hmItems={},
    onClickItem,
    ...restOption
  } = option;
  return items.map((item, index) => {
    const _itemConf = hmItems[item.id]
    , { menuTitle} = _itemConf;

    _assign(_itemConf, restOption)
    const _onClick = isFn(onClickItem)
       ? bindTo(onClickItem, _itemConf)
       : void 0;
    return (
       <div
         key={index}
         role="menuitem"
         tabIndex="0"
         className={CL_ROW_ITEM}
         onClick={_onClick}
         onKeyDown={bindTo(_hKeyDown, _onClick)}
        >
          {menuTitle}
       </div>
    )
  })
}

const MenuPart = ({
  isInitClose,
  caption,
  ...restProps
}) => (
  <OpenClose
     caption={caption}
     isClose={isInitClose}
  >
     {_renderMenuItems(restProps)}
  </OpenClose>
)
/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/

export default MenuPart

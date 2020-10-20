//import PropTypes from 'prop-types'

import isKeyEnter from '../zhn-atoms/isKeyEnter'
import OpenClose from '../zhn-atoms/OpenClose'

const CL_NOT_S = 'not-selected';

const _isFn = fn => typeof fn === 'function';

const _hKeyDown = (onClick, evt) => {
  if (_isFn(onClick) && isKeyEnter(evt)) {
    onClick()
  }
};

const _renderMenuItems = function(TS, option){
  const {
    items=[],
    hmItems={},
    onClickItem,
    ...restOption
  } = option;
  return items.map((item, index) => {
    const _className = TS.CL_ROW
      ? `${TS.CL_ROW} ${CL_NOT_S}`
      :  CL_NOT_S
    , _itemConf = hmItems[item.id]
    , { menuTitle} = _itemConf;

    Object.assign(_itemConf, restOption)
    const _onClick = _isFn(onClickItem)
       ? onClickItem.bind(null, _itemConf)
       : void 0;
    return (
       <div
         key={index}
         role="menuitem"
         tabIndex="0"
         className={_className}
         onClick={_onClick}
         onKeyDown={_hKeyDown.bind(null, _onClick)}
        >
          {menuTitle}
       </div>
    )
  })
}

const MenuPart = ({
  styleConfig:TS,
  caption, isInitClose, ...restProps
}) => (
  <OpenClose
     style={TS.OPEN_CLOSE}
     caption={caption}
     isClose={isInitClose}
     itemStyle={TS.ITEM}
  >
     {_renderMenuItems(TS, restProps)}
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

import React from 'react'

import ModalPane from '../zhn-moleculs/ModalPane'
import ShowHide from '../zhn-atoms/ShowHide'

const S = {
  BT: {
    display: 'block',
    width: '100%',
    textAlign: 'left'
  },
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: '20',
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
    color: '#80c040'
  }
};

const _renderOptions = (
  options, currentItem,
  clItem, itemStyle,
  onSelect, isShow
) => {
  return options.map(item => {
    const _style = (item.value === currentItem.value)
             ? S.ITEM
             : void 0;
    return (
      <button
        key={item.caption}
        className={clItem}
        style={{ ...S.BT, ...itemStyle, ..._style }}
        onClick={onSelect.bind(null, item)}
      >
        {item.caption}
      </button>
    );
  })
}

const OptionsPane = ({
  isShow, rootStyle, options, item,
  clItem, itemStyle,
  onSelect, onClose
}) => (
  <ModalPane
     style={rootStyle}
     isShow={isShow}
     onClose={onClose}
  >
    <ShowHide
       isShow={isShow}
       style={{ ...S.PANE, ...rootStyle }}
    >
      {
       _renderOptions(
          options, item,
          clItem, itemStyle,
          onSelect, isShow
        )
      }
    </ShowHide>
  </ModalPane>
);

  export default OptionsPane

import { bindTo } from '../uiApi';

import ModalPane from '../zhn-moleculs/ModalPane';
import ShowHide from '../zhn-atoms/ShowHide';

const CL_SELECT_OPTIONS = "m-select__options"
, S_BT = {
  display: 'block',
  width: '100%',
  textAlign: 'left'
}
, S_ITEM = {
  color: '#80c040'
};

const OptionsStack = ({
  options,
  currentCaption,
  currentValue,
  clItem,
  itemStyle,
  onSelect
}) => (options || []).map(item => {
  const {
    caption,
    value
  } = item || {}
  , _style = value === currentValue && caption === currentCaption
      ? S_ITEM
      : void 0;
  return (
    <button
      key={caption}
      className={clItem}
      style={{...S_BT, ...itemStyle, ..._style}}
      onClick={bindTo(onSelect, item)}
    >
      {caption}
    </button>
  );
})

const OptionsPane = ({
  isShow,
  rootStyle,
  options,
  item,
  clItem,
  itemStyle,
  onSelect,
  onClose
}) => {
  const {
    caption,
    value
  } = item || {};
  return (
  <ModalPane
     style={rootStyle}
     isShow={isShow}
     onClose={onClose}
  >
    <ShowHide
       isShow={isShow}
       className={CL_SELECT_OPTIONS}
       style={rootStyle}
    >
      <OptionsStack
        options={options}
        currentCaption={caption}
        currentValue={value}
        clItem={clItem}
        itemStyle={itemStyle}
        onSelect={onSelect}
      />
    </ShowHide>
  </ModalPane>
  );
}

  export default OptionsPane

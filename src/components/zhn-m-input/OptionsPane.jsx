import ModalPane from '../zhn-moleculs/ModalPane';
import ShowHide from '../zhn-atoms/ShowHide';

const S_BT = {
  display: 'block',
  width: '100%',
  textAlign: 'left'
}
, S_PANE = {
  position: 'absolute',
  top: 12,
  zIndex: '20',
  width: '100%',
  paddingTop: 12,
  paddingBottom: 12,
  backgroundColor: 'rgb(77, 77, 77)',
  borderRadius: 2,
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
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
      onClick={onSelect.bind(null, item)}
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
       style={{...S_PANE, ...rootStyle}}
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

import { CL_BT_FLAT_DIV } from '../styleFn';
import { useEffectSyncRef } from '../hooks/useFocus';

import InputSelect from '../zhn-m-input/InputSelect';
import InputSwitch from '../zhn/InputSwitch';
import FlatButton from '../zhn/FlatButton';

const S_INPUT_SELECT = {
  width: 288
}
, S_SWITCH = {
  padding: '28px 34px 0 23px'
};

const CardUi = ({
  isSelected,
  style,
  buttonsStyle,
  uiThemeOptions,
  dfUiThemeItem,
  setRefFocusLast,
  onSetTheme,
  onCheckAutoSave,
  onUncheckAutoSave,
  onClose
}) => {
  const _refBtClose = useEffectSyncRef(
    isSelected,
    setRefFocusLast
  );
  return (
    <div style={style}>
      <InputSelect
        id="ui-th"
        style={S_INPUT_SELECT}
        caption="UI Theme"
        initItem={dfUiThemeItem}
        options={uiThemeOptions}
        onSelect={onSetTheme}
      />
      <InputSwitch
        initialValue={true}
        style={S_SWITCH}
        onCheck={onCheckAutoSave}
        onUnCheck={onUncheckAutoSave}
        caption="AutoSave on Add to Watch List"
      />
      <div style={buttonsStyle}>
        <FlatButton
          refBt={_refBtClose}
          clDiv={CL_BT_FLAT_DIV}
          caption="Close"
          title="Close Dialog"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default CardUi

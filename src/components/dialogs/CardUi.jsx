//import PropTypes from "prop-types";
import InputSelect from '../zhn-m-input/InputSelect';
import InputSwitch from '../zhn-atoms/InputSwitch';
import FlatButton from '../zhn-atoms/FlatButton';

const CL_DIV = 'bt-flat__div'
, S_SELECT = {
  ROOT: { width: 280 }
}
, S_CHB_ROW = {
  paddingTop: 28,
  paddingLeft: 22
}
, THEME_OPTIONS = [
  { caption: 'Grey', value: 'GREY' },
  { caption: 'Sand', value: 'SAND' },
  { caption: 'White', value: 'WHITE' }
]
, DF_THEME = THEME_OPTIONS[0];

const CardUi = ({
  style,
  buttonsStyle,
  onSetTheme,
  onCheckAutoSave,
  onUncheckAutoSave,
  onClose
}) => (
  <div style={style}>
    <InputSelect
      id="ui-th"
      styleConfig={S_SELECT}
      caption="Theme (Default: Grey)"
      initItem={DF_THEME}
      options={THEME_OPTIONS}
      onSelect={onSetTheme}
    />
    <InputSwitch
      initialValue={true}
      style={S_CHB_ROW}
      onCheck={onCheckAutoSave}
      onUnCheck={onUncheckAutoSave}
      caption="AutoSave on Add to Watch List"
    />
    <div style={buttonsStyle}>
      <FlatButton
        clDiv={CL_DIV}
        caption="Close"
        title="Close Dialog"
        onClick={onClose}
      />
    </div>
  </div>
)

/*
CardUi.propTypes = {
  style: PropTypes.object,
  buttonsStyle: PropTypes.object,
  onSetTheme: PropTypes.func,
  onCheckAutoSave: PropTypes.func,
  onUncheckAutoSave: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default CardUi

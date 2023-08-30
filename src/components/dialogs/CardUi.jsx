//import PropTypes from "prop-types";
import InputSelect from '../zhn-m-input/InputSelect';
import SvgCheckBox from '../zhn-atoms/SvgCheckBox';
import FlatButton from '../zhn-atoms/FlatButton';

const CL_DIV = 'bt-flat__div';

const S_SELECT = {
  ROOT: { width: 280 }
}
, S_CHB_ROW = {
  paddingTop: 28,
  paddingLeft: 22
}
, S_TEXT = {
  display: 'inline-block',
  paddingLeft: 8,
  fontWeight: 'bold',
  userSelect: 'none'
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
  chbStroke,
  onSetTheme,
  onCheckAutoSave,
  onUncheckAutoSave,
  onClose
}) => (
  <div style={style}>
    <InputSelect
      styleConfig={S_SELECT}
      caption="Theme (Default: Grey)"
      initItem={DF_THEME}
      options={THEME_OPTIONS}
      onSelect={onSetTheme}
    />
    <div style={S_CHB_ROW}>
      <SvgCheckBox
        initialValue={true}
        stroke={chbStroke}
        onCheck={onCheckAutoSave}
        onUnCheck={onUncheckAutoSave}
      />
      <span style={S_TEXT}>AutoSave on Add to Watch List</span>
    </div>
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
  btStyle: PropTypes.object,
  onSetTheme: PropTypes.func,
  onCheckAutoSave: PropTypes.func,
  onUncheckAutoSave: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default CardUi

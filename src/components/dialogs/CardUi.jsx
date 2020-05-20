import React from 'react'
//import PropTypes from "prop-types";

import Comp from '../Comp'

const {
  InputSelect,
  SvgCheckBox,
  FlatButton
} = Comp;

const CL_DIV = 'bt-flat__div';

const S = {
  SELECT: {
    ROOT: {
      width: 280
    }
  },
  CHB_ROW: {
    paddingTop: 28,
    paddingLeft: 22
  },
  TEXT: {
    display: 'inline-block',
    paddingLeft: 8,
    fontWeight: 'bold',
    userSelect: 'none'
  }
};

const THEME_OPTIONS = [
  { caption: 'Grey', value: 'GREY' },
  { caption: 'Sand', value: 'SAND' },
  { caption: 'White', value: 'WHITE' }
],
DF_THEME = THEME_OPTIONS[0];

const CardUi = ({
  style,
  buttonsStyle, btStyle,
  chbStroke,
  onSetTheme,
  onCheckAutoSave, onUncheckAutoSave,
  onClose
}) => (
  <div style={style}>
    <InputSelect
      styleConfig={S.SELECT}
      caption="Theme (Default: Grey)"
      initItem={DF_THEME}
      options={THEME_OPTIONS}
      onSelect={onSetTheme}
    />
    <div style={S.CHB_ROW}>
      <SvgCheckBox
        initialValue={true}
        stroke={chbStroke}
        onCheck={onCheckAutoSave}
        onUnCheck={onUncheckAutoSave}
      />
      <span style={S.TEXT}>AutoSave on Add to Watch List</span>
    </div>
    <div style={buttonsStyle}>
      <FlatButton
        rootStyle={btStyle}
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

import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import Actions from '../../flux/actions/ComponentActions'

import ModalDialog from '../zhn-moleculs/ModalDialog'
import RaisedButton from '../zhn-atoms/RaisedButton'
import SecretField from '../zhn-m-input/SecretField'
import InputSelect from '../zhn-m-input/InputSelect'


const THEME_OPTIONS = [
  { caption: "Dark", value: "GREY" },
  { caption: "White", value: "WHITE" },
  { caption: "Sand", value: "SAND" }
];
const DF_THEME = THEME_OPTIONS[0];

const S = {
  MODAL: {
    position : 'static',
    width: '315px',
    height: '230px',
    margin: '70px auto 0px'
  }
};

class SettingsDialog extends Component {

  constructor(props){
    super()
    const { data } = props;
    this._setKey1 = data.key1
  }

  _hSelectTheme = (item) => {
    const { theme } = this.props;
    if (
        item &&
        theme.getThemeName() !== item.value
    ) {
      theme.setThemeName(item.value)
      Actions.changeTheme()
      //this.forceUpdate()
    }
  }

  _hSetAndClose = () => {
     const { onClose } = this.props
     this._setKey1(this.iComp1.getValue())
     onClose()
  }

  _crCommandButtons = (S) => {
    return [
      <RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="SET & CLOSE"
        onClick={this._hSetAndClose}
      />
    ];
  }

  _ref1 = (n) => this.iComp1 = n

  render(){
    const {
            theme,
            isShow,
            //data,
            onClose
          } = this.props
        , TS = theme.createStyle(styleConfig)
        , _commandButtons = this._crCommandButtons(TS.BT);

    return (
      <ModalDialog
         STYLE={TS.BT}
         style={{ ...S.MODAL, ...TS.R_DIALOG }}
         caption="User Settings"
         captionStyle={TS.BROWSER_CAPTION}
         isShow={isShow}
         commandButtons={_commandButtons}
         onClose={onClose}
      >
        <SecretField
           rootStyle={TS.INPUT_ROOT}
           ref={this._ref1}
           caption="Words API Key *"
           maxLength="50"
        />
        <InputSelect
           styleConfig={TS.SELECT}
           caption="Theme (Default: Dark)"
           initItem={DF_THEME}
           options={THEME_OPTIONS}
           onSelect={this._hSelectTheme}
        />
      </ModalDialog>
    );
  }
}

export default withTheme(SettingsDialog)

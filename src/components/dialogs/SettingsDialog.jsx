import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import Actions from '../../flux/actions/ComponentActions'

import A from '../Comp'

import CardApiKey from './CardApiKey'
import CardUi from './CardUi'

const S = {
  MODAL: {
    position : 'static',
    width: 350,
    height: 290,
    margin: '70px auto 0px'
  },
  CARD_ROOT: {
    position: 'relative',
    height: 200
  },
  CARD_BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  }
};

class SettingsDialog extends Component {

  constructor(props){
    super(props)
    const { data } = props;
    this._setKey1 = data.key1
  }

  _hSelectTheme = (item) => {
    const { theme } = this.props;
    if (
        item &&
        theme.getThemeName() !== item.value
    ) {
      Actions.changeTheme(item.value)
    }
  }

  _hSetAndClose = () => {
     const { onClose } = this.props
     this._setKey1(this.iComp1.getValue())
     onClose()
  }


  _ref1 = (n) => this.iComp1 = n

  render(){
    const {
            theme,
            isShow,
            //data,
            onClose
          } = this.props
        , TS = theme.createStyle(styleConfig);

    return (
      <A.ModalDialog
         className=""
         STYLE={TS.BT}
         style={{ ...S.MODAL, ...TS.R_DIALOG }}
         caption="User Settings"
         captionStyle={TS.BROWSER_CAPTION}
         isShow={isShow}
         isWithButton={false}
         onClose={onClose}
      >
        <A.TabPane width="100%">
          <A.Tab title="API Key" style={TS.TAB}>
             <CardApiKey
               ref={this._ref1}
               style={S.CARD_ROOT}
               buttonsStyle={S.CARD_BUTTONS}
               btStyle={TS.BT.FLAT_ROOT}
               onSet={this._hSetAndClose}
               onClose={onClose}
             />
          </A.Tab>
          <A.Tab title="UI Theme" style={TS.TAB}>
             <CardUi
               style={S.CARD_ROOT}
               buttonsStyle={S.CARD_BUTTONS}
               btStyle={TS.BT.FLAT_ROOT}
               onSetTheme={this._hSelectTheme}
               onClose={onClose}
             />
          </A.Tab>
        </A.TabPane>
      </A.ModalDialog>
    );
  }
}

export default withTheme(SettingsDialog)

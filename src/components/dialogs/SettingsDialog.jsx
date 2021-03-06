import { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import Actions from '../../flux/actions/ComponentActions'
import SA from '../../flux/actions/SettingActions'

import A from '../Comp'

import CardApiKey from './CardApiKey'
import CardUi from './CardUi'

const S = {
  MODAL: {
    position : 'static',
    zIndex: 10,
    width: 350,
    height: 290,
    margin: '70px auto 0px',
    border: 'solid 2px #1b2836',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px'
  },
  TAB_PANE: {
     width: "100%"
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
        <A.TabPane style={S.TAB_PANE} >
          <A.Tab title="API Key" style={TS.TAB}>
             <CardApiKey
               ref={this._ref1}
               style={S.CARD_ROOT}
               buttonsStyle={S.CARD_BUTTONS}
               btStyle={TS.BT.FLAT_ROOT}
               isShow={isShow}
               onSet={this._hSetAndClose}
               onClose={onClose}
             />
          </A.Tab>
          <A.Tab title="UI Theme" style={TS.TAB}>
             <CardUi
               style={S.CARD_ROOT}
               buttonsStyle={S.CARD_BUTTONS}
               btStyle={TS.BT.FLAT_ROOT}
               chbStroke={TS.CHB_STROKE}
               onSetTheme={this._hSelectTheme}
               onCheckAutoSave={SA.checkAutoSave}
               onUncheckAutoSave={SA.uncheckAutoSave}
               onClose={onClose}
             />
          </A.Tab>
        </A.TabPane>
      </A.ModalDialog>
    );
  }
}

export default withTheme(SettingsDialog)

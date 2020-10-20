import { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import TextField from '../zhn-m-input/TextField'
import RaisedButton from '../zhn-atoms/RaisedButton'

import withKeyDown from './decorators/withKeyDown'

@withKeyDown
class DialogType1 extends Component {
  constructor(props){
    super(props)
    this._handleKeyDownWith = this._handleKeyDownWith.bind(this)
  }


  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props
        , _symbol = this.inputSymbol.getValue();

    onLoad({
      type, source, itemConf,
      symbol: _symbol,
    })
  }

  _handleClose = () => {
    this.dialogComp.focusPrevEl()
    this.props.onClose()
  }

  _createCommandButtons = (TS) => {
    return [
      <RaisedButton
        key="_load"
        rootStyle={TS.RAISED_ROOT}
        clDiv={TS.CL_RAISED_DIV}
        caption="Load"
        isPrimary={true}
        onClick={this._handleLoad}
      />
    ];
  }

  _refDialogComp = comp => this.dialogComp = comp
  _refInputWord = comp => this.inputSymbol = comp

  render(){
    const {
            theme,
            isShow, caption,
            onShow
          } = this.props
         , TS = theme.createStyle(styleConfig)
         , _commandButtons = this._createCommandButtons(TS.BT);


    return (
      <DraggableDialog
           ref={this._refDialogComp}
           rootStyle={TS.R_DIALOG}
           browserCaptionStyle={TS.BROWSER_CAPTION}
           styleButton={TS.BT}
           caption={caption}
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
         <TextField
           ref={this._refInputWord}
           rootStyle={TS.INPUT_ROOT}
           caption="Word (Default: Example)"
           initValue="Example"
         />
      </DraggableDialog>
    );
  }
}

export default withTheme(DialogType1)

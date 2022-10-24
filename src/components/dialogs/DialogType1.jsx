import { Component } from '../uiApi';

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import TextField from '../zhn-m-input/TextField'
import RaisedButton from '../zhn-atoms/RaisedButton'

class DialogType1 extends Component {
  _handleLoad = () => {
    const {
      type,
      source,
      itemConf,
      onLoad
    } = this.props;

    onLoad({
      type,
      source,
      itemConf,
      symbol: this.inputSymbol.getValue()
    })
  }

  _handleClose = () => {
    this.dialogComp.focusPrevEl()
    this.props.onClose()
  }

  _handleKeyDown = (event) => {
    if (event.keyCode === 13){
      this._handleLoad()
    } else if (event.keyCode === 27){
      this._handleClose()
    }
  }

  _createCommandButtons = (TS) => {
    return [
      <RaisedButton
        key="_load"
        style={TS.RAISED_ROOT}
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
      isShow,
      caption,
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
           onKeyDown={this._handleKeyDown}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
         <TextField
           ref={this._refInputWord}
           rootStyle={TS.INPUT_ROOT}
           caption="Word (Default: Example)"
           initialValue="Example"
         />
      </DraggableDialog>
    );
  }
}

export default withTheme(DialogType1)

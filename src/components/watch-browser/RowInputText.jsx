//import PropTypes from "prop-types";
import { Component } from '../uiApi';

import TextField from '../zhn-m-input/TextField';

const MAX_LENGTH = 24
, S_INPUT_TEXT = {
  width: 250
};

class RowInputText extends Component {
  /*
  static propTypes = {
    caption: PropTypes.string
  }
  */
  _refInputText = c => this.inputText = c

  render(){
    const { caption } = this.props;
    return (
      <TextField
        ref={this._refInputText}
        rootStyle={S_INPUT_TEXT}
        caption={caption}
        maxLength={MAX_LENGTH}
      />
    );
  }

  getValue(){
    return this.inputText.getValue().trim();
  }
  setValue(value){
    this.inputText.setValue(value)
  }
}

export default RowInputText

import React, { Component, Fragment } from 'react'

import A from '../zhn-atoms/Atoms'
import TextField from '../zhn-m-input/TextField'

const S = {
  TF_LABEL: {
    top: '28px'
  },
  TF_INPUT: {
    fontSize: '24px'
  }
};

class InputWord extends Component {

  componentDidMount(){
    if (this.iWord) {
      this.iWord.focus()
    }
  }

  _ref = n => this.iWord = n

  render(){
    const { TS, onEnter } = this.props;
    return (
      <Fragment>
        <TextField
          ref={this._ref}
          rootStyle={TS.INPUT_ROOT}
          labelStyle={S.TF_LABEL}
          inputStyle={S.TF_INPUT}
          caption="Word"
          accessKey="W"
          spellCheck={true}
          initValue="example"
          onEnter={onEnter}
        />
        <A.RaisedButton
          rootStyle={TS.BT.RAISED_ROOT}
          clDiv={TS.BT.CL_RAISED_DIV}
          caption="Load"
          tabIndex={-1}
          //timeout={3000}
          isPrimary={true}
          onClick={onEnter}
        />
      </Fragment>
    );
  }

  getValue(){
    return this.iWord
      ? this.iWord.getValue()
      : undefined;
  }
}

export default InputWord

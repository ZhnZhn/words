import React, { Component } from 'react'

import has from '../has'

import A from '../Comp'

const S = {
  TF_LABEL: {
    top: 28
  },
  TF_INPUT: {
    fontSize: '24px'
  },
  BT_CLEAR: {
    position: 'relative',
    top: 18,
    left: 6
  }
};

class InputWord extends Component {

  static defaultProps = {
    initValue: 'example'
  }

  componentDidMount(){
    if (this.iWord) {
      this.iWord.focus()
    }
  }

  _hClear = () => {
    if (this.iWord) {
      this.iWord.setValue('')
    }
  }


  _ref = n => this.iWord = n

  render(){
    const {
        TS,
        initValue,
        onEnter
      } = this.props
    , _elBt = has.HAS_TOUCH
       ? (<A.ButtonClear
           style={S.BT_CLEAR}
           onClick={this._hClear}
         />)
      :  (<A.RaisedButton
            rootStyle={TS.BT.RAISED_ROOT}
            clDiv={TS.BT.CL_RAISED_DIV}
            caption="Load"
            tabIndex={-1}
            //timeout={3000}
            isPrimary={true}
            onClick={onEnter}
        />);
    return (
      <>
        <A.TextField
          ref={this._ref}
          rootStyle={TS.INPUT_ROOT}
          labelStyle={S.TF_LABEL}
          inputStyle={S.TF_INPUT}
          caption="Word"
          accessKey="W"
          spellCheck={true}
          initValue={initValue}
          onEnter={onEnter}
        />
        {_elBt}
      </>
    );
  }

  getValue(){
    return this.iWord
      ? this.iWord.getValue()
      : undefined;
  }
}

export default InputWord

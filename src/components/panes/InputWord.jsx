import { Component } from 'react'

import has from '../has'

import Comp from '../Comp'

const {
  ButtonClear,
  FlatButton,
  TextField
} = Comp;

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
  },
  BT_LOAD: {
    position: 'relative',
    top: 22,
    marginLeft: 8
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
       ? (<ButtonClear
           style={S.BT_CLEAR}
           onClick={this._hClear}
         />)
       : (<FlatButton
            caption="Load"
            tabIndex={-1}
            rootStyle={{ ...TS.BT.FLAT, ...S.BT_LOAD}}
            clDiv={TS.BT.CL_FLAT_DIV}
            isPrimary={true}
            onClick={onEnter}
          />);

    return (
      <>
        <TextField
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
      : void 0;
  }
}

export default InputWord

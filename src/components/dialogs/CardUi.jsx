import React, { Component } from 'react'

import InputSelect from '../zhn-m-input/InputSelect'
import FlatButton from '../zhn-atoms/FlatButton'

const CL_DIV = 'bt-flat__div';

const S = {
  SELECT: {
    ROOT: {
      width: '280px'
    }
  },
  BT_ROOT: {
    color: 'rgb(35, 47, 59)'
  }
};

const DF_THEME = { caption: 'Grey', value: 'GREY' };
const _themeOptions = [
  { caption: 'Grey', value: 'GREY' },
  { caption: 'Sand', value: 'SAND' },
  { caption: 'White', value: 'WHITE' }
];

class CardUi extends Component {
  render(){
    const {
             style,
             buttonsStyle, btStyle,
             onSetTheme, onClose
           } = this.props
    return (
      <div style={style}>
        <InputSelect
          styleConfig={S.SELECT}
          caption="Theme (Default: Grey)"
          initItem={DF_THEME}
          options={_themeOptions}
          onSelect={onSetTheme}
        />
        <div style={buttonsStyle}>
          <FlatButton
            rootStyle={{ ...S.BT_ROOT, ...btStyle }}
            clDiv={CL_DIV}
            caption="Close"
            title="Close Dialog"
            onClick={onClose}
          />
        </div>
      </div>
    );
  }
}

export default CardUi

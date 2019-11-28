import React, { Component } from 'react'
//import PropTypes from "prop-types";

import SecretField from '../zhn-m-input/SecretField'
import FlatButton from '../zhn-atoms/FlatButton'

const CL_DIV = 'bt-flat__div';

const S  = {
  ROOT: {
    position: 'relative',
    height: 200
  },
  SECRET: {
    width: 320,
    marginLeft: 12
  },
  BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  },
  BT_ROOT: {
    color: 'rgb(35, 47, 59)'
  }
};

class CardApiKey extends Component {

  /*
  static propTypes = {
    style: PropTypes.object,
    buttonsStyle: PropTypes.object,
    btStyle: PropTypes.object,
    onClose: PropTypes.func,
    onSet: PropTypes.func
  }
  */

  _refInput = c => this._input = c

  render(){
    const {
      style,
      buttonsStyle, btStyle,
      onClose, onSet
    } = this.props;
    return(
      <div style={style}>
        <form>
          <SecretField
            ref={this._refInput}
            rootStyle={S.SECRET}
            caption="Words API Key"
            name="wordsapi"
            maxLength="50"
            onEnter={onSet}
          />
        </form>
        <div style={buttonsStyle}>
          <FlatButton
            rootStyle={{ ...S.BT_ROOT, ...btStyle }}
            clDiv={CL_DIV}
            caption="Set & Close"
            title="Set & Close Dialog"
            onClick={onSet}
          />
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

  getValue(){
    return this._input.getValue();
  }
}

export default CardApiKey

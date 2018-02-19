import React from 'react'

import A from '../zhn-atoms/Atoms'

const S = {
  ROOT: {
    height: '60px',
    marginTop: '-10px'
  },
  SPAN: {
    position: 'relative',
    top: '16px',
    fontWeight: 'bold',
    paddingLeft: '16px'
 }
}

const InputRandom = ({ TS, onEnter }) =>
  <div style={S.ROOT}>
    <span style={S.SPAN}>
      Random Word
    </span>
    <A.RaisedButton
      rootStyle={TS.BT.RAISED_ROOT}
      clDiv={TS.BT.CL_RAISED_DIV}
      caption="Load"
      isPrimary={true}
      onClick={onEnter}
    />
  </div>

export default InputRandom

import React from 'react'

import A from '../zhn-atoms/Atoms'

const S = {
  ROOT: {
    height: 60,
    marginTop: -10
  },
  SPAN: {
    position: 'relative',
    top: 16,
    paddingLeft: 16,
    fontWeight: 'bold'
 }
}

const InputRandom = ({ TS, onEnter }) => (
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
)

export default InputRandom

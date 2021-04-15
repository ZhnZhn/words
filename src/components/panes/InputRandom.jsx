import { forwardRef } from 'react';

import A from '../zhn-atoms/Atoms';

const S = {
  ROOT: {
    height: 60,
    paddingTop: 8,
  },
  SPAN: {
    paddingLeft: 16,
    fontWeight: 'bold'
 },
 BT: {
   marginLeft: 8
 }
};

const InputRandom = forwardRef(({ TS, onEnter }, ref) => (
  <div style={S.ROOT}>
    <span style={S.SPAN}>
      Random Word
    </span>
    <A.FlatButton
      rootStyle={{...TS.BT.FLAT, ...S.BT}}
      clDiv={TS.BT.CL_FLAT_DIV}
      caption="Load"
      onClick={onEnter}
    />
  </div>
));

export default InputRandom

import A from '../zhn-atoms/Atoms';

const S_DIV = {
  height: 60,
  paddingTop: 8,
}
, S_SPAN = {
  paddingLeft: 16,
  fontWeight: 'bold'
}
, S_BT = {
  marginLeft: 8
};

const InputRandom = ({
  TS,
  onEnter
}) => (
  <div style={S_DIV}>
    <span style={S_SPAN}>
      Random Word
    </span>
    <A.FlatButton
      rootStyle={{...TS.BT.FLAT, ...S_BT}}
      clDiv={TS.BT.CL_FLAT_DIV}
      caption="Load"
      onClick={onEnter}
    />
  </div>
);

export default InputRandom

import { CL_BT_FLAT_DIV } from '../styleFn';
import FlatButton from '../zhn/FlatButton';

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
  onEnter
}) => (
  <div style={S_DIV}>
    <span style={S_SPAN}>
      Random Word
    </span>
    <FlatButton
      rootStyle={S_BT}
      clDiv={CL_BT_FLAT_DIV}
      caption="Load"
      onClick={onEnter}
    />
  </div>
);

export default InputRandom

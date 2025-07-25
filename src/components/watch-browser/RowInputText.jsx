import TextField from '../zhn-m-input/TextField';

const MAX_LENGTH = 24
, S_INPUT_TEXT = {
  width: 250,
  height: 38,
  marginBottom: 30
}
, S_TF_LINE = {
  bottom: 4
};

const RowInputText = ({
  refEl,
  caption
}) => (
  <TextField
    refEl={refEl}
    caption={caption}
    rootStyle={S_INPUT_TEXT}
    lineStyle={S_TF_LINE}
    maxLength={MAX_LENGTH}
  />
);

export default RowInputText

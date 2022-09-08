import {
  forwardRef
} from '../uiApi';

import TextField from '../zhn-m-input/TextField';

const MAX_LENGTH = 24
, S_INPUT_TEXT = {
  width: 250
};

const RowInputText = forwardRef(({
  caption
}, ref) => (
  <TextField
    ref={ref}
    caption={caption}
    rootStyle={S_INPUT_TEXT}
    maxLength={MAX_LENGTH}
  />
));


export default RowInputText

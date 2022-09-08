import {
  forwardRef,
  useRef,
  useImperativeHandle,
  getRefValue,
  getRefInputValue
} from '../uiApi';

import TextField from '../zhn-m-input/TextField';

const MAX_LENGTH = 24
, S_INPUT_TEXT = {
  width: 250
};

const RowInputText = forwardRef(({
  caption
}, ref) => {
  const _refInput = useRef();

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const _value = getRefInputValue(_refInput);
      return _value
        ? _value.trim()
        : _value;
    },
    setValue: (value) => {
      const _elInput = getRefValue(_refInput);
      if (_elInput) {
        _elInput.setValue('' + value)
      }
    }
  }))

  return (
    <TextField
      ref={_refInput}
      caption={caption}
      rootStyle={S_INPUT_TEXT}
      maxLength={MAX_LENGTH}
    />
  );
});

export default RowInputText

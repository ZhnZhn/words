import {
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  getRefValue,
  focusRefElement,
  getRefInputValue
} from '../uiApi';

import { HAS_TOUCH_EVENTS } from '../has';
import { CL_BT_FLAT_DIV } from '../styleFn';

import TextField from '../zhn-m-input/TextField';
import ButtonClear from '../zhn/ButtonClear';
import FlatButton from '../zhn/FlatButton';

import { INITIAL_WORD } from './wordConfig';

const S_INPUT_ROOT = {
  width: 250,
  height: 38,
  marginLeft: 8,
  marginBottom: 30
}
, S_TF_LABEL = {
  top: 28
}
, S_TF_INPUT = {
  fontSize: '24px'
}
, S_TF_LINE = {
  bottom: 4
}
, S_BT_CLEAR = {
  position: 'relative',
  top: 24,
  left: 6
}
, S_BT_LOAD = {
  position: 'relative',
  top: 22,
  marginLeft: 8
};

const InputWord = ({
  refEl,
  initValue=INITIAL_WORD,
  onEnter
}) => {
  const _refTextField = useRef()
  , _hClear = useCallback(() => {
     const _tfInst = getRefValue(_refTextField);
     if (_tfInst) {
       _tfInst.setValue('')
     }
  }, []);

  useEffect(() => {
    focusRefElement(_refTextField)
  }, [])

  useImperativeHandle(refEl, () => ({
    getValue: () => getRefInputValue(_refTextField)
  }), [])

  return (
    <>
      <TextField
        refEl={_refTextField}
        rootStyle={S_INPUT_ROOT}
        labelStyle={S_TF_LABEL}
        inputStyle={S_TF_INPUT}
        lineStyle={S_TF_LINE}
        caption="Word"
        accessKey="W"
        spellCheck={true}
        initialValue={initValue}
        onEnter={onEnter}
      />
      { HAS_TOUCH_EVENTS
           ? (<ButtonClear
               style={S_BT_CLEAR}
               onClick={_hClear}
             />)
           : (<FlatButton
                caption="Load"
                tabIndex={-1}
                rootStyle={S_BT_LOAD}
                clDiv={CL_BT_FLAT_DIV}
                isPrimary={true}
                onClick={onEnter}
              />)
        }
    </>
  );
}

export default InputWord

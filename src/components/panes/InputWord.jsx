import {
  forwardRef,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  getRefValue,
  focusRefElement,
  getRefInputValue
} from '../uiApi';

import { HAS_TOUCH } from '../has';
import A from '../Comp';

const S_TF_LABEL = {
  top: 28
}
, S_TF_INPUT = {
  fontSize: '24px'
}
, S_BT_CLEAR = {
  position: 'relative',
  top: 18,
  left: 6
}
, S_BT_LOAD = {
  position: 'relative',
  top: 22,
  marginLeft: 8
};

const DF_INITIAL_VALUE = 'example';

const InputWord = forwardRef(({
  initValue=DF_INITIAL_VALUE,
  TS,
  onEnter
}, ref) => {
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

  useImperativeHandle(ref, () => ({
    getValue: () => getRefInputValue(_refTextField)
  }), [])

  return (
    <>
      <A.TextField
        ref={_refTextField}
        rootStyle={TS.INPUT_ROOT}
        labelStyle={S_TF_LABEL}
        inputStyle={S_TF_INPUT}
        caption="Word"
        accessKey="W"
        spellCheck={true}
        initialValue={initValue}
        onEnter={onEnter}
      />
      { HAS_TOUCH
           ? (<A.ButtonClear
               style={S_BT_CLEAR}
               onClick={_hClear}
             />)
           : (<A.FlatButton
                caption="Load"
                tabIndex={-1}
                rootStyle={{...TS.BT.FLAT, ...S_BT_LOAD}}
                clDiv={TS.BT.CL_FLAT_DIV}
                isPrimary={true}
                onClick={onEnter}
              />)
        }
    </>
  );
})

export default InputWord

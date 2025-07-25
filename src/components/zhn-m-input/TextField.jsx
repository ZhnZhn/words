import {
  useRef,
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
  getRefValue,
  focusRefElement
} from '../uiApi';

import { hasAccessKey } from '../has';
import { crUnderline } from '../styleFn';

import useBool from '../hooks/useBool';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, CL_INPUT = 'm-textfield-input'
, CL_INPUT_DIV = `${CL_INPUT}__div`
, M_INPUT = 'm-input'
, CL_INPUT_LINE = `${M_INPUT}__line`
, CL_INPUT_MSG_ERR = `${M_INPUT}__msg-err`
, CL_UNDERLINE = crUnderline("bt-4-after")

, S_LABEL_TO_INPUT = {
  transform: 'scale(1) translate(0px, -6px)'
}
, S_LABEL_ON_ERROR = {
  color: '#f44336'
}
, S_LINE_ERROR = {
  borderBottom: '2px solid #F44336'
};

const _crCaption = (
  caption,
  accessKey
) => {
  if (!hasAccessKey(accessKey)) {
    return { cPrefix: caption };
  }
  const keyIndex = caption.toLowerCase()
    .indexOf(accessKey.toLowerCase());
  if (keyIndex === -1){
    return { cPrefix: caption };
  }
  return {
    cPrefix: caption.substring(0, keyIndex),
    cKey: caption.substring(keyIndex, keyIndex+1),
    cTail: caption.substring(keyIndex+1)
  };
};

const DF_ON_TEST = () => true
, FN_NOOP = () => {};

const TextField = ({
  refEl,
  caption='',
  accessKey='',
  spellCheck=false,
  initialValue='',
  rootStyle,
  labelStyle,
  inputStyle,
  lineStyle,
  errorMsg='',
  maxLength=24,
  onTest=DF_ON_TEST,
  onEnter=FN_NOOP,
  ...restProps
}) => {
  const _refInput = useRef()
  , [
    isFocus,
    setFocused,
    setNotFocused
  ] = useBool()
  , [
    value,
    setValue
  ] = useState(initialValue)
  , _hInputChange = useCallback(evt => {
    setValue(evt.target.value)
  }, [])
  , _hKeyDown = useCallback(evt => {
     const { keyCode } = event;
     if (keyCode === 46){
       setValue('')
     } else if (keyCode === 13) {
       onEnter(event.target.value)
     }
  }, [onEnter])

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useImperativeHandle(refEl, () => ({
    getValue: () => {
      const _elInput = getRefValue(_refInput)
      , { value } = _elInput || {};
      return value
        ? value.trim()
        : void 0;
    },
    setValue: (value) => setValue(String(value)),
    focus: () => focusRefElement(_refInput)
  }), [])

  const _isPassTest = onTest(value)
  , _labelStyle = value || isFocus
      ? void 0
      : S_LABEL_TO_INPUT
  , [
    _labelErrStyle,
    _lineStyle
  ] = _isPassTest
    ? []
    : [S_LABEL_ON_ERROR, S_LINE_ERROR]
  , {
    cPrefix,
    cKey,
    cTail
  } = _crCaption(caption, accessKey);

  return (
    <div
      className={CL_SELECT}
      style={rootStyle}
    >
      <label
        className={CL_LABEL}
        style={{...labelStyle, ..._labelStyle, ..._labelErrStyle}}
       >
        {cPrefix}
        <span className={CL_UNDERLINE}>{cKey}</span>
        {cTail}
      </label>
      <div className={CL_INPUT_DIV}>
        <input
          ref={_refInput}
          type="text"
          className={CL_INPUT}
          style={inputStyle}
          value={value}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          translate="false"
          accessKey={accessKey}
          maxLength={maxLength}
          {...restProps}
          onFocus={setFocused}
          onBlur={setNotFocused}
          onChange={_hInputChange}
          onKeyDown={_hKeyDown}
        />
        <div className={CL_INPUT_LINE} style={{...lineStyle, ..._lineStyle}} />
        { _lineStyle && <div className={CL_INPUT_MSG_ERR}>{errorMsg}</div>}
      </div>
    </div>
  );
}

export default TextField

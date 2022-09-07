import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
  getRefValue,
  setRefValue
} from '../uiApi';

import useBool from '../hooks/useBool';
import useRerender from '../hooks/useRerender';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, CL_INPUT = 'm-textfield-input'
, CL_INPUT_DIV = `${CL_INPUT}__div`
, M_INPUT = 'm-input'
, CL_INPUT_LINE = `${M_INPUT}__line`
, CL_INPUT_MSG_ERR = `${M_INPUT}__msg-err`

const S_LABEL_TO_INPUT = {
  transform: 'scale(1) translate(0px, -6px)'
}
, S_LABEL_ON_ERROR = {
  color: '#f44336'
}
, S_LINE_ERROR = {
  borderBottom: '2px solid #f44336'
}
, S_LINE_AFTER_ENTER = {
  borderBottom: '2px solid greenyellow'
};

const _crId = ({
  name
}) => (name || 'pwd')
  + '_'
  + Math.random().toString(36).substr(2, 5);

const _isValue = (
  elInput
) => elInput
  ? !!elInput.value
  : false;

const FN_TRUE = () => true
, FN_NOOP = () => {}

const PasswordField = forwardRef((
  props,
  ref
) => {
  const _refInput = useRef()
  , _refWasEnter = useRef(false)
  , _id = useState(() => _crId(props))[0]
  , {
    rootStyle,
    caption,
    name,
    maxLength="32",
    errorMsg='',
    onTest=FN_TRUE,
    onEnter=FN_NOOP
  } = props
  , [
    value,
    setValue
  ] = useState('')
  , [
    isFocus,
    setFocused,
    setNotFocused
  ] = useBool()
  , rerender = useRerender()[1]
  , _hInputChange = useCallback(evt => {
    setValue(evt.target.value.trim())
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback(evt => {
    const { keyCode } = evt;
    if (keyCode === 46){
      setValue('')
    } else if (keyCode === 13) {
      evt.preventDefault()
      onEnter(event.target.value)
      setRefValue(_refWasEnter, true)
      rerender()
    }
  }, []);
  // onEnter, rerender
  /*eslint-enable react-hooks/exhaustive-deps */

  useImperativeHandle(ref, ()=>({
    getValue: () => {
      const _elInput = getRefValue(_refInput);
      return _elInput && _elInput.value;
    },
  }))

  useEffect(() => {
    const _clearId = setTimeout(()=>{
      const _input = getRefValue(_refInput);
      if (_input && _input.hasAttribute('value')) {
        _input.removeAttribute('value')
      }
    })
    return () => clearTimeout(_clearId);
  })
  useEffect(() => {
    if (getRefValue(_refWasEnter)){
      setRefValue(_refWasEnter, false)
    }
  })

  const _isPassTest = onTest(value)
  , _labelStyle = _isValue(getRefValue(_refInput)) || isFocus
      ? null
      : S_LABEL_TO_INPUT
  , _labelErrStyle = _isPassTest
      ? null
      : S_LABEL_ON_ERROR
  , _lineStyle = _isPassTest
      ? getRefValue(_refWasEnter)
           ? S_LINE_AFTER_ENTER
           : void 0
      : S_LINE_ERROR;

  return (
    <div
      className={CL_SELECT}
      style={rootStyle}
    >
      <label
        className={CL_LABEL}
        style={{..._labelStyle, ..._labelErrStyle}}
        htmlFor={_id}
       >
        {caption}
      </label>
      <div className={CL_INPUT_DIV}>
        <input
          hidden={true}
          autoComplete="username"
          value={name}
          readOnly={true}
        />
        <input
          ref={_refInput}
          id={_id}
          type="password"
          autoComplete="current-password"
          className={CL_INPUT}
          maxLength={maxLength}
          value={value}
          onChange={_hInputChange}
          onKeyDown={_hKeyDown}
          onFocus={setFocused}
          onBlur={setNotFocused}
        />
        <div className={CL_INPUT_LINE} style={_lineStyle} />
        {
           !_isPassTest && <div className={CL_INPUT_MSG_ERR}>
               {errorMsg}
             </div>
        }
      </div>
    </div>
  );
});

export default PasswordField

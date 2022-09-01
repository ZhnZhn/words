import {
  forwardRef,
  useRef,
  useImperativeHandle,
  getRefInputValue
} from '../uiApi';

import A from '../Comp';

const CL_DIV = 'bt-flat__div'
, S_PF = {
  width: 320,
  marginLeft: 12
}
, S_BT = {
  color: '#3270b4'
};

const CardApiKey = forwardRef(({
  isShow,
  isSelected,
  style,
  buttonsStyle,
  btStyle,
  onClose,
  onSet
}, ref) => {
  const _refInput = useRef()
  , _btStyle = {
    ...S_BT,
    ...btStyle
  };

  useImperativeHandle(ref, () => ({
    getValue: () => getRefInputValue(_refInput)
  }), [])

  return !(isShow && isSelected) ? null : (
    <div style={style}>
      <form>
        <A.PasswordField
          ref={_refInput}
          rootStyle={S_PF}
          caption="Words API Key"
          name="wordsapi"
          maxLength="50"
          onEnter={onSet}
        />
      </form>
      <div style={buttonsStyle}>
        <A.FlatButton
          rootStyle={_btStyle}
          clDiv={CL_DIV}
          caption="Set & Close"
          title="Set & Close Dialog"
          onClick={onSet}
        />
        <A.FlatButton
          rootStyle={_btStyle}
          clDiv={CL_DIV}
          caption="Close"
          title="Close Dialog"
          onClick={onClose}
        />
      </div>
    </div>
  );
});

export default CardApiKey

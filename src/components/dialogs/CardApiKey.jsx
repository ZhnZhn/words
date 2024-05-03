import {
  useRef,
  useImperativeHandle,
  getRefInputValue
} from '../uiApi';

import FlatButton from '../zhn-atoms/FlatButton';
import PasswordField from '../zhn-m-input/PasswordField';

const CL_DIV = 'bt-flat__div'
, S_PF = {
  width: 320,
  marginLeft: 12
};

const CardApiKey = ({
  refEl,
  isShow,
  isSelected,
  style,
  buttonsStyle,
  onClose,
  onSet
}) => {
  const _refInput = useRef();

  useImperativeHandle(refEl, () => ({
    getValue: () => getRefInputValue(_refInput)
  }), [])

  return isShow && isSelected ? (
    <div style={style}>
      <form>
        <PasswordField
          refEl={_refInput}
          rootStyle={S_PF}
          caption="Words API Key"
          name="wordsapi"
          maxLength="50"
          onEnter={onSet}
        />
      </form>
      <div style={buttonsStyle}>
        <FlatButton
          clDiv={CL_DIV}
          caption="Set & Close"
          title="Set & Close Dialog"
          onClick={onSet}
        />
        <FlatButton
          clDiv={CL_DIV}
          caption="Close"
          title="Close Dialog"
          onClick={onClose}
        />
      </div>
    </div>
  ) : null;
};

export default CardApiKey

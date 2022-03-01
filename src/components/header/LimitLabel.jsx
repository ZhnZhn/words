import { useState } from '../uiApi';
import useListen from '../hooks/useListen';

const S_LABEL = {
  position: 'relative',
  float: 'right',
  top: 9,
  display: 'inline-block',
  color:'#2f7ed8',
  paddingRight: 10,
  fontSize: '16px',
  fontWeight: 'bold'
};

const LimitLabel = ({
  style,
  ACTIONS,
  store
}) => {
  const [value, setValue] = useState('');

  useListen(store, (actionType, value) => {
    if (actionType === ACTIONS.LOADING_COMPLETE
      && !(value == null)) {
      setValue(value)
    }
  }, 'listenLoading')

  return (
    <span style={{...S_LABEL, ...style}}>
      {value}
    </span>
  );
};

export default LimitLabel

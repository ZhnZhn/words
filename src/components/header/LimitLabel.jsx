import { useState } from '../uiApi';

import {
  LPAT_LOADING_COMPLETE
} from '../../flux/actions/LoadingActions';
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
  store
}) => {
  const [
    value,
    setValue
  ] = useState('');

  useListen(store, (actionType, value) => {
    if (actionType === LPAT_LOADING_COMPLETE
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

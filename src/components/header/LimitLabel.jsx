import { useState } from '../uiApi';
import { useLimitRemaining } from '../../flux/itemStore';

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
  style
}) => {
  const [
    value,
    setValue
  ] = useState('');

  useLimitRemaining(limitRemaining => {
    if (limitRemaining != null) {
      setValue(limitRemaining)
    }
  })

  return (
    <span style={{...S_LABEL, ...style}}>
      {value}
    </span>
  );
};

export default LimitLabel

import { useState } from '../uiApi';

import isKeyEnter from './isKeyEnter';
import C from '../styles/Color';

const DF_COLOR_IS = "#2f7ed8"
, S_DIV = {
  display: 'inline-block',
  width: 16,
  height: 16,
  cursor: 'pointer'
}
, S_SVG = { display: 'inline-block' };


const SvgChecked = ({ stroke }) => (
  <path
     d="M 2,5 L 8,14 14,1"
     strokeWidth="2"
     strokeLinecap="round"
     stroke={stroke}
     fill={C.BLANK}
  />
);

const _isFn = fn => typeof fn === 'function';

const SvgCheckBox = ({
  initialValue,
  style,
  stroke,
  onCheck,
  onUnCheck
}) => {
  const [
    isChecked,
    setIsChecked
  ] = useState(() => !!initialValue)
  , _hClick = () => {
      if (!isChecked && _isFn(onCheck)){
        onCheck();
      } else if (_isFn(onUnCheck)){
        onUnCheck();
      }
      setIsChecked(v => !v)
    }
  , _hKeyDown = (evt) => {
      if (isKeyEnter(evt)){
        evt.preventDefault()
        _hClick()
      }
  }
  , _restProps = isChecked
      ? { stroke: DF_COLOR_IS, fill: DF_COLOR_IS}
      : { stroke: C.GREY, fill: C.BLANK };

  return (
    <div
       role="checkbox"
       tabIndex="0"
       aria-checked={isChecked}
       style={{...S_DIV, ...style}}
       onClick={_hClick}
       onKeyDown={_hKeyDown}
    >
      <svg
         viewBox="0 0 16 16"
         width="100%"
         height="100%"
         preserveAspectRatio="none"
         xmlns="http://www.w3.org/2000/svg"
         style={S_SVG}
      >
        <rect
           x="1" y="1"
           height="14" width="14"
           strokeWidth="2" rx="3"
           strokeLinecap="round"
           {..._restProps}
        />
        { isChecked
            ? <SvgChecked stroke={stroke} />
            : null
        }
      </svg>
    </div>
  );
};

export default SvgCheckBox

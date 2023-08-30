import { useState } from '../uiApi';

import C from '../styles/Color';
import isKeyEnter from './isKeyEnter';
import Svg100 from './svg/Svg100';

const DF_COLOR_IS = "#2f7ed8"
, S_DIV = {
  display: 'inline-block',
  width: 16,
  height: 16,
  cursor: 'pointer'
}
, S_SVG = { display: 'inline-block' };

const SvgChecked = ({
  stroke
}) => (
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
  className,
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
       className={className}
       style={{...S_DIV, ...style}}
       onClick={_hClick}
       onKeyDown={_hKeyDown}
    >
      <Svg100
         w="16"
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
      </Svg100>
    </div>
  );
};

export default SvgCheckBox

import { useState } from '../uiApi';
import { crCn } from '../styleFn';

const CL_DIV = "hrz-container";

const _isInCont = (
  arrComps,
  comp
) => {
  const { key } = comp
  , _max = arrComps.length;
  let i = 0;
  for(i; i<_max; i++) {
    if (arrComps[i].key === key) {
      return !0;
    }
  }
  return !1;
};

const HrzContainer = ({
  className,
  usePane,
  addAction
}) => {
  const [
    comps,
    setComps
  ] = useState([]);

  usePane(option => {
    if (option && option.Comp){
      setComps(prevComps => {
        const comp = option.Comp;
        return _isInCont(prevComps, comp)
          ? prevComps
          : [comp, ...prevComps];
      })
    }
  })

  return (
    <div className={crCn(CL_DIV, className)}>
      {comps}
    </div>
  );
};

export default HrzContainer

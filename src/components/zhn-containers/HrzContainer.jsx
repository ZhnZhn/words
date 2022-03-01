import { useState } from '../uiApi';
import useListen from '../hooks/useListen';
import crCn from '../zhn-utils/crCn';
//import PropTypes from 'prop-types'

const CL_DIV = "hrz-container";

const _isInCont = (arrComps, comp) => {
  const { key } = comp, _max = arrComps.length;
  let i = 0;
  for(i;i<_max;i++) {
    if (arrComps[i].key === key) {
      return true;
    }
  }
  return false;
};

const HrzContainer = ({
  className,
  store,
  addAction
}) => {
  const [comps, setComps] = useState([]);

  useListen(store, (actionType, option) => {
     if (actionType === addAction && option && option.Comp){
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

/*
HrzContainer.propTypes = {
  className: PropTypes.string
  store: PropTypes.shape({
    listen: PropTypes.func
  }),
  addAction: PropTypes.string
}
*/

export default HrzContainer

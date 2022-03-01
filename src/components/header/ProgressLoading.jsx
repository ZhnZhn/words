import { memo, useState } from '../uiApi';
import useListen from '../hooks/useListen';
import ProgressLine from '../zhn-atoms/ProgressLine';

const COLOR_LOADING = '#2f7ed8'
, COLOR_FAILED = '#ed5813'
, DF_STATE = {
  completed: 0,
  color: COLOR_LOADING
};

const _isNotShouldRerender = () => true;

const ProgressLoading = memo(({
  store,
  ACTIONS
}) => {
  const [state, setState] = useState(DF_STATE)
  , { completed, color } = state;

  useListen(store, (actionType) => {
      if (actionType === ACTIONS.LOADING){
        setState({ completed: 35, color: COLOR_LOADING })
      } else if (actionType === ACTIONS.LOADING_COMPLETE){
        setState({ completed: 100, color: COLOR_LOADING })
      } else if (actionType === ACTIONS.LOADING_FAILED){
        setState({ completed: 100, color: COLOR_FAILED })
      }
  }, 'listenLoading')

  return (
    <ProgressLine
       height={3}
       color={color}
       completed={completed}
    />
  );
}, _isNotShouldRerender);

export default ProgressLoading

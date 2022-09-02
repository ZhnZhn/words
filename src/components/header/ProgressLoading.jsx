import {
  memo,
  useState
} from '../uiApi';
import useListen from '../hooks/useListen';
import ProgressLine from '../zhn-atoms/ProgressLine';

const COLOR_LOADING = '#2f7ed8'
, COLOR_FAILED = '#ed5813'
, DF_STATE = [0, COLOR_LOADING];

const _isNotShouldRerender = () => true;

const ProgressLoading = memo(({
  store,
  ACTIONS
}) => {
  const [
    state,
    setState
  ] = useState(DF_STATE)
  , [
    completed,
    color
  ] = state;

  useListen(store, (actionType) => {
      if (actionType === ACTIONS.LOADING){
        setState([35, COLOR_LOADING])
      } else if (actionType === ACTIONS.LOADING_COMPLETE){
        setState([100, COLOR_LOADING])
      } else if (actionType === ACTIONS.LOADING_FAILED){
        setState([100, COLOR_FAILED])
      }
  }, 'listenLoading')

  return (
    <ProgressLine
       completed={completed}
       color={color}
    />
  );
}, _isNotShouldRerender);

export default ProgressLoading

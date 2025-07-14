import {
  memo,
  useState
} from '../uiApi';

import {
  IAT_LOAD_ITEM_LOADING,
  IAT_LOAD_ITEM_COMPLETED,
  IAT_LOAD_ITEM_FAILED
} from '../../flux/actions/ItemActions';
import {
  useLoading
} from '../../flux/itemStore';

import ProgressLine from '../zhn/ProgressLine';

const COLOR_LOADING = '#2f7ed8'
, COLOR_FAILED = '#ed5813';
//, COMPLETE_TIMEOUT_MLS = 450;

const _crState = (
  completed,
  color
) => [
  completed,
  color
];

const ProgressLoading = () => {
  const [
    state,
    setState
  ] = useState(
    ()=>_crState(0, COLOR_LOADING)
  )
  , [
    completed,
    color
  ] = state;


  useLoading(loading => {
    if (loading === IAT_LOAD_ITEM_LOADING) {
      setState(_crState(35, COLOR_LOADING))
    } else if (loading === IAT_LOAD_ITEM_COMPLETED) {
      setTimeout(
        () => setState(_crState(100, COLOR_LOADING)), 0
      )
    } else if (loading === IAT_LOAD_ITEM_FAILED) {
      setState(_crState(100, COLOR_FAILED))
    }
  })

  return (
    <ProgressLine
       color={color}
       completed={completed}
    />
  );
};

const _isNotShouldRerender = () => true;
export default memo(ProgressLoading, _isNotShouldRerender)

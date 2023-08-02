import { useWatchList as _useWl} from '../../flux/watch-list/watchListStore';
import useGroupOptions from './useGroupOptions';

const FN_NOOP = () => {};

const useWatchList = (
  rerender=FN_NOOP
) => {
  const [
    groupOptions,
    updateGroupOptions
  ] = useGroupOptions();

  _useWl(watchList => {
    if (watchList) {
      updateGroupOptions()
      rerender()
    }
  })
  return groupOptions;
}

export default useWatchList

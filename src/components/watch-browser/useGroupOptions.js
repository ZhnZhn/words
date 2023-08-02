import {
  getWatchGroups
} from '../../flux/watch-list/watchListStore';
import {
  useState,
  useCallback
} from '../uiApi';

const useGroupOptions = () => {
  const [
    groupOpions,
    setGroupOptions
  ] = useState(getWatchGroups)

  /*eslint-disable react-hooks/exhaustive-deps */
  , _updateGroupOptions = useCallback(() => {
    setGroupOptions(getWatchGroups())
  }, [])
  // getWatchGroups
  /*eslint-enable react-hooks/exhaustive-deps */

  return [
    groupOpions,
    _updateGroupOptions
  ];
};

export default useGroupOptions

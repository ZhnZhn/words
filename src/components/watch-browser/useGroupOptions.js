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
  , _updateGroupOptions = useCallback(() => {
    setGroupOptions(getWatchGroups())
  }, []);

  return [
    groupOpions,
    _updateGroupOptions
  ];
};

export default useGroupOptions

import {
  useState,
  useCallback
} from '../uiApi';

const useGroupOptions = (
  store
) => {
  const [
    groupOpions,
    setGroupOptions
  ] = useState(() => store.getWatchGroups())

  /*eslint-disable react-hooks/exhaustive-deps */
  , _updateGroupOptions = useCallback(() => {
    setGroupOptions(store.getWatchGroups())
  }, [])
  // store
  /*eslint-enable react-hooks/exhaustive-deps */
  
  return [
    groupOpions,
    _updateGroupOptions
  ];
};

export default useGroupOptions

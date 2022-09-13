import {
  useState,
  useCallback,
  setRefValue
} from '../uiApi';

const useListOptions = (
  store,
  refListCaption
) => {
  const [
    listOptons,
    setListOptions
  ] = useState([])

  /*eslint-disable react-hooks/exhaustive-deps */
  , updateListOptions = useCallback(groupCaption => {
    setListOptions(prevListOptions => {
      const listOptions = store.getWatchListsByGroup(groupCaption);
      if (prevListOptions !== listOptions) {
        setRefValue(refListCaption, null)
      }
      return listOptions;
    })
  }, []);
  // store
  /*eslint-enable react-hooks/exhaustive-deps */

  return [
    listOptons,
    setListOptions,
    updateListOptions
  ];
};

export default useListOptions

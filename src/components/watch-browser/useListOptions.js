import {
  useState,
  useCallback,
  setRefValue
} from '../uiApi';

const useListOptions = (
  getWatchListsByGroup,
  refListCaption
) => {
  const [
    listOptons,
    setListOptions
  ] = useState([])

  /*eslint-disable react-hooks/exhaustive-deps */
  , updateListOptions = useCallback(groupCaption => {
    setListOptions(prevListOptions => {
      const listOptions = getWatchListsByGroup(groupCaption);
      if (prevListOptions !== listOptions) {
        setRefValue(refListCaption, null)
      }
      return listOptions;
    })
  }, []);
  // getWatchListsByGroup
  /*eslint-enable react-hooks/exhaustive-deps */

  return [
    listOptons,
    setListOptions,
    updateListOptions
  ];
};

export default useListOptions

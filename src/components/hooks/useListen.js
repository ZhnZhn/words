import { useLayoutEffect } from '../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
const useListen = (store, onStore, propNameListen='listen') => {
  useLayoutEffect(() => {
    const unsubscribe = store[propNameListen](onStore)
    return unsubscribe;
  }, [])
  return store;
};
/*eslint-enable react-hooks/exhaustive-deps */

export default useListen

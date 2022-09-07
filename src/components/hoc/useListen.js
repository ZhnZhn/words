import { useEffect } from '../uiApi';

const useListen = (
  store,
  onStore
) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => store.listen(onStore), [])
  // store, onStore
  /*eslint-enable react-hooks/exhaustive-deps */
}

export default useListen

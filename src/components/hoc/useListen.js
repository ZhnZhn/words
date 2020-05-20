import { useEffect } from 'react'

const useListen = (store, onStore) => {
  useEffect(() => {
    const _unsubscribe = store.listen(onStore)
    return () => {
      _unsubscribe()
    }
  }, [])
}

export default useListen

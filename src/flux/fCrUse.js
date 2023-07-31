import useSubscribe from '../components/hooks/useSubscribe';

const fCrUse = (
  store,
  select
) => useSubscribe.bind(null, store, select);

export default fCrUse

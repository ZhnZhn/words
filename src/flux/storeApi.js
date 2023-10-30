export { createStore } from './zustand-lite';
export { bindTo } from '../utils/bindTo';

import {
  createStore,
  subscribeWithSelector
} from './zustand-lite';

import { bindTo } from '../utils/bindTo';

import useSubscribe from '../components/hooks/useSubscribe';

export const createStoreWithSelector = (
  crStore
) => createStore(
  subscribeWithSelector(crStore)
)

export const getStoreApi = store => [
  store.setState,
  store.getState
]

export const fCrStoreSlice = (
  slicePn,
  optionPn
) => [
  (value) => ({
    [slicePn]: optionPn
      ? {[optionPn]: value}
      : value
  }),
  state => state[slicePn]
];

export const fCrUse = (
  store,
  select
) => bindTo(useSubscribe, store, select);

export { createStore } from 'zustand';
export { bindTo } from '../utils/bindTo';

import { createStore } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { bindTo } from '../utils/bindTo';

import useSubscribe from '../components/hooks/useSubscribe';

export const createStoreWithSelector = (
  crStore
) => createStore(
  subscribeWithSelector(crStore)
)

export const fCrUse = (
  store,
  select
) => bindTo(useSubscribe, store, select);

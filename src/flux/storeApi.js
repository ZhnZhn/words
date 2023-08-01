export { createStore } from 'zustand';

import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const createWithSelector = (
  crStore
) => create(
  subscribeWithSelector((...args) => crStore(...args))
)

import { createStore } from 'zustand';

const settingStore = createStore(set => ({
  is: true,
  enableAutoSave: () => set({ is: true }),
  disableAutoSave: () => set({ is: false })
}));

const _getState = settingStore.getState;
const _state = _getState();

export const enableAutoSave = _state.enableAutoSave
export const disableAutoSave = _state.disableAutoSave
export const getIsAutoSave = () => _getState().is

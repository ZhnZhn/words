import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const selectMdOption = state => state.mdOption
export const selectBrowser = state => state.browser

export const useCompStore = create(
  subscribeWithSelector((set) => ({
    mdOption: void 0,
    showMd: (mdType, option) => set(() => ({
      mdOption: {
        ...option,
        modalDialogType: mdType
      }
    })),

    browser: { id: void 0},
    showBrowser: (id) => set({ browser: { id } })

  }))
);

const _compStore = useCompStore.getState();
export const showMd = _compStore.showMd
export const showBrowser = _compStore.showBrowser

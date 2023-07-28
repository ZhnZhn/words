import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import { crDialogOption } from './dialogFn';

export const selectMdOption = state => state.mdOption
export const selectDialog = state => state.dOption
export const selectBrowser = state => state.browser

const _dialogInit = {};

export const useCompStore = create(
  subscribeWithSelector((set) => ({
    mdOption: void 0,
    showMd: (mdType, option) => set(() => ({
      mdOption: {
        ...option,
        modalDialogType: mdType
      }
    })),

    dOption: void 0,
    showDialog: (itemConf) => set({
      dOption: crDialogOption(_dialogInit, itemConf)
    }),

    browser: { id: void 0},
    showBrowser: (id) => set({ browser: { id } })

  }))
);

const _compStore = useCompStore.getState();
export const showMd = _compStore.showMd
export const showDialog = _compStore.showDialog
export const showBrowser = _compStore.showBrowser

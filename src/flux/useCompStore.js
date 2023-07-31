import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import fCrUse from './fCrUse';
import { crDialogOption } from './dialogFn';
import {
  ABOUT_PANE_ID,
  crPaneOption
} from './paneFn';

export const selectMdOption = state => state.mdOption
export const selectDialog = state => state.dOption
export const selectPane = state => state.pOption
export const selectWatch = state => state.watch

const _dialogInit = {};
const DF_WATCH_PANE_ID = 'P_WD_W';

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
    showBrowser: (id) => set({ browser: { id } }),

    pOption: void 0,
    showPane: (itemConf) => set({
      pOption: crPaneOption(
         itemConf,
         useCompStore,
         selectPane,
         selectWatch
      )
    }),

    watch: void 0,
    clickWatchItem: (item) => set(() => {
      item.id = item.id || DF_WATCH_PANE_ID
      return { watch: { item }};
    })

  }))
);

const _selectBrowser = state => state.browser;
export const useBrowser = fCrUse(useCompStore, _selectBrowser)

const _compStore = useCompStore.getState();
export const showMd = _compStore.showMd
export const showDialog = _compStore.showDialog
export const showBrowser = _compStore.showBrowser

export const showPane = _compStore.showPane
export const showAbout = showPane.bind(null, { paneId: ABOUT_PANE_ID })

export const clickWatchItem = _compStore.clickWatchItem

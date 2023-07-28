import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import { crDialogOption } from './dialogFn';
import {
  crPaneOption,
  crAboutOption
} from './paneFn';

export const selectMdOption = state => state.mdOption
export const selectDialog = state => state.dOption
export const selectBrowser = state => state.browser

export const selectAbout = state => state.about
export const selectPane = state => state.pOption

export const selectWatch = state => state.watch

const _dialogInit = {};
const _paneInit = {};
let _isInitiedAbout = false;

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
    about: { is: true },
    showPane: (itemConf) => set({
       about: { is: false },
       pOption: crPaneOption(
         _paneInit,
         itemConf,
         useCompStore,
         selectPane,
         selectWatch
       )
    }),
    showAbout: () => set(() => {
      if (_isInitiedAbout) {
        return {
          about: { is: true }
        };
      }
      _isInitiedAbout = true
      return {
        pOption: crAboutOption(useCompStore, selectAbout)
      };
    }),

    watch: void 0,
    clickWatchItem: (item) => set(() => {
      item.id = item.id || DF_WATCH_PANE_ID
      return { watch: { item }};
    })

  }))
);

const _compStore = useCompStore.getState();
export const showMd = _compStore.showMd
export const showDialog = _compStore.showDialog
export const showBrowser = _compStore.showBrowser

export const showPane = _compStore.showPane
export const showAbout = _compStore.showAbout

export const clickWatchItem = _compStore.clickWatchItem

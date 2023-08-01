import { createWithSelector } from './storeApi';

import fCrUse from './fCrUse';
import { crDialogOption } from './dialogFn';
import {
  ABOUT_PANE_ID,
  crPaneOption
} from './paneFn';

export const selectMdOption = state => state.mdOption
const _selectDialog = state => state.dOption
const _selectPane = state => state.pOption;
const _selectBrowser = state => state.browser;
export const selectWatch = state => state.watch

const _dialogInit = {};
const DF_WATCH_PANE_ID = 'P_WD_W';

const _crStore = (set) => ({
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
       _selectPane,
       selectWatch
    )
  }),

  watch: void 0,
  clickWatchItem: (item) => set(() => {
    item.id = item.id || DF_WATCH_PANE_ID
    return { watch: { item }};
  })

})

export const useCompStore = createWithSelector(_crStore);

export const useBrowser = fCrUse(useCompStore, _selectBrowser)
export const usePane = fCrUse(useCompStore, _selectPane)
export const useDialog = fCrUse(useCompStore, _selectDialog)

const _compStore = useCompStore.getState();
export const showMd = _compStore.showMd
export const showDialog = _compStore.showDialog
export const showBrowser = _compStore.showBrowser

export const showPane = _compStore.showPane
export const showAbout = showPane.bind(null, { paneId: ABOUT_PANE_ID })

export const clickWatchItem = _compStore.clickWatchItem

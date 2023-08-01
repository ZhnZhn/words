import {
  createStoreWithSelector,
  fCrUse
} from './storeApi';

import { crDialogOption } from './dialogFn';
import {
  ABOUT_PANE_ID,
  crPaneOption
} from './paneFn';


const _dialogInit = {};
const DF_WATCH_PANE_ID = 'P_WD_W';

const _crStore = () => ({
  mdOption: void 0,
  dOption: void 0,
  browser: { id: void 0},
  pOption: void 0,
  watch: void 0,
})
, compStore = createStoreWithSelector(_crStore)
, _selectMdOption = state => state.mdOption
, _selectDialog = state => state.dOption
, _selectPane = state => state.pOption
, _selectBrowser = state => state.browser
, _selectWatch = state => state.watch
, _set = compStore.setState;

export const useBrowser = fCrUse(compStore, _selectBrowser)
export const usePane = fCrUse(compStore, _selectPane)
export const useDialog = fCrUse(compStore, _selectDialog)
export const useMdOption = fCrUse(compStore, _selectMdOption)

export const showMd = (mdType, option) => _set({
  mdOption: {
    ...option,
    modalDialogType: mdType
  }
})
export const showDialog = (itemConf) => _set({
  dOption: crDialogOption(_dialogInit, itemConf)
})
export const showBrowser = (id) => _set({
  browser: { id }
})

export const showPane = (itemConf) => _set({
  pOption: crPaneOption(
     itemConf,
     compStore,
     _selectPane,
     _selectWatch
  )
})
export const showAbout = showPane.bind(
  null,
  { paneId: ABOUT_PANE_ID }
)

export const clickWatchItem = (item) => _set(() => {
  item.id = item.id || DF_WATCH_PANE_ID
  return { watch: { item }};
})

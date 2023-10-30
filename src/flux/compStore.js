import {
  bindTo,
  createStoreWithSelector,
  fCrStoreSlice,
  getStoreApi,
  fCrUse
} from './storeApi';

import {
  ABOUT_PANE_ID,
  crPaneOption
} from './paneFn';

const DF_WATCH_PANE_ID = 'P_WD_W';

const [
  _crBrowser,
  _selectBrowser
] = fCrStoreSlice("browser", "id")

const _crStore = () => ({
  mdOption: void 0,
  ..._crBrowser(),
  pOption: void 0,
  watch: void 0,
})
, compStore = createStoreWithSelector(_crStore)
, _selectMdOption = state => state.mdOption
, _selectPane = state => state.pOption
, _selectWatch = state => state.watch
, _set = getStoreApi(compStore)[0];

export const useBrowser = fCrUse(compStore, _selectBrowser)
export const usePane = fCrUse(compStore, _selectPane)
export const useMdOption = fCrUse(compStore, _selectMdOption)

export const showMd = (mdType, option) => _set({
  mdOption: {
    ...option,
    modalDialogType: mdType
  }
})
export const showBrowser = (id) => _set(_crBrowser(id))

export const showPane = (itemConf) => _set({
  pOption: crPaneOption(
     itemConf,
     compStore,
     _selectPane,
     _selectWatch
  )
})
export const showAbout = bindTo(
  showPane,
  { paneId: ABOUT_PANE_ID }
)

export const clickWatchItem = (item) => _set(() => {
  item.id = item.id || DF_WATCH_PANE_ID
  return { watch: { item }};
})

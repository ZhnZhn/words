import {
  bindTo,
  createStoreWithSelector,
  fCrStoreSlice,
  fCrMsFromFn,
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

, [
  _crMdOption,
  _selectMdOption
] = fCrStoreSlice("mdOption")
, _crMdOptionType = fCrMsFromFn(_crMdOption, (mdType, option) => ({
  ...option,
  modalDialogType: mdType
}))

, [
  _crWatch,
  _selectWatch
] = fCrStoreSlice("watch")
, _crWatchItem = fCrMsFromFn(_crWatch, (item) => {
  item.id = item.id || DF_WATCH_PANE_ID
  return { item };
})

, [
  _crPane,
  _selectPane
] = fCrStoreSlice("pOption")

const _crStore = () => ({
  ..._crMdOption(),
  ..._crBrowser(),
  ..._crPane(),
  ..._crWatch()
})
, compStore = createStoreWithSelector(_crStore)

, _crPaneOption = fCrMsFromFn(_crPane, (itemConf) => crPaneOption(
   itemConf,
   compStore,
   _selectPane,
   _selectWatch
))

, _set = getStoreApi(compStore)[0];

export const useBrowser = fCrUse(compStore, _selectBrowser)
export const usePane = fCrUse(compStore, _selectPane)
export const useMdOption = fCrUse(compStore, _selectMdOption)

export const showMd = (mdType, option) => _set(
  _crMdOptionType(mdType, option)
)
export const showBrowser = (id) => _set(_crBrowser(id))
export const showPane = (itemConf) => _set(
  _crPaneOption(itemConf)
)

export const showAbout = bindTo(
  showPane,
  { paneId: ABOUT_PANE_ID }
)

export const clickWatchItem = (item) => _set(
  _crWatchItem(item)
)

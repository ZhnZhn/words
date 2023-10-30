import {
  fCrStoreSlice,
  createStore,
  getStoreApi
} from './storeApi';

const [
  _crIsAutoSaveEnabled,
  _selectIsAutoSaveEnables
] = fCrStoreSlice("is")

, _settingStore = createStore(() => ({
  ..._crIsAutoSaveEnabled(true)
}))
, [_set, _get] = getStoreApi(_settingStore);

export const enableAutoSave = () => _set(
  _crIsAutoSaveEnabled(true)
)
export const disableAutoSave = () => _set(
  _crIsAutoSaveEnabled(false)
)
export const getIsAutoSave = () => _selectIsAutoSaveEnables(_get())

import {
  fCrStoreSlice,
  createStore,
  getStoreApi,
  fCrSetSlice,
  bindTo
} from './storeApi';

const [
  _crIsAutoSaveEnabled,
  _selectIsAutoSaveEnables
] = fCrStoreSlice("is")

, _settingStore = createStore(() => ({
  ..._crIsAutoSaveEnabled(true)
}))
, [_set, _get] = getStoreApi(_settingStore);

const _setIsAutoSaveEnables = fCrSetSlice(_set, _crIsAutoSaveEnabled);
export const enableAutoSave = bindTo(_setIsAutoSaveEnables, true)
export const disableAutoSave = bindTo(_setIsAutoSaveEnables, false)

export const getIsAutoSave = () => _selectIsAutoSaveEnables(_get())

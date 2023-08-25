import {
  createStore,
  getStoreApi
} from './storeApi';

const _IS_AUTO_SAVE_ENABLED = 'is'
, _crIsAutoSaveEnabled = is => ({
  [_IS_AUTO_SAVE_ENABLED]: is
})
, _settingStore = createStore(() => ({
  ..._crIsAutoSaveEnabled(true)
}));

const [
  _set,
  _get
] = getStoreApi(_settingStore);

export const enableAutoSave = () => _set(
  _crIsAutoSaveEnabled(true)
)
export const disableAutoSave = () => _set(
  _crIsAutoSaveEnabled(false)
)
export const getIsAutoSave = () => _get()[_IS_AUTO_SAVE_ENABLED]

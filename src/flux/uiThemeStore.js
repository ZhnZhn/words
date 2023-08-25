import {
  createStore,
  getStoreApi
} from './storeApi';

import initialUiTheme  from '../components/styles/theme';

const UI_THEME = 'uiTheme'
const _crUiThemeSlice = (uiTheme) => ({
  [UI_THEME]: uiTheme
});

export const uiThemeStore = createStore(set => ({
  [UI_THEME]: initialUiTheme
}))
export const selectUiTheme = state => state[UI_THEME];

const _set = getStoreApi(uiThemeStore)[0];

export const setUiTheme = (uiThemeItem) => _set(state => {
  const _uiTheme = selectUiTheme(state);
  if (_uiTheme.getThemeName() === uiThemeItem.value) {
    return _crUiThemeSlice(_uiTheme);
  }
  _uiTheme.setThemeName(uiThemeItem.value)
  return _crUiThemeSlice({..._uiTheme});
})
